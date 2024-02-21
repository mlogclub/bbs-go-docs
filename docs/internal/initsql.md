# SQL初始化脚本

::: tip 提示
初始化账号为：admin、密码为：123456
:::

```sql
USE bbsgo_db;
SET NAMES utf8mb4;
-- 初始化用户表
CREATE TABLE `t_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `email_verified` tinyint(1) NOT NULL DEFAULT '0',
  `nickname` varchar(16) DEFAULT NULL,
  `avatar` text,
  `gender` varchar(16) DEFAULT '',
  `birthday` datetime(3) DEFAULT NULL,
  `background_image` text,
  `password` varchar(512) DEFAULT NULL,
  `home_page` varchar(1024) DEFAULT NULL,
  `description` text,
  `score` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `topic_count` int(11) NOT NULL,
  `comment_count` int(11) NOT NULL,
  `follow_count` int(11) NOT NULL,
  `fans_count` int(11) NOT NULL,
  `roles` text,
  `forbidden_end_time` bigint(20) NOT NULL DEFAULT '0',
  `create_time` bigint(20) DEFAULT NULL,
  `update_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `idx_user_score` (`score`),
  KEY `idx_user_status` (`status`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
-- 初始化用户数据（用户名：admin、密码：123456）
INSERT INTO t_user (
    `id`,
    `username`,
    `nickname`,
    `avatar`,
    `email`,
    `password`,
    `status`,
    `create_time`,
    `update_time`,
    `roles`,
    `description`,
    `topic_count`,
    `comment_count`,
    `score`,
    `follow_count`,
    `fans_count`
  )
SELECT 1,
  'admin',
  'bbsgo站长',
  '',
  'a@example.com',
  '$2a$10$ofA39bAFMpYpIX/Xiz7jtOMH9JnPvYfPRlzHXqAtLPFpbE/cLdjmS',
  0,
  (UNIX_TIMESTAMP(now()) * 1000),
  (UNIX_TIMESTAMP(now()) * 1000),
  'owner',
  '轻轻地我走了，正如我轻轻的来。',
  0,
  0,
  0,
  0,
  0
FROM DUAL
WHERE NOT EXISTS(
    SELECT *
    FROM `t_user`
    WHERE `id` = 1
  );
-- 初始化话题节点
CREATE TABLE `t_topic_node` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `description` varchar(1024) DEFAULT NULL,
  `logo` varchar(1024) DEFAULT NULL,
  `sort_no` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `idx_sort_no` (`sort_no`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
INSERT INTO `t_topic_node` (
    `id`,
    `name`,
    `description`,
    `sort_no`,
    `status`,
    `create_time`
  )
SELECT 1,
  '默认节点',
  '',
  0,
  0,
  (UNIX_TIMESTAMP(now()) * 1000)
FROM DUAL
WHERE NOT EXISTS(
    SELECT *
    FROM `t_topic_node`
    WHERE `id` = 1
  );
-- 初始化系统配置表
CREATE TABLE `t_sys_config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `key` varchar(128) NOT NULL,
  `value` text,
  `name` varchar(32) NOT NULL,
  `description` varchar(128) DEFAULT NULL,
  `create_time` bigint(20) NOT NULL,
  `update_time` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`key`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
-- 初始化系统配置数据
INSERT INTO t_sys_config(
    `key`,
    `value`,
    `name`,
    `description`,
    `create_time`,
    `update_time`
  )
SELECT 'siteTitle',
  'bbs-go演示站',
  '站点标题',
  '站点标题',
  (UNIX_TIMESTAMP(now()) * 1000),
  (UNIX_TIMESTAMP(now()) * 1000)
FROM DUAL
WHERE NOT EXISTS(
    SELECT *
    FROM `t_sys_config`
    WHERE `key` = 'siteTitle'
  );
INSERT INTO t_sys_config (
    `key`,
    `value`,
    `name`,
    `description`,
    `create_time`,
    `update_time`
  )
SELECT 'siteDescription',
  'bbs-go，基于Go语言的开源社区系统',
  '站点描述',
  '站点描述',
  (UNIX_TIMESTAMP(now()) * 1000),
  (UNIX_TIMESTAMP(now()) * 1000)
FROM DUAL
WHERE NOT EXISTS(
    SELECT *
    FROM `t_sys_config`
    WHERE `key` = 'siteDescription'
  );
INSERT INTO t_sys_config (
    `key`,
    `value`,
    `name`,
    `description`,
    `create_time`,
    `update_time`
  )
SELECT 'siteKeywords',
  '["bbs-go"]',
  '站点关键字',
  '站点关键字',
  (UNIX_TIMESTAMP(now()) * 1000),
  (UNIX_TIMESTAMP(now()) * 1000)
FROM DUAL
WHERE NOT EXISTS(
    SELECT *
    FROM `t_sys_config`
    WHERE `key` = 'siteKeywords'
  );
INSERT INTO t_sys_config (
    `key`,
    `value`,
    `name`,
    `description`,
    `create_time`,
    `update_time`
  )
SELECT 'siteNavs',
  '[{\"title\":\"首页\",\"url\":\"/\"},{\"title\":\"话题\",\"url\":\"/topics\"},{\"title\":\"文章\",\"url\":\"/articles\"}]',
  '站点导航',
  '站点导航',
  (UNIX_TIMESTAMP(now()) * 1000),
  (UNIX_TIMESTAMP(now()) * 1000)
FROM DUAL
WHERE NOT EXISTS(
    SELECT *
    FROM `t_sys_config`
    WHERE `key` = 'siteNavs'
  );
INSERT INTO t_sys_config (
    `key`,
    `value`,
    `name`,
    `description`,
    `create_time`,
    `update_time`
  )
SELECT 'defaultNodeId',
  '1',
  '默认节点',
  '默认节点',
  (UNIX_TIMESTAMP(now()) * 1000),
  (UNIX_TIMESTAMP(now()) * 1000)
FROM DUAL
WHERE NOT EXISTS(
    SELECT *
    FROM `t_sys_config`
    WHERE `key` = 'defaultNodeId'
  );
INSERT INTO t_sys_config (
    `key`,
    `value`,
    `name`,
    `description`,
    `create_time`,
    `update_time`
  )
SELECT 'tokenExpireDays',
  '365',
  '用户登录有效期(天)',
  '用户登录有效期(天)',
  (UNIX_TIMESTAMP(now()) * 1000),
  (UNIX_TIMESTAMP(now()) * 1000)
FROM DUAL
WHERE NOT EXISTS(
    SELECT *
    FROM `t_sys_config`
    WHERE `key` = 'tokenExpireDays'
  );
INSERT INTO t_sys_config (
    `key`,
    `value`,
    `name`,
    `description`,
    `create_time`,
    `update_time`
  )
SELECT 'scoreConfig',
  '{"postTopicScore":1,"postCommentScore":1,"checkInScore":1}',
  '积分配置',
  '积分配置',
  (UNIX_TIMESTAMP(now()) * 1000),
  (UNIX_TIMESTAMP(now()) * 1000)
FROM DUAL
WHERE NOT EXISTS(
    SELECT *
    FROM `t_sys_config`
    WHERE `key` = 'scoreConfig'
  );

-- 菜单配置
DROP TABLE IF EXISTS `t_menu`;
CREATE TABLE `t_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(20) DEFAULT NULL,
  `name` varchar(256) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `icon` varchar(1024) DEFAULT NULL,
  `path` varchar(1024) DEFAULT NULL,
  `sort_no` bigint(20) NOT NULL DEFAULT '0',
  `status` bigint(20) DEFAULT NULL,
  `create_time` bigint(20) NOT NULL DEFAULT '0',
  `update_time` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO `t_menu` (`id`, `parent_id`, `name`, `title`, `icon`, `path`, `sort_no`, `status`, `create_time`, `update_time`) VALUES
(1, 0, 'Dashboard', '仪表盘', 'icon-dashboard', '/dashboard', 0, 0, (UNIX_TIMESTAMP(now()) * 1000), (UNIX_TIMESTAMP(now()) * 1000)),
(4, 0, 'User', '用户管理', 'icon-user', '/user', 1, 0, (UNIX_TIMESTAMP(now()) * 1000), (UNIX_TIMESTAMP(now()) * 1000)),
(5, 0, '', '帖子管理', '', '', 2, 0, (UNIX_TIMESTAMP(now()) * 1000), (UNIX_TIMESTAMP(now()) * 1000)),
(6, 0, 'Article', '文章管理', '', '/article', 3, 0, (UNIX_TIMESTAMP(now()) * 1000), (UNIX_TIMESTAMP(now()) * 1000)),
(7, 0, 'ForbiddenWord', '违禁词', '', '/forbidden-word', 4, 0, (UNIX_TIMESTAMP(now()) * 1000), (UNIX_TIMESTAMP(now()) * 1000)),
(8, 0, 'Link', '友情链接', '', '/link', 5, 0, (UNIX_TIMESTAMP(now()) * 1000), (UNIX_TIMESTAMP(now()) * 1000)),
(9, 0, 'Settings', '系统设置', 'icon-settings', '/settings', 6, 0, (UNIX_TIMESTAMP(now()) * 1000), (UNIX_TIMESTAMP(now()) * 1000)),
(12, 5, 'TopicNode', '节点管理', '', '/topic/topic-node', 0, 0, (UNIX_TIMESTAMP(now()) * 1000), (UNIX_TIMESTAMP(now()) * 1000)),
(13, 5, 'Topic', '帖子管理', '', '/topic/index', 1, 0, (UNIX_TIMESTAMP(now()) * 1000), (UNIX_TIMESTAMP(now()) * 1000));
```
