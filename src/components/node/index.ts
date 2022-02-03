// 功能插件
import log from '@/utils/log'
import drag from '@/directives/drag'
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

function createListener (handler:any, data:any) {
  if (typeof handler === 'function') {
    return function (e:MouseEvent) {
      const target = e.target as HTMLElement
      if (target.className.indexOf('org-tree-node-btn') > -1) return
      handler(e, data)
    }
  }
}
// 判断是否叶子节点
const isLeaf = (data:INode, prop:string) => {
  return !(Array.isArray(data[prop]) && data[prop].length > 0)
}

// 创建 node 节点
export const renderNode = (h:any, data:INode, context:any, root:boolean):any => {
  const { attrs } = context
  const cls = ['tree-org-node']
  const childNodes = []
  const defaultProps = attrs.props.data
  const children = data[defaultProps.children]
  // const show = resolveDirective('v-show')
  // 如果是叶子节点则追加leaf事件
  if (isLeaf(data, defaultProps.children)) {
    cls.push('is-leaf')
  } else if (attrs.collapsable && !data[defaultProps.expand]) { // 追加是否展开class
    cls.push('collapsed')
  }
  if (data.moving) {
    cls.push('tree-org-node__moving')
  }
  // 渲染label块
  childNodes.push(renderLabel(h, data, context, root))

  if (!attrs.collapsable || data[defaultProps.expand]) {
    childNodes.push(renderChildren(h, children, context))
  }
  return withDirectives(h('div', {
    class: cls,
    key: data[defaultProps.id]
  }, childNodes), [[vShow, !data.hidden]])
}

// 创建展开折叠按钮
export const renderBtn = (h:any, data:any, context:any) => {
  const { attrs } = context
  const expandHandler = attrs.onOnExpand
  const cls = ['tree-org-node__expand']
  const defaultProps = attrs.props.data
  if (data[defaultProps.expand]) {
    cls.push('expanded')
  }
  const children = []
  if (context.slots.expand) {
    children.push(context.slots.expand({ node: data }))
  } else {
    children.push(h('span', { class: 'tree-org-node__expand-btn' }))
  }
  return h('span', {
    class: cls,
    onClick: (e:MouseEvent) => { e.stopPropagation(); expandHandler && expandHandler(e, data) }
  }, children)
}

// 创建 label 节点
export const renderLabel = (h:any, data:any, context:any, root:boolean) => {
  const { attrs } = context
  const defaultProps = attrs.props.data
  const label = data[defaultProps.label]
  const renderContent = attrs.renderContent
  // const { directives } = context.data

  const childNodes = []
  if (context.slots.default) {
    childNodes.push(context.slots.default({ node: data }))
  } else if (typeof renderContent === 'function') {
    log.warning('scoped-slot header is easier to use. We recommend users to use scoped-slot header.')
    const vnode = renderContent(h, data)
    vnode && childNodes.push(vnode)
  } else {
    childNodes.push(label)
  }
  if (attrs.collapsable && !isLeaf(data, defaultProps.children)) {
    childNodes.push(renderBtn(h, data, context))
  }

  const cls = ['tree-org-node__inner']
  let { labelStyle, labelClassName, selectedClassName, selectedKey } = attrs

  if (typeof labelClassName === 'function') {
    labelClassName = labelClassName(data)
  }

  labelClassName && cls.push(labelClassName)
  data.className && cls.push(data.className)
  // add selected class and key from props
  if (typeof selectedClassName === 'function') {
    selectedClassName = selectedClassName(data)
  }

  selectedClassName && selectedKey && data[selectedKey] && cls.push(selectedClassName)
  const nodeLabelClass = ['tree-org-node__content']
  if (root) {
    nodeLabelClass.push('is-root')
  } else if (data.newNode) {
    nodeLabelClass.push('is-new')
  }
  // directives
  // let cloneDirs
  // if (Array.isArray(directives)) {
  //   cloneDirs = directives.map(item => {
  //     const newValue = Object.assign({ node: data }, item.value)
  //     return Object.assign({ ...item }, { value: newValue })
  //   })
  // }
  const vNodedrag = resolveDirective('nodedrag')
  const cloneDirs = <DirectiveArguments>[]
  if (attrs.vNodedrag && vNodedrag && !root) {
    cloneDirs.push([vNodedrag, Object.assign({ node: data }, attrs.vNodedrag), '', { l: true, t: true }])
  }
  // event handlers
  const NODEEVENTS = {}
  for (const EKEY in EVENTS) {
    if (Object.prototype.hasOwnProperty.call(EVENTS, EKEY)) {
      const EVENT = EVENTS[EKEY]
      const handler = attrs[EVENT]
      if (handler) {
        NODEEVENTS[EKEY] = createListener(handler, data)
      }
    }
  }
  // texterea event handles
  const focusHandler = attrs.onOnNodeFocus
  const blurHandler = attrs.onOnNodeBlur
  const vFocus = resolveDirective('focus')
  const directives = <DirectiveArguments>[[vShow, data.focused]]
  if (vFocus) {
    directives.push([vFocus, data.focused])
  }
  return h('div', {
    class: nodeLabelClass
  }, [withDirectives(h('div', {
    class: cls,
    style: data.style ? data.style : labelStyle,
    ...NODEEVENTS
  }, childNodes), cloneDirs), withDirectives(h('textarea', {
    class: 'tree-org-node__textarea',
    domProps: {
      placeholder: '请输入节点名称',
      value: data[defaultProps.label]
    },
    onFocus: (e:MouseEvent) => focusHandler && focusHandler(e, data),
    onInput: (event:InputEvent) => { data[defaultProps.label] = (<HTMLInputElement>event.target).value },
    onBlur: (e:MouseEvent) => { data.focused = false; blurHandler && blurHandler(e, data) },
    onClick: (e:MouseEvent) => e.stopPropagation()
  }), directives)])
}

// 创建 node 子节点
export const renderChildren = (h:any, list:any, context:any) => {
  if (Array.isArray(list) && list.length) {
    const children = list.map(item => {
      return renderNode(h, item, context, false)
    })

    return h('div', {
      class: 'tree-org-node__children'
    }, children)
  }
  return ''
}

export const TreeOrgNode = (props: any, context: any) => {
  if (!props.data) return ''
  props.data.root = !props.isClone
  return renderNode(h, props.data, context, true)
}
TreeOrgNode.directives = {
  // 自定义指令
  nodedrag: drag
}
export default TreeOrgNode
