import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

export default defineUserConfig({
  // 部署配置:
  // 如果您的 GitHub 仓库名不是 "bbblog"，请将 "/bbblog/" 修改为您实际的仓库名，例如 "/my-repo/"
  base: '/bbblog/',

  lang: 'zh-CN',
  title: 'MatrixCQY',
  description: '数学、代码与金融笔记',

  // 强制浏览器不缓存 HTML，解决更新不及时的问题
  head: [
    ['meta', { 'http-equiv': 'Pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'Expires', content: '0' }],
    ['meta', { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' }],
  ],

  bundler: viteBundler(),

  theme: defaultTheme({
    colorMode: 'dark',
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
        text: '金融笔记',
        link: '/finances/',
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
          children: [
            '/math/README.md',
            {
              text: '复变函数',
              collapsible: true,
              children: [
                '/math/complex-analysis/complex-numbers.md',
                '/math/complex-analysis/holomorphic-functions.md',
                '/math/complex-analysis/series-expansion.md',
                '/math/complex-analysis/integral-transform.md',
              ],
            },
            {
              text: '实变函数',
              collapsible: true,
              children: [
                '/math/real-analysis/preliminaries.md',
                '/math/real-analysis/lebesgue-measure.md',
                '/math/real-analysis/measurable-functions.md',
                '/math/real-analysis/lebesgue-integral.md',
              ],
            },
            {
              text: '概率论',
              collapsible: true,
              children: [
                '/math/probability/events-and-probability.md',
                '/math/probability/random-variables.md',
                '/math/probability/limit-theorems.md',
                '/math/probability/distributions.md',
              ],
            },
            {
              text: '数理统计',
              collapsible: true,
              children: [
                '/math/statistics/concepts.md',
                '/math/statistics/estimation-and-testing.md',
              ],
            },
            {
              text: '数值分析',
              collapsible: true,
              children: [
                '/math/numerical-analysis/interpolation.md',
                '/math/numerical-analysis/matrix-linear-equations.md',
                '/math/numerical-analysis/nonlinear-equations.md',
                '/math/numerical-analysis/ode-numerical.md',
                '/math/numerical-analysis/pde-ritz-galerkin.md',
              ],
            },
          ],
        },
      ],
      '/code/': [
        {
          text: '代码笔记',
          children: [
            '/code/README.md',
            '/code/python-tips.md',
            {
              text: 'C++ 教程',
              collapsible: true,
              children: [
                '/code/cpp/basics.md',
                '/code/cpp/oop.md',
                '/code/cpp/stl.md',
                '/code/cpp/memory-management.md',
                '/code/cpp/file-io.md',
                '/code/cpp/lambda.md',
                '/code/cpp/advanced.md',
              ],
            },
            {
              text: '数据结构与算法',
              collapsible: true,
              children: [
                '/code/dsa/intro.md',
                '/code/dsa/linear-list.md',
                '/code/dsa/stack-queue.md',
                '/code/dsa/hashing.md',
                '/code/dsa/tree-graph.md',
                '/code/dsa/sorting.md',
                '/code/dsa/searching.md',
                '/code/dsa/dynamic-programming.md',
                '/code/dsa/greedy.md',
              ],
            },
            {
              text: 'SQL 教程',
              collapsible: true,
              children: [
                '/code/sql/intro.md',
                '/code/sql/queries.md',
                '/code/sql/joins.md',
                '/code/sql/constraints.md',
                '/code/sql/normalization.md',
                '/code/sql/views-procedures.md',
                '/code/sql/advanced.md',
              ],
            },
            {
              text: 'R 语言教程',
              collapsible: true,
              children: [
                '/code/r/intro.md',
                '/code/r/data-structures.md',
                '/code/r/control-flow.md',
                '/code/r/data-io.md',
                '/code/r/statistics.md',
                '/code/r/plotting.md',
              ],
            },
            {
              text: 'Pandas 教程',
              collapsible: true,
              children: [
                '/code/pandas/intro.md',
                '/code/pandas/series-dataframe.md',
                '/code/pandas/analysis.md',
                '/code/pandas/time-series.md',
                '/code/pandas/visualization.md',
              ],
            },
          ],
        },
      ],
      '/finances/': [
        {
          text: '金融笔记',
          children: [
            '/finances/README.md',
            '/finances/options-101.md',
            '/finances/greeks.md',
          ],
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
