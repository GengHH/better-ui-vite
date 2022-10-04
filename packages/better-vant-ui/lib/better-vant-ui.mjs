import { defineComponent, createVNode, createTextVNode, openBlock, createElementBlock, resolveComponent, createBlock, withCtx } from "vue";
import { Button } from "vant";
const __uno = "";
const MyButton = defineComponent({
  name: "MyButton",
  setup(props, {
    slots
  }) {
    return () => createVNode("button", {
      "type": "button",
      "class": `
          py-2
          px-4
          font-semibold
          rounded-lg
          shadow-md
          text-white
          bg-green-500
          hover:bg-green-700
          border-none
          cursor-pointer
        `
    }, [slots.default ? slots.default() : ""]);
  }
});
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const _sfc_main$1 = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1, " new SFC Button ");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const base = "";
const index$3 = "";
const index$2 = "";
const index$1 = "";
const index = "";
const _sfc_main = {
  name: "BetterPicker",
  components: {
    [Button.name]: Button
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_button = resolveComponent("van-button");
  return openBlock(), createBlock(_component_van_button, { type: "primary" }, {
    default: withCtx(() => [
      createTextVNode("vant\u6309\u94AE")
    ]),
    _: 1
  });
}
const BetterPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
    app.component(BetterPicker.name, BetterPicker);
  }
};
export {
  BetterPicker,
  JSXButton,
  MyButton,
  SFCButton,
  entry as default
};
