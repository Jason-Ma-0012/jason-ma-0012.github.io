function GenerateMySidebarItems(items) {

  // // Get current layer docs
  // var docs = new Array();
  // for (let index = 0; index < items.length; index++) {
  //   const item = items[index];
  //   if (item.type === 'doc') {
  //     docs.push({item: item, index: index});
  //   }
  // }

  // // If doc and category use the same label, merge doc and category
  // docs.map((doc) => {
  //   var IndexOfCategoryWidthSameLabel = items.findIndex((item) => {
  //     return (item.type === 'category' && item.label === doc.item.id);
  //   });
  //   if (IndexOfCategoryWidthSameLabel > -1) {
  //     items[IndexOfCategoryWidthSameLabel].link = { type: 'doc', id: doc.item.id };
  //     items[IndexOfCategoryWidthSameLabel].label = doc.item.label;
  //     items.splice(doc.index, 1);
  //   }
  // });
  
  
  // const result = items.map((item) => {
  //   if (item.type === 'category') {
  //     return {...item, items: GenerateMySidebarItems(item.items)};
  //   }
  //   return item;
  // });

  return items;
}

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MooaToon',
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
        title: 'MooaToon',
        logo: {
          alt: 'MooaToonLogo_64',
          src: 'img/MooaToonLogo_64.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'GettingStarted/GettingStarted',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/License', label: 'License', position: 'left'},
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
                to: '/docs/GettingStarted',
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
        copyright: `Copyright © ${new Date().getFullYear()} MooaToon, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      plugins: [
        [
          '@docusaurus/plugin-content-docs',
          {
            async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
              const sidebarItems = await defaultSidebarItemsGenerator(args);
              return GenerateMySidebarItems(sidebarItems);
            },
          },
        ],
      ],
    }),
};

module.exports = config;
