(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/scanto3d/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"149c":function(t,e,n){"use strict";n("e42e")},"182a":function(t,e,n){"use strict";n("a661")},"2d49":function(t,e,n){},3547:function(t,e,n){t.exports=n.p+"img/phone.aa114d3e.png"},"483a":function(t,e,n){},"4f9a":function(t,e,n){t.exports=n.p+"img/devices_.29c2c55c.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("div",{attrs:{id:"mainContent"}},["homepage"===t.showPage?n("Homepage",{on:{showInterface:t.updatePage}}):t._e(),"architect"===t.showPage?n("FindArchitect"):t._e()],1),n("Footer")],1)},o=[],r=(n("f9e3"),n("2dd8"),n("5f5b")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homepage"},[n("Introduction"),n("div",{attrs:{id:"grad"}},[n("b-row",{staticClass:"minSectionHeight",attrs:{"align-h":"center","align-v":"center"}},[n("FloorplanSection")],1),n("b-row",{staticClass:"minSectionHeight",attrs:{"align-h":"center","align-v":"center"}},[n("ArchitectSection",{on:{showInterface:t.updateInterface}})],1),n("b-row",{staticClass:"minSectionHeight",attrs:{"align-h":"center","align-v":"center"}},[n("ScanSection")],1)],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"introduction"},[a("div",{staticClass:"bg"}),a("b-row",{staticClass:"minSectionHeight",attrs:{"align-v":"center"}},[a("b-col",{attrs:{cols:"4",id:"rhsSection"}},[a("div",{staticStyle:{position:"absolute",bottom:"0",left:"0"}},[a("img",{attrs:{src:n("3547"),id:"introImage"}})])]),a("b-col",{attrs:{cols:"8"}},[a("div",{staticStyle:{"text-align":"left"}},[a("p",{staticStyle:{color:"black"}},[t._v("OPAL AI presents")]),a("h1",{staticClass:"intro_title"},[t._v("ScanTo3D")])]),a("div",{attrs:{id:"taglines"}},[a("p",{staticStyle:{"padding-left":"6vw"}},[t._v("Instant 3D Models, floor plans, quick access to architects and more")])])])],1)],1)},u=[],d={name:"Introduction",components:{}},p=d,h=(n("710c"),n("2877")),f=Object(h["a"])(p,l,u,!1,null,null,null),v=f.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"floorplan"}},[a("b-container",[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",[a("b-img",{attrs:{"fluid-grow":"",src:n("4f9a"),id:"devicesImage"}})],1),a("b-col",{attrs:{cols:"auto"}},[a("p",{staticStyle:{"margin-top":"7vh","font-size":"2.5rem","font-weight":"bolder",padding:"10px"}},[t._v("GET A FLOORPLAN")]),a("p",{staticClass:"floor_p"},[t._v(" Need an instant 3D Model of your home? "),a("br"),t._v(" Need a floor plan, without the hassle? "),a("br"),t._v(" Need an architect? ")]),a("p",{staticStyle:{"font-size":"1.7rem","margin-top":"1vh"}},[t._v(" We have it all covered! ")]),a("a",{attrs:{href:t.url}},[a("div",{attrs:{id:"downloadButton"}},[t._v(" Download the app ")])])])],1)],1)],1)},b=[],g={name:"FloorplanSection",components:{},data:function(){return{url:"https://apps.apple.com/us/app/scanto3d/id1537506295"}}},_=g,w=(n("fab0"),Object(h["a"])(_,m,b,!1,null,"2f1e365c",null)),y=w.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"architect"}},[a("b-container",[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{attrs:{cols:"auto"}},[a("p",{staticStyle:{"margin-top":"7vh","font-size":"2.5rem","font-weight":"bolder"}},[t._v("FIND AN ARCHITECT")]),a("p",{staticStyle:{"font-size":"1.5rem","margin-top":"2vh"}},[t._v("ScanTo3D will help you find the right architect in seconds")]),a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.loginSignupModal",modifiers:{loginSignupModal:!0}}],staticStyle:{"margin-bottom":"5vh"},attrs:{type:"button",id:"architectButton",href:"#"}},[t._v(" Architect Connect ")]),a("b-modal",{attrs:{id:"loginSignupModal"}},[a("h3",[t._v("Coming soon!")]),a("p",[t._v("Architect Connect will allow you to connect with several architects via our platform. You will be able to see their past projects, ratings etc and chat with them before hiring. "),a("br"),t._v(" So now you don't have to look all over the internet for a suitable architect. Just browse through our highly skilled partners. ")])])],1),a("b-col",[a("b-img",{attrs:{"fluid-grow":"",src:n("c827"),id:"architectImage"}})],1)],1)],1)],1)},x=[],A={name:"ArchitectSection",components:{},data:function(){return{showArchitecht:""}},methods:{showArchitectLogin:function(){this.showArchitecht="architect",this.$emit("showInterface",this.showArchitecht)}}},C=A,I=(n("182a"),Object(h["a"])(C,S,x,!1,null,"987155c0",null)),O=I.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"scan"}},[a("b-container",[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",[a("b-img",{attrs:{"fluid-grow":"",src:n("6a59"),id:"modelImage"}})],1),a("b-col",{attrs:{cols:"auto"}},[a("p",{staticStyle:{"margin-top":"7vh","font-size":"2.5rem","font-weight":"bolder",padding:"10px"}},[t._v("SCHEDULE A SCAN")]),a("p",{staticClass:"floor_p"},[t._v(" Select a date/time and someone from our team "),a("br"),t._v(" will be there to do the rest ")]),a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.scanInfoModal",modifiers:{scanInfoModal:!0}}],staticStyle:{"margin-bottom":"5vh"},attrs:{type:"button",id:"scanButton",href:"#"}},[t._v(" Schedule Scan ")]),a("b-modal",{attrs:{id:"scanInfoModal"}},[a("h3",[t._v("Coming soon!")]),a("p",[t._v(" You can now have someone come to your home and take measurements in just a click. Select a date and time that suits you and a member from our team will be there to take all the measurements. ")])])],1)],1)],1)],1)},E=[],j={name:"ScanSection",components:{}},k=j,P=(n("78e9"),Object(h["a"])(k,N,E,!1,null,"6413a443",null)),$=P.exports,T={components:{Introduction:v,FloorplanSection:y,ArchitectSection:O,ScanSection:$},name:"Homepage",data:function(){return{showInterface:""}},props:{},methods:{updateInterface:function(t){this.showInterface=t,this.$emit("showInterface",this.showInterface)}}},M=T,D=(n("c131"),Object(h["a"])(M,c,s,!1,null,"1a78bcdc",null)),L=D.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"light",id:"navbar"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("img",{staticClass:"d-inline-block align-top logo",attrs:{src:n("d7a8"),href:"#",alt:"scan2plan logo"}})]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{staticClass:"blue-text",attrs:{href:t.url}},[t._v(" ARCHITECT CONNECT ")]),a("b-nav-item",{staticClass:"blue-text",attrs:{href:t.url}},[t._v(" ORDER A SCAN ")]),a("b-nav-item",{attrs:{href:t.url}},[a("div",{attrs:{id:"downloadButton"}},[t._v(" Download the app")])])],1)],1)],1)],1)},H=[],z={name:"Navbar",data:function(){return{url:"https://apps.apple.com/us/app/scanto3d/id1537506295"}},components:{}},B=z,R=(n("8fc8"),Object(h["a"])(B,F,H,!1,null,"0c137e23",null)),J=R.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bottom_navbar"}},[t._m(0),t._m(1),t._m(2),n("div",{staticClass:"navbar-item",staticStyle:{"font-size":"2rem"}},[n("a",{attrs:{href:{linkedIn:t.linkedIn}}},[n("i",{staticClass:"fab fa-linkedin",staticStyle:{padding:"5px",color:"white"}})]),n("a",{attrs:{href:{twitter:t.twitter}}},[n("i",{staticClass:"fab fa-twitter",staticStyle:{padding:"5px",color:"white"}})]),n("a",{attrs:{href:t.instagram}},[n("i",{staticClass:"fab fa-instagram",staticStyle:{padding:"5px",color:"white"}})])])])},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-item"},[n("p",{staticStyle:{margin:"-0.2vh","font-size":"1.5rem"}},[t._v("ScanTo3D")]),n("p",{staticStyle:{"font-size":"0.5rem"}},[t._v("@OPAL AI Inc 2020")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"navbar-item"},[n("b",[t._v("OPAL AI Inc")]),t._v(" "),n("br")]),n("p",{staticClass:"navbar-item",staticStyle:{"font-size":"0.75rem","margin-top":"3px"}},[t._v(" 516 N Virgil Avenue"),n("br"),t._v("Los Angeles"),n("br"),t._v("California 50004")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-item",staticStyle:{"line-height":"30px"}},[n("i",{staticClass:"fas fa-phone-alt "}),t._v(" (323) 928-2029 "),n("br"),n("a",[n("i",{staticClass:"fas fa-envelope"}),t._v(" info@opaltech.ai")])])}],q={name:"Footer",components:{},data:function(){return{twitter:"https://twitter.com/OPALAI3",linkedIn:"https://www.instagram.com/opalai2/",instagram:"https://www.instagram.com/opalai2/"}}},G=q,U=(n("68b3"),Object(h["a"])(G,W,Y,!1,null,null,null)),V=U.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"5vh"}},[n("h1",[t._v("FIND AN ARCHITECT")]),n("p",[t._v("Let us know about your needs.")]),n("div",{attrs:{id:"searchDetails"}},[0===t.count?n("div",[n("p",[t._v(" Where are you located? ")]),n("input",{attrs:{type:"text"}}),n("button",{staticClass:"bg-success nextButton",on:{click:t.updateNext}},[t._v(" Next ")])]):t._e(),1===t.count?n("div",[n("p",[t._v(" What services do you need?")]),n("input",{attrs:{type:"text"}}),n("button",{staticClass:"bg-success nextButton",on:{click:t.updateNext}},[t._v(" Next ")])]):t._e(),2===t.count?n("div",[n("p",[t._v(" When do you need the architect?")]),n("input",{attrs:{type:"text"}}),n("button",{staticClass:"bg-success nextButton",on:{click:t.updateNext}},[t._v(" Next ")])]):t._e(),this.findingArchitect?n("div",[t._v(" Please wait... finding the best match.. "),n("div",{staticClass:"loader"})]):t._e(),this.showArchitects?n("ArchitectList"):t._e()],1)])},Q=[],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"5vh"}},[n("h2",[t._v("3 Architects match your criteria.")]),n("b-container",[n("b-row",{attrs:{id:"resultRow"}},[n("b-col",[n("div",[n("p",[n("b",[t._v("Moody H.")]),n("br"),t._v("Experience: 2 years")]),n("img",{attrs:{src:"https://img.icons8.com/bubbles/2x/user-male.png"}})])]),n("b-col",[n("div",[n("p",[n("b",[t._v("Dino B.")]),n("br"),t._v("Experience: 1 years")]),n("img",{attrs:{src:"https://img.icons8.com/bubbles/2x/manager.png"}})])]),n("b-col",[n("div",[n("p",[n("b",[t._v("Joanna M.")]),n("br"),t._v("Experience: 2 years")]),n("img",{attrs:{src:"https://img.icons8.com/bubbles/2x/long-brown-curly-hair-lady-with-glasses.png"}})])])],1)],1)],1)},Z=[],tt={name:"ArchitectList"},et=tt,nt=(n("149c"),Object(h["a"])(et,X,Z,!1,null,"886e6fc0",null)),at=nt.exports,it={name:"FindArchitect",components:{ArchitectList:at},data:function(){return{count:0,findingArchitect:!1,showArchitects:!1}},methods:{updateNext:function(){var t=this;this.count+=1,3===this.count&&(this.count=-1,this.findingArchitect=!0,setTimeout((function(){console.log(t.showArchitects),console.log("finding ? "+t.findingArchitect),t.showArchitects=!0,t.findingArchitect=!1,console.log("show? "+t.showArchitects)}),2500))}}},ot=it,rt=(n("7a6e"),Object(h["a"])(ot,K,Q,!1,null,"087cd495",null)),ct=rt.exports,st=n("8c4f");a["default"].use(r["a"]),a["default"].use(st["a"]);var lt={name:"app",data:function(){return{showPage:"homepage"}},components:{Homepage:L,Navbar:J,Footer:V,FindArchitect:ct},methods:{updatePage:function(t){this.showPage=t}}},ut=lt,dt=(n("034f"),Object(h["a"])(ut,i,o,!1,null,null,null)),pt=dt.exports,ht=n("f309");a["default"].use(ht["a"]);var ft=new ht["a"]({});a["default"].config.productionTip=!1,new a["default"]({vuetify:ft,render:function(t){return t(pt)}}).$mount("#app")},6848:function(t,e,n){},"68b3":function(t,e,n){"use strict";n("98b5")},"6a59":function(t,e,n){t.exports=n.p+"img/3d_model.96d9d5ea.png"},"710c":function(t,e,n){"use strict";n("2d49")},7701:function(t,e,n){},"78e9":function(t,e,n){"use strict";n("acf7")},"7a6e":function(t,e,n){"use strict";n("6848")},"85ec":function(t,e,n){},"8fc8":function(t,e,n){"use strict";n("7701")},"98b5":function(t,e,n){},a661:function(t,e,n){},acf7:function(t,e,n){},c131:function(t,e,n){"use strict";n("483a")},c56d:function(t,e,n){},c827:function(t,e,n){t.exports=n.p+"img/girl.4a428f0a.png"},d7a8:function(t,e,n){t.exports=n.p+"img/opal_logo_50.3b9380a8.png"},e42e:function(t,e,n){},fab0:function(t,e,n){"use strict";n("c56d")}});
//# sourceMappingURL=app.68ec73d3.js.map