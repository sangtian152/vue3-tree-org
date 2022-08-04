<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import { ElTooltip, ElCollapseTransition } from 'element-plus'
import { useClipboard } from '@vueuse/core'
import { useToggle } from '../composables/toggle'
import Example from './example.vue'
import SourceCode from './source-code.vue'

const props = defineProps<{
  source: string
  path: string
  css?: string
  cssPreProcessor?: string
  js?: string
  html?: string
  demos: object
  rawSource: string
  description?: string
}>()

const vm = getCurrentInstance()!

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, setSourceVisible] = useToggle()

const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../examples/', '').replace('.vue', '')] =
      props.demos[key].default
  })

  return demos
})

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

const copyCode = async () => {
  const { $message } = vm.appContext.config.globalProperties
  if (!isSupported) {
    $message.error('浏览器不支持自动复制')
  }
  try {
    await copy()
    $message.success('已复制')
  } catch (e: any) {
    $message.error(e.message)
  }
}
</script>

<template>
  <ClientOnly>
    <p text="sm" v-html="decodedDescription" />
    <div class="example">
      <div class="op-btns">
        <el-tooltip
          effect="dark"
          content="复制代码"
          placement="top"
        >
          <div class="op-btn" @click="copyCode">
              <span class="treefont icon-copy"></span>
          </div>
        </el-tooltip>
        <el-tooltip
          effect="dark"
          content="查看源代码"
          placement="top"
        >
          <div class="op-btn" @click="setSourceVisible">
            <span class="treefont icon-code"></span>
          </div>
        </el-tooltip>
      </div>
      <Example :file="path" :demo="formatPathDemos[path]" />
      <!-- <el-divider v-if="sourceVisible" /> -->
      <el-collapse-transition>
        <SourceCode v-show="sourceVisible" :source="source" @hide="setSourceVisible" />
      </el-collapse-transition>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.example {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #ddd;
    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: #909399;
      transition: 0.2s;
      .iconfont {
          font-size: 22px;
      }
    }
  }
}
</style>
