/*
 * @Author: GengHH
 * @Date: 2022-09-05 10:54:35
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-18 17:21:20
 * @Description: file content
 * @FilePath: \better-ui-vite\src\main.ts
 */
import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
// import { Lazyload, Dialog, Empty } from 'vant';
import { Button, Picker, Popup, Field } from 'vant';
import BetterPicker from '../packages/better-vant-ui/dist/better-vant-ui.mjs';
import 'vant/lib/index.css';
import '../packages/better-vant-ui/dist/style/index.css';
import '@/styles/index.less';

const app = createApp(App);
// app.use(vant);
app.use(Button);
app.use(Picker);
app.use(Popup);
app.use(Field);
app.use(BetterPicker);
// app.use(Dialog);
// app.use(Empty);
// 配置可使用懒加载

app.mount('#app');
