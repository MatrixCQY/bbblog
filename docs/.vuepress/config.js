import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

export default defineUserConfig({
  // 部署配置:
  // 如果您的 GitHub 仓库名不是 "bbblog"，请将 "/bbblog/" 修改为您实际的仓库名，例如 "/my-repo/"
  base: '/bbblog/',

  lang: 'zh-CN',
  title: '我的个人知识库',
  description: '数学、代码与衍生品笔记',

  bundler: viteBundler(),

  theme: defaultTheme({
    logo: null,
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '数学笔记',
        link: '/math/',
      },
      {
        text: '代码笔记',
        link: '/code/',
      },
      {
        text: '衍生品笔记',
        link: '/derivatives/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/MatrixCQY',
      },
    ],
    sidebar: {
      '/math/': [
        {
          text: '数学笔记',
          children: ['/math/README.md'],
        },
      ],
      '/code/': [
        {
          text: '代码笔记',
          children: ['/code/README.md'],
        },
      ],
      '/derivatives/': [
        {
          text: '衍生品笔记',
          children: ['/derivatives/README.md'],
        },
      ],
    },
  }),

  plugins: [
    markdownMathPlugin({
      // 启用 TeX 语法
      type: 'katex',
    }),
  ],
})
