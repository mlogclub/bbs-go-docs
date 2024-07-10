# 安装site模块

## 安装依赖

安装之前请确保你的电脑上正确安装了`nodejs 20+`。site模块的以来管理推荐使用pnpm，如果你的电脑上没安装pnpm，请先执行下面命令安装pnpm:

```shell
npm install -g pnpm
```

安装成功后进入源码site目录，执行下面命令安装依赖：

```shell
pnpm install
```

直至提示成功。

## 配置

在site的配置示例文件为：`.env.example`，你可以根据你不同的环境复制并重命名该文件后，修改文件中对应配置：

* 开发环境：.env.dev
* 生产环境：.env.production

目前只有一个配置项：`SERVER_URL`，该配置为server端接口服务地址，请正确配置为你自己的服务地址即可。

## 以调试模式启动

执行下面命令启动服务：

```shell
pnpm dev
```

服务默认端口为`3000`，服务启动成功后可以在浏览器中正确访问。

## 编译

执行下面命令编译服务：

```shell
pnpm build
```
