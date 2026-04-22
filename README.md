# Futbol Prode API Docs

Public developer site for the Fútbol Prode API, hosted at
[developers.futbolprode.com](https://developers.futbolprode.com/).

Built with [Docusaurus 2](https://docusaurus.io/) and
[`docusaurus-plugin-openapi-docs`](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs),
which renders the API reference from the OpenAPI spec exposed by the backend.

## Requirements

- Node.js 18+
- Yarn

## Install

```bash
yarn
```

## Local development

```bash
yarn start
```

Starts a dev server with hot reload. Most changes are reflected live without
restarting.

## Build

```bash
yarn build
```

Generates the static site into `build/`. Serve it locally with `yarn serve`.

## Updating the generated API docs

The API reference under `docs/api/` is **generated** from the OpenAPI spec
served by the [Futbol Prode API](https://github.com/futbolprode/api). Do not
edit those files by hand — regenerate them instead.

The flow has two steps:

1. **Fetch and rewrite the spec.** `scripts/fetch-spec.js` reads the spec
   from either:

   - `SPEC_PATH=/path/to/futbolprode.yaml`, or
   - `SPEC_URL=http://localhost:4000/docs-yaml` (default)

   and writes a cleaned-up copy to `openapi/futbolprode.yaml` (gitignored).
   The rewrite:

   - rewrites the verbose `ControllerName_methodName` operationIds NestJS
     emits as `tag_methodName` (e.g. `users_addFirebaseToken`), which keeps
     generated filenames unique across controllers (otherwise common method
     names like `findAll` collide between `/matches` and `/teams`),
   - sets each operation's `summary` to its **controller-relative path**
     (e.g. `/me/firebase-token` instead of `UsersController_addFirebaseToken`)
     so the sidebar/title stay readable.

2. **Generate the MDX** with `docusaurus-plugin-openapi-docs`, which reads
   `openapi/futbolprode.yaml` (configured in `docusaurus.config.js` under the
   id `futbolprode`) and writes to `docs/api/`.

To refresh the docs end-to-end:

1. Generate the spec in the `api` repo and point `SPEC_PATH` at it, or start
   the API locally so the spec is reachable at `http://localhost:4000/docs-yaml`
   (override with `SPEC_URL=...` if needed).
2. Run:

   ```bash
   SPEC_PATH=../api/openapi/futbolprode.yaml yarn update-api-docs
   ```

   which is shorthand for:

   ```bash
   SPEC_PATH=../api/openapi/futbolprode.yaml yarn fetch-spec \
     && yarn clean-api-docs futbolprode \
     && yarn gen-api-docs futbolprode
   ```

3. Review the diff under `docs/api/` and commit.

## Deploy

The site deploys to GitHub Pages (`organizationName: futbolprode`,
`projectName: api-docs`). With push access configured:

```bash
yarn deploy
```

Production syncs from the `api` repository automatically after successful
deploys there. The sync workflow downloads the latest `openapi-spec`
artifact uploaded by the `api` repo's CI, refreshes `docs/api`, and
publishes the site.
