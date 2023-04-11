// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NyaBot',
  tagline: '一个基于Go语言的聊天机器人框架',
  favicon: 'img/logo.jpg',

  // Set the production url of your site here
  url: 'https://nyabot.elyart.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Elyart-Network', // Usually your GitHub org/user name.
  projectName: 'NyaBot-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
        label: '简体中文',
      },
      en: {
        label: 'English',
      },
    }
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
            'https://github.com/Elyart-Network/NyaBot-Docs',
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
        title: 'NyaBot',
        logo: {
          alt: 'NyaBot Logo',
          src: 'img/logo.jpg',
          className: 'header-logo',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guideSidebar',
            position: 'left',
            label: '指南',
          },
          {
            label: '路线图',
            href: 'https://github.com/Elyart-Network/NyaBot/blob/main/README.md#nyabot-roadmap',
            position: 'left',
            target: '_blank',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/versions', label: '所有版本'}],
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'dropdown',
            label: '外部链接',
            position: 'right',
            items: [
              {
                label: '讨论社区',
                href: 'https://github.com/Elyart-Network/NyaBot/discussions',
              },
              {
                label: '代码仓库',
                href: 'https://github.com/Elyart-Network/NyaBot',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `版权所有 © ${new Date().getFullYear()} Elyart Network. 此网站使用 Docusaurus 构建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: 'nyabot-elyart',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
