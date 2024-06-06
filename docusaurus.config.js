// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs-site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs-site-demo.netlify.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Docs-Site", // Usually your GitHub org/user name.
  projectName: "Docs-Site", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/docs-site",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/docs-site",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.",
      navbar: {
        title: "Docs Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-icon.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "doc",
            sidebarId: "api",
            docId: "API/overview",
            position: "left",
            label: "API Documentation",
          },
          // {
          //   to: "docs/api/overview",
          //   label: "API Documentation",
          //   position: "left",
          // },
          { to: "references", label: "Reference", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },

          // GITHUB ICON
          {
            href: "https://github.com/docs-site",
            position: "right",
            // label: 'GitHub',
            className: "header--github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        // className:'--ifm-footer-background-color',
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "X(Twitter)",
                href: "https://x.com/docs-site",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/docs-site",
              },
            ],
          },
        ],
        copyright: `Made with ❤️ by Docs Site Demo Team.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
