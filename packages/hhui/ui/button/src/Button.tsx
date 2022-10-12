/*
 * @Author: GengHH
 * @Date: 2022-10-11 19:37:35
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-12 17:33:10
 * @Description: file content
 * @FilePath: \better-ui-vite\packages\hhui\ui\button\src\button.tsx
 */
import { defineComponent, ExtractPropTypes } from 'vue';
import { btnProps, BtnProps } from './button-types';
import './button.scss';

export default defineComponent({
	name: 'Button',
	props: btnProps,
	setup(props: BtnProps) {
		return () => {
			return <button class="hh-btn">{props.text}</button>;
		};
	},
});
