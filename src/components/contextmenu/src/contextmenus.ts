import { buildProps, definePropType } from '@/utils/props'
import { isObject, isString } from '@/utils/utils'

import type { ExtractPropTypes } from 'vue'
import type { INodeData, IKeysProps, IMenu, INode } from '@/utils/types'

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
    type: definePropType<INode>(Object),
    required: true
  },
  props: {
    type: definePropType<IKeysProps>(Object)
  },
  x: Number,
  y: Number,
  menus: {
    type: definePropType<IMenu[]>(Array)
  },
  nodeAdd: Function,
  nodeDelete: Function,
  nodeEdit: Function,
  nodeCopy: Function,
  disabled: Boolean
} as const)

export type ContextmenuProps = ExtractPropTypes<typeof contextmenuProps>

export const contextmenuEmits = {
  onNodeDelete: (data:INodeData, node:INode) => isObject(data) && isObject(node),
  onNodeCopy: (str: string) => isString(str),
  contextmenu: (arg:{node: INode, data: INodeData, command:string|null}) => isObject(arg),
  onNodeFocus: (data:INodeData) => isObject(data),
  opened: () => true,
  closed: () => true,
  'update:modelValue': (value: boolean):boolean => typeof value === 'boolean'
}
export type ContextmenuEmits = typeof contextmenuEmits
