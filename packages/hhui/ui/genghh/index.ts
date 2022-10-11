import type { App } from 'vue'
import Genghh from './src/genghh'

Genghh.install = function(app: App): void {
  app.component(Genghh.name, Genghh)
}

export { Genghh }

export default {
  title: 'Genghh 测试组件',
  category: '通用',
  status: undefined, // TODO: 组件若开发完成则填入"100%"，并删除该注释
  install(app: App): void {
    app.component(Genghh.name, Genghh);
  }
}
