(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),c=n.n(o),u=n(4),i=n(5),l=n(7),m=n(6),s=n(8),f=(n(14),function(e){function t(e){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this,e))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"transfer",value:function(){var e=document.getElementById("name").value;console.log(e),fetch("/transfer",{method:"POST",body:e}).then(function(e){return e.text()}).then(function(e){console.log(e),alert(e)})}},{key:"render",value:function(){return r.a.createElement("form",null,"Name:",r.a.createElement("input",{id:"name",type:"text",name:"name"}),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.transfer.bind(this)}))}}]),t}(r.a.Component));c.a.render(r.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.56c20a48.chunk.js.map