# Go mod使用帮助

## Go mod 介绍

Go Modules 是 Go 语言官方的依赖管理系统，自 Go 1.11 版本起引入，并在 Go 1.13 版本中成为默认的依赖管理工具。其主要目标是解决项目依赖的版本管理问题，让开发者能够轻松地添加、更新和移除依赖。本文将向你介绍如何使用 Go Modules 管理你的 Go 项目。

### Go mod 常用命令

- go mod download: 下载依赖的module到本地cache
- go mod edit: 编辑go.mod
- go mod graph: 打印模块依赖图
- go mod init: 在当前目录下初始化go.mod(就是会新建一个go.mod文件)
- go mod tidy: 整理依赖关系，会添加丢失的module，删除不需要的module
- go mod vender: 将依赖复制到vendor下
- go mod verify: 校验依赖
- go mod why: 解释为什么需要依赖


### 在新项目中使用

使用go mod并不要求你的项目源码放到$GOPATH下，所以你的新项目可以放到任意你喜欢的路径。在项目根目录下执行`go mod init`，会生成一个go.mod文件。然后你可以在其中增加你的依赖，如下：

```go
module github.com/mlogclub/xxx

go 1.12

require (
    github.com/go-sql-driver/mysql v1.4.1
    .... 你的依赖类似这样，添加到这里，一行一条。
)
```

然后执行`go mod download`，将依赖下载到本地。这些依赖并不是下载到你的项目目录下，而是会下载到`$GOPATH/pkg/mod`目录下，这样所有使用go mod的项目都可以共用。

### 在旧项目中使用

在旧项目中使用非常简单，只需要一下两个步骤：

- `go mod init`: 在项目根目录下执行该命令，会在项目根目录下生成一个`go.mod`文件。
- `go mod tidy`: 在项目根目录下执行该命令，go mod会自动分析你当前项目所需要的依赖，并且将他们下载下来。

### 如何升级依赖
运行 `go get -u` 将会升级到最新的次要版本或者修订版本(x.y.z, z是修订版本号y是次要版本号)
运行 `go get -u=patch` 将会升级到最新的修订版本
运行 `go get package@version` 将会升级到指定的版本

## Go mod proxy 配置

众所周知的原因，国内是无法稳定的访问Google的服务，所以很多依赖无法成功下载，这个时候我们就要为`go mod`配置代理，目前国内优质的`go mod`代理推荐一下两个：

- https://goproxy.cn
- https://goproxy.io

这里我推荐使用`goproxy.cn`，他是国内最早提供goproxy代理的服务，他的服务由七牛提供支持，七牛也是目前国内使用Go语言经验比较丰富的公司，我一直在使用`goproxy.cn`，很稳定。

下面我们执行一下命令来设置goproxy：

```shell
go env -w GOPROXY=https://goproxy.cn,direct
```

注意：`go env -w`是不支持老版本go语言sdk的，如果你在执行该命令时报错，可以通过执行以下命令来设置`GOPROXY`：

```shell
export GOPROXY=https://goproxy.cn
```

配置完成后，我们执行 `go env` 命令可以看到效果，如下图：

![](/images/docs/gomod.png)