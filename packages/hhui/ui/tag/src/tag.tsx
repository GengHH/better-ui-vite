/*
 * @Author: GengHH
 * @Date: 2022-10-12 15:07:35
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-12 17:32:58
 * @Description: file content
 * @FilePath: \better-ui-vite\packages\hhui\ui\tag\src\tag.tsx
 */
import { defineComponent } from 'vue';
import { tagProps, TagProps } from './tag-types';
import './tag.scss';

export default defineComponent({
	name: 'Tag',
	props: tagProps,
	emits: [],
	setup(props: TagProps, ctx) {
		return () => {
			return <div class="hhui-tag">{props.text}</div>;
		};
	},
});
