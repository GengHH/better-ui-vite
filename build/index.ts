import { build } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import glob from 'fast-glob';
import path from 'path';
const vcElementPlusComponentsRoot =
	'packages/better-element-plus-ui/components';
const vcElementPlusRoot = 'packages/better-element-plus-ui';
const files = await glob('**/*.{js,ts,vue}', {
	cwd: vcElementPlusComponentsRoot,
	absolute: true,
	onlyFiles: true,
});

function buildScript() {
	build({
		resolve: {
			// alias: VcElementAlias(),
		},
		plugins: [vue(), vueJsx()],
		build: {
			outDir: path.join(vcElementPlusRoot, 'dist', 'es'),
			lib: {
				entry: files,
				formats: ['es'],
			},
			rollupOptions: {
				external: [
					'element-plus',
					'vue',
					'vue-router',
					'@element-plus/icons-vue',
				],
				output: {
					preserveModules: true,
					preserveModulesRoot: vcElementPlusComponentsRoot,
					exports: 'named',
				},
			},
		},
	});
}
