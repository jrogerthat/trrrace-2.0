!function(e){function n(n){for(var r,o,c=n[0],l=n[1],p=n[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(n);d.length;)d.shift()();return a.push.apply(a,p||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==i[l]&&(r=!1)}r&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},i={0:0},a=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var p=0;p<c.length;p++)n(c[p]);var s=l;a.push([139,1]),t()}({10:function(e,n,t){},139:function(e,n,t){"use strict";t.r(n);t(10);var r=t(2);const i=t(77);function a(e,n,t){n.append("h2").text(t),r.a(e).then(e=>{e.forEach(e=>{let t=new i(e).format("bibliography",{format:"html",template:"apa",lang:"en-US"});n.append("div").classed("citation",!0).html(t)})})}function o(){r.b("#main").selectAll("*").remove();let e=r.b("#main").append("div").classed("citation-wrap",!0),n=r.b("#main").append("div").classed("citation-wrap",!0),t=r.b("#main").append("div").classed("citation-wrap",!0);a("public/data/domain-citations.json",e,"Domain References"),a("public/data/process-citations.json",n,"Process References"),a("public/data/related-citations.json",t,"Related Work")}function c(){r.b("#main").selectAll("*").remove(),function(){let e=l(r.b("#main"),"Functionlity","section"),n=l(e,"Pair-Wise Trait Comparison","sub-section"),t=document.createElement("img");n.node().appendChild(t),t.src="public/assets/pair-diagram.jpg"}()}function l(e,n,t){let r=e.append("div").classed(t,!0);return"section"===t?r.append("h1").text(n):r.append("h2").text(n),r}function p(){r.b("#main").selectAll("*").remove(),r.b("#main").append("h3").text("Timeline of Design Study"),r.b("#main").append("svg").classed("timeline",!0)}function s(e,n,t){e.append("button").text(n).classed("btn btn--stripe",!0).on("click",()=>t())}!function(){let e=r.b("#header").append("div").classed("button-wrap",!0);r.b("#header").select("h1").on("click",()=>c()),s(e,"Timeline",p),s(e,"References",o)}(),c()}});
//# sourceMappingURL=app.caaf22a8.js.map