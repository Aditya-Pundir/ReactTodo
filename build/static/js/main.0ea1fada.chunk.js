(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(18),r=a.n(c),o=(a(25),a(11)),l=a(20),i=(a(26),a(8)),b=a(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}d.defaultProps={title:"Your title here",searchBar:!0};var j=function(e){var t=e.todo,a=e.onDelete;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)},children:"Delete"}),Object(b.jsx)("hr",{})]})},u=function(e){return Object(b.jsxs)("div",{className:"container",style:{minHeight:"70vh"},children:[Object(b.jsx)("h3",{children:"Todos List"}),0===e.todos.length?"No TODOs to display":e.todos.map((function(t){return Object(b.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},m=function(e){var t=e.addTodo,a=Object(n.useState)(""),s=Object(o.a)(a,2),c=s[0],r=s[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),d=i[0],j=i[1];return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{className:"pt-5 my-3",children:"Add a TODO"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c,d),r(""),j("")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"todoTitle",className:"form-label",children:"TODO Title"}),Object(b.jsx)("input",{type:"text",value:c,onChange:function(e){return r(e.target.value)},className:"form-control",id:"todoTitle","aria-describedby":"emailHelp",required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"todoDesc",className:"form-label",children:"Todo Description"}),Object(b.jsx)("input",{type:"text",value:d,onChange:function(e){return j(e.target.value)},className:"form-control",id:"todoDesc",required:!0})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add TODO"})]})]})},h=function(){return Object(b.jsxs)("div",{style:{paddingTop:"5rem"},children:["This is an about component.",Object(b.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime est velit necessitatibus debitis quo soluta reprehenderit molestiae aliquam sequi temporibus, voluptatem aperiam consequuntur, in, quae tenetur dolores hic! Ut, enim. Porro, repellat labore?"})]})},O=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-4",children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodosList.com"})})},x=a(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){j(r.filter((function(t){return t!==e})))},a=function(e,t){var a={sno:0===r.length?0:r[r.length-1].sno+1,title:e,desc:t};j([].concat(Object(l.a)(r),[a]))},s=Object(n.useState)(e),c=Object(o.a)(s,2),r=c[0],j=c[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{title:"TODOs List",searchBar:!1}),Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{addTodo:a}),Object(b.jsx)(u,{todos:r,onDelete:t})]})}}),Object(b.jsx)(x.a,{exact:!0,path:"/about",render:function(){return Object(b.jsx)(h,{})}})]}),Object(b.jsx)(O,{})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.0ea1fada.chunk.js.map