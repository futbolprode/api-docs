# Temporary coming-soon mode

The public developer site currently serves a branded coming-soon page while
the documentation is being updated. The existing documentation, generated
OpenAPI pages, blog posts, and tutorial sources remain in this repository for
an easy restoration.

To restore the developer site:

1. Re-enable the `docs` and `blog` options in the classic preset in
   `docusaurus.config.js` (the previous `sidebarPath`, edit URLs, and OpenAPI
   components are available in repository history).
2. Restore the OpenAPI entries below in `docusaurus.config.js`:

   ```js
   plugins: [
     [
       "docusaurus-plugin-openapi-docs",
       {
         id: "openapi",
         docsPluginId: "classic",
         config: {
           futbolprode: {
             specPath: "openapi/futbolprode.yaml",
             outputDir: "docs/api",
             sidebarOptions: {
               groupPathsBy: "tag",
               categoryLinkSource: "tag",
             },
           },
         },
       },
     ],
   ],
   themes: ["docusaurus-theme-openapi-docs"],
   ```
3. Restore the default pages `include` glob in `docusaurus.config.js` if the
   sample Markdown route should return.
4. Restore the previous homepage copy/Documentation navbar link from
   `src/pages/index.js` if the docs CTA should return, and remove `src/pages/404.js`
   if the default Docusaurus not-found page is preferred.
5. Remove the temporary `if: ${{ false }}` condition from
   `.github/workflows/sync-from-api.yml`.

The generated API files under `docs/api/`, the tutorial files under `docs/`,
and the blog files under `blog/` are intentionally untouched. The Pages
deployment keeps `keep_files: false` explicit so old published routes are
removed on the next deployment.
