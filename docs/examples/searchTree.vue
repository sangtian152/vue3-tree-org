<template>
    <div style="height: 400px;">
        <div class="search-box">
            <span>搜索：</span>
            <input type="text" v-model="keyword" placeholder="请输入搜索内容" @keydown.enter="filter" />
        </div>
        <vue3-tree-org
            ref="tree"
            :data="data"
            :horizontal="horizontal"
            :collapsable="collapsable"
            :label-style="style"
            :node-draggable="true"
            :scalable="false"
            :only-one-node="onlyOneNode"
            :default-expand-level="1"
            :filter-node-method="filterNodeMethod"
            :clone-node-drag="cloneNodeDrag"
            @on-contextmenu="onMenus"
            @on-node-click="onNodeClick"
        />
    </div>
</template>
<script>
export default {
  name: "searchTree",
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
      keyword: '',
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
    filter(){
        this.$refs.tree.filter(this.keyword)
    },
    filterNodeMethod(value, data) {
        console.log(value, data)
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
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
.search-box {
    padding: 10px 15px;
    input {
        width: 200px;
        height: 32px;
        border:1px solid #ddd;
        outline: none;
        border-radius: 5px;
        padding-left: 10px;
    }
}
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
