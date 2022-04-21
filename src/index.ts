// 核心插件
import corePlugin from './plugin/core'
// 组件
import Vue3TreeOrg from './components/tree-org'
import type { App } from 'vue'
// import '@/styles/index.scss'
const components = [
  Vue3TreeOrg
]

const install = function (app: App):void {
  components.forEach(component => {
    app.component(component.name, component)
  })
  app.use(corePlugin)
}

export { default as Vue3TreeOrg } from './components/tree-org'
export default {
  install, Vue3TreeOrg
}
