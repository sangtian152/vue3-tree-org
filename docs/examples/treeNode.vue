<template>
  <div>
    <div>
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
          @on-node-dblclick="onNodeDblclick"
          @on-node-copy="onNodeCopy"
        >
          <!-- 自定义节点内容 -->
          <!-- <template slot-scope="{node}">
          <div class="tree-org-node__text node-label">{{node.label + node.id}}</div>
        </template> -->
          <!-- 自定义展开按钮 -->
          <!-- <template v-slot:expand="{node}">
          <div>{{node.children.length}}</div>
        </template> -->
        </vue3-tree-org>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyDemo",
  data() {
    return {
      data: {
        id: 1,
        label: "xxx科技有限公司",
        children: [
          {
            id: 2,
            pid: 1,
            label: "产品研发部",
            style: { color: "#fff", background: "#108ffe" },
            children: [
              {
                id: 6,
                pid: 2,
                label: "禁止编辑节点",
                disabled: true,
              },
              {
                id: 7,
                pid: 2,
                label: "研发-后端",
              },
              {
                id: 8,
                pid: 2,
                label: "禁止拖拽节点",
                noDragging: true,
              },
              {
                id: 9,
                pid: 2,
                label: "产品经理",
              },
              {
                id: 10,
                pid: 2,
                label: "测试",
              },
            ],
          },
          {
            id: 3,
            pid: 1,
            label: "客服部",
            children: [
              {
                id: 11,
                pid: 3,
                label: "客服一部",
              },
              {
                id: 12,
                pid: 3,
                label: "客服二部",
              },
            ],
          },
          {
            id: 4,
            pid: 1,
            label: "业务部",
          },
          {
            id: 5,
            pid: 1,
            label: "人力资源中心",
          },
        ],
      },
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
    onNodeDblclick() {
    },
    onNodeCopy() {
    },
    handleNodeAdd(node) {
      console.log(node);
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
