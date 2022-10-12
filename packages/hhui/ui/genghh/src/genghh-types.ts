import type { PropType, ExtractPropTypes } from 'vue'

export const genghhProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
} as const

export type GenghhProps = ExtractPropTypes<typeof genghhProps>
