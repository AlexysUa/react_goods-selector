(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(5),c=a.n(r),l=a(6),o=a(7),i=a(9),d=a(8),m=a(19),u=(a(15),a(16),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:""},e.add=function(t){var a=t.target.parentNode.previousElementSibling.innerText;a+=", ",e.setState((function(e){return{selectedGoods:e.selectedGoods+a}}))},e.remove=function(t){var a=t.target.parentNode.previousElementSibling.innerText,n=e.state.selectedGoods.slice();(n=n.split(", ")).includes(a)&&(n.splice(n.indexOf(a),1),n=n.join(", "),e.setState((function(){return{selectedGoods:n}})))},e.reset=function(){e.setState((function(){return{selectedGoods:""}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("h2",{className:"mainText"},"Selected good:"," ",s.a.createElement("p",{className:"stateTranslation"},this.state.selectedGoods)),s.a.createElement("h3",null,"quantity:",u.length),s.a.createElement(m.a,{onClick:this.reset,className:"btn",variant:"danger"},"Remove all from cart"),s.a.createElement("ul",{className:"mainUl"},u.map((function(t){return s.a.createElement("li",{className:"liOne",key:t},s.a.createElement("span",{className:e.state.selectedGoods.includes(t)?"liText highlighted":"liText"},t),s.a.createElement("span",{className:"buttonsGroup"},s.a.createElement(m.a,{onClick:e.add,className:"btn"},"Add"),s.a.createElement(m.a,{onClick:e.remove,className:"btn"},"Remove")))}))))}}]),a}(s.a.Component);c.a.render(s.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.27946190.chunk.js.map