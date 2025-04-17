# Node.js 环境安装

## 1. 简介

### Node.js 是什么？

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，允许在服务器端运行 JavaScript 代码。它是一个开源、跨平台的 JavaScript 运行时环境，使开发者能够使用 JavaScript 来编写服务器端的应用程序。

### 为什么 bbs-go 需要 Node.js？

在 bbs-go 项目中，site 和 admin 模块都是基于 Node.js 开发的：
- **site 模块**：使用 Nuxt.js 框架（基于 Node.js）构建的前台页面
- **admin 模块**：使用 Vue.js 和 Vite（基于 Node.js）构建的后台管理界面

因此，要开发或运行这两个模块，必须先安装 Node.js 环境。

### 版本要求

site 模块基于 **Node.js 20** 版本开发，因此建议安装 **Node.js 20.x** 或更高版本。最低要求是 Node.js 18.x LTS 版本。

## 2. 不同操作系统的安装方法

### Windows 系统安装

#### 方法一：使用官方安装包（推荐新手使用）

1. 访问 Node.js 官方网站：[https://nodejs.org/zh-cn/download/](https://nodejs.org/zh-cn/download/)
2. 下载 Windows 安装程序（.msi 文件），选择 LTS（长期支持）版本
3. 运行下载的 MSI 安装包，按照安装向导进行安装
4. 安装完成后，打开命令提示符（cmd）或 PowerShell，输入以下命令验证安装：
   ```
   node -v
   npm -v
   ```

#### 方法二：使用 NVM for Windows（适合需要管理多个 Node.js 版本的用户）

1. 访问 [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
2. 下载最新的 `nvm-setup.zip` 文件
3. 解压并运行安装程序
4. 安装完成后，打开新的命令提示符窗口
5. 执行以下命令安装 Node.js：
   ```
   nvm install 20.11.1   # 安装特定版本（以 20.11.1 为例）
   nvm use 20.11.1       # 使用该版本
   ```
6. 验证安装：
   ```
   node -v
   npm -v
   ```

### macOS 系统安装

#### 方法一：使用 Homebrew（推荐）

1. 如果尚未安装 Homebrew，请先安装：
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. 使用 Homebrew 安装 Node.js：
   ```bash
   brew install node@20
   ```

3. 将 Node.js 添加到 PATH：
   ```bash
   echo 'export PATH="/usr/local/opt/node@20/bin:$PATH"' >> ~/.zshrc
   # 如果使用 bash，则替换为 ~/.bash_profile
   source ~/.zshrc  # 或 source ~/.bash_profile
   ```

4. 验证安装：
   ```bash
   node -v
   npm -v
   ```

#### 方法二：使用官方安装包

1. 访问 Node.js 官方网站：[https://nodejs.org/zh-cn/download/](https://nodejs.org/zh-cn/download/)
2. 下载 macOS 安装程序（.pkg 文件）
3. 运行下载的 .pkg 文件，按照安装向导进行安装
4. 安装完成后，打开终端，输入以下命令验证安装：
   ```bash
   node -v
   npm -v
   ```

#### 方法三：使用 NVM（Node Version Manager）

1. 安装 NVM：
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   # 或
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```

2. 重新加载配置文件：
   ```bash
   source ~/.zshrc  # 如果使用 zsh
   # 或
   source ~/.bash_profile  # 如果使用 bash
   ```

3. 安装 Node.js：
   ```bash
   nvm install 20   # 安装最新的 Node.js 20.x 版本
   nvm use 20       # 使用该版本
   ```

4. 验证安装：
   ```bash
   node -v
   npm -v
   ```

### Linux 系统安装

#### Ubuntu/Debian 系统

1. 使用 apt 包管理器安装：
   ```bash
   # 添加 NodeSource 仓库
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   
   # 安装 Node.js
   sudo apt install -y nodejs
   ```

2. 验证安装：
   ```bash
   node -v
   npm -v
   ```

#### CentOS/RHEL 系统

1. 使用 yum 包管理器安装：
   ```bash
   # 添加 NodeSource 仓库
   curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
   
   # 安装 Node.js
   sudo yum install -y nodejs
   ```

2. 验证安装：
   ```bash
   node -v
   npm -v
   ```

#### 使用 NVM 安装（适用于所有 Linux 发行版）

1. 安装 NVM：
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   # 或
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```

2. 重新加载配置文件：
   ```bash
   source ~/.bashrc
   # 或
   source ~/.zshrc
   ```

3. 安装 Node.js：
   ```bash
   nvm install 20   # 安装最新的 Node.js 20.x 版本
   nvm use 20       # 使用该版本
   ```

4. 验证安装：
   ```bash
   node -v
   npm -v
   ```

## 3. 验证安装

安装完成后，请确保 Node.js 和 npm 都可以正常工作：

```bash
# 检查 Node.js 版本（应显示 20.x.x 或更高版本）
node -v

# 检查 npm 版本
npm -v

# 执行简单的 JavaScript 代码
node -e "console.log('Node.js 安装成功！')"
```

如果以上命令都能正常执行，则说明 Node.js 已成功安装。

## 4. 安装包管理器 (pnpm)

### pnpm 简介

pnpm 是一个快速、节省磁盘空间的包管理器，是 npm 的替代品。bbs-go 项目的 site 和 admin 模块都使用 pnpm 进行依赖管理。

### 安装 pnpm

使用 npm 安装 pnpm：

```bash
# 全局安装 pnpm
npm install -g pnpm
```

### 验证 pnpm 安装

```bash
# 查看 pnpm 版本
pnpm -v
```

## 5. 配置国内镜像源 (针对中国用户)

由于网络原因，中国大陆用户访问 npm 官方仓库可能会较慢，建议配置国内镜像源。

### npm 配置镜像源

```bash
# 配置淘宝 NPM 镜像
npm config set registry https://registry.npmmirror.com
```

### pnpm 配置镜像源

```bash
# 配置淘宝 NPM 镜像
pnpm config set registry https://registry.npmmirror.com
```

## 6. 常见问题与解决方案

### 版本冲突问题

**问题**：需要管理多个项目，它们分别需要不同版本的 Node.js

**解决方案**：
- 使用 NVM（Node Version Manager）或 NVM for Windows 来管理多个 Node.js 版本
- 使用命令 `nvm use <版本号>` 在不同项目中切换 Node.js 版本

### 权限问题

**问题**：在 Linux 或 macOS 上安装全局包时出现权限错误

**解决方案**：
1. 修改 npm 全局包的安装目录：
   ```bash
   npm config set prefix ~/.npm-global
   echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
   source ~/.bashrc
   ```

2. 或使用 NVM 安装 Node.js，避免权限问题

### 网络问题

**问题**：安装包时网络超时或失败

**解决方案**：
- 配置国内镜像源（见上文）
- 检查网络连接和防火墙设置
- 尝试使用 VPN 或代理

## 7. 推荐工具

### Node.js 版本管理工具

- **NVM**：适用于 Linux 和 macOS，[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- **NVM for Windows**：适用于 Windows，[https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

### 开发工具配置

**Visual Studio Code (VSCode)**：

1. 安装 VSCode：[https://code.visualstudio.com/](https://code.visualstudio.com/)
2. 推荐安装以下扩展：
   - ESLint：JavaScript 代码检查工具
   - Prettier：代码格式化工具
   - Volar：Vue 3 开发工具
   - JavaScript (ES6) Snippets：ES6 代码片段

## 8. 下一步

成功安装 Node.js 环境后，您可以继续安装和配置 bbs-go 的 site 模块：

1. [安装 site 模块](./install-site.html)
2. 配置并启动 site 模块

如果您还需要安装 admin 模块，请参考相关文档。