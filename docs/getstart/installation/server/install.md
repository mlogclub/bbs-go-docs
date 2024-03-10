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

> TODO
