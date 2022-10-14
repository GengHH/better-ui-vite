/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-03 21:23:38
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-07 19:16:52
 * @FilePath: \better-vant-ui\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue/dist/vue.esm-bundler.js';

// import App from './test/index.vue';
// import App2 from './SFCButton.vue';
// 没数据
import BetterVantPicker from './better-picker';
// 有数据
import MyBetterPicker from './better-picker/betterPicker.vue';
import MyButton from './render/Button';
import './better-picker/index.css';
// import 'uno.css';
createApp({
	template: `
  <MyButton>
    普通按钮123
  </MyButton>
  <BetterVantPicker/>
  <MyBetterPicker/>
  `,
})
	.component(MyButton.name, MyButton)
	.component(BetterVantPicker.name, BetterVantPicker)
	.component(MyBetterPicker.name, MyBetterPicker)
	.mount('#app');
