<template>
  <teleport to="body">
    <div v-show="modelValue" id="clone-tree-org" class="clone-tree-org tree-org">
      <tree-org-node
        :data="data"
        :props="props"
        :is-clone="false"
        :horizontal="horizontal"
        :label-style="labelStyle"
        :collapsable="collapsable"
        :render-content="renderContent"
        :label-class-name="labelClassName"
      >
        <template v-slot:default="{node}">
          <slot :node="node"></slot>
        </template>
        <template v-slot:expand="{node}">
          <slot name="expand" :node="node"></slot>
        </template>
      </tree-org-node>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TreeOrgNode from '@/components/node'
export default defineComponent({
  components: {
    TreeOrgNode: TreeOrgNode
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    props: {
      type: Object,
      default: () => ({
        label: 'label',
        expand: 'expand',
        children: 'children'
      })
    },
    modelValue: Boolean,
    horizontal: Boolean,
    selectedKey: String,
    collapsable: Boolean,
    renderContent: Function,
    labelStyle: Object,
    labelClassName: [Function, String],
    selectedClassName: [Function, String]
  }
})
</script>
<style lang="scss" scoped>
  .clone-tree-org{
    opacity: 0;
    position: fixed;
    top:0;
    left:0;
    z-index:1000;
  }
</style>
