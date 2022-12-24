<template>
  <div ref="eleRef" class="zm-tree-org">
    <div
      ref="zoomRef"
      class="zoom-container"
      :style="zoomStyle"
      @wheel="zoomWheel"
    >
      <Draggable
        :x="left"
        :y="top"
        :class="{ dragging: autoDragging }"
        @dragging="onDrag"
        @dragstop="onDragStop"
        :draggable="draggable"
        :drag-cancel="dragCancel"
      >
        <div
          ref="treeRef"
          class="tree-org"
          :class="{ horizontal, collapsable }"
        >
          <tree-org-node
            :data="treeData"
            :props="keys"
            :lazy="lazy"
            :suffix="suffix"
            :horizontal="horizontal"
            :labelStyle="labelStyle"
            :collapsable="collapsable"
            :renderContent="renderContent"
            :selectedKey="selectedKey"
            :defaultExpandLevel="defaultExpandLevel"
            :selectedClassName="selectedClassName"
            :labelClassName="labelClassName"
            :vNodedrag="nodeargs"
            @on-expand="handleExpand"
            @node-click="handleClick"
            @node-dblclick="handleDblclick"
            @node-mouseenter="nodeMouseenter"
            @node-mouseleave="nodeMouseleave"
            @node-contextmenu="nodeContextmenu"
            @node-focus="handleFocus"
            @node-blur="handleBlur"
          >
          <template v-if="defaultSlot" v-slot:default="{node}">
            <slot :node="node">
              <div class="tree-org-node__text">
                <span>{{ node.label }}</span>
              </div>
            </slot>
          </template>
          <template v-if="expandSlot" v-slot:expand="{node}">
            <slot name="expand" :node="node">
              <span class="tree-org-node__expand-btn"></span>
            </slot>
          </template>
          </tree-org-node>
        </div>
      </Draggable>
    </div>
    <Tools
      v-if="tools.visible"
      :tools="tools.data"
      :scale="zoomPercent"
      @on-expand="expandChange"
      @on-scale="zoomOrgchart"
      @on-restore="restoreOrgchart"
      @on-fullscreen="handleFullscreen" />
    <clone-org
      v-if="nodeDraggable"
      v-model="nodeMoving"
      :props="keys"
      :data="cloneData"
      :horizontal="horizontal"
      :label-style="labelStyle"
      :collapsable="collapsable"
      :render-content="renderContent"
      :label-class-name="labelClassName"
    >
      <template v-if="defaultSlot" v-slot:default="{node}">
        <slot :node="node">
          <div class="tree-org-node__text">
            <span>{{ node[keys.label] }}</span>
          </div>
        </slot>
      </template>
      <template v-if="expandSlot" v-slot:expand="{node}">
        <slot name="expand" :node="node">
          <span class="tree-org-node__expand-btn"></span>
        </slot>
      </template>
    </clone-org>
    <Contextmenu
      v-if="nodeMenus.length"
      v-model="contextmenu"
      :x="menuX"
      :y="menuY"
      :node="menuData"
      :data="data"
      :props="keys"
      :menus="nodeMenus"
      :disabled="disabled"
      :node-add="nodeAdd"
      :node-delete="nodeDelete"
      :node-edit="nodeEdit"
      :node-copy="nodeCopy"
      @contextmenu="
        (arg) => {
          $emit('on-contextmenu', arg);
        }
      "
      @on-node-copy="
        (txt) => {
          $emit('on-node-copy', txt);
        }
      "
      @on-node-delete="
        (txt) => {
          $emit('on-node-delete', txt);
        }
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TreeOrgNode from '@/components/node'
import Tools from '@/components/tools'
import Draggable from '@/components/draggable'
import CloneOrg from '@/components/clone-org'
import Contextmenu from '@/components/contextmenu'
import drag from '@/directives/drag'
import { treeProps, treeEmits } from './tree'
import { useTree } from './use-tree'
export default defineComponent({
  name: 'vue3TreeOrg',
  components: {
    Tools,
    CloneOrg,
    Draggable,
    Contextmenu,
    TreeOrgNode
  },
  directives: {
    nodedrag: drag
  },
  props: treeProps,
  emits: treeEmits,
  setup (props, ctx) {
    const defaultSlot = !!ctx.slots.default
    const expandSlot = !!ctx.slots.expand
    const eleRef = ref<HTMLElement>()
    const treeRef = ref<HTMLElement>()
    const zoomRef = ref<HTMLElement>()
    const treeOrg = useTree(props, ctx, { eleRef, treeRef, zoomRef })
    return {
      eleRef,
      treeRef,
      zoomRef,
      defaultSlot,
      expandSlot,
      ...treeOrg
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
