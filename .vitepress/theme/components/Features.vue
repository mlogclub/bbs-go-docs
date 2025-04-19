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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle><circle cx="19" cy="5" r="1"></circle><path d="M10.59 10.59a2 2 0 0 0 2.83 2.83"></path></svg>
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
// 不需要导入Lucide图标组件，直接使用SVG
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
    transform: scale(1.1) rotate(5deg);
  }

  .feature-list li:hover {
    color: var(--vp-c-brand-1);
    transform: translateX(5px);
  }

  .feature-list li:hover::before {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>
