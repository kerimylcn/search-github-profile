(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(5),a=c.n(r),i=(c(11),c(4)),o=c.n(i),j=c(6),l=c(2),u=(c(13),c(0));function b(e){var t=e.data;return Object(s.useEffect)((function(){console.log(t)}),[t]),Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("span",{className:"pro",children:"G\u0130THUB"}),Object(u.jsx)("img",{className:"round",src:t.avatar_url,alt:"user"}),Object(u.jsx)("h3",{children:t.username}),Object(u.jsx)("h6",{children:t.location}),Object(u.jsx)("p",{children:t.bio}),Object(u.jsxs)("a",{children:["followers : ",t.followers]}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("a",{href:t.html_url,style:{color:"red"},children:"GO PROF\u0130LE"}),Object(u.jsx)("div",{className:"skills",children:Object(u.jsx)("h6",{})})]})]})}var d=function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(),a=Object(l.a)(r,2),i=a[0],d=a[1],h=Object(s.useState)(),O=Object(l.a)(h,2),p=(O[0],O[1]),x=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,s,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://api.github.com/users/".concat(i));case 3:return c=e.sent,e.next=6,c.json();case 6:return s=e.sent,e.next=9,fetch(s.repos_url);case 9:return r=e.sent,e.next=12,r.json();case 12:a=e.sent,console.log(s),s&&(n(s),p(a));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"ui form",children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("form",{className:"user-form",id:"form",children:[Object(u.jsx)("input",{type:"text",onChange:function(e){d(e.target.value)},placeholder:"search username here..."}),Object(u.jsx)("button",{type:"submit",onClick:x,children:"Search"})]})}),c&&Object(u.jsx)(b,{data:c})]})},h=c.p+"static/media/github-logo.6bca0fa7.jpg",O=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("img",{src:h,className:"logo"}),Object(u.jsx)(d,{})]})};a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.815ad41c.chunk.js.map