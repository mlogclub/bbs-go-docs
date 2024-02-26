import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BBS-GO",
  description: "BBS-GO 简洁对话，高效互动，社区新体验！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo",
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档', link: '/docs/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mlogclub/bbs-go' }
    ]
  }
})
