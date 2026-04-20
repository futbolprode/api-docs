/**
 * Post-processes the generated `docs/api/*.api.mdx` files to inject an "auth
 * chip" next to each operation's H1 title, based on the vendor extensions
 * emitted by the backend (`x-futbolprode-public`, `x-futbolprode-required-role`).
 *
 * The sidebar uses `sidebar_label` (the controller-relative path) and is left
 * untouched on purpose.
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const R = require("ramda");

const SPEC = path.resolve(__dirname, "..", "openapi", "futbolprode.yaml");
const DOCS_DIR = path.resolve(__dirname, "..", "docs", "api");

const kebab = (s) =>
  s
    .replace(/_/g, "-")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();

const chipMarkup = ({ isPublic, role }) =>
  isPublic
    ? '<span className={"api-auth-chip api-auth-chip--public"}>public</span>'
    : role
      ? `<span className={"api-auth-chip api-auth-chip--role api-auth-chip--role-${role}"}>${role}</span>`
      : null;

const isOperation = (op) =>
  !R.isNil(op) && typeof op === "object" && Array.isArray(op.tags);

const authMetaByFilename = (spec) => {
  const entries = R.pipe(
    R.values,
    R.chain(R.values),
    R.filter(isOperation),
    R.filter((op) => !R.isNil(op.operationId)),
    R.map((op) => [
      `${kebab(op.operationId)}.api.mdx`,
      {
        isPublic: op["x-futbolprode-public"] === true,
        role: op["x-futbolprode-required-role"],
      },
    ]),
    R.filter(([, info]) => info.isPublic || !R.isNil(info.role)),
  )(spec.paths ?? {});
  return new Map(entries);
};

const HEADING_RE = /<h1 className=\{"openapi__heading"\}>(.*?)<\/h1>/;
const EXISTING_CHIP_RE =
  /\s*<span className=\{"api-auth-chip[^"]*"\}>[^<]*<\/span>/g;

const withChip = (mdx, chip) =>
  mdx.replace(HEADING_RE, (_, title) => {
    const cleanTitle = title.replace(EXISTING_CHIP_RE, "");
    return `<h1 className={"openapi__heading"}>${cleanTitle} ${chip}</h1>`;
  });

const main = () => {
  const spec = yaml.load(fs.readFileSync(SPEC, "utf8"));
  const meta = authMetaByFilename(spec);
  let patched = 0;
  let skipped = 0;

  meta.forEach((info, filename) => {
    const filePath = path.join(DOCS_DIR, filename);
    if (!fs.existsSync(filePath)) {
      skipped++;
      return;
    }
    const chip = chipMarkup(info);
    if (!chip) return;

    const mdx = fs.readFileSync(filePath, "utf8");
    const next = withChip(mdx, chip);
    if (next !== mdx) {
      fs.writeFileSync(filePath, next);
      patched++;
    }
  });

  console.log(
    `Injected auth chips into ${patched} api docs${
      skipped > 0 ? ` (${skipped} expected files missing)` : ""
    }.`,
  );
};

main();
