import { defineComponent } from 'vue'
import { genghhProps, GenghhProps } from './genghh-types'
import './genghh.scss'

export default defineComponent({
  name: 'CGenghh',
  props: genghhProps,
  emits: [],
  setup(props: GenghhProps, ctx) {
    return () => {
      return (<div class="hhui-genghh"></div>)
    }
  }
})
