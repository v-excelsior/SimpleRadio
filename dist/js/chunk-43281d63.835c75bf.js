(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43281d63"],{"0966":function(t,e,n){},2371:function(t,e,n){"use strict";var a=n("e8d4"),o=n.n(a);o.a},"3cb3":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"station-card"},[n("img",{staticClass:"station-card__img",attrs:{src:t.station.image}}),n("p",{staticClass:"station-card__name my-1 my-sm-2",domProps:{textContent:t._s(t.station.name)}})])},o=[],i={name:"StationCard",props:{station:{type:Object,required:!0}},data:function(){return{}}},s=i,r=(n("bde6"),n("2877")),u=Object(r["a"])(s,a,o,!1,null,null,null);e["a"]=u.exports},"4b36":function(t,e,n){},"7c731":function(t,e,n){},"8b30":function(t,e,n){"use strict";var a=n("4b36"),o=n.n(a);o.a},ac7f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-page d-flex player-container container flex-column"},[n("div",{staticClass:"player-info pa-5 mb-5 mt-2 mt-sm-5 shadow main-grad"},[n("v-btn",{staticClass:"player-info__btn",attrs:{small:"",color:"orange"},on:{click:function(e){return t.changeStation("prev")}}},[n("v-icon",[t._v("mdi-menu-left")])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("station-card",{key:t.station.name,staticClass:"mx-5",attrs:{station:t.station}})],1),n("v-btn",{staticClass:"player-info__btn",attrs:{small:"",color:"orange"},on:{click:function(e){return t.changeStation("next")}}},[n("v-icon",[t._v("mdi-menu-right")])],1)],1),n("Player",{attrs:{station:t.station}})],1)},o=[],i=n("5530"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player"},[n("control-panel",{attrs:{url:t.station.url}})],1)},r=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controls shadow main-grad pa-2"},[n("audio",{ref:"currentAudio",attrs:{src:t.url}}),n("v-btn",{staticClass:"controls__btn",attrs:{small:"",color:"orange"},on:{click:t.toggleStateAudio}},[t.isPlayed?n("v-icon",[t._v("mdi-pause")]):n("v-icon",[t._v("mdi-play")])],1),n("v-btn",{staticClass:"controls__btn",attrs:{small:"",color:"orange"},on:{click:t.runBack}},[n("v-icon",[t._v("mdi-rewind-10")])],1),n("v-btn",{staticClass:"controls__btn",attrs:{small:"",color:"orange"},on:{click:t.restartStream}},[n("v-icon",[t._v("mdi-reload")])],1),n("input-range",{staticClass:" controls__input-range",attrs:{isMuted:t.isMuted,volume:t.volume},on:{muteHandler:t.toggleMute,"update:volume":function(e){t.volume=e},changeVolume:t.changeVolume}})],1)},l=[],c=(n("96cf"),n("1da1")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"volume-control"},[n("v-btn",{staticClass:"volume-control__input-wrapper",attrs:{small:"",color:"orange",ripple:!1}},[n("div",{staticClass:"volume-mute",on:{click:function(e){return t.$emit("muteHandler")}}},[t.isMuted?n("v-icon",{staticClass:"mr-2"},[t._v("mdi-volume-off")]):n("v-icon",{staticClass:"mr-2"},[t._v("mdi-volume-high")])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentVolume,expression:"currentVolume"}],ref:"volumeInput",staticClass:"volume-control__input",attrs:{type:"range",id:"volume",name:"volume",min:"0",max:"1",step:"0.01"},domProps:{value:t.currentVolume},on:{__r:function(e){t.currentVolume=e.target.value}}})])],1)},d=[],v={name:"InputRange",props:{isMuted:{type:Boolean,required:!0},volume:{type:String,required:!0}},methods:{},computed:{currentVolume:{get:function(){return this.volume},set:function(){this.$emit("update:volume",this.$refs.volumeInput.value)}}}},p=v,f=(n("8b30"),n("2877")),h=n("6544"),g=n.n(h),_=n("8336"),b=n("132d"),y=Object(f["a"])(p,m,d,!1,null,null,null),C=y.exports;g()(y,{VBtn:_["a"],VIcon:b["a"]});var S={name:"ControlPanel",components:{InputRange:C},props:{url:{type:String,required:!0}},data:function(){return{isPlayed:!1,isMuted:!1,volume:"0.5"}},methods:{toggleStateAudio:function(){this.isPlayed?this.stopAudio():this.playAudio()},stopAudio:function(){this.isPlayed=!1,this.$refs.currentAudio.pause()},playAudio:function(){this.isPlayed=!0,this.$refs.currentAudio.play()},restartStream:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.currentAudio.load();case 2:t.playAudio();case 3:case"end":return e.stop()}}),e)})))()},runBack:function(){this.$refs.currentAudio.currentTime-=10},changeVolume:function(t){this.volume=t},toggleMute:function(){this.isMuted=!this.isMuted,!0===this.isMuted?this.$refs.currentAudio.volume=0:this.$refs.currentAudio.volume=this.volume}},watch:{volume:function(){!0===this.isMuted?this.$refs.currentAudio.volume=0:this.$refs.currentAudio.volume=this.volume},url:function(){this.isPlayed&&this.restartStream()}}},$=S,x=(n("2371"),Object(f["a"])($,u,l,!1,null,null,null)),P=x.exports;g()(x,{VBtn:_["a"],VIcon:b["a"]});var A={name:"Player",components:{ControlPanel:P},props:{station:{type:Object,required:!0}}},w=A,V=Object(f["a"])(w,s,r,!1,null,null,null),k=V.exports,M=n("3cb3"),j=n("2f62"),O={name:"PlayerPage",components:{Player:k,StationCard:M["a"]},data:function(){return{stationRoute:this.$route.params.stationRoute,station:{}}},methods:{changeStation:function(t){this.station="next"===t?this.getNextStation(this.station):this.getPrevStation(this.station),this.$router.push({path:"/player/".concat(this.station.route)})}},beforeMount:function(){this.station=this.getStationByRoute(this.stationRoute)},computed:Object(i["a"])({},Object(j["c"])(["getStationByRoute","getPrevStation","getNextStation"]))},R=O,B=(n("d524"),Object(f["a"])(R,a,o,!1,null,null,null));e["default"]=B.exports;g()(B,{VBtn:_["a"],VIcon:b["a"]})},bde6:function(t,e,n){"use strict";var a=n("0966"),o=n.n(a);o.a},d524:function(t,e,n){"use strict";var a=n("7c731"),o=n.n(a);o.a},e8d4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-43281d63.835c75bf.js.map