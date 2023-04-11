<template>
    <div style="height: 400px;">
        <vue3-tree-org
            lazy
            :data="data"
            :load="loadData"
            :horizontal="horizontal"
            :collapsable="collapsable"
            :label-style="style"
            :node-draggable="true"
            :scalable="false"
            @on-node-click="onNodeClick"
        />
    </div>
</template>
<script>
export default {
  name: "slotTree",
  data() {
    return {
      data: {
          "id":1,"label":"xxx科技有限公司"
      },
      horizontal: false,
      collapsable: true,
      expandAll: true,
      style: {
        background: "#fff",
        color: "#5e6d82",
      },
    };
  },
  methods: {
    loadData(node, resolve) {
      if (node.$$level === 0) {
          return resolve([{ label: 'region', id: `${node.id}-1`, pid: node.id }]);
      }
      if (node.$$level > 1) return resolve([]);
      setTimeout(() => {
        const data = [{
          label: 'leaf',
          id: `${node.id}-1`,
          pid: node.id,
          isLeaf: true
        }, {
          label: 'zone',
          id: `${node.id}-2`,
          pid: node.id,
        }];

        resolve(data);
      }, 100);
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
