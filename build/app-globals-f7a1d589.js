/*!
 * Built with Stencil
 * Copyright © VFH 2022
 */
import{R as i,_ as s}from"./utils-73a6c04f.js";const t={flexBasis:.41666666667,minWidth:250};class r extends i.ResizeObserver{constructor(){super((i=>{i.forEach((i=>{const s=Array.from(i.target.classList);if(s.some((i=>/c3-card/g.test(i))))this.wrapCard(i.target);if(s.some((i=>/c3-flex-list/g.test(i))))this.wrapInlineListGroup(i.target)}))}))}wrapCard(i){let s="c3-card";if(i.closest("c3-card").getAttribute("full-bleed")!==null){s=`${s}_full-bleed`}if(i.closest("c3-card").getAttribute("card-style")!==null){s=`${s}_${i.closest("c3-card").getAttribute("card-style")}`}if(i.offsetWidth*t.flexBasis<t.minWidth){i.classList.forEach((t=>{if(t.includes(s)&&t.includes("_img-left"))i.classList.replace(t,s);if(t.includes(s)&&t.includes("_img-right"))i.classList.replace(t,s)}))}else if(i.closest("c3-card").getAttribute("card-orientation")){i.classList.forEach((t=>{i.classList.replace(t,`${s}_${i.closest("c3-card").getAttribute("card-orientation")}`)}))}else{i.classList.forEach((t=>{i.classList.replace(t,`${s}_img-left`)}))}if(i.closest("c3-card").getAttribute("classes")!==null){i.closest("c3-card").getAttribute("classes").split(" ").forEach((s=>{i.classList.add(s)}))}}wrapInlineListGroup(i){if(window.innerWidth>s.md){if(i.classList.contains("justify-left")){if(i.firstElementChild.offsetHeight>parseInt(window.getComputedStyle(i.querySelector(".list-group-item")).marginBottom,10)+parseInt(window.getComputedStyle(i.querySelector(".list-group-item")).marginTop,10)+i.querySelector(".list-group-item").offsetHeight){let s=i.querySelector(".list-group-item").getBoundingClientRect().y;Array.from(i.querySelectorAll(".list-group-item")).forEach(((i,t)=>{if(t>0){const t=i.getBoundingClientRect();if(t.y>s){i.classList.add("ps-0");s=t.y}}}))}else{Array.from(i.querySelectorAll(".list-group-item")).forEach(((i,s)=>{if(s>0){i.classList.remove("ps-0")}}))}}}else{Array.from(i.querySelectorAll(".list-group-item")).forEach(((i,s)=>{if(s>0){i.classList.remove("ps-0")}}))}}}const e=new r;const l=async()=>{globalThis.resizeObserver=e};const c=l;export{c as g};
//# sourceMappingURL=app-globals-f7a1d589.js.map