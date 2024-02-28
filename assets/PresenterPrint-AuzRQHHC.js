import{d,u as _,a as u,c as m,b as h,r as p,e as a,f as t,t as o,g as r,F as v,h as f,n as g,i as x,o as n,j as b,k as y,l as N,m as k,_ as P}from"./index-YH84YRHL.js";import{N as w}from"./NoteDisplay-cCdSzokC.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
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
`),u({title:`Notes - ${m.title}`});const i=h(()=>p.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(n(),a("div",{id:"page-root",style:g(r(x))},[t("div",V,[t("div",L,[t("h1",S,o(r(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(n(!0),a(v,null,f(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(r(b)),1),y(" "+o(e==null?void 0:e.title)+" ",1),j])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/Users/lishuai/.nvm/versions/node/v20.7.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
