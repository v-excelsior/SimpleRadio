(function(t){function e(e){for(var o,u,i=e[0],s=e[1],l=e[2],d=0,p=[];d<i.length;d++)u=i[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/SimpleRadio/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f9a":function(t,e){},2371:function(t,e,n){"use strict";var o=n("e8d4"),r=n.n(o);r.a},"4b36":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[t._v(" Text here to chack fonts "),n("div",{staticClass:"audio-wrapper"},[n("audio",{attrs:{src:"http://62.80.190.246:8000/PRK128",controls:""}})]),n("ControlPanel",{attrs:{url:t.curUrl}})],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controls shadow main-grad pa-2 ma-2"},[n("audio",{ref:"currentAudio",attrs:{src:t.url}}),n("v-btn",{staticClass:"ma-1 flex-grow-1",attrs:{small:"",color:"orange"},on:{click:t.toggleStateAudio}},[t.isPlayed?n("v-icon",[t._v("mdi-pause")]):n("v-icon",[t._v("mdi-play")])],1),n("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"orange"},on:{click:t.runBack}},[n("v-icon",[t._v("mdi-rewind-10")])],1),n("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"orange"},on:{click:t.toStreamStart}},[n("v-icon",[t._v("mdi-reload")])],1),n("input-range",{staticClass:"ma-1",attrs:{isMuted:t.isMuted,volume:t.volume},on:{muteHandler:t.toggleMute,"update:volume":function(e){t.volume=e},changeVolume:t.changeVolume}})],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"volume-control"},[n("v-btn",{staticClass:"volume-control__input-wrapper",attrs:{small:"",color:"orange",ripple:!1}},[n("div",{staticClass:"volume-mute",on:{click:function(e){return t.$emit("muteHandler")}}},[t.isMuted?n("v-icon",{staticClass:"mr-2"},[t._v("mdi-volume-off")]):n("v-icon",{staticClass:"mr-2"},[t._v("mdi-volume-high")])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentVolume,expression:"currentVolume"}],ref:"volumeInput",staticClass:"volume-control__input",attrs:{type:"range",id:"volume",name:"volume",min:"0",max:"1",step:"0.01"},domProps:{value:t.currentVolume},on:{__r:function(e){t.currentVolume=e.target.value}}})])],1)},l=[],c={name:"InputRange",props:{isMuted:{type:Boolean,required:!0},volume:{type:String,required:!0}},methods:{},computed:{currentVolume:{get:function(){return this.volume},set:function(){this.$emit("update:volume",this.$refs.volumeInput.value)}}}},d=c,p=(n("8b30"),n("2877")),m=n("6544"),f=n.n(m),v=n("8336"),h=n("132d"),g=Object(p["a"])(d,s,l,!1,null,null,null),b=g.exports;f()(g,{VBtn:v["a"],VIcon:h["a"]});var y={name:"ControlPanel",components:{InputRange:b},props:{url:{type:String,required:!0}},data:function(){return{isPlayed:!1,isMuted:!1,volume:"0.5"}},methods:{toggleStateAudio:function(){this.isPlayed?this.stopAudio():this.playAudio()},stopAudio:function(){this.isPlayed=!1,this.$refs.currentAudio.pause()},playAudio:function(){this.isPlayed=!0,this.$refs.currentAudio.play()},toStreamStart:function(){this.$refs.currentAudio.load(),this.playAudio()},runBack:function(){this.$refs.currentAudio.currentTime-=10},changeVolume:function(t){this.volume=t},toggleMute:function(){this.isMuted=!this.isMuted,!0===this.isMuted?this.$refs.currentAudio.volume=0:this.$refs.currentAudio.volume=this.volume}},watch:{volume:function(){!0===this.isMuted?this.$refs.currentAudio.volume=0:this.$refs.currentAudio.volume=this.volume}}},_=y,w=(n("2371"),Object(p["a"])(_,u,i,!1,null,null,null)),A=w.exports;f()(w,{VBtn:v["a"],VIcon:h["a"]});var M={name:"App",components:{ControlPanel:A},data:function(){return{curUrl:"http://online.radioplayer.ua/FlashRadio"}}},S=M,x=(n("5c0b"),n("7496")),C=Object(p["a"])(S,r,a,!1,null,null,null),P=C.exports;f()(C,{VApp:x["a"]});n("7046"),n("5363");var $=n("f309");o["a"].use($["a"]);var O=new $["a"]({icons:{iconfont:"mdiSvg"}}),j={apiKey:"AIzaSyD8wT_k21ntY2NtXUZraK2CFB-9bCn9apI",authDomain:"simple-radio-x.firebaseapp.com",databaseURL:"https://simple-radio-x.firebaseio.com",projectId:"simple-radio-x",storageBucket:"simple-radio-x.appspot.com",messagingSenderId:"293263881523",appId:"1:293263881523:web:c0df952704719039afba46",measurementId:"G-3M25MXLZF1"},V=n("59ca"),k=n.n(V),I=(n("66ce"),n("2f62")),B=n("0f9a"),R=n.n(B),T=n("f21e"),U=n.n(T);o["a"].use(I["a"]);var q=new I["a"].Store({state:{},mutations:{},actions:{},modules:{userModule:R.a,stationsModule:U.a}});k.a.initializeApp(j),o["a"].config.productionTip=!1;k.a.database();new o["a"]({vuetify:O,store:q,render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("7694"),r=n.n(o);r.a},7046:function(t,e,n){},7694:function(t,e,n){},"8b30":function(t,e,n){"use strict";var o=n("4b36"),r=n.n(o);r.a},e8d4:function(t,e,n){},f21e:function(t,e){}});
//# sourceMappingURL=app.b7ff4df8.js.map