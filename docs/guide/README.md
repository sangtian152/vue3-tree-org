### 介绍

一个简易版组织架构图，组件依赖于[vue-org-tree](https://github.com/hukaibaihu/vue-org-tree)，
在此基础上将部分源代码进行优化修改。增加鼠标拖拽和鼠标滚轮缩放，并支持节点拖拽，以及节点编辑等功能。

### 安装

推荐使用npm安装，它能更好地和[webpack](https://webpack.js.org/)打包工具配合使用。而且可以更好的和
es6配合使用。并且支持按需引入

```shell
npm i vue3-tree-org -S
# or 
yarn add vue3-tree-org
```

### 引入

在 main.js 中写入以下内容：

```javascript
import { createApp } from 'vue'
import vue3TreeOrg from 'zm-tree-org';
import "vue3-tree-org/lib/vue3-tree-org.css";

const app = createApp(App)

app.use(vue3TreeOrg)
app.mount('#app')
```

### 最新版本

[![NPM version](https://img.shields.io/npm/v/zm-tree-org)](https://www.npmjs.com/package/zm-tree-org)
