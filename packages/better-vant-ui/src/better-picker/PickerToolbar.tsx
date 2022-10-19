/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-10-07 02:10:52
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-19 15:25:21
 * @FilePath: \better-ui-vite\packages\better-vant-ui\src\better-picker\PickerToolbar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from 'vue';
import { bem, t, createNamespace, HAPTICS_FEEDBACK } from './utils';

const [name] = createNamespace('picker-toolbar');

export const pickerToolbarProps = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String,
};

export const pickerToolbarSlots = ['cancel', 'confirm', 'title', 'toolbar'];

export type PickerToolbarPropKeys = Array<keyof typeof pickerToolbarProps>;

export const pickerToolbarPropKeys = Object.keys(
  pickerToolbarProps
) as PickerToolbarPropKeys;

export default defineComponent({
  name,

  props: pickerToolbarProps,

  emits: ['confirm', 'cancel'],

  setup(props, { emit, slots }) {
    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }
      if (props.title) {
        return <div class={[bem('title'), 'van-ellipsis']}>{props.title}</div>;
      }
    };

    const onCancel = () => emit('cancel');
    const onConfirm = () => emit('confirm');

    const renderCancel = () => {
      const text = props.cancelButtonText || t('cancel');
      return (
        <button
          type="button"
          class={[bem('cancel'), HAPTICS_FEEDBACK]}
          onClick={onCancel}
        >
          {slots.cancel ? slots.cancel() : text}
        </button>
      );
    };

    const renderConfirm = () => {
      const text = props.confirmButtonText || t('confirm');
      return (
        <button
          type="button"
          class={[bem('confirm'), HAPTICS_FEEDBACK]}
          onClick={onConfirm}
        >
          {slots.confirm ? slots.confirm() : text}
        </button>
      );
    };

    return () => (
      <div class={bem('toolbar')}>
        {slots.toolbar
          ? slots.toolbar()
          : [renderCancel(), renderTitle(), renderConfirm()]}
      </div>
    );
  },
});
