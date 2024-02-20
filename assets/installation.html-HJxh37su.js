import{_ as t}from"./qq-ENlvGlf_.js";import{_ as l,r as p,o as c,c as o,b as n,d as s,e,a as i}from"./app-IzM8I3pj.js";const u={},r=i('<h1 id="安装流程" tabindex="-1"><a class="header-anchor" href="#安装流程" aria-hidden="true">#</a> 安装流程</h1><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">提示</p><p>本安装流程介绍的是如何使用Docker快速安装bbs-go，在安装之前请确保您已经正确安装并启动Docker服务</p></div><p>安装步骤如下：</p><ol><li>在你的电脑上创建目录，创建目录 <code>bbs-go-docker</code>，并进入该目录</li><li>准备SQL初始化脚本 在<code>bbs-go-docker</code>目录中创建文件：<code>.docker-compose/mysql/docker-entrypoint-initdb.d/init.sql</code>，该文件为SQL初始化脚本。SQL脚本内容请加QQ群获取：</li></ol><p><img src="'+t+`" alt=""></p><ol start="3"><li>创建<code>docker-compose.yml</code>文件</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> bbs<span class="token punctuation">-</span>go<span class="token punctuation">-</span>mysql
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;mysql:8.0&#39;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> bbsgo_db
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> bbsgo
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> .docker<span class="token punctuation">-</span>compose/mysql/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d<span class="token punctuation">:</span>/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d <span class="token comment"># 初始化脚本件目录, 这个目录中的.sh/sql文件会以字母顺序依次执行</span>
      <span class="token comment"># - ./mysql:/var/lib/mysql # 挂载数据件目录.如果非root账号执行，挂载目录必须是登录账号下目录</span>
      <span class="token comment"># - .docker-compose/mysql/conf.d:/etc/mysql/conf.d # 挂在配置文件目录</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token string">&#39;/usr/bin/mysql --user=bbsgo --password=123456 bbsgo_db --execute &quot;SHOW TABLES;&quot;&#39;</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 3s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 300s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">100</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>character<span class="token punctuation">-</span>set<span class="token punctuation">-</span>server=utf8mb4 <span class="token punctuation">-</span><span class="token punctuation">-</span>collation<span class="token punctuation">-</span>server=utf8mb4_unicode_ci

  <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> bbs<span class="token punctuation">-</span>go<span class="token punctuation">-</span>server
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mlogclub/bbs<span class="token punctuation">-</span>go<span class="token punctuation">-</span>server<span class="token punctuation">:</span>latest
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> service_healthy

    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8082<span class="token punctuation">:</span><span class="token number">8082</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
      <span class="token key atrule">context</span><span class="token punctuation">:</span> ./server
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/docker<span class="token punctuation">:</span>/data
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> on<span class="token punctuation">-</span>failure

  <span class="token key atrule">site</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> bbs<span class="token punctuation">-</span>go<span class="token punctuation">-</span>site
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mlogclub/bbs<span class="token punctuation">-</span>go<span class="token punctuation">-</span>site<span class="token punctuation">:</span>latest
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> server
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span><span class="token number">3000</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
      <span class="token key atrule">context</span><span class="token punctuation">:</span> ./site
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> on<span class="token punctuation">-</span>failure


  <span class="token key atrule">admin</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> bbs<span class="token punctuation">-</span>go<span class="token punctuation">-</span>admin
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mlogclub/bbs<span class="token punctuation">-</span>go<span class="token punctuation">-</span>admin<span class="token punctuation">:</span>latest
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> server
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
      <span class="token key atrule">context</span><span class="token punctuation">:</span> ./admin
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> on<span class="token punctuation">-</span>failure

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>使用<code>docker-compose up</code>命令启动启动服务</li></ol><blockquote><p>如果你没有权限执行docker-compose命令，你可能需要用到sudo</p></blockquote><p>此命令将下载所需的Docker镜像（如果本地不存在），并启动容器。</p><ol start="5"><li>服务启动成功，可通过浏览器访问服务，服务地址如下：</li></ol>`,11),k={href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},d={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=p("ExternalLinkIcon");return c(),o("div",null,[r,n("ul",null,[n("li",null,[s("前台: "),n("a",k,[s("http://localhost:3000"),e(a)])]),n("li",null,[s("后台: "),n("a",d,[s("http://localhost:8080"),e(a)])])])])}const _=l(u,[["render",v],["__file","installation.html.vue"]]);export{_ as default};
