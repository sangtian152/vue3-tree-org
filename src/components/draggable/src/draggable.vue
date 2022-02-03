<template>
  <div
    :style="style"
    :class="[{
      [classNameActive]: enabled,
      [classNameDragging]: dragging,
      [classNameDraggable]: draggable,
    }, className]"
    ref="eleRef"
    @mousedown="elementMouseDown"
    @touchstart="elementTouchDown"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useDraggable } from './use-draggable'
import { draggableProps, draggableEmits } from './draggable'
export default defineComponent({
  replace: true,
  name: 'Draggable',
  props: draggableProps,
  emits: draggableEmits,
  setup (props, ctx) {
    const eleRef = ref<HTMLElement>()
    const draggable = useDraggable(props, ctx, { eleRef })

    return {
      top,
      eleRef,
      ...draggable
    }
  }

  /* created() {

    this.resetBoundsAndMouseState()
  },
  */
})
</script>
<style lang="scss" scoped>
  .zm-draggable {
    touch-action: none;
    position: absolute;
    box-sizing: border-box;
  }
</style>
