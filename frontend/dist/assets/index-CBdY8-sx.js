(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const J={},Bt=[],qe=()=>{},Co=()=>!1,Rs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Os=t=>t.startsWith("onUpdate:"),ue=Object.assign,Dr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dl=Object.prototype.hasOwnProperty,H=(t,e)=>Dl.call(t,e),P=Array.isArray,Wt=t=>$n(t)==="[object Map]",rn=t=>$n(t)==="[object Set]",yi=t=>$n(t)==="[object Date]",N=t=>typeof t=="function",ne=t=>typeof t=="string",Ke=t=>typeof t=="symbol",B=t=>t!==null&&typeof t=="object",ko=t=>(B(t)||N(t))&&N(t.then)&&N(t.catch),Ao=Object.prototype.toString,$n=t=>Ao.call(t),Ll=t=>$n(t).slice(8,-1),Po=t=>$n(t)==="[object Object]",Lr=t=>ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yn=Nr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ms=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ul=/-\w/g,ke=Ms(t=>t.replace(Ul,e=>e.slice(1).toUpperCase())),$l=/\B([A-Z])/g,Vt=Ms(t=>t.replace($l,"-$1").toLowerCase()),Ro=Ms(t=>t.charAt(0).toUpperCase()+t.slice(1)),Js=Ms(t=>t?`on${Ro(t)}`:""),He=(t,e)=>!Object.is(t,e),is=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Oo=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ns=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wi;const Ds=()=>wi||(wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ur(t){if(P(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ne(s)?Hl(s):Ur(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ne(t)||B(t))return t}const Fl=/;(?![^(]*\))/g,Vl=/:([^]+)/,jl=/\/\*[^]*?\*\//g;function Hl(t){const e={};return t.replace(jl,"").split(Fl).forEach(n=>{if(n){const s=n.split(Vl);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ut(t){let e="";if(ne(t))e=t;else if(P(t))for(let n=0;n<t.length;n++){const s=Ut(t[n]);s&&(e+=s+" ")}else if(B(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wl=Nr(Bl);function Mo(t){return!!t||t===""}function ql(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=on(t[s],e[s]);return n}function on(t,e){if(t===e)return!0;let n=yi(t),s=yi(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ke(t),s=Ke(e),n||s)return t===e;if(n=P(t),s=P(e),n||s)return n&&s?ql(t,e):!1;if(n=B(t),s=B(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!on(t[o],e[o]))return!1}}return String(t)===String(e)}function $r(t,e){return t.findIndex(n=>on(n,e))}const No=t=>!!(t&&t.__v_isRef===!0),ie=t=>ne(t)?t:t==null?"":P(t)||B(t)&&(t.toString===Ao||!N(t.toString))?No(t)?ie(t.value):JSON.stringify(t,Do,2):String(t),Do=(t,e)=>No(e)?Do(t,e.value):Wt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Ys(s,i)+" =>"]=r,n),{})}:rn(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ys(n))}:Ke(e)?Ys(e):B(e)&&!P(e)&&!Po(e)?String(e):e,Ys=(t,e="")=>{var n;return Ke(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ae;class zl{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ae&&(ae.active?(this.parent=ae,this.index=(ae.scopes||(ae.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const s=this.effects.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}}run(e){if(this._active){const n=ae;try{return ae=this,e()}finally{ae=n}}}on(){++this._on===1&&(this.prevScope=ae,ae=this)}off(){if(this._on>0&&--this._on===0){if(ae===this)ae=this.prevScope;else{let e=ae;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,s=r.length;n<s;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Kl(){return ae}let X;const Xs=new WeakSet;class Lo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ae&&(ae.active?ae.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xs.has(this)&&(Xs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$o(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xi(this),Fo(this);const e=X,n=Ae;X=this,Ae=!0;try{return this.fn()}finally{Vo(this),X=e,Ae=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jr(e);this.deps=this.depsTail=void 0,xi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hr(this)&&this.run()}get dirty(){return hr(this)}}let Uo=0,wn,xn;function $o(t,e=!1){if(t.flags|=8,e){t.next=xn,xn=t;return}t.next=wn,wn=t}function Fr(){Uo++}function Vr(){if(--Uo>0)return;if(xn){let e=xn;for(xn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;wn;){let e=wn;for(wn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Fo(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vo(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),jr(s),Gl(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function hr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jo(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jo(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Cn)||(t.globalVersion=Cn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!hr(t))))return;t.flags|=2;const e=t.dep,n=X,s=Ae;X=t,Ae=!0;try{Fo(t);const r=t.fn(t._value);(e.version===0||He(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{X=n,Ae=s,Vo(t),t.flags&=-3}}function jr(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)jr(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ae=!0;const Ho=[];function ot(){Ho.push(Ae),Ae=!1}function at(){const t=Ho.pop();Ae=t===void 0?!0:t}function xi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=X;X=void 0;try{e()}finally{X=n}}}let Cn=0;class Jl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!X||!Ae||X===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==X)n=this.activeLink=new Jl(X,this),X.deps?(n.prevDep=X.depsTail,X.depsTail.nextDep=n,X.depsTail=n):X.deps=X.depsTail=n,Bo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=X.depsTail,n.nextDep=void 0,X.depsTail.nextDep=n,X.depsTail=n,X.deps===n&&(X.deps=s)}return n}trigger(e){this.version++,Cn++,this.notify(e)}notify(e){Fr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vr()}}}function Bo(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Bo(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const pr=new WeakMap,Mt=Symbol(""),gr=Symbol(""),kn=Symbol("");function le(t,e,n){if(Ae&&X){let s=pr.get(t);s||pr.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Hr),r.map=s,r.key=n),r.track()}}function Ze(t,e,n,s,r,i){const o=pr.get(t);if(!o){Cn++;return}const a=l=>{l&&l.trigger()};if(Fr(),e==="clear")o.forEach(a);else{const l=P(t),u=l&&Lr(n);if(l&&n==="length"){const c=Number(s);o.forEach((p,y)=>{(y==="length"||y===kn||!Ke(y)&&y>=c)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(kn)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Mt)),Wt(t)&&a(o.get(gr)));break;case"delete":l||(a(o.get(Mt)),Wt(t)&&a(o.get(gr)));break;case"set":Wt(t)&&a(o.get(Mt));break}}Vr()}function jt(t){const e=j(t);return e===t?e:(le(e,"iterate",kn),Se(t)?e:e.map(Re))}function Ls(t){return le(t=j(t),"iterate",kn),t}function Ve(t,e){return lt(t)?Qt(Nt(t)?Re(e):e):Re(e)}const Yl={__proto__:null,[Symbol.iterator](){return Qs(this,Symbol.iterator,t=>Ve(this,t))},concat(...t){return jt(this).concat(...t.map(e=>P(e)?jt(e):e))},entries(){return Qs(this,"entries",t=>(t[1]=Ve(this,t[1]),t))},every(t,e){return Ye(this,"every",t,e,void 0,arguments)},filter(t,e){return Ye(this,"filter",t,e,n=>n.map(s=>Ve(this,s)),arguments)},find(t,e){return Ye(this,"find",t,e,n=>Ve(this,n),arguments)},findIndex(t,e){return Ye(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ye(this,"findLast",t,e,n=>Ve(this,n),arguments)},findLastIndex(t,e){return Ye(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ye(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zs(this,"includes",t)},indexOf(...t){return Zs(this,"indexOf",t)},join(t){return jt(this).join(t)},lastIndexOf(...t){return Zs(this,"lastIndexOf",t)},map(t,e){return Ye(this,"map",t,e,void 0,arguments)},pop(){return hn(this,"pop")},push(...t){return hn(this,"push",t)},reduce(t,...e){return Ii(this,"reduce",t,e)},reduceRight(t,...e){return Ii(this,"reduceRight",t,e)},shift(){return hn(this,"shift")},some(t,e){return Ye(this,"some",t,e,void 0,arguments)},splice(...t){return hn(this,"splice",t)},toReversed(){return jt(this).toReversed()},toSorted(t){return jt(this).toSorted(t)},toSpliced(...t){return jt(this).toSpliced(...t)},unshift(...t){return hn(this,"unshift",t)},values(){return Qs(this,"values",t=>Ve(this,t))}};function Qs(t,e,n){const s=Ls(t),r=s[e]();return s!==t&&!Se(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Xl=Array.prototype;function Ye(t,e,n,s,r,i){const o=Ls(t),a=o!==t&&!Se(t),l=o[e];if(l!==Xl[e]){const p=l.apply(t,i);return a?Re(p):p}let u=n;o!==t&&(a?u=function(p,y){return n.call(this,Ve(t,p),y,t)}:n.length>2&&(u=function(p,y){return n.call(this,p,y,t)}));const c=l.call(o,u,s);return a&&r?r(c):c}function Ii(t,e,n,s){const r=Ls(t),i=r!==t&&!Se(t);let o=n,a=!1;r!==t&&(i?(a=s.length===0,o=function(u,c,p){return a&&(a=!1,u=Ve(t,u)),n.call(this,u,Ve(t,c),p,t)}):n.length>3&&(o=function(u,c,p){return n.call(this,u,c,p,t)}));const l=r[e](o,...s);return a?Ve(t,l):l}function Zs(t,e,n){const s=j(t);le(s,"iterate",kn);const r=s[e](...n);return(r===-1||r===!1)&&qr(n[0])?(n[0]=j(n[0]),s[e](...n)):r}function hn(t,e,n=[]){ot(),Fr();const s=j(t)[e].apply(t,n);return Vr(),at(),s}const Ql=Nr("__proto__,__v_isRef,__isVue"),Wo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ke));function Zl(t){Ke(t)||(t=String(t));const e=j(this);return le(e,"has",t),e.hasOwnProperty(t)}class qo{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?cc:Jo:i?Go:Ko).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=P(e);if(!r){let l;if(o&&(l=Yl[n]))return l;if(n==="hasOwnProperty")return Zl}const a=Reflect.get(e,n,ce(e)?e:s);if((Ke(n)?Wo.has(n):Ql(n))||(r||le(e,"get",n),i))return a;if(ce(a)){const l=o&&Lr(n)?a:a.value;return r&&B(l)?br(l):l}return B(a)?r?br(a):an(a):a}}class zo extends qo{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=P(e)&&Lr(n);if(!this._isShallow){const u=lt(i);if(!Se(s)&&!lt(s)&&(i=j(i),s=j(s)),!o&&ce(i)&&!ce(s))return u||(i.value=s),!0}const a=o?Number(n)<e.length:H(e,n),l=Reflect.set(e,n,s,ce(e)?e:r);return e===j(r)&&l&&(a?He(s,i)&&Ze(e,"set",n,s):Ze(e,"add",n,s)),l}deleteProperty(e,n){const s=H(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Ze(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ke(n)||!Wo.has(n))&&le(e,"has",n),s}ownKeys(e){return le(e,"iterate",P(e)?"length":Mt),Reflect.ownKeys(e)}}class ec extends qo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const tc=new zo,nc=new ec,sc=new zo(!0);const mr=t=>t,Zn=t=>Reflect.getPrototypeOf(t);function rc(t,e,n){return function(...s){const r=this.__v_raw,i=j(r),o=Wt(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...s),c=n?mr:e?Qt:Re;return!e&&le(i,"iterate",l?gr:Mt),ue(Object.create(u),{next(){const{value:p,done:y}=u.next();return y?{value:p,done:y}:{value:a?[c(p[0]),c(p[1])]:c(p),done:y}}})}}function es(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ic(t,e){const n={get(r){const i=this.__v_raw,o=j(i),a=j(r);t||(He(r,a)&&le(o,"get",r),le(o,"get",a));const{has:l}=Zn(o),u=e?mr:t?Qt:Re;if(l.call(o,r))return u(i.get(r));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&le(j(r),"iterate",Mt),r.size},has(r){const i=this.__v_raw,o=j(i),a=j(r);return t||(He(r,a)&&le(o,"has",r),le(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=j(a),u=e?mr:t?Qt:Re;return!t&&le(l,"iterate",Mt),a.forEach((c,p)=>r.call(i,u(c),u(p),o))}};return ue(n,t?{add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear")}:{add(r){const i=j(this),o=Zn(i),a=j(r),l=!e&&!Se(r)&&!lt(r)?a:r;return o.has.call(i,l)||He(r,l)&&o.has.call(i,r)||He(a,l)&&o.has.call(i,a)||(i.add(l),Ze(i,"add",l,l)),this},set(r,i){!e&&!Se(i)&&!lt(i)&&(i=j(i));const o=j(this),{has:a,get:l}=Zn(o);let u=a.call(o,r);u||(r=j(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,i),u?He(i,c)&&Ze(o,"set",r,i):Ze(o,"add",r,i),this},delete(r){const i=j(this),{has:o,get:a}=Zn(i);let l=o.call(i,r);l||(r=j(r),l=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return l&&Ze(i,"delete",r,void 0),u},clear(){const r=j(this),i=r.size!==0,o=r.clear();return i&&Ze(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=rc(r,t,e)}),n}function Br(t,e){const n=ic(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(H(n,r)&&r in s?n:s,r,i)}const oc={get:Br(!1,!1)},ac={get:Br(!1,!0)},lc={get:Br(!0,!1)};const Ko=new WeakMap,Go=new WeakMap,Jo=new WeakMap,cc=new WeakMap;function uc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function an(t){return lt(t)?t:Wr(t,!1,tc,oc,Ko)}function dc(t){return Wr(t,!1,sc,ac,Go)}function br(t){return Wr(t,!0,nc,lc,Jo)}function Wr(t,e,n,s,r){if(!B(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=r.get(t);if(i)return i;const o=uc(Ll(t));if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Nt(t){return lt(t)?Nt(t.__v_raw):!!(t&&t.__v_isReactive)}function lt(t){return!!(t&&t.__v_isReadonly)}function Se(t){return!!(t&&t.__v_isShallow)}function qr(t){return t?!!t.__v_raw:!1}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function fc(t){return!H(t,"__v_skip")&&Object.isExtensible(t)&&Oo(t,"__v_skip",!0),t}const Re=t=>B(t)?an(t):t,Qt=t=>B(t)?br(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function ge(t){return hc(t,!1)}function hc(t,e){return ce(t)?t:new pc(t,e)}class pc{constructor(e,n){this.dep=new Hr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:j(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Se(e)||lt(e);e=s?e:j(e),He(e,n)&&(this._rawValue=e,this._value=s?e:Re(e),this.dep.trigger())}}function D(t){return ce(t)?t.value:t}const gc={get:(t,e,n)=>e==="__v_raw"?t:D(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ce(r)&&!ce(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Yo(t){return Nt(t)?t:new Proxy(t,gc)}class mc{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Hr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&X!==this)return $o(this,!0),!0}get value(){const e=this.dep.track();return jo(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function bc(t,e,n=!1){let s,r;return N(t)?s=t:(s=t.get,r=t.set),new mc(s,r,n)}const ts={},ps=new WeakMap;let Pt;function vc(t,e=!1,n=Pt){if(n){let s=ps.get(n);s||ps.set(n,s=[]),s.push(t)}}function _c(t,e,n=J){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,u=k=>r?k:Se(k)||r===!1||r===0?et(k,1):et(k);let c,p,y,S,L=!1,O=!1;if(ce(t)?(p=()=>t.value,L=Se(t)):Nt(t)?(p=()=>u(t),L=!0):P(t)?(O=!0,L=t.some(k=>Nt(k)||Se(k)),p=()=>t.map(k=>{if(ce(k))return k.value;if(Nt(k))return u(k);if(N(k))return l?l(k,2):k()})):N(t)?e?p=l?()=>l(t,2):t:p=()=>{if(y){ot();try{y()}finally{at()}}const k=Pt;Pt=c;try{return l?l(t,3,[S]):t(S)}finally{Pt=k}}:p=qe,e&&r){const k=p,te=r===!0?1/0:r;p=()=>et(k(),te)}const Z=Kl(),z=()=>{c.stop(),Z&&Z.active&&Dr(Z.effects,c)};if(i&&e){const k=e;e=(...te)=>{const be=k(...te);return z(),be}}let U=O?new Array(t.length).fill(ts):ts;const V=k=>{if(!(!(c.flags&1)||!c.dirty&&!k))if(e){const te=c.run();if(k||r||L||(O?te.some((be,_e)=>He(be,U[_e])):He(te,U))){y&&y();const be=Pt;Pt=c;try{const _e=[te,U===ts?void 0:O&&U[0]===ts?[]:U,S];U=te,l?l(e,3,_e):e(..._e)}finally{Pt=be}}}else c.run()};return a&&a(V),c=new Lo(p),c.scheduler=o?()=>o(V,!1):V,S=k=>vc(k,!1,c),y=c.onStop=()=>{const k=ps.get(c);if(k){if(l)l(k,4);else for(const te of k)te();ps.delete(c)}},e?s?V(!0):U=c.run():o?o(V.bind(null,!0),!0):c.run(),z.pause=c.pause.bind(c),z.resume=c.resume.bind(c),z.stop=z,z}function et(t,e=1/0,n){if(e<=0||!B(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ce(t))et(t.value,e,n);else if(P(t))for(let s=0;s<t.length;s++)et(t[s],e,n);else if(rn(t)||Wt(t))t.forEach(s=>{et(s,e,n)});else if(Po(t)){for(const s in t)et(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&et(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fn(t,e,n,s){try{return s?t(...s):t()}catch(r){Us(r,e,n)}}function Oe(t,e,n,s){if(N(t)){const r=Fn(t,e,n,s);return r&&ko(r)&&r.catch(i=>{Us(i,e,n)}),r}if(P(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Oe(t[i],e,n,s));return r}}function Us(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||J;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](t,l,u)===!1)return}a=a.parent}if(i){ot(),Fn(i,null,10,[t,l,u]),at();return}}yc(t,n,r,s,o)}function yc(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const he=[];let Fe=-1;const qt=[];let mt=null,Ht=0;const Xo=Promise.resolve();let gs=null;function Qo(t){const e=gs||Xo;return t?e.then(this?t.bind(this):t):e}function wc(t){let e=Fe+1,n=he.length;for(;e<n;){const s=e+n>>>1,r=he[s],i=An(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function zr(t){if(!(t.flags&1)){const e=An(t),n=he[he.length-1];!n||!(t.flags&2)&&e>=An(n)?he.push(t):he.splice(wc(e),0,t),t.flags|=1,Zo()}}function Zo(){gs||(gs=Xo.then(ta))}function xc(t){if(!P(t))mt&&t.id===-1?mt.splice(Ht+1,0,t):t.flags&1||(qt.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)qt.push(t[e]);Zo()}function Ei(t,e,n=Fe+1){for(;n<he.length;n++){const s=he[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;he.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ea(t){if(qt.length){const e=[...new Set(qt)].sort((n,s)=>An(n)-An(s));if(qt.length=0,mt){for(let n=0;n<e.length;n++)mt.push(e[n]);return}for(mt=e,Ht=0;Ht<mt.length;Ht++){const n=mt[Ht];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mt=null,Ht=0}}const An=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ta(t){try{for(Fe=0;Fe<he.length;Fe++){const e=he[Fe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Fe<he.length;Fe++){const e=he[Fe];e&&(e.flags&=-2)}Fe=-1,he.length=0,ea(),gs=null,(he.length||qt.length)&&ta()}}let Ee=null,na=null;function ms(t){const e=Ee;return Ee=t,na=t&&t.type.__scopeId||null,e}function Ic(t,e=Ee,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&_s(-1);const i=ms(e),o=Dt.length;let a;try{a=t(...r)}finally{for(let l=Dt.length;l>o;l--)Ca();ms(i),s._d&&_s(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function re(t,e){if(Ee===null)return t;const n=Hs(Ee),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=J]=e[r];i&&(N(i)&&(i={mounted:i,updated:i}),i.deep&&et(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function kt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(ot(),Oe(l,n,8,[t.el,a,t,e]),at())}}function Ec(t,e){if(pe){let n=pe.provides;const s=pe.parent&&pe.parent.provides;s===n&&(n=pe.provides=Object.create(s)),n[t]=e}}function os(t,e,n=!1){const s=wu();if(s||Kt){let r=Kt?Kt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&N(e)?e.call(s&&s.proxy):e}}const Sc=Symbol.for("v-scx"),Tc=()=>os(Sc);function zt(t,e,n){return sa(t,e,n)}function sa(t,e,n=J){const{immediate:s,deep:r,flush:i,once:o}=n,a=ue({},n),l=e&&s||!e&&i!=="post";let u;if(Mn){if(i==="sync"){const S=Tc();u=S.__watcherHandles||(S.__watcherHandles=[])}else if(!l){const S=()=>{};return S.stop=qe,S.resume=qe,S.pause=qe,S}}const c=pe;a.call=(S,L,O)=>Oe(S,c,L,O);let p=!1;i==="post"?a.scheduler=S=>{ve(S,c&&c.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(S,L)=>{L?S():zr(S)}),a.augmentJob=S=>{e&&(S.flags|=4),p&&(S.flags|=2,c&&(S.id=c.uid,S.i=c))};const y=_c(t,e,a);return Mn&&(u?u.push(y):l&&y()),y}function Cc(t,e,n){const s=this.proxy,r=ne(t)?t.includes(".")?ra(s,t):()=>s[t]:t.bind(s,s);let i;N(e)?i=e:(i=e.handler,n=e);const o=Vn(this),a=sa(r,i.bind(s),n);return o(),a}function ra(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const kc=Symbol("_vte"),$s=t=>t.__isTeleport,er=Symbol("_leaveCb");function Ac(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ct){e=n;break}}return e}function ia(t){if(!Gr(t))return $s(t.type)&&t.children?Ac(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&N(n.default))return n.default()}}function Kr(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Kr($s(n.type)&&ia(n)||n,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function oa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Si(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const bs=new WeakMap;function In(t,e,n,s,r=!1){if(P(t)){t.forEach((O,Z)=>In(O,e&&(P(e)?e[Z]:e),n,s,r));return}if(En(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&In(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Hs(s.component):s.el,o=r?null:i,{i:a,r:l}=t,u=e&&e.r,c=a.refs===J?a.refs={}:a.refs,p=a.setupState,y=j(p),S=p===J?Co:O=>Si(c,O)?!1:H(y,O),L=(O,Z)=>!(Z&&Si(c,Z));if(u!=null&&u!==l){if(Ti(e),ne(u))c[u]=null,S(u)&&(p[u]=null);else if(ce(u)){const O=e;L(u,O.k)&&(u.value=null),O.k&&(c[O.k]=null)}}if(N(l))Fn(l,a,12,[o,c]);else{const O=ne(l),Z=ce(l);if(O||Z){const z=()=>{if(t.f){const U=O?S(l)?p[l]:c[l]:L()||!t.k?l.value:c[t.k];if(r)P(U)&&Dr(U,i);else if(P(U))U.includes(i)||U.push(i);else if(O)c[l]=[i],S(l)&&(p[l]=c[l]);else{const V=[i];L(l,t.k)&&(l.value=V),t.k&&(c[t.k]=V)}}else O?(c[l]=o,S(l)&&(p[l]=o)):Z&&(L(l,t.k)&&(l.value=o),t.k&&(c[t.k]=o))};if(o){const U=()=>{z(),bs.delete(t)};U.id=-1,bs.set(t,U),ve(U,n)}else Ti(t),z()}}}function Ti(t){const e=bs.get(t);e&&(e.flags|=8,bs.delete(t))}Ds().requestIdleCallback;Ds().cancelIdleCallback;const En=t=>!!t.type.__asyncLoader,Gr=t=>t.type.__isKeepAlive;function Pc(t,e){aa(t,"a",e)}function Rc(t,e){aa(t,"da",e)}function aa(t,e,n=pe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Fs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Gr(r.parent.vnode)&&Oc(s,e,n,r),r=r.parent}}function Oc(t,e,n,s){const r=Fs(e,t,s,!0);ca(()=>{Dr(s[e],r)},n)}function Fs(t,e,n=pe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ot();const a=Vn(n),l=Oe(e,n,t,o);return a(),at(),l});return s?r.unshift(i):r.push(i),i}}const ft=t=>(e,n=pe)=>{(!Mn||t==="sp")&&Fs(t,(...s)=>e(...s),n)},Mc=ft("bm"),la=ft("m"),Nc=ft("bu"),Dc=ft("u"),Lc=ft("bum"),ca=ft("um"),Uc=ft("sp"),$c=ft("rtg"),Fc=ft("rtc");function Vc(t,e=pe){Fs("ec",t,e)}const jc=Symbol.for("v-ndc");function Hc(t,e,n,s){let r;const i=n,o=P(t);if(o||ne(t)){const a=o&&Nt(t);let l=!1,u=!1;a&&(l=!Se(t),u=lt(t),t=Ls(t)),r=new Array(t.length);for(let c=0,p=t.length;c<p;c++)r[c]=e(l?u?Qt(Re(t[c])):Re(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(B(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,i)}}else r=[];return r}const vr=t=>t?Pa(t)?Hs(t):vr(t.parent):null,Sn=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>da(t),$forceUpdate:t=>t.f||(t.f=()=>{zr(t.update)}),$nextTick:t=>t.n||(t.n=Qo.bind(t.proxy)),$watch:t=>Cc.bind(t)}),tr=(t,e)=>t!==J&&!t.__isScriptSetup&&H(t,e),Bc={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(tr(s,e))return o[e]=1,s[e];if(r!==J&&H(r,e))return o[e]=2,r[e];if(H(i,e))return o[e]=3,i[e];if(n!==J&&H(n,e))return o[e]=4,n[e];_r&&(o[e]=0)}}const u=Sn[e];let c,p;if(u)return e==="$attrs"&&le(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==J&&H(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,H(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return tr(r,e)?(r[e]=n,!0):s!==J&&H(s,e)?(s[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},a){let l;return!!(n[a]||t!==J&&a[0]!=="$"&&H(t,a)||tr(e,a)||H(i,a)||H(s,a)||H(Sn,a)||H(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ci(t){return P(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _r=!0;function Wc(t){const e=da(t),n=t.proxy,s=t.ctx;_r=!1,e.beforeCreate&&ki(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:p,mounted:y,beforeUpdate:S,updated:L,activated:O,deactivated:Z,beforeDestroy:z,beforeUnmount:U,destroyed:V,unmounted:k,render:te,renderTracked:be,renderTriggered:_e,errorCaptured:Me,serverPrefetch:pt,expose:Je,inheritAttrs:cn,components:Jn,directives:Yn,filters:Ks}=e;if(u&&qc(u,s,null),o)for(const ee in o){const Y=o[ee];N(Y)&&(s[ee]=Y.bind(n))}if(r){const ee=r.call(n,n);B(ee)&&(t.data=an(ee))}if(_r=!0,i)for(const ee in i){const Y=i[ee],Tt=N(Y)?Y.bind(n,n):N(Y.get)?Y.get.bind(n,n):qe,Xn=!N(Y)&&N(Y.set)?Y.set.bind(n):qe,Ct=Oa({get:Tt,set:Xn});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Ne=>Ct.value=Ne})}if(a)for(const ee in a)ua(a[ee],s,n,ee);if(l){const ee=N(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(Y=>{Ec(Y,ee[Y])})}c&&ki(c,t,"c");function de(ee,Y){P(Y)?Y.forEach(Tt=>ee(Tt.bind(n))):Y&&ee(Y.bind(n))}if(de(Mc,p),de(la,y),de(Nc,S),de(Dc,L),de(Pc,O),de(Rc,Z),de(Vc,Me),de(Fc,be),de($c,_e),de(Lc,U),de(ca,k),de(Uc,pt),P(Je))if(Je.length){const ee=t.exposed||(t.exposed={});Je.forEach(Y=>{Object.defineProperty(ee,Y,{get:()=>n[Y],set:Tt=>n[Y]=Tt,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===qe&&(t.render=te),cn!=null&&(t.inheritAttrs=cn),Jn&&(t.components=Jn),Yn&&(t.directives=Yn),pt&&oa(t)}function qc(t,e,n=qe){P(t)&&(t=yr(t));for(const s in t){const r=t[s];let i;B(r)?"default"in r?i=os(r.from||s,r.default,!0):i=os(r.from||s):i=os(r),ce(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function ki(t,e,n){Oe(P(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ua(t,e,n,s){let r=s.includes(".")?ra(n,s):()=>n[s];if(ne(t)){const i=e[t];N(i)&&zt(r,i)}else if(N(t))zt(r,t.bind(n));else if(B(t))if(P(t))t.forEach(i=>ua(i,e,n,s));else{const i=N(t.handler)?t.handler.bind(n):e[t.handler];N(i)&&zt(r,i,t)}}function da(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(u=>vs(l,u,o,!0)),vs(l,e,o)),B(e)&&i.set(e,l),l}function vs(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&vs(t,i,n,!0),r&&r.forEach(o=>vs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=zc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zc={data:Ai,props:Pi,emits:Pi,methods:mn,computed:mn,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:mn,directives:mn,watch:Gc,provide:Ai,inject:Kc};function Ai(t,e){return e?t?function(){return ue(N(t)?t.call(this,this):t,N(e)?e.call(this,this):e)}:e:t}function Kc(t,e){return mn(yr(t),yr(e))}function yr(t){if(P(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fe(t,e){return t?[...new Set([].concat(t,e))]:e}function mn(t,e){return t?ue(Object.create(null),t,e):e}function Pi(t,e){return t?P(t)&&P(e)?[...new Set([...t,...e])]:ue(Object.create(null),Ci(t),Ci(e??{})):e}function Gc(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const s in e)n[s]=fe(t[s],e[s]);return n}function fa(){return{app:null,config:{isNativeTag:Co,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jc=0;function Yc(t,e){return function(s,r=null){N(s)||(s=ue({},s)),r!=null&&!B(r)&&(r=null);const i=fa(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:Jc++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Cu,get config(){return i.config},set config(c){},use(c,...p){return o.has(c)||(c&&N(c.install)?(o.add(c),c.install(u,...p)):N(c)&&(o.add(c),c(u,...p))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,p){return p?(i.components[c]=p,u):i.components[c]},directive(c,p){return p?(i.directives[c]=p,u):i.directives[c]},mount(c,p,y){if(!l){const S=u._ceVNode||T(s,r);return S.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(S,c,y),l=!0,u._container=c,c.__vue_app__=u,Hs(S.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Oe(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,p){return i.provides[c]=p,u},runWithContext(c){const p=Kt;Kt=u;try{return c()}finally{Kt=p}}};return u}}let Kt=null;const Xc=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ke(e)}Modifiers`]||t[`${Vt(e)}Modifiers`];function Qc(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||J;let r=n;const i=e.startsWith("update:"),o=i&&Xc(s,e.slice(7));o&&(o.trim&&(r=n.map(c=>ne(c)?c.trim():c)),o.number&&(r=n.map(Ns)));let a,l=s[a=Js(e)]||s[a=Js(ke(e))];!l&&i&&(l=s[a=Js(Vt(e))]),l&&Oe(l,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Oe(u,t,6,r)}}const Zc=new WeakMap;function ha(t,e,n=!1){const s=n?Zc:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!N(t)){const l=u=>{const c=ha(u,e,!0);c&&(a=!0,ue(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(B(t)&&s.set(t,null),null):(P(i)?i.forEach(l=>o[l]=null):ue(o,i),B(t)&&s.set(t,o),o)}function Vs(t,e){return!t||!Rs(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,Vt(e))||H(t,e))}function Ri(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:p,data:y,setupState:S,ctx:L,inheritAttrs:O}=t,Z=ms(t);let z,U;try{if(n.shapeFlag&4){const k=r||s,te=k;z=je(u.call(te,k,c,p,S,y,L)),U=a}else{const k=e;z=je(k.length>1?k(p,{attrs:a,slots:o,emit:l}):k(p,null)),U=e.props?a:eu(a)}}catch(k){Dt.length=0,Us(k,t,1),z=T(ct)}let V=z;if(U&&O!==!1){const k=Object.keys(U),{shapeFlag:te}=V;k.length&&te&7&&(i&&k.some(Os)&&(U=tu(U,i)),V=Zt(V,U,!1,!0))}if(n.dirs&&(V=Zt(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition){const k=$s(V.type)&&ia(V)||V;Kr(k,n.transition)}return z=V,ms(Z),z}const eu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rs(n))&&((e||(e={}))[n]=t[n]);return e},tu=(t,e)=>{const n={};for(const s in t)(!Os(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function nu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Oi(s,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let p=0;p<c.length;p++){const y=c[p];if(pa(o,s,y)&&!Vs(u,y))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Oi(s,o,u):!0:!!o;return!1}function Oi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(pa(e,t,i)&&!Vs(n,i))return!0}return!1}function pa(t,e,n){const s=t[n],r=e[n];return n==="style"&&B(s)&&B(r)?!on(s,r):s!==r}function su({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const ga={},ma=()=>Object.create(ga),ba=t=>Object.getPrototypeOf(t)===ga;function ru(t,e,n,s=!1){const r={},i=ma();t.propsDefaults=Object.create(null),va(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:dc(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function iu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=j(r),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let p=0;p<c.length;p++){let y=c[p];if(Vs(t.emitsOptions,y))continue;const S=e[y];if(l)if(H(i,y))S!==i[y]&&(i[y]=S,u=!0);else{const L=ke(y);r[L]=wr(l,a,L,S,t,!1)}else S!==i[y]&&(i[y]=S,u=!0)}}}else{va(t,e,r,i)&&(u=!0);let c;for(const p in a)(!e||!H(e,p)&&((c=Vt(p))===p||!H(e,c)))&&(l?n&&(n[p]!==void 0||n[c]!==void 0)&&(r[p]=wr(l,a,p,void 0,t,!0)):delete r[p]);if(i!==a)for(const p in i)(!e||!H(e,p))&&(delete i[p],u=!0)}u&&Ze(t.attrs,"set","")}function va(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(yn(l))continue;const u=e[l];let c;r&&H(r,c=ke(l))?!i||!i.includes(c)?n[c]=u:(a||(a={}))[c]=u:Vs(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(i){const l=j(n),u=a||J;for(let c=0;c<i.length;c++){const p=i[c];n[p]=wr(r,l,p,u[p],t,!H(u,p))}}return o}function wr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=H(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&N(l)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const c=Vn(r);s=u[n]=l.call(null,e),c()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Vt(n))&&(s=!0))}return s}const ou=new WeakMap;function _a(t,e,n=!1){const s=n?ou:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!N(t)){const c=p=>{l=!0;const[y,S]=_a(p,e,!0);ue(o,y),S&&a.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!i&&!l)return B(t)&&s.set(t,Bt),Bt;if(P(i))for(let c=0;c<i.length;c++){const p=ke(i[c]);Mi(p)&&(o[p]=J)}else if(i)for(const c in i){const p=ke(c);if(Mi(p)){const y=i[c],S=o[p]=P(y)||N(y)?{type:y}:ue({},y),L=S.type;let O=!1,Z=!0;if(P(L))for(let z=0;z<L.length;++z){const U=L[z],V=N(U)&&U.name;if(V==="Boolean"){O=!0;break}else V==="String"&&(Z=!1)}else O=N(L)&&L.name==="Boolean";S[0]=O,S[1]=Z,(O||H(S,"default"))&&a.push(p)}}const u=[o,a];return B(t)&&s.set(t,u),u}function Mi(t){return t[0]!=="$"&&!yn(t)}const Jr=t=>t==="_"||t==="_ctx"||t==="$stable",Yr=t=>P(t)?t.map(je):[je(t)],au=(t,e,n)=>{if(e._n)return e;const s=Ic((...r)=>Yr(e(...r)),n);return s._c=!1,s},ya=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Jr(r))continue;const i=t[r];if(N(i))e[r]=au(r,i,s);else if(i!=null){const o=Yr(i);e[r]=()=>o}}},wa=(t,e)=>{const n=Yr(e);t.slots.default=()=>n},xa=(t,e,n)=>{for(const s in e)(n||!Jr(s))&&(t[s]=e[s])},lu=(t,e,n)=>{const s=t.slots=ma();if(t.vnode.shapeFlag&32){const r=e._;r?(xa(s,e,n),n&&Oo(s,"_",r,!0)):ya(e,s)}else e&&wa(t,e)},cu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=J;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:xa(r,e,n):(i=!e.$stable,ya(e,r)),o=e}else e&&(wa(t,e),o={default:1});if(i)for(const a in r)!Jr(a)&&o[a]==null&&delete r[a]},ve=pu;function uu(t){return du(t)}function du(t,e){const n=Ds();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:p,nextSibling:y,setScopeId:S=qe,insertStaticContent:L}=t,O=(d,h,g,_=null,v=null,m=null,I=void 0,x=null,w=!!h.dynamicChildren)=>{if(d===h)return;d&&!pn(d,h)&&(_=Qn(d),Ne(d,v,m,!0),d=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:b,ref:A,shapeFlag:E}=h;switch(b){case js:Z(d,h,g,_);break;case ct:z(d,h,g,_);break;case as:d==null&&U(h,g,_,I);break;case Ie:Jn(d,h,g,_,v,m,I,x,w);break;default:E&1?te(d,h,g,_,v,m,I,x,w):E&6?Yn(d,h,g,_,v,m,I,x,w):(E&64||E&128)&&b.process(d,h,g,_,v,m,I,x,w,dn)}A!=null&&v?In(A,d&&d.ref,m,h||d,!h):A==null&&d&&d.ref!=null&&In(d.ref,null,m,d,!0)},Z=(d,h,g,_)=>{if(d==null)s(h.el=a(h.children),g,_);else{const v=h.el=d.el;h.children!==d.children&&u(v,h.children)}},z=(d,h,g,_)=>{d==null?s(h.el=l(h.children||""),g,_):h.el=d.el},U=(d,h,g,_)=>{[d.el,d.anchor]=L(d.children,h,g,_,d.el,d.anchor)},V=({el:d,anchor:h},g,_)=>{let v;for(;d&&d!==h;)v=y(d),s(d,g,_),d=v;s(h,g,_)},k=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=y(d),r(d),d=g;r(h)},te=(d,h,g,_,v,m,I,x,w)=>{if(h.type==="svg"?I="svg":h.type==="math"&&(I="mathml"),d==null)be(h,g,_,v,m,I,x,w);else{const b=d.el&&d.el._isVueCE?d.el:null;try{b&&b._beginPatch(),pt(d,h,v,m,I,x,w)}finally{b&&b._endPatch()}}},be=(d,h,g,_,v,m,I,x)=>{let w,b;const{props:A,shapeFlag:E,transition:C,dirs:M}=d;if(w=d.el=o(d.type,m,A&&A.is,A),E&8?c(w,d.children):E&16&&Me(d.children,w,null,_,v,nr(d,m),I,x),M&&kt(d,null,_,"created"),_e(w,d,d.scopeId,I,_),A){for(const K in A)K!=="value"&&!yn(K)&&i(w,K,null,A[K],m,_);"value"in A&&i(w,"value",null,A.value,m),(b=A.onVnodeBeforeMount)&&$e(b,_,d)}M&&kt(d,null,_,"beforeMount");const $=fu(v,C);$&&C.beforeEnter(w),s(w,h,g),((b=A&&A.onVnodeMounted)||$||M)&&ve(()=>{try{b&&$e(b,_,d),$&&C.enter(w),M&&kt(d,null,_,"mounted")}finally{}},v)},_e=(d,h,g,_,v)=>{if(g&&S(d,g),_)for(let m=0;m<_.length;m++)S(d,_[m]);if(v){let m=v.subTree;if(h===m||Ta(m.type)&&(m.ssContent===h||m.ssFallback===h)){const I=v.vnode;_e(d,I,I.scopeId,I.slotScopeIds,v.parent)}}},Me=(d,h,g,_,v,m,I,x,w=0)=>{for(let b=w;b<d.length;b++){const A=d[b]=x?Qe(d[b]):je(d[b]);O(null,A,h,g,_,v,m,I,x)}},pt=(d,h,g,_,v,m,I)=>{const x=h.el=d.el;let{patchFlag:w,dynamicChildren:b,dirs:A}=h;w|=d.patchFlag&16;const E=d.props||J,C=h.props||J;let M;if(g&&At(g,!1),(M=C.onVnodeBeforeUpdate)&&$e(M,g,h,d),A&&kt(h,d,g,"beforeUpdate"),g&&At(g,!0),b&&(!d.dynamicChildren||d.dynamicChildren.length!==b.length)&&(w=0,I=!1,b=null),(E.innerHTML&&C.innerHTML==null||E.textContent&&C.textContent==null)&&c(x,""),b?Je(d.dynamicChildren,b,x,g,_,nr(h,v),m):I||Y(d,h,x,null,g,_,nr(h,v),m,!1),w>0){if(w&16)cn(x,E,C,g,v);else if(w&2&&E.class!==C.class&&i(x,"class",null,C.class,v),w&4&&i(x,"style",E.style,C.style,v),w&8){const $=h.dynamicProps;for(let K=0;K<$.length;K++){const W=$[K],se=E[W],oe=C[W];(oe!==se||W==="value")&&i(x,W,se,oe,v,g)}}w&1&&d.children!==h.children&&c(x,h.children)}else!I&&b==null&&cn(x,E,C,g,v);((M=C.onVnodeUpdated)||A)&&ve(()=>{M&&$e(M,g,h,d),A&&kt(h,d,g,"updated")},_)},Je=(d,h,g,_,v,m,I)=>{for(let x=0;x<h.length;x++){const w=d[x],b=h[x],A=w.el&&(w.type===Ie||!pn(w,b)||w.shapeFlag&198)?p(w.el):g;O(w,b,A,null,_,v,m,I,!0)}},cn=(d,h,g,_,v)=>{if(h!==g){if(h!==J)for(const m in h)!yn(m)&&!(m in g)&&i(d,m,h[m],null,v,_);for(const m in g){if(yn(m))continue;const I=g[m],x=h[m];I!==x&&m!=="value"&&i(d,m,x,I,v,_)}"value"in g&&i(d,"value",h.value,g.value,v)}},Jn=(d,h,g,_,v,m,I,x,w)=>{const b=h.el=d?d.el:a(""),A=h.anchor=d?d.anchor:a("");let{patchFlag:E,dynamicChildren:C,slotScopeIds:M}=h;M&&(x=x?x.concat(M):M),d==null?(s(b,g,_),s(A,g,_),Me(h.children||[],g,A,v,m,I,x,w)):E>0&&E&64&&C&&d.dynamicChildren&&d.dynamicChildren.length===C.length?(Je(d.dynamicChildren,C,g,v,m,I,x),(h.key!=null||v&&h===v.subTree)&&Ia(d,h,!0)):Y(d,h,g,A,v,m,I,x,w)},Yn=(d,h,g,_,v,m,I,x,w)=>{h.slotScopeIds=x,d==null?h.shapeFlag&512?v.ctx.activate(h,g,_,I,w):Ks(h,g,_,v,m,I,w):pi(d,h,w)},Ks=(d,h,g,_,v,m,I)=>{const x=d.component=yu(d,_,v);if(Gr(d)&&(x.ctx.renderer=dn),xu(x,!1,I),x.asyncDep){if(v&&v.registerDep(x,de,I),!d.el){const w=x.subTree=T(ct);z(null,w,h,g),d.placeholder=w.el}}else de(x,d,h,g,v,m,I)},pi=(d,h,g)=>{const _=h.component=d.component;if(nu(d,h,g))if(_.asyncDep&&!_.asyncResolved){ee(_,h,g);return}else _.next=h,_.update();else h.el=d.el,_.vnode=h},de=(d,h,g,_,v,m,I)=>{const x=()=>{if(d.isMounted){let{next:E,bu:C,u:M,parent:$,vnode:K}=d;{const Le=Ea(d);if(Le){E&&(E.el=K.el,ee(d,E,I)),Le.asyncDep.then(()=>{ve(()=>{d.isUnmounted||b()},v)});return}}let W=E,se;At(d,!1),E?(E.el=K.el,ee(d,E,I)):E=K,C&&is(C),(se=E.props&&E.props.onVnodeBeforeUpdate)&&$e(se,$,E,K),At(d,!0);const oe=Ri(d),De=d.subTree;d.subTree=oe,O(De,oe,p(De.el),Qn(De),d,v,m),E.el=oe.el,W===null&&su(d,oe.el),M&&ve(M,v),(se=E.props&&E.props.onVnodeUpdated)&&ve(()=>$e(se,$,E,K),v)}else{let E;const{el:C,props:M}=h,{bm:$,m:K,parent:W,root:se,type:oe}=d,De=En(h);At(d,!1),$&&is($),!De&&(E=M&&M.onVnodeBeforeMount)&&$e(E,W,h),At(d,!0);{se.ce&&se.ce._hasShadowRoot()&&se.ce._injectChildStyle(oe,d.parent?d.parent.type:void 0);const Le=d.subTree=Ri(d);O(null,Le,g,_,d,v,m),h.el=Le.el}if(K&&ve(K,v),!De&&(E=M&&M.onVnodeMounted)){const Le=h;ve(()=>$e(E,W,Le),v)}(h.shapeFlag&256||W&&En(W.vnode)&&W.vnode.shapeFlag&256)&&d.a&&ve(d.a,v),d.isMounted=!0,h=g=_=null}};d.scope.on();const w=d.effect=new Lo(x);d.scope.off();const b=d.update=w.run.bind(w),A=d.job=w.runIfDirty.bind(w);A.i=d,A.id=d.uid,w.scheduler=()=>zr(A),At(d,!0),b()},ee=(d,h,g)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,iu(d,h.props,_,g),cu(d,h.children,g),ot(),Ei(d),at()},Y=(d,h,g,_,v,m,I,x,w=!1)=>{const b=d&&d.children,A=d?d.shapeFlag:0,E=h.children,{patchFlag:C,shapeFlag:M}=h;if(C>0){if(C&128){Xn(b,E,g,_,v,m,I,x,w);return}else if(C&256){Tt(b,E,g,_,v,m,I,x,w);return}}M&8?(A&16&&un(b,v,m),E!==b&&c(g,E)):A&16?M&16?Xn(b,E,g,_,v,m,I,x,w):un(b,v,m,!0):(A&8&&c(g,""),M&16&&Me(E,g,_,v,m,I,x,w))},Tt=(d,h,g,_,v,m,I,x,w)=>{d=d||Bt,h=h||Bt;const b=d.length,A=h.length,E=Math.min(b,A);let C;for(C=0;C<E;C++){const M=h[C]=w?Qe(h[C]):je(h[C]);O(d[C],M,g,null,v,m,I,x,w)}b>A?un(d,v,m,!0,!1,E):Me(h,g,_,v,m,I,x,w,E)},Xn=(d,h,g,_,v,m,I,x,w)=>{let b=0;const A=h.length;let E=d.length-1,C=A-1;for(;b<=E&&b<=C;){const M=d[b],$=h[b]=w?Qe(h[b]):je(h[b]);if(pn(M,$))O(M,$,g,null,v,m,I,x,w);else break;b++}for(;b<=E&&b<=C;){const M=d[E],$=h[C]=w?Qe(h[C]):je(h[C]);if(pn(M,$))O(M,$,g,null,v,m,I,x,w);else break;E--,C--}if(b>E){if(b<=C){const M=C+1,$=M<A?h[M].el:_;for(;b<=C;)O(null,h[b]=w?Qe(h[b]):je(h[b]),g,$,v,m,I,x,w),b++}}else if(b>C)for(;b<=E;)Ne(d[b],v,m,!0),b++;else{const M=b,$=b,K=new Map;for(b=$;b<=C;b++){const ye=h[b]=w?Qe(h[b]):je(h[b]);ye.key!=null&&K.set(ye.key,b)}let W,se=0;const oe=C-$+1;let De=!1,Le=0;const fn=new Array(oe);for(b=0;b<oe;b++)fn[b]=0;for(b=M;b<=E;b++){const ye=d[b];if(se>=oe){Ne(ye,v,m,!0);continue}let Ue;if(ye.key!=null)Ue=K.get(ye.key);else for(W=$;W<=C;W++)if(fn[W-$]===0&&pn(ye,h[W])){Ue=W;break}Ue===void 0?Ne(ye,v,m,!0):(fn[Ue-$]=b+1,Ue>=Le?Le=Ue:De=!0,O(ye,h[Ue],g,null,v,m,I,x,w),se++)}const bi=De?hu(fn):Bt;for(W=bi.length-1,b=oe-1;b>=0;b--){const ye=$+b,Ue=h[ye],vi=h[ye+1],_i=ye+1<A?vi.el||Sa(vi):_;fn[b]===0?O(null,Ue,g,_i,v,m,I,x,w):De&&(W<0||b!==bi[W]?Ct(Ue,g,_i,2):W--)}}},Ct=(d,h,g,_,v=null)=>{const{el:m,type:I,transition:x,children:w,shapeFlag:b}=d;if(b&6){Ct(d.component.subTree,h,g,_);return}if(b&128){d.suspense.move(h,g,_);return}if(b&64){I.move(d,h,g,dn);return}if(I===Ie){s(m,h,g);for(let E=0;E<w.length;E++)Ct(w[E],h,g,_);s(d.anchor,h,g);return}if(I===as){V(d,h,g);return}if(_!==2&&b&1&&x)if(_===0)x.persisted&&!m[er]?s(m,h,g):(x.beforeEnter(m),s(m,h,g),ve(()=>x.enter(m),v));else{const{leave:E,delayLeave:C,afterLeave:M}=x,$=()=>{d.ctx.isUnmounted?r(m):s(m,h,g)},K=()=>{const W=m._isLeaving||!!m[er];m._isLeaving&&m[er](!0),x.persisted&&!W?$():E(m,()=>{$(),M&&M()})};C?C(m,$,K):K()}else s(m,h,g)},Ne=(d,h,g,_=!1,v=!1)=>{const{type:m,props:I,ref:x,children:w,dynamicChildren:b,shapeFlag:A,patchFlag:E,dirs:C,cacheIndex:M,memo:$}=d;if(E===-2&&(v=!1),x!=null&&(ot(),In(x,null,g,d,!0),at()),M!=null&&(h.renderCache[M]=void 0),A&256){h.ctx.deactivate(d);return}const K=A&1&&C,W=!En(d);let se;if(W&&(se=I&&I.onVnodeBeforeUnmount)&&$e(se,h,d),A&6)Nl(d.component,g,_);else{if(A&128){d.suspense.unmount(g,_);return}K&&kt(d,null,h,"beforeUnmount"),A&64?d.type.remove(d,h,g,dn,_):b&&!b.hasOnce&&(m!==Ie||E>0&&E&64)?un(b,h,g,!1,!0):(m===Ie&&E&384||!v&&A&16)&&un(w,h,g),_&&gi(d)}const oe=$!=null&&M==null;(W&&(se=I&&I.onVnodeUnmounted)||K||oe)&&ve(()=>{se&&$e(se,h,d),K&&kt(d,null,h,"unmounted"),oe&&(d.el=null)},g)},gi=d=>{const{type:h,el:g,anchor:_,transition:v}=d;if(h===Ie){Ml(g,_);return}if(h===as){k(d);return}const m=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:I,delayLeave:x}=v,w=()=>I(g,m);x?x(d.el,m,w):w()}else m()},Ml=(d,h)=>{let g;for(;d!==h;)g=y(d),r(d),d=g;r(h)},Nl=(d,h,g)=>{const{bum:_,scope:v,job:m,subTree:I,um:x,m:w,a:b}=d;Ni(w),Ni(b),_&&is(_),v.stop(),m&&(m.flags|=8,Ne(I,d,h,g)),x&&ve(x,h),ve(()=>{d.isUnmounted=!0},h)},un=(d,h,g,_=!1,v=!1,m=0)=>{for(let I=m;I<d.length;I++)Ne(d[I],h,g,_,v)},Qn=d=>{if(d.shapeFlag&6)return Qn(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=y(d.anchor||d.el),g=h&&h[kc];return g?y(g):h};let Gs=!1;const mi=(d,h,g)=>{let _;d==null?h._vnode&&(Ne(h._vnode,null,null,!0),_=h._vnode.component):O(h._vnode||null,d,h,null,null,null,g),h._vnode=d,Gs||(Gs=!0,Ei(_),ea(),Gs=!1)},dn={p:O,um:Ne,m:Ct,r:gi,mt:Ks,mc:Me,pc:Y,pbc:Je,n:Qn,o:t};return{render:mi,hydrate:void 0,createApp:Yc(mi)}}function nr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function At({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ia(t,e,n=!1){const s=t.children,r=e.children;if(P(s)&&P(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Qe(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ia(o,a)),a.type===js&&(a.patchFlag===-1&&(a=r[i]=Qe(a)),a.el=o.el),a.type===ct&&!a.el&&(a.el=o.el)}}function hu(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ea(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ea(e)}function Ni(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Sa(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Sa(e.subTree):null}const Ta=t=>t.__isSuspense;function pu(t,e){e&&e.pendingBranch?P(t)?e.effects.push(...t):e.effects.push(t):xc(t)}const Ie=Symbol.for("v-fgt"),js=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),Dt=[];let xe=null;function F(t=!1){Dt.push(xe=t?null:[])}function Ca(){Dt.pop(),xe=Dt[Dt.length-1]||null}let Pn=1;function _s(t,e=!1){Pn+=t,t<0&&xe&&e&&(xe.hasOnce=!0)}function ka(t){return t.dynamicChildren=Pn>0?xe||Bt:null,Ca(),Pn>0&&xe&&xe.push(t),t}function q(t,e,n,s,r,i){return ka(f(t,e,n,s,r,i,!0))}function Rn(t,e,n,s,r){return ka(T(t,e,n,s,r,!0))}function ys(t){return t?t.__v_isVNode===!0:!1}function pn(t,e){return t.type===e.type&&t.key===e.key}const Aa=({key:t})=>t??null,ls=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ne(t)||ce(t)||N(t)?{i:Ee,r:t,k:e,f:!!n}:t:null);function f(t,e=null,n=null,s=0,r=null,i=t===Ie?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Aa(e),ref:e&&ls(e),scopeId:na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ee};return a?(ws(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Pn>0&&!o&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const T=gu;function gu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===jc)&&(t=ct),ys(t)){const a=Zt(t,e,!0);return n&&ws(a,n),Pn>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(t)]=a:xe.push(a)),a.patchFlag=-2,a}if(Tu(t)&&(t=t.__vccOpts),e){e=mu(e);let{class:a,style:l}=e;a&&!ne(a)&&(e.class=Ut(a)),B(l)&&(qr(l)&&!P(l)&&(l=ue({},l)),e.style=Ur(l))}const o=ne(t)?1:Ta(t)?128:$s(t)?64:B(t)?4:N(t)?2:0;return f(t,e,n,s,r,o,i,!0)}function mu(t){return t?qr(t)||ba(t)?ue({},t):t:null}function Zt(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?bu(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Aa(u),ref:e&&e.ref?n&&i?P(i)?i.concat(ls(e)):[i,ls(e)]:ls(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zt(t.ssContent),ssFallback:t.ssFallback&&Zt(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Kr(c,l.clone(c)),c}function Lt(t=" ",e=0){return T(js,null,t,e)}function en(t,e){const n=T(as,null,t);return n.staticCount=e,n}function Be(t="",e=!1){return e?(F(),Rn(ct,null,t)):T(ct,null,t)}function je(t){return t==null||typeof t=="boolean"?T(ct):P(t)?T(Ie,null,t.slice()):ys(t)?Qe(t):T(js,null,String(t))}function Qe(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zt(t)}function ws(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(P(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ws(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ba(e)?e._ctx=Ee:r===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(N(e)){if(s&65){ws(t,{default:e});return}e={default:e,_ctx:Ee},n=32}else e=String(e),s&64?(n=16,e=[Lt(e)]):n=8;t.children=e,t.shapeFlag|=n}function bu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ut([e.class,s.class]));else if(r==="style")e.style=Ur([e.style,s.style]);else if(Rs(r)){const i=e[r],o=s[r];o&&i!==o&&!(P(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!Os(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function $e(t,e,n,s=null){Oe(t,e,7,[n,s])}const vu=fa();let _u=0;function yu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||vu,i={uid:_u++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_a(s,r),emitsOptions:ha(s,r),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qc.bind(null,i),t.ce&&t.ce(i),i}let pe=null;const wu=()=>pe||Ee;let xs,On;{const t=Ds(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};xs=e("__VUE_INSTANCE_SETTERS__",n=>pe=n),On=e("__VUE_SSR_SETTERS__",n=>Mn=n)}const Vn=t=>{const e=pe;return xs(t),t.scope.on(),()=>{t.scope.off(),xs(e)}},Di=()=>{pe&&pe.scope.off(),xs(null)};function Pa(t){return t.vnode.shapeFlag&4}let Mn=!1;function xu(t,e=!1,n=!1){e&&On(e);const{props:s,children:r}=t.vnode,i=Pa(t);ru(t,s,i,e),lu(t,r,n||e);const o=i?Iu(t,e):void 0;return e&&On(!1),o}function Iu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Bc);const{setup:s}=n;if(s){ot();const r=t.setupContext=s.length>1?Su(t):null,i=Vn(t),o=Fn(s,t,0,[t.props,r]),a=ko(o);if(at(),i(),(a||t.sp)&&!En(t)&&oa(t),a){if(o.then(Di,Di),e)return o.then(l=>{On(!0);try{Li(t,l,e)}finally{On(!1)}}).catch(l=>{Us(l,t,0)});t.asyncDep=o}else Li(t,o)}else Ra(t)}function Li(t,e,n){N(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:B(e)&&(t.setupState=Yo(e)),Ra(t)}function Ra(t,e,n){const s=t.type;t.render||(t.render=s.render||qe);{const r=Vn(t);ot();try{Wc(t)}finally{at(),r()}}}const Eu={get(t,e){return le(t,"get",""),t[e]}};function Su(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Eu),slots:t.slots,emit:t.emit,expose:e}}function Hs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Yo(fc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Sn)return Sn[n](t)},has(e,n){return n in e||n in Sn}})):t.proxy}function Tu(t){return N(t)&&"__vccOpts"in t}const Oa=(t,e)=>bc(t,e,Mn);function xr(t,e,n){try{_s(-1);const s=arguments.length;return s===2?B(e)&&!P(e)?ys(e)?T(t,null,[e]):T(t,e):T(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ys(n)&&(n=[n]),T(t,e,n))}finally{_s(1)}}const Cu="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ir;const Ui=typeof window<"u"&&window.trustedTypes;if(Ui)try{Ir=Ui.createPolicy("vue",{createHTML:t=>t})}catch{}const Ma=Ir?t=>Ir.createHTML(t):t=>t,ku="http://www.w3.org/2000/svg",Au="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,$i=Xe&&Xe.createElement("template"),Pu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Xe.createElementNS(ku,t):e==="mathml"?Xe.createElementNS(Au,t):n?Xe.createElement(t,{is:n}):Xe.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Xe.createTextNode(t),createComment:t=>Xe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{$i.innerHTML=Ma(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=$i.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ru=Symbol("_vtc");function Ou(t,e,n){const s=t[Ru];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Is=Symbol("_vod"),Na=Symbol("_vsh"),Mu={name:"show",beforeMount(t,{value:e},{transition:n}){t[Is]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):gn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),gn(t,!0),s.enter(t)):s.leave(t,()=>{gn(t,!1)}):gn(t,e))},beforeUnmount(t,{value:e}){gn(t,e)}};function gn(t,e){t.style.display=e?t[Is]:"none",t[Na]=!e}const Nu=Symbol(""),Du=/(?:^|;)\s*display\s*:/;function Lu(t,e,n){const s=t.style,r=ne(n);let i=!1;if(n&&!r){if(e)if(ne(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&bn(s,a,"")}else for(const o in e)n[o]==null&&bn(s,o,"");for(const o in n){o==="display"&&(i=!0);const a=n[o];a!=null?$u(t,o,!ne(e)&&e?e[o]:void 0,a)||bn(s,o,a):bn(s,o,"")}}else if(r){if(e!==n){const o=s[Nu];o&&(n+=";"+o),s.cssText=n,i=Du.test(n)}}else e&&t.removeAttribute("style");Is in t&&(t[Is]=i?s.display:"",t[Na]&&(s.display="none"))}const Fi=/\s*!important$/;function bn(t,e,n){if(P(n))n.forEach(s=>bn(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Uu(t,e);Fi.test(n)?t.setProperty(Vt(s),n.replace(Fi,""),"important"):t[s]=n}}const Vi=["Webkit","Moz","ms"],sr={};function Uu(t,e){const n=sr[e];if(n)return n;let s=ke(e);if(s!=="filter"&&s in t)return sr[e]=s;s=Ro(s);for(let r=0;r<Vi.length;r++){const i=Vi[r]+s;if(i in t)return sr[e]=i}return e}function $u(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ne(s)&&n===s}const ji="http://www.w3.org/1999/xlink";function Hi(t,e,n,s,r,i=Wl(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ji,e.slice(6,e.length)):t.setAttributeNS(ji,e,n):n==null||i&&!Mo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ke(n)?String(n):n)}function Bi(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ma(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Mo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function bt(t,e,n,s){t.addEventListener(e,n,s)}function Fu(t,e,n,s){t.removeEventListener(e,n,s)}const Wi=Symbol("_vei");function Vu(t,e,n,s,r=null){const i=t[Wi]||(t[Wi]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Bu(e);if(s){const u=i[e]=zu(s,r);bt(t,a,u,l)}else o&&(Fu(t,a,o,l),i[e]=void 0)}}const ju=/(Once|Passive|Capture)$/,Hu=/^on:?(?:Once|Passive|Capture)$/;function Bu(t){let e,n;for(;(n=t.match(ju))&&!Hu.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Vt(t.slice(2)),e]}let rr=0;const Wu=Promise.resolve(),qu=()=>rr||(Wu.then(()=>rr=0),rr=Date.now());function zu(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const r=n.value;if(P(r)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const o=r.slice(),a=[s];for(let l=0;l<o.length&&!s._stopped;l++){const u=o[l];u&&Oe(u,e,5,a)}}else Oe(r,e,5,[s])};return n.value=t,n.attached=qu(),n}const qi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ku=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Ou(t,s,o):e==="style"?Lu(t,n,s):Rs(e)?Os(e)||Vu(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gu(t,e,s,o))?(Bi(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hi(t,e,s,o,i,e!=="value")):t._isVueCE&&(Ju(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ne(s)))?Bi(t,ke(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Hi(t,e,s,o))};function Gu(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&qi(e)&&N(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return qi(e)&&ne(n)?!1:e in t}function Ju(t,e){const n=t._def.props;if(!n)return!1;const s=ke(e);return Array.isArray(n)?n.some(r=>ke(r)===s):Object.keys(n).some(r=>ke(r)===s)}const tn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return P(e)?n=>is(e,n):e};function Yu(t){t.target.composing=!0}function zi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const We=Symbol("_assign"),ns=Symbol("_initialValue");function ir(t,e,n){return e&&(t=t.trim()),n&&(t=Ns(t)),t}const we={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t.parentNode&&(t.type==="text"?t[ns]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[ns]=t.defaultValue.replace(/\r\n?/g,`
`))),t[We]=tn(r);const i=s||r.props&&r.props.type==="number";bt(t,e?"change":"input",o=>{o.target.composing||t[We](ir(t.value,n,i))}),(n||i)&&bt(t,"change",()=>{t.value=ir(t.value,n,i)}),e||(bt(t,"compositionstart",Yu),bt(t,"compositionend",zi),bt(t,"change",zi))},mounted(t,{value:e,modifiers:{trim:n,number:s}}){const r=e??"",i=t[ns];delete t[ns],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[We](ir(t.value,n,s)):t.value=r},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[We]=tn(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ns(t.value):t.value,l=e??"";if(a===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l)}},Xu={deep:!0,created(t,e,n){t[We]=tn(n),bt(t,"change",()=>{const s=t._modelValue,r=Nn(t),i=t.checked,o=t[We];if(P(s)){const a=$r(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const u=[...s];u.splice(a,1),o(u)}}else if(rn(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Da(t,i))})},mounted:Ki,beforeUpdate(t,e,n){t[We]=tn(n),Ki(t,e,n)}};function Ki(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(P(e))r=$r(e,s.props.value)>-1;else if(rn(e))r=e.has(s.props.value);else{if(e===n)return;r=on(e,Da(t,!0))}t.checked!==r&&(t.checked=r)}const cs={deep:!0,created(t,{value:e,modifiers:{number:n}},s){t._modelValue=e,bt(t,"change",()=>{const r=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?Ns(Nn(i)):Nn(i));t[We](t.multiple?rn(t._modelValue)?new Set(r):r:r[0]),t._assigning=!0,Qo(()=>{t._assigning=!1})}),t[We]=tn(s)},mounted(t,{value:e}){Gi(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[We]=tn(n)},updated(t,{value:e}){t._assigning||Gi(t,e)}};function Gi(t,e){const n=t.multiple,s=P(e);if(!(n&&!s&&!rn(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=Nn(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=$r(e,a)>-1}else o.selected=e.has(a);else if(on(Nn(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Nn(t){return"_value"in t?t._value:t.value}function Da(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Qu=["ctrl","shift","alt","meta"],Zu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qu.some(n=>t[`${n}Key`]&&!e.includes(n))},Bs=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=Zu[e[o]];if(a&&a(r,e))return}return t(r,...i)})},ed=ue({patchProp:Ku},Pu);let Ji;function td(){return Ji||(Ji=uu(ed))}const nd=(...t)=>{const e=td().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=rd(s);if(!r)return;const i=e._component;!N(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,sd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function sd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rd(t){return ne(t)?document.querySelector(t):t}var Yi={};/**
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
 */const La=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},id=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ua={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,u=l?t[r+2]:0,c=i>>2,p=(i&3)<<4|a>>4;let y=(a&15)<<2|u>>6,S=u&63;l||(S=64,o||(y=64)),s.push(n[c],n[p],n[y],n[S])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(La(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):id(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||p==null)throw new od;const y=i<<2|a>>4;if(s.push(y),u!==64){const S=a<<4&240|u>>2;if(s.push(S),p!==64){const L=u<<6&192|p;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class od extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ad=function(t){const e=La(t);return Ua.encodeByteArray(e,!0)},$a=function(t){return ad(t).replace(/\./g,"")},Fa=function(t){try{return Ua.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ld(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cd=()=>ld().__FIREBASE_DEFAULTS__,ud=()=>{if(typeof process>"u"||typeof Yi>"u")return;const t=Yi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fa(t[1]);return e&&JSON.parse(e)},Xr=()=>{try{return cd()||ud()||dd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fd=t=>{var e,n;return(n=(e=Xr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Va=()=>{var t;return(t=Xr())===null||t===void 0?void 0:t.config},ja=t=>{var e;return(e=Xr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function gd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function md(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vd(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _d(){try{return typeof indexedDB=="object"}catch{return!1}}function yd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const wd="FirebaseError";class It extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=wd,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jn.prototype.create)}}class jn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?xd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new It(r,a,s)}}function xd(t,e){return t.replace(Id,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Id=/\{\$([^}]+)}/g;function Ed(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Es(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Xi(i)&&Xi(o)){if(!Es(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Xi(t){return t!==null&&typeof t=="object"}/**
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
 */function Hn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function vn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function _n(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sd(t,e){const n=new Td(t,e);return n.subscribe.bind(n)}class Td{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Cd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=or),r.error===void 0&&(r.error=or),r.complete===void 0&&(r.complete=or);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function or(){}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rt="[DEFAULT]";/**
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
 */class kd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new hd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pd(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ad(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ad(t){return t===Rt?void 0:t}function Pd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Rd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const Od={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Md=G.INFO,Nd={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Dd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Nd[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ha{constructor(e){this.name=e,this._logLevel=Md,this._logHandler=Dd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Od[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Ld=(t,e)=>e.some(n=>t instanceof n);let Qi,Zi;function Ud(){return Qi||(Qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $d(){return Zi||(Zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ba=new WeakMap,Er=new WeakMap,Wa=new WeakMap,ar=new WeakMap,Qr=new WeakMap;function Fd(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ba.set(n,t)}).catch(()=>{}),Qr.set(e,t),e}function Vd(t){if(Er.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Er.set(t,e)}let Sr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Er.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jd(t){Sr=t(Sr)}function Hd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(lr(this),e,...n);return Wa.set(s,e.sort?e.sort():[e]),wt(s)}:$d().includes(t)?function(...e){return t.apply(lr(this),e),wt(Ba.get(this))}:function(...e){return wt(t.apply(lr(this),e))}}function Bd(t){return typeof t=="function"?Hd(t):(t instanceof IDBTransaction&&Vd(t),Ld(t,Ud())?new Proxy(t,Sr):t)}function wt(t){if(t instanceof IDBRequest)return Fd(t);if(ar.has(t))return ar.get(t);const e=Bd(t);return e!==t&&(ar.set(t,e),Qr.set(e,t)),e}const lr=t=>Qr.get(t);function Wd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=wt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(wt(o.result),l.oldVersion,l.newVersion,wt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const qd=["get","getKey","getAll","getAllKeys","count"],zd=["put","add","delete","clear"],cr=new Map;function eo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=zd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||qd.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return cr.set(e,i),i}jd(t=>({...t,get:(e,n,s)=>eo(e,n)||t.get(e,n,s),has:(e,n)=>!!eo(e,n)||t.has(e,n)}));/**
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
 */class Kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Gd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tr="@firebase/app",to="0.10.13";/**
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
 */const ut=new Ha("@firebase/app"),Jd="@firebase/app-compat",Yd="@firebase/analytics-compat",Xd="@firebase/analytics",Qd="@firebase/app-check-compat",Zd="@firebase/app-check",ef="@firebase/auth",tf="@firebase/auth-compat",nf="@firebase/database",sf="@firebase/data-connect",rf="@firebase/database-compat",of="@firebase/functions",af="@firebase/functions-compat",lf="@firebase/installations",cf="@firebase/installations-compat",uf="@firebase/messaging",df="@firebase/messaging-compat",ff="@firebase/performance",hf="@firebase/performance-compat",pf="@firebase/remote-config",gf="@firebase/remote-config-compat",mf="@firebase/storage",bf="@firebase/storage-compat",vf="@firebase/firestore",_f="@firebase/vertexai-preview",yf="@firebase/firestore-compat",wf="firebase",xf="10.14.1";/**
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
 */const Cr="[DEFAULT]",If={[Tr]:"fire-core",[Jd]:"fire-core-compat",[Xd]:"fire-analytics",[Yd]:"fire-analytics-compat",[Zd]:"fire-app-check",[Qd]:"fire-app-check-compat",[ef]:"fire-auth",[tf]:"fire-auth-compat",[nf]:"fire-rtdb",[sf]:"fire-data-connect",[rf]:"fire-rtdb-compat",[of]:"fire-fn",[af]:"fire-fn-compat",[lf]:"fire-iid",[cf]:"fire-iid-compat",[uf]:"fire-fcm",[df]:"fire-fcm-compat",[ff]:"fire-perf",[hf]:"fire-perf-compat",[pf]:"fire-rc",[gf]:"fire-rc-compat",[mf]:"fire-gcs",[bf]:"fire-gcs-compat",[vf]:"fire-fst",[yf]:"fire-fst-compat",[_f]:"fire-vertex","fire-js":"fire-js",[wf]:"fire-js-all"};/**
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
 */const Ss=new Map,Ef=new Map,kr=new Map;function no(t,e){try{t.container.addComponent(e)}catch(n){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(kr.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;kr.set(e,t);for(const n of Ss.values())no(n,t);for(const n of Ef.values())no(n,t);return!0}function qa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ce(t){return t.settings!==void 0}/**
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
 */const Sf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new jn("app","Firebase",Sf);/**
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
 */class Tf{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const Bn=xf;function za(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Cr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw xt.create("bad-app-name",{appName:String(r)});if(n||(n=Va()),!n)throw xt.create("no-options");const i=Ss.get(r);if(i){if(Es(n,i.options)&&Es(s,i.config))return i;throw xt.create("duplicate-app",{appName:r})}const o=new Rd(r);for(const l of kr.values())o.addComponent(l);const a=new Tf(n,s,o);return Ss.set(r,a),a}function Cf(t=Cr){const e=Ss.get(t);if(!e&&t===Cr&&Va())return za();if(!e)throw xt.create("no-app",{appName:t});return e}function Gt(t,e,n){var s;let r=(s=If[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(a.join(" "));return}Dn(new nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const kf="firebase-heartbeat-database",Af=1,Ln="firebase-heartbeat-store";let ur=null;function Ka(){return ur||(ur=Wd(kf,Af,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ln)}catch(n){console.warn(n)}}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),ur}async function Pf(t){try{const n=(await Ka()).transaction(Ln),s=await n.objectStore(Ln).get(Ga(t));return await n.done,s}catch(e){if(e instanceof It)ut.warn(e.message);else{const n=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ut.warn(n.message)}}}async function so(t,e){try{const s=(await Ka()).transaction(Ln,"readwrite");await s.objectStore(Ln).put(e,Ga(t)),await s.done}catch(n){if(n instanceof It)ut.warn(n.message);else{const s=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ut.warn(s.message)}}}function Ga(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Rf=1024,Of=30*24*60*60*1e3;class Mf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Df(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ro();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Of}),this._storage.overwrite(this._heartbeatsCache))}catch(s){ut.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ro(),{heartbeatsToSend:s,unsentEntries:r}=Nf(this._heartbeatsCache.heartbeats),i=$a(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ut.warn(n),""}}}function ro(){return new Date().toISOString().substring(0,10)}function Nf(t,e=Rf){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),io(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),io(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Df{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _d()?yd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return so(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return so(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function io(t){return $a(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Lf(t){Dn(new nn("platform-logger",e=>new Kd(e),"PRIVATE")),Dn(new nn("heartbeat",e=>new Mf(e),"PRIVATE")),Gt(Tr,to,t),Gt(Tr,to,"esm2017"),Gt("fire-js","")}Lf("");var Uf="firebase",$f="10.14.1";/**
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
 */Gt(Uf,$f,"app");function Zr(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ja(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ff=Ja,Ya=new jn("auth","Firebase",Ja());/**
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
 */const Ts=new Ha("@firebase/auth");function Vf(t,...e){Ts.logLevel<=G.WARN&&Ts.warn(`Auth (${Bn}): ${t}`,...e)}function us(t,...e){Ts.logLevel<=G.ERROR&&Ts.error(`Auth (${Bn}): ${t}`,...e)}/**
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
 */function Te(t,...e){throw ti(t,...e)}function Pe(t,...e){return ti(t,...e)}function ei(t,e,n){const s=Object.assign(Object.assign({},Ff()),{[e]:n});return new jn("auth","Firebase",s).create(e,{appName:t.name})}function it(t){return ei(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jf(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Te(t,"argument-error"),ei(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ti(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ya.create(t,...e)}function R(t,e,...n){if(!t)throw ti(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw us(e),new Error(e)}function dt(t,e){t||nt(e)}/**
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
 */function Ar(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hf(){return oo()==="http:"||oo()==="https:"}function oo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Bf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hf()||md()||"connection"in navigator)?navigator.onLine:!0}function Wf(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wn{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=pd()||bd()}get(){return Bf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ni(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Xa{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zf=new Wn(3e4,6e4);function Et(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ht(t,e,n,s,r={}){return Qa(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Hn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return gd()||(u.referrerPolicy="no-referrer"),Xa.fetch()(Za(t,t.config.apiHost,n,a),u)})}async function Qa(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},qf),e);try{const r=new Gf(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ss(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ss(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ss(t,"user-disabled",o);const c=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ei(t,c,u);Te(t,c)}}catch(r){if(r instanceof It)throw r;Te(t,"network-request-failed",{message:String(r)})}}async function qn(t,e,n,s,r={}){const i=await ht(t,e,n,s,r);return"mfaPendingCredential"in i&&Te(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Za(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ni(t.config,r):`${t.config.apiScheme}://${r}`}function Kf(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Pe(this.auth,"network-request-failed")),zf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ss(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Pe(t,e,s);return r.customData._tokenResponse=n,r}function ao(t){return t!==void 0&&t.enterprise!==void 0}class Jf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Kf(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Yf(t,e){return ht(t,"GET","/v2/recaptchaConfig",Et(t,e))}/**
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
 */async function Xf(t,e){return ht(t,"POST","/v1/accounts:delete",e)}async function el(t,e){return ht(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Tn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qf(t,e=!1){const n=Ge(t),s=await n.getIdToken(e),r=si(s);R(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Tn(dr(r.auth_time)),issuedAtTime:Tn(dr(r.iat)),expirationTime:Tn(dr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dr(t){return Number(t)*1e3}function si(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return us("JWT malformed, contained fewer than 3 sections"),null;try{const r=Fa(n);return r?JSON.parse(r):(us("Failed to decode base64 JWT payload"),null)}catch(r){return us("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function lo(t){const e=si(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function sn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof It&&Zf(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Zf({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class eh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await sn(t,el(n,{idToken:s}));R(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tl(i.providerUserInfo):[],a=nh(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Pr(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,p)}async function th(t){const e=Ge(t);await Cs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function tl(t){return t.map(e=>{var{providerId:n}=e,s=Zr(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function sh(t,e){const n=await Qa(t,{},async()=>{const s=Hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Za(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xa.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rh(t,e){return ht(t,"POST","/v2/accounts:revokeToken",Et(t,e))}/**
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
 */class Jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){R(e.length!==0,"internal-error");const n=lo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await sh(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Jt;return s&&(R(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(R(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(R(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jt,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
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
 */function gt(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class st{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Zr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await sn(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qf(this,e)}reload(){return th(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Cs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ce(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await sn(this,Xf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,u,c;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,y=(r=n.email)!==null&&r!==void 0?r:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,L=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,Z=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,z=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:V,emailVerified:k,isAnonymous:te,providerData:be,stsTokenManager:_e}=n;R(V&&_e,e,"internal-error");const Me=Jt.fromJSON(this.name,_e);R(typeof V=="string",e,"internal-error"),gt(p,e.name),gt(y,e.name),R(typeof k=="boolean",e,"internal-error"),R(typeof te=="boolean",e,"internal-error"),gt(S,e.name),gt(L,e.name),gt(O,e.name),gt(Z,e.name),gt(z,e.name),gt(U,e.name);const pt=new st({uid:V,auth:e,email:y,emailVerified:k,displayName:p,isAnonymous:te,photoURL:L,phoneNumber:S,tenantId:O,stsTokenManager:Me,createdAt:z,lastLoginAt:U});return be&&Array.isArray(be)&&(pt.providerData=be.map(Je=>Object.assign({},Je))),Z&&(pt._redirectEventId=Z),pt}static async _fromIdTokenResponse(e,n,s=!1){const r=new Jt;r.updateFromServerResponse(n);const i=new st({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Cs(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];R(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?tl(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Jt;a.updateFromIdToken(s);const l=new st({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Pr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const co=new Map;function rt(t){dt(t instanceof Function,"Expected a class definition");let e=co.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,co.set(t,e),e)}/**
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
 */class nl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nl.type="NONE";const uo=nl;/**
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
 */function ds(t,e,n){return`firebase:${t}:${e}:${n}`}class Yt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ds(this.userKey,r.apiKey,i),this.fullPersistenceKey=ds("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Yt(rt(uo),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||rt(uo);const o=ds(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const p=st._fromJSON(e,c);u!==i&&(a=p),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Yt(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Yt(i,e,s))}}/**
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
 */function fo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ol(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ll(e))return"Blackberry";if(cl(e))return"Webos";if(rl(e))return"Safari";if((e.includes("chrome/")||il(e))&&!e.includes("edge/"))return"Chrome";if(al(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function sl(t=me()){return/firefox\//i.test(t)}function rl(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function il(t=me()){return/crios\//i.test(t)}function ol(t=me()){return/iemobile/i.test(t)}function al(t=me()){return/android/i.test(t)}function ll(t=me()){return/blackberry/i.test(t)}function cl(t=me()){return/webos/i.test(t)}function ri(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ih(t=me()){var e;return ri(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oh(){return vd()&&document.documentMode===10}function ul(t=me()){return ri(t)||al(t)||cl(t)||ll(t)||/windows phone/i.test(t)||ol(t)}/**
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
 */function dl(t,e=[]){let n;switch(t){case"Browser":n=fo(me());break;case"Worker":n=`${fo(me())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bn}/${s}`}/**
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
 */class ah{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function lh(t,e={}){return ht(t,"GET","/v2/passwordPolicy",Et(t,e))}/**
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
 */const ch=6;class uh{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ch,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class dh{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ho(this),this.idTokenSubscription=new ho(this),this.beforeStateQueue=new ah(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ya,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Yt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await el(this,{idToken:e}),s=await st._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ce(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ce(this.app))return Promise.reject(it(this));const n=e?Ge(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ce(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ce(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lh(this),n=new uh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await rh(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await Yt.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Vf(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function St(t){return Ge(t)}class ho{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sd(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fh(t){Ws=t}function fl(t){return Ws.loadJS(t)}function hh(){return Ws.recaptchaEnterpriseScript}function ph(){return Ws.gapiScript}function gh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mh="recaptcha-enterprise",bh="NO_RECAPTCHA";class vh{constructor(e){this.type=mh,this.auth=St(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Yf(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Jf(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;ao(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(bh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&ao(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hh();l.length!==0&&(l+=a),fl(l).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function po(t,e,n,s=!1){const r=new vh(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Rr(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await po(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await po(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function _h(t,e){const n=qa(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Es(i,e??{}))return r;Te(r,"already-initialized")}return n.initialize({options:e})}function yh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function wh(t,e,n){const s=St(t);R(s._canInitEmulator,s,"emulator-config-failed"),R(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=hl(e),{host:o,port:a}=xh(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),Ih()}function hl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xh(t){const e=hl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:go(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:go(o)}}}function go(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ih(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ii{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function Eh(t,e){return ht(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Sh(t,e){return qn(t,"POST","/v1/accounts:signInWithPassword",Et(t,e))}/**
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
 */async function Th(t,e){return qn(t,"POST","/v1/accounts:signInWithEmailLink",Et(t,e))}async function Ch(t,e){return qn(t,"POST","/v1/accounts:signInWithEmailLink",Et(t,e))}/**
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
 */class Un extends ii{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Un(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Un(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rr(e,n,"signInWithPassword",Sh);case"emailLink":return Th(e,{email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rr(e,s,"signUpPassword",Eh);case"emailLink":return Ch(e,{idToken:n,email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xt(t,e){return qn(t,"POST","/v1/accounts:signInWithIdp",Et(t,e))}/**
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
 */const kh="http://localhost";class $t extends ii{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Te("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Zr(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new $t(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Xt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xt(e,n)}buildRequest(){const e={requestUri:kh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hn(n)}return e}}/**
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
 */function Ah(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ph(t){const e=vn(_n(t)).link,n=e?vn(_n(e)).deep_link_id:null,s=vn(_n(t)).deep_link_id;return(s?vn(_n(s)).link:null)||s||n||e||t}class oi{constructor(e){var n,s,r,i,o,a;const l=vn(_n(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(s=l.oobCode)!==null&&s!==void 0?s:null,p=Ah((r=l.mode)!==null&&r!==void 0?r:null);R(u&&c&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=c,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ph(e);try{return new oi(n)}catch{return null}}}/**
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
 */class ln{constructor(){this.providerId=ln.PROVIDER_ID}static credential(e,n){return Un._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=oi.parseLink(n);return R(s,"argument-error"),Un._fromEmailAndCode(e,s.code,s.tenantId)}}ln.PROVIDER_ID="password";ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ai{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zn extends ai{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vt extends zn{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
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
 */class tt extends zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return tt.credential(n,s)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
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
 */class _t extends zn{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class yt extends zn{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return yt.credential(n,s)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
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
 */async function Rh(t,e){return qn(t,"POST","/v1/accounts:signUp",Et(t,e))}/**
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
 */class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await st._fromIdTokenResponse(e,s,r),o=mo(s);return new Ft({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=mo(s);return new Ft({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function mo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ks extends It{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ks(e,n,s,r)}}function pl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(t,i,e,s):i})}async function Oh(t,e,n=!1){const s=await sn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ft._forOperation(t,"link",s)}/**
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
 */async function Mh(t,e,n=!1){const{auth:s}=t;if(Ce(s.app))return Promise.reject(it(s));const r="reauthenticate";try{const i=await sn(t,pl(s,r,e,t),n);R(i.idToken,s,"internal-error");const o=si(i.idToken);R(o,s,"internal-error");const{sub:a}=o;return R(t.uid===a,s,"user-mismatch"),Ft._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Te(s,"user-mismatch"),i}}/**
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
 */async function gl(t,e,n=!1){if(Ce(t.app))return Promise.reject(it(t));const s="signIn",r=await pl(t,s,e),i=await Ft._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Nh(t,e){return gl(St(t),e)}/**
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
 */async function ml(t){const e=St(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Dh(t,e,n){if(Ce(t.app))return Promise.reject(it(t));const s=St(t),o=await Rr(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Rh).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ml(t),l}),a=await Ft._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Lh(t,e,n){return Ce(t.app)?Promise.reject(it(t)):Nh(Ge(t),ln.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ml(t),s})}/**
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
 */async function Uh(t,e){return ht(t,"POST","/v1/accounts:update",e)}/**
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
 */async function $h(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ge(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await sn(s,Uh(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Fh(t,e,n,s){return Ge(t).onIdTokenChanged(e,n,s)}function Vh(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function jh(t,e,n,s){return Ge(t).onAuthStateChanged(e,n,s)}function Hh(t){return Ge(t).signOut()}const As="__sak";/**
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
 */class bl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Bh=1e3,Wh=10;class vl extends bl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ul(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);oh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Wh):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Bh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vl.type="LOCAL";const qh=vl;/**
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
 */class _l extends bl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_l.type="SESSION";const yl=_l;/**
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
 */function zh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new qs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await zh(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qs.receivers=[];/**
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
 */function li(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Kh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=li("",20);r.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const y=p;if(y.data.eventId===u)switch(y.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(y.data.response);break;default:clearTimeout(c),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ze(){return window}function Gh(t){ze().location.href=t}/**
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
 */function wl(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function Jh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xh(){return wl()?self:null}/**
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
 */const xl="firebaseLocalStorageDb",Qh=1,Ps="firebaseLocalStorage",Il="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zs(t,e){return t.transaction([Ps],e?"readwrite":"readonly").objectStore(Ps)}function Zh(){const t=indexedDB.deleteDatabase(xl);return new Kn(t).toPromise()}function Or(){const t=indexedDB.open(xl,Qh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ps,{keyPath:Il})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ps)?e(s):(s.close(),await Zh(),e(await Or()))})})}async function bo(t,e,n){const s=zs(t,!0).put({[Il]:e,value:n});return new Kn(s).toPromise()}async function ep(t,e){const n=zs(t,!1).get(e),s=await new Kn(n).toPromise();return s===void 0?null:s.value}function vo(t,e){const n=zs(t,!0).delete(e);return new Kn(n).toPromise()}const tp=800,np=3;class El{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Or(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>np)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(Xh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jh(),!this.activeServiceWorker)return;this.sender=new Kh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Or();return await bo(e,As,"1"),await vo(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>bo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ep(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=zs(r,!1).getAll();return new Kn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}El.type="LOCAL";const sp=El;new Wn(3e4,6e4);/**
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
 */function Sl(t,e){return e?rt(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ci extends ii{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rp(t){return gl(t.auth,new ci(t),t.bypassAuthState)}function ip(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),Mh(n,new ci(t),t.bypassAuthState)}async function op(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),Oh(n,new ci(t),t.bypassAuthState)}/**
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
 */class Tl{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rp;case"linkViaPopup":case"linkViaRedirect":return op;case"reauthViaPopup":case"reauthViaRedirect":return ip;default:Te(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ap=new Wn(2e3,1e4);async function lp(t,e,n){if(Ce(t.app))return Promise.reject(Pe(t,"operation-not-supported-in-this-environment"));const s=St(t);jf(t,e,ai);const r=Sl(s,n);return new Ot(s,"signInViaPopup",e,r).executeNotNull()}class Ot extends Tl{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ot.currentPopupAction&&Ot.currentPopupAction.cancel(),Ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=li();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ap.get())};e()}}Ot.currentPopupAction=null;/**
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
 */const cp="pendingRedirect",fs=new Map;class up extends Tl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const s=await dp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dp(t,e){const n=pp(e),s=hp(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function fp(t,e){fs.set(t._key(),e)}function hp(t){return rt(t._redirectPersistence)}function pp(t){return ds(cp,t.config.apiKey,t.name)}async function gp(t,e,n=!1){if(Ce(t.app))return Promise.reject(it(t));const s=St(t),r=Sl(s,e),o=await new up(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const mp=10*60*1e3;class bp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Cl(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Pe(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mp&&this.cachedEventUids.clear(),this.cachedEventUids.has(_o(e))}saveEventToCache(e){this.cachedEventUids.add(_o(e)),this.lastProcessedEventTime=Date.now()}}function _o(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cl(t);default:return!1}}/**
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
 */async function _p(t,e={}){return ht(t,"GET","/v1/projects",e)}/**
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
 */const yp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wp=/^https?/;async function xp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _p(t);for(const n of e)try{if(Ip(n))return}catch{}Te(t,"unauthorized-domain")}function Ip(t){const e=Ar(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!wp.test(n))return!1;if(yp.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Ep=new Wn(3e4,6e4);function yo(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Sp(t){return new Promise((e,n)=>{var s,r,i;function o(){yo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yo(),n(Pe(t,"network-request-failed"))},timeout:Ep.get()})}if(!((r=(s=ze().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ze().gapi)===null||i===void 0)&&i.load)o();else{const a=gh("iframefcb");return ze()[a]=()=>{gapi.load?o():n(Pe(t,"network-request-failed"))},fl(`${ph()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw hs=null,e})}let hs=null;function Tp(t){return hs=hs||Sp(t),hs}/**
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
 */const Cp=new Wn(5e3,15e3),kp="__/auth/iframe",Ap="emulator/auth/iframe",Pp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Op(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ni(e,Ap):`https://${t.config.authDomain}/${kp}`,s={apiKey:e.apiKey,appName:t.name,v:Bn},r=Rp.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Hn(s).slice(1)}`}async function Mp(t){const e=await Tp(t),n=ze().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:Op(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pp,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Pe(t,"network-request-failed"),a=ze().setTimeout(()=>{i(o)},Cp.get());function l(){ze().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Np={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dp=500,Lp=600,Up="_blank",$p="http://localhost";class wo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fp(t,e,n,s=Dp,r=Lp){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Np),{width:s.toString(),height:r.toString(),top:i,left:o}),u=me().toLowerCase();n&&(a=il(u)?Up:n),sl(u)&&(e=e||$p,l.scrollbars="yes");const c=Object.entries(l).reduce((y,[S,L])=>`${y}${S}=${L},`,"");if(ih(u)&&a!=="_self")return Vp(e||"",a),new wo(null);const p=window.open(e||"",a,c);R(p,t,"popup-blocked");try{p.focus()}catch{}return new wo(p)}function Vp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const jp="__/auth/handler",Hp="emulator/auth/handler",Bp=encodeURIComponent("fac");async function xo(t,e,n,s,r,i){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Bn,eventId:r};if(e instanceof ai){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ed(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,p]of Object.entries({}))o[c]=p}if(e instanceof zn){const c=e.getScopes().filter(p=>p!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Bp}=${encodeURIComponent(l)}`:"";return`${Wp(t)}?${Hn(a).slice(1)}${u}`}function Wp({config:t}){return t.emulator?ni(t,Hp):`https://${t.authDomain}/${jp}`}/**
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
 */const fr="webStorageSupport";class qp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yl,this._completeRedirectFn=gp,this._overrideRedirectResult=fp}async _openPopup(e,n,s,r){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await xo(e,n,s,Ar(),r);return Fp(e,o,li())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await xo(e,n,s,Ar(),r);return Gh(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(dt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Mp(e),s=new bp(e);return n.register("authEvent",r=>(R(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fr,{type:fr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[fr];o!==void 0&&n(!!o),Te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ul()||rl()||ri()}}const zp=qp;var Io="@firebase/auth",Eo="1.7.9";/**
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
 */class Kp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Gp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jp(t){Dn(new nn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dl(t)},u=new dh(s,r,i,l);return yh(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Dn(new nn("auth-internal",e=>{const n=St(e.getProvider("auth").getImmediate());return(s=>new Kp(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Io,Eo,Gp(t)),Gt(Io,Eo,"esm2017")}/**
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
 */const Yp=5*60,Xp=ja("authIdTokenMaxAge")||Yp;let So=null;const Qp=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Xp)return;const r=n==null?void 0:n.token;So!==r&&(So=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Zp(t=Cf()){const e=qa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_h(t,{popupRedirectResolver:zp,persistence:[sp,qh,yl]}),s=ja("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Qp(i.toString());Vh(n,o,()=>o(n.currentUser)),Fh(n,a=>o(a))}}const r=fd("auth");return r&&wh(n,`http://${r}`),n}function eg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}fh({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Pe("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",eg().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jp("Browser");const tg={apiKey:"AIzaSyCbL_3nj_CyexuqoDZM-9q4H3ZwP-yiIAs",authDomain:"prime-imoveis-98b9a.firebaseapp.com",projectId:"prime-imoveis-98b9a",storageBucket:"prime-imoveis-98b9a.firebasestorage.app",messagingSenderId:"476715353928",appId:"1:476715353928:web:de685deebb33a5f665157d",measurementId:"G-46YLRRCG13"},ng=za(tg),Gn=Zp(ng),sg=new tt,rg=(t,e)=>Lh(Gn,t,e),ig=(t,e)=>Dh(Gn,t,e),og=()=>lp(Gn,sg),ag=()=>Hh(Gn),Mr=an({user:null,loading:!0});jh(Gn,t=>{Mr.user=t,Mr.loading=!1});const kl=()=>({authState:Mr,logout:ag});/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:s,iconNode:r,name:i,class:o,...a},{slots:l})=>xr("svg",{...rs,width:t||rs.width,height:t||rs.height,stroke:s||rs.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${lg(i??"icon")}`],...a},[...r.map(u=>xr(...u)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=(t,e)=>(n,{slots:s})=>xr(cg,{...n,iconNode:e,name:t},s);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=Q("BathIcon",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=Q("BedDoubleIcon",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=Q("BuildingIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=Q("CarIcon",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=Q("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=Q("CirclePlusIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=Q("DollarSignIcon",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=Q("FacebookIcon",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=Q("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=Q("HomeIcon",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=Q("InboxIcon",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=Q("InstagramIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=Q("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=Q("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=Q("LockIcon",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=Q("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=Q("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=Q("MapPinIcon",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=Q("MaximizeIcon",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=Q("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=Q("PhoneIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=Q("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=Q("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=Q("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=Q("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=Q("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Cg={class:"sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"},kg={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Ag={class:"flex justify-between h-16"},Pg={class:"flex items-center"},Rg={href:"#",class:"flex items-center gap-2 text-brand-700 font-extrabold text-xl tracking-tight transition hover:opacity-90"},Og={class:"hidden md:flex items-center gap-4"},Mg={class:"flex items-center gap-3 pl-4 border-l border-slate-200"},Ng={class:"flex flex-col text-right"},Dg={class:"text-xs font-semibold text-slate-800 leading-none"},Lg={class:"text-[10px] text-slate-400 font-medium"},Ug={class:"w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold border border-brand-200"},$g=["src"],Fg={key:1},Vg={class:"flex items-center md:hidden"},jg={class:"md:hidden border-t border-slate-100 bg-white"},Hg={class:"pt-4 pb-4 border-t border-slate-100 px-4"},Bg={key:0,class:"flex items-center gap-3"},Wg={class:"w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold border border-brand-200"},qg=["src"],zg={key:1},Kg={class:"text-sm font-semibold text-slate-800"},Gg={class:"text-xs text-slate-500"},Jg={key:1,class:"space-y-2"},Yg={__name:"Navbar",emits:["open-auth","open-new-property"],setup(t,{emit:e}){const n=e,{authState:s,logout:r}=kl(),i=Oa(()=>(s==null?void 0:s.user)||null),o=ge(!1),a=async()=>{try{await r(),alert("Sessão encerrada com sucesso!")}catch(l){console.error("Erro ao deslogar:",l)}};return(l,u)=>(F(),q("nav",Cg,[f("div",kg,[f("div",Ag,[f("div",Pg,[f("a",Rg,[T(D(Pl),{class:"w-6 h-6 text-brand-600 stroke-[2.5]"}),u[4]||(u[4]=f("span",null,[Lt("Prime"),f("span",{class:"text-slate-800 font-medium"},"Imóveis")],-1))]),u[5]||(u[5]=en('<div class="hidden md:flex ml-10 space-x-8"><a href="#" class="border-b-2 border-brand-600 px-1 pt-1 text-sm font-semibold text-brand-700">Comprar</a><a href="#" class="border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 transition">Alugar</a><a href="#" class="border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 transition">Lançamentos</a><a href="#" class="border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 transition">Anunciar</a></div>',1))]),f("div",Og,[i.value?(F(),q(Ie,{key:0},[f("button",{onClick:u[0]||(u[0]=c=>n("open-new-property")),class:"inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl transition duration-150 shadow-sm shadow-brand-200"},[T(D(hg),{class:"w-4 h-4"}),u[6]||(u[6]=Lt(" Anunciar Imóvel ",-1))]),f("div",Mg,[f("div",Ng,[f("span",Dg,ie(i.value.displayName||"Usuário"),1),f("span",Lg,ie(i.value.email),1)]),f("div",Ug,[i.value.photoURL?(F(),q("img",{key:0,src:i.value.photoURL,alt:"Avatar",class:"w-full h-full rounded-full object-cover"},null,8,$g)):(F(),q("span",Fg,ie((i.value.displayName||i.value.email||"U")[0].toUpperCase()),1))]),f("button",{onClick:a,title:"Sair",class:"p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition"},[T(D(To),{class:"w-5 h-5"})])])],64)):(F(),q("button",{key:1,onClick:u[1]||(u[1]=c=>n("open-auth")),class:"inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition"},[T(D(Ol),{class:"w-4 h-4"}),u[7]||(u[7]=Lt(" Entrar / Cadastrar ",-1))]))]),f("div",Vg,[f("button",{onClick:u[2]||(u[2]=c=>o.value=!o.value),class:"inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"},[o.value?(F(),Rn(D(hi),{key:1,class:"w-6 h-6"})):(F(),Rn(D(xg),{key:0,class:"w-6 h-6"}))])])])]),re(f("div",jg,[u[8]||(u[8]=en('<div class="pt-2 pb-3 space-y-1 px-4"><a href="#" class="block px-3 py-2 rounded-xl text-base font-semibold text-brand-700 bg-brand-50">Comprar</a><a href="#" class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">Alugar</a><a href="#" class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">Lançamentos</a><a href="#" class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">Anunciar</a></div>',1)),f("div",Hg,[i.value?(F(),q("div",Bg,[f("div",Wg,[i.value.photoURL?(F(),q("img",{key:0,src:i.value.photoURL,alt:"Avatar",class:"w-full h-full rounded-full object-cover"},null,8,qg)):(F(),q("span",zg,ie((i.value.displayName||i.value.email||"U")[0].toUpperCase()),1))]),f("div",null,[f("div",Kg,ie(i.value.displayName||"Usuário"),1),f("div",Gg,ie(i.value.email),1)]),f("button",{onClick:a,class:"ml-auto p-2 text-slate-400 hover:text-red-500 rounded-xl transition"},[T(D(To),{class:"w-5 h-5"})])])):(F(),q("div",Jg,[f("button",{onClick:u[3]||(u[3]=c=>{n("open-auth"),o.value=!1}),class:"w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 transition"}," Entrar / Cadastrar ")]))])],512),[[Mu,o.value]])]))}},Xg={class:"relative bg-slate-900 overflow-hidden py-24 sm:py-32 flex items-center min-h-[500px]"},Qg={class:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left"},Zg={class:"mt-10 bg-white/95 backdrop-blur-lg p-5 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-950/20 max-w-5xl border border-white/20"},em={class:"relative flex flex-col justify-center"},tm={class:"relative"},nm={class:"relative flex flex-col justify-center"},sm={class:"relative"},rm={class:"relative flex flex-col justify-center"},im={class:"relative"},om={class:"relative flex flex-col justify-center"},am={class:"relative"},lm={class:"flex items-end"},cm={type:"submit",class:"w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-200 transition duration-150"},um={__name:"Hero",emits:["search"],setup(t,{emit:e}){const n=e,s=ge({cidade:"",tipo:"",precoMax:"",quartos:""}),r=()=>{n("search",{...s.value})};return(i,o)=>(F(),q("div",Xg,[o[13]||(o[13]=f("div",{class:"absolute inset-0 z-0"},[f("img",{src:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",alt:"Casa de luxo",class:"w-full h-full object-cover object-center opacity-40 select-none pointer-events-none"}),f("div",{class:"absolute inset-0 bg-gradient-to-tr from-brand-950 via-brand-900/80 to-transparent"})],-1)),f("div",Qg,[o[12]||(o[12]=f("div",{class:"max-w-3xl"},[f("span",{class:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/25 border border-brand-400/30 text-brand-200 mb-6"}," ✨ Sua imobiliária digital de confiança "),f("h1",{class:"text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"}," Encontre o lar perfeito para a sua história. "),f("p",{class:"mt-4 text-lg text-slate-300"}," Pesquise entre milhares de casas, apartamentos e coberturas selecionadas especialmente para você com as melhores taxas do mercado. ")],-1)),f("div",Zg,[f("form",{onSubmit:Bs(r,["prevent"]),class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"},[f("div",em,[o[4]||(o[4]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Localização",-1)),f("div",tm,[T(D(fi),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>s.value.cidade=a),type:"text",placeholder:"Qual cidade deseja?",class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,s.value.cidade]])])]),f("div",nm,[o[6]||(o[6]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Tipo do Imóvel",-1)),f("div",sm,[T(D(dg),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("select",{"onUpdate:modelValue":o[1]||(o[1]=a=>s.value.tipo=a),class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"},[...o[5]||(o[5]=[f("option",{value:""},"Todos os tipos",-1),f("option",{value:"Casa"},"Casa",-1),f("option",{value:"Apartamento"},"Apartamento",-1),f("option",{value:"Cobertura"},"Cobertura",-1)])],512),[[cs,s.value.tipo]])])]),f("div",rm,[o[8]||(o[8]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Preço Máximo",-1)),f("div",im,[T(D(pg),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("select",{"onUpdate:modelValue":o[2]||(o[2]=a=>s.value.precoMax=a),class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"},[...o[7]||(o[7]=[en('<option value="">Qualquer preço</option><option value="500000">Até R$ 500 mil</option><option value="1000000">Até R$ 1 Milhão</option><option value="2000000">Até R$ 2 Milhões</option><option value="5000000">Até R$ 5 Milhões</option>',5)])],512),[[cs,s.value.precoMax]])])]),f("div",om,[o[10]||(o[10]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Quartos",-1)),f("div",am,[T(D(Al),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("select",{"onUpdate:modelValue":o[3]||(o[3]=a=>s.value.quartos=a),class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"},[...o[9]||(o[9]=[en('<option value="">Qualquer quantidade</option><option value="1">1+ quarto</option><option value="2">2+ quartos</option><option value="3">3+ quartos</option><option value="4">4+ quartos</option>',5)])],512),[[cs,s.value.quartos]])])]),f("div",lm,[f("button",cm,[T(D(Tg),{class:"w-4 h-4"}),o[11]||(o[11]=f("span",null,"Buscar",-1))])])],32)])])]))}},dm={class:"group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"},fm={class:"relative overflow-hidden aspect-[4/3] bg-slate-100"},hm=["src","alt"],pm={key:0,class:"absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm z-10"},gm={class:"absolute top-3 right-12 bg-slate-900/75 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-lg z-10"},mm={class:"p-5 flex flex-col flex-1"},bm={class:"flex items-baseline gap-1.5 mb-2"},vm={class:"text-xl font-extrabold text-brand-700"},_m={key:0,class:"text-xs text-slate-400 font-medium"},ym={class:"text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-brand-600 transition mb-1"},wm={class:"flex items-center gap-1 text-slate-400 mb-4"},xm={class:"text-xs font-medium line-clamp-1"},Im={class:"grid grid-cols-4 gap-2 pt-4 border-t border-slate-100 text-slate-500 mt-auto"},Em={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Quartos"},Sm={class:"text-[11px] font-bold text-slate-700"},Tm={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Banheiros"},Cm={class:"text-[11px] font-bold text-slate-700"},km={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Vagas de Garagem"},Am={class:"text-[11px] font-bold text-slate-700"},Pm={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Área Privativa"},Rm={class:"text-[11px] font-bold text-slate-700"},Om={__name:"PropertyCard",props:{imovel:{type:Object,required:!0}},setup(t){const e=ge(!1),n=()=>{e.value=!e.value},s=r=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0}).format(r);return(r,i)=>(F(),q("div",dm,[f("div",fm,[f("img",{src:t.imovel.imagem,alt:t.imovel.titulo,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out select-none"},null,8,hm),t.imovel.destaque?(F(),q("span",pm," Destaque ")):Be("",!0),f("span",gm,ie(t.imovel.tipo),1),f("button",{onClick:Bs(n,["stop"]),class:Ut(["absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white text-slate-400 hover:text-red-500 shadow-sm active:scale-95 transition z-10",{"!text-red-500 !bg-white":e.value}])},[T(D(mg),{class:Ut(["w-4 h-4 transition-colors",{"fill-red-500 text-red-500":e.value}])},null,8,["class"])],2)]),f("div",mm,[f("div",bm,[f("span",vm,ie(s(t.imovel.preco)),1),t.imovel.tipo==="Aluguel"?(F(),q("span",_m,"/ mês")):Be("",!0)]),f("h3",ym,ie(t.imovel.titulo),1),f("div",wm,[T(D(fi),{class:"w-3.5 h-3.5 shrink-0"}),f("span",xm,ie(t.imovel.localizacao),1)]),f("div",Im,[f("div",Em,[T(D(Al),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",Sm,ie(t.imovel.quartos)+" Qto",1)]),f("div",Tm,[T(D(ug),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",Cm,ie(t.imovel.banheiros)+" Ban",1)]),f("div",km,[T(D(fg),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",Am,ie(t.imovel.vagas)+" Vagas",1)]),f("div",Pm,[T(D(wg),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",Rm,ie(t.imovel.area)+" m²",1)])])])]))}},Mm={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"},Nm={class:"flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4"},Dm={key:0,class:"inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-amber-800 bg-amber-50 border border-amber-200 text-xs font-semibold"},Lm={key:0,class:"flex flex-col items-center justify-center py-20"},Um={key:0,class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"},$m={key:1,class:"flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 px-4"},Fm={__name:"PropertyGrid",props:{filters:{type:Object,default:()=>({})}},setup(t){const e=t,n=ge([]),s=ge(!1),r=ge(!1),i=async()=>{s.value=!0,r.value=!1;const a=new URLSearchParams;e.filters.cidade&&a.append("cidade",e.filters.cidade),e.filters.tipo&&a.append("tipo",e.filters.tipo),e.filters.precoMax&&a.append("precoMax",e.filters.precoMax),e.filters.quartos&&a.append("quartos",e.filters.quartos);try{const l=await fetch(`http://localhost:3000/api/imoveis?${a.toString()}`);if(!l.ok)throw new Error("Falha ao conectar na API de imóveis");const u=await l.json();n.value=u}catch(l){console.warn("[PropertyGrid] Backend offline. Carregando dados locais mock para visualização.",l.message),r.value=!0,n.value=o(e.filters)}finally{s.value=!1}};zt(()=>e.filters,()=>{i()},{deep:!0}),la(()=>{i()});function o(a){let u=[...[{id:"imovel-1",titulo:"Apartamento de Luxo Frente ao Mar",tipo:"Apartamento",preco:125e4,localizacao:"Copacabana, Rio de Janeiro - RJ",quartos:3,banheiros:2,vagas:2,area:120,imagem:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",destaque:!0},{id:"imovel-2",titulo:"Casa de Condomínio com Piscina",tipo:"Casa",preco:24e5,localizacao:"Alphaville, Barueri - SP",quartos:4,banheiros:5,vagas:4,area:350,imagem:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",destaque:!0},{id:"imovel-3",titulo:"Cobertura Duplex Espetacular",tipo:"Cobertura",preco:48e5,localizacao:"Ipanema, Rio de Janeiro - RJ",quartos:3,banheiros:4,vagas:3,area:280,imagem:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",destaque:!1},{id:"imovel-4",titulo:"Casa de Campo Charmosa",tipo:"Casa",preco:85e4,localizacao:"Atibaia, São Paulo - SP",quartos:3,banheiros:2,vagas:3,area:200,imagem:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",destaque:!0}]];return a.tipo&&(u=u.filter(c=>c.tipo.toLowerCase()===a.tipo.toLowerCase())),a.cidade&&(u=u.filter(c=>c.localizacao.toLowerCase().includes(a.cidade.toLowerCase()))),a.precoMax&&(u=u.filter(c=>c.preco<=Number(a.precoMax))),a.quartos&&(u=u.filter(c=>c.quartos>=Number(a.quartos))),u}return(a,l)=>(F(),q("div",Mm,[f("div",Nm,[l[1]||(l[1]=f("div",null,[f("h2",{class:"text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight"},"Imóveis em Destaque"),f("p",{class:"text-slate-500 text-sm mt-1"},"Conheça nossas melhores opções disponíveis no mercado imobiliário.")],-1)),r.value?(F(),q("div",Dm,[T(D(ui),{class:"w-4 h-4 text-amber-500 shrink-0"}),l[0]||(l[0]=f("span",null,"Backend offline. Exibindo imóveis demonstrativos.",-1))])):Be("",!0)]),s.value?(F(),q("div",Lm,[T(D(di),{class:"w-10 h-10 text-brand-600 animate-spin mb-4"}),l[2]||(l[2]=f("span",{class:"text-sm font-semibold text-slate-500"},"Buscando imóveis na base de dados...",-1))])):(F(),q(Ie,{key:1},[n.value.length>0?(F(),q("div",Um,[(F(!0),q(Ie,null,Hc(n.value,u=>(F(),q("div",{key:u.id},[T(Om,{imovel:u},null,8,["imovel"])]))),128))])):(F(),q("div",$m,[T(D(bg),{class:"w-12 h-12 text-slate-300 mb-4"}),l[4]||(l[4]=f("h3",{class:"text-base font-bold text-slate-700 mb-1"},"Nenhum imóvel encontrado",-1)),l[5]||(l[5]=f("p",{class:"text-xs text-slate-400 max-w-sm"},"Tente reajustar seus filtros de pesquisa para encontrar novas correspondências.",-1)),f("button",{onClick:i,class:"mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg transition"},[T(D(Sg),{class:"w-3.5 h-3.5"}),l[3]||(l[3]=Lt(" Atualizar busca ",-1))])]))],64))]))}},Vm={key:0,class:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"},jm={class:"relative bg-white w-full max-w-md rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 transition-all transform scale-100"},Hm={class:"flex border-b border-slate-100 mb-6"},Bm={key:0,class:"mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2"},Wm={key:0,class:"relative"},qm={class:"relative"},zm={class:"relative"},Km={class:"relative"},Gm={class:"relative"},Jm={class:"relative"},Ym=["disabled"],Xm=["disabled"],Qm={__name:"AuthModal",props:{isOpen:{type:Boolean,required:!0}},emits:["close"],setup(t,{emit:e}){const n=t,s=e,r=ge("login"),i=ge(!1),o=ge(""),a=an({name:"",email:"",password:""});zt(()=>n.isOpen,c=>{c||(a.name="",a.email="",a.password="",r.value="login",o.value="")});const l=async()=>{i.value=!0,o.value="";try{if(r.value==="login")await rg(a.email,a.password);else{if(a.password.length<6)throw new Error("A senha deve conter no mínimo 6 caracteres.");const c=await ig(a.email,a.password);a.name&&c.user&&await $h(c.user,{displayName:a.name})}s("close")}catch(c){switch(console.error("Erro de autenticação:",c),c.code){case"auth/email-already-in-use":o.value="Este e-mail já está cadastrado.";break;case"auth/invalid-credential":case"auth/wrong-password":case"auth/user-not-found":o.value="E-mail ou senha incorretos.";break;case"auth/weak-password":o.value="A senha deve ter no mínimo 6 caracteres.";break;default:o.value=c.message||"Ocorreu um erro ao processar. Tente novamente."}}finally{i.value=!1}},u=async()=>{i.value=!0,o.value="";try{await og(),s("close")}catch(c){console.error("Erro no Google Login:",c),o.value="Falha ao autenticar com o Google."}finally{i.value=!1}};return(c,p)=>t.isOpen?(F(),q("div",Vm,[f("div",{onClick:p[0]||(p[0]=y=>s("close")),class:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"}),f("div",jm,[f("button",{onClick:p[1]||(p[1]=y=>s("close")),class:"absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-50 transition"},[T(D(hi),{class:"w-5 h-5"})]),f("div",Hm,[f("button",{onClick:p[2]||(p[2]=y=>{r.value="login",o.value=""}),class:Ut(["flex-1 pb-3 text-sm font-bold border-b-2 transition",r.value==="login"?"border-brand-600 text-brand-600":"border-transparent text-slate-400 hover:text-slate-600"])}," Entrar ",2),f("button",{onClick:p[3]||(p[3]=y=>{r.value="register",o.value=""}),class:Ut(["flex-1 pb-3 text-sm font-bold border-b-2 transition",r.value==="register"?"border-brand-600 text-brand-600":"border-transparent text-slate-400 hover:text-slate-600"])}," Criar Conta ",2)]),o.value?(F(),q("div",Bm,[T(D(ui),{class:"w-4 h-4 text-red-500 shrink-0"}),f("span",null,ie(o.value),1)])):Be("",!0),f("form",{onSubmit:Bs(l,["prevent"]),class:"space-y-4"},[r.value==="register"?(F(),q("div",Wm,[p[7]||(p[7]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Nome Completo",-1)),f("div",qm,[T(D(Ol),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("input",{"onUpdate:modelValue":p[4]||(p[4]=y=>a.name=y),type:"text",required:"",placeholder:"Como prefere ser chamado?",class:"w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.name]])])])):Be("",!0),f("div",zm,[p[8]||(p[8]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Endereço de E-mail",-1)),f("div",Km,[T(D(Rl),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("input",{"onUpdate:modelValue":p[5]||(p[5]=y=>a.email=y),type:"email",required:"",placeholder:"exemplo@dominio.com",class:"w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.email]])])]),f("div",Gm,[p[9]||(p[9]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Senha de Acesso",-1)),f("div",Jm,[T(D(yg),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("input",{"onUpdate:modelValue":p[6]||(p[6]=y=>a.password=y),type:"password",required:"",placeholder:"No mínimo 6 dígitos",class:"w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.password]])])]),f("button",{type:"submit",disabled:i.value,class:"w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-150 shadow-md shadow-brand-100 disabled:opacity-50 disabled:cursor-not-allowed"},[i.value?(F(),Rn(D(di),{key:0,class:"w-4 h-4 animate-spin"})):Be("",!0),f("span",null,ie(r.value==="login"?"Entrar na Conta":"Finalizar Cadastro"),1)],8,Ym)],32),p[11]||(p[11]=f("div",{class:"my-6 flex items-center justify-center gap-3"},[f("span",{class:"h-px bg-slate-100 flex-1"}),f("span",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider"},"Ou continue com"),f("span",{class:"h-px bg-slate-100 flex-1"})],-1)),f("button",{type:"button",onClick:u,disabled:i.value,class:"w-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition active:scale-[0.98] disabled:opacity-50"},[...p[10]||(p[10]=[en('<svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"></path></svg><span>Acessar com o Google</span>',2)])],8,Xm)])])):Be("",!0)}},Zm={key:0,class:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"},e0={class:"relative bg-white w-full max-w-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"},t0={class:"text-xl font-extrabold text-slate-800 mb-6 flex items-center gap-2"},n0={key:0,class:"mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2"},s0={class:"grid grid-cols-2 gap-4"},r0={class:"grid grid-cols-4 gap-3"},i0={class:"flex items-center gap-2 py-2"},o0={class:"flex gap-4 pt-4 border-t border-slate-100"},a0=["disabled"],l0={__name:"NewPropertyModal",props:{isOpen:{type:Boolean,required:!0}},emits:["close","property-created"],setup(t,{emit:e}){const n=t,s=e,{token:r}=kl(),i=ge(!1),o=ge(""),a=an({titulo:"",descricao:"",tipo:"Apartamento",preco:"",localizacao:"",quartos:"",banheiros:"",vagas:"",area:"",imagem:"",destaque:!1});zt(()=>n.isOpen,u=>{u||(a.titulo="",a.descricao="",a.tipo="Apartamento",a.preco="",a.localizacao="",a.quartos="",a.banheiros="",a.vagas="",a.area="",a.imagem="",a.destaque=!1,o.value="")});const l=async()=>{i.value=!0,o.value="";try{const u=await fetch("http://localhost:3000/api/imoveis",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r.value}`},body:JSON.stringify(a)});if(!u.ok){const p=await u.json();throw new Error(p.error||"Erro desconhecido ao salvar o imóvel.")}const c=await u.json();s("property-created",c),s("close")}catch(u){console.error("[NewPropertyModal] Erro ao cadastrar imóvel:",u),o.value=u.message||"Falha ao cadastrar. Verifique a conexão com o servidor Express."}finally{i.value=!1}};return(u,c)=>t.isOpen?(F(),q("div",Zm,[f("div",{onClick:c[0]||(c[0]=p=>s("close")),class:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"}),f("div",e0,[f("button",{onClick:c[1]||(c[1]=p=>s("close")),class:"absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-50 transition"},[T(D(hi),{class:"w-5 h-5"})]),f("h2",t0,[T(D(Eg),{class:"w-5 h-5 text-brand-600 stroke-[2.5]"}),c[14]||(c[14]=Lt(" Anunciar Novo Imóvel ",-1))]),o.value?(F(),q("div",n0,[T(D(ui),{class:"w-4 h-4 text-red-500 shrink-0"}),f("span",null,ie(o.value),1)])):Be("",!0),f("form",{onSubmit:Bs(l,["prevent"]),class:"space-y-4"},[f("div",null,[c[15]||(c[15]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Título do Anúncio *",-1)),re(f("input",{"onUpdate:modelValue":c[2]||(c[2]=p=>a.titulo=p),type:"text",required:"",placeholder:"Ex: Apartamento decorado no centro",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.titulo]])]),f("div",s0,[f("div",null,[c[17]||(c[17]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Tipo *",-1)),re(f("select",{"onUpdate:modelValue":c[3]||(c[3]=p=>a.tipo=p),required:"",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition cursor-pointer"},[...c[16]||(c[16]=[f("option",{value:"Apartamento"},"Apartamento",-1),f("option",{value:"Casa"},"Casa",-1),f("option",{value:"Cobertura"},"Cobertura",-1)])],512),[[cs,a.tipo]])]),f("div",null,[c[18]||(c[18]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Preço (R$) *",-1)),re(f("input",{"onUpdate:modelValue":c[4]||(c[4]=p=>a.preco=p),type:"number",required:"",placeholder:"Ex: 450000",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.preco]])])]),f("div",null,[c[19]||(c[19]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Localização *",-1)),re(f("input",{"onUpdate:modelValue":c[5]||(c[5]=p=>a.localizacao=p),type:"text",required:"",placeholder:"Cidade, Estado ou Bairro",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.localizacao]])]),f("div",r0,[f("div",null,[c[20]||(c[20]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Quartos",-1)),re(f("input",{"onUpdate:modelValue":c[6]||(c[6]=p=>a.quartos=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.quartos]])]),f("div",null,[c[21]||(c[21]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Banheiros",-1)),re(f("input",{"onUpdate:modelValue":c[7]||(c[7]=p=>a.banheiros=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.banheiros]])]),f("div",null,[c[22]||(c[22]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Vagas",-1)),re(f("input",{"onUpdate:modelValue":c[8]||(c[8]=p=>a.vagas=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.vagas]])]),f("div",null,[c[23]||(c[23]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Área (m²)",-1)),re(f("input",{"onUpdate:modelValue":c[9]||(c[9]=p=>a.area=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.area]])])]),f("div",null,[c[24]||(c[24]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Descrição do Imóvel",-1)),re(f("textarea",{"onUpdate:modelValue":c[10]||(c[10]=p=>a.descricao=p),rows:"3",placeholder:"Descreva os detalhes importantes...",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition resize-none"},null,512),[[we,a.descricao]])]),f("div",null,[c[25]||(c[25]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"URL da Imagem do Imóvel",-1)),re(f("input",{"onUpdate:modelValue":c[11]||(c[11]=p=>a.imagem=p),type:"url",placeholder:"Ex: https://images.unsplash.com/...",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.imagem]])]),f("div",i0,[re(f("input",{"onUpdate:modelValue":c[12]||(c[12]=p=>a.destaque=p),id:"destaque",type:"checkbox",class:"w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"},null,512),[[Xu,a.destaque]]),c[26]||(c[26]=f("label",{for:"destaque",class:"text-xs font-semibold text-slate-600 cursor-pointer select-none"},"Exibir em destaque na página inicial",-1))]),f("div",o0,[f("button",{type:"button",onClick:c[13]||(c[13]=p=>s("close")),class:"flex-1 py-2.5 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 transition active:scale-[0.98]"}," Cancelar "),f("button",{type:"submit",disabled:i.value,class:"flex-1 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"},[i.value?(F(),Rn(D(di),{key:0,class:"w-4 h-4 animate-spin"})):Be("",!0),c[27]||(c[27]=f("span",null,"Cadastrar Imóvel",-1))],8,a0)])],32)])])):Be("",!0)}},c0={class:"bg-slate-900 border-t border-slate-800 text-slate-400 py-16"},u0={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},d0={class:"grid grid-cols-1 md:grid-cols-4 gap-10"},f0={class:"space-y-4"},h0={class:"flex items-center gap-2 text-white font-extrabold text-lg tracking-tight"},p0={class:"flex items-center gap-3 pt-2"},g0={href:"#",class:"p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition"},m0={href:"#",class:"p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition"},b0={href:"#",class:"p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition"},v0={class:"space-y-3 text-xs"},_0={class:"flex items-center gap-2"},y0={class:"flex items-center gap-2"},w0={class:"flex items-center gap-2"},x0={class:"mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"},I0={__name:"Footer",setup(t){return(e,n)=>(F(),q("footer",c0,[f("div",u0,[f("div",d0,[f("div",f0,[f("div",h0,[T(D(Pl),{class:"w-5 h-5 text-brand-500"}),n[0]||(n[0]=f("span",null,[Lt("Prime"),f("span",{class:"text-slate-300 font-medium"},"Imóveis")],-1))]),n[1]||(n[1]=f("p",{class:"text-xs leading-relaxed text-slate-400"}," A Prime Imóveis conecta você ao imóvel ideal com simplicidade, tecnologia e segurança. Oferecemos as melhores oportunidades de compra e locação de alto padrão. ",-1)),f("div",p0,[f("a",g0,[T(D(vg),{class:"w-4 h-4"})]),f("a",m0,[T(D(gg),{class:"w-4 h-4"})]),f("a",b0,[T(D(_g),{class:"w-4 h-4"})])])]),n[6]||(n[6]=en('<div><h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navegação</h3><ul class="space-y-2 text-xs"><li><a href="#" class="hover:text-white transition">Comprar Imóveis</a></li><li><a href="#" class="hover:text-white transition">Alugar Imóveis</a></li><li><a href="#" class="hover:text-white transition">Lançamentos</a></li><li><a href="#" class="hover:text-white transition">Anunciar Meu Imóvel</a></li><li><a href="#" class="hover:text-white transition">Simulação de Financiamento</a></li></ul></div><div><h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Empresa</h3><ul class="space-y-2 text-xs"><li><a href="#" class="hover:text-white transition">Quem Somos</a></li><li><a href="#" class="hover:text-white transition">Nossas Unidades</a></li><li><a href="#" class="hover:text-white transition">Trabalhe Conosco</a></li><li><a href="#" class="hover:text-white transition">Políticas de Privacidade</a></li><li><a href="#" class="hover:text-white transition">Termos de Uso</a></li></ul></div>',2)),f("div",v0,[n[5]||(n[5]=f("h3",{class:"text-sm font-bold text-white mb-4 uppercase tracking-wider"},"Fale Conosco",-1)),f("div",_0,[T(D(Ig),{class:"w-4 h-4 text-brand-500 shrink-0"}),n[2]||(n[2]=f("span",null,"0800 555 7788",-1))]),f("div",y0,[T(D(Rl),{class:"w-4 h-4 text-brand-500 shrink-0"}),n[3]||(n[3]=f("span",null,"contato@primeimoveis.com",-1))]),f("div",w0,[T(D(fi),{class:"w-4 h-4 text-brand-500 shrink-0"}),n[4]||(n[4]=f("span",null,"Av. Paulista, 1000 - São Paulo, SP",-1))])])]),f("div",x0,[f("span",null,"© "+ie(new Date().getFullYear())+" Prime Imóveis. Todos os direitos reservados. CRECI: 12345-J",1),n[7]||(n[7]=f("div",{class:"flex gap-4"},[f("a",{href:"#",class:"hover:text-white transition"},"Políticas"),f("a",{href:"#",class:"hover:text-white transition"},"Segurança")],-1))])])]))}},E0={class:"min-h-screen flex flex-col bg-slate-50 selection:bg-brand-500 selection:text-white"},S0={class:"flex-grow"},T0={__name:"App",setup(t){const e=ge({}),n=ge(!1),s=ge(!1),r=ge(null),i=a=>{e.value=a},o=()=>{r.value&&r.value.fetchImoveis()};return(a,l)=>(F(),q("div",E0,[T(Yg,{onOpenAuth:l[0]||(l[0]=u=>n.value=!0),onOpenNewProperty:l[1]||(l[1]=u=>s.value=!0)}),f("main",S0,[T(um,{onSearch:i}),T(Fm,{ref_key:"gridRef",ref:r,filters:e.value},null,8,["filters"])]),T(I0),T(Qm,{"is-open":n.value,onClose:l[2]||(l[2]=u=>n.value=!1)},null,8,["is-open"]),T(l0,{"is-open":s.value,onClose:l[3]||(l[3]=u=>s.value=!1),onPropertyCreated:o},null,8,["is-open"])]))}};nd(T0).mount("#app");
