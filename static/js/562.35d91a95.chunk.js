"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[562],{556:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var a=r(861),n=r(439),c=r(757),s=r.n(c),i=r(689),u=r(791),l=r(159),_={list__img:"cast_list__img__d8Ccw",list:"cast_list__6F4cJ",list__item:"cast_list__item__KQ8LV",list__name:"cast_list__name__IcKeL",list__character:"cast_list__character__7iZFB",error:"cast_error__jQRSc"},o=r.p+"static/media/image.cfcfb5512c5179c883c0.jpg",p=r(184),m=function(){var t=(0,u.useState)(null),e=(0,n.Z)(t,2),r=e[0],c=e[1],m=(0,u.useState)(!0),f=(0,n.Z)(m,2),h=f[0],d=f[1],v=(0,i.UO)().movieId;return(0,u.useEffect)((function(){var t=function(){var t=(0,a.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,(0,l.M)(v);case 4:e=t.sent,r=e.cast,c(r),d(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:return t.prev=13,d(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[v]),(0,p.jsx)(p.Fragment,{children:h?"Loading...":r&&r.length>0?(0,p.jsx)("div",{className:_.list__wrap,children:(0,p.jsx)("ul",{className:_.list,children:r.map((function(t){var e=t.name,r=t.character,a=t.profile_path,n=t.id;return(0,p.jsxs)("li",{className:_.list__item,children:[a?(0,p.jsx)("img",{className:_.list__img,alt:e,src:"https://image.tmdb.org/t/p/w92".concat(a)}):(0,p.jsx)("img",{className:_.list__img,alt:e,src:o}),(0,p.jsx)("p",{className:_.list__name,children:e}),(0,p.jsx)("p",{className:_.list__character,children:r})]},n)}))})}):(0,p.jsx)("p",{className:_.error,children:"No data found"})})}},159:function(t,e,r){r.d(e,{M:function(){return i},q:function(){return l}});var a=r(861),n=r(757),c=r.n(n),s=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"f83854a9f07b692049f953a5cb8c1e39",language:"en-US"}});function i(t){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)(c().mark((function t(e){var r,a,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,s.get(r);case 4:return a=t.sent,n=a.data,t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function l(t){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)(c().mark((function t(e){var r,a,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/search/movie?query=".concat(e),t.prev=1,t.next=4,s.get(r);case 4:return a=t.sent,n=a.data,t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=562.35d91a95.chunk.js.map