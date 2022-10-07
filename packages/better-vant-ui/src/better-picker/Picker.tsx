import {
	ref,
	watch,
	computed,
	defineComponent,
	type PropType,
	type ExtractPropTypes,
} from 'vue';

// Utils
import {
	pick,
	extend,
	unitToPx,
	truthProp,
	isSameValue,
	makeArrayProp,
	preventDefault,
	makeStringProp,
	makeNumericProp,
	BORDER_UNSET_TOP_BOTTOM,
	type Numeric,
} from './utils';
import {
	bem,
	name,
	isOptionExist,
	getColumnsType,
	findOptionByValue,
	assignDefaultFields,
	formatCascadeColumns,
	getFirstEnabledOption,
} from './utils';

// Composables
import { useChildren, useEventListener, useParent } from '@vant/use';
// import { useExpose } from '../composables/use-expose';
import { useExpose } from 'vant/es/composables/use-expose';

// Components
// import { Loading } from '../loading';
import { Loading } from 'vant/es/loading';
import Column, { PICKER_KEY } from './PickerColumn';
import Toolbar, {
	pickerToolbarPropKeys,
	pickerToolbarProps,
	pickerToolbarSlots,
} from './PickerToolbar';

// Types
import type {
	PickerColumn,
	PickerExpose,
	PickerOption,
	PickerFieldNames,
	PickerToolbarPosition,
} from './types';
// import { PICKER_GROUP_KEY } from '../picker-group/PickerGroup';
import { PICKER_GROUP_KEY } from 'vant/es/picker-group/PickerGroup';
import { isNumeric } from 'vant/lib/utils';

export const pickerSharedProps = extend(
	{
		loading: Boolean,
		readonly: Boolean,
		allowHtml: Boolean,
		optionHeight: makeNumericProp(44),
		showToolbar: truthProp,
		swipeDuration: makeNumericProp(1000),
		visibleOptionNum: makeNumericProp(6),
	},
	pickerToolbarProps
);

export const pickerProps = extend({}, pickerSharedProps, {
	columns: makeArrayProp<PickerOption | PickerColumn>(),
	modelValue: makeArrayProp<Numeric>(),
	toolbarPosition: makeStringProp<PickerToolbarPosition>('top'),
	columnsFieldNames: Object as PropType<PickerFieldNames>,
});

export type PickerProps = ExtractPropTypes<typeof pickerProps>;

console.log('%c 🍖 name', 'color:#42b983', name);
export default defineComponent({
	name: 'BetterVantPicker',

	props: pickerProps,

	emits: [
		'confirm',
		'cancel',
		/*'change',*/ 'clickOption',
		'clickIcon',
		'update:modelValue',
	],

	setup(props, { emit, slots }) {
		const columnsRef = ref<HTMLElement>();
		const selectedValues = ref(props.modelValue.slice(0));

		const { parent } = useParent(PICKER_GROUP_KEY);
		const { children, linkChildren } = useChildren(PICKER_KEY);

		linkChildren();

		const fields = computed(() => assignDefaultFields(props.columnsFieldNames));
		const optionHeight = computed(() => unitToPx(props.optionHeight));
		const columnsType = computed(() =>
			getColumnsType(props.columns, fields.value)
		);

		const currentColumns = computed<PickerColumn[]>(() => {
			const { columns } = props;
			switch (columnsType.value) {
				case 'multiple':
					console.log('%c 🍫 columns', 'color:#42b983', columns);
					return columns as PickerColumn[];
				case 'cascade':
					return formatCascadeColumns(columns, fields.value, selectedValues);
				default:
					return [columns];
			}
		});

		const hasOptions = computed(() =>
			currentColumns.value.some((options) => options.length)
		);

		const selectedOptions = computed(() =>
			currentColumns.value.map((options, index) =>
				findOptionByValue(options, selectedValues.value[index], fields.value)
			)
		);

		// 更新选中的值
		const setValue = (index: number, value: Numeric) => {
			// if (selectedValues.value[index] !== value) {
			// 	const newValues = selectedValues.value.slice(0);
			// 	newValues[index] = value;
			// 	selectedValues.value = newValues;
			// }

			if (selectedValues.value.includes(value)) {
				// 此前本选项已被选中，现在撤销选中
				const oldIndex = selectedValues.value.findIndex((v) => v === value);
				if (oldIndex >= 0) {
					const newValues = selectedValues.value.slice(0);
					selectedValues.value = newValues.filter((x) => x !== value);
				}
			} else {
				// 选中本选项
				const newValues = selectedValues.value.slice(0);
				newValues.push(value);
				selectedValues.value = newValues;
			}
		};

		const getEventParams = () => ({
			selectedValues: selectedValues.value.slice(0),
			selectedOptions: selectedOptions.value,
		});

		// const onChange = (value: Numeric, columnIndex: number) => {
		// 	setValue(columnIndex, value);

		// 	if (columnsType.value === 'cascade') {
		// 		// reset values after cascading
		// 		selectedValues.value.forEach((value, index) => {
		// 			const options = currentColumns.value[index];
		// 			if (!isOptionExist(options, value, fields.value)) {
		// 				setValue(
		// 					index,
		// 					options.length ? options[0][fields.value.value] : undefined
		// 				);
		// 			}
		// 		});
		// 	}

		// 	emit('change', extend({ columnIndex }, getEventParams()));
		// };

		const onClickOption = (currentOption: PickerOption, columnIndex: number) =>
			emit(
				'clickOption',
				extend({ columnIndex, currentOption }, getEventParams())
			);
		// 点击图标事件
		const onClickIcon = (
			value: Numeric,
			currentOption: PickerOption,
			columnIndex: number
		) => {
			console.log('%c 🍏 value', 'color:#42b983', value);
			console.log('%c 🌮 currentOption', 'color:#465975', currentOption);
			console.log(
				'%c 🥕 extend({ columnIndex, currentOption }, getEventParams())',
				'color:#b03734',
				extend({ columnIndex, currentOption }, getEventParams())
			);
			setValue(columnIndex, value);
			emit(
				'clickIcon',
				extend({ columnIndex, currentOption }, getEventParams())
			);
		};

		const confirm = () => {
			children.forEach((child) => child.stopMomentum());
			const params = getEventParams();
			emit('confirm', params);
			return params;
		};

		const cancel = () => emit('cancel', getEventParams());
		// 渲染选项列
		const renderColumnItems = () =>
			currentColumns.value.map((options, columnIndex) => (
				<Column
					v-slots={{ option: slots.option }}
					// value={selectedValues.value[columnIndex]}
					value={selectedValues.value}
					fields={fields.value}
					options={options}
					readonly={props.readonly}
					allowHtml={props.allowHtml}
					optionHeight={optionHeight.value}
					swipeDuration={props.swipeDuration}
					visibleOptionNum={props.visibleOptionNum}
					// onChange={(value: Numeric) => onChange(value, columnIndex)}
					onClickOption={(option: PickerOption) =>
						onClickOption(option, columnIndex)
					}
					onClickIcon={(value: Numeric, option: PickerOption) =>
						onClickIcon(value, option, columnIndex)
					}
				/>
			));

		const renderMask = (wrapHeight: number) => {
			if (hasOptions.value) {
				const frameStyle = { height: `${optionHeight.value}px` };
				const maskStyle = {
					backgroundSize: `100% ${(wrapHeight - optionHeight.value) / 2}px`,
				};
				return [
					<div class={bem('mask')} style={maskStyle} />,
					<div
						class={[BORDER_UNSET_TOP_BOTTOM, bem('frame')]}
						style={frameStyle}
					/>,
				];
			}
		};

		const renderColumns = () => {
			const wrapHeight = optionHeight.value * +props.visibleOptionNum;
			const columnsStyle = { height: `${wrapHeight}px` };
			return (
				<div ref={columnsRef} class={bem('columns')} style={columnsStyle}>
					{renderColumnItems()}
					{renderMask(wrapHeight)}
				</div>
			);
		};

		const renderToolbar = () => {
			if (props.showToolbar && !parent) {
				return (
					<Toolbar
						v-slots={pick(slots, pickerToolbarSlots)}
						{...pick(props, pickerToolbarPropKeys)}
						onConfirm={confirm}
						onCancel={cancel}
					/>
				);
			}
		};

		watch(
			currentColumns,
			(columns) => {
				columns.forEach((options, index) => {
					if (
						options.length &&
						!isOptionExist(options, selectedValues.value[index], fields.value)
					) {
						setValue(
							index,
							getFirstEnabledOption(options)![fields.value.value]
						);
					}
				});
			},
			{ immediate: true }
		);

		// preserve last emitted model value
		// when props.modelValue is updated by parent component,
		// the new value should be compared with the last emitted value
		let lastEmittedModelValue: Numeric[];
		watch(
			() => props.modelValue,
			(newValues) => {
				if (
					!isSameValue(newValues, selectedValues.value) &&
					!isSameValue(newValues, lastEmittedModelValue)
				) {
					selectedValues.value = newValues.slice(0);
				}
			},
			{ deep: true }
		);
		watch(
			selectedValues,
			(newValues) => {
				if (!isSameValue(newValues, props.modelValue)) {
					lastEmittedModelValue = newValues.slice(0);
					emit('update:modelValue', lastEmittedModelValue);
				}
			},
			{ immediate: true }
		);

		// useEventListener will set passive to `false` to eliminate the warning of Chrome
		useEventListener('touchmove', preventDefault, {
			target: columnsRef,
		});

		const getSelectedOptions = () => selectedOptions.value;

		useExpose<PickerExpose>({ confirm, getSelectedOptions });

		return () => (
			<div class={bem()}>
				{props.toolbarPosition === 'top' ? renderToolbar() : null}
				{props.loading ? <Loading class={bem('loading')} /> : null}
				{slots['columns-top']?.()}
				{renderColumns()}
				{slots['columns-bottom']?.()}
				{props.toolbarPosition === 'bottom' ? renderToolbar() : null}
			</div>
		);
	},
});
