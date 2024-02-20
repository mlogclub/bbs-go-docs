---
home: true
modules:
  - BannerBrand
  - Features
  # - MdContent
  - Footer
bannerBrand:
  bgImage: "/bg.svg"
  title: BBS-GO
  description: 简洁对话，高效互动，社区新体验！
  tagline: BBS-GO是一款以Go语言为主要开发语言的简洁、响应式布局的开源论坛系统。旨在提供高效、易用的在线社区交流平台，注重简洁设计和良好用户体验。通过Go语言驱动，保证高性能和稳定性，同时提供简洁的代码结构，方便用户二次开发和定制。
  buttons:
    - {
        icon: "LogoGithub",
        text: "GitHub",
        link: "https://github.com/mlogclub/bbs-go",
        type: "plain",
      }
    # - {
    #     icon: "LogoGithub",
    #     text: "Gitee",
    #     link: "https://gitee.com/mlogclub/bbs-go",
    #     type: "plain",
    #   }
    - {
        icon: "Forum",
        text: "社区",
        link: "https://mlog.club",
        # type: "plain",
      }
isShowTitleInHome: true
# actionText: About
# actionLink: /views/other/about

features:
- title: 简洁至上
  details: bbs-go 的设计理念是简洁至上，注重去除冗余和不必要的复杂性，以提供清晰直观的用户界面和流畅的操作体验。
- title: 响应式布局
  details: 采用响应式设计，确保用户无论在桌面、平板还是手机等设备上访问，都能获得一致且友好的界面展示，提高用户跨平台的可访问性。
# - title: Go语言驱动
#   details: 项目使用Go语言进行开发，充分发挥Go语言的优势，包括高效的并发模型、简单易读的语法以及快速的编译速度，从而提供高性能、稳定的系统。
- title: 高度可定制
  details: 提供清晰的代码结构和模块化的设计，使得用户可以轻松进行二次开发和定制，以满足不同用户群体的需求。
# - title: 社区交流平台
#   details: bbs-go 提供了丰富的社区功能，包括帖子发布、回复、用户私信等，为用户提供了一个便捷的交流和分享平台。
---

## 快速开始

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```
