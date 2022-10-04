<!--
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-04 13:23:58
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-04 21:23:39
 * @FilePath: \better-ui-vite\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

### 本项目是采用 pnpm 创建的 nomorepo 仓库

`其中包含封装的组件，还有描述的 Api 文档等`

### config

```
//查看源
pnpm config get registry
//切换淘宝源
pnpm config set registry https://registry.npmmirror.com/

```

### 一.安装依赖

#### 常用指令：全局安装所有包（既会安装根目录下的又会安装）

```ssh
eg:
root>  pnpm i
```

#### 常用指令：为 packages 中项目安装依赖的所有包 or 安装指定的包

```ssh
eg:
root>  pnpm -F @packages/better-vant-ui i
or
root>  pnpm -F @packages/better-vant-ui i vitepress
```

#### 常用指令：为 packages 中项目安装依赖的 packages 中的其他包

```ssh
eg:
root>  pnpm -F  @packages/better-vant-ui-docs add  @packages/better-vant-ui@*
```

**注意：其中的@\*表示默认同步最新版本，省去每次都要同步最新版本的问题。**

构建过程借鉴[@nomorepo](https://juejin.cn/post/7115058575801581605#heading-1)

### 二.运行脚本

#### 1.进入 packages 的单个项目下，直接运行 （不是很推荐）

```
eg：
package_name> pnpm run dev
```

#### 2.直接在根目录（workspace_name）下配置子项目的脚本，然后可以直接运行 （推荐）

```
eg：根目录下的package.json
"scripts": {
  "docs:dev": "pnpm -w run --filter=@packages/better-vant-ui-docs dev"
},
```

```
eg：然后
root> pnpm run doc:dev
```

### 三.删除全局和每个 package 的 node_modules

```
pnpm -r exec rm -rf node_modules
pnpm rimraf **/node_modules
```
