import { defineComponent as n, createVNode as a } from "vue";
const o = {
  text: {
    type: String,
    default: "hhui tag"
  },
  test: {
    type: Object
  }
};
const e = n({
  name: "Tag",
  props: o,
  emits: [],
  setup(t, s) {
    return () => a("div", {
      class: "hhui-tag"
    }, [t.text]);
  }
});
e.install = function(t) {
  t.component(e.name, e);
};
const c = {
  title: "Tag \u6807\u7B7E",
  category: "\u901A\u7528",
  status: "100%",
  install(t) {
    t.component(e.name, e);
  }
};
export {
  e as Tag,
  c as default
};
