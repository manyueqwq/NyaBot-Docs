/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guideSidebar: [
    {
      type: 'category',
      label: '入门',
      collapsible: false,
      items: [
          'guide/summary',
          'guide/quick-start'
      ]
    },
    {
      type: 'category',
      label: '部署',
      collapsible: false,
      items: [
          'guide/full-install',
          'guide/config',
          'guide/upgrade',
          'guide/troubleshoot',
          'guide/backup',
      ]
    },
    {
        type: 'category',
        label: 'GoCqHttp',
        collapsible: false,
        items: [
            'guide/gocqhttp-connect',
            'guide/gocqhttp-test',
        ]
    }
  ],
  extendSidebar: [
    {
        type: 'category',
        label: '通用',
        collapsible: false,
        items: [
            'extend/summary',
            'extend/library',
        ]
    }
  ]
};

module.exports = sidebars;
