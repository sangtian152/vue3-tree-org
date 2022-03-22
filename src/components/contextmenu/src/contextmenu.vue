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
