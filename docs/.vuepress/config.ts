import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const { path } = require('@vuepress/utils')
export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'zm-tree-org',
  description: 'Just playing around',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  alias: {
    '@': path.resolve(__dirname, '..', '../src'),
    '@docs': path.resolve(__dirname, './'),
  },
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    plugins: [
        [
          '@vuepress/register-components',
          {
            componentDir: './components'
          }
        ]
    ],
    sidebar: [
        {
            text: 'Guide',
            link: '/guide/',
        },
        {
            text: 'Demo',
            link: '/demo/',
        }
    ]
  },
})