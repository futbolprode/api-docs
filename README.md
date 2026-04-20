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

The plugin is configured in `docusaurus.config.js` under the id `futbolprode`,
pointing at:

```
specPath: http://localhost:4000/docs-yaml
outputDir: docs/api
```

So to refresh the docs:

1. Start the API locally so the spec is reachable at
   `http://localhost:4000/docs-yaml`.
2. Wipe the previously generated files:

   ```bash
   yarn clean-api-docs futbolprode
   ```

3. Regenerate them from the live spec:

   ```bash
   yarn gen-api-docs futbolprode
   ```

4. Review the diff under `docs/api/` and commit.

To regenerate everything in one go (all configured specs):

```bash
yarn clean-api-docs all && yarn gen-api-docs all
```

## Deploy

The site deploys to GitHub Pages (`organizationName: futbolprode`,
`projectName: api-docs`). With push access configured:

```bash
yarn deploy
```
