import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html","/README.md"]],
  ["v-1473bf53","/demo/",{"title":""},["/demo/index.html","/demo/README.md"]],
  ["v-e4cb1150","/other/",{"title":""},["/other/index.html","/other/README.md"]],
  ["v-fffb8e28","/guide/",{"title":""},["/guide/index.html","/guide/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
