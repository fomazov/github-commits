(this["webpackJsonpgithub-commits"]=this["webpackJsonpgithub-commits"]||[]).push([[0],{35:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a,n,r=c(0),s=c(1),i=c.n(s),o=c(28),l=c.n(o),u=(c(35),c(7)),j=c(2),h=function(){return Object(r.jsxs)("nav",{className:"navbar navbar-dark bg-primary navbar-expand-lg",children:[Object(r.jsx)("div",{className:"navbar-brand",children:"Github Commits"}),Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.c,{to:"/about",className:"nav-link",children:"About"})})]})]})},b=function(e){var t=e.commit;return Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:t.commit.message}),Object(r.jsx)("pre",{children:Object(r.jsx)("a",{href:t.html_url,target:"_blank",children:t.sha})}),Object(r.jsx)(u.b,{to:"/commit/"+t.sha,className:"btn btn-primary",children:"More..."})]})})},d=Object(s.createContext)(),m=function(){var e=Object(s.useContext)(d),t=e.loading,c=e.getCommits,a=e.commits;return Object(s.useEffect)((function(){c()}),[]),Object(r.jsx)(s.Fragment,{children:t?Object(r.jsx)("p",{className:"text-center",children:"Loading..."}):a.map((function(e){return Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)(b,{commit:e})},e.sha)}))})},p=function(){return Object(r.jsx)("div",{className:"jumbotron",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"display-4",children:"GitHub commits"}),Object(r.jsx)("p",{className:"lead",children:"Application shows git commit history for the current project through GitHub API"}),Object(r.jsx)("h2",{children:"Objective"}),Object(r.jsx)("p",{children:"The goal of this project will be to create a web application that shows git commit history for the project you\u2019re working on (looks a lot like recursion, huh?). You need to make many well-stated commits while working on this project and regularly push them up."}),Object(r.jsxs)("p",{children:["You will need to sign up for a free GitHub account if you do not already have one, then create a public repository to store your work so that we will be able to see and review it. You can find documentation on the GitHub API here:",Object(r.jsx)("a",{href:"https://developer.github.com/v3/",target:"_blank",children:"https://developer.github.com/v3/"})]}),Object(r.jsx)("p",{children:"You can use the Angular, Vue, or React framework. We are currently looking for candidates that know Angular or TypeScript."}),Object(r.jsx)("h2",{children:"Requirements"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"You must use the GitHub API - while you could make a scraper or devise another method to get the git commit history of your project, we would like to see how you work with an existing API."}),Object(r.jsx)("li",{children:"Your GitHub repository must be public - this will allow us to look at it and verify the accuracy of your code."}),Object(r.jsxs)("li",{children:["The style of the page is up to you. Typically we use something like Bootstrap (",Object(r.jsx)("a",{href:"http://getbootstrap.com",target:"_blank",children:"http://getbootstrap.com"}),") for a lot of our projects, then style it to meet the business want or need later on."]}),Object(r.jsx)("li",{children:"The page does not need to be a real-time view (it\u2019s okay for us to refresh it to get the latest commits on your repository)."})]})]})})},O=c(8),x=c.n(O),f=c(11),g=function(e){var t=e.match,c=Object(s.useContext)(d),a=c.getCommit,n=c.loading,i=t.params.sha;Object(s.useEffect)(Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(i);case 2:case"end":return e.stop()}}),e)}))),[]);var o=Object(s.useContext)(d).info,l=o.sha,j=o.html_url,h=o.author.avatar_url,b=o.commit,m=b.message,p=b.author.name;return n?Object(r.jsx)("p",{className:"text-center",children:"Loading..."}):Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)(u.b,{to:"/",className:"btn btn-link",children:"Back to list"}),Object(r.jsxs)("div",{class:"card",style:{width:"18rem"},children:[Object(r.jsx)("img",{class:"card-img-top",src:h,alt:""}),Object(r.jsxs)("div",{class:"card-body",children:[Object(r.jsx)("h5",{class:"card-title",children:p}),Object(r.jsx)("p",{class:"card-text",children:m})]}),Object(r.jsx)("ul",{class:"list-group list-group-flush",children:Object(r.jsx)("li",{class:"list-group-item",children:l})}),Object(r.jsx)("div",{class:"card-body",children:Object(r.jsx)("a",{href:j,class:"card-link",children:"Link"})})]})]})},v=Object(s.createContext)(),y=function(){var e=Object(s.useContext)(v),t=e.alert,c=e.hide;return t?Object(r.jsxs)("div",{className:"alert alert-".concat(t.type||"secondary"," alert-dismissible"),role:"alert",children:[t.text,Object(r.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:c,children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null},w=c(12),k=c(6),N="SHOW_ALERT",T="HIDE_ALERT",A="GET_COMMIT",C="GET_COMMITS",E="SET_LOADING",_=(a={},Object(k.a)(a,N,(function(e,t){return t.payload})),Object(k.a)(a,T,(function(){return null})),Object(k.a)(a,"DEFAULT",(function(e){return e})),a),L=function(e,t){return(_[t.type]||_.DEFAULT)(e,t)},G=function(e){var t=e.children,c=Object(s.useReducer)(L,null),a=Object(w.a)(c,2),n=a[0],i=a[1];return Object(r.jsx)(v.Provider,{value:{hide:function(){return i({type:T})},show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"secondary";i({type:N,payload:{type:t,text:e}})},alert:n},children:t})},H=c(18),I=c.n(H),D=c(9),F=(n={},Object(k.a)(n,C,(function(e,t){var c=t.payload;return Object(D.a)(Object(D.a)({},e),{},{commits:c,loading:!1})})),Object(k.a)(n,A,(function(e,t){var c=t.payload;return Object(D.a)(Object(D.a)({},e),{},{info:c,loading:!1})})),Object(k.a)(n,E,(function(e){return Object(D.a)(Object(D.a)({},e),{},{loading:!0})})),Object(k.a)(n,"DEFAULT",(function(e){return e})),n),M=function(e,t){return(F[t.type]||F.DEFAULT)(e,t)},P=function(e){return"".concat(e,"client_id=").concat("877e1bdd4131f87f2940","&client_secret=").concat("687c4c85e9da1fcc622c96f5e4443f09ffc096db")},R=function(e){var t=e.children,c=Object(s.useReducer)(M,{info:{},commits:[],loading:!1}),a=Object(w.a)(c,2),n=a[0],i=a[1],o=function(){var e=Object(f.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,I.a.get(P("https://api.github.com/repos/fomazov/github-commits/commits/".concat(t,"?")));case 3:c=e.sent,i({type:A,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,I.a.get(P("https://api.github.com/repos/fomazov/github-commits/commits?"));case 3:t=e.sent,i({type:C,payload:t.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){return i({type:E})},j=n.info,h=n.commits,b=n.loading;return Object(r.jsx)(d.Provider,{value:{setLoading:u,getCommit:o,getCommits:l,info:j,commits:h,loading:b},children:t})};var Y=function(){return Object(r.jsx)(R,{children:Object(r.jsx)(G,{children:Object(r.jsxs)(u.a,{basename:"/github-commits",children:[Object(r.jsx)(h,{}),Object(r.jsxs)("div",{className:"container pt-4",children:[Object(r.jsx)(y,{alert:{text:"Test alert"}}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/",exact:!0,component:m}),Object(r.jsx)(j.a,{path:"/about",component:p}),Object(r.jsx)(j.a,{path:"/commit/:sha",component:g})]})]})]})})})};l.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Y,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.0586de71.chunk.js.map