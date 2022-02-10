<template>
    <div style="height: 400px;">
        <vue3-tree-org
            :data="data"
            :horizontal="horizontal"
            :collapsable="collapsable"
            :label-style="style"
            :tool-bar="false"
            :scalable="false"
            :node-draggable="true"
            :define-menus="defineMenus"
            :only-one-node="onlyOneNode"
            :clone-node-drag="cloneNodeDrag"
            @on-contextmenu="onMenus"
        />
    </div>
</template>
<script>
export default {
  name: "menuTree",
  data() {
    return {
      data: {
          "id":1,"label":"xxx科技有限公司",
          "children":[
              {
                  "id":2,"pid":1,"label":"产品研发部",
                  "style":{"color":"#fff","background":"#108ffe"},
                  "children":[
                      {"id":6,"pid":2,"label":"禁止编辑节点","disabled":true},
                      {"id":8,"pid":2,"label":"禁止拖拽节点","noDragging":true},
                      {"id":10,"pid":2,"label":"测试"}
                  ]
              },
              {
                  "id":3,"pid":1,"label":"客服部",
                  "children":[
                      {"id":11,"pid":3,"label":"客服一部"},
                      {"id":12,"pid":3,"label":"客服二部"}
                  ]
              },
              {"id":4,"pid":1,"label":"业务部"}
          ]
      },
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
