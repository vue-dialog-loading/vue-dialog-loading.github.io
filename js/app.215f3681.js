(function(t){function e(e){for(var i,r,a=e[0],l=e[1],c=e[2],h=0,f=[];h<a.length;h++)r=a[h],o[r]&&f.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},2648:function(t,e,n){"use strict";var i=n("d73c"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("button",{on:{click:t.openDialog}},[t._v("Dialog")]),n("button",{on:{click:t.openDialog1}},[t._v("Dialog1")]),n("button",{on:{click:t.openBusyDialog}},[t._v("Loading")]),n("img",{staticClass:"img",attrs:{src:t.imgUrl},on:{click:function(e){return t.preview(t.imgUrl)}}})])},s=[],r=n("724e"),a={name:"app",data:function(){return{imgUrl:r}},methods:{openDialog:function(){this.$dialog({content:"this is a dialog with OK button",onOk:!0})},openDialog1:function(){this.$dialog({content:"dialog with ok button",onOk:function(){window.alert("onOk callback")},onCancel:!0})},openBusyDialog:function(){var t=this;this.$loading.show({delay:0}),setTimeout(function(){t.$loading.hide()},3e3)},preview:function(t){this.$ImagePreview.show(t)}}},l=a,c=(n("034f"),n("2877")),u=Object(c["a"])(l,o,s,!1,null,null,null),h=u.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"this.visible"}],staticClass:"dialog-mask",attrs:{id:t.id},on:{click:t.handleBgClose}},[n("div",{staticClass:"dialog"},[n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"content"},[t._v(" "+t._s(t.content))]),n("div",{staticClass:"btnBox"},[t.onOk?n("button",{on:{click:t.handleOnOk}},[t._v(t._s(t.okText))]):t._e(),t.onCancel?n("button",{on:{click:t.handleOnCancel}},[t._v(t._s(t.cancelText))]):t._e()])])])])},d=[],m={name:"LDialog",data:function(){return{id:"",visible:!1,bgClose:!1,title:"",content:"",okText:"OK",cancelText:"Cancel",onOk:null,onCancel:null}},methods:{handleOnOk:function(){"function"===typeof this.onOk&&this.onOk(),this.close()},handleOnCancel:function(){"function"===typeof this.onCancel&&this.onCancel(),this.close()},close:function(){var t=this;this.visible=!1,setTimeout(function(){t.$destroy(!0),t.$el.parentNode.removeChild(t.$el)},330)},handleBgClose:function(t){this.visible&&this.bgClose&&!document.querySelector(".dialog").contains(t.target)&&this.close()}},created:function(){},mounted:function(){},beforeDestroy:function(){},destroyed:function(){}},p=m,v=(n("a6e4"),Object(c["a"])(p,f,d,!1,null,"ff3e4128",null)),g=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"busy-mask"},[n("div",{staticClass:"busy-dialog"},t._l(4,function(t){return n("div",{key:t,style:{animationDelay:250*t+"ms"}})}),0)])])},w=[],b={name:"BusyDialog",data:function(){return{isShow:!1,delay:300,timer:null}},methods:{show:function(t){var e=this,n=this.delay;if(t){var i=t.delay;"number"===typeof i&&i>=0&&i<=6e4?n=i:console.log("delay set error")}this.timer=setTimeout(function(){e.isShow=!0},n)},hide:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!1}}},x=b,k=(n("c267"),Object(c["a"])(x,y,w,!1,null,"2baf4144",null)),C=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fadex"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"imgpreviewMask"},[n("div",{staticClass:"imgpreviewDialog",on:{touchstart:function(e){return e.preventDefault(),e.stopPropagation(),t.ontouchstart(e)},touchmove:function(e){return e.preventDefault(),e.stopPropagation(),t.ontouchmove(e)},touchend:t.ontouchend}},[n("div",{ref:"imgBox",staticClass:"imgBox"},[n("img",{ref:"img",attrs:{src:t.imgUrl}})])]),n("div",{staticClass:"closeBtn",on:{click:t.hide}},[n("i"),n("i")])])])},$=[],_={name:"imgpreviewDialog",data:function(){return{isShow:!1,imgUrl:"",startx:-1,starty:-1,x:0,y:0,currentx:0,currenty:0,scaled:!1,startTime:null}},methods:{show:function(t){t&&(t.imgUrl?this.imgUrl=t.imgUrl:"string"===typeof t&&(this.imgUrl=t),this.isShow=!0)},hide:function(){this.$refs.img.style.transform="scale(1)",this.$refs.imgBox.style.transform="translate(0,0)",this.isShow=!1,this.scaled=!1,this.x=0,this.y=0},ontouchstart:function(t){var e=t.touches[0];this.startx=this.currentx=e.clientX,this.starty=this.currenty=e.clientY;var n=new Date,i=n-this.startTime;i<300?this.scaled?(this.scaled=!1,this.x=0,this.y=0,this.$refs.img.style.transform="scale(1)",this.$refs.imgBox.style.transform="translate(0,0)"):(this.scaled=!0,this.$refs.img.style.transform="scale(2)"):(this.startTime=n,this.$refs.imgBox.style.transition="unset")},ontouchmove:function(t){if(this.scaled){var e=this.$refs.imgBox,n=t.touches[0];this.currentx=n.clientX,this.currenty=n.clientY;var i=this.currentx-this.startx,o=this.currenty-this.starty;e.style.transform="translate( ".concat(this.x+i,"px, ").concat(this.y+o,"px)")}},ontouchend:function(){this.scaled&&(this.$refs.imgBox.style.transition="all 0.3s ease",this.x+=this.currentx-this.startx,this.y+=this.currenty-this.starty)}}},D=_,T=(n("69b6"),n("2648"),Object(c["a"])(D,O,$,!1,null,"4d4446cf",null)),S=T.exports,B=i["a"].extend(g),j=i["a"].extend(C),P=i["a"].extend(S),U=new j;U.vm=U.$mount(),document.body.appendChild(U.$el);var M=new P;M.vm=M.$mount(),document.body.appendChild(M.$el);var E=1,N=function(t){var e="dialog-"+E++,n=new B;n.vm=n.$mount();var i=t||{},o=i.title,s=i.content,r=i.okText,a=i.cancelText,l=i.onOk,c=i.onCancel,u=i.bgClose;return n.visible=!0,n.bgClose=u,n.id=e,"string"==typeof o&&(n.title=o),"string"==typeof s&&(n.content=s),"string"==typeof r&&(n.okText=r),"string"==typeof a&&(n.cancelText=a),l&&(n.onOk=l),c&&(n.onCancel=c),document.body.appendChild(n.$el),n.el},I=function(t){t.prototype.$dialog=N,t.prototype.$loading=U,t.prototype.$ImagePreview=M};"undefined"!==typeof window&&window.Vue&&I(window.Vue);var L={version:"0.1.11",install:I,Dialog:g,Loading:C,ImagePreview:S};i["a"].use(L),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(h)}}).$mount("#app")},"64a9":function(t,e,n){},"69b6":function(t,e,n){"use strict";var i=n("a7bd"),o=n.n(i);o.a},"724e":function(t,e,n){t.exports=n.p+"img/test.54d0bf51.jpg"},a6e4:function(t,e,n){"use strict";var i=n("e9f8"),o=n.n(i);o.a},a7bd:function(t,e,n){},c267:function(t,e,n){"use strict";var i=n("e168"),o=n.n(i);o.a},d73c:function(t,e,n){},e168:function(t,e,n){},e9f8:function(t,e,n){}});
//# sourceMappingURL=app.215f3681.js.map