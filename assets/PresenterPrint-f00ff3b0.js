import{d as _,u as d,a as p,c as m,b as h,r as u,e as n,f as t,t as o,g as a,F as f,h as g,n as v,i as x,o as r,j as y,k as b,l as k,m as N,_ as P}from"./index-0401a8e4.js";import{N as w}from"./NoteDisplay-0f567f42.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},j={class:"font-bold flex gap-2"},B={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),H={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(z){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>u.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(r(),n("div",{id:"page-root",style:v(a(x))},[t("div",V,[t("div",D,[t("h1",L,o(a(m).title),1),t("div",S,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",j,[t("div",B,o(e==null?void 0:e.no)+"/"+o(a(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),C])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",H)):N("v-if",!0)]))),128))])],4))}}),E=P(M,[["__file","C:/Users/aylis/Documents/Projects_Mike/Presentation/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
