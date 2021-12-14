(this["webpackJsonpcountdown-draw"]=this["webpackJsonpcountdown-draw"]||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(19),s=n.n(i),a=n(9),o=n(60),u=n(34),l=n(28),j=n(73),d=n(8),b=n(51),x=n(39),h=n(70),O=n(4);function m(e){var t=e.children,n=e.styles;return Object(O.jsx)(d.f,{h:"480px",style:n,spacing:0,borderRadius:16,border:"1px solid #E2E8F0",boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",p:["32px 16px","48px 48px","48px 48px"],children:Object(O.jsx)(d.c,{direction:"column",align:"center",children:t})})}function p(){var e=Object(a.c)((function(e){return e.counter})),t=e.hours,n=e.minutes,r=e.seconds,i=Object(a.c)((function(e){return e.counterStatus})).status,s=Object(c.useMemo)((function(){return"initial"===i}),[i]),o=Number(n)>-1?t:"00",u=Number(n)>-1?n:"00",l=Number(n)>-1?r:"00";return Object(O.jsxs)(d.g,{fontSize:["5xl","6xl","6xl"],mt:s?"64px":["48px","48px","48px"],children:[o,":",u,":",l]})}var f="RESET",g="START",v="PAUSE",y="END",w={status:"initial"},C=function(e){var t=e.hours,n=e.minutes;return 60*Number(t)+Number(n)},E=function(e){var t=e.hours,n=e.minutes,c=e.seconds;return 60*Number(t)*60+60*Number(n)+Number(c)},S=function(e){return{hours:Math.floor(e/36e5).toLocaleString(void 0,{minimumIntegerDigits:2}).replace(/,/g,""),minutes:Math.floor(e/6e4%60).toLocaleString(void 0,{minimumIntegerDigits:2}),seconds:Math.floor(e/1e3%60).toLocaleString(void 0,{minimumIntegerDigits:2})}},M=n(12),L="CHANGE_MODE",N="CHANGE_TIME",A="COUNTDOWN",k={hours:"00",minutes:"00",seconds:"00",mode:"min"},T="SET_TARGET_TIME",D={targetTime:0};function I(){var e=Object(a.c)((function(e){return e.counter})),t=e.mode,n=e.hours,r=e.minutes,i=e.seconds,s=Object(a.c)((function(e){return e.nameList})).nameList,o=Object(a.c)((function(e){return e.counterStatus})).status,u=Object(a.c)((function(e){return e.targetTime})).targetTime,f=E({hours:n,minutes:r,seconds:i}),w=Object(c.useMemo)((function(){return Number(f)<1}),[f]),S=Object(c.useMemo)((function(){return!s.length}),[s]),M=Object(a.b)(),k=Object(c.useRef)(),D="min"===t?0:1;return Object(c.useEffect)((function(){return"started"===o&&(k.current=setInterval((function(){f<=1?(M({type:A}),clearInterval(k.current),M({type:y})):M({type:A})}),1e3)),function(){clearInterval(k.current)}}),[M,o,f]),Object(O.jsxs)(m,{children:[Object(O.jsx)(d.g,{mb:4,fontSize:["2xl","2xl","3xl"],fontWeight:"bold",children:"\u5012\u6578\u6642\u9593"}),"initial"===o?Object(O.jsxs)(d.a,{children:[Object(O.jsx)(d.b,{children:Object(O.jsx)(j.c,{variant:"soft-rounded",colorScheme:"red",mb:"12px",index:D,onChange:function(e){M(0===e?{type:L,payload:"min"}:{type:L,payload:"sec"})},children:Object(O.jsxs)(j.b,{children:[Object(O.jsx)(j.a,{children:"\u5206\u9418"}),Object(O.jsx)(j.a,{children:"\u79d2"})]})})}),Object(O.jsxs)(d.c,{children:[Object(O.jsxs)(l.c,{mr:["12px","12px","16px"],value:"min"===t?C({hours:n,minutes:r}):E({hours:n,minutes:r,seconds:i}),children:[Object(O.jsx)(l.d,{onChange:function(e){var t;isNaN(Number(e.target.value))||(t=Number(e.target.value),M({type:N,payload:{value:t}}))}}),Object(O.jsxs)(l.e,{children:[Object(O.jsx)(l.b,{onClick:function(){M({type:N,payload:{operation:"increment"}})}}),Object(O.jsx)(l.a,{onClick:function(){M({type:N,payload:{operation:"decrement"}})}})]}),Object(O.jsx)(b.b,{mr:8,children:"min"===t?"\u5206\u9418":"\u79d2"})]}),Object(O.jsx)(x.a,{disabled:w||S,onClick:function(){M({type:g}),M({type:T,payload:f})},children:"\u958b\u59cb"})]})]}):Object(O.jsxs)(d.c,{direction:"column",w:"100%",justifyContent:"center",alignItems:"center",children:[Object(O.jsx)(d.b,{w:"301px",minW:"40px",maxW:"100%",children:Object(O.jsx)(h.a,{value:f/u*100,color:"teal",thickness:"12px"})}),Object(O.jsxs)(d.b,{h:["92px"],children:[Object(O.jsx)(x.a,{mr:5,w:"84px",onClick:function(){"paused"===o&&M({type:g}),"started"===o&&M({type:v})},colorScheme:"paused"===o?"green":"orange",children:"paused"===o?"\u7e7c\u7e8c":"\u66ab\u505c"}),Object(O.jsx)(x.a,{w:"84px",onClick:function(){M({type:y})},colorScheme:"red",children:"\u7d50\u675f"})]})]}),Object(O.jsx)(p,{})]})}var _=n(54);function R(){return Object(O.jsx)("svg",{width:"7",height:"9",viewBox:"0 0 7 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"M7 9H0V8.14286C0 7.57454 0.230468 7.02949 0.640704 6.62763C1.05094 6.22576 1.60734 6 2.1875 6H4.8125C5.39266 6 5.94906 6.22576 6.3593 6.62763C6.76953 7.02949 7 7.57454 7 8.14286V9ZM3.5 5.14286C3.15528 5.14286 2.81394 5.07635 2.49546 4.94712C2.17698 4.81789 1.8876 4.62848 1.64384 4.3897C1.40009 4.15092 1.20673 3.86745 1.07482 3.55547C0.942898 3.24349 0.875 2.90911 0.875 2.57143C0.875 2.23374 0.942898 1.89937 1.07482 1.58739C1.20673 1.27541 1.40009 0.991933 1.64384 0.753154C1.8876 0.514375 2.17698 0.324965 2.49546 0.195738C2.81394 0.0665119 3.15528 -5.0319e-09 3.5 0C4.19619 1.01624e-08 4.86387 0.270918 5.35616 0.753154C5.84844 1.23539 6.125 1.88944 6.125 2.57143C6.125 3.25341 5.84844 3.90747 5.35616 4.3897C4.86387 4.87194 4.19619 5.14286 3.5 5.14286Z",fill:"#2D3748"})})}var H=n(26),V=n(47),W=n(76),B="GENERATE_NAMES",F="ADD_NAME",Z="REMOVE_NAME",z="REMOVE_ALL",G=new W.Chance(Math.random),J={nameList:[]},U=n(59),P=n(2);function X(){return Object(O.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H7V11H17V13Z",fill:"#FF0000",fillOpacity:"0.8"})})}function Y(e){var t=e.name,n=e.id,r=Object(c.useState)(!1),i=Object(U.a)(r,2),s=i[0],o=i[1],u=Object(a.c)((function(e){return e.counterStatus})).status,l=Object(a.b)();return Object(O.jsx)(H.d,{h:"48px",onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)},children:Object(O.jsx)(H.c,{borderBottom:"none",children:Object(O.jsxs)(d.d,{justifyContent:"space-between",children:[Object(O.jsx)("div",{children:t}),Object(O.jsx)(P.d.button,{visibility:["visible","visible",s?"visible":"hidden"],display:"initial"!==u?"none":"initial",onClick:function(){l({type:"REMOVE_NAME",payload:{id:n}})},children:Object(O.jsx)(X,{})})]})})})}var q=n(72);function K(){var e=Object(a.c)((function(e){return e.nameList})).nameList,t=Object(a.c)((function(e){return e.counterStatus})).status,n=Object(a.b)(),c=Object(q.a)();return Object(O.jsxs)(m,{children:[Object(O.jsxs)(d.c,{justifyContent:"space-between",w:"100%",children:[Object(O.jsx)(d.b,{w:"64px",justifyContent:"left",children:Object(O.jsxs)(_.a,{maxH:"20px",children:[Object(O.jsx)(R,{}),Object(O.jsx)(d.g,{ml:1,children:e.length})]})}),Object(O.jsx)(d.g,{fontSize:["2xl","2xl","3xl"],fontWeight:"bold",whiteSpace:"nowrap",children:"\u62bd\u734e\u540d\u55ae"}),Object(O.jsx)(d.b,{children:Object(O.jsx)(x.a,{disabled:"initial"!==t,colorScheme:"blue",maxH:"24px",w:"74px",onClick:function(){n({type:B})},children:"\u96a8\u6a5f\u5e36\u5165"})})]}),Object(O.jsx)("form",{style:{width:"100%"},onSubmit:function(e){e.target[0].value.replace(/\s/g,"").length>0?(e.preventDefault(),n({type:F,payload:{name:e.target[0].value}}),e.target[0].value=""):(e.preventDefault(),c({title:"\u8acb\u8f38\u5165\u6709\u6548\u540d\u7a31",status:"warning",isClosable:!0}),e.target[0].value="")},children:Object(O.jsxs)(d.e,{columns:[1,2,2],mt:"32px",spacing:1,children:[Object(O.jsx)(d.b,{children:Object(O.jsx)(b.a,{placeholder:"\u8acb\u8f38\u5165\u62bd\u734e\u8005\u540d\u7a31",w:"100%",disabled:"initial"!==t})}),Object(O.jsx)(d.c,{w:"100%",justifyContent:"right",alignItems:"center",children:Object(O.jsxs)(d.e,{columns:[1,2,2],spacingY:3,spacingX:2,w:"100%",mt:["8px",0,0],ml:[0,"4px","4px"],children:[Object(O.jsx)(x.a,{colorScheme:"green",type:"submit",disabled:"initial"!==t,w:["100%","100%","100%"],children:"\u65b0\u589e"}),Object(O.jsx)(x.a,{colorScheme:"red",onClick:function(){n({type:z})},disabled:"initial"!==t,w:["100%","100%","100%"],children:"\u6e05\u7a7a"})]})})]})}),Object(O.jsx)(d.c,{w:"100%",maxH:["185px","250px","250px"],overflow:"scroll",mt:"16px",border:e.length>0?"1px solid #E2E8F0":"none",borderRadius:"12px",visibility:e.length>0?"visible":"hidden",children:Object(O.jsx)(H.a,{variant:"striped",colorScheme:"teal",children:Object(O.jsx)(H.b,{children:e.map((function(e,t){return Object(O.jsx)(Y,{name:e.name,id:e.id},t)}))})})})]})}var Q=n(71);function $(){return Object(O.jsxs)("svg",{width:"49",height:"48",viewBox:"0 0 49 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("rect",{x:"0.5",width:"48",height:"48",rx:"24",fill:"#C6F6D5"}),Object(O.jsx)("path",{d:"M22.5007 27.1715L31.6927 17.9785L33.1077 19.3925L22.5007 29.9995L16.1367 23.6355L17.5507 22.2215L22.5007 27.1715Z",fill:"#25855A"})]})}function ee(){var e=Object(c.useState)(""),t=Object(U.a)(e,2),n=t[0],r=t[1],i=Object(a.c)((function(e){return e.counterStatus})).status,s=Object(a.c)((function(e){return e.nameList})).nameList,o=Object(a.b)(),u=function(){o({type:f})};return Object(c.useEffect)((function(){if("ended"===i){var e=Math.floor(Math.random()*s.length);r(s[e].name)}}),[s,i]),Object(O.jsxs)(Q.a,{isOpen:"ended"===i,onClose:u,isCentered:!0,blockScrollOnMount:!0,closeOnOverlayClick:!0,closeOnEsc:!0,children:[Object(O.jsx)(Q.e,{}),Object(O.jsxs)(Q.c,{m:"0px 20px",children:[Object(O.jsxs)(Q.d,{children:[Object(O.jsx)(d.b,{mb:"20px",children:Object(O.jsx)($,{})}),Object(O.jsx)(d.b,{children:"\u62bd\u734e\u7d50\u679c"})]}),Object(O.jsx)(Q.b,{children:Object(O.jsxs)(d.b,{textAlign:"center",children:["\u606d\u559c\uff01\u5f97\u734e\u8005\u70ba\u300c",n,"\u300d"]})}),Object(O.jsx)(x.a,{m:"8px",colorScheme:"teal",onClick:u,children:"\u7e7c\u7e8c"})]})]})}var te=function(){return Object(O.jsxs)(u.a,{children:[Object(O.jsx)(d.b,{children:Object(O.jsxs)(d.c,{direction:"column",justify:"center",align:"center",pt:["24px","24px","50px"],children:[Object(O.jsx)(d.g,{fontSize:["2xl","2xl","3xl"],fontWeight:"bold",children:"\u62bd\u734e\u5c0f\u5de5\u5177"}),Object(O.jsxs)(d.e,{columns:[1,1,2],spacing:10,p:5,children:[Object(O.jsx)(I,{}),Object(O.jsx)(K,{})]})]})}),Object(O.jsx)(ee,{})]})},ne=Object(o.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var n=1e3*(E({hours:e.hours,minutes:e.minutes,seconds:e.seconds})-1);return Object(M.a)(Object(M.a)({},e),S(n));case L:if("sec"===t.payload){var c=1e3*E({hours:e.hours,minutes:e.minutes,seconds:e.seconds});return Object(M.a)(Object(M.a)({},e),{},{mode:t.payload},S(c))}var r=1e3*Math.floor(E({hours:e.hours,minutes:e.minutes,seconds:e.seconds})/60)*60;return Object(M.a)(Object(M.a)({},e),{},{mode:t.payload},S(r));case N:if("min"===e.mode){if("increment"===t.payload.operation){var i=60*(C({hours:e.hours,minutes:e.minutes})+1)*1e3;return Object(M.a)(Object(M.a)({},e),S(i))}if("decrement"===t.payload.operation){var s=C({hours:e.hours,minutes:e.minutes}),a=60*(s-1)*1e3;return 0===s?e:Object(M.a)(Object(M.a)({},e),S(a))}return Object(M.a)(Object(M.a)({},e),S(60*t.payload.value*1e3))}if("increment"===t.payload.operation){var o=1e3*(E({hours:e.hours,minutes:e.minutes,seconds:e.seconds})+1);return Object(M.a)(Object(M.a)({},e),S(o))}if("decrement"===t.payload.operation){var u=E({hours:e.hours,minutes:e.minutes,seconds:e.seconds}),l=1e3*(u-1);return 0===u?e:Object(M.a)(Object(M.a)({},e),S(l))}return Object(M.a)(Object(M.a)({},e),S(1e3*t.payload.value));default:return e}},nameList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:var n=Array.from(Array(10).keys()).map((function(){return{name:G.name(),id:G.android_id()}}));return{nameList:[].concat(Object(V.a)(e.nameList),Object(V.a)(n))};case F:return{nameList:[].concat(Object(V.a)(e.nameList),[{name:t.payload.name,id:G.android_id()}])};case Z:return{nameList:Object(V.a)(e.nameList.filter((function(e){return e.id!==t.payload.id})))};case z:return{nameList:[]};default:return e}},counterStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{status:"initial"};case v:return{status:"paused"};case y:return{status:"ended"};case g:return{status:"started"};default:return e}},targetTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;return t.type===T?{targetTime:t.payload}:e}}),ce=ne,re=Object(o.b)(ce),ie=document.getElementById("root");s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(a.a,{store:re,children:Object(O.jsx)(te,{})})}),ie)}},[[119,1,2]]]);
//# sourceMappingURL=main.0b16c4c4.chunk.js.map