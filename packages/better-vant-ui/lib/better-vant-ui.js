import { inject, getCurrentInstance, onUnmounted, computed, ref, reactive, onDeactivated, isRef, watch, provide, onMounted, nextTick, onActivated, unref, isVNode, createVNode, defineComponent, watchEffect, resolveComponent, onBeforeUpdate, onBeforeUnmount, mergeProps, withDirectives, vShow } from "vue";
import { Icon } from "vant";
const isDef = (val) => val !== void 0 && val !== null;
const isFunction = (val) => typeof val === "function";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch);
const isNumeric = (val) => typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
const isIOS = () => inBrowser$1 ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
function noop() {
}
const extend = Object.assign;
const inBrowser$1 = typeof window !== "undefined";
function get(object, path) {
  const keys = path.split(".");
  let result = object;
  keys.forEach((key) => {
    var _a;
    result = isObject(result) ? (_a = result[key]) != null ? _a : "" : "";
  });
  return result;
}
function pick(obj, keys, ignoreUndefined) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== void 0) {
      ret[key] = obj[key];
    }
    return ret;
  }, {});
}
const isSameValue = (newValue, oldValue) => JSON.stringify(newValue) === JSON.stringify(oldValue);
const unknownProp = null;
const numericProp = [Number, String];
const truthProp = {
  type: Boolean,
  default: true
};
const makeRequiredProp = (type) => ({
  type,
  required: true
});
const makeArrayProp = () => ({
  type: Array,
  default: () => []
});
const makeNumericProp = (defaultVal) => ({
  type: numericProp,
  default: defaultVal
});
const makeStringProp = (defaultVal) => ({
  type: String,
  default: defaultVal
});
var inBrowser = typeof window !== "undefined";
function raf(fn) {
  return inBrowser ? requestAnimationFrame(fn) : -1;
}
function doubleRaf(fn) {
  raf(() => raf(fn));
}
var isWindow = (val) => val === window;
var makeDOMRect = (width2, height2) => ({
  top: 0,
  left: 0,
  right: width2,
  bottom: height2,
  width: width2,
  height: height2
});
var useRect = (elementOrRef) => {
  const element = unref(elementOrRef);
  if (isWindow(element)) {
    const width2 = element.innerWidth;
    const height2 = element.innerHeight;
    return makeDOMRect(width2, height2);
  }
  if (element == null ? void 0 : element.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }
  return makeDOMRect(0, 0);
};
function useParent(key) {
  const parent = inject(key, null);
  if (parent) {
    const instance = getCurrentInstance();
    const { link, unlink, internalChildren } = parent;
    link(instance);
    onUnmounted(() => unlink(instance));
    const index2 = computed(() => internalChildren.indexOf(instance));
    return {
      parent,
      index: index2
    };
  }
  return {
    parent: null,
    index: ref(-1)
  };
}
function flattenVNodes(children) {
  const result = [];
  const traverse = (children2) => {
    if (Array.isArray(children2)) {
      children2.forEach((child) => {
        var _a;
        if (isVNode(child)) {
          result.push(child);
          if ((_a = child.component) == null ? void 0 : _a.subTree) {
            result.push(child.component.subTree);
            traverse(child.component.subTree.children);
          }
          if (child.children) {
            traverse(child.children);
          }
        }
      });
    }
  };
  traverse(children);
  return result;
}
function sortChildren(parent, publicChildren, internalChildren) {
  const vnodes = flattenVNodes(parent.subTree.children);
  internalChildren.sort(
    (a, b) => vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode)
  );
  const orderedPublicChildren = internalChildren.map((item) => item.proxy);
  publicChildren.sort((a, b) => {
    const indexA = orderedPublicChildren.indexOf(a);
    const indexB = orderedPublicChildren.indexOf(b);
    return indexA - indexB;
  });
}
function useChildren(key) {
  const publicChildren = reactive([]);
  const internalChildren = reactive([]);
  const parent = getCurrentInstance();
  const linkChildren = (value) => {
    const link = (child) => {
      if (child.proxy) {
        internalChildren.push(child);
        publicChildren.push(child.proxy);
        sortChildren(parent, publicChildren, internalChildren);
      }
    };
    const unlink = (child) => {
      const index2 = internalChildren.indexOf(child);
      publicChildren.splice(index2, 1);
      internalChildren.splice(index2, 1);
    };
    provide(
      key,
      Object.assign(
        {
          link,
          unlink,
          children: publicChildren,
          internalChildren
        },
        value
      )
    );
  };
  return {
    children: publicChildren,
    linkChildren
  };
}
function onMountedOrActivated(hook) {
  let mounted;
  onMounted(() => {
    hook();
    nextTick(() => {
      mounted = true;
    });
  });
  onActivated(() => {
    if (mounted) {
      hook();
    }
  });
}
function useEventListener(type, listener, options = {}) {
  if (!inBrowser) {
    return;
  }
  const { target = window, passive = false, capture = false } = options;
  let attached;
  const add = (target2) => {
    const element = unref(target2);
    if (element && !attached) {
      element.addEventListener(type, listener, {
        capture,
        passive
      });
      attached = true;
    }
  };
  const remove = (target2) => {
    const element = unref(target2);
    if (element && attached) {
      element.removeEventListener(type, listener, capture);
      attached = false;
    }
  };
  onUnmounted(() => remove(target));
  onDeactivated(() => remove(target));
  onMountedOrActivated(() => add(target));
  if (isRef(target)) {
    watch(target, (val, oldVal) => {
      remove(oldVal);
      add(val);
    });
  }
}
var width;
var height;
function useWindowSize() {
  if (!width) {
    width = ref(0);
    height = ref(0);
    if (inBrowser) {
      const update = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      };
      update();
      window.addEventListener("resize", update, { passive: true });
      window.addEventListener("orientationchange", update, { passive: true });
    }
  }
  return { width, height };
}
var overflowScrollReg = /scroll|auto|overlay/i;
var defaultRoot = inBrowser ? window : void 0;
function isElement(node) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== "HTML" && node.tagName !== "BODY" && node.nodeType === ELEMENT_NODE_TYPE;
}
function getScrollParent(el, root = defaultRoot) {
  let node = el;
  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode;
  }
  return root;
}
function useScrollParent(el, root = defaultRoot) {
  const scrollParent = ref();
  onMounted(() => {
    if (el.value) {
      scrollParent.value = getScrollParent(el.value, root);
    }
  });
  return scrollParent;
}
var visibility;
function usePageVisibility() {
  if (!visibility) {
    visibility = ref("visible");
    if (inBrowser) {
      const update = () => {
        visibility.value = document.hidden ? "hidden" : "visible";
      };
      update();
      window.addEventListener("visibilitychange", update);
    }
  }
  return visibility;
}
function getScrollTop(el) {
  const top = "scrollTop" in el ? el.scrollTop : el.pageYOffset;
  return Math.max(top, 0);
}
function setScrollTop(el, value) {
  if ("scrollTop" in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}
function getElementTop(el, scroller) {
  if (el === window) {
    return 0;
  }
  const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return useRect(el).top + scrollTop;
}
isIOS();
const stopPropagation = (event) => event.stopPropagation();
function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}
function isHidden(elementRef) {
  const el = unref(elementRef);
  if (!el) {
    return false;
  }
  const style = window.getComputedStyle(el);
  const hidden = style.display === "none";
  const parentHidden = el.offsetParent === null && style.position !== "fixed";
  return hidden || parentHidden;
}
const { width: windowWidth, height: windowHeight } = useWindowSize();
function addUnit(value) {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value);
  }
  return void 0;
}
function getSizeStyle(originSize) {
  if (isDef(originSize)) {
    if (Array.isArray(originSize)) {
      return {
        width: addUnit(originSize[0]),
        height: addUnit(originSize[1])
      };
    }
    const size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
}
function getZIndexStyle(zIndex) {
  const style = {};
  if (zIndex !== void 0) {
    style.zIndex = +zIndex;
  }
  return style;
}
let rootFontSize;
function getRootFontSize() {
  if (!rootFontSize) {
    const doc = document.documentElement;
    const fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }
  return rootFontSize;
}
function convertRem(value) {
  value = value.replace(/rem/g, "");
  return +value * getRootFontSize();
}
function convertVw(value) {
  value = value.replace(/vw/g, "");
  return +value * windowWidth.value / 100;
}
function convertVh(value) {
  value = value.replace(/vh/g, "");
  return +value * windowHeight.value / 100;
}
function unitToPx(value) {
  if (typeof value === "number") {
    return value;
  }
  if (inBrowser$1) {
    if (value.includes("rem")) {
      return convertRem(value);
    }
    if (value.includes("vw")) {
      return convertVw(value);
    }
    if (value.includes("vh")) {
      return convertVh(value);
    }
  }
  return parseFloat(value);
}
const camelizeRE = /-(\w)/g;
const camelize = (str) => str.replace(camelizeRE, (_, c) => c.toUpperCase());
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const { hasOwnProperty } = Object.prototype;
function assignKey(to, from, key) {
  const val = from[key];
  if (!isDef(val)) {
    return;
  }
  if (!hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), val);
  }
}
function deepAssign(to, from) {
  Object.keys(from).forEach((key) => {
    assignKey(to, from, key);
  });
  return to;
}
var stdin_default$b = {
  name: "\u59D3\u540D",
  tel: "\u7535\u8BDD",
  save: "\u4FDD\u5B58",
  confirm: "\u786E\u8BA4",
  cancel: "\u53D6\u6D88",
  delete: "\u5220\u9664",
  loading: "\u52A0\u8F7D\u4E2D...",
  noCoupon: "\u6682\u65E0\u4F18\u60E0\u5238",
  nameEmpty: "\u8BF7\u586B\u5199\u59D3\u540D",
  addContact: "\u6DFB\u52A0\u8054\u7CFB\u4EBA",
  telInvalid: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",
  vanCalendar: {
    end: "\u7ED3\u675F",
    start: "\u5F00\u59CB",
    title: "\u65E5\u671F\u9009\u62E9",
    weekdays: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
    monthTitle: (year, month) => `${year}\u5E74${month}\u6708`,
    rangePrompt: (maxRange) => `\u6700\u591A\u9009\u62E9 ${maxRange} \u5929`
  },
  vanCascader: {
    select: "\u8BF7\u9009\u62E9"
  },
  vanPagination: {
    prev: "\u4E0A\u4E00\u9875",
    next: "\u4E0B\u4E00\u9875"
  },
  vanPullRefresh: {
    pulling: "\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",
    loosing: "\u91CA\u653E\u5373\u53EF\u5237\u65B0..."
  },
  vanSubmitBar: {
    label: "\u5408\u8BA1:"
  },
  vanCoupon: {
    unlimited: "\u65E0\u95E8\u69DB",
    discount: (discount) => `${discount}\u6298`,
    condition: (condition) => `\u6EE1${condition}\u5143\u53EF\u7528`
  },
  vanCouponCell: {
    title: "\u4F18\u60E0\u5238",
    count: (count) => `${count}\u5F20\u53EF\u7528`
  },
  vanCouponList: {
    exchange: "\u5151\u6362",
    close: "\u4E0D\u4F7F\u7528",
    enable: "\u53EF\u7528",
    disabled: "\u4E0D\u53EF\u7528",
    placeholder: "\u8F93\u5165\u4F18\u60E0\u7801"
  },
  vanAddressEdit: {
    area: "\u5730\u533A",
    areaEmpty: "\u8BF7\u9009\u62E9\u5730\u533A",
    addressEmpty: "\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",
    addressDetail: "\u8BE6\u7EC6\u5730\u5740",
    defaultAddress: "\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"
  },
  vanAddressList: {
    add: "\u65B0\u589E\u5730\u5740"
  }
};
const lang = ref("zh-CN");
const messages = reactive({
  "zh-CN": stdin_default$b
});
const Locale = {
  messages() {
    return messages[lang.value];
  },
  use(newLang, newMessages) {
    lang.value = newLang;
    this.add({ [newLang]: newMessages });
  },
  add(newMessages = {}) {
    deepAssign(messages, newMessages);
  }
};
var stdin_default$a = Locale;
function createTranslate(name2) {
  const prefix = camelize(name2) + ".";
  return (path, ...args) => {
    const messages2 = stdin_default$a.messages();
    const message = get(messages2, prefix + path) || get(messages2, path);
    return isFunction(message) ? message(...args) : message;
  };
}
function genBem(name2, mods) {
  if (!mods) {
    return "";
  }
  if (typeof mods === "string") {
    return ` ${name2}--${mods}`;
  }
  if (Array.isArray(mods)) {
    return mods.reduce(
      (ret, item) => ret + genBem(name2, item),
      ""
    );
  }
  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? genBem(name2, key) : ""),
    ""
  );
}
function createBEM(name2) {
  return (el, mods) => {
    if (el && typeof el !== "string") {
      mods = el;
      el = "";
    }
    el = el ? `${name2}__${el}` : name2;
    return `${el}${genBem(el, mods)}`;
  };
}
function createNamespace$1(name2) {
  const prefixedName = `van-${name2}`;
  return [
    prefixedName,
    createBEM(prefixedName),
    createTranslate(prefixedName)
  ];
}
const BORDER = "van-hairline";
const BORDER_TOP_BOTTOM = `${BORDER}--top-bottom`;
const BORDER_UNSET_TOP_BOTTOM = `${BORDER}-unset--top-bottom`;
const HAPTICS_FEEDBACK = "van-haptics-feedback";
function callInterceptor(interceptor, {
  args = [],
  done,
  canceled
}) {
  if (interceptor) {
    const returnVal = interceptor.apply(null, args);
    if (isPromise(returnVal)) {
      returnVal.then((value) => {
        if (value) {
          done();
        } else if (canceled) {
          canceled();
        }
      }).catch(noop);
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}
function withInstall(options) {
  options.install = (app) => {
    const { name: name2 } = options;
    if (name2) {
      app.component(name2, options);
      app.component(camelize(`-${name2}`), options);
    }
  };
  return options;
}
function createNamespace(name2) {
  const prefixedName = `van-${name2}`;
  console.log("%c \u{1F354} prefixedName", "color:#e41a6a", prefixedName);
  return [
    prefixedName,
    createBEM(prefixedName),
    createTranslate(prefixedName)
  ];
}
const [name$e, bem$c, t$1] = createNamespace("picker");
const getFirstEnabledOption = (options) => options.find((option) => !option.disabled) || options[0];
function getColumnsType(columns, fields) {
  const firstColumn = columns[0];
  if (firstColumn) {
    if (Array.isArray(firstColumn)) {
      return "multiple";
    }
    if (fields.children in firstColumn) {
      return "cascade";
    }
  }
  return "default";
}
function findIndexOfEnabledOption(options, index2) {
  index2 = clamp(index2, 0, options.length);
  for (let i = index2; i < options.length; i++) {
    if (!options[i].disabled)
      return i;
  }
  for (let i = index2 - 1; i >= 0; i--) {
    if (!options[i].disabled)
      return i;
  }
  return 0;
}
const isOptionExist = (options, value, fields) => value !== void 0 && !!options.find((option) => option[fields.value] === value);
function findOptionByValue(options, value, fields) {
  const index2 = options.findIndex((option) => option[fields.value] === value);
  const enabledIndex = findIndexOfEnabledOption(options, index2);
  return options[enabledIndex];
}
function formatCascadeColumns(columns, fields, selectedValues) {
  const formatted = [];
  let cursor = {
    [fields.children]: columns
  };
  let columnIndex = 0;
  while (cursor && cursor[fields.children]) {
    const options = cursor[fields.children];
    const value = selectedValues.value[columnIndex];
    cursor = isDef(value) ? findOptionByValue(options, value, fields) : void 0;
    if (!cursor && options.length) {
      const firstValue = getFirstEnabledOption(options)[fields.value];
      cursor = findOptionByValue(options, firstValue, fields);
    }
    columnIndex++;
    formatted.push(options);
  }
  return formatted;
}
function getElementTranslateY(element) {
  const { transform } = window.getComputedStyle(element);
  const translateY = transform.slice(7, transform.length - 1).split(", ")[5];
  return Number(translateY);
}
function assignDefaultFields(fields) {
  return extend(
    {
      text: "text",
      value: "value",
      children: "children"
    },
    fields
  );
}
function useExpose(apis) {
  const instance = getCurrentInstance();
  if (instance) {
    extend(instance.proxy, apis);
  }
}
const [name$d, bem$b] = createNamespace$1("loading");
const SpinIcon = Array(12).fill(null).map((_, index2) => createVNode("i", {
  "class": bem$b("line", String(index2 + 1))
}, null));
const CircularIcon = createVNode("svg", {
  "class": bem$b("circular"),
  "viewBox": "25 25 50 50"
}, [createVNode("circle", {
  "cx": "50",
  "cy": "50",
  "r": "20",
  "fill": "none"
}, null)]);
const loadingProps = {
  size: numericProp,
  type: makeStringProp("circular"),
  color: String,
  vertical: Boolean,
  textSize: numericProp,
  textColor: String
};
var stdin_default$9 = defineComponent({
  name: name$d,
  props: loadingProps,
  setup(props, {
    slots
  }) {
    const spinnerStyle = computed(() => extend({
      color: props.color
    }, getSizeStyle(props.size)));
    const renderText = () => {
      var _a;
      if (slots.default) {
        return createVNode("span", {
          "class": bem$b("text"),
          "style": {
            fontSize: addUnit(props.textSize),
            color: (_a = props.textColor) != null ? _a : props.color
          }
        }, [slots.default()]);
      }
    };
    return () => {
      const {
        type,
        vertical
      } = props;
      return createVNode("div", {
        "class": bem$b([type, {
          vertical
        }]),
        "aria-live": "polite",
        "aria-busy": true
      }, [createVNode("span", {
        "class": bem$b("spinner", type),
        "style": spinnerStyle.value
      }, [type === "spinner" ? SpinIcon : CircularIcon]), renderText()]);
    };
  }
});
const Loading = withInstall(stdin_default$9);
function getDirection(x, y) {
  if (x > y) {
    return "horizontal";
  }
  if (y > x) {
    return "vertical";
  }
  return "";
}
function useTouch() {
  const startX = ref(0);
  const startY = ref(0);
  const deltaX = ref(0);
  const deltaY = ref(0);
  const offsetX = ref(0);
  const offsetY = ref(0);
  const direction = ref("");
  const isVertical = () => direction.value === "vertical";
  const isHorizontal = () => direction.value === "horizontal";
  const reset = () => {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = "";
  };
  const start = (event) => {
    reset();
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  };
  const move = (event) => {
    const touch = event.touches[0];
    deltaX.value = (touch.clientX < 0 ? 0 : touch.clientX) - startX.value;
    deltaY.value = touch.clientY - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);
    const LOCK_DIRECTION_DISTANCE = 10;
    if (!direction.value || offsetX.value < LOCK_DIRECTION_DISTANCE && offsetY.value < LOCK_DIRECTION_DISTANCE) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
  };
  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal
  };
}
const DEFAULT_DURATION = 200;
const MOMENTUM_TIME = 300;
const MOMENTUM_DISTANCE = 15;
const [name$c, bem$a] = createNamespace("picker-column");
const PICKER_KEY = Symbol(name$c);
const Column = defineComponent({
  name: name$c,
  props: {
    value: makeArrayProp(),
    fields: makeRequiredProp(Object),
    options: makeArrayProp(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: makeRequiredProp(Number),
    swipeDuration: makeRequiredProp(numericProp),
    visibleOptionNum: makeRequiredProp(numericProp)
  },
  components: {
    [Icon.name]: Icon
  },
  emits: ["change", "clickOption", "clickIcon"],
  setup(props, {
    emit,
    slots
  }) {
    let moving;
    let startOffset;
    let touchStartTime;
    let momentumOffset;
    let transitionEndTrigger;
    const root = ref();
    const wrapper = ref();
    const currentOffset = ref(0);
    const currentDuration = ref(0);
    const touch = useTouch();
    const count = () => props.options.length;
    const baseOffset = () => props.optionHeight * (+props.visibleOptionNum - 1) / 2;
    const updateValueByIndex = (index2) => {
      const enabledIndex = findIndexOfEnabledOption(props.options, index2);
      const offset = -enabledIndex * props.optionHeight;
      const trigger = () => {
        props.options[enabledIndex][props.fields.value];
      };
      if (moving && offset !== currentOffset.value) {
        transitionEndTrigger = trigger;
      } else {
        trigger();
      }
      currentOffset.value = offset;
    };
    const onClickOption = (index2) => {
      if (moving || props.readonly) {
        return;
      }
      transitionEndTrigger = null;
      currentDuration.value = DEFAULT_DURATION;
      emit("clickOption", props.options[index2]);
    };
    const onClickIcon = (index2) => {
      console.log("%c \u{1F364} index", "color:#b03734", index2);
      if (moving || props.readonly) {
        return;
      }
      transitionEndTrigger = null;
      currentDuration.value = DEFAULT_DURATION;
      updateValueByIndex(index2);
      emit("clickIcon", props.options[index2][props.fields.value], props.options[index2]);
    };
    const getIndexByOffset = (offset) => clamp(Math.round(-offset / props.optionHeight), 0, count() - 1);
    const momentum = (distance, duration) => {
      const speed = Math.abs(distance / duration);
      distance = currentOffset.value + speed / 3e-3 * (distance < 0 ? -1 : 1);
      const index2 = getIndexByOffset(distance);
      currentDuration.value = +props.swipeDuration;
      updateValueByIndex(index2);
    };
    const stopMomentum = () => {
      moving = false;
      currentDuration.value = 0;
      if (transitionEndTrigger) {
        transitionEndTrigger();
        transitionEndTrigger = null;
      }
    };
    const onTouchStart = (event) => {
      if (props.readonly) {
        return;
      }
      touch.start(event);
      if (moving) {
        const translateY = getElementTranslateY(wrapper.value);
        currentOffset.value = Math.min(0, translateY - baseOffset());
      }
      currentDuration.value = 0;
      startOffset = currentOffset.value;
      touchStartTime = Date.now();
      momentumOffset = startOffset;
      transitionEndTrigger = null;
    };
    const onTouchMove = (event) => {
      if (props.readonly) {
        return;
      }
      touch.move(event);
      if (touch.isVertical()) {
        moving = true;
        preventDefault(event, true);
      }
      currentOffset.value = clamp(startOffset + touch.deltaY.value, -(count() * props.optionHeight), props.optionHeight);
      const now = Date.now();
      if (now - touchStartTime > MOMENTUM_TIME) {
        touchStartTime = now;
        momentumOffset = currentOffset.value;
      }
    };
    const onTouchEnd = () => {
      if (props.readonly) {
        return;
      }
      const distance = currentOffset.value - momentumOffset;
      const duration = Date.now() - touchStartTime;
      const startMomentum = duration < MOMENTUM_TIME && Math.abs(distance) > MOMENTUM_DISTANCE;
      if (startMomentum) {
        momentum(distance, duration);
        return;
      }
      const index2 = getIndexByOffset(currentOffset.value);
      currentDuration.value = DEFAULT_DURATION;
      updateValueByIndex(index2);
      setTimeout(() => {
        moving = false;
      }, 0);
    };
    const renderOptions = () => {
      const optionStyle = {
        height: `${props.optionHeight}px`
      };
      return props.options.map((option, index2) => {
        const text = option[props.fields.text];
        const {
          disabled
        } = option;
        const value = option[props.fields.value];
        const data = {
          role: "button",
          style: optionStyle,
          tabindex: disabled ? -1 : 0,
          class: [bem$a("item", {
            disabled,
            selected: props.value.includes(value)
          }), option.className],
          onClick: () => onClickOption(index2)
        };
        const childData = {
          class: "van-ellipsis",
          [props.allowHtml ? "innerHTML" : "textContent"]: text
        };
        const iconData = {
          name: option.iconName || "success",
          class: [bem$a("icon", {
            disabled,
            selected: props.value.includes(value)
          }), option.iconClassName],
          onClick: () => onClickIcon(index2)
        };
        return createVNode("li", data, [slots.option ? slots.option(option) : createVNode("div", childData, null), createVNode(resolveComponent("van-icon"), iconData, null)]);
      });
    };
    useParent(PICKER_KEY);
    useExpose({
      stopMomentum
    });
    watchEffect(() => {
      const index2 = props.options.findIndex((option) => option[props.fields.value] === props.value[props.value.length - 1]);
      const enabledIndex = findIndexOfEnabledOption(props.options, index2);
      const offset = -enabledIndex * props.optionHeight;
      console.log("%c \u{1F943} offset", "color:#b03734", offset);
      currentOffset.value = offset;
    });
    useEventListener("touchmove", onTouchMove, {
      target: root
    });
    return () => createVNode("div", {
      "ref": root,
      "class": bem$a(),
      "onTouchstartPassive": onTouchStart,
      "onTouchend": onTouchEnd,
      "onTouchcancel": onTouchEnd
    }, [createVNode("ul", {
      "ref": wrapper,
      "style": {
        transform: `translate3d(0, ${currentOffset.value + baseOffset()}px, 0)`,
        transitionDuration: `${currentDuration.value}ms`,
        transitionProperty: currentDuration.value ? "all" : "none"
      },
      "class": bem$a("wrapper"),
      "onTransitionend": stopMomentum
    }, [renderOptions()])]);
  }
});
const [name$b] = createNamespace("picker-toolbar");
const pickerToolbarProps$1 = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
};
const pickerToolbarSlots = ["cancel", "confirm", "title", "toolbar"];
const pickerToolbarPropKeys = Object.keys(pickerToolbarProps$1);
const Toolbar = defineComponent({
  name: name$b,
  props: pickerToolbarProps$1,
  emits: ["confirm", "cancel"],
  setup(props, {
    emit,
    slots
  }) {
    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }
      if (props.title) {
        return createVNode("div", {
          "class": [bem$c("title"), "van-ellipsis"]
        }, [props.title]);
      }
    };
    const onCancel = () => emit("cancel");
    const onConfirm = () => emit("confirm");
    const renderCancel = () => {
      const text = props.cancelButtonText || t$1("cancel");
      return createVNode("button", {
        "type": "button",
        "class": [bem$c("cancel"), HAPTICS_FEEDBACK],
        "onClick": onCancel
      }, [slots.cancel ? slots.cancel() : text]);
    };
    const renderConfirm = () => {
      const text = props.confirmButtonText || t$1("confirm");
      return createVNode("button", {
        "type": "button",
        "class": [bem$c("confirm"), HAPTICS_FEEDBACK],
        "onClick": onConfirm
      }, [slots.confirm ? slots.confirm() : text]);
    };
    return () => createVNode("div", {
      "class": bem$c("toolbar")
    }, [slots.toolbar ? slots.toolbar() : [renderCancel(), renderTitle(), renderConfirm()]]);
  }
});
function scrollLeftTo(scroller, to, duration) {
  let count = 0;
  const from = scroller.scrollLeft;
  const frames = duration === 0 ? 1 : Math.round(duration * 1e3 / 16);
  function animate() {
    scroller.scrollLeft += (to - from) / frames;
    if (++count < frames) {
      raf(animate);
    }
  }
  animate();
}
function scrollTopTo(scroller, to, duration, callback) {
  let current2 = getScrollTop(scroller);
  const isDown = current2 < to;
  const frames = duration === 0 ? 1 : Math.round(duration * 1e3 / 16);
  const step = (to - current2) / frames;
  function animate() {
    current2 += step;
    if (isDown && current2 > to || !isDown && current2 < to) {
      current2 = to;
    }
    setScrollTop(scroller, current2);
    if (isDown && current2 < to || !isDown && current2 > to) {
      raf(animate);
    } else if (callback) {
      raf(callback);
    }
  }
  animate();
}
let current = 0;
function useId() {
  const vm = getCurrentInstance();
  const { name: name2 = "unknown" } = (vm == null ? void 0 : vm.type) || {};
  if (process.env.NODE_ENV === "test") {
    return name2;
  }
  return `${name2}-${++current}`;
}
const routeProps = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function route({
  to,
  url,
  replace,
  $router: router
}) {
  if (to && router) {
    router[replace ? "replace" : "push"](to);
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function useRefs() {
  const refs = ref([]);
  const cache = [];
  onBeforeUpdate(() => {
    refs.value = [];
  });
  const setRefs = (index2) => {
    if (!cache[index2]) {
      cache[index2] = (el) => {
        refs.value[index2] = el;
      };
    }
    return cache[index2];
  };
  return [refs, setRefs];
}
const POPUP_TOGGLE_KEY = Symbol();
function onPopupReopen(callback) {
  const popupToggleStatus = inject(POPUP_TOGGLE_KEY, null);
  if (popupToggleStatus) {
    watch(popupToggleStatus, (show) => {
      if (show) {
        callback();
      }
    });
  }
}
function useVisibilityChange(target, onChange) {
  if (!inBrowser$1 || !window.IntersectionObserver) {
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      onChange(entries[0].intersectionRatio > 0);
    },
    { root: document.body }
  );
  const observe = () => {
    if (target.value) {
      observer.observe(target.value);
    }
  };
  const unobserve = () => {
    if (target.value) {
      observer.unobserve(target.value);
    }
  };
  onDeactivated(unobserve);
  onBeforeUnmount(unobserve);
  onMountedOrActivated(observe);
}
const [name$a, bem$9] = createNamespace$1("sticky");
const stickyProps = {
  zIndex: numericProp,
  position: makeStringProp("top"),
  container: Object,
  offsetTop: makeNumericProp(0),
  offsetBottom: makeNumericProp(0)
};
var stdin_default$8 = defineComponent({
  name: name$a,
  props: stickyProps,
  emits: ["scroll", "change"],
  setup(props, {
    emit,
    slots
  }) {
    const root = ref();
    const scrollParent = useScrollParent(root);
    const state = reactive({
      fixed: false,
      width: 0,
      height: 0,
      transform: 0
    });
    const offset = computed(() => unitToPx(props.position === "top" ? props.offsetTop : props.offsetBottom));
    const rootStyle = computed(() => {
      const {
        fixed,
        height: height2,
        width: width2
      } = state;
      if (fixed) {
        return {
          width: `${width2}px`,
          height: `${height2}px`
        };
      }
    });
    const stickyStyle = computed(() => {
      if (!state.fixed) {
        return;
      }
      const style = extend(getZIndexStyle(props.zIndex), {
        width: `${state.width}px`,
        height: `${state.height}px`,
        [props.position]: `${offset.value}px`
      });
      if (state.transform) {
        style.transform = `translate3d(0, ${state.transform}px, 0)`;
      }
      return style;
    });
    const emitScroll = (scrollTop) => emit("scroll", {
      scrollTop,
      isFixed: state.fixed
    });
    const onScroll = () => {
      if (!root.value || isHidden(root)) {
        return;
      }
      const {
        container,
        position
      } = props;
      const rootRect = useRect(root);
      const scrollTop = getScrollTop(window);
      state.width = rootRect.width;
      state.height = rootRect.height;
      if (position === "top") {
        if (container) {
          const containerRect = useRect(container);
          const difference = containerRect.bottom - offset.value - state.height;
          state.fixed = offset.value > rootRect.top && containerRect.bottom > 0;
          state.transform = difference < 0 ? difference : 0;
        } else {
          state.fixed = offset.value > rootRect.top;
        }
      } else {
        const {
          clientHeight
        } = document.documentElement;
        if (container) {
          const containerRect = useRect(container);
          const difference = clientHeight - containerRect.top - offset.value - state.height;
          state.fixed = clientHeight - offset.value < rootRect.bottom && clientHeight > containerRect.top;
          state.transform = difference < 0 ? -difference : 0;
        } else {
          state.fixed = clientHeight - offset.value < rootRect.bottom;
        }
      }
      emitScroll(scrollTop);
    };
    watch(() => state.fixed, (value) => emit("change", value));
    useEventListener("scroll", onScroll, {
      target: scrollParent,
      passive: true
    });
    useVisibilityChange(root, onScroll);
    return () => {
      var _a;
      return createVNode("div", {
        "ref": root,
        "style": rootStyle.value
      }, [createVNode("div", {
        "class": bem$9({
          fixed: state.fixed
        }),
        "style": stickyStyle.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
  }
});
const Sticky = withInstall(stdin_default$8);
const [name$9, bem$8] = createNamespace$1("badge");
const badgeProps = {
  dot: Boolean,
  max: numericProp,
  tag: makeStringProp("div"),
  color: String,
  offset: Array,
  content: numericProp,
  showZero: truthProp,
  position: makeStringProp("top-right")
};
var stdin_default$7 = defineComponent({
  name: name$9,
  props: badgeProps,
  setup(props, {
    slots
  }) {
    const hasContent = () => {
      if (slots.content) {
        return true;
      }
      const {
        content,
        showZero
      } = props;
      return isDef(content) && content !== "" && (showZero || content !== 0 && content !== "0");
    };
    const renderContent = () => {
      const {
        dot,
        max,
        content
      } = props;
      if (!dot && hasContent()) {
        if (slots.content) {
          return slots.content();
        }
        if (isDef(max) && isNumeric(content) && +content > max) {
          return `${max}+`;
        }
        return content;
      }
    };
    const style = computed(() => {
      const style2 = {
        background: props.color
      };
      if (props.offset) {
        const [x, y] = props.offset;
        if (slots.default) {
          style2.top = addUnit(y);
          if (typeof x === "number") {
            style2.right = addUnit(-x);
          } else {
            style2.right = x.startsWith("-") ? x.replace("-", "") : `-${x}`;
          }
        } else {
          style2.marginTop = addUnit(y);
          style2.marginLeft = addUnit(x);
        }
      }
      return style2;
    });
    const renderBadge = () => {
      if (hasContent() || props.dot) {
        return createVNode("div", {
          "class": bem$8([props.position, {
            dot: props.dot,
            fixed: !!slots.default
          }]),
          "style": style.value
        }, [renderContent()]);
      }
    };
    return () => {
      if (slots.default) {
        const {
          tag
        } = props;
        return createVNode(tag, {
          "class": bem$8("wrapper")
        }, {
          default: () => [slots.default(), renderBadge()]
        });
      }
      return renderBadge();
    };
  }
});
const Badge = withInstall(stdin_default$7);
const [name$8, bem$7] = createNamespace$1("tab");
var stdin_default$6 = defineComponent({
  name: name$8,
  props: {
    id: String,
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: numericProp,
    shrink: Boolean,
    isActive: Boolean,
    disabled: Boolean,
    controls: String,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    showZeroBadge: truthProp
  },
  setup(props, {
    slots
  }) {
    const style = computed(() => {
      const style2 = {};
      const {
        type,
        color,
        disabled,
        isActive,
        activeColor,
        inactiveColor
      } = props;
      const isCard = type === "card";
      if (color && isCard) {
        style2.borderColor = color;
        if (!disabled) {
          if (isActive) {
            style2.backgroundColor = color;
          } else {
            style2.color = color;
          }
        }
      }
      const titleColor = isActive ? activeColor : inactiveColor;
      if (titleColor) {
        style2.color = titleColor;
      }
      return style2;
    });
    const renderText = () => {
      const Text = createVNode("span", {
        "class": bem$7("text", {
          ellipsis: !props.scrollable
        })
      }, [slots.title ? slots.title() : props.title]);
      if (props.dot || isDef(props.badge) && props.badge !== "") {
        return createVNode(Badge, {
          "dot": props.dot,
          "content": props.badge,
          "showZero": props.showZeroBadge
        }, {
          default: () => [Text]
        });
      }
      return Text;
    };
    return () => createVNode("div", {
      "id": props.id,
      "role": "tab",
      "class": [bem$7([props.type, {
        grow: props.scrollable && !props.shrink,
        shrink: props.shrink,
        active: props.isActive,
        disabled: props.disabled
      }])],
      "style": style.value,
      "tabindex": props.disabled ? void 0 : props.isActive ? 0 : -1,
      "aria-selected": props.isActive,
      "aria-disabled": props.disabled || void 0,
      "aria-controls": props.controls
    }, [renderText()]);
  }
});
const [name$7, bem$6] = createNamespace$1("swipe");
const swipeProps = {
  loop: truthProp,
  width: numericProp,
  height: numericProp,
  vertical: Boolean,
  autoplay: makeNumericProp(0),
  duration: makeNumericProp(500),
  touchable: truthProp,
  lazyRender: Boolean,
  initialSwipe: makeNumericProp(0),
  indicatorColor: String,
  showIndicators: truthProp,
  stopPropagation: truthProp
};
const SWIPE_KEY = Symbol(name$7);
var stdin_default$5 = defineComponent({
  name: name$7,
  props: swipeProps,
  emits: ["change"],
  setup(props, {
    emit,
    slots
  }) {
    const root = ref();
    const track = ref();
    const state = reactive({
      rect: null,
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      swiping: false
    });
    const touch = useTouch();
    const {
      children,
      linkChildren
    } = useChildren(SWIPE_KEY);
    const count = computed(() => children.length);
    const size = computed(() => state[props.vertical ? "height" : "width"]);
    const delta = computed(() => props.vertical ? touch.deltaY.value : touch.deltaX.value);
    const minOffset = computed(() => {
      if (state.rect) {
        const base = props.vertical ? state.rect.height : state.rect.width;
        return base - size.value * count.value;
      }
      return 0;
    });
    const maxCount = computed(() => Math.ceil(Math.abs(minOffset.value) / size.value));
    const trackSize = computed(() => count.value * size.value);
    const activeIndicator = computed(() => (state.active + count.value) % count.value);
    const isCorrectDirection = computed(() => {
      const expect = props.vertical ? "vertical" : "horizontal";
      return touch.direction.value === expect;
    });
    const trackStyle = computed(() => {
      const style = {
        transitionDuration: `${state.swiping ? 0 : props.duration}ms`,
        transform: `translate${props.vertical ? "Y" : "X"}(${state.offset}px)`
      };
      if (size.value) {
        const mainAxis = props.vertical ? "height" : "width";
        const crossAxis = props.vertical ? "width" : "height";
        style[mainAxis] = `${trackSize.value}px`;
        style[crossAxis] = props[crossAxis] ? `${props[crossAxis]}px` : "";
      }
      return style;
    });
    const getTargetActive = (pace) => {
      const {
        active
      } = state;
      if (pace) {
        if (props.loop) {
          return clamp(active + pace, -1, count.value);
        }
        return clamp(active + pace, 0, maxCount.value);
      }
      return active;
    };
    const getTargetOffset = (targetActive, offset = 0) => {
      let currentPosition = targetActive * size.value;
      if (!props.loop) {
        currentPosition = Math.min(currentPosition, -minOffset.value);
      }
      let targetOffset = offset - currentPosition;
      if (!props.loop) {
        targetOffset = clamp(targetOffset, minOffset.value, 0);
      }
      return targetOffset;
    };
    const move = ({
      pace = 0,
      offset = 0,
      emitChange
    }) => {
      if (count.value <= 1) {
        return;
      }
      const {
        active
      } = state;
      const targetActive = getTargetActive(pace);
      const targetOffset = getTargetOffset(targetActive, offset);
      if (props.loop) {
        if (children[0] && targetOffset !== minOffset.value) {
          const outRightBound = targetOffset < minOffset.value;
          children[0].setOffset(outRightBound ? trackSize.value : 0);
        }
        if (children[count.value - 1] && targetOffset !== 0) {
          const outLeftBound = targetOffset > 0;
          children[count.value - 1].setOffset(outLeftBound ? -trackSize.value : 0);
        }
      }
      state.active = targetActive;
      state.offset = targetOffset;
      if (emitChange && targetActive !== active) {
        emit("change", activeIndicator.value);
      }
    };
    const correctPosition = () => {
      state.swiping = true;
      if (state.active <= -1) {
        move({
          pace: count.value
        });
      } else if (state.active >= count.value) {
        move({
          pace: -count.value
        });
      }
    };
    const prev = () => {
      correctPosition();
      touch.reset();
      doubleRaf(() => {
        state.swiping = false;
        move({
          pace: -1,
          emitChange: true
        });
      });
    };
    const next = () => {
      correctPosition();
      touch.reset();
      doubleRaf(() => {
        state.swiping = false;
        move({
          pace: 1,
          emitChange: true
        });
      });
    };
    let autoplayTimer;
    const stopAutoplay = () => clearTimeout(autoplayTimer);
    const autoplay = () => {
      stopAutoplay();
      if (props.autoplay > 0 && count.value > 1) {
        autoplayTimer = setTimeout(() => {
          next();
          autoplay();
        }, +props.autoplay);
      }
    };
    const initialize = (active = +props.initialSwipe) => {
      if (!root.value) {
        return;
      }
      const cb = () => {
        var _a, _b;
        if (!isHidden(root)) {
          const rect = {
            width: root.value.offsetWidth,
            height: root.value.offsetHeight
          };
          state.rect = rect;
          state.width = +((_a = props.width) != null ? _a : rect.width);
          state.height = +((_b = props.height) != null ? _b : rect.height);
        }
        if (count.value) {
          active = Math.min(count.value - 1, active);
        }
        state.active = active;
        state.swiping = true;
        state.offset = getTargetOffset(active);
        children.forEach((swipe) => {
          swipe.setOffset(0);
        });
        autoplay();
      };
      if (isHidden(root)) {
        nextTick().then(cb);
      } else {
        cb();
      }
    };
    const resize = () => initialize(state.active);
    let touchStartTime;
    const onTouchStart = (event) => {
      if (!props.touchable)
        return;
      touch.start(event);
      touchStartTime = Date.now();
      stopAutoplay();
      correctPosition();
    };
    const onTouchMove = (event) => {
      if (props.touchable && state.swiping) {
        touch.move(event);
        if (isCorrectDirection.value) {
          const isEdgeTouch = !props.loop && (state.active === 0 && delta.value > 0 || state.active === count.value - 1 && delta.value < 0);
          if (!isEdgeTouch) {
            preventDefault(event, props.stopPropagation);
            move({
              offset: delta.value
            });
          }
        }
      }
    };
    const onTouchEnd = () => {
      if (!props.touchable || !state.swiping) {
        return;
      }
      const duration = Date.now() - touchStartTime;
      const speed = delta.value / duration;
      const shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta.value) > size.value / 2;
      if (shouldSwipe && isCorrectDirection.value) {
        const offset = props.vertical ? touch.offsetY.value : touch.offsetX.value;
        let pace = 0;
        if (props.loop) {
          pace = offset > 0 ? delta.value > 0 ? -1 : 1 : 0;
        } else {
          pace = -Math[delta.value > 0 ? "ceil" : "floor"](delta.value / size.value);
        }
        move({
          pace,
          emitChange: true
        });
      } else if (delta.value) {
        move({
          pace: 0
        });
      }
      state.swiping = false;
      autoplay();
    };
    const swipeTo = (index2, options = {}) => {
      correctPosition();
      touch.reset();
      doubleRaf(() => {
        let targetIndex;
        if (props.loop && index2 === count.value) {
          targetIndex = state.active === 0 ? 0 : index2;
        } else {
          targetIndex = index2 % count.value;
        }
        if (options.immediate) {
          doubleRaf(() => {
            state.swiping = false;
          });
        } else {
          state.swiping = false;
        }
        move({
          pace: targetIndex - state.active,
          emitChange: true
        });
      });
    };
    const renderDot = (_, index2) => {
      const active = index2 === activeIndicator.value;
      const style = active ? {
        backgroundColor: props.indicatorColor
      } : void 0;
      return createVNode("i", {
        "style": style,
        "class": bem$6("indicator", {
          active
        })
      }, null);
    };
    const renderIndicator = () => {
      if (slots.indicator) {
        return slots.indicator({
          active: activeIndicator.value,
          total: count.value
        });
      }
      if (props.showIndicators && count.value > 1) {
        return createVNode("div", {
          "class": bem$6("indicators", {
            vertical: props.vertical
          })
        }, [Array(count.value).fill("").map(renderDot)]);
      }
    };
    useExpose({
      prev,
      next,
      state,
      resize,
      swipeTo
    });
    linkChildren({
      size,
      props,
      count,
      activeIndicator
    });
    watch(() => props.initialSwipe, (value) => initialize(+value));
    watch(count, () => initialize(state.active));
    watch(() => props.autoplay, autoplay);
    watch([windowWidth, windowHeight], resize);
    watch(usePageVisibility(), (visible) => {
      if (visible === "visible") {
        autoplay();
      } else {
        stopAutoplay();
      }
    });
    onMounted(initialize);
    onActivated(() => initialize(state.active));
    onPopupReopen(() => initialize(state.active));
    onDeactivated(stopAutoplay);
    onBeforeUnmount(stopAutoplay);
    useEventListener("touchmove", onTouchMove, {
      target: track
    });
    return () => {
      var _a;
      return createVNode("div", {
        "ref": root,
        "class": bem$6()
      }, [createVNode("div", {
        "ref": track,
        "style": trackStyle.value,
        "class": bem$6("track", {
          vertical: props.vertical
        }),
        "onTouchstartPassive": onTouchStart,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), renderIndicator()]);
    };
  }
});
const Swipe = withInstall(stdin_default$5);
const [name$6, bem$5] = createNamespace$1("tabs");
var stdin_default$4 = defineComponent({
  name: name$6,
  props: {
    count: makeRequiredProp(Number),
    inited: Boolean,
    animated: Boolean,
    duration: makeRequiredProp(numericProp),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: makeRequiredProp(Number)
  },
  emits: ["change"],
  setup(props, {
    emit,
    slots
  }) {
    const swipeRef = ref();
    const onChange = (index2) => emit("change", index2);
    const renderChildren = () => {
      var _a;
      const Content = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (props.animated || props.swipeable) {
        return createVNode(Swipe, {
          "ref": swipeRef,
          "loop": false,
          "class": bem$5("track"),
          "duration": +props.duration * 1e3,
          "touchable": props.swipeable,
          "lazyRender": props.lazyRender,
          "showIndicators": false,
          "onChange": onChange
        }, {
          default: () => [Content]
        });
      }
      return Content;
    };
    const swipeToCurrentTab = (index2) => {
      const swipe = swipeRef.value;
      if (swipe && swipe.state.active !== index2) {
        swipe.swipeTo(index2, {
          immediate: !props.inited
        });
      }
    };
    watch(() => props.currentIndex, swipeToCurrentTab);
    onMounted(() => {
      swipeToCurrentTab(props.currentIndex);
    });
    useExpose({
      swipeRef
    });
    return () => createVNode("div", {
      "class": bem$5("content", {
        animated: props.animated || props.swipeable
      })
    }, [renderChildren()]);
  }
});
const [name$5, bem$4] = createNamespace$1("tabs");
const tabsProps = {
  type: makeStringProp("line"),
  color: String,
  border: Boolean,
  sticky: Boolean,
  shrink: Boolean,
  active: makeNumericProp(0),
  duration: makeNumericProp(0.3),
  animated: Boolean,
  ellipsis: truthProp,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: makeNumericProp(0),
  background: String,
  lazyRender: truthProp,
  lineWidth: numericProp,
  lineHeight: numericProp,
  beforeChange: Function,
  swipeThreshold: makeNumericProp(5),
  titleActiveColor: String,
  titleInactiveColor: String
};
const TABS_KEY = Symbol(name$5);
var stdin_default$3 = defineComponent({
  name: name$5,
  props: tabsProps,
  emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
  setup(props, {
    emit,
    slots
  }) {
    let tabHeight;
    let lockScroll;
    let stickyFixed;
    const root = ref();
    const navRef = ref();
    const wrapRef = ref();
    const contentRef = ref();
    const id = useId();
    const scroller = useScrollParent(root);
    const [titleRefs, setTitleRefs] = useRefs();
    const {
      children,
      linkChildren
    } = useChildren(TABS_KEY);
    const state = reactive({
      inited: false,
      position: "",
      lineStyle: {},
      currentIndex: -1
    });
    const scrollable = computed(() => children.length > props.swipeThreshold || !props.ellipsis || props.shrink);
    const navStyle = computed(() => ({
      borderColor: props.color,
      background: props.background
    }));
    const getTabName = (tab, index2) => {
      var _a;
      return (_a = tab.name) != null ? _a : index2;
    };
    const currentName = computed(() => {
      const activeTab = children[state.currentIndex];
      if (activeTab) {
        return getTabName(activeTab, state.currentIndex);
      }
    });
    const offsetTopPx = computed(() => unitToPx(props.offsetTop));
    const scrollOffset = computed(() => {
      if (props.sticky) {
        return offsetTopPx.value + tabHeight;
      }
      return 0;
    });
    const scrollIntoView = (immediate) => {
      const nav = navRef.value;
      const titles = titleRefs.value;
      if (!scrollable.value || !nav || !titles || !titles[state.currentIndex]) {
        return;
      }
      const title = titles[state.currentIndex].$el;
      const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      scrollLeftTo(nav, to, immediate ? 0 : +props.duration);
    };
    const setLine = () => {
      const shouldAnimate = state.inited;
      nextTick(() => {
        const titles = titleRefs.value;
        if (!titles || !titles[state.currentIndex] || props.type !== "line" || isHidden(root.value)) {
          return;
        }
        const title = titles[state.currentIndex].$el;
        const {
          lineWidth,
          lineHeight
        } = props;
        const left = title.offsetLeft + title.offsetWidth / 2;
        const lineStyle = {
          width: addUnit(lineWidth),
          backgroundColor: props.color,
          transform: `translateX(${left}px) translateX(-50%)`
        };
        if (shouldAnimate) {
          lineStyle.transitionDuration = `${props.duration}s`;
        }
        if (isDef(lineHeight)) {
          const height2 = addUnit(lineHeight);
          lineStyle.height = height2;
          lineStyle.borderRadius = height2;
        }
        state.lineStyle = lineStyle;
      });
    };
    const findAvailableTab = (index2) => {
      const diff = index2 < state.currentIndex ? -1 : 1;
      while (index2 >= 0 && index2 < children.length) {
        if (!children[index2].disabled) {
          return index2;
        }
        index2 += diff;
      }
    };
    const setCurrentIndex = (currentIndex, skipScrollIntoView) => {
      const newIndex = findAvailableTab(currentIndex);
      if (!isDef(newIndex)) {
        return;
      }
      const newTab = children[newIndex];
      const newName = getTabName(newTab, newIndex);
      const shouldEmitChange = state.currentIndex !== null;
      state.currentIndex = newIndex;
      if (newName !== props.active) {
        emit("update:active", newName);
        if (shouldEmitChange) {
          emit("change", newName, newTab.title);
        }
      }
      if (!skipScrollIntoView) {
        scrollIntoView();
      }
      setLine();
      if (stickyFixed && !props.scrollspy) {
        setRootScrollTop(Math.ceil(getElementTop(root.value) - offsetTopPx.value));
      }
    };
    const setCurrentIndexByName = (name2, skipScrollIntoView) => {
      const matched = children.find((tab, index22) => getTabName(tab, index22) === name2);
      const index2 = matched ? children.indexOf(matched) : 0;
      setCurrentIndex(index2, skipScrollIntoView);
    };
    const scrollToCurrentContent = (immediate = false) => {
      if (props.scrollspy) {
        const target = children[state.currentIndex].$el;
        if (target && scroller.value) {
          const to = getElementTop(target, scroller.value) - scrollOffset.value;
          lockScroll = true;
          scrollTopTo(scroller.value, to, immediate ? 0 : +props.duration, () => {
            lockScroll = false;
          });
        }
      }
    };
    const onClickTab = (item, index2, event) => {
      const {
        title,
        disabled
      } = children[index2];
      const name2 = getTabName(children[index2], index2);
      if (!disabled) {
        callInterceptor(props.beforeChange, {
          args: [name2],
          done: () => {
            setCurrentIndex(index2);
            scrollToCurrentContent();
          }
        });
        route(item);
      }
      emit("clickTab", {
        name: name2,
        title,
        event,
        disabled
      });
    };
    const onStickyScroll = (params) => {
      stickyFixed = params.isFixed;
      emit("scroll", params);
    };
    const scrollTo = (name2) => {
      nextTick(() => {
        setCurrentIndexByName(name2);
        scrollToCurrentContent(true);
      });
    };
    const getCurrentIndexOnScroll = () => {
      for (let index2 = 0; index2 < children.length; index2++) {
        const {
          top
        } = useRect(children[index2].$el);
        if (top > scrollOffset.value) {
          return index2 === 0 ? 0 : index2 - 1;
        }
      }
      return children.length - 1;
    };
    const onScroll = () => {
      if (props.scrollspy && !lockScroll) {
        const index2 = getCurrentIndexOnScroll();
        setCurrentIndex(index2);
      }
    };
    const renderNav = () => children.map((item, index2) => createVNode(stdin_default$6, mergeProps({
      "key": item.id,
      "id": `${id}-${index2}`,
      "ref": setTitleRefs(index2),
      "type": props.type,
      "color": props.color,
      "style": item.titleStyle,
      "class": item.titleClass,
      "shrink": props.shrink,
      "isActive": index2 === state.currentIndex,
      "controls": item.id,
      "scrollable": scrollable.value,
      "activeColor": props.titleActiveColor,
      "inactiveColor": props.titleInactiveColor,
      "onClick": (event) => onClickTab(item, index2, event)
    }, pick(item, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
      title: item.$slots.title
    }));
    const renderLine = () => {
      if (props.type === "line" && children.length) {
        return createVNode("div", {
          "class": bem$4("line"),
          "style": state.lineStyle
        }, null);
      }
    };
    const renderHeader = () => {
      var _a, _b;
      const {
        type,
        border
      } = props;
      return createVNode("div", {
        "ref": wrapRef,
        "class": [bem$4("wrap"), {
          [BORDER_TOP_BOTTOM]: type === "line" && border
        }]
      }, [createVNode("div", {
        "ref": navRef,
        "role": "tablist",
        "class": bem$4("nav", [type, {
          shrink: props.shrink,
          complete: scrollable.value
        }]),
        "style": navStyle.value,
        "aria-orientation": "horizontal"
      }, [(_a = slots["nav-left"]) == null ? void 0 : _a.call(slots), renderNav(), renderLine(), (_b = slots["nav-right"]) == null ? void 0 : _b.call(slots)])]);
    };
    watch([() => props.color, windowWidth], setLine);
    watch(() => props.active, (value) => {
      if (value !== currentName.value) {
        setCurrentIndexByName(value);
      }
    });
    watch(() => children.length, () => {
      if (state.inited) {
        setCurrentIndexByName(props.active);
        setLine();
        nextTick(() => {
          scrollIntoView(true);
        });
      }
    });
    const init = () => {
      setCurrentIndexByName(props.active, true);
      nextTick(() => {
        state.inited = true;
        if (wrapRef.value) {
          tabHeight = useRect(wrapRef.value).height;
        }
        scrollIntoView(true);
      });
    };
    const onRendered = (name2, title) => emit("rendered", name2, title);
    const resize = () => {
      setLine();
      nextTick(() => {
        var _a, _b;
        return (_b = (_a = contentRef.value) == null ? void 0 : _a.swipeRef.value) == null ? void 0 : _b.resize();
      });
    };
    useExpose({
      resize,
      scrollTo
    });
    onActivated(setLine);
    onPopupReopen(setLine);
    onMountedOrActivated(init);
    useEventListener("scroll", onScroll, {
      target: scroller,
      passive: true
    });
    linkChildren({
      id,
      props,
      setLine,
      onRendered,
      currentName,
      scrollIntoView
    });
    return () => {
      var _a;
      return createVNode("div", {
        "ref": root,
        "class": bem$4([props.type])
      }, [props.sticky ? createVNode(Sticky, {
        "container": root.value,
        "offsetTop": offsetTopPx.value,
        "onScroll": onStickyScroll
      }, {
        default: () => {
          var _a2;
          return [renderHeader(), (_a2 = slots["nav-bottom"]) == null ? void 0 : _a2.call(slots)];
        }
      }) : [renderHeader(), (_a = slots["nav-bottom"]) == null ? void 0 : _a.call(slots)], createVNode(stdin_default$4, {
        "ref": contentRef,
        "count": children.length,
        "inited": state.inited,
        "animated": props.animated,
        "duration": props.duration,
        "swipeable": props.swipeable,
        "lazyRender": props.lazyRender,
        "currentIndex": state.currentIndex,
        "onChange": setCurrentIndex
      }, {
        default: () => {
          var _a2;
          return [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)];
        }
      })]);
    };
  }
});
const TAB_STATUS_KEY = Symbol();
const [name$4, bem$3] = createNamespace$1("swipe-item");
var stdin_default$2 = defineComponent({
  name: name$4,
  setup(props, {
    slots
  }) {
    let rendered;
    const state = reactive({
      offset: 0,
      inited: false,
      mounted: false
    });
    const {
      parent,
      index: index2
    } = useParent(SWIPE_KEY);
    if (!parent) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[Vant] <SwipeItem> must be a child component of <Swipe>.");
      }
      return;
    }
    const style = computed(() => {
      const style2 = {};
      const {
        vertical
      } = parent.props;
      if (parent.size.value) {
        style2[vertical ? "height" : "width"] = `${parent.size.value}px`;
      }
      if (state.offset) {
        style2.transform = `translate${vertical ? "Y" : "X"}(${state.offset}px)`;
      }
      return style2;
    });
    const shouldRender = computed(() => {
      const {
        loop,
        lazyRender
      } = parent.props;
      if (!lazyRender || rendered) {
        return true;
      }
      if (!state.mounted) {
        return false;
      }
      const active = parent.activeIndicator.value;
      const maxActive = parent.count.value - 1;
      const prevActive = active === 0 && loop ? maxActive : active - 1;
      const nextActive = active === maxActive && loop ? 0 : active + 1;
      rendered = index2.value === active || index2.value === prevActive || index2.value === nextActive;
      return rendered;
    });
    const setOffset = (offset) => {
      state.offset = offset;
    };
    onMounted(() => {
      nextTick(() => {
        state.mounted = true;
      });
    });
    useExpose({
      setOffset
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": bem$3(),
        "style": style.value
      }, [shouldRender.value ? (_a = slots.default) == null ? void 0 : _a.call(slots) : null]);
    };
  }
});
const SwipeItem = withInstall(stdin_default$2);
const [name$3, bem$2] = createNamespace$1("tab");
const tabProps = extend({}, routeProps, {
  dot: Boolean,
  name: numericProp,
  badge: numericProp,
  title: String,
  disabled: Boolean,
  titleClass: unknownProp,
  titleStyle: [String, Object],
  showZeroBadge: truthProp
});
var stdin_default$1 = defineComponent({
  name: name$3,
  props: tabProps,
  setup(props, {
    slots
  }) {
    const id = useId();
    const inited = ref(false);
    const {
      parent,
      index: index2
    } = useParent(TABS_KEY);
    if (!parent) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[Vant] <Tab> must be a child component of <Tabs>.");
      }
      return;
    }
    const getName = () => {
      var _a;
      return (_a = props.name) != null ? _a : index2.value;
    };
    const init = () => {
      inited.value = true;
      if (parent.props.lazyRender) {
        nextTick(() => {
          parent.onRendered(getName(), props.title);
        });
      }
    };
    const active = computed(() => {
      const isActive = getName() === parent.currentName.value;
      if (isActive && !inited.value) {
        init();
      }
      return isActive;
    });
    const hasInactiveClass = ref(!active.value);
    watch(active, (val) => {
      if (val) {
        hasInactiveClass.value = false;
      } else {
        doubleRaf(() => {
          hasInactiveClass.value = true;
        });
      }
    });
    watch(() => props.title, () => {
      parent.setLine();
      parent.scrollIntoView();
    });
    provide(TAB_STATUS_KEY, active);
    return () => {
      var _a;
      const label = `${parent.id}-${index2.value}`;
      const {
        animated,
        swipeable,
        scrollspy,
        lazyRender
      } = parent.props;
      if (!slots.default && !animated) {
        return;
      }
      const show = scrollspy || active.value;
      if (animated || swipeable) {
        return createVNode(SwipeItem, {
          "id": id,
          "role": "tabpanel",
          "class": bem$2("panel-wrapper", {
            inactive: hasInactiveClass.value
          }),
          "tabindex": active.value ? 0 : -1,
          "aria-hidden": !active.value,
          "aria-labelledby": label
        }, {
          default: () => {
            var _a2;
            return [createVNode("div", {
              "class": bem$2("panel")
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])];
          }
        });
      }
      const shouldRender = inited.value || scrollspy || !lazyRender;
      const Content = shouldRender ? (_a = slots.default) == null ? void 0 : _a.call(slots) : null;
      useExpose({
        id
      });
      return withDirectives(createVNode("div", {
        "id": id,
        "role": "tabpanel",
        "class": bem$2("panel"),
        "tabindex": show ? 0 : -1,
        "aria-labelledby": label
      }, [Content]), [[vShow, show]]);
    };
  }
});
const Tab = withInstall(stdin_default$1);
const Tabs = withInstall(stdin_default$3);
const [name$2, bem$1, t] = createNamespace$1("picker");
const [name$1] = createNamespace$1("picker-toolbar");
const pickerToolbarProps = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
};
var stdin_default = defineComponent({
  name: name$1,
  props: pickerToolbarProps,
  emits: ["confirm", "cancel"],
  setup(props, {
    emit,
    slots
  }) {
    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }
      if (props.title) {
        return createVNode("div", {
          "class": [bem$1("title"), "van-ellipsis"]
        }, [props.title]);
      }
    };
    const onCancel = () => emit("cancel");
    const onConfirm = () => emit("confirm");
    const renderCancel = () => {
      const text = props.cancelButtonText || t("cancel");
      return createVNode("button", {
        "type": "button",
        "class": [bem$1("cancel"), HAPTICS_FEEDBACK],
        "onClick": onCancel
      }, [slots.cancel ? slots.cancel() : text]);
    };
    const renderConfirm = () => {
      const text = props.confirmButtonText || t("confirm");
      return createVNode("button", {
        "type": "button",
        "class": [bem$1("confirm"), HAPTICS_FEEDBACK],
        "onClick": onConfirm
      }, [slots.confirm ? slots.confirm() : text]);
    };
    return () => createVNode("div", {
      "class": bem$1("toolbar")
    }, [slots.toolbar ? slots.toolbar() : [renderCancel(), renderTitle(), renderConfirm()]]);
  }
});
const [name, bem] = createNamespace$1("picker-group");
const PICKER_GROUP_KEY = Symbol(name);
const pickerGroupProps = extend({
  tabs: makeArrayProp()
}, pickerToolbarProps);
defineComponent({
  name,
  props: pickerGroupProps,
  emits: ["confirm", "cancel"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      children,
      linkChildren
    } = useChildren(PICKER_GROUP_KEY);
    linkChildren();
    const onConfirm = () => {
      emit("confirm", children.map((item) => item.confirm()));
    };
    const onCancel = () => emit("cancel");
    return () => {
      var _a;
      const childNodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      return createVNode("div", {
        "class": bem()
      }, [createVNode(stdin_default, mergeProps(props, {
        "onConfirm": onConfirm,
        "onCancel": onCancel
      }), null), createVNode(Tabs, {
        "shrink": true,
        "class": bem("tabs"),
        "animated": true
      }, {
        default: () => [props.tabs.map((title, index2) => createVNode(Tab, {
          "title": title,
          "titleClass": bem("tab-title")
        }, {
          default: () => [childNodes == null ? void 0 : childNodes[index2]]
        }))]
      })]);
    };
  }
});
const pickerSharedProps = extend({
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  optionHeight: makeNumericProp(44),
  showToolbar: truthProp,
  swipeDuration: makeNumericProp(1e3),
  visibleOptionNum: makeNumericProp(6)
}, pickerToolbarProps$1);
const pickerProps = extend({}, pickerSharedProps, {
  columns: makeArrayProp(),
  modelValue: makeArrayProp(),
  toolbarPosition: makeStringProp("top"),
  columnsFieldNames: Object
});
console.log("%c \u{1F356} name", "color:#42b983", name$e);
const _Picker = defineComponent({
  name: "BetterVantPicker",
  props: pickerProps,
  emits: [
    "confirm",
    "cancel",
    "clickOption",
    "clickIcon",
    "update:modelValue"
  ],
  setup(props, {
    emit,
    slots
  }) {
    const columnsRef = ref();
    const selectedValues = ref(props.modelValue.slice(0));
    const {
      parent
    } = useParent(PICKER_GROUP_KEY);
    const {
      children,
      linkChildren
    } = useChildren(PICKER_KEY);
    linkChildren();
    const fields = computed(() => assignDefaultFields(props.columnsFieldNames));
    const optionHeight = computed(() => unitToPx(props.optionHeight));
    const columnsType = computed(() => getColumnsType(props.columns, fields.value));
    const currentColumns = computed(() => {
      const {
        columns
      } = props;
      switch (columnsType.value) {
        case "multiple":
          console.log("%c \u{1F36B} columns", "color:#42b983", columns);
          return columns;
        case "cascade":
          return formatCascadeColumns(columns, fields.value, selectedValues);
        default:
          return [columns];
      }
    });
    const hasOptions = computed(() => currentColumns.value.some((options) => options.length));
    const selectedOptions = computed(() => currentColumns.value.map((options, index2) => findOptionByValue(options, selectedValues.value[index2], fields.value)));
    const setValue = (index2, value) => {
      if (selectedValues.value.includes(value)) {
        const oldIndex = selectedValues.value.findIndex((v) => v === value);
        if (oldIndex >= 0) {
          const newValues = selectedValues.value.slice(0);
          selectedValues.value = newValues.filter((x) => x !== value);
        }
      } else {
        const newValues = selectedValues.value.slice(0);
        newValues.push(value);
        selectedValues.value = newValues;
      }
    };
    const getEventParams = () => ({
      selectedValues: selectedValues.value.slice(0),
      selectedOptions: selectedOptions.value
    });
    const onClickOption = (currentOption, columnIndex) => emit("clickOption", extend({
      columnIndex,
      currentOption
    }, getEventParams()));
    const onClickIcon = (value, currentOption, columnIndex) => {
      console.log("%c \u{1F34F} value", "color:#42b983", value);
      console.log("%c \u{1F32E} currentOption", "color:#465975", currentOption);
      console.log("%c \u{1F955} extend({ columnIndex, currentOption }, getEventParams())", "color:#b03734", extend({
        columnIndex,
        currentOption
      }, getEventParams()));
      setValue(columnIndex, value);
      emit("clickIcon", extend({
        columnIndex,
        currentOption
      }, getEventParams()));
    };
    const confirm = () => {
      children.forEach((child) => child.stopMomentum());
      const params = getEventParams();
      emit("confirm", params);
      return params;
    };
    const cancel = () => emit("cancel", getEventParams());
    const renderColumnItems = () => currentColumns.value.map((options, columnIndex) => createVNode(Column, {
      "value": selectedValues.value,
      "fields": fields.value,
      "options": options,
      "readonly": props.readonly,
      "allowHtml": props.allowHtml,
      "optionHeight": optionHeight.value,
      "swipeDuration": props.swipeDuration,
      "visibleOptionNum": props.visibleOptionNum,
      "onClickOption": (option) => onClickOption(option, columnIndex),
      "onClickIcon": (value, option) => onClickIcon(value, option, columnIndex)
    }, {
      option: slots.option
    }));
    const renderMask = (wrapHeight) => {
      if (hasOptions.value) {
        const frameStyle = {
          height: `${optionHeight.value}px`
        };
        const maskStyle = {
          backgroundSize: `100% ${(wrapHeight - optionHeight.value) / 2}px`
        };
        return [createVNode("div", {
          "class": bem$c("mask"),
          "style": maskStyle
        }, null), createVNode("div", {
          "class": [BORDER_UNSET_TOP_BOTTOM, bem$c("frame")],
          "style": frameStyle
        }, null)];
      }
    };
    const renderColumns = () => {
      const wrapHeight = optionHeight.value * +props.visibleOptionNum;
      const columnsStyle = {
        height: `${wrapHeight}px`
      };
      return createVNode("div", {
        "ref": columnsRef,
        "class": bem$c("columns"),
        "style": columnsStyle
      }, [renderColumnItems(), renderMask(wrapHeight)]);
    };
    const renderToolbar = () => {
      if (props.showToolbar && !parent) {
        return createVNode(Toolbar, mergeProps(pick(props, pickerToolbarPropKeys), {
          "onConfirm": confirm,
          "onCancel": cancel
        }), pick(slots, pickerToolbarSlots));
      }
    };
    watch(currentColumns, (columns) => {
      columns.forEach((options, index2) => {
        if (options.length && !isOptionExist(options, selectedValues.value[index2], fields.value)) {
          setValue(index2, getFirstEnabledOption(options)[fields.value.value]);
        }
      });
    }, {
      immediate: true
    });
    let lastEmittedModelValue;
    watch(() => props.modelValue, (newValues) => {
      if (!isSameValue(newValues, selectedValues.value) && !isSameValue(newValues, lastEmittedModelValue)) {
        selectedValues.value = newValues.slice(0);
      }
    }, {
      deep: true
    });
    watch(selectedValues, (newValues) => {
      if (!isSameValue(newValues, props.modelValue)) {
        lastEmittedModelValue = newValues.slice(0);
        emit("update:modelValue", lastEmittedModelValue);
      }
    }, {
      immediate: true
    });
    useEventListener("touchmove", preventDefault, {
      target: columnsRef
    });
    const getSelectedOptions = () => selectedOptions.value;
    useExpose({
      confirm,
      getSelectedOptions
    });
    return () => {
      var _a, _b;
      return createVNode("div", {
        "class": bem$c()
      }, [props.toolbarPosition === "top" ? renderToolbar() : null, props.loading ? createVNode(Loading, {
        "class": bem$c("loading")
      }, null) : null, (_a = slots["columns-top"]) == null ? void 0 : _a.call(slots), renderColumns(), (_b = slots["columns-bottom"]) == null ? void 0 : _b.call(slots), props.toolbarPosition === "bottom" ? renderToolbar() : null]);
    };
  }
});
const Picker = withInstall(_Picker);
const index = "";
const entry = {
  install(app) {
    app.component(Picker.name, Picker);
  }
};
export {
  Picker as BetterPicker,
  entry as default
};
