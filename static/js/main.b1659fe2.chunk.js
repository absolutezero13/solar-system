(this.webpackJsonpplanets=this.webpackJsonpplanets||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(4),c=s.n(i),l=s(2),r=s(0),d=function(e){var t=e.miliSeconds;return Object(r.jsxs)("div",{className:"planets",children:[Object(r.jsx)("div",{style:{animationDuration:"".concat(165*t,"ms")},className:"planets__neptun-orbit",children:Object(r.jsx)("div",{className:"planet neptun"})}),Object(r.jsx)("div",{style:{animationDuration:"".concat(84*t,"ms")},className:"planets__uranus-orbit",children:Object(r.jsx)("div",{className:"planet uranus"})}),Object(r.jsx)("div",{style:{animationDuration:"".concat(29*t,"ms")},className:"planets__saturn-orbit",children:Object(r.jsx)("div",{className:"planet saturn"})}),Object(r.jsx)("div",{style:{animationDuration:"".concat(12*t,"ms")},className:"planets__jupiter-orbit",children:Object(r.jsx)("div",{className:"planet jupiter"})}),Object(r.jsx)("div",{style:{animationDuration:"".concat(2*t,"ms")},className:"planets__mars-orbit",children:Object(r.jsx)("div",{className:"planet mars"})}),Object(r.jsx)("div",{style:{animationDuration:"".concat(t,"ms")},className:"planets__earth-orbit",children:Object(r.jsx)("div",{className:"planet earth"})}),Object(r.jsx)("div",{style:{animationDuration:"".concat(2*t/3,"ms")},className:"planets__venus-orbit",children:Object(r.jsx)("div",{className:"planet venus"})}),Object(r.jsx)("div",{style:{animationDuration:"".concat(t/4,"ms")},className:"planets__mercury-orbit",children:Object(r.jsx)("div",{className:"planet mercury"})}),Object(r.jsx)("div",{className:"planet sun"})]})},j=s.p+"static/media/mercury.9abe977a.svg",m=s.p+"static/media/venus.49bf2264.svg",o=s.p+"static/media/earth.82e95fdd.svg",u=s.p+"static/media/mars.98dd0195.svg",b=s.p+"static/media/jupiter.4f592dd4.svg",p=s.p+"static/media/saturn.ed54a6d3.svg",v=s.p+"static/media/uranus.20a760db.svg",O=s.p+"static/media/neptune.7c8e067e.svg",x=s.p+"static/media/sun.db2717a2.svg",h=function(){var e=[x,j,m,o,u,b,p,v,O];return Object(r.jsx)("div",{className:"planet-info-link",children:Object(r.jsx)("ul",{className:"planet-list",children:["Sun","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"].map((function(t,s){return Object(r.jsxs)("li",{children:[Object(r.jsx)("img",{src:e[s],alt:"planet-logo"})," ",Object(r.jsx)("p",{children:t})]},t)}))})})},N=function(e){e.miliSeconds;var t=e.setmiliSeconds,s=Object(a.useState)(1e4),n=Object(l.a)(s,2),i=n[0],c=n[1],d=Object(a.useRef)(null);return Object(r.jsxs)("div",{className:"time-input",children:[Object(r.jsx)("p",{children:"Set how many miliseconds a year equals to."}),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{ref:d,value:i,onChange:function(e){c(e.target.value),e.target.value?t(e.target.value):t(1e4)},className:"time-input__input",type:"number",min:"1000",step:"100"}),Object(r.jsx)("label",{htmlFor:"input",children:"ms"}),Object(r.jsx)("p",{className:"note",children:"Note: It's 10000 (10 seconds) by default. It's not recommended to go below 100 miliseconds."})]})]})},g=function(e){var t=e.miliSeconds,s=e.setmiliSeconds;return Object(r.jsxs)("div",{className:"side-bar",children:[Object(r.jsx)(N,{miliSeconds:t,setmiliSeconds:s}),Object(r.jsx)(h,{})]})},f=function(){var e=Object(a.useState)(1e4),t=Object(l.a)(e,2),s=t[0],n=t[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(g,{miliSeconds:s,setmiliSeconds:n}),Object(r.jsx)(d,{miliSeconds:s})]})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,12)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};s(10);c.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),_()}},[[11,1,2]]]);
//# sourceMappingURL=main.b1659fe2.chunk.js.map