import type { App } from 'vue';

import ButtonInstall, { Button } from './button';
import PickerInstall, { Picker } from './picker';
import TagInstall, { Tag } from './tag';

const installs = [
  ButtonInstall,
	PickerInstall,
	TagInstall
];

export {
  Button,
	Picker,
	Tag
};

export default {
  version: '1.0.8',
  install(app: App): void {
    installs.forEach((p) => app.use(p));
  }
};
