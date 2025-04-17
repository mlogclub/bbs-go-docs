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
│   ├── Dockerfile
│   ├── LICENSE
│   ├── Makefile
│   ├── README.md
│   ├── bbs-go.docker.yaml
│   ├── bbs-go.example.yaml
│   ├── cmd
│   │   ├── server
│   │   └── test
│   ├── go.mod
│   ├── go.sum
│   ├── internal
│   │   ├── cache
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── pkg
│   │   ├── repositories
│   │   ├── scheduler
│   │   ├── server
│   │   ├── services
│   │   └── spam
│   └── start.sh
├── site                          // site模块
│   ├── Dockerfile
│   ├── README.md
│   ├── ecosystem.config.js
│   ├── nuxt.config.ts
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── server
│   │   └── tsconfig.json
│   ├── src
│   │   ├── app.vue
│   │   ├── assets
│   │   ├── components
│   │   ├── composables
│   │   ├── error.vue
│   │   ├── layouts
│   │   ├── middleware
│   │   ├── pages
│   │   ├── public
│   │   ├── server
│   │   └── stores
│   └── tsconfig.json
├── admin                         // admin模块
│   ├── CNAME
│   ├── Dockerfile
│   ├── babel.config.js
│   ├── commitlint.config.js
│   ├── components.d.ts
│   ├── config
│   │   ├── plugin
│   │   ├── utils
│   │   ├── vite.config.base.ts
│   │   ├── vite.config.dev.ts
│   │   ├── vite.config.docker.ts
│   │   └── vite.config.prod.ts
│   ├── index.html
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── src
│   │   ├── App.vue
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── composables
│   │   ├── directive
│   │   ├── env.d.ts
│   │   ├── hooks
│   │   ├── layout
│   │   ├── locale
│   │   ├── main.ts
│   │   ├── router
│   │   ├── store
│   │   ├── types
│   │   ├── utils
│   │   └── views
└── └── tsconfig.json

```

## 安装概述

BBS-Go 的安装过程分为三个主要部分，分别对应三个模块：

1. Server 模块：提供后端 API 服务
2. Site 模块：提供前台页面展示
3. Admin 模块：提供后台管理界面

建议的安装顺序是先安装并配置 Server 模块，然后再安装 Site 和 Admin 模块。

### 环境要求

在开始安装前，请确保您的系统满足以下基本要求：

* Go 语言环境（推荐 Go 1.23+）
* Node.js 环境（推荐 Node 20+）
* MySQL 数据库（推荐 MySQL 8.0+）
* 可选：Redis、阿里云 OSS 或本地文件存储

### Server 模块安装简介

Server 模块是整个系统的基础，负责处理所有的业务逻辑和数据存储。主要安装步骤包括：

1. 安装 Go 语言环境
2. 配置 Go 代理（国内用户推荐）
3. 安装项目依赖
4. 配置数据库和其他服务
5. 编译和运行 Server 模块

详细安装步骤请参考：[Server 模块安装](./server/install-go.html)

### Site 模块安装简介

Site 模块是面向用户的前台界面，负责内容的展示和用户交互。主要安装步骤包括：

1. 安装 Node.js 环境
2. 安装 pnpm 包管理器
3. 安装项目依赖
4. 配置 Site 模块与 Server 的连接
5. 编译和运行 Site 模块

详细安装步骤请参考：[Site 模块安装](./site/install-node.html)

### Admin 模块安装简介

Admin 模块是后台管理系统，负责内容管理、用户管理等管理功能。主要安装步骤包括：

1. 安装 Node.js 环境
2. 安装 pnpm 包管理器
3. 安装项目依赖
4. 配置 Admin 模块与 Server 的连接
5. 编译和运行 Admin 模块

Admin 模块的配置主要是通过环境变量文件（`.env.development`、`.env.production`）来设置 API 地址：

```
VITE_API_BASE_URL=http://localhost:8082  # Server 模块地址
VITE_API_SITE_URL=http://localhost:3000  # Site 模块地址
```

### Docker 部署

除了手动安装外，BBS-Go 也支持使用 Docker 和 Docker Compose 进行部署。项目根目录下的 `docker-compose.yml` 文件提供了完整的部署配置。

详细的 Docker 部署步骤请参考：[Docker 部署](../docker.md)

## 常见问题

安装过程中可能遇到的常见问题：

1. 数据库连接问题：确保 MySQL 服务正常运行，且配置的用户名、密码和数据库名称正确。
2. 端口占用问题：默认情况下，Server 使用 8082 端口，Site 使用 3000 端口，如果端口被占用需要修改配置。
3. 文件上传问题：如果使用本地存储，确保配置的目录具有写入权限；如果使用阿里云 OSS，确保 AccessId 和 AccessSecret 配置正确。
4. 跨域问题：在开发环境中，确保 Server 模块的 AllowedOrigins 配置正确。

如果您在安装过程中遇到其他问题，请查看我们的问题反馈页面或在 GitHub 上提交 issue。
