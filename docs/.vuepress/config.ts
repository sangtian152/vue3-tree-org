import { mdPlugin } from './config/plugins'
const { path } = require('@vuepress/utils')
// import type { UserConfig } from 'vitepress'
const { defaultTheme } = require('@vuepress/theme-default')

const buildTransformers = () => {
    const transformer = () => {
      return {
        props: [],
        needRuntime: true,
      }
    }
  
    const transformers = {}
    const directives = [
      'infinite-scroll',
      'loading',
      'popover',
      'click-outside',
      'repeat-click',
      'trap-focus',
      'mousewheel',
      'resize',
    ]
    directives.forEach((k) => {
      transformers[k] = transformer
    })
  
    return transformers
  }

export const config = {
    // 站点配置
  lang: 'zh-CN',
  title: 'vue3-tree-org',
  base: '/vue3-tree-org/',
  description: '基于vue3.x的组织架构图',
  // 主题和它的配置
  theme: defaultTheme({
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
              text: '介绍',
              link: '/guide/',
          },
          {
              text: '示例',
              link: '/demo/',
          },
          {
              text: '其他',
              link: '/other/',
          }
      ]
  }),
  alias: {
    '@': path.resolve(__dirname, '..', '../src'),
    '@docs': path.resolve(__dirname, './'),
    '@examples': path.resolve(__dirname, '../examples'),
  },
  extendsMarkdown:(md: any) => mdPlugin(md),
  vue: {
    template: {
      ssr: true,
      compilerOptions: {
        directiveTransforms: buildTransformers(),
      },
    },
  }
}

export default config