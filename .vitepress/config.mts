import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BBS-GO",
  description: "BBS-GO 简洁对话，高效互动，社区新体验！",
  ignoreDeadLinks: 'localhostLinks',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.png",
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/' },
      { text: '演示', link: 'https://mlog.club' },
    ],

    search: {
      provider: 'local'
    },

    sidebar: {
      "/docs/": [
        {
          text: '简介',
          link: '/docs/'
        },
        {
          text: '安装文档',
          items: [
            {
              text: 'Docker安装',
              link: '/docs/getstart/docker.html'
            },
            {
              text: '手动安装',
              link: '/docs/getstart/installation.html'
            },
          ]
        },
        {
          text: '模块',
          items: [
            {
              text: '模块介绍',
              link: '/docs/modules/'
            },
            {
              text: 'server介绍',
              link: '/docs/modules/server.html'
            },
            {
              text: 'site介绍',
              link: '/docs/modules/site.html'
            },
            {
              text: 'admin介绍',
              link: '/docs/modules/admin.html'
            },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mlogclub/bbs-go' },
      {
        icon: {
          svg: '<svg t="1708946484857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4205" width="200" height="200"><path d="M512 512m-494.933333 0a494.933333 494.933333 0 1 0 989.866666 0 494.933333 494.933333 0 1 0-989.866666 0Z" fill="#C71D23" p-id="4206"></path><path d="M762.538667 457.045333h-281.088a24.4736 24.4736 0 0 0-24.439467 24.405334v61.098666c-0.034133 13.5168 10.922667 24.439467 24.405333 24.439467h171.1104c13.5168 0 24.439467 10.922667 24.439467 24.439467v12.219733a73.3184 73.3184 0 0 1-73.3184 73.3184h-232.209067a24.439467 24.439467 0 0 1-24.439466-24.439467v-232.174933a73.3184 73.3184 0 0 1 73.3184-73.3184h342.152533c13.482667 0 24.405333-10.922667 24.439467-24.439467l0.034133-61.098666a24.405333 24.405333 0 0 0-24.405333-24.439467H420.352a183.296 183.296 0 0 0-183.296 183.296V762.538667c0 13.482667 10.922667 24.439467 24.405333 24.439466h360.516267a164.9664 164.9664 0 0 0 165.000533-165.000533v-140.526933a24.439467 24.439467 0 0 0-24.439466-24.439467z" fill="#FFFFFF" p-id="4207"></path></svg>'
        },
        link: 'https://gitee.com/mlogclub/bbs-go',
      }
    ],

    footer: {
      message: 'Released under the GPL License.',
      copyright: 'Copyright © 2024 BBS-GO'
    }

  }
})
