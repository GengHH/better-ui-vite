/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-03 21:45:27
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-19 14:36:49
 * @FilePath: \better-ui-vite\packages\better-vant-ui\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
import removeConsole from 'vite-plugin-remove-console';
// import { presetUno, presetAttributify, presetIcons } from 'unocss';
// const rollupOptions = {
// 	external: ['vue', 'vue-router'],
// 	output: {
// 		exports: 'named',
// 		globals: {
// 			vue: 'Vue',
// 		},
// 	},
// };

// https://vitejs.dev/config/
export default ({ command }) =>
  defineConfig({
    plugins: [
      vue({
        customElement: ['BetterPicker', 'BetterVantPicker'],
      }),
      vueJsx(),
      dts({ include: ['./src/better-picker/*.*'], copyDtsFiles: true }),
      removeConsole(),
    ],
    build: {
      outDir: 'dist',
      cssCodeSplit: true,
      rollupOptions: {
        external: ['vue', 'vue-router', 'vant'],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue',
            vant: 'vant',
          },
          assetFileNames: 'style/index.[ext]',
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 打包生产环境去除 console
          drop_debugger: true, // 去除 debugger
        },
      },
      lib: {
        entry: './src/entry.ts',
        name: 'BetterVantUI',
        fileName: 'better-vant-ui',
        // 导出模块格式
        formats: ['es', 'cjs', 'umd', 'iife'],
      },
    },
  });
