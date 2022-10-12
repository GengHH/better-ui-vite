/*
 * @Author: GengHH
 * @Date: 2022-10-12 15:07:35
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-12 15:13:41
 * @Description: file content
 * @FilePath: \better-ui-vite\packages\hhui\ui\tag\src\tag-types.ts
 */
import type { PropType, ExtractPropTypes } from 'vue';

export const tagProps = {
	text: {
		type: String,
		default: 'hhui tag',
	},
	test: {
		type: Object as PropType<String>,
	},
} as const;

export type TagProps = ExtractPropTypes<typeof tagProps>;
