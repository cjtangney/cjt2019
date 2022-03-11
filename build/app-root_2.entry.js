/*!
 * Built with Stencil
 * Copyright © VFH 2022
 */
import{r as t,h as e,g as n,f as s,a as o}from"./index-9bbefc3b.js";import"./utils-73a6c04f.js";class r{constructor(t={}){this.queue=[];this.backgroundQueue=[];this.lazyImageObserver=null;this.lazyBgObserver=null;this.options=t}initialize(){this.queue=[];this.backgroundQueue=[];this.lazyImageObserver=null;this.lazyBgObserver=null;this.getImagesToLazyLoad();if(!("IntersectionObserver"in window)){this.abort();return}this.onContentLoaded();this.setGenericPlaceholder();this.queue.forEach((t=>{this.lazyImageObserver.observe(t)}));this.backgroundQueue.forEach((t=>{this.lazyBgObserver.observe(t)}))}getImagesToLazyLoad(){this.queue=document.querySelectorAll(".img-load-lazy");this.backgroundQueue=document.querySelectorAll(".lazy-load-bg")}setGenericPlaceholder(){if(this.options.genericImagePlaceholder){this.queue.forEach((t=>{t.setAttribute("src",this.options.genericImagePlaceholder)}))}if(this.options.genericBgPlaceholder){this.backgroundQueue.forEach((t=>{t.style.backgroundColor=this.options.genericBgPlaceholder}))}}onContentLoaded(){this.lazyImageObserver=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const e=t.target;if(e.classList.contains("img-load-lazy")){if(e.dataset.src){e.src=e.dataset.src}if(e.dataset.srcset){e.srcset=e.dataset.srcset}e.classList.remove("img-load-lazy");e.classList.add("img-hydrated");this.lazyImageObserver.unobserve(e)}}}))}));this.lazyBgObserver=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting&&t.target.classList.contains("lazy-load-bg")){const e=t.target.getAttribute("data-webp");if(this.webpSupported&&e&&e!==""){t.target.setAttribute("style",`background-image: url(${e})`)}t.target.classList.remove("lazy-load-bg");t.target.classList.add("img-hydrated");this.lazyBgObserver.unobserve(t.target)}}))}))}abort(){for(let t=0;t<this.queue.length;t+=1){this.queue[t].setAttribute("src",this.queue[t].getAttribute("data-src"));this.queue[t].classList.remove("img-load-lazy");this.queue[t].classList.add("img-hydrated")}for(let t=0;t<this.backgroundQueue.length;t+=1){this.backgroundQueue[t].classList.remove("lazy-load-bg")}}}let i=class{constructor(e){t(this,e)}componentWillLoad(){globalThis.imageLoader=new r}componentDidLoad(){globalThis.imageLoader.initialize()}componentDidRender(){setTimeout((()=>{const{hash:t}=window.location;if(t){const e=document.getElementById(t.substring(1));if(e){e.scrollIntoView()}}}),500)}render(){return e("div",{class:"app-root"},e("slot",null))}};const c=(t,e,n)=>{const s=t.get(e);if(!s){t.set(e,[n])}else if(!s.includes(n)){s.push(n)}};const u=(t,e)=>{let n;return(...s)=>{if(n){clearTimeout(n)}n=setTimeout((()=>{n=0;t(...s)}),e)}};const a=t=>!("isConnected"in t)||t.isConnected;const l=u((t=>{for(let e of t.keys()){t.set(e,t.get(e).filter(a))}}),2e3);const h=()=>{if(typeof n!=="function"){return{}}const t=new Map;return{dispose:()=>t.clear(),get:e=>{const s=n();if(s){c(t,e,s)}},set:e=>{const n=t.get(e);if(n){t.set(e,n.filter(s))}l(t)},reset:()=>{t.forEach((t=>t.forEach(s)));l(t)}}};const d=(t,e=((t,e)=>t!==e))=>{let n=new Map(Object.entries(t!==null&&t!==void 0?t:{}));const s={dispose:[],get:[],set:[],reset:[]};const o=()=>{n=new Map(Object.entries(t!==null&&t!==void 0?t:{}));s.reset.forEach((t=>t()))};const r=()=>{s.dispose.forEach((t=>t()));o()};const i=t=>{s.get.forEach((e=>e(t)));return n.get(t)};const c=(t,o)=>{const r=n.get(t);if(e(o,r,t)){n.set(t,o);s.set.forEach((e=>e(t,o,r)))}};const u=typeof Proxy==="undefined"?{}:new Proxy(t,{get(t,e){return i(e)},ownKeys(t){return Array.from(n.keys())},getOwnPropertyDescriptor(){return{enumerable:true,configurable:true}},has(t,e){return n.has(e)},set(t,e,n){c(e,n);return true}});const a=(t,e)=>{s[t].push(e);return()=>{f(s[t],e)}};const l=(e,n)=>{const s=a("set",((t,s)=>{if(t===e){n(s)}}));const o=a("reset",(()=>n(t[e])));return()=>{s();o()}};const h=(...t)=>{const e=t.reduce(((t,e)=>{if(e.set){t.push(a("set",e.set))}if(e.get){t.push(a("get",e.get))}if(e.reset){t.push(a("reset",e.reset))}if(e.dispose){t.push(a("dispose",e.dispose))}return t}),[]);return()=>e.forEach((t=>t()))};const d=t=>{const e=n.get(t);s.set.forEach((n=>n(t,e,e)))};return{state:u,get:i,set:c,on:a,onChange:l,use:h,dispose:r,reset:o,forceUpdate:d}};const f=(t,e)=>{const n=t.indexOf(e);if(n>=0){t[n]=t[t.length-1];t.length--}};const p=(t,e)=>{const n=d(t,e);n.use(h());return n};const m=t=>{var e;const n=window;const s=new URL(n.location.href);const o=(e=t===null||t===void 0?void 0:t.parseURL)!==null&&e!==void 0?e:w;const{state:r,onChange:i,dispose:c}=p({url:s,activePath:o(s)},((t,e,n)=>{if(n==="url"){return t.href!==e.href}return t!==e}));const u=t=>{history.pushState(null,null,t);const e=new URL(t,document.baseURI);r.url=e;r.activePath=o(e)};const a=t=>{const{activePath:e}=r;for(let n of t){const s=y(e,n.path);if(s){if(n.to!=null){const s=typeof n.to==="string"?n.to:n.to(e);u(s);return a(t)}else{return{params:s,route:n}}}}return undefined};const l=()=>{const t=new URL(n.location.href);r.url=t;r.activePath=o(t)};const h=(t,e)=>{const n=a(e);if(n){if(typeof n.route.jsx==="function"){return n.route.jsx(n.params)}else{return n.route.jsx}}};const d=()=>{n.removeEventListener("popstate",l);c()};const f={Switch:h,get url(){return r.url},get activePath(){return r.activePath},push:u,onChange:i,dispose:d};l();n.addEventListener("popstate",l);return f};const g=(t,e)=>{var n;if("to"in t){return{path:t.path,to:t.to}}return{path:t.path,id:t.id,jsx:(n=t.render)!==null&&n!==void 0?n:e}};const y=(t,e)=>{if(typeof e==="string"){if(e===t){return{}}}else if(typeof e==="function"){const n=e(t);if(n){return n===true?{}:{...n}}}else{const n=e.exec(t);if(n){e.lastIndex=0;return{...n}}}return undefined};const w=t=>t.pathname.toLowerCase();const b=m();let v=class{constructor(e){t(this,e)}componentDidRender(){return this.fetchContents()}fetchContents(){const t=document.location.pathname;fetch(`/html${t}/index.html`).then((t=>{if(t.ok){return t.text()}throw new Error("missing component")})).then((t=>{const e=new DOMParser;const n=e.parseFromString(t,"text/html");this.markup=n.firstElementChild.outerHTML;if(n.body.querySelector("script")){this.injectBodyScripts(Array.from(n.querySelectorAll("script")))}})).catch((t=>{console.error(t)}))}injectBodyScripts(t){globalThis.imageLoader.initialize();t.forEach(((t,e)=>{if(!document.body.querySelector(`script#injected-script_${e}`)){setTimeout((()=>{const n=document.createElement("script");n.setAttribute("id",`injected-script_${e}`);n.innerHTML=t.innerHTML;document.body.appendChild(n)}),50)}}))}render(){return e(b.Switch,null,e(g,{path:document.location.pathname,render:()=>e("main",{class:"page-root",innerHTML:this.markup})}))}get root(){return o(this)}};export{i as app_root,v as static_router};
//# sourceMappingURL=app-root_2.entry.js.map