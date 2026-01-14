import comp from "D:/CS/vibe-coding/bbblog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"https://vuepress.vuejs.org/images/hero.png\",\"heroText\":\"个人知识库\",\"tagline\":\"记录数学、代码与金融衍生品学习心得\",\"actions\":[{\"text\":\"开始阅读\",\"link\":\"/math/\",\"type\":\"primary\"},{\"text\":\"关于我\",\"link\":\"/about/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"数学笔记\",\"details\":\"收录高等数学、线性代数、概率论等核心数学知识，支持 LaTeX 公式渲染。\"},{\"title\":\"代码笔记\",\"details\":\"涵盖 Python, C++, JavaScript 等常用编程语言的实战经验与算法总结。\"},{\"title\":\"衍生品笔记\",\"details\":\"金融衍生品定价模型、期权策略与量化分析笔记。\"}],\"footer\":\"MIT Licensed | Copyright © 2025\"},\"git\":{},\"filePathRelative\":\"README.md\"}")
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
