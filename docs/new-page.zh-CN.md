---
order: 4
title: 新增页面
type: 开发
---

这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常只需要在脚手架的基础上进行简单的配置。

## 一、新增页面

在 src / pages 下创建新的 tsx、less 文件。 如果有多个相关页面，您可以创建一个新文件夹来放置相关文件。

```diff
config
src
  models
  pages
+   NewPage.tsx
+   NewPage.less
  ...
...
package.json
```

我们提供了一套创建组件和页面的 cli,使用如下

```bash
// 将会在src/pages下生成Order/Sales页面，可以自己试试,更多命令行，可以通过 yarn new -h查看
yarn new order/sales
```

已经预定义了默认实现，包含 ts 的定义、model 的定义、service 方法、less 文件等

## 二、将文件加入菜单和路由

加入菜单和路由的方式请参照 [路由和菜单 - 添加路由/菜单](/docs/router-and-nav#添加路由/菜单) 中的介绍完成。加好后，访问 `http://localhost:9000/#/order` 就可以看到新增的页面了。
