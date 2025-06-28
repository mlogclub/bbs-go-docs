import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BBS-GO",
  description: "BBS-GO - Simple dialogue, efficient interaction, new community experience!",
  ignoreDeadLinks: 'localhostLinks',
  lastUpdated: false,
  
  // 自动语言检测配置
  lang: 'en-US', // 默认语言
  
  // 配置多语言路由重写规则
  rewrites: {
    'en/:rest*': ':rest*'
  },
  
  // SEO和元信息
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script', {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?e2e4ad7ed76bae92afe7362f23efcea2";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],
  
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'BBS-GO',
      description: 'BBS-GO - Simple dialogue, efficient interaction, new community experience!',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/docs/guide' },
          { text: 'Contact', link: '/docs/contact' },
          { text: 'Community', link: 'https://bbs.bbs-go.com' },
        ],
        sidebar: {
          "/docs/": [
            {
              text: '🚀 Quick Start',
              link: '/docs/guide',
            },
            {
              text: '🏠 Project Overview',
              link: '/docs/introduction'
            },
            {
              text: '⚙️ Source Installation',
              link: '/docs/installation/index',
              items: [
                {
                  text: '📋 Code Structure',
                  link: '/docs/installation/index',
                },
                {
                  text: '🖥️ Backend Service',
                  collapsed: true,
                  items: [
                    {
                      text: 'Install Go',
                      link: '/docs/installation/server/install-go',
                    },
                    {
                      text: 'Service Deployment',
                      link: '/docs/installation/server/install',
                    }
                  ]
                },
                {
                  text: '🌐 Frontend Application',
                  collapsed: true,
                  items: [
                    {
                      text: 'Install Node.js',
                      link: '/docs/installation/site/install-node',
                    },
                    {
                      text: 'Application Deployment',
                      link: '/docs/installation/site/install-site',
                    }
                  ]
                },
                {
                  text: '🔧 Admin Panel',
                  collapsed: true,
                  items: []
                }
              ]
            },
            {
              text: '📞 Contact Us',
              link: '/docs/contact'
            },
            {
              text: '📝 Changelog',
              link: '/docs/changelog'
            },
            {
              text: '❓ FAQ',
              link: '/docs/qa'
            },
          ]
        },
        outline: {
          level: [2, 5],
          label: 'On this page'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'BBS-GO',
      description: 'BBS-GO 简洁对话，高效互动，社区新体验！',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '使用手册', link: '/zh/docs/guide' },
          { text: '联系我们', link: '/zh/docs/contact' },
          { text: '社区', link: 'https://bbs.bbs-go.com' },
        ],
        sidebar: {
          "/zh/docs/": [
            {
              text: '🚀 快速开始',
              link: '/zh/docs/guide',
            },
            {
              text: '🏠 项目概述',
              link: '/zh/docs/introduction'
            },
            {
              text: '⚙️ 源码安装',
              link: '/zh/docs/installation/index',
              items: [
                {
                  text: '📋 代码结构',
                  link: '/zh/docs/installation/index',
                },
                {
                  text: '🖥️ 后端服务',
                  collapsed: true,
                  items: [
                    {
                      text: '安装Go',
                      link: '/zh/docs/installation/server/install-go',
                    },
                    {
                      text: '服务部署',
                      link: '/zh/docs/installation/server/install',
                    }
                  ]
                },
                {
                  text: '🌐 前端应用',
                  collapsed: true,
                  items: [
                    {
                      text: '安装Node.js',
                      link: '/zh/docs/installation/site/install-node',
                    },
                    {
                      text: '应用部署',
                      link: '/zh/docs/installation/site/install-site',
                    }
                  ]
                },
                {
                  text: '🔧 管理后台',
                  collapsed: true,
                  items: []
                }
              ]
            },
            {
              text: '📞 联系我们',
              link: '/zh/docs/contact'
            },
            {
              text: '📝 更新日志',
              link: '/zh/docs/changelog'
            },
            {
              text: '❓ 常见问题',
              link: '/zh/docs/qa'
            },
          ]
        },
        outline: {
          level: [2, 5],
          label: '页面导航'
        }
      }
    }
  },

  themeConfig: {
    logo: "/images/logo.png",

    search: {
      provider: 'local'
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
      copyright: 'Copyright © ' + new Date().getFullYear().toString() + ' 武汉花贝科技有限公司 • <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2022019684号-3</a>'
    },

    editLink: {
      pattern: 'https://github.com/mlogclub/bbs-go-docs/edit/master/:path'
    },
  }
})
