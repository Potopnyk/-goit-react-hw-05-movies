"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[322],{322:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(439),c=e(791),o=e(689),i=e(299),u="cast_cast__nH-xI",a=e(184);var f=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],f=t[1],s=(0,o.UO)().movieId,h="movie/".concat(s,"/credits?api_key=");return(0,c.useEffect)((function(){(0,i.Z)(h).then((function(n){return f(n.cast)})).catch((function(n){console.log(n)}))}),[h]),(0,a.jsx)("div",{className:u,children:(0,a.jsx)("ul",{children:e.map((function(n){var t="https://image.tmdb.org/t/p/".concat(n.profile);return(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:t,alt:n.profile,width:"138",height:"175"}),n.original_name," (",n.character,")"]},n.id)}))})})}},390:function(n,t,e){e.d(t,{$:function(){return c},_:function(){return r}});var r="https://api.themoviedb.org/3/",c="f83854a9f07b692049f953a5cb8c1e39"},299:function(n,t,e){var r=e(861),c=e(757),o=e.n(c),i=e(390);function u(){return(u=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i._).concat(t).concat(i.$)).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}t.Z=function(n){return u.apply(this,arguments)}},861:function(n,t,e){function r(n,t,e,r,c,o,i){try{var u=n[o](i),a=u.value}catch(f){return void e(f)}u.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var i=n.apply(t,e);function u(n){r(i,c,o,u,a,"next",n)}function a(n){r(i,c,o,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=322.c021bd77.chunk.js.map