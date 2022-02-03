import { ref, nextTick, computed, onMounted, onUnmounted } from 'vue'
import log from '@/utils/log'
import type { SetupContext } from 'vue'
import type { ContextmenuEmits } from './contextmenus'
import type { IRefs } from '@/utils/types'
export const useContextmenu = (
  defaultProps: any,
  { emit }: SetupContext<ContextmenuEmits>,
  refs: IRefs
) => {
  const copyText = ref('')
  // 递归遍历实现
  function getNodeById (data: any, key: any, value: any): any {
    if (data[key] === value) {
      return data
    } else if (Array.isArray(data.children)) {
      const list = data.children
      for (let i = 0, len = list.length; i < len; i++) {
        const row = list[i]
        const pNode = getNodeById(row, key, value)
        if (pNode) {
          return pNode
        }
      }
    }
  }
  // 移除节点
  function handleDelete () {
    const { props, data, node } = defaultProps
    if (defaultProps.nodeDelete) {
      defaultProps.nodeDelete(node)
      return
    }
    if (node.root) {
      log.pretty('[提示] ', '根节点不允许删除', 'danger')
      return
    }
    const { id, pid, children } = props.data
    const oldPaNode = getNodeById(data, id, node[pid])
    const list = oldPaNode[children]
    for (let i = 0, len = list.length; i < len; i++) {
      if (list[i][id] === node[id]) {
        list.splice(i, 1)
        emit('onNodeDelete', node)
        break
      }
    }
  }
  function handleMenu (e: MouseEvent) {
    const el = e.target as HTMLElement
    if (el.className === 'zm-tree-menu-item') {
      const command = el.getAttribute('action')
      switch (command) {
        case 'copy':
          handleCopy()
          break
        case 'add':
          handleAdd()
          break
        case 'edit':
          handleEdit()
          break
        case 'delete':
          handleDelete()
          break
      }
      emit('contextmenu', { command, node: defaultProps.node })
      emit('update:modelValue', false)
    }
  }
  function handleCopy () {
    if (defaultProps.nodeCopy) {
      defaultProps.nodeCopy(defaultProps.node)
      return
    }
    copyText.value = defaultProps.node[defaultProps.props.label]
    nextTick(() => {
      if (refs.inputRef && refs.inputRef.value) {
        refs.inputRef && refs.inputRef.value.select() // 选中文本
        document.execCommand('copy') // 执行浏览器复制命令
        emit('onNodeCopy', copyText.value)
        log.pretty('[提示] ', '文本复制成功', 'success')
      }
    })
  }
  function handleAdd () {
    if (defaultProps.nodeAdd) {
      defaultProps.nodeAdd(defaultProps.node)
      return
    }
    const { id, pid, label, expand, children } = defaultProps.props
    const { node } = defaultProps
    const json = {
      [id]: String(new Date().getTime()),
      [pid]: node[id],
      [label]: '',
      [expand]: false,
      [children]: [],
      newNode: true,
      focused: true
    }
    if (Array.isArray(node[children])) {
      node[children].push(json)
    } else {
      node[children] = [json]
    }
  }
  function handleEdit () {
    const { nodeEdit, node } = defaultProps
    if (nodeEdit) {
      nodeEdit(node)
      return
    }
    node.focused = true
  }
  function handleClose (e: MouseEvent) {
    if (defaultProps.modelValue) {
      if (refs.eleRef.value && refs.eleRef.value.contains(e.target as Node)) {
        return false
      }
      emit('update:modelValue', false)
    }
  }
  function afterEnter () {
    emit('opened')
  }
  function afterLeave () {
    emit('closed')
  }
  const position = computed(() => {
    return {
      left: `${defaultProps.x}px`,
      top: `${defaultProps.y}px`
    }
  })
  const editable = computed(() => {
    return !defaultProps.disabled && !defaultProps.node.disabled
  })
  // mounted
  onMounted(() => {
    document.addEventListener('mousedown', handleClose)
  })
  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClose)
  })

  return {
    position,
    editable,
    handleMenu,
    handleEdit,
    handleClose,
    afterEnter,
    afterLeave
  }
}
