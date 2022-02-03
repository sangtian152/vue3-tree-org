// 核心插件
import corePlugin from './plugin/core'
// 组件
import ZmTreeOrg from './components/tree-org'

import type { App } from 'vue'

import '@/styles/index.scss'
const components = [
  ZmTreeOrg
]

const install = function (app: App) {
  components.forEach(component => {
    app.component(component.name, component)
  })
  app.use(corePlugin)
  app.directive('focus', {
    mounted: function (el: HTMLElement, { value }) {
      if (value) {
        el.focus()
      }
    },
    updated (el: HTMLElement, { value }) {
      if (value) {
        el.focus()
      }
    }
  })
}

export default {
  install, ZmTreeOrg
}
