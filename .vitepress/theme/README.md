# 使用 i18n 系统

## 方案概述

我为您的 VitePress 项目实现了一个完整的 i18n 系统，包含以下特性：

### 1. 集中式配置
- 所有多语言文本集中在 `.vitepress/theme/i18n.ts` 文件中
- 支持嵌套的键值对结构
- 易于维护和扩展

### 2. 组合式 API
- 提供 `useI18n()` 钩子函数
- 支持获取特定语言配置
- 支持点表示法访问嵌套属性

### 3. 自动语言检测
- 基于 VitePress 的 `useData()` API
- 自动获取当前页面语言
- 支持回退到默认语言

## 使用方法

### 在组件中使用

\`\`\`vue
<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import { useI18n } from '../i18n'

const { site } = useData()
const { getLocaleConfig, t } = useI18n()

// 方法1：获取整个语言配置
const texts = computed(() => {
  const currentLang = site.value.lang || 'en-US'
  return getLocaleConfig(currentLang)
})

// 方法2：使用翻译函数（可扩展）
const title = computed(() => {
  const currentLang = site.value.lang || 'en-US'
  return t('features.title', currentLang)
})
</script>

<template>
  <h2>{{ texts.features.title }}</h2>
  <!-- 或者 -->
  <h2>{{ title }}</h2>
</template>
\`\`\`

### 添加新的翻译

只需在 `i18n.ts` 文件中添加新的键值对：

\`\`\`typescript
export const i18nConfig = {
  'en-US': {
    // 现有配置...
    newComponent: {
      title: 'New Component',
      description: 'This is a new component'
    }
  },
  'zh-CN': {
    // 现有配置...
    newComponent: {
      title: '新组件',
      description: '这是一个新组件'
    }
  }
}
\`\`\`

## 优势

1. **可维护性**：所有翻译集中管理
2. **可扩展性**：轻松添加新语言和新组件
3. **类型安全**：TypeScript 支持
4. **性能优化**：按需加载和计算属性缓存
5. **开发体验**：清晰的 API 和良好的代码组织

这种方式比在组件内部硬编码多语言文本要好得多，也比直接修改 VitePress 配置更加灵活和可控。
