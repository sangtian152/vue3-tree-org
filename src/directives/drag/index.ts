import { isObject } from '@/utils/utils'
import type { IContext, INode, INodeData, IKeysObject } from '@/utils/types'
import type { ObjectDirective, DirectiveBinding } from 'vue'
// 递归遍历处理数据
const recurseData = function (data: INodeData | INodeData[], keys: IKeysObject, cb: { (item:INodeData): void; }) {
  const { children } = keys
  if (isObject(data)) {
    fn(data)
  } else if (Array.isArray(data)) {
    for (let i = 0, len = data.length; i < len; i++) {
      fn(data[i])
    }
  }
  function fn (obj:INodeData) {
    cb(obj)
    if (Array.isArray(obj[children])) {
      const list = obj[children]
      for (let i = 0, len = list.length; i < len; i++) {
        fn(list[i])
      }
    }
  }
}
// 获取父级节点
const getNodeById = function (node: INodeData, keys: IKeysObject, value: string): any {
  const { id, children } = keys
  if (node[id] === value) {
    return node
  } else if (Array.isArray(node[children])) {
    const list = node[children]
    for (let i = 0, len = list.length; i < len; i++) {
      const row = list[i]
      const pNode = getNodeById(row, keys, value)
      if (pNode) {
        return pNode
      }
    }
  }
}
// 移除节点
const removeNode = function (node: INodeData, context: IContext) {
  const { keys, data, onlyOneNode } = context
  const { id, pid, children } = keys
  const oldPaNode = getNodeById(data, keys, node[pid])
  const list = oldPaNode[children]
  let index
  for (let i = 0, len = list.length; i < len; i++) {
    if (list[i][id] === node[id]) {
      list.splice(i, 1)
      index = i
      break
    }
  }
  // 如果仅移动当前节点，把当前节点的子节点添加到当前节点的父节点，并把当前节点子节点移除
  const childNodes = node[children]
  if (onlyOneNode && index !== undefined && childNodes) {
    node[children] = []
    childNodes.forEach((it: INodeData) => {
      it[pid] = oldPaNode[id]
    })
    oldPaNode[children].splice(index, 0, ...childNodes)
  }
}
// 新增子节点节点
const addChildNode = function (node: INode, context: IContext) {
  const { parenNode, onlyOneNode, cloneNodeDrag } = context
  if (parenNode.value) {
    const { keys } = context
    const { id, pid } = keys
    const parentData = parenNode.value.$$data
    const nodeClone = JSON.parse(JSON.stringify(node.$$data))

    if (!cloneNodeDrag) {
      // 如果拖拽节点
      removeNode(nodeClone, context)
      nodeClone[pid] = parentData[id]
      parentData.children ? parentData.children.push(nodeClone) : parentData.children = [].concat(nodeClone)
    } else {
      // 如果拷贝并拖拽节点
      recurseData(nodeClone, keys, function (item: INodeData) {
        if (typeof item[id] === 'string' &&
          item[id].indexOf('clone-node') !== -1) {
          item[id] = `clone-node-${item[id]}`
        }
      })
      const { children } = keys
      if (onlyOneNode && Array.isArray(nodeClone[children])) {
        nodeClone[children] = []
      }
      nodeClone[keys.pid] = parentData[keys.id]
      parentData.children ? parentData.children.push(nodeClone) : parentData.children = [nodeClone]
    }
  }
}
const drag:ObjectDirective = {
  beforeMount (el: HTMLElement, binding: DirectiveBinding) {
    const { l, t } = binding.modifiers
    const { drag, dragData, node, handleStart, handleMove, handleEnd } = binding.value
    const { value }:{value: any } = binding
    const instance = { ...dragData }
    el.addEventListener('mousedown', handleDownCb)
    let offsetLeft = 0
    let hasRender = false
    let cloneTree: HTMLElement | null
    let screenX = 0; let screenY = 0
    function initData (e: MouseEvent) { // 初始化拖动数据
      e.stopPropagation()
      screenX = e.screenX
      screenY = e.screenY
      offsetLeft = 0
      instance.contextmenu.value = false // 隐藏右键菜单
      const { keys, onlyOneNode } = instance
      if (onlyOneNode) { // 如果是仅移动当前节点
        const { children } = keys
        const cloneNode = { ...node.$$data }
        cloneNode[children] = []
        instance.cloneData.value = cloneNode
      } else {
        instance.cloneData.value = node.$$data
      }
    }
    function handleDownCb (e: MouseEvent) {
      const target = e.target as HTMLElement
      if (drag === false ||
        e.button !== 0 ||
        node.focused ||
        node.noDragging ||
        target.className.indexOf('tree-org-node-btn') > -1) {
        return false
      }
      initData(e)
      document.addEventListener('mousemove', handleMoveCb)
      document.addEventListener('mouseup', handleUpCb)
      handleEmit('start')
    }
    function moveStart (e: MouseEvent) {
      instance.nodeMoving.value = true
      node.moving = true
      let ndom:any = el
      while (!ndom.classList.contains('tree-org-node')) {
        offsetLeft += ndom.offsetLeft
        ndom = ndom.offsetParent
      }
      // 拖动节点副本
      offsetLeft = offsetLeft + 2
      cloneTree = document.querySelector('#clone-tree-org')
      if (cloneTree) {
        cloneTree.style.width = `${ndom.clientWidth}px`
        cloneTree.style.opacity = '0.8'
        cloneTree.style.left = e.clientX - offsetLeft + 'px'
        cloneTree.style.top = e.clientY + 2 + 'px'
      }
    }
    function handleMoveCb (e: MouseEvent) {
      e.preventDefault()
      if (Math.abs(e.screenX - screenX) < 5 &&
        Math.abs(e.screenY - screenY) < 5) {
        return false
      }
      if (!hasRender) {
        hasRender = true
        moveStart(e)
      }
      if ((l && t) && value) {
        if (cloneTree) {
          cloneTree.style.left = e.clientX - offsetLeft + 'px'
          cloneTree.style.top = e.clientY + 2 + 'px'
        }
        handleEmit('move')
        return
      }

      if (l && value) {
        el.style.left = e.clientX - offsetLeft + 'px'
        handleEmit('move')
        return
      }
      if (t && value) {
        el.style.top = e.clientY + 'px'
        handleEmit('move')
      }
    }
    function handleUpCb (e: MouseEvent) {
      document.removeEventListener('mousemove', handleMoveCb)
      document.removeEventListener('mouseup', handleUpCb)
      if (!hasRender) {
        return
      }
      hasRender = false
      cloneTree = null
      node.moving = false
      instance.nodeMoving.value = false
      const movingNode = document.querySelector('.tree-org-node__moving')
      if (movingNode && movingNode.contains(e.target as HTMLElement)) {
        handleEmit('end', true)
        return false
      }
      addChildNode(node, instance as IContext)
      handleEmit('end', false)
    }
    function handleEmit (type:string, isSelf?:boolean) {
      if (type === 'start') {
        typeof handleStart === 'function' && handleStart(node)
        return
      }
      if (type === 'move') {
        typeof handleMove === 'function' && handleMove(node)
        return
      }
      if (type === 'end') {
        typeof handleEnd === 'function' && handleEnd(node, isSelf)
      }
    }
  }
}
export default drag
