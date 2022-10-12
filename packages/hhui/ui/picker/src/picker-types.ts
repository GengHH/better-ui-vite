/*
 * @Author: GengHH
 * @Date: 2022-10-12 14:01:07
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-12 14:42:26
 * @Description: file content
 * @FilePath: \better-ui-vite\packages\hhui\ui\picker\src\picker-types.ts
 */
export * from 'vant/es/picker/types';

import type { PropType, ExtractPropTypes } from 'vue';

export const pickerProps = {
	/* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
} as const;

export type PickerProps = ExtractPropTypes<typeof pickerProps>;
