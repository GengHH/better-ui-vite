<!--
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-03 23:05:44
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-04 11:48:58
 * @FilePath: \better-vant-ui\src\better-picker\CheckboxPicker.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<van-button type="primary">vant按钮</van-button>
</template>
<script lang="ts">
import { Button } from 'vant';
import 'vant/es/button/style/index';
// import 'vant/lib/index.css';
export default {
	name: 'BetterPicker',
	components: {
		[Button.name]: Button,
	},
};
</script>
<script scoped></script>
