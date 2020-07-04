(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ee3477e"],{1882:function(t,e,n){},"1ccf":function(t,e,n){},"1f53":function(t,e,n){"use strict";var s=n("1882"),o=n.n(s);o.a},2371:function(t,e,n){"use strict";var s=n("e8d4"),o=n.n(s);o.a},"3cb3":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"station-card"},[n("img",{staticClass:"station-card__img",attrs:{src:t.station.image}}),n("span",{staticClass:"station-card__name",domProps:{textContent:t._s(t.station.name)}})])},o=[],i={name:"StationCard",props:{station:{type:Object,required:!0}}},r=i,a=n("2877"),u=Object(a["a"])(r,s,o,!1,null,null,null);e["a"]=u.exports},"4f5e":function(t,e,n){"use strict";var s=n("eef4"),o=n.n(s);o.a},"7c731":function(t,e,n){},ac7f:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-page d-flex player-container container flex-column"},[n("div",{staticClass:"player-info pa-3 pa-sm-5 mb-5 mt-2 mt-sm-5 shadow main-grad"},[n("v-btn",{staticClass:"player-info__btn",attrs:{small:"",color:"orange"},on:{click:function(e){return t.changeStation("prev")}}},[n("v-icon",[t._v(t._s(t.icons.arrowLeft))])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("station-card",{key:t.station.name,staticClass:"mx-3 mx-sm-5",attrs:{station:t.station}})],1),n("v-btn",{staticClass:"player-info__btn",attrs:{small:"",color:"orange"},on:{click:function(e){return t.changeStation("next")}}},[n("v-icon",[t._v(t._s(t.icons.arrowRight))])],1)],1),n("Player",{attrs:{station:t.station}}),n("keyboard-events",{attrs:{preventedKeys:["Space","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"]}})],1)},o=[],i=(n("d3b7"),n("ddb0"),n("5530")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player"},[n("control-panel",{attrs:{url:t.station.url}})],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controls shadow main-grad pa-2"},[n("audio",{ref:"currentAudio",attrs:{src:t.url}}),n("v-btn",{staticClass:"controls__btn",attrs:{small:"",color:"orange",loading:t.isBuffering},on:{click:t.toggleStateAudio}},[t.isPlayed?n("v-icon",[t._v(t._s(t.icons.pause))]):n("v-icon",[t._v(t._s(t.icons.play))])],1),n("v-btn",{staticClass:"controls__btn",attrs:{small:"",color:"orange"},on:{click:t.rewind}},[n("v-icon",[t._v(t._s(t.icons.rewind))])],1),n("v-btn",{staticClass:"controls__btn",attrs:{small:"",color:"orange"},on:{click:t.restartStream}},[n("v-icon",[t._v(t._s(t.icons.reload))])],1),n("Timer",{attrs:{time:t.time}}),n("volume-range",{staticClass:" controls__input-range",attrs:{isMuted:t.isMuted,volume:t.volume},on:{toggleMute:t.toggleMute,"update:volume":function(e){t.volume=e}}})],1)},c=[],l=(n("96cf"),n("1da1")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"volume-control control-wraper"},[n("div",{staticClass:"volume-mute",on:{click:function(e){return t.$emit("toggleMute")}}},[t.isMuted?n("v-icon",{staticClass:"volume-icon mr-2"},[t._v(" "+t._s(t.icons.volumeOff)+" ")]):n("v-icon",{staticClass:"volume-icon mr-2"},[t._v(" "+t._s(t.icons.volumeOn)+" ")])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentVolume,expression:"currentVolume"}],ref:"volumeInput",staticClass:"volume-control__input",attrs:{type:"range",id:"volume",name:"volume",min:"0",max:"1",step:"0.01"},domProps:{value:t.currentVolume},on:{__r:function(e){t.currentVolume=e.target.value}}})])},d=[],f=n("94ed"),v={name:"VolumeRange",props:{isMuted:{type:Boolean,required:!0},volume:{type:String,required:!0}},data:function(){return{icons:{volumeOff:f["l"],volumeOn:f["k"]}}},computed:{currentVolume:{get:function(){return this.volume},set:function(){this.$emit("update:volume",this.$refs.volumeInput.value)}}}},p=v,h=(n("acc4"),n("2877")),y=n("6544"),g=n.n(y),_=n("132d"),w=Object(h["a"])(p,m,d,!1,null,null,null),b=w.exports;g()(w,{VIcon:_["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer control-wraper"},[n("transition",{attrs:{name:"time",mode:"out-in"}},[n("span",{key:t.minutes,staticClass:"timer__minutes",domProps:{textContent:t._s(t.minutes)}})]),n("span",{staticClass:"colon"},[t._v(" : ")]),n("span",{key:t.seconds,staticClass:"timer__seconds",domProps:{textContent:t._s(t.seconds)}})],1)},C=[],x=(n("a9e3"),{name:"Timer",props:{time:Number},computed:{minutes:function(){var t=Math.floor(this.time/60);return t<10?"0"+t:t},seconds:function(){var t=this.time%60;return t<10?"0"+t:t}}}),S=x,A=(n("4f5e"),Object(h["a"])(S,k,C,!1,null,null,null)),O=A.exports;function P(t,e){var n,s=!1;return function(){var o=this;n=arguments,s||(s=!0,setTimeout((function(){t.apply(o,n),s=!1}),e))}}var j,$=n("2f62"),M={name:"ControlPanel",components:{VolumeRange:b,Timer:O},props:{url:{type:String,required:!0}},data:function(){return{isPlayed:!1,isBuffering:!1,isMuted:!1,time:0,volume:"0.5",icons:{play:f["f"],pause:f["e"],reload:f["i"],rewind:f["j"]}}},methods:{toggleStateAudio:function(){this.isBuffering||(this.isPlayed?this.stopAudio():this.playAudio())},playAudio:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isBuffering=!0,e.prev=1,e.next=4,t.$refs.currentAudio.play();case 4:t.isBuffering=!1,t.isPlayed=!0,e.next=13;break;case 8:e.prev=8,e.t0=e["catch"](1),t.isBuffering=!1,t.isPlayed=!1,console.warn("[CE]-[Too often play requests]");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))()},stopAudio:function(){this.isPlayed=!1,this.$refs.currentAudio.pause()},restartStream:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.time=0,e.next=3,t.$refs.currentAudio.load();case 3:t.playAudio();case 4:case"end":return e.stop()}}),e)})))()},rewind:function(){this.time<10?this.time=0:this.time-=10,this.$refs.currentAudio.currentTime-=10},mute:function(){this.isMuted=!0,this.$refs.currentAudio.muted=!0},unmute:function(){this.isMuted=!1,this.$refs.currentAudio.muted=!1},toggleMute:function(){!0===this.isMuted?this.unmute():this.mute()},saveVolume:P((function(t){localStorage.setItem("volume",t)}),1e3)},computed:Object(i["a"])({},Object($["e"])({keys:function(t){return t.keyboardModule.keys}})),watch:{volume:function(){this.unmute(),this.$refs.currentAudio.volume=this.volume,this.saveVolume(this.volume)},url:function(){this.time=0,this.isPlayed&&(this.stopAudio(),this.restartStream())},keys:{deep:!0,handler:function(){this.keys["Space"]&&this.toggleStateAudio(),this.keys["Backspace"]&&this.rewind(),this.keys["ArrowUp"]&&(this.volume>.9?this.volume="1":this.volume=+this.volume+.1+""),this.keys["ArrowDown"]&&(this.volume<.1?this.volume="0":this.volume=+this.volume-.1+"")}}},created:function(){var t=this,e=localStorage.getItem("volume");null!==e&&(this.volume=e),j=setInterval((function(){t.isPlayed&&t.time++}),1e3)},beforeDestroy:function(){clearInterval(j)}},R=M,E=(n("2371"),n("8336")),V=Object(h["a"])(R,u,c,!1,null,null,null),B=V.exports;g()(V,{VBtn:E["a"],VIcon:_["a"]});var I={name:"Player",components:{ControlPanel:B},props:{station:{type:Object,required:!0}}},L=I,q=Object(h["a"])(L,r,a,!1,null,null,null),H=q.exports,T=n("3cb3"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},K=[],N=(n("c975"),{name:"KeyboardEvent",props:{preventedKeys:Array},methods:Object(i["a"])({},Object($["d"])(["keyPressed","keyUnpressed"])),created:function(){var t=this;this.keydownHandler=function(e){-1!==t.preventedKeys.indexOf(e.code)&&e.preventDefault(),t.keyPressed(e.code)},this.keyupHandler=function(e){t.keyUnpressed(e.code)},window.addEventListener("keydown",this.keydownHandler),window.addEventListener("keyup",this.keyupHandler)},beforeDestroy:function(){window.removeEventListener("keydown",this.keydownHandler),window.removeEventListener("keyup",this.keyupHandler)}}),U=N,J=(n("1f53"),Object(h["a"])(U,D,K,!1,null,"1a42bc90",null)),z=J.exports,F={name:"PlayerPage",components:{Player:H,StationCard:T["a"],KeyboardEvents:z},data:function(){return{stationRoute:this.$route.params.stationRoute,station:{},icons:{arrowLeft:f["c"],arrowRight:f["d"]}}},methods:{nextStation:function(){this.station=this.getNextStation(this.station)},prevStation:function(){this.station=this.getPrevStation(this.station)},changeStation:function(t){"next"===t?this.nextStation():this.prevStation(),this.$router.push({path:"/player/".concat(this.station.route)})}},beforeMount:function(){this.station=this.getStationByRoute(this.stationRoute)},computed:Object(i["a"])(Object(i["a"])({},Object($["e"])({keys:function(t){return t.keyboardModule.keys}})),Object($["c"])(["getStationByRoute","getPrevStation","getNextStation"])),watch:{keys:{deep:!0,handler:function(){this.keys["ArrowLeft"]&&this.changeStation("prev"),this.keys["ArrowRight"]&&this.changeStation("next")}}}},G=F,Q=(n("d524"),Object(h["a"])(G,s,o,!1,null,null,null));e["default"]=Q.exports;g()(Q,{VBtn:E["a"],VIcon:_["a"]})},acc4:function(t,e,n){"use strict";var s=n("1ccf"),o=n.n(s);o.a},d524:function(t,e,n){"use strict";var s=n("7c731"),o=n.n(s);o.a},e8d4:function(t,e,n){},eef4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1ee3477e.7dab0ef4.js.map