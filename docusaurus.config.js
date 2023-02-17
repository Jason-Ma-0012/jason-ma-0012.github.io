// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mooa Toon',
  tagline: '',
  favicon: 'img/MooaToonLogo_32.png',

  // Set the production url of your site here
  url: 'https://mooatoon.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jason-Ma-0012', // Usually your GitHub org/user name.
  projectName: 'jason-ma-0012.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Jason-Ma-0012/jason-ma-0012.github.io/tree/main/',
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/Jason-Ma-0012/jason-ma-0012.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mooa Toon',
        logo: {
          alt: 'MooaToonLogo_64',
          src: 'img/MooaToonLogo_64.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {to: '/About', label: 'About', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            href: 'https://elysium.jason-ma.com',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/JasonMa0012/MooaToon',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/rHmhgdtGfn',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/JasonMa0012',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@jasonma0012',
              },
              {
                label: 'QQ频道',
                href: 'https://pd.qq.com/s/hahevtmwc',
              },
              {
                label: 'QQ群',
                href: 'https://jq.qq.com/?_wv=1027&k=dn0yom7z',
              },
              {
                label: '知乎',
                href: 'https://www.zhihu.com/people/blackcat1312',
              },
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/42463206',
              },
            ],
          },
          {
            title: 'License',
            items: [
              {
                label: 'License',
                to: 'https://elysium.jason-ma.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://elysium.jason-ma.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/JasonMa0012/MooaToon',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mooa Toon, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

module.exports = config;
