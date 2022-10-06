<!--
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-04 13:23:58
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-06 14:36:23
 * @FilePath: \better-ui-vite\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

#### 本项目是采用 pnpm 创建的 nomorepo 仓库

`其中包含封装的组件，还有描述的 Api 文档等`

#### config

```
//查看源
pnpm config get registry
//切换淘宝源
pnpm config set registry https://registry.npmmirror.com/

```

---

#### 一.安装依赖

##### 常用指令：全局安装所有包（既会安装根目录下的又会安装）

```ssh
eg:
root>  pnpm i
```

##### 常用指令：安装公用的包（安装在根目录下）

```ssh
eg:
root>  pnpm add <package_name> -w
```

##### 常用指令：为 packages 中项目安装依赖的所有包 or 安装指定的包

```ssh
eg:
root>  pnpm -F @better-vant/better-vant-ui i
or
root>  pnpm -F @better-vant/better-vant-ui i vitepress
```

##### 常用指令：为 packages 中项目安装依赖的 packages 中的其他包

```ssh
eg:
root>  pnpm -F  @better-vant/better-vant-ui-docs add  @better-vant/better-vant-ui@*
```

**注意：其中的@\*表示默认同步最新版本，省去每次都要同步最新版本的问题。**

构建过程借鉴[@nomorepo](https://juejin.cn/post/7115058575801581605#heading-1)

#### 二.运行脚本

##### 1.进入 packages 的单个项目下，直接运行 （不是很推荐）

```
eg：
package_name> pnpm run dev
```

##### 2.直接在根目录（workspace_name）下配置子项目的脚本，然后可以直接运行 （推荐）

```
eg：根目录下的package.json
"scripts": {
  "docs:dev": "pnpm -w run --filter=@better-vant/better-vant-ui-docs dev"
},
```

```
eg：然后
root> pnpm run doc:dev
```

#### 三.删除全局和每个 package 的 node_modules

```
pnpm -r exec rm -rf node_modules
pnpm rimraf **/node_modules
```

---

#### 发包流程

##### 登录 npm

```
root> npm login
```

##### 修改配置来确保 npm 不是使用的淘宝镜像 or 使用 nrm 进行切换

```
不使用淘宝镜像 （发布npm包时，需要切换到此源）
root> npm config set registry https://registry.npmjs.org/

使用淘宝镜像（npm发布完后，需要切换到此源，否则再执行pnpm安装包时会报错）
npm config set registry http://registry.npm.taobao.org/
```

##### 使用 pnpm 指令发布 nmp 包

注意：前提条件是已经在[ @npm.com ](https://www.npmjs.com/)中创建了名为'better-vant'的 Organizations；否则发包会报错。
<image src="/assets/img/code.png" />

```
root> pnpm publish -F=@better-vant/better-vant-ui
```

更多实用技巧可参考[@more-pnpm](https://zhuanlan.zhihu.com/p/422740629)
