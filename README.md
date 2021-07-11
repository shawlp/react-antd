# 项目

## 项目名称

基于 webpack5 和 TypeScript 建立的 react antd 后台项目

## 项目技术栈说明

webpack5 + TypeScript + React + React Hooks + React Query + Antd pro

## 代码规范最佳实践

### eslint

通过配置.eslintrc.\*制定团队代码规范，对于不规范代码提供提醒及自动化修复功能，能够帮助开发者及时更正不符合规范的代码

### prettier

根据规范自动格式化代码，通常与 eslint 搭配使用

### editorconfig

编辑器配置。用于覆盖编辑器默认配置，以确保不同编辑器之间，代码格式的统一

### 规范检查增强（husky + lint-staged）

在 git commit 之前，先强制进行 prettier 格式化，再检查代码规范，若检查不通过，阻止提交

### commitlint 约束

使用 commitlint 约束项目 Git 代码提交描述信息格式规范

### conventional-changelog 生成项目变更日志

## 文件目录结构

```
.
├── README.md
├── babel.config.js
├── build
│   ├── paths.js
│   ├── webpack.base.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── commitlint.config.js
├── config
│   └── index.js
├── package.json
├── postcss.config.js
├── src
│   ├── @types
│   ├── App.less
│   ├── App.tsx
│   ├── assets
│   ├── components
│   ├── index.tsx
│   ├── models
│   ├── routes
│   ├── service
│   ├── utils
│   └── views
├── static
│   ├── favicon.svg
│   └── index.html
├── tsconfig.json

```

## 项目脚本

```bash
init project: npm run init

bootstrap project: npm run start

build project: npm run build

analyze project: npm run analyze
```
