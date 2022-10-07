<!--
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-03 23:05:44
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-07 05:08:54
 * @FilePath: \better-vant-ui\src\better-picker\CheckboxPicker.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<!-- <van-button type="primary">vant按钮</van-button> -->
	<!-- <van-picker
		title="标题"
		:columns="columns"
		@confirm="onConfirm"
		@cancel="onCancel"
		@change="onChange"
	/> -->
	<BetterVantPicker
		title="标3题"
		:columns="columns"
		@confirm="onConfirm"
		@cancel="onCancel"
		@change="onChange"
	/>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Picker, showToast } from 'vant';
import 'vant/es/picker/index.css';
import 'vant/es/toast/index.css';
import 'vant/lib/index.css';

import BetterVantPicker from './index';

export interface colObject {}
export default defineComponent({
	name: 'MyBetterPicker',
	components: {
		[Picker.name]: Picker,
		[BetterVantPicker.name]: BetterVantPicker,
	},
	props: {
		columns: { type: Object, require: true },
		modelValue: {
			type: String,
			require: true,
		},
	},
	setup(props, ctx) {
		// const columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华'];
		const columns = [
			{
				text: '杭州',
				value: '1',
			},
			{
				text: '宁波',
				value: '2',
			},
			{
				text: '温州',
				value: '3',
			},
			{
				text: '绍兴',
				value: '4',
			},
			{
				text: '湖州',
				value: '5',
			},
			{
				text: '嘉兴',
				value: '6',
			},
		];

		const onConfirm = (value, index) => {
			showToast(`当前值: ${value}, 当前索引: ${index}`);
		};
		const onChange = (value, index) => {
			showToast(`当前值: ${value}, 当前索引: ${index}`);
		};
		const onCancel = () => showToast('取消');

		return {
			columns,
			onChange,
			onCancel,
			onConfirm,
		};
	},
});
</script>
<script scoped></script>
