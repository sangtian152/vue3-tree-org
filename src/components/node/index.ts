// 功能插件
import log from '@/utils/log'
import drag from '@/directives/drag'
import focus from '@/directives/focus'
import { vShow, h, resolveDirective, withDirectives } from 'vue'
import type { DirectiveArguments } from 'vue'
import type { INode } from '@/utils/types'

const EVENTS = {
  onClick: 'onNodeClick',
  onDblclick: 'onNodeDbclick',
  onContextmenu: 'onNodeContextmenu',
  onMouseenter: 'onNodeMouseenter',
  onMouseleave: 'onNodeMouseleave'
}

function createListener (handler:any, node:INode) {
  if (typeof handler === 'function') {
    return function (e:MouseEvent) {
      const target = e.target as HTMLElement
      if (target.className.indexOf('org-tree-node-btn') > -1) return
      handler(e, node)
    }
  }
}
// 判断是否叶子节点
const isLeaf = (data:INode, prop:string) => {
  return !(Array.isArray(data[prop]) && data[prop].length > 0) || data.isLeaf
}

// 创建 node 节点
export const renderNode = (h:any, data:INode, context:any):any => {
  const { attrs } = context
  const cls = ['tree-org-node']
  const childNodes = []
  const { expand, $$level, children, id } = data
  if (expand === undefined && $$level < attrs.defaultExpandLevel) {
    data.expand = true
  }
  const isExpand = data.expand
  // 如果是叶子节点则追加leaf事件
  if (isLeaf(data, 'children')) {
    cls.push('is-leaf')
  } else if (attrs.collapsable && !isExpand) { // 追加是否展开class
    cls.push('collapsed')
  }
  if (data.moving) {
    cls.push('tree-org-node__moving')
  }
  // 渲染label块
  childNodes.push(renderLabel(h, data, context))
  if (!attrs.collapsable || isExpand) {
    childNodes.push(renderChildren(h, children, context))
  }
  return withDirectives(h('div', {
    class: cls,
    key: id
  }, childNodes), [[vShow, !data.hidden]])
}

// 创建展开折叠按钮
export const renderBtn = (h:any, node:INode, context:any) => {
  const { attrs } = context
  const expandHandler = attrs.onOnExpand
  const cls = ['tree-org-node__expand']
  if (node.expand) {
    cls.push('expanded')
  }
  const children = []
  if (context.slots.expand) {
    children.push(context.slots.expand({ node }))
  } else {
    children.push(h('span', { class: 'tree-org-node__expand-btn' }))
  }
  return h('span', {
    class: cls,
    onClick: (e:MouseEvent) => { e.stopPropagation(); expandHandler && expandHandler(e, node) }
  }, children)
}

// 创建 label 节点
export const renderLabel = (h:any, node:INode, context:any) => {
  const { attrs } = context
  const defaultProps = attrs.props
  const renderContent = attrs.renderContent
  // const { directives } = context.data
  const { label } = node
  const childNodes = []
  if (context.slots.default) {
    childNodes.push(context.slots.default({ node }))
  } else if (typeof renderContent === 'function') {
    log.warning('scoped-slot header is easier to use. We recommend users to use scoped-slot header.')
    const vnode = renderContent(h, node)
    vnode && childNodes.push(vnode)
  } else {
    childNodes.push(label)
  }
  if (attrs.collapsable && !isLeaf(node, 'children')) {
    childNodes.push(renderBtn(h, node, context))
  }

  const cls = ['tree-org-node__inner']
  let { labelStyle, labelClassName, selectedClassName, selectedKey } = attrs
  if (typeof labelClassName === 'function') {
    labelClassName = labelClassName(node)
  }

  labelClassName && cls.push(labelClassName)
  node.className && cls.push(node.className)
  // add selected class and key from props
  if (typeof selectedClassName === 'function') {
    selectedClassName = selectedClassName(node)
  }
  if (selectedKey !== undefined) {
    selectedKey = Array.isArray(selectedKey) ? selectedKey : [selectedKey]
  }
  selectedClassName && selectedKey && selectedKey.includes(node.id) && cls.push(selectedClassName)
  const nodeLabelClass = ['tree-org-node__content']
  if (node.$$root) {
    nodeLabelClass.push('is-root')
  }
  if (!node.label) {
    nodeLabelClass.push('is-empty')
  }
  if (node.$$focused) {
    nodeLabelClass.push('is-edit')
  }
  const vNodedrag = resolveDirective('nodedrag')
  const cloneDirs = <DirectiveArguments>[]
  if (attrs.vNodedrag && vNodedrag && !node.$$root) {
    cloneDirs.push([vNodedrag, Object.assign({ node: node }, attrs.vNodedrag), '', { l: true, t: true }])
  }
  // event handlers
  const NODEEVENTS = {}
  for (const EKEY in EVENTS) {
    if (Object.prototype.hasOwnProperty.call(EVENTS, EKEY)) {
      const EVENT = EVENTS[EKEY]
      const handler = attrs[EVENT]
      if (handler) {
        NODEEVENTS[EKEY] = createListener(handler, node)
      }
    }
  }
  // texterea event handles
  const focusHandler = attrs.onNodeFocus
  const blurHandler = attrs.onNodeBlur
  const vFocus = resolveDirective('focus')
  const directives = <DirectiveArguments>[[vShow, node.$$focused]]
  if (vFocus) {
    directives.push([vFocus, node.$$focused])
  }
  return h('div', {
    class: nodeLabelClass
  }, [withDirectives(h('div', {
    class: cls,
    style: node.style ? node.style : labelStyle,
    ...NODEEVENTS
  }, childNodes), cloneDirs), withDirectives(h('textarea', {
    class: 'tree-org-node__textarea',
    placeholder: '请输入节点名称',
    value: node.label,
    onFocus: (e:FocusEvent) => { focusHandler && focusHandler(e, node.$$data, node) },
    onInput: (event:InputEvent) => { node.label = (<HTMLInputElement>event.target).value },
    onBlur: (e:FocusEvent) => {
      if (node.$$data.focused !== undefined) node.$$data.focused = false
      node.$$data[defaultProps.label] = (<HTMLInputElement>e.target).value
      node.$$focused = false
      blurHandler && blurHandler(e, node.$$data, node)
    },
    onClick: (e:MouseEvent) => e.stopPropagation()
  }), directives)])
}

// 创建 node 子节点
export const renderChildren = (h:any, list:any, context:any) => {
  if (Array.isArray(list) && list.length) {
    const children = list.filter(item => !item.$$hidden).map(item => {
      return renderNode(h, item, context)
    })

    return h('div', {
      class: 'tree-org-node__children'
    }, children)
  }
  return ''
}

export const TreeOrgNode = (props: any, context: any) => {
  if (!props.data) return ''
  props.data.$$root = !props.isClone
  return renderNode(h, props.data, context)
}
TreeOrgNode.directives = {
  // 自定义指令
  focus,
  nodedrag: drag
}
export default TreeOrgNode
