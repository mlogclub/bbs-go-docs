// 通用 i18n 配置
export const i18nConfig = {
  'en-US': {
    features: {
      title: 'Core Features',
      subtitle: 'Simple to use, powerful features, meeting your community needs',
      items: {
        community: {
          title: 'Community Interaction',
          items: [
            'Topic Discussions',
            'Comments & Replies',
            'Like & Bookmark',
            'User Following'
          ]
        },
        user: {
          title: 'User System',
          items: [
            'Email Registration & Login',
            'Personal Center Management',
            'User Profile Settings',
            'Message Notification System'
          ]
        },
        content: {
          title: 'Content Management',
          items: [
            'Article Publishing & Editing',
            'Tag Classification Management',
            'Comments & Interactions',
            'Content Moderation Mechanism'
          ]
        },
        points: {
          title: 'Points System',
          items: [
            'Earn Points for Posts',
            'Earn Points for Comments',
            'Points Level System',
            'Points Exchange Features'
          ]
        },
        search: {
          title: 'Search System',
          items: [
            'Full-text Search',
            'Topic Search',
            'Article Search',
            'Precise Match Recommendations'
          ]
        },
        activity: {
          title: 'Activity System',
          items: [
            'Post Activities',
            'Image Activities',
            'Activity Comments',
            'Activity Sharing'
          ]
        }
      }
    },
    // 这里可以添加其他组件的 i18n 配置
    navigation: {
      home: 'Home',
      guide: 'Guide',
      contact: 'Contact',
      demo: 'Demo'
    }
  },
  'zh-CN': {
    features: {
      title: '核心功能',
      subtitle: '简单易用，功能强大，满足您的社区需求',
      items: {
        community: {
          title: '社区互动',
          items: [
            '话题讨论',
            '评论回复',
            '点赞与收藏',
            '用户关注'
          ]
        },
        user: {
          title: '用户系统',
          items: [
            '邮箱注册登录',
            '个人中心管理',
            '用户资料设置',
            '消息通知系统'
          ]
        },
        content: {
          title: '内容管理',
          items: [
            '文章发布与编辑',
            '标签分类管理',
            '评论与互动',
            '内容审核机制'
          ]
        },
        points: {
          title: '积分系统',
          items: [
            '发帖获取积分',
            '评论获取积分',
            '积分等级制度',
            '积分兑换功能'
          ]
        },
        search: {
          title: '搜索系统',
          items: [
            '全文检索功能',
            '话题搜索',
            '文章搜索',
            '精准匹配推荐'
          ]
        },
        activity: {
          title: '动态系统',
          items: [
            '发表动态',
            '图片动态',
            '动态评论',
            '动态分享'
          ]
        }
      }
    },
    navigation: {
      home: '首页',
      guide: '使用手册',
      contact: '联系我们',
      demo: '演示'
    }
  }
}

// 通用的 i18n 获取函数
export function getI18nText(locale: string, key: string) {
  const keys = key.split('.')
  let result = i18nConfig[locale] || i18nConfig['en-US']
  
  for (const k of keys) {
    result = result?.[k]
  }
  
  return result || key
}

// Vue 组合式 API 钩子
export function useI18n() {
  return {
    t: (key: string, locale?: string) => {
      return getI18nText(locale || 'en-US', key)
    },
    getLocaleConfig: (locale: string) => {
      return i18nConfig[locale] || i18nConfig['en-US']
    }
  }
}
