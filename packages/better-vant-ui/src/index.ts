/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-03 21:23:38
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-04 11:42:48
 * @FilePath: \better-vant-ui\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue/dist/vue.esm-bundler.js';

import App from './test/index.vue';
import App2 from './SFCButton.vue';
import BetterPicker from './better-picker/BetterPicker.vue';
import MyButton from './render/Button';
// import 'uno.css';
createApp({
	template: `
  <MyButton>
    普通按钮
  </MyButton>
  <BetterPicker/>
  `,
})
	.component(MyButton.name, MyButton)
	.component(BetterPicker.name, BetterPicker)
	.mount('#app');
