# Server 模块安装

::: warning 提示
开始之前请确保正确安装 Go 语言开发环境，并设置已经设置好环境变量。安装教程详见：<https://www.google.com>
:::

## 前置条件

在开始安装 server 模块之前，请确保您的开发环境满足以下条件：

1. **Go 语言环境**：推荐使用 Go 1.23 或更高版本
   - 可以在终端/命令提示符中输入 `go version` 检查是否正确安装及版本信息
   - 如果未安装或版本过低，请参考[这篇文档](./install-go.html)进行安装

2. **MySQL 数据库**：推荐使用 MySQL 8.0 或更高版本
   - 确保 MySQL 服务已启动
   - 了解 MySQL 的用户名、密码和连接地址

3. **Git**：用于获取源代码
   - 可以在终端/命令提示符中输入 `git --version` 检查是否正确安装

## 获取源代码

如果您还没有获取 bbs-go 的源代码，可以使用 Git 将代码克隆到本地：

```shell
# 从 GitHub 克隆
git clone https://github.com/mlogclub/bbs-go.git

# 或从 Gitee 克隆（国内用户推荐）
git clone https://gitee.com/mlogclub/bbs-go.git
```

克隆完成后，进入项目的 server 目录：

```shell
cd bbs-go/server
```

## 配置 Go 环境（可选但推荐）

为了提高 Go 模块下载的速度，特别是对于中国大陆的用户，建议配置 Go 代理：

```shell
# 设置 GOPROXY 环境变量
go env -w GOPROXY=https://goproxy.cn,direct

# 启用 Go Module 模式
go env -w GO111MODULE=on
```

## 安装依赖

server 模块的依赖使用`go mod`进行管理，进入 server 目录，执行下面命令安装依赖：

```shell
# 下载所有依赖包（-x 参数会显示下载进度）
go mod download -x
```

如果遇到依赖下载问题，可以尝试：

```shell
# 整理并清理依赖
go mod tidy
```

## 编译

依赖安装成功后，可以通过以下两种方式进行编译：

### 直接使用 go build（新手推荐）

最简单的编译方式是直接使用 `go build` 命令：

```shell
# 在 Windows 系统中
go build -o bbs-go.exe main.go

# 在 macOS/Linux 系统中
go build -o bbs-go main.go
```

> **注意**：
> - `-o` 参数指定生成的可执行文件名称
> - 在 Windows 系统中生成的文件带有 `.exe` 后缀

### 使用 Makefile（需要了解 make 工具）

项目提供了 Makefile 来简化构建过程，你可以执行：

```shell
# 构建当前平台的可执行文件
make build
```

如果需要在 Linux 环境下运行，可以使用：

```shell
# 构建 Linux 平台的可执行文件
make buildlinux
```

> **提示**：
> - 在 Windows 系统中，需要安装 `make` 工具才能使用上述命令
> - Windows 用户可以通过 [MinGW](http://www.mingw.org/)、[Cygwin](https://www.cygwin.com/) 或 [Git Bash](https://gitforwindows.org/) 安装 `make` 工具

编译成功后，会在当前目录生成二进制可执行文件 `bbs-go` （Windows 系统为`bbs-go.exe`）。

除了构建命令外，Makefile 还提供了以下常用命令：

```shell
make run        # 直接运行应用（相当于 go run main.go）
make test       # 运行测试
make clean      # 清理生成的二进制文件
```

## 数据库准备

Server 需要 MySQL 数据库支持，请先安装并启动 MySQL 服务（推荐 MySQL 8.0+）。

### 创建数据库

首先需要创建一个空的数据库。您可以使用 MySQL 命令行或图形化工具（如 MySQL Workbench、Navicat 等）来创建。

使用命令行创建数据库的步骤：

1. 连接到 MySQL 服务器：

   ```shell
   # MySQL 命令行连接（根据实际情况替换用户名）
   mysql -uroot -p
   
   # 输入密码后回车
   ```

2. 创建数据库：

   ```sql
   # 在 MySQL 控制台中执行下面的 SQL 命令
   CREATE DATABASE bbsgo_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
   
   # 确认数据库创建成功
   SHOW DATABASES;
   
   # 退出 MySQL 控制台
   EXIT;
   ```

> **中文支持说明**：
> - 使用 `utf8mb4` 字符集和 `utf8mb4_general_ci` 校对规则可以确保数据库正确支持中文和 Emoji 等特殊字符
> - `utf8mb4` 是 MySQL 中真正的 UTF-8 实现，支持完整的 Unicode 字符集

### 数据库初始化

系统集成了自动数据库迁移功能，**您不需要手动执行任何 SQL 脚本**。只需创建好空数据库，并在配置文件中正确配置数据库连接信息，系统在首次启动时会自动完成以下操作：

1. 创建所有必要的数据库表结构
2. 初始化基础数据（如系统设置、默认节点等）
3. 创建默认管理员账号

初始化后，系统会创建默认管理员账号：
- 用户名：admin
- 密码：123456

> **安全提示**：
> - 系统初始化完成后，请尽快登录后台修改默认管理员密码
> - 默认密码在生产环境中存在安全风险

## 配置

系统提供了配置示例文件：`bbs-go.example.yaml`，需要将该文件复制并重命名为 `bbs-go.yaml`，然后修改其中的配置项。

### 创建配置文件

```shell
# 复制配置文件（Windows 系统使用 copy 命令）
cp bbs-go.example.yaml bbs-go.yaml

# 编辑配置文件（可使用任何文本编辑器）
# 例如在 Linux/macOS 中使用 vi
vi bbs-go.yaml  

# 或使用 nano（对新手更友好）
nano bbs-go.yaml

# Windows 中可以使用记事本或其他编辑器
# notepad bbs-go.yaml
```

### 配置文件详解

以下是配置文件的主要部分及其含义：

```yaml
Port: 8082 # 服务监听端口，如果 8082 被占用，可以改为其他端口
BaseUrl: http://localhost:3000 # 网站域名，用于生成完整 URL
IpDataPath: # IP数据文件路径，留空则使用当前目录下的 ip2region.xdb 文件
AllowedOrigins:
  - "*" # 允许的跨域请求来源，"*" 表示允许所有来源

# 日志配置
Logger:
  Filename: /data/logs/bbs-go.log # 日志文件的位置
  MaxSize: 100 # 文件最大尺寸（以MB为单位）
  MaxAge: 10 # 保留旧文件的最大天数
  MaxBackups: 10 # 保留的最大旧文件数量

# 数据库连接
DB:
  # 数据库连接字符串，格式为：用户名:密码@tcp(主机名:端口)/数据库名?参数
  Url: username:password@tcp(localhost:3306)/bbsgo_db?charset=utf8mb4&parseTime=True&loc=Local
  MaxIdleConns: 50 # 连接池中的最大空闲连接数
  MaxOpenConns: 200 # 数据库的最大打开连接数

# 上传配置
Uploader:
  # 启用上传方式：Local（本地存储）或 Oss（阿里云对象存储）
  Enable: Oss
  # 阿里云oss配置（仅当 Enable: Oss 时有效）
  AliyunOss:
    Host: # OSS 访问域名，如 https://your-bucket.oss-cn-beijing.aliyuncs.com
    Bucket: # OSS 存储空间名称
    Endpoint: # OSS 区域端点，如 oss-cn-beijing.aliyuncs.com
    AccessId: # 阿里云 AccessKey ID
    AccessSecret: # 阿里云 AccessKey Secret
    StyleSplitter: # 图片样式分隔符，如 ! 或 -
    StyleAvatar: # 头像图片样式名称
    StylePreview: # 预览图片样式名称
    StyleSmall: # 小图样式名称
    StyleDetail: # 详情图片样式名称
  # 本地文件上传配置（仅当 Enable: Local 时有效）
  Local:
    Host: https://st.mlog.club/ # 上传文件访问域名
    Path: /data/www/st.mlog.club # 上传文件保存目录，确保该目录存在且有写入权限

# 邮件服务器配置，用于邮件通知
Smtp:
  Host: smtp.qq.com # SMTP 服务器地址
  Port: 25 # SMTP 服务器端口
  Username: # 邮箱账号
  Password: # 邮箱密码或授权码
  SSL: true # 是否使用 SSL 加密连接

# 百度SEO相关配置
# 文档：https://ziyuan.baidu.com/college/courseinfo?id=267&page=2#h2_article_title14
BaiduSEO:
  Site: # 百度站长平台的站点地址
  Token: # 百度站长平台的推送 Token

# 神马搜索SEO相关
# 文档：https://zhanzhang.sm.cn/open/mip
SmSEO:
  Site: # 神马站长平台的站点地址
  UserName: # 神马站长平台的用户名
  Token: # 神马站长平台的推送 Token

# 搜索配置
Es:
  Url: http://127.0.0.1:9200 # ElasticSearch 服务地址
  Index: bbsgo_topic_1 # 索引名称
```

### 重要配置说明

1. **数据库配置（DB.Url）**：
   - 替换 `username` 和 `password` 为实际的 MySQL 用户名和密码
   - 替换 `localhost:3306` 为你的 MySQL 服务器地址和端口
   - 替换 `bbsgo_db` 为你创建的数据库名称
   
   例如：`DB.Url: root:123456@tcp(localhost:3306)/bbsgo_db?charset=utf8mb4&parseTime=True&loc=Local`

2. **文件上传配置（Uploader）**：
   - 如果使用阿里云 OSS，将 `Enable` 设置为 `Oss`，并配置 `AliyunOss` 部分
   - 如果使用本地存储，将 `Enable` 设置为 `Local`，并配置 `Local` 部分
   - 新手推荐使用本地存储模式，配置示例：
     ```yaml
     Uploader:
       Enable: Local
       Local:
         Host: http://localhost:8082/upload  # 上传文件访问域名
         Path: ./upload  # 相对路径，指向 server 目录下的 upload 文件夹
     ```
   - 本地存储模式下，需要确保 `Path` 目录存在且具有写入权限
   - Windows 用户注意：路径分隔符可以使用 `/` 或 `\\`，推荐使用 `/`

3. **日志配置（Logger）**：
   - Windows 用户需要修改 `Filename` 路径，例如：`C:/logs/bbs-go.log`
   - 确保指定的日志目录存在且具有写入权限
   - 可以使用相对路径，例如：`./logs/bbs-go.log`

4. **网站基本信息**：
   - `Port`：服务监听端口，如果 8082 被占用，可以改为其他端口
   - `BaseUrl`：在开发环境中可以设置为 `http://localhost:8082`

## 环境变量

系统支持通过环境变量指定配置文件路径和运行环境，这对于在不同环境中部署特别有用：

```shell
# 指定配置文件路径（默认读取当前目录下的 bbs-go.yaml）
BBSGO_CONFIG=/path/to/config.yaml

# 指定运行环境（开发环境 dev，生产环境 prod）
BBSGO_ENV=dev
```

### 在不同操作系统中设置环境变量

#### Windows 系统

临时设置（仅在当前命令行窗口有效）：

```
set BBSGO_ENV=dev
set BBSGO_CONFIG=C:\path\to\bbs-go.yaml
```

#### Linux/macOS 系统

临时设置（仅在当前终端会话有效）：

```
export BBSGO_ENV=dev
export BBSGO_CONFIG=/path/to/bbs-go.yaml
```

在生产环境中，推荐使用 `BBSGO_ENV=prod` 启动服务。

## 启动服务

启动前请确保：

1. MySQL 数据库已创建并正确运行
2. 配置文件 `bbs-go.yaml` 已创建并正确配置
3. 数据库连接信息配置正确

### 开发环境启动

在 `server` 目录执行下面命令启动服务：

```shell
# 方法一：直接运行（推荐新手使用）
go run main.go

# 方法二：使用 Makefile
make run
```

启动过程中，您将看到类似下面的日志输出：

```
[INFO] 2023/11/17 12:34:56 Server starting...
[INFO] 2023/11/17 12:34:56 Database connection established
[INFO] 2023/11/17 12:34:56 Running database migrations...
[INFO] 2023/11/17 12:34:57 Database migrations completed
[INFO] 2023/11/17 12:34:57 Server started successfully on port 8082
```

如果看到 "Server started successfully" 的消息，说明服务已成功启动。

### 生产环境启动

在生产环境中，推荐先编译成可执行文件，然后部署运行：

1. 编译生成可执行文件
   
   ```shell
   # 方法一：使用 make 命令
   make build
   
   # 方法二：直接使用 go build
   go build -o bbs-go main.go
   ```

2. 启动服务
   
   ```shell
   # 方法一：直接启动
   BBSGO_ENV=prod ./bbs-go
   
   # 方法二：使用 PM2 管理进程（需要先安装 Node.js 和 PM2）
   BBSGO_ENV=prod pm2 start ./bbs-go --name bbs-go-server
   ```

#### 使用 PM2 管理服务（推荐生产环境使用）

[PM2](https://pm2.keymetrics.io/) 是一个流行的 Node.js 进程管理工具，也可用于管理 Go 等其他类型的应用。使用 PM2 的好处是可以自动重启服务、日志管理和进程监控。

安装 PM2：

```shell
# 安装 Node.js 后执行
npm install -g pm2
```

常用 PM2 命令：

```shell
# 启动服务
pm2 start ./bbs-go --name bbs-go-server

# 查看服务状态
pm2 status

# 查看日志
pm2 logs bbs-go-server

# 重启服务
pm2 restart bbs-go-server

# 停止服务
pm2 stop bbs-go-server

# 设置开机自启
pm2 startup
pm2 save
```

## 验证安装

服务启动后，可以通过访问以下地址验证安装是否成功：

```
http://localhost:8082
```

如果返回 JSON 格式的 API 响应，说明 Server 模块安装成功。

您也可以使用以下命令测试 API 是否正常：

```shell
# Linux/macOS 使用 curl
curl http://localhost:8082/api/user/current

# Windows 可以使用 PowerShell
Invoke-WebRequest -Uri http://localhost:8082/api/user/current
```

## 常见问题

### 1. 编译失败

**问题**：执行 `go build` 时出错

**可能的解决方案**：
- 检查 Go 语言环境是否正确安装：执行 `go version` 确认
- 确保 Go 版本符合要求（1.23+）
- 尝试清理并重新下载依赖：`go mod tidy && go mod download`
- 检查是否有防火墙或代理问题影响依赖下载

### 2. 依赖下载失败

**问题**：执行 `go mod download` 时下载超时或失败

**可能的解决方案**：
- 配置 Go 代理：`go env -w GOPROXY=https://goproxy.cn,direct`
- 检查网络连接，特别是对 GitHub 等国外站点的访问
- 尝试使用 VPN 或代理服务器

### 3. 数据库连接失败

**问题**：启动服务时报数据库连接错误

**可能的解决方案**：
- 确认 MySQL 服务正在运行
- 检查数据库用户名、密码是否正确
- 确认数据库名称是否存在
- 检查 MySQL 服务器地址和端口是否正确
- 尝试手动连接数据库测试连接是否正常：`mysql -u用户名 -p密码 -h主机名`

### 4. 端口冲突

**问题**：启动服务时提示端口已被占用

**可能的解决方案**：
- 修改配置文件中的 `Port` 值，使用其他未被占用的端口
- 找出并关闭占用该端口的程序
- 在 Windows 系统中，可以使用 `netstat -ano | findstr 8082` 查找占用端口的进程
- 在 Linux/macOS 系统中，可以使用 `lsof -i :8082` 查找占用端口的进程

### 5. 文件上传问题

**问题**：上传文件失败

**可能的解决方案**：
- 如果使用本地存储，确保上传目录存在且有写入权限
- 检查配置文件中的上传路径是否正确
- 检查磁盘空间是否充足

### 6. 日志文件问题

**问题**：无法创建或写入日志文件

**可能的解决方案**：
- 确保日志目录存在且有写入权限
- 尝试使用绝对路径指定日志文件位置
- 检查日志路径是否包含不存在的目录

### 7. ElasticSearch 连接问题

**问题**：无法连接到 ElasticSearch

**可能的解决方案**：
- 如果您不需要搜索功能，可以先不配置 ElasticSearch
- 确认 ElasticSearch 服务是否正在运行
- 检查 ElasticSearch 地址和端口是否正确
