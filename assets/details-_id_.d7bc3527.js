import{u as m,v}from"./useRequest.2fe96640.js";import{q as _,r,u as x,s as p,o as i,c as l,v as t,x as g,a as s,t as c}from"./entry.01bd1053.js";const f={class:"details relative"},u={key:0,"element-loading-background":"rgba(0, 0, 0, 0)",class:"h-[32rem]"},w={key:1,class:"container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-12 gap-8"},y={class:"xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden"},z=["src","alt"],b={class:"col-span-2 md:grid gap-4 items-center"},k={class:"col-span-3 flex flex-col gap-10"},B={class:"mt-8 xl:mt-0 xl:text-4xl capitalize font-sans text-2xl font-bold"},M={class:"flex items-center gap-4 font-medium text-dryGray"},V={class:"flex-colo bg-red-600 text-xs px-2 py-1"},R={class:"flex items-center gap-2"},D={class:"text-sm font-medium"},S={class:"flex items-center gap-2"},T=s("svg",{stroke:"#dc2626",fill:"#dc2626","stroke-width":"0",viewBox:"0 0 448 512",class:"text-subMain w-3 h-3",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"})],-1),q={class:"text-sm font-medium"},C={class:"flex items-center gap-2"},G=s("svg",{stroke:"#dc2626",fill:"#dc2626","stroke-width":"0",viewBox:"0 0 24 24",class:"text-subMain w-3 h-3",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}),s("path",{d:"M13 7h-2v6h6v-2h-4z"})],-1),H={class:"text-sm font-medium"},I={class:"text-text text-sm leading-7"},L=_({__name:"details-[id]",setup(P){const e=r({Title:""}),{params:n}=x(),o=r(!0);return p(async()=>{if(!n.id){o.value=!1;return}const d=n.id.toString();await m.fetchMovieById(d).then(a=>{a&&(e.value=a,o.value=!1)})}),(d,a)=>{const h=v;return i(),l("div",f,[t(o)?g((i(),l("div",u,null,512)),[[h,t(o)]]):(i(),l("div",w,[s("div",y,[s("img",{src:t(e).Poster,alt:t(e).Title,class:"w-full h-full object-cover"},null,8,z)]),s("div",b,[s("div",k,[s("h1",B,c(t(e).Title),1),s("div",M,[s("div",V,c(t(e).imdbRating),1),s("div",R,[s("span",D,c(t(e).Genre),1)]),s("div",S,[T,s("span",q,c(t(e).Year),1)]),s("div",C,[G,s("span",H,c(t(e).Runtime),1)])]),s("p",I,c(t(e).Plot),1)])])]))])}}});export{L as default};
