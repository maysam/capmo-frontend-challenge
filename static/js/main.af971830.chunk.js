(this["webpackJsonpcapmo-frontend-challenge"]=this["webpackJsonpcapmo-frontend-challenge"]||[]).push([[0],{11:function(e,t,n){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},41:function(e,t,n){e.exports=n(53)},46:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),u=n.n(o),c=(n(46),n(17)),i=n(15),l=n(25),s=Object(l.b)({name:"counter",initialState:{value:12,menu:[{"Bacon & eggs":[{Bacon:[{Meat:[{Pork:[]}]}]},{"Ham Eggs":[{Egg:[]}]}]},{Hamburger:[{Meat:[{Pork:[]}]},{Bread:[{Flour:[],Water:[]}]},{Cheese:[{Milk:[]}]}]},{"English breakfast":[{"Fried eggs":[{Egg:[]}]},{Mushrooms:[]},{Sausages:[{Meat:[{Pork:[]}]}]},{Bread:[{Flour:[]},{Water:[]}]}]}]},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),m=s.actions,d=(m.increment,m.decrement,m.incrementByAmount,function(e){return e.counter.menu}),v=s.reducer;n(11);var f=n(79),g=n(83),p=function(e){var t=e.text,n=void 0===t?"provide text":t,r=e.depth,o=void 0===r?1:r,u=e.selection;return a.a.createElement(f.a,{variant:"h"+(o+2)},o>1&&"\u2514",o>1&&u?a.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.replace(new RegExp(u,"gi"),(function(e){return"<mark>".concat(e,"</mark>")}))}}):n)},b=function e(t){var n=t.menu,o=void 0===n?{}:n,u=t.depth,i=void 0===u?1:u,l=t.selection,s=void 0===l?"":l,m=Object(r.useState)(!1),d=Object(c.a)(m,2),v=d[0],f=d[1];if(1===i&&!function e(t,n,r){if(""===r)return!0;var a=Object.keys(t)[0];return!!(n>1&&a.match(new RegExp(r,"gi")))||Object.values(t)[0].map((function(t){return e(t,n+1,r)})).includes(!0)}(o,i,s))return null;var g=Object.keys(o)[0],b=Object.values(o)[0],h=(v||i>1)&&b.map((function(t,n){return a.a.createElement(e,{key:"sub-item-"+n,menu:t,depth:i+1,selection:s})}));return a.a.createElement("div",{style:{border:"none thin gray",paddingLeft:20*i},onClick:function(){return f(!v)}},a.a.createElement(p,{text:g,depth:i,selection:s}),h)},h=function(){var e=Object(i.c)(d),t=Object(r.useState)(""),n=Object(c.a)(t,2),o=n[0],u=n[1];return a.a.createElement("div",null,a.a.createElement(f.a,{variant:"h2"},"Restaurent Menu"),a.a.createElement(g.a,{value:o,onChange:function(e){return u(e.target.value)},label:"Keyword",variant:"outlined"}),e.map((function(e,t){return a.a.createElement(b,{key:"menu-item"+t,menu:e,selection:o})})))};n(52);var _=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,null))},E=Object(l.a)({reducer:{counter:v}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(i.a,{store:E},a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.af971830.chunk.js.map