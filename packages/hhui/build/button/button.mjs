import { defineComponent as e, createVNode as o } from "vue";
const u = {
  text: {
    type: String,
    default: "hhui\u6309\u94AE"
  },
  style: {
    type: Object,
    default: () => ({
      color: "red"
    })
  }
};
const n = e({
  name: "Button",
  props: u,
  setup(t) {
    return () => o("button", {
      class: "hh-btn"
    }, [t.text]);
  }
});
n.install = function(t) {
  t.component(n.name, n);
};
const s = {
  title: "Button \u6D4B\u8BD5\u7EC4\u4EF6",
  category: "\u901A\u7528",
  status: "100%",
  install(t) {
    t.component(n.name, n);
  }
};
export {
  n as Button,
  s as default
};
