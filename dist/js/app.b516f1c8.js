(function(t){function e(e){for(var r,a,u=e[0],s=e[1],c=e[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function u(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-0a6038c4":"fad18385","chunk-2ad5c1b6":"ac9f07c1","chunk-2d22db6b":"f255f6e5","chunk-3a9f4553":"a506742b","chunk-3d65bba8":"ac503dc4"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-0a6038c4":1,"chunk-2ad5c1b6":1,"chunk-3a9f4553":1,"chunk-3d65bba8":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0a6038c4":"230a5277","chunk-2ad5c1b6":"9f7586cc","chunk-2d22db6b":"31d6cfe0","chunk-3a9f4553":"4a57c36b","chunk-3d65bba8":"4a57c36b"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/SimpleRadio/dist/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4360:function(t,e,n){"use strict";var r=n("2b0e"),a=n("2f62"),o=(n("4de4"),n("caad"),n("2532"),{state:{favouritesStations:[]},mutations:{toggleFavourite:function(t,e){var n=t.favouritesStations.includes(e);if(n){var r=t.favouritesStations.filter((function(t){return t!==e}));t.favouritesStations=r}else t.favouritesStations.push(e)},updateFavourites:function(t,e){e.length&&(t.favouritesStations=e)}},actions:{},getters:{}}),i=(n("d3b7"),n("ddb0"),{state:{keys:{Space:!1,Backspace:!1,ArrowLeft:!1,ArrowRight:!1,ArrowUp:!1,ArrowDown:!1}},mutations:{keyPressed:function(t,e){void 0!==t.keys[e]&&(t.keys[e]=!0)},keyUnpressed:function(t,e){void 0!==t.keys[e]&&(t.keys[e]=!1)}}}),u=(n("7db0"),n("c975"),n("96cf"),n("1da1")),s=n("dde5"),c={state:{stations:[]},mutations:{updateStations:function(t,e){t.stations=e}},actions:{fetchStations:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("changeLoadingState",!0),e.next=4,s["b"].getAllStations();case 4:r=e.sent,n("updateStations",r),n("changeLoadingState",!1);case 7:case"end":return e.stop()}}),e)})))()}},getters:{getStationByRoute:function(t){return function(e){return t.stations.find((function(t){return t.route===e}))}},getNextStation:function(t){return function(e){var n=t.stations.indexOf(e),r=n+1;return r>t.stations.length-1&&(r=0),t.stations[r]}},getPrevStation:function(t){return function(e){var n=t.stations.indexOf(e),r=n-1;return r<0&&(r=t.stations.length-1),t.stations[r]}},getFavouritesStations:function(t,e,n){return t.stations.filter((function(t){return n.userModule.favouritesStations.includes(t.route)}))}}};r["a"].use(a["a"]);e["a"]=new a["a"].Store({state:{isLoading:!0},mutations:{changeLoadingState:function(t,e){t.isLoading=e}},actions:{},getters:{},modules:{userModule:o,keyboardModule:i,stationsModule:c}})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("Header"),t.isLoading?n("loading-overlay"):n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},o=[],i=(n("96cf"),n("1da1")),u=n("5530"),s=n("2f62"),c=n("dde5"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header mb-2"},[n("v-app-bar",{attrs:{color:"grey"}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}},[n("v-icon",[t._v(" "+t._s(t.icons.menu)+" ")])],1),n("v-toolbar-title",{staticClass:"align-center"},[t._v(" Simple radio "),n("v-icon",{staticClass:"ml-3"},[t._v(" "+t._s(t.icons.radio)+" ")])],1)],1),n("v-navigation-drawer",{attrs:{absolute:"",color:"grey lighten-1",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"orange--text text--accent-4"}},t._l(t.links,(function(t){return n("menu-link",{key:t.route,attrs:{link:t}})})),1)],1)],1)],1)},d=[],f=n("94ed"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{attrs:{to:t.link.route,exact:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.link.icon))])],1),n("v-list-item-title",[t._v(t._s(t.link.text))])],1)},v=[],h={name:"MenuLink",props:{link:{type:Object,required:!0}}},m=h,b=n("2877"),g=n("6544"),k=n.n(g),y=n("132d"),w=n("da13"),S=n("34c3"),O=n("5d23"),x=Object(b["a"])(m,p,v,!1,null,null,null),j=x.exports;k()(x,{VIcon:y["a"],VListItem:w["a"],VListItemIcon:S["a"],VListItemTitle:O["a"]});var _={name:"Header",components:{MenuLink:j},data:function(){return{drawer:!1,icons:{radio:f["i"],menu:f["c"]},links:[{text:"All stations",route:"/",icon:f["a"]},{text:"Favourite",route:"/favourites",icon:f["l"]},{text:"Add station",route:"/add-station",icon:f["h"]},{text:"Help",route:"/help",icon:f["b"]}]}}},L=_,A=(n("8baf"),n("40dc")),P=n("5bc1"),C=n("8860"),R=n("1baa"),V=n("f774"),E=n("2a7f"),F=Object(b["a"])(L,l,d,!1,null,null,null),I=F.exports;k()(F,{VAppBar:A["a"],VAppBarNavIcon:P["a"],VIcon:y["a"],VList:C["a"],VListItemGroup:R["a"],VNavigationDrawer:V["a"],VToolbarTitle:E["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-overlay"},[n("h2",{staticClass:"loading-overlay__text mb-5"},[t._v("Wait please :)")]),n("v-progress-circular",{staticClass:"loading-overlay__spinner",attrs:{size:70,width:7,color:"orange",indeterminate:""}})],1)},T=[],N={name:"LoadingOverlay"},B=N,H=(n("b6a0"),n("490a")),$=Object(b["a"])(B,M,T,!1,null,null,null),D=$.exports;k()($,{VProgressCircular:H["a"]});var J={name:"App",components:{Header:I,LoadingOverlay:D},methods:Object(u["a"])(Object(u["a"])({},Object(s["b"])(["fetchStations"])),Object(s["d"])(["updateFavourites"])),computed:Object(u["a"])({},Object(s["e"])({isLoading:function(t){return t.isLoading}})),mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchStations();case 2:n=c["a"].getFavourites(),t.updateFavourites(n);case 4:case"end":return e.stop()}}),e)})))()}},q=J,U=n("7496"),z=Object(b["a"])(q,a,o,!1,null,null,null),G=z.exports;k()(z,{VApp:U["a"]});n("7046");var K=n("f309");r["a"].use(K["a"]);var W=new K["a"]({}),Q=n("1dce"),X=n.n(Q),Y=n("4360"),Z=(n("d3b7"),n("8c4f"));r["a"].use(Z["a"]);var tt=[{path:"/",name:"StationsPage",component:function(){return n.e("chunk-3a9f4553").then(n.bind(null,"182b"))}},{path:"/favourites",name:"FavouritesStationsPage",component:function(){return n.e("chunk-3d65bba8").then(n.bind(null,"bd11"))}},{path:"/add-station",name:"CreateStationPage",component:function(){return n.e("chunk-2ad5c1b6").then(n.bind(null,"2dc3"))}},{path:"/help",name:"HelpPage",component:function(){return n.e("chunk-2d22db6b").then(n.bind(null,"f957"))}},{path:"/player/:stationRoute",name:"Player",component:function(){return n.e("chunk-0a6038c4").then(n.bind(null,"ac7f"))}},{path:"*",name:"404",component:function(){return n.e("chunk-3a9f4553").then(n.bind(null,"182b"))}}],et=new Z["a"]({mode:"hash",routes:tt}),nt=et;r["a"].config.productionTip=!1,new r["a"]({vuetify:W,store:Y["a"],router:nt,Vuelidate:X.a,render:function(t){return t(G)}}).$mount("#app")},7046:function(t,e,n){},"729b":function(t,e,n){},"8baf":function(t,e,n){"use strict";var r=n("729b"),a=n.n(r);a.a},b6a0:function(t,e,n){"use strict";var r=n("e026"),a=n.n(r);a.a},dde5:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f}));n("b0c0"),n("96cf");var r=n("1da1"),a=n("d4ec"),o=n("bee2"),i=n("bc3a"),u=n.n(i),s=n("4360"),c=function(){function t(e){Object(a["a"])(this,t),this.http=e,this.full_http=e+".json"}return Object(o["a"])(t,[{key:"getAllStations",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.next=3,u.a.get(this.full_http).then((function(t){for(var n in t.data)e.push(t.data[n])}));case 3:return e.sort((function(t,e){return t.name>e.name?1:-1})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"addStation",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=s["a"].state.stationsModule.stations.length,t.next=3,u.a.post(this.http+"/"+n+".json","placeholder");case 3:return t.next=5,this.editStation(n,e);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"editStation",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.put(this.http+"/"+e+".json",{image:n.image,name:n.name,route:n.route,url:n.url});case 2:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()}]),t}(),l=function(){function t(){Object(a["a"])(this,t)}return Object(o["a"])(t,[{key:"getFavourites",value:function(){var t=JSON.parse(localStorage.getItem("favourites"));return t||[]}},{key:"setFavourites",value:function(t){localStorage.setItem("favourites",JSON.stringify(t))}}]),t}(),d=new c("https://simple-radio-x.firebaseio.com/stations"),f=new l},e026:function(t,e,n){}});
//# sourceMappingURL=app.b516f1c8.js.map