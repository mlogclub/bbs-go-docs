# 更新日志

<!--
通过这个接口获取：
https://api.github.com/repos/mlogclub/bbs-go/releases?page=1&per_page=100
-->

## v4.1.0 (2025-06-27)

🌍 国际化支持 (i18n)

- **多语言界面**：新增完整的中英文双语支持
- **语言切换**：用户可自由切换界面语言，提供更好的国际化体验
- **本地化数据**：支持多语言数据库初始化，包括节点、角色等基础数据
- **管理后台**：管理界面同步支持多语言，方便不同地区的管理员使用

✍️ 全新富文本编辑器

- **现代化设计**：采用基于 TipTap 的全新富文本编辑器，界面更加美观现代
- **丰富功能**：支持标题、列表、表格、代码块、引用、链接等多种排版元素
- **主题适配**：完美支持明暗主题切换，自动适应用户系统偏好
- **图片处理**：优化图片上传和显示，支持拖拽上传和可调整大小
- **移动友好**：响应式设计，在移动设备上同样提供出色的编辑体验

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v4.1.0>

## v4.0.6 (2025-06-27)

- 新增安装引导；
- 一键安装，鼠标双击即可启动；
- 新增腾讯云照片上传支持；

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v4.0.6>

## v4.0.5 (2025-02-24)

1. 全新的 UI
2. 更细致的权限控制
3. 更快捷的部署方式

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v4.0.5>

## v4.0.3 (2024-09-17)

1. 升级`Dockerfile`和`docker-compose.yml`，完善 docker 部署流程
2. 多处细节优化

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v4.0.3>

## v4.0.1 (2024-05-16)

1. 重构搜索功能，使用`bleve`实现搜索
2. 多项细节优化和 BUG 修复

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v4.0.1>

## v4.0.0 (2024-02-21)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v4.0.0>

1. 系统重构：对整个系统进行了全面的重构，以提高性能、可维护性和扩展性。
2. Vue3/Nuxt3 升级： 将前端框架升级到最新的 Vue.js 3 版本，享受新版本带来的性能提升、新特性和改进。
3. 提供全新的管理后台
4. 简化安装流程，提供完整的 docker 镜像

## v3.5.5 (2022-12-02)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.5.5>

- 【新增】违禁词模块，违禁词支持词组和正则表达式
- 【新增】发帖、发文章、评论进行违禁词筛选
- 【新增】发帖审核功能
- 【新增】邮箱认证白名单功能
- 【优化】优化管理后台功能细节
- 【优化】优化 docker 镜像构建脚本（感谢长亭科技）
- 【漏洞修复】修复外链跳转 XSS 问题（感谢长亭科技）
- 【漏洞修复】修复一个越权查看他人邮箱信息的漏洞（感谢长亭科技）

## v3.5.4 (2022-11-14)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.5.4>

- 【新增】新增默认头像支持
- 【新增】新增举报功能
- 【新增】文章封面图支持
- 【新增】系统支持配置开启或关闭功能模块（帖子、动态、文章）
- 【优化】优化文章模块功能，优化文章页面样式
- 【优化】优化文章审核流程
- 【BUGFIX】修复二级回复消息查看跳转错误
- 【优化】升级第三方依赖、多出细节和功能优化

## v3.5.3 (2022-09-27)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.5.3>

- 支持 docker 快速启动
- 修复 dark 模式下多处样式细节问题
- 代码高亮改用 PrismJS 实现
- 用户资料新增性别、生日
- 多处细节优化和 BUG 修复

## v3.5.2 (2022-08-18)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.5.2>

- dark mode 样式优化
- 优化后台帖子管理功能
- 优化后台文章管理功能
- 优化后台评论管理功能
- 去掉对 iconfont 的依赖
- 多处细节优化

## v3.5.1 (2022-04-27)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.5.1>

- 支持隐藏内容回复后查看
- 支持帖子置顶功能

## v3.5.0 (2022-04-12)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.5.0>

- 升级 Go1.18
- 重构底层框架代码

## v3.4.3 (2022-03-21)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.4.3>

- 优化管理后台功能
- 优化邮箱验证流程
- 安全问题修复
- 优化话题详情页 UI

## v3.4.2 (2022-01-18)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.4.2>

- 新增：适配黑夜（dark）模式
- 优化文章页面展示样式
- BUGFIX：修复二级评论无消息通知的 BUG
- 重构：重构事件处理框架，优化代码结构

## v3.4.1 (2022-01-07)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.4.1>

- 新增：评论盖楼模式、优化评论组件
- 新增：记录发帖、评论用户的 UA、IP
- 修复：关闭密码登录后，管理后台无法登录的问题
- 修复：搜索框显示问题，调整搜索框样式
- 修复：头像修改失败的问题
- 修复：修复后台几个 BUG
- 优化：个人资料编辑页面
- 优化：用户注册、登录页面样式
- 优化：go.mod 依赖
- 优化：界面样式细节

## v3.4.0 (2021-11-12)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.4.0>

- 新增：粉丝关注功能
- 优化：搜索功能优化
- 优化：简化接口用户信息渲染，减少数据交互
- 优化：优化个人中心展示样式
- 优化：简化对 element-ui 的依赖，优化应用体积和加载速度
- BUGFIX: 修复一个 XSS 攻击漏洞

## v3.3.2 (2021-09-29)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/3.3.2>

- 全新的前后端分离后台管理系统
- 系统重构构建和启动速度大大提升

## v3.3.1 (2021-08-03)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.3.1>

- 全新的手机版、Pad 版页面样式
- 全新的个人中心样式
- 依赖软件版本升级
- 多出交互细节优化

## v3.3.0 (2021-06-22)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.3.0>

- 优化多项界面体验细节
- 话题节点支持后台自定义图标
- 修复阿里云图片上传后缀错误问题
- 优化内部链接跳转页面刷新体验
- 优化代码高亮组件
- 优化列表“加载更多”功能
- 实现 Nuxt.js 组件自动导入
- 评论框支持上传图片
- 集成新的 markdown 编辑器 [vue-markdown-editor](https://github.com/code-farmer-i/vue-markdown-editor)

## v3.2.6 (2021-05-09)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.2.6>

- 支持开源中国一键登录
- 反作弊系统
  - 发表内容验证码开关
  - 邮箱验证开关
  - 发表频率控制
  - 新用户观察期
  - 用户禁言
  - ...
- 集成 nuxt-vite
- 修复积分记录展示错误问题
- 永久禁言用户积分清零

## v3.2.5 (2021-04-16)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.2.5>

- Feature：全新的签到、排行榜样式，感谢[Alice Re-Code](https://bbs.bbs-go.com/user/2806)贡献代码
- Bugfix：修复注册链接跳转失效的问题
- Bugfix：修复帖子管理菜单权限控制错误的问题
- Bugfix：修复头像展示变形的问题
- Bugfix：修复 Windows 平台中上传图片路径错误的问题
- 代码结构重构

## v3.2.4 (2021-03-25)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.2.4>

- Feature：后台支持配置登录方式，根据需要选择登录方式
- Feature：调整 sitemap 生成策略
- Feature：增强前台页面的管理能力，在前台页面增加多出话题、用户管理入口
- Feature：支持永久禁言的同时清理被禁言用户的话题和文章
- Feature：使用 dart-sass 替换 node-sass，再也不用忍受 node-sass 安装时的痛苦了
- Bugfix：修复动态发表时上传多张图片被覆盖的问题

## v3.2.3 (2021-01-26)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.2.3>

- 全新的话题 UI 交互
- 全新动态功能
- 优化话题详情页 UI
- 修复评论数量显示错误的问题
- 优化后台话题管理功能
- 前台界面提供话题的推荐功能
- 优化头像显示组件
- 其他多处细节调整和 BUG 修复

## v3.2.2 (2021-01-13)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.2.2>

- Feature：帖子、动态功能合并，动态功能更加完善
- Feature：全新的帖子信息流展示样式
- Feature：记录帖子最后回复人、最后回复时间
- Feature：新增签到排行榜
- Feature：帖子详情页支持推荐功能
- Enhancement：优化头像的存储和加载方式
- More：多处细节和功能优化

## v3.2.1 (2020-12-29)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.2.1>

- Feature： 个人主页新增我的动态
- Enhancement：优化帖子详情页样式
- Enhancement：优化消息页面，新增点赞通知、收藏通知、推荐通知
- Enhancement：优化登录页面样式
- Enhancement：优化邮箱验证逻辑
- Enhancement：优化页面体积
- Bugfix：修复 QQ 登录异常的问题
- 多处细节调整...

## v3.2.0 (2020-11-28)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.2.0>

- 新功能：支持基于`elasticsearch`的帖子搜索功能
- 优化：SEO 优化，支持`神马搜索`链接推送
- 优化：完善数据库初始化脚本
- 优化：优化日志输出逻辑，日志输出到文件时同时支持输出到控制台
- 优化：更新`markdown`语法帮助文档
- 优化：优化站内消息发送逻辑
- 优化：优化`markdown`编辑器编辑模式
- 优化：优化代码高亮库`highlight.js`的加载逻辑，提升网站加载速度
- 优化：优化导航栏消息入口显示逻辑
- 优化：优化缓存数据不存在时的处理逻辑

## v3.1.9 (2020-10-22)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.1.9>

- 支持自定义个人中心背景主题
- 优化帖子点赞收藏展示逻辑
- 修复升级`gorm2`后造成的点赞失败问题
- 新增签到功能入口
- 修复一个 ssrf[漏洞](https://gitee.com/mlogclub/bbs-go/issues/I1X3N4)
- 修复`gorm`日志不打印问题

## v3.1.8 (2020-09-25)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.1.8>

本次主要更新`gorm 2.0`，`gorm` 是 Go 语言界`orm`产品的扛把子，在`gorm2.0`发布后，`bbs-go`也第一时间跟进并升级了`gorm2.0`，本次升级的 gorm2.0 从零开始，深度优化性能、重构代码。

改进点如下：

- 性能改进
- 代码模块化
- Context，批量插入，预编译模式，DryRun 模式，Join 预加载，Find To Map，Create From Map，FindInBatches
- 支持嵌套事务，SavePoint，Rollback To SavePoint
- SQL 生成器，命名参数，分组条件，Upsert，锁， 支持 Optimizer/Index/Comment Hint，子查询改进，使用 SQL 表达式、Context Valuer 进行 CRUD
- 支持完整的自引用，改进 Join Table，批量数据的关联模式
- 允许多个字段用于追踪 create、update 时间 ，支持 UNIX （毫/纳）秒
- 支持字段权限：只读、只写、只创建、只更新、忽略
- 新的插件系统，为多个数据库提供了官方插件，读写分离，prometheus 集成…
- 全新的 Hook API：带插件的统一接口
- 全新的 Migrator：允许为关系创建数据库外键，更智能的 AutoMigrate，支持约束、检查器，增强索引支持
- 全新的 Logger：支持 context、改进可扩展性
- 统一命名策略：表名、字段名、连接表名、外键、检查器、索引名称规则
- 更好的自定义类型支持（例如： JSON）

## v3.1.7 (2020-09-11)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.1.7>

- 【新特性】签到功能，签到获积分
- 【BUGFIX】修复用户中心侧边栏管理菜单显示错误的问题
- 【新特性】修改个人主页布局
- 【功能增强】升级 vditor 编辑器
- 【新特性】支持后台配置用户登录有效期

## v3.1.6 (2020-08-31)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.1.6>

- 【新特性】支持 Docker 快速启动
- 【改进】新用户观察期支持更小粒度的配置（之前只能配置到小时）

## v3.1.5 (2020-07-10)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.1.5>

- 【新功能】支持多管理员功能
- 【新功能】管理员可在前台界面删除、修改话题和文章
- 【新功能】支持邮箱验证（发送验证邮件进行验证）
- 【新功能】支持用户禁言功能（可设置禁言时长，禁言原因）
- 【新功能】支持新用户观察期功能（新用户注册后观察期内无法发表内容，观察期时长可后台设置，也可关闭观察期）
- 【新功能】支持记录操作日志
- 【优化】优化后台文章、评论的查询性能

## v3.1.4 (2020-06-30)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.1.4>

- 支持版主功能，可邀请版主一起管理社区
- 新增操作日志功能，记录管理员、版主的管理记录
- 整理和优化后台管理菜单
- 优化后台文章、评论列表数据加载逻辑，解决大数据量时加载性能问题
- 优化文章详情页近期文章展示逻辑
- 整理和优化代码，提升性能

## v3.1.3 (2020-05-04)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.1.3>

- feature: Go SDK 升级到 1.14
- feature: 支持文章审核功能 [PR-48](https://github.com/mlogclub/bbs-go/pull/48) [@zzy624](https://github.com/zzy624)
- feature: 新增最新动态挂件
- feature: 实现话题收藏功能
- feature: 优化文章页布局
- feature: 后台新增动态管理功能
- feature: 后台新增标签管理功能
- bugfix: 修复评论功能的一个 XSS 漏洞
- bugfix: 修复后台用户角色修改失败的问题
- bugfix: 修复后台用户头像显示错误问题
- bugfix: 修复友情链接跳转问题
- bugfix: 修复标签文章列表排序不正确问题
- enhance: 优化管理后台样式

## v3.1.2 (2020-04-22)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.1.2>

- 新特性：支持“动态”功能
- 新特性：支持阿里云 OSS 图片配置缩图规则
- 增强：重构回复功能，同时支持`markdown`和`存文本`回复
- 增强：重构 Go 语言接口部分代码

## v3.1.1 (2020-03-30)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.1.1>

- 新特性：支持`推文`功能，快捷发表推文，沟通更顺畅（推文图片支持粘贴板上传、拖拽上传）
- 新特性：支持图片`LazyLoad`功能，按需加载、快速省带宽
- 新特性：支持配置默认发帖节点
- 新特性：文件支持上传到服务器（之前仅支持上传到阿里云 OSS）
- 新特性：首页导航栏添加快速发帖入口
- 增强：调整多处样式细节，做一个追求完美的人
- Bugfix：修复后台修改用户密码和角色的 BUG
- Bugfix：修复后台友情链接 LOGO 显示问题
- Bugfix：修复编辑内容为空的话题时，读取内容错误的问题
- Bugfix：修复话题修改页面 Title 错误的问题

## v3.1.0 (2020-02-28)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.1.0>

- 优化帖子列表、详情在手机屏幕上的展示
- 去掉第三方图片的依赖
- 优化积分中心展示样式
- 修复 Markdown 编辑器功能错误
- 优化项目体积

## v3.0.9 (2020-02-05)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.0.9>

- 新增用户积分功能
- 完善社区公告功能
- 完善帖子详情页用户点赞功能
- 升级后台管理，简化后台部署，不需要在单独部署
- 修复帖子被回复相关系统消息发送逻辑错误的问题
- 修复其他若干 bug

## v3.0.8 (2020-01-07)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.0.8>

- 新增论坛公告功能
- 用户注册时支持图片验证码
- 用户登录时支持图片验证码
- 后台登录支持图片验证码
- 新增后台手动退出功能

## v3.0.5 (2019-12-05)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.0.5>

- 升级`vidtor`( https://github.com/Vanessa219/vditor )编辑器。
- 修改网站样式和配色，新的样式和配色更加好看。
- 整理代码，为后期`开箱即用`做准备。

## v3.0.4 (2019-11-18)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.0.4>

- 优化文章列表加载性能，将加载方式修改为上拉加载更多，这种方式在加载列表时不需要`count`列表总数量，当数据量大时`count`很耗时。
- 修改网站样式和配色，新的样式和配色更加好看。
- 重构前端页面组件，将公用部分抽象成可复用组件。
- 重构代码完全遵循`eslint`配置的规则，让`eslint`没有警告 ⚠️。
- 新增配置项`站外链接跳转`，开启后站外链接需要用户确认后才能进行跳转。

## v3.0.3 (2019-11-11)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.0.3>
功能建议收集：<https://bbs.bbs-go.com/topic/609>

- 支持 Docker 快速部署 ( 感谢热心用户 @athom 的 PR https://github.com/mlogclub/bbs-go/pull/25 )
- 新增本地快速构建脚本
- 完善后台配置功能，导航菜单、侧边栏导航都能在后台配置
- 优化数据库索引和数据查询性能
- Iris 升级至版本 12 ( 感谢 Iris 作者的 PR：https://github.com/mlogclub/bbs-go/pull/27 )
- 重构代码，优化代码结构
- 完善配置部署文档 ( http://docs.bbs-go.com/ )

## v3.0.2 (2019-10-29)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.0.2>
功能建议收集：<https://bbs.bbs-go.com/topic/609>

- QQ 登录
- 密码注册
- 设置邮箱
- 设置密码

## v3.0.1 (2019-09-12)

发布地址: <https://github.com/mlogclub/bbs-go/releases/tag/v3.0.1>

- 新增话题跟帖数量
- 新增话题点赞功能
- 优化界面样式

## v3.0.0 (2019-09-09)

发布地址: https://github.com/mlogclub/bbs-go/releases/tag/v3.0.0

- 修改页面样式配色
- 新增标签下的发帖引导
- 后台支持多标签
- 使用 Vditor 编辑器

## v2.0.0 (2019-09-03)

发布地址: https://github.com/mlogclub/bbs-go/releases/tag/v2.0.0

- 新增内容专栏功能
- 新增好博客导航功能
- 后台支持多 Tab 页签，操作更方便
- 完善后台功能
- 修复各种 BUG

## v1.0.5 (2019-08-07)

发布地址: https://github.com/mlogclub/bbs-go/releases/tag/v1.0.5

- 重构项目使用 nuxt.js 来渲染前端界面，GoLang 只提供数据支撑

## v1.0.1 (2019-07-01)

发布地址: https://github.com/mlogclub/bbs-go/releases/tag/v1.0.1

- 修复两个数据越权访问的 bug；
- 自己发布的主题帖支持修改；
- 优化页面布局；
- 完善后台帖子管理功能；
- 完善和重构代码；
