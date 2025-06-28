# BBS-GO 安装使用手册

## 📋 什么是 BBS-GO

BBS-GO 是一个现代化的社区论坛系统，具有以下特点：

- 🚀 **高性能**：能够处理大量用户同时访问
- 📱 **响应式设计**：支持手机、平板、电脑等各种设备
- 🎨 **界面美观**：现代化的用户界面设计
- 🛠️ **功能完善**：支持发帖、评论、私信、积分系统等
- 🔒 **安全稳定**：内置防护机制，数据安全可靠

## 🎯 系统要求

在开始安装之前，请确保您的服务器或电脑满足以下要求：

- **操作系统**：Windows 7+、macOS 10.12+、Linux（Ubuntu 16+/CentOS 7+）
- **内存**：至少 2GB RAM（推荐 4GB 以上）
- **硬盘空间**：至少 1G 可用空间
- **数据库**：MySQL 5.8+ 或 MariaDB 10.2+

## 📥 第一步：下载系统文件

### 1.1 获取下载地址

访问项目发布页面：[https://github.com/mlogclub/bbs-go/releases](https://github.com/mlogclub/bbs-go/releases)

### 1.2 选择对应版本

根据您的操作系统选择对应的版本：

| 操作系统         | 文件名                     |
| ---------------- | -------------------------- |
| Windows 64 位    | `bbs-go-windows-amd64.zip` |
| Windows 32 位    | `bbs-go-windows-386.zip`   |
| macOS Intel 芯片 | `bbs-go-macos-amd64.zip`   |
| macOS Apple 芯片 | `bbs-go-macos-arm64.zip`   |
| Linux 64 位      | `bbs-go-linux-amd64.zip`   |
| Linux 32 位      | `bbs-go-linux-386.zip`     |

**如何判断您的系统类型：**

**Windows 用户：**

1. 右键点击"此电脑"或"我的电脑"
2. 选择"属性"
3. 查看"系统类型"，64 位选择 amd64 版本，32 位选择 386 版本

**macOS 用户：**

1. 点击左上角苹果菜单
2. 选择"关于本机"
3. 2020 年之前的 Mac 选择 `macos-amd64`，2020 年后的 M1/M2 芯片选择 `macos-arm64`

**Linux 用户：**

```bash
# 在终端执行以下命令查看系统架构
uname -m
# 输出 x86_64 选择 linux-amd64
# 输出 i386 或 i686 选择 linux-386
```

### 1.3 下载文件

点击对应版本的文件名开始下载，将文件保存到您想要的目录（建议创建专门的文件夹）。

## 🗄️ 第二步：准备数据库

BBS-GO 需要 MySQL 数据库来存储数据。

### 2.1 安装 MySQL

**Windows 用户：**

1. 访问 [MySQL 官网](https://dev.mysql.com/downloads/mysql/)
2. 下载 MySQL Installer
3. 运行安装程序，选择"Server only"安装类型
4. 设置 root 用户密码（请牢记此密码）

**macOS 用户：**

1. 访问 [MySQL 官网](https://dev.mysql.com/downloads/mysql/)
2. 下载 macOS 版本的 DMG 文件
3. 双击安装，设置 root 密码

**Linux 用户（Ubuntu/Debian）：**

```bash
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
```

**Linux 用户（CentOS/RHEL）：**

```bash
sudo yum install mysql-server
sudo systemctl start mysqld
sudo mysql_secure_installation
```

### 2.2 创建数据库

1. 打开 MySQL 命令行工具或者使用图形化工具（如 phpMyAdmin、Navicat）
2. 创建数据库：

```sql
CREATE DATABASE bbsgo_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. 创建数据库用户（可选，也可以使用 root 用户）：

```sql
CREATE USER 'bbsgo'@'localhost' IDENTIFIED BY '您的密码';
GRANT ALL PRIVILEGES ON bbsgo_db.* TO 'bbsgo'@'localhost';
FLUSH PRIVILEGES;
```

## 🚀 第三步：启动系统与安装引导

### 3.1 解压并运行程序

1. 将下载的 zip 文件解压到您想要的目录
2. 解压后会得到一个包含程序文件的文件夹

**Windows 用户：**

- 找到解压后的 `bbs-go.exe` 文件
- 双击运行该文件

**macOS/Linux 用户：**

1. 打开终端
2. 导航到解压后的文件夹
3. 给程序文件添加可执行权限：

```bash
chmod +x bbs-go
```

4. 运行程序：

```bash
./bbs-go
```

### 3.2 使用安装引导

程序首次启动后，会自动进入安装引导模式：

1. **检查启动状态**：程序启动后，您会看到类似以下的输出：

```text
Now listening on:
> Network:  http://localhost:8082
> Local:    http://localhost:8082
Application started. Press CTRL+C to shut down.
```

2. **访问安装页面**：

   - 打开浏览器
   - 访问 `http://localhost:8082/install`
   - 如果是服务器安装，请将 `localhost` 替换为服务器的 IP 地址

3. **完成安装引导**：按照页面提示完成以下步骤：

   **步骤 1：数据库配置**

   - 数据库类型：选择 MySQL
   - 数据库主机：填写 `你的数据库地址，例如：localhost`
   - 数据库端口：填写 `你的数据库端口，通常为3306`
   - 数据库名称：填写 `bbsgo_db`
   - 用户名：填写 `你的数据库用户名，例如：root`
   - 密码：填写您在第二步中设置的数据库密码
   - 点击"测试连接"确保连接成功

   **步骤 2：网站基本信息**

   - 网站名称：填写您的论坛名称
   - 网站描述：填写论坛的简介
   - 网站关键词：填写相关关键词

   **步骤 3：管理员账号**

   - 管理员用户名：设置管理员登录用户名
   - 管理员密码：设置管理员登录密码（请牢记）
   - 确认密码：重复输入密码

   **步骤 4：完成安装**

   - 检查所有配置信息
   - 点击"开始安装"按钮
   - 等待系统自动创建数据表和初始化数据
   - 看到"安装成功"提示后，安装完成

### 3.3 安装完成后

安装成功后，系统会自动：

- 创建配置文件 `bbs-go.yaml`
- 创建必要的目录结构
- 初始化数据库表
- 设置管理员账号

您可以：

1. 访问 `http://localhost:8082` 查看论坛首页
2. 访问 `http://localhost:8082/admin` 进入管理后台
3. 使用安装时设置的管理员账号登录后台进行进一步配置

## 🌐 第四步：初始化完成后的操作

### 4.1 访问论坛首页

安装完成后，您可以：

1. 打开浏览器访问 `http://localhost:8082` 查看论坛首页
2. 如果是服务器安装，请将 `localhost` 替换为服务器的 IP 地址
3. 您会看到一个美观的论坛界面

### 4.2 登录管理后台

1. 访问 `http://localhost:8082/admin`
2. 使用安装时设置的管理员账号登录
3. 在管理后台可以进行各种配置和管理操作
4. 在管理后台可以进行各种配置和管理操作

## 🔧 常见问题解决

### Q1: 程序启动失败，提示端口被占用

**解决方法：**

停止占用端口的其他程序

### Q2: 数据库连接失败

**解决方法：**

1. 检查 MySQL 是否正常运行
2. 验证数据库用户名、密码是否正确
3. 确认数据库名称是否存在
4. 检查数据库服务是否启动

### Q3: 无法访问网站

**解决方法：**

1. 检查防火墙是否阻止了端口访问
2. 确认程序是否正常启动
3. 验证访问的地址和端口是否正确

### Q4: 文件上传失败

**解决方法：**

目前系统支持阿里云 OSS 和腾讯云 COS 两种文件上传方式，请登录 BBS-GO 后台 > 系统设置 > 上传配置 进行设置

## 📞 获取帮助

如果遇到问题无法解决，可以通过以下方式获取帮助：

1. **查看官方文档**：[https://bbs-go.com](https://bbs-go.com)
2. **问题反馈**：[https://bbs.bbs-go.com/topics/node/3](https://bbs.bbs-go.com/topics/node/3)
3. **QQ 交流群**：[加入官方用户交流群](https://bbs-go.com/docs/contact.html)
4. **GitHub Issues**：[在项目页面提交问题](https://github.com/mlogclub/bbs-go/issues)

## 🚀 进阶使用

### 生产环境部署

如果要在生产环境中使用，建议：

1. **使用反向代理**：配置 Nginx 作为反向代理
2. **启用 HTTPS**：配置 SSL 证书
3. **数据备份**：定期备份数据库和上传文件
4. **监控服务**：设置服务监控和自动重启
5. **性能优化**：根据访问量调整数据库连接池等参数

### 自定义配置

系统支持丰富的自定义配置，包括：

- 频道分类配置
- 用户注册和登录设置
- 积分和等级系统
- 内容审核规则
- 邮件通知配置

---

**祝您使用愉快！如果本手册对您有帮助，请给项目点个 ⭐️ 支持一下！**
