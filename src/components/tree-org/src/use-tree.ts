import { ref, nextTick, watch, computed, reactive, onBeforeMount } from 'vue'
import { randomString } from '@/utils/fns'
import type { SetupContext } from 'vue'
import type { IMenu, INode, INodeData, IRefs, LoadFn } from '@/utils/types'
import type { TreeEmits, TreeProps } from './tree'
import { stopClick } from '@/store'
export const useTree = (
  props: TreeProps,
  { emit }: SetupContext<TreeEmits>,
  refs: IRefs
) => {
  const left = ref(0)
  const top = ref(0)
  const autoDragging = ref(false)
  function onDrag (x: number, y: number) {
    stopClick.set(true)
    autoDragging.value = false
    left.value = x
    top.value = y
    emit('on-drag', { x, y })
  }
  function preventOutOfBounds (x: number, y: number) {
    const zoom = refs.zoomRef.value as HTMLElement
    const orgchart = refs.treeRef.value as HTMLElement
    let maxX = zoom.clientWidth / 2
    const maxY = zoom.clientHeight / 2
    let minY = zoom.clientHeight - orgchart.clientHeight
    let minX = zoom.clientWidth - orgchart.clientWidth
    if (minY > 0) {
      minY = 0
    }
    if (minX > 0) {
      minX = 0
    }
    if (props.center) {
      const deviation = (zoom.clientWidth - orgchart.clientWidth) / 2
      minX = minX - deviation
      maxX = maxX - deviation
      // console.log(props.center, minX, 38)
    }
    if (x > maxX) {
      left.value = maxX
    } else if (x < minX) {
      left.value = minX
    } else {
      left.value = x
    }
    if (y < minY) {
      top.value = minY
    } else if (y > maxY) {
      top.value = maxY
    } else {
      top.value = y
    }
  }
  function onDragStop (x: number, y: number) {
    preventOutOfBounds(x, y)
    setTimeout(() => {
      stopClick.set(false)
    }, 200)
    emit('on-drag-stop', { x, y })
  }
  const nodeMoving = ref(false)
  const parenNode = reactive({ value: <INode | null>{} })
  function nodeMouseenter (e: MouseEvent, node: INode) {
    if (nodeMoving.value) {
      parenNode.value = node
    }
    emit('on-node-mouseenter', e, node.$$data, node)
    return true
  }
  function nodeMouseleave (e: MouseEvent, node: INode) {
    if (nodeMoving.value) {
      parenNode.value = null
    }
    emit('on-node-mouseleave', e, node.$$data, node)
    return true
  }
  const contextmenu = ref(false)
  const menuX = ref(0)
  const menuY = ref(0)
  const menuData = ref({} as INode)
  const nodeMenus = ref([] as IMenu[])
  function nodeContextmenu (e: MouseEvent, node: INode) {
    e.stopPropagation()
    e.preventDefault()
    const { defineMenus } = props
    if (Array.isArray(defineMenus)) {
      nodeMenus.value = defineMenus
    } else if (typeof defineMenus === 'function') {
      nodeMenus.value = defineMenus(e, node) || []
    }
    contextmenu.value = true
    menuX.value = e.clientX
    menuY.value = e.clientY
    menuData.value = node
  }
  const scale = ref(1)
  function zoomWheel (e: WheelEvent) {
    if (!props.scalable) return
    e.preventDefault()
    // 鼠标滚轮缩放
    if (e.deltaY < 0) {
      zoomOrgchart(0.1)
    } else {
      zoomOrgchart(-0.1)
    }
    emit('on-zoom', scale.value)
  }
  function zoomOrgchart (zoom: number) {
    if (!props.scalable) return
    const value = Number((Number(scale.value) + zoom).toFixed(1))
    if (zoom > 0) {
      scale.value = Math.min(3, value)
    } else {
      scale.value = Math.max(0.3, value)
    }
  }
  function restoreOrgchart () {
    scale.value = 1
    left.value = 0
    top.value = 0
    emit('on-restore')
  }
  function autoDrag (el: HTMLElement, lf: number, tp: number) {
    // 计算偏移量，保持根节点相对页面位置不变
    autoDragging.value = true
    console.log(props.center, props.horizontal, el.offsetLeft, lf)
    if (!props.center || props.horizontal) {
      const x = el.offsetLeft - lf
      left.value -= x
    }
    const y = el.offsetTop - tp
    top.value -= y
    preventOutOfBounds(left.value, top.value)
  }
  let timer: any
  function handleClick (e: MouseEvent, node: INode) {
    // 由于鼠标事件执行顺序
    // mouseover--> mousedown-->mouseup-->click -->mouseout
    // 拖拽时会触发node-click
    // 通过 stopClick 判断，如果执行了拖拽，则不再执行node-click
    if (stopClick.get()) return
    // 取消上次延时未执行的方法
    clearTimeout(timer)
    // 执行延时
    timer = setTimeout(() => {
      // 此处为单击事件要执行的代码
      emit('on-node-click', e, node.$$data, node)
    }, props.clickDelay)
  }
  function handleDblclick (e: MouseEvent, node: INode) {
    // 取消上次延时未执行的方法
    clearTimeout(timer)
    // 此处为单击事件要执行的代码
    emit('on-node-dblclick', e, node.$$data, node)
  }
  function handleExpand (e: MouseEvent, node: INode) {
    e.stopPropagation()
    const el = document.querySelector(`.is-root_${suffix}`) as HTMLElement
    if (el) {
      const left = el.offsetLeft
      const top = el.offsetTop
      node.expand = !node.expand
      let needMove = true
      if (node.expand) {
        expandedKeys.add(node.id)
        if (props.lazy && props.load) {
          needMove = false
          loadData(node, props.load, () => {
            nextTick(() => {
              autoDrag(el, left, top)
            })
          })
        }
      } else if (!node.expand && node.children) {
        expandedKeys.delete(node.id)
        collapse(node.children)
      }
      nextTick(() => {
        needMove && autoDrag(el, left, top)
      })
      emit('on-expand', e, node.$$data, node)
    }
  }
  function loadData (node:INode, load: LoadFn, cb: () => void) {
    load(node, (data:Array<INodeData>, auto:boolean) => {
      const { children } = keys
      node.isLeaf = !data.length
      if (data.length) {
        node.$$data[children] = data
        auto && cb()
      }
    })
  }
  function filter (value: any) {
    const filterNodeMethod = props.filterNodeMethod
    if (!filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter')
    const traverse = function (node: INodeData) {
      const childNodes = (node.children as Array<INodeData>) || []

      childNodes.forEach((child) => {
        child.$$hidden = !filterNodeMethod.call(child, value, child)
        traverse(child)
      })

      if (node.$$hidden && childNodes.length) {
        let unHidden = true
        unHidden = childNodes.some(child => !child.$$hidden)

        node.$$hidden = !unHidden
      }
      if (!value) return

      if (!node.$$hidden && node.children) node.expand = true
    }

    traverse(treeData.value)
  }
  const keys = reactive(Object.assign({
    id: 'id',
    pid: 'pid',
    label: 'label',
    expand: 'expand',
    children: 'children',
    isLeaf: 'isLeaf'
  }, props.props))
  function handleFocus (e: MouseEvent, data: INodeData, node: INode) {
    emit('on-node-focus', e, data, node)
  }
  function handleBlur (e: MouseEvent, data: INodeData, node: INode) {
    const { id, label } = keys
    const childNodes = menuData.value.children || []
    for (let i = childNodes.length; i > 0; i--) {
      const item = childNodes[i - 1]
      if (item[id] === '' && item[label] === '') {
        childNodes.splice(i - 1, 1)
        break
      }
    }
    emit('on-node-blur', e, data, node)
  }
  const fullscreen = ref(false)
  function handleFullscreen (e:string) {
    fullscreen.value = !fullscreen.value
    if (e === 'esc') {
      return
    }
    if (fullscreen.value) {
      launchIntoFullscreen()
    } else {
      exitFullscreen()
    }
  }
  function launchIntoFullscreen () {
    // 全屏
    const element = refs.eleRef.value as HTMLElement
    if (element.requestFullscreen) {
      element.requestFullscreen()
    }
  }
  function exitFullscreen () {
    // 退出全屏
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
  function collapse (list: Array<INode>) {
    list.forEach((child) => {
      if (child.expand) {
        child.expand = false
        expandedKeys.delete(child.id)
      }
      child.children && collapse(child.children)
    })
  }
  const expanded = ref(false)
  function expandChange () {
    expanded.value = !expanded.value
    toggleExpand(treeData.value, expanded.value)
    emit('on-expand-all', expanded.value)
    if (!expanded.value) {
      expandedKeys.clear()
      nextTick(() => {
        onDragStop(left.value, top.value)
      })
    }
  }
  function toggleExpand (data: INode | Array<INode>, val: boolean) {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        item.expand = val
        if (val) {
          expandedKeys.add(item.id)
        }
        if (item.children) {
          toggleExpand(item.children, val)
        }
      })
    } else {
      data.expand = val
      if (val) {
        expandedKeys.add(data.id)
      }
      if (data.children) {
        toggleExpand(data.children, val)
      }
    }
  }

  function setData (data: INodeData) {
    treeData.value = initNodes(data)
  }
  const zoomStyle = computed(() => {
    return {
      width: `${100 / scale.value}%`,
      height: `${100 / scale.value}%`,
      transform: `scale(${scale.value})`
    }
  })
  const zoomPercent = computed(() => {
    return `${Math.round(scale.value * 100)}%`
  })
  const dragCancel = computed(() => {
    return props.draggableOnNode && !props.nodeDraggable ? '' : `.tree-org-node__content:not(.is-root_${suffix})>.tree-org-node__inner`
  })
  const expandTitle = computed(() => {
    return expanded.value ? '收起全部节点' : '展开全部节点'
  })
  const fullTiltle = computed(() => {
    return expanded.value ? '收起全部节点' : '展开全部节点'
  })
  const cloneData = ref({})
  const nodeargs = computed(() => {
    const { cloneNodeDrag, onlyOneNode, data } = props
    return {
      drag: props.nodeDraggable,
      dragData: { keys, nodeMoving, stopClick, parenNode, cloneNodeDrag, onlyOneNode, contextmenu, cloneData, data },
      beforeDragEnd: props.beforeDragEnd,
      initNodes: initNodes,
      emit: emit
    }
  })
  watch(() => props.horizontal,
    () => {
      nextTick(() => {
        onDragStop(left.value, top.value)
      })
    })

  let expandedKeys = new Set(props.defaultExpandKeys)
  function getExpandKeys () {
    return [...expandedKeys]
  }
  function setExpandKeys (keys:Array<number|string>) {
    expandedKeys = new Set(keys)
    setData(props.data)
  }
  function initNodes (nodeData: INodeData) {
    const { defaultExpandLevel = 0 } = props
    const data2node = (data: INodeData, level: number): INode => {
      const { id, label, pid, expand, children, isLeaf } = keys
      const cloneData = {}
      Object.keys(data).map(key => {
        if (['hidden', 'disabled', 'className', 'style'].includes(key)) {
          cloneData[key] = data[key]
        }
      })
      const childNodes = (data[children] as Array<INodeData>)
      const childLevel = level + 1
      const _expand = data[expand]
      const _id = data[id]
      if (_expand) {
        expandedKeys.add(_id)
      } else if (_expand === undefined && level < defaultExpandLevel) {
        expandedKeys.add(_id)
      }
      return {
        ...cloneData,
        id: _id,
        label: data[label],
        pid: data[pid],
        expand: expandedKeys.has(_id),
        children: childNodes ? childNodes.map(child => {
          return data2node(child, childLevel)
        }) : undefined,
        isLeaf: data[isLeaf],
        $$level: level,
        $$data: data,
        $$focused: data.focused || false
      }
    }
    return data2node(nodeData, 0)
  }
  const treeData = ref(initNodes(props.data))
  watch(() => props.data,
    (newVal, oldVal) => {
      if (newVal !== oldVal) {
        expandedKeys = new Set(props.defaultExpandKeys)
      }
      setData(props.data)
    }, {
      deep: true
    })
  const tools = reactive({
    visible: true,
    data: {
      expand: true,
      scale: true,
      zoom: true,
      restore: true,
      fullscreen: true
    }
  })
  onBeforeMount(() => {
    if (typeof props.toolBar === 'object') {
      Object.assign(tools.data, props.toolBar)
    } else if (!props.toolBar) {
      tools.visible = false
    }
  })

  const suffix = randomString(6)

  return {
    keys,
    left,
    top,
    menuX,
    menuY,
    suffix,
    nodeMoving,
    zoomStyle,
    tools,
    zoomPercent,
    dragCancel,
    expandTitle,
    fullTiltle,
    nodeargs,
    expanded,
    fullscreen,
    treeData,
    autoDragging,
    contextmenu,
    nodeMenus,
    menuData,
    cloneData,
    filter,
    setData,
    zoomWheel,
    onDrag,
    onDragStop,
    expandChange,
    handleFullscreen,
    zoomOrgchart,
    restoreOrgchart,
    handleExpand,
    getExpandKeys,
    setExpandKeys,
    nodeMouseenter,
    nodeMouseleave,
    nodeContextmenu,
    handleFocus,
    handleBlur,
    handleClick,
    handleDblclick
  }
}
