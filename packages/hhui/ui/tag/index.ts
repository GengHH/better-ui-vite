/*
 * @Author: GengHH
 * @Date: 2022-10-12 15:07:35
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-12 19:10:10
 * @Description: file content
 * @FilePath: \better-ui-vite\packages\hhui\ui\tag\index.ts
 */
import type { App } from 'vue';
import Tag from './src/tag';

Tag.install = function (app: App): void {
	app.component(Tag.name, Tag);
};

export { Tag };

export default {
	title: 'Tag 标签',
	category: '通用',
	status: '90%',
	install(app: App): void {
		app.component(Tag.name, Tag);
	},
};
