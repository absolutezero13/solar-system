(this.webpackJsonpplanets=this.webpackJsonpplanets||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),c=t(6),r=t.n(c),i=t(4),l=Object(s.createContext)({}),d=t(1),u=function(){var e=Object(s.useContext)(l).miliSeconds;return Object(d.jsxs)("div",{className:"planets",children:[Object(d.jsx)("div",{style:{animationDuration:"".concat(165*e,"ms")},className:"planets__neptun-orbit",children:Object(d.jsx)("div",{className:"planet neptun"})}),Object(d.jsx)("div",{style:{animationDuration:"".concat(84*e,"ms")},className:"planets__uranus-orbit",children:Object(d.jsx)("div",{className:"planet uranus"})}),Object(d.jsx)("div",{style:{animationDuration:"".concat(29*e,"ms")},className:"planets__saturn-orbit",children:Object(d.jsx)("div",{className:"planet saturn"})}),Object(d.jsx)("div",{style:{animationDuration:"".concat(12*e,"ms")},className:"planets__jupiter-orbit",children:Object(d.jsx)("div",{className:"planet jupiter"})}),Object(d.jsx)("div",{style:{animationDuration:"".concat(2*e,"ms")},className:"planets__mars-orbit",children:Object(d.jsx)("div",{className:"planet mars"})}),Object(d.jsx)("div",{style:{animationDuration:"".concat(e,"ms")},className:"planets__earth-orbit",children:Object(d.jsx)("div",{className:"planet earth"})}),Object(d.jsx)("div",{style:{animationDuration:"".concat(2*e/3,"ms")},className:"planets__venus-orbit",children:Object(d.jsx)("div",{className:"planet venus"})}),Object(d.jsx)("div",{style:{animationDuration:"".concat(e/4,"ms")},className:"planets__mercury-orbit",children:Object(d.jsx)("div",{className:"planet mercury"})}),Object(d.jsx)("div",{className:"planet sun"})]})},m=function(e){var a=e.planetName,t=e.svg,s=e.distanceFromSun,n=e.radius,c=e.averageTemperature;return Object(d.jsxs)("div",{className:"planet-info-card",children:[Object(d.jsxs)("div",{className:"planet-info-card__header",children:[Object(d.jsx)("img",{className:"planet-info-card__header__image",src:t,alt:a+"logo"}),Object(d.jsx)("h3",{children:a})]}),Object(d.jsxs)("div",{className:"planet-info-card__info",children:[s&&Object(d.jsxs)("div",{className:"planet-info-card__info__distance",children:[Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Distance From Sun"})}),Object(d.jsx)("p",{children:s})]}),Object(d.jsxs)("div",{className:"planet-info-card__info__temperature",children:[Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Avg. Temperature"})}),Object(d.jsx)("p",{children:c})]}),Object(d.jsxs)("div",{className:"planet-info-card__info__radius",children:[Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Radius"})}),Object(d.jsx)("p",{children:n})]})]})]})},o=t(16),j=function(e){var a=e.planetName,t=e.svg,n=e.distanceFromSun,c=e.radius,r=e.averageTemperature,l=Object(s.useState)(!1),u=Object(i.a)(l,2),j=u[0],p=u[1];return Object(d.jsxs)("div",{onClick:function(){p(!j)},className:"planet-list__infos",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)(o.a.img,{drag:!0,dragConstraints:{left:0,right:0,top:0,bottom:0},dragElastic:.8,src:t,alt:"planet-logo"}),Object(d.jsx)("p",{children:a})]}),j&&Object(d.jsx)(m,{planetName:a,svg:t,distanceFromSun:n,averageTemperature:r,radius:c})]})},p=function(){var e=Object(s.useContext)(l).planetInfos;return Object(d.jsx)("div",{className:"planet-info-link",children:Object(d.jsx)("ul",{className:"planet-list",children:e.map((function(e){var a=e.planetName,t=e.svg,s=e.distanceFromSun,n=e.averageTemperature,c=e.radius;return Object(d.jsx)(j,{planetName:a,svg:t,distanceFromSun:s,averageTemperature:n,radius:c},a)}))})})},b=function(){var e=Object(s.useContext)(l).setmiliSeconds,a=Object(s.useState)(1e4),t=Object(i.a)(a,2),n=t[0],c=t[1],r=Object(s.useRef)(null);return Object(d.jsxs)("div",{className:"time-input",children:[Object(d.jsx)("p",{children:"Set how many miliseconds a year equals to."}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{ref:r,value:n,onChange:function(a){var t=a.target.value;c(t),a.target.value?e(t):e(1e4)},className:"time-input__input",type:"number",min:"1000",step:"100"}),Object(d.jsx)("label",{htmlFor:"input",children:"ms"}),Object(d.jsx)("p",{className:"note",children:"Note: It's 10000 (10 seconds) by default. It's not recommended to go below 100 miliseconds."})]})]})},v=function(){return Object(d.jsxs)("div",{className:"side-bar",children:[Object(d.jsx)(b,{}),Object(d.jsx)(p,{})]})},O=t.p+"static/media/mercury.9abe977a.svg",x=t.p+"static/media/venus.49bf2264.svg",g=t.p+"static/media/earth.82e95fdd.svg",N=t.p+"static/media/mars.98dd0195.svg",h=t.p+"static/media/jupiter.4f592dd4.svg",f=t.p+"static/media/saturn.ed54a6d3.svg",_=t.p+"static/media/uranus.20a760db.svg",M=t.p+"static/media/neptune.7c8e067e.svg",S=[{planetName:"Sun",radius:"696340 KM",averageTemperature:"5505\xb0C",svg:t.p+"static/media/sun.db2717a2.svg"},{planetName:"Mercury",radius:"2439 KM",distanceFromSun:"57,9 MILLION KM",numberOfMoons:"0",averageTemperature:"430\xb0C",svg:O},{planetName:"Venus",radius:"6051 KM",distanceFromSun:"108,2 MILLION KM",numberOfMoons:"0",averageTemperature:"471\xb0C",svg:x},{planetName:"Earth",radius:"6378 KM",distanceFromSun:"149,6 MILLION KM",numberOfMoons:"1",averageTemperature:"16\xb0C",svg:g},{planetName:"Mars",radius:"3396 KM",distanceFromSun:"227,9 MILLION KM",numberOfMoons:"2",averageTemperature:"-28\xb0C",svg:N},{planetName:"Jupiter",radius:"71492 KM",distanceFromSun:"778,5 MILLION KM",numberOfMoons:"67",averageTemperature:"-108\xb0C",svg:h},{planetName:"Saturn",radius:"60268 KM",distanceFromSun:"1,42 BILLION KM",numberOfMoons:"62",averageTemperature:"-138\xb0C",svg:f},{planetName:"Uranus",radius:"25559 KM",distanceFromSun:"2,87 BILLION KM",numberOfMoons:"27",averageTemperature:"-195\xb0C",svg:_},{planetName:"Neptune",radius:"24764",distanceFromSun:"3,67 BILLION KM",numberOfMoons:"13",averageTemperature:"-201\xb0C",svg:M}],I=function(){var e=Object(s.useState)(1e4),a=Object(i.a)(e,2),t=a[0],n=a[1];return Object(d.jsx)(l.Provider,{value:{miliSeconds:t,setmiliSeconds:n,planetInfos:S},children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(v,{}),Object(d.jsx)(u,{})]})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),s(e),n(e),c(e),r(e)}))};t(12);r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),C()}},[[13,1,2]]]);
//# sourceMappingURL=main.27e56377.chunk.js.map