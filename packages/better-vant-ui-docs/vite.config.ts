/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-04 18:52:26
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-05 04:55:54
 * @FilePath: \better-ui-vite\packages\better-vant-ui-docs\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import Unocss from '../config/unocss';
import Unocss from 'unocss/vite';
// https://vitejs.dev/config/

export default defineConfig({
	plugins: [
		// 添加JSX插件
		// vueJsx(),
		// Unocss(),
	],
	server: {
		fs: {
			strict: false,
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
	},
});
