# 安装 site 模块

## 1. site 模块简介

### 功能和作用

site 模块是 bbs-go 项目的前台网站部分，负责为用户提供内容展示和交互界面。它是用户直接访问的 Web 应用，包含以下主要功能：

- 用户注册、登录和个人中心
- 话题（帖子）的浏览、发布和互动
- 文章的展示和阅读
- 用户之间的关注和互动
- 站内搜索和内容发现

### 技术栈

site 模块基于现代前端技术栈构建：

- **Nuxt.js**：Vue.js 的服务端渲染框架，提供了优秀的 SEO 和性能
- **Vue.js**：渐进式 JavaScript 框架，用于构建用户界面
- **TypeScript**：JavaScript 的超集，添加了类型系统
- **Tailwind CSS**：实用优先的 CSS 框架，用于快速构建自定义设计
- **Pinia**：Vue.js 的状态管理库

### 系统要求

在安装 site 模块前，请确保您的系统满足以下要求：

- **Node.js**: 20.x 或更高版本（最低要求 18.x LTS）
- **内存**: 至少 2GB RAM（推荐 4GB 或更多）
- **磁盘空间**: 至少 1GB 可用空间
- **操作系统**: Windows、macOS 或 Linux

## 2. 准备工作

### 确认 Node.js 环境

在开始之前，请确保您已正确安装 Node.js 20+：

```bash
# 检查 Node.js 版本
node -v
```

如果您尚未安装 Node.js 或版本不符合要求，请参考 [Node.js 环境安装](./install-node) 进行安装。

### 确认 server 模块状态

site 模块需要与 server 模块通信，因此在安装 site 之前，请确保 server 模块已安装并正常运行：

```bash
# 检查 server 是否运行（示例，使用 curl 或浏览器访问 server 接口）
curl http://localhost:8082
```

如果 server 模块未安装或未运行，请参考 [Server 模块安装](../server/install) 进行安装。

### 获取源代码

如果您尚未获取 bbs-go 的源代码，可以使用 Git 克隆：

```bash
# 从 GitHub 克隆
git clone https://github.com/mlogclub/bbs-go.git

# 或从 Gitee 克隆（国内用户推荐）
git clone https://gitee.com/mlogclub/bbs-go.git
```

克隆完成后，进入项目的 site 目录：

```bash
cd bbs-go/site
```

## 3. 安装依赖

### 安装 pnpm

site 模块使用 pnpm 管理依赖，如果您尚未安装 pnpm，请先执行以下命令：

```shell
npm install -g pnpm
```

您可以通过以下命令验证 pnpm 是否安装成功：

```shell
pnpm -v
```

### 安装项目依赖

进入 site 目录后，执行以下命令安装所有依赖：

```shell
pnpm install
```

依赖安装可能需要几分钟时间，请耐心等待直到提示成功。

### 常见依赖安装问题

#### 网络问题导致安装失败

**问题**: 依赖下载缓慢或失败

**解决方案**: 配置国内镜像源

```shell
# 设置淘宝镜像
pnpm config set registry https://registry.npmmirror.com
# 然后重新安装
pnpm install
```

#### 依赖冲突

**问题**: 显示依赖冲突或版本不兼容错误

**解决方案**: 清理缓存并重新安装

```shell
pnpm store prune
pnpm install --force
```

#### 内存不足

**问题**: 在低内存环境下安装大量依赖可能导致内存不足错误

**解决方案**: 增加 Node.js 可用内存

```shell
# 在 Linux/macOS 上
NODE_OPTIONS=--max_old_space_size=4096 pnpm install

# 在 Windows 上
set NODE_OPTIONS=--max_old_space_size=4096
pnpm install
```

## 4. 配置 site 模块

### 环境配置文件

site 模块使用 `.env` 文件进行配置。源代码中提供了一个示例配置文件 `.env.example`，您需要根据实际环境创建对应的配置文件：

```shell
# 复制示例配置文件
# 开发环境
cp .env.example .env.local

# 生产环境
cp .env.example .env.production
```

### 配置参数详解

目前配置文件主要包含以下参数：

#### SERVER_URL

`SERVER_URL` 是 site 模块访问 server 模块的 API 地址，这是必须配置的参数：

- 开发环境通常设置为：`http://localhost:8082`
- 生产环境设置为您的实际 API 地址，例如：`https://api.yourdomain.com`

### 配置示例

开发环境配置示例 (`.env.local`)：

```
SERVER_URL=http://localhost:8082
```

生产环境配置示例 (`.env.production`)：

```
SERVER_URL=https://api.yourdomain.com
```

## 5. 开发环境运行

### 启动开发服务器

配置完成后，可以启动开发服务器：

```shell
pnpm dev
```

此命令会启动一个带有热重载功能的开发服务器，任何代码修改都会实时反映在浏览器中。

### 开发模式参数

您可以通过附加参数来调整开发服务器的行为：

```shell
# 指定端口（默认为 3000）
pnpm dev --port 3001

# 启用详细日志
pnpm dev --verbose
```

### 访问和测试

服务启动成功后，您可以通过浏览器访问：

```
http://localhost:3000
```

### 常见开发问题

#### 端口被占用

**问题**: 启动时提示端口 3000 已被占用

**解决方案**: 使用其他端口启动

```shell
pnpm dev --port 3001
```

#### 无法连接到 server 模块

**问题**: 页面加载但无法获取数据，控制台显示 API 请求错误

**解决方案**: 
1. 确认 server 模块是否正在运行
2. 检查 `.env.local` 中的 `SERVER_URL` 配置是否正确
3. 确认 server 模块的 CORS 设置允许来自开发服务器的请求

## 6. 构建和部署

### 构建生产版本

准备部署到生产环境时，需要构建优化版本：

```shell
# 使用生产环境配置构建
pnpm build
```

构建成功后，产物会生成在 `.output` 目录中。

### 部署方法

#### 使用 Node.js 直接运行

最简单的方法是使用 Node.js 直接运行构建后的应用：

```shell
# 生产模式启动
node .output/server/index.mjs
```

#### 使用 PM2 部署（推荐用于生产环境）

PM2 是一个流行的 Node.js 进程管理工具，可以保持应用持续运行：

1. 安装 PM2（如果尚未安装）:
   ```shell
   npm install -g pm2
   ```

2. 使用 PM2 启动应用:
   ```shell
   pm2 start .output/server/index.mjs --name bbs-go-site
   ```

3. 设置开机自启:
   ```shell
   pm2 startup
   pm2 save
   ```

项目中已包含 `ecosystem.config.js` 文件，您也可以直接使用该配置启动：

```shell
pm2 start ecosystem.config.js
```

#### 使用 Docker 部署

如果您熟悉 Docker，可以使用项目根目录下的 `Dockerfile` 和 `docker-compose.yml` 进行部署：

```shell
# 构建 Docker 镜像
docker build -t bbs-go-site -f Dockerfile .

# 运行容器
docker run -d -p 3000:3000 --name bbsgo-site bbs-go-site
```

#### 使用 Nginx 配置

在生产环境中，通常会使用 Nginx 作为反向代理，示例配置如下：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 多环境部署策略

如果您需要部署多个环境（如测试环境、预发布环境等），可以为每个环境创建对应的 `.env.{环境名}` 文件，然后在构建时指定环境：

```shell
# 构建测试环境
NODE_ENV=test pnpm build

# 构建预发布环境
NODE_ENV=staging pnpm build
```

### 部署后的验证

部署完成后，请通过以下步骤验证部署是否成功：

1. 访问网站首页，确认页面能正常加载
2. 测试注册/登录功能
3. 测试发布内容和互动功能
4. 检查页面加载速度和响应时间

## 7. 与其他模块的集成

### 与 server 模块的集成

site 模块主要通过 HTTP API 与 server 模块通信，确保：

1. `SERVER_URL` 配置正确指向 server 模块的地址
2. server 模块的 CORS 配置允许来自 site 模块的请求
3. 如果使用 Nginx 等反向代理，确保正确配置了路由规则

### 与 admin 模块的关系

site 和 admin 是两个独立的前端应用，它们共享同一个 server 后端：

- site 模块：面向最终用户的前台界面
- admin 模块：面向管理员的后台管理界面

两个模块可以部署在同一服务器的不同端口，或者不同的子域名下。

## 8. 常见问题与排障

### 白屏或页面加载失败

**问题**: 访问页面时显示白屏或无法加载

**可能原因与解决方案**:
- 构建问题：尝试重新执行 `pnpm build`
- 服务未正确启动：检查 Node.js 进程是否在运行
- 端口冲突：更改端口或停止占用端口的其他应用

### API 请求错误

**问题**: 页面加载但无法获取数据

**可能原因与解决方案**:
- SERVER_URL 配置错误：检查环境变量配置
- server 模块未运行：确保 server 模块正常运行
- CORS 问题：检查 server 模块的 CORS 配置
- 网络问题：检查网络连接和防火墙设置

### 样式加载问题

**问题**: 页面结构加载但样式缺失

**可能原因与解决方案**:
- 构建不完整：重新执行 `pnpm build`
- 静态资源路径问题：检查 Nginx 配置是否正确代理了静态资源

### 内存泄漏

**问题**: 长时间运行后内存占用逐渐增加

**解决方案**:
- 使用 PM2 设置自动重启策略：`pm2 start --max-memory-restart 1G`
- 定期重启服务：`pm2 restart bbs-go-site --cron "0 3 * * *"`（每天凌晨 3 点重启）

## 9. 目录结构说明

```
site/
├── public/            # 静态资源目录
├── src/               # 源代码目录
│   ├── assets/        # 资源文件（CSS、图片等）
│   ├── components/    # Vue 组件
│   ├── layouts/       # 布局组件
│   ├── pages/         # 页面组件（自动生成路由）
│   ├── composables/   # 可复用的组合式函数
│   ├── server/        # 服务端代码
│   └── stores/        # 状态管理
├── .env.example       # 环境变量示例
├── nuxt.config.ts     # Nuxt 配置文件
└── package.json       # 项目配置和依赖
```
