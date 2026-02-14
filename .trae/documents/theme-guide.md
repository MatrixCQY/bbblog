# VuePress 主题设置教程

本文档介绍如何自定义 VuePress 的默认主题（Default Theme）。所有配置均位于 `docs/.vuepress/config.js` 文件中。

## 1. 配置文件结构

打开 `docs/.vuepress/config.js`，你会看到类似如下的结构：

```javascript
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  theme: defaultTheme({
    // 主题配置项在这里
  }),
})
```

## 2. 常用配置项

### 2.1 导航栏 (Navbar)

导航栏位于页面顶部，用于全局导航。

```javascriptvscode-file://vscode-app/d:/Trae/resources/app/out/vs/code/electron-browser/workbench/docs/theme-guide.md
navbar: [
  // 字符串 - 页面文件路径
  '/guide/README.md',
  
  // 对象 - 包含 text 和 link
  {
    text: '首页',
    link: '/',
  },
  
  // 嵌套组 - 下拉菜单
  {
    text: '笔记分类',
    children: [
      { text: '数学', link: '/math/' },
      { text: '代码', link: '/code/' },
    ],
  },
  
  // 外部链接
  {
    text: 'GitHub',
    link: 'https://github.com/MatrixCQY',
  },
],
```

### 2.2 侧边栏 (Sidebar)

侧边栏用于页面内的导航。

```javascript
sidebar: {
  // 不同路径显示不同侧边栏
  '/math/': [
    {
      text: '数学笔记',
      collapsible: true, // 是否可折叠
      children: [
        '/math/complex-analysis/complex-numbers.md',
        // ...
      ],
    },
  ],
  '/code/': [
    // ...
  ],
},
```

### 2.3 颜色模式 (Color Mode)

默认支持浅色和深色模式切换。

```javascript
// 默认颜色模式: 'auto' | 'light' | 'dark'
colorMode: 'auto',

// 是否显示颜色模式切换按钮
colorModeSwitch: true,
```

### 2.4 Logo 与 仓库链接

```javascript
// 左上角 Logo (需放在 docs/.vuepress/public 目录下)
logo: '/images/logo.png',

// 黑暗模式下的 Logo
logoDark: '/images/logo-dark.png',

// 仓库链接 (显示在导航栏右侧)
repo: 'MatrixCQY/bbblog',
repoLabel: 'GitHub',
```

## 3. 首页配置 (Home Page)

首页内容在 `docs/README.md` 的 Frontmatter 中配置：

```yaml
---
home: true
heroImage: /images/hero.png
heroText: 博客标题
tagline: 博客副标题
actions:
  - text: 快速开始
    link: /guide/
    type: primary
features:
  - title: 特性1
    details: 详细描述...
  - title: 特性2
    details: 详细描述...
---
```

## 4. 自定义样式

如果需要修改 CSS 样式，可以创建或编辑 `docs/.vuepress/styles/index.scss` 文件。

```scss
/* 示例：修改侧边栏宽度 */
:root {
  --sidebar-width: 20rem;
}

/* 示例：修改强调色 */
:root {
  --c-brand: #c4c8c6ff;
  --c-brand-light: #cdd7d2ff;
}
```

更多详细配置请参考 [VuePress 官方文档](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)。
