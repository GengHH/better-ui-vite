/*
 * @Author: GengHH
 * @Date: 2022-10-11 16:45:45
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-11 17:21:41
 * @Description: file content
 * @FilePath: \better-ui-vite\packages\hhui\cli\commands\generate-dts.js
 */
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const logger = require('../shared/logger');

const entryDir = path.resolve(__dirname, '../../hhui');
const outputDir = path.resolve(__dirname, '../../hhui/build');

function generateIndexDts(buildDir) {
	const fileStr = `import { App } from 'vue';
  declare function install(app: App): void
  declare const _default: {
      install: typeof install;
      version: string;
  };
  export default _default;`;
	fse.outputFileSync(path.resolve(buildDir, 'index.d.ts'), fileStr, 'utf8');
}

exports.generateDts = () => {
	generateIndexDts(outputDir);

	const components = fs.readdirSync(entryDir).filter((name) => {
		const componentDir = path.resolve(entryDir, name);
		const isDir = fs.lstatSync(componentDir).isDirectory();
		return isDir && fs.readdirSync(componentDir).includes('index.ts');
	});
	const srcDts = path.resolve(outputDir, 'index.d.ts');

	for (const name of components) {
		const destDts = path.resolve(outputDir, `${name}/index.d.ts`);
		fs.copyFile(srcDts, destDts, (err) => {
			if (err) {
				logger.error(`拷贝组件${name}的ts类型文件失败！`);
			}
		});
	}
};
