import { defineClientAppEnhance } from '@vuepress/client'
import MyDemo from '@docs/components/myDemo.vue'
import ZmTreeOrg from '@/index'
export default defineClientAppEnhance(({ app }) => {
  app.component('MyDemo', MyDemo)
  app.use(ZmTreeOrg)
})