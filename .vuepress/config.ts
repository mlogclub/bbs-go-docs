import { defineUserConfig } from "vuepress";
// import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "BBS-GO",
  description: "简洁对话，高效互动，社区新体验！",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "mlogclub",
    authorAvatar: "/head.png",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    // docsBranch: "main",
    // docsDir: "example",
    lastUpdatedText: "",
    series: {
      "/docs": [
        {
          text: "快速上手",
          children: [
            "/docs/getstart/home",
            "/docs/getstart/installation",
          ]
        },
        {
          text: "模块",
          children: [
            "/docs/modules/home",
            "/docs/modules/server",
            "/docs/modules/site",
            "/docs/modules/admin",
          ]
        },
      ],
    },
    navbar: [
      {
        icon: 'Home',
        text: "首页",
        link: "/"
      },
      {
        icon: 'Document',
        text: "文档",
        link: "/docs/getstart/home",
      },
      {
        icon: 'Forum',
        text: "社区",
        link: "https://mlog.club",
      },
      {
        icon: 'LogoGithub',
        text: "GitHub",
        link: "https://github.com/mlogclub/bbs-go",
      },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 2024，从心出发，共筑简洁社区新时代！`,
    //       style: "font-size: 13px;",
    //     },
    //     // {
    //     //   type: "hr",
    //     // },
    //     {
    //       type: "title",
    //       content: "交流群/联系我",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <img src="/images/qq.png" style="width: 200px;"/>
    //       `,
    //       style: "font-size: 12px;",
    //     },
    //   ],
    // },
  }),
});
