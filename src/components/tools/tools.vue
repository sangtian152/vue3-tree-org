<template>
  <div class="zm-tree-handle">
    <div v-if="tools.scale" class="zm-tree-percent">{{ scale }}</div>
    <div
      v-if="tools.expand"
      @click="handleExpand"
      :title="expandTitle"
      class="zm-tree-handle-item"
    >
      <span class="zm-tree-svg">
        <i
          :class="['treefont', expanded ? 'icon-collapse' : 'icon-expand']"
        ></i>
      </span>
    </div>
    <div
      v-if="tools.zoom"
      @click="handleScale('out')"
      title="放大"
      class="zm-tree-handle-item zoom-out"
    >
      <span class="zm-tree-icon">+</span>
    </div>
    <div
      v-if="tools.zoom"
      @click="handleScale('in')"
      title="缩小"
      class="zm-tree-handle-item zoom-in"
    >
      <span class="zm-tree-icon">-</span>
    </div>
    <div
      v-if="tools.restore"
      @click="handleScale('restore')"
      title="还原"
      class="zm-tree-handle-item"
    >
      <span class="zm-tree-restore"></span>
    </div>
    <div
      v-if="tools.fullscreen"
      @click="handleFullscreen"
      :title="fullTiltle"
      class="zm-tree-handle-item"
    >
      <span class="zm-tree-svg">
        <i
          :class="[
            'treefont',
            fullscreen ? 'icon-unfullscreen' : 'icon-fullscreen',
          ]"
        ></i>
      </span>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue'
export default defineComponent({
  props: {
    scale: String,
    tools: Object
  },
  setup (props, { emit }) {
    const expanded = ref(false)
    const fullscreen = ref(false)
    function handleExpand () {
      expanded.value = !expanded.value
      emit('onExpand')
    }
    function handleScale (scale) {
      if (scale === 'out') {
        emit('onScale', 0.1)
      } else if (scale === 'in') {
        emit('onScale', -0.1)
      } else {
        emit('onRestore')
      }
    }
    function handleFullscreen (e) {
      fullscreen.value = !fullscreen.value
      emit('onFullscreen', e)
    }
    function isFullScreen () {
      return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
    }
    function onResize () {
      // 如果当前非全屏，但是 fullscreen 为true，说明是esc退出全屏
      if (!isFullScreen() && fullscreen.value) {
        // 全屏下按键esc后要执行的动作
        handleFullscreen('esc')
      }
    }
    const expandTitle = computed(() => {
      return expanded.value ? '全部收起' : '全部展开'
    })
    const fullTiltle = computed(() => {
      return fullscreen.value ? '退出全屏' : '全屏'
    })
    onMounted(() => {
      window.addEventListener('resize', onResize)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', onResize)
    })
    return {
      expanded,
      fullscreen,
      expandTitle,
      fullTiltle,
      handleExpand,
      handleScale,
      handleFullscreen
    }
  }
})
</script>
