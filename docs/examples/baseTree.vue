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
          :only-one-node="onlyOneNode"
          :default-expand-level="3"
          :clone-node-drag="cloneNodeDrag"
          :node-draging="nodeDragMove"
          :node-drag-end="nodeDragEnd"
          @on-contextmenu="onMenus"
          @on-expand="onExpand"
          @on-node-dblclick="onNodeDblclick"
          @on-node-click="onNodeClick"
        />
      </div>
  </div>
</template>
<script>
import { ElSwitch, ElColorPicker, ElMessage } from 'element-plus'
import { ref } from 'vue'
export default {
  name: "baseTree",
  components: {
    ElSwitch,
    ElColorPicker
  },
  setup() {
    const cloneNodeDrag = ref(true)
    return {
      cloneNodeDrag
    }
  },
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
    onNodeDblclick() {
      console.log('onNodeDblclick')
    },
    onNodeClick(e, data) {
      ElMessage.info(data.label);
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
