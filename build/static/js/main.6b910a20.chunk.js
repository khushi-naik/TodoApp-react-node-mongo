(this.webpackJsonptestreact=this.webpackJsonptestreact||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(27),s=n.n(i),j=(n(34),n(35),n(10)),a=n(15),o=n(12),l=n(28),b=n.n(l),d=n(1);var h=function(){var e=Object(c.useState)({title:"",content:""}),t=Object(o.a)(e,2),n=t[0],r=t[1];function i(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(j.a)({},n,c))}))}return Object(d.jsxs)("form",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{onChange:i,name:"title",type:"text",placeholder:"enter your task title here",value:n.title})}),Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{onChange:i,name:"content",placeholder:"enter the content",value:n.content,maxLength:"140"})}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault();var t=new Date,c={title:n.title,content:n.content,time:t};console.log(n),b.a.post("http://localhost:3001/create",c)},className:"notes-button",type:"submit",children:"Add Note"})]})},u=n(11);var O=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h4",{children:Object(d.jsx)(u.b,{to:"/notes",children:"Notes"})})})},x=n(2);var v=function(e){var t=Object(c.useState)([{title:"",content:"",time:""}]),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){fetch("/notes").then((function(e){if(e.ok)return e.json()})).then((function(e){return i(e)}))})),Object(d.jsx)("div",{children:r.map((function(e){return Object(d.jsxs)("div",{className:"note",children:[Object(d.jsx)("h4",{children:e.title}),Object(d.jsx)("div",{className:"note-date",children:Object(d.jsx)("p",{children:e.time})}),Object(d.jsx)("div",{className:"note-para",children:Object(d.jsx)("p",{children:e.content})})]})}))})};var p=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React Todo App"}),Object(d.jsx)(h,{}),Object(d.jsx)("div",{children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(x.a,{path:"/notes",children:Object(d.jsx)(v,{})})]})})]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)("div",{children:Object(d.jsx)(p,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.6b910a20.chunk.js.map