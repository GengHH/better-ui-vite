/*
 * @Author: GengHH
 * @Date: 2022-10-12 14:01:07
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-12 18:54:40
 * @Description: file content
 * @FilePath: \better-ui-vite\packages\hhui\ui\picker\index.ts
 */
import type { App } from 'vue';
import Picker from './src/Picker';

Picker.install = function (app: App): void {
	app.component(Picker.name, Picker);
};

export { Picker };

export default {
	title: 'Picker 选择器',
	category: '数据展示',
	status: '100%',
	install(app: App): void {
		app.component(Picker.name, Picker);
	},
};
