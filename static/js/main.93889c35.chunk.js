(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{35:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var c,a,r=t(1),i=t.n(r),o=t(22),s=t.n(o),l=(t(35),t(29)),j=t(5),u=t.n(j),h=t(10),b=t(8),d=t(3),p=t(4),O=t(0),f=p.a.td(c||(c=Object(d.a)(["\nborder: 1px solid;\n    width: 25vh;\n"])));function x(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)(f,{children:e.name}),Object(O.jsx)(f,{children:e.ticker}),Object(O.jsxs)(f,{children:["$",e.price]}),e.showBalance?Object(O.jsx)(f,{children:e.balance}):null,Object(O.jsx)(f,{children:Object(O.jsx)("form",{action:"#",method:"POST",children:Object(O.jsx)("button",{onClick:function(n){n.preventDefault(),e.handleRefresh(e.tickerId)},children:"Refresh"})})})]})}var m,g=p.a.table(a||(a=Object(d.a)(["\nmargin: 50px auto 50px auto;\n  display: inline-block;\n  font-size: 1.4rem;\n"])));function v(e){return Object(O.jsxs)(g,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Ticker"}),Object(O.jsx)("th",{children:"Price"}),e.showBalance?Object(O.jsx)("th",{children:"Balance"}):null,Object(O.jsx)("th",{children:"Actions"})]})}),Object(O.jsx)("tbody",{children:e.coinData.map((function(n){var t=n.key,c=n.name,a=n.ticker,r=n.balance,i=n.price;return Object(O.jsx)(x,{tickerId:t,handleRefresh:e.handleRefresh,name:c,ticker:a,showBalance:e.showBalance,balance:r,price:i},t)}))})]})}var k=p.a.section(m||(m=Object(d.a)(["\n    font-size: 2rem;\n    text-align: left;\n    padding: 1.5rem  0 1.5rem 5rem;\n\n"])));function w(e){var n=e.showBalance?"Hide Balance":"Show Balance",t=null;return e.showBalance&&(t=Object(O.jsxs)(O.Fragment,{children:["Balance: $",e.amount," "]})),Object(O.jsxs)(k,{children:[t,Object(O.jsx)("button",{onClick:e.handleBalanceToggle,children:n})]})}var B,y,S,C,F=t(26),D=t(27),R=t(30),T=t(28),P=t.p+"static/media/logo.6ce24c58.svg",z=p.a.header(B||(B=Object(d.a)(["\nbackground-color: #282c34;\n  min-height: 20rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 36px;\n"]))),I=p.a.img(y||(y=Object(d.a)(["\nheight: 8rem;\npointer-events: none;\n"]))),E=p.a.h1(S||(S=Object(d.a)(["\nfont-size: 4rem;\n"]))),q=function(e){Object(R.a)(t,e);var n=Object(T.a)(t);function t(){return Object(F.a)(this,t),n.apply(this,arguments)}return Object(D.a)(t,[{key:"render",value:function(){return Object(O.jsxs)(z,{children:[Object(O.jsx)(I,{src:P,alt:"React logo"}),Object(O.jsx)(E,{children:"Coin Exchange"})]})}}]),t}(r.Component),J=t(7),L=t.n(J),N=p.a.div(C||(C=Object(d.a)(["\ntext-align: center;\n  background-color: rgb(82, 79, 79);\n  color: rgb(180, 178, 19);\n"]))),U=function(e){return parseFloat(Number(e).toFixed(4))};var $=function(e){var n=Object(r.useState)(1e4),t=Object(b.a)(n,2),c=t[0],a=(t[1],Object(r.useState)(!0)),i=Object(b.a)(a,2),o=i[0],s=i[1],j=Object(r.useState)([]),d=Object(b.a)(j,2),p=d[0],f=d[1],x=function(){var e=Object(h.a)(u.a.mark((function e(){var n,t,c,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://api.coinpaprika.com/v1/coins");case 2:return n=e.sent,t=n.data.slice(0,10).map((function(e){return e.id})),"https://api.coinpaprika.com/v1/tickers/",c=t.map((function(e){return L.a.get("https://api.coinpaprika.com/v1/tickers/"+e)})),e.next=8,Promise.all(c);case 8:a=e.sent,r=a.map((function(e){var n=e.data;return{key:n.id,name:n.name,ticker:n.symbol,balance:0,price:U(n.quotes.USD.price)}})),f(r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){0===p.length&&x()}));var m=function(){var e=Object(h.a)(u.a.mark((function e(n){var t,c,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/".concat(n),e.next=3,L.a.get(t);case 3:c=e.sent,a=U(c.data.quotes.USD.price),r=p.map((function(e){var t=Object(l.a)({},e);return n===e.key&&(t.price=a),t})),f(r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(O.jsxs)(N,{children:[Object(O.jsx)(q,{}),Object(O.jsx)(w,{amount:c,showBalance:o,handleBalanceToggle:function(){s((function(e){return!e}))}}),Object(O.jsx)(v,{coinData:p,handleRefresh:m,showBalance:o})]})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)($,{})}),document.getElementById("root")),A()}},[[56,1,2]]]);
//# sourceMappingURL=main.93889c35.chunk.js.map