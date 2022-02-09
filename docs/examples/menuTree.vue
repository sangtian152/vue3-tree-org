<template>
    <div style="height: 400px;">
        <vue3-tree-org
            :data="data"
            :horizontal="horizontal"
            :collapsable="collapsable"
            :label-style="style"
            :node-draggable="true"
            :define-menus="defineMenus"
            :only-one-node="onlyOneNode"
            :clone-node-drag="cloneNodeDrag"
            @on-contextmenu="onMenus"
        />
    </div>
</template>
<script>
import dataJson from './demo.json'
export default {
  name: "menuTree",
  data() {
    return {
      data: dataJson,
      horizontal: false,
      collapsable: true,
      onlyOneNode: true,
      cloneNodeDrag: true,
      expandAll: true,
      defineMenus:[
          { name:'复制', command: 'copy' },
          { name:'新建', command: 'add' },
          { name:'编辑', command: 'edit' },
          { name:'自定义', command: 'defind' },
      ],
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
