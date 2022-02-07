import { buildProps, definePropType } from '@/utils/props'

import type { ExtractPropTypes } from 'vue'
import type { INode } from '@/utils/types'

import { UPDATE_MODEL_EVENT } from '@/utils/constants'
export const menus = [
  { name: '复制文本', command: 'copy' },
  { name: '新增节点', command: 'add' },
  { name: '编辑节点', command: 'edit' },
  { name: '删除节点', command: 'delete' }
]

export const contextmenuProps = buildProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  node: {
    type: Object,
    required: true
  },
  props: {
    type: Object,
    default: () => ({
      id: 'id',
      pid: 'pid',
      label: 'label',
      expand: 'expand',
      children: 'children'
    })
  },
  x: Number,
  y: Number,
  menus: {
    type: Array,
    default () {
      return menus
    }
  },
  nodeAdd: Function,
  nodeDelete: Function,
  nodeEdit: Function,
  nodeCopy: Function,
  disabled: Boolean
} as const)

export type ContextmenuProps = ExtractPropTypes<typeof contextmenuProps>

export const contextmenuEmits = {
  onNodeDelete: (data: INode) => data,
  onNodeCopy: (str: string) => str,
  contextmenu: (data: INode) => data,
  opened: () => true,
  closed: () => false,
  [UPDATE_MODEL_EVENT]: (value: boolean) => typeof value === 'boolean'
}
export type ContextmenuEmits = typeof contextmenuEmits
