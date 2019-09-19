---
order: 21
title: 更新日志
type: 其他
---

### 2.0.15

`2019-09-19`

- fix withQueryPaged 第一次点击页面无效的 bug

### 2.0.14

`2019-09-16`

- 复杂对象验证规则 getObjRequire 更名为 getComplexRequire 支持自动增加必填标记
- 增加 验证规则 getComplexSame，表示 复杂对象一致性(都空、都不为空)
- fix MultipleFormElement 中 InputNumber 可以输入非数字
- fix withQueryPaged 组件的 setDefaultFilter 设置的默认值在查询、重置的时候丢失的问题

### 2.0.12

`2019-08-20`

- 删除 CountDown 组件，可以使用 Antd 的 Statistic 代替
- fix 多处 TypeScript 的类型错误。

### 2.0.0

`2019-04-20`

💎 Wetrial 的第一个版本。

我们提供了：

- 集成 Ant Design。
- 增加基础组件 withPagedQuery、PageLoading、Authorized、AvatarList、DynamicContainer、Ellipsis、FooterToolbar、MultipleFormElement、ScrollBar、SelectPlus、TagSelect 等
- 增加模板项目 Wetrial-Template，可以直接 clone 下来基于此开发
- 增加验证基础库、请求基础库、存储基础库、基础辅助方法
