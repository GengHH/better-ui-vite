/* eslint-disable @typescript-eslint/ban-types */
/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-03 21:36:50
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-18 11:22:16
 * @FilePath: \better-ui-vite\packages\better-vant-ui\src\global-vue.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  export default component;
}
