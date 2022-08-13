<template><div><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p>一个基于vue3.x的简易版组织架构图，vue2.x版本请访问<a href="https://sangtian152.gitee.io/zm-tree-org" target="_blank" rel="noopener noreferrer">zm-tree-org<ExternalLinkIcon/></a></p>
<ul>
<li>架构图支持拖拽和通过鼠标滚轮缩放</li>
<li>支持新增/删除节点</li>
<li>支持编辑节点名称</li>
<li>支持拖动节点改变树结构</li>
<li>支持自定义右键菜单</li>
<li>支持slot自定义节点渲染内容</li>
<li>支持slot自定义展开按钮渲染内容</li>
</ul>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>推荐使用npm安装，它能更好地和<a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack<ExternalLinkIcon/></a>打包工具配合使用。而且可以更好的和
es6配合使用。并且支持按需引入</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vue3-tree-org -S
<span class="token comment"># or </span>
<span class="token function">yarn</span> <span class="token function">add</span> vue3-tree-org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3>
<p>在 main.js 中写入以下内容：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> vue3TreeOrg <span class="token keyword">from</span> <span class="token string">'vue3-tree-org'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"vue3-tree-org/lib/vue3-tree-org.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vue3TreeOrg<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h3>
<p><a href="https://gitee.com/sangtian152/vue3-tree-org" target="_blank" rel="noopener noreferrer">gitee地址<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/sangtian152/vue3-tree-org" target="_blank" rel="noopener noreferrer">github地址<ExternalLinkIcon/></a></p>
<h3 id="最新版本" tabindex="-1"><a class="header-anchor" href="#最新版本" aria-hidden="true">#</a> 最新版本</h3>
<p><a href="https://www.npmjs.com/package/vue3-tree-org" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/vue3-tree-org" alt="NPM version"><ExternalLinkIcon/></a></p>
</div></template>
