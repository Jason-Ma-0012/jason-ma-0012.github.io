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
        blog: {
          blogTitle: 'News',
          postsPerPage: 'ALL',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Jason-Ma-0012/jason-ma-0012.github.io/tree/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Jason Ma.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts,//.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
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
      image: 'img/MooaToonSocialCard.jpg',
      navbar: {
        title: 'MooaToon',
        logo: {
          alt: 'MooaToonLogo_64',
          src: 'img/MooaToonLogo_64.png',
        },
        items: [
          { to: '/docs/GettingStarted',   label: 'Docs',      position: 'left' },
          { to: '/docs/Licence',          label: 'Licence',   position: 'left' },
          { to: '/docs/FAQ',              label: 'FAQ',       position: 'left' },
          { to: '/blog',                  label: 'News',      position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
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
              { to: '/docs/GettingStarted',   label: 'Getting Started',   },
              { to: '/docs/History',          label: 'History',           },
              { to: '/docs/Licence',          label: 'Licence',           },
              { to: '/docs/FAQ',            label: 'FAQ',               },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              { label: 'Email',           href: 'mailto:jasonma@mooatoon.com',},
              { label: 'Report Issues',   href: 'https://github.com/JasonMa0012/MooaToon/issues/new',},
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord',     href: 'https://discord.gg/rHmhgdtGfn',},
              { label: 'Twitter',     href: 'https://twitter.com/JasonMa0012',},
              { label: 'Youtube',     href: 'https://www.youtube.com/@jasonma0012',},
              { label: 'Bilibili',    href: 'https://space.bilibili.com/42463206',},
              { label: '知乎',        href: 'https://www.zhihu.com/people/blackcat1312',},
              { label: 'QQ群',        href: 'https://jq.qq.com/?_wv=1027&k=dn0yom7z',},
            ],
          },
          {
            title: 'References',
            items: [
              {
                label: 'Unity-Chan (UTJ)',
                href: 'https://unity-chan.com/',
              },
              {
                label: 'VRM4U (ruyo)',
                href: 'https://github.com/ruyo/VRM4U',
              },
              {
                label: 'Ultra Dynamic Sky (Everett Gunther)',
                href: 'https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky',
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
              {
                label: 'RSS',
                href: 'https://mooatoon.com/blog/rss.xml ',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jason Ma. Built with Docusaurus.`,
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


      // 图片缩放插件
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(27, 27, 29)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {}
      },

      // 搜索插件
      algolia: {
        // The application ID provided by Algolia
        appId: 'BO86VI8EYO',
  
        // Public API key: it is safe to commit it
        apiKey: 'b5f0d7a6db7bedd2523a4064a1b24930',
  
        indexName: 'mooatoon',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },

      // 评论插件
      giscus: {
        repo: 'Jason-Ma-0012/jason-ma-0012.github.io',
        repoId: 'R_kgDOI7WVjg',
        category: 'Announcements',
        categoryId: 'DIC_kwDOI7WVjs4CW6zl',
        theme: 'light',
        darkTheme: 'dark_dimmed',
      },
    }),
  
  plugins: [
    // 图片缩放插件
    require.resolve('docusaurus-plugin-image-zoom')
  ],

  clientModules: [
    // 评论的bug修复: https://www.alanwang.site/posts/blog-guides/docusaurus-comment
    require.resolve('./src/clientModules/routeModules.ts')
  ],
};


module.exports = config;
