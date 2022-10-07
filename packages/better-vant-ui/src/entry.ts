/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-03 22:03:55
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-07 19:14:35
 * @FilePath: \better-vant-ui\src\entry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue';
// import MyButton from './render/Button';
// import JSXButton from './jsx/JSXButton';
// import SFCButton from './vue/SFCButton.vue';
// import BetterPicker from './better-picker/BetterPicker.vue';
import BetterPicker from './better-picker';
import './better-picker/index.css';

// 导出单个组件--方便用于按需加载
// export { MyButton, JSXButton, SFCButton, BetterPicker };
export { BetterPicker };

export default {
	install(app: App): void {
		// app.component(MyButton.name, MyButton);
		// app.component(JSXButton.name, JSXButton);
		// app.component(SFCButton.name, SFCButton);
		app.component(BetterPicker.name, BetterPicker);
	},
};
