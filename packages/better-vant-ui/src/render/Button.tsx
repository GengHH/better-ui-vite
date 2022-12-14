/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-03 21:26:55
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-04 10:24:43
 * @FilePath: \better-vant-ui\src\button\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, PropType, toRefs } from 'vue';
import 'uno.css';
export default defineComponent({
	name: 'MyButton',
	setup(props, { slots }) {
		return () => (
			<button
				type="button"
				class={`
          py-2
          px-4
          font-semibold
          rounded-lg
          shadow-md
          text-white
          bg-green-500
          hover:bg-green-700
          border-none
          cursor-pointer
        `}
			>
				{slots.default ? slots.default() : ''}
			</button>
		);
	},
});
