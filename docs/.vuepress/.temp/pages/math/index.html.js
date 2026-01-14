import comp from "D:/CS/vibe-coding/bbblog/docs/.vuepress/.temp/pages/math/index.html.vue"
const data = JSON.parse("{\"path\":\"/math/\",\"title\":\"数学笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1768399772000,\"contributors\":[{\"name\":\"MatrixCQY\",\"username\":\"MatrixCQY\",\"email\":\"159559016+MatrixCQY@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/MatrixCQY\"}],\"changelog\":[{\"hash\":\"7a85c28921726efb5a023d5e9262e4c2b861308b\",\"time\":1768399772000,\"email\":\"159559016+MatrixCQY@users.noreply.github.com\",\"author\":\"MatrixCQY\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"math/README.md\"}")
export { comp, data }

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
