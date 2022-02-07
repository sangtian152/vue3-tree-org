<template><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p>一个简易版组织架构图，组件依赖于<a href="https://github.com/hukaibaihu/vue-org-tree" target="_blank" rel="noopener noreferrer">vue-org-tree<ExternalLinkIcon/></a>，
在此基础上将部分源代码进行优化修改。增加鼠标拖拽和鼠标滚轮缩放，并支持节点拖拽，以及节点编辑等功能。</p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>推荐使用npm安装，它能更好地和<a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack<ExternalLinkIcon/></a>打包工具配合使用。而且可以更好的和
es6配合使用。并且支持按需引入</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vue3-tree-org -S
<span class="token comment"># or </span>
<span class="token function">yarn</span> <span class="token function">add</span> vue3-tree-org
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3>
<p>在 main.js 中写入以下内容：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> vue3TreeOrg <span class="token keyword">from</span> <span class="token string">'vue3-tree-org'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"vue3-tree-org/lib/vue3-tree-org.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vue3TreeOrg<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="最新版本" tabindex="-1"><a class="header-anchor" href="#最新版本" aria-hidden="true">#</a> 最新版本</h3>
<p><a href="https://www.npmjs.com/package/vue3-tree-org" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/vue3-tree-org" alt="NPM version"><ExternalLinkIcon/></a></p>
</template>
