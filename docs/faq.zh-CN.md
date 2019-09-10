---
order: 22
title: 常见问题
type: 入门
---

提问之前，请先查阅下面的常见问题。

### Wetrial 和 Wetrial-Template 有什么区别？

可以理解为 Wetrial 是基于 Antd 提供了其他一些常用的组件库，而 Wetrial-Template 是使用了这套组件库的基础模板项目，提供了一些最佳实践案例。

### 如何使用 Wetrial-Template？

请阅读文档 [开始使用](/docs/getting-started)。

### 是否可以在生产环境中使用 Wetrial？

当然可以！Wetrial-Template 基于最新的 Wetrial 版本开发，目前已有多个项目正在使用。

### 如何更新 Wetrial？

- 单独升级 `wetrial` 版本，用于更新基础组件。
- 直接在 GitHub 上拷贝最新的典型模板。

### 如何使用请求库

```tsx
// 组件使用wetrial，其他请使用@wetrial(import的时候已经定义了别名)
import { get, post, del, patch, put } from '@wetrial/request';
```

> @wetrial/request 是基于 axios 封装的，内部预定义了统一的拦截器，也可以自行删除、替换内部默认的拦截器

### 如何使用存储功能

```tsx
import storeWithExp from '@wetrial/store';

//支持过期时间
storeWithExp.set('key', 'value', expireTime);
```
