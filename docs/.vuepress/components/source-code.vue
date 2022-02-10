<script setup lang="ts">
import { computed } from 'vue'
import { ElAffix } from 'element-plus'
const props = defineProps({
  source: {
    type: String,
    required: true,
  },
})

const decoded = computed(() => {
  return decodeURIComponent(props.source)
})
const key = Math.floor(Math.random() * (999999 - 100000) + 100000);
const className = `source_${key}`
</script>

<template>
<div :class="['example-source', className]">
  <div class="language-vue" v-html="decoded"></div>
  <el-affix :target="`.${className}`" position="bottom" :offset="0">
    <div class="demo-block-control" @click="$emit('hide')">
      <span>隐藏代码</span>
    </div>
  </el-affix>
</div>
</template>

<style scoped lang="scss">
.language-vue {
  margin: 0;
  border-radius: 0;
}
.demo-block-control {
  border-top: solid 1px #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #f9fafc;
  text-align: center;
  color: #66b3ff;
  cursor: pointer;
  > span {
    font-size: 14px;
    line-height: 44px;
    transition: .3s;
  }
  &:hover {
    color: #409EFF;
  }
  & .text-slide-enter,
  & .text-slide-leave-active {
    opacity: 0;
    transform: translateX(10px);
  }
}
</style>
