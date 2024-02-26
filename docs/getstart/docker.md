# 安装流程

::: tip 提示
本安装流程介绍的是如何使用Docker快速安装bbs-go，在安装之前请确保您已经正确安装并启动Docker服务
:::

安装步骤如下：

1. 在你的电脑上创建目录，创建目录 `bbs-go-docker`，并进入该目录
2. 准备SQL初始化脚本
在`bbs-go-docker`目录中创建文件：`.docker-compose/mysql/docker-entrypoint-initdb.d/init.sql`，该文件为SQL初始化脚本。SQL脚本内容请加QQ群获取：

![](/images/qq.png)

3. 创建`docker-compose.yml`文件

```yml
version: '3.8'

services:
  mysql:
    container_name: bbs-go-mysql
    image: 'mysql:8.0'
    environment:
      TZ: Asia/Shanghai
      MYSQL_DATABASE: bbsgo_db
      MYSQL_USER: bbsgo
      MYSQL_PASSWORD: 123456
      MYSQL_ROOT_PASSWORD: 123456
    volumes:
      - .docker-compose/mysql/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d # 初始化脚本件目录, 这个目录中的.sh/sql文件会以字母顺序依次执行
      # - ./mysql:/var/lib/mysql # 挂载数据件目录.如果非root账号执行，挂载目录必须是登录账号下目录
      # - .docker-compose/mysql/conf.d:/etc/mysql/conf.d # 挂在配置文件目录
    restart: always
    healthcheck:
      test: '/usr/bin/mysql --user=bbsgo --password=123456 bbsgo_db --execute "SHOW TABLES;"'
      interval: 3s
      timeout: 300s
      retries: 100
    command: --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  server:
    container_name: bbs-go-server
    image: mlogclub/bbs-go-server:latest
    depends_on:
      mysql:
        condition: service_healthy

    ports:
      - 8082:8082
    build:
      dockerfile: Dockerfile
      context: ./server
    volumes:
      - /data/docker:/data
    restart: on-failure

  site:
    container_name: bbs-go-site
    image: mlogclub/bbs-go-site:latest
    depends_on:
      - server
    ports:
      - 3000:3000
    build:
      dockerfile: Dockerfile
      context: ./site
    restart: on-failure


  admin:
    container_name: bbs-go-admin
    image: mlogclub/bbs-go-admin:latest
    depends_on:
      - server
    ports:
      - 8080:80
    build:
      dockerfile: Dockerfile
      context: ./admin
    restart: on-failure

```

4. 使用`docker-compose up`命令启动启动服务

> 如果你没有权限执行docker-compose命令，你可能需要用到sudo

此命令将下载所需的Docker镜像（如果本地不存在），并启动容器。

5. 服务启动成功，可通过浏览器访问服务，服务地址如下：

- 前台: [http://localhost:3000](http://localhost:3000)
- 后台: [http://localhost:8080](http://localhost:8080)
