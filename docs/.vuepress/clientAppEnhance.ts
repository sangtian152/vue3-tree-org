import { defineClientAppEnhance } from '@vuepress/client'
import DemoBlock from '@docs/components/demo-block.vue'
import treeNode from '@examples/treeNode.vue'
import Demo from '@docs/page/index.vue'
import ZmTreeOrg from '@/index'

import '@docs/theme'

export default defineClientAppEnhance(({ app }) => {
    app.component('DemoBlock', DemoBlock)
    app.component('treeNode', treeNode)
    app.component('Demo', Demo)
    app.use(ZmTreeOrg)
})