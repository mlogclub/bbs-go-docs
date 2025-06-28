<template>
  <div class="features-container">
    <div class="features-header">
      <h2>{{ texts.title }}</h2>
      <p>{{ texts.subtitle }}</p>
    </div>
    <div class="features-grid">
      <!-- 社区互动 -->
      <div class="feature-card">
        <h3>
          <MessageSquare class="icon" />
          {{ texts.items.community.title }}
        </h3>
        <ul class="feature-list">
          <li v-for="item in texts.items.community.items" :key="item">{{ item }}</li>
        </ul>
      </div>

      <!-- 用户系统 -->
      <div class="feature-card">
        <h3>
          <User class="icon" />
          {{ texts.items.user.title }}
        </h3>
        <ul class="feature-list">
          <li v-for="item in texts.items.user.items" :key="item">{{ item }}</li>
        </ul>
      </div>

      <!-- 内容管理 -->
      <div class="feature-card">
        <h3>
          <FileText class="icon" />
          {{ texts.items.content.title }}
        </h3>
        <ul class="feature-list">
          <li v-for="item in texts.items.content.items" :key="item">{{ item }}</li>
        </ul>
      </div>

      <!-- 积分系统 -->
      <div class="feature-card">
        <h3>
          <Star class="icon" />
          {{ texts.items.points.title }}
        </h3>
        <ul class="feature-list">
          <li v-for="item in texts.items.points.items" :key="item">{{ item }}</li>
        </ul>
      </div>

      <!-- 搜索功能 -->
      <div class="feature-card">
        <h3>
          <Search class="icon" />
          {{ texts.items.search.title }}
        </h3>
        <ul class="feature-list">
          <li v-for="item in texts.items.search.items" :key="item">{{ item }}</li>
        </ul>
      </div>

      <!-- 动态系统 -->
      <div class="feature-card">
        <h3>
          <Activity class="icon" />
          {{ texts.items.activity.title }}
        </h3>
        <ul class="feature-list">
          <li v-for="item in texts.items.activity.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MessageSquare, User, FileText, Star, Search, Activity } from 'lucide-vue-next'
import { useData } from 'vitepress'
import { computed } from 'vue'
import { useI18n } from '../i18n'

const { site } = useData()
const { getLocaleConfig } = useI18n()

// 获取当前语言的文本
const texts = computed(() => {
  const currentLang = site.value.lang || 'en-US'
  const config = getLocaleConfig(currentLang)
  return config.features
})
</script>

<style scoped>
.features-header {
  text-align: center;
  margin: 36px 0 16px 0;
}

.features-header h2 {
  font-size: 36px;
  font-weight: 600;
  background: linear-gradient(120deg, #646cff, #1677ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  border: none !important;
}

.features-header p {
  font-size: 16px;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 40px 0;
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
}

.feature-card h3 {
  margin: 0 0 16px 0 !important;
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  color: var(--vp-c-brand);
  width: 20px;
  height: 20px;
  stroke-width: 1.5;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--vp-c-text-2);
}

.feature-list li {
  margin: 8px 0;
  padding-left: 20px;
  position: relative;
}

.feature-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--vp-c-brand);
}

@media (max-width: 768px) {
  .features-grid {
    gap: 16px;
  }

  .features-header {
    margin: 32px 0 16px 0;
  }

  .features-header h2 {
    font-size: 28px;
    border-top: none;
  }

  .features-header p {
    font-size: 14px;
    padding: 0 16px;
  }

  .feature-card {
    padding: 20px;
  }
}

/* 添加动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.feature-card:nth-child(1) {
  animation-delay: 0.1s;
}
.feature-card:nth-child(2) {
  animation-delay: 0.2s;
}
.feature-card:nth-child(3) {
  animation-delay: 0.3s;
}
.feature-card:nth-child(4) {
  animation-delay: 0.4s;
}
.feature-card:nth-child(5) {
  animation-delay: 0.5s;
}
.feature-card:nth-child(6) {
  animation-delay: 0.6s;
}

/* 添加响应式悬停效果 */
@media (hover: hover) {
  .feature-card:hover .icon {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }

  .feature-list li {
    transition: all 0.2s ease;
  }

  .feature-list li:hover {
    color: var(--vp-c-brand);
    padding-left: 24px;
  }

  .feature-list li::before {
    transition: all 0.2s ease;
  }
}
</style>
