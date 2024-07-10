# Server 模块安装

::: warning 提示
开始之前请确保正确安装Go语言开发环境，并设置已经设置好环境变量。安装教程详见：https://www.google.com
:::

## 安装依赖

server模块的依赖使用`go mod`进行管理，进入 server 目录，执行下面命令安装依赖：

```shell
go mod download -x
```

## 编译

依赖安装成功后，执行下面命令进行编译

```shell
go build
```

编译成功后，会在当前目录生成二进制可执行文件 `bbs-go` （Windows系统为`bbs-go.exe`）

这个文件是可以执行的，但我们先不着急执行，因为还没有正确配置数据库等信息，接下来我们看如何配置。

## 配置

系统提供了配置示例文件：`bbs-go.example.yaml`，将他复制一份，并命名为：`bbs-go.yaml`，然后将`bbs-go.yaml`中的配置修改为你自己的配置。

配置示例如下：

```yaml
Port: 8082 # 服务端口
BaseUrl: https://mlog.club # 网站域名
IpDataPath: # IP数据文件，默认读取当前目录下ip2region.xdb文件，最新数据文件请从这里下载：https://github.com/lionsoul2014/ip2region/tree/master/data
AllowedOrigins:
  - "*"

# 日志配置
Logger:
  Filename: /data/logs/bbs-go.log   # 日志文件的位置
  MaxSize: 100                      # 文件最大尺寸（以MB为单位）
  MaxAge: 10                        # 保留旧文件的最大天数
  MaxBackups: 10                    # 保留的最大旧文件数量


# 数据库连接
DB:
  Url: username:password@tcp(localhost:3306)/bbsgo_db?charset=utf8mb4&parseTime=True&loc=Local
  MaxIdleConns: 50
  MaxOpenConns: 200

# 上传配置
Uploader:
  # 启用上传方式
  Enable: Oss
  # 阿里云oss配置
  AliyunOss:
    Host: 
    Bucket: 
    Endpoint: 
    AccessId: 
    AccessSecret: 
    StyleSplitter: 
    StyleAvatar: 
    StylePreview: 
    StyleSmall: 
    StyleDetail: 
  # 本地文件上传
  Local:
    Host: https://st.mlog.club/ # 上传文件域名
    Path: /data/www/st.mlog.club # 上传目录

# 邮件服务器配置，用于邮件通知
Smtp:
  Host: smtp.qq.com
  Port: 25
  Username: 
  Password: 
  SSL: true

# 百度SEO相关配置
# 文档：https://ziyuan.baidu.com/college/courseinfo?id=267&page=2#h2_article_title14
BaiduSEO:
  Site:
  Token:

# 神马搜索SEO相关
# 文档：https://zhanzhang.sm.cn/open/mip
SmSEO:
  Site:
  UserName:
  Token:

# es 配置
Es:
  Url: http://127.0.0.1:9200
  Index: bbsgo_topic_1

```

## 启动

启动前请先正确安装MySQL数据库，创建并配置数据库链接，执行SQL初始化脚本。SQL脚本内容请加QQ群获取：

![](/images/qq.png)

然后在`server`目录执行下面命令启动服务：

```shell
go run main.go
```
