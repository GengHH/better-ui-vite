/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-04 12:26:09
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-04 12:29:07
 * @FilePath: \better-ui-vite\packages\utils\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from 'dayjs';
export function format(time, f = 'YYYY-MM-DD') {
	return dayjs(time).format(f);
}
