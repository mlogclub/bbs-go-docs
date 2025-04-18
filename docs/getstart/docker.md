# Docker 部署指南

::: tip 提示
本文档详细介绍如何使用 Docker 部署 bbs-go，包含从开发环境到生产环境的完整部署流程。
:::

## 系统要求

### Docker 环境
- Docker 版本 >= 20.10.0
- Docker Compose 版本 >= 2.0.0
- 确保 Docker 服务正常运行且当前用户拥有 Docker 操作权限

### 硬件配置
- CPU: 2核心及以上
- 内存: 最低2GB，推荐4GB及以上
- 磁盘空间: 10GB以上可用空间

### 端口说明
- 3000: 前端服务端口，用于网站访问
- 8082: 后端API服务端口
- 3306: MySQL服务端口（仅容器内部使用）

## 快速开始

### 获取代码
1. 克隆项目代码
```bash
git clone https://github.com/mlogclub/bbs-go.git
cd bbs-go
```

### 基础配置
1. 检查配置文件
```bash
# 查看并根据需要修改 docker-compose.yml
vim docker-compose.yml
```

2. 环境准备
```bash
# 创建数据目录
mkdir -p /data/docker
```

### 启动服务

::: warning 📢注意
启动前请确保端口 3000 和 8082 未被占用
:::

```bash
# 开发环境启动
docker-compose up

# 生产环境启动（后台运行）
docker-compose up -d
```

### 访问验证

服务启动成功后，可通过以下地址访问：

- 前台页面：[http://localhost:3000](http://localhost:3000)
- 管理后台：[http://localhost:3000/admin](http://localhost:3000/admin)

初始账号密码：
- 管理员账号：admin
- 管理员密码：123456

::: warning 安全提示
首次登录后请立即修改默认密码
:::

## 配置说明

### 环境变量
主要环境变量说明：
```yaml
BBSGO_ENV: docker        # 运行环境，可选值：dev,docker,prod
BBSGO_BASEURL:          # 网站基础URL，生产环境必须配置
BBSGO_DB_URL:          # 数据库连接串
```

### 数据持久化
Docker Compose 配置中的数据持久化目录：
- MySQL数据：`.docker-compose/mysql/data`
- 上传文件：`/data/docker`
- 数据库初始化脚本：`.docker-compose/mysql/docker-entrypoint-initdb.d`

### 自定义配置示例

1. 修改端口映射
```yaml
ports:
  - "8080:3000"   # 将前端端口改为8080
  - "9090:8082"   # 将API端口改为9090
```

2. 自定义MySQL配置
```yaml
services:
  mysql:
    command: 
      - --character-set-server=utf8mb4
      - --collation-server=utf8mb4_unicode_ci
      - --max_connections=1000
      - --innodb_buffer_pool_size=512M
```

## 生产环境部署

### 安全配置

1. 修改默认密码
```yaml
services:
  mysql:
    environment:
      MYSQL_ROOT_PASSWORD: <强密码>
      MYSQL_PASSWORD: <强密码>
```

2. 启用HTTPS
- 建议在前端配置Nginx反向代理
- 配置SSL证书
- 启用HTTP/2

3. 网络安全
- 只对外暴露必要端口
- 配置防火墙规则
- 定期更新安全补丁

### 性能优化

1. 容器资源限制
```yaml
services:
  bbsgo:
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '1'
          memory: 1G
```

2. MySQL优化
- 根据服务器配置调整缓冲池大小
- 优化查询缓存
- 配置慢查询日志

### 备份策略

1. 数据库备份
```bash
# 创建备份脚本
#!/bin/bash
docker exec bbs-go-mysql mysqldump -uroot -p<密码> bbsgo_db > backup_$(date +%Y%m%d).sql
```

2. 文件备份
```bash
# 备份上传文件
tar -zcvf uploads_$(date +%Y%m%d).tar.gz /data/docker
```

## 维护指南

### 日志查看
```bash
# 查看所有服务日志
docker-compose logs

# 查看特定服务日志
docker-compose logs bbsgo
docker-compose logs mysql

# 实时查看日志
docker-compose logs -f bbsgo
```

### 版本升级
```bash
# 1. 拉取最新代码
git pull

# 2. 停止服务
docker-compose down

# 3. 重新构建并启动
docker-compose up --build -d

# 4. 检查服务状态
docker-compose ps
```

### 故障排除

1. 服务无法启动
- 检查端口占用：`netstat -tunlp | grep '3000\|8082'`
- 检查日志：`docker-compose logs`
- 检查磁盘空间：`df -h`

2. 数据库连接失败
- 检查MySQL服务状态：`docker-compose ps mysql`
- 检查数据库连接配置
- 查看MySQL错误日志

3. 性能问题
- 检查容器资源使用：`docker stats`
- 检查系统负载：`top`
- 分析慢查询日志

## 常见问题

Q: 如何修改网站配置？
A: 可以通过环境变量或修改配置文件实现，主要配置项在 docker-compose.yml 中定义。

Q: 数据如何迁移？
A: 可以通过备份MySQL数据和上传文件，在新环境中还原实现。详细步骤见备份策略章节。

Q: 如何查看服务运行状态？
A: 使用 `docker-compose ps` 查看容器状态，使用 `docker stats` 查看资源使用情况。

::: tip 帮助支持
如果遇到问题，可以：
1. 查看 [项目文档](https://bbs-go.com)
2. 提交 [Issue](https://github.com/mlogclub/bbs-go/issues)
3. 加入社区交流群获取帮助
:::