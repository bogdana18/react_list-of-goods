(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,s){},14:function(t,e,s){"use strict";s.r(e);var r,n=s(3),a=s.n(n),i=s(4),c=s(5),o=s(7),l=s(6),u=s(1),b=s.n(u),p=(s(12),s(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(r||(r={}));var d=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={isStarted:!1,sortType:r.NONE,isReversed:!1},t.start=function(){t.setState((function(t){return{isStarted:!t.isStarted}}))},t.sortByAlphabet=function(){t.setState({sortType:r.ALPABET})},t.sortByLength=function(){t.setState({sortType:r.LENGTH})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({sortType:r.NONE,isReversed:!1})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this,e=this.state,s=e.isStarted,n=e.isReversed,a=e.sortType,i=[].concat(h);return i.sort((function(t,e){switch(a){case r.ALPABET:return t.localeCompare(e);case r.LENGTH:return t.length-e.length;default:return 0}})),n&&i.reverse(),Object(p.jsxs)("div",{className:"App",children:[!s&&Object(p.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){t.setState({isStarted:!0})},children:"Start"}),s&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{type:"button",className:"button is-primary",onClick:this.sortByAlphabet,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:"button is-primary",onClick:this.sortByLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:"button is-primary",onClick:this.reverse,children:"Reverse"}),Object(p.jsx)("button",{type:"button",className:"button is-primary",onClick:this.reset,children:"Reset"}),Object(p.jsx)("ul",{className:"list",children:i.map((function(t){return Object(p.jsx)("li",{className:"list__item",children:Object(p.jsx)("span",{children:t})},t)}))})]})]})}}]),s}(b.a.Component);a.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.349ba382.chunk.js.map