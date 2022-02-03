import config from '../../../package.json'
// 功能插件
import log from '@/utils/log'

import type { App } from 'vue'

export default {
  async install (app: App) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示
    // app.config.productionTip = false

    app.config.globalProperties.$log = log
    // 打印UI官网
    log.pretty('[' + config.name + '] ' + config.version, 'success')
  }
}
