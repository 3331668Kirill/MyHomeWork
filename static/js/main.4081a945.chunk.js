(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={message:"Message_message__GhZFg",div_img:"Message_div_img__2s9En",img:"Message_img__S5L09",name:"Message_name__2w2Cr",name_message:"Message_name_message__3VxkN",time:"Message_time__3rh1S"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1Iyh0",errorInput:"SuperInputText_errorInput__7lxGc",error:"SuperInputText_error__1d0GF",newSpanClassName:"SuperInputText_newSpanClassName__3w91a"}},,function(e,t,n){e.exports={navbar:"Header_navbar__3DIKC",img:"Header_img__3jsDW"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__3v3fe",error:"Greeting_error__1v-v-",messageError:"Greeting_messageError__33NAG",messageUsers:"Greeting_messageUsers__16OEU"}},,function(e,t,n){e.exports={default:"SuperButton_default__2i4WK",red:"SuperButton_red__270Ni"}},function(e,t,n){e.exports={blue:"HW4_blue__3OBAA",column:"HW4_column__12WvY",testSpanError:"HW4_testSpanError__2QsQd"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2sfHV",spanClassName:"SuperCheckbox_spanClassName__3kqb0"}},,function(e,t,n){e.exports={App:"App_App__QoBad"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(18),s=n.n(c),i=(n(25),n(19)),o=n.n(i),j=n(7),l=n(2),u=n(8),b=n.n(u),d=n(0);var h=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:b.a.div_img,children:Object(d.jsx)("img",{className:b.a.img,src:e.avatar})}),Object(d.jsxs)("div",{className:b.a.message,children:[Object(d.jsx)("p",{className:b.a.name,children:e.name}),Object(d.jsx)("p",{className:b.a.name_message,children:e.message}),Object(d.jsx)("p",{className:b.a.time,children:e.time})]})]})},O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Artem",m="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",p="20:00";var f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(h,{avatar:O,name:x,message:m,time:p}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},v=n(3);var g=function(e){return Object(d.jsxs)("div",{children:[e.affair._id,": ",e.affair.name," - priority: ",e.affair.priority,Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var _=function(e){var t=e.data.map((function(t){return Object(d.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(r.useState)(C),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(v.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(_,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},N=n(20),y=n(13),S=n.n(y),w=n(6),E=n(5),I=n(10),A=n.n(I),T=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(E.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(A.a.error," ").concat(i||""),l="".concat(c?A.a.errorInput:A.a.superInput," ").concat(s," ");return console.log(c,l),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(w.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(d.jsx)("span",{className:j,children:c})]})},F=n(15),U=n.n(F),P=function(e){var t=e.red,n=e.className,r=Object(E.a)(e,["red","className"]),a="".concat(t?U.a.red:U.a.default," ").concat(n);return Object(d.jsx)("button",Object(w.a)({className:a},r))},B=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.pressKey,c=e.error,s=e.totalUsers,i=(c&&S.a.error,S.a.messageError),o=S.a.messageUsers;return Object(d.jsxs)("div",{children:[Object(d.jsx)(T,{value:t,onChange:n,onKeyPress:a}),Object(d.jsx)("span",{className:i,children:c}),Object(d.jsx)(P,{onClick:r,children:" ADD "}),Object(d.jsxs)("span",{className:o,children:["  Total users: ",s]})]})},J=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(v.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),j=Object(v.a)(o,2),l=j[0],u=j[1],b=function(){s?(n(s),alert("Hello ".concat(s,"!")),i("")):u(" error. enter your name!!    ")},h=t.length;return console.log(t),Object(d.jsx)(B,{name:s,setNameCallback:function(e){e.target.value?(u(""),i(e.target.value)):i("")},addUser:b,error:l,totalUsers:h,pressKey:function(e){"Enter"===e.key&&b()}})},W=n(29);var G=function(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(J,{users:n,addUserCallback:function(e){a([{_id:Object(W.a)(),name:e}].concat(Object(N.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},H=n(16),K=n.n(H),M=n(17),D=n.n(M),R=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(E.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(D.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(w.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(d.jsx)("span",{className:D.a.spanClassName,children:a})]})};var L=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(v.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:K.a.column,children:[Object(d.jsx)(T,{value:n,onChangeText:a,onEnter:s,error:c}),Object(d.jsx)(T,{className:K.a.blue}),Object(d.jsx)(P,{children:"default"}),Object(d.jsx)(P,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(P,{disabled:!0,children:"disabled"}),Object(d.jsx)(R,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(R,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(E.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(v.a)(s,2),o=i[0],j=i[1],l=a||{},u=l.children,b=l.onDoubleClick,h=l.className,O=Object(E.a)(l,["children","onDoubleClick","className"]),x="".concat(A.a.newSpanClassName," ").concat(h);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(T,Object(w.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(d.jsx)("span",Object(w.a)(Object(w.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},O),{},{children:u||c.value}))})};function q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function V(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}q("test",{x:"A",y:1});V("test",{x:"",y:0});var X=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(Q,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(P,{onClick:function(){q("editable-span-value",n)},children:"save"}),Object(d.jsx)(P,{onClick:function(){a(V("editable-span-value","555"))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Y=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)(k,{}),Object(d.jsx)(G,{}),Object(d.jsx)(L,{}),Object(d.jsx)(X,{})]})},Z=n(12),z=n.n(Z);var $=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("img",{className:z.a.img,src:"https://free-images.com/or/b614/error_404_404_error.jpg"})]})},ee=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,a=Object(E.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)})):[];return Object(d.jsx)("select",Object(w.a)(Object(w.a)({onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},a),{},{children:c}))},te=function(e){e.type;var t=e.name,n=e.options,r=e.value,a=(e.onChange,e.onChangeOption),c=(Object(E.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e.currentTarget.value)}),s=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:t,value:e,onChange:c,checked:e===r}),e]},n)})):[];return Object(d.jsx)(d.Fragment,{children:s})},ne=["x","y","z"];var re=function(){var e=Object(r.useState)(ne[1]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ee,{options:ne,value:n,onChangeOption:a})}),Object(d.jsx)("div",{children:Object(d.jsx)(te,{name:"radio",options:ne,value:n,onChangeOption:a})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ae=function(){return Object(d.jsxs)("div",{children:["This is Junior",Object(d.jsx)(re,{})]})};var ce=function(){return Object(d.jsx)("div",{children:"This is Junior Plus"})},se="pre-junior",ie="junior",oe="plus-junior";var je=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(Y,{})}),Object(d.jsx)(l.a,{path:se,element:Object(d.jsx)(Y,{})}),Object(d.jsx)(l.a,{path:ie,element:Object(d.jsx)(ae,{})}),Object(d.jsx)(l.a,{path:oe,element:Object(d.jsx)(ce,{})}),Object(d.jsx)(l.a,{path:"*",element:Object(d.jsx)($,{})})]})})};var le=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("span",{className:z.a.navbar,children:[Object(d.jsx)(j.b,{to:se,children:" [PRE JUNIOR] "}),Object(d.jsx)(j.b,{to:ie,children:" [JUNIOR] "}),Object(d.jsxs)(j.b,{to:oe,children:[" [JUNIOR PLUS] ",Object(d.jsx)("input",{type:"checkbox"})]})]})})};var ue=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(le,{}),Object(d.jsx)(je,{})]})})};var be=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(ue,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.4081a945.chunk.js.map