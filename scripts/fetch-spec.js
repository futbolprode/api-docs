/**
 * Fetches the live OpenAPI spec from the Futbol Prode API and rewrites it so
 * that operations show their controller-relative path as the title/sidebar
 * label (instead of the verbose `ControllerName_methodName` operationId that
 * NestJS Swagger emits by default).
 *
 * Output is consumed by `docusaurus-plugin-openapi-docs` (see
 * `docusaurus.config.js` → `specPath`).
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const R = require("ramda");

const SPEC_URL = process.env.SPEC_URL ?? "http://localhost:4000/docs-yaml";
const OUT = path.resolve(__dirname, "..", "openapi", "futbolprode.yaml");

const methodName = (operationId) =>
  operationId?.includes("_")
    ? operationId.split("_").slice(1).join("_")
    : operationId;

// Replace the NestJS `ControllerName_methodName` operationId with
// `tag_methodName` so the generated file slug stays unique per tag (e.g.
// `matches_findAll` and `teams_findAll` won't collide as just `find-all`).
const operationIdWithTag = (operationId, tag) => {
  const method = methodName(operationId);
  return method ? `${tag}_${method}` : operationId;
};

// Convert OpenAPI path-param syntax (`{id}`) to colon-style (`:id`).
// Required because the generated MDX inlines the summary as JSX children
// (`<h1>{summary}</h1>`), where `{id}` would be evaluated as a JS expression
// and crash the page with `id is not defined`.
const colonizePath = (p) => p.replace(/\{([^}]+)\}/g, ":$1");

const relativePath = (fullPath, tag) => {
  const base = `/${tag}`;
  const rel =
    fullPath === base
      ? "/"
      : fullPath.startsWith(`${base}/`)
        ? fullPath.slice(base.length)
        : fullPath;
  return colonizePath(rel);
};

const isOperation = (op) =>
  !R.isNil(op) && typeof op === "object" && Array.isArray(op.tags);

// Drop endpoints reserved for internal operators from the public docs.
const ADMIN_ROLE = "admin";
const isAdminOnly = (op) => op["x-futbolprode-required-role"] === ADMIN_ROLE;

const rewriteOperation = (fullPath, op) =>
  isOperation(op)
    ? isAdminOnly(op)
      ? null
      : {
          ...op,
          summary: relativePath(fullPath, op.tags[0]),
          ...(op.operationId
            ? { operationId: operationIdWithTag(op.operationId, op.tags[0]) }
            : {}),
        }
    : op;

const rewritePathItem = (fullPath, item) =>
  R.reject(
    R.isNil,
    R.mapObjIndexed((op) => rewriteOperation(fullPath, op), item),
  );

const hasAnyOperation = (item) => R.values(item).some(isOperation);

const SCHEMA_REF_PREFIX = "#/components/schemas/";

const refName = (ref) =>
  typeof ref === "string" && ref.startsWith(SCHEMA_REF_PREFIX)
    ? ref.slice(SCHEMA_REF_PREFIX.length)
    : null;

const circularStub = (name) => ({
  type: "object",
  description: `[Circular reference to ${name}]`,
});

const collectRefs = (node, acc = []) => {
  if (Array.isArray(node)) {
    node.forEach((child) => collectRefs(child, acc));
    return acc;
  }
  if (R.isNil(node) || typeof node !== "object") return acc;
  const target = refName(node.$ref);
  if (target) acc.push(target);
  Object.values(node).forEach((value) => collectRefs(value, acc));
  return acc;
};

const reachableFrom = (start, schemas) => {
  const visited = new Set();
  const stack = [start];
  while (stack.length > 0) {
    const current = stack.pop();
    if (visited.has(current) || !schemas[current]) continue;
    visited.add(current);
    collectRefs(schemas[current]).forEach((ref) => stack.push(ref));
  }
  return visited;
};

const reachabilityCache = new Map();
const cachedReachable = (target, schemas) => {
  if (!reachabilityCache.has(target))
    reachabilityCache.set(target, reachableFrom(target, schemas));
  return reachabilityCache.get(target);
};

const breakCyclesIn = (node, owner, schemas) => {
  if (Array.isArray(node))
    return node.map((child) => breakCyclesIn(child, owner, schemas));
  if (R.isNil(node) || typeof node !== "object") return node;

  const target = refName(node.$ref);
  if (
    target &&
    schemas[target] &&
    (target === owner || cachedReachable(target, schemas).has(owner))
  )
    return circularStub(target);

  return R.mapObjIndexed((value) => breakCyclesIn(value, owner, schemas), node);
};

const breakSchemaCycles = (spec) => {
  const schemas = spec.components?.schemas ?? {};
  reachabilityCache.clear();
  const sanitized = R.mapObjIndexed(
    (schema, name) => breakCyclesIn(schema, name, schemas),
    schemas,
  );
  return R.assocPath(["components", "schemas"], sanitized, spec);
};

const rewriteSpec = (spec) => {
  const paths = R.reject(
    R.complement(hasAnyOperation),
    R.mapObjIndexed(
      (item, fullPath) => rewritePathItem(fullPath, item),
      spec.paths ?? {},
    ),
  );

  // Tags referenced by no surviving operation should disappear from the
  // sidebar; the plugin groups by `op.tags[0]`, so it's enough to ensure no
  // operation references them. We also prune them from the root `tags` list
  // (when present) to keep the spec consistent.
  const survivingTags = new Set(
    R.values(paths).flatMap((item) =>
      R.values(item)
        .filter(isOperation)
        .flatMap((op) => op.tags),
    ),
  );
  const tags = (spec.tags ?? []).filter((t) => survivingTags.has(t.name));

  return breakSchemaCycles({
    ...spec,
    paths,
    ...(spec.tags ? { tags } : {}),
  });
};

const main = async () => {
  const res = await fetch(SPEC_URL);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch spec from ${SPEC_URL}: ${res.status} ${res.statusText}`,
    );
  }

  const spec = yaml.load(await res.text());
  const out = rewriteSpec(spec);

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, yaml.dump(out, { noRefs: true, lineWidth: 1000 }));

  console.log(`Wrote ${path.relative(process.cwd(), OUT)}`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
