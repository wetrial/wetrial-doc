---
title: Ellipsis 超出省略
order: 10
nav:
  title: 组件
  path: /list
group:
  title: 数据展示
  path: /data-display
legacy: /data-display/ellipsis
---

# Ellipsis 超出省略

文本过长自动处理省略号，支持按照文本长度和最大行数两种方式截取。

## 案例

### 指定行数

<code src="./demo/demo1.tsx" />

### 指定字数

<code src="./demo/demo2.tsx" />

### 悬浮提示

<code src="./demo/demo3.tsx" />

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tooltip | 移动到文本展示完整内容的提示 | boolean | - |
| length | 在按照长度截取下的文本最大字符数，超过则截取省略(与`lines`存在一个即可) | number | - |
| lines | 在按照行数截取下最大的行数，超过则截取省略(与`length`存在一个即可) | number | `1` |
| fullWidthRecognition | 是否将全角字符的长度视为 2 来计算字符串长度 | boolean | - |
