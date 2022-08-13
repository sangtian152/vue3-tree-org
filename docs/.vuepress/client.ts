import { defineClientConfig } from '@vuepress/client'
import DemoBlock from '@docs/components/demo-block.vue'
import Demo from '@docs/page/index.vue'
import { Vue3TreeOrg } from '@/index'
import { ElMessage } from 'element-plus'

import '@docs/theme'
import '@/styles/index.scss'
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.config.globalProperties.$message = ElMessage
        app.component('DemoBlock', DemoBlock)
        app.component('Demo', Demo)
        // app.use(ElementPlus)
        app.use(Vue3TreeOrg)
    },
    setup() {},
    rootComponents: [],
  })