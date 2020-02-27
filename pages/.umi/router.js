import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';

const Router = DefaultRouter;

const routes = [
  {
    path: '/',
    component: props =>
      React.createElement(
        require('E:/Study/Project/Wetrial/wetrial-doc/node_modules/umi-plugin-father-doc/lib/themes/default/layout.js')
          .default,
        {
          ...{
            menus: {
              '*': {
                '*': [
                  {
                    path: '/',
                    title: 'README',
                    meta: { locale: 'zh-CN', title: 'README', order: null },
                  },
                ],
                '/course': [
                  {
                    title: '教程',
                    path: '/course/course',
                    meta: { order: 50 },
                    children: [
                      {
                        path: '/course/course/020es6',
                        title: 'ES6知识',
                        meta: {
                          title: 'ES6知识',
                          group: {
                            title: '教程',
                            path: '/course/course',
                            order: 20,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: 'let、cosnt、var',
                              heading: 'let、cosnt、var',
                            },
                            { depth: 1, value: '解构', heading: '解构' },
                            {
                              depth: 1,
                              value: '箭头函数',
                              heading: '箭头函数',
                            },
                            {
                              depth: 1,
                              value: 'Promise、async、await',
                              heading: 'promise、async、await',
                            },
                          ],
                          nav: { path: '/course', title: 'Course' },
                        },
                      },
                      {
                        path: '/course/course/001react',
                        title: 'react基础知识',
                        meta: {
                          title: 'react基础知识',
                          group: {
                            title: '教程',
                            path: '/course/course',
                            order: 1,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: 'tsx 语法',
                              heading: 'tsx-语法',
                            },
                            {
                              depth: 1,
                              value: '生命周期',
                              heading: '生命周期',
                            },
                            { depth: 1, value: '数据流', heading: '数据流' },
                            { depth: 1, value: 'hooks', heading: 'hooks' },
                          ],
                          nav: { path: '/course', title: 'Course' },
                        },
                      },
                      {
                        path: '/course/course/040umi_dva',
                        title: 'umi&dva知识篇',
                        meta: {
                          title: 'umi&dva知识篇',
                          group: {
                            title: '教程',
                            path: '/course/course',
                            order: 40,
                          },
                          slugs: [
                            { depth: 1, value: '路由', heading: '路由' },
                            {
                              depth: 1,
                              value: 'dva 数据流',
                              heading: 'dva-数据流',
                            },
                          ],
                          nav: { path: '/course', title: 'Course' },
                        },
                      },
                      {
                        path: '/course/course/050wetrial',
                        title: 'wetrial相关库',
                        meta: {
                          title: 'wetrial相关库',
                          group: {
                            title: '教程',
                            path: '/course/course',
                            order: 50,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: '@wetrial/core',
                              heading: 'wetrialcore',
                            },
                            {
                              depth: 1,
                              value: '@wetrial/component',
                              heading: 'wetrialcomponent',
                            },
                            {
                              depth: 1,
                              value: '@wetrial/hooks',
                              heading: 'wetrialhooks',
                            },
                            {
                              depth: 1,
                              value: 'create-wetrial',
                              heading: 'create-wetrial',
                            },
                            {
                              depth: 1,
                              value: 'wetrial-template',
                              heading: 'wetrial-template',
                            },
                          ],
                          nav: { path: '/course', title: 'Course' },
                        },
                      },
                      {
                        path: '/course/course/002library',
                        title: '常用组件篇',
                        meta: {
                          title: '常用组件篇',
                          group: {
                            title: '教程',
                            path: '/course/course',
                            order: 2,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: 'react-router',
                              heading: 'react-router',
                            },
                            { depth: 1, value: 'lodash', heading: 'lodash' },
                            { depth: 1, value: 'moment', heading: 'moment' },
                          ],
                          nav: { path: '/course', title: 'Course' },
                        },
                      },
                      {
                        path: '/course/course/030codestyle',
                        title: '代码规范lint',
                        meta: {
                          title: '代码规范lint',
                          group: {
                            title: '教程',
                            path: '/course/course',
                            order: 30,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: '样式 代码规范',
                              heading: '样式-代码规范',
                            },
                            {
                              depth: 1,
                              value: '风格统一',
                              heading: '风格统一',
                            },
                            {
                              depth: 1,
                              value: '提交代码 lint、prettier 等',
                              heading: '提交代码-lint、prettier-等',
                            },
                            {
                              depth: 1,
                              value: 'git hooks',
                              heading: 'git-hooks',
                            },
                          ],
                          nav: { path: '/course', title: 'Course' },
                        },
                      },
                      {
                        path: '/course/course/010typescript',
                        title: 'typescript知识',
                        meta: {
                          title: 'typescript知识',
                          group: {
                            title: '教程',
                            path: '/course/course',
                            order: 10,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: '类型约束',
                              heading: '类型约束',
                            },
                            { depth: 1, value: '接口', heading: '接口' },
                            {
                              depth: 1,
                              value: '系统类型',
                              heading: '系统类型',
                            },
                            { depth: 1, value: '泛型', heading: '泛型' },
                            {
                              depth: 2,
                              value: '常见问题',
                              heading: '常见问题',
                            },
                          ],
                          nav: { path: '/course', title: 'Course' },
                        },
                      },
                    ],
                  },
                ],
                '/css': [
                  {
                    title: '样式',
                    path: '/css/style',
                    meta: { order: 5000 },
                    children: [
                      {
                        path: '/css/style',
                        title: '样式使用',
                        meta: {
                          title: '样式使用',
                          group: {
                            title: '样式',
                            path: '/css/style',
                            order: 5000,
                          },
                          slugs: [
                            { depth: 1, value: 'less', heading: 'less' },
                            {
                              depth: 1,
                              value: 'CSS Modules',
                              heading: 'css-modules',
                            },
                            {
                              depth: 1,
                              value: '样式文件类别',
                              heading: '样式文件类别',
                            },
                            {
                              depth: 2,
                              value: 'src/index.less',
                              heading: 'srcindexless',
                            },
                            {
                              depth: 2,
                              value: 'src/utils/utils.less',
                              heading: 'srcutilsutilsless',
                            },
                            {
                              depth: 2,
                              value: '模块样式',
                              heading: '模块样式',
                            },
                            {
                              depth: 1,
                              value: '覆盖组件样式',
                              heading: '覆盖组件样式',
                            },
                          ],
                          nav: { path: '/css', title: 'Css' },
                        },
                      },
                      {
                        path: '/css/style/change-theme',
                        title: '在线更换主题',
                        meta: {
                          title: '在线更换主题',
                          group: {
                            title: '样式',
                            path: '/css/style',
                            order: 5000,
                          },
                          slugs: [
                            { depth: 1, value: '背景', heading: '背景' },
                            {
                              depth: 1,
                              value: '合并 less',
                              heading: '合并-less',
                            },
                            {
                              depth: 1,
                              value: '转化 css-module',
                              heading: '转化-css-module',
                            },
                            {
                              depth: 1,
                              value: '抽取 less 变量',
                              heading: '抽取-less-变量',
                            },
                            {
                              depth: 1,
                              value: '现有的问题',
                              heading: '现有的问题',
                            },
                            {
                              depth: 1,
                              value: '未来的改进',
                              heading: '未来的改进',
                            },
                          ],
                          locale: 'zh-CN',
                          nav: { path: '/css', title: 'Css' },
                        },
                      },
                    ],
                  },
                ],
                '/design': [
                  {
                    title: '设计',
                    path: '/design/design',
                    meta: { order: 1 },
                    children: [
                      {
                        path: '/design/design',
                        title: '页面规范',
                        meta: {
                          title: '页面规范',
                          group: {
                            title: '设计',
                            path: '/design/design',
                            order: 1,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: '列表页面',
                              heading: '列表页面',
                            },
                            {
                              depth: 2,
                              value: '操作栏按钮',
                              heading: '操作栏按钮',
                            },
                            { depth: 1, value: '编辑页', heading: '编辑页' },
                            { depth: 1, value: '弹窗页', heading: '弹窗页' },
                            {
                              depth: 1,
                              value: 'tab 页面',
                              heading: 'tab-页面',
                            },
                          ],
                          nav: { path: '/design', title: 'Design' },
                        },
                      },
                    ],
                  },
                ],
                '/other': [
                  {
                    title: '其他',
                    path: '/other/other',
                    meta: { order: 1 },
                    children: [
                      {
                        path: '/other/other/block',
                        title: '区块',
                        meta: {
                          title: '区块',
                          group: {
                            title: '其他',
                            path: '/other/other',
                            order: 1,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: '使用区块',
                              heading: '使用区块',
                            },
                            {
                              depth: 1,
                              value: '添加到路由',
                              heading: '添加到路由',
                            },
                            {
                              depth: 1,
                              value: '更多内容',
                              heading: '更多内容',
                            },
                          ],
                          nav: { path: '/other', title: 'Other' },
                        },
                      },
                      {
                        path: '/other/other/deploy',
                        title: '部署',
                        meta: {
                          title: '部署',
                          group: {
                            title: '其他',
                            path: '/other/other',
                            order: 2,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: '前端路由与服务端的结合',
                              heading: '前端路由与服务端的结合',
                            },
                            {
                              depth: 1,
                              value: '部署到非根目录',
                              heading: '部署到非根目录',
                            },
                            {
                              depth: 1,
                              value: '部署到不同的平台',
                              heading: '部署到不同的平台',
                            },
                            {
                              depth: 2,
                              value: '使用 nginx',
                              heading: '使用-nginx',
                            },
                            {
                              depth: 2,
                              value: '使用 .net core',
                              heading: '使用-net-core',
                            },
                            {
                              depth: 2,
                              value: '使用 spring boot',
                              heading: '使用-spring-boot',
                            },
                            {
                              depth: 2,
                              value: '使用 express',
                              heading: '使用-express',
                            },
                            {
                              depth: 2,
                              value: '使用 egg',
                              heading: '使用-egg',
                            },
                          ],
                          nav: { path: '/other', title: 'Other' },
                        },
                      },
                      {
                        path: '/other/other/ui-test',
                        title: '测试',
                        meta: {
                          title: '测试',
                          group: {
                            title: '其他',
                            path: '/other/other',
                            order: 1,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: '单元测试',
                              heading: '单元测试',
                            },
                            {
                              depth: 2,
                              value: '写一个用例',
                              heading: '写一个用例',
                            },
                            {
                              depth: 2,
                              value: '本地执行',
                              heading: '本地执行',
                            },
                            {
                              depth: 2,
                              value: '测试 dva 包装组件',
                              heading: '测试-dva-包装组件',
                            },
                            {
                              depth: 1,
                              value: 'e2e 测试',
                              heading: 'e2e-测试',
                            },
                            {
                              depth: 2,
                              value: '写一个 e2e 用例',
                              heading: '写一个-e2e-用例',
                            },
                            {
                              depth: 2,
                              value: '运行用例',
                              heading: '运行用例',
                            },
                            {
                              depth: 1,
                              value: 'watch 模式',
                              heading: 'watch-模式',
                            },
                            {
                              depth: 1,
                              value: '测试覆盖率',
                              heading: '测试覆盖率',
                            },
                            {
                              depth: 1,
                              value: '聚焦和忽略用例',
                              heading: '聚焦和忽略用例',
                            },
                            {
                              depth: 1,
                              value: '接入集成测试服务',
                              heading: '接入集成测试服务',
                            },
                            {
                              depth: 1,
                              value: '参考链接',
                              heading: '参考链接',
                            },
                          ],
                          nav: { path: '/other', title: 'Other' },
                        },
                      },
                      {
                        path: '/other/other/resource',
                        title: '资源',
                        meta: {
                          title: '资源',
                          group: {
                            title: '其他',
                            path: '/other/other',
                            order: 1,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: 'Axure Library ',
                              heading: 'axure-library',
                            },
                            {
                              depth: 1,
                              value: 'Ant Design Pro Sketch ',
                              heading: 'ant-design-pro-sketch',
                            },
                            {
                              depth: 1,
                              value: '其他 Ant Design 设计资源',
                              heading: '其他-ant-design-设计资源',
                            },
                          ],
                          nav: { path: '/other', title: 'Other' },
                        },
                      },
                      {
                        path: '/other/other/changelog',
                        title: '更新日志',
                        meta: {
                          title: '更新日志',
                          group: {
                            title: '其他',
                            path: '/other/other',
                            order: 1,
                          },
                          slugs: [
                            { depth: 2, value: '3.0.0', heading: '300' },
                            { depth: 2, value: '2.0.17', heading: '2017' },
                            { depth: 2, value: '2.0.16', heading: '2016' },
                            { depth: 2, value: '2.0.15', heading: '2015' },
                            { depth: 2, value: '2.0.14', heading: '2014' },
                            { depth: 2, value: '2.0.12', heading: '2012' },
                            { depth: 2, value: '2.0.0', heading: '200' },
                          ],
                          nav: { path: '/other', title: 'Other' },
                        },
                      },
                      {
                        path: '/other/other/from-community',
                        title: '社区精选组件',
                        meta: {
                          title: '社区精选组件',
                          group: {
                            title: '其他',
                            path: '/other/other',
                            order: 2,
                          },
                          slugs: [],
                          nav: { path: '/other', title: 'Other' },
                        },
                      },
                    ],
                  },
                ],
                '/style': [
                  {
                    title: '其他',
                    path: '/style/style',
                    meta: { order: 1 },
                    children: [
                      {
                        path: '/style/style/team-style',
                        title: '代码规范',
                        meta: {
                          title: '代码规范',
                          group: {
                            title: '其他',
                            path: '/style/style',
                            order: 1,
                          },
                          slugs: [
                            { depth: 1, value: '注释', heading: '注释' },
                            {
                              depth: 1,
                              value: '引用组件顺序',
                              heading: '引用组件顺序',
                            },
                            { depth: 1, value: '引号', heading: '引号' },
                            {
                              depth: 1,
                              value: '缩进、分号',
                              heading: '缩进、分号',
                            },
                            { depth: 1, value: '括号', heading: '括号' },
                            {
                              depth: 1,
                              value: '数组、对象',
                              heading: '数组、对象',
                            },
                            { depth: 1, value: '命名', heading: '命名' },
                            {
                              depth: 1,
                              value: 'interface 声明顺序',
                              heading: 'interface-声明顺序',
                            },
                            {
                              depth: 1,
                              value: 'ts 好用的相关工具泛型',
                              heading: 'ts-好用的相关工具泛型',
                            },
                            {
                              depth: 1,
                              value: 'ts 一些好用的小 tips',
                              heading: 'ts-一些好用的小-tips',
                            },
                            {
                              depth: 1,
                              value: '其他规范',
                              heading: '其他规范',
                            },
                            {
                              depth: 1,
                              value: 'react 组件规范',
                              heading: 'react-组件规范',
                            },
                            {
                              depth: 1,
                              value:
                                'render 里面计算型数据尽量缓存，使用 momoize-One',
                              heading:
                                'render-里面计算型数据尽量缓存，使用-momoize-one',
                            },
                            {
                              depth: 1,
                              value:
                                '在 componentWillUnmount 里面去除副作用的函数',
                              heading:
                                '在-componentwillunmount-里面去除副作用的函数',
                            },
                            {
                              depth: 1,
                              value: 'react 中的 key',
                              heading: 'react-中的-key',
                            },
                            {
                              depth: 1,
                              value: '防止 xss 攻击',
                              heading: '防止-xss-攻击',
                            },
                            {
                              depth: 1,
                              value: '在组件中获取真实 dom',
                              heading: '在组件中获取真实-dom',
                            },
                            {
                              depth: 1,
                              value: '减少魔法数字',
                              heading: '减少魔法数字',
                            },
                            {
                              depth: 1,
                              value: 'Event 事件对象类型',
                              heading: 'event-事件对象类型',
                            },
                            {
                              depth: 1,
                              value: '使用私有属性取代 state 状态',
                              heading: '使用私有属性取代-state-状态',
                            },
                            {
                              depth: 1,
                              value: '代码细粒度的思考',
                              heading: '代码细粒度的思考',
                            },
                            {
                              depth: 1,
                              value:
                                '可以不挂在载组件内部的，尽量不要放在组件内部',
                              heading:
                                '可以不挂在载组件内部的，尽量不要放在组件内部',
                            },
                          ],
                          nav: { path: '/style', title: 'Style' },
                        },
                      },
                    ],
                  },
                ],
              },
            },
            locales: [],
            navs: {
              '*': [
                { path: '/css', title: 'Css' },
                { path: '/other', title: 'Other' },
                { path: '/style', title: 'Style' },
                { path: '/course', title: 'Course' },
                { path: '/design', title: 'Design' },
              ],
            },
            title: 'Wetrial Doc',
            logo: 'https://avatars2.githubusercontent.com/u/40448889?s=66&v=4',
            mode: 'site',
            repoUrl: 'https://github.com/wetrial/wetrial-doc',
          },
          ...props,
        },
      ),
    routes: [
      {
        path: '/',
        component: require('../../README.md').default,
        exact: true,
        meta: {
          locale: 'zh-CN',
          title: 'README',
          order: null,
        },
        title: 'README',
        _title: 'Wetrial Doc - README',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/course/course/001react',
        component: require('../../docs/course/001react.md').default,
        exact: true,
        meta: {
          title: 'react基础知识',
          group: {
            title: '教程',
            path: '/course/course',
            order: 1,
          },
          slugs: [
            {
              depth: 1,
              value: 'tsx 语法',
              heading: 'tsx-语法',
            },
            {
              depth: 1,
              value: '生命周期',
              heading: '生命周期',
            },
            {
              depth: 1,
              value: '数据流',
              heading: '数据流',
            },
            {
              depth: 1,
              value: 'hooks',
              heading: 'hooks',
            },
          ],
          nav: {
            path: '/course',
            title: 'Course',
          },
        },
        title: 'react基础知识',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - react基础知识',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/course/course/002library',
        component: require('../../docs/course/002library.md').default,
        exact: true,
        meta: {
          title: '常用组件篇',
          group: {
            title: '教程',
            path: '/course/course',
            order: 2,
          },
          slugs: [
            {
              depth: 1,
              value: 'react-router',
              heading: 'react-router',
            },
            {
              depth: 1,
              value: 'lodash',
              heading: 'lodash',
            },
            {
              depth: 1,
              value: 'moment',
              heading: 'moment',
            },
          ],
          nav: {
            path: '/course',
            title: 'Course',
          },
        },
        title: '常用组件篇',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 常用组件篇',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/course/course/010typescript',
        component: require('../../docs/course/010typescript.md').default,
        exact: true,
        meta: {
          title: 'typescript知识',
          group: {
            title: '教程',
            path: '/course/course',
            order: 10,
          },
          slugs: [
            {
              depth: 1,
              value: '类型约束',
              heading: '类型约束',
            },
            {
              depth: 1,
              value: '接口',
              heading: '接口',
            },
            {
              depth: 1,
              value: '系统类型',
              heading: '系统类型',
            },
            {
              depth: 1,
              value: '泛型',
              heading: '泛型',
            },
            {
              depth: 2,
              value: '常见问题',
              heading: '常见问题',
            },
          ],
          nav: {
            path: '/course',
            title: 'Course',
          },
        },
        title: 'typescript知识',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - typescript知识',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/course/course/020es6',
        component: require('../../docs/course/020es6.md').default,
        exact: true,
        meta: {
          title: 'ES6知识',
          group: {
            title: '教程',
            path: '/course/course',
            order: 20,
          },
          slugs: [
            {
              depth: 1,
              value: 'let、cosnt、var',
              heading: 'let、cosnt、var',
            },
            {
              depth: 1,
              value: '解构',
              heading: '解构',
            },
            {
              depth: 1,
              value: '箭头函数',
              heading: '箭头函数',
            },
            {
              depth: 1,
              value: 'Promise、async、await',
              heading: 'promise、async、await',
            },
          ],
          nav: {
            path: '/course',
            title: 'Course',
          },
        },
        title: 'ES6知识',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - ES6知识',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/course/course/030codestyle',
        component: require('../../docs/course/030codestyle.md').default,
        exact: true,
        meta: {
          title: '代码规范lint',
          group: {
            title: '教程',
            path: '/course/course',
            order: 30,
          },
          slugs: [
            {
              depth: 1,
              value: '样式 代码规范',
              heading: '样式-代码规范',
            },
            {
              depth: 1,
              value: '风格统一',
              heading: '风格统一',
            },
            {
              depth: 1,
              value: '提交代码 lint、prettier 等',
              heading: '提交代码-lint、prettier-等',
            },
            {
              depth: 1,
              value: 'git hooks',
              heading: 'git-hooks',
            },
          ],
          nav: {
            path: '/course',
            title: 'Course',
          },
        },
        title: '代码规范lint',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 代码规范lint',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/course/course/040umi_dva',
        component: require('../../docs/course/040umi_dva.md').default,
        exact: true,
        meta: {
          title: 'umi&dva知识篇',
          group: {
            title: '教程',
            path: '/course/course',
            order: 40,
          },
          slugs: [
            {
              depth: 1,
              value: '路由',
              heading: '路由',
            },
            {
              depth: 1,
              value: 'dva 数据流',
              heading: 'dva-数据流',
            },
          ],
          nav: {
            path: '/course',
            title: 'Course',
          },
        },
        title: 'umi&dva知识篇',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - umi&dva知识篇',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/course/course/050wetrial',
        component: require('../../docs/course/050wetrial.md').default,
        exact: true,
        meta: {
          title: 'wetrial相关库',
          group: {
            title: '教程',
            path: '/course/course',
            order: 50,
          },
          slugs: [
            {
              depth: 1,
              value: '@wetrial/core',
              heading: 'wetrialcore',
            },
            {
              depth: 1,
              value: '@wetrial/component',
              heading: 'wetrialcomponent',
            },
            {
              depth: 1,
              value: '@wetrial/hooks',
              heading: 'wetrialhooks',
            },
            {
              depth: 1,
              value: 'create-wetrial',
              heading: 'create-wetrial',
            },
            {
              depth: 1,
              value: 'wetrial-template',
              heading: 'wetrial-template',
            },
          ],
          nav: {
            path: '/course',
            title: 'Course',
          },
        },
        title: 'wetrial相关库',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - wetrial相关库',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/css/style/change-theme',
        component: require('../../docs/css/change-theme.zh-CN.md').default,
        exact: true,
        meta: {
          title: '在线更换主题',
          group: {
            title: '样式',
            path: '/css/style',
            order: 5000,
          },
          slugs: [
            {
              depth: 1,
              value: '背景',
              heading: '背景',
            },
            {
              depth: 1,
              value: '合并 less',
              heading: '合并-less',
            },
            {
              depth: 1,
              value: '转化 css-module',
              heading: '转化-css-module',
            },
            {
              depth: 1,
              value: '抽取 less 变量',
              heading: '抽取-less-变量',
            },
            {
              depth: 1,
              value: '现有的问题',
              heading: '现有的问题',
            },
            {
              depth: 1,
              value: '未来的改进',
              heading: '未来的改进',
            },
          ],
          locale: 'zh-CN',
          nav: {
            path: '/css',
            title: 'Css',
          },
        },
        title: '在线更换主题',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 在线更换主题',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/css/style',
        component: require('../../docs/css/style.md').default,
        exact: true,
        meta: {
          title: '样式使用',
          group: {
            title: '样式',
            path: '/css/style',
            order: 5000,
          },
          slugs: [
            {
              depth: 1,
              value: 'less',
              heading: 'less',
            },
            {
              depth: 1,
              value: 'CSS Modules',
              heading: 'css-modules',
            },
            {
              depth: 1,
              value: '样式文件类别',
              heading: '样式文件类别',
            },
            {
              depth: 2,
              value: 'src/index.less',
              heading: 'srcindexless',
            },
            {
              depth: 2,
              value: 'src/utils/utils.less',
              heading: 'srcutilsutilsless',
            },
            {
              depth: 2,
              value: '模块样式',
              heading: '模块样式',
            },
            {
              depth: 1,
              value: '覆盖组件样式',
              heading: '覆盖组件样式',
            },
          ],
          nav: {
            path: '/css',
            title: 'Css',
          },
        },
        title: '样式使用',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 样式使用',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/design/design',
        component: require('../../docs/design/index.md').default,
        exact: true,
        meta: {
          title: '页面规范',
          group: {
            title: '设计',
            path: '/design/design',
            order: 1,
          },
          slugs: [
            {
              depth: 1,
              value: '列表页面',
              heading: '列表页面',
            },
            {
              depth: 2,
              value: '操作栏按钮',
              heading: '操作栏按钮',
            },
            {
              depth: 1,
              value: '编辑页',
              heading: '编辑页',
            },
            {
              depth: 1,
              value: '弹窗页',
              heading: '弹窗页',
            },
            {
              depth: 1,
              value: 'tab 页面',
              heading: 'tab-页面',
            },
          ],
          nav: {
            path: '/design',
            title: 'Design',
          },
        },
        title: '页面规范',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 页面规范',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/other/other/block',
        component: require('../../docs/other/block.md').default,
        exact: true,
        meta: {
          title: '区块',
          group: {
            title: '其他',
            path: '/other/other',
            order: 1,
          },
          slugs: [
            {
              depth: 1,
              value: '使用区块',
              heading: '使用区块',
            },
            {
              depth: 1,
              value: '添加到路由',
              heading: '添加到路由',
            },
            {
              depth: 1,
              value: '更多内容',
              heading: '更多内容',
            },
          ],
          nav: {
            path: '/other',
            title: 'Other',
          },
        },
        title: '区块',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 区块',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/other/other/changelog',
        component: require('../../docs/other/changelog.md').default,
        exact: true,
        meta: {
          title: '更新日志',
          group: {
            title: '其他',
            path: '/other/other',
            order: 1,
          },
          slugs: [
            {
              depth: 2,
              value: '3.0.0',
              heading: '300',
            },
            {
              depth: 2,
              value: '2.0.17',
              heading: '2017',
            },
            {
              depth: 2,
              value: '2.0.16',
              heading: '2016',
            },
            {
              depth: 2,
              value: '2.0.15',
              heading: '2015',
            },
            {
              depth: 2,
              value: '2.0.14',
              heading: '2014',
            },
            {
              depth: 2,
              value: '2.0.12',
              heading: '2012',
            },
            {
              depth: 2,
              value: '2.0.0',
              heading: '200',
            },
          ],
          nav: {
            path: '/other',
            title: 'Other',
          },
        },
        title: '更新日志',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 更新日志',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/other/other/deploy',
        component: require('../../docs/other/deploy.md').default,
        exact: true,
        meta: {
          title: '部署',
          group: {
            title: '其他',
            path: '/other/other',
            order: 2,
          },
          slugs: [
            {
              depth: 1,
              value: '前端路由与服务端的结合',
              heading: '前端路由与服务端的结合',
            },
            {
              depth: 1,
              value: '部署到非根目录',
              heading: '部署到非根目录',
            },
            {
              depth: 1,
              value: '部署到不同的平台',
              heading: '部署到不同的平台',
            },
            {
              depth: 2,
              value: '使用 nginx',
              heading: '使用-nginx',
            },
            {
              depth: 2,
              value: '使用 .net core',
              heading: '使用-net-core',
            },
            {
              depth: 2,
              value: '使用 spring boot',
              heading: '使用-spring-boot',
            },
            {
              depth: 2,
              value: '使用 express',
              heading: '使用-express',
            },
            {
              depth: 2,
              value: '使用 egg',
              heading: '使用-egg',
            },
          ],
          nav: {
            path: '/other',
            title: 'Other',
          },
        },
        title: '部署',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 部署',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/other/other/from-community',
        component: require('../../docs/other/from-community.md').default,
        exact: true,
        meta: {
          title: '社区精选组件',
          group: {
            title: '其他',
            path: '/other/other',
            order: 2,
          },
          slugs: [],
          nav: {
            path: '/other',
            title: 'Other',
          },
        },
        title: '社区精选组件',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 社区精选组件',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/other/other/resource',
        component: require('../../docs/other/resource.md').default,
        exact: true,
        meta: {
          title: '资源',
          group: {
            title: '其他',
            path: '/other/other',
            order: 1,
          },
          slugs: [
            {
              depth: 1,
              value: 'Axure Library ',
              heading: 'axure-library',
            },
            {
              depth: 1,
              value: 'Ant Design Pro Sketch ',
              heading: 'ant-design-pro-sketch',
            },
            {
              depth: 1,
              value: '其他 Ant Design 设计资源',
              heading: '其他-ant-design-设计资源',
            },
          ],
          nav: {
            path: '/other',
            title: 'Other',
          },
        },
        title: '资源',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 资源',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/other/other/ui-test',
        component: require('../../docs/other/ui-test.md').default,
        exact: true,
        meta: {
          title: '测试',
          group: {
            title: '其他',
            path: '/other/other',
            order: 1,
          },
          slugs: [
            {
              depth: 1,
              value: '单元测试',
              heading: '单元测试',
            },
            {
              depth: 2,
              value: '写一个用例',
              heading: '写一个用例',
            },
            {
              depth: 2,
              value: '本地执行',
              heading: '本地执行',
            },
            {
              depth: 2,
              value: '测试 dva 包装组件',
              heading: '测试-dva-包装组件',
            },
            {
              depth: 1,
              value: 'e2e 测试',
              heading: 'e2e-测试',
            },
            {
              depth: 2,
              value: '写一个 e2e 用例',
              heading: '写一个-e2e-用例',
            },
            {
              depth: 2,
              value: '运行用例',
              heading: '运行用例',
            },
            {
              depth: 1,
              value: 'watch 模式',
              heading: 'watch-模式',
            },
            {
              depth: 1,
              value: '测试覆盖率',
              heading: '测试覆盖率',
            },
            {
              depth: 1,
              value: '聚焦和忽略用例',
              heading: '聚焦和忽略用例',
            },
            {
              depth: 1,
              value: '接入集成测试服务',
              heading: '接入集成测试服务',
            },
            {
              depth: 1,
              value: '参考链接',
              heading: '参考链接',
            },
          ],
          nav: {
            path: '/other',
            title: 'Other',
          },
        },
        title: '测试',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 测试',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/style/style/team-style',
        component: require('../../docs/style/team-style.md').default,
        exact: true,
        meta: {
          title: '代码规范',
          group: {
            title: '其他',
            path: '/style/style',
            order: 1,
          },
          slugs: [
            {
              depth: 1,
              value: '注释',
              heading: '注释',
            },
            {
              depth: 1,
              value: '引用组件顺序',
              heading: '引用组件顺序',
            },
            {
              depth: 1,
              value: '引号',
              heading: '引号',
            },
            {
              depth: 1,
              value: '缩进、分号',
              heading: '缩进、分号',
            },
            {
              depth: 1,
              value: '括号',
              heading: '括号',
            },
            {
              depth: 1,
              value: '数组、对象',
              heading: '数组、对象',
            },
            {
              depth: 1,
              value: '命名',
              heading: '命名',
            },
            {
              depth: 1,
              value: 'interface 声明顺序',
              heading: 'interface-声明顺序',
            },
            {
              depth: 1,
              value: 'ts 好用的相关工具泛型',
              heading: 'ts-好用的相关工具泛型',
            },
            {
              depth: 1,
              value: 'ts 一些好用的小 tips',
              heading: 'ts-一些好用的小-tips',
            },
            {
              depth: 1,
              value: '其他规范',
              heading: '其他规范',
            },
            {
              depth: 1,
              value: 'react 组件规范',
              heading: 'react-组件规范',
            },
            {
              depth: 1,
              value: 'render 里面计算型数据尽量缓存，使用 momoize-One',
              heading: 'render-里面计算型数据尽量缓存，使用-momoize-one',
            },
            {
              depth: 1,
              value: '在 componentWillUnmount 里面去除副作用的函数',
              heading: '在-componentwillunmount-里面去除副作用的函数',
            },
            {
              depth: 1,
              value: 'react 中的 key',
              heading: 'react-中的-key',
            },
            {
              depth: 1,
              value: '防止 xss 攻击',
              heading: '防止-xss-攻击',
            },
            {
              depth: 1,
              value: '在组件中获取真实 dom',
              heading: '在组件中获取真实-dom',
            },
            {
              depth: 1,
              value: '减少魔法数字',
              heading: '减少魔法数字',
            },
            {
              depth: 1,
              value: 'Event 事件对象类型',
              heading: 'event-事件对象类型',
            },
            {
              depth: 1,
              value: '使用私有属性取代 state 状态',
              heading: '使用私有属性取代-state-状态',
            },
            {
              depth: 1,
              value: '代码细粒度的思考',
              heading: '代码细粒度的思考',
            },
            {
              depth: 1,
              value: '可以不挂在载组件内部的，尽量不要放在组件内部',
              heading: '可以不挂在载组件内部的，尽量不要放在组件内部',
            },
          ],
          nav: {
            path: '/style',
            title: 'Style',
          },
        },
        title: '代码规范',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial Doc - 代码规范',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/course/course',
        meta: {
          order: 1,
        },
        exact: true,
        redirect: '/course/course/020es6',
        _title: 'Wetrial Doc',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/course',
        meta: {},
        exact: true,
        redirect: '/course/course',
        _title: 'Wetrial Doc',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/css',
        meta: {},
        exact: true,
        redirect: '/css/style',
        _title: 'Wetrial Doc',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/design',
        meta: {},
        exact: true,
        redirect: '/design/design',
        _title: 'Wetrial Doc',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/other/other',
        meta: {
          order: 1,
        },
        exact: true,
        redirect: '/other/other/block',
        _title: 'Wetrial Doc',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/other',
        meta: {},
        exact: true,
        redirect: '/other/other',
        _title: 'Wetrial Doc',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/style/style',
        meta: {
          order: 1,
        },
        exact: true,
        redirect: '/style/style/team-style',
        _title: 'Wetrial Doc',
        _title_default: 'Wetrial Doc',
      },
      {
        path: '/style',
        meta: {},
        exact: true,
        redirect: '/style/style',
        _title: 'Wetrial Doc',
        _title_default: 'Wetrial Doc',
      },
      {
        component: () =>
          React.createElement(
            require('E:/Study/Project/Wetrial/wetrial-doc/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'pages', hasRoutesInConfig: false },
          ),
        _title: 'Wetrial Doc',
        _title_default: 'Wetrial Doc',
      },
    ],
    title: 'Wetrial Doc',
    _title: 'Wetrial Doc',
    _title_default: 'Wetrial Doc',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
