(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Er(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const J={},Ft=[],Be=()=>{},po=()=>!1,Es=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ss=t=>t.startsWith("onUpdate:"),ue=Object.assign,Sr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yl=Object.prototype.hasOwnProperty,B=(t,e)=>yl.call(t,e),M=Array.isArray,jt=t=>On(t)==="[object Map]",en=t=>On(t)==="[object Set]",ci=t=>On(t)==="[object Date]",L=t=>typeof t=="function",ne=t=>typeof t=="string",qe=t=>typeof t=="symbol",H=t=>t!==null&&typeof t=="object",go=t=>(H(t)||L(t))&&L(t.then)&&L(t.catch),mo=Object.prototype.toString,On=t=>mo.call(t),wl=t=>On(t).slice(8,-1),bo=t=>On(t)==="[object Object]",Tr=t=>ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pn=Er(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ts=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xl=/-\w/g,Te=Ts(t=>t.replace(xl,e=>e.slice(1).toUpperCase())),Il=/\B([A-Z])/g,Nt=Ts(t=>t.replace(Il,"-$1").toLowerCase()),vo=Ts(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vs=Ts(t=>t?`on${vo(t)}`:""),Fe=(t,e)=>!Object.is(t,e),Xn=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_o=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Cs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ui;const ks=()=>ui||(ui=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ne(s)?Cl(s):Cr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ne(t)||H(t))return t}const El=/;(?![^(]*\))/g,Sl=/:([^]+)/,Tl=/\/\*[^]*?\*\//g;function Cl(t){const e={};return t.replace(Tl,"").split(El).forEach(n=>{if(n){const s=n.split(Sl);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ot(t){let e="";if(ne(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const s=Ot(t[n]);s&&(e+=s+" ")}else if(H(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Al=Er(kl);function yo(t){return!!t||t===""}function Pl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=tn(t[s],e[s]);return n}function tn(t,e){if(t===e)return!0;let n=ci(t),s=ci(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=qe(t),s=qe(e),n||s)return t===e;if(n=M(t),s=M(e),n||s)return n&&s?Pl(t,e):!1;if(n=H(t),s=H(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!tn(t[o],e[o]))return!1}}return String(t)===String(e)}function kr(t,e){return t.findIndex(n=>tn(n,e))}const wo=t=>!!(t&&t.__v_isRef===!0),ie=t=>ne(t)?t:t==null?"":M(t)||H(t)&&(t.toString===mo||!L(t.toString))?wo(t)?ie(t.value):JSON.stringify(t,xo,2):String(t),xo=(t,e)=>wo(e)?xo(t,e.value):jt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Bs(s,i)+" =>"]=r,n),{})}:en(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Bs(n))}:qe(e)?Bs(e):H(e)&&!M(e)&&!bo(e)?String(e):e,Bs=(t,e="")=>{var n;return qe(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ae;class Rl{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ae&&(ae.active?(this.parent=ae,this.index=(ae.scopes||(ae.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const s=this.effects.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}}run(e){if(this._active){const n=ae;try{return ae=this,e()}finally{ae=n}}}on(){++this._on===1&&(this.prevScope=ae,ae=this)}off(){if(this._on>0&&--this._on===0){if(ae===this)ae=this.prevScope;else{let e=ae;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,s=r.length;n<s;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ol(){return ae}let X;const Hs=new WeakSet;class Io{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ae&&(ae.active?ae.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hs.has(this)&&(Hs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||So(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,di(this),To(this);const e=X,n=Ce;X=this,Ce=!0;try{return this.fn()}finally{Co(this),X=e,Ce=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rr(e);this.deps=this.depsTail=void 0,di(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ir(this)&&this.run()}get dirty(){return ir(this)}}let Eo=0,gn,mn;function So(t,e=!1){if(t.flags|=8,e){t.next=mn,mn=t;return}t.next=gn,gn=t}function Ar(){Eo++}function Pr(){if(--Eo>0)return;if(mn){let e=mn;for(mn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;gn;){let e=gn;for(gn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function To(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Co(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Rr(s),Ml(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function ir(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ko(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ko(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===wn)||(t.globalVersion=wn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ir(t))))return;t.flags|=2;const e=t.dep,n=X,s=Ce;X=t,Ce=!0;try{To(t);const r=t.fn(t._value);(e.version===0||Fe(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{X=n,Ce=s,Co(t),t.flags&=-3}}function Rr(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Rr(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ml(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ce=!0;const Ao=[];function tt(){Ao.push(Ce),Ce=!1}function nt(){const t=Ao.pop();Ce=t===void 0?!0:t}function di(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=X;X=void 0;try{e()}finally{X=n}}}let wn=0;class Nl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Or{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!X||!Ce||X===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==X)n=this.activeLink=new Nl(X,this),X.deps?(n.prevDep=X.depsTail,X.depsTail.nextDep=n,X.depsTail=n):X.deps=X.depsTail=n,Po(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=X.depsTail,n.nextDep=void 0,X.depsTail.nextDep=n,X.depsTail=n,X.deps===n&&(X.deps=s)}return n}trigger(e){this.version++,wn++,this.notify(e)}notify(e){Ar();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Pr()}}}function Po(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Po(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const or=new WeakMap,Ct=Symbol(""),ar=Symbol(""),xn=Symbol("");function le(t,e,n){if(Ce&&X){let s=or.get(t);s||or.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Or),r.map=s,r.key=n),r.track()}}function Ye(t,e,n,s,r,i){const o=or.get(t);if(!o){wn++;return}const a=l=>{l&&l.trigger()};if(Ar(),e==="clear")o.forEach(a);else{const l=M(t),u=l&&Tr(n);if(l&&n==="length"){const c=Number(s);o.forEach((p,w)=>{(w==="length"||w===xn||!qe(w)&&w>=c)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(xn)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Ct)),jt(t)&&a(o.get(ar)));break;case"delete":l||(a(o.get(Ct)),jt(t)&&a(o.get(ar)));break;case"set":jt(t)&&a(o.get(Ct));break}}Pr()}function Lt(t){const e=V(t);return e===t?e:(le(e,"iterate",xn),Se(t)?e:e.map(ke))}function As(t){return le(t=V(t),"iterate",xn),t}function Ue(t,e){return st(t)?Gt(kt(t)?ke(e):e):ke(e)}const Dl={__proto__:null,[Symbol.iterator](){return Ws(this,Symbol.iterator,t=>Ue(this,t))},concat(...t){return Lt(this).concat(...t.map(e=>M(e)?Lt(e):e))},entries(){return Ws(this,"entries",t=>(t[1]=Ue(this,t[1]),t))},every(t,e){return Ke(this,"every",t,e,void 0,arguments)},filter(t,e){return Ke(this,"filter",t,e,n=>n.map(s=>Ue(this,s)),arguments)},find(t,e){return Ke(this,"find",t,e,n=>Ue(this,n),arguments)},findIndex(t,e){return Ke(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ke(this,"findLast",t,e,n=>Ue(this,n),arguments)},findLastIndex(t,e){return Ke(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ke(this,"forEach",t,e,void 0,arguments)},includes(...t){return qs(this,"includes",t)},indexOf(...t){return qs(this,"indexOf",t)},join(t){return Lt(this).join(t)},lastIndexOf(...t){return qs(this,"lastIndexOf",t)},map(t,e){return Ke(this,"map",t,e,void 0,arguments)},pop(){return cn(this,"pop")},push(...t){return cn(this,"push",t)},reduce(t,...e){return fi(this,"reduce",t,e)},reduceRight(t,...e){return fi(this,"reduceRight",t,e)},shift(){return cn(this,"shift")},some(t,e){return Ke(this,"some",t,e,void 0,arguments)},splice(...t){return cn(this,"splice",t)},toReversed(){return Lt(this).toReversed()},toSorted(t){return Lt(this).toSorted(t)},toSpliced(...t){return Lt(this).toSpliced(...t)},unshift(...t){return cn(this,"unshift",t)},values(){return Ws(this,"values",t=>Ue(this,t))}};function Ws(t,e,n){const s=As(t),r=s[e]();return s!==t&&!Se(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Ll=Array.prototype;function Ke(t,e,n,s,r,i){const o=As(t),a=o!==t&&!Se(t),l=o[e];if(l!==Ll[e]){const p=l.apply(t,i);return a?ke(p):p}let u=n;o!==t&&(a?u=function(p,w){return n.call(this,Ue(t,p),w,t)}:n.length>2&&(u=function(p,w){return n.call(this,p,w,t)}));const c=l.call(o,u,s);return a&&r?r(c):c}function fi(t,e,n,s){const r=As(t),i=r!==t&&!Se(t);let o=n,a=!1;r!==t&&(i?(a=s.length===0,o=function(u,c,p){return a&&(a=!1,u=Ue(t,u)),n.call(this,u,Ue(t,c),p,t)}):n.length>3&&(o=function(u,c,p){return n.call(this,u,c,p,t)}));const l=r[e](o,...s);return a?Ue(t,l):l}function qs(t,e,n){const s=V(t);le(s,"iterate",xn);const r=s[e](...n);return(r===-1||r===!1)&&Dr(n[0])?(n[0]=V(n[0]),s[e](...n)):r}function cn(t,e,n=[]){tt(),Ar();const s=V(t)[e].apply(t,n);return Pr(),nt(),s}const Ul=Er("__proto__,__v_isRef,__isVue"),Ro=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qe));function $l(t){qe(t)||(t=String(t));const e=V(this);return le(e,"has",t),e.hasOwnProperty(t)}class Oo{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Gl:Lo:i?Do:No).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=M(e);if(!r){let l;if(o&&(l=Dl[n]))return l;if(n==="hasOwnProperty")return $l}const a=Reflect.get(e,n,ce(e)?e:s);if((qe(n)?Ro.has(n):Ul(n))||(r||le(e,"get",n),i))return a;if(ce(a)){const l=o&&Tr(n)?a:a.value;return r&&H(l)?cr(l):l}return H(a)?r?cr(a):nn(a):a}}class Mo extends Oo{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=M(e)&&Tr(n);if(!this._isShallow){const u=st(i);if(!Se(s)&&!st(s)&&(i=V(i),s=V(s)),!o&&ce(i)&&!ce(s))return u||(i.value=s),!0}const a=o?Number(n)<e.length:B(e,n),l=Reflect.set(e,n,s,ce(e)?e:r);return e===V(r)&&l&&(a?Fe(s,i)&&Ye(e,"set",n,s):Ye(e,"add",n,s)),l}deleteProperty(e,n){const s=B(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Ye(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!qe(n)||!Ro.has(n))&&le(e,"has",n),s}ownKeys(e){return le(e,"iterate",M(e)?"length":Ct),Reflect.ownKeys(e)}}class Fl extends Oo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jl=new Mo,Vl=new Fl,Bl=new Mo(!0);const lr=t=>t,qn=t=>Reflect.getPrototypeOf(t);function Hl(t,e,n){return function(...s){const r=this.__v_raw,i=V(r),o=jt(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...s),c=n?lr:e?Gt:ke;return!e&&le(i,"iterate",l?ar:Ct),ue(Object.create(u),{next(){const{value:p,done:w}=u.next();return w?{value:p,done:w}:{value:a?[c(p[0]),c(p[1])]:c(p),done:w}}})}}function zn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Wl(t,e){const n={get(r){const i=this.__v_raw,o=V(i),a=V(r);t||(Fe(r,a)&&le(o,"get",r),le(o,"get",a));const{has:l}=qn(o),u=e?lr:t?Gt:ke;if(l.call(o,r))return u(i.get(r));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&le(V(r),"iterate",Ct),r.size},has(r){const i=this.__v_raw,o=V(i),a=V(r);return t||(Fe(r,a)&&le(o,"has",r),le(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=V(a),u=e?lr:t?Gt:ke;return!t&&le(l,"iterate",Ct),a.forEach((c,p)=>r.call(i,u(c),u(p),o))}};return ue(n,t?{add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear")}:{add(r){const i=V(this),o=qn(i),a=V(r),l=!e&&!Se(r)&&!st(r)?a:r;return o.has.call(i,l)||Fe(r,l)&&o.has.call(i,r)||Fe(a,l)&&o.has.call(i,a)||(i.add(l),Ye(i,"add",l,l)),this},set(r,i){!e&&!Se(i)&&!st(i)&&(i=V(i));const o=V(this),{has:a,get:l}=qn(o);let u=a.call(o,r);u||(r=V(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,i),u?Fe(i,c)&&Ye(o,"set",r,i):Ye(o,"add",r,i),this},delete(r){const i=V(this),{has:o,get:a}=qn(i);let l=o.call(i,r);l||(r=V(r),l=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return l&&Ye(i,"delete",r,void 0),u},clear(){const r=V(this),i=r.size!==0,o=r.clear();return i&&Ye(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Hl(r,t,e)}),n}function Mr(t,e){const n=Wl(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(B(n,r)&&r in s?n:s,r,i)}const ql={get:Mr(!1,!1)},zl={get:Mr(!1,!0)},Kl={get:Mr(!0,!1)};const No=new WeakMap,Do=new WeakMap,Lo=new WeakMap,Gl=new WeakMap;function Jl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nn(t){return st(t)?t:Nr(t,!1,jl,ql,No)}function Yl(t){return Nr(t,!1,Bl,zl,Do)}function cr(t){return Nr(t,!0,Vl,Kl,Lo)}function Nr(t,e,n,s,r){if(!H(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=r.get(t);if(i)return i;const o=Jl(wl(t));if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function kt(t){return st(t)?kt(t.__v_raw):!!(t&&t.__v_isReactive)}function st(t){return!!(t&&t.__v_isReadonly)}function Se(t){return!!(t&&t.__v_isShallow)}function Dr(t){return t?!!t.__v_raw:!1}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function Xl(t){return!B(t,"__v_skip")&&Object.isExtensible(t)&&_o(t,"__v_skip",!0),t}const ke=t=>H(t)?nn(t):t,Gt=t=>H(t)?cr(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function ve(t){return Ql(t,!1)}function Ql(t,e){return ce(t)?t:new Zl(t,e)}class Zl{constructor(e,n){this.dep=new Or,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:V(e),this._value=n?e:ke(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Se(e)||st(e);e=s?e:V(e),Fe(e,n)&&(this._rawValue=e,this._value=s?e:ke(e),this.dep.trigger())}}function A(t){return ce(t)?t.value:t}const ec={get:(t,e,n)=>e==="__v_raw"?t:A(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ce(r)&&!ce(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Uo(t){return kt(t)?t:new Proxy(t,ec)}class tc{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Or(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&X!==this)return So(this,!0),!0}get value(){const e=this.dep.track();return ko(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nc(t,e,n=!1){let s,r;return L(t)?s=t:(s=t.get,r=t.set),new tc(s,r,n)}const Kn={},os=new WeakMap;let St;function sc(t,e=!1,n=St){if(n){let s=os.get(n);s||os.set(n,s=[]),s.push(t)}}function rc(t,e,n=J){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,u=R=>r?R:Se(R)||r===!1||r===0?Xe(R,1):Xe(R);let c,p,w,E,T=!1,C=!1;if(ce(t)?(p=()=>t.value,T=Se(t)):kt(t)?(p=()=>u(t),T=!0):M(t)?(C=!0,T=t.some(R=>kt(R)||Se(R)),p=()=>t.map(R=>{if(ce(R))return R.value;if(kt(R))return u(R);if(L(R))return l?l(R,2):R()})):L(t)?e?p=l?()=>l(t,2):t:p=()=>{if(w){tt();try{w()}finally{nt()}}const R=St;St=c;try{return l?l(t,3,[E]):t(E)}finally{St=R}}:p=Be,e&&r){const R=p,te=r===!0?1/0:r;p=()=>Xe(R(),te)}const Z=Ol(),z=()=>{c.stop(),Z&&Z.active&&Sr(Z.effects,c)};if(i&&e){const R=e;e=(...te)=>{const me=R(...te);return z(),me}}let U=C?new Array(t.length).fill(Kn):Kn;const j=R=>{if(!(!(c.flags&1)||!c.dirty&&!R))if(e){const te=c.run();if(R||r||T||(C?te.some((me,_e)=>Fe(me,U[_e])):Fe(te,U))){w&&w();const me=St;St=c;try{const _e=[te,U===Kn?void 0:C&&U[0]===Kn?[]:U,E];U=te,l?l(e,3,_e):e(..._e)}finally{St=me}}}else c.run()};return a&&a(j),c=new Io(p),c.scheduler=o?()=>o(j,!1):j,E=R=>sc(R,!1,c),w=c.onStop=()=>{const R=os.get(c);if(R){if(l)l(R,4);else for(const te of R)te();os.delete(c)}},e?s?j(!0):U=c.run():o?o(j.bind(null,!0),!0):c.run(),z.pause=c.pause.bind(c),z.resume=c.resume.bind(c),z.stop=z,z}function Xe(t,e=1/0,n){if(e<=0||!H(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ce(t))Xe(t.value,e,n);else if(M(t))for(let s=0;s<t.length;s++)Xe(t[s],e,n);else if(en(t)||jt(t))t.forEach(s=>{Xe(s,e,n)});else if(bo(t)){for(const s in t)Xe(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Xe(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mn(t,e,n,s){try{return s?t(...s):t()}catch(r){Ps(r,e,n)}}function Ae(t,e,n,s){if(L(t)){const r=Mn(t,e,n,s);return r&&go(r)&&r.catch(i=>{Ps(i,e,n)}),r}if(M(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Ae(t[i],e,n,s));return r}}function Ps(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||J;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](t,l,u)===!1)return}a=a.parent}if(i){tt(),Mn(i,null,10,[t,l,u]),nt();return}}ic(t,n,r,s,o)}function ic(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const he=[];let Le=-1;const Vt=[];let dt=null,Ut=0;const $o=Promise.resolve();let as=null;function Fo(t){const e=as||$o;return t?e.then(this?t.bind(this):t):e}function oc(t){let e=Le+1,n=he.length;for(;e<n;){const s=e+n>>>1,r=he[s],i=In(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Lr(t){if(!(t.flags&1)){const e=In(t),n=he[he.length-1];!n||!(t.flags&2)&&e>=In(n)?he.push(t):he.splice(oc(e),0,t),t.flags|=1,jo()}}function jo(){as||(as=$o.then(Bo))}function ac(t){if(!M(t))dt&&t.id===-1?dt.splice(Ut+1,0,t):t.flags&1||(Vt.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Vt.push(t[e]);jo()}function hi(t,e,n=Le+1){for(;n<he.length;n++){const s=he[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;he.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Vo(t){if(Vt.length){const e=[...new Set(Vt)].sort((n,s)=>In(n)-In(s));if(Vt.length=0,dt){for(let n=0;n<e.length;n++)dt.push(e[n]);return}for(dt=e,Ut=0;Ut<dt.length;Ut++){const n=dt[Ut];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}dt=null,Ut=0}}const In=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Bo(t){try{for(Le=0;Le<he.length;Le++){const e=he[Le];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Mn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Le<he.length;Le++){const e=he[Le];e&&(e.flags&=-2)}Le=-1,he.length=0,Vo(),as=null,(he.length||Vt.length)&&Bo()}}let Ee=null,Ho=null;function ls(t){const e=Ee;return Ee=t,Ho=t&&t.type.__scopeId||null,e}function lc(t,e=Ee,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ds(-1);const i=ls(e),o=At.length;let a;try{a=t(...r)}finally{for(let l=At.length;l>o;l--)pa();ls(i),s._d&&ds(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function re(t,e){if(Ee===null)return t;const n=Ds(Ee),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=J]=e[r];i&&(L(i)&&(i={mounted:i,updated:i}),i.deep&&Xe(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function It(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(tt(),Ae(l,n,8,[t.el,a,t,e]),nt())}}function cc(t,e){if(pe){let n=pe.provides;const s=pe.parent&&pe.parent.provides;s===n&&(n=pe.provides=Object.create(s)),n[t]=e}}function Qn(t,e,n=!1){const s=ou();if(s||Ht){let r=Ht?Ht._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&L(e)?e.call(s&&s.proxy):e}}const uc=Symbol.for("v-scx"),dc=()=>Qn(uc);function Bt(t,e,n){return Wo(t,e,n)}function Wo(t,e,n=J){const{immediate:s,deep:r,flush:i,once:o}=n,a=ue({},n),l=e&&s||!e&&i!=="post";let u;if(Cn){if(i==="sync"){const E=dc();u=E.__watcherHandles||(E.__watcherHandles=[])}else if(!l){const E=()=>{};return E.stop=Be,E.resume=Be,E.pause=Be,E}}const c=pe;a.call=(E,T,C)=>Ae(E,c,T,C);let p=!1;i==="post"?a.scheduler=E=>{be(E,c&&c.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(E,T)=>{T?E():Lr(E)}),a.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,c&&(E.id=c.uid,E.i=c))};const w=rc(t,e,a);return Cn&&(u?u.push(w):l&&w()),w}function fc(t,e,n){const s=this.proxy,r=ne(t)?t.includes(".")?qo(s,t):()=>s[t]:t.bind(s,s);let i;L(e)?i=e:(i=e.handler,n=e);const o=Nn(this),a=Wo(r,i.bind(s),n);return o(),a}function qo(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const hc=Symbol("_vte"),Rs=t=>t.__isTeleport,zs=Symbol("_leaveCb");function pc(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==rt){e=n;break}}return e}function zo(t){if(!$r(t))return Rs(t.type)&&t.children?pc(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&L(n.default))return n.default()}}function Ur(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Ur(Rs(n.type)&&zo(n)||n,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ko(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pi(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const cs=new WeakMap;function bn(t,e,n,s,r=!1){if(M(t)){t.forEach((C,Z)=>bn(C,e&&(M(e)?e[Z]:e),n,s,r));return}if(vn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&bn(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Ds(s.component):s.el,o=r?null:i,{i:a,r:l}=t,u=e&&e.r,c=a.refs===J?a.refs={}:a.refs,p=a.setupState,w=V(p),E=p===J?po:C=>pi(c,C)?!1:B(w,C),T=(C,Z)=>!(Z&&pi(c,Z));if(u!=null&&u!==l){if(gi(e),ne(u))c[u]=null,E(u)&&(p[u]=null);else if(ce(u)){const C=e;T(u,C.k)&&(u.value=null),C.k&&(c[C.k]=null)}}if(L(l))Mn(l,a,12,[o,c]);else{const C=ne(l),Z=ce(l);if(C||Z){const z=()=>{if(t.f){const U=C?E(l)?p[l]:c[l]:T()||!t.k?l.value:c[t.k];if(r)M(U)&&Sr(U,i);else if(M(U))U.includes(i)||U.push(i);else if(C)c[l]=[i],E(l)&&(p[l]=c[l]);else{const j=[i];T(l,t.k)&&(l.value=j),t.k&&(c[t.k]=j)}}else C?(c[l]=o,E(l)&&(p[l]=o)):Z&&(T(l,t.k)&&(l.value=o),t.k&&(c[t.k]=o))};if(o){const U=()=>{z(),cs.delete(t)};U.id=-1,cs.set(t,U),be(U,n)}else gi(t),z()}}}function gi(t){const e=cs.get(t);e&&(e.flags|=8,cs.delete(t))}ks().requestIdleCallback;ks().cancelIdleCallback;const vn=t=>!!t.type.__asyncLoader,$r=t=>t.type.__isKeepAlive;function gc(t,e){Go(t,"a",e)}function mc(t,e){Go(t,"da",e)}function Go(t,e,n=pe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Os(e,s,n),n){let r=n.parent;for(;r&&r.parent;)$r(r.parent.vnode)&&bc(s,e,n,r),r=r.parent}}function bc(t,e,n,s){const r=Os(e,t,s,!0);Yo(()=>{Sr(s[e],r)},n)}function Os(t,e,n=pe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{tt();const a=Nn(n),l=Ae(e,n,t,o);return a(),nt(),l});return s?r.unshift(i):r.push(i),i}}const lt=t=>(e,n=pe)=>{(!Cn||t==="sp")&&Os(t,(...s)=>e(...s),n)},vc=lt("bm"),Jo=lt("m"),_c=lt("bu"),yc=lt("u"),wc=lt("bum"),Yo=lt("um"),xc=lt("sp"),Ic=lt("rtg"),Ec=lt("rtc");function Sc(t,e=pe){Os("ec",t,e)}const Tc=Symbol.for("v-ndc");function Cc(t,e,n,s){let r;const i=n,o=M(t);if(o||ne(t)){const a=o&&kt(t);let l=!1,u=!1;a&&(l=!Se(t),u=st(t),t=As(t)),r=new Array(t.length);for(let c=0,p=t.length;c<p;c++)r[c]=e(l?u?Gt(ke(t[c])):ke(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(H(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,i)}}else r=[];return r}const ur=t=>t?ba(t)?Ds(t):ur(t.parent):null,_n=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ur(t.parent),$root:t=>ur(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Qo(t),$forceUpdate:t=>t.f||(t.f=()=>{Lr(t.update)}),$nextTick:t=>t.n||(t.n=Fo.bind(t.proxy)),$watch:t=>fc.bind(t)}),Ks=(t,e)=>t!==J&&!t.__isScriptSetup&&B(t,e),kc={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ks(s,e))return o[e]=1,s[e];if(r!==J&&B(r,e))return o[e]=2,r[e];if(B(i,e))return o[e]=3,i[e];if(n!==J&&B(n,e))return o[e]=4,n[e];dr&&(o[e]=0)}}const u=_n[e];let c,p;if(u)return e==="$attrs"&&le(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==J&&B(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,B(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ks(r,e)?(r[e]=n,!0):s!==J&&B(s,e)?(s[e]=n,!0):B(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},a){let l;return!!(n[a]||t!==J&&a[0]!=="$"&&B(t,a)||Ks(e,a)||B(i,a)||B(s,a)||B(_n,a)||B(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:B(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mi(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dr=!0;function Ac(t){const e=Qo(t),n=t.proxy,s=t.ctx;dr=!1,e.beforeCreate&&bi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:p,mounted:w,beforeUpdate:E,updated:T,activated:C,deactivated:Z,beforeDestroy:z,beforeUnmount:U,destroyed:j,unmounted:R,render:te,renderTracked:me,renderTriggered:_e,errorCaptured:Pe,serverPrefetch:ct,expose:ze,inheritAttrs:rn,components:Vn,directives:Bn,filters:Fs}=e;if(u&&Pc(u,s,null),o)for(const ee in o){const Y=o[ee];L(Y)&&(s[ee]=Y.bind(n))}if(r){const ee=r.call(n,n);H(ee)&&(t.data=nn(ee))}if(dr=!0,i)for(const ee in i){const Y=i[ee],wt=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Be,Hn=!L(Y)&&L(Y.set)?Y.set.bind(n):Be,xt=fu({get:wt,set:Hn});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>xt.value,set:Re=>xt.value=Re})}if(a)for(const ee in a)Xo(a[ee],s,n,ee);if(l){const ee=L(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(Y=>{cc(Y,ee[Y])})}c&&bi(c,t,"c");function de(ee,Y){M(Y)?Y.forEach(wt=>ee(wt.bind(n))):Y&&ee(Y.bind(n))}if(de(vc,p),de(Jo,w),de(_c,E),de(yc,T),de(gc,C),de(mc,Z),de(Sc,Pe),de(Ec,me),de(Ic,_e),de(wc,U),de(Yo,R),de(xc,ct),M(ze))if(ze.length){const ee=t.exposed||(t.exposed={});ze.forEach(Y=>{Object.defineProperty(ee,Y,{get:()=>n[Y],set:wt=>n[Y]=wt,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===Be&&(t.render=te),rn!=null&&(t.inheritAttrs=rn),Vn&&(t.components=Vn),Bn&&(t.directives=Bn),ct&&Ko(t)}function Pc(t,e,n=Be){M(t)&&(t=fr(t));for(const s in t){const r=t[s];let i;H(r)?"default"in r?i=Qn(r.from||s,r.default,!0):i=Qn(r.from||s):i=Qn(r),ce(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function bi(t,e,n){Ae(M(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xo(t,e,n,s){let r=s.includes(".")?qo(n,s):()=>n[s];if(ne(t)){const i=e[t];L(i)&&Bt(r,i)}else if(L(t))Bt(r,t.bind(n));else if(H(t))if(M(t))t.forEach(i=>Xo(i,e,n,s));else{const i=L(t.handler)?t.handler.bind(n):e[t.handler];L(i)&&Bt(r,i,t)}}function Qo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(u=>us(l,u,o,!0)),us(l,e,o)),H(e)&&i.set(e,l),l}function us(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&us(t,i,n,!0),r&&r.forEach(o=>us(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Rc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Rc={data:vi,props:_i,emits:_i,methods:fn,computed:fn,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:fn,directives:fn,watch:Mc,provide:vi,inject:Oc};function vi(t,e){return e?t?function(){return ue(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function Oc(t,e){return fn(fr(t),fr(e))}function fr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fe(t,e){return t?[...new Set([].concat(t,e))]:e}function fn(t,e){return t?ue(Object.create(null),t,e):e}function _i(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:ue(Object.create(null),mi(t),mi(e??{})):e}function Mc(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const s in e)n[s]=fe(t[s],e[s]);return n}function Zo(){return{app:null,config:{isNativeTag:po,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nc=0;function Dc(t,e){return function(s,r=null){L(s)||(s=ue({},s)),r!=null&&!H(r)&&(r=null);const i=Zo(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:Nc++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:hu,get config(){return i.config},set config(c){},use(c,...p){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(u,...p)):L(c)&&(o.add(c),c(u,...p))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,p){return p?(i.components[c]=p,u):i.components[c]},directive(c,p){return p?(i.directives[c]=p,u):i.directives[c]},mount(c,p,w){if(!l){const E=u._ceVNode||k(s,r);return E.appContext=i,w===!0?w="svg":w===!1&&(w=void 0),t(E,c,w),l=!0,u._container=c,c.__vue_app__=u,Ds(E.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Ae(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,p){return i.provides[c]=p,u},runWithContext(c){const p=Ht;Ht=u;try{return c()}finally{Ht=p}}};return u}}let Ht=null;const Lc=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Te(e)}Modifiers`]||t[`${Nt(e)}Modifiers`];function Uc(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||J;let r=n;const i=e.startsWith("update:"),o=i&&Lc(s,e.slice(7));o&&(o.trim&&(r=n.map(c=>ne(c)?c.trim():c)),o.number&&(r=n.map(Cs)));let a,l=s[a=Vs(e)]||s[a=Vs(Te(e))];!l&&i&&(l=s[a=Vs(Nt(e))]),l&&Ae(l,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ae(u,t,6,r)}}const $c=new WeakMap;function ea(t,e,n=!1){const s=n?$c:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!L(t)){const l=u=>{const c=ea(u,e,!0);c&&(a=!0,ue(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(H(t)&&s.set(t,null),null):(M(i)?i.forEach(l=>o[l]=null):ue(o,i),H(t)&&s.set(t,o),o)}function Ms(t,e){return!t||!Es(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),B(t,e[0].toLowerCase()+e.slice(1))||B(t,Nt(e))||B(t,e))}function yi(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:p,data:w,setupState:E,ctx:T,inheritAttrs:C}=t,Z=ls(t);let z,U;try{if(n.shapeFlag&4){const R=r||s,te=R;z=$e(u.call(te,R,c,p,E,w,T)),U=a}else{const R=e;z=$e(R.length>1?R(p,{attrs:a,slots:o,emit:l}):R(p,null)),U=e.props?a:Fc(a)}}catch(R){At.length=0,Ps(R,t,1),z=k(rt)}let j=z;if(U&&C!==!1){const R=Object.keys(U),{shapeFlag:te}=j;R.length&&te&7&&(i&&R.some(Ss)&&(U=jc(U,i)),j=Jt(j,U,!1,!0))}if(n.dirs&&(j=Jt(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition){const R=Rs(j.type)&&zo(j)||j;Ur(R,n.transition)}return z=j,ls(Z),z}const Fc=t=>{let e;for(const n in t)(n==="class"||n==="style"||Es(n))&&((e||(e={}))[n]=t[n]);return e},jc=(t,e)=>{const n={};for(const s in t)(!Ss(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Vc(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?wi(s,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let p=0;p<c.length;p++){const w=c[p];if(ta(o,s,w)&&!Ms(u,w))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?wi(s,o,u):!0:!!o;return!1}function wi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(ta(e,t,i)&&!Ms(n,i))return!0}return!1}function ta(t,e,n){const s=t[n],r=e[n];return n==="style"&&H(s)&&H(r)?!tn(s,r):s!==r}function Bc({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const na={},sa=()=>Object.create(na),ra=t=>Object.getPrototypeOf(t)===na;function Hc(t,e,n,s=!1){const r={},i=sa();t.propsDefaults=Object.create(null),ia(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Yl(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Wc(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=V(r),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let p=0;p<c.length;p++){let w=c[p];if(Ms(t.emitsOptions,w))continue;const E=e[w];if(l)if(B(i,w))E!==i[w]&&(i[w]=E,u=!0);else{const T=Te(w);r[T]=hr(l,a,T,E,t,!1)}else E!==i[w]&&(i[w]=E,u=!0)}}}else{ia(t,e,r,i)&&(u=!0);let c;for(const p in a)(!e||!B(e,p)&&((c=Nt(p))===p||!B(e,c)))&&(l?n&&(n[p]!==void 0||n[c]!==void 0)&&(r[p]=hr(l,a,p,void 0,t,!0)):delete r[p]);if(i!==a)for(const p in i)(!e||!B(e,p))&&(delete i[p],u=!0)}u&&Ye(t.attrs,"set","")}function ia(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(pn(l))continue;const u=e[l];let c;r&&B(r,c=Te(l))?!i||!i.includes(c)?n[c]=u:(a||(a={}))[c]=u:Ms(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(i){const l=V(n),u=a||J;for(let c=0;c<i.length;c++){const p=i[c];n[p]=hr(r,l,p,u[p],t,!B(u,p))}}return o}function hr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=B(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const c=Nn(r);s=u[n]=l.call(null,e),c()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Nt(n))&&(s=!0))}return s}const qc=new WeakMap;function oa(t,e,n=!1){const s=n?qc:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!L(t)){const c=p=>{l=!0;const[w,E]=oa(p,e,!0);ue(o,w),E&&a.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!i&&!l)return H(t)&&s.set(t,Ft),Ft;if(M(i))for(let c=0;c<i.length;c++){const p=Te(i[c]);xi(p)&&(o[p]=J)}else if(i)for(const c in i){const p=Te(c);if(xi(p)){const w=i[c],E=o[p]=M(w)||L(w)?{type:w}:ue({},w),T=E.type;let C=!1,Z=!0;if(M(T))for(let z=0;z<T.length;++z){const U=T[z],j=L(U)&&U.name;if(j==="Boolean"){C=!0;break}else j==="String"&&(Z=!1)}else C=L(T)&&T.name==="Boolean";E[0]=C,E[1]=Z,(C||B(E,"default"))&&a.push(p)}}const u=[o,a];return H(t)&&s.set(t,u),u}function xi(t){return t[0]!=="$"&&!pn(t)}const Fr=t=>t==="_"||t==="_ctx"||t==="$stable",jr=t=>M(t)?t.map($e):[$e(t)],zc=(t,e,n)=>{if(e._n)return e;const s=lc((...r)=>jr(e(...r)),n);return s._c=!1,s},aa=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Fr(r))continue;const i=t[r];if(L(i))e[r]=zc(r,i,s);else if(i!=null){const o=jr(i);e[r]=()=>o}}},la=(t,e)=>{const n=jr(e);t.slots.default=()=>n},ca=(t,e,n)=>{for(const s in e)(n||!Fr(s))&&(t[s]=e[s])},Kc=(t,e,n)=>{const s=t.slots=sa();if(t.vnode.shapeFlag&32){const r=e._;r?(ca(s,e,n),n&&_o(s,"_",r,!0)):aa(e,s)}else e&&la(t,e)},Gc=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=J;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:ca(r,e,n):(i=!e.$stable,aa(e,r)),o=e}else e&&(la(t,e),o={default:1});if(i)for(const a in r)!Fr(a)&&o[a]==null&&delete r[a]},be=Zc;function Jc(t){return Yc(t)}function Yc(t,e){const n=ks();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:p,nextSibling:w,setScopeId:E=Be,insertStaticContent:T}=t,C=(d,h,g,_=null,v=null,m=null,I=void 0,x=null,y=!!h.dynamicChildren)=>{if(d===h)return;d&&!un(d,h)&&(_=Wn(d),Re(d,v,m,!0),d=null),h.patchFlag===-2&&(y=!1,h.dynamicChildren=null);const{type:b,ref:O,shapeFlag:S}=h;switch(b){case Ns:Z(d,h,g,_);break;case rt:z(d,h,g,_);break;case Zn:d==null&&U(h,g,_,I);break;case Ie:Vn(d,h,g,_,v,m,I,x,y);break;default:S&1?te(d,h,g,_,v,m,I,x,y):S&6?Bn(d,h,g,_,v,m,I,x,y):(S&64||S&128)&&b.process(d,h,g,_,v,m,I,x,y,an)}O!=null&&v?bn(O,d&&d.ref,m,h||d,!h):O==null&&d&&d.ref!=null&&bn(d.ref,null,m,d,!0)},Z=(d,h,g,_)=>{if(d==null)s(h.el=a(h.children),g,_);else{const v=h.el=d.el;h.children!==d.children&&u(v,h.children)}},z=(d,h,g,_)=>{d==null?s(h.el=l(h.children||""),g,_):h.el=d.el},U=(d,h,g,_)=>{[d.el,d.anchor]=T(d.children,h,g,_,d.el,d.anchor)},j=({el:d,anchor:h},g,_)=>{let v;for(;d&&d!==h;)v=w(d),s(d,g,_),d=v;s(h,g,_)},R=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=w(d),r(d),d=g;r(h)},te=(d,h,g,_,v,m,I,x,y)=>{if(h.type==="svg"?I="svg":h.type==="math"&&(I="mathml"),d==null)me(h,g,_,v,m,I,x,y);else{const b=d.el&&d.el._isVueCE?d.el:null;try{b&&b._beginPatch(),ct(d,h,v,m,I,x,y)}finally{b&&b._endPatch()}}},me=(d,h,g,_,v,m,I,x)=>{let y,b;const{props:O,shapeFlag:S,transition:P,dirs:N}=d;if(y=d.el=o(d.type,m,O&&O.is,O),S&8?c(y,d.children):S&16&&Pe(d.children,y,null,_,v,Gs(d,m),I,x),N&&It(d,null,_,"created"),_e(y,d,d.scopeId,I,_),O){for(const K in O)K!=="value"&&!pn(K)&&i(y,K,null,O[K],m,_);"value"in O&&i(y,"value",null,O.value,m),(b=O.onVnodeBeforeMount)&&De(b,_,d)}N&&It(d,null,_,"beforeMount");const $=Xc(v,P);$&&P.beforeEnter(y),s(y,h,g),((b=O&&O.onVnodeMounted)||$||N)&&be(()=>{try{b&&De(b,_,d),$&&P.enter(y),N&&It(d,null,_,"mounted")}finally{}},v)},_e=(d,h,g,_,v)=>{if(g&&E(d,g),_)for(let m=0;m<_.length;m++)E(d,_[m]);if(v){let m=v.subTree;if(h===m||ha(m.type)&&(m.ssContent===h||m.ssFallback===h)){const I=v.vnode;_e(d,I,I.scopeId,I.slotScopeIds,v.parent)}}},Pe=(d,h,g,_,v,m,I,x,y=0)=>{for(let b=y;b<d.length;b++){const O=d[b]=x?Je(d[b]):$e(d[b]);C(null,O,h,g,_,v,m,I,x)}},ct=(d,h,g,_,v,m,I)=>{const x=h.el=d.el;let{patchFlag:y,dynamicChildren:b,dirs:O}=h;y|=d.patchFlag&16;const S=d.props||J,P=h.props||J;let N;if(g&&Et(g,!1),(N=P.onVnodeBeforeUpdate)&&De(N,g,h,d),O&&It(h,d,g,"beforeUpdate"),g&&Et(g,!0),b&&(!d.dynamicChildren||d.dynamicChildren.length!==b.length)&&(y=0,I=!1,b=null),(S.innerHTML&&P.innerHTML==null||S.textContent&&P.textContent==null)&&c(x,""),b?ze(d.dynamicChildren,b,x,g,_,Gs(h,v),m):I||Y(d,h,x,null,g,_,Gs(h,v),m,!1),y>0){if(y&16)rn(x,S,P,g,v);else if(y&2&&S.class!==P.class&&i(x,"class",null,P.class,v),y&4&&i(x,"style",S.style,P.style,v),y&8){const $=h.dynamicProps;for(let K=0;K<$.length;K++){const W=$[K],se=S[W],oe=P[W];(oe!==se||W==="value")&&i(x,W,se,oe,v,g)}}y&1&&d.children!==h.children&&c(x,h.children)}else!I&&b==null&&rn(x,S,P,g,v);((N=P.onVnodeUpdated)||O)&&be(()=>{N&&De(N,g,h,d),O&&It(h,d,g,"updated")},_)},ze=(d,h,g,_,v,m,I)=>{for(let x=0;x<h.length;x++){const y=d[x],b=h[x],O=y.el&&(y.type===Ie||!un(y,b)||y.shapeFlag&198)?p(y.el):g;C(y,b,O,null,_,v,m,I,!0)}},rn=(d,h,g,_,v)=>{if(h!==g){if(h!==J)for(const m in h)!pn(m)&&!(m in g)&&i(d,m,h[m],null,v,_);for(const m in g){if(pn(m))continue;const I=g[m],x=h[m];I!==x&&m!=="value"&&i(d,m,x,I,v,_)}"value"in g&&i(d,"value",h.value,g.value,v)}},Vn=(d,h,g,_,v,m,I,x,y)=>{const b=h.el=d?d.el:a(""),O=h.anchor=d?d.anchor:a("");let{patchFlag:S,dynamicChildren:P,slotScopeIds:N}=h;N&&(x=x?x.concat(N):N),d==null?(s(b,g,_),s(O,g,_),Pe(h.children||[],g,O,v,m,I,x,y)):S>0&&S&64&&P&&d.dynamicChildren&&d.dynamicChildren.length===P.length?(ze(d.dynamicChildren,P,g,v,m,I,x),(h.key!=null||v&&h===v.subTree)&&ua(d,h,!0)):Y(d,h,g,O,v,m,I,x,y)},Bn=(d,h,g,_,v,m,I,x,y)=>{h.slotScopeIds=x,d==null?h.shapeFlag&512?v.ctx.activate(h,g,_,I,y):Fs(h,g,_,v,m,I,y):si(d,h,y)},Fs=(d,h,g,_,v,m,I)=>{const x=d.component=iu(d,_,v);if($r(d)&&(x.ctx.renderer=an),au(x,!1,I),x.asyncDep){if(v&&v.registerDep(x,de,I),!d.el){const y=x.subTree=k(rt);z(null,y,h,g),d.placeholder=y.el}}else de(x,d,h,g,v,m,I)},si=(d,h,g)=>{const _=h.component=d.component;if(Vc(d,h,g))if(_.asyncDep&&!_.asyncResolved){ee(_,h,g);return}else _.next=h,_.update();else h.el=d.el,_.vnode=h},de=(d,h,g,_,v,m,I)=>{const x=()=>{if(d.isMounted){let{next:S,bu:P,u:N,parent:$,vnode:K}=d;{const Me=da(d);if(Me){S&&(S.el=K.el,ee(d,S,I)),Me.asyncDep.then(()=>{be(()=>{d.isUnmounted||b()},v)});return}}let W=S,se;Et(d,!1),S?(S.el=K.el,ee(d,S,I)):S=K,P&&Xn(P),(se=S.props&&S.props.onVnodeBeforeUpdate)&&De(se,$,S,K),Et(d,!0);const oe=yi(d),Oe=d.subTree;d.subTree=oe,C(Oe,oe,p(Oe.el),Wn(Oe),d,v,m),S.el=oe.el,W===null&&Bc(d,oe.el),N&&be(N,v),(se=S.props&&S.props.onVnodeUpdated)&&be(()=>De(se,$,S,K),v)}else{let S;const{el:P,props:N}=h,{bm:$,m:K,parent:W,root:se,type:oe}=d,Oe=vn(h);Et(d,!1),$&&Xn($),!Oe&&(S=N&&N.onVnodeBeforeMount)&&De(S,W,h),Et(d,!0);{se.ce&&se.ce._hasShadowRoot()&&se.ce._injectChildStyle(oe,d.parent?d.parent.type:void 0);const Me=d.subTree=yi(d);C(null,Me,g,_,d,v,m),h.el=Me.el}if(K&&be(K,v),!Oe&&(S=N&&N.onVnodeMounted)){const Me=h;be(()=>De(S,W,Me),v)}(h.shapeFlag&256||W&&vn(W.vnode)&&W.vnode.shapeFlag&256)&&d.a&&be(d.a,v),d.isMounted=!0,h=g=_=null}};d.scope.on();const y=d.effect=new Io(x);d.scope.off();const b=d.update=y.run.bind(y),O=d.job=y.runIfDirty.bind(y);O.i=d,O.id=d.uid,y.scheduler=()=>Lr(O),Et(d,!0),b()},ee=(d,h,g)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,Wc(d,h.props,_,g),Gc(d,h.children,g),tt(),hi(d),nt()},Y=(d,h,g,_,v,m,I,x,y=!1)=>{const b=d&&d.children,O=d?d.shapeFlag:0,S=h.children,{patchFlag:P,shapeFlag:N}=h;if(P>0){if(P&128){Hn(b,S,g,_,v,m,I,x,y);return}else if(P&256){wt(b,S,g,_,v,m,I,x,y);return}}N&8?(O&16&&on(b,v,m),S!==b&&c(g,S)):O&16?N&16?Hn(b,S,g,_,v,m,I,x,y):on(b,v,m,!0):(O&8&&c(g,""),N&16&&Pe(S,g,_,v,m,I,x,y))},wt=(d,h,g,_,v,m,I,x,y)=>{d=d||Ft,h=h||Ft;const b=d.length,O=h.length,S=Math.min(b,O);let P;for(P=0;P<S;P++){const N=h[P]=y?Je(h[P]):$e(h[P]);C(d[P],N,g,null,v,m,I,x,y)}b>O?on(d,v,m,!0,!1,S):Pe(h,g,_,v,m,I,x,y,S)},Hn=(d,h,g,_,v,m,I,x,y)=>{let b=0;const O=h.length;let S=d.length-1,P=O-1;for(;b<=S&&b<=P;){const N=d[b],$=h[b]=y?Je(h[b]):$e(h[b]);if(un(N,$))C(N,$,g,null,v,m,I,x,y);else break;b++}for(;b<=S&&b<=P;){const N=d[S],$=h[P]=y?Je(h[P]):$e(h[P]);if(un(N,$))C(N,$,g,null,v,m,I,x,y);else break;S--,P--}if(b>S){if(b<=P){const N=P+1,$=N<O?h[N].el:_;for(;b<=P;)C(null,h[b]=y?Je(h[b]):$e(h[b]),g,$,v,m,I,x,y),b++}}else if(b>P)for(;b<=S;)Re(d[b],v,m,!0),b++;else{const N=b,$=b,K=new Map;for(b=$;b<=P;b++){const ye=h[b]=y?Je(h[b]):$e(h[b]);ye.key!=null&&K.set(ye.key,b)}let W,se=0;const oe=P-$+1;let Oe=!1,Me=0;const ln=new Array(oe);for(b=0;b<oe;b++)ln[b]=0;for(b=N;b<=S;b++){const ye=d[b];if(se>=oe){Re(ye,v,m,!0);continue}let Ne;if(ye.key!=null)Ne=K.get(ye.key);else for(W=$;W<=P;W++)if(ln[W-$]===0&&un(ye,h[W])){Ne=W;break}Ne===void 0?Re(ye,v,m,!0):(ln[Ne-$]=b+1,Ne>=Me?Me=Ne:Oe=!0,C(ye,h[Ne],g,null,v,m,I,x,y),se++)}const oi=Oe?Qc(ln):Ft;for(W=oi.length-1,b=oe-1;b>=0;b--){const ye=$+b,Ne=h[ye],ai=h[ye+1],li=ye+1<O?ai.el||fa(ai):_;ln[b]===0?C(null,Ne,g,li,v,m,I,x,y):Oe&&(W<0||b!==oi[W]?xt(Ne,g,li,2):W--)}}},xt=(d,h,g,_,v=null)=>{const{el:m,type:I,transition:x,children:y,shapeFlag:b}=d;if(b&6){xt(d.component.subTree,h,g,_);return}if(b&128){d.suspense.move(h,g,_);return}if(b&64){I.move(d,h,g,an);return}if(I===Ie){s(m,h,g);for(let S=0;S<y.length;S++)xt(y[S],h,g,_);s(d.anchor,h,g);return}if(I===Zn){j(d,h,g);return}if(_!==2&&b&1&&x)if(_===0)x.persisted&&!m[zs]?s(m,h,g):(x.beforeEnter(m),s(m,h,g),be(()=>x.enter(m),v));else{const{leave:S,delayLeave:P,afterLeave:N}=x,$=()=>{d.ctx.isUnmounted?r(m):s(m,h,g)},K=()=>{const W=m._isLeaving||!!m[zs];m._isLeaving&&m[zs](!0),x.persisted&&!W?$():S(m,()=>{$(),N&&N()})};P?P(m,$,K):K()}else s(m,h,g)},Re=(d,h,g,_=!1,v=!1)=>{const{type:m,props:I,ref:x,children:y,dynamicChildren:b,shapeFlag:O,patchFlag:S,dirs:P,cacheIndex:N,memo:$}=d;if(S===-2&&(v=!1),x!=null&&(tt(),bn(x,null,g,d,!0),nt()),N!=null&&(h.renderCache[N]=void 0),O&256){h.ctx.deactivate(d);return}const K=O&1&&P,W=!vn(d);let se;if(W&&(se=I&&I.onVnodeBeforeUnmount)&&De(se,h,d),O&6)_l(d.component,g,_);else{if(O&128){d.suspense.unmount(g,_);return}K&&It(d,null,h,"beforeUnmount"),O&64?d.type.remove(d,h,g,an,_):b&&!b.hasOnce&&(m!==Ie||S>0&&S&64)?on(b,h,g,!1,!0):(m===Ie&&S&384||!v&&O&16)&&on(y,h,g),_&&ri(d)}const oe=$!=null&&N==null;(W&&(se=I&&I.onVnodeUnmounted)||K||oe)&&be(()=>{se&&De(se,h,d),K&&It(d,null,h,"unmounted"),oe&&(d.el=null)},g)},ri=d=>{const{type:h,el:g,anchor:_,transition:v}=d;if(h===Ie){vl(g,_);return}if(h===Zn){R(d);return}const m=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:I,delayLeave:x}=v,y=()=>I(g,m);x?x(d.el,m,y):y()}else m()},vl=(d,h)=>{let g;for(;d!==h;)g=w(d),r(d),d=g;r(h)},_l=(d,h,g)=>{const{bum:_,scope:v,job:m,subTree:I,um:x,m:y,a:b}=d;Ii(y),Ii(b),_&&Xn(_),v.stop(),m&&(m.flags|=8,Re(I,d,h,g)),x&&be(x,h),be(()=>{d.isUnmounted=!0},h)},on=(d,h,g,_=!1,v=!1,m=0)=>{for(let I=m;I<d.length;I++)Re(d[I],h,g,_,v)},Wn=d=>{if(d.shapeFlag&6)return Wn(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=w(d.anchor||d.el),g=h&&h[hc];return g?w(g):h};let js=!1;const ii=(d,h,g)=>{let _;d==null?h._vnode&&(Re(h._vnode,null,null,!0),_=h._vnode.component):C(h._vnode||null,d,h,null,null,null,g),h._vnode=d,js||(js=!0,hi(_),Vo(),js=!1)},an={p:C,um:Re,m:xt,r:ri,mt:Fs,mc:Pe,pc:Y,pbc:ze,n:Wn,o:t};return{render:ii,hydrate:void 0,createApp:Dc(ii)}}function Gs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Et({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xc(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ua(t,e,n=!1){const s=t.children,r=e.children;if(M(s)&&M(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Je(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ua(o,a)),a.type===Ns&&(a.patchFlag===-1&&(a=r[i]=Je(a)),a.el=o.el),a.type===rt&&!a.el&&(a.el=o.el)}}function Qc(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function da(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:da(e)}function Ii(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function fa(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?fa(e.subTree):null}const ha=t=>t.__isSuspense;function Zc(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):ac(t)}const Ie=Symbol.for("v-fgt"),Ns=Symbol.for("v-txt"),rt=Symbol.for("v-cmt"),Zn=Symbol.for("v-stc"),At=[];let xe=null;function F(t=!1){At.push(xe=t?null:[])}function pa(){At.pop(),xe=At[At.length-1]||null}let En=1;function ds(t,e=!1){En+=t,t<0&&xe&&e&&(xe.hasOnce=!0)}function ga(t){return t.dynamicChildren=En>0?xe||Ft:null,pa(),En>0&&xe&&xe.push(t),t}function q(t,e,n,s,r,i){return ga(f(t,e,n,s,r,i,!0))}function Sn(t,e,n,s,r){return ga(k(t,e,n,s,r,!0))}function fs(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const ma=({key:t})=>t??null,es=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ne(t)||ce(t)||L(t)?{i:Ee,r:t,k:e,f:!!n}:t:null);function f(t,e=null,n=null,s=0,r=null,i=t===Ie?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ma(e),ref:e&&es(e),scopeId:Ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ee};return a?(hs(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),En>0&&!o&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const k=eu;function eu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Tc)&&(t=rt),fs(t)){const a=Jt(t,e,!0);return n&&hs(a,n),En>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(t)]=a:xe.push(a)),a.patchFlag=-2,a}if(du(t)&&(t=t.__vccOpts),e){e=tu(e);let{class:a,style:l}=e;a&&!ne(a)&&(e.class=Ot(a)),H(l)&&(Dr(l)&&!M(l)&&(l=ue({},l)),e.style=Cr(l))}const o=ne(t)?1:ha(t)?128:Rs(t)?64:H(t)?4:L(t)?2:0;return f(t,e,n,s,r,o,i,!0)}function tu(t){return t?Dr(t)||ra(t)?ue({},t):t:null}function Jt(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?nu(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ma(u),ref:e&&e.ref?n&&i?M(i)?i.concat(es(e)):[i,es(e)]:es(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jt(t.ssContent),ssFallback:t.ssFallback&&Jt(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ur(c,l.clone(c)),c}function Pt(t=" ",e=0){return k(Ns,null,t,e)}function Yt(t,e){const n=k(Zn,null,t);return n.staticCount=e,n}function je(t="",e=!1){return e?(F(),Sn(rt,null,t)):k(rt,null,t)}function $e(t){return t==null||typeof t=="boolean"?k(rt):M(t)?k(Ie,null,t.slice()):fs(t)?Je(t):k(Ns,null,String(t))}function Je(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jt(t)}function hs(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),hs(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ra(e)?e._ctx=Ee:r===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(L(e)){if(s&65){hs(t,{default:e});return}e={default:e,_ctx:Ee},n=32}else e=String(e),s&64?(n=16,e=[Pt(e)]):n=8;t.children=e,t.shapeFlag|=n}function nu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ot([e.class,s.class]));else if(r==="style")e.style=Cr([e.style,s.style]);else if(Es(r)){const i=e[r],o=s[r];o&&i!==o&&!(M(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!Ss(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function De(t,e,n,s=null){Ae(t,e,7,[n,s])}const su=Zo();let ru=0;function iu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||su,i={uid:ru++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oa(s,r),emitsOptions:ea(s,r),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Uc.bind(null,i),t.ce&&t.ce(i),i}let pe=null;const ou=()=>pe||Ee;let ps,Tn;{const t=ks(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ps=e("__VUE_INSTANCE_SETTERS__",n=>pe=n),Tn=e("__VUE_SSR_SETTERS__",n=>Cn=n)}const Nn=t=>{const e=pe;return ps(t),t.scope.on(),()=>{t.scope.off(),ps(e)}},Ei=()=>{pe&&pe.scope.off(),ps(null)};function ba(t){return t.vnode.shapeFlag&4}let Cn=!1;function au(t,e=!1,n=!1){e&&Tn(e);const{props:s,children:r}=t.vnode,i=ba(t);Hc(t,s,i,e),Kc(t,r,n||e);const o=i?lu(t,e):void 0;return e&&Tn(!1),o}function lu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,kc);const{setup:s}=n;if(s){tt();const r=t.setupContext=s.length>1?uu(t):null,i=Nn(t),o=Mn(s,t,0,[t.props,r]),a=go(o);if(nt(),i(),(a||t.sp)&&!vn(t)&&Ko(t),a){if(o.then(Ei,Ei),e)return o.then(l=>{Tn(!0);try{Si(t,l,e)}finally{Tn(!1)}}).catch(l=>{Ps(l,t,0)});t.asyncDep=o}else Si(t,o)}else va(t)}function Si(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:H(e)&&(t.setupState=Uo(e)),va(t)}function va(t,e,n){const s=t.type;t.render||(t.render=s.render||Be);{const r=Nn(t);tt();try{Ac(t)}finally{nt(),r()}}}const cu={get(t,e){return le(t,"get",""),t[e]}};function uu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cu),slots:t.slots,emit:t.emit,expose:e}}function Ds(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Uo(Xl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _n)return _n[n](t)},has(e,n){return n in e||n in _n}})):t.proxy}function du(t){return L(t)&&"__vccOpts"in t}const fu=(t,e)=>nc(t,e,Cn);function pr(t,e,n){try{ds(-1);const s=arguments.length;return s===2?H(e)&&!M(e)?fs(e)?k(t,null,[e]):k(t,e):k(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&fs(n)&&(n=[n]),k(t,e,n))}finally{ds(1)}}const hu="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gr;const Ti=typeof window<"u"&&window.trustedTypes;if(Ti)try{gr=Ti.createPolicy("vue",{createHTML:t=>t})}catch{}const _a=gr?t=>gr.createHTML(t):t=>t,pu="http://www.w3.org/2000/svg",gu="http://www.w3.org/1998/Math/MathML",Ge=typeof document<"u"?document:null,Ci=Ge&&Ge.createElement("template"),mu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Ge.createElementNS(pu,t):e==="mathml"?Ge.createElementNS(gu,t):n?Ge.createElement(t,{is:n}):Ge.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ge.createTextNode(t),createComment:t=>Ge.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ge.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ci.innerHTML=_a(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Ci.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bu=Symbol("_vtc");function vu(t,e,n){const s=t[bu];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gs=Symbol("_vod"),ya=Symbol("_vsh"),_u={name:"show",beforeMount(t,{value:e},{transition:n}){t[gs]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):dn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),dn(t,!0),s.enter(t)):s.leave(t,()=>{dn(t,!1)}):dn(t,e))},beforeUnmount(t,{value:e}){dn(t,e)}};function dn(t,e){t.style.display=e?t[gs]:"none",t[ya]=!e}const yu=Symbol(""),wu=/(?:^|;)\s*display\s*:/;function xu(t,e,n){const s=t.style,r=ne(n);let i=!1;if(n&&!r){if(e)if(ne(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&hn(s,a,"")}else for(const o in e)n[o]==null&&hn(s,o,"");for(const o in n){o==="display"&&(i=!0);const a=n[o];a!=null?Eu(t,o,!ne(e)&&e?e[o]:void 0,a)||hn(s,o,a):hn(s,o,"")}}else if(r){if(e!==n){const o=s[yu];o&&(n+=";"+o),s.cssText=n,i=wu.test(n)}}else e&&t.removeAttribute("style");gs in t&&(t[gs]=i?s.display:"",t[ya]&&(s.display="none"))}const ki=/\s*!important$/;function hn(t,e,n){if(M(n))n.forEach(s=>hn(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Iu(t,e);ki.test(n)?t.setProperty(Nt(s),n.replace(ki,""),"important"):t[s]=n}}const Ai=["Webkit","Moz","ms"],Js={};function Iu(t,e){const n=Js[e];if(n)return n;let s=Te(e);if(s!=="filter"&&s in t)return Js[e]=s;s=vo(s);for(let r=0;r<Ai.length;r++){const i=Ai[r]+s;if(i in t)return Js[e]=i}return e}function Eu(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ne(s)&&n===s}const Pi="http://www.w3.org/1999/xlink";function Ri(t,e,n,s,r,i=Al(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Pi,e.slice(6,e.length)):t.setAttributeNS(Pi,e,n):n==null||i&&!yo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":qe(n)?String(n):n)}function Oi(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?_a(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=yo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function ft(t,e,n,s){t.addEventListener(e,n,s)}function Su(t,e,n,s){t.removeEventListener(e,n,s)}const Mi=Symbol("_vei");function Tu(t,e,n,s,r=null){const i=t[Mi]||(t[Mi]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Au(e);if(s){const u=i[e]=Ou(s,r);ft(t,a,u,l)}else o&&(Su(t,a,o,l),i[e]=void 0)}}const Cu=/(Once|Passive|Capture)$/,ku=/^on:?(?:Once|Passive|Capture)$/;function Au(t){let e,n;for(;(n=t.match(Cu))&&!ku.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Nt(t.slice(2)),e]}let Ys=0;const Pu=Promise.resolve(),Ru=()=>Ys||(Pu.then(()=>Ys=0),Ys=Date.now());function Ou(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const r=n.value;if(M(r)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const o=r.slice(),a=[s];for(let l=0;l<o.length&&!s._stopped;l++){const u=o[l];u&&Ae(u,e,5,a)}}else Ae(r,e,5,[s])};return n.value=t,n.attached=Ru(),n}const Ni=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Mu=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?vu(t,s,o):e==="style"?xu(t,n,s):Es(e)?Ss(e)||Tu(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nu(t,e,s,o))?(Oi(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ri(t,e,s,o,i,e!=="value")):t._isVueCE&&(Du(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ne(s)))?Oi(t,Te(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ri(t,e,s,o))};function Nu(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ni(e)&&L(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ni(e)&&ne(n)?!1:e in t}function Du(t,e){const n=t._def.props;if(!n)return!1;const s=Te(e);return Array.isArray(n)?n.some(r=>Te(r)===s):Object.keys(n).some(r=>Te(r)===s)}const Xt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?n=>Xn(e,n):e};function Lu(t){t.target.composing=!0}function Di(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ve=Symbol("_assign"),Gn=Symbol("_initialValue");function Xs(t,e,n){return e&&(t=t.trim()),n&&(t=Cs(t)),t}const we={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t.parentNode&&(t.type==="text"?t[Gn]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Gn]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Ve]=Xt(r);const i=s||r.props&&r.props.type==="number";ft(t,e?"change":"input",o=>{o.target.composing||t[Ve](Xs(t.value,n,i))}),(n||i)&&ft(t,"change",()=>{t.value=Xs(t.value,n,i)}),e||(ft(t,"compositionstart",Lu),ft(t,"compositionend",Di),ft(t,"change",Di))},mounted(t,{value:e,modifiers:{trim:n,number:s}}){const r=e??"",i=t[Gn];delete t[Gn],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[Ve](Xs(t.value,n,s)):t.value=r},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Ve]=Xt(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Cs(t.value):t.value,l=e??"";if(a===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l)}},Uu={deep:!0,created(t,e,n){t[Ve]=Xt(n),ft(t,"change",()=>{const s=t._modelValue,r=kn(t),i=t.checked,o=t[Ve];if(M(s)){const a=kr(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const u=[...s];u.splice(a,1),o(u)}}else if(en(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(wa(t,i))})},mounted:Li,beforeUpdate(t,e,n){t[Ve]=Xt(n),Li(t,e,n)}};function Li(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(M(e))r=kr(e,s.props.value)>-1;else if(en(e))r=e.has(s.props.value);else{if(e===n)return;r=tn(e,wa(t,!0))}t.checked!==r&&(t.checked=r)}const ts={deep:!0,created(t,{value:e,modifiers:{number:n}},s){t._modelValue=e,ft(t,"change",()=>{const r=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?Cs(kn(i)):kn(i));t[Ve](t.multiple?en(t._modelValue)?new Set(r):r:r[0]),t._assigning=!0,Fo(()=>{t._assigning=!1})}),t[Ve]=Xt(s)},mounted(t,{value:e}){Ui(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Ve]=Xt(n)},updated(t,{value:e}){t._assigning||Ui(t,e)}};function Ui(t,e){const n=t.multiple,s=M(e);if(!(n&&!s&&!en(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=kn(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=kr(e,a)>-1}else o.selected=e.has(a);else if(tn(kn(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function kn(t){return"_value"in t?t._value:t.value}function wa(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const $u=["ctrl","shift","alt","meta"],Fu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$u.some(n=>t[`${n}Key`]&&!e.includes(n))},Ls=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=Fu[e[o]];if(a&&a(r,e))return}return t(r,...i)})},ju=ue({patchProp:Mu},mu);let $i;function Vu(){return $i||($i=Jc(ju))}const Bu=(...t)=>{const e=Vu().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Wu(s);if(!r)return;const i=e._component;!L(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Hu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Hu(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Wu(t){return ne(t)?document.querySelector(t):t}var Fi={};/**
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
 */const xa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},qu=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,u=l?t[r+2]:0,c=i>>2,p=(i&3)<<4|a>>4;let w=(a&15)<<2|u>>6,E=u&63;l||(E=64,o||(w=64)),s.push(n[c],n[p],n[w],n[E])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||p==null)throw new zu;const w=i<<2|a>>4;if(s.push(w),u!==64){const E=a<<4&240|u>>2;if(s.push(E),p!==64){const T=u<<6&192|p;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ku=function(t){const e=xa(t);return Ia.encodeByteArray(e,!0)},Ea=function(t){return Ku(t).replace(/\./g,"")},Sa=function(t){try{return Ia.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ju=()=>Gu().__FIREBASE_DEFAULTS__,Yu=()=>{if(typeof process>"u"||typeof Fi>"u")return;const t=Fi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sa(t[1]);return e&&JSON.parse(e)},Vr=()=>{try{return Ju()||Yu()||Xu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qu=t=>{var e,n;return(n=(e=Vr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ta=()=>{var t;return(t=Vr())===null||t===void 0?void 0:t.config},Ca=t=>{var e;return(e=Vr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Zu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ed(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function td(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rd(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function id(){try{return typeof indexedDB=="object"}catch{return!1}}function od(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ad="FirebaseError";class yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ad,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dn.prototype.create)}}class Dn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?ld(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new yt(r,a,s)}}function ld(t,e){return t.replace(cd,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const cd=/\{\$([^}]+)}/g;function ud(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ms(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ji(i)&&ji(o)){if(!ms(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ji(t){return t!==null&&typeof t=="object"}/**
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
 */function Ln(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function dd(t,e){const n=new fd(t,e);return n.subscribe.bind(n)}class fd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Qs),r.error===void 0&&(r.error=Qs),r.complete===void 0&&(r.complete=Qs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qs(){}/**
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
 */function Dt(t){return t&&t._delegate?t._delegate:t}class Qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tt="[DEFAULT]";/**
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
 */class pd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Zu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(md(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gd(t){return t===Tt?void 0:t}function md(t){return t.instantiationMode==="EAGER"}/**
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
 */class bd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const vd={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},_d=G.INFO,yd={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},wd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=yd[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ka{constructor(e){this.name=e,this._logLevel=_d,this._logHandler=wd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const xd=(t,e)=>e.some(n=>t instanceof n);let Vi,Bi;function Id(){return Vi||(Vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ed(){return Bi||(Bi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aa=new WeakMap,mr=new WeakMap,Pa=new WeakMap,Zs=new WeakMap,Br=new WeakMap;function Sd(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Aa.set(n,t)}).catch(()=>{}),Br.set(e,t),e}function Td(t){if(mr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mr.set(t,e)}let br={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cd(t){br=t(br)}function kd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(er(this),e,...n);return Pa.set(s,e.sort?e.sort():[e]),vt(s)}:Ed().includes(t)?function(...e){return t.apply(er(this),e),vt(Aa.get(this))}:function(...e){return vt(t.apply(er(this),e))}}function Ad(t){return typeof t=="function"?kd(t):(t instanceof IDBTransaction&&Td(t),xd(t,Id())?new Proxy(t,br):t)}function vt(t){if(t instanceof IDBRequest)return Sd(t);if(Zs.has(t))return Zs.get(t);const e=Ad(t);return e!==t&&(Zs.set(t,e),Br.set(e,t)),e}const er=t=>Br.get(t);function Pd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=vt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(vt(o.result),l.oldVersion,l.newVersion,vt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Rd=["get","getKey","getAll","getAllKeys","count"],Od=["put","add","delete","clear"],tr=new Map;function Hi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tr.get(e))return tr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Od.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Rd.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return tr.set(e,i),i}Cd(t=>({...t,get:(e,n,s)=>Hi(e,n)||t.get(e,n,s),has:(e,n)=>!!Hi(e,n)||t.has(e,n)}));/**
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
 */class Md{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Nd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vr="@firebase/app",Wi="0.10.13";/**
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
 */const it=new ka("@firebase/app"),Dd="@firebase/app-compat",Ld="@firebase/analytics-compat",Ud="@firebase/analytics",$d="@firebase/app-check-compat",Fd="@firebase/app-check",jd="@firebase/auth",Vd="@firebase/auth-compat",Bd="@firebase/database",Hd="@firebase/data-connect",Wd="@firebase/database-compat",qd="@firebase/functions",zd="@firebase/functions-compat",Kd="@firebase/installations",Gd="@firebase/installations-compat",Jd="@firebase/messaging",Yd="@firebase/messaging-compat",Xd="@firebase/performance",Qd="@firebase/performance-compat",Zd="@firebase/remote-config",ef="@firebase/remote-config-compat",tf="@firebase/storage",nf="@firebase/storage-compat",sf="@firebase/firestore",rf="@firebase/vertexai-preview",of="@firebase/firestore-compat",af="firebase",lf="10.14.1";/**
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
 */const _r="[DEFAULT]",cf={[vr]:"fire-core",[Dd]:"fire-core-compat",[Ud]:"fire-analytics",[Ld]:"fire-analytics-compat",[Fd]:"fire-app-check",[$d]:"fire-app-check-compat",[jd]:"fire-auth",[Vd]:"fire-auth-compat",[Bd]:"fire-rtdb",[Hd]:"fire-data-connect",[Wd]:"fire-rtdb-compat",[qd]:"fire-fn",[zd]:"fire-fn-compat",[Kd]:"fire-iid",[Gd]:"fire-iid-compat",[Jd]:"fire-fcm",[Yd]:"fire-fcm-compat",[Xd]:"fire-perf",[Qd]:"fire-perf-compat",[Zd]:"fire-rc",[ef]:"fire-rc-compat",[tf]:"fire-gcs",[nf]:"fire-gcs-compat",[sf]:"fire-fst",[of]:"fire-fst-compat",[rf]:"fire-vertex","fire-js":"fire-js",[af]:"fire-js-all"};/**
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
 */const bs=new Map,uf=new Map,yr=new Map;function qi(t,e){try{t.container.addComponent(e)}catch(n){it.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function An(t){const e=t.name;if(yr.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;yr.set(e,t);for(const n of bs.values())qi(n,t);for(const n of uf.values())qi(n,t);return!0}function Ra(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t.settings!==void 0}/**
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
 */const df={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_t=new Dn("app","Firebase",df);/**
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
 */class ff{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=lf;function Oa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_r,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw _t.create("bad-app-name",{appName:String(r)});if(n||(n=Ta()),!n)throw _t.create("no-options");const i=bs.get(r);if(i){if(ms(n,i.options)&&ms(s,i.config))return i;throw _t.create("duplicate-app",{appName:r})}const o=new bd(r);for(const l of yr.values())o.addComponent(l);const a=new ff(n,s,o);return bs.set(r,a),a}function hf(t=_r){const e=bs.get(t);if(!e&&t===_r&&Ta())return Oa();if(!e)throw _t.create("no-app",{appName:t});return e}function Wt(t,e,n){var s;let r=(s=cf[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(a.join(" "));return}An(new Qt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const pf="firebase-heartbeat-database",gf=1,Pn="firebase-heartbeat-store";let nr=null;function Ma(){return nr||(nr=Pd(pf,gf,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Pn)}catch(n){console.warn(n)}}}}).catch(t=>{throw _t.create("idb-open",{originalErrorMessage:t.message})})),nr}async function mf(t){try{const n=(await Ma()).transaction(Pn),s=await n.objectStore(Pn).get(Na(t));return await n.done,s}catch(e){if(e instanceof yt)it.warn(e.message);else{const n=_t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(n.message)}}}async function zi(t,e){try{const s=(await Ma()).transaction(Pn,"readwrite");await s.objectStore(Pn).put(e,Na(t)),await s.done}catch(n){if(n instanceof yt)it.warn(n.message);else{const s=_t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});it.warn(s.message)}}}function Na(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bf=1024,vf=30*24*60*60*1e3;class _f{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ki();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=vf}),this._storage.overwrite(this._heartbeatsCache))}catch(s){it.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ki(),{heartbeatsToSend:s,unsentEntries:r}=yf(this._heartbeatsCache.heartbeats),i=Ea(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return it.warn(n),""}}}function Ki(){return new Date().toISOString().substring(0,10)}function yf(t,e=bf){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Gi(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Gi(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class wf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return id()?od().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return zi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return zi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gi(t){return Ea(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xf(t){An(new Qt("platform-logger",e=>new Md(e),"PRIVATE")),An(new Qt("heartbeat",e=>new _f(e),"PRIVATE")),Wt(vr,Wi,t),Wt(vr,Wi,"esm2017"),Wt("fire-js","")}xf("");var If="firebase",Ef="10.14.1";/**
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
 */Wt(If,Ef,"app");function Hr(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Da(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sf=Da,La=new Dn("auth","Firebase",Da());/**
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
 */const vs=new ka("@firebase/auth");function Tf(t,...e){vs.logLevel<=G.WARN&&vs.warn(`Auth (${Un}): ${t}`,...e)}function ns(t,...e){vs.logLevel<=G.ERROR&&vs.error(`Auth (${Un}): ${t}`,...e)}/**
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
 */function ot(t,...e){throw Wr(t,...e)}function He(t,...e){return Wr(t,...e)}function Ua(t,e,n){const s=Object.assign(Object.assign({},Sf()),{[e]:n});return new Dn("auth","Firebase",s).create(e,{appName:t.name})}function Rt(t){return Ua(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wr(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return La.create(t,...e)}function D(t,e,...n){if(!t)throw Wr(e,...n)}function Qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ns(e),new Error(e)}function at(t,e){t||Qe(e)}/**
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
 */function wr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Cf(){return Ji()==="http:"||Ji()==="https:"}function Ji(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cf()||nd()||"connection"in navigator)?navigator.onLine:!0}function Af(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $n{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=ed()||sd()}get(){return kf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qr(t,e){at(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $a{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Pf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Rf=new $n(3e4,6e4);function zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sn(t,e,n,s,r={}){return Fa(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ln(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return td()||(u.referrerPolicy="no-referrer"),$a.fetch()(ja(t,t.config.apiHost,n,a),u)})}async function Fa(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Pf),e);try{const r=new Mf(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Jn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jn(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jn(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jn(t,"user-disabled",o);const c=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ua(t,c,u);ot(t,c)}}catch(r){if(r instanceof yt)throw r;ot(t,"network-request-failed",{message:String(r)})}}async function Of(t,e,n,s,r={}){const i=await sn(t,e,n,s,r);return"mfaPendingCredential"in i&&ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ja(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?qr(t.config,r):`${t.config.apiScheme}://${r}`}class Mf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(He(this.auth,"network-request-failed")),Rf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=He(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Nf(t,e){return sn(t,"POST","/v1/accounts:delete",e)}async function Va(t,e){return sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function yn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Df(t,e=!1){const n=Dt(t),s=await n.getIdToken(e),r=Kr(s);D(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:yn(sr(r.auth_time)),issuedAtTime:yn(sr(r.iat)),expirationTime:yn(sr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sr(t){return Number(t)*1e3}function Kr(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ns("JWT malformed, contained fewer than 3 sections"),null;try{const r=Sa(n);return r?JSON.parse(r):(ns("Failed to decode base64 JWT payload"),null)}catch(r){return ns("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Yi(t){const e=Kr(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof yt&&Lf(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Lf({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Uf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yn(this.lastLoginAt),this.creationTime=yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _s(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Rn(t,Va(n,{idToken:s}));D(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ba(i.providerUserInfo):[],a=Ff(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new xr(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,p)}async function $f(t){const e=Dt(t);await _s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ff(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Ba(t){return t.map(e=>{var{providerId:n}=e,s=Hr(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function jf(t,e){const n=await Fa(t,{},async()=>{const s=Ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=ja(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$a.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vf(t,e){return sn(t,"POST","/v2/accounts:revokeToken",zr(t,e))}/**
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
 */class qt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){D(e.length!==0,"internal-error");const n=Yi(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await jf(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new qt;return s&&(D(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(D(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(D(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qt,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
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
 */function ut(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ze{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Hr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Uf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Rn(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Df(this,e)}reload(){return $f(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _s(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(Rt(this.auth));const e=await this.getIdToken();return await Rn(this,Nf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,u,c;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(r=n.email)!==null&&r!==void 0?r:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,Z=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,z=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:j,emailVerified:R,isAnonymous:te,providerData:me,stsTokenManager:_e}=n;D(j&&_e,e,"internal-error");const Pe=qt.fromJSON(this.name,_e);D(typeof j=="string",e,"internal-error"),ut(p,e.name),ut(w,e.name),D(typeof R=="boolean",e,"internal-error"),D(typeof te=="boolean",e,"internal-error"),ut(E,e.name),ut(T,e.name),ut(C,e.name),ut(Z,e.name),ut(z,e.name),ut(U,e.name);const ct=new Ze({uid:j,auth:e,email:w,emailVerified:R,displayName:p,isAnonymous:te,photoURL:T,phoneNumber:E,tenantId:C,stsTokenManager:Pe,createdAt:z,lastLoginAt:U});return me&&Array.isArray(me)&&(ct.providerData=me.map(ze=>Object.assign({},ze))),Z&&(ct._redirectEventId=Z),ct}static async _fromIdTokenResponse(e,n,s=!1){const r=new qt;r.updateFromServerResponse(n);const i=new Ze({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await _s(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];D(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Ba(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new qt;a.updateFromIdToken(s);const l=new Ze({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new xr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Xi=new Map;function et(t){at(t instanceof Function,"Expected a class definition");let e=Xi.get(t);return e?(at(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xi.set(t,e),e)}/**
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
 */class Ha{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ha.type="NONE";const Qi=Ha;/**
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
 */function ss(t,e,n){return`firebase:${t}:${e}:${n}`}class zt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ss(this.userKey,r.apiKey,i),this.fullPersistenceKey=ss("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new zt(et(Qi),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||et(Qi);const o=ss(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const p=Ze._fromJSON(e,c);u!==i&&(a=p),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new zt(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new zt(i,e,s))}}/**
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
 */function Zi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ka(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ja(e))return"Blackberry";if(Ya(e))return"Webos";if(qa(e))return"Safari";if((e.includes("chrome/")||za(e))&&!e.includes("edge/"))return"Chrome";if(Ga(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wa(t=ge()){return/firefox\//i.test(t)}function qa(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function za(t=ge()){return/crios\//i.test(t)}function Ka(t=ge()){return/iemobile/i.test(t)}function Ga(t=ge()){return/android/i.test(t)}function Ja(t=ge()){return/blackberry/i.test(t)}function Ya(t=ge()){return/webos/i.test(t)}function Gr(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Bf(t=ge()){var e;return Gr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hf(){return rd()&&document.documentMode===10}function Xa(t=ge()){return Gr(t)||Ga(t)||Ya(t)||Ja(t)||/windows phone/i.test(t)||Ka(t)}/**
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
 */function Qa(t,e=[]){let n;switch(t){case"Browser":n=Zi(ge());break;case"Worker":n=`${Zi(ge())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Un}/${s}`}/**
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
 */class Wf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function qf(t,e={}){return sn(t,"GET","/v2/passwordPolicy",zr(t,e))}/**
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
 */const zf=6;class Kf{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zf,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Gf{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eo(this),this.idTokenSubscription=new eo(this),this.beforeStateQueue=new Wf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=La,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await zt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Va(this,{idToken:e}),s=await Ze._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _s(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Af()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(Rt(this));const n=e?Dt(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qf(this),n=new Kf(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Vf(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await zt.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Tf(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jr(t){return Dt(t)}class eo{constructor(e){this.auth=e,this.observer=null,this.addObserver=dd(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jf(t){Yr=t}function Yf(t){return Yr.loadJS(t)}function Xf(){return Yr.gapiScript}function Qf(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Zf(t,e){const n=Ra(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ms(i,e??{}))return r;ot(r,"already-initialized")}return n.initialize({options:e})}function eh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function th(t,e,n){const s=Jr(t);D(s._canInitEmulator,s,"emulator-config-failed"),D(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Za(e),{host:o,port:a}=nh(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),sh()}function Za(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nh(t){const e=Za(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:to(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:to(o)}}}function to(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class el{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,n){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}/**
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
 */async function Kt(t,e){return Of(t,"POST","/v1/accounts:signInWithIdp",zr(t,e))}/**
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
 */const rh="http://localhost";class Mt extends el{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Hr(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Mt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Kt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kt(e,n)}buildRequest(){const e={requestUri:rh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ln(n)}return e}}/**
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
 */class tl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fn extends tl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ht extends Fn{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class pt extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return pt.credential(n,s)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class gt extends Fn{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class mt extends Fn{constructor(){super("twitter.com")}static credential(e,n){return Mt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return mt.credential(n,s)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ze._fromIdTokenResponse(e,s,r),o=no(s);return new Zt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=no(s);return new Zt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function no(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ys extends yt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ys.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ys(e,n,s,r)}}function nl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ys._fromErrorAndOperation(t,i,e,s):i})}async function ih(t,e,n=!1){const s=await Rn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",s)}/**
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
 */async function oh(t,e,n=!1){const{auth:s}=t;if(bt(s.app))return Promise.reject(Rt(s));const r="reauthenticate";try{const i=await Rn(t,nl(s,r,e,t),n);D(i.idToken,s,"internal-error");const o=Kr(i.idToken);D(o,s,"internal-error");const{sub:a}=o;return D(t.uid===a,s,"user-mismatch"),Zt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ot(s,"user-mismatch"),i}}/**
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
 */async function ah(t,e,n=!1){if(bt(t.app))return Promise.reject(Rt(t));const s="signIn",r=await nl(t,s,e),i=await Zt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function lh(t,e,n,s){return Dt(t).onIdTokenChanged(e,n,s)}function ch(t,e,n){return Dt(t).beforeAuthStateChanged(e,n)}function uh(t,e,n,s){return Dt(t).onAuthStateChanged(e,n,s)}const ws="__sak";/**
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
 */class sl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ws,"1"),this.storage.removeItem(ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dh=1e3,fh=10;class rl extends sl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Hf()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,fh):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},dh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rl.type="LOCAL";const hh=rl;/**
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
 */class il extends sl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}il.type="SESSION";const ol=il;/**
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
 */function ph(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Us{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Us(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await ph(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Us.receivers=[];/**
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
 */function Xr(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Xr("",20);r.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const w=p;if(w.data.eventId===u)switch(w.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(w.data.response);break;default:clearTimeout(c),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function We(){return window}function mh(t){We().location.href=t}/**
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
 */function al(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function bh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _h(){return al()?self:null}/**
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
 */const ll="firebaseLocalStorageDb",yh=1,xs="firebaseLocalStorage",cl="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $s(t,e){return t.transaction([xs],e?"readwrite":"readonly").objectStore(xs)}function wh(){const t=indexedDB.deleteDatabase(ll);return new jn(t).toPromise()}function Ir(){const t=indexedDB.open(ll,yh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(xs,{keyPath:cl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(xs)?e(s):(s.close(),await wh(),e(await Ir()))})})}async function so(t,e,n){const s=$s(t,!0).put({[cl]:e,value:n});return new jn(s).toPromise()}async function xh(t,e){const n=$s(t,!1).get(e),s=await new jn(n).toPromise();return s===void 0?null:s.value}function ro(t,e){const n=$s(t,!0).delete(e);return new jn(n).toPromise()}const Ih=800,Eh=3;class ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ir(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Eh)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Us._getInstance(_h()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bh(),!this.activeServiceWorker)return;this.sender=new gh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ir();return await so(e,ws,"1"),await ro(e,ws),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>so(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>xh(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ro(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=$s(r,!1).getAll();return new jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ih)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ul.type="LOCAL";const Sh=ul;new $n(3e4,6e4);/**
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
 */function Th(t,e){return e?et(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qr extends el{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ch(t){return ah(t.auth,new Qr(t),t.bypassAuthState)}function kh(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),oh(n,new Qr(t),t.bypassAuthState)}async function Ah(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),ih(n,new Qr(t),t.bypassAuthState)}/**
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
 */class dl{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ch;case"linkViaPopup":case"linkViaRedirect":return Ah;case"reauthViaPopup":case"reauthViaRedirect":return kh;default:ot(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ph=new $n(2e3,1e4);class $t extends dl{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,$t.currentPopupAction&&$t.currentPopupAction.cancel(),$t.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=Xr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$t.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ph.get())};e()}}$t.currentPopupAction=null;/**
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
 */const Rh="pendingRedirect",rs=new Map;class Oh extends dl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=rs.get(this.auth._key());if(!e){try{const s=await Mh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}rs.set(this.auth._key(),e)}return this.bypassAuthState||rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mh(t,e){const n=Lh(e),s=Dh(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Nh(t,e){rs.set(t._key(),e)}function Dh(t){return et(t._redirectPersistence)}function Lh(t){return ss(Rh,t.config.apiKey,t.name)}async function Uh(t,e,n=!1){if(bt(t.app))return Promise.reject(Rt(t));const s=Jr(t),r=Th(s,e),o=await new Oh(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const $h=10*60*1e3;class Fh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!fl(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(He(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$h&&this.cachedEventUids.clear(),this.cachedEventUids.has(io(e))}saveEventToCache(e){this.cachedEventUids.add(io(e)),this.lastProcessedEventTime=Date.now()}}function io(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fl(t);default:return!1}}/**
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
 */async function Vh(t,e={}){return sn(t,"GET","/v1/projects",e)}/**
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
 */const Bh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hh=/^https?/;async function Wh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vh(t);for(const n of e)try{if(qh(n))return}catch{}ot(t,"unauthorized-domain")}function qh(t){const e=wr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Hh.test(n))return!1;if(Bh.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const zh=new $n(3e4,6e4);function oo(){const t=We().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Kh(t){return new Promise((e,n)=>{var s,r,i;function o(){oo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oo(),n(He(t,"network-request-failed"))},timeout:zh.get()})}if(!((r=(s=We().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=We().gapi)===null||i===void 0)&&i.load)o();else{const a=Qf("iframefcb");return We()[a]=()=>{gapi.load?o():n(He(t,"network-request-failed"))},Yf(`${Xf()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw is=null,e})}let is=null;function Gh(t){return is=is||Kh(t),is}/**
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
 */const Jh=new $n(5e3,15e3),Yh="__/auth/iframe",Xh="emulator/auth/iframe",Qh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ep(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qr(e,Xh):`https://${t.config.authDomain}/${Yh}`,s={apiKey:e.apiKey,appName:t.name,v:Un},r=Zh.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ln(s).slice(1)}`}async function tp(t){const e=await Gh(t),n=We().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:ep(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qh,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=He(t,"network-request-failed"),a=We().setTimeout(()=>{i(o)},Jh.get());function l(){We().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const np={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sp=500,rp=600,ip="_blank",op="http://localhost";class ao{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ap(t,e,n,s=sp,r=rp){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},np),{width:s.toString(),height:r.toString(),top:i,left:o}),u=ge().toLowerCase();n&&(a=za(u)?ip:n),Wa(u)&&(e=e||op,l.scrollbars="yes");const c=Object.entries(l).reduce((w,[E,T])=>`${w}${E}=${T},`,"");if(Bf(u)&&a!=="_self")return lp(e||"",a),new ao(null);const p=window.open(e||"",a,c);D(p,t,"popup-blocked");try{p.focus()}catch{}return new ao(p)}function lp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const cp="__/auth/handler",up="emulator/auth/handler",dp=encodeURIComponent("fac");async function lo(t,e,n,s,r,i){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Un,eventId:r};if(e instanceof tl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ud(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,p]of Object.entries({}))o[c]=p}if(e instanceof Fn){const c=e.getScopes().filter(p=>p!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${dp}=${encodeURIComponent(l)}`:"";return`${fp(t)}?${Ln(a).slice(1)}${u}`}function fp({config:t}){return t.emulator?qr(t,up):`https://${t.authDomain}/${cp}`}/**
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
 */const rr="webStorageSupport";class hp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ol,this._completeRedirectFn=Uh,this._overrideRedirectResult=Nh}async _openPopup(e,n,s,r){var i;at((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lo(e,n,s,wr(),r);return ap(e,o,Xr())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await lo(e,n,s,wr(),r);return mh(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(at(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await tp(e),s=new Fh(e);return n.register("authEvent",r=>(D(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rr,{type:rr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[rr];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xa()||qa()||Gr()}}const pp=hp;var co="@firebase/auth",uo="1.7.9";/**
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
 */class gp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bp(t){An(new Qt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qa(t)},u=new Gf(s,r,i,l);return eh(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),An(new Qt("auth-internal",e=>{const n=Jr(e.getProvider("auth").getImmediate());return(s=>new gp(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(co,uo,mp(t)),Wt(co,uo,"esm2017")}/**
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
 */const vp=5*60,_p=Ca("authIdTokenMaxAge")||vp;let fo=null;const yp=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>_p)return;const r=n==null?void 0:n.token;fo!==r&&(fo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function wp(t=hf()){const e=Ra(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Zf(t,{popupRedirectResolver:pp,persistence:[Sh,hh,ol]}),s=Ca("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=yp(i.toString());ch(n,o,()=>o(n.currentUser)),lh(n,a=>o(a))}}const r=Qu("auth");return r&&th(n,`http://${r}`),n}function xp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Jf({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=He("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",xp().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bp("Browser");const Ip={apiKey:"AIzaSyCbL_3nj_CyexuqoDZM-9q4H3ZwP-yiIAs",authDomain:"prime-imoveis-98b9a.firebaseapp.com",projectId:"prime-imoveis-98b9a",storageBucket:"prime-imoveis-98b9a.firebasestorage.app",messagingSenderId:"476715353928",appId:"1:476715353928:web:de685deebb33a5f665157d",measurementId:"G-46YLRRCG13"},Ep=Oa(Ip),Sp=wp(Ep),Is=nn({user:null,loading:!0});uh(Sp,t=>{Is.user=t,Is.loading=!1});const hl=()=>({authState:Is,user:Is.user});/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:s,iconNode:r,name:i,class:o,...a},{slots:l})=>pr("svg",{...Yn,width:t||Yn.width,height:t||Yn.height,stroke:s||Yn.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${Tp(i??"icon")}`],...a},[...r.map(u=>pr(...u)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=(t,e)=>(n,{slots:s})=>pr(Cp,{...n,iconNode:e,name:t},s);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=Q("BathIcon",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=Q("BedDoubleIcon",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=Q("BuildingIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=Q("CarIcon",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=Q("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=Q("CirclePlusIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=Q("DollarSignIcon",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=Q("FacebookIcon",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=Q("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=Q("HomeIcon",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=Q("InboxIcon",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=Q("InstagramIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=Q("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=Q("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=Q("LockIcon",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=Q("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=Q("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=Q("MapPinIcon",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=Q("MaximizeIcon",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=Q("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=Q("PhoneIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=Q("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=Q("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Q("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=Q("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=Q("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),qp={class:"sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"},zp={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Kp={class:"flex justify-between h-16"},Gp={class:"flex items-center"},Jp={href:"#",class:"flex items-center gap-2 text-brand-700 font-extrabold text-xl tracking-tight transition hover:opacity-90"},Yp={class:"hidden md:flex items-center gap-4"},Xp={class:"flex items-center gap-3 pl-4 border-l border-slate-200"},Qp={class:"flex flex-col text-right"},Zp={class:"text-xs font-semibold text-slate-800 leading-none"},eg={class:"text-[10px] text-slate-400 font-medium"},tg={class:"w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold border border-brand-200"},ng=["src"],sg={key:1},rg={class:"flex items-center md:hidden"},ig={class:"md:hidden border-t border-slate-100 bg-white"},og={class:"pt-4 pb-4 border-t border-slate-100 px-4"},ag={key:0,class:"flex items-center gap-3"},lg={class:"w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold border border-brand-200"},cg=["src"],ug={key:1},dg={class:"text-sm font-semibold text-slate-800"},fg={class:"text-xs text-slate-500"},hg={key:1,class:"space-y-2"},pg={__name:"Navbar",emits:["open-auth","open-new-property"],setup(t,{emit:e}){const n=e,{user:s,logout:r}=useAuth(),i=ve(!1),o=async()=>{try{await r(),i.value=!1}catch(a){console.error("Erro ao deslogar:",a)}};return(a,l)=>(F(),q("nav",qp,[f("div",zp,[f("div",Kp,[f("div",Gp,[f("a",Jp,[k(A(gl),{class:"w-6 h-6 text-brand-600 stroke-[2.5]"}),l[4]||(l[4]=f("span",null,[Pt("Prime"),f("span",{class:"text-slate-800 font-medium"},"Imóveis")],-1))]),l[5]||(l[5]=Yt('<div class="hidden md:flex ml-10 space-x-8"><a href="#" class="border-b-2 border-brand-600 px-1 pt-1 text-sm font-semibold text-brand-700">Comprar</a><a href="#" class="border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 transition">Alugar</a><a href="#" class="border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 transition">Lançamentos</a><a href="#" class="border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 transition">Anunciar</a></div>',1))]),f("div",Yp,[A(s)?(F(),q(Ie,{key:0},[f("button",{onClick:l[0]||(l[0]=u=>n("open-new-property")),class:"inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl transition duration-150 shadow-sm shadow-brand-200"},[k(A(Rp),{class:"w-4 h-4"}),l[6]||(l[6]=Pt(" Anunciar Imóvel ",-1))]),f("div",Xp,[f("div",Qp,[f("span",Zp,ie(A(s).displayName),1),f("span",eg,ie(A(s).email),1)]),f("div",tg,[A(s).photoURL?(F(),q("img",{key:0,src:A(s).photoURL,alt:"Avatar",class:"w-full h-full rounded-full object-cover"},null,8,ng)):(F(),q("span",sg,ie(A(s).displayName[0].toUpperCase()),1))]),f("button",{onClick:o,title:"Sair",class:"p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition"},[k(A(ho),{class:"w-5 h-5"})])])],64)):(F(),q("button",{key:1,onClick:l[1]||(l[1]=u=>n("open-auth")),class:"inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition"},[k(A(bl),{class:"w-4 h-4"}),l[7]||(l[7]=Pt(" Entrar / Cadastrar ",-1))]))]),f("div",rg,[f("button",{onClick:l[2]||(l[2]=u=>i.value=!i.value),class:"inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"},[i.value?(F(),Sn(A(ni),{key:1,class:"w-6 h-6"})):(F(),Sn(A(jp),{key:0,class:"w-6 h-6"}))])])])]),re(f("div",ig,[l[8]||(l[8]=Yt('<div class="pt-2 pb-3 space-y-1 px-4"><a href="#" class="block px-3 py-2 rounded-xl text-base font-semibold text-brand-700 bg-brand-50">Comprar</a><a href="#" class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">Alugar</a><a href="#" class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">Lançamentos</a><a href="#" class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">Anunciar</a></div>',1)),f("div",og,[A(s)?(F(),q("div",ag,[f("div",lg,[A(s).photoURL?(F(),q("img",{key:0,src:A(s).photoURL,alt:"Avatar",class:"w-full h-full rounded-full object-cover"},null,8,cg)):(F(),q("span",ug,ie(A(s).displayName[0].toUpperCase()),1))]),f("div",null,[f("div",dg,ie(A(s).displayName),1),f("div",fg,ie(A(s).email),1)]),f("button",{onClick:o,class:"ml-auto p-2 text-slate-400 hover:text-red-500 rounded-xl transition"},[k(A(ho),{class:"w-5 h-5"})])])):(F(),q("div",hg,[f("button",{onClick:l[3]||(l[3]=u=>{n("open-auth"),i.value=!1}),class:"w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 transition"}," Entrar / Cadastrar ")]))])],512),[[_u,i.value]])]))}},gg={class:"relative bg-slate-900 overflow-hidden py-24 sm:py-32 flex items-center min-h-[500px]"},mg={class:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left"},bg={class:"mt-10 bg-white/95 backdrop-blur-lg p-5 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-950/20 max-w-5xl border border-white/20"},vg={class:"relative flex flex-col justify-center"},_g={class:"relative"},yg={class:"relative flex flex-col justify-center"},wg={class:"relative"},xg={class:"relative flex flex-col justify-center"},Ig={class:"relative"},Eg={class:"relative flex flex-col justify-center"},Sg={class:"relative"},Tg={class:"flex items-end"},Cg={type:"submit",class:"w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-200 transition duration-150"},kg={__name:"Hero",emits:["search"],setup(t,{emit:e}){const n=e,s=ve({cidade:"",tipo:"",precoMax:"",quartos:""}),r=()=>{n("search",{...s.value})};return(i,o)=>(F(),q("div",gg,[o[13]||(o[13]=f("div",{class:"absolute inset-0 z-0"},[f("img",{src:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",alt:"Casa de luxo",class:"w-full h-full object-cover object-center opacity-40 select-none pointer-events-none"}),f("div",{class:"absolute inset-0 bg-gradient-to-tr from-brand-950 via-brand-900/80 to-transparent"})],-1)),f("div",mg,[o[12]||(o[12]=f("div",{class:"max-w-3xl"},[f("span",{class:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/25 border border-brand-400/30 text-brand-200 mb-6"}," ✨ Sua imobiliária digital de confiança "),f("h1",{class:"text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"}," Encontre o lar perfeito para a sua história. "),f("p",{class:"mt-4 text-lg text-slate-300"}," Pesquise entre milhares de casas, apartamentos e coberturas selecionadas especialmente para você com as melhores taxas do mercado. ")],-1)),f("div",bg,[f("form",{onSubmit:Ls(r,["prevent"]),class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"},[f("div",vg,[o[4]||(o[4]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Localização",-1)),f("div",_g,[k(A(ti),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>s.value.cidade=a),type:"text",placeholder:"Qual cidade deseja?",class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,s.value.cidade]])])]),f("div",yg,[o[6]||(o[6]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Tipo do Imóvel",-1)),f("div",wg,[k(A(Ap),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("select",{"onUpdate:modelValue":o[1]||(o[1]=a=>s.value.tipo=a),class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"},[...o[5]||(o[5]=[f("option",{value:""},"Todos os tipos",-1),f("option",{value:"Casa"},"Casa",-1),f("option",{value:"Apartamento"},"Apartamento",-1),f("option",{value:"Cobertura"},"Cobertura",-1)])],512),[[ts,s.value.tipo]])])]),f("div",xg,[o[8]||(o[8]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Preço Máximo",-1)),f("div",Ig,[k(A(Op),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("select",{"onUpdate:modelValue":o[2]||(o[2]=a=>s.value.precoMax=a),class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"},[...o[7]||(o[7]=[Yt('<option value="">Qualquer preço</option><option value="500000">Até R$ 500 mil</option><option value="1000000">Até R$ 1 Milhão</option><option value="2000000">Até R$ 2 Milhões</option><option value="5000000">Até R$ 5 Milhões</option>',5)])],512),[[ts,s.value.precoMax]])])]),f("div",Eg,[o[10]||(o[10]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1"},"Quartos",-1)),f("div",Sg,[k(A(pl),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("select",{"onUpdate:modelValue":o[3]||(o[3]=a=>s.value.quartos=a),class:"w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"},[...o[9]||(o[9]=[Yt('<option value="">Qualquer quantidade</option><option value="1">1+ quarto</option><option value="2">2+ quartos</option><option value="3">3+ quartos</option><option value="4">4+ quartos</option>',5)])],512),[[ts,s.value.quartos]])])]),f("div",Tg,[f("button",Cg,[k(A(Wp),{class:"w-4 h-4"}),o[11]||(o[11]=f("span",null,"Buscar",-1))])])],32)])])]))}},Ag={class:"group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"},Pg={class:"relative overflow-hidden aspect-[4/3] bg-slate-100"},Rg=["src","alt"],Og={key:0,class:"absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm z-10"},Mg={class:"absolute top-3 right-12 bg-slate-900/75 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-lg z-10"},Ng={class:"p-5 flex flex-col flex-1"},Dg={class:"flex items-baseline gap-1.5 mb-2"},Lg={class:"text-xl font-extrabold text-brand-700"},Ug={key:0,class:"text-xs text-slate-400 font-medium"},$g={class:"text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-brand-600 transition mb-1"},Fg={class:"flex items-center gap-1 text-slate-400 mb-4"},jg={class:"text-xs font-medium line-clamp-1"},Vg={class:"grid grid-cols-4 gap-2 pt-4 border-t border-slate-100 text-slate-500 mt-auto"},Bg={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Quartos"},Hg={class:"text-[11px] font-bold text-slate-700"},Wg={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Banheiros"},qg={class:"text-[11px] font-bold text-slate-700"},zg={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Vagas de Garagem"},Kg={class:"text-[11px] font-bold text-slate-700"},Gg={class:"flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl",title:"Área Privativa"},Jg={class:"text-[11px] font-bold text-slate-700"},Yg={__name:"PropertyCard",props:{imovel:{type:Object,required:!0}},setup(t){const e=ve(!1),n=()=>{e.value=!e.value},s=r=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0}).format(r);return(r,i)=>(F(),q("div",Ag,[f("div",Pg,[f("img",{src:t.imovel.imagem,alt:t.imovel.titulo,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out select-none"},null,8,Rg),t.imovel.destaque?(F(),q("span",Og," Destaque ")):je("",!0),f("span",Mg,ie(t.imovel.tipo),1),f("button",{onClick:Ls(n,["stop"]),class:Ot(["absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white text-slate-400 hover:text-red-500 shadow-sm active:scale-95 transition z-10",{"!text-red-500 !bg-white":e.value}])},[k(A(Np),{class:Ot(["w-4 h-4 transition-colors",{"fill-red-500 text-red-500":e.value}])},null,8,["class"])],2)]),f("div",Ng,[f("div",Dg,[f("span",Lg,ie(s(t.imovel.preco)),1),t.imovel.tipo==="Aluguel"?(F(),q("span",Ug,"/ mês")):je("",!0)]),f("h3",$g,ie(t.imovel.titulo),1),f("div",Fg,[k(A(ti),{class:"w-3.5 h-3.5 shrink-0"}),f("span",jg,ie(t.imovel.localizacao),1)]),f("div",Vg,[f("div",Bg,[k(A(pl),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",Hg,ie(t.imovel.quartos)+" Qto",1)]),f("div",Wg,[k(A(kp),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",qg,ie(t.imovel.banheiros)+" Ban",1)]),f("div",zg,[k(A(Pp),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",Kg,ie(t.imovel.vagas)+" Vagas",1)]),f("div",Gg,[k(A(Fp),{class:"w-4 h-4 text-slate-400 mb-1"}),f("span",Jg,ie(t.imovel.area)+" m²",1)])])])]))}},Xg={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"},Qg={class:"flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4"},Zg={key:0,class:"inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-amber-800 bg-amber-50 border border-amber-200 text-xs font-semibold"},em={key:0,class:"flex flex-col items-center justify-center py-20"},tm={key:0,class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"},nm={key:1,class:"flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 px-4"},sm={__name:"PropertyGrid",props:{filters:{type:Object,default:()=>({})}},setup(t){const e=t,n=ve([]),s=ve(!1),r=ve(!1),i=async()=>{s.value=!0,r.value=!1;const a=new URLSearchParams;e.filters.cidade&&a.append("cidade",e.filters.cidade),e.filters.tipo&&a.append("tipo",e.filters.tipo),e.filters.precoMax&&a.append("precoMax",e.filters.precoMax),e.filters.quartos&&a.append("quartos",e.filters.quartos);try{const l=await fetch(`http://localhost:3000/api/imoveis?${a.toString()}`);if(!l.ok)throw new Error("Falha ao conectar na API de imóveis");const u=await l.json();n.value=u}catch(l){console.warn("[PropertyGrid] Backend offline. Carregando dados locais mock para visualização.",l.message),r.value=!0,n.value=o(e.filters)}finally{s.value=!1}};Bt(()=>e.filters,()=>{i()},{deep:!0}),Jo(()=>{i()});function o(a){let u=[...[{id:"imovel-1",titulo:"Apartamento de Luxo Frente ao Mar",tipo:"Apartamento",preco:125e4,localizacao:"Copacabana, Rio de Janeiro - RJ",quartos:3,banheiros:2,vagas:2,area:120,imagem:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",destaque:!0},{id:"imovel-2",titulo:"Casa de Condomínio com Piscina",tipo:"Casa",preco:24e5,localizacao:"Alphaville, Barueri - SP",quartos:4,banheiros:5,vagas:4,area:350,imagem:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",destaque:!0},{id:"imovel-3",titulo:"Cobertura Duplex Espetacular",tipo:"Cobertura",preco:48e5,localizacao:"Ipanema, Rio de Janeiro - RJ",quartos:3,banheiros:4,vagas:3,area:280,imagem:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",destaque:!1},{id:"imovel-4",titulo:"Casa de Campo Charmosa",tipo:"Casa",preco:85e4,localizacao:"Atibaia, São Paulo - SP",quartos:3,banheiros:2,vagas:3,area:200,imagem:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",destaque:!0}]];return a.tipo&&(u=u.filter(c=>c.tipo.toLowerCase()===a.tipo.toLowerCase())),a.cidade&&(u=u.filter(c=>c.localizacao.toLowerCase().includes(a.cidade.toLowerCase()))),a.precoMax&&(u=u.filter(c=>c.preco<=Number(a.precoMax))),a.quartos&&(u=u.filter(c=>c.quartos>=Number(a.quartos))),u}return(a,l)=>(F(),q("div",Xg,[f("div",Qg,[l[1]||(l[1]=f("div",null,[f("h2",{class:"text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight"},"Imóveis em Destaque"),f("p",{class:"text-slate-500 text-sm mt-1"},"Conheça nossas melhores opções disponíveis no mercado imobiliário.")],-1)),r.value?(F(),q("div",Zg,[k(A(Zr),{class:"w-4 h-4 text-amber-500 shrink-0"}),l[0]||(l[0]=f("span",null,"Backend offline. Exibindo imóveis demonstrativos.",-1))])):je("",!0)]),s.value?(F(),q("div",em,[k(A(ei),{class:"w-10 h-10 text-brand-600 animate-spin mb-4"}),l[2]||(l[2]=f("span",{class:"text-sm font-semibold text-slate-500"},"Buscando imóveis na base de dados...",-1))])):(F(),q(Ie,{key:1},[n.value.length>0?(F(),q("div",tm,[(F(!0),q(Ie,null,Cc(n.value,u=>(F(),q("div",{key:u.id},[k(Yg,{imovel:u},null,8,["imovel"])]))),128))])):(F(),q("div",nm,[k(A(Dp),{class:"w-12 h-12 text-slate-300 mb-4"}),l[4]||(l[4]=f("h3",{class:"text-base font-bold text-slate-700 mb-1"},"Nenhum imóvel encontrado",-1)),l[5]||(l[5]=f("p",{class:"text-xs text-slate-400 max-w-sm"},"Tente reajustar seus filtros de pesquisa para encontrar novas correspondências.",-1)),f("button",{onClick:i,class:"mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg transition"},[k(A(Hp),{class:"w-3.5 h-3.5"}),l[3]||(l[3]=Pt(" Atualizar busca ",-1))])]))],64))]))}},rm={key:0,class:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"},im={class:"relative bg-white w-full max-w-md rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 transition-all transform scale-100"},om={class:"flex border-b border-slate-100 mb-6"},am={key:0,class:"mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2"},lm={key:0,class:"relative"},cm={class:"relative"},um={class:"relative"},dm={class:"relative"},fm={class:"relative"},hm={class:"relative"},pm=["disabled"],gm=["disabled"],mm={__name:"AuthModal",props:{isOpen:{type:Boolean,required:!0}},emits:["close"],setup(t,{emit:e}){const n=t,s=e,{login:r,register:i,loginWithGoogle:o,error:a}=hl(),l=ve("login"),u=ve(!1),c=nn({name:"",email:"",password:""});Bt(()=>n.isOpen,E=>{E||(c.name="",c.email="",c.password="",l.value="login")});const p=async()=>{u.value=!0;try{l.value==="login"?await r(c.email,c.password):await i(c.email,c.password,c.name),s("close")}catch(E){console.error("Erro de autenticação:",E)}finally{u.value=!1}},w=async()=>{u.value=!0;try{await o(),s("close")}catch(E){console.error("Erro de login Google:",E)}finally{u.value=!1}};return(E,T)=>t.isOpen?(F(),q("div",rm,[f("div",{onClick:T[0]||(T[0]=C=>s("close")),class:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"}),f("div",im,[f("button",{onClick:T[1]||(T[1]=C=>s("close")),class:"absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-50 transition"},[k(A(ni),{class:"w-5 h-5"})]),f("div",om,[f("button",{onClick:T[2]||(T[2]=C=>l.value="login"),class:Ot(["flex-1 pb-3 text-sm font-bold border-b-2 transition",l.value==="login"?"border-brand-600 text-brand-600":"border-transparent text-slate-400 hover:text-slate-600"])}," Entrar ",2),f("button",{onClick:T[3]||(T[3]=C=>l.value="register"),class:Ot(["flex-1 pb-3 text-sm font-bold border-b-2 transition",l.value==="register"?"border-brand-600 text-brand-600":"border-transparent text-slate-400 hover:text-slate-600"])}," Criar Conta ",2)]),A(a)?(F(),q("div",am,[k(A(Zr),{class:"w-4 h-4 text-red-500 shrink-0"}),f("span",null,ie(A(a)),1)])):je("",!0),f("form",{onSubmit:Ls(p,["prevent"]),class:"space-y-4"},[l.value==="register"?(F(),q("div",lm,[T[7]||(T[7]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Nome Completo",-1)),f("div",cm,[k(A(bl),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("input",{"onUpdate:modelValue":T[4]||(T[4]=C=>c.name=C),type:"text",required:"",placeholder:"Como prefere ser chamado?",class:"w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,c.name]])])])):je("",!0),f("div",um,[T[8]||(T[8]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Endereço de E-mail",-1)),f("div",dm,[k(A(ml),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("input",{"onUpdate:modelValue":T[5]||(T[5]=C=>c.email=C),type:"email",required:"",placeholder:"exemplo@dominio.com",class:"w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,c.email]])])]),f("div",fm,[T[9]||(T[9]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Senha de Acesso",-1)),f("div",hm,[k(A($p),{class:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),re(f("input",{"onUpdate:modelValue":T[6]||(T[6]=C=>c.password=C),type:"password",required:"",placeholder:"No mínimo 6 dígitos",class:"w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,c.password]])])]),f("button",{type:"submit",disabled:u.value,class:"w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-150 shadow-md shadow-brand-100 disabled:opacity-50 disabled:cursor-not-allowed"},[u.value?(F(),Sn(A(ei),{key:0,class:"w-4 h-4 animate-spin"})):je("",!0),f("span",null,ie(l.value==="login"?"Entrar na Conta":"Finalizar Cadastro"),1)],8,pm)],32),T[11]||(T[11]=f("div",{class:"my-6 flex items-center justify-center gap-3"},[f("span",{class:"h-px bg-slate-100 flex-1"}),f("span",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider"},"Ou continue com"),f("span",{class:"h-px bg-slate-100 flex-1"})],-1)),f("button",{type:"button",onClick:w,disabled:u.value,class:"w-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition active:scale-[0.98] disabled:opacity-50"},[...T[10]||(T[10]=[Yt('<svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"></path></svg><span>Acessar com o Google</span>',2)])],8,gm)])])):je("",!0)}},bm={key:0,class:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"},vm={class:"relative bg-white w-full max-w-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"},_m={class:"text-xl font-extrabold text-slate-800 mb-6 flex items-center gap-2"},ym={key:0,class:"mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2"},wm={class:"grid grid-cols-2 gap-4"},xm={class:"grid grid-cols-4 gap-3"},Im={class:"flex items-center gap-2 py-2"},Em={class:"flex gap-4 pt-4 border-t border-slate-100"},Sm=["disabled"],Tm={__name:"NewPropertyModal",props:{isOpen:{type:Boolean,required:!0}},emits:["close","property-created"],setup(t,{emit:e}){const n=t,s=e,{token:r}=hl(),i=ve(!1),o=ve(""),a=nn({titulo:"",descricao:"",tipo:"Apartamento",preco:"",localizacao:"",quartos:"",banheiros:"",vagas:"",area:"",imagem:"",destaque:!1});Bt(()=>n.isOpen,u=>{u||(a.titulo="",a.descricao="",a.tipo="Apartamento",a.preco="",a.localizacao="",a.quartos="",a.banheiros="",a.vagas="",a.area="",a.imagem="",a.destaque=!1,o.value="")});const l=async()=>{i.value=!0,o.value="";try{const u=await fetch("http://localhost:3000/api/imoveis",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r.value}`},body:JSON.stringify(a)});if(!u.ok){const p=await u.json();throw new Error(p.error||"Erro desconhecido ao salvar o imóvel.")}const c=await u.json();s("property-created",c),s("close")}catch(u){console.error("[NewPropertyModal] Erro ao cadastrar imóvel:",u),o.value=u.message||"Falha ao cadastrar. Verifique a conexão com o servidor Express."}finally{i.value=!1}};return(u,c)=>t.isOpen?(F(),q("div",bm,[f("div",{onClick:c[0]||(c[0]=p=>s("close")),class:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"}),f("div",vm,[f("button",{onClick:c[1]||(c[1]=p=>s("close")),class:"absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-50 transition"},[k(A(ni),{class:"w-5 h-5"})]),f("h2",_m,[k(A(Bp),{class:"w-5 h-5 text-brand-600 stroke-[2.5]"}),c[14]||(c[14]=Pt(" Anunciar Novo Imóvel ",-1))]),o.value?(F(),q("div",ym,[k(A(Zr),{class:"w-4 h-4 text-red-500 shrink-0"}),f("span",null,ie(o.value),1)])):je("",!0),f("form",{onSubmit:Ls(l,["prevent"]),class:"space-y-4"},[f("div",null,[c[15]||(c[15]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Título do Anúncio *",-1)),re(f("input",{"onUpdate:modelValue":c[2]||(c[2]=p=>a.titulo=p),type:"text",required:"",placeholder:"Ex: Apartamento decorado no centro",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.titulo]])]),f("div",wm,[f("div",null,[c[17]||(c[17]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Tipo *",-1)),re(f("select",{"onUpdate:modelValue":c[3]||(c[3]=p=>a.tipo=p),required:"",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition cursor-pointer"},[...c[16]||(c[16]=[f("option",{value:"Apartamento"},"Apartamento",-1),f("option",{value:"Casa"},"Casa",-1),f("option",{value:"Cobertura"},"Cobertura",-1)])],512),[[ts,a.tipo]])]),f("div",null,[c[18]||(c[18]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Preço (R$) *",-1)),re(f("input",{"onUpdate:modelValue":c[4]||(c[4]=p=>a.preco=p),type:"number",required:"",placeholder:"Ex: 450000",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.preco]])])]),f("div",null,[c[19]||(c[19]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Localização *",-1)),re(f("input",{"onUpdate:modelValue":c[5]||(c[5]=p=>a.localizacao=p),type:"text",required:"",placeholder:"Cidade, Estado ou Bairro",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.localizacao]])]),f("div",xm,[f("div",null,[c[20]||(c[20]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Quartos",-1)),re(f("input",{"onUpdate:modelValue":c[6]||(c[6]=p=>a.quartos=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.quartos]])]),f("div",null,[c[21]||(c[21]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Banheiros",-1)),re(f("input",{"onUpdate:modelValue":c[7]||(c[7]=p=>a.banheiros=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.banheiros]])]),f("div",null,[c[22]||(c[22]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Vagas",-1)),re(f("input",{"onUpdate:modelValue":c[8]||(c[8]=p=>a.vagas=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.vagas]])]),f("div",null,[c[23]||(c[23]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Área (m²)",-1)),re(f("input",{"onUpdate:modelValue":c[9]||(c[9]=p=>a.area=p),type:"number",placeholder:"0",class:"w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.area]])])]),f("div",null,[c[24]||(c[24]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"Descrição do Imóvel",-1)),re(f("textarea",{"onUpdate:modelValue":c[10]||(c[10]=p=>a.descricao=p),rows:"3",placeholder:"Descreva os detalhes importantes...",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition resize-none"},null,512),[[we,a.descricao]])]),f("div",null,[c[25]||(c[25]=f("label",{class:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block"},"URL da Imagem do Imóvel",-1)),re(f("input",{"onUpdate:modelValue":c[11]||(c[11]=p=>a.imagem=p),type:"url",placeholder:"Ex: https://images.unsplash.com/...",class:"w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"},null,512),[[we,a.imagem]])]),f("div",Im,[re(f("input",{"onUpdate:modelValue":c[12]||(c[12]=p=>a.destaque=p),id:"destaque",type:"checkbox",class:"w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"},null,512),[[Uu,a.destaque]]),c[26]||(c[26]=f("label",{for:"destaque",class:"text-xs font-semibold text-slate-600 cursor-pointer select-none"},"Exibir em destaque na página inicial",-1))]),f("div",Em,[f("button",{type:"button",onClick:c[13]||(c[13]=p=>s("close")),class:"flex-1 py-2.5 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 transition active:scale-[0.98]"}," Cancelar "),f("button",{type:"submit",disabled:i.value,class:"flex-1 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"},[i.value?(F(),Sn(A(ei),{key:0,class:"w-4 h-4 animate-spin"})):je("",!0),c[27]||(c[27]=f("span",null,"Cadastrar Imóvel",-1))],8,Sm)])],32)])])):je("",!0)}},Cm={class:"bg-slate-900 border-t border-slate-800 text-slate-400 py-16"},km={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Am={class:"grid grid-cols-1 md:grid-cols-4 gap-10"},Pm={class:"space-y-4"},Rm={class:"flex items-center gap-2 text-white font-extrabold text-lg tracking-tight"},Om={class:"flex items-center gap-3 pt-2"},Mm={href:"#",class:"p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition"},Nm={href:"#",class:"p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition"},Dm={href:"#",class:"p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition"},Lm={class:"space-y-3 text-xs"},Um={class:"flex items-center gap-2"},$m={class:"flex items-center gap-2"},Fm={class:"flex items-center gap-2"},jm={class:"mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"},Vm={__name:"Footer",setup(t){return(e,n)=>(F(),q("footer",Cm,[f("div",km,[f("div",Am,[f("div",Pm,[f("div",Rm,[k(A(gl),{class:"w-5 h-5 text-brand-500"}),n[0]||(n[0]=f("span",null,[Pt("Prime"),f("span",{class:"text-slate-300 font-medium"},"Imóveis")],-1))]),n[1]||(n[1]=f("p",{class:"text-xs leading-relaxed text-slate-400"}," A Prime Imóveis conecta você ao imóvel ideal com simplicidade, tecnologia e segurança. Oferecemos as melhores oportunidades de compra e locação de alto padrão. ",-1)),f("div",Om,[f("a",Mm,[k(A(Lp),{class:"w-4 h-4"})]),f("a",Nm,[k(A(Mp),{class:"w-4 h-4"})]),f("a",Dm,[k(A(Up),{class:"w-4 h-4"})])])]),n[6]||(n[6]=Yt('<div><h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navegação</h3><ul class="space-y-2 text-xs"><li><a href="#" class="hover:text-white transition">Comprar Imóveis</a></li><li><a href="#" class="hover:text-white transition">Alugar Imóveis</a></li><li><a href="#" class="hover:text-white transition">Lançamentos</a></li><li><a href="#" class="hover:text-white transition">Anunciar Meu Imóvel</a></li><li><a href="#" class="hover:text-white transition">Simulação de Financiamento</a></li></ul></div><div><h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Empresa</h3><ul class="space-y-2 text-xs"><li><a href="#" class="hover:text-white transition">Quem Somos</a></li><li><a href="#" class="hover:text-white transition">Nossas Unidades</a></li><li><a href="#" class="hover:text-white transition">Trabalhe Conosco</a></li><li><a href="#" class="hover:text-white transition">Políticas de Privacidade</a></li><li><a href="#" class="hover:text-white transition">Termos de Uso</a></li></ul></div>',2)),f("div",Lm,[n[5]||(n[5]=f("h3",{class:"text-sm font-bold text-white mb-4 uppercase tracking-wider"},"Fale Conosco",-1)),f("div",Um,[k(A(Vp),{class:"w-4 h-4 text-brand-500 shrink-0"}),n[2]||(n[2]=f("span",null,"0800 555 7788",-1))]),f("div",$m,[k(A(ml),{class:"w-4 h-4 text-brand-500 shrink-0"}),n[3]||(n[3]=f("span",null,"contato@primeimoveis.com",-1))]),f("div",Fm,[k(A(ti),{class:"w-4 h-4 text-brand-500 shrink-0"}),n[4]||(n[4]=f("span",null,"Av. Paulista, 1000 - São Paulo, SP",-1))])])]),f("div",jm,[f("span",null,"© "+ie(new Date().getFullYear())+" Prime Imóveis. Todos os direitos reservados. CRECI: 12345-J",1),n[7]||(n[7]=f("div",{class:"flex gap-4"},[f("a",{href:"#",class:"hover:text-white transition"},"Políticas"),f("a",{href:"#",class:"hover:text-white transition"},"Segurança")],-1))])])]))}},Bm={class:"min-h-screen flex flex-col bg-slate-50 selection:bg-brand-500 selection:text-white"},Hm={class:"flex-grow"},Wm={__name:"App",setup(t){const e=ve({}),n=ve(!1),s=ve(!1),r=ve(null),i=a=>{e.value=a},o=()=>{r.value&&r.value.fetchImoveis()};return(a,l)=>(F(),q("div",Bm,[k(pg,{onOpenAuth:l[0]||(l[0]=u=>n.value=!0),onOpenNewProperty:l[1]||(l[1]=u=>s.value=!0)}),f("main",Hm,[k(kg,{onSearch:i}),k(sm,{ref_key:"gridRef",ref:r,filters:e.value},null,8,["filters"])]),k(Vm),k(mm,{"is-open":n.value,onClose:l[2]||(l[2]=u=>n.value=!1)},null,8,["is-open"]),k(Tm,{"is-open":s.value,onClose:l[3]||(l[3]=u=>s.value=!1),onPropertyCreated:o},null,8,["is-open"])]))}};Bu(Wm).mount("#app");
