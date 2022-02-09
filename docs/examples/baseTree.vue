<template>
  <div>
    <div style="display: flex; padding: 10px;">
        <div style="margin-right: 10px"><el-switch v-model="horizontal"></el-switch> 横向</div>
        <div style="margin-right: 10px"><el-switch v-model="collapsable"></el-switch> 可收起</div>
        <div style="margin-right: 10px"><el-switch v-model="disaled"></el-switch> 禁止编辑</div>
        <div style="margin-right: 10px"><el-switch v-model="onlyOneNode"></el-switch> 仅拖动当前节点</div>
        <div style="margin-right: 10px"><el-switch v-model="cloneNodeDrag"></el-switch> 拖动节点副本</div>
    </div>
    <div style="padding: 0 10px 10px">
      背景色：<el-color-picker v-model="style.background" size="small"></el-color-picker>&nbsp;
      文字颜色：<el-color-picker v-model="style.color" size="small"></el-color-picker>&nbsp;
    </div>
      <div style="height: 400px;">
        <vue3-tree-org
          :data="data"
          :disabled="disaled"
          :horizontal="horizontal"
          :collapsable="collapsable"
          :label-style="style"
          :node-draggable="true"
          :only-one-node="onlyOneNode"
          :clone-node-drag="cloneNodeDrag"
          :node-draging="nodeDragMove"
          :node-drag-end="nodeDragEnd"
          @on-contextmenu="onMenus"
          @on-expand="onExpand"
          @on-node-click="onNodeClick"
        />
      </div>
  </div>
</template>
<script>
import dataJson from './demo.json'
import { ElSwitch, ElColorPicker } from 'element-plus'
export default {
  name: "baseTree",
  components: {
    ElSwitch,
    ElColorPicker
  },
  data() {
    return {
      data: dataJson,
      horizontal: false,
      collapsable: true,
      onlyOneNode: true,
      cloneNodeDrag: true,
      expandAll: true,
      disaled: false,
      style: {
        background: "#fff",
        color: "#5e6d82",
      },
    };
  },
  created() {
    this.toggleExpand(this.data, this.expandAll);
  },
  methods: {
    onMenus({ node, command }) {
      console.log(node, command);
    },
    onExpand(e, data) {
      console.log(e, data);
    },
    nodeDragMove(data) {
      console.log(data);
    },
    nodeDragEnd(data, isSelf) {
      console.log(data, isSelf);
    },
    onNodeClick(e, data) {
      this.$Message.info(data.label);
    },
    expandChange() {
      this.toggleExpand(this.data, this.expandAll);
    },
    toggleExpand(data, val) {
      if (Array.isArray(data)) {
        data.forEach((item) => {
          item.expand = val
          if (item.children) {
            this.toggleExpand(item.children, val);
          }
        });
      } else {
        data.expand = val
        if (data.children) {
          this.toggleExpand(data.children, val);
        }
      }
    },
  },
};
</script>
