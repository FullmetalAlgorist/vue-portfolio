(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74815d2a"],{"06af":function(t,n,a){"use strict";(function(t){if(t.browser)var e=a("9e62");n["a"]={data:function(){return{}},mounted:function(){var t=a("237d");new t(e.main)},methods:{flip:function(){e.flip()},up:function(){e.up()},down:function(){e.down()}}}}).call(this,a("4362"))},"36bd":function(t,n,a){"use strict";var e=a("4bf8"),i=a("77f1"),r=a("9def");t.exports=function(t){var n=e(this),a=r(n.length),s=arguments.length,o=i(s>1?arguments[1]:void 0,a),c=s>2?arguments[2]:void 0,u=void 0===c?a:i(c,a);while(u>o)n[o++]=t;return n}},"568a":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-layout",{staticClass:"sketchMe elevation-24 pt-2",attrs:{"text-xs-center":"","justify-center":"",wrap:"","fill-height":"",fluid:""}},[a("v-flex",{attrs:{"justify-space-between":"",xs4:""}},[a("v-btn",{attrs:{small:"",color:"black",fab:""}},[a("v-icon",{staticClass:"aboutME",attrs:{medium:""}},[t._v("mdi-information")])],1)],1),a("v-flex",{attrs:{"justify-space-between":"",xs4:""}},[a("v-btn",{attrs:{large:""},on:{click:t.flip}},[t._v("flip")])],1),a("v-flex",{attrs:{"justify-space-between":"",xs4:""}},[a("v-btn",{attrs:{small:"",fab:""},on:{click:t.down}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-minus")])],1),a("v-btn",{attrs:{small:"",fab:""},on:{click:t.up}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-plus")])],1)],1),a("v-flex",{staticClass:"top",attrs:{xs12:"","text-xs-center":"","justify-center":"",fluid:"","fill-height":"","justify-space-between":""}},[a("div",{attrs:{id:"p5Canvas"}})])],1)},i=[],r=a("06af"),s=r["a"],o=a("2877"),c=a("6544"),u=a.n(c),f=a("8336"),l=a("0e8f"),d=a("132d"),v=a("a722"),p=Object(o["a"])(s,e,i,!1,null,null,null);n["default"]=p.exports;u()(p,{VBtn:f["a"],VFlex:l["a"],VIcon:d["a"],VLayout:v["a"]})},"6c7b":function(t,n,a){var e=a("5ca1");e(e.P,"Array",{fill:a("36bd")}),a("9c6c")("fill")},"9e62":function(t,n,a){"use strict";a.r(n),a.d(n,"main",function(){return d}),a.d(n,"up",function(){return v}),a.d(n,"down",function(){return p}),a.d(n,"flip",function(){return b});a("6c7b");var e,i=16,r=!0,s=1,o=1,c=2,u=2,f=2,l=0;function d(t,n,a){function d(t,n,a,i,r,s,o){return e.pow(e.pow(e.abs(e.cos(i*t/4)/n),s)+e.pow(e.abs(e.sin(i*t/4)/a),o),-1/r)}e=t,e.setup=function(t){console.log(),e.background(0);var n=e.createCanvas(375,400);n.parent("p5Canvas"),e.frameRate(50),e.smooth()},e.draw=function(t){e.fill(0,5),e.rect(-5,-5,1250,510),e.translate(e.width/2,e.height/2),r&&(c=e.random(.5),u=e.random(6),f=0,o=e.random(100,200),s=e.random(.05,10),r=!1,0),e.stroke(255,22),e.noFill(),e.beginShape();for(var n=1;n<60;n++){var a=d(l,1,1,i,c,u,f);a*=o,l+=s;var v=a*e.cos(l),p=a*e.sin(l);e.vertex(v,p)}e.endShape()}}function v(){i+=2}function p(){i-=2}function b(){r=!0}}}]);
//# sourceMappingURL=chunk-74815d2a.2319eb3b.js.map