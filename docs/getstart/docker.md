# 安装流程

::: tip 提示
本安装流程介绍的是如何使用Docker快速安装bbs-go，在安装之前请确保您已经正确安装并启动Docker服务
:::

## Clone代码

进入项目主页 [https://github.com/mlogclub/bbs-go](https://github.com/mlogclub/bbs-go)，使用git，将代码clone到本地。

## 启动服务

::: warning 📢注意
启动服务会使用到端口`3000`和`8082`，请确保你的机器上这两个端口未被占用。
:::

进入代码目录，执行`docker-compose up`命令启动服务

如果你没有权限执行docker-compose命令，你可能需要用到sudo，尝试使用命令`sudo docker-compose up`

此命令将下载所需的Docker镜像（如果本地不存在），并启动容器。

## 访问服务

服务启动成功后，在浏览器中访问下面路径即可成功访问服务：

> 如果你是在本地启动的docker服务，可以直接使用下面链接访问。如果你在其他机器上启动的，请根据实际情况调整访问地址，并确保启动服务的机器网络和端口对外开放。

- 前台: [http://localhost:3000](http://localhost:3000)
- 后台: [http://localhost:3000/admin](http://localhost:3000/admin)

初始账号密码 [详见文档>>](https://bbs-go.com/docs/qa.html#%E5%88%9D%E5%A7%8B%E5%8C%96%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81)

## docker启动进阶配置

上述文档讲解的启动流程是使用`docker-compose`启动的，所以想要了解更多配置信息可以查看项目根目录中的`docker-compose.yml`。
