(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={message:"Message_message__GhZFg",div_img:"Message_div_img__2s9En",img:"Message_img__S5L09",name:"Message_name__2w2Cr",name_message:"Message_name_message__3VxkN",time:"Message_time__3rh1S"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1Iyh0",errorInput:"SuperInputText_errorInput__7lxGc",error:"SuperInputText_error__1d0GF",newSpanClassName:"SuperInputText_newSpanClassName__3w91a"}},,function(e,t,n){e.exports={navbar:"Header_navbar__3DIKC",img:"Header_img__3jsDW"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__3v3fe",error:"Greeting_error__1v-v-",messageError:"Greeting_messageError__33NAG",messageUsers:"Greeting_messageUsers__16OEU"}},,function(e,t,n){e.exports={default:"SuperButton_default__2i4WK",red:"SuperButton_red__270Ni"}},function(e,t,n){e.exports={blue:"HW4_blue__3OBAA",column:"HW4_column__12WvY",testSpanError:"HW4_testSpanError__2QsQd"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2sfHV",spanClassName:"SuperCheckbox_spanClassName__3kqb0"}},,function(e,t,n){e.exports={App:"App_App__QoBad"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(18),s=n.n(a),i=(n(25),n(19)),o=n.n(i),j=n(7),l=n(2),u=n(8),b=n.n(u),d=n(0);var O=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:b.a.div_img,children:Object(d.jsx)("img",{className:b.a.img,src:e.avatar})}),Object(d.jsxs)("div",{className:b.a.message,children:[Object(d.jsx)("p",{className:b.a.name,children:e.name}),Object(d.jsx)("p",{className:b.a.name_message,children:e.message}),Object(d.jsx)("p",{className:b.a.time,children:e.time})]})]})},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Artem",m="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",p="20:00";var v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(O,{avatar:h,name:x,message:m,time:p}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},f=n(3);var g=function(e){return Object(d.jsxs)("div",{children:[e.affair._id,": ",e.affair.name," - priority: ",e.affair.priority,Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var _=function(e){var t=e.data.map((function(t){return Object(d.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(r.useState)(C),t=Object(f.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(f.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(_,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},N=n(20),y=n(13),w=n.n(y),S=n(6),I=n(5),E=n(10),T=n.n(E),A=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(T.a.error," ").concat(i||""),l="".concat(a?T.a.errorInput:T.a.superInput," ").concat(s," ");return console.log(a,l),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(S.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:l},o)),a&&Object(d.jsx)("span",{className:j,children:a})]})},F=n(15),U=n.n(F),P=function(e){var t=e.red,n=e.className,r=Object(I.a)(e,["red","className"]),c="".concat(t?U.a.red:U.a.default," ").concat(n);return Object(d.jsx)("button",Object(S.a)({className:c},r))},M=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.pressKey,a=e.error,s=e.totalUsers,i=(a&&w.a.error,w.a.messageError),o=w.a.messageUsers;return Object(d.jsxs)("div",{children:[Object(d.jsx)(A,{value:t,onChange:n,onKeyPress:c}),Object(d.jsx)("span",{className:i,children:a}),Object(d.jsx)(P,{onClick:r,children:" ADD "}),Object(d.jsxs)("span",{className:o,children:["  Total users: ",s]})]})},B=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(f.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(f.a)(o,2),l=j[0],u=j[1],b=function(){s?(n(s),alert("Hello ".concat(s,"!")),i("")):u(" error. enter your name!!    ")},O=t.length;return console.log(t),Object(d.jsx)(M,{name:s,setNameCallback:function(e){e.target.value?(u(""),i(e.target.value)):i("")},addUser:b,error:l,totalUsers:O,pressKey:function(e){"Enter"===e.key&&b()}})},D=n(29);var J=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(B,{users:n,addUserCallback:function(e){c([{_id:Object(D.a)(),name:e}].concat(Object(N.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},W=n(16),G=n.n(W),H=n(17),L=n.n(H),K=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(L.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(S.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(d.jsx)("span",{className:L.a.spanClassName,children:c})]})};var R=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(f.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:G.a.column,children:[Object(d.jsx)(A,{value:n,onChangeText:c,onEnter:s,error:a}),Object(d.jsx)(A,{className:G.a.blue}),Object(d.jsx)(P,{children:"default"}),Object(d.jsx)(P,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(P,{disabled:!0,children:"disabled"}),Object(d.jsx)(K,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(K,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(I.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(f.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,b=l.onDoubleClick,O=l.className,h=Object(I.a)(l,["children","onDoubleClick","className"]),x="".concat(T.a.newSpanClassName," ").concat(O);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(A,Object(S.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(d.jsx)("span",Object(S.a)(Object(S.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},h),{},{children:u||a.value}))})};function Y(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function q(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}Y("test",{x:"A",y:1});q("test",{x:"",y:0});var V=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(Q,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(P,{onClick:function(){Y("editable-span-value",n)},children:"save"}),Object(d.jsx)(P,{onClick:function(){c(q("editable-span-value","555"))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var X=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{}),Object(d.jsx)(k,{}),Object(d.jsx)(J,{}),Object(d.jsx)(R,{}),Object(d.jsx)(V,{})]})},Z=n(12),z=n.n(Z);var $=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("img",{className:z.a.img,src:"https://free-images.com/or/b614/error_404_404_error.jpg"})]})},ee=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,c=Object(I.a)(e,["options","onChange","onChangeOption"]),a=t?t.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)})):[];return Object(d.jsx)("select",Object(S.a)(Object(S.a)({onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},c),{},{children:a}))},te=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=(e.onChange,e.onChangeOption),a=(Object(I.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e.currentTarget.value)}),s=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:t,value:e,onChange:a,checked:e===r}),e]},n)})):[];return Object(d.jsx)(d.Fragment,{children:s})},ne=["x","y","z"];var re=function(){var e=Object(r.useState)(ne[1]),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ee,{options:ne,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(te,{name:"radio",options:ne,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ce=function(){var e=Object(r.useState)(0),t=Object(f.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(new Date),s=Object(f.a)(a,2),i=s[0],o=s[1],j=Object(r.useState)(!1),l=Object(f.a)(j,2),u=l[0],b=l[1],O=function(){clearInterval(n)},h=i.toLocaleTimeString()||Object(d.jsx)("br",{}),x="".concat(null===i||void 0===i?void 0:i.getFullYear(),".").concat(1+(null===i||void 0===i?void 0:i.getMonth()),".").concat(null===i||void 0===i?void 0:i.getDate());return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),u&&Object(d.jsx)("div",{children:x}),Object(d.jsx)(P,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(d.jsx)(P,{onClick:O,children:"stop"})]})};var ae=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(ce,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var se=function(){return Object(d.jsxs)("div",{children:["This is Junior",Object(d.jsx)(re,{}),Object(d.jsx)(ae,{})]})},ie=function(e,t){switch(t.type){case"sort":var n=e.map((function(e){return e}));return"up"===t.payload?n.sort((function(e,t){return e.name.toLowerCase()<=t.name.toLowerCase()?-1:1})):n.sort((function(e,t){return e.name.toLowerCase()>=t.name.toLowerCase()?-1:1}));case"check":return"18"===t.payload?e.map((function(e){return e})).filter((function(e){return e.age>=18})):e;default:return e}},oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var je=function(){var e=Object(r.useState)(oe),t=Object(f.a)(e,2),n=t[0],c=t[1],a=n.map((function(e){return Object(d.jsxs)("div",{children:[e.name,", \u0432\u043e\u0437\u0432\u0440\u0430\u0441\u0442: ",e.age]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",Object(d.jsx)("div",{children:" * "}),a,Object(d.jsx)("div",{children:Object(d.jsx)(P,{onClick:function(){return c(ie(oe,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(d.jsx)("div",{children:Object(d.jsx)(P,{onClick:function(){return c(ie(oe,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(d.jsx)("div",{children:Object(d.jsx)(P,{onClick:function(){return c(ie(oe,{type:"check",payload:"18"}))},children:"check 18"})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var le=function(){return Object(d.jsxs)("div",{children:["This is Junior Plus",Object(d.jsx)(je,{})]})},ue="pre-junior",be="junior",de="plus-junior";var Oe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(X,{})}),Object(d.jsx)(l.a,{path:ue,element:Object(d.jsx)(X,{})}),Object(d.jsx)(l.a,{path:be,element:Object(d.jsx)(se,{})}),Object(d.jsx)(l.a,{path:de,element:Object(d.jsx)(le,{})}),Object(d.jsx)(l.a,{path:"*",element:Object(d.jsx)($,{})})]})})};var he=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("span",{className:z.a.navbar,children:[Object(d.jsx)(j.b,{to:ue,children:" [PRE JUNIOR] "}),Object(d.jsx)(j.b,{to:be,children:" [JUNIOR] "}),Object(d.jsxs)(j.b,{to:de,children:[" [JUNIOR PLUS] ",Object(d.jsx)("input",{type:"checkbox"})]})]})})};var xe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(he,{}),Object(d.jsx)(Oe,{})]})})};var me=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(xe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(me,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.e56052e8.chunk.js.map