import { defineComponent as A, createVNode as h, inject as gt, getCurrentInstance as ke, onUnmounted as bt, computed as E, ref as x, reactive as oe, onDeactivated as Xe, isRef as Ht, watch as D, provide as yt, onMounted as ge, nextTick as Q, onActivated as Ke, unref as xe, isVNode as Vt, watchEffect as Lt, onBeforeUpdate as Yt, onBeforeUnmount as wt, mergeProps as Ze, withDirectives as jt, vShow as Ut } from "vue";
const Wt = {
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
const de = A({
  name: "Button",
  props: Wt,
  setup(e) {
    return () => h("button", {
      class: "hh-btn"
    }, [e.text]);
  }
});
de.install = function(e) {
  e.component(de.name, de);
};
const Xt = {
  title: "Button \u6D4B\u8BD5\u7EC4\u4EF6",
  category: "\u901A\u7528",
  status: "100%",
  install(e) {
    e.component(de.name, de);
  }
}, ee = (e) => e != null, Ve = (e) => typeof e == "function", Ge = (e) => e !== null && typeof e == "object", Kt = (e) => Ge(e) && Ve(e.then) && Ve(e.catch), pt = (e) => typeof e == "number" || /^\d+(\.\d+)?$/.test(e), Zt = () => qe ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function Gt() {
}
const Z = Object.assign, qe = typeof window < "u";
function at(e, t) {
  const n = t.split(".");
  let i = e;
  return n.forEach((a) => {
    var o;
    i = Ge(i) && (o = i[a]) != null ? o : "";
  }), i;
}
function Le(e, t, n) {
  return t.reduce((i, a) => ((!n || e[a] !== void 0) && (i[a] = e[a]), i), {});
}
const Re = (e, t) => JSON.stringify(e) === JSON.stringify(t), qt = null, P = [Number, String], X = {
  type: Boolean,
  default: !0
}, ne = (e) => ({
  type: e,
  required: !0
}), Se = () => ({
  type: Array,
  default: () => []
}), j = (e) => ({
  type: P,
  default: e
}), re = (e) => ({
  type: String,
  default: e
});
var be = typeof window < "u";
function me(e) {
  return be ? requestAnimationFrame(e) : -1;
}
function se(e) {
  me(() => me(e));
}
var Jt = (e) => e === window, lt = (e, t) => ({
  top: 0,
  left: 0,
  right: e,
  bottom: t,
  width: e,
  height: t
}), le = (e) => {
  const t = xe(e);
  if (Jt(t)) {
    const n = t.innerWidth, i = t.innerHeight;
    return lt(n, i);
  }
  return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : lt(0, 0);
};
function Ie(e) {
  const t = gt(e, null);
  if (t) {
    const n = ke(), { link: i, unlink: a, internalChildren: o } = t;
    i(n), bt(() => a(n));
    const l = E(() => o.indexOf(n));
    return {
      parent: t,
      index: l
    };
  }
  return {
    parent: null,
    index: x(-1)
  };
}
function Qt(e) {
  const t = [], n = (i) => {
    Array.isArray(i) && i.forEach((a) => {
      var o;
      Vt(a) && (t.push(a), (o = a.component) != null && o.subTree && (t.push(a.component.subTree), n(a.component.subTree.children)), a.children && n(a.children));
    });
  };
  return n(e), t;
}
function en(e, t, n) {
  const i = Qt(e.subTree.children);
  n.sort(
    (o, l) => i.indexOf(o.vnode) - i.indexOf(l.vnode)
  );
  const a = n.map((o) => o.proxy);
  t.sort((o, l) => {
    const u = a.indexOf(o), c = a.indexOf(l);
    return u - c;
  });
}
function De(e) {
  const t = oe([]), n = oe([]), i = ke();
  return {
    children: t,
    linkChildren: (o) => {
      yt(
        e,
        Object.assign(
          {
            link: (c) => {
              c.proxy && (n.push(c), t.push(c.proxy), en(i, t, n));
            },
            unlink: (c) => {
              const s = n.indexOf(c);
              t.splice(s, 1), n.splice(s, 1);
            },
            children: t,
            internalChildren: n
          },
          o
        )
      );
    }
  };
}
function Je(e) {
  let t;
  ge(() => {
    e(), Q(() => {
      t = !0;
    });
  }), Ke(() => {
    t && e();
  });
}
function ye(e, t, n = {}) {
  if (!be)
    return;
  const { target: i = window, passive: a = !1, capture: o = !1 } = n;
  let l;
  const u = (s) => {
    const d = xe(s);
    d && !l && (d.addEventListener(e, t, {
      capture: o,
      passive: a
    }), l = !0);
  }, c = (s) => {
    const d = xe(s);
    d && l && (d.removeEventListener(e, t, o), l = !1);
  };
  bt(() => c(i)), Xe(() => c(i)), Je(() => u(i)), Ht(i) && D(i, (s, d) => {
    c(d), u(s);
  });
}
var pe, Ne;
function tn() {
  if (!pe && (pe = x(0), Ne = x(0), be)) {
    const e = () => {
      pe.value = window.innerWidth, Ne.value = window.innerHeight;
    };
    e(), window.addEventListener("resize", e, { passive: !0 }), window.addEventListener("orientationchange", e, { passive: !0 });
  }
  return { width: pe, height: Ne };
}
var nn = /scroll|auto|overlay/i, Ct = be ? window : void 0;
function on(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function an(e, t = Ct) {
  let n = e;
  for (; n && n !== t && on(n); ) {
    const { overflowY: i } = window.getComputedStyle(n);
    if (nn.test(i))
      return n;
    n = n.parentNode;
  }
  return t;
}
function Tt(e, t = Ct) {
  const n = x();
  return ge(() => {
    e.value && (n.value = an(e.value, t));
  }), n;
}
var Ce;
function ln() {
  if (!Ce && (Ce = x("visible"), be)) {
    const e = () => {
      Ce.value = document.hidden ? "hidden" : "visible";
    };
    e(), window.addEventListener("visibilitychange", e);
  }
  return Ce;
}
function Qe(e) {
  const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(t, 0);
}
function Ye(e, t) {
  "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t);
}
function cn() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function rn(e) {
  Ye(window, e), Ye(document.body, e);
}
function ct(e, t) {
  if (e === window)
    return 0;
  const n = t ? Qe(t) : cn();
  return le(e).top + n;
}
Zt();
const un = (e) => e.stopPropagation();
function et(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && un(e);
}
function Be(e) {
  const t = xe(e);
  if (!t)
    return !1;
  const n = window.getComputedStyle(t), i = n.display === "none", a = t.offsetParent === null && n.position !== "fixed";
  return i || a;
}
const { width: tt, height: Et } = tn();
function K(e) {
  if (ee(e))
    return pt(e) ? `${e}px` : String(e);
}
function sn(e) {
  if (ee(e)) {
    if (Array.isArray(e))
      return {
        width: K(e[0]),
        height: K(e[1])
      };
    const t = K(e);
    return {
      width: t,
      height: t
    };
  }
}
function dn(e) {
  const t = {};
  return e !== void 0 && (t.zIndex = +e), t;
}
let Me;
function fn() {
  if (!Me) {
    const e = document.documentElement, t = e.style.fontSize || window.getComputedStyle(e).fontSize;
    Me = parseFloat(t);
  }
  return Me;
}
function vn(e) {
  return e = e.replace(/rem/g, ""), +e * fn();
}
function hn(e) {
  return e = e.replace(/vw/g, ""), +e * tt.value / 100;
}
function mn(e) {
  return e = e.replace(/vh/g, ""), +e * Et.value / 100;
}
function nt(e) {
  if (typeof e == "number")
    return e;
  if (qe) {
    if (e.includes("rem"))
      return vn(e);
    if (e.includes("vw"))
      return hn(e);
    if (e.includes("vh"))
      return mn(e);
  }
  return parseFloat(e);
}
const gn = /-(\w)/g, xt = (e) => e.replace(gn, (t, n) => n.toUpperCase()), ce = (e, t, n) => Math.min(Math.max(e, t), n), { hasOwnProperty: bn } = Object.prototype;
function yn(e, t, n) {
  const i = t[n];
  !ee(i) || (!bn.call(e, n) || !Ge(i) ? e[n] = i : e[n] = St(Object(e[n]), i));
}
function St(e, t) {
  return Object.keys(t).forEach((n) => {
    yn(e, t, n);
  }), e;
}
var wn = {
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
    monthTitle: (e, t) => `${e}\u5E74${t}\u6708`,
    rangePrompt: (e) => `\u6700\u591A\u9009\u62E9 ${e} \u5929`
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
    discount: (e) => `${e}\u6298`,
    condition: (e) => `\u6EE1${e}\u5143\u53EF\u7528`
  },
  vanCouponCell: {
    title: "\u4F18\u60E0\u5238",
    count: (e) => `${e}\u5F20\u53EF\u7528`
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
const rt = x("zh-CN"), ut = oe({
  "zh-CN": wn
}), pn = {
  messages() {
    return ut[rt.value];
  },
  use(e, t) {
    rt.value = e, this.add({ [e]: t });
  },
  add(e = {}) {
    St(ut, e);
  }
};
var Cn = pn;
function Tn(e) {
  const t = xt(e) + ".";
  return (n, ...i) => {
    const a = Cn.messages(), o = at(a, t + n) || at(a, n);
    return Ve(o) ? o(...i) : o;
  };
}
function je(e, t) {
  return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce(
    (n, i) => n + je(e, i),
    ""
  ) : Object.keys(t).reduce(
    (n, i) => n + (t[i] ? je(e, i) : ""),
    ""
  ) : "";
}
function En(e) {
  return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${je(t, n)}`);
}
function z(e) {
  const t = `van-${e}`;
  return [
    t,
    En(t),
    Tn(t)
  ];
}
const Bt = "van-hairline", xn = `${Bt}--top-bottom`, Sn = `${Bt}-unset--top-bottom`, Oe = "van-haptics-feedback";
function Bn(e, {
  args: t = [],
  done: n,
  canceled: i
}) {
  if (e) {
    const a = e.apply(null, t);
    Kt(a) ? a.then((o) => {
      o ? n() : i && i();
    }).catch(Gt) : a ? n() : i && i();
  } else
    n();
}
function ie(e) {
  return e.install = (t) => {
    const { name: n } = e;
    n && (t.component(n, e), t.component(xt(`-${n}`), e));
  }, e;
}
const [Mo, V, $e] = z("picker"), Ot = (e) => e.find((t) => !t.disabled) || e[0];
function On(e, t) {
  const n = e[0];
  if (n) {
    if (Array.isArray(n))
      return "multiple";
    if (t.children in n)
      return "cascade";
  }
  return "default";
}
function Ue(e, t) {
  t = ce(t, 0, e.length);
  for (let n = t; n < e.length; n++)
    if (!e[n].disabled)
      return n;
  for (let n = t - 1; n >= 0; n--)
    if (!e[n].disabled)
      return n;
  return 0;
}
const st = (e, t, n) => t !== void 0 && !!e.find((i) => i[n.value] === t);
function We(e, t, n) {
  const i = e.findIndex((o) => o[n.value] === t), a = Ue(e, i);
  return e[a];
}
function $n(e, t, n) {
  const i = [];
  let a = {
    [t.children]: e
  }, o = 0;
  for (; a && a[t.children]; ) {
    const l = a[t.children], u = n.value[o];
    if (a = ee(u) ? We(l, u, t) : void 0, !a && l.length) {
      const c = Ot(l)[t.value];
      a = We(l, c, t);
    }
    o++, i.push(l);
  }
  return i;
}
function kn(e) {
  const { transform: t } = window.getComputedStyle(e), n = t.slice(7, t.length - 1).split(", ")[5];
  return Number(n);
}
function In(e) {
  return Z(
    {
      text: "text",
      value: "value",
      children: "children"
    },
    e
  );
}
function ae(e) {
  const t = ke();
  t && Z(t.proxy, e);
}
const [Dn, fe] = z("loading"), Pn = Array(12).fill(null).map((e, t) => h("i", {
  class: fe("line", String(t + 1))
}, null)), An = h("svg", {
  class: fe("circular"),
  viewBox: "25 25 50 50"
}, [h("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), _n = {
  size: P,
  type: re("circular"),
  color: String,
  vertical: Boolean,
  textSize: P,
  textColor: String
};
var Rn = A({
  name: Dn,
  props: _n,
  setup(e, {
    slots: t
  }) {
    const n = E(() => Z({
      color: e.color
    }, sn(e.size))), i = () => {
      const o = e.type === "spinner" ? Pn : An;
      return h("span", {
        class: fe("spinner", e.type),
        style: n.value
      }, [t.icon ? t.icon() : o]);
    }, a = () => {
      var o;
      if (t.default)
        return h("span", {
          class: fe("text"),
          style: {
            fontSize: K(e.textSize),
            color: (o = e.textColor) != null ? o : e.color
          }
        }, [t.default()]);
    };
    return () => {
      const {
        type: o,
        vertical: l
      } = e;
      return h("div", {
        class: fe([o, {
          vertical: l
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [i(), a()]);
    };
  }
});
const Nn = ie(Rn);
function Mn(e, t) {
  return e > t ? "horizontal" : t > e ? "vertical" : "";
}
function $t() {
  const e = x(0), t = x(0), n = x(0), i = x(0), a = x(0), o = x(0), l = x(""), u = () => l.value === "vertical", c = () => l.value === "horizontal", s = () => {
    n.value = 0, i.value = 0, a.value = 0, o.value = 0, l.value = "";
  };
  return {
    move: (C) => {
      const B = C.touches[0];
      n.value = (B.clientX < 0 ? 0 : B.clientX) - e.value, i.value = B.clientY - t.value, a.value = Math.abs(n.value), o.value = Math.abs(i.value);
      const y = 10;
      (!l.value || a.value < y && o.value < y) && (l.value = Mn(a.value, o.value));
    },
    start: (C) => {
      s(), e.value = C.touches[0].clientX, t.value = C.touches[0].clientY;
    },
    reset: s,
    startX: e,
    startY: t,
    deltaX: n,
    deltaY: i,
    offsetX: a,
    offsetY: o,
    direction: l,
    isVertical: u,
    isHorizontal: c
  };
}
const dt = 200, ft = 300, Fn = 15, [kt, Fe] = z("picker-column"), It = Symbol(kt), zn = A({
  name: kt,
  props: {
    value: P,
    fields: ne(Object),
    options: Se(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: ne(Number),
    swipeDuration: ne(P),
    visibleOptionNum: ne(P)
  },
  emits: ["change", "clickOption"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let i, a, o, l, u;
    const c = x(), s = x(), d = x(0), v = x(0), C = $t(), B = () => e.options.length, y = () => e.optionHeight * (+e.visibleOptionNum - 1) / 2, O = (w) => {
      const S = Ue(e.options, w), f = -S * e.optionHeight, m = () => {
        const $ = e.options[S][e.fields.value];
        $ !== e.value && t("change", $);
      };
      i && f !== d.value ? u = m : m(), d.value = f;
    }, p = (w) => {
      i || e.readonly || (u = null, v.value = dt, O(w), t("clickOption", e.options[w]));
    }, M = (w) => ce(Math.round(-w / e.optionHeight), 0, B() - 1), W = (w, S) => {
      const f = Math.abs(w / S);
      w = d.value + f / 3e-3 * (w < 0 ? -1 : 1);
      const m = M(w);
      v.value = +e.swipeDuration, O(m);
    }, _ = () => {
      i = !1, v.value = 0, u && (u(), u = null);
    }, R = (w) => {
      if (!e.readonly) {
        if (C.start(w), i) {
          const S = kn(s.value);
          d.value = Math.min(0, S - y());
        }
        v.value = 0, a = d.value, o = Date.now(), l = a, u = null;
      }
    }, L = (w) => {
      if (e.readonly)
        return;
      C.move(w), C.isVertical() && (i = !0, et(w, !0)), d.value = ce(a + C.deltaY.value, -(B() * e.optionHeight), e.optionHeight);
      const S = Date.now();
      S - o > ft && (o = S, l = d.value);
    }, G = () => {
      if (e.readonly)
        return;
      const w = d.value - l, S = Date.now() - o;
      if (S < ft && Math.abs(w) > Fn) {
        W(w, S);
        return;
      }
      const m = M(d.value);
      v.value = dt, O(m), setTimeout(() => {
        i = !1;
      }, 0);
    }, Y = () => {
      const w = {
        height: `${e.optionHeight}px`
      };
      return e.options.map((S, f) => {
        const m = S[e.fields.text], {
          disabled: $
        } = S, q = S[e.fields.value], J = {
          role: "button",
          style: w,
          tabindex: $ ? -1 : 0,
          class: [Fe("item", {
            disabled: $,
            selected: q === e.value
          }), S.className],
          onClick: () => p(f)
        }, ue = {
          class: "van-ellipsis",
          [e.allowHtml ? "innerHTML" : "textContent"]: m
        };
        return h("li", J, [n.option ? n.option(S) : h("div", ue, null)]);
      });
    };
    return Ie(It), ae({
      stopMomentum: _
    }), Lt(() => {
      const w = e.options.findIndex((m) => m[e.fields.value] === e.value), f = -Ue(e.options, w) * e.optionHeight;
      d.value = f;
    }), ye("touchmove", L, {
      target: c
    }), () => h("div", {
      ref: c,
      class: Fe(),
      onTouchstartPassive: R,
      onTouchend: G,
      onTouchcancel: G
    }, [h("ul", {
      ref: s,
      style: {
        transform: `translate3d(0, ${d.value + y()}px, 0)`,
        transitionDuration: `${v.value}ms`,
        transitionProperty: v.value ? "all" : "none"
      },
      class: Fe("wrapper"),
      onTransitionend: _
    }, [Y()])]);
  }
}), [Hn] = z("picker-toolbar"), ot = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
}, Vn = ["cancel", "confirm", "title", "toolbar"], Ln = Object.keys(ot), Yn = A({
  name: Hn,
  props: ot,
  emits: ["confirm", "cancel"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const i = () => {
      if (n.title)
        return n.title();
      if (e.title)
        return h("div", {
          class: [V("title"), "van-ellipsis"]
        }, [e.title]);
    }, a = () => t("cancel"), o = () => t("confirm"), l = () => {
      const c = e.cancelButtonText || $e("cancel");
      return h("button", {
        type: "button",
        class: [V("cancel"), Oe],
        onClick: a
      }, [n.cancel ? n.cancel() : c]);
    }, u = () => {
      const c = e.confirmButtonText || $e("confirm");
      return h("button", {
        type: "button",
        class: [V("confirm"), Oe],
        onClick: o
      }, [n.confirm ? n.confirm() : c]);
    };
    return () => h("div", {
      class: V("toolbar")
    }, [n.toolbar ? n.toolbar() : [l(), i(), u()]]);
  }
});
function jn(e, t, n) {
  let i = 0;
  const a = e.scrollLeft, o = n === 0 ? 1 : Math.round(n * 1e3 / 16);
  function l() {
    e.scrollLeft += (t - a) / o, ++i < o && me(l);
  }
  l();
}
function Un(e, t, n, i) {
  let a = Qe(e);
  const o = a < t, l = n === 0 ? 1 : Math.round(n * 1e3 / 16), u = (t - a) / l;
  function c() {
    a += u, (o && a > t || !o && a < t) && (a = t), Ye(e, a), o && a < t || !o && a > t ? me(c) : i && me(i);
  }
  c();
}
let Wn = 0;
function Dt() {
  const e = ke(), { name: t = "unknown" } = (e == null ? void 0 : e.type) || {};
  return process.env.NODE_ENV === "test" ? t : `${t}-${++Wn}`;
}
const Xn = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function Kn({
  to: e,
  url: t,
  replace: n,
  $router: i
}) {
  e && i ? i[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t);
}
function Zn() {
  const e = x([]), t = [];
  return Yt(() => {
    e.value = [];
  }), [e, (i) => (t[i] || (t[i] = (a) => {
    e.value[i] = a;
  }), t[i])];
}
const Gn = Symbol();
function Pt(e) {
  const t = gt(Gn, null);
  t && D(t, (n) => {
    n && e();
  });
}
function qn(e, t) {
  if (!qe || !window.IntersectionObserver)
    return;
  const n = new IntersectionObserver(
    (o) => {
      t(o[0].intersectionRatio > 0);
    },
    { root: document.body }
  ), i = () => {
    e.value && n.observe(e.value);
  }, a = () => {
    e.value && n.unobserve(e.value);
  };
  Xe(a), wt(a), Je(i);
}
const [Jn, Qn] = z("sticky"), eo = {
  zIndex: P,
  position: re("top"),
  container: Object,
  offsetTop: j(0),
  offsetBottom: j(0)
};
var to = A({
  name: Jn,
  props: eo,
  emits: ["scroll", "change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const i = x(), a = Tt(i), o = oe({
      fixed: !1,
      width: 0,
      height: 0,
      transform: 0
    }), l = E(() => nt(e.position === "top" ? e.offsetTop : e.offsetBottom)), u = E(() => {
      const {
        fixed: v,
        height: C,
        width: B
      } = o;
      if (v)
        return {
          width: `${B}px`,
          height: `${C}px`
        };
    }), c = E(() => {
      if (!o.fixed)
        return;
      const v = Z(dn(e.zIndex), {
        width: `${o.width}px`,
        height: `${o.height}px`,
        [e.position]: `${l.value}px`
      });
      return o.transform && (v.transform = `translate3d(0, ${o.transform}px, 0)`), v;
    }), s = (v) => t("scroll", {
      scrollTop: v,
      isFixed: o.fixed
    }), d = () => {
      if (!i.value || Be(i))
        return;
      const {
        container: v,
        position: C
      } = e, B = le(i), y = Qe(window);
      if (o.width = B.width, o.height = B.height, C === "top")
        if (v) {
          const O = le(v), p = O.bottom - l.value - o.height;
          o.fixed = l.value > B.top && O.bottom > 0, o.transform = p < 0 ? p : 0;
        } else
          o.fixed = l.value > B.top;
      else {
        const {
          clientHeight: O
        } = document.documentElement;
        if (v) {
          const p = le(v), M = O - p.top - l.value - o.height;
          o.fixed = O - l.value < B.bottom && O > p.top, o.transform = M < 0 ? -M : 0;
        } else
          o.fixed = O - l.value < B.bottom;
      }
      s(y);
    };
    return D(() => o.fixed, (v) => t("change", v)), ye("scroll", d, {
      target: a,
      passive: !0
    }), qn(i, d), () => {
      var v;
      return h("div", {
        ref: i,
        style: u.value
      }, [h("div", {
        class: Qn({
          fixed: o.fixed
        }),
        style: c.value
      }, [(v = n.default) == null ? void 0 : v.call(n)])]);
    };
  }
});
const no = ie(to), [oo, vt] = z("badge"), io = {
  dot: Boolean,
  max: P,
  tag: re("div"),
  color: String,
  offset: Array,
  content: P,
  showZero: X,
  position: re("top-right")
};
var ao = A({
  name: oo,
  props: io,
  setup(e, {
    slots: t
  }) {
    const n = () => {
      if (t.content)
        return !0;
      const {
        content: l,
        showZero: u
      } = e;
      return ee(l) && l !== "" && (u || l !== 0 && l !== "0");
    }, i = () => {
      const {
        dot: l,
        max: u,
        content: c
      } = e;
      if (!l && n())
        return t.content ? t.content() : ee(u) && pt(c) && +c > u ? `${u}+` : c;
    }, a = E(() => {
      const l = {
        background: e.color
      };
      if (e.offset) {
        const [u, c] = e.offset;
        t.default ? (l.top = K(c), typeof u == "number" ? l.right = K(-u) : l.right = u.startsWith("-") ? u.replace("-", "") : `-${u}`) : (l.marginTop = K(c), l.marginLeft = K(u));
      }
      return l;
    }), o = () => {
      if (n() || e.dot)
        return h("div", {
          class: vt([e.position, {
            dot: e.dot,
            fixed: !!t.default
          }]),
          style: a.value
        }, [i()]);
    };
    return () => {
      if (t.default) {
        const {
          tag: l
        } = e;
        return h(l, {
          class: vt("wrapper")
        }, {
          default: () => [t.default(), o()]
        });
      }
      return o();
    };
  }
});
const lo = ie(ao), [co, ht] = z("tab");
var ro = A({
  name: co,
  props: {
    id: String,
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: P,
    shrink: Boolean,
    isActive: Boolean,
    disabled: Boolean,
    controls: String,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    showZeroBadge: X
  },
  setup(e, {
    slots: t
  }) {
    const n = E(() => {
      const a = {}, {
        type: o,
        color: l,
        disabled: u,
        isActive: c,
        activeColor: s,
        inactiveColor: d
      } = e;
      l && o === "card" && (a.borderColor = l, u || (c ? a.backgroundColor = l : a.color = l));
      const C = c ? s : d;
      return C && (a.color = C), a;
    }), i = () => {
      const a = h("span", {
        class: ht("text", {
          ellipsis: !e.scrollable
        })
      }, [t.title ? t.title() : e.title]);
      return e.dot || ee(e.badge) && e.badge !== "" ? h(lo, {
        dot: e.dot,
        content: e.badge,
        showZero: e.showZeroBadge
      }, {
        default: () => [a]
      }) : a;
    };
    return () => h("div", {
      id: e.id,
      role: "tab",
      class: [ht([e.type, {
        grow: e.scrollable && !e.shrink,
        shrink: e.shrink,
        active: e.isActive,
        disabled: e.disabled
      }])],
      style: n.value,
      tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
      "aria-selected": e.isActive,
      "aria-disabled": e.disabled || void 0,
      "aria-controls": e.controls
    }, [i()]);
  }
});
const [At, Te] = z("swipe"), uo = {
  loop: X,
  width: P,
  height: P,
  vertical: Boolean,
  autoplay: j(0),
  duration: j(500),
  touchable: X,
  lazyRender: Boolean,
  initialSwipe: j(0),
  indicatorColor: String,
  showIndicators: X,
  stopPropagation: X
}, _t = Symbol(At);
var so = A({
  name: At,
  props: uo,
  emits: ["change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const i = x(), a = x(), o = oe({
      rect: null,
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      swiping: !1
    }), l = $t(), {
      children: u,
      linkChildren: c
    } = De(_t), s = E(() => u.length), d = E(() => o[e.vertical ? "height" : "width"]), v = E(() => e.vertical ? l.deltaY.value : l.deltaX.value), C = E(() => o.rect ? (e.vertical ? o.rect.height : o.rect.width) - d.value * s.value : 0), B = E(() => Math.ceil(Math.abs(C.value) / d.value)), y = E(() => s.value * d.value), O = E(() => (o.active + s.value) % s.value), p = E(() => {
      const b = e.vertical ? "vertical" : "horizontal";
      return l.direction.value === b;
    }), M = E(() => {
      const b = {
        transitionDuration: `${o.swiping ? 0 : e.duration}ms`,
        transform: `translate${e.vertical ? "Y" : "X"}(${o.offset}px)`
      };
      if (d.value) {
        const I = e.vertical ? "height" : "width", k = e.vertical ? "width" : "height";
        b[I] = `${y.value}px`, b[k] = e[k] ? `${e[k]}px` : "";
      }
      return b;
    }), W = (b) => {
      const {
        active: I
      } = o;
      return b ? e.loop ? ce(I + b, -1, s.value) : ce(I + b, 0, B.value) : I;
    }, _ = (b, I = 0) => {
      let k = b * d.value;
      e.loop || (k = Math.min(k, -C.value));
      let H = I - k;
      return e.loop || (H = ce(H, C.value, 0)), H;
    }, R = ({
      pace: b = 0,
      offset: I = 0,
      emitChange: k
    }) => {
      if (s.value <= 1)
        return;
      const {
        active: H
      } = o, r = W(b), g = _(r, I);
      if (e.loop) {
        if (u[0] && g !== C.value) {
          const T = g < C.value;
          u[0].setOffset(T ? y.value : 0);
        }
        if (u[s.value - 1] && g !== 0) {
          const T = g > 0;
          u[s.value - 1].setOffset(T ? -y.value : 0);
        }
      }
      o.active = r, o.offset = g, k && r !== H && t("change", O.value);
    }, L = () => {
      o.swiping = !0, o.active <= -1 ? R({
        pace: s.value
      }) : o.active >= s.value && R({
        pace: -s.value
      });
    }, G = () => {
      L(), l.reset(), se(() => {
        o.swiping = !1, R({
          pace: -1,
          emitChange: !0
        });
      });
    }, Y = () => {
      L(), l.reset(), se(() => {
        o.swiping = !1, R({
          pace: 1,
          emitChange: !0
        });
      });
    };
    let w;
    const S = () => clearTimeout(w), f = () => {
      S(), e.autoplay > 0 && s.value > 1 && (w = setTimeout(() => {
        Y(), f();
      }, +e.autoplay));
    }, m = (b = +e.initialSwipe) => {
      if (!i.value)
        return;
      const I = () => {
        var k, H;
        if (!Be(i)) {
          const r = {
            width: i.value.offsetWidth,
            height: i.value.offsetHeight
          };
          o.rect = r, o.width = +((k = e.width) != null ? k : r.width), o.height = +((H = e.height) != null ? H : r.height);
        }
        s.value && (b = Math.min(s.value - 1, b)), o.active = b, o.swiping = !0, o.offset = _(b), u.forEach((r) => {
          r.setOffset(0);
        }), f();
      };
      Be(i) ? Q().then(I) : I();
    }, $ = () => m(o.active);
    let q;
    const J = (b) => {
      !e.touchable || (l.start(b), q = Date.now(), S(), L());
    }, ue = (b) => {
      e.touchable && o.swiping && (l.move(b), p.value && (!e.loop && (o.active === 0 && v.value > 0 || o.active === s.value - 1 && v.value < 0) || (et(b, e.stopPropagation), R({
        offset: v.value
      }))));
    }, we = () => {
      if (!e.touchable || !o.swiping)
        return;
      const b = Date.now() - q, I = v.value / b;
      if ((Math.abs(I) > 0.25 || Math.abs(v.value) > d.value / 2) && p.value) {
        const H = e.vertical ? l.offsetY.value : l.offsetX.value;
        let r = 0;
        e.loop ? r = H > 0 ? v.value > 0 ? -1 : 1 : 0 : r = -Math[v.value > 0 ? "ceil" : "floor"](v.value / d.value), R({
          pace: r,
          emitChange: !0
        });
      } else
        v.value && R({
          pace: 0
        });
      o.swiping = !1, f();
    }, Pe = (b, I = {}) => {
      L(), l.reset(), se(() => {
        let k;
        e.loop && b === s.value ? k = o.active === 0 ? 0 : b : k = b % s.value, I.immediate ? se(() => {
          o.swiping = !1;
        }) : o.swiping = !1, R({
          pace: k - o.active,
          emitChange: !0
        });
      });
    }, Ae = (b, I) => {
      const k = I === O.value, H = k ? {
        backgroundColor: e.indicatorColor
      } : void 0;
      return h("i", {
        style: H,
        class: Te("indicator", {
          active: k
        })
      }, null);
    }, _e = () => {
      if (n.indicator)
        return n.indicator({
          active: O.value,
          total: s.value
        });
      if (e.showIndicators && s.value > 1)
        return h("div", {
          class: Te("indicators", {
            vertical: e.vertical
          })
        }, [Array(s.value).fill("").map(Ae)]);
    };
    return ae({
      prev: G,
      next: Y,
      state: o,
      resize: $,
      swipeTo: Pe
    }), c({
      size: d,
      props: e,
      count: s,
      activeIndicator: O
    }), D(() => e.initialSwipe, (b) => m(+b)), D(s, () => m(o.active)), D(() => e.autoplay, f), D([tt, Et], $), D(ln(), (b) => {
      b === "visible" ? f() : S();
    }), ge(m), Ke(() => m(o.active)), Pt(() => m(o.active)), Xe(S), wt(S), ye("touchmove", ue, {
      target: a
    }), () => {
      var b;
      return h("div", {
        ref: i,
        class: Te()
      }, [h("div", {
        ref: a,
        style: M.value,
        class: Te("track", {
          vertical: e.vertical
        }),
        onTouchstartPassive: J,
        onTouchend: we,
        onTouchcancel: we
      }, [(b = n.default) == null ? void 0 : b.call(n)]), _e()]);
    };
  }
});
const fo = ie(so), [vo, mt] = z("tabs");
var ho = A({
  name: vo,
  props: {
    count: ne(Number),
    inited: Boolean,
    animated: Boolean,
    duration: ne(P),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: ne(Number)
  },
  emits: ["change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const i = x(), a = (u) => t("change", u), o = () => {
      var u;
      const c = (u = n.default) == null ? void 0 : u.call(n);
      return e.animated || e.swipeable ? h(fo, {
        ref: i,
        loop: !1,
        class: mt("track"),
        duration: +e.duration * 1e3,
        touchable: e.swipeable,
        lazyRender: e.lazyRender,
        showIndicators: !1,
        onChange: a
      }, {
        default: () => [c]
      }) : c;
    }, l = (u) => {
      const c = i.value;
      c && c.state.active !== u && c.swipeTo(u, {
        immediate: !e.inited
      });
    };
    return D(() => e.currentIndex, l), ge(() => {
      l(e.currentIndex);
    }), ae({
      swipeRef: i
    }), () => h("div", {
      class: mt("content", {
        animated: e.animated || e.swipeable
      })
    }, [o()]);
  }
});
const [Rt, Ee] = z("tabs"), mo = {
  type: re("line"),
  color: String,
  border: Boolean,
  sticky: Boolean,
  shrink: Boolean,
  active: j(0),
  duration: j(0.3),
  animated: Boolean,
  ellipsis: X,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: j(0),
  background: String,
  lazyRender: X,
  lineWidth: P,
  lineHeight: P,
  beforeChange: Function,
  swipeThreshold: j(5),
  titleActiveColor: String,
  titleInactiveColor: String
}, Nt = Symbol(Rt);
var go = A({
  name: Rt,
  props: mo,
  emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let i, a, o;
    const l = x(), u = x(), c = x(), s = x(), d = Dt(), v = Tt(l), [C, B] = Zn(), {
      children: y,
      linkChildren: O
    } = De(Nt), p = oe({
      inited: !1,
      position: "",
      lineStyle: {},
      currentIndex: -1
    }), M = E(() => y.length > e.swipeThreshold || !e.ellipsis || e.shrink), W = E(() => ({
      borderColor: e.color,
      background: e.background
    })), _ = (r, g) => {
      var T;
      return (T = r.name) != null ? T : g;
    }, R = E(() => {
      const r = y[p.currentIndex];
      if (r)
        return _(r, p.currentIndex);
    }), L = E(() => nt(e.offsetTop)), G = E(() => e.sticky ? L.value + i : 0), Y = (r) => {
      const g = u.value, T = C.value;
      if (!M.value || !g || !T || !T[p.currentIndex])
        return;
      const F = T[p.currentIndex].$el, N = F.offsetLeft - (g.offsetWidth - F.offsetWidth) / 2;
      jn(g, N, r ? 0 : +e.duration);
    }, w = () => {
      const r = p.inited;
      Q(() => {
        const g = C.value;
        if (!g || !g[p.currentIndex] || e.type !== "line" || Be(l.value))
          return;
        const T = g[p.currentIndex].$el, {
          lineWidth: F,
          lineHeight: N
        } = e, U = T.offsetLeft + T.offsetWidth / 2, te = {
          width: K(F),
          backgroundColor: e.color,
          transform: `translateX(${U}px) translateX(-50%)`
        };
        if (r && (te.transitionDuration = `${e.duration}s`), ee(N)) {
          const it = K(N);
          te.height = it, te.borderRadius = it;
        }
        p.lineStyle = te;
      });
    }, S = (r) => {
      const g = r < p.currentIndex ? -1 : 1;
      for (; r >= 0 && r < y.length; ) {
        if (!y[r].disabled)
          return r;
        r += g;
      }
    }, f = (r, g) => {
      const T = S(r);
      if (!ee(T))
        return;
      const F = y[T], N = _(F, T), U = p.currentIndex !== null;
      p.currentIndex !== T && (p.currentIndex = T, g || Y(), w()), N !== e.active && (t("update:active", N), U && t("change", N, F.title)), o && !e.scrollspy && rn(Math.ceil(ct(l.value) - L.value));
    }, m = (r, g) => {
      const T = y.find((N, U) => _(N, U) === r), F = T ? y.indexOf(T) : 0;
      f(F, g);
    }, $ = (r = !1) => {
      if (e.scrollspy) {
        const g = y[p.currentIndex].$el;
        if (g && v.value) {
          const T = ct(g, v.value) - G.value;
          a = !0, Un(v.value, T, r ? 0 : +e.duration, () => {
            a = !1;
          });
        }
      }
    }, q = (r, g, T) => {
      const {
        title: F,
        disabled: N
      } = y[g], U = _(y[g], g);
      N || (Bn(e.beforeChange, {
        args: [U],
        done: () => {
          f(g), $();
        }
      }), Kn(r)), t("clickTab", {
        name: U,
        title: F,
        event: T,
        disabled: N
      });
    }, J = (r) => {
      o = r.isFixed, t("scroll", r);
    }, ue = (r) => {
      Q(() => {
        m(r), $(!0);
      });
    }, we = () => {
      for (let r = 0; r < y.length; r++) {
        const {
          top: g
        } = le(y[r].$el);
        if (g > G.value)
          return r === 0 ? 0 : r - 1;
      }
      return y.length - 1;
    }, Pe = () => {
      if (e.scrollspy && !a) {
        const r = we();
        f(r);
      }
    }, Ae = () => y.map((r, g) => h(ro, Ze({
      key: r.id,
      id: `${d}-${g}`,
      ref: B(g),
      type: e.type,
      color: e.color,
      style: r.titleStyle,
      class: r.titleClass,
      shrink: e.shrink,
      isActive: g === p.currentIndex,
      controls: r.id,
      scrollable: M.value,
      activeColor: e.titleActiveColor,
      inactiveColor: e.titleInactiveColor,
      onClick: (T) => q(r, g, T)
    }, Le(r, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
      title: r.$slots.title
    })), _e = () => {
      if (e.type === "line" && y.length)
        return h("div", {
          class: Ee("line"),
          style: p.lineStyle
        }, null);
    }, b = () => {
      var r, g, T;
      const {
        type: F,
        border: N,
        sticky: U
      } = e, te = [h("div", {
        ref: U ? void 0 : c,
        class: [Ee("wrap"), {
          [xn]: F === "line" && N
        }]
      }, [h("div", {
        ref: u,
        role: "tablist",
        class: Ee("nav", [F, {
          shrink: e.shrink,
          complete: M.value
        }]),
        style: W.value,
        "aria-orientation": "horizontal"
      }, [(r = n["nav-left"]) == null ? void 0 : r.call(n), Ae(), _e(), (g = n["nav-right"]) == null ? void 0 : g.call(n)])]), (T = n["nav-bottom"]) == null ? void 0 : T.call(n)];
      return U ? h("div", {
        ref: c
      }, [te]) : te;
    };
    D([() => e.color, tt], w), D(() => e.active, (r) => {
      r !== R.value && m(r);
    }), D(() => y.length, () => {
      p.inited && (m(e.active), w(), Q(() => {
        Y(!0);
      }));
    });
    const I = () => {
      m(e.active, !0), Q(() => {
        p.inited = !0, c.value && (i = le(c.value).height), Y(!0);
      });
    }, k = (r, g) => t("rendered", r, g);
    return ae({
      resize: () => {
        w(), Q(() => {
          var r, g;
          return (g = (r = s.value) == null ? void 0 : r.swipeRef.value) == null ? void 0 : g.resize();
        });
      },
      scrollTo: ue
    }), Ke(w), Pt(w), Je(I), ye("scroll", Pe, {
      target: v,
      passive: !0
    }), O({
      id: d,
      props: e,
      setLine: w,
      onRendered: k,
      currentName: R,
      scrollIntoView: Y
    }), () => h("div", {
      ref: l,
      class: Ee([e.type])
    }, [e.sticky ? h(no, {
      container: l.value,
      offsetTop: L.value,
      onScroll: J
    }, {
      default: () => [b()]
    }) : b(), h(ho, {
      ref: s,
      count: y.length,
      inited: p.inited,
      animated: e.animated,
      duration: e.duration,
      swipeable: e.swipeable,
      lazyRender: e.lazyRender,
      currentIndex: p.currentIndex,
      onChange: f
    }, {
      default: () => {
        var r;
        return [(r = n.default) == null ? void 0 : r.call(n)];
      }
    })]);
  }
});
const bo = Symbol(), [yo, wo] = z("swipe-item");
var po = A({
  name: yo,
  setup(e, {
    slots: t
  }) {
    let n;
    const i = oe({
      offset: 0,
      inited: !1,
      mounted: !1
    }), {
      parent: a,
      index: o
    } = Ie(_t);
    if (!a) {
      process.env.NODE_ENV !== "production" && console.error("[Vant] <SwipeItem> must be a child component of <Swipe>.");
      return;
    }
    const l = E(() => {
      const s = {}, {
        vertical: d
      } = a.props;
      return a.size.value && (s[d ? "height" : "width"] = `${a.size.value}px`), i.offset && (s.transform = `translate${d ? "Y" : "X"}(${i.offset}px)`), s;
    }), u = E(() => {
      const {
        loop: s,
        lazyRender: d
      } = a.props;
      if (!d || n)
        return !0;
      if (!i.mounted)
        return !1;
      const v = a.activeIndicator.value, C = a.count.value - 1, B = v === 0 && s ? C : v - 1, y = v === C && s ? 0 : v + 1;
      return n = o.value === v || o.value === B || o.value === y, n;
    }), c = (s) => {
      i.offset = s;
    };
    return ge(() => {
      Q(() => {
        i.mounted = !0;
      });
    }), ae({
      setOffset: c
    }), () => {
      var s;
      return h("div", {
        class: wo(),
        style: l.value
      }, [u.value ? (s = t.default) == null ? void 0 : s.call(t) : null]);
    };
  }
});
const Co = ie(po), [To, ze] = z("tab"), Eo = Z({}, Xn, {
  dot: Boolean,
  name: P,
  badge: P,
  title: String,
  disabled: Boolean,
  titleClass: qt,
  titleStyle: [String, Object],
  showZeroBadge: X
});
var xo = A({
  name: To,
  props: Eo,
  setup(e, {
    slots: t
  }) {
    const n = Dt(), i = x(!1), {
      parent: a,
      index: o
    } = Ie(Nt);
    if (!a) {
      process.env.NODE_ENV !== "production" && console.error("[Vant] <Tab> must be a child component of <Tabs>.");
      return;
    }
    const l = () => {
      var d;
      return (d = e.name) != null ? d : o.value;
    }, u = () => {
      i.value = !0, a.props.lazyRender && Q(() => {
        a.onRendered(l(), e.title);
      });
    }, c = E(() => {
      const d = l() === a.currentName.value;
      return d && !i.value && u(), d;
    }), s = x(!c.value);
    return D(c, (d) => {
      d ? s.value = !1 : se(() => {
        s.value = !0;
      });
    }), D(() => e.title, () => {
      a.setLine(), a.scrollIntoView();
    }), yt(bo, c), () => {
      var d;
      const v = `${a.id}-${o.value}`, {
        animated: C,
        swipeable: B,
        scrollspy: y,
        lazyRender: O
      } = a.props;
      if (!t.default && !C)
        return;
      const p = y || c.value;
      if (C || B)
        return h(Co, {
          id: n,
          role: "tabpanel",
          class: ze("panel-wrapper", {
            inactive: s.value
          }),
          tabindex: c.value ? 0 : -1,
          "aria-hidden": !c.value,
          "aria-labelledby": v
        }, {
          default: () => {
            var _;
            return [h("div", {
              class: ze("panel")
            }, [(_ = t.default) == null ? void 0 : _.call(t)])];
          }
        });
      const W = i.value || y || !O ? (d = t.default) == null ? void 0 : d.call(t) : null;
      return ae({
        id: n
      }), jt(h("div", {
        id: n,
        role: "tabpanel",
        class: ze("panel"),
        tabindex: p ? 0 : -1,
        "aria-labelledby": v
      }, [W]), [[Ut, p]]);
    };
  }
});
const So = ie(xo), Bo = ie(go), [Oo] = z("picker-toolbar"), Mt = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
};
var $o = A({
  name: Oo,
  props: Mt,
  emits: ["confirm", "cancel"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const i = () => {
      if (n.title)
        return n.title();
      if (e.title)
        return h("div", {
          class: [V("title"), "van-ellipsis"]
        }, [e.title]);
    }, a = () => t("cancel"), o = () => t("confirm"), l = () => {
      const c = e.cancelButtonText || $e("cancel");
      return h("button", {
        type: "button",
        class: [V("cancel"), Oe],
        onClick: a
      }, [n.cancel ? n.cancel() : c]);
    }, u = () => {
      const c = e.confirmButtonText || $e("confirm");
      return h("button", {
        type: "button",
        class: [V("confirm"), Oe],
        onClick: o
      }, [n.confirm ? n.confirm() : c]);
    };
    return () => h("div", {
      class: V("toolbar")
    }, [n.toolbar ? n.toolbar() : [l(), i(), u()]]);
  }
});
const [Ft, He] = z("picker-group"), zt = Symbol(Ft), ko = Z({
  tabs: Se()
}, Mt);
A({
  name: Ft,
  props: ko,
  emits: ["confirm", "cancel"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      children: i,
      linkChildren: a
    } = De(zt);
    a();
    const o = () => {
      t("confirm", i.map((u) => u.confirm()));
    }, l = () => t("cancel");
    return () => {
      var u;
      const c = (u = n.default) == null ? void 0 : u.call(n);
      return h("div", {
        class: He()
      }, [h($o, Ze(e, {
        onConfirm: o,
        onCancel: l
      }), null), h(Bo, {
        shrink: !0,
        class: He("tabs"),
        animated: !0
      }, {
        default: () => [e.tabs.map((s, d) => h(So, {
          title: s,
          titleClass: He("tab-title")
        }, {
          default: () => [c == null ? void 0 : c[d]]
        }))]
      })]);
    };
  }
});
const Io = Z({
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  optionHeight: j(44),
  showToolbar: X,
  swipeDuration: j(1e3),
  visibleOptionNum: j(6)
}, ot), Do = Z({}, Io, {
  columns: Se(),
  modelValue: Se(),
  toolbarPosition: re("top"),
  columnsFieldNames: Object
}), ve = A({
  name: "Picker",
  props: Do,
  emits: ["confirm", "cancel", "change", "clickOption", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const i = x(), a = x(e.modelValue.slice(0)), {
      parent: o
    } = Ie(zt), {
      children: l,
      linkChildren: u
    } = De(It);
    u();
    const c = E(() => In(e.columnsFieldNames)), s = E(() => nt(e.optionHeight)), d = E(() => On(e.columns, c.value)), v = E(() => {
      const {
        columns: f
      } = e;
      switch (d.value) {
        case "multiple":
          return f;
        case "cascade":
          return $n(f, c.value, a);
        default:
          return [f];
      }
    }), C = E(() => v.value.some((f) => f.length)), B = E(() => v.value.map((f, m) => We(f, a.value[m], c.value))), y = (f, m) => {
      if (a.value[f] !== m) {
        const $ = a.value.slice(0);
        $[f] = m, a.value = $;
      }
    }, O = () => ({
      selectedValues: a.value.slice(0),
      selectedOptions: B.value
    }), p = (f, m) => {
      y(m, f), d.value === "cascade" && a.value.forEach(($, q) => {
        const J = v.value[q];
        st(J, $, c.value) || y(q, J.length ? J[0][c.value.value] : void 0);
      }), t("change", Z({
        columnIndex: m
      }, O()));
    }, M = (f, m) => t("clickOption", Z({
      columnIndex: m,
      currentOption: f
    }, O())), W = () => {
      l.forEach((m) => m.stopMomentum());
      const f = O();
      return t("confirm", f), f;
    }, _ = () => t("cancel", O()), R = () => v.value.map((f, m) => h(zn, {
      value: a.value[m],
      fields: c.value,
      options: f,
      readonly: e.readonly,
      allowHtml: e.allowHtml,
      optionHeight: s.value,
      swipeDuration: e.swipeDuration,
      visibleOptionNum: e.visibleOptionNum,
      onChange: ($) => p($, m),
      onClickOption: ($) => M($, m)
    }, {
      option: n.option
    })), L = (f) => {
      if (C.value) {
        const m = {
          height: `${s.value}px`
        }, $ = {
          backgroundSize: `100% ${(f - s.value) / 2}px`
        };
        return [h("div", {
          class: V("mask"),
          style: $
        }, null), h("div", {
          class: [Sn, V("frame")],
          style: m
        }, null)];
      }
    }, G = () => {
      const f = s.value * +e.visibleOptionNum, m = {
        height: `${f}px`
      };
      return h("div", {
        ref: i,
        class: V("columns"),
        style: m
      }, [R(), L(f)]);
    }, Y = () => {
      if (e.showToolbar && !o)
        return h(Yn, Ze(Le(e, Ln), {
          onConfirm: W,
          onCancel: _
        }), Le(n, Vn));
    };
    D(v, (f) => {
      f.forEach((m, $) => {
        m.length && !st(m, a.value[$], c.value) && y($, Ot(m)[c.value.value]);
      });
    }, {
      immediate: !0
    });
    let w;
    return D(() => e.modelValue, (f) => {
      !Re(f, a.value) && !Re(f, w) && (a.value = f.slice(0));
    }, {
      deep: !0
    }), D(a, (f) => {
      Re(f, e.modelValue) || (w = f.slice(0), t("update:modelValue", w));
    }, {
      immediate: !0
    }), ye("touchmove", et, {
      target: i
    }), ae({
      confirm: W,
      getSelectedOptions: () => B.value
    }), () => {
      var f, m;
      return h("div", {
        class: V()
      }, [e.toolbarPosition === "top" ? Y() : null, e.loading ? h(Nn, {
        class: V("loading")
      }, null) : null, (f = n["columns-top"]) == null ? void 0 : f.call(n), G(), (m = n["columns-bottom"]) == null ? void 0 : m.call(n), e.toolbarPosition === "bottom" ? Y() : null]);
    };
  }
});
ve.install = function(e) {
  e.component(ve.name, ve);
};
const Po = {
  title: "Picker \u9009\u62E9\u5668",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(e) {
    e.component(ve.name, ve);
  }
}, Ao = {
  text: {
    type: String,
    default: "hhui tag"
  },
  test: {
    type: Object
  }
};
const he = A({
  name: "Tag",
  props: Ao,
  emits: [],
  setup(e, t) {
    return () => h("div", {
      class: "hhui-tag"
    }, [e.text]);
  }
});
he.install = function(e) {
  e.component(he.name, he);
};
const _o = {
  title: "Tag \u6807\u7B7E",
  category: "\u901A\u7528",
  status: "100%",
  install(e) {
    e.component(he.name, he);
  }
}, Ro = [
  Xt,
  Po,
  _o
], Fo = {
  version: "1.0.8",
  install(e) {
    Ro.forEach((t) => e.use(t));
  }
};
export {
  de as Button,
  ve as Picker,
  he as Tag,
  Fo as default
};
