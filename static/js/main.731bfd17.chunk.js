(this.webpackJsonpslackmngr=this.webpackJsonpslackmngr||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(25),s=n.n(i),o=(n(107),n(8)),a=(n(108),n(15)),j=Object(a.b)({config:{initialColorMode:"light",useSystemColorMode:!0}}),u=n(51),l=Object(c.createContext)({});function d(){return Object(c.useContext)(l)}var b=Object(c.createContext)({});function O(){return Object(c.useContext)(b)}var h=Object(c.createContext)({}),f=n(5),x=n(34),p=n(30),m=n(31),g=n(16),v=n.n(g),k=n(64),w=n(65),C=n(68),S=n(11),y=n(59),_=n.n(y),R=n(71),T=n.n(R);function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.displayErrors,n=void 0===t||t,r=Object(C.a)(),i=Object(c.useContext)(l),s=i.token;function o(e){return a.apply(this,arguments)}function a(){return a=Object(p.a)(v.a.mark((function e(t){var c,i,o,a,j=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.length>1&&void 0!==j[1]?j[1]:{},i=new URLSearchParams(Object(m.a)(Object(m.a)({},c),{},{token:s})),e.next=4,fetch("https://slack.com/api/".concat(t),{method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded"},body:i});case 4:return o=e.sent,e.next=7,o.json();case 7:if(a=e.sent,console.debug(t,c,a),!a.ok&&n){e.next=13;break}return e.abrupt("return",a);case 13:r({title:a.error,status:"error",isClosable:!0});case 14:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}return o}var I=n(73),N=new(n.n(I).a);function P(e){return N.replace_colons(e)}function A(e){var t=N.replace_colons(e);return t===e?"":t}N.replace_mode="unified",N.allow_native=!0;var z=n(4);function E(){var e=O().recipes;return Object(z.jsx)(k.b,{height:"100%",children:Object(z.jsxs)(k.h,{height:"100%",children:[Object(z.jsxs)(k.h,{spacing:5,children:[Object(z.jsx)(k.e,{marginY:"1",size:"md",textAlign:"center",textTransform:"uppercase",letterSpacing:"widest",children:"\u270c\ufe0fslackmngr"}),Object(z.jsx)(F,{}),Object(z.jsx)(k.c,{}),Object(z.jsxs)(k.f,{columns:[1,2],spacing:5,children:[e.map((function(e){return Object(z.jsx)(L,Object(m.a)({},e),e.id)})),Object(z.jsx)(M,{}),Object(z.jsx)(W,{})]})]}),Object(z.jsx)(k.a,{flexGrow:1}),Object(z.jsx)(k.a,{overflow:"auto",children:Object(z.jsx)(k.a,{sx:{position:"sticky",bottom:"0"},children:Object(z.jsx)(q,{})})})]})})}function F(){var e=Object(c.useContext)(h),t=e.profile,n=e.setProfile,r=e.dnd,i=e.setDnd,s=D(),a=Object(c.useState)(!1),j=Object(o.a)(a,2),u=j[0],l=j[1];function d(){l(!0);var e=s("users.profile.get").then((function(e){return n(e.profile)})),t=s("dnd.info").then((function(e){return i(e)}));Promise.all([e,t]).then((function(){return l(!1)}))}return Object(c.useEffect)((function(){d()}),[]),Object(z.jsxs)(k.d,{children:[t&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(k.e,{size:"xl",children:[P(t.status_emoji)," ",(null===r||void 0===r?void 0:r.snooze_enabled)&&"\ud83d\udca4 ",t.status_text]}),(null===r||void 0===r?void 0:r.snooze_enabled)&&Object(z.jsxs)(k.i,{children:["(ends ",_.a.unix(r.snooze_endtime).fromNow(),")"]})]}),Object(z.jsx)(k.g,{}),Object(z.jsx)(w.a,{isLoading:u,onClick:d,children:Object(z.jsx)(S.g,{})})]})}function L(e){var t=e.emoji_name,n=e.name,r=e.minutes,i=e.text,s=e.dnd,a=D(),j=Object(C.a)(),u=Object(c.useContext)(h),l=u.setProfile,d=u.setDnd,b=Object(c.useState)(!1),O=Object(o.a)(b,2),f=O[0],x=O[1],m=P(t);function g(){return(g=Object(p.a)(v.a.mark((function e(){var n,c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!0),!s){e.next=10;break}return e.next=4,a("dnd.setSnooze",{num_minutes:r});case 4:if(c=e.sent){e.next=7;break}return e.abrupt("return",x(!1));case 7:n=c.snooze_endtime,e.next=11;break;case 10:n=B(r);case 11:return d(c),e.next=14,a("users.profile.set",{profile:JSON.stringify({status_expiration:n,status_emoji:t,status_text:i})});case 14:if(o=e.sent){e.next=17;break}return e.abrupt("return",x(!1));case 17:j({title:"".concat(m," ").concat(i),status:"success"}),l(o.profile),x(!1);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(z.jsxs)(w.a,{isLoading:f,size:"lg",onClick:function(){return g.apply(this,arguments)},children:[m," ",n]})}function W(){var e=D(),t=D({displayErrors:!1}),n=Object(C.a)(),r=Object(c.useContext)(h),i=r.setProfile,s=r.setDnd,a=Object(c.useState)(!1),j=Object(o.a)(a,2),u=j[0],l=j[1];function d(){return(d=Object(p.a)(v.a.mark((function c(){var r,a,j,u,d,b,O;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return l(!0),r=t("dnd.endSnooze"),a=e("users.profile.set",{profile:JSON.stringify({status_emoji:"",status_text:""})}),c.next=5,Promise.all([a,r]);case 5:j=c.sent,u=Object(o.a)(j,1),d=u[0],b=d.profile,O=d.dndResp,n({title:"Status & DND cleared",status:"success"}),i(b),s(O),l(!1);case 14:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(z.jsx)(w.a,{isLoading:u,size:"lg",onClick:function(){return d.apply(this,arguments)},children:"\u274c Reset"})}function M(){var e=D({displayErrors:!1}),t=Object(C.a)(),n=Object(c.useContext)(h).setDnd,r=Object(c.useState)(!1),i=Object(o.a)(r,2),s=i[0],a=i[1];function j(){return(j=Object(p.a)(v.a.mark((function c(){var r;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a(!0),c.next=3,e("dnd.endSnooze");case 3:r=c.sent,t({title:"DND cleared",status:"success"}),n(r),a(!1);case 7:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(z.jsx)(w.a,{isLoading:s,size:"lg",onClick:function(){return j.apply(this,arguments)},children:"\u2600\ufe0f Clear DND"})}function B(e){return Math.round((new Date).getTime()/1e3)+60*e}function q(){var e=Object(f.g)();return Object(z.jsxs)(k.h,{direction:"row",paddingBottom:3,children:[Object(z.jsx)(k.a,{flexGrow:1}),Object(z.jsx)(w.a,{onClick:function(){return e("settings")},children:Object(z.jsx)(S.i,{})})]})}_.a.extend(T.a);var J=n(47);function U(){return Object(z.jsx)(k.b,{children:Object(z.jsx)(k.j,{children:Object(z.jsx)(J.a,{})})})}var G=n(48),H=n(66);function K(){var e=Object(c.useContext)(l),t=e.hasAuth,n=e.setToken,r=Object(f.f)(),i=Object(f.g)();if(t){var s,o,a=(null===(s=r.state)||void 0===s||null===(o=s.from)||void 0===o?void 0:o.pathname)||"/";return Object(z.jsx)(f.a,{to:a,replace:!0})}return Object(z.jsx)(k.b,{children:Object(z.jsxs)(k.h,{children:[Object(z.jsx)(k.e,{children:"Auth"}),Object(z.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);n(t.get("token"))},children:Object(z.jsxs)(k.j,{align:"start",children:[Object(z.jsxs)(G.a,{id:"token",isRequired:!0,children:[Object(z.jsx)(G.c,{children:"Slack API Token"}),Object(z.jsx)(H.a,{name:"token",type:"text",autoComplete:"off",spellCheck:"false"}),Object(z.jsxs)(G.b,{children:["Token must have access to the ",Object(z.jsx)("code",{children:"dnd:write"}),","," ",Object(z.jsx)("code",{children:"users.profile:read"}),", and"," ",Object(z.jsx)("code",{children:"users.profile:write"})," scopes"]})]}),Object(z.jsxs)(k.h,{direction:"row",justify:"space-between",width:"100%",children:[Object(z.jsx)(w.a,{rightIcon:Object(z.jsx)(S.b,{}),type:"submit",children:"Submit"}),Object(z.jsx)(w.a,{leftIcon:Object(z.jsx)(S.f,{}),onClick:function(){return i("/settings")},children:"About slackmngr"})]})]})})]})})}var V=n(74);function Y(){var e=d(),t=e.hasAuth,n=e.token,c=e.setToken,r=Object(f.g)();return Object(z.jsx)(k.b,{children:Object(z.jsxs)(k.j,{paddingTop:3,spacing:5,children:[Object(z.jsx)(w.a,{leftIcon:Object(z.jsx)(S.c,{}),onClick:function(){return r(-1)},children:"Back"}),Object(z.jsx)(k.e,{children:"Settings"}),Object(z.jsxs)(k.i,{children:["v",V.a]}),Object(z.jsxs)(k.a,{children:[Object(z.jsx)(k.i,{children:"Slack Manager works best as a home screen app."}),Object(z.jsx)(k.i,{children:"For iOS: Share > Add to Home Screen."})]}),Object(z.jsx)(w.a,{leftIcon:Object(z.jsx)(S.h,{}),onClick:function(){return window.open("https://github.com/sheck/slackmngr","_blank")},children:"View Source on Github"}),t&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(k.c,{}),Object(z.jsx)(w.a,{leftIcon:Object(z.jsx)(S.e,{}),onClick:function(){return r("/edit")},children:"Edit Recipes"}),Object(z.jsx)(k.c,{}),Object(z.jsx)($,{token:n}),Object(z.jsx)(w.a,{leftIcon:Object(z.jsx)(S.l,{}),onClick:function(){return c("")},children:"Clear Slack Token"})]})]})})}function $(e){var t=e.token,n=Object(c.useState)(!1),r=Object(o.a)(n,2),i=r[0],s=r[1],a=function(){return s(!i)},j=Object(C.a)();function u(){return(u=Object(p.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t);case 3:j({title:"Token copied to clipboard",status:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),j({title:"Could not copy token. ".concat(e.t0),status:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return i?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(w.a,{leftIcon:Object(z.jsx)(S.k,{}),onClick:a,children:"Hide Token"}),Object(z.jsx)(k.i,{children:t}),Object(z.jsx)(w.a,{onClick:function(){return u.apply(this,arguments)},children:"Copy to clipboard"})]}):Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(w.a,{leftIcon:Object(z.jsx)(S.j,{}),onClick:a,children:"Show Token"})})}function Q(){var e=Object(f.g)();return Object(z.jsx)(k.b,{children:Object(z.jsxs)(k.j,{children:[Object(z.jsx)(k.e,{children:"Not Found"}),Object(z.jsx)(w.a,{onClick:function(){return e("/")},children:"Back to main page"})]})})}var X=n(60),Z=n(67);var ee=[{id:"lunch",name:"Lunch",emoji_name:":fork_and_knife:",text:"Out to lunch",minutes:60,dnd:!0},{id:"break",name:"Break",emoji_name:":coffee:",text:"On a break",minutes:30,dnd:!0},{id:"out-of-office",name:"Out of office",emoji_name:":no_entry:",text:"Out of office",minutes:720,dnd:!0},{id:"sick",name:"Sick",emoji_name:":face_with_thermometer:",text:"Out sick",minutes:720,dnd:!0},{id:"relocating",name:"Relocating",emoji_name:":bus:",text:"Relocating",minutes:30,dnd:!1},{id:"coffee-shop",name:"Coffee shop",emoji_name:":computer:",text:"Working from coffee shop",minutes:720,dnd:!1}];function te(){var e=Object(f.g)(),t=O(),n=t.recipes,r=t.setRecipes,i=Object(c.useState)(n),s=Object(o.a)(i,2),a=s[0],j=s[1],u=Object(C.a)(),l=function(e){return function(){return j(a.filter((function(t){return t!==e})))}};return Object(z.jsx)(k.b,{children:Object(z.jsxs)(k.h,{marginTop:3,spacing:5,children:[Object(z.jsx)(w.a,{marginRight:"auto",leftIcon:Object(z.jsx)(S.c,{}),onClick:function(){return e(-1)},children:"Back"}),Object(z.jsx)(k.e,{children:"Edit Recipes"}),a.map((function(e,t){return Object(z.jsx)(ce,{key:e.id,remove:l(e),recipe:e,index:t,setRecipes:j})})),Object(z.jsx)(w.a,{leftIcon:Object(z.jsx)(S.a,{}),colorScheme:"blue",onClick:function(){return j([].concat(Object(X.a)(a),[{id:"".concat((new Date).getTime()),name:"New Recipe",emoji_name:":wave:",text:"My away text",minutes:60,dnd:!0}]))},children:"Add New Recipe"}),Object(z.jsx)(k.c,{}),Object(z.jsxs)(k.d,{justify:"space-between",children:[Object(z.jsx)(w.a,{onClick:function(){j(ee),r(ee),u({title:"Recipes reset to default",status:"info"})},colorScheme:"red",children:"Reset to Defaults"}),Object(z.jsxs)(k.d,{children:[Object(z.jsx)(w.a,{onClick:function(){return e(-1)},children:"Cancel"}),Object(z.jsx)(w.a,{onClick:function(){r(a),e("/"),u({title:"Recipes updated",status:"success"})},colorScheme:"green",children:"Submit"})]})]})]})})}function ne(e,t,n){e((function(e){var c=Object(X.a)(e);return c[t]=Object(m.a)(Object(m.a)({},c[t]),n),c}))}function ce(e){var t=e.recipe,n=e.setRecipes,c=e.index,r=e.remove;return Object(z.jsxs)(k.j,{spacing:1,alignItems:"end",border:"1px",borderColor:"gray.300",borderRadius:"md",p:"5",children:[Object(z.jsxs)(G.a,{isRequired:!0,children:[Object(z.jsx)(G.c,{children:"Name"}),Object(z.jsx)(H.a,{value:t.name,onChange:function(e){return ne(n,c,{name:e.target.value})}})]}),Object(z.jsxs)(G.a,{isRequired:!0,children:[Object(z.jsxs)(G.c,{children:["Emoji: ",A(t.emoji_name)]}),Object(z.jsx)(H.a,{value:t.emoji_name,onChange:function(e){return ne(n,c,{emoji_name:e.target.value})}})]}),Object(z.jsxs)(G.a,{isRequired:!0,children:[Object(z.jsx)(G.c,{children:"Status text"}),Object(z.jsx)(H.a,{value:t.text,onChange:function(e){return ne(n,c,{text:e.target.value})}})]}),Object(z.jsxs)(G.a,{isRequired:!0,children:[Object(z.jsx)(G.c,{children:"Number of minutes"}),Object(z.jsx)(H.a,{value:t.minutes,type:"number",onChange:function(e){var t=parseInt(e.target.value);!isNaN(t)&&ne(n,c,{minutes:t})}})]}),Object(z.jsx)(G.a,{children:Object(z.jsx)(Z.a,{isChecked:t.dnd,onChange:function(){return ne(n,c,{dnd:!t.dnd})},children:"Set DND with status"})}),Object(z.jsx)(w.a,{marginLeft:"auto",leftIcon:Object(z.jsx)(S.d,{}),onClick:r,colorScheme:"red",children:"Remove"})]})}function re(e){var t=e.children,n=d().hasAuth,c=Object(f.f)();return n?t:Object(z.jsx)(f.a,{to:"/login",state:{from:c}})}function ie(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),s=Object(o.a)(i,2),d=s[0],O=s[1],p=Object(c.useState)(),m=Object(o.a)(p,2),g=m[0],v=m[1],k=Object(c.useState)(),w=Object(o.a)(k,2),C=w[0],S=w[1],y=Object(c.useState)([]),_=Object(o.a)(y,2),R=_[0],T=_[1];Object(c.useEffect)((function(){Object(u.a)(["slackmngr.token","slackmngr.recipes"]).then((function(e){var t=Object(o.a)(e,2),n=t[0],c=t[1],i=[];i=c&&c.length>0?c:ee,O(n||""),T(i),r(!0)}))}),[]);var D=d.length>0;return n?Object(z.jsx)(a.a,{theme:j,children:Object(z.jsx)(l.Provider,{value:{token:d,setToken:function(e){Object(u.b)("slackmngr.token",e),O(e)},hasAuth:D},children:Object(z.jsx)(b.Provider,{value:{recipes:R,setRecipes:function(e){Object(u.b)("slackmngr.recipes",e),T(e)}},children:Object(z.jsx)(h.Provider,{value:{profile:g,setProfile:v,dnd:C,setDnd:S},children:Object(z.jsx)(x.a,{children:Object(z.jsxs)(f.d,{children:[Object(z.jsx)(f.b,{path:"/",element:Object(z.jsx)(re,{children:Object(z.jsx)(E,{})})}),Object(z.jsx)(f.b,{path:"/login",element:Object(z.jsx)(K,{})}),Object(z.jsx)(f.b,{path:"/settings",element:Object(z.jsx)(Y,{})}),Object(z.jsx)(f.b,{path:"/edit",element:Object(z.jsx)(te,{})}),Object(z.jsx)(f.b,{path:"*",element:Object(z.jsx)(Q,{})})]})})})})})}):Object(z.jsx)(a.a,{theme:j,children:Object(z.jsx)(U,{})})}var se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))},je=n(44);s.a.render(Object(z.jsxs)(r.a.StrictMode,{children:[Object(z.jsx)(je.c,{initialColorMode:j.config.initialColorMode}),Object(z.jsx)(ie,{})]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):oe(t,e)}))}}({onUpdate:function(e){e&&e.waiting&&e.waiting.postMessage({type:"SKIP_WAITING"}),window.location.reload()}}),ae()},74:function(e){e.exports=JSON.parse('{"a":"1.0.0"}')}},[[117,1,2]]]);
//# sourceMappingURL=main.731bfd17.chunk.js.map