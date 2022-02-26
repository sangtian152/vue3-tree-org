import { buildProps, definePropType } from '@/utils/props'
import { isObject, isString } from '@/utils/utils'
import { UPDATE_MODEL_EVENT } from '@/utils/constants'

import type { ExtractPropTypes } from 'vue'
import type { INode, IKeysProps, IMenu } from '@/utils/types'

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
  onNodeDelete: (data: INode) => isObject(data),
  onNodeCopy: (str: string) => isString(str),
  contextmenu: (arg:{node: INode, command:string|null}) => isObject(arg),
  opened: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value: boolean):boolean => typeof value === 'boolean'
}
export type ContextmenuEmits = typeof contextmenuEmits
