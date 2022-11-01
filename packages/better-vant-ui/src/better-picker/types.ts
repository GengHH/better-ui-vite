/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-06 21:17:10
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-31 18:46:51
 * @FilePath: \better-ui-vite\packages\better-vant-ui\src\better-picker\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable no-use-before-define */
import type { ComponentPublicInstance } from 'vue';
import type { Numeric } from './utils';
import { PickerExpose } from 'vant/es/picker/types';
// 导入原本的vant picker涉及的类型
export * from 'vant/es/picker/types';
// import type { PickerProps } from './Picker';

export type OtherExpose = {
  getSelectedOptionsText: () => string;
};

export type NewPickerExpose = PickerExpose & OtherExpose;
