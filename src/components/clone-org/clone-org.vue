<template>
  <teleport to="body">
    <div
      v-show="modelValue"
      id="clone-tree-org"
      class="clone-tree-org tree-org"
      :class="{ horizontal, collapsable }">
      <tree-org-node
        :data="data"
        :props="props"
        :isClone="false"
        :horizontal="horizontal"
        :labelStyle="labelStyle"
        :collapsable="collapsable"
        :renderContent="renderContent"
        :labelClassName="labelClassName"
      >
        <template v-if="defaultSlot" v-slot:default="{node}">
          <slot :node="node"></slot>
        </template>
        <template v-if="expandSlot" v-slot:expand="{node}">
          <slot name="expand" :node="node"></slot>
        </template>
      </tree-org-node>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { buildProps, definePropType } from '@/utils/props'
import type { IKeysProps } from '@/utils/types'
import TreeOrgNode from '@/components/node'
const cloneorgProps = buildProps({
  data: {
    type: Object,
    required: true
  },
  props: {
    type: definePropType<IKeysProps>(Object)
  },
  modelValue: Boolean,
  horizontal: Boolean,
  selectedKey: String,
  collapsable: Boolean,
  renderContent: Function,
  labelStyle: Object,
  labelClassName: {
    type: [Function, String]
  }
} as const)
export default defineComponent({
  components: {
    TreeOrgNode: TreeOrgNode
  },
  props: cloneorgProps,
  setup (props, ctx) {
    const defaultSlot = !!ctx.slots.default
    const expandSlot = !!ctx.slots.expand
    return {
      defaultSlot,
      expandSlot
    }
  }
})
</script>
