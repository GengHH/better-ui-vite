/*
 * @Author: GengHH
 * @Date: 2022-10-18 13:37:55
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-18 13:45:40
 * @Description: file content
 * @FilePath: \better-ui-vite\src\vue.d.ts
 */
declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
