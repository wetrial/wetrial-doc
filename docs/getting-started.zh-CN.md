---
order: 0
title: 开始使用
type: 入门
---

## 写在前面

Wetrial 是在 Antd 的基础上提供了 常用的组件、储存库、验证、请求库的库，Wetrial-Template 是一个基于 Antd、Wetrial 的模板项目，算一个企业级中后台前端/设计解决方案，我们秉承 [Ant Design](http://ant.design/) 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

我们基于上述目标和提供了以下的典型模板，并据此构建了一套基于 React 的中后台管理控制台的脚手架，它可以帮助你快速搭建企业级中后台产品原型。

```bash
- Example
  - 列表页
  - 拖拽

// 其他案例页面以blocks形式添加进来,比如 editor页面
umi block add editor
```

> 关于 block 的使用，请查阅[区块](https://pro.ant.design/docs/block-cn)

### For 设计者

如果你是产品或设计师，你可以找到和 Pro 一一配套的 [Axure/Sketch 设计资源](/docs/resource)，大幅度提升设计效率和沟通效率。

### For 开发者

如果你是工程师，在接下来的文档中，我们将具体介绍如何使用这个脚手架。

## 前序准备

你的本地环境需要安装 [yarn](https://yarnpkg.com)、[node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[React](http://facebook.github.io/react/)、[UmiJS](https://umijs.org/)、[dva](http://github.com/dvajs/dva)、[ts](https://www.typescriptlang.org/) 和 [antd](https://ant.design/docs/react/introduce-cn)，提前了解和学习这些知识会非常有帮助。

## 安装

从 git 上 clone 项目

```bash
git clone https://github.com/wetrial/wetrial-template
```

## 目录结构

我们已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├─config   -- 配置文件(路由、主题、插件等)
│      plugin.config.ts  --插件配置(如less合并、拆包)
│      router.config.ts  --路由配置
│      theme.config.ts  --主题配置
├─src
│  │  app.ts  --项目入口文件
│  │  defaultSettings.ts -- 项目配置相关(主题色、标题、是否启用pwa、icon远程js地址)
│  │  global.less  -- 全局样式文件(会自动引入)
│  │  global.tsx  -- 项目全局引入(可在里面引入一些全局用到的包)
│  │  service-worker.ts
│  ├─assets  --资源文件
│  ├─b-components  -- 系统业务组件(跟业务相关的组件)
│  ├─components    --系统通用组件(跟业务无关，不能用connect、不能发起dispatch等)
│  ├─constants  --常量
│  │      index.ts  --系统中用到的一些常量
│  │      permissions.js  -- 系统中用到的权限定义
│  ├─layouts   -- 布局文件夹
│  ├─locales  --多语言文件夹(暂时没用到)
│  ├─models  --全局model(非全局的不能放到这个下面)
│  ├─pages  --业务相关页面、业务中用到的页面建议按模块划分，注意大小写保持一致 ，如果用到model，注意增加models文件夹 model的namespace得全局唯一，建议按文件夹层级命名,如:admin_user
│  ├─services  -- 服务方法，建议跟后端类一一对应
│  ├─styles  -- 全局的一些样式
│  ├─types  --系统中用到的一些类型定义
│  ├─utils  --辅助方法
│  │      authority.test.ts
│  │      authority.ts  --权限辅助方法
│  │      Authorized.ts  --权限组件
│  │      getPageTitle.ts  --获取标题的辅助方法
│  │      index.test.ts
│  │      index.ts  --通用辅助方法(导入的时候 import {xx} from '@/utils'即可)
│  │      menu.test.ts
│  │      menu.ts  -- 菜单相关辅助方法
│  │      regexp.ts --正则相关辅助方法
│  │      request.ts --请求库
│  │      store.ts --存储相关
└─typings
```

## 本地开发

安装依赖。

```bash
yarn
```

> 如果网络状况不佳，可以使用 [tyarn](https://www.npmjs.com/package/tyarn) 进行加速。

```bash
yarn start
```

启动完成后会自动打开浏览器访问 [http://localhost:9000](http://localhost:9000)，你看到下面的页面就代表成功了。

接下来你可以修改代码进行业务开发了，我们内建了**模拟数据**、**HMR 实时预览**、**状态管理**、**国际化**、**全局路由**等等各种实用的功能辅助开发，你可以继续阅读和探索左侧的其他文档。

## 后续步骤

[> 基于区块开发](/docs/block-cn) 快速搭建标准页面。

[> 传统开发模式](/docs/router-and-nav-cn)，完全自定义开发。
