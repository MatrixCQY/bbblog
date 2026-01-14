export const themeData = JSON.parse("{\"logo\":null,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"数学笔记\",\"link\":\"/math/\"},{\"text\":\"代码笔记\",\"link\":\"/code/\"},{\"text\":\"衍生品笔记\",\"link\":\"/derivatives/\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/bigrich-luo/geeksman-blogs\"}],\"sidebar\":{\"/math/\":[{\"text\":\"数学笔记\",\"children\":[\"/math/README.md\"]}],\"/code/\":[{\"text\":\"代码笔记\",\"children\":[\"/code/README.md\"]}],\"/derivatives/\":[{\"text\":\"衍生品笔记\",\"children\":[\"/derivatives/README.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
