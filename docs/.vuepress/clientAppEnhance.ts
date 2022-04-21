import { defineClientAppEnhance } from '@vuepress/client'
import DemoBlock from '@docs/components/demo-block.vue'
import Demo from '@docs/page/index.vue'
import { Vue3TreeOrg } from '@/index'
import { ElMessage } from 'element-plus'

import '@docs/theme'
import '@/styles/index.scss'
export default defineClientAppEnhance(({ app }) => {
    app.config.globalProperties.$message = ElMessage
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
    // app.use(ElementPlus)
    app.use(Vue3TreeOrg)
})