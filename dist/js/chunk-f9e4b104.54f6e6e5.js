(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9e4b104"],{"0966":function(t,n,a){},"182b":function(t,n,a){"use strict";a.r(n);var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("keep-alive",[a("div",{staticClass:"station-page"},[a("stations-list",{attrs:{stations:t.stations}})],1)])},e=[],i=a("5530"),c=a("2f62"),o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"station-list"},t._l(t.stations,(function(n){return a("station-card",{key:n.name,staticClass:"station-card_clickable ma-1 ma-sm-3",attrs:{station:n},nativeOn:{click:function(a){return t.$router.push({path:"/player/"+n.route})}}})})),1)},r=[],u=a("3cb3"),l={name:"StationList",components:{StationCard:u["a"]},props:{stations:{type:Array,required:!0}}},p=l,m=(a("c4015"),a("2877")),d=Object(m["a"])(p,o,r,!1,null,null,null),f=d.exports,b={name:"StationPage",components:{StationsList:f},computed:Object(i["a"])({},Object(c["e"])({stations:function(t){return t.stationsModule.stations}}))},_=b,v=Object(m["a"])(_,s,e,!1,null,null,null);n["default"]=v.exports},"1cb0":function(t,n,a){},"3cb3":function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"station-card"},[a("img",{staticClass:"station-card__img",attrs:{src:t.station.image}}),a("p",{staticClass:"station-card__name my-1 my-sm-2",domProps:{textContent:t._s(t.station.name)}})])},e=[],i={name:"StationCard",props:{station:{type:Object,required:!0}},data:function(){return{}}},c=i,o=(a("bde6"),a("2877")),r=Object(o["a"])(c,s,e,!1,null,null,null);n["a"]=r.exports},bde6:function(t,n,a){"use strict";var s=a("0966"),e=a.n(s);e.a},c4015:function(t,n,a){"use strict";var s=a("1cb0"),e=a.n(s);e.a}}]);
//# sourceMappingURL=chunk-f9e4b104.54f6e6e5.js.map