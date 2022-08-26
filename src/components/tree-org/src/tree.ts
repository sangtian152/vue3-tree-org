import { buildProps, definePropType } from '@/utils/props'
import { isNumber, isObject, isString } from '@/utils/utils'

import type { ExtractPropTypes } from 'vue'
import type { INode, INodeData, IMenu, IKeysProps, IMousePosition, DefineMenus, LoadFn } from '@/utils/types'
export const menus = [
  { name: '复制文本', command: 'copy' },
  { name: '新增节点', command: 'add' },
  { name: '编辑节点', command: 'edit' },
  { name: '删除节点', command: 'delete' }
]

export const treeProps = buildProps({
  data: {
    type: Object,
    required: true
  },
  props: {
    type: definePropType<IKeysProps>(Object),
    default: () => ({
      id: 'id',
      pid: 'pid',
      label: 'label',
      expand: 'expand',
      children: 'children'
    })
  },
  toolBar: {
    type: [Object, Boolean],
    default: () => ({
      expand: true,
      scale: true,
      zoom: true,
      restore: true,
      fullscreen: true
    })
  },
  disabled: {
    // 是否禁用编辑
    type: Boolean,
    default: false
  },
  scalable: {
    // 是否可缩放
    type: Boolean,
    default: true
  },
  draggable: {
    // 是否可拖拽移动位置
    type: Boolean,
    default: true
  },
  draggableOnNode: {
    // 是否可拖拽节点移动位置
    type: Boolean,
    default: false
  },
  nodeDraggable: {
    // 节点是否可拖拽
    type: Boolean,
    default: true
  },
  cloneNodeDrag: {
    // 拷贝并拖拽节点
    type: Boolean,
    default: true
  },
  onlyOneNode: {
    // 是否仅拖动当前节点
    type: Boolean,
    default: true
  },
  clickDelay: {
    // 是否仅拖动当前节点
    type: Number,
    default: 260
  },
  lazy: Boolean, // 懒加载
  load: {
    type: definePropType<LoadFn>(Function)
  }, // 加载子树数据的方法，仅当 lazy 属性为true 时生效
  defaultExpandLevel: Number,
  defaultExpandKeys: {
    type: Array,
    default () {
      return []
    }
  },
  beforeDragEnd: Function,
  horizontal: Boolean,
  selectedKey: {
    type: [Array, String, Number]
  },
  collapsable: Boolean,
  renderContent: Function,
  labelStyle: Object,
  labelClassName: {
    type: [Function, String]
  },
  selectedClassName: {
    type: [Function, String]
  },
  defineMenus: {
    type: definePropType<IMenu[] | DefineMenus>([Array, Function]),
    default () {
      return menus
    }
  },
  nodeAdd: Function,
  nodeDelete: Function,
  nodeEdit: Function,
  nodeCopy: Function,
  filterNodeMethod: Function
} as const)

export type TreeProps = ExtractPropTypes<typeof treeProps>

export const treeEmits = {
  'on-drag': ({ x, y }: IMousePosition) => isNumber(x) && isNumber(y),
  'on-drag-stop': ({ x, y }: IMousePosition) => isNumber(x) && isNumber(y),
  'on-restore': () => true,
  'on-zoom': (val: number) => isNumber(val),
  'on-expand': (e: MouseEvent, data: INodeData, node: INode) => e instanceof MouseEvent && isObject(node) && isObject(data),
  'on-expand-all': (bool: boolean) => typeof bool === 'boolean',
  'on-node-blur': (e: FocusEvent, data: INodeData, node: INode) => e instanceof FocusEvent && isObject(node) && isObject(data),
  'on-node-click': (e: MouseEvent, data: INodeData, node: INode) => e instanceof MouseEvent && isObject(node) && isObject(data),
  'on-node-dblclick': (e: MouseEvent, data: INodeData, node: INode) => e instanceof MouseEvent && isObject(node) && isObject(data),
  'on-node-mouseenter': (e: MouseEvent, data: INodeData, node: INode) => e instanceof MouseEvent && isObject(node) && isObject(data),
  'on-node-mouseleave': (e: MouseEvent, data: INodeData, node: INode) => e instanceof MouseEvent && isObject(node) && isObject(data),
  'on-contextmenu': (data: any) => isObject(data),
  'on-node-copy': (str: string) => isString(str),
  'on-node-delete': (node: INode) => isObject(node),
  'on-node-drag-start': (node: INode) => isObject(node),
  'on-node-drag': (node: INode) => isObject(node),
  'on-node-drag-end': (node: INode, targetNode: INode) => isObject(node) && isObject(targetNode),
  'on-node-focus': (e: FocusEvent, data: INodeData, node: INode) => e instanceof FocusEvent && isObject(node) && isObject(data)

}
export type TreeEmits = typeof treeEmits
