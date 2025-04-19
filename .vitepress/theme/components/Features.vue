<template>
  <div class="features-container">
    <div class="features-header">
      <h2>核心功能</h2>
      <p>简单易用，功能强大，满足您的社区需求</p>
    </div>
    <div class="features-grid">
      <!-- 社区互动 -->
      <div class="feature-card">
        <h3>
          <MessageSquare class="icon" />
          社区互动
        </h3>
        <ul class="feature-list">
          <li>话题讨论</li>
          <li>评论回复</li>
          <li>点赞与收藏</li>
          <li>用户关注</li>
        </ul>
      </div>

      <!-- 用户系统 -->
      <div class="feature-card">
        <h3>
          <User class="icon" />
          用户系统
        </h3>
        <ul class="feature-list">
          <li>邮箱注册登录</li>
          <li>个人中心管理</li>
          <li>用户资料设置</li>
          <li>消息通知系统</li>
        </ul>
      </div>

      <!-- 内容管理 -->
      <div class="feature-card">
        <h3>
          <FileText class="icon" />
          内容管理
        </h3>
        <ul class="feature-list">
          <li>文章发布与编辑</li>
          <li>标签分类管理</li>
          <li>评论与互动</li>
          <li>内容审核机制</li>
        </ul>
      </div>

      <!-- 积分系统 -->
      <div class="feature-card">
        <h3>
          <Star class="icon" />
          积分系统
        </h3>
        <ul class="feature-list">
          <li>发帖获取积分</li>
          <li>评论获取积分</li>
          <li>积分等级制度</li>
          <li>积分兑换功能</li>
        </ul>
      </div>

      <!-- 搜索功能 -->
      <div class="feature-card">
        <h3>
          <Search class="icon" />
          搜索系统
        </h3>
        <ul class="feature-list">
          <li>全文检索功能</li>
          <li>话题搜索</li>
          <li>文章搜索</li>
          <li>精准匹配推荐</li>
        </ul>
      </div>

      <!-- 动态系统 -->
      <div class="feature-card">
        <h3>
          <Activity class="icon" />
          动态系统
        </h3>
        <ul class="feature-list">
          <li>发表动态</li>
          <li>图片动态</li>
          <li>动态评论</li>
          <li>动态分享</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MessageSquare, User, FileText, Star, Search, Activity } from 'lucide-vue-next'
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
