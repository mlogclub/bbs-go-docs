// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ContactFloat from './components/ContactFloat.vue'
import Features from './components/Features.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-bottom': () => h(ContactFloat),
      // 'layout-top': () => h(LanguageDetector)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册组件
    app.component('Features', Features)
    // app.component('LanguageDetector', LanguageDetector)
  }
} satisfies Theme
