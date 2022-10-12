/*
 * @Author: GengHH
 * @Date: 2022-10-12 13:36:25
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-12 17:12:54
 * @Description: file content
 * @FilePath: \better-ui-vite\packages\hhui\ui\buttton\index.ts
 */
import type { App } from 'vue';
import Button from './src/Button';

Button.install = function (app: App): void {
	app.component(Button.name, Button);
};

export { Button };

export default {
	title: 'Button 测试组件',
	category: '通用',
	status: '100%',
	install(app: App): void {
		app.component(Button.name, Button);
	},
};
