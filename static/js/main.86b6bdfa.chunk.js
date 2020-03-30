(this["webpackJsonpcapmo-frontend-challenge"]=this["webpackJsonpcapmo-frontend-challenge"]||[]).push([[0],{58:function(e,t,n){e.exports=n(70)},63:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),u=(n(63),n(18)),o=n(24),l=n(40),d=Object(l.b)({name:"restaurent",initialState:{menu:[{"Bacon & eggs":[{Bacon:[{Meat:[{Pork:[]}]}]},{"Ham Eggs":[{Egg:[]}]}]},{Hamburger:[{Meat:[{Pork:[]}]},{Bread:[{Flour:[]},{Water:[]}]},{Cheese:[{Milk:[]}]}]},{"English breakfast":[{"Fried eggs":[{Egg:[]}]},{Mushrooms:[]},{Sausages:[{Meat:[{Pork:[]}]}]},{Bread:[{Flour:[]},{Water:[]}]}]}]},reducers:{addNewMenu:function(e,t){var n={};n[t.payload]=[],e.menu.push(n)},addNewIngredient:function(e,t){var n=t.payload,a=n.selectedMenu,r={};r[n.newIngredient]=[];var c=a.split(" -> "),i=e.menu;c.forEach((function(e){Object.values(i).forEach((function(t,n){var a=Object.keys(t)[0];a===e&&(i=Object.values(i)[n][a])}))})),i.push(r)}}}),s=d.actions,m=s.addNewMenu,v=s.addNewIngredient,g=function(e){return e.restaurent.menu},f=d.reducer,h=n(71),b=n(108),E=n(111),p=n(110),j=function(e){var t=e.text,n=void 0===t?"provide text":t,a=e.depth,c=void 0===a?1:a,i=e.selection;return r.a.createElement(h.a,{variant:"h"+(c+2)},c>1&&"\u2514",c>1&&i?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.replace(new RegExp(i,"gi"),(function(e){return"<mark>".concat(e,"</mark>")}))}}):n)},O=function e(t){var n=t.menu,c=void 0===n?{}:n,i=t.depth,o=void 0===i?1:i,l=t.selection,d=void 0===l?"":l,s=Object(a.useState)(!1),m=Object(u.a)(s,2),v=m[0],g=m[1];if(1===o&&!function e(t,n,a){if(""===a)return!0;var r=Object.keys(t)[0];return!!(n>1&&r.match(new RegExp(a,"gi")))||Object.values(t)[0].map((function(t){return e(t,n+1,a)})).includes(!0)}(c,o,d))return null;var f=Object.keys(c)[0],h=Object.values(c)[0],b=(v||o>1)&&h.map((function(t,n){return r.a.createElement(e,{key:"sub-item-"+n,menu:t,depth:o+1,selection:d})}));return r.a.createElement("div",{style:{border:"none thin gray",paddingLeft:20*o},onClick:function(){return g(!v)}},r.a.createElement(j,{text:f,depth:o,selection:d}),b)},k=n(104),y=n(107),w=n(109),M=n(112),S=function(){var e=Object(o.c)(g).flatMap((function(e){return function e(t){var n=Object.keys(t)[0],a=[n],r=Object.values(t)[0];r.length>0&&r.flatMap((function(t){return e(t)})).forEach((function(e){a.push(n+" -> "+e)}));return a}(e)})),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)(e[0]),d=Object(u.a)(l,2),s=d[0],f=d[1],b=Object(a.useState)(""),E=Object(u.a)(b,2),j=E[0],O=E[1],S=Object(o.b)();return r.a.createElement("div",{style:{margin:20}},r.a.createElement(h.a,{variant:"h3"},"Adding items or ingredients to the Menu"),r.a.createElement(k.a,{row:!0,style:{padding:20}},r.a.createElement(p.a,{variant:"outlined",value:c,onChange:function(e){return i(e.target.value)},label:"new menu item"}),r.a.createElement(y.a,{variant:"outlined",onClick:function(){S(m(c),i(""))}},"Add new menu item")),r.a.createElement(k.a,{row:!0,style:{padding:20}},r.a.createElement(w.a,{autoWidth:!0,value:s,onChange:function(e){return f(e.target.value)}},e.map((function(e){return r.a.createElement(M.a,{key:e,selected:!0,value:e},e)}))),r.a.createElement(p.a,{variant:"outlined",label:"ingridient",value:j,onChange:function(e){return O(e.target.value)}}),r.a.createElement(y.a,{variant:"outlined",onClick:function(){S(v({newIngredient:j,selectedMenu:s}),O(""))}},"Add ingridient to menu item")))},C=function(){var e=Object(o.c)(g),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)(!1),d=Object(u.a)(l,2),s=d[0],m=d[1];return r.a.createElement("div",null,r.a.createElement(h.a,{variant:"h2"},"Restaurent Menu"),r.a.createElement(b.a,{control:r.a.createElement(E.a,{checked:s,onChange:function(e){return m(!s)}}),label:"Editable Menu"}),r.a.createElement(p.a,{value:c,onChange:function(e){return i(e.target.value)},label:"Search for allergen",variant:"outlined"}),r.a.createElement("div",{style:{margin:15,border:"thin solid navy"}},r.a.createElement("div",{style:{margin:5,padding:10,border:"thin solid navy"}},e.map((function(e,t){return r.a.createElement(O,{key:"menu-item"+t,menu:e,selection:c})})))),s&&r.a.createElement(S,null))};n(69);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))},B=Object(l.a)({reducer:{restaurent:f}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o.a,{store:B},r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.86b6bdfa.chunk.js.map