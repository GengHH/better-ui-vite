/*
 * @Author: GengHH
 * @Date: 2022-10-11 15:34:59
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-11 19:08:58
 * @Description: file content
 * @FilePath: \better-ui-vite\packages\hhui\ui\buttton\src\button-type.ts
 */
import { ExtractPropTypes } from 'vue';
export const btnProps = {
	text: {
		type: String,
		default: 'hhui按钮',
	},
	style: {
		type: Object,
		default: () => {
			return {
				color: 'red',
			};
		},
	},
} as const;

export type BtnProps = ExtractPropTypes<typeof btnProps>;
