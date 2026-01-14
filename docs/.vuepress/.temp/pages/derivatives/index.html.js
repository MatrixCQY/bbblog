import comp from "D:/CS/vibe-coding/bbblog/docs/.vuepress/.temp/pages/derivatives/index.html.vue"
const data = JSON.parse("{\"path\":\"/derivatives/\",\"title\":\"衍生品笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"derivatives/README.md\"}")
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
