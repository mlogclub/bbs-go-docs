# 安装 Go 语言环境

## 安装 Go

请去官网 [https://go.dev/dl/](https://go.dev/dl/) 下载对应系统的 Go 语言安装包。`推荐版本：go1.23 +`

### Windows 安装

1. 下载 Windows 版本的 Go 安装包（.msi 文件）
2. 双击安装包并按照安装向导进行安装
3. 默认情况下，Go 会安装到 `C:\Program Files\Go` 或 `C:\Go` 目录
4. 安装过程会自动将 Go 的 bin 目录添加到系统环境变量 PATH 中
5. 打开命令提示符（CMD）或 PowerShell，输入 `go version` 验证安装是否成功

### macOS 安装

1. 下载 macOS 版本的 Go 安装包（.pkg 文件）
2. 双击安装包并按照安装向导进行安装
3. 默认情况下，Go 会安装到 `/usr/local/go` 目录
4. 打开终端，编辑 `~/.zshrc` 或 `~/.bash_profile` 文件，添加以下环境变量：
   ```bash
   export GOPATH=$HOME/go
   export GOROOT=/usr/local/go
   export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
   ```
5. 执行 `source ~/.zshrc` 或 `source ~/.bash_profile` 使配置生效
6. 输入 `go version` 验证安装是否成功

### Linux 安装

1. 下载对应系统架构的 Linux 版本 Go 压缩包（.tar.gz 文件）
2. 解压到 `/usr/local` 目录：

   ```bash
   sudo tar -C /usr/local -xzf go*.tar.gz
   ```

3. 编辑 `~/.bashrc` 或 `~/.profile` 文件，添加以下环境变量：

   ```bash
   export GOPATH=$HOME/go
   export GOROOT=/usr/local/go
   export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
   ```

4. 执行 `source ~/.bashrc` 或 `source ~/.profile` 使配置生效
5. 输入 `go version` 验证安装是否成功

## 配置 Go Proxy

Go 1.13 版本之后，Go 引入了 GOPROXY 环境变量，用于设置 Go 模块代理，加速依赖包的下载。在国内网络环境下，建议配置国内镜像源。

### Windows 配置

打开命令提示符（CMD）或 PowerShell，设置环境变量：

```bash
# 设置 GOPROXY
go env -w GOPROXY=https://goproxy.cn,direct

# 设置 GOSUMDB（可选，用于校验模块）
go env -w GOSUMDB=sum.golang.org

# 设置 GO111MODULE，启用 Go Module 模式
go env -w GO111MODULE=on
```

### macOS/Linux 配置

在终端中执行以下命令：

```bash
# 设置 GOPROXY
go env -w GOPROXY=https://goproxy.cn,direct

# 设置 GOSUMDB（可选，用于校验模块）
go env -w GOSUMDB=sum.golang.org

# 设置 GO111MODULE，启用 Go Module 模式
go env -w GO111MODULE=on
```

也可以将这些配置添加到你的 shell 配置文件（如 `.bashrc`、`.zshrc` 或 `.profile`）中：

```bash
export GOPROXY=https://goproxy.cn,direct
export GOSUMDB=sum.golang.org
export GO111MODULE=on
```

### 常用的 Go 代理地址

1. 中国大陆推荐：

   - 七牛云 Goproxy: `https://goproxy.cn,direct`
   - 阿里云 Goproxy: `https://mirrors.aliyun.com/goproxy/,direct`

2. 全球通用：
   - 官方代理: `https://proxy.golang.org,direct`
   - Google 代理: `https://goproxy.io,direct`

配置完成后，可以通过以下命令验证设置是否生效：

```bash
go env | grep GOPROXY
```

合理设置 Go 代理能够显著提高依赖包的下载速度，特别是在网络访问受限的环境中。
