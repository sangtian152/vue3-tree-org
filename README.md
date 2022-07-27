# vue3-tree-org

![npm](https://img.shields.io/npm/dm/vue3-tree-org) 
![npm](https://img.shields.io/npm/v/vue3-tree-org) 
![NPM](https://img.shields.io/npm/l/vue3-tree-org) 
[![star](https://gitee.com/sangtian152/vue3-tree-org/badge/star.svg?theme=white)](https://gitee.com/sangtian152/vue3-tree-org/stargazers) 
[![fork](https://gitee.com/sangtian152/vue3-tree-org/badge/fork.svg?theme=white)](https://gitee.com/sangtian152/vue3-tree-org/members) 
![GitHub Repo stars](https://img.shields.io/github/stars/sangtian152/vue3-tree-org?style=social) 
![GitHub forks](https://img.shields.io/github/forks/sangtian152/vue3-tree-org?style=social)


### 介绍
一个基于vue3.x的简易版组织架构图，vue2.x版本请访问[zm-tree-org](https://sangtian152.gitee.io/zm-tree-org)
- 架构图支持拖拽和通过鼠标滚轮缩放
- 支持新增/删除节点
- 支持编辑节点名称
- 支持拖动节点改变树结构
- 支持自定义右键菜单
- 支持slot自定义节点渲染内容
- 支持slot自定义展开按钮渲染内容

### 安装
```
npm install vue3-tree-org --save
# or 
yarn add vue3-tree-org
```

### 引入
```
import { createApp } from 'vue'
import vue3TreeOrg from 'vue3-tree-org';
import "vue3-tree-org/lib/vue3-tree-org.css";

const app = createApp(App)

app.use(vue3TreeOrg)
app.mount('#app')
```
### 使用示例
![](https://oscimg.oschina.net/oscnet/up-84b0329b0dff74d87da1252248deb5aab5e.png)

[示例代码](https://sangtian152.github.io/vue3-tree-org/demo/#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)

### 最新版本

[![NPM version](https://img.shields.io/npm/v/vue3-tree-org)](https://www.npmjs.com/package/vue3-tree-org)

### 文档

[说明文档](https://sangtian152.github.io/vue3-tree-org/guide/#%E4%BB%8B%E7%BB%8D).


### 友情链接
[virtual-tree](https://gitee.com/sangtian152/virtual-tree)虚拟化树形控件，致力于解决数据量过大导致页面卡顿甚至崩溃问题  
[watermark](https://gitee.com/sangtian152/watermark)图片加水印，支持文字水印、图片水印，支持多行  
[html2pdf](https://gitee.com/sangtian152/html2pdf)将html生成pdf，依赖html2canvas和jspdf  
[zm-sign](https://gitee.com/sangtian152/zm-sign)一个简易签名组件，基于vue和canvas  