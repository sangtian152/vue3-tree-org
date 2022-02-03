export const data = {
  "key": "v-1473bf53",
  "path": "/demo/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Demo 演示案例",
      "slug": "demo-演示案例",
      "children": [
        {
          "level": 3,
          "title": "基础用法",
          "slug": "基础用法",
          "children": []
        },
        {
          "level": 3,
          "title": "Attributes",
          "slug": "attributes",
          "children": []
        },
        {
          "level": 3,
          "title": "Events",
          "slug": "events",
          "children": []
        },
        {
          "level": 3,
          "title": "Slot",
          "slug": "slot",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "demo/README.md"
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
