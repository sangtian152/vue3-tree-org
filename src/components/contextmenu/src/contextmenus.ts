import type { INode } from '@/utils/types'

import { UPDATE_MODEL_EVENT } from '@/utils/constants'
export const menus = [
  { name: '复制文本', command: 'copy' },
  { name: '新增节点', command: 'add' },
  { name: '编辑节点', command: 'edit' },
  { name: '删除节点', command: 'delete' }
]

export const contextmenuEmits = {
  onNodeDelete: (data: INode) => data,
  onNodeCopy: (str: string) => str,
  contextmenu: (data: INode) => data,
  opened: () => true,
  closed: () => false,
  [UPDATE_MODEL_EVENT]: (value: boolean) => typeof value === 'boolean'
}
export type ContextmenuEmits = typeof contextmenuEmits
