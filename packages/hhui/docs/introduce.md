<!--
 * @Author: GengHH
 * @Date: 2022-10-11 18:10:30
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-11 18:49:13
 * @Description: file content
 * @FilePath: \better-ui-vite\packages\hhui\docs\introduce.md
-->
# 简介
## 版本
+ vue3-hhci 目前还处于开发迭代中。

## 使用包管理器
```shell
# NPM
$ npm install vue3-hhci --save

# Yarn
$ yarn add vue3-hhci

# pnpm
$ pnpm install vue3-hhci
```

## 浏览器直接引入
```html
<head>
  <!-- 导入样式 -->
  <link
      rel="stylesheet"
      href="https://unpkg.com/vue3-hhci/style.css"
  />
  <!-- 导入 Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- 导入组件库 -->
  <script src="https://unpkg.com/vue3-hhci"></script>
</head>

<script>
  const App = {
    data() {
      return {
        message: "Hello vue3-hhci",
      };
    },
  };
  const app = Vue.createApp(App);
  app.use(VueHhui.default);
  app.mount("#app");
</script>
```

## 快速开始
### 完整引入
```ts
import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import hhci from 'vue3-hhci'
import 'vue3-hhci/style.css'

createApp(App).use(hhci).mount('#app')
```
