<!--
 * @Author: GengHH
 * @Date: 2022-10-18 13:35:31
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-19 15:27:08
 * @Description: file content
 * @FilePath: \better-ui-vite\src\App.vue
-->
<template>
	<h3>Demo</h3>
	<van-button type="primary">主要按钮</van-button>
	<better-vant-picker
		title="my Picker"
		:columns="columns"
		v-model="selectedValues"
		@confirm="onConfirm"
		@cancel="onCancel"
	/>

	<van-field
		v-model="result"
		is-link
		readonly
		name="picker"
		label="选择器"
		placeholder="点击选择城市"
		@click="showPicker = true"
	/>
	<van-popup v-model:show="showPicker" position="bottom">
		<!-- <van-picker
			:columns="columns"
			@confirm="onConfirm"
			@cancel="showPicker = false"
		/> -->
		<better-vant-picker
			title="my Picker"
			:columns="columns"
			v-model="selectedValues"
			@confirm="onConfirm"
			@cancel="showPicker = false"
			@clickIcon="clickIcon"
		/>
	</van-popup>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { PickerOption } from 'packages/better-vant-ui/dist/better-picker/index';
// console.log('%c Line:41 🍐 PickerOption', 'color:#ed9ec7', PickerOption);
const selectedValues = ref([]);
const showPicker = ref(false);
const result = ref('');
const columns = [
	{ text: '杭州', value: 'Hangzhou' },
	{ text: '宁波', value: 'Ningbo' },
	{ text: '温州', value: 'Wenzhou' },
	{ text: '绍兴', value: 'Shaoxing' },
	{ text: '湖州', value: 'Huzhou' },
];
type C = { selectedValues: string[]; selectedOptions: any };
const onConfirm = ({ selectedValues, selectedOptions }: C) => {
	// console.log('%c Line:64 🍩 selectedValues', 'color:#3f7cff', selectedValues);
	// console.log(
	// 	'%c Line:64 🍔 selectedOptions',
	// 	'color:#f5ce50',
	// 	selectedOptions
	// );
	// console.log('%c 🍷 value', 'color:#fca650', value);
	// result.value = selectedOptions[0]?.text;
	result.value = selectedOptions
		.map((x) => {
			return x.text;
		})
		.join('-');
	showPicker.value = false;
};
/**
 * 取消选择
 */
const onCancel = () => console.log('取消1');
/**
 * 点击图标
 */
const clickIcon = ({
	columnIndex,
	currentOption,
	selectedOptions,
	selectedValues,
}: any) => {
	console.log('%c columnIndex', 'color:#33a5ff', columnIndex);
	console.log('%c currentOption', 'color:#33a5ff', currentOption);
	console.log('%c selectedOptions', 'color:#33a5ff', selectedOptions);
	console.log('%c selectedValues', 'color:#33a5ff', selectedValues);
};
</script>
