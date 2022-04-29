import { ref, nextTick, watch, computed, reactive, onBeforeMount } from 'vue'
import type { SetupContext } from 'vue'
import type { INode, IRefs } from '@/utils/types'
import type { TreeEmits, TreeProps } from './tree'
export const useTree = (
  props: TreeProps,
  { emit }: SetupContext<TreeEmits>,
  refs: IRefs
) => {
  const left = ref(0)
  const top = ref(0)
  const autoDragging = ref(false)
  function onDrag (x: number, y: number) {
    autoDragging.value = false
    left.value = x
    top.value = y
    emit('on-drag', { x, y })
  }
  function preventOutOfBounds (x: number, y: number) {
    const zoom = refs.zoomRef.value as HTMLElement
    const orgchart = refs.treeRef.value as HTMLElement
    const maxX = zoom.clientWidth / 2
    const maxY = zoom.clientHeight / 2
    let minY = zoom.clientHeight - orgchart.clientHeight
    let minX = zoom.clientWidth - orgchart.clientWidth
    if (minY > 0) {
      minY = 0
    }
    if (minX > 0) {
      minX = 0
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
    emit('on-drag-stop', { x, y })
  }
  const nodeMoving = ref(false)
  const parenNode = reactive({ value: <INode | null>{} })
  function nodeMouseenter (e: MouseEvent, data: INode) {
    if (nodeMoving.value) {
      parenNode.value = data
    }
    emit('on-node-mouseenter', e, data)
    return true
  }
  function nodeMouseleave (e: MouseEvent, data: INode) {
    if (nodeMoving.value) {
      parenNode.value = null
    }
    emit('on-node-mouseleave', e, data)
    return true
  }
  const contextmenu = ref(false)
  const menuX = ref(0)
  const menuY = ref(0)
  const menuData = reactive({
    data: {} as INode
  })
  function nodeContextmenu (e: MouseEvent, data: INode) {
    e.stopPropagation()
    e.preventDefault()
    contextmenu.value = true
    menuX.value = e.clientX
    menuY.value = e.clientY
    menuData.data = data
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
  }
  function autoDrag (el: HTMLElement, lf: number, tp: number) {
    // 计算偏移量，保持根节点相对页面位置不变
    autoDragging.value = true
    const x = el.offsetLeft - lf
    const y = el.offsetTop - tp
    left.value -= x
    top.value -= y
    preventOutOfBounds(left.value, top.value)
  }
  let timer: any
  function handleClick (e: MouseEvent, data: INode) {
    // 取消上次延时未执行的方法
    clearTimeout(timer)
    // 执行延时
    timer = setTimeout(() => {
      // 此处为单击事件要执行的代码
      emit('on-node-click', e, data)
    }, props.clickDelay)
  }
  function handleDblclick (e: MouseEvent, data: INode) {
    // 取消上次延时未执行的方法
    clearTimeout(timer)
    // 此处为单击事件要执行的代码
    emit('on-node-dblclick', e, data)
  }
  function handleExpand (e: MouseEvent, data: INode) {
    e.stopPropagation()
    const el = document.querySelector('.is-root') as HTMLElement
    if (el) {
      const left = el.offsetLeft
      const top = el.offsetTop
      if ('expand' in data) {
        data.expand = !data.expand
        if (!data.expand && data.children) {
          collapse(data.children)
        }
      } else {
        data.expand = true
      }
      nextTick(() => {
        autoDrag(el, left, top)
      })
      emit('on-expand', e, data)
    }
  }
  const keys = reactive(Object.assign({
    id: 'id',
    pid: 'pid',
    label: 'label',
    expand: 'expand',
    children: 'children'
  }, props.props))

  function handleBlur (e: MouseEvent, data: INode) {
    const { children, id, label } = keys
    const childNodes = menuData.data[children] || []
    for (let i = childNodes.length; i > 0; i--) {
      const item = childNodes[i - 1]
      if (item[id] === '' && item[label] === '') {
        childNodes.splice(i - 1, 1)
        break
      }
    }
    emit('on-node-blur', e, data)
  }
  const fullscreen = ref(false)
  function handleFullscreen () {
    fullscreen.value = !fullscreen.value
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
      }
      child.children && collapse(child.children)
    })
  }
  const expanded = ref(false)
  function expandChange () {
    expanded.value = !expanded.value
    toggleExpand(props.data, expanded.value)
    if (!expanded.value) {
      nextTick(() => {
        onDragStop(left.value, top.value)
      })
    }
  }
  function toggleExpand (data: INode, val: boolean) {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        item.expand = val
        if (item.children) {
          toggleExpand(item.children, val)
        }
      })
    } else {
      data.expand = val
      if (data.children) {
        toggleExpand(data.children, val)
      }
    }
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
    return props.draggableOnNode || !props.nodeDraggable ? '' : '.tree-org-node-label'
  })
  const expandTitle = computed(() => {
    return expanded.value ? '收起全部节点' : '展开全部节点'
  })
  const fullTiltle = computed(() => {
    return expanded.value ? '收起全部节点' : '展开全部节点'
  })
  const cloneData = reactive({ data: {} })
  const nodeargs = computed(() => {
    const { cloneNodeDrag, onlyOneNode, data } = props
    return {
      drag: props.nodeDraggable,
      dragData: { keys, nodeMoving, parenNode, cloneNodeDrag, onlyOneNode, contextmenu, cloneData, data },
      handleStart: props.nodeDragStart,
      handleMove: props.nodeDraging,
      handleEnd: props.nodeDragEnd
    }
  })
  watch(() => props.horizontal,
    () => {
      nextTick(() => {
        onDragStop(left.value, top.value)
      })
    })
  const treeData = ref(props.data)
  watch(() => props.data,
    () => {
      treeData.value = props.data
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
  return {
    keys,
    left,
    top,
    menuX,
    menuY,
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
    menuData,
    cloneData,
    zoomWheel,
    onDrag,
    onDragStop,
    expandChange,
    handleFullscreen,
    zoomOrgchart,
    restoreOrgchart,
    handleExpand,
    nodeMouseenter,
    nodeMouseleave,
    nodeContextmenu,
    handleBlur,
    handleClick,
    handleDblclick
  }
}
