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
import vue3TreeOrg from 'vue3-tree-org';
import "vue3-tree-org/lib/vue3-tree-org.css";

const app = createApp(App)

app.use(vue3TreeOrg)
app.mount('#app')
```
### 源码
[gitee](https://gitee.com/sangtian152/zm-tree-org)

[github](https://github.com/sangtian152/zm-tree-org)

### 最新版本

[![NPM version](https://img.shields.io/npm/v/vue3-tree-org)](https://www.npmjs.com/package/vue3-tree-org)
