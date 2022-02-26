export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "Home",
    "actions": [
      {
        "text": "快速开始",
        "link": "/guide/",
        "type": "primary"
      },
      {
        "text": "项目简介",
        "link": "/guide/",
        "type": "secondary"
      }
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "安装",
      "slug": "安装",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1644283337000,
    "contributors": [
      {
        "name": "sangtian152",
        "email": "jzyazn@sina.cn",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
