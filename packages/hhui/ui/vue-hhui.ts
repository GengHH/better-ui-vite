import type { App } from 'vue';

import GenghhInstall, { Genghh } from './genghh';
import TagInstall, { Tag } from './tag';

const installs = [
  GenghhInstall,
	TagInstall
];

export {
  Genghh,
	Tag
};

export default {
  version: '1.0.8',
  install(app: App): void {
    installs.forEach((p) => app.use(p));
  }
};
