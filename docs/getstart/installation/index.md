# 代码结构

## 模块划分

bbs-go采用前后端分离设计，一共分为三个模块：

* server 使用go语言开发的服务端接口服务
* site 使用node + nuxt开发的前台页面服务
* admin 使用vue + arco 开发的后台管理系统

## 获取最新源码

:::tip
请先确保会使用Git，Git使用教程：https://www.google.com
:::

GitHub和Gitee上都有最新版本的源码，项目地址分别为：

* https://github.com/mlogclub/bbs-go
* https://gitee.com/mlogclub/bbs-go

以GitHub为例，执行下面命令将代码Clone到本地

```shell
git clone git@github.com:mlogclub/bbs-go.git
```

## 目录结构

```plain
.
├── LICENSE
├── README.md
├── docker-compose.yml
├── server                        // server服务端模块
│   ├── Dockerfile
│   ├── LICENSE
│   ├── Makefile
│   ├── README.md
│   ├── bbs-go.docker.yaml
│   ├── bbs-go.example.yaml
│   ├── cmd
│   │   ├── server
│   │   └── test
│   ├── go.mod
│   ├── go.sum
│   ├── internal
│   │   ├── cache
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── pkg
│   │   ├── repositories
│   │   ├── scheduler
│   │   ├── server
│   │   ├── services
│   │   └── spam
│   └── start.sh
├── site                          // site模块
│   ├── Dockerfile
│   ├── README.md
│   ├── ecosystem.config.js
│   ├── nuxt.config.ts
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── server
│   │   └── tsconfig.json
│   ├── src
│   │   ├── app.vue
│   │   ├── assets
│   │   ├── components
│   │   ├── composables
│   │   ├── error.vue
│   │   ├── layouts
│   │   ├── middleware
│   │   ├── pages
│   │   ├── public
│   │   ├── server
│   │   └── stores
│   └── tsconfig.json
├── admin                         // admin模块
│   ├── CNAME
│   ├── Dockerfile
│   ├── babel.config.js
│   ├── commitlint.config.js
│   ├── components.d.ts
│   ├── config
│   │   ├── plugin
│   │   ├── utils
│   │   ├── vite.config.base.ts
│   │   ├── vite.config.dev.ts
│   │   ├── vite.config.docker.ts
│   │   └── vite.config.prod.ts
│   ├── index.html
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── src
│   │   ├── App.vue
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── composables
│   │   ├── directive
│   │   ├── env.d.ts
│   │   ├── hooks
│   │   ├── layout
│   │   ├── locale
│   │   ├── main.ts
│   │   ├── router
│   │   ├── store
│   │   ├── types
│   │   ├── utils
│   │   └── views
└── └── tsconfig.json

```
