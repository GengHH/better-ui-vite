(function(L,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(L=typeof globalThis!="undefined"?globalThis:L||self,n(L.VueHhui={},L.Vue))})(this,function(L,n){"use strict";const St={text:{type:String,default:"hhui\u6309\u94AE"},style:{type:Object,default:()=>({color:"red"})}};var vo="",te=n.defineComponent({name:"Button",props:St,setup(e){return()=>n.createVNode("button",{class:"hh-btn"},[e.text])}});te.install=function(e){e.component(te.name,te)};var Bt={title:"Button \u6D4B\u8BD5\u7EC4\u4EF6",category:"\u901A\u7528",status:"100%",install(e){e.component(te.name,te)}};const X=e=>e!=null,Ee=e=>typeof e=="function",Se=e=>e!==null&&typeof e=="object",Nt=e=>Se(e)&&Ee(e.then)&&Ee(e.catch),Xe=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),kt=()=>Be?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function Ot(){}const Y=Object.assign,Be=typeof window!="undefined";function Ke(e,t){const o=t.split(".");let a=e;return o.forEach(c=>{var i;a=Se(a)&&(i=a[c])!=null?i:""}),a}function Ne(e,t,o){return t.reduce((a,c)=>((!o||e[c]!==void 0)&&(a[c]=e[c]),a),{})}const ke=(e,t)=>JSON.stringify(e)===JSON.stringify(t),$t=null,O=[Number,String],j={type:Boolean,default:!0},G=e=>({type:e,required:!0}),me=()=>({type:Array,default:()=>[]}),M=e=>({type:O,default:e}),ne=e=>({type:String,default:e});var re=typeof window!="undefined";function le(e){return re?requestAnimationFrame(e):-1}function se(e){le(()=>le(e))}var Vt=e=>e===window,Ze=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),oe=e=>{const t=n.unref(e);if(Vt(t)){const o=t.innerWidth,a=t.innerHeight;return Ze(o,a)}return t!=null&&t.getBoundingClientRect?t.getBoundingClientRect():Ze(0,0)};function he(e){const t=n.inject(e,null);if(t){const o=n.getCurrentInstance(),{link:a,unlink:c,internalChildren:i}=t;a(o),n.onUnmounted(()=>c(o));const r=n.computed(()=>i.indexOf(o));return{parent:t,index:r}}return{parent:null,index:n.ref(-1)}}function It(e){const t=[],o=a=>{Array.isArray(a)&&a.forEach(c=>{var i;n.isVNode(c)&&(t.push(c),(i=c.component)!=null&&i.subTree&&(t.push(c.component.subTree),o(c.component.subTree.children)),c.children&&o(c.children))})};return o(e),t}function Pt(e,t,o){const a=It(e.subTree.children);o.sort((i,r)=>a.indexOf(i.vnode)-a.indexOf(r.vnode));const c=o.map(i=>i.proxy);t.sort((i,r)=>{const u=c.indexOf(i),l=c.indexOf(r);return u-l})}function ve(e){const t=n.reactive([]),o=n.reactive([]),a=n.getCurrentInstance();return{children:t,linkChildren:i=>{const r=l=>{l.proxy&&(o.push(l),t.push(l.proxy),Pt(a,t,o))},u=l=>{const d=o.indexOf(l);t.splice(d,1),o.splice(d,1)};n.provide(e,Object.assign({link:r,unlink:u,children:t,internalChildren:o},i))}}}function Oe(e){let t;n.onMounted(()=>{e(),n.nextTick(()=>{t=!0})}),n.onActivated(()=>{t&&e()})}function ue(e,t,o={}){if(!re)return;const{target:a=window,passive:c=!1,capture:i=!1}=o;let r;const u=d=>{const f=n.unref(d);f&&!r&&(f.addEventListener(e,t,{capture:i,passive:c}),r=!0)},l=d=>{const f=n.unref(d);f&&r&&(f.removeEventListener(e,t,i),r=!1)};n.onUnmounted(()=>l(a)),n.onDeactivated(()=>l(a)),Oe(()=>u(a)),n.isRef(a)&&n.watch(a,(d,f)=>{l(f),u(d)})}var ge,$e;function At(){if(!ge&&(ge=n.ref(0),$e=n.ref(0),re)){const e=()=>{ge.value=window.innerWidth,$e.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:ge,height:$e}}var Dt=/scroll|auto|overlay/i,qe=re?window:void 0;function _t(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function Rt(e,t=qe){let o=e;for(;o&&o!==t&&_t(o);){const{overflowY:a}=window.getComputedStyle(o);if(Dt.test(a))return o;o=o.parentNode}return t}function Ge(e,t=qe){const o=n.ref();return n.onMounted(()=>{e.value&&(o.value=Rt(e.value,t))}),o}var be;function Mt(){if(!be&&(be=n.ref("visible"),re)){const e=()=>{be.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return be}function Ve(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function Ie(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function Ft(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function zt(e){Ie(window,e),Ie(document.body,e)}function Je(e,t){if(e===window)return 0;const o=t?Ve(t):Ft();return oe(e).top+o}kt();const Ht=e=>e.stopPropagation();function Pe(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&Ht(e)}function ye(e){const t=n.unref(e);if(!t)return!1;const o=window.getComputedStyle(t),a=o.display==="none",c=t.offsetParent===null&&o.position!=="fixed";return a||c}const{width:Ae,height:Qe}=At();function U(e){if(X(e))return Xe(e)?`${e}px`:String(e)}function Lt(e){if(X(e)){if(Array.isArray(e))return{width:U(e[0]),height:U(e[1])};const t=U(e);return{width:t,height:t}}}function Yt(e){const t={};return e!==void 0&&(t.zIndex=+e),t}let De;function jt(){if(!De){const e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;De=parseFloat(t)}return De}function Ut(e){return e=e.replace(/rem/g,""),+e*jt()}function Wt(e){return e=e.replace(/vw/g,""),+e*Ae.value/100}function Xt(e){return e=e.replace(/vh/g,""),+e*Qe.value/100}function _e(e){if(typeof e=="number")return e;if(Be){if(e.includes("rem"))return Ut(e);if(e.includes("vw"))return Wt(e);if(e.includes("vh"))return Xt(e)}return parseFloat(e)}const Kt=/-(\w)/g,et=e=>e.replace(Kt,(t,o)=>o.toUpperCase()),ie=(e,t,o)=>Math.min(Math.max(e,t),o),{hasOwnProperty:Zt}=Object.prototype;function qt(e,t,o){const a=t[o];!X(a)||(!Zt.call(e,o)||!Se(a)?e[o]=a:e[o]=tt(Object(e[o]),a))}function tt(e,t){return Object.keys(t).forEach(o=>{qt(e,t,o)}),e}var Gt={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",loading:"\u52A0\u8F7D\u4E2D...",noCoupon:"\u6682\u65E0\u4F18\u60E0\u5238",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",telInvalid:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:(e,t)=>`${e}\u5E74${t}\u6708`,rangePrompt:e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1:"},vanCoupon:{unlimited:"\u65E0\u95E8\u69DB",discount:e=>`${e}\u6298`,condition:e=>`\u6EE1${e}\u5143\u53EF\u7528`},vanCouponCell:{title:"\u4F18\u60E0\u5238",count:e=>`${e}\u5F20\u53EF\u7528`},vanCouponList:{exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",addressDetail:"\u8BE6\u7EC6\u5730\u5740",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}};const nt=n.ref("zh-CN"),ot=n.reactive({"zh-CN":Gt});var Jt={messages(){return ot[nt.value]},use(e,t){nt.value=e,this.add({[e]:t})},add(e={}){tt(ot,e)}};function Qt(e){const t=et(e)+".";return(o,...a)=>{const c=Jt.messages(),i=Ke(c,t+o)||Ke(c,o);return Ee(i)?i(...a):i}}function Re(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((o,a)=>o+Re(e,a),""):Object.keys(t).reduce((o,a)=>o+(t[a]?Re(e,a):""),""):""}function en(e){return(t,o)=>(t&&typeof t!="string"&&(o=t,t=""),t=t?`${e}__${t}`:e,`${t}${Re(t,o)}`)}function P(e){const t=`van-${e}`;return[t,en(t),Qt(t)]}const it="van-hairline",tn=`${it}--top-bottom`,nn=`${it}-unset--top-bottom`,we="van-haptics-feedback";function on(e,{args:t=[],done:o,canceled:a}){if(e){const c=e.apply(null,t);Nt(c)?c.then(i=>{i?o():a&&a()}).catch(Ot):c?o():a&&a()}else o()}function J(e){return e.install=t=>{const{name:o}=e;o&&(t.component(o,e),t.component(et(`-${o}`),e))},e}const[bo,_,pe]=P("picker"),at=e=>e.find(t=>!t.disabled)||e[0];function an(e,t){const o=e[0];if(o){if(Array.isArray(o))return"multiple";if(t.children in o)return"cascade"}return"default"}function Me(e,t){t=ie(t,0,e.length);for(let o=t;o<e.length;o++)if(!e[o].disabled)return o;for(let o=t-1;o>=0;o--)if(!e[o].disabled)return o;return 0}const ct=(e,t,o)=>t!==void 0&&!!e.find(a=>a[o.value]===t);function Fe(e,t,o){const a=e.findIndex(i=>i[o.value]===t),c=Me(e,a);return e[c]}function cn(e,t,o){const a=[];let c={[t.children]:e},i=0;for(;c&&c[t.children];){const r=c[t.children],u=o.value[i];if(c=X(u)?Fe(r,u,t):void 0,!c&&r.length){const l=at(r)[t.value];c=Fe(r,l,t)}i++,a.push(r)}return a}function rn(e){const{transform:t}=window.getComputedStyle(e),o=t.slice(7,t.length-1).split(", ")[5];return Number(o)}function ln(e){return Y({text:"text",value:"value",children:"children"},e)}function Q(e){const t=n.getCurrentInstance();t&&Y(t.proxy,e)}const[sn,de]=P("loading"),un=Array(12).fill(null).map((e,t)=>n.createVNode("i",{class:de("line",String(t+1))},null)),dn=n.createVNode("svg",{class:de("circular"),viewBox:"25 25 50 50"},[n.createVNode("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),fn={size:O,type:ne("circular"),color:String,vertical:Boolean,textSize:O,textColor:String};var mn=n.defineComponent({name:sn,props:fn,setup(e,{slots:t}){const o=n.computed(()=>Y({color:e.color},Lt(e.size))),a=()=>{const i=e.type==="spinner"?un:dn;return n.createVNode("span",{class:de("spinner",e.type),style:o.value},[t.icon?t.icon():i])},c=()=>{var i;if(t.default)return n.createVNode("span",{class:de("text"),style:{fontSize:U(e.textSize),color:(i=e.textColor)!=null?i:e.color}},[t.default()])};return()=>{const{type:i,vertical:r}=e;return n.createVNode("div",{class:de([i,{vertical:r}]),"aria-live":"polite","aria-busy":!0},[a(),c()])}}});const hn=J(mn);function vn(e,t){return e>t?"horizontal":t>e?"vertical":""}function rt(){const e=n.ref(0),t=n.ref(0),o=n.ref(0),a=n.ref(0),c=n.ref(0),i=n.ref(0),r=n.ref(""),u=()=>r.value==="vertical",l=()=>r.value==="horizontal",d=()=>{o.value=0,a.value=0,c.value=0,i.value=0,r.value=""};return{move:C=>{const E=C.touches[0];o.value=(E.clientX<0?0:E.clientX)-e.value,a.value=E.clientY-t.value,c.value=Math.abs(o.value),i.value=Math.abs(a.value);const y=10;(!r.value||c.value<y&&i.value<y)&&(r.value=vn(c.value,i.value))},start:C=>{d(),e.value=C.touches[0].clientX,t.value=C.touches[0].clientY},reset:d,startX:e,startY:t,deltaX:o,deltaY:a,offsetX:c,offsetY:i,direction:r,isVertical:u,isHorizontal:l}}const lt=200,st=300,gn=15,[ut,ze]=P("picker-column"),dt=Symbol(ut);var bn=n.defineComponent({name:ut,props:{value:O,fields:G(Object),options:me(),readonly:Boolean,allowHtml:Boolean,optionHeight:G(Number),swipeDuration:G(O),visibleOptionNum:G(O)},emits:["change","clickOption"],setup(e,{emit:t,slots:o}){let a,c,i,r,u;const l=n.ref(),d=n.ref(),f=n.ref(0),h=n.ref(0),C=rt(),E=()=>e.options.length,y=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,S=w=>{const x=Me(e.options,w),m=-x*e.optionHeight,v=()=>{const B=e.options[x][e.fields.value];B!==e.value&&t("change",B)};a&&m!==f.value?u=v:v(),f.value=m},p=w=>{a||e.readonly||(u=null,h.value=lt,S(w),t("clickOption",e.options[w]))},A=w=>ie(Math.round(-w/e.optionHeight),0,E()-1),W=(w,x)=>{const m=Math.abs(w/x);w=f.value+m/.003*(w<0?-1:1);const v=A(w);h.value=+e.swipeDuration,S(v)},$=()=>{a=!1,h.value=0,u&&(u(),u=null)},V=w=>{if(!e.readonly){if(C.start(w),a){const x=rn(d.value);f.value=Math.min(0,x-y())}h.value=0,c=f.value,i=Date.now(),r=c,u=null}},F=w=>{if(e.readonly)return;C.move(w),C.isVertical()&&(a=!0,Pe(w,!0)),f.value=ie(c+C.deltaY.value,-(E()*e.optionHeight),e.optionHeight);const x=Date.now();x-i>st&&(i=x,r=f.value)},K=()=>{if(e.readonly)return;const w=f.value-r,x=Date.now()-i;if(x<st&&Math.abs(w)>gn){W(w,x);return}const v=A(f.value);h.value=lt,S(v),setTimeout(()=>{a=!1},0)},z=()=>{const w={height:`${e.optionHeight}px`};return e.options.map((x,m)=>{const v=x[e.fields.text],{disabled:B}=x,Z=x[e.fields.value],q={role:"button",style:w,tabindex:B?-1:0,class:[ze("item",{disabled:B,selected:Z===e.value}),x.className],onClick:()=>p(m)},fe={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:v};return n.createVNode("li",q,[o.option?o.option(x):n.createVNode("div",fe,null)])})};return he(dt),Q({stopMomentum:$}),n.watchEffect(()=>{const w=e.options.findIndex(v=>v[e.fields.value]===e.value),m=-Me(e.options,w)*e.optionHeight;f.value=m}),ue("touchmove",F,{target:l}),()=>n.createVNode("div",{ref:l,class:ze(),onTouchstartPassive:V,onTouchend:K,onTouchcancel:K},[n.createVNode("ul",{ref:d,style:{transform:`translate3d(0, ${f.value+y()}px, 0)`,transitionDuration:`${h.value}ms`,transitionProperty:h.value?"all":"none"},class:ze("wrapper"),onTransitionend:$},[z()])])}});const[yn]=P("picker-toolbar"),He={title:String,cancelButtonText:String,confirmButtonText:String},wn=["cancel","confirm","title","toolbar"],pn=Object.keys(He);var Cn=n.defineComponent({name:yn,props:He,emits:["confirm","cancel"],setup(e,{emit:t,slots:o}){const a=()=>{if(o.title)return o.title();if(e.title)return n.createVNode("div",{class:[_("title"),"van-ellipsis"]},[e.title])},c=()=>t("cancel"),i=()=>t("confirm"),r=()=>{const l=e.cancelButtonText||pe("cancel");return n.createVNode("button",{type:"button",class:[_("cancel"),we],onClick:c},[o.cancel?o.cancel():l])},u=()=>{const l=e.confirmButtonText||pe("confirm");return n.createVNode("button",{type:"button",class:[_("confirm"),we],onClick:i},[o.confirm?o.confirm():l])};return()=>n.createVNode("div",{class:_("toolbar")},[o.toolbar?o.toolbar():[r(),a(),u()]])}});function Tn(e,t,o){let a=0;const c=e.scrollLeft,i=o===0?1:Math.round(o*1e3/16);function r(){e.scrollLeft+=(t-c)/i,++a<i&&le(r)}r()}function xn(e,t,o,a){let c=Ve(e);const i=c<t,r=o===0?1:Math.round(o*1e3/16),u=(t-c)/r;function l(){c+=u,(i&&c>t||!i&&c<t)&&(c=t),Ie(e,c),i&&c<t||!i&&c>t?le(l):a&&le(a)}l()}let En=0;function ft(){const e=n.getCurrentInstance(),{name:t="unknown"}=(e==null?void 0:e.type)||{};return`${t}-${++En}`}const Sn={to:[String,Object],url:String,replace:Boolean};function Bn({to:e,url:t,replace:o,$router:a}){e&&a?a[o?"replace":"push"](e):t&&(o?location.replace(t):location.href=t)}function Nn(){const e=n.ref([]),t=[];return n.onBeforeUpdate(()=>{e.value=[]}),[e,a=>(t[a]||(t[a]=c=>{e.value[a]=c}),t[a])]}const kn=Symbol();function mt(e){const t=n.inject(kn,null);t&&n.watch(t,o=>{o&&e()})}function On(e,t){if(!Be||!window.IntersectionObserver)return;const o=new IntersectionObserver(i=>{t(i[0].intersectionRatio>0)},{root:document.body}),a=()=>{e.value&&o.observe(e.value)},c=()=>{e.value&&o.unobserve(e.value)};n.onDeactivated(c),n.onBeforeUnmount(c),Oe(a)}const[$n,Vn]=P("sticky"),In={zIndex:O,position:ne("top"),container:Object,offsetTop:M(0),offsetBottom:M(0)};var Pn=n.defineComponent({name:$n,props:In,emits:["scroll","change"],setup(e,{emit:t,slots:o}){const a=n.ref(),c=Ge(a),i=n.reactive({fixed:!1,width:0,height:0,transform:0}),r=n.computed(()=>_e(e.position==="top"?e.offsetTop:e.offsetBottom)),u=n.computed(()=>{const{fixed:h,height:C,width:E}=i;if(h)return{width:`${E}px`,height:`${C}px`}}),l=n.computed(()=>{if(!i.fixed)return;const h=Y(Yt(e.zIndex),{width:`${i.width}px`,height:`${i.height}px`,[e.position]:`${r.value}px`});return i.transform&&(h.transform=`translate3d(0, ${i.transform}px, 0)`),h}),d=h=>t("scroll",{scrollTop:h,isFixed:i.fixed}),f=()=>{if(!a.value||ye(a))return;const{container:h,position:C}=e,E=oe(a),y=Ve(window);if(i.width=E.width,i.height=E.height,C==="top")if(h){const S=oe(h),p=S.bottom-r.value-i.height;i.fixed=r.value>E.top&&S.bottom>0,i.transform=p<0?p:0}else i.fixed=r.value>E.top;else{const{clientHeight:S}=document.documentElement;if(h){const p=oe(h),A=S-p.top-r.value-i.height;i.fixed=S-r.value<E.bottom&&S>p.top,i.transform=A<0?-A:0}else i.fixed=S-r.value<E.bottom}d(y)};return n.watch(()=>i.fixed,h=>t("change",h)),ue("scroll",f,{target:c,passive:!0}),On(a,f),()=>{var h;return n.createVNode("div",{ref:a,style:u.value},[n.createVNode("div",{class:Vn({fixed:i.fixed}),style:l.value},[(h=o.default)==null?void 0:h.call(o)])])}}});const An=J(Pn),[Dn,ht]=P("badge"),_n={dot:Boolean,max:O,tag:ne("div"),color:String,offset:Array,content:O,showZero:j,position:ne("top-right")};var Rn=n.defineComponent({name:Dn,props:_n,setup(e,{slots:t}){const o=()=>{if(t.content)return!0;const{content:r,showZero:u}=e;return X(r)&&r!==""&&(u||r!==0&&r!=="0")},a=()=>{const{dot:r,max:u,content:l}=e;if(!r&&o())return t.content?t.content():X(u)&&Xe(l)&&+l>u?`${u}+`:l},c=n.computed(()=>{const r={background:e.color};if(e.offset){const[u,l]=e.offset;t.default?(r.top=U(l),typeof u=="number"?r.right=U(-u):r.right=u.startsWith("-")?u.replace("-",""):`-${u}`):(r.marginTop=U(l),r.marginLeft=U(u))}return r}),i=()=>{if(o()||e.dot)return n.createVNode("div",{class:ht([e.position,{dot:e.dot,fixed:!!t.default}]),style:c.value},[a()])};return()=>{if(t.default){const{tag:r}=e;return n.createVNode(r,{class:ht("wrapper")},{default:()=>[t.default(),i()]})}return i()}}});const Mn=J(Rn),[Fn,vt]=P("tab");var zn=n.defineComponent({name:Fn,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:O,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:j},setup(e,{slots:t}){const o=n.computed(()=>{const c={},{type:i,color:r,disabled:u,isActive:l,activeColor:d,inactiveColor:f}=e;r&&i==="card"&&(c.borderColor=r,u||(l?c.backgroundColor=r:c.color=r));const C=l?d:f;return C&&(c.color=C),c}),a=()=>{const c=n.createVNode("span",{class:vt("text",{ellipsis:!e.scrollable})},[t.title?t.title():e.title]);return e.dot||X(e.badge)&&e.badge!==""?n.createVNode(Mn,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[c]}):c};return()=>n.createVNode("div",{id:e.id,role:"tab",class:[vt([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:o.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[a()])}});const[gt,Ce]=P("swipe"),Hn={loop:j,width:O,height:O,vertical:Boolean,autoplay:M(0),duration:M(500),touchable:j,lazyRender:Boolean,initialSwipe:M(0),indicatorColor:String,showIndicators:j,stopPropagation:j},bt=Symbol(gt);var Ln=n.defineComponent({name:gt,props:Hn,emits:["change"],setup(e,{emit:t,slots:o}){const a=n.ref(),c=n.ref(),i=n.reactive({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),r=rt(),{children:u,linkChildren:l}=ve(bt),d=n.computed(()=>u.length),f=n.computed(()=>i[e.vertical?"height":"width"]),h=n.computed(()=>e.vertical?r.deltaY.value:r.deltaX.value),C=n.computed(()=>i.rect?(e.vertical?i.rect.height:i.rect.width)-f.value*d.value:0),E=n.computed(()=>Math.ceil(Math.abs(C.value)/f.value)),y=n.computed(()=>d.value*f.value),S=n.computed(()=>(i.active+d.value)%d.value),p=n.computed(()=>{const b=e.vertical?"vertical":"horizontal";return r.direction.value===b}),A=n.computed(()=>{const b={transitionDuration:`${i.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${i.offset}px)`};if(f.value){const k=e.vertical?"height":"width",N=e.vertical?"width":"height";b[k]=`${y.value}px`,b[N]=e[N]?`${e[N]}px`:""}return b}),W=b=>{const{active:k}=i;return b?e.loop?ie(k+b,-1,d.value):ie(k+b,0,E.value):k},$=(b,k=0)=>{let N=b*f.value;e.loop||(N=Math.min(N,-C.value));let R=k-N;return e.loop||(R=ie(R,C.value,0)),R},V=({pace:b=0,offset:k=0,emitChange:N})=>{if(d.value<=1)return;const{active:R}=i,s=W(b),g=$(s,k);if(e.loop){if(u[0]&&g!==C.value){const T=g<C.value;u[0].setOffset(T?y.value:0)}if(u[d.value-1]&&g!==0){const T=g>0;u[d.value-1].setOffset(T?-y.value:0)}}i.active=s,i.offset=g,N&&s!==R&&t("change",S.value)},F=()=>{i.swiping=!0,i.active<=-1?V({pace:d.value}):i.active>=d.value&&V({pace:-d.value})},K=()=>{F(),r.reset(),se(()=>{i.swiping=!1,V({pace:-1,emitChange:!0})})},z=()=>{F(),r.reset(),se(()=>{i.swiping=!1,V({pace:1,emitChange:!0})})};let w;const x=()=>clearTimeout(w),m=()=>{x(),e.autoplay>0&&d.value>1&&(w=setTimeout(()=>{z(),m()},+e.autoplay))},v=(b=+e.initialSwipe)=>{if(!a.value)return;const k=()=>{var N,R;if(!ye(a)){const s={width:a.value.offsetWidth,height:a.value.offsetHeight};i.rect=s,i.width=+((N=e.width)!=null?N:s.width),i.height=+((R=e.height)!=null?R:s.height)}d.value&&(b=Math.min(d.value-1,b)),i.active=b,i.swiping=!0,i.offset=$(b),u.forEach(s=>{s.setOffset(0)}),m()};ye(a)?n.nextTick().then(k):k()},B=()=>v(i.active);let Z;const q=b=>{!e.touchable||(r.start(b),Z=Date.now(),x(),F())},fe=b=>{e.touchable&&i.swiping&&(r.move(b),p.value&&(!e.loop&&(i.active===0&&h.value>0||i.active===d.value-1&&h.value<0)||(Pe(b,e.stopPropagation),V({offset:h.value}))))},xe=()=>{if(!e.touchable||!i.swiping)return;const b=Date.now()-Z,k=h.value/b;if((Math.abs(k)>.25||Math.abs(h.value)>f.value/2)&&p.value){const R=e.vertical?r.offsetY.value:r.offsetX.value;let s=0;e.loop?s=R>0?h.value>0?-1:1:0:s=-Math[h.value>0?"ceil":"floor"](h.value/f.value),V({pace:s,emitChange:!0})}else h.value&&V({pace:0});i.swiping=!1,m()},je=(b,k={})=>{F(),r.reset(),se(()=>{let N;e.loop&&b===d.value?N=i.active===0?0:b:N=b%d.value,k.immediate?se(()=>{i.swiping=!1}):i.swiping=!1,V({pace:N-i.active,emitChange:!0})})},Ue=(b,k)=>{const N=k===S.value,R=N?{backgroundColor:e.indicatorColor}:void 0;return n.createVNode("i",{style:R,class:Ce("indicator",{active:N})},null)},We=()=>{if(o.indicator)return o.indicator({active:S.value,total:d.value});if(e.showIndicators&&d.value>1)return n.createVNode("div",{class:Ce("indicators",{vertical:e.vertical})},[Array(d.value).fill("").map(Ue)])};return Q({prev:K,next:z,state:i,resize:B,swipeTo:je}),l({size:f,props:e,count:d,activeIndicator:S}),n.watch(()=>e.initialSwipe,b=>v(+b)),n.watch(d,()=>v(i.active)),n.watch(()=>e.autoplay,m),n.watch([Ae,Qe],B),n.watch(Mt(),b=>{b==="visible"?m():x()}),n.onMounted(v),n.onActivated(()=>v(i.active)),mt(()=>v(i.active)),n.onDeactivated(x),n.onBeforeUnmount(x),ue("touchmove",fe,{target:c}),()=>{var b;return n.createVNode("div",{ref:a,class:Ce()},[n.createVNode("div",{ref:c,style:A.value,class:Ce("track",{vertical:e.vertical}),onTouchstartPassive:q,onTouchend:xe,onTouchcancel:xe},[(b=o.default)==null?void 0:b.call(o)]),We()])}}});const Yn=J(Ln),[jn,yt]=P("tabs");var Un=n.defineComponent({name:jn,props:{count:G(Number),inited:Boolean,animated:Boolean,duration:G(O),swipeable:Boolean,lazyRender:Boolean,currentIndex:G(Number)},emits:["change"],setup(e,{emit:t,slots:o}){const a=n.ref(),c=u=>t("change",u),i=()=>{var u;const l=(u=o.default)==null?void 0:u.call(o);return e.animated||e.swipeable?n.createVNode(Yn,{ref:a,loop:!1,class:yt("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:c},{default:()=>[l]}):l},r=u=>{const l=a.value;l&&l.state.active!==u&&l.swipeTo(u,{immediate:!e.inited})};return n.watch(()=>e.currentIndex,r),n.onMounted(()=>{r(e.currentIndex)}),Q({swipeRef:a}),()=>n.createVNode("div",{class:yt("content",{animated:e.animated||e.swipeable})},[i()])}});const[wt,Te]=P("tabs"),Wn={type:ne("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:M(0),duration:M(.3),animated:Boolean,ellipsis:j,swipeable:Boolean,scrollspy:Boolean,offsetTop:M(0),background:String,lazyRender:j,lineWidth:O,lineHeight:O,beforeChange:Function,swipeThreshold:M(5),titleActiveColor:String,titleInactiveColor:String},pt=Symbol(wt);var Xn=n.defineComponent({name:wt,props:Wn,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:t,slots:o}){let a,c,i;const r=n.ref(),u=n.ref(),l=n.ref(),d=n.ref(),f=ft(),h=Ge(r),[C,E]=Nn(),{children:y,linkChildren:S}=ve(pt),p=n.reactive({inited:!1,position:"",lineStyle:{},currentIndex:-1}),A=n.computed(()=>y.length>e.swipeThreshold||!e.ellipsis||e.shrink),W=n.computed(()=>({borderColor:e.color,background:e.background})),$=(s,g)=>{var T;return(T=s.name)!=null?T:g},V=n.computed(()=>{const s=y[p.currentIndex];if(s)return $(s,p.currentIndex)}),F=n.computed(()=>_e(e.offsetTop)),K=n.computed(()=>e.sticky?F.value+a:0),z=s=>{const g=u.value,T=C.value;if(!A.value||!g||!T||!T[p.currentIndex])return;const D=T[p.currentIndex].$el,I=D.offsetLeft-(g.offsetWidth-D.offsetWidth)/2;Tn(g,I,s?0:+e.duration)},w=()=>{const s=p.inited;n.nextTick(()=>{const g=C.value;if(!g||!g[p.currentIndex]||e.type!=="line"||ye(r.value))return;const T=g[p.currentIndex].$el,{lineWidth:D,lineHeight:I}=e,H=T.offsetLeft+T.offsetWidth/2,ee={width:U(D),backgroundColor:e.color,transform:`translateX(${H}px) translateX(-50%)`};if(s&&(ee.transitionDuration=`${e.duration}s`),X(I)){const Et=U(I);ee.height=Et,ee.borderRadius=Et}p.lineStyle=ee})},x=s=>{const g=s<p.currentIndex?-1:1;for(;s>=0&&s<y.length;){if(!y[s].disabled)return s;s+=g}},m=(s,g)=>{const T=x(s);if(!X(T))return;const D=y[T],I=$(D,T),H=p.currentIndex!==null;p.currentIndex!==T&&(p.currentIndex=T,g||z(),w()),I!==e.active&&(t("update:active",I),H&&t("change",I,D.title)),i&&!e.scrollspy&&zt(Math.ceil(Je(r.value)-F.value))},v=(s,g)=>{const T=y.find((I,H)=>$(I,H)===s),D=T?y.indexOf(T):0;m(D,g)},B=(s=!1)=>{if(e.scrollspy){const g=y[p.currentIndex].$el;if(g&&h.value){const T=Je(g,h.value)-K.value;c=!0,xn(h.value,T,s?0:+e.duration,()=>{c=!1})}}},Z=(s,g,T)=>{const{title:D,disabled:I}=y[g],H=$(y[g],g);I||(on(e.beforeChange,{args:[H],done:()=>{m(g),B()}}),Bn(s)),t("clickTab",{name:H,title:D,event:T,disabled:I})},q=s=>{i=s.isFixed,t("scroll",s)},fe=s=>{n.nextTick(()=>{v(s),B(!0)})},xe=()=>{for(let s=0;s<y.length;s++){const{top:g}=oe(y[s].$el);if(g>K.value)return s===0?0:s-1}return y.length-1},je=()=>{if(e.scrollspy&&!c){const s=xe();m(s)}},Ue=()=>y.map((s,g)=>n.createVNode(zn,n.mergeProps({key:s.id,id:`${f}-${g}`,ref:E(g),type:e.type,color:e.color,style:s.titleStyle,class:s.titleClass,shrink:e.shrink,isActive:g===p.currentIndex,controls:s.id,scrollable:A.value,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:T=>Z(s,g,T)},Ne(s,["dot","badge","title","disabled","showZeroBadge"])),{title:s.$slots.title})),We=()=>{if(e.type==="line"&&y.length)return n.createVNode("div",{class:Te("line"),style:p.lineStyle},null)},b=()=>{var s,g,T;const{type:D,border:I,sticky:H}=e,ee=[n.createVNode("div",{ref:H?void 0:l,class:[Te("wrap"),{[tn]:D==="line"&&I}]},[n.createVNode("div",{ref:u,role:"tablist",class:Te("nav",[D,{shrink:e.shrink,complete:A.value}]),style:W.value,"aria-orientation":"horizontal"},[(s=o["nav-left"])==null?void 0:s.call(o),Ue(),We(),(g=o["nav-right"])==null?void 0:g.call(o)])]),(T=o["nav-bottom"])==null?void 0:T.call(o)];return H?n.createVNode("div",{ref:l},[ee]):ee};n.watch([()=>e.color,Ae],w),n.watch(()=>e.active,s=>{s!==V.value&&v(s)}),n.watch(()=>y.length,()=>{p.inited&&(v(e.active),w(),n.nextTick(()=>{z(!0)}))});const k=()=>{v(e.active,!0),n.nextTick(()=>{p.inited=!0,l.value&&(a=oe(l.value).height),z(!0)})},N=(s,g)=>t("rendered",s,g);return Q({resize:()=>{w(),n.nextTick(()=>{var s,g;return(g=(s=d.value)==null?void 0:s.swipeRef.value)==null?void 0:g.resize()})},scrollTo:fe}),n.onActivated(w),mt(w),Oe(k),ue("scroll",je,{target:h,passive:!0}),S({id:f,props:e,setLine:w,onRendered:N,currentName:V,scrollIntoView:z}),()=>n.createVNode("div",{ref:r,class:Te([e.type])},[e.sticky?n.createVNode(An,{container:r.value,offsetTop:F.value,onScroll:q},{default:()=>[b()]}):b(),n.createVNode(Un,{ref:d,count:y.length,inited:p.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:p.currentIndex,onChange:m},{default:()=>{var s;return[(s=o.default)==null?void 0:s.call(o)]}})])}});const Kn=Symbol(),[Zn,qn]=P("swipe-item");var Gn=n.defineComponent({name:Zn,setup(e,{slots:t}){let o;const a=n.reactive({offset:0,inited:!1,mounted:!1}),{parent:c,index:i}=he(bt);if(!c)return;const r=n.computed(()=>{const d={},{vertical:f}=c.props;return c.size.value&&(d[f?"height":"width"]=`${c.size.value}px`),a.offset&&(d.transform=`translate${f?"Y":"X"}(${a.offset}px)`),d}),u=n.computed(()=>{const{loop:d,lazyRender:f}=c.props;if(!f||o)return!0;if(!a.mounted)return!1;const h=c.activeIndicator.value,C=c.count.value-1,E=h===0&&d?C:h-1,y=h===C&&d?0:h+1;return o=i.value===h||i.value===E||i.value===y,o}),l=d=>{a.offset=d};return n.onMounted(()=>{n.nextTick(()=>{a.mounted=!0})}),Q({setOffset:l}),()=>{var d;return n.createVNode("div",{class:qn(),style:r.value},[u.value?(d=t.default)==null?void 0:d.call(t):null])}}});const Jn=J(Gn),[Qn,Le]=P("tab"),eo=Y({},Sn,{dot:Boolean,name:O,badge:O,title:String,disabled:Boolean,titleClass:$t,titleStyle:[String,Object],showZeroBadge:j});var to=n.defineComponent({name:Qn,props:eo,setup(e,{slots:t}){const o=ft(),a=n.ref(!1),{parent:c,index:i}=he(pt);if(!c)return;const r=()=>{var f;return(f=e.name)!=null?f:i.value},u=()=>{a.value=!0,c.props.lazyRender&&n.nextTick(()=>{c.onRendered(r(),e.title)})},l=n.computed(()=>{const f=r()===c.currentName.value;return f&&!a.value&&u(),f}),d=n.ref(!l.value);return n.watch(l,f=>{f?d.value=!1:se(()=>{d.value=!0})}),n.watch(()=>e.title,()=>{c.setLine(),c.scrollIntoView()}),n.provide(Kn,l),()=>{var f;const h=`${c.id}-${i.value}`,{animated:C,swipeable:E,scrollspy:y,lazyRender:S}=c.props;if(!t.default&&!C)return;const p=y||l.value;if(C||E)return n.createVNode(Jn,{id:o,role:"tabpanel",class:Le("panel-wrapper",{inactive:d.value}),tabindex:l.value?0:-1,"aria-hidden":!l.value,"aria-labelledby":h},{default:()=>{var $;return[n.createVNode("div",{class:Le("panel")},[($=t.default)==null?void 0:$.call(t)])]}});const W=a.value||y||!S?(f=t.default)==null?void 0:f.call(t):null;return Q({id:o}),n.withDirectives(n.createVNode("div",{id:o,role:"tabpanel",class:Le("panel"),tabindex:p?0:-1,"aria-labelledby":h},[W]),[[n.vShow,p]])}}});const no=J(to),oo=J(Xn),[io]=P("picker-toolbar"),Ct={title:String,cancelButtonText:String,confirmButtonText:String};var ao=n.defineComponent({name:io,props:Ct,emits:["confirm","cancel"],setup(e,{emit:t,slots:o}){const a=()=>{if(o.title)return o.title();if(e.title)return n.createVNode("div",{class:[_("title"),"van-ellipsis"]},[e.title])},c=()=>t("cancel"),i=()=>t("confirm"),r=()=>{const l=e.cancelButtonText||pe("cancel");return n.createVNode("button",{type:"button",class:[_("cancel"),we],onClick:c},[o.cancel?o.cancel():l])},u=()=>{const l=e.confirmButtonText||pe("confirm");return n.createVNode("button",{type:"button",class:[_("confirm"),we],onClick:i},[o.confirm?o.confirm():l])};return()=>n.createVNode("div",{class:_("toolbar")},[o.toolbar?o.toolbar():[r(),a(),u()]])}});const[Tt,Ye]=P("picker-group"),xt=Symbol(Tt),co=Y({tabs:me()},Ct);n.defineComponent({name:Tt,props:co,emits:["confirm","cancel"],setup(e,{emit:t,slots:o}){const{children:a,linkChildren:c}=ve(xt);c();const i=()=>{t("confirm",a.map(u=>u.confirm()))},r=()=>t("cancel");return()=>{var u;const l=(u=o.default)==null?void 0:u.call(o);return n.createVNode("div",{class:Ye()},[n.createVNode(ao,n.mergeProps(e,{onConfirm:i,onCancel:r}),null),n.createVNode(oo,{shrink:!0,class:Ye("tabs"),animated:!0},{default:()=>[e.tabs.map((d,f)=>n.createVNode(no,{title:d,titleClass:Ye("tab-title")},{default:()=>[l==null?void 0:l[f]]}))]})])}}});const ro=Y({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:M(44),showToolbar:j,swipeDuration:M(1e3),visibleOptionNum:M(6)},He),lo=Y({},ro,{columns:me(),modelValue:me(),toolbarPosition:ne("top"),columnsFieldNames:Object});var ae=n.defineComponent({name:"Picker",props:lo,emits:["confirm","cancel","change","clickOption","update:modelValue"],setup(e,{emit:t,slots:o}){const a=n.ref(),c=n.ref(e.modelValue.slice(0)),{parent:i}=he(xt),{children:r,linkChildren:u}=ve(dt);u();const l=n.computed(()=>ln(e.columnsFieldNames)),d=n.computed(()=>_e(e.optionHeight)),f=n.computed(()=>an(e.columns,l.value)),h=n.computed(()=>{const{columns:m}=e;switch(f.value){case"multiple":return m;case"cascade":return cn(m,l.value,c);default:return[m]}}),C=n.computed(()=>h.value.some(m=>m.length)),E=n.computed(()=>h.value.map((m,v)=>Fe(m,c.value[v],l.value))),y=(m,v)=>{if(c.value[m]!==v){const B=c.value.slice(0);B[m]=v,c.value=B}},S=()=>({selectedValues:c.value.slice(0),selectedOptions:E.value}),p=(m,v)=>{y(v,m),f.value==="cascade"&&c.value.forEach((B,Z)=>{const q=h.value[Z];ct(q,B,l.value)||y(Z,q.length?q[0][l.value.value]:void 0)}),t("change",Y({columnIndex:v},S()))},A=(m,v)=>t("clickOption",Y({columnIndex:v,currentOption:m},S())),W=()=>{r.forEach(v=>v.stopMomentum());const m=S();return t("confirm",m),m},$=()=>t("cancel",S()),V=()=>h.value.map((m,v)=>n.createVNode(bn,{value:c.value[v],fields:l.value,options:m,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:d.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:B=>p(B,v),onClickOption:B=>A(B,v)},{option:o.option})),F=m=>{if(C.value){const v={height:`${d.value}px`},B={backgroundSize:`100% ${(m-d.value)/2}px`};return[n.createVNode("div",{class:_("mask"),style:B},null),n.createVNode("div",{class:[nn,_("frame")],style:v},null)]}},K=()=>{const m=d.value*+e.visibleOptionNum,v={height:`${m}px`};return n.createVNode("div",{ref:a,class:_("columns"),style:v},[V(),F(m)])},z=()=>{if(e.showToolbar&&!i)return n.createVNode(Cn,n.mergeProps(Ne(e,pn),{onConfirm:W,onCancel:$}),Ne(o,wn))};n.watch(h,m=>{m.forEach((v,B)=>{v.length&&!ct(v,c.value[B],l.value)&&y(B,at(v)[l.value.value])})},{immediate:!0});let w;return n.watch(()=>e.modelValue,m=>{!ke(m,c.value)&&!ke(m,w)&&(c.value=m.slice(0))},{deep:!0}),n.watch(c,m=>{ke(m,e.modelValue)||(w=m.slice(0),t("update:modelValue",w))},{immediate:!0}),ue("touchmove",Pe,{target:a}),Q({confirm:W,getSelectedOptions:()=>E.value}),()=>{var m,v;return n.createVNode("div",{class:_()},[e.toolbarPosition==="top"?z():null,e.loading?n.createVNode(hn,{class:_("loading")},null):null,(m=o["columns-top"])==null?void 0:m.call(o),K(),(v=o["columns-bottom"])==null?void 0:v.call(o),e.toolbarPosition==="bottom"?z():null])}}});ae.install=function(e){e.component(ae.name,ae)};var so={title:"Picker \u9009\u62E9\u5668",category:"\u6570\u636E\u5C55\u793A",status:"100%",install(e){e.component(ae.name,ae)}};const uo={text:{type:String,default:"hhui tag"},test:{type:Object}};var yo="",ce=n.defineComponent({name:"Tag",props:uo,emits:[],setup(e,t){return()=>n.createVNode("div",{class:"hhui-tag"},[e.text])}});ce.install=function(e){e.component(ce.name,ce)};var fo={title:"Tag \u6807\u7B7E",category:"\u901A\u7528",status:"90%",install(e){e.component(ce.name,ce)}};const mo=[Bt,so,fo];var ho={version:"1.0.8",install(e){mo.forEach(t=>e.use(t))}};L.Button=te,L.Picker=ae,L.Tag=ce,L.default=ho,Object.defineProperties(L,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
