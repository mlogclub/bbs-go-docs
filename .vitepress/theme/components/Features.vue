 <template>
  <div class="features-container">
    <div class="features-grid">
      <!-- 社区互动 -->
      <div class="feature-card">
        <h3><i class="fas fa-comments"></i> 社区互动</h3>
        <ul class="feature-list">
          <li>话题讨论</li>
          <li>评论回复</li>
          <li>点赞与收藏</li>
          <li>用户关注</li>
        </ul>
      </div>

      <!-- 用户系统 -->
      <div class="feature-card">
        <h3><i class="fas fa-user"></i> 用户系统</h3>
        <ul class="feature-list">
          <li>邮箱注册登录</li>
          <li>个人中心管理</li>
          <li>用户资料设置</li>
          <li>消息通知系统</li>
        </ul>
      </div>

      <!-- 内容管理 -->
      <div class="feature-card">
        <h3><i class="fas fa-file-alt"></i> 内容管理</h3>
        <ul class="feature-list">
          <li>文章发布与编辑</li>
          <li>标签分类管理</li>
          <li>评论与互动</li>
          <li>内容审核机制</li>
        </ul>
      </div>

      <!-- 积分系统 -->
      <div class="feature-card">
        <h3><i class="fas fa-star"></i> 积分系统</h3>
        <ul class="feature-list">
          <li>发帖获取积分</li>
          <li>评论获取积分</li>
          <li>积分等级制度</li>
          <li>积分兑换功能</li>
        </ul>
      </div>

      <!-- 搜索功能 -->
      <div class="feature-card">
        <h3><i class="fas fa-search"></i> 搜索系统</h3>
        <ul class="feature-list">
          <li>全文检索功能</li>
          <li>话题搜索</li>
          <li>文章搜索</li>
          <li>精准匹配推荐</li>
        </ul>
      </div>

      <!-- 动态系统 -->
      <div class="feature-card">
        <h3><i class="fas fa-rss"></i> 动态系统</h3>
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
// 组件逻辑
</script>

<style scoped>
.features-container {
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  padding: 10px;
}

.feature-card {
  background: var(--vp-c-bg);
  border-radius: 4px;
  padding: 25px;
  box-shadow: 0 2px 12px rgba(60, 60, 60, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--vp-c-bg-mute);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--vp-c-brand-1);
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(60, 60, 60, 0.12);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card h3 {
  color: var(--vp-c-text-1);
  font-size: 1.3em;
  margin: 0 0 15px 0;
  display: flex;
  align-items: center;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.feature-card h3 i {
  margin-right: 10px;
  font-size: 1.1em;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 10px;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  margin-bottom: 12px;
  padding-left: 22px;
  position: relative;
  color: var(--vp-c-text-2);
  font-size: 1em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-list li::before {
  content: "✓";
  color: var(--vp-c-brand-1);
  position: absolute;
  left: 0;
  font-weight: bold;
  font-size: 0.9em;
  opacity: 0.8;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 768px) {
  .features-container {
    padding: 15px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 5px;
  }

  .header {
    margin-bottom: 30px;
    padding: 20px 0;
  }

  .header h1 {
    font-size: 2.2em;
  }

  .header p {
    font-size: 1.1em;
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

.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
.feature-card:nth-child(4) { animation-delay: 0.4s; }
.feature-card:nth-child(5) { animation-delay: 0.5s; }
.feature-card:nth-child(6) { animation-delay: 0.6s; }

/* 添加响应式悬停效果 */
@media (hover: hover) {
  .feature-card:hover h3 i {
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