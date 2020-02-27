---
title: 区块
group:
  title: 其他
  path: /other
  order: 1
---

# 区块

区块是研发资产的一种，它是一系列快速搭建页面的代码片段，它可以帮助你快速的在项目中初始化好一个页面，帮助你更快速的开发代码。当前的区块都是页面级别的区块，你可以理解为它是一些项目中经常会用到的典型页面的模板，使用区块其实相当于从已有的项目中复制一些页面的代码到你当前的项目中。

- 以前开发一个页面：创建 ts -> 创建 less -> 创建 model -> 创建 service -> 写页面组件。
- 现在开发一个页面：下载区块 -> 基于区块初始化好的页面组件修改代码。

## 使用区块

> 交互式的 umi block list 需要 umi@2.8.7 及以上版本

Wetrial-Template 中，使用 umi 进行区块管理。当我们需要安装一个区块的时候，我们需要知道区块有哪些。 umi 提供了 umi block list 的方式来查看区块,你可以选中区块名来进行安装。

添加别的区块也非常容易，在命令行中输入：

```bash
umi block add [block url]
```

> Wetrial-Template 中会默认去 [wetrial-blocks](https://github.com/wetrial/wetrial-blocks) 去寻找区块，而默认的区块地址则是 [umi-blocks](https://github.com/umijs/umi-blocks)。如果你要在 Wetrial-Template 中使用 umi 的区块，需要 add 全路径。在空项目中使用 Wetrial-Template 的区块也是如此。

## 添加到路由

默认情况下，添加的区块路由为 `/[区块名]`。如果希望添加到对应路径上，可以使用 `--path` 参数指定路由：

```bash
umi block add editor --path=your/path/here
```

## 更多内容

如果你想进行区块开发，可以在 [umi 区块](https://umijs.org/zh/guide/block.html) 中查看完整内容。
