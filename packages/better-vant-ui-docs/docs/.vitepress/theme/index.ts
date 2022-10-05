/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-05 03:50:28
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-06 02:42:21
 * @FilePath: \better-ui-vite\packages\better-vant-ui-docs\docs\.vitepress\theme\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import DefaultTheme from 'vitepress/theme';

import { BetterPicker } from '@better-vant/better-vant-ui/lib/better-vant-ui.mjs';

import '@better-vant/better-vant-ui/lib/style/entry.css';

// 全局注入组件和样式，可在任意md文件中直接使用
export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component(BetterPicker.name, BetterPicker);
	},
};
