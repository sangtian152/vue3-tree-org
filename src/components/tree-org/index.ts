import type { App } from 'vue'
import TreeOrg from './src/tree.vue'
/* istanbul ignore next */
TreeOrg.install = function (app: App) {
  app.component(TreeOrg.name, TreeOrg)
}

export default TreeOrg
