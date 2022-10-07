var BetterVantUI=function(e,t){"use strict";const n=e=>null!=e,o=e=>"function"==typeof e,l=e=>null!==e&&"object"==typeof e,a=e=>"number"==typeof e||/^\d+(\.\d+)?$/.test(e);function i(){}const r=Object.assign,c="undefined"!=typeof window;function s(e,t){const n=t.split(".");let o=e;return n.forEach((e=>{var t;o=l(o)&&null!=(t=o[e])?t:""})),o}function u(e,t,n){return t.reduce(((t,o)=>(n&&void 0===e[o]||(t[o]=e[o]),t)),{})}const d=(e,t)=>JSON.stringify(e)===JSON.stringify(t),v=[Number,String],p={type:Boolean,default:!0},f=e=>({type:e,required:!0}),m=()=>({type:Array,default:()=>[]}),h=e=>({type:v,default:e}),g=e=>({type:String,default:e});var b="undefined"!=typeof window;function w(e){return b?requestAnimationFrame(e):-1}function y(e){w((()=>w(e)))}var x,C,N=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),V=e=>{const n=t.unref(e);if(n===window){const e=n.innerWidth,t=n.innerHeight;return N(e,t)}return(null==n?void 0:n.getBoundingClientRect)?n.getBoundingClientRect():N(0,0)};function k(e){const n=t.inject(e,null);if(n){const e=t.getCurrentInstance(),{link:o,unlink:l,internalChildren:a}=n;o(e),t.onUnmounted((()=>l(e)));return{parent:n,index:t.computed((()=>a.indexOf(e)))}}return{parent:null,index:t.ref(-1)}}function S(e,n,o){const l=function(e){const n=[],o=e=>{Array.isArray(e)&&e.forEach((e=>{var l;t.isVNode(e)&&(n.push(e),(null==(l=e.component)?void 0:l.subTree)&&(n.push(e.component.subTree),o(e.component.subTree.children)),e.children&&o(e.children))}))};return o(e),n}(e.subTree.children);o.sort(((e,t)=>l.indexOf(e.vnode)-l.indexOf(t.vnode)));const a=o.map((e=>e.proxy));n.sort(((e,t)=>a.indexOf(e)-a.indexOf(t)))}function T(e){const n=t.reactive([]),o=t.reactive([]),l=t.getCurrentInstance();return{children:n,linkChildren:a=>{t.provide(e,Object.assign({link:e=>{e.proxy&&(o.push(e),n.push(e.proxy),S(l,n,o))},unlink:e=>{const t=o.indexOf(e);n.splice(t,1),o.splice(t,1)},children:n,internalChildren:o},a))}}}function $(e){let n;t.onMounted((()=>{e(),t.nextTick((()=>{n=!0}))})),t.onActivated((()=>{n&&e()}))}function B(e,n,o={}){if(!b)return;const{target:l=window,passive:a=!1,capture:i=!1}=o;let r;const c=o=>{const l=t.unref(o);l&&!r&&(l.addEventListener(e,n,{capture:i,passive:a}),r=!0)},s=o=>{const l=t.unref(o);l&&r&&(l.removeEventListener(e,n,i),r=!1)};t.onUnmounted((()=>s(l))),t.onDeactivated((()=>s(l))),$((()=>c(l))),t.isRef(l)&&t.watch(l,((e,t)=>{s(t),c(e)}))}var O,I=/scroll|auto|overlay/i,z=b?window:void 0;function M(e){return"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType}function A(e,n=z){const o=t.ref();return t.onMounted((()=>{e.value&&(o.value=function(e,t=z){let n=e;for(;n&&n!==t&&M(n);){const{overflowY:e}=window.getComputedStyle(n);if(I.test(e))return n;n=n.parentNode}return t}(e.value,n))})),o}function E(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function H(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function D(e,t){if(e===window)return 0;const n=t?E(t):window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return V(e).top+n}c&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());function P(e,t){("boolean"!=typeof e.cancelable||e.cancelable)&&e.preventDefault(),t&&(e=>{e.stopPropagation()})(e)}function R(e){const n=t.unref(e);if(!n)return!1;const o=window.getComputedStyle(n),l="none"===o.display,a=null===n.offsetParent&&"fixed"!==o.position;return l||a}const{width:L,height:j}=function(){if(!x&&(x=t.ref(0),C=t.ref(0),b)){const e=()=>{x.value=window.innerWidth,C.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:x,height:C}}();function Y(e){if(n(e))return a(e)?`${e}px`:String(e)}let X;function W(e){return+(e=e.replace(/rem/g,""))*function(){if(!X){const e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;X=parseFloat(t)}return X}()}function F(e){if("number"==typeof e)return e;if(c){if(e.includes("rem"))return W(e);if(e.includes("vw"))return function(e){return+(e=e.replace(/vw/g,""))*L.value/100}(e);if(e.includes("vh"))return function(e){return+(e=e.replace(/vh/g,""))*j.value/100}(e)}return parseFloat(e)}const U=/-(\w)/g,Z=e=>e.replace(U,((e,t)=>t.toUpperCase())),_=(e,t,n)=>Math.min(Math.max(e,t),n),{hasOwnProperty:q}=Object.prototype;function J(e,t){return Object.keys(t).forEach((o=>{!function(e,t,o){const a=t[o];n(a)&&(q.call(e,o)&&l(a)?e[o]=J(Object(e[o]),a):e[o]=a)}(e,t,o)})),e}const G=t.ref("zh-CN"),K=t.reactive({"zh-CN":{name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}}});var Q={messages:()=>K[G.value],use(e,t){G.value=e,this.add({[e]:t})},add(e={}){J(K,e)}};function ee(e){const t=Z(e)+".";return(e,...n)=>{const l=Q.messages(),a=s(l,t+e)||s(l,e);return o(a)?a(...n):a}}function te(e,t){return t?"string"==typeof t?` ${e}--${t}`:Array.isArray(t)?t.reduce(((t,n)=>t+te(e,n)),""):Object.keys(t).reduce(((n,o)=>n+(t[o]?te(e,o):"")),""):""}function ne(e){return(t,n)=>(t&&"string"!=typeof t&&(n=t,t=""),`${t=t?`${e}__${t}`:e}${te(t,n)}`)}function oe(e){const t=`van-${e}`;return[t,ne(t),ee(t)]}const le="van-hairline",ae=`${le}--top-bottom`,ie=`${le}-unset--top-bottom`,re="van-haptics-feedback";function ce(e,{args:t=[],done:n,canceled:a}){if(e){const c=e.apply(null,t);l(r=c)&&o(r.then)&&o(r.catch)?c.then((e=>{e?n():a&&a()})).catch(i):c?n():a&&a()}else n();var r}function se(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(Z(`-${n}`),e))},e}function ue(e){const t=`van-${e}`;return console.log("%c 🍔 prefixedName","color:#e41a6a",t),[t,ne(t),ee(t)]}const[de,ve,pe]=ue("picker"),fe=e=>e.find((e=>!e.disabled))||e[0];function me(e,t){for(let n=t=_(t,0,e.length);n<e.length;n++)if(!e[n].disabled)return n;for(let n=t-1;n>=0;n--)if(!e[n].disabled)return n;return 0}const he=(e,t,n)=>void 0!==t&&!!e.find((e=>e[n.value]===t));function ge(e,t,n){const o=e.findIndex((e=>e[n.value]===t));return e[me(e,o)]}function be(e){const n=t.getCurrentInstance();n&&r(n.proxy,e)}const[we,ye]=oe("loading"),xe=Array(12).fill(null).map(((e,n)=>t.createVNode("i",{class:ye("line",String(n+1))},null))),Ce=t.createVNode("svg",{class:ye("circular"),viewBox:"25 25 50 50"},[t.createVNode("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Ne={size:v,type:g("circular"),color:String,vertical:Boolean,textSize:v,textColor:String};const Ve=se(t.defineComponent({name:we,props:Ne,setup(e,{slots:o}){const l=t.computed((()=>r({color:e.color},function(e){if(n(e)){if(Array.isArray(e))return{width:Y(e[0]),height:Y(e[1])};const t=Y(e);return{width:t,height:t}}}(e.size)))),a=()=>{var n;if(o.default)return t.createVNode("span",{class:ye("text"),style:{fontSize:Y(e.textSize),color:null!=(n=e.textColor)?n:e.color}},[o.default()])};return()=>{const{type:n,vertical:o}=e;return t.createVNode("div",{class:ye([n,{vertical:o}]),"aria-live":"polite","aria-busy":!0},[t.createVNode("span",{class:ye("spinner",n),style:l.value},["spinner"===n?xe:Ce]),a()])}}}));function ke(){const e=t.ref(0),n=t.ref(0),o=t.ref(0),l=t.ref(0),a=t.ref(0),i=t.ref(0),r=t.ref(""),c=()=>{o.value=0,l.value=0,a.value=0,i.value=0,r.value=""};return{move:t=>{const c=t.touches[0];o.value=(c.clientX<0?0:c.clientX)-e.value,l.value=c.clientY-n.value,a.value=Math.abs(o.value),i.value=Math.abs(l.value);var s,u;(!r.value||a.value<10&&i.value<10)&&(r.value=(s=a.value,u=i.value,s>u?"horizontal":u>s?"vertical":""))},start:t=>{c(),e.value=t.touches[0].clientX,n.value=t.touches[0].clientY},reset:c,startX:e,startY:n,deltaX:o,deltaY:l,offsetX:a,offsetY:i,direction:r,isVertical:()=>"vertical"===r.value,isHorizontal:()=>"horizontal"===r.value}}const[Se,Te]=ue("picker-column"),$e=Symbol(Se),Be=t.defineComponent({name:Se,props:{value:v,fields:f(Object),options:m(),readonly:Boolean,allowHtml:Boolean,optionHeight:f(Number),swipeDuration:f(v),visibleOptionNum:f(v)},emits:["change","clickOption"],setup(e,{emit:n,slots:o}){let l,a,i,r,c;const s=t.ref(),u=t.ref(),d=t.ref(0),v=t.ref(0),p=ke(),f=()=>e.options.length,m=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,h=t=>{const o=me(e.options,t),a=-o*e.optionHeight,i=()=>{const t=e.options[o][e.fields.value];t!==e.value&&n("change",t)};l&&a!==d.value?c=i:i(),d.value=a},g=t=>_(Math.round(-t/e.optionHeight),0,f()-1),b=()=>{l=!1,v.value=0,c&&(c(),c=null)},w=t=>{if(!e.readonly){if(p.start(t),l){const e=function(e){const{transform:t}=window.getComputedStyle(e),n=t.slice(7,t.length-1).split(", ")[5];return Number(n)}(u.value);d.value=Math.min(0,e-m())}v.value=0,a=d.value,i=Date.now(),r=a,c=null}},y=()=>{if(e.readonly)return;const t=d.value-r,n=Date.now()-i;if(n<300&&Math.abs(t)>15)return void((t,n)=>{const o=Math.abs(t/n);t=d.value+o/.003*(t<0?-1:1);const l=g(t);v.value=+e.swipeDuration,h(l)})(t,n);const o=g(d.value);v.value=200,h(o),setTimeout((()=>{l=!1}),0)},x=()=>{const a={height:`${e.optionHeight}px`};return e.options.map(((i,r)=>{const s=i[e.fields.text],{disabled:u}=i,d=i[e.fields.value],p={role:"button",style:a,tabindex:u?-1:0,class:[Te("item",{disabled:u,selected:d===e.value}),i.className],onClick:()=>(t=>{l||e.readonly||(c=null,v.value=200,h(t),n("clickOption",e.options[t]))})(r)},f={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:s};return t.createVNode("li",p,[o.option?o.option(i):t.createVNode("div",f,null)])}))};return k($e),be({stopMomentum:b}),t.watchEffect((()=>{const t=e.options.findIndex((t=>t[e.fields.value]===e.value)),n=-me(e.options,t)*e.optionHeight;d.value=n})),B("touchmove",(t=>{if(e.readonly)return;p.move(t),p.isVertical()&&(l=!0,P(t,!0)),d.value=_(a+p.deltaY.value,-f()*e.optionHeight,e.optionHeight);const n=Date.now();n-i>300&&(i=n,r=d.value)}),{target:s}),()=>t.createVNode("div",{ref:s,class:Te(),onTouchstartPassive:w,onTouchend:y,onTouchcancel:y},[t.createVNode("ul",{ref:u,style:{transform:`translate3d(0, ${d.value+m()}px, 0)`,transitionDuration:`${v.value}ms`,transitionProperty:v.value?"all":"none"},class:Te("wrapper"),onTransitionend:b},[x()])])}}),[Oe]=ue("picker-toolbar"),Ie={title:String,cancelButtonText:String,confirmButtonText:String},ze=["cancel","confirm","title","toolbar"],Me=Object.keys(Ie),Ae=t.defineComponent({name:Oe,props:Ie,emits:["confirm","cancel"],setup(e,{emit:n,slots:o}){const l=()=>n("cancel"),a=()=>n("confirm"),i=()=>{const n=e.cancelButtonText||pe("cancel");return t.createVNode("button",{type:"button",class:[ve("cancel"),re],onClick:l},[o.cancel?o.cancel():n])},r=()=>{const n=e.confirmButtonText||pe("confirm");return t.createVNode("button",{type:"button",class:[ve("confirm"),re],onClick:a},[o.confirm?o.confirm():n])};return()=>t.createVNode("div",{class:ve("toolbar")},[o.toolbar?o.toolbar():[i(),o.title?o.title():e.title?t.createVNode("div",{class:[ve("title"),"van-ellipsis"]},[e.title]):void 0,r()]])}});let Ee=0;function He(){const e=t.getCurrentInstance(),{name:n="unknown"}=(null==e?void 0:e.type)||{};return"test"===process.env.NODE_ENV?n:`${n}-${++Ee}`}const De={to:[String,Object],url:String,replace:Boolean};const Pe=Symbol();function Re(e){const n=t.inject(Pe,null);n&&t.watch(n,(t=>{t&&e()}))}const[Le,je]=oe("sticky"),Ye={zIndex:v,position:g("top"),container:Object,offsetTop:h(0),offsetBottom:h(0)};const Xe=se(t.defineComponent({name:Le,props:Ye,emits:["scroll","change"],setup(e,{emit:n,slots:o}){const l=t.ref(),a=A(l),i=t.reactive({fixed:!1,width:0,height:0,transform:0}),s=t.computed((()=>F("top"===e.position?e.offsetTop:e.offsetBottom))),u=t.computed((()=>{const{fixed:e,height:t,width:n}=i;if(e)return{width:`${n}px`,height:`${t}px`}})),d=t.computed((()=>{if(!i.fixed)return;const t=r(function(e){const t={};return void 0!==e&&(t.zIndex=+e),t}(e.zIndex),{width:`${i.width}px`,height:`${i.height}px`,[e.position]:`${s.value}px`});return i.transform&&(t.transform=`translate3d(0, ${i.transform}px, 0)`),t})),v=()=>{if(!l.value||R(l))return;const{container:t,position:o}=e,a=V(l),r=E(window);if(i.width=a.width,i.height=a.height,"top"===o)if(t){const e=V(t),n=e.bottom-s.value-i.height;i.fixed=s.value>a.top&&e.bottom>0,i.transform=n<0?n:0}else i.fixed=s.value>a.top;else{const{clientHeight:e}=document.documentElement;if(t){const n=V(t),o=e-n.top-s.value-i.height;i.fixed=e-s.value<a.bottom&&e>n.top,i.transform=o<0?-o:0}else i.fixed=e-s.value<a.bottom}(e=>{n("scroll",{scrollTop:e,isFixed:i.fixed})})(r)};return t.watch((()=>i.fixed),(e=>n("change",e))),B("scroll",v,{target:a,passive:!0}),function(e,n){if(!c||!window.IntersectionObserver)return;const o=new IntersectionObserver((e=>{n(e[0].intersectionRatio>0)}),{root:document.body}),l=()=>{e.value&&o.unobserve(e.value)};t.onDeactivated(l),t.onBeforeUnmount(l),$((()=>{e.value&&o.observe(e.value)}))}(l,v),()=>{var e;return t.createVNode("div",{ref:l,style:u.value},[t.createVNode("div",{class:je({fixed:i.fixed}),style:d.value},[null==(e=o.default)?void 0:e.call(o)])])}}})),[We,Fe]=oe("badge"),Ue={dot:Boolean,max:v,tag:g("div"),color:String,offset:Array,content:v,showZero:p,position:g("top-right")};const Ze=se(t.defineComponent({name:We,props:Ue,setup(e,{slots:o}){const l=()=>{if(o.content)return!0;const{content:t,showZero:l}=e;return n(t)&&""!==t&&(l||0!==t&&"0"!==t)},i=()=>{const{dot:t,max:i,content:r}=e;if(!t&&l())return o.content?o.content():n(i)&&a(r)&&+r>i?`${i}+`:r},r=t.computed((()=>{const t={background:e.color};if(e.offset){const[n,l]=e.offset;o.default?(t.top=Y(l),t.right="number"==typeof n?Y(-n):n.startsWith("-")?n.replace("-",""):`-${n}`):(t.marginTop=Y(l),t.marginLeft=Y(n))}return t})),c=()=>{if(l()||e.dot)return t.createVNode("div",{class:Fe([e.position,{dot:e.dot,fixed:!!o.default}]),style:r.value},[i()])};return()=>{if(o.default){const{tag:n}=e;return t.createVNode(n,{class:Fe("wrapper")},{default:()=>[o.default(),c()]})}return c()}}})),[_e,qe]=oe("tab");var Je=t.defineComponent({name:_e,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:v,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:p},setup(e,{slots:o}){const l=t.computed((()=>{const t={},{type:n,color:o,disabled:l,isActive:a,activeColor:i,inactiveColor:r}=e;o&&"card"===n&&(t.borderColor=o,l||(a?t.backgroundColor=o:t.color=o));const c=a?i:r;return c&&(t.color=c),t})),a=()=>{const l=t.createVNode("span",{class:qe("text",{ellipsis:!e.scrollable})},[o.title?o.title():e.title]);return e.dot||n(e.badge)&&""!==e.badge?t.createVNode(Ze,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[l]}):l};return()=>t.createVNode("div",{id:e.id,role:"tab",class:[qe([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:l.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[a()])}});const[Ge,Ke]=oe("swipe"),Qe={loop:p,width:v,height:v,vertical:Boolean,autoplay:h(0),duration:h(500),touchable:p,lazyRender:Boolean,initialSwipe:h(0),indicatorColor:String,showIndicators:p,stopPropagation:p},et=Symbol(Ge);const tt=se(t.defineComponent({name:Ge,props:Qe,emits:["change"],setup(e,{emit:n,slots:o}){const l=t.ref(),a=t.ref(),i=t.reactive({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),r=ke(),{children:c,linkChildren:s}=T(et),u=t.computed((()=>c.length)),d=t.computed((()=>i[e.vertical?"height":"width"])),v=t.computed((()=>e.vertical?r.deltaY.value:r.deltaX.value)),p=t.computed((()=>{if(i.rect){return(e.vertical?i.rect.height:i.rect.width)-d.value*u.value}return 0})),f=t.computed((()=>Math.ceil(Math.abs(p.value)/d.value))),m=t.computed((()=>u.value*d.value)),h=t.computed((()=>(i.active+u.value)%u.value)),g=t.computed((()=>{const t=e.vertical?"vertical":"horizontal";return r.direction.value===t})),w=t.computed((()=>{const t={transitionDuration:`${i.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${i.offset}px)`};if(d.value){const n=e.vertical?"height":"width",o=e.vertical?"width":"height";t[n]=`${m.value}px`,t[o]=e[o]?`${e[o]}px`:""}return t})),x=(t,n=0)=>{let o=t*d.value;e.loop||(o=Math.min(o,-p.value));let l=n-o;return e.loop||(l=_(l,p.value,0)),l},C=({pace:t=0,offset:o=0,emitChange:l})=>{if(u.value<=1)return;const{active:a}=i,r=(t=>{const{active:n}=i;return t?e.loop?_(n+t,-1,u.value):_(n+t,0,f.value):n})(t),s=x(r,o);if(e.loop){if(c[0]&&s!==p.value){const e=s<p.value;c[0].setOffset(e?m.value:0)}if(c[u.value-1]&&0!==s){const e=s>0;c[u.value-1].setOffset(e?-m.value:0)}}i.active=r,i.offset=s,l&&r!==a&&n("change",h.value)},N=()=>{i.swiping=!0,i.active<=-1?C({pace:u.value}):i.active>=u.value&&C({pace:-u.value})},V=()=>{N(),r.reset(),y((()=>{i.swiping=!1,C({pace:1,emitChange:!0})}))};let k;const S=()=>clearTimeout(k),$=()=>{S(),e.autoplay>0&&u.value>1&&(k=setTimeout((()=>{V(),$()}),+e.autoplay))},I=(n=+e.initialSwipe)=>{if(!l.value)return;const o=()=>{var t,o;if(!R(l)){const n={width:l.value.offsetWidth,height:l.value.offsetHeight};i.rect=n,i.width=+(null!=(t=e.width)?t:n.width),i.height=+(null!=(o=e.height)?o:n.height)}u.value&&(n=Math.min(u.value-1,n)),i.active=n,i.swiping=!0,i.offset=x(n),c.forEach((e=>{e.setOffset(0)})),$()};R(l)?t.nextTick().then(o):o()},z=()=>I(i.active);let M;const A=t=>{e.touchable&&(r.start(t),M=Date.now(),S(),N())},E=()=>{if(!e.touchable||!i.swiping)return;const t=Date.now()-M,n=v.value/t;if((Math.abs(n)>.25||Math.abs(v.value)>d.value/2)&&g.value){const t=e.vertical?r.offsetY.value:r.offsetX.value;let n=0;n=e.loop?t>0?v.value>0?-1:1:0:-Math[v.value>0?"ceil":"floor"](v.value/d.value),C({pace:n,emitChange:!0})}else v.value&&C({pace:0});i.swiping=!1,$()},H=(n,o)=>{const l=o===h.value,a=l?{backgroundColor:e.indicatorColor}:void 0;return t.createVNode("i",{style:a,class:Ke("indicator",{active:l})},null)};return be({prev:()=>{N(),r.reset(),y((()=>{i.swiping=!1,C({pace:-1,emitChange:!0})}))},next:V,state:i,resize:z,swipeTo:(t,n={})=>{N(),r.reset(),y((()=>{let o;o=e.loop&&t===u.value?0===i.active?0:t:t%u.value,n.immediate?y((()=>{i.swiping=!1})):i.swiping=!1,C({pace:o-i.active,emitChange:!0})}))}}),s({size:d,props:e,count:u,activeIndicator:h}),t.watch((()=>e.initialSwipe),(e=>I(+e))),t.watch(u,(()=>I(i.active))),t.watch((()=>e.autoplay),$),t.watch([L,j],z),t.watch(function(){if(!O&&(O=t.ref("visible"),b)){const e=()=>{O.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return O}(),(e=>{"visible"===e?$():S()})),t.onMounted(I),t.onActivated((()=>I(i.active))),Re((()=>I(i.active))),t.onDeactivated(S),t.onBeforeUnmount(S),B("touchmove",(t=>{if(e.touchable&&i.swiping&&(r.move(t),g.value)){!e.loop&&(0===i.active&&v.value>0||i.active===u.value-1&&v.value<0)||(P(t,e.stopPropagation),C({offset:v.value}))}}),{target:a}),()=>{var n;return t.createVNode("div",{ref:l,class:Ke()},[t.createVNode("div",{ref:a,style:w.value,class:Ke("track",{vertical:e.vertical}),onTouchstartPassive:A,onTouchend:E,onTouchcancel:E},[null==(n=o.default)?void 0:n.call(o)]),o.indicator?o.indicator({active:h.value,total:u.value}):e.showIndicators&&u.value>1?t.createVNode("div",{class:Ke("indicators",{vertical:e.vertical})},[Array(u.value).fill("").map(H)]):void 0])}}})),[nt,ot]=oe("tabs");var lt=t.defineComponent({name:nt,props:{count:f(Number),inited:Boolean,animated:Boolean,duration:f(v),swipeable:Boolean,lazyRender:Boolean,currentIndex:f(Number)},emits:["change"],setup(e,{emit:n,slots:o}){const l=t.ref(),a=e=>n("change",e),i=()=>{var n;const i=null==(n=o.default)?void 0:n.call(o);return e.animated||e.swipeable?t.createVNode(tt,{ref:l,loop:!1,class:ot("track"),duration:1e3*+e.duration,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:a},{default:()=>[i]}):i},r=t=>{const n=l.value;n&&n.state.active!==t&&n.swipeTo(t,{immediate:!e.inited})};return t.watch((()=>e.currentIndex),r),t.onMounted((()=>{r(e.currentIndex)})),be({swipeRef:l}),()=>t.createVNode("div",{class:ot("content",{animated:e.animated||e.swipeable})},[i()])}});const[at,it]=oe("tabs"),rt={type:g("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:h(0),duration:h(.3),animated:Boolean,ellipsis:p,swipeable:Boolean,scrollspy:Boolean,offsetTop:h(0),background:String,lazyRender:p,lineWidth:v,lineHeight:v,beforeChange:Function,swipeThreshold:h(5),titleActiveColor:String,titleInactiveColor:String},ct=Symbol(at);var st=t.defineComponent({name:at,props:rt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:o,slots:l}){let a,i,r;const c=t.ref(),s=t.ref(),d=t.ref(),v=t.ref(),p=He(),f=A(c),[m,h]=function(){const e=t.ref([]),n=[];return t.onBeforeUpdate((()=>{e.value=[]})),[e,t=>(n[t]||(n[t]=n=>{e.value[t]=n}),n[t])]}(),{children:g,linkChildren:b}=T(ct),y=t.reactive({inited:!1,position:"",lineStyle:{},currentIndex:-1}),x=t.computed((()=>g.length>e.swipeThreshold||!e.ellipsis||e.shrink)),C=t.computed((()=>({borderColor:e.color,background:e.background}))),N=(e,t)=>{var n;return null!=(n=e.name)?n:t},k=t.computed((()=>{const e=g[y.currentIndex];if(e)return N(e,y.currentIndex)})),S=t.computed((()=>F(e.offsetTop))),O=t.computed((()=>e.sticky?S.value+a:0)),I=t=>{const n=s.value,o=m.value;if(!(x.value&&n&&o&&o[y.currentIndex]))return;const l=o[y.currentIndex].$el;!function(e,t,n){let o=0;const l=e.scrollLeft,a=0===n?1:Math.round(1e3*n/16);!function n(){e.scrollLeft+=(t-l)/a,++o<a&&w(n)}()}(n,l.offsetLeft-(n.offsetWidth-l.offsetWidth)/2,t?0:+e.duration)},z=()=>{const o=y.inited;t.nextTick((()=>{const t=m.value;if(!t||!t[y.currentIndex]||"line"!==e.type||R(c.value))return;const l=t[y.currentIndex].$el,{lineWidth:a,lineHeight:i}=e,r=l.offsetLeft+l.offsetWidth/2,s={width:Y(a),backgroundColor:e.color,transform:`translateX(${r}px) translateX(-50%)`};if(o&&(s.transitionDuration=`${e.duration}s`),n(i)){const e=Y(i);s.height=e,s.borderRadius=e}y.lineStyle=s}))},M=(t,l)=>{const a=(e=>{const t=e<y.currentIndex?-1:1;for(;e>=0&&e<g.length;){if(!g[e].disabled)return e;e+=t}})(t);if(!n(a))return;const i=g[a],s=N(i,a),u=null!==y.currentIndex;var d;y.currentIndex=a,s!==e.active&&(o("update:active",s),u&&o("change",s,i.title)),l||I(),z(),r&&!e.scrollspy&&(d=Math.ceil(D(c.value)-S.value),H(window,d),H(document.body,d))},P=(e,t)=>{const n=g.find(((t,n)=>N(t,n)===e)),o=n?g.indexOf(n):0;M(o,t)},j=(t=!1)=>{if(e.scrollspy){const n=g[y.currentIndex].$el;if(n&&f.value){const o=D(n,f.value)-O.value;i=!0,function(e,t,n,o){let l=E(e);const a=l<t,i=0===n?1:Math.round(1e3*n/16),r=(t-l)/i;!function n(){l+=r,(a&&l>t||!a&&l<t)&&(l=t),H(e,l),a&&l<t||!a&&l>t?w(n):o&&w(o)}()}(f.value,o,t?0:+e.duration,(()=>{i=!1}))}}},X=(t,n,l)=>{const{title:a,disabled:i}=g[n],r=N(g[n],n);i||(ce(e.beforeChange,{args:[r],done:()=>{M(n),j()}}),function({to:e,url:t,replace:n,$router:o}){e&&o?o[n?"replace":"push"](e):t&&(n?location.replace(t):location.href=t)}(t)),o("clickTab",{name:r,title:a,event:l,disabled:i})},W=e=>{r=e.isFixed,o("scroll",e)},U=()=>{if("line"===e.type&&g.length)return t.createVNode("div",{class:it("line"),style:y.lineStyle},null)},Z=()=>{var n,o;const{type:a,border:i}=e;return t.createVNode("div",{ref:d,class:[it("wrap"),{[ae]:"line"===a&&i}]},[t.createVNode("div",{ref:s,role:"tablist",class:it("nav",[a,{shrink:e.shrink,complete:x.value}]),style:C.value,"aria-orientation":"horizontal"},[null==(n=l["nav-left"])?void 0:n.call(l),g.map(((n,o)=>t.createVNode(Je,t.mergeProps({key:n.id,id:`${p}-${o}`,ref:h(o),type:e.type,color:e.color,style:n.titleStyle,class:n.titleClass,shrink:e.shrink,isActive:o===y.currentIndex,controls:n.id,scrollable:x.value,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:e=>X(n,o,e)},u(n,["dot","badge","title","disabled","showZeroBadge"])),{title:n.$slots.title}))),U(),null==(o=l["nav-right"])?void 0:o.call(l)])])};t.watch([()=>e.color,L],z),t.watch((()=>e.active),(e=>{e!==k.value&&P(e)})),t.watch((()=>g.length),(()=>{y.inited&&(P(e.active),z(),t.nextTick((()=>{I(!0)})))}));return be({resize:()=>{z(),t.nextTick((()=>{var e,t;return null==(t=null==(e=v.value)?void 0:e.swipeRef.value)?void 0:t.resize()}))},scrollTo:e=>{t.nextTick((()=>{P(e),j(!0)}))}}),t.onActivated(z),Re(z),$((()=>{P(e.active,!0),t.nextTick((()=>{y.inited=!0,d.value&&(a=V(d.value).height),I(!0)}))})),B("scroll",(()=>{if(e.scrollspy&&!i){const e=(()=>{for(let e=0;e<g.length;e++){const{top:t}=V(g[e].$el);if(t>O.value)return 0===e?0:e-1}return g.length-1})();M(e)}}),{target:f,passive:!0}),b({id:p,props:e,setLine:z,onRendered:(e,t)=>o("rendered",e,t),currentName:k,scrollIntoView:I}),()=>{var n;return t.createVNode("div",{ref:c,class:it([e.type])},[e.sticky?t.createVNode(Xe,{container:c.value,offsetTop:S.value,onScroll:W},{default:()=>{var e;return[Z(),null==(e=l["nav-bottom"])?void 0:e.call(l)]}}):[Z(),null==(n=l["nav-bottom"])?void 0:n.call(l)],t.createVNode(lt,{ref:v,count:g.length,inited:y.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:y.currentIndex,onChange:M},{default:()=>{var e;return[null==(e=l.default)?void 0:e.call(l)]}})])}}});const ut=Symbol(),[dt,vt]=oe("swipe-item");const pt=se(t.defineComponent({name:dt,setup(e,{slots:n}){let o;const l=t.reactive({offset:0,inited:!1,mounted:!1}),{parent:a,index:i}=k(et);if(!a)return void("production"!==process.env.NODE_ENV&&console.error("[Vant] <SwipeItem> must be a child component of <Swipe>."));const r=t.computed((()=>{const e={},{vertical:t}=a.props;return a.size.value&&(e[t?"height":"width"]=`${a.size.value}px`),l.offset&&(e.transform=`translate${t?"Y":"X"}(${l.offset}px)`),e})),c=t.computed((()=>{const{loop:e,lazyRender:t}=a.props;if(!t||o)return!0;if(!l.mounted)return!1;const n=a.activeIndicator.value,r=a.count.value-1,c=0===n&&e?r:n-1,s=n===r&&e?0:n+1;return o=i.value===n||i.value===c||i.value===s,o}));return t.onMounted((()=>{t.nextTick((()=>{l.mounted=!0}))})),be({setOffset:e=>{l.offset=e}}),()=>{var e;return t.createVNode("div",{class:vt(),style:r.value},[c.value?null==(e=n.default)?void 0:e.call(n):null])}}})),[ft,mt]=oe("tab"),ht=r({},De,{dot:Boolean,name:v,badge:v,title:String,disabled:Boolean,titleClass:null,titleStyle:[String,Object],showZeroBadge:p});const gt=se(t.defineComponent({name:ft,props:ht,setup(e,{slots:n}){const o=He(),l=t.ref(!1),{parent:a,index:i}=k(ct);if(!a)return void("production"!==process.env.NODE_ENV&&console.error("[Vant] <Tab> must be a child component of <Tabs>."));const r=()=>{var t;return null!=(t=e.name)?t:i.value},c=t.computed((()=>{const n=r()===a.currentName.value;return n&&!l.value&&(l.value=!0,a.props.lazyRender&&t.nextTick((()=>{a.onRendered(r(),e.title)}))),n})),s=t.ref(!c.value);return t.watch(c,(e=>{e?s.value=!1:y((()=>{s.value=!0}))})),t.watch((()=>e.title),(()=>{a.setLine(),a.scrollIntoView()})),t.provide(ut,c),()=>{var e;const r=`${a.id}-${i.value}`,{animated:u,swipeable:d,scrollspy:v,lazyRender:p}=a.props;if(!n.default&&!u)return;const f=v||c.value;if(u||d)return t.createVNode(pt,{id:o,role:"tabpanel",class:mt("panel-wrapper",{inactive:s.value}),tabindex:c.value?0:-1,"aria-hidden":!c.value,"aria-labelledby":r},{default:()=>{var e;return[t.createVNode("div",{class:mt("panel")},[null==(e=n.default)?void 0:e.call(n)])]}});const m=l.value||v||!p?null==(e=n.default)?void 0:e.call(n):null;return be({id:o}),t.withDirectives(t.createVNode("div",{id:o,role:"tabpanel",class:mt("panel"),tabindex:f?0:-1,"aria-labelledby":r},[m]),[[t.vShow,f]])}}})),bt=se(st),[wt,yt,xt]=oe("picker"),[Ct]=oe("picker-toolbar"),Nt={title:String,cancelButtonText:String,confirmButtonText:String};var Vt=t.defineComponent({name:Ct,props:Nt,emits:["confirm","cancel"],setup(e,{emit:n,slots:o}){const l=()=>n("cancel"),a=()=>n("confirm"),i=()=>{const n=e.cancelButtonText||xt("cancel");return t.createVNode("button",{type:"button",class:[yt("cancel"),re],onClick:l},[o.cancel?o.cancel():n])},r=()=>{const n=e.confirmButtonText||xt("confirm");return t.createVNode("button",{type:"button",class:[yt("confirm"),re],onClick:a},[o.confirm?o.confirm():n])};return()=>t.createVNode("div",{class:yt("toolbar")},[o.toolbar?o.toolbar():[i(),o.title?o.title():e.title?t.createVNode("div",{class:[yt("title"),"van-ellipsis"]},[e.title]):void 0,r()]])}});const[kt,St]=oe("picker-group"),Tt=Symbol(kt),$t=r({tabs:m()},Nt);t.defineComponent({name:kt,props:$t,emits:["confirm","cancel"],setup(e,{emit:n,slots:o}){const{children:l,linkChildren:a}=T(Tt);a();const i=()=>{n("confirm",l.map((e=>e.confirm())))},r=()=>n("cancel");return()=>{var n;const l=null==(n=o.default)?void 0:n.call(o);return t.createVNode("div",{class:St()},[t.createVNode(Vt,t.mergeProps(e,{onConfirm:i,onCancel:r}),null),t.createVNode(bt,{shrink:!0,class:St("tabs"),animated:!0},{default:()=>[e.tabs.map(((e,n)=>t.createVNode(gt,{title:e,titleClass:St("tab-title")},{default:()=>[null==l?void 0:l[n]]})))]})])}}});const Bt=r({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:h(44),showToolbar:p,swipeDuration:h(1e3),visibleOptionNum:h(6)},Ie),Ot=r({},Bt,{columns:m(),modelValue:m(),toolbarPosition:g("top"),columnsFieldNames:Object});console.log("%c 🍖 name","color:#42b983",de);const It=se(t.defineComponent({name:"BetterVantPicker",props:Ot,emits:["confirm","cancel","change","clickOption","update:modelValue"],setup(e,{emit:o,slots:l}){const a=t.ref(),i=t.ref(e.modelValue.slice(0)),{parent:c}=k(Tt),{children:s,linkChildren:v}=T($e);v();const p=t.computed((()=>function(e){return r({text:"text",value:"value",children:"children"},e)}(e.columnsFieldNames))),f=t.computed((()=>F(e.optionHeight))),m=t.computed((()=>function(e,t){const n=e[0];if(n){if(Array.isArray(n))return"multiple";if(t.children in n)return"cascade"}return"default"}(e.columns,p.value))),h=t.computed((()=>{const{columns:t}=e;switch(m.value){case"multiple":return t;case"cascade":return function(e,t,o){const l=[];let a={[t.children]:e},i=0;for(;a&&a[t.children];){const e=a[t.children],r=o.value[i];a=n(r)?ge(e,r,t):void 0,!a&&e.length&&(a=ge(e,fe(e)[t.value],t)),i++,l.push(e)}return l}(t,p.value,i);default:return[t]}})),g=t.computed((()=>h.value.some((e=>e.length)))),b=t.computed((()=>h.value.map(((e,t)=>ge(e,i.value[t],p.value))))),w=(e,t)=>{if(i.value[e]!==t){const n=i.value.slice(0);n[e]=t,i.value=n}},y=()=>({selectedValues:i.value.slice(0),selectedOptions:b.value}),x=()=>{s.forEach((e=>e.stopMomentum()));const e=y();return o("confirm",e),e},C=()=>o("cancel",y()),N=()=>h.value.map(((n,a)=>t.createVNode(Be,{value:i.value[a],fields:p.value,options:n,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:f.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:e=>((e,t)=>{w(t,e),"cascade"===m.value&&i.value.forEach(((e,t)=>{const n=h.value[t];he(n,e,p.value)||w(t,n.length?n[0][p.value.value]:void 0)})),o("change",r({columnIndex:t},y()))})(e,a),onClickOption:e=>((e,t)=>o("clickOption",r({columnIndex:t,currentOption:e},y())))(e,a)},{option:l.option}))),V=e=>{if(g.value){const n={height:`${f.value}px`},o={backgroundSize:`100% ${(e-f.value)/2}px`};return[t.createVNode("div",{class:ve("mask"),style:o},null),t.createVNode("div",{class:[ie,ve("frame")],style:n},null)]}},S=()=>{const n=f.value*+e.visibleOptionNum,o={height:`${n}px`};return t.createVNode("div",{ref:a,class:ve("columns"),style:o},[N(),V(n)])},$=()=>{if(e.showToolbar&&!c)return t.createVNode(Ae,t.mergeProps(u(e,Me),{onConfirm:x,onCancel:C}),u(l,ze))};let O;t.watch(h,(e=>{e.forEach(((e,t)=>{e.length&&!he(e,i.value[t],p.value)&&w(t,fe(e)[p.value.value])}))}),{immediate:!0}),t.watch((()=>e.modelValue),(e=>{d(e,i.value)||d(e,O)||(i.value=e.slice(0))}),{deep:!0}),t.watch(i,(t=>{d(t,e.modelValue)||(O=t.slice(0),o("update:modelValue",O))}),{immediate:!0}),B("touchmove",P,{target:a});return be({confirm:x,getSelectedOptions:()=>b.value}),()=>{var n,o;return t.createVNode("div",{class:ve()},["top"===e.toolbarPosition?$():null,e.loading?t.createVNode(Ve,{class:ve("loading")},null):null,null==(n=l["columns-top"])?void 0:n.call(l),S(),null==(o=l["columns-bottom"])?void 0:o.call(l),"bottom"===e.toolbarPosition?$():null])}}})),zt={install(e){e.component(It.name,It)}};return e.BetterPicker=It,e.default=zt,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),e}({},Vue);
