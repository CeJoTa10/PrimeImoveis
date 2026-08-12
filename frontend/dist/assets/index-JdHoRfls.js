(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Y={},Wt=[],ze=()=>{},Po=()=>!1,Rs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Os=t=>t.startsWith("onUpdate:"),de=Object.assign,Ur=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fl=Object.prototype.hasOwnProperty,H=(t,e)=>Fl.call(t,e),O=Array.isArray,qt=t=>Fn(t)==="[object Map]",on=t=>Fn(t)==="[object Set]",xi=t=>Fn(t)==="[object Date]",L=t=>typeof t=="function",ne=t=>typeof t=="string",Je=t=>typeof t=="symbol",W=t=>t!==null&&typeof t=="object",Ro=t=>(W(t)||L(t))&&L(t.then)&&L(t.catch),Oo=Object.prototype.toString,Fn=t=>Oo.call(t),Vl=t=>Fn(t).slice(8,-1),Mo=t=>Fn(t)==="[object Object]",$r=t=>ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wn=Lr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ms=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jl=/-\w/g,Ae=Ms(t=>t.replace(jl,e=>e.slice(1).toUpperCase())),Bl=/\B([A-Z])/g,jt=Ms(t=>t.replace(Bl,"-$1").toLowerCase()),No=Ms(t=>t.charAt(0).toUpperCase()+t.slice(1)),Js=Ms(t=>t?`on${No(t)}`:""),We=(t,e)=>!Object.is(t,e),is=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Do=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ns=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ii;const Ds=()=>Ii||(Ii=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fr(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ne(s)?zl(s):Fr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ne(t)||W(t))return t}const Hl=/;(?![^(]*\))/g,Wl=/:([^]+)/,ql=/\/\*[^]*?\*\//g;function zl(t){const e={};return t.replace(ql,"").split(Hl).forEach(n=>{if(n){const s=n.split(Wl);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function $t(t){let e="";if(ne(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const s=$t(t[n]);s&&(e+=s+" ")}else if(W(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Kl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gl=Lr(Kl);function Lo(t){return!!t||t===""}function Jl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=an(t[s],e[s]);return n}function an(t,e){if(t===e)return!0;let n=xi(t),s=xi(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Je(t),s=Je(e),n||s)return t===e;if(n=O(t),s=O(e),n||s)return n&&s?Jl(t,e):!1;if(n=W(t),s=W(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!an(t[o],e[o]))return!1}}return String(t)===String(e)}function Vr(t,e){return t.findIndex(n=>an(n,e))}const Uo=t=>!!(t&&t.__v_isRef===!0),se=t=>ne(t)?t:t==null?"":O(t)||W(t)&&(t.toString===Oo||!L(t.toString))?Uo(t)?se(t.value):JSON.stringify(t,$o,2):String(t),$o=(t,e)=>Uo(e)?$o(t,e.value):qt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Ys(s,i)+" =>"]=r,n),{})}:on(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ys(n))}:Je(e)?Ys(e):W(e)&&!O(e)&&!Mo(e)?String(e):e,Ys=(t,e="")=>{var n;return Je(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ae;class Yl{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ae&&(ae.active?(this.parent=ae,this.index=(ae.scopes||(ae.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const s=this.effects.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}}run(e){if(this._active){const n=ae;try{return ae=this,e()}finally{ae=n}}}on(){++this._on===1&&(this.prevScope=ae,ae=this)}off(){if(this._on>0&&--this._on===0){if(ae===this)ae=this.prevScope;else{let e=ae;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,s=r.length;n<s;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Xl(){return ae}let Q;const Xs=new WeakSet;class Fo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ae&&(ae.active?ae.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xs.has(this)&&(Xs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ei(this),Bo(this);const e=Q,n=Pe;Q=this,Pe=!0;try{return this.fn()}finally{Ho(this),Q=e,Pe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hr(e);this.deps=this.depsTail=void 0,Ei(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pr(this)&&this.run()}get dirty(){return pr(this)}}let Vo=0,xn,In;function jo(t,e=!1){if(t.flags|=8,e){t.next=In,In=t;return}t.next=xn,xn=t}function jr(){Vo++}function Br(){if(--Vo>0)return;if(In){let e=In;for(In=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;xn;){let e=xn;for(xn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Bo(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ho(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Hr(s),Ql(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function pr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wo(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wo(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===kn)||(t.globalVersion=kn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!pr(t))))return;t.flags|=2;const e=t.dep,n=Q,s=Pe;Q=t,Pe=!0;try{Bo(t);const r=t.fn(t._value);(e.version===0||We(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Q=n,Pe=s,Ho(t),t.flags&=-3}}function Hr(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Hr(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ql(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pe=!0;const qo=[];function lt(){qo.push(Pe),Pe=!1}function ct(){const t=qo.pop();Pe=t===void 0?!0:t}function Ei(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Q;Q=void 0;try{e()}finally{Q=n}}}let kn=0;class Zl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Q||!Pe||Q===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Q)n=this.activeLink=new Zl(Q,this),Q.deps?(n.prevDep=Q.depsTail,Q.depsTail.nextDep=n,Q.depsTail=n):Q.deps=Q.depsTail=n,zo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Q.depsTail,n.nextDep=void 0,Q.depsTail.nextDep=n,Q.depsTail=n,Q.deps===n&&(Q.deps=s)}return n}trigger(e){this.version++,kn++,this.notify(e)}notify(e){jr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Br()}}}function zo(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)zo(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const mr=new WeakMap,Dt=Symbol(""),gr=Symbol(""),An=Symbol("");function ce(t,e,n){if(Pe&&Q){let s=mr.get(t);s||mr.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Wr),r.map=s,r.key=n),r.track()}}function tt(t,e,n,s,r,i){const o=mr.get(t);if(!o){kn++;return}const a=l=>{l&&l.trigger()};if(jr(),e==="clear")o.forEach(a);else{const l=O(t),c=l&&$r(n);if(l&&n==="length"){const u=Number(s);o.forEach((p,x)=>{(x==="length"||x===An||!Je(x)&&x>=u)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(An)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Dt)),qt(t)&&a(o.get(gr)));break;case"delete":l||(a(o.get(Dt)),qt(t)&&a(o.get(gr)));break;case"set":qt(t)&&a(o.get(Dt));break}}Br()}function Bt(t){const e=B(t);return e===t?e:(ce(e,"iterate",An),Te(t)?e:e.map(Oe))}function Ls(t){return ce(t=B(t),"iterate",An),t}function Be(t,e){return ut(t)?Zt(Lt(t)?Oe(e):e):Oe(e)}const ec={__proto__:null,[Symbol.iterator](){return Qs(this,Symbol.iterator,t=>Be(this,t))},concat(...t){return Bt(this).concat(...t.map(e=>O(e)?Bt(e):e))},entries(){return Qs(this,"entries",t=>(t[1]=Be(this,t[1]),t))},every(t,e){return Qe(this,"every",t,e,void 0,arguments)},filter(t,e){return Qe(this,"filter",t,e,n=>n.map(s=>Be(this,s)),arguments)},find(t,e){return Qe(this,"find",t,e,n=>Be(this,n),arguments)},findIndex(t,e){return Qe(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qe(this,"findLast",t,e,n=>Be(this,n),arguments)},findLastIndex(t,e){return Qe(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qe(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zs(this,"includes",t)},indexOf(...t){return Zs(this,"indexOf",t)},join(t){return Bt(this).join(t)},lastIndexOf(...t){return Zs(this,"lastIndexOf",t)},map(t,e){return Qe(this,"map",t,e,void 0,arguments)},pop(){return pn(this,"pop")},push(...t){return pn(this,"push",t)},reduce(t,...e){return Si(this,"reduce",t,e)},reduceRight(t,...e){return Si(this,"reduceRight",t,e)},shift(){return pn(this,"shift")},some(t,e){return Qe(this,"some",t,e,void 0,arguments)},splice(...t){return pn(this,"splice",t)},toReversed(){return Bt(this).toReversed()},toSorted(t){return Bt(this).toSorted(t)},toSpliced(...t){return Bt(this).toSpliced(...t)},unshift(...t){return pn(this,"unshift",t)},values(){return Qs(this,"values",t=>Be(this,t))}};function Qs(t,e,n){const s=Ls(t),r=s[e]();return s!==t&&!Te(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const tc=Array.prototype;function Qe(t,e,n,s,r,i){const o=Ls(t),a=o!==t&&!Te(t),l=o[e];if(l!==tc[e]){const p=l.apply(t,i);return a?Oe(p):p}let c=n;o!==t&&(a?c=function(p,x){return n.call(this,Be(t,p),x,t)}:n.length>2&&(c=function(p,x){return n.call(this,p,x,t)}));const u=l.call(o,c,s);return a&&r?r(u):u}function Si(t,e,n,s){const r=Ls(t),i=r!==t&&!Te(t);let o=n,a=!1;r!==t&&(i?(a=s.length===0,o=function(c,u,p){return a&&(a=!1,c=Be(t,c)),n.call(this,c,Be(t,u),p,t)}):n.length>3&&(o=function(c,u,p){return n.call(this,c,u,p,t)}));const l=r[e](o,...s);return a?Be(t,l):l}function Zs(t,e,n){const s=B(t);ce(s,"iterate",An);const r=s[e](...n);return(r===-1||r===!1)&&Kr(n[0])?(n[0]=B(n[0]),s[e](...n)):r}function pn(t,e,n=[]){lt(),jr();const s=B(t)[e].apply(t,n);return Br(),ct(),s}const nc=Lr("__proto__,__v_isRef,__isVue"),Ko=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Je));function sc(t){Je(t)||(t=String(t));const e=B(this);return ce(e,"has",t),e.hasOwnProperty(t)}class Go{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?hc:Qo:i?Xo:Yo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=O(e);if(!r){let l;if(o&&(l=ec[n]))return l;if(n==="hasOwnProperty")return sc}const a=Reflect.get(e,n,ue(e)?e:s);if((Je(n)?Ko.has(n):nc(n))||(r||ce(e,"get",n),i))return a;if(ue(a)){const l=o&&$r(n)?a:a.value;return r&&W(l)?vr(l):l}return W(a)?r?vr(a):ln(a):a}}class Jo extends Go{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=O(e)&&$r(n);if(!this._isShallow){const c=ut(i);if(!Te(s)&&!ut(s)&&(i=B(i),s=B(s)),!o&&ue(i)&&!ue(s))return c||(i.value=s),!0}const a=o?Number(n)<e.length:H(e,n),l=Reflect.set(e,n,s,ue(e)?e:r);return e===B(r)&&l&&(a?We(s,i)&&tt(e,"set",n,s):tt(e,"add",n,s)),l}deleteProperty(e,n){const s=H(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&tt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Je(n)||!Ko.has(n))&&ce(e,"has",n),s}ownKeys(e){return ce(e,"iterate",O(e)?"length":Dt),Reflect.ownKeys(e)}}class rc extends Go{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ic=new Jo,oc=new rc,ac=new Jo(!0);const br=t=>t,Zn=t=>Reflect.getPrototypeOf(t);function lc(t,e,n){return function(...s){const r=this.__v_raw,i=B(r),o=qt(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?br:e?Zt:Oe;return!e&&ce(i,"iterate",l?gr:Dt),de(Object.create(c),{next(){const{value:p,done:x}=c.next();return x?{value:p,done:x}:{value:a?[u(p[0]),u(p[1])]:u(p),done:x}}})}}function es(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function cc(t,e){const n={get(r){const i=this.__v_raw,o=B(i),a=B(r);t||(We(r,a)&&ce(o,"get",r),ce(o,"get",a));const{has:l}=Zn(o),c=e?br:t?Zt:Oe;if(l.call(o,r))return c(i.get(r));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&ce(B(r),"iterate",Dt),r.size},has(r){const i=this.__v_raw,o=B(i),a=B(r);return t||(We(r,a)&&ce(o,"has",r),ce(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=B(a),c=e?br:t?Zt:Oe;return!t&&ce(l,"iterate",Dt),a.forEach((u,p)=>r.call(i,c(u),c(p),o))}};return de(n,t?{add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear")}:{add(r){const i=B(this),o=Zn(i),a=B(r),l=!e&&!Te(r)&&!ut(r)?a:r;return o.has.call(i,l)||We(r,l)&&o.has.call(i,r)||We(a,l)&&o.has.call(i,a)||(i.add(l),tt(i,"add",l,l)),this},set(r,i){!e&&!Te(i)&&!ut(i)&&(i=B(i));const o=B(this),{has:a,get:l}=Zn(o);let c=a.call(o,r);c||(r=B(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,i),c?We(i,u)&&tt(o,"set",r,i):tt(o,"add",r,i),this},delete(r){const i=B(this),{has:o,get:a}=Zn(i);let l=o.call(i,r);l||(r=B(r),l=o.call(i,r)),a&&a.call(i,r);const c=i.delete(r);return l&&tt(i,"delete",r,void 0),c},clear(){const r=B(this),i=r.size!==0,o=r.clear();return i&&tt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=lc(r,t,e)}),n}function qr(t,e){const n=cc(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(H(n,r)&&r in s?n:s,r,i)}const uc={get:qr(!1,!1)},dc={get:qr(!1,!0)},fc={get:qr(!0,!1)};const Yo=new WeakMap,Xo=new WeakMap,Qo=new WeakMap,hc=new WeakMap;function pc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ln(t){return ut(t)?t:zr(t,!1,ic,uc,Yo)}function mc(t){return zr(t,!1,ac,dc,Xo)}function vr(t){return zr(t,!0,oc,fc,Qo)}function zr(t,e,n,s,r){if(!W(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=r.get(t);if(i)return i;const o=pc(Vl(t));if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Lt(t){return ut(t)?Lt(t.__v_raw):!!(t&&t.__v_isReactive)}function ut(t){return!!(t&&t.__v_isReadonly)}function Te(t){return!!(t&&t.__v_isShallow)}function Kr(t){return t?!!t.__v_raw:!1}function B(t){const e=t&&t.__v_raw;return e?B(e):t}function gc(t){return!H(t,"__v_skip")&&Object.isExtensible(t)&&Do(t,"__v_skip",!0),t}const Oe=t=>W(t)?ln(t):t,Zt=t=>W(t)?vr(t):t;function ue(t){return t?t.__v_isRef===!0:!1}function le(t){return bc(t,!1)}function bc(t,e){return ue(t)?t:new vc(t,e)}class vc{constructor(e,n){this.dep=new Wr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:B(e),this._value=n?e:Oe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Te(e)||ut(e);e=s?e:B(e),We(e,n)&&(this._rawValue=e,this._value=s?e:Oe(e),this.dep.trigger())}}function D(t){return ue(t)?t.value:t}const _c={get:(t,e,n)=>e==="__v_raw"?t:D(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ue(r)&&!ue(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Zo(t){return Lt(t)?t:new Proxy(t,_c)}class yc{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Wr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Q!==this)return jo(this,!0),!0}get value(){const e=this.dep.track();return Wo(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wc(t,e,n=!1){let s,r;return L(t)?s=t:(s=t.get,r=t.set),new yc(s,r,n)}const ts={},ps=new WeakMap;let Ot;function xc(t,e=!1,n=Ot){if(n){let s=ps.get(n);s||ps.set(n,s=[]),s.push(t)}}function Ic(t,e,n=Y){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,c=P=>r?P:Te(P)||r===!1||r===0?nt(P,1):nt(P);let u,p,x,w,E=!1,k=!1;if(ue(t)?(p=()=>t.value,E=Te(t)):Lt(t)?(p=()=>c(t),E=!0):O(t)?(k=!0,E=t.some(P=>Lt(P)||Te(P)),p=()=>t.map(P=>{if(ue(P))return P.value;if(Lt(P))return c(P);if(L(P))return l?l(P,2):P()})):L(t)?e?p=l?()=>l(t,2):t:p=()=>{if(x){lt();try{x()}finally{ct()}}const P=Ot;Ot=u;try{return l?l(t,3,[w]):t(w)}finally{Ot=P}}:p=ze,e&&r){const P=p,te=r===!0?1/0:r;p=()=>nt(P(),te)}const Z=Xl(),K=()=>{u.stop(),Z&&Z.active&&Ur(Z.effects,u)};if(i&&e){const P=e;e=(...te)=>{const be=P(...te);return K(),be}}let $=k?new Array(t.length).fill(ts):ts;const V=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(e){const te=u.run();if(P||r||E||(k?te.some((be,_e)=>We(be,$[_e])):We(te,$))){x&&x();const be=Ot;Ot=u;try{const _e=[te,$===ts?void 0:k&&$[0]===ts?[]:$,w];$=te,l?l(e,3,_e):e(..._e)}finally{Ot=be}}}else u.run()};return a&&a(V),u=new Fo(p),u.scheduler=o?()=>o(V,!1):V,w=P=>xc(P,!1,u),x=u.onStop=()=>{const P=ps.get(u);if(P){if(l)l(P,4);else for(const te of P)te();ps.delete(u)}},e?s?V(!0):$=u.run():o?o(V.bind(null,!0),!0):u.run(),K.pause=u.pause.bind(u),K.resume=u.resume.bind(u),K.stop=K,K}function nt(t,e=1/0,n){if(e<=0||!W(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ue(t))nt(t.value,e,n);else if(O(t))for(let s=0;s<t.length;s++)nt(t[s],e,n);else if(on(t)||qt(t))t.forEach(s=>{nt(s,e,n)});else if(Mo(t)){for(const s in t)nt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&nt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vn(t,e,n,s){try{return s?t(...s):t()}catch(r){Us(r,e,n)}}function Me(t,e,n,s){if(L(t)){const r=Vn(t,e,n,s);return r&&Ro(r)&&r.catch(i=>{Us(i,e,n)}),r}if(O(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Me(t[i],e,n,s));return r}}function Us(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Y;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](t,l,c)===!1)return}a=a.parent}if(i){lt(),Vn(i,null,10,[t,l,c]),ct();return}}Ec(t,n,r,s,o)}function Ec(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const pe=[];let je=-1;const zt=[];let vt=null,Ht=0;const ea=Promise.resolve();let ms=null;function ta(t){const e=ms||ea;return t?e.then(this?t.bind(this):t):e}function Sc(t){let e=je+1,n=pe.length;for(;e<n;){const s=e+n>>>1,r=pe[s],i=Pn(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Gr(t){if(!(t.flags&1)){const e=Pn(t),n=pe[pe.length-1];!n||!(t.flags&2)&&e>=Pn(n)?pe.push(t):pe.splice(Sc(e),0,t),t.flags|=1,na()}}function na(){ms||(ms=ea.then(ra))}function Tc(t){if(!O(t))vt&&t.id===-1?vt.splice(Ht+1,0,t):t.flags&1||(zt.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)zt.push(t[e]);na()}function Ti(t,e,n=je+1){for(;n<pe.length;n++){const s=pe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;pe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function sa(t){if(zt.length){const e=[...new Set(zt)].sort((n,s)=>Pn(n)-Pn(s));if(zt.length=0,vt){for(let n=0;n<e.length;n++)vt.push(e[n]);return}for(vt=e,Ht=0;Ht<vt.length;Ht++){const n=vt[Ht];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vt=null,Ht=0}}const Pn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ra(t){try{for(je=0;je<pe.length;je++){const e=pe[je];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;je<pe.length;je++){const e=pe[je];e&&(e.flags&=-2)}je=-1,pe.length=0,sa(),ms=null,(pe.length||zt.length)&&ra()}}let Se=null,ia=null;function gs(t){const e=Se;return Se=t,ia=t&&t.type.__scopeId||null,e}function Cc(t,e=Se,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&_s(-1);const i=gs(e),o=Ut.length;let a;try{a=t(...r)}finally{for(let l=Ut.length;l>o;l--)Pa();gs(i),s._d&&_s(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function ie(t,e){if(Se===null)return t;const n=Bs(Se),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=Y]=e[r];i&&(L(i)&&(i={mounted:i,updated:i}),i.deep&&nt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Pt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(lt(),Me(l,n,8,[t.el,a,t,e]),ct())}}function kc(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function os(t,e,n=!1){const s=Su();if(s||Gt){let r=Gt?Gt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&L(e)?e.call(s&&s.proxy):e}}const Ac=Symbol.for("v-scx"),Pc=()=>os(Ac);function Kt(t,e,n){return oa(t,e,n)}function oa(t,e,n=Y){const{immediate:s,deep:r,flush:i,once:o}=n,a=de({},n),l=e&&s||!e&&i!=="post";let c;if(Nn){if(i==="sync"){const w=Pc();c=w.__watcherHandles||(w.__watcherHandles=[])}else if(!l){const w=()=>{};return w.stop=ze,w.resume=ze,w.pause=ze,w}}const u=me;a.call=(w,E,k)=>Me(w,u,E,k);let p=!1;i==="post"?a.scheduler=w=>{ve(w,u&&u.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(w,E)=>{E?w():Gr(w)}),a.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,u&&(w.id=u.uid,w.i=u))};const x=Ic(t,e,a);return Nn&&(c?c.push(x):l&&x()),x}function Rc(t,e,n){const s=this.proxy,r=ne(t)?t.includes(".")?aa(s,t):()=>s[t]:t.bind(s,s);let i;L(e)?i=e:(i=e.handler,n=e);const o=jn(this),a=oa(r,i.bind(s),n);return o(),a}function aa(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Oc=Symbol("_vte"),$s=t=>t.__isTeleport,er=Symbol("_leaveCb");function Mc(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==dt){e=n;break}}return e}function la(t){if(!Yr(t))return $s(t.type)&&t.children?Mc(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&L(n.default))return n.default()}}function Jr(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Jr($s(n.type)&&la(n)||n,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ca(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ci(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const bs=new WeakMap;function En(t,e,n,s,r=!1){if(O(t)){t.forEach((k,Z)=>En(k,e&&(O(e)?e[Z]:e),n,s,r));return}if(Sn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&En(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Bs(s.component):s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Y?a.refs={}:a.refs,p=a.setupState,x=B(p),w=p===Y?Po:k=>Ci(u,k)?!1:H(x,k),E=(k,Z)=>!(Z&&Ci(u,Z));if(c!=null&&c!==l){if(ki(e),ne(c))u[c]=null,w(c)&&(p[c]=null);else if(ue(c)){const k=e;E(c,k.k)&&(c.value=null),k.k&&(u[k.k]=null)}}if(L(l))Vn(l,a,12,[o,u]);else{const k=ne(l),Z=ue(l);if(k||Z){const K=()=>{if(t.f){const $=k?w(l)?p[l]:u[l]:E()||!t.k?l.value:u[t.k];if(r)O($)&&Ur($,i);else if(O($))$.includes(i)||$.push(i);else if(k)u[l]=[i],w(l)&&(p[l]=u[l]);else{const V=[i];E(l,t.k)&&(l.value=V),t.k&&(u[t.k]=V)}}else k?(u[l]=o,w(l)&&(p[l]=o)):Z&&(E(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const $=()=>{K(),bs.delete(t)};$.id=-1,bs.set(t,$),ve($,n)}else ki(t),K()}}}function ki(t){const e=bs.get(t);e&&(e.flags|=8,bs.delete(t))}Ds().requestIdleCallback;Ds().cancelIdleCallback;const Sn=t=>!!t.type.__asyncLoader,Yr=t=>t.type.__isKeepAlive;function Nc(t,e){ua(t,"a",e)}function Dc(t,e){ua(t,"da",e)}function ua(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Fs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Yr(r.parent.vnode)&&Lc(s,e,n,r),r=r.parent}}function Lc(t,e,n,s){const r=Fs(e,t,s,!0);fa(()=>{Ur(s[e],r)},n)}function Fs(t,e,n=me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{lt();const a=jn(n),l=Me(e,n,t,o);return a(),ct(),l});return s?r.unshift(i):r.push(i),i}}const pt=t=>(e,n=me)=>{(!Nn||t==="sp")&&Fs(t,(...s)=>e(...s),n)},Uc=pt("bm"),da=pt("m"),$c=pt("bu"),Fc=pt("u"),Vc=pt("bum"),fa=pt("um"),jc=pt("sp"),Bc=pt("rtg"),Hc=pt("rtc");function Wc(t,e=me){Fs("ec",t,e)}const qc=Symbol.for("v-ndc");function zc(t,e,n,s){let r;const i=n,o=O(t);if(o||ne(t)){const a=o&&Lt(t);let l=!1,c=!1;a&&(l=!Te(t),c=ut(t),t=Ls(t)),r=new Array(t.length);for(let u=0,p=t.length;u<p;u++)r[u]=e(l?c?Zt(Oe(t[u])):Oe(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(W(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,i)}}else r=[];return r}const _r=t=>t?Ma(t)?Bs(t):_r(t.parent):null,Tn=de(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_r(t.parent),$root:t=>_r(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>pa(t),$forceUpdate:t=>t.f||(t.f=()=>{Gr(t.update)}),$nextTick:t=>t.n||(t.n=ta.bind(t.proxy)),$watch:t=>Rc.bind(t)}),tr=(t,e)=>t!==Y&&!t.__isScriptSetup&&H(t,e),Kc={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(tr(s,e))return o[e]=1,s[e];if(r!==Y&&H(r,e))return o[e]=2,r[e];if(H(i,e))return o[e]=3,i[e];if(n!==Y&&H(n,e))return o[e]=4,n[e];yr&&(o[e]=0)}}const c=Tn[e];let u,p;if(c)return e==="$attrs"&&ce(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Y&&H(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,H(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return tr(r,e)?(r[e]=n,!0):s!==Y&&H(s,e)?(s[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},a){let l;return!!(n[a]||t!==Y&&a[0]!=="$"&&H(t,a)||tr(e,a)||H(i,a)||H(s,a)||H(Tn,a)||H(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ai(t){return O(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yr=!0;function Gc(t){const e=pa(t),n=t.proxy,s=t.ctx;yr=!1,e.beforeCreate&&Pi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:p,mounted:x,beforeUpdate:w,updated:E,activated:k,deactivated:Z,beforeDestroy:K,beforeUnmount:$,destroyed:V,unmounted:P,render:te,renderTracked:be,renderTriggered:_e,errorCaptured:De,serverPrefetch:gt,expose:Xe,inheritAttrs:un,components:Jn,directives:Yn,filters:Ks}=e;if(c&&Jc(c,s,null),o)for(const ee in o){const X=o[ee];L(X)&&(s[ee]=X.bind(n))}if(r){const ee=r.call(n,n);W(ee)&&(t.data=ln(ee))}if(yr=!0,i)for(const ee in i){const X=i[ee],kt=L(X)?X.bind(n,n):L(X.get)?X.get.bind(n,n):ze,Xn=!L(X)&&L(X.set)?X.set.bind(n):ze,At=Da({get:kt,set:Xn});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>At.value,set:Le=>At.value=Le})}if(a)for(const ee in a)ha(a[ee],s,n,ee);if(l){const ee=L(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(X=>{kc(X,ee[X])})}u&&Pi(u,t,"c");function fe(ee,X){O(X)?X.forEach(kt=>ee(kt.bind(n))):X&&ee(X.bind(n))}if(fe(Uc,p),fe(da,x),fe($c,w),fe(Fc,E),fe(Nc,k),fe(Dc,Z),fe(Wc,De),fe(Hc,be),fe(Bc,_e),fe(Vc,$),fe(fa,P),fe(jc,gt),O(Xe))if(Xe.length){const ee=t.exposed||(t.exposed={});Xe.forEach(X=>{Object.defineProperty(ee,X,{get:()=>n[X],set:kt=>n[X]=kt,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===ze&&(t.render=te),un!=null&&(t.inheritAttrs=un),Jn&&(t.components=Jn),Yn&&(t.directives=Yn),gt&&ca(t)}function Jc(t,e,n=ze){O(t)&&(t=wr(t));for(const s in t){const r=t[s];let i;W(r)?"default"in r?i=os(r.from||s,r.default,!0):i=os(r.from||s):i=os(r),ue(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Pi(t,e,n){Me(O(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ha(t,e,n,s){let r=s.includes(".")?aa(n,s):()=>n[s];if(ne(t)){const i=e[t];L(i)&&Kt(r,i)}else if(L(t))Kt(r,t.bind(n));else if(W(t))if(O(t))t.forEach(i=>ha(i,e,n,s));else{const i=L(t.handler)?t.handler.bind(n):e[t.handler];L(i)&&Kt(r,i,t)}}function pa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>vs(l,c,o,!0)),vs(l,e,o)),W(e)&&i.set(e,l),l}function vs(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&vs(t,i,n,!0),r&&r.forEach(o=>vs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Yc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Yc={data:Ri,props:Oi,emits:Oi,methods:bn,computed:bn,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:bn,directives:bn,watch:Qc,provide:Ri,inject:Xc};function Ri(t,e){return e?t?function(){return de(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function Xc(t,e){return bn(wr(t),wr(e))}function wr(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?de(Object.create(null),t,e):e}function Oi(t,e){return t?O(t)&&O(e)?[...new Set([...t,...e])]:de(Object.create(null),Ai(t),Ai(e??{})):e}function Qc(t,e){if(!t)return e;if(!e)return t;const n=de(Object.create(null),t);for(const s in e)n[s]=he(t[s],e[s]);return n}function ma(){return{app:null,config:{isNativeTag:Po,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zc=0;function eu(t,e){return function(s,r=null){L(s)||(s=de({},s)),r!=null&&!W(r)&&(r=null);const i=ma(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:Zc++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ru,get config(){return i.config},set config(u){},use(u,...p){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(c,...p)):L(u)&&(o.add(u),u(c,...p))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,p){return p?(i.components[u]=p,c):i.components[u]},directive(u,p){return p?(i.directives[u]=p,c):i.directives[u]},mount(u,p,x){if(!l){const w=c._ceVNode||C(s,r);return w.appContext=i,x===!0?x="svg":x===!1&&(x=void 0),t(w,u,x),l=!0,c._container=u,u.__vue_app__=c,Bs(w.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Me(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,p){return i.provides[u]=p,c},runWithContext(u){const p=Gt;Gt=c;try{return u()}finally{Gt=p}}};return c}}let Gt=null;const tu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ae(e)}Modifiers`]||t[`${jt(e)}Modifiers`];function nu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Y;let r=n;const i=e.startsWith("update:"),o=i&&tu(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>ne(u)?u.trim():u)),o.number&&(r=n.map(Ns)));let a,l=s[a=Js(e)]||s[a=Js(Ae(e))];!l&&i&&(l=s[a=Js(jt(e))]),l&&Me(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Me(c,t,6,r)}}const su=new WeakMap;function ga(t,e,n=!1){const s=n?su:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!L(t)){const l=c=>{const u=ga(c,e,!0);u&&(a=!0,de(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(W(t)&&s.set(t,null),null):(O(i)?i.forEach(l=>o[l]=null):de(o,i),W(t)&&s.set(t,o),o)}function Vs(t,e){return!t||!Rs(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,jt(e))||H(t,e))}function Mi(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:p,data:x,setupState:w,ctx:E,inheritAttrs:k}=t,Z=gs(t);let K,$;try{if(n.shapeFlag&4){const P=r||s,te=P;K=He(c.call(te,P,u,p,w,x,E)),$=a}else{const P=e;K=He(P.length>1?P(p,{attrs:a,slots:o,emit:l}):P(p,null)),$=e.props?a:ru(a)}}catch(P){Ut.length=0,Us(P,t,1),K=C(dt)}let V=K;if($&&k!==!1){const P=Object.keys($),{shapeFlag:te}=V;P.length&&te&7&&(i&&P.some(Os)&&($=iu($,i)),V=en(V,$,!1,!0))}if(n.dirs&&(V=en(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition){const P=$s(V.type)&&la(V)||V;Jr(P,n.transition)}return K=V,gs(Z),K}const ru=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rs(n))&&((e||(e={}))[n]=t[n]);return e},iu=(t,e)=>{const n={};for(const s in t)(!Os(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ou(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ni(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const x=u[p];if(ba(o,s,x)&&!Vs(c,x))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ni(s,o,c):!0:!!o;return!1}function Ni(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(ba(e,t,i)&&!Vs(n,i))return!0}return!1}function ba(t,e,n){const s=t[n],r=e[n];return n==="style"&&W(s)&&W(r)?!an(s,r):s!==r}function au({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const va={},_a=()=>Object.create(va),ya=t=>Object.getPrototypeOf(t)===va;function lu(t,e,n,s=!1){const r={},i=_a();t.propsDefaults=Object.create(null),wa(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:mc(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function cu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=B(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let p=0;p<u.length;p++){let x=u[p];if(Vs(t.emitsOptions,x))continue;const w=e[x];if(l)if(H(i,x))w!==i[x]&&(i[x]=w,c=!0);else{const E=Ae(x);r[E]=xr(l,a,E,w,t,!1)}else w!==i[x]&&(i[x]=w,c=!0)}}}else{wa(t,e,r,i)&&(c=!0);let u;for(const p in a)(!e||!H(e,p)&&((u=jt(p))===p||!H(e,u)))&&(l?n&&(n[p]!==void 0||n[u]!==void 0)&&(r[p]=xr(l,a,p,void 0,t,!0)):delete r[p]);if(i!==a)for(const p in i)(!e||!H(e,p))&&(delete i[p],c=!0)}c&&tt(t.attrs,"set","")}function wa(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(wn(l))continue;const c=e[l];let u;r&&H(r,u=Ae(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Vs(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=B(n),c=a||Y;for(let u=0;u<i.length;u++){const p=i[u];n[p]=xr(r,l,p,c[p],t,!H(c,p))}}return o}function xr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=H(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=r;if(n in c)s=c[n];else{const u=jn(r);s=c[n]=l.call(null,e),u()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===jt(n))&&(s=!0))}return s}const uu=new WeakMap;function xa(t,e,n=!1){const s=n?uu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!L(t)){const u=p=>{l=!0;const[x,w]=xa(p,e,!0);de(o,x),w&&a.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return W(t)&&s.set(t,Wt),Wt;if(O(i))for(let u=0;u<i.length;u++){const p=Ae(i[u]);Di(p)&&(o[p]=Y)}else if(i)for(const u in i){const p=Ae(u);if(Di(p)){const x=i[u],w=o[p]=O(x)||L(x)?{type:x}:de({},x),E=w.type;let k=!1,Z=!0;if(O(E))for(let K=0;K<E.length;++K){const $=E[K],V=L($)&&$.name;if(V==="Boolean"){k=!0;break}else V==="String"&&(Z=!1)}else k=L(E)&&E.name==="Boolean";w[0]=k,w[1]=Z,(k||H(w,"default"))&&a.push(p)}}const c=[o,a];return W(t)&&s.set(t,c),c}function Di(t){return t[0]!=="$"&&!wn(t)}const Xr=t=>t==="_"||t==="_ctx"||t==="$stable",Qr=t=>O(t)?t.map(He):[He(t)],du=(t,e,n)=>{if(e._n)return e;const s=Cc((...r)=>Qr(e(...r)),n);return s._c=!1,s},Ia=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Xr(r))continue;const i=t[r];if(L(i))e[r]=du(r,i,s);else if(i!=null){const o=Qr(i);e[r]=()=>o}}},Ea=(t,e)=>{const n=Qr(e);t.slots.default=()=>n},Sa=(t,e,n)=>{for(const s in e)(n||!Xr(s))&&(t[s]=e[s])},fu=(t,e,n)=>{const s=t.slots=_a();if(t.vnode.shapeFlag&32){const r=e._;r?(Sa(s,e,n),n&&Do(s,"_",r,!0)):Ia(e,s)}else e&&Ea(t,e)},hu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Y;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Sa(r,e,n):(i=!e.$stable,Ia(e,r)),o=e}else e&&(Ea(t,e),o={default:1});if(i)for(const a in r)!Xr(a)&&o[a]==null&&delete r[a]},ve=vu;function pu(t){return mu(t)}function mu(t,e){const n=Ds();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:p,nextSibling:x,setScopeId:w=ze,insertStaticContent:E}=t,k=(d,h,m,_=null,v=null,g=null,S=void 0,I=null,y=!!h.dynamicChildren)=>{if(d===h)return;d&&!mn(d,h)&&(_=Qn(d),Le(d,v,g,!0),d=null),h.patchFlag===-2&&(y=!1,h.dynamicChildren=null);const{type:b,ref:R,shapeFlag:T}=h;switch(b){case js:Z(d,h,m,_);break;case dt:K(d,h,m,_);break;case as:d==null&&$(h,m,_,S);break;case Ie:Jn(d,h,m,_,v,g,S,I,y);break;default:T&1?te(d,h,m,_,v,g,S,I,y):T&6?Yn(d,h,m,_,v,g,S,I,y):(T&64||T&128)&&b.process(d,h,m,_,v,g,S,I,y,fn)}R!=null&&v?En(R,d&&d.ref,g,h||d,!h):R==null&&d&&d.ref!=null&&En(d.ref,null,g,d,!0)},Z=(d,h,m,_)=>{if(d==null)s(h.el=a(h.children),m,_);else{const v=h.el=d.el;h.children!==d.children&&c(v,h.children)}},K=(d,h,m,_)=>{d==null?s(h.el=l(h.children||""),m,_):h.el=d.el},$=(d,h,m,_)=>{[d.el,d.anchor]=E(d.children,h,m,_,d.el,d.anchor)},V=({el:d,anchor:h},m,_)=>{let v;for(;d&&d!==h;)v=x(d),s(d,m,_),d=v;s(h,m,_)},P=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=x(d),r(d),d=m;r(h)},te=(d,h,m,_,v,g,S,I,y)=>{if(h.type==="svg"?S="svg":h.type==="math"&&(S="mathml"),d==null)be(h,m,_,v,g,S,I,y);else{const b=d.el&&d.el._isVueCE?d.el:null;try{b&&b._beginPatch(),gt(d,h,v,g,S,I,y)}finally{b&&b._endPatch()}}},be=(d,h,m,_,v,g,S,I)=>{let y,b;const{props:R,shapeFlag:T,transition:A,dirs:N}=d;if(y=d.el=o(d.type,g,R&&R.is,R),T&8?u(y,d.children):T&16&&De(d.children,y,null,_,v,nr(d,g),S,I),N&&Pt(d,null,_,"created"),_e(y,d,d.scopeId,S,_),R){for(const G in R)G!=="value"&&!wn(G)&&i(y,G,null,R[G],g,_);"value"in R&&i(y,"value",null,R.value,g),(b=R.onVnodeBeforeMount)&&Ve(b,_,d)}N&&Pt(d,null,_,"beforeMount");const F=gu(v,A);F&&A.beforeEnter(y),s(y,h,m),((b=R&&R.onVnodeMounted)||F||N)&&ve(()=>{try{b&&Ve(b,_,d),F&&A.enter(y),N&&Pt(d,null,_,"mounted")}finally{}},v)},_e=(d,h,m,_,v)=>{if(m&&w(d,m),_)for(let g=0;g<_.length;g++)w(d,_[g]);if(v){let g=v.subTree;if(h===g||Aa(g.type)&&(g.ssContent===h||g.ssFallback===h)){const S=v.vnode;_e(d,S,S.scopeId,S.slotScopeIds,v.parent)}}},De=(d,h,m,_,v,g,S,I,y=0)=>{for(let b=y;b<d.length;b++){const R=d[b]=I?et(d[b]):He(d[b]);k(null,R,h,m,_,v,g,S,I)}},gt=(d,h,m,_,v,g,S)=>{const I=h.el=d.el;let{patchFlag:y,dynamicChildren:b,dirs:R}=h;y|=d.patchFlag&16;const T=d.props||Y,A=h.props||Y;let N;if(m&&Rt(m,!1),(N=A.onVnodeBeforeUpdate)&&Ve(N,m,h,d),R&&Pt(h,d,m,"beforeUpdate"),m&&Rt(m,!0),b&&(!d.dynamicChildren||d.dynamicChildren.length!==b.length)&&(y=0,S=!1,b=null),(T.innerHTML&&A.innerHTML==null||T.textContent&&A.textContent==null)&&u(I,""),b?Xe(d.dynamicChildren,b,I,m,_,nr(h,v),g):S||X(d,h,I,null,m,_,nr(h,v),g,!1),y>0){if(y&16)un(I,T,A,m,v);else if(y&2&&T.class!==A.class&&i(I,"class",null,A.class,v),y&4&&i(I,"style",T.style,A.style,v),y&8){const F=h.dynamicProps;for(let G=0;G<F.length;G++){const q=F[G],re=T[q],oe=A[q];(oe!==re||q==="value")&&i(I,q,re,oe,v,m)}}y&1&&d.children!==h.children&&u(I,h.children)}else!S&&b==null&&un(I,T,A,m,v);((N=A.onVnodeUpdated)||R)&&ve(()=>{N&&Ve(N,m,h,d),R&&Pt(h,d,m,"updated")},_)},Xe=(d,h,m,_,v,g,S)=>{for(let I=0;I<h.length;I++){const y=d[I],b=h[I],R=y.el&&(y.type===Ie||!mn(y,b)||y.shapeFlag&198)?p(y.el):m;k(y,b,R,null,_,v,g,S,!0)}},un=(d,h,m,_,v)=>{if(h!==m){if(h!==Y)for(const g in h)!wn(g)&&!(g in m)&&i(d,g,h[g],null,v,_);for(const g in m){if(wn(g))continue;const S=m[g],I=h[g];S!==I&&g!=="value"&&i(d,g,I,S,v,_)}"value"in m&&i(d,"value",h.value,m.value,v)}},Jn=(d,h,m,_,v,g,S,I,y)=>{const b=h.el=d?d.el:a(""),R=h.anchor=d?d.anchor:a("");let{patchFlag:T,dynamicChildren:A,slotScopeIds:N}=h;N&&(I=I?I.concat(N):N),d==null?(s(b,m,_),s(R,m,_),De(h.children||[],m,R,v,g,S,I,y)):T>0&&T&64&&A&&d.dynamicChildren&&d.dynamicChildren.length===A.length?(Xe(d.dynamicChildren,A,m,v,g,S,I),(h.key!=null||v&&h===v.subTree)&&Ta(d,h,!0)):X(d,h,m,R,v,g,S,I,y)},Yn=(d,h,m,_,v,g,S,I,y)=>{h.slotScopeIds=I,d==null?h.shapeFlag&512?v.ctx.activate(h,m,_,S,y):Ks(h,m,_,v,g,S,y):gi(d,h,y)},Ks=(d,h,m,_,v,g,S)=>{const I=d.component=Eu(d,_,v);if(Yr(d)&&(I.ctx.renderer=fn),Tu(I,!1,S),I.asyncDep){if(v&&v.registerDep(I,fe,S),!d.el){const y=I.subTree=C(dt);K(null,y,h,m),d.placeholder=y.el}}else fe(I,d,h,m,v,g,S)},gi=(d,h,m)=>{const _=h.component=d.component;if(ou(d,h,m))if(_.asyncDep&&!_.asyncResolved){ee(_,h,m);return}else _.next=h,_.update();else h.el=d.el,_.vnode=h},fe=(d,h,m,_,v,g,S)=>{const I=()=>{if(d.isMounted){let{next:T,bu:A,u:N,parent:F,vnode:G}=d;{const $e=Ca(d);if($e){T&&(T.el=G.el,ee(d,T,S)),$e.asyncDep.then(()=>{ve(()=>{d.isUnmounted||b()},v)});return}}let q=T,re;Rt(d,!1),T?(T.el=G.el,ee(d,T,S)):T=G,A&&is(A),(re=T.props&&T.props.onVnodeBeforeUpdate)&&Ve(re,F,T,G),Rt(d,!0);const oe=Mi(d),Ue=d.subTree;d.subTree=oe,k(Ue,oe,p(Ue.el),Qn(Ue),d,v,g),T.el=oe.el,q===null&&au(d,oe.el),N&&ve(N,v),(re=T.props&&T.props.onVnodeUpdated)&&ve(()=>Ve(re,F,T,G),v)}else{let T;const{el:A,props:N}=h,{bm:F,m:G,parent:q,root:re,type:oe}=d,Ue=Sn(h);Rt(d,!1),F&&is(F),!Ue&&(T=N&&N.onVnodeBeforeMount)&&Ve(T,q,h),Rt(d,!0);{re.ce&&re.ce._hasShadowRoot()&&re.ce._injectChildStyle(oe,d.parent?d.parent.type:void 0);const $e=d.subTree=Mi(d);k(null,$e,m,_,d,v,g),h.el=$e.el}if(G&&ve(G,v),!Ue&&(T=N&&N.onVnodeMounted)){const $e=h;ve(()=>Ve(T,q,$e),v)}(h.shapeFlag&256||q&&Sn(q.vnode)&&q.vnode.shapeFlag&256)&&d.a&&ve(d.a,v),d.isMounted=!0,h=m=_=null}};d.scope.on();const y=d.effect=new Fo(I);d.scope.off();const b=d.update=y.run.bind(y),R=d.job=y.runIfDirty.bind(y);R.i=d,R.id=d.uid,y.scheduler=()=>Gr(R),Rt(d,!0),b()},ee=(d,h,m)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,cu(d,h.props,_,m),hu(d,h.children,m),lt(),Ti(d),ct()},X=(d,h,m,_,v,g,S,I,y=!1)=>{const b=d&&d.children,R=d?d.shapeFlag:0,T=h.children,{patchFlag:A,shapeFlag:N}=h;if(A>0){if(A&128){Xn(b,T,m,_,v,g,S,I,y);return}else if(A&256){kt(b,T,m,_,v,g,S,I,y);return}}N&8?(R&16&&dn(b,v,g),T!==b&&u(m,T)):R&16?N&16?Xn(b,T,m,_,v,g,S,I,y):dn(b,v,g,!0):(R&8&&u(m,""),N&16&&De(T,m,_,v,g,S,I,y))},kt=(d,h,m,_,v,g,S,I,y)=>{d=d||Wt,h=h||Wt;const b=d.length,R=h.length,T=Math.min(b,R);let A;for(A=0;A<T;A++){const N=h[A]=y?et(h[A]):He(h[A]);k(d[A],N,m,null,v,g,S,I,y)}b>R?dn(d,v,g,!0,!1,T):De(h,m,_,v,g,S,I,y,T)},Xn=(d,h,m,_,v,g,S,I,y)=>{let b=0;const R=h.length;let T=d.length-1,A=R-1;for(;b<=T&&b<=A;){const N=d[b],F=h[b]=y?et(h[b]):He(h[b]);if(mn(N,F))k(N,F,m,null,v,g,S,I,y);else break;b++}for(;b<=T&&b<=A;){const N=d[T],F=h[A]=y?et(h[A]):He(h[A]);if(mn(N,F))k(N,F,m,null,v,g,S,I,y);else break;T--,A--}if(b>T){if(b<=A){const N=A+1,F=N<R?h[N].el:_;for(;b<=A;)k(null,h[b]=y?et(h[b]):He(h[b]),m,F,v,g,S,I,y),b++}}else if(b>A)for(;b<=T;)Le(d[b],v,g,!0),b++;else{const N=b,F=b,G=new Map;for(b=F;b<=A;b++){const ye=h[b]=y?et(h[b]):He(h[b]);ye.key!=null&&G.set(ye.key,b)}let q,re=0;const oe=A-F+1;let Ue=!1,$e=0;const hn=new Array(oe);for(b=0;b<oe;b++)hn[b]=0;for(b=N;b<=T;b++){const ye=d[b];if(re>=oe){Le(ye,v,g,!0);continue}let Fe;if(ye.key!=null)Fe=G.get(ye.key);else for(q=F;q<=A;q++)if(hn[q-F]===0&&mn(ye,h[q])){Fe=q;break}Fe===void 0?Le(ye,v,g,!0):(hn[Fe-F]=b+1,Fe>=$e?$e=Fe:Ue=!0,k(ye,h[Fe],m,null,v,g,S,I,y),re++)}const _i=Ue?bu(hn):Wt;for(q=_i.length-1,b=oe-1;b>=0;b--){const ye=F+b,Fe=h[ye],yi=h[ye+1],wi=ye+1<R?yi.el||ka(yi):_;hn[b]===0?k(null,Fe,m,wi,v,g,S,I,y):Ue&&(q<0||b!==_i[q]?At(Fe,m,wi,2):q--)}}},At=(d,h,m,_,v=null)=>{const{el:g,type:S,transition:I,children:y,shapeFlag:b}=d;if(b&6){At(d.component.subTree,h,m,_);return}if(b&128){d.suspense.move(h,m,_);return}if(b&64){S.move(d,h,m,fn);return}if(S===Ie){s(g,h,m);for(let T=0;T<y.length;T++)At(y[T],h,m,_);s(d.anchor,h,m);return}if(S===as){V(d,h,m);return}if(_!==2&&b&1&&I)if(_===0)I.persisted&&!g[er]?s(g,h,m):(I.beforeEnter(g),s(g,h,m),ve(()=>I.enter(g),v));else{const{leave:T,delayLeave:A,afterLeave:N}=I,F=()=>{d.ctx.isUnmounted?r(g):s(g,h,m)},G=()=>{const q=g._isLeaving||!!g[er];g._isLeaving&&g[er](!0),I.persisted&&!q?F():T(g,()=>{F(),N&&N()})};A?A(g,F,G):G()}else s(g,h,m)},Le=(d,h,m,_=!1,v=!1)=>{const{type:g,props:S,ref:I,children:y,dynamicChildren:b,shapeFlag:R,patchFlag:T,dirs:A,cacheIndex:N,memo:F}=d;if(T===-2&&(v=!1),I!=null&&(lt(),En(I,null,m,d,!0),ct()),N!=null&&(h.renderCache[N]=void 0),R&256){h.ctx.deactivate(d);return}const G=R&1&&A,q=!Sn(d);let re;if(q&&(re=S&&S.onVnodeBeforeUnmount)&&Ve(re,h,d),R&6)$l(d.component,m,_);else{if(R&128){d.suspense.unmount(m,_);return}G&&Pt(d,null,h,"beforeUnmount"),R&64?d.type.remove(d,h,m,fn,_):b&&!b.hasOnce&&(g!==Ie||T>0&&T&64)?dn(b,h,m,!1,!0):(g===Ie&&T&384||!v&&R&16)&&dn(y,h,m),_&&bi(d)}const oe=F!=null&&N==null;(q&&(re=S&&S.onVnodeUnmounted)||G||oe)&&ve(()=>{re&&Ve(re,h,d),G&&Pt(d,null,h,"unmounted"),oe&&(d.el=null)},m)},bi=d=>{const{type:h,el:m,anchor:_,transition:v}=d;if(h===Ie){Ul(m,_);return}if(h===as){P(d);return}const g=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:I}=v,y=()=>S(m,g);I?I(d.el,g,y):y()}else g()},Ul=(d,h)=>{let m;for(;d!==h;)m=x(d),r(d),d=m;r(h)},$l=(d,h,m)=>{const{bum:_,scope:v,job:g,subTree:S,um:I,m:y,a:b}=d;Li(y),Li(b),_&&is(_),v.stop(),g&&(g.flags|=8,Le(S,d,h,m)),I&&ve(I,h),ve(()=>{d.isUnmounted=!0},h)},dn=(d,h,m,_=!1,v=!1,g=0)=>{for(let S=g;S<d.length;S++)Le(d[S],h,m,_,v)},Qn=d=>{if(d.shapeFlag&6)return Qn(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=x(d.anchor||d.el),m=h&&h[Oc];return m?x(m):h};let Gs=!1;const vi=(d,h,m)=>{let _;d==null?h._vnode&&(Le(h._vnode,null,null,!0),_=h._vnode.component):k(h._vnode||null,d,h,null,null,null,m),h._vnode=d,Gs||(Gs=!0,Ti(_),sa(),Gs=!1)},fn={p:k,um:Le,m:At,r:bi,mt:Ks,mc:De,pc:X,pbc:Xe,n:Qn,o:t};return{render:vi,hydrate:void 0,createApp:eu(vi)}}function nr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Rt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ta(t,e,n=!1){const s=t.children,r=e.children;if(O(s)&&O(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=et(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ta(o,a)),a.type===js&&(a.patchFlag===-1&&(a=r[i]=et(a)),a.el=o.el),a.type===dt&&!a.el&&(a.el=o.el)}}function bu(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ca(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ca(e)}function Li(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ka(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?ka(e.subTree):null}const Aa=t=>t.__isSuspense;function vu(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):Tc(t)}const Ie=Symbol.for("v-fgt"),js=Symbol.for("v-txt"),dt=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),Ut=[];let xe=null;function U(t=!1){Ut.push(xe=t?null:[])}function Pa(){Ut.pop(),xe=Ut[Ut.length-1]||null}let Rn=1;function _s(t,e=!1){Rn+=t,t<0&&xe&&e&&(xe.hasOnce=!0)}function Ra(t){return t.dynamicChildren=Rn>0?xe||Wt:null,Pa(),Rn>0&&xe&&xe.push(t),t}function j(t,e,n,s,r,i){return Ra(f(t,e,n,s,r,i,!0))}function On(t,e,n,s,r){return Ra(C(t,e,n,s,r,!0))}function ys(t){return t?t.__v_isVNode===!0:!1}function mn(t,e){return t.type===e.type&&t.key===e.key}const Oa=({key:t})=>t??null,ls=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ne(t)||ue(t)||L(t)?{i:Se,r:t,k:e,f:!!n}:t:null);function f(t,e=null,n=null,s=0,r=null,i=t===Ie?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Oa(e),ref:e&&ls(e),scopeId:ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Se};return a?(ws(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Rn>0&&!o&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const C=_u;function _u(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===qc)&&(t=dt),ys(t)){const a=en(t,e,!0);return n&&ws(a,n),Rn>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(t)]=a:xe.push(a)),a.patchFlag=-2,a}if(Pu(t)&&(t=t.__vccOpts),e){e=yu(e);let{class:a,style:l}=e;a&&!ne(a)&&(e.class=$t(a)),W(l)&&(Kr(l)&&!O(l)&&(l=de({},l)),e.style=Fr(l))}const o=ne(t)?1:Aa(t)?128:$s(t)?64:W(t)?4:L(t)?2:0;return f(t,e,n,s,r,o,i,!0)}function yu(t){return t?Kr(t)||ya(t)?de({},t):t:null}function en(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?wu(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Oa(c),ref:e&&e.ref?n&&i?O(i)?i.concat(ls(e)):[i,ls(e)]:ls(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&en(t.ssContent),ssFallback:t.ssFallback&&en(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Jr(u,l.clone(u)),u}function Ke(t=" ",e=0){return C(js,null,t,e)}function tn(t,e){const n=C(as,null,t);return n.staticCount=e,n}function Ee(t="",e=!1){return e?(U(),On(dt,null,t)):C(dt,null,t)}function He(t){return t==null||typeof t=="boolean"?C(dt):O(t)?C(Ie,null,t.slice()):ys(t)?et(t):C(js,null,String(t))}function et(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:en(t)}function ws(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ws(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ya(e)?e._ctx=Se:r===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(L(e)){if(s&65){ws(t,{default:e});return}e={default:e,_ctx:Se},n=32}else e=String(e),s&64?(n=16,e=[Ke(e)]):n=8;t.children=e,t.shapeFlag|=n}function wu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=$t([e.class,s.class]));else if(r==="style")e.style=Fr([e.style,s.style]);else if(Rs(r)){const i=e[r],o=s[r];o&&i!==o&&!(O(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!Os(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function Ve(t,e,n,s=null){Me(t,e,7,[n,s])}const xu=ma();let Iu=0;function Eu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||xu,i={uid:Iu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xa(s,r),emitsOptions:ga(s,r),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:s.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nu.bind(null,i),t.ce&&t.ce(i),i}let me=null;const Su=()=>me||Se;let xs,Mn;{const t=Ds(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};xs=e("__VUE_INSTANCE_SETTERS__",n=>me=n),Mn=e("__VUE_SSR_SETTERS__",n=>Nn=n)}const jn=t=>{const e=me;return xs(t),t.scope.on(),()=>{t.scope.off(),xs(e)}},Ui=()=>{me&&me.scope.off(),xs(null)};function Ma(t){return t.vnode.shapeFlag&4}let Nn=!1;function Tu(t,e=!1,n=!1){e&&Mn(e);const{props:s,children:r}=t.vnode,i=Ma(t);lu(t,s,i,e),fu(t,r,n||e);const o=i?Cu(t,e):void 0;return e&&Mn(!1),o}function Cu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Kc);const{setup:s}=n;if(s){lt();const r=t.setupContext=s.length>1?Au(t):null,i=jn(t),o=Vn(s,t,0,[t.props,r]),a=Ro(o);if(ct(),i(),(a||t.sp)&&!Sn(t)&&ca(t),a){if(o.then(Ui,Ui),e)return o.then(l=>{Mn(!0);try{$i(t,l,e)}finally{Mn(!1)}}).catch(l=>{Us(l,t,0)});t.asyncDep=o}else $i(t,o)}else Na(t)}function $i(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:W(e)&&(t.setupState=Zo(e)),Na(t)}function Na(t,e,n){const s=t.type;t.render||(t.render=s.render||ze);{const r=jn(t);lt();try{Gc(t)}finally{ct(),r()}}}const ku={get(t,e){return ce(t,"get",""),t[e]}};function Au(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ku),slots:t.slots,emit:t.emit,expose:e}}function Bs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Zo(gc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Tn)return Tn[n](t)},has(e,n){return n in e||n in Tn}})):t.proxy}function Pu(t){return L(t)&&"__vccOpts"in t}const Da=(t,e)=>wc(t,e,Nn);function Ir(t,e,n){try{_s(-1);const s=arguments.length;return s===2?W(e)&&!O(e)?ys(e)?C(t,null,[e]):C(t,e):C(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ys(n)&&(n=[n]),C(t,e,n))}finally{_s(1)}}const Ru="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Er;const Fi=typeof window<"u"&&window.trustedTypes;if(Fi)try{Er=Fi.createPolicy("vue",{createHTML:t=>t})}catch{}const La=Er?t=>Er.createHTML(t):t=>t,Ou="http://www.w3.org/2000/svg",Mu="http://www.w3.org/1998/Math/MathML",Ze=typeof document<"u"?document:null,Vi=Ze&&Ze.createElement("template"),Nu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Ze.createElementNS(Ou,t):e==="mathml"?Ze.createElementNS(Mu,t):n?Ze.createElement(t,{is:n}):Ze.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ze.createTextNode(t),createComment:t=>Ze.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ze.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Vi.innerHTML=La(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Vi.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Du=Symbol("_vtc");function Lu(t,e,n){const s=t[Du];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Is=Symbol("_vod"),Ua=Symbol("_vsh"),Uu={name:"show",beforeMount(t,{value:e},{transition:n}){t[Is]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):gn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),gn(t,!0),s.enter(t)):s.leave(t,()=>{gn(t,!1)}):gn(t,e))},beforeUnmount(t,{value:e}){gn(t,e)}};function gn(t,e){t.style.display=e?t[Is]:"none",t[Ua]=!e}const $u=Symbol(""),Fu=/(?:^|;)\s*display\s*:/;function Vu(t,e,n){const s=t.style,r=ne(n);let i=!1;if(n&&!r){if(e)if(ne(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&vn(s,a,"")}else for(const o in e)n[o]==null&&vn(s,o,"");for(const o in n){o==="display"&&(i=!0);const a=n[o];a!=null?Bu(t,o,!ne(e)&&e?e[o]:void 0,a)||vn(s,o,a):vn(s,o,"")}}else if(r){if(e!==n){const o=s[$u];o&&(n+=";"+o),s.cssText=n,i=Fu.test(n)}}else e&&t.removeAttribute("style");Is in t&&(t[Is]=i?s.display:"",t[Ua]&&(s.display="none"))}const ji=/\s*!important$/;function vn(t,e,n){if(O(n))n.forEach(s=>vn(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ju(t,e);ji.test(n)?t.setProperty(jt(s),n.replace(ji,""),"important"):t[s]=n}}const Bi=["Webkit","Moz","ms"],sr={};function ju(t,e){const n=sr[e];if(n)return n;let s=Ae(e);if(s!=="filter"&&s in t)return sr[e]=s;s=No(s);for(let r=0;r<Bi.length;r++){const i=Bi[r]+s;if(i in t)return sr[e]=i}return e}function Bu(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ne(s)&&n===s}const Hi="http://www.w3.org/1999/xlink";function Wi(t,e,n,s,r,i=Gl(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hi,e.slice(6,e.length)):t.setAttributeNS(Hi,e,n):n==null||i&&!Lo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Je(n)?String(n):n)}function qi(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?La(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Lo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function _t(t,e,n,s){t.addEventListener(e,n,s)}function Hu(t,e,n,s){t.removeEventListener(e,n,s)}const zi=Symbol("_vei");function Wu(t,e,n,s,r=null){const i=t[zi]||(t[zi]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Ku(e);if(s){const c=i[e]=Yu(s,r);_t(t,a,c,l)}else o&&(Hu(t,a,o,l),i[e]=void 0)}}const qu=/(Once|Passive|Capture)$/,zu=/^on:?(?:Once|Passive|Capture)$/;function Ku(t){let e,n;for(;(n=t.match(qu))&&!zu.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):jt(t.slice(2)),e]}let rr=0;const Gu=Promise.resolve(),Ju=()=>rr||(Gu.then(()=>rr=0),rr=Date.now());function Yu(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const r=n.value;if(O(r)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const o=r.slice(),a=[s];for(let l=0;l<o.length&&!s._stopped;l++){const c=o[l];c&&Me(c,e,5,a)}}else Me(r,e,5,[s])};return n.value=t,n.attached=Ju(),n}const Ki=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Xu=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Lu(t,s,o):e==="style"?Vu(t,n,s):Rs(e)?Os(e)||Wu(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qu(t,e,s,o))?(qi(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wi(t,e,s,o,i,e!=="value")):t._isVueCE&&(Zu(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ne(s)))?qi(t,Ae(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Wi(t,e,s,o))};function Qu(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ki(e)&&L(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ki(e)&&ne(n)?!1:e in t}function Zu(t,e){const n=t._def.props;if(!n)return!1;const s=Ae(e);return Array.isArray(n)?n.some(r=>Ae(r)===s):Object.keys(n).some(r=>Ae(r)===s)}const nn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return O(e)?n=>is(e,n):e};function ed(t){t.target.composing=!0}function Gi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qe=Symbol("_assign"),ns=Symbol("_initialValue");function ir(t,e,n){return e&&(t=t.trim()),n&&(t=Ns(t)),t}const we={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t.parentNode&&(t.type==="text"?t[ns]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[ns]=t.defaultValue.replace(/\r\n?/g,`
`))),t[qe]=nn(r);const i=s||r.props&&r.props.type==="number";_t(t,e?"change":"input",o=>{o.target.composing||t[qe](ir(t.value,n,i))}),(n||i)&&_t(t,"change",()=>{t.value=ir(t.value,n,i)}),e||(_t(t,"compositionstart",ed),_t(t,"compositionend",Gi),_t(t,"change",Gi))},mounted(t,{value:e,modifiers:{trim:n,number:s}}){const r=e??"",i=t[ns];delete t[ns],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[qe](ir(t.value,n,s)):t.value=r},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[qe]=nn(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ns(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l)}},td={deep:!0,created(t,e,n){t[qe]=nn(n),_t(t,"change",()=>{const s=t._modelValue,r=Dn(t),i=t.checked,o=t[qe];if(O(s)){const a=Vr(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(on(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o($a(t,i))})},mounted:Ji,beforeUpdate(t,e,n){t[qe]=nn(n),Ji(t,e,n)}};function Ji(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(O(e))r=Vr(e,s.props.value)>-1;else if(on(e))r=e.has(s.props.value);else{if(e===n)return;r=an(e,$a(t,!0))}t.checked!==r&&(t.checked=r)}const cs={deep:!0,created(t,{value:e,modifiers:{number:n}},s){t._modelValue=e,_t(t,"change",()=>{const r=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?Ns(Dn(i)):Dn(i));t[qe](t.multiple?on(t._modelValue)?new Set(r):r:r[0]),t._assigning=!0,ta(()=>{t._assigning=!1})}),t[qe]=nn(s)},mounted(t,{value:e}){Yi(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[qe]=nn(n)},updated(t,{value:e}){t._assigning||Yi(t,e)}};function Yi(t,e){const n=t.multiple,s=O(e);if(!(n&&!s&&!on(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=Dn(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Vr(e,a)>-1}else o.selected=e.has(a);else if(an(Dn(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Dn(t){return"_value"in t?t._value:t.value}function $a(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nd=["ctrl","shift","alt","meta"],sd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>nd.some(n=>t[`${n}Key`]&&!e.includes(n))},Hs=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=sd[e[o]];if(a&&a(r,e))return}return t(r,...i)})},rd=de({patchProp:Xu},Nu);let Xi;function id(){return Xi||(Xi=pu(rd))}const od=(...t)=>{const e=id().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ld(s);if(!r)return;const i=e._component;!L(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,ad(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ad(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ld(t){return ne(t)?document.querySelector(t):t}var Qi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},cd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Va={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,p=(i&3)<<4|a>>4;let x=(a&15)<<2|c>>6,w=c&63;l||(w=64,o||(x=64)),s.push(n[u],n[p],n[x],n[w])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||p==null)throw new ud;const x=i<<2|a>>4;if(s.push(x),c!==64){const w=a<<4&240|c>>2;if(s.push(w),p!==64){const E=c<<6&192|p;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ud extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dd=function(t){const e=Fa(t);return Va.encodeByteArray(e,!0)},ja=function(t){return dd(t).replace(/\./g,"")},Ba=function(t){try{return Va.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=()=>fd().__FIREBASE_DEFAULTS__,pd=()=>{if(typeof process>"u"||typeof Qi>"u")return;const t=Qi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},md=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ba(t[1]);return e&&JSON.parse(e)},Zr=()=>{try{return hd()||pd()||md()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gd=t=>{var e,n;return(n=(e=Zr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ha=()=>{var t;return(t=Zr())===null||t===void 0?void 0:t.config},Wa=t=>{var e;return(e=Zr())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function _d(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xd(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Id(){try{return typeof indexedDB=="object"}catch{return!1}}function Ed(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="FirebaseError";class Tt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Sd,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Td(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Tt(r,a,s)}}function Td(t,e){return t.replace(Cd,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Cd=/\{\$([^}]+)}/g;function kd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Es(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Zi(i)&&Zi(o)){if(!Es(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Zi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _n(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ad(t,e){const n=new Pd(t,e);return n.subscribe.bind(n)}class Pd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Rd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=or),r.error===void 0&&(r.error=or),r.complete===void 0&&(r.complete=or);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function or(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nd(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Md(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Md(t){return t===Mt?void 0:t}function Nd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Od(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const Ld={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Ud=J.INFO,$d={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Fd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=$d[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qa{constructor(e){this.name=e,this._logLevel=Ud,this._logHandler=Fd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ld[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Vd=(t,e)=>e.some(n=>t instanceof n);let eo,to;function jd(){return eo||(eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bd(){return to||(to=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const za=new WeakMap,Sr=new WeakMap,Ka=new WeakMap,ar=new WeakMap,ei=new WeakMap;function Hd(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(It(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&za.set(n,t)}).catch(()=>{}),ei.set(e,t),e}function Wd(t){if(Sr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sr.set(t,e)}let Tr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ka.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qd(t){Tr=t(Tr)}function zd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(lr(this),e,...n);return Ka.set(s,e.sort?e.sort():[e]),It(s)}:Bd().includes(t)?function(...e){return t.apply(lr(this),e),It(za.get(this))}:function(...e){return It(t.apply(lr(this),e))}}function Kd(t){return typeof t=="function"?zd(t):(t instanceof IDBTransaction&&Wd(t),Vd(t,jd())?new Proxy(t,Tr):t)}function It(t){if(t instanceof IDBRequest)return Hd(t);if(ar.has(t))return ar.get(t);const e=Kd(t);return e!==t&&(ar.set(t,e),ei.set(e,t)),e}const lr=t=>ei.get(t);function Gd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=It(o);return s&&o.addEventListener("upgradeneeded",l=>{s(It(o.result),l.oldVersion,l.newVersion,It(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Jd=["get","getKey","getAll","getAllKeys","count"],Yd=["put","add","delete","clear"],cr=new Map;function no(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Yd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Jd.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return cr.set(e,i),i}qd(t=>({...t,get:(e,n,s)=>no(e,n)||t.get(e,n,s),has:(e,n)=>!!no(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Qd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cr="@firebase/app",so="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new qa("@firebase/app"),Zd="@firebase/app-compat",ef="@firebase/analytics-compat",tf="@firebase/analytics",nf="@firebase/app-check-compat",sf="@firebase/app-check",rf="@firebase/auth",of="@firebase/auth-compat",af="@firebase/database",lf="@firebase/data-connect",cf="@firebase/database-compat",uf="@firebase/functions",df="@firebase/functions-compat",ff="@firebase/installations",hf="@firebase/installations-compat",pf="@firebase/messaging",mf="@firebase/messaging-compat",gf="@firebase/performance",bf="@firebase/performance-compat",vf="@firebase/remote-config",_f="@firebase/remote-config-compat",yf="@firebase/storage",wf="@firebase/storage-compat",xf="@firebase/firestore",If="@firebase/vertexai-preview",Ef="@firebase/firestore-compat",Sf="firebase",Tf="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]",Cf={[Cr]:"fire-core",[Zd]:"fire-core-compat",[tf]:"fire-analytics",[ef]:"fire-analytics-compat",[sf]:"fire-app-check",[nf]:"fire-app-check-compat",[rf]:"fire-auth",[of]:"fire-auth-compat",[af]:"fire-rtdb",[lf]:"fire-data-connect",[cf]:"fire-rtdb-compat",[uf]:"fire-fn",[df]:"fire-fn-compat",[ff]:"fire-iid",[hf]:"fire-iid-compat",[pf]:"fire-fcm",[mf]:"fire-fcm-compat",[gf]:"fire-perf",[bf]:"fire-perf-compat",[vf]:"fire-rc",[_f]:"fire-rc-compat",[yf]:"fire-gcs",[wf]:"fire-gcs-compat",[xf]:"fire-fst",[Ef]:"fire-fst-compat",[If]:"fire-vertex","fire-js":"fire-js",[Sf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Map,kf=new Map,Ar=new Map;function ro(t,e){try{t.container.addComponent(e)}catch(n){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(Ar.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;Ar.set(e,t);for(const n of Ss.values())ro(n,t);for(const n of kf.values())ro(n,t);return!0}function Ga(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ke(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Et=new Bn("app","Firebase",Af);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=Tf;function Ja(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:kr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Et.create("bad-app-name",{appName:String(r)});if(n||(n=Ha()),!n)throw Et.create("no-options");const i=Ss.get(r);if(i){if(Es(n,i.options)&&Es(s,i.config))return i;throw Et.create("duplicate-app",{appName:r})}const o=new Dd(r);for(const l of Ar.values())o.addComponent(l);const a=new Pf(n,s,o);return Ss.set(r,a),a}function Rf(t=kr){const e=Ss.get(t);if(!e&&t===kr&&Ha())return Ja();if(!e)throw Et.create("no-app",{appName:t});return e}function Jt(t,e,n){var s;let r=(s=Cf[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(a.join(" "));return}Ln(new sn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="firebase-heartbeat-database",Mf=1,Un="firebase-heartbeat-store";let ur=null;function Ya(){return ur||(ur=Gd(Of,Mf,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Un)}catch(n){console.warn(n)}}}}).catch(t=>{throw Et.create("idb-open",{originalErrorMessage:t.message})})),ur}async function Nf(t){try{const n=(await Ya()).transaction(Un),s=await n.objectStore(Un).get(Xa(t));return await n.done,s}catch(e){if(e instanceof Tt)ft.warn(e.message);else{const n=Et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(n.message)}}}async function io(t,e){try{const s=(await Ya()).transaction(Un,"readwrite");await s.objectStore(Un).put(e,Xa(t)),await s.done}catch(n){if(n instanceof Tt)ft.warn(n.message);else{const s=Et.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ft.warn(s.message)}}}function Xa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=1024,Lf=30*24*60*60*1e3;class Uf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ff(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=oo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Lf}),this._storage.overwrite(this._heartbeatsCache))}catch(s){ft.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=oo(),{heartbeatsToSend:s,unsentEntries:r}=$f(this._heartbeatsCache.heartbeats),i=ja(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ft.warn(n),""}}}function oo(){return new Date().toISOString().substring(0,10)}function $f(t,e=Df){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ao(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ao(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ff{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Id()?Ed().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Nf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ao(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){Ln(new sn("platform-logger",e=>new Xd(e),"PRIVATE")),Ln(new sn("heartbeat",e=>new Uf(e),"PRIVATE")),Jt(Cr,so,t),Jt(Cr,so,"esm2017"),Jt("fire-js","")}Vf("");var jf="firebase",Bf="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(jf,Bf,"app");function ti(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Qa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hf=Qa,Za=new Bn("auth","Firebase",Qa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new qa("@firebase/auth");function Wf(t,...e){Ts.logLevel<=J.WARN&&Ts.warn(`Auth (${Wn}): ${t}`,...e)}function us(t,...e){Ts.logLevel<=J.ERROR&&Ts.error(`Auth (${Wn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t,...e){throw si(t,...e)}function Re(t,...e){return si(t,...e)}function ni(t,e,n){const s=Object.assign(Object.assign({},Hf()),{[e]:n});return new Bn("auth","Firebase",s).create(e,{appName:t.name})}function at(t){return ni(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qf(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ce(t,"argument-error"),ni(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function si(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Za.create(t,...e)}function M(t,e,...n){if(!t)throw si(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw us(e),new Error(e)}function ht(t,e){t||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zf(){return lo()==="http:"||lo()==="https:"}function lo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zf()||yd()||"connection"in navigator)?navigator.onLine:!0}function Gf(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ht(n>e,"Short delay should be less than long delay!"),this.isMobile=vd()||wd()}get(){return Kf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e){ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=new qn(3e4,6e4);function mt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ye(t,e,n,s,r={}){return tl(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Hn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return _d()||(c.referrerPolicy="no-referrer"),el.fetch()(nl(t,t.config.apiHost,n,a),c)})}async function tl(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Jf),e);try{const r=new Qf(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ss(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ss(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ss(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ni(t,u,c);Ce(t,u)}}catch(r){if(r instanceof Tt)throw r;Ce(t,"network-request-failed",{message:String(r)})}}async function zn(t,e,n,s,r={}){const i=await Ye(t,e,n,s,r);return"mfaPendingCredential"in i&&Ce(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nl(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ri(t.config,r):`${t.config.apiScheme}://${r}`}function Xf(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Re(this.auth,"network-request-failed")),Yf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ss(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Re(t,e,s);return r.customData._tokenResponse=n,r}function co(t){return t!==void 0&&t.enterprise!==void 0}class Zf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Xf(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function eh(t,e){return Ye(t,"GET","/v2/recaptchaConfig",mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(t,e){return Ye(t,"POST","/v1/accounts:delete",e)}async function sl(t,e){return Ye(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nh(t,e=!1){const n=Ne(t),s=await n.getIdToken(e),r=ii(s);M(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Cn(dr(r.auth_time)),issuedAtTime:Cn(dr(r.iat)),expirationTime:Cn(dr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dr(t){return Number(t)*1e3}function ii(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return us("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ba(n);return r?JSON.parse(r):(us("Failed to decode base64 JWT payload"),null)}catch(r){return us("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function uo(t){const e=ii(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Tt&&sh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function sh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cn(this.lastLoginAt),this.creationTime=Cn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await rn(t,sl(n,{idToken:s}));M(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?rl(i.providerUserInfo):[],a=oh(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Rr(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function ih(t){const e=Ne(t);await Cs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function rl(t){return t.map(e=>{var{providerId:n}=e,s=ti(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ah(t,e){const n=await tl(t,{},async()=>{const s=Hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=nl(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",el.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lh(t,e){return Ye(t,"POST","/v2/accounts:revokeToken",mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=uo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await ah(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Yt;return s&&(M(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(M(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(M(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yt,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ti(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await rn(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nh(this,e)}reload(){return ih(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Cs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ke(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await rn(this,th(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,x=(r=n.email)!==null&&r!==void 0?r:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,Z=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,K=(c=n.createdAt)!==null&&c!==void 0?c:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:P,isAnonymous:te,providerData:be,stsTokenManager:_e}=n;M(V&&_e,e,"internal-error");const De=Yt.fromJSON(this.name,_e);M(typeof V=="string",e,"internal-error"),bt(p,e.name),bt(x,e.name),M(typeof P=="boolean",e,"internal-error"),M(typeof te=="boolean",e,"internal-error"),bt(w,e.name),bt(E,e.name),bt(k,e.name),bt(Z,e.name),bt(K,e.name),bt($,e.name);const gt=new it({uid:V,auth:e,email:x,emailVerified:P,displayName:p,isAnonymous:te,photoURL:E,phoneNumber:w,tenantId:k,stsTokenManager:De,createdAt:K,lastLoginAt:$});return be&&Array.isArray(be)&&(gt.providerData=be.map(Xe=>Object.assign({},Xe))),Z&&(gt._redirectEventId=Z),gt}static async _fromIdTokenResponse(e,n,s=!1){const r=new Yt;r.updateFromServerResponse(n);const i=new it({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Cs(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];M(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?rl(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Yt;a.updateFromIdToken(s);const l=new it({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Rr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Map;function ot(t){ht(t instanceof Function,"Expected a class definition");let e=fo.get(t);return e?(ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}il.type="NONE";const ho=il;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t,e,n){return`firebase:${t}:${e}:${n}`}class Xt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ds(this.userKey,r.apiKey,i),this.fullPersistenceKey=ds("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Xt(ot(ho),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||ot(ho);const o=ds(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const p=it._fromJSON(e,u);c!==i&&(a=p),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xt(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Xt(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ol(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dl(e))return"Blackberry";if(fl(e))return"Webos";if(al(e))return"Safari";if((e.includes("chrome/")||ll(e))&&!e.includes("edge/"))return"Chrome";if(ul(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ol(t=ge()){return/firefox\//i.test(t)}function al(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ll(t=ge()){return/crios\//i.test(t)}function cl(t=ge()){return/iemobile/i.test(t)}function ul(t=ge()){return/android/i.test(t)}function dl(t=ge()){return/blackberry/i.test(t)}function fl(t=ge()){return/webos/i.test(t)}function oi(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ch(t=ge()){var e;return oi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uh(){return xd()&&document.documentMode===10}function hl(t=ge()){return oi(t)||ul(t)||fl(t)||dl(t)||/windows phone/i.test(t)||cl(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e=[]){let n;switch(t){case"Browser":n=po(ge());break;case"Worker":n=`${po(ge())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fh(t,e={}){return Ye(t,"GET","/v2/passwordPolicy",mt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=6;class ph{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mo(this),this.idTokenSubscription=new mo(this),this.beforeStateQueue=new dh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Za,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Xt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sl(this,{idToken:e}),s=await it._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ke(this.app))return Promise.reject(at(this));const n=e?Ne(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ke(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ke(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fh(this),n=new ph(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await lh(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ot(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Xt.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Wf(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ct(t){return Ne(t)}class mo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ad(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gh(t){Ws=t}function ml(t){return Ws.loadJS(t)}function bh(){return Ws.recaptchaEnterpriseScript}function vh(){return Ws.gapiScript}function _h(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yh="recaptcha-enterprise",wh="NO_RECAPTCHA";class xh{constructor(e){this.type=yh,this.auth=Ct(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{eh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Zf(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;co(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(wh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&co(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=bh();l.length!==0&&(l+=a),ml(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function go(t,e,n,s=!1){const r=new xh(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Or(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await go(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await go(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t,e){const n=Ga(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Es(i,e??{}))return r;Ce(r,"already-initialized")}return n.initialize({options:e})}function Eh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Sh(t,e,n){const s=Ct(t);M(s._canInitEmulator,s,"emulator-config-failed"),M(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=gl(e),{host:o,port:a}=Th(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),Ch()}function gl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Th(t){const e=gl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:bo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:bo(o)}}}function bo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ch(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}async function kh(t,e){return Ye(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(t,e){return zn(t,"POST","/v1/accounts:signInWithPassword",mt(t,e))}async function Ph(t,e){return Ye(t,"POST","/v1/accounts:sendOobCode",mt(t,e))}async function Rh(t,e){return Ph(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oh(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",mt(t,e))}async function Mh(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ai{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new $n(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new $n(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Or(e,n,"signInWithPassword",Ah);case"emailLink":return Oh(e,{email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Or(e,s,"signUpPassword",kh);case"emailLink":return Mh(e,{idToken:n,email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(t,e){return zn(t,"POST","/v1/accounts:signInWithIdp",mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="http://localhost";class Ft extends ai{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ce("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ti(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ft(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Qt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qt(e,n)}buildRequest(){const e={requestUri:Nh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lh(t){const e=_n(yn(t)).link,n=e?_n(yn(e)).deep_link_id:null,s=_n(yn(t)).deep_link_id;return(s?_n(yn(s)).link:null)||s||n||e||t}class li{constructor(e){var n,s,r,i,o,a;const l=_n(yn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,p=Dh((r=l.mode)!==null&&r!==void 0?r:null);M(c&&u&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Lh(e);try{return new li(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.providerId=cn.PROVIDER_ID}static credential(e,n){return $n._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=li.parseLink(n);return M(s,"argument-error"),$n._fromEmailAndCode(e,s.code,s.tenantId)}}cn.PROVIDER_ID="password";cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ci{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Kn{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Kn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return st.credential(n,s)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Kn{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Kn{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return xt.credential(n,s)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uh(t,e){return zn(t,"POST","/v1/accounts:signUp",mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await it._fromIdTokenResponse(e,s,r),o=vo(s);return new Vt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=vo(s);return new Vt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function vo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Tt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ks(e,n,s,r)}}function bl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(t,i,e,s):i})}async function $h(t,e,n=!1){const s=await rn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(t,e,n=!1){const{auth:s}=t;if(ke(s.app))return Promise.reject(at(s));const r="reauthenticate";try{const i=await rn(t,bl(s,r,e,t),n);M(i.idToken,s,"internal-error");const o=ii(i.idToken);M(o,s,"internal-error");const{sub:a}=o;return M(t.uid===a,s,"user-mismatch"),Vt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ce(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(t,e,n=!1){if(ke(t.app))return Promise.reject(at(t));const s="signIn",r=await bl(t,s,e),i=await Vt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Vh(t,e){return vl(Ct(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){const e=Ct(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jh(t,e,n){if(ke(t.app))return Promise.reject(at(t));const s=Ct(t),o=await Or(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Uh).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&_l(t),l}),a=await Vt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Bh(t,e,n){return ke(t.app)?Promise.reject(at(t)):Vh(Ne(t),cn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&_l(t),s})}async function yl(t,e){const n=Ne(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await Rh(n.auth,r);i!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t,e){return Ye(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ne(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await rn(s,Hh(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function qh(t,e,n,s){return Ne(t).onIdTokenChanged(e,n,s)}function zh(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function Kh(t,e,n,s){return Ne(t).onAuthStateChanged(e,n,s)}function wl(t){return Ne(t).signOut()}const As="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=1e3,Jh=10;class Il extends xl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);uh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Jh):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Gh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Il.type="LOCAL";const Yh=Il;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends xl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}El.type="SESSION";const Sl=El;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new qs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Xh(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=ui("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const x=p;if(x.data.eventId===c)switch(x.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(x.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function Zh(t){Ge().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function ep(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function np(){return Tl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="firebaseLocalStorageDb",sp=1,Ps="firebaseLocalStorage",kl="fbase_key";class Gn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zs(t,e){return t.transaction([Ps],e?"readwrite":"readonly").objectStore(Ps)}function rp(){const t=indexedDB.deleteDatabase(Cl);return new Gn(t).toPromise()}function Mr(){const t=indexedDB.open(Cl,sp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ps,{keyPath:kl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ps)?e(s):(s.close(),await rp(),e(await Mr()))})})}async function _o(t,e,n){const s=zs(t,!0).put({[kl]:e,value:n});return new Gn(s).toPromise()}async function ip(t,e){const n=zs(t,!1).get(e),s=await new Gn(n).toPromise();return s===void 0?null:s.value}function yo(t,e){const n=zs(t,!0).delete(e);return new Gn(n).toPromise()}const op=800,ap=3;class Al{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ap)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(np()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ep(),!this.activeServiceWorker)return;this.sender=new Qh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mr();return await _o(e,As,"1"),await yo(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_o(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ip(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=zs(r,!1).getAll();return new Gn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),op)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Al.type="LOCAL";const lp=Al;new qn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e){return e?ot(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends ai{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cp(t){return vl(t.auth,new di(t),t.bypassAuthState)}function up(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Fh(n,new di(t),t.bypassAuthState)}async function dp(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),$h(n,new di(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cp;case"linkViaPopup":case"linkViaRedirect":return dp;case"reauthViaPopup":case"reauthViaRedirect":return up;default:Ce(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new qn(2e3,1e4);async function hp(t,e,n){if(ke(t.app))return Promise.reject(Re(t,"operation-not-supported-in-this-environment"));const s=Ct(t);qf(t,e,ci);const r=Pl(s,n);return new Nt(s,"signInViaPopup",e,r).executeNotNull()}class Nt extends Rl{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fp.get())};e()}}Nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="pendingRedirect",fs=new Map;class mp extends Rl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const s=await gp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gp(t,e){const n=_p(e),s=vp(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function bp(t,e){fs.set(t._key(),e)}function vp(t){return ot(t._redirectPersistence)}function _p(t){return ds(pp,t.config.apiKey,t.name)}async function yp(t,e,n=!1){if(ke(t.app))return Promise.reject(at(t));const s=Ct(t),r=Pl(s,e),o=await new mp(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=10*60*1e3;class xp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ip(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ol(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Re(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wp&&this.cachedEventUids.clear(),this.cachedEventUids.has(wo(e))}saveEventToCache(e){this.cachedEventUids.add(wo(e)),this.lastProcessedEventTime=Date.now()}}function wo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ol({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ip(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ol(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(t,e={}){return Ye(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tp=/^https?/;async function Cp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ep(t);for(const n of e)try{if(kp(n))return}catch{}Ce(t,"unauthorized-domain")}function kp(t){const e=Pr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Tp.test(n))return!1;if(Sp.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=new qn(3e4,6e4);function xo(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Pp(t){return new Promise((e,n)=>{var s,r,i;function o(){xo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xo(),n(Re(t,"network-request-failed"))},timeout:Ap.get()})}if(!((r=(s=Ge().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const a=_h("iframefcb");return Ge()[a]=()=>{gapi.load?o():n(Re(t,"network-request-failed"))},ml(`${vh()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw hs=null,e})}let hs=null;function Rp(t){return hs=hs||Pp(t),hs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=new qn(5e3,15e3),Mp="__/auth/iframe",Np="emulator/auth/iframe",Dp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Up(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ri(e,Np):`https://${t.config.authDomain}/${Mp}`,s={apiKey:e.apiKey,appName:t.name,v:Wn},r=Lp.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Hn(s).slice(1)}`}async function $p(t){const e=await Rp(t),n=Ge().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:Up(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dp,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Re(t,"network-request-failed"),a=Ge().setTimeout(()=>{i(o)},Op.get());function l(){Ge().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vp=500,jp=600,Bp="_blank",Hp="http://localhost";class Io{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wp(t,e,n,s=Vp,r=jp){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Fp),{width:s.toString(),height:r.toString(),top:i,left:o}),c=ge().toLowerCase();n&&(a=ll(c)?Bp:n),ol(c)&&(e=e||Hp,l.scrollbars="yes");const u=Object.entries(l).reduce((x,[w,E])=>`${x}${w}=${E},`,"");if(ch(c)&&a!=="_self")return qp(e||"",a),new Io(null);const p=window.open(e||"",a,u);M(p,t,"popup-blocked");try{p.focus()}catch{}return new Io(p)}function qp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="__/auth/handler",Kp="emulator/auth/handler",Gp=encodeURIComponent("fac");async function Eo(t,e,n,s,r,i){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Wn,eventId:r};if(e instanceof ci){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries({}))o[u]=p}if(e instanceof Kn){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Gp}=${encodeURIComponent(l)}`:"";return`${Jp(t)}?${Hn(a).slice(1)}${c}`}function Jp({config:t}){return t.emulator?ri(t,Kp):`https://${t.authDomain}/${zp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="webStorageSupport";class Yp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sl,this._completeRedirectFn=yp,this._overrideRedirectResult=bp}async _openPopup(e,n,s,r){var i;ht((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Eo(e,n,s,Pr(),r);return Wp(e,o,ui())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Eo(e,n,s,Pr(),r);return Zh(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ht(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $p(e),s=new xp(e);return n.register("authEvent",r=>(M(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fr,{type:fr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[fr];o!==void 0&&n(!!o),Ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hl()||al()||oi()}}const Xp=Yp;var So="@firebase/auth",To="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function em(t){Ln(new sn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pl(t)},c=new mh(s,r,i,l);return Eh(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ln(new sn("auth-internal",e=>{const n=Ct(e.getProvider("auth").getImmediate());return(s=>new Qp(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(So,To,Zp(t)),Jt(So,To,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=5*60,nm=Wa("authIdTokenMaxAge")||tm;let Co=null;const sm=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>nm)return;const r=n==null?void 0:n.token;Co!==r&&(Co=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function rm(t=Rf()){const e=Ga(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ih(t,{popupRedirectResolver:Xp,persistence:[lp,Yh,Sl]}),s=Wa("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=sm(i.toString());zh(n,o,()=>o(n.currentUser)),qh(n,a=>o(a))}}const r=gd("auth");return r&&Sh(n,`http://${r}`),n}function im(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gh({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Re("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",im().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});em("Browser");const om={apiKey:"AIzaSyCbL_3nj_CyexuqoDZM-9q4H3ZwP-yiIAs",authDomain:"prime-imoveis-98b9a.firebaseapp.com",projectId:"prime-imoveis-98b9a",storageBucket:"prime-imoveis-98b9a.firebasestorage.app",messagingSenderId:"476715353928",appId:"1:476715353928:web:de685deebb33a5f665157d",measurementId:"G-46YLRRCG13"},am=Ja(om),St=rm(am),lm=new st,cm=async()=>{if(St.currentUser)return await yl(St.currentUser)},um=async(t,e)=>{const n=await jh(St,t,e);return await yl(n.user),n},ko=(t,e)=>Bh(St,t,e),dm=()=>hp(St,lm),hr=()=>wl(St),fm=()=>wl(St),Nr=ln({user:null,loading:!0});Kh(St,t=>{Nr.user=t,Nr.loading=!1});const Ml=()=>({authState:Nr,logout:fm});/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:s,iconNode:r,name:i,class:o,...a},{slots:l})=>Ir("svg",{...rs,width:t||rs.width,height:t||rs.height,stroke:s||rs.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${hm(i??"icon")}`],...a},[...r.map(c=>Ir(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=(t,e)=>(n,{slots:s})=>Ir(pm,{...n,iconNode:e,name:t},s);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=z("BathIcon",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=z("BedDoubleIcon",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=z("BuildingIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=z("CarIcon",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=z("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=z("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=z("CirclePlusIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=z("DollarSignIcon",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=z("FacebookIcon",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=z("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=z("HomeIcon",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=z("InboxIcon",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=z("InstagramIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=z("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=z("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=z("LockIcon",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=z("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=z("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=z("MapPinIcon",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=z("MaximizeIcon",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=z("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=z("PhoneIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=z("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=z("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=z("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=z("SendIcon",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=z("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=z("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Nm={class:"sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"},Dm={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Lm={class:"flex justify-between h-16"},Um={class:"flex items-center"},$m={href:"#",class:"flex items-center gap-2 text-brand-700 font-extrabold text-xl tracking-tight transition hover:opacity-90"},Fm={class:"hidden md:flex items-center gap-4"},Vm={class:"flex items-center gap-3 pl-4 border-l border-slate-200"},jm={class:"flex flex-col text-right"},Bm={class:"text-xs font-semibold text-slate-800 leading-none"},Hm={class:"text-[10px] text-slate-400 font-medium"},Wm={class:"w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold border border-brand-200"},qm=["src"],zm={key:1},Km={class:"flex items-center md:hidden"},Gm={class:"md:hidden border-t border-slate-100 bg-white"},Jm={class:"pt-4 pb-4 border-t border-slate-100 px-4"},Ym={key:0,class:"flex items-center gap-3"},Xm={class:"w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold border border-brand-200"},Qm=["src"],Zm={key:1},eg={class:"text-sm font-semibold text-slate-800"},tg={class:"text-xs text-slate-500"},ng={key:1,class:"space-y-2"},sg={__name:"Navbar",emits:["open-auth","open-new-property"],setup(t,{emit:e}){const n=e,{authState:s,logout:r}=Ml(),i=Da(()=>(s==null?void 0:s.user)||null),o=le(!1),a=async()=>{try{await r(),alert("Sessão encerrada com sucesso!")}catch(l){console.error("Erro ao deslogar:",l)}};return(l,c)=>(U(),j("nav",Nm,[f("div",Dm,[f("div",Lm,[f("div",Um,[f("a",$m,[C(D(Dl),{class:"w-6 h-6 text-brand-600 stroke-[2.5]"}),c[4]||(c[4]=f("span",null,[Ke("Prime"),f("span",{class:"text-slate-800 font-medium"},"Imóveis")],-1))]),c[5]||(c[5]=tn('<div class="hidden md:flex ml-10 space-x-8"><a href="#" class="border-b-2 border-brand-600 px-1 pt-1 text-sm font-semibold text-brand-700">Comprar</a><a href="#" class="border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 transition">Alugar</a><a href="#" class="border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 transition">Lançamentos</a><a href="#" class="border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 transition">Anunciar</a></div>',1))]),f("div",Fm,[i.value?(U(),j(Ie,{key:0},[f("button",{onClick:c[0]||(c[0]=u=>n("open-new-property")),class:"inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl transition duration-150 shadow-sm shadow-brand-200"},[C(D(_m),{class:"w-4 h-4"}),c[6]||(c[6]=Ke(" Anunciar Imóvel ",-1))]),f("div",Vm,[f("div",jm,[f("span",Bm,se(i.value.displayName||"Usuário"),1),f("span",Hm,se(i.value.email),1)]),f("div",Wm,[i.value.photoURL?(U(),j("img",{key:0,src:i.value.photoURL,alt:"Avatar",class:"w-full h-full rounded-full object-cover"},null,8,qm)):(U(),j("span",zm,se((i.value.displayName||i.value.email||"U")[0].toUpperCase()),1))]),f("button",{onClick:a,title:"Sair",class:"p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition"},[C(D(Ao),{class:"w-5 h-5"})])])],64)):(U(),j("button",{key:1,onClick:c[1]||(c[1]=u=>n("open-auth")),class:"inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition"},[C(D(Ll),{class:"w-4 h-4"}),c[7]||(c[7]=Ke(" Entrar / Cadastrar ",-1))]))]),f("div",Km,[f("button",{onClick:c[2]||(c[2]=u=>o.value=!o.value),class:"inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"},[o.value?(U(),On(D(mi),{key:1,class:"w-6 h-6"})):(U(),On(D(km),{key:0,class:"w-6 h-6"}))])])])]),ie(f("div",Gm,[c[8]||(c[8]=tn('<div class="pt-2 pb-3 space-y-1 px-4"><a href="#" class="block px-3 py-2 rounded-xl text-base font-semibold text-brand-700 bg-brand-50">Comprar</a><a href="#" class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">Alugar</a><a href="#" class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">Lançamentos</a><a href="#" class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">Anunciar</a></div>',1)),f("div",Jm,[i.value?(U(),j("div",Ym,[f("div",Xm,[i.value.photoURL?(U(),j("img",{key:0,src:i.value.photoURL,alt:"Avatar",class:"w-full h-full rounded-full object-cover"},null,8,Qm)):(U(),j("span",Zm,se((i.value.displayName||i.value.email||"U")[0].toUpperCase()),1))]),f("div",null,[f("div",eg,se(i.value.displayName||"Usuário"),1),f("div",tg,se(i.value.email),1)]),f("button",{onClick:a,class:"ml-auto p-2 text-slate-400 hover:text-red-500 rounded-xl transition"},[C(D(Ao),{class:"w-5 h-5"})])])):(U(),j("div",ng,[f("button",{onClick:c[3]||(c[3]=u=>{n("open-auth"),o.value=!1}),class:"w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 transition"}," Entrar / Cadastrar ")]))])],512),[[Uu,o.value]])]))}},rg={class:"relative bg-slate-900 overflow-hidden py-24 sm:py-32 flex items-center min-h-[500px]"},ig={class:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left"},og={class:"mt-10 bg-white/95 backdrop-blur-lg p-5 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-950/20 max-w-5xl border border-white/20"},ag={class:"relative flex flex-col justify-center"},lg={class:"relative"},cg={class:"relative flex flex-col justify-center"},ug={class:"relative"},dg={class:"relative flex flex-col justify-center"},fg={class:"relative"},hg={class:"relative flex flex-col justify-center"},pg={class:"relative"},mg={class:"flex items-end"},gg={type:"submit",class:"w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-200 transition duration-150"},bg={__name:"Hero",emits:["search"],setup(t,{emit:e}){const n=e,s=le({cidade:"",tipo:"",precoMax:"",quartos:""}),r=()=>{n("search",{...s.value})};return(i,o)=>(U(),j("div",rg,[o[13]||(o[13]=f("div",{class:"absolute inset-0 z-0"},[f("img",{src:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",alt:"Casa de luxo",class:"w-full h-full object-cover object-center opacity-40 select-none pointer-events-none"}),f("div",{class:"absolute inset-0 bg-gradient-to-tr from-brand-950 via-brand-900/80 to-transparent"})],-1)),f("div",ig,[o[12]||(o[12]=f("div",{class:"max-w-3xl"},[f("span",{class:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/25 border border-brand-400/30 text-brand-200 mb-6"}," ✨ Sua imobiliária digital de confiança "),f("h1",{class:"text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"}," Encontre o lar perfeito para a sua história. "),f("p",{class:"mt-4 text-lg text-slate-300"}," Pesquise entre milhares de casas, apartamentos e coberturas selecionadas especialmente para você com as melhores taxas do mercado. ")],-1)),f("div",og,[f("form",{onSubmit:Hs(r,["prevent"]),class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"},[f("div",ag,[o[4]||(o[4]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Localização",-1)),f("div",lg,[C(D(pi),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),ie(f("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>s.value.cidade=a),type:"text",placeholder:"Qual cidade deseja?",class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,s.value.cidade]])])]),f("div",cg,[o[6]||(o[6]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Tipo do Imóvel",-1)),f("div",ug,[C(D(gm),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),ie(f("select",{"onUpdate:modelValue":o[1]||(o[1]=a=>s.value.tipo=a),class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"},[...o[5]||(o[5]=[f("option",{value:""},"Todos os tipos",-1),f("option",{value:"Casa"},"Casa",-1),f("option",{value:"Apartamento"},"Apartamento",-1),f("option",{value:"Cobertura"},"Cobertura",-1)])],512),[[cs,s.value.tipo]])])]),f("div",dg,[o[8]||(o[8]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Preço Máximo",-1)),f("div",fg,[C(D(ym),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),ie(f("select",{"onUpdate:modelValue":o[2]||(o[2]=a=>s.value.precoMax=a),class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"},[...o[7]||(o[7]=[tn('<option value="">Qualquer preço</option><option value="500000">Até R$ 500 mil</option><option value="1000000">Até R$ 1 Milhão</option><option value="2000000">Até R$ 2 Milhões</option><option value="5000000">Até R$ 5 Milhões</option>',5)])],512),[[cs,s.value.precoMax]])])]),f("div",hg,[o[10]||(o[10]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Quartos",-1)),f("div",pg,[C(D(Nl),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),ie(f("select",{"onUpdate:modelValue":o[3]||(o[3]=a=>s.value.quartos=a),class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"},[...o[9]||(o[9]=[tn('<option value="">Qualquer quantidade</option><option value="1">1+ quarto</option><option value="2">2+ quartos</option><option value="3">3+ quartos</option><option value="4">4+ quartos</option>',5)])],512),[[cs,s.value.quartos]])])]),f("div",mg,[f("button",gg,[C(D(Om),{class:"w-4 h-4"}),o[11]||(o[11]=f("span",null,"Buscar",-1))])])],32)])])]))}},vg={class:"group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"},_g={class:"relative overflow-hidden aspect-[4/3] bg-slate-100"},yg=["src","alt"],wg={key:0,class:"absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm z-10"},xg={class:"absolute top-3 right-12 bg-slate-900/75 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-lg z-10"},Ig={class:"p-5 flex flex-col flex-1"},Eg={class:"flex items-baseline gap-1.5 mb-2"},Sg={class:"text-xl font-extrabold text-brand-700"},Tg={key:0,class:"text-xs text-slate-400 font-medium"},Cg={class:"text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-brand-600 transition mb-1"},kg={class:"flex items-center gap-1 text-slate-400 mb-4"},Ag={class:"text-xs font-medium line-clamp-1"},Pg={class:"grid grid-cols-4 gap-2 pt-4 border-t border-slate-100 text-slate-500 mt-auto"},Rg={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Quartos"},Og={class:"text-[11px] font-bold text-slate-700"},Mg={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Banheiros"},Ng={class:"text-[11px] font-bold text-slate-700"},Dg={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Vagas de Garagem"},Lg={class:"text-[11px] font-bold text-slate-700"},Ug={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Área Privativa"},$g={class:"text-[11px] font-bold text-slate-700"},Fg={__name:"PropertyCard",props:{imovel:{type:Object,required:!0}},setup(t){const e=le(!1),n=()=>{e.value=!e.value},s=r=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0}).format(r);return(r,i)=>(U(),j("div",vg,[f("div",_g,[f("img",{src:t.imovel.imagem,alt:t.imovel.titulo,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out select-none"},null,8,yg),t.imovel.destaque?(U(),j("span",wg," Destaque ")):Ee("",!0),f("span",xg,se(t.imovel.tipo),1),f("button",{onClick:Hs(n,["stop"]),class:$t(["absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white text-slate-400 hover:text-red-500 shadow-sm active:scale-95 transition z-10",{"!text-red-500 !bg-white":e.value}])},[C(D(xm),{class:$t(["w-4 h-4 transition-colors",{"fill-red-500 text-red-500":e.value}])},null,8,["class"])],2)]),f("div",Ig,[f("div",Eg,[f("span",Sg,se(s(t.imovel.preco)),1),t.imovel.tipo==="Aluguel"?(U(),j("span",Tg,"/ mês")):Ee("",!0)]),f("h3",Cg,se(t.imovel.titulo),1),f("div",kg,[C(D(pi),{class:"w-3.5 h-3.5 shrink-0"}),f("span",Ag,se(t.imovel.localizacao),1)]),f("div",Pg,[f("div",Rg,[C(D(Nl),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",Og,se(t.imovel.quartos)+" Qto",1)]),f("div",Mg,[C(D(mm),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",Ng,se(t.imovel.banheiros)+" Ban",1)]),f("div",Dg,[C(D(bm),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",Lg,se(t.imovel.vagas)+" Vagas",1)]),f("div",Ug,[C(D(Cm),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",$g,se(t.imovel.area)+" m²",1)])])])]))}},Vg={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"},jg={class:"flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4"},Bg={key:0,class:"inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-amber-800 bg-amber-50 border border-amber-200 text-xs font-semibold"},Hg={key:0,class:"flex flex-col items-center justify-center py-20"},Wg={key:0,class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"},qg={key:1,class:"flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 px-4"},zg={__name:"PropertyGrid",props:{filters:{type:Object,default:()=>({})}},setup(t){const e=t,n=le([]),s=le(!1),r=le(!1),i=async()=>{s.value=!0,r.value=!1;const a=new URLSearchParams;e.filters.cidade&&a.append("cidade",e.filters.cidade),e.filters.tipo&&a.append("tipo",e.filters.tipo),e.filters.precoMax&&a.append("precoMax",e.filters.precoMax),e.filters.quartos&&a.append("quartos",e.filters.quartos);try{const l=await fetch(`http://localhost:3000/api/imoveis?${a.toString()}`);if(!l.ok)throw new Error("Falha ao conectar na API de imóveis");const c=await l.json();n.value=c}catch(l){console.warn("[PropertyGrid] Backend offline. Carregando dados locais mock para visualização.",l.message),r.value=!0,n.value=o(e.filters)}finally{s.value=!1}};Kt(()=>e.filters,()=>{i()},{deep:!0}),da(()=>{i()});function o(a){let c=[...[{id:"imovel-1",titulo:"Apartamento de Luxo Frente ao Mar",tipo:"Apartamento",preco:125e4,localizacao:"Copacabana, Rio de Janeiro - RJ",quartos:3,banheiros:2,vagas:2,area:120,imagem:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",destaque:!0},{id:"imovel-2",titulo:"Casa de Condomínio com Piscina",tipo:"Casa",preco:24e5,localizacao:"Alphaville, Barueri - SP",quartos:4,banheiros:5,vagas:4,area:350,imagem:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",destaque:!0},{id:"imovel-3",titulo:"Cobertura Duplex Espetacular",tipo:"Cobertura",preco:48e5,localizacao:"Ipanema, Rio de Janeiro - RJ",quartos:3,banheiros:4,vagas:3,area:280,imagem:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",destaque:!1},{id:"imovel-4",titulo:"Casa de Campo Charmosa",tipo:"Casa",preco:85e4,localizacao:"Atibaia, São Paulo - SP",quartos:3,banheiros:2,vagas:3,area:200,imagem:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",destaque:!0}]];return a.tipo&&(c=c.filter(u=>u.tipo.toLowerCase()===a.tipo.toLowerCase())),a.cidade&&(c=c.filter(u=>u.localizacao.toLowerCase().includes(a.cidade.toLowerCase()))),a.precoMax&&(c=c.filter(u=>u.preco<=Number(a.precoMax))),a.quartos&&(c=c.filter(u=>u.quartos>=Number(a.quartos))),c}return(a,l)=>(U(),j("div",Vg,[f("div",jg,[l[1]||(l[1]=f("div",null,[f("h2",{class:"text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight"},"Imóveis em Destaque"),f("p",{class:"text-slate-500 text-sm mt-1"},"Conheça nossas melhores opções disponíveis no mercado imobiliário.")],-1)),r.value?(U(),j("div",Bg,[C(D(fi),{class:"w-4 h-4 text-amber-500 shrink-0"}),l[0]||(l[0]=f("span",null,"Backend offline. Exibindo imóveis demonstrativos.",-1))])):Ee("",!0)]),s.value?(U(),j("div",Hg,[C(D(hi),{class:"w-10 h-10 text-brand-600 animate-spin mb-4"}),l[2]||(l[2]=f("span",{class:"text-sm font-semibold text-slate-500"},"Buscando imóveis na base de dados...",-1))])):(U(),j(Ie,{key:1},[n.value.length>0?(U(),j("div",Wg,[(U(!0),j(Ie,null,zc(n.value,c=>(U(),j("div",{key:c.id},[C(Fg,{imovel:c},null,8,["imovel"])]))),128))])):(U(),j("div",qg,[C(D(Im),{class:"w-12 h-12 text-slate-300 mb-4"}),l[4]||(l[4]=f("h3",{class:"text-base font-bold text-slate-700 mb-1"},"Nenhum imóvel encontrado",-1)),l[5]||(l[5]=f("p",{class:"text-xs text-slate-400 max-w-sm"},"Tente reajustar seus filtros de pesquisa para encontrar novas correspondências.",-1)),f("button",{onClick:i,class:"mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg transition"},[C(D(Rm),{class:"w-3.5 h-3.5"}),l[3]||(l[3]=Ke(" Atualizar busca ",-1))])]))],64))]))}},Kg={key:0,class:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"},Gg={class:"relative bg-white w-full max-w-md rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 transition-all transform scale-100"},Jg={key:0,class:"text-center py-4"},Yg={class:"w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100"},Xg={class:"text-sm text-slate-600 mb-6 leading-relaxed"},Qg={class:"text-slate-800"},Zg={key:1},e0={class:"flex border-b border-slate-100 mb-6"},t0={key:0,class:"mb-4 p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex flex-col gap-2"},n0={class:"flex items-center gap-2"},s0=["disabled"],r0={key:1,class:"mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-xs font-semibold flex items-center gap-2"},i0={key:0,class:"relative"},o0={class:"relative"},a0={class:"relative"},l0={class:"relative"},c0={class:"relative"},u0={class:"relative"},d0=["disabled"],f0=["disabled"],h0={__name:"AuthModal",props:{isOpen:{type:Boolean,required:!0}},emits:["close"],setup(t,{emit:e}){const n=t,s=e,r=le("login"),i=le(!1),o=le(""),a=le(""),l=le(!1),c=ln({name:"",email:"",password:""});Kt(()=>n.isOpen,w=>{w||(c.name="",c.email="",c.password="",r.value="login",o.value="",a.value="",l.value=!1)});const u=async()=>{i.value=!0,o.value="",a.value="",l.value=!1;try{if(r.value==="login"){if(!(await ko(c.email,c.password)).user.emailVerified)throw l.value=!0,await hr(),{code:"auth/email-not-verified"};s("close")}else{if(c.password.length<6)throw new Error("A senha deve conter no mínimo 6 caracteres.");const w=await um(c.email,c.password);c.name&&w.user&&await Wh(w.user,{displayName:c.name}),await hr(),r.value="verify"}}catch(w){switch(console.error("Erro de autenticação:",w),w.code){case"auth/email-not-verified":o.value="Seu e-mail ainda não foi verificado. Por favor, confira sua caixa de entrada.";break;case"auth/email-already-in-use":o.value="Este e-mail já está cadastrado.";break;case"auth/invalid-credential":case"auth/wrong-password":case"auth/user-not-found":o.value="E-mail ou senha incorretos.";break;case"auth/weak-password":o.value="A senha deve ter no mínimo 6 caracteres.";break;default:o.value=w.message||"Ocorreu um erro ao processar. Tente novamente."}}finally{i.value=!1}},p=async()=>{i.value=!0,o.value="",a.value="";try{const w=await ko(c.email,c.password);await cm(),await hr(),a.value="E-mail de verificação reenviado com sucesso! Confira sua caixa de entrada e Spam."}catch(w){console.error("Erro ao reenviar e-mail:",w),o.value="Não foi possível reenviar o e-mail. Verifique suas credenciais."}finally{i.value=!1}},x=async()=>{i.value=!0,o.value="";try{await dm(),s("close")}catch(w){console.error("Erro no Google Login:",w),o.value="Falha ao autenticar com o Google."}finally{i.value=!1}};return(w,E)=>t.isOpen?(U(),j("div",Kg,[f("div",{onClick:E[0]||(E[0]=k=>s("close")),class:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"}),f("div",Gg,[f("button",{onClick:E[1]||(E[1]=k=>s("close")),class:"absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-50 transition"},[C(D(mi),{class:"w-5 h-5"})]),r.value==="verify"?(U(),j("div",Jg,[f("div",Yg,[C(D(Dr),{class:"w-8 h-8"})]),E[12]||(E[12]=f("h3",{class:"text-xl font-bold text-slate-800 mb-2"},"Confirme seu E-mail",-1)),f("p",Xg,[E[8]||(E[8]=Ke(" Enviamos um link de confirmação para ",-1)),f("strong",Qg,se(c.email),1),E[9]||(E[9]=Ke(".",-1)),E[10]||(E[10]=f("br",null,null,-1)),E[11]||(E[11]=Ke(" Acesse sua caixa de entrada (ou pasta de Spam) para ativar sua conta antes de fazer o login. ",-1))]),f("button",{onClick:E[2]||(E[2]=k=>{r.value="login",o.value=""}),class:"w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm py-3 px-4 rounded-xl transition"}," Ir para Tela de Login ")])):(U(),j("div",Zg,[f("div",e0,[f("button",{onClick:E[3]||(E[3]=k=>{r.value="login",o.value="",a.value="",l.value=!1}),class:$t(["flex-1 pb-3 text-sm font-bold border-b-2 transition",r.value==="login"?"border-brand-600 text-brand-600":"border-transparent text-slate-400 hover:text-slate-600"])}," Entrar ",2),f("button",{onClick:E[4]||(E[4]=k=>{r.value="register",o.value="",a.value="",l.value=!1}),class:$t(["flex-1 pb-3 text-sm font-bold border-b-2 transition",r.value==="register"?"border-brand-600 text-brand-600":"border-transparent text-slate-400 hover:text-slate-600"])}," Criar Conta ",2)]),o.value?(U(),j("div",t0,[f("div",n0,[C(D(fi),{class:"w-4 h-4 text-red-500 shrink-0"}),f("span",null,se(o.value),1)]),l.value?(U(),j("button",{key:0,onClick:p,type:"button",disabled:i.value,class:"mt-1 text-xs font-bold text-brand-600 hover:underline flex items-center gap-1 self-start"},[C(D(Mm),{class:"w-3 h-3"}),E[13]||(E[13]=f("span",null,"Reenviar e-mail de confirmação",-1))],8,s0)):Ee("",!0)])):Ee("",!0),a.value?(U(),j("div",r0,[C(D(vm),{class:"w-4 h-4 text-emerald-500 shrink-0"}),f("span",null,se(a.value),1)])):Ee("",!0),f("form",{onSubmit:Hs(u,["prevent"]),class:"space-y-4"},[r.value==="register"?(U(),j("div",i0,[E[14]||(E[14]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Nome Completo",-1)),f("div",o0,[C(D(Ll),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),ie(f("input",{"onUpdate:modelValue":E[5]||(E[5]=k=>c.name=k),type:"text",required:"",placeholder:"Como prefere ser chamado?",class:"w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,c.name]])])])):Ee("",!0),f("div",a0,[E[15]||(E[15]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Endereço de E-mail",-1)),f("div",l0,[C(D(Dr),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),ie(f("input",{"onUpdate:modelValue":E[6]||(E[6]=k=>c.email=k),type:"email",required:"",placeholder:"exemplo@dominio.com",class:"w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,c.email]])])]),f("div",c0,[E[16]||(E[16]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Senha de Acesso",-1)),f("div",u0,[C(D(Tm),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),ie(f("input",{"onUpdate:modelValue":E[7]||(E[7]=k=>c.password=k),type:"password",required:"",placeholder:"No mínimo 6 dígitos",class:"w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,c.password]])])]),f("button",{type:"submit",disabled:i.value,class:"w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-150 shadow-md shadow-brand-100 disabled:opacity-50 disabled:cursor-not-allowed"},[i.value?(U(),On(D(hi),{key:0,class:"w-4 h-4 animate-spin"})):Ee("",!0),f("span",null,se(r.value==="login"?"Entrar na Conta":"Finalizar Cadastro"),1)],8,d0)],32),E[18]||(E[18]=f("div",{class:"my-6 flex items-center justify-center gap-3"},[f("span",{class:"h-px bg-slate-100 flex-1"}),f("span",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider"},"Ou continue com"),f("span",{class:"h-px bg-slate-100 flex-1"})],-1)),f("button",{type:"button",onClick:x,disabled:i.value,class:"w-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition active:scale-[0.98] disabled:opacity-50"},[...E[17]||(E[17]=[tn('<svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"></path></svg><span>Acessar com o Google</span>',2)])],8,f0)]))])])):Ee("",!0)}},p0={key:0,class:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"},m0={class:"relative bg-white w-full max-w-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"},g0={class:"text-xl font-extrabold text-slate-800 mb-6 flex items-center gap-2"},b0={key:0,class:"mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2"},v0={class:"grid grid-cols-2 gap-4"},_0={class:"grid grid-cols-4 gap-3"},y0={class:"flex items-center gap-2 py-2"},w0={class:"flex gap-4 pt-4 border-t border-slate-100"},x0=["disabled"],I0={__name:"NewPropertyModal",props:{isOpen:{type:Boolean,required:!0}},emits:["close","property-created"],setup(t,{emit:e}){const n=t,s=e,{token:r}=Ml(),i=le(!1),o=le(""),a=ln({titulo:"",descricao:"",tipo:"Apartamento",preco:"",localizacao:"",quartos:"",banheiros:"",vagas:"",area:"",imagem:"",destaque:!1});Kt(()=>n.isOpen,c=>{c||(a.titulo="",a.descricao="",a.tipo="Apartamento",a.preco="",a.localizacao="",a.quartos="",a.banheiros="",a.vagas="",a.area="",a.imagem="",a.destaque=!1,o.value="")});const l=async()=>{i.value=!0,o.value="";try{const c=await fetch("http://localhost:3000/api/imoveis",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r.value}`},body:JSON.stringify(a)});if(!c.ok){const p=await c.json();throw new Error(p.error||"Erro desconhecido ao salvar o imóvel.")}const u=await c.json();s("property-created",u),s("close")}catch(c){console.error("[NewPropertyModal] Erro ao cadastrar imóvel:",c),o.value=c.message||"Falha ao cadastrar. Verifique a conexão com o servidor Express."}finally{i.value=!1}};return(c,u)=>t.isOpen?(U(),j("div",p0,[f("div",{onClick:u[0]||(u[0]=p=>s("close")),class:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"}),f("div",m0,[f("button",{onClick:u[1]||(u[1]=p=>s("close")),class:"absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-50 transition"},[C(D(mi),{class:"w-5 h-5"})]),f("h2",g0,[C(D(Pm),{class:"w-5 h-5 text-brand-600 stroke-[2.5]"}),u[14]||(u[14]=Ke(" Anunciar Novo Imóvel ",-1))]),o.value?(U(),j("div",b0,[C(D(fi),{class:"w-4 h-4 text-red-500 shrink-0"}),f("span",null,se(o.value),1)])):Ee("",!0),f("form",{onSubmit:Hs(l,["prevent"]),class:"space-y-4"},[f("div",null,[u[15]||(u[15]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Título do Anúncio *",-1)),ie(f("input",{"onUpdate:modelValue":u[2]||(u[2]=p=>a.titulo=p),type:"text",required:"",placeholder:"Ex: Apartamento decorado no centro",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.titulo]])]),f("div",v0,[f("div",null,[u[17]||(u[17]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Tipo *",-1)),ie(f("select",{"onUpdate:modelValue":u[3]||(u[3]=p=>a.tipo=p),required:"",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition cursor-pointer"},[...u[16]||(u[16]=[f("option",{value:"Apartamento"},"Apartamento",-1),f("option",{value:"Casa"},"Casa",-1),f("option",{value:"Cobertura"},"Cobertura",-1)])],512),[[cs,a.tipo]])]),f("div",null,[u[18]||(u[18]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Preço (R$) *",-1)),ie(f("input",{"onUpdate:modelValue":u[4]||(u[4]=p=>a.preco=p),type:"number",required:"",placeholder:"Ex: 450000",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.preco]])])]),f("div",null,[u[19]||(u[19]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Localização *",-1)),ie(f("input",{"onUpdate:modelValue":u[5]||(u[5]=p=>a.localizacao=p),type:"text",required:"",placeholder:"Cidade, Estado ou Bairro",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.localizacao]])]),f("div",_0,[f("div",null,[u[20]||(u[20]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Quartos",-1)),ie(f("input",{"onUpdate:modelValue":u[6]||(u[6]=p=>a.quartos=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.quartos]])]),f("div",null,[u[21]||(u[21]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Banheiros",-1)),ie(f("input",{"onUpdate:modelValue":u[7]||(u[7]=p=>a.banheiros=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.banheiros]])]),f("div",null,[u[22]||(u[22]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Vagas",-1)),ie(f("input",{"onUpdate:modelValue":u[8]||(u[8]=p=>a.vagas=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.vagas]])]),f("div",null,[u[23]||(u[23]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Área (m²)",-1)),ie(f("input",{"onUpdate:modelValue":u[9]||(u[9]=p=>a.area=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.area]])])]),f("div",null,[u[24]||(u[24]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Descrição do Imóvel",-1)),ie(f("textarea",{"onUpdate:modelValue":u[10]||(u[10]=p=>a.descricao=p),rows:"3",placeholder:"Descreva os detalhes importantes...",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition resize-none"},null,512),[[we,a.descricao]])]),f("div",null,[u[25]||(u[25]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"URL da Imagem do Imóvel",-1)),ie(f("input",{"onUpdate:modelValue":u[11]||(u[11]=p=>a.imagem=p),type:"url",placeholder:"Ex: https://images.unsplash.com/...",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.imagem]])]),f("div",y0,[ie(f("input",{"onUpdate:modelValue":u[12]||(u[12]=p=>a.destaque=p),id:"destaque",type:"checkbox",class:"w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"},null,512),[[td,a.destaque]]),u[26]||(u[26]=f("label",{for:"destaque",class:"text-xs font-semibold text-slate-600 cursor-pointer select-none"},"Exibir em destaque na página inicial",-1))]),f("div",w0,[f("button",{type:"button",onClick:u[13]||(u[13]=p=>s("close")),class:"flex-1 py-2.5 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 transition active:scale-[0.98]"}," Cancelar "),f("button",{type:"submit",disabled:i.value,class:"flex-1 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"},[i.value?(U(),On(D(hi),{key:0,class:"w-4 h-4 animate-spin"})):Ee("",!0),u[27]||(u[27]=f("span",null,"Cadastrar Imóvel",-1))],8,x0)])],32)])])):Ee("",!0)}},E0={class:"bg-slate-900 border-t border-slate-800 text-slate-400 py-16"},S0={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},T0={class:"grid grid-cols-1 md:grid-cols-4 gap-10"},C0={class:"space-y-4"},k0={class:"flex items-center gap-2 text-white font-extrabold text-lg tracking-tight"},A0={class:"flex items-center gap-3 pt-2"},P0={href:"#",class:"p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition"},R0={href:"#",class:"p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition"},O0={href:"#",class:"p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition"},M0={class:"space-y-3 text-xs"},N0={class:"flex items-center gap-2"},D0={class:"flex items-center gap-2"},L0={class:"flex items-center gap-2"},U0={class:"mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"},$0={__name:"Footer",setup(t){return(e,n)=>(U(),j("footer",E0,[f("div",S0,[f("div",T0,[f("div",C0,[f("div",k0,[C(D(Dl),{class:"w-5 h-5 text-brand-500"}),n[0]||(n[0]=f("span",null,[Ke("Prime"),f("span",{class:"text-slate-300 font-medium"},"Imóveis")],-1))]),n[1]||(n[1]=f("p",{class:"text-xs leading-relaxed text-slate-400"}," A Prime Imóveis conecta você ao imóvel ideal com simplicidade, tecnologia e segurança. Oferecemos as melhores oportunidades de compra e locação de alto padrão. ",-1)),f("div",A0,[f("a",P0,[C(D(Em),{class:"w-4 h-4"})]),f("a",R0,[C(D(wm),{class:"w-4 h-4"})]),f("a",O0,[C(D(Sm),{class:"w-4 h-4"})])])]),n[6]||(n[6]=tn('<div><h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navegação</h3><ul class="space-y-2 text-xs"><li><a href="#" class="hover:text-white transition">Comprar Imóveis</a></li><li><a href="#" class="hover:text-white transition">Alugar Imóveis</a></li><li><a href="#" class="hover:text-white transition">Lançamentos</a></li><li><a href="#" class="hover:text-white transition">Anunciar Meu Imóvel</a></li><li><a href="#" class="hover:text-white transition">Simulação de Financiamento</a></li></ul></div><div><h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Empresa</h3><ul class="space-y-2 text-xs"><li><a href="#" class="hover:text-white transition">Quem Somos</a></li><li><a href="#" class="hover:text-white transition">Nossas Unidades</a></li><li><a href="#" class="hover:text-white transition">Trabalhe Conosco</a></li><li><a href="#" class="hover:text-white transition">Políticas de Privacidade</a></li><li><a href="#" class="hover:text-white transition">Termos de Uso</a></li></ul></div>',2)),f("div",M0,[n[5]||(n[5]=f("h3",{class:"text-sm font-bold text-white mb-4 uppercase tracking-wider"},"Fale Conosco",-1)),f("div",N0,[C(D(Am),{class:"w-4 h-4 text-brand-500 shrink-0"}),n[2]||(n[2]=f("span",null,"0800 555 7788",-1))]),f("div",D0,[C(D(Dr),{class:"w-4 h-4 text-brand-500 shrink-0"}),n[3]||(n[3]=f("span",null,"contato@primeimoveis.com",-1))]),f("div",L0,[C(D(pi),{class:"w-4 h-4 text-brand-500 shrink-0"}),n[4]||(n[4]=f("span",null,"Av. Paulista, 1000 - São Paulo, SP",-1))])])]),f("div",U0,[f("span",null,"© "+se(new Date().getFullYear())+" Prime Imóveis. Todos os direitos reservados. CRECI: 12345-J",1),n[7]||(n[7]=f("div",{class:"flex gap-4"},[f("a",{href:"#",class:"hover:text-white transition"},"Políticas"),f("a",{href:"#",class:"hover:text-white transition"},"Segurança")],-1))])])]))}},F0={class:"min-h-screen flex flex-col bg-slate-50 selection:bg-brand-500 selection:text-white"},V0={class:"flex-grow"},j0={__name:"App",setup(t){const e=le({}),n=le(!1),s=le(!1),r=le(null),i=a=>{e.value=a},o=()=>{r.value&&r.value.fetchImoveis()};return(a,l)=>(U(),j("div",F0,[C(sg,{onOpenAuth:l[0]||(l[0]=c=>n.value=!0),onOpenNewProperty:l[1]||(l[1]=c=>s.value=!0)}),f("main",V0,[C(bg,{onSearch:i}),C(zg,{ref_key:"gridRef",ref:r,filters:e.value},null,8,["filters"])]),C($0),C(h0,{"is-open":n.value,onClose:l[2]||(l[2]=c=>n.value=!1)},null,8,["is-open"]),C(I0,{"is-open":s.value,onClose:l[3]||(l[3]=c=>s.value=!1),onPropertyCreated:o},null,8,["is-open"])]))}};od(j0).mount("#app");
