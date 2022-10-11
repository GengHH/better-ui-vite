import type { App } from 'vue'
import Tag from './src/tag'

Tag.install = function(app: App): void {
  app.component(Tag.name, Tag)
}

export { Tag }

export default {
  title: 'Tag 标签',
  category: '通用',
  status: undefined, // TODO: 组件若开发完成则填入"100%"，并删除该注释
  install(app: App): void {
    app.component(Tag.name, Tag);
  }
}
