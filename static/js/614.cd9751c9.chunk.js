"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[614],{614:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(439),c=t(791),u=t(689),i=t(729),o="reviews_ul__review__ORVZs",a="reviews_list__review__IWO6b",s=t(184),f=function(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],f=e[1],h=(0,u.UO)().movieId,l="movie/".concat(h,"/reviews?api_key=");return(0,c.useEffect)((function(){(0,i.Z)(l).then((function(n){return f(n.results)})).catch((function(n){console.log(n)}))}),[l]),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:o,children:t.map((function(n){return(0,s.jsx)("li",{className:a,children:(0,s.jsx)("a",{href:n.url,children:n.author})},n.id)}))})})}},729:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(861),c=t(757),u=t.n(c),i="https://api.themoviedb.org/3/",o="f83854a9f07b692049f953a5cb8c1e39";function a(){return(a=(0,r.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i).concat(e).concat(o)).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var s=function(n){return a.apply(this,arguments)}},861:function(n,e,t){function r(n,e,t,r,c,u,i){try{var o=n[u](i),a=o.value}catch(s){return void t(s)}o.done?e(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,u){var i=n.apply(e,t);function o(n){r(i,c,u,o,a,"next",n)}function a(n){r(i,c,u,o,a,"throw",n)}o(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=614.cd9751c9.chunk.js.map