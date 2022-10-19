/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-03 21:45:27
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-18 15:10:15
 * @FilePath: \better-ui-vite\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
// import { presetUno, presetAttributify, presetIcons } from 'unocss';
// const rollupOptions = {
// 	external: ['vue', 'vue-router'],
// 	output: {
// 		exports: 'named',
// 		globals: {
// 			vue: 'Vue',
// 		},
// 	},
// };

const pathResolve = (dir: string) => resolve(__dirname, dir);
// https://vitejs.dev/config/
export default ({ command }) =>
	defineConfig({
		plugins: [
			vue({
				customElement: ['BetterPicker', 'BetterVantPicker'],
			}),
			// dts({ include: './better-vant-ui/src/**/*.*' }),
			dts({ copyDtsFiles: true }),
		],
		resolve: {
			// 这里的alias是路径别名，是运行阶段的替换路径，而tsconfig.json中的paths是编码阶段的提示，
			alias: {
				'@': pathResolve('src'), // path.resolve中，'./src' 等于 'src'
			},
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
					additionalData: `@import "${resolve(
						__dirname,
						'src/styles/index.less'
					)}";`,
				},
			},
		},
	});
