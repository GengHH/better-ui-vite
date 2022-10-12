import { defineComponent, createVNode } from "vue";
const btnProps = {
  text: {
    type: String,
    default: "hhui\u6309\u94AE"
  },
  style: {
    type: Object,
    default: () => {
      return {
        color: "red"
      };
    }
  }
};
var button = "";
var Button = defineComponent({
  name: "Button",
  props: btnProps,
  setup(props) {
    return () => {
      return createVNode("button", {
        "class": "hh-btn"
      }, [props.text]);
    };
  }
});
Button.install = function(app) {
  app.component(Button.name, Button);
};
var index = {
  title: "Button \u6D4B\u8BD5\u7EC4\u4EF6",
  category: "\u901A\u7528",
  status: "100%",
  install(app) {
    app.component(Button.name, Button);
  }
};
export { Button, index as default };
