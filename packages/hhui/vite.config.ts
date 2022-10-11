/*
 * @Author: GengHH
 * @Date: 2022-10-11 15:21:18
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-11 19:01:06
 * @Description: file content
 * @FilePath: \better-ui-vite\packages\hhui\vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// jsx 依赖
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
	plugins: [vue(), vueJsx()],
	// test: {
	// 	globals: true,
	// 	environment: 'jsdom',
	// 	transformMode: {
	// 		web: [/.[tj]sx$/],
	// 	},
	// },
});
