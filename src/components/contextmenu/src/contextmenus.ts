import { buildProps, definePropType } from '@/utils/props'

import type { ExtractPropTypes } from 'vue'
import type { INode, IKeysProps, IMenu } from '@/utils/types'

import { UPDATE_MODEL_EVENT } from '@/utils/constants'

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
  onNodeDelete: (data: INode) => data,
  onNodeCopy: (str: string) => str,
  contextmenu: (arg:{node: any, command:string|null}) => arg,
  opened: () => true,
  closed: () => false,
  [UPDATE_MODEL_EVENT]: (value: boolean) => typeof value === 'boolean'
}
export type ContextmenuEmits = typeof contextmenuEmits
