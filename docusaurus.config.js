// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fútbol Prode API",
  tagline: "Documentation is being updated.",
  url: "https://developers.futbolprode.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "futbolprode", // Usually your GitHub org/user name.
  projectName: "api-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Temporary coming-soon mode. The docs, tutorial and blog sources are
        // intentionally kept in the repository so they can be restored later.
        docs: false,
        blog: false,
        // Keep the sample Markdown source but don't generate its route.
        pages: {
          include: ["**/*.{js,jsx,ts,tsx}"],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Fútbol Prode API",
        logo: {
          alt: "Fútbol Prode logo",
          src: "img/fp.png",
        },
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Tutorial",
        //         to: "/docs/intro",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Stack Overflow",
        //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //       },
        //       {
        //         label: "Discord",
        //         href: "https://discordapp.com/invite/docusaurus",
        //       },
        //       {
        //         label: "Twitter",
        //         href: "https://twitter.com/docusaurus",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Fútbol Prode.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  // The OpenAPI plugin and theme are intentionally disabled while the site is
  // in coming-soon mode. See COMING_SOON.md for the restoration checklist.
};

module.exports = config;
