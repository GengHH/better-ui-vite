import { inject as ht, getCurrentInstance as Oe, onUnmounted as mt, computed as x, ref as p, reactive as oe, onDeactivated as Ue, isRef as zt, watch as D, provide as gt, onMounted as he, nextTick as Q, onActivated as We, unref as Ee, isVNode as Ft, createVNode as h, defineComponent as z, watchEffect as Ht, onBeforeUpdate as Vt, onBeforeUnmount as bt, mergeProps as Xe, withDirectives as Lt, vShow as Yt } from "vue";
const ee = (e) => e != null, Fe = (e) => typeof e == "function", Ke = (e) => e !== null && typeof e == "object", jt = (e) => Ke(e) && Fe(e.then) && Fe(e.catch), yt = (e) => typeof e == "number" || /^\d+(\.\d+)?$/.test(e), Ut = () => Ze ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function Wt() {
}
const Z = Object.assign, Ze = typeof window < "u";
function ot(e, t) {
  const n = t.split(".");
  let i = e;
  return n.forEach((a) => {
    var o;
    i = Ke(i) && (o = i[a]) != null ? o : "";
  }), i;
}
function He(e, t, n) {
  return t.reduce((i, a) => ((!n || e[a] !== void 0) && (i[a] = e[a]), i), {});
}
const _e = (e, t) => JSON.stringify(e) === JSON.stringify(t), Xt = null, P = [Number, String], X = {
  type: Boolean,
  default: !0
}, ne = (e) => ({
  type: e,
  required: !0
}), xe = () => ({
  type: Array,
  default: () => []
}), j = (e) => ({
  type: P,
  default: e
}), re = (e) => ({
  type: String,
  default: e
});
var me = typeof window < "u";
function ve(e) {
  return me ? requestAnimationFrame(e) : -1;
}
function se(e) {
  ve(() => ve(e));
}
var Kt = (e) => e === window, it = (e, t) => ({
  top: 0,
  left: 0,
  right: e,
  bottom: t,
  width: e,
  height: t
}), le = (e) => {
  const t = Ee(e);
  if (Kt(t)) {
    const n = t.innerWidth, i = t.innerHeight;
    return it(n, i);
  }
  return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : it(0, 0);
};
function $e(e) {
  const t = ht(e, null);
  if (t) {
    const n = Oe(), { link: i, unlink: a, internalChildren: o } = t;
    i(n), mt(() => a(n));
    const l = x(() => o.indexOf(n));
    return {
      parent: t,
      index: l
    };
  }
  return {
    parent: null,
    index: p(-1)
  };
}
function Zt(e) {
  const t = [], n = (i) => {
    Array.isArray(i) && i.forEach((a) => {
      var o;
      Ft(a) && (t.push(a), (o = a.component) != null && o.subTree && (t.push(a.component.subTree), n(a.component.subTree.children)), a.children && n(a.children));
    });
  };
  return n(e), t;
}
function Gt(e, t, n) {
  const i = Zt(e.subTree.children);
  n.sort(
    (o, l) => i.indexOf(o.vnode) - i.indexOf(l.vnode)
  );
  const a = n.map((o) => o.proxy);
  t.sort((o, l) => {
    const u = a.indexOf(o), c = a.indexOf(l);
    return u - c;
  });
}
function ke(e) {
  const t = oe([]), n = oe([]), i = Oe();
  return {
    children: t,
    linkChildren: (o) => {
      gt(
        e,
        Object.assign(
          {
            link: (c) => {
              c.proxy && (n.push(c), t.push(c.proxy), Gt(i, t, n));
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
function Ge(e) {
  let t;
  he(() => {
    e(), Q(() => {
      t = !0;
    });
  }), We(() => {
    t && e();
  });
}
function ge(e, t, n = {}) {
  if (!me)
    return;
  const { target: i = window, passive: a = !1, capture: o = !1 } = n;
  let l;
  const u = (s) => {
    const d = Ee(s);
    d && !l && (d.addEventListener(e, t, {
      capture: o,
      passive: a
    }), l = !0);
  }, c = (s) => {
    const d = Ee(s);
    d && l && (d.removeEventListener(e, t, o), l = !1);
  };
  mt(() => c(i)), Ue(() => c(i)), Ge(() => u(i)), zt(i) && D(i, (s, d) => {
    c(d), u(s);
  });
}
var ye, Ae;
function qt() {
  if (!ye && (ye = p(0), Ae = p(0), me)) {
    const e = () => {
      ye.value = window.innerWidth, Ae.value = window.innerHeight;
    };
    e(), window.addEventListener("resize", e, { passive: !0 }), window.addEventListener("orientationchange", e, { passive: !0 });
  }
  return { width: ye, height: Ae };
}
var Jt = /scroll|auto|overlay/i, wt = me ? window : void 0;
function Qt(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function en(e, t = wt) {
  let n = e;
  for (; n && n !== t && Qt(n); ) {
    const { overflowY: i } = window.getComputedStyle(n);
    if (Jt.test(i))
      return n;
    n = n.parentNode;
  }
  return t;
}
function Ct(e, t = wt) {
  const n = p();
  return he(() => {
    e.value && (n.value = en(e.value, t));
  }), n;
}
var we;
function tn() {
  if (!we && (we = p("visible"), me)) {
    const e = () => {
      we.value = document.hidden ? "hidden" : "visible";
    };
    e(), window.addEventListener("visibilitychange", e);
  }
  return we;
}
function qe(e) {
  const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(t, 0);
}
function Ve(e, t) {
  "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t);
}
function nn() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function on(e) {
  Ve(window, e), Ve(document.body, e);
}
function at(e, t) {
  if (e === window)
    return 0;
  const n = t ? qe(t) : nn();
  return le(e).top + n;
}
Ut();
const an = (e) => e.stopPropagation();
function Je(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && an(e);
}
function pe(e) {
  const t = Ee(e);
  if (!t)
    return !1;
  const n = window.getComputedStyle(t), i = n.display === "none", a = t.offsetParent === null && n.position !== "fixed";
  return i || a;
}
const { width: Qe, height: Tt } = qt();
function K(e) {
  if (ee(e))
    return yt(e) ? `${e}px` : String(e);
}
function ln(e) {
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
function cn(e) {
  const t = {};
  return e !== void 0 && (t.zIndex = +e), t;
}
let Re;
function rn() {
  if (!Re) {
    const e = document.documentElement, t = e.style.fontSize || window.getComputedStyle(e).fontSize;
    Re = parseFloat(t);
  }
  return Re;
}
function un(e) {
  return e = e.replace(/rem/g, ""), +e * rn();
}
function sn(e) {
  return e = e.replace(/vw/g, ""), +e * Qe.value / 100;
}
function dn(e) {
  return e = e.replace(/vh/g, ""), +e * Tt.value / 100;
}
function et(e) {
  if (typeof e == "number")
    return e;
  if (Ze) {
    if (e.includes("rem"))
      return un(e);
    if (e.includes("vw"))
      return sn(e);
    if (e.includes("vh"))
      return dn(e);
  }
  return parseFloat(e);
}
const fn = /-(\w)/g, Et = (e) => e.replace(fn, (t, n) => n.toUpperCase()), ce = (e, t, n) => Math.min(Math.max(e, t), n), { hasOwnProperty: vn } = Object.prototype;
function hn(e, t, n) {
  const i = t[n];
  !ee(i) || (!vn.call(e, n) || !Ke(i) ? e[n] = i : e[n] = xt(Object(e[n]), i));
}
function xt(e, t) {
  return Object.keys(t).forEach((n) => {
    hn(e, t, n);
  }), e;
}
var mn = {
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
const lt = p("zh-CN"), ct = oe({
  "zh-CN": mn
}), gn = {
  messages() {
    return ct[lt.value];
  },
  use(e, t) {
    lt.value = e, this.add({ [e]: t });
  },
  add(e = {}) {
    xt(ct, e);
  }
};
var bn = gn;
function yn(e) {
  const t = Et(e) + ".";
  return (n, ...i) => {
    const a = bn.messages(), o = ot(a, t + n) || ot(a, n);
    return Fe(o) ? o(...i) : o;
  };
}
function Le(e, t) {
  return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce(
    (n, i) => n + Le(e, i),
    ""
  ) : Object.keys(t).reduce(
    (n, i) => n + (t[i] ? Le(e, i) : ""),
    ""
  ) : "";
}
function wn(e) {
  return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${Le(t, n)}`);
}
function F(e) {
  const t = `van-${e}`;
  return [
    t,
    wn(t),
    yn(t)
  ];
}
const pt = "van-hairline", Cn = `${pt}--top-bottom`, Tn = `${pt}-unset--top-bottom`, Se = "van-haptics-feedback";
function En(e, {
  args: t = [],
  done: n,
  canceled: i
}) {
  if (e) {
    const a = e.apply(null, t);
    jt(a) ? a.then((o) => {
      o ? n() : i && i();
    }).catch(Wt) : a ? n() : i && i();
  } else
    n();
}
function ie(e) {
  return e.install = (t) => {
    const { name: n } = e;
    n && (t.component(n, e), t.component(Et(`-${n}`), e));
  }, e;
}
const [ko, V, Be] = F("picker"), St = (e) => e.find((t) => !t.disabled) || e[0];
function xn(e, t) {
  const n = e[0];
  if (n) {
    if (Array.isArray(n))
      return "multiple";
    if (t.children in n)
      return "cascade";
  }
  return "default";
}
function Ye(e, t) {
  t = ce(t, 0, e.length);
  for (let n = t; n < e.length; n++)
    if (!e[n].disabled)
      return n;
  for (let n = t - 1; n >= 0; n--)
    if (!e[n].disabled)
      return n;
  return 0;
}
const rt = (e, t, n) => t !== void 0 && !!e.find((i) => i[n.value] === t);
function je(e, t, n) {
  const i = e.findIndex((o) => o[n.value] === t), a = Ye(e, i);
  return e[a];
}
function pn(e, t, n) {
  const i = [];
  let a = {
    [t.children]: e
  }, o = 0;
  for (; a && a[t.children]; ) {
    const l = a[t.children], u = n.value[o];
    if (a = ee(u) ? je(l, u, t) : void 0, !a && l.length) {
      const c = St(l)[t.value];
      a = je(l, c, t);
    }
    o++, i.push(l);
  }
  return i;
}
function Sn(e) {
  const { transform: t } = window.getComputedStyle(e), n = t.slice(7, t.length - 1).split(", ")[5];
  return Number(n);
}
function Bn(e) {
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
  const t = Oe();
  t && Z(t.proxy, e);
}
const [On, de] = F("loading"), $n = Array(12).fill(null).map((e, t) => h("i", {
  class: de("line", String(t + 1))
}, null)), kn = h("svg", {
  class: de("circular"),
  viewBox: "25 25 50 50"
}, [h("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), In = {
  size: P,
  type: re("circular"),
  color: String,
  vertical: Boolean,
  textSize: P,
  textColor: String
};
var Dn = z({
  name: On,
  props: In,
  setup(e, {
    slots: t
  }) {
    const n = x(() => Z({
      color: e.color
    }, ln(e.size))), i = () => {
      const o = e.type === "spinner" ? $n : kn;
      return h("span", {
        class: de("spinner", e.type),
        style: n.value
      }, [t.icon ? t.icon() : o]);
    }, a = () => {
      var o;
      if (t.default)
        return h("span", {
          class: de("text"),
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
        class: de([o, {
          vertical: l
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [i(), a()]);
    };
  }
});
const Pn = ie(Dn);
function _n(e, t) {
  return e > t ? "horizontal" : t > e ? "vertical" : "";
}
function Bt() {
  const e = p(0), t = p(0), n = p(0), i = p(0), a = p(0), o = p(0), l = p(""), u = () => l.value === "vertical", c = () => l.value === "horizontal", s = () => {
    n.value = 0, i.value = 0, a.value = 0, o.value = 0, l.value = "";
  };
  return {
    move: (T) => {
      const B = T.touches[0];
      n.value = (B.clientX < 0 ? 0 : B.clientX) - e.value, i.value = B.clientY - t.value, a.value = Math.abs(n.value), o.value = Math.abs(i.value);
      const y = 10;
      (!l.value || a.value < y && o.value < y) && (l.value = _n(a.value, o.value));
    },
    start: (T) => {
      s(), e.value = T.touches[0].clientX, t.value = T.touches[0].clientY;
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
const ut = 200, st = 300, An = 15, [Ot, Ne] = F("picker-column"), $t = Symbol(Ot), Rn = z({
  name: Ot,
  props: {
    value: P,
    fields: ne(Object),
    options: xe(),
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
    const c = p(), s = p(), d = p(0), v = p(0), T = Bt(), B = () => e.options.length, y = () => e.optionHeight * (+e.visibleOptionNum - 1) / 2, O = (w) => {
      const S = Ye(e.options, w), f = -S * e.optionHeight, m = () => {
        const $ = e.options[S][e.fields.value];
        $ !== e.value && t("change", $);
      };
      i && f !== d.value ? u = m : m(), d.value = f;
    }, C = (w) => {
      i || e.readonly || (u = null, v.value = ut, O(w), t("clickOption", e.options[w]));
    }, N = (w) => ce(Math.round(-w / e.optionHeight), 0, B() - 1), W = (w, S) => {
      const f = Math.abs(w / S);
      w = d.value + f / 3e-3 * (w < 0 ? -1 : 1);
      const m = N(w);
      v.value = +e.swipeDuration, O(m);
    }, _ = () => {
      i = !1, v.value = 0, u && (u(), u = null);
    }, A = (w) => {
      if (!e.readonly) {
        if (T.start(w), i) {
          const S = Sn(s.value);
          d.value = Math.min(0, S - y());
        }
        v.value = 0, a = d.value, o = Date.now(), l = a, u = null;
      }
    }, L = (w) => {
      if (e.readonly)
        return;
      T.move(w), T.isVertical() && (i = !0, Je(w, !0)), d.value = ce(a + T.deltaY.value, -(B() * e.optionHeight), e.optionHeight);
      const S = Date.now();
      S - o > st && (o = S, l = d.value);
    }, G = () => {
      if (e.readonly)
        return;
      const w = d.value - l, S = Date.now() - o;
      if (S < st && Math.abs(w) > An) {
        W(w, S);
        return;
      }
      const m = N(d.value);
      v.value = ut, O(m), setTimeout(() => {
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
          class: [Ne("item", {
            disabled: $,
            selected: q === e.value
          }), S.className],
          onClick: () => C(f)
        }, ue = {
          class: "van-ellipsis",
          [e.allowHtml ? "innerHTML" : "textContent"]: m
        };
        return h("li", J, [n.option ? n.option(S) : h("div", ue, null)]);
      });
    };
    return $e($t), ae({
      stopMomentum: _
    }), Ht(() => {
      const w = e.options.findIndex((m) => m[e.fields.value] === e.value), f = -Ye(e.options, w) * e.optionHeight;
      d.value = f;
    }), ge("touchmove", L, {
      target: c
    }), () => h("div", {
      ref: c,
      class: Ne(),
      onTouchstartPassive: A,
      onTouchend: G,
      onTouchcancel: G
    }, [h("ul", {
      ref: s,
      style: {
        transform: `translate3d(0, ${d.value + y()}px, 0)`,
        transitionDuration: `${v.value}ms`,
        transitionProperty: v.value ? "all" : "none"
      },
      class: Ne("wrapper"),
      onTransitionend: _
    }, [Y()])]);
  }
}), [Nn] = F("picker-toolbar"), tt = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
}, Mn = ["cancel", "confirm", "title", "toolbar"], zn = Object.keys(tt), Fn = z({
  name: Nn,
  props: tt,
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
      const c = e.cancelButtonText || Be("cancel");
      return h("button", {
        type: "button",
        class: [V("cancel"), Se],
        onClick: a
      }, [n.cancel ? n.cancel() : c]);
    }, u = () => {
      const c = e.confirmButtonText || Be("confirm");
      return h("button", {
        type: "button",
        class: [V("confirm"), Se],
        onClick: o
      }, [n.confirm ? n.confirm() : c]);
    };
    return () => h("div", {
      class: V("toolbar")
    }, [n.toolbar ? n.toolbar() : [l(), i(), u()]]);
  }
});
function Hn(e, t, n) {
  let i = 0;
  const a = e.scrollLeft, o = n === 0 ? 1 : Math.round(n * 1e3 / 16);
  function l() {
    e.scrollLeft += (t - a) / o, ++i < o && ve(l);
  }
  l();
}
function Vn(e, t, n, i) {
  let a = qe(e);
  const o = a < t, l = n === 0 ? 1 : Math.round(n * 1e3 / 16), u = (t - a) / l;
  function c() {
    a += u, (o && a > t || !o && a < t) && (a = t), Ve(e, a), o && a < t || !o && a > t ? ve(c) : i && ve(i);
  }
  c();
}
let Ln = 0;
function kt() {
  const e = Oe(), { name: t = "unknown" } = (e == null ? void 0 : e.type) || {};
  return process.env.NODE_ENV === "test" ? t : `${t}-${++Ln}`;
}
const Yn = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function jn({
  to: e,
  url: t,
  replace: n,
  $router: i
}) {
  e && i ? i[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t);
}
function Un() {
  const e = p([]), t = [];
  return Vt(() => {
    e.value = [];
  }), [e, (i) => (t[i] || (t[i] = (a) => {
    e.value[i] = a;
  }), t[i])];
}
const Wn = Symbol();
function It(e) {
  const t = ht(Wn, null);
  t && D(t, (n) => {
    n && e();
  });
}
function Xn(e, t) {
  if (!Ze || !window.IntersectionObserver)
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
  Ue(a), bt(a), Ge(i);
}
const [Kn, Zn] = F("sticky"), Gn = {
  zIndex: P,
  position: re("top"),
  container: Object,
  offsetTop: j(0),
  offsetBottom: j(0)
};
var qn = z({
  name: Kn,
  props: Gn,
  emits: ["scroll", "change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const i = p(), a = Ct(i), o = oe({
      fixed: !1,
      width: 0,
      height: 0,
      transform: 0
    }), l = x(() => et(e.position === "top" ? e.offsetTop : e.offsetBottom)), u = x(() => {
      const {
        fixed: v,
        height: T,
        width: B
      } = o;
      if (v)
        return {
          width: `${B}px`,
          height: `${T}px`
        };
    }), c = x(() => {
      if (!o.fixed)
        return;
      const v = Z(cn(e.zIndex), {
        width: `${o.width}px`,
        height: `${o.height}px`,
        [e.position]: `${l.value}px`
      });
      return o.transform && (v.transform = `translate3d(0, ${o.transform}px, 0)`), v;
    }), s = (v) => t("scroll", {
      scrollTop: v,
      isFixed: o.fixed
    }), d = () => {
      if (!i.value || pe(i))
        return;
      const {
        container: v,
        position: T
      } = e, B = le(i), y = qe(window);
      if (o.width = B.width, o.height = B.height, T === "top")
        if (v) {
          const O = le(v), C = O.bottom - l.value - o.height;
          o.fixed = l.value > B.top && O.bottom > 0, o.transform = C < 0 ? C : 0;
        } else
          o.fixed = l.value > B.top;
      else {
        const {
          clientHeight: O
        } = document.documentElement;
        if (v) {
          const C = le(v), N = O - C.top - l.value - o.height;
          o.fixed = O - l.value < B.bottom && O > C.top, o.transform = N < 0 ? -N : 0;
        } else
          o.fixed = O - l.value < B.bottom;
      }
      s(y);
    };
    return D(() => o.fixed, (v) => t("change", v)), ge("scroll", d, {
      target: a,
      passive: !0
    }), Xn(i, d), () => {
      var v;
      return h("div", {
        ref: i,
        style: u.value
      }, [h("div", {
        class: Zn({
          fixed: o.fixed
        }),
        style: c.value
      }, [(v = n.default) == null ? void 0 : v.call(n)])]);
    };
  }
});
const Jn = ie(qn), [Qn, dt] = F("badge"), eo = {
  dot: Boolean,
  max: P,
  tag: re("div"),
  color: String,
  offset: Array,
  content: P,
  showZero: X,
  position: re("top-right")
};
var to = z({
  name: Qn,
  props: eo,
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
        return t.content ? t.content() : ee(u) && yt(c) && +c > u ? `${u}+` : c;
    }, a = x(() => {
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
          class: dt([e.position, {
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
          class: dt("wrapper")
        }, {
          default: () => [t.default(), o()]
        });
      }
      return o();
    };
  }
});
const no = ie(to), [oo, ft] = F("tab");
var io = z({
  name: oo,
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
    const n = x(() => {
      const a = {}, {
        type: o,
        color: l,
        disabled: u,
        isActive: c,
        activeColor: s,
        inactiveColor: d
      } = e;
      l && o === "card" && (a.borderColor = l, u || (c ? a.backgroundColor = l : a.color = l));
      const T = c ? s : d;
      return T && (a.color = T), a;
    }), i = () => {
      const a = h("span", {
        class: ft("text", {
          ellipsis: !e.scrollable
        })
      }, [t.title ? t.title() : e.title]);
      return e.dot || ee(e.badge) && e.badge !== "" ? h(no, {
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
      class: [ft([e.type, {
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
const [Dt, Ce] = F("swipe"), ao = {
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
}, Pt = Symbol(Dt);
var lo = z({
  name: Dt,
  props: ao,
  emits: ["change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const i = p(), a = p(), o = oe({
      rect: null,
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      swiping: !1
    }), l = Bt(), {
      children: u,
      linkChildren: c
    } = ke(Pt), s = x(() => u.length), d = x(() => o[e.vertical ? "height" : "width"]), v = x(() => e.vertical ? l.deltaY.value : l.deltaX.value), T = x(() => o.rect ? (e.vertical ? o.rect.height : o.rect.width) - d.value * s.value : 0), B = x(() => Math.ceil(Math.abs(T.value) / d.value)), y = x(() => s.value * d.value), O = x(() => (o.active + s.value) % s.value), C = x(() => {
      const b = e.vertical ? "vertical" : "horizontal";
      return l.direction.value === b;
    }), N = x(() => {
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
      e.loop || (k = Math.min(k, -T.value));
      let H = I - k;
      return e.loop || (H = ce(H, T.value, 0)), H;
    }, A = ({
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
        if (u[0] && g !== T.value) {
          const E = g < T.value;
          u[0].setOffset(E ? y.value : 0);
        }
        if (u[s.value - 1] && g !== 0) {
          const E = g > 0;
          u[s.value - 1].setOffset(E ? -y.value : 0);
        }
      }
      o.active = r, o.offset = g, k && r !== H && t("change", O.value);
    }, L = () => {
      o.swiping = !0, o.active <= -1 ? A({
        pace: s.value
      }) : o.active >= s.value && A({
        pace: -s.value
      });
    }, G = () => {
      L(), l.reset(), se(() => {
        o.swiping = !1, A({
          pace: -1,
          emitChange: !0
        });
      });
    }, Y = () => {
      L(), l.reset(), se(() => {
        o.swiping = !1, A({
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
        if (!pe(i)) {
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
      pe(i) ? Q().then(I) : I();
    }, $ = () => m(o.active);
    let q;
    const J = (b) => {
      !e.touchable || (l.start(b), q = Date.now(), S(), L());
    }, ue = (b) => {
      e.touchable && o.swiping && (l.move(b), C.value && (!e.loop && (o.active === 0 && v.value > 0 || o.active === s.value - 1 && v.value < 0) || (Je(b, e.stopPropagation), A({
        offset: v.value
      }))));
    }, be = () => {
      if (!e.touchable || !o.swiping)
        return;
      const b = Date.now() - q, I = v.value / b;
      if ((Math.abs(I) > 0.25 || Math.abs(v.value) > d.value / 2) && C.value) {
        const H = e.vertical ? l.offsetY.value : l.offsetX.value;
        let r = 0;
        e.loop ? r = H > 0 ? v.value > 0 ? -1 : 1 : 0 : r = -Math[v.value > 0 ? "ceil" : "floor"](v.value / d.value), A({
          pace: r,
          emitChange: !0
        });
      } else
        v.value && A({
          pace: 0
        });
      o.swiping = !1, f();
    }, Ie = (b, I = {}) => {
      L(), l.reset(), se(() => {
        let k;
        e.loop && b === s.value ? k = o.active === 0 ? 0 : b : k = b % s.value, I.immediate ? se(() => {
          o.swiping = !1;
        }) : o.swiping = !1, A({
          pace: k - o.active,
          emitChange: !0
        });
      });
    }, De = (b, I) => {
      const k = I === O.value, H = k ? {
        backgroundColor: e.indicatorColor
      } : void 0;
      return h("i", {
        style: H,
        class: Ce("indicator", {
          active: k
        })
      }, null);
    }, Pe = () => {
      if (n.indicator)
        return n.indicator({
          active: O.value,
          total: s.value
        });
      if (e.showIndicators && s.value > 1)
        return h("div", {
          class: Ce("indicators", {
            vertical: e.vertical
          })
        }, [Array(s.value).fill("").map(De)]);
    };
    return ae({
      prev: G,
      next: Y,
      state: o,
      resize: $,
      swipeTo: Ie
    }), c({
      size: d,
      props: e,
      count: s,
      activeIndicator: O
    }), D(() => e.initialSwipe, (b) => m(+b)), D(s, () => m(o.active)), D(() => e.autoplay, f), D([Qe, Tt], $), D(tn(), (b) => {
      b === "visible" ? f() : S();
    }), he(m), We(() => m(o.active)), It(() => m(o.active)), Ue(S), bt(S), ge("touchmove", ue, {
      target: a
    }), () => {
      var b;
      return h("div", {
        ref: i,
        class: Ce()
      }, [h("div", {
        ref: a,
        style: N.value,
        class: Ce("track", {
          vertical: e.vertical
        }),
        onTouchstartPassive: J,
        onTouchend: be,
        onTouchcancel: be
      }, [(b = n.default) == null ? void 0 : b.call(n)]), Pe()]);
    };
  }
});
const co = ie(lo), [ro, vt] = F("tabs");
var uo = z({
  name: ro,
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
    const i = p(), a = (u) => t("change", u), o = () => {
      var u;
      const c = (u = n.default) == null ? void 0 : u.call(n);
      return e.animated || e.swipeable ? h(co, {
        ref: i,
        loop: !1,
        class: vt("track"),
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
    return D(() => e.currentIndex, l), he(() => {
      l(e.currentIndex);
    }), ae({
      swipeRef: i
    }), () => h("div", {
      class: vt("content", {
        animated: e.animated || e.swipeable
      })
    }, [o()]);
  }
});
const [_t, Te] = F("tabs"), so = {
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
}, At = Symbol(_t);
var fo = z({
  name: _t,
  props: so,
  emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let i, a, o;
    const l = p(), u = p(), c = p(), s = p(), d = kt(), v = Ct(l), [T, B] = Un(), {
      children: y,
      linkChildren: O
    } = ke(At), C = oe({
      inited: !1,
      position: "",
      lineStyle: {},
      currentIndex: -1
    }), N = x(() => y.length > e.swipeThreshold || !e.ellipsis || e.shrink), W = x(() => ({
      borderColor: e.color,
      background: e.background
    })), _ = (r, g) => {
      var E;
      return (E = r.name) != null ? E : g;
    }, A = x(() => {
      const r = y[C.currentIndex];
      if (r)
        return _(r, C.currentIndex);
    }), L = x(() => et(e.offsetTop)), G = x(() => e.sticky ? L.value + i : 0), Y = (r) => {
      const g = u.value, E = T.value;
      if (!N.value || !g || !E || !E[C.currentIndex])
        return;
      const M = E[C.currentIndex].$el, R = M.offsetLeft - (g.offsetWidth - M.offsetWidth) / 2;
      Hn(g, R, r ? 0 : +e.duration);
    }, w = () => {
      const r = C.inited;
      Q(() => {
        const g = T.value;
        if (!g || !g[C.currentIndex] || e.type !== "line" || pe(l.value))
          return;
        const E = g[C.currentIndex].$el, {
          lineWidth: M,
          lineHeight: R
        } = e, U = E.offsetLeft + E.offsetWidth / 2, te = {
          width: K(M),
          backgroundColor: e.color,
          transform: `translateX(${U}px) translateX(-50%)`
        };
        if (r && (te.transitionDuration = `${e.duration}s`), ee(R)) {
          const nt = K(R);
          te.height = nt, te.borderRadius = nt;
        }
        C.lineStyle = te;
      });
    }, S = (r) => {
      const g = r < C.currentIndex ? -1 : 1;
      for (; r >= 0 && r < y.length; ) {
        if (!y[r].disabled)
          return r;
        r += g;
      }
    }, f = (r, g) => {
      const E = S(r);
      if (!ee(E))
        return;
      const M = y[E], R = _(M, E), U = C.currentIndex !== null;
      C.currentIndex !== E && (C.currentIndex = E, g || Y(), w()), R !== e.active && (t("update:active", R), U && t("change", R, M.title)), o && !e.scrollspy && on(Math.ceil(at(l.value) - L.value));
    }, m = (r, g) => {
      const E = y.find((R, U) => _(R, U) === r), M = E ? y.indexOf(E) : 0;
      f(M, g);
    }, $ = (r = !1) => {
      if (e.scrollspy) {
        const g = y[C.currentIndex].$el;
        if (g && v.value) {
          const E = at(g, v.value) - G.value;
          a = !0, Vn(v.value, E, r ? 0 : +e.duration, () => {
            a = !1;
          });
        }
      }
    }, q = (r, g, E) => {
      const {
        title: M,
        disabled: R
      } = y[g], U = _(y[g], g);
      R || (En(e.beforeChange, {
        args: [U],
        done: () => {
          f(g), $();
        }
      }), jn(r)), t("clickTab", {
        name: U,
        title: M,
        event: E,
        disabled: R
      });
    }, J = (r) => {
      o = r.isFixed, t("scroll", r);
    }, ue = (r) => {
      Q(() => {
        m(r), $(!0);
      });
    }, be = () => {
      for (let r = 0; r < y.length; r++) {
        const {
          top: g
        } = le(y[r].$el);
        if (g > G.value)
          return r === 0 ? 0 : r - 1;
      }
      return y.length - 1;
    }, Ie = () => {
      if (e.scrollspy && !a) {
        const r = be();
        f(r);
      }
    }, De = () => y.map((r, g) => h(io, Xe({
      key: r.id,
      id: `${d}-${g}`,
      ref: B(g),
      type: e.type,
      color: e.color,
      style: r.titleStyle,
      class: r.titleClass,
      shrink: e.shrink,
      isActive: g === C.currentIndex,
      controls: r.id,
      scrollable: N.value,
      activeColor: e.titleActiveColor,
      inactiveColor: e.titleInactiveColor,
      onClick: (E) => q(r, g, E)
    }, He(r, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
      title: r.$slots.title
    })), Pe = () => {
      if (e.type === "line" && y.length)
        return h("div", {
          class: Te("line"),
          style: C.lineStyle
        }, null);
    }, b = () => {
      var r, g, E;
      const {
        type: M,
        border: R,
        sticky: U
      } = e, te = [h("div", {
        ref: U ? void 0 : c,
        class: [Te("wrap"), {
          [Cn]: M === "line" && R
        }]
      }, [h("div", {
        ref: u,
        role: "tablist",
        class: Te("nav", [M, {
          shrink: e.shrink,
          complete: N.value
        }]),
        style: W.value,
        "aria-orientation": "horizontal"
      }, [(r = n["nav-left"]) == null ? void 0 : r.call(n), De(), Pe(), (g = n["nav-right"]) == null ? void 0 : g.call(n)])]), (E = n["nav-bottom"]) == null ? void 0 : E.call(n)];
      return U ? h("div", {
        ref: c
      }, [te]) : te;
    };
    D([() => e.color, Qe], w), D(() => e.active, (r) => {
      r !== A.value && m(r);
    }), D(() => y.length, () => {
      C.inited && (m(e.active), w(), Q(() => {
        Y(!0);
      }));
    });
    const I = () => {
      m(e.active, !0), Q(() => {
        C.inited = !0, c.value && (i = le(c.value).height), Y(!0);
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
    }), We(w), It(w), Ge(I), ge("scroll", Ie, {
      target: v,
      passive: !0
    }), O({
      id: d,
      props: e,
      setLine: w,
      onRendered: k,
      currentName: A,
      scrollIntoView: Y
    }), () => h("div", {
      ref: l,
      class: Te([e.type])
    }, [e.sticky ? h(Jn, {
      container: l.value,
      offsetTop: L.value,
      onScroll: J
    }, {
      default: () => [b()]
    }) : b(), h(uo, {
      ref: s,
      count: y.length,
      inited: C.inited,
      animated: e.animated,
      duration: e.duration,
      swipeable: e.swipeable,
      lazyRender: e.lazyRender,
      currentIndex: C.currentIndex,
      onChange: f
    }, {
      default: () => {
        var r;
        return [(r = n.default) == null ? void 0 : r.call(n)];
      }
    })]);
  }
});
const vo = Symbol(), [ho, mo] = F("swipe-item");
var go = z({
  name: ho,
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
    } = $e(Pt);
    if (!a) {
      process.env.NODE_ENV !== "production" && console.error("[Vant] <SwipeItem> must be a child component of <Swipe>.");
      return;
    }
    const l = x(() => {
      const s = {}, {
        vertical: d
      } = a.props;
      return a.size.value && (s[d ? "height" : "width"] = `${a.size.value}px`), i.offset && (s.transform = `translate${d ? "Y" : "X"}(${i.offset}px)`), s;
    }), u = x(() => {
      const {
        loop: s,
        lazyRender: d
      } = a.props;
      if (!d || n)
        return !0;
      if (!i.mounted)
        return !1;
      const v = a.activeIndicator.value, T = a.count.value - 1, B = v === 0 && s ? T : v - 1, y = v === T && s ? 0 : v + 1;
      return n = o.value === v || o.value === B || o.value === y, n;
    }), c = (s) => {
      i.offset = s;
    };
    return he(() => {
      Q(() => {
        i.mounted = !0;
      });
    }), ae({
      setOffset: c
    }), () => {
      var s;
      return h("div", {
        class: mo(),
        style: l.value
      }, [u.value ? (s = t.default) == null ? void 0 : s.call(t) : null]);
    };
  }
});
const bo = ie(go), [yo, Me] = F("tab"), wo = Z({}, Yn, {
  dot: Boolean,
  name: P,
  badge: P,
  title: String,
  disabled: Boolean,
  titleClass: Xt,
  titleStyle: [String, Object],
  showZeroBadge: X
});
var Co = z({
  name: yo,
  props: wo,
  setup(e, {
    slots: t
  }) {
    const n = kt(), i = p(!1), {
      parent: a,
      index: o
    } = $e(At);
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
    }, c = x(() => {
      const d = l() === a.currentName.value;
      return d && !i.value && u(), d;
    }), s = p(!c.value);
    return D(c, (d) => {
      d ? s.value = !1 : se(() => {
        s.value = !0;
      });
    }), D(() => e.title, () => {
      a.setLine(), a.scrollIntoView();
    }), gt(vo, c), () => {
      var d;
      const v = `${a.id}-${o.value}`, {
        animated: T,
        swipeable: B,
        scrollspy: y,
        lazyRender: O
      } = a.props;
      if (!t.default && !T)
        return;
      const C = y || c.value;
      if (T || B)
        return h(bo, {
          id: n,
          role: "tabpanel",
          class: Me("panel-wrapper", {
            inactive: s.value
          }),
          tabindex: c.value ? 0 : -1,
          "aria-hidden": !c.value,
          "aria-labelledby": v
        }, {
          default: () => {
            var _;
            return [h("div", {
              class: Me("panel")
            }, [(_ = t.default) == null ? void 0 : _.call(t)])];
          }
        });
      const W = i.value || y || !O ? (d = t.default) == null ? void 0 : d.call(t) : null;
      return ae({
        id: n
      }), Lt(h("div", {
        id: n,
        role: "tabpanel",
        class: Me("panel"),
        tabindex: C ? 0 : -1,
        "aria-labelledby": v
      }, [W]), [[Yt, C]]);
    };
  }
});
const To = ie(Co), Eo = ie(fo), [xo] = F("picker-toolbar"), Rt = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
};
var po = z({
  name: xo,
  props: Rt,
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
      const c = e.cancelButtonText || Be("cancel");
      return h("button", {
        type: "button",
        class: [V("cancel"), Se],
        onClick: a
      }, [n.cancel ? n.cancel() : c]);
    }, u = () => {
      const c = e.confirmButtonText || Be("confirm");
      return h("button", {
        type: "button",
        class: [V("confirm"), Se],
        onClick: o
      }, [n.confirm ? n.confirm() : c]);
    };
    return () => h("div", {
      class: V("toolbar")
    }, [n.toolbar ? n.toolbar() : [l(), i(), u()]]);
  }
});
const [Nt, ze] = F("picker-group"), Mt = Symbol(Nt), So = Z({
  tabs: xe()
}, Rt);
z({
  name: Nt,
  props: So,
  emits: ["confirm", "cancel"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      children: i,
      linkChildren: a
    } = ke(Mt);
    a();
    const o = () => {
      t("confirm", i.map((u) => u.confirm()));
    }, l = () => t("cancel");
    return () => {
      var u;
      const c = (u = n.default) == null ? void 0 : u.call(n);
      return h("div", {
        class: ze()
      }, [h(po, Xe(e, {
        onConfirm: o,
        onCancel: l
      }), null), h(Eo, {
        shrink: !0,
        class: ze("tabs"),
        animated: !0
      }, {
        default: () => [e.tabs.map((s, d) => h(To, {
          title: s,
          titleClass: ze("tab-title")
        }, {
          default: () => [c == null ? void 0 : c[d]]
        }))]
      })]);
    };
  }
});
const Bo = Z({
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  optionHeight: j(44),
  showToolbar: X,
  swipeDuration: j(1e3),
  visibleOptionNum: j(6)
}, tt), Oo = Z({}, Bo, {
  columns: xe(),
  modelValue: xe(),
  toolbarPosition: re("top"),
  columnsFieldNames: Object
}), fe = z({
  name: "Picker",
  props: Oo,
  emits: ["confirm", "cancel", "change", "clickOption", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const i = p(), a = p(e.modelValue.slice(0)), {
      parent: o
    } = $e(Mt), {
      children: l,
      linkChildren: u
    } = ke($t);
    u();
    const c = x(() => Bn(e.columnsFieldNames)), s = x(() => et(e.optionHeight)), d = x(() => xn(e.columns, c.value)), v = x(() => {
      const {
        columns: f
      } = e;
      switch (d.value) {
        case "multiple":
          return f;
        case "cascade":
          return pn(f, c.value, a);
        default:
          return [f];
      }
    }), T = x(() => v.value.some((f) => f.length)), B = x(() => v.value.map((f, m) => je(f, a.value[m], c.value))), y = (f, m) => {
      if (a.value[f] !== m) {
        const $ = a.value.slice(0);
        $[f] = m, a.value = $;
      }
    }, O = () => ({
      selectedValues: a.value.slice(0),
      selectedOptions: B.value
    }), C = (f, m) => {
      y(m, f), d.value === "cascade" && a.value.forEach(($, q) => {
        const J = v.value[q];
        rt(J, $, c.value) || y(q, J.length ? J[0][c.value.value] : void 0);
      }), t("change", Z({
        columnIndex: m
      }, O()));
    }, N = (f, m) => t("clickOption", Z({
      columnIndex: m,
      currentOption: f
    }, O())), W = () => {
      l.forEach((m) => m.stopMomentum());
      const f = O();
      return t("confirm", f), f;
    }, _ = () => t("cancel", O()), A = () => v.value.map((f, m) => h(Rn, {
      value: a.value[m],
      fields: c.value,
      options: f,
      readonly: e.readonly,
      allowHtml: e.allowHtml,
      optionHeight: s.value,
      swipeDuration: e.swipeDuration,
      visibleOptionNum: e.visibleOptionNum,
      onChange: ($) => C($, m),
      onClickOption: ($) => N($, m)
    }, {
      option: n.option
    })), L = (f) => {
      if (T.value) {
        const m = {
          height: `${s.value}px`
        }, $ = {
          backgroundSize: `100% ${(f - s.value) / 2}px`
        };
        return [h("div", {
          class: V("mask"),
          style: $
        }, null), h("div", {
          class: [Tn, V("frame")],
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
      }, [A(), L(f)]);
    }, Y = () => {
      if (e.showToolbar && !o)
        return h(Fn, Xe(He(e, zn), {
          onConfirm: W,
          onCancel: _
        }), He(n, Mn));
    };
    D(v, (f) => {
      f.forEach((m, $) => {
        m.length && !rt(m, a.value[$], c.value) && y($, St(m)[c.value.value]);
      });
    }, {
      immediate: !0
    });
    let w;
    return D(() => e.modelValue, (f) => {
      !_e(f, a.value) && !_e(f, w) && (a.value = f.slice(0));
    }, {
      deep: !0
    }), D(a, (f) => {
      _e(f, e.modelValue) || (w = f.slice(0), t("update:modelValue", w));
    }, {
      immediate: !0
    }), ge("touchmove", Je, {
      target: i
    }), ae({
      confirm: W,
      getSelectedOptions: () => B.value
    }), () => {
      var f, m;
      return h("div", {
        class: V()
      }, [e.toolbarPosition === "top" ? Y() : null, e.loading ? h(Pn, {
        class: V("loading")
      }, null) : null, (f = n["columns-top"]) == null ? void 0 : f.call(n), G(), (m = n["columns-bottom"]) == null ? void 0 : m.call(n), e.toolbarPosition === "bottom" ? Y() : null]);
    };
  }
});
fe.install = function(e) {
  e.component(fe.name, fe);
};
const Io = {
  title: "Picker \u9009\u62E9\u5668",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(e) {
    e.component(fe.name, fe);
  }
};
export {
  fe as Picker,
  Io as default
};
