(function(t){function e(e){for(var r,s,n=e[0],l=e[1],c=e[2],d=0,u=[];d<n.length;d++)s=n[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);v&&v(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var v=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-card",{attrs:{color:"grey lighten-4",flat:"",height:"200px",tile:""}},[a("v-toolbar",{staticClass:"indigo lighten-1 white--text text-center"},[a("v-icon",[t._v("mdi-pizza")]),a("v-toolbar-title",[t._v("Pizza")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("Carrinho")],1)],1),a("Banner"),a("Produtos"),a("Rodape")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"indigo lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e)+" ")])],1)})),1),a("v-card-text",{staticClass:"white--text pt-0"},[t._v(" As melhores pizzas você encontra aqui. Desde 2412 ofecendo massas com nanotecnologia, onde você controla todo o processo e preparação da sua pizza com a mente! Possuímos delivery com teletransporte e degustação prévia, caso não goste da qualidade de nossas pizzas. ")]),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Mundo de Pizza")])])],1)],1)},n=[],l={name:"Rodape",data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-instagram"]}}},c=l,v=a("2877"),d=a("6544"),u=a.n(d),p=a("8336"),h=a("b0af"),m=a("99d9"),g=a("ce7e"),f=a("553a"),b=a("132d"),w=Object(v["a"])(c,s,n,!1,null,null,null),x=w.exports;u()(w,{VBtn:p["a"],VCard:h["a"],VCardText:m["c"],VDivider:g["a"],VFooter:f["a"],VIcon:b["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{attrs:{cycle:"",height:"300","hide-delimiter-background":"","show-arrows-on-hover":""}},[a("v-carousel-item",[a("v-sheet",{style:{"background-image":"url(https://cdn.vuetifyjs.com/images/parallax/material.jpg)"},attrs:{height:"100%"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-h3 white--text"},[t._v(" Promoção do Dia ")])])],1)],1),a("v-carousel-item",[a("v-sheet",{style:{"background-image":"url(https://cdn.vuetifyjs.com/images/parallax/material2.jpg)"},attrs:{color:"#5CB9B8",height:"100%"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-h4"},[t._v(" Segunda/Terça/Quarta - Mussarela R$15,00 ")])])],1)],1),a("v-carousel-item",[a("v-sheet",{style:{"background-image":"url(https://cdn.vuetifyjs.com/images/parallax/material2.jpg)"},attrs:{color:"#ADCF98",height:"100%"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-h4",attrs:{background:""}},[t._v(" Quinta/Sexta - Calabresa R$20,00 ")])])],1)],1),a("v-carousel-item",[a("v-sheet",{style:{"background-image":"url(https://cdn.vuetifyjs.com/images/parallax/material2.jpg)"},attrs:{color:"#CF9898",height:"100%"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-h4"},[t._v(" Sabado/Domingo - Marguerita R$15,00 ")])])],1)],1)],1)},V=[],y={name:"Banner",data:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third","Fourth","Fifth"]}}},C=y,k=a("5e66"),j=a("3e35"),S=a("0fd9"),T=a("8dd9"),F=Object(v["a"])(C,_,V,!1,null,null,null),P=F.exports;u()(F,{VCarousel:k["a"],VCarouselItem:j["a"],VRow:S["a"],VSheet:T["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"grey lighten-5"},[a("v-text",{staticClass:" pt-0"},[t._v("Teste")]),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300"}},[a("v-img",{attrs:{src:"https://uploads.metropoles.com/wp-content/uploads/2020/09/28085236/Pizza-de-mussarela-com-massa-de-frango-proteica-foto-divulga%C3%A7%C3%A3o.jpg",height:"200px"}}),a("v-card-title",[t._v(" Mussarela ")]),a("v-card-subtitle",[t._v(" R$ 25,00 ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange lighten-2",text:""}},[t._v(" Mais detalhes ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",[t._v(" Mussarela ")])],1)])],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300"}},[a("v-img",{attrs:{src:"https://curtarecife.com.br/wp-content/uploads/2021/04/PIZZARIA-EM-RECIFE-700x420.png",height:"200px"}}),a("v-card-title",[t._v(" Calabresa ")]),a("v-card-subtitle",[t._v(" R$ 30,00 ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange lighten-2",text:""}},[t._v(" Mais detalhes ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",[t._v(" Mussarela ")])],1)])],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300"}},[a("v-img",{attrs:{src:"https://s.cornershopapp.com/product-images/4653848.jpg?versionId=JpQ4iLTDU20SJD5SKj0lp_Qd0olS32ae",height:"200px"}}),a("v-card-title",[t._v(" Marguerita ")]),a("v-card-subtitle",[t._v(" R$ 25,00 ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange lighten-2",text:""}},[t._v(" Mais detalhes ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",[t._v(" Mussarela ")])],1)])],1)],1)],1)],1)},M=[],O={name:"Produtos",data:function(){return{show:!1,show1:!1,show2:!1}}},z=O,A=a("62ad"),R=a("a523"),D=a("0789"),$=a("adda"),B=a("2fa4"),E=Object(v["a"])(z,I,M,!1,null,null,null),L=E.exports;u()(E,{VBtn:p["a"],VCard:h["a"],VCardActions:m["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"],VCol:A["a"],VContainer:R["a"],VDivider:g["a"],VExpandTransition:D["a"],VIcon:b["a"],VImg:$["a"],VRow:S["a"],VSpacer:B["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[a("v-icon",t._g(t._b({attrs:{color:"primary",dark:""}},"v-icon",i,!1),r),[t._v(" mdi-cart ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v("Settings")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Save ")])],1)],1),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-subheader",[t._v("User Controls")]),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Content filtering")]),a("v-list-item-subtitle",[t._v("Set the content filtering level to restrict apps that can be downloaded")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Password")]),a("v-list-item-subtitle",[t._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-subheader",[t._v("General")]),a("v-list-item",[a("v-list-item-action",[a("v-checkbox",{model:{value:t.notifications,callback:function(e){t.notifications=e},expression:"notifications"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Notifications")]),a("v-list-item-subtitle",[t._v("Notify me about updates to apps or games that I downloaded")])],1)],1),a("v-list-item",[a("v-list-item-action",[a("v-checkbox",{model:{value:t.sound,callback:function(e){t.sound=e},expression:"sound"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Sound")]),a("v-list-item-subtitle",[t._v("Auto-update apps at any time. Data charges may apply")])],1)],1),a("v-list-item",[a("v-list-item-action",[a("v-checkbox",{model:{value:t.widgets,callback:function(e){t.widgets=e},expression:"widgets"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Auto-add widgets")]),a("v-list-item-subtitle",[t._v("Automatically add home screen widgets")])],1)],1)],1)],1)],1)],1)},J=[],Q={name:"Carrinho",data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1}}},q=Q,U=a("ac7c"),Z=a("169a"),G=a("8860"),K=a("da13"),Y=a("1800"),H=a("5d23"),W=a("e0c7"),X=a("71d9"),tt=a("2a7f"),et=Object(v["a"])(q,N,J,!1,null,null,null),at=et.exports;u()(et,{VBtn:p["a"],VCard:h["a"],VCheckbox:U["a"],VDialog:Z["a"],VDivider:g["a"],VIcon:b["a"],VList:G["a"],VListItem:K["a"],VListItemAction:Y["a"],VListItemContent:H["a"],VListItemSubtitle:H["b"],VListItemTitle:H["c"],VRow:S["a"],VSpacer:B["a"],VSubheader:W["a"],VToolbar:X["a"],VToolbarItems:tt["a"],VToolbarTitle:tt["b"]});var rt={name:"App",components:{Produtos:L,Banner:P,Rodape:x,Carrinho:at},data:function(){return{drawer:!1,group:null}}},it=rt,ot=a("7496"),st=Object(v["a"])(it,i,o,!1,null,null,null),nt=st.exports;u()(st,{VApp:ot["a"],VBtn:p["a"],VCard:h["a"],VIcon:b["a"],VSpacer:B["a"],VToolbar:X["a"],VToolbarTitle:tt["b"]});var lt=a("8c4f");r["a"].use(lt["a"]);var ct=[{path:"/",name:"App",component:nt}],vt=new lt["a"]({mode:"history",base:"/",routes:ct}),dt=vt,ut=a("2f62");r["a"].use(ut["a"]);var pt=new ut["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ht=a("f309"),mt=a("cb06");r["a"].use(ht["a"]);var gt=new ht["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{pt:mt["a"]},current:"pt"}});r["a"].config.productionTip=!1,new r["a"]({router:dt,store:pt,vuetify:gt,render:function(t){return t(nt)}}).$mount("#app")}});
//# sourceMappingURL=app.4c5fed2f.js.map