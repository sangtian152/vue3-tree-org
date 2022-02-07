<template>
  <teleport to="body">
    <transition
      name="dialog-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div
        v-show="modelValue"
        :style="position"
        @click="handleMenu"
        ref="eleRef"
        class="zm-tree-contextmenu"
      >
        <ul>
          <template v-for="item in menus">
            <li
              v-if="editable || !['add', 'edit', 'delete'].includes(item.command)"
              class="zm-tree-menu-item"
              :action="item.command"
              :key="item.command"
            >
              {{ item.name }}
            </li>
          </template>
        </ul>
        <textarea class="copy-textarea" ref="inputRef" v-model="copyText"></textarea>
      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useContextmenu } from './use-contextmenu'
import { contextmenuProps, contextmenuEmits } from './contextmenus'
export default defineComponent({
  name: 'Contextmenu',
  props: contextmenuProps,
  emits: contextmenuEmits,
  setup (props, ctx) {
    const inputRef = ref<HTMLInputElement>()
    const eleRef = ref<HTMLElement>()
    const copyText = ref('')
    const oldData = reactive({})
    const contextmenu = useContextmenu(props, ctx, { inputRef, eleRef })

    return {
      eleRef,
      inputRef,
      copyText,
      oldData,
      ...contextmenu
    }
  }

})
</script>
<style lang="scss" scoped>
.zm-tree-contextmenu {
  position: fixed;
  top: 100px;
  left: 100px;
  z-index: 100;
  background: #fff;
  padding: 10px 0;
  overflow: hidden;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 10px 0px rgba(29, 29, 31, 0.1);
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    font-size: 12px;
    padding: 3px 10px;
    cursor: pointer;
    list-style-type: none;
    &:hover {
      color: #2d8cf0;
      background: #f0faff;
    }
  }
  .copy-textarea {
    position: absolute;
    top: -100px;
    left: -100px;
  }
}
</style>
