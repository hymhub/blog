// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hyminghan',
  tagline: '我打算待会去码头整点薯条🍟',
  favicon: 'img/favicon.ico',
  url: 'https://hymhub.github.io',
  baseUrl: '/blog/',

  organizationName: 'hyminghan', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: {
          path: 'blog',
          editLocalizedFiles: false,
          blogTitle: 'hyminghan',
          blogDescription: 'hyminghan的博客',
          blogSidebarCount: 5,
          blogSidebarTitle: 'hyminghan的博客',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'hyminghan的博客',
            description: 'hyminghan的博客',
            copyright: 'hyminghan',
            language: undefined,
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
      image: 'img/logo.jpg',
      navbar: {
        title: 'hyminghan',
        logo: {
          alt: 'hyminghan',
          src: 'img/logo.jpg',
          href: '/',
          target: '_self',
          width: 32,
          height: 32,
          style: { border: '1px solid #ddd', borderRadius: '50%' },
        },
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'HTML',
            position: 'right',
            label: '前端文档',
          },
          {
            to: "blog",
            label: "博客记录",
            position: "right",
          },
          {
            href: 'https://cnblogs.com/hymenhan',
            label: '博客园',
            position: 'right',
          },
          {
            href: 'https://github.com/hymhub/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'WAE01D23EV',
    
        // // Public API key: it is safe to commit it
        apiKey: '5a73393b01d4337980670080f6fdb5ed',
    
        indexName: 'hymhubio',
      }
    }),
};

module.exports = config;
