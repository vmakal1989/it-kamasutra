(this["webpackJsonpit-kamasutra"]=this["webpackJsonpit-kamasutra"]||[]).push([[4],{299:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(38),s=t(39),i=t(42),c=t(40),r=t(43),o=t(0),l=t.n(o),m=t(9),u=t(32),d=function(e){return{auth:e.auth.isAuth}},g=function(e){var a=function(a){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(r.a)(t,a),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth?l.a.createElement(e,this.props):l.a.createElement(u.a,{to:"/login"})}}]),t}(l.a.Component);return Object(m.b)(d)(a)}},301:function(e,a,t){e.exports={dialogsBody:"Dialogs_dialogsBody__4-00K",dialogs:"Dialogs_dialogs__qaH3-",active:"Dialogs_active__TM1d1",comments:"Dialogs_comments__3AODd",sendMessage:"Dialogs_sendMessage__2GLTU"}},305:function(e,a,t){"use strict";t.r(a);var n=t(129),s=t(0),i=t.n(s),c=t(301),r=t.n(c),o=t(18),l=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:r.a.dialogs},i.a.createElement(o.b,{to:a,activeClassName:r.a.active},e.name))},m=function(e){return i.a.createElement("div",null,e.messages)},u=t(89),d=t(35),g=t(130),b=t(30),E=t(31),f=Object(E.a)(15),v=Object(E.b)(2),p=Object(g.a)({form:"dialogsForm",onSubmitSuccess:function(e,a){a(Object(d.a)("dialogsForm"))}})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",{className:r.a.sendMessage},i.a.createElement("div",null,i.a.createElement(u.a,{name:"textarea",component:b.a,type:"textarea",validate:[E.c,f,v]})),i.a.createElement("div",null,i.a.createElement("button",null,"Send"))))})),_=function(e){var a=e.dialogsElements.dialogs.map((function(e){return i.a.createElement(l,{name:e.name,id:e.id})})),t=e.dialogsElements.messages.map((function(e){return i.a.createElement(m,{messages:e.message})}));return i.a.createElement("div",{className:r.a.dialogsBody},i.a.createElement("div",{className:r.a.userBody},a),i.a.createElement("div",{className:r.a.comments},i.a.createElement("div",null,t),i.a.createElement(p,Object.assign({},e,{onSubmit:function(a){e.addNewMessage(a)}}))))},O=t(9),h=t(299),j=t(5);a.default=Object(j.d)(h.a,Object(O.b)((function(e){return{dialogsElements:e.dialogsElements}}),{addNewMessage:n.a}))(_)}}]);
//# sourceMappingURL=4.74938466.chunk.js.map