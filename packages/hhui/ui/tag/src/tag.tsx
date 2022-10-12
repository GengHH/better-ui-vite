import { defineComponent } from 'vue'
import { tagProps, TagProps } from './tag-types'
import './tag.scss'

export default defineComponent({
  name: 'CTag',
  props: tagProps,
  emits: [],
  setup(props: TagProps, ctx) {
    return () => {
      return (<div class="hhui-tag"></div>)
    }
  }
})
