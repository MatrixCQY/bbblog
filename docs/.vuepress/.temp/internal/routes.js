export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/CS/vibe-coding/bbblog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/code/", { loader: () => import(/* webpackChunkName: "code_index.html" */"D:/CS/vibe-coding/bbblog/docs/.vuepress/.temp/pages/code/index.html.js"), meta: {"title":"代码笔记"} }],
  ["/derivatives/", { loader: () => import(/* webpackChunkName: "derivatives_index.html" */"D:/CS/vibe-coding/bbblog/docs/.vuepress/.temp/pages/derivatives/index.html.js"), meta: {"title":"衍生品笔记"} }],
  ["/math/", { loader: () => import(/* webpackChunkName: "math_index.html" */"D:/CS/vibe-coding/bbblog/docs/.vuepress/.temp/pages/math/index.html.js"), meta: {"title":"数学笔记"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/CS/vibe-coding/bbblog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
