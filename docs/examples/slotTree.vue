<template>
    <div style="height: 400px;">
        <vue3-tree-org
            :data="data"
            :horizontal="horizontal"
            :collapsable="collapsable"
            :label-style="style"
            :node-draggable="true"
            :only-one-node="onlyOneNode"
            :clone-node-drag="cloneNodeDrag"
            @on-contextmenu="onMenus"
            @on-node-click="onNodeClick"
        >
            <!-- 自定义节点内容 -->
            <template v-slot="{node}">
                <div class="tree-org-node__text node-label">
                    <div class="custom-content">自定义内容</div>
                    <div>节点名称：{{node.label}}</div>
                </div>
            </template>
            <!-- 自定义展开按钮 -->
            <template v-slot:expand="{node}">
                <div>{{node.children.length}}</div>
            </template>
        </vue3-tree-org>
    </div>
</template>
<script>
import dataJson from './demo.json'
export default {
  name: "slotTree",
  data() {
    return {
      data: dataJson,
      horizontal: false,
      collapsable: true,
      onlyOneNode: true,
      cloneNodeDrag: true,
      expandAll: true,
      style: {
        background: "#fff",
        color: "#5e6d82",
      },
    };
  },
  methods: {
    onMenus({ node, command }) {
      console.log(node, command);
    },
    onNodeClick(e, data) {
      this.$Message.info(data.label);
    },
    expandChange() {
      this.toggleExpand(this.data, this.expandAll);
    },
  },
};
</script>
<style lang="scss" scoped>
.tree-org-node__text {
    text-align: left;
    font-size: 14px;
    .custom-content {
        padding-bottom: 8px;
        margin-bottom: 8px;
        border-bottom: 1px solid currentColor;
    }
}
</style>
