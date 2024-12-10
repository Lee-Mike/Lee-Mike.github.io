import{o as a,e as m,f as e,d as L,b as C,p as S,q as h,s as k,_ as T,v as w,w as R,x as Z,c as z,a as F,y as I,z as N,A as U,B as E,C as q,D as O,E as W,G,H as X,I as j,J,K,L as Q,M as Y,g as s,N as ee,l as o,t as te,n as p,i as M,O as V,S as P,m as y,P as se,Q as B,R as H,T as oe,j as ne,U as b,V as le,W as ae,F as ie,X as re,Y as ce,Z as ue,$ as A,a0 as de,a1 as me}from"./index-PKNnlPHB.js";import{N as _e}from"./NoteDisplay-7hIurJn2.js";import ve from"./DrawingControls-1mjexssU.js";const pe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},he=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),fe=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ge=[he,fe];function xe(d,i){return a(),m("svg",pe,[...ge])}const we={name:"carbon-zoom-out",render:xe},ye={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},be=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),Ce=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Se=[be,Ce];function ke(d,i){return a(),m("svg",ye,[...Se])}const $e={name:"carbon-zoom-in",render:ke},ze={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ne=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),Me=[Ne];function Ve(d,i){return a(),m("svg",ze,[...Me])}const Pe={name:"carbon-renew",render:Ve},Be={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},He=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ae=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),Le=[He,Ae];function Te(d,i){return a(),m("svg",Be,[...Le])}const De={name:"carbon-time",render:Te},Re="/assets/logo-title-horizontal-XSaaVPPu.png",Ze=L({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(d){const i=d,f=C(()=>{var r,c,n;return(n=(c=(r=S.value)==null?void 0:r.meta)==null?void 0:c.slide)==null?void 0:n.note}),g=C(()=>{var r,c,n;return(n=(c=(r=S.value)==null?void 0:r.meta)==null?void 0:c.slide)==null?void 0:n.noteHTML});return(r,c)=>(a(),h(_e,{class:k(i.class),note:f.value,"note-html":g.value},null,8,["class","note","note-html"]))}}),Fe=T(Ze,[["__file","C:/Users/Intel/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteStatic.vue"]]),Ie={class:"bg-main h-full slidev-presenter"},Ue={class:"grid-section top flex"},Ee={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},qe={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Oe={class:"border-t border-main py-1 px-2 text-sm"},We={class:"grid-section bottom"},Ge={class:"progress-bar"},Xe=L({__name:"Presenter",setup(d){const i=w();R(),Z(i);const f=z.titleTemplate.replace("%s",z.title||"Slidev");F({title:`Presenter - ${f}`}),w(!1);const{timer:g,resetTimer:r}=I(),c=w([]),n=C(()=>N.value<U.value?{route:S.value,clicks:N.value+1}:E.value?{route:q.value,clicks:0}:null);return O(),W(()=>{const $=i.value.querySelector("#slide-content"),t=G(X()),x=j();J(()=>{if(!x.value||Q.value||!Y.value)return;const u=$.getBoundingClientRect(),_=(t.x-u.left)/u.width*100,v=(t.y-u.top)/u.height*100;if(!(_<0||_>100||v<0||v>100))return{x:_,y:v}},u=>{K.cursor=u})}),($,t)=>{const x=De,u=Pe,_=$e,v=we;return a(),m(ie,null,[e("div",Ie,[e("div",{class:k(["grid-container",`layout${s(ee)}`])},[e("div",Ue,[t[6]||(t[6]=e("img",{src:Re,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),t[7]||(t[7]=e("div",{class:"flex-auto"},null,-1)),e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:t[0]||(t[0]=(...l)=>s(r)&&s(r)(...l))},[o(x,{class:"absolute"}),o(u,{class:"absolute opacity-0"})]),e("div",Ee,te(s(g)),1)]),e("div",{ref_key:"main",ref:i,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:p(s(M))},[o(P,{key:"main",class:"h-full w-full"},{default:V(()=>[o(re,{"render-context":"presenter"})]),_:1}),t[8]||(t[8]=e("div",{class:"context"}," current ",-1))],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:p(s(M))},[n.value?(a(),h(P,{key:"next",class:"h-full w-full"},{default:V(()=>{var l;return[o(s(ue),{is:(l=n.value.route)==null?void 0:l.component,"clicks-elements":c.value,"onUpdate:clicksElements":t[1]||(t[1]=D=>c.value=D),clicks:n.value.clicks,"clicks-disabled":!1,class:k(s(ce)(n.value.route)),route:n.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):y("v-if",!0),t[9]||(t[9]=e("div",{class:"context"}," next ",-1))],4),y(" Notes "),(a(),m("div",qe,[(a(),h(Fe,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:p({fontSize:`${s(se)}em`})},null,8,["style"])),e("div",Oe,[e("button",{class:"slidev-icon-btn",onClick:t[2]||(t[2]=(...l)=>s(B)&&s(B)(...l))},[o(A,{text:"Increase font size"}),o(_)]),e("button",{class:"slidev-icon-btn",onClick:t[3]||(t[3]=(...l)=>s(H)&&s(H)(...l))},[o(A,{text:"Decrease font size"}),o(v)]),y("v-if",!0)])])),e("div",We,[o(de,{persist:!0})]),(a(),h(ve,{key:2}))],2),e("div",Ge,[e("div",{class:"progress h-2px bg-primary transition-all",style:p({width:`${(s(oe)-1)/(s(ne)-1)*100}%`})},null,4)])]),o(me),o(ae,{modelValue:s(b),"onUpdate:modelValue":t[5]||(t[5]=l=>le(b)?b.value=l:null)},null,8,["modelValue"])],64)}}}),Qe=T(Xe,[["__scopeId","data-v-3763fe16"],["__file","C:/Users/Intel/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Qe as default};