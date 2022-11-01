<!--
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-03 23:05:44
 * @LastEditors: GengHH
 * @LastEditTime: 2022-11-01 15:33:22
 * @FilePath: \better-ui-vite\packages\better-vant-ui\src\better-picker\BetterPicker.vue
 * @Description: demo vue
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
    title="单列"
    v-model="value1"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    :loading="loading"
  />
  <BetterVantPicker
    title="多列"
    :columns="columns2"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
  <BetterVantPicker
    title="级联"
    :columns="columns3"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { Picker, showToast } from 'vant';
import 'vant/es/picker/index.css';
import 'vant/es/toast/index.css';
import 'vant/lib/index.css';

import BetterVantPicker from './index';

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
    const loading = ref(false);
    const value1 = ref(['3', '4']);
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
    const columns2 = [
      // 第一列
      [
        { text: '周一', value: 'Monday' },
        { text: '周二', value: 'Tuesday' },
        { text: '周三', value: 'Wednesday' },
        { text: '周四', value: 'Thursday' },
        { text: '周五', value: 'Friday' },
      ],
      // 第二列
      [
        { text: '上午', value: 'Morning' },
        { text: '下午', value: 'Afternoon' },
        { text: '晚上', value: 'Evening' },
      ],
    ];
    const columns3 = [
      {
        text: '浙江',
        value: 'Zhejiang',
        children: [
          {
            text: '杭州',
            value: 'Hangzhou',
            children: [
              { text: '西湖区', value: 'Xihu' },
              { text: '余杭区', value: 'Yuhang' },
            ],
          },
          {
            text: '温州',
            value: 'Wenzhou',
            children: [
              { text: '鹿城区', value: 'Lucheng' },
              { text: '瓯海区', value: 'Ouhai' },
            ],
          },
        ],
      },
      {
        text: '福建',
        value: 'Fujian',
        children: [
          {
            text: '福州',
            value: 'Fuzhou',
            children: [
              { text: '鼓楼区', value: 'Gulou' },
              { text: '台江区', value: 'Taijiang' },
            ],
          },
          {
            text: '厦门',
            value: 'Xiamen',
            children: [
              { text: '思明区', value: 'Siming' },
              { text: '海沧区', value: 'Haicang' },
            ],
          },
        ],
      },
    ];
    const onConfirm = (value, index) => {
      showToast(`当前值: ${value}, 当前索引: ${index}`);
    };
    const onChange = (value, index) => {
      console.log('%c 🍧 value', 'color:#b03734', value);
      showToast(`当前值: ${value}, 当前索引: ${index}`);
    };
    const onCancel = () => showToast('取消');

    return {
      loading,
      columns,
      columns2,
      columns3,
      onChange,
      onCancel,
      onConfirm,
      value1,
    };
  },
});
</script>
<script scoped></script>
