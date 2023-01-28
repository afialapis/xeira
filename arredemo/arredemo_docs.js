!function(e,n,o){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),r=t(n),l=t(o),i=a.default.createContext(),d=function(){return e.useContext(i)},c=function(){var e=d().pkgJson.repository;return e&&"git"==e.type&&e.url.indexOf("github")>=0?a.default.createElement("a",{className:"link github",href:e.url,target:"_blank",rel:"noreferrer"},a.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="}),a.default.createElement("span",null,"Github")):null},s=function(e){var n=e.path,o=e.responsiveOpen,t=e.onResponsiveToggle,r=d().arreConfig,l=null!=r.demo_entry,i="url(../"+r.logo+")";return a.default.createElement("div",{className:"grid",style:{backgroundImage:i}},a.default.createElement("div",null),a.default.createElement("div",{className:"toolbar"},l?a.default.createElement(a.default.Fragment,null,a.default.createElement("a",{className:"link demo "+("demo"==n?"dark":"light"),href:"demo.html"},"Demo"),a.default.createElement("a",{className:"link docs "+("docs"==n?"dark":"light"),href:"docs.html"},"Docs")):null,a.default.createElement(c,null)),a.default.createElement("div",{className:"toggler",onClick:function(){return t(!o)}},a.default.createElement("div",{className:"toggle "+(o?"open":"")},a.default.createElement("span",null))))},g=function(e){var n=e.menu,o=e.onMenuClick,t=e.activeOption;return a.default.createElement("div",{className:"menu"},a.default.createElement("ul",null,n.map((function(e,n){return a.default.createElement("li",{key:"menu_"+n,className:(t==n?"selected":"")+" level-"+e.level,"data-level":e.level,id:"menu-"+e.id,onClick:function(){return o(n)}},a.default.createElement("span",{className:"link"},e.title))}))))},m=function(){var e=d().pkgJson.name;return a.default.createElement("div",{className:"badges"},a.default.createElement("span",{className:"badge"},a.default.createElement("a",{href:"https://www.npmjs.com/package/"+e},a.default.createElement("img",{alt:"NPM Version",src:"https://badge.fury.io/js/"+e+".svg"}))),a.default.createElement("span",{className:"badge"},a.default.createElement("a",{href:"https://www.npmjs.com/package/"+e},a.default.createElement("img",{alt:"NPM Downloads",src:"https://img.shields.io/npm/dm/"+e+".svg?style=flat"}))))},u=function(e){var n=e.company,o=e.url;return a.default.createElement("a",{href:o,target:"_blank noopener noreferrer"},n)},p=function(e){var n=e.name;return a.default.createElement("a",{href:"https://opensource.org/licenses/"+n,target:"_blank noopener noreferrer"},n)},b=function(){var e=d(),n=e.arreConfig.company,o=e.arreConfig.url,t=e.pkgJson.license,r=e.pkgJson.name;return a.default.createElement("footer",null,a.default.createElement(m,null),a.default.createElement("div",{className:"license"},a.default.createElement("span",{className:"package-name"},r)," is sharpened by ",a.default.createElement(u,{company:n,url:o})," under ",a.default.createElement(p,{name:t})," license. This site was built using ",a.default.createElement("a",{href:"https://arredemo.afialapis.com",target:"_blank noopener noreferrer"},a.default.createElement("span",{className:"package-name"},"arredemo")),"."))},h=function(){var e=d();return a.default.createElement("div",{className:"switcher select"},a.default.createElement("select",{onChange:function(n){return e.onSwitchVersion(n.target.value)},value:e.selectedVersion},e.versions.map((function(e){return a.default.createElement("option",{key:e,value:e},"Version: "+e)}))))},f=function(e){return e.map((function(e,n){var o=function(e){var n;try{n=document.querySelector("#"+e.id)}catch(t){}if(!n)return 0;var o=n.getBoundingClientRect();return n.offsetTop+o.height/2}(e);return{index:n,id:e.id,y:o}}))},v=function(n){var o=e.useState(0),t=o[0],a=o[1],r=e.useCallback((function(){var e=function(e){var n=void 0;if(e.length>0){var o=window.pageYOffset,t=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-64,a=o+t,r=f(e),l=r.filter((function(e){return e.y>=o&&e.y<=a}));if(l.length>0)n=l.slice(0,1)[0].index;else{var i=r.filter((function(e){return e.y<o}));i.length>0&&(n=i.slice(-1)[0].index)}}return null==n&&e.length>0&&(n=window.pageYOffset<64?0:e.length-1),n}(n);a(e)}),[n]);return e.useEffect((function(){r()}),[r]),function(n,o){void 0===o&&(o=30);var t=e.useState(0),a=t[0],r=t[1];e.useEffect((function(){var e=function(e){var t=window.pageYOffset;Math.abs(t-a)>=o&&(r(t),n(e))};return window.addEventListener("scroll",e,{passive:!0}),function(){window.removeEventListener("scroll",e)}}),[n,a,o])}(r),t};function y(e){var n=e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase();return n.match(/^\d/)&&(n="n_"+n),n}var w=function(n){var o=n.path,t=n.menu,r=n.children,l=e.useState(!1),i=l[0],d=l[1],c=v(t);return a.default.createElement("div",{className:"main"},a.default.createElement("nav",{className:"header"},a.default.createElement(s,{path:o,responsiveOpen:i,onResponsiveToggle:function(e){return d(e)}})),a.default.createElement("div",{className:"body "+(t.length>0?"with-menu":"without-menu")},0==t.length?null:a.default.createElement("div",{className:"menu-container "+(i?"responsive-open":"")},a.default.createElement(a.default.Fragment,null,"docs"==o?a.default.createElement(h,null):null,a.default.createElement(g,{path:o,menu:t,onMenuClick:function(e){d(!1),function(e){var n=document.querySelector(e);if(n){var o=n.getBoundingClientRect(),t=window.scrollY+(o.y-64);window.scrollTo({top:t,left:0,behavior:"smooth"})}}("#"+t[e].id.replace("menu-",""))},activeOption:c}))),a.default.createElement("div",{className:"content"},r,a.default.createElement(b,null))))},x=function(e){return a.default.createElement("div",e)},I=function(e){var n=e.readme,o={overrides:{section:{props:{className:"doc-section"}},article:{props:{className:"doc-article"}},pre:{props:{className:"prettyprint"}},p:{component:x}},slugify:y};return a.default.createElement(l.default,{options:o},n)},B=function(n){var o=n.readme,t=e.useState([]),r=t[0],l=t[1];return e.useEffect((function(){try{PR.prettyPrint()}catch(e){}}),[o]),e.useEffect((function(){var e=function(){for(var e,n,o=[],t=0,a=Array.from(document.querySelectorAll("h1, h2, h3"));t<a.length;t++){var r=a[t],l={id:r.id,title:(e=r.innerHTML.trim(),n=void 0,(n=document.createElement("div")).innerHTML=e,(n.textContent||n.innerText||"").trim()),level:parseInt(r.tagName.replace("H",""))};o.push(l)}return o}();l(e)}),[]),a.default.createElement(w,{menu:r,path:"docs"},a.default.createElement(I,{readme:o}))},G=function(n){var o=n.pkgPath,t=n.pkgJson,r=n.arreConfig,l=n.readmes,d=Object.keys(l),c=e.useState(d),s=c[0];c[1];var g=e.useState(d[0]),m=g[0],u=g[1],p=e.useState(l[d[0]]),b=p[0],h=p[1],f=e.useCallback((function(e){u(e),h(l[e])}),[]);return a.default.createElement(i.Provider,{value:{pkgPath:o,pkgJson:t,arreConfig:r,versions:s,selectedVersion:m,readme:b,onSwicthVersion:f}},a.default.createElement(B,{readme:b}))};!function(e,n){void 0===n&&(n={});var o=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===o&&t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('/* css variables*/\n:root {\n  --font-size: 12pt;\n  --font-size-sm: 9pt;\n  --heading-color-l1: #432E30;\n  --heading-color-l2: #756060;\n  --heading-color-l3: #8E7474;\n  --accent-color: #DD356E;\n  --accent-color-light: #df608a;\n  --action-color: #DD356E;\n  --action-color-light: #df608a;\n  --link-color: #DD356E;\n  --link-color-light: #df608a;\n  --inline-code-color: #5e5656;\n  --white-color: #FAFBFC;\n  --header-bg-color: #F8F8FA;\n  --header-bg-color-secondary: #e4e4f7;\n  --code-bg-color: #f9f9f9;\n  --header-logo-width: 125px;\n  --header-logo-width-resp: 100px;\n  --header-grid-height: 4em;\n  --header-grid-height-resp: 3em;\n  --header-sub-height: 0;\n  --header-sub-height-resp: 2.5em;\n  --menu-width-web: 20em;\n  --menu-responsive-color: rgba(0, 0, 0, 1);\n  --border: 1px solid var(--header-bg-color); }\n\n/*\n@font-face {\n  font-family: "Inconsolata";\n  font-weight: normal;\n  src: url(../fonts/Inconsolata/Inconsolata-Regular.ttf) format("truetype");\n}\n\n@font-face {\n  font-family: "Inconsolata";\n  font-weight: bold;\n  src: url(../fonts/Inconsolata/Inconsolata-Bold.ttf) format("truetype");\n}\n*/\nbody.arredemo * {\n  box-sizing: border-box; }\n\n/* normalized */\nbody.arredemo {\n  padding: 0;\n  margin: 0;\n  font-family: \'Inconsolata\', Arial, sans-serif;\n  font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  line-height: 1.5em;\n  background-color: white; }\n  body.arredemo h1 {\n    font-size: 2em;\n    color: var(--heading-color-l1); }\n  body.arredemo h2 {\n    font-size: 1.5em;\n    color: var(--heading-color-l2); }\n  body.arredemo h3 {\n    font-size: 1.25em;\n    color: var(--heading-color-l3); }\n  body.arredemo hr {\n    padding: 1rem 0;\n    border: 0;\n    border-bottom: 1px solid var(--bg-color); }\n  body.arredemo a,\n  body.arredemo .link {\n    color: var(--link-color);\n    text-decoration: underline;\n    text-decoration-color: var(--link-color);\n    -webkit-transition: opacity 0.5s ease-in-out;\n    -moz-transition: opacity 0.5s ease-in-out;\n    -ms-transition: opacity 0.5s ease-in-out;\n    -o-transition: opacity 0.5s ease-in-out;\n    transition: opacity 0.5s ease-in-out;\n    opacity: 1;\n    cursor: pointer; }\n    body.arredemo a:hover,\n    body.arredemo .link:hover {\n      opacity: 0.5; }\n    body.arredemo a img,\n    body.arredemo .link img {\n      position: relative;\n      vertical-align: middle; }\n    body.arredemo a img + span,\n    body.arredemo .link img + span {\n      margin-left: 0.5em; }\n  body.arredemo .package-name {\n    font-weight: 600;\n    color: var(--accent-color); }\n  body.arredemo blockquote {\n    font-style: italic;\n    color: gray; }\n\nbody.arredemo {\n  /* inline code sections */ }\n  body.arredemo pre {\n    display: block;\n    padding: 1.5em 1em !important;\n    border: 1px solid #bebab0;\n    overflow-x: auto; }\n  body.arredemo code {\n    color: var(--inline-code-color);\n    text-decoration-color: var(--inline-code-color);\n    word-wrap: break-word;\n    font-family: "Liberation Mono","Courier New",monospace; }\n  body.arredemo pre.prettyprint {\n    background-color: var(--code-bg-color); }\n    body.arredemo pre.prettyprint code {\n      line-height: 1em;\n      font-size: 10pt; }\n  body.arredemo a :has(code),\n  body.arredemo .link:has(code) {\n    color: var(--inline-code-color);\n    text-decoration-color: var(--inline-code-color); }\n\nbody.arredemo *,\nbody.arredemo *::before,\nbody.arredemo *::after {\n  box-sizing: border-box; }\n\n:root {\n  --select-border: #777;\n  --select-focus: blue;\n  --select-arrow: var(--select-border); }\n\nbody.arredemo {\n  /*\n  label {\n    font-size: 1.125rem;\n    font-weight: 500;\n  }\n  */ }\n  body.arredemo select {\n    appearance: none;\n    background-color: transparent;\n    border: none;\n    padding: 0 1em 0 0;\n    margin: 0;\n    width: 100%;\n    z-index: 1;\n    outline: none; }\n    body.arredemo select::-ms-expand {\n      display: none; }\n  body.arredemo .select {\n    display: grid;\n    grid-template-areas: "select";\n    align-items: center;\n    position: relative;\n    min-width: 15ch;\n    max-width: 30ch;\n    border: 1px solid var(--select-border);\n    border-radius: 0.25em;\n    padding: 0.25em 0.5em;\n    cursor: pointer;\n    background-color: #fff;\n    background-image: linear-gradient(to top, #f9f9f9, #fff 33%); }\n    body.arredemo .select select, body.arredemo .select::after {\n      grid-area: select; }\n    body.arredemo .select:not(.select--multiple)::after {\n      content: "";\n      justify-self: end;\n      width: 0.8em;\n      height: 0.5em;\n      background-color: var(--select-arrow);\n      clip-path: polygon(100% 0%, 0 0%, 50% 100%); }\n  body.arredemo select:focus + .focus {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n    border: 2px solid var(--select-focus);\n    border-radius: inherit; }\n  body.arredemo select[multiple] {\n    padding-right: 0;\n    /*\n    * Safari will not reveal an option\n    * unless the select height has room to \n    * show all of it\n    * Firefox and Chrome allow showing \n    * a partial option\n    */\n    height: 6rem;\n    /* \n    * Experimental - styling of selected options\n    * in the multiselect\n    * Not supported crossbrowser\n    */ }\n    body.arredemo select[multiple] option {\n      white-space: normal;\n      outline-color: var(--select-focus); }\n  body.arredemo .select--disabled {\n    cursor: not-allowed;\n    background-color: #eee;\n    background-image: linear-gradient(to top, #ddd, #eee 33%); }\n  body.arredemo .select + label {\n    margin-top: 2rem; }\n\n/* buttons */\nbody.arredemo .button--primary {\n  padding: 10px 22px;\n  background-color: var(--action-color);\n  color: white;\n  position: relative;\n  text-decoration: none;\n  border: 0;\n  transition: all .3s ease-out; }\n\nbody.arredemo .button--primary:after {\n  position: absolute;\n  content: "";\n  width: 1rem;\n  height: 1rem;\n  background-color: var(--action-color-light);\n  right: -0.4rem;\n  top: -0.4rem;\n  transition: all 0.3s ease-out; }\n\nbody.arredemo .button--primary:hover {\n  text-shadow: 0px 1px 1px var(--action-color-light);\n  color: white;\n  transform: translate3D(0, -3px, 0); }\n\nbody.arredemo .button--primary:hover::after {\n  transform: rotate(90deg); }\n\nbody.arredemo .button--secondary {\n  padding: 10px 22px;\n  border: 2px solid var(--action-color);\n  transition: all 0.5s ease-out; }\n\nbody.arredemo .button--secondary:hover {\n  border-color: var(--action-color);\n  color: var(--action-color); }\n\ndiv.toggler {\n  text-align: right;\n  padding-top: 0.5em;\n  padding-right: 1em;\n  cursor: pointer;\n  display: none; }\n  @media screen and (max-width: 600px) {\n    div.toggler {\n      display: block; } }\n  div.toggler .toggle {\n    position: relative; }\n  div.toggler .toggle span,\n  div.toggler .toggle span:before,\n  div.toggler .toggle span:after {\n    content: \'\';\n    position: absolute;\n    height: 2px;\n    width: 18px;\n    border-radius: 2px;\n    background: var(--action-color);\n    display: block;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    right: 0; }\n  div.toggler .toggle span:before {\n    top: -6px; }\n  div.toggler .toggle span:after {\n    bottom: -6px; }\n  div.toggler .toggle.open span {\n    background-color: transparent; }\n  div.toggler .toggle.open span:before,\n  div.toggler .toggle.open span:after {\n    top: 0; }\n  div.toggler .toggle.open span:before {\n    transform: rotate(45deg); }\n  div.toggler .toggle.open span:after {\n    transform: rotate(-45deg); }\n\ndiv.body {\n  position: relative;\n  margin-top: calc(var(--header-grid-height) + 1em);\n  width: 100%;\n  padding: 0 2em; }\n  @media screen and (max-width: 600px) {\n    div.body {\n      margin-top: calc(var(--header-grid-height-resp) + 1em);\n      padding: 0 1em; } }\n  div.body.with-menu div.content {\n    margin-left: var(--menu-width-web); }\n    @media screen and (max-width: 600px) {\n      div.body.with-menu div.content {\n        margin-left: 0; } }\n\nnav.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n  background-color: var(--header-bg-color); }\n  @media screen and (min-width: 600px) {\n    nav.header {\n      padding-left: 4em;\n      padding-right: 4em; } }\n  nav.header .grid {\n    display: grid;\n    grid-template-columns: var(--header-logo-width) auto 0%;\n    padding: 1em 0;\n    height: var(--header-grid-height);\n    background-repeat: no-repeat;\n    background-size: auto 100%; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid {\n        grid-template-columns: var(--header-logo-width-resp) auto 20%;\n        height: var(--header-grid-height-resp); } }\n    nav.header .grid div.logo img {\n      max-height: 100%; }\n      @media screen and (max-width: 600px) {\n        nav.header .grid div.logo img {\n          width: 100px;\n          margin-left: 0.5em; } }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar .link.github span {\n        display: none; } }\n    nav.header .grid div.toolbar a {\n      text-decoration: none; }\n      nav.header .grid div.toolbar a.light {\n        color: var(--action-color-light);\n        text-decoration-color: var(--action-color-light);\n        font-weight: lighter; }\n      nav.header .grid div.toolbar a.dark {\n        color: var(--action-color);\n        text-decoration-color: var(--action-color);\n        font-weight: bolder; }\n      nav.header .grid div.toolbar a:not(:last-child) {\n        padding-right: 1em; }\n        @media screen and (max-width: 600px) {\n          nav.header .grid div.toolbar a:not(:last-child) {\n            padding-right: 0.5em; } }\n      nav.header .grid div.toolbar a img {\n        width: 1em;\n        top: -0.05em; }\n  nav.header .grid div.toolbar {\n    text-align: right; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar {\n        text-align: center; } }\n\n.menu-container {\n  position: fixed;\n  left: 0;\n  width: var(--menu-width-web);\n  padding-left: 1em;\n  top: calc(var(--header-grid-height) + 1em);\n  height: calc(100% - calc(var(--header-grid-height) + 1em));\n  overflow: hidden;\n  /*\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-gap: 1em;\n  justify-content: center;\n  \n  flex-grow: 1;\n  display: flex;\n  */\n  /*\n\n  @media screen and (max-width: 600px) {\n    position: fixed;\n    top: var(--header-grid-height-resp);\n    left: 0;\n    display: block;\n    width: 100%;\n\n    background-color: var(--header-bg-color);\n    padding: 1rem;\n  }\n  */\n  border-right: var(--border); }\n  @media screen and (max-width: 600px) {\n    .menu-container {\n      display: none; }\n      .menu-container.responsive-open {\n        display: block;\n        width: 100%;\n        padding: 1em;\n        overflow: auto;\n        background-color: var(--menu-responsive-color);\n        float: left;\n        top: 0;\n        z-index: 2; } }\n  .menu-container .switcher {\n    height: 2em; }\n  .menu-container .menu {\n    height: calc(100% - 2.25em);\n    overflow-y: auto; }\n    .menu-container .menu ul {\n      overflow-y: auto;\n      list-style: none;\n      padding-left: 0.5em;\n      text-align: left; }\n      .menu-container .menu ul li {\n        padding: 0.5em 0 0 0;\n        font-weight: 300; }\n      .menu-container .menu ul li.level-1 {\n        font-weight: bold; }\n        .menu-container .menu ul li.level-1 a, .menu-container .menu ul li.level-1 .link {\n          color: var(--heading-color-l1); }\n      .menu-container .menu ul li.level-2 {\n        padding-left: 1.5em; }\n        .menu-container .menu ul li.level-2 a, .menu-container .menu ul li.level-2 .link {\n          color: var(--heading-color-l2); }\n      .menu-container .menu ul li.level-3 {\n        padding-left: 3em; }\n        .menu-container .menu ul li.level-3 a, .menu-container .menu ul li.level-3 .link {\n          color: var(--heading-color-l3); }\n      .menu-container .menu ul li a,\n      .menu-container .menu ul li .link {\n        text-decoration: none; }\n      .menu-container .menu ul .selected {\n        position: relative; }\n      .menu-container .menu ul .selected a {\n        color: var(--accent-color); }\n      .menu-container .menu ul .selected:after {\n        position: absolute;\n        content: "";\n        width: 0.1rem;\n        height: 75%;\n        background-color: var(--accent-color);\n        left: -0.5rem;\n        top: 0.25rem; }\n\nfooter {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  font-size: var(--font-size-sm);\n  border-top: var(--border);\n  padding: 1.5em;\n  text-align: center;\n  z-index: 2; }\n  footer .badges {\n    text-align: left; }\n    footer .badges span.badge {\n      padding-top: 0.5em;\n      padding-right: 1em; }\n      @media screen and (max-width: 600px) {\n        footer .badges span.badge {\n          display: inline-block;\n          padding-top: 0; } }\n  footer .license {\n    text-align: right; }\n  footer a {\n    color: white;\n    text-decoration: underline; }\n  @media screen and (max-width: 600px) {\n    footer {\n      display: block; }\n      footer .badges {\n        text-align: center; }\n      footer .license {\n        text-align: center;\n        margin-top: 1em; } }\n');var C=JSON.parse('\n  {\n  "name": "xeira",\n  "version": "0.0.29",\n  "description": "One Web Dev stack tool to rule them all",\n  "type": "module",\n  "bin": "bin/xeira.mjs",\n  "exports": {\n    "./configs": "./src/configs",\n    "./utils-dev": "./src/utils-dev"\n  },\n  "scripts": {\n    "docs-clean": "rm -fr arredemo",\n    "docs-build": "npm run docs-clean && npx arredemo build",\n    "reset": "rm -fr package-lock.json && rm -fr node_modules && npm i && ./scripts/reset.sh",\n    "lint": "eslint .",\n    "test": "./scripts/test.sh",\n    "prepare": "npm run docs-build"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/afialapis/xeira.git"\n  },\n  "author": "donato@afialapis.com",\n  "license": "MIT",\n  "bugs": {\n    "url": "https://github.com/afialapis/xeira/issues"\n  },\n  "homepage": "https://github.com/afialapis/xeira#readme",\n  "dependencies": {\n    "@babel/cli": "^7.18.6",\n    "@babel/core": "^7.18.6",\n    "@babel/eslint-parser": "^7.18.2",\n    "@babel/plugin-transform-modules-commonjs": "^7.19.6",\n    "@babel/preset-env": "^7.18.6",\n    "@babel/preset-modules": "^0.1.5",\n    "@babel/preset-react": "^7.18.6",\n    "@babel/register": "^7.18.6",\n    "@rollup/plugin-alias": "^4.0.2",\n    "@rollup/plugin-babel": "^5.3.1",\n    "@rollup/plugin-commonjs": "^22.0.2",\n    "@rollup/plugin-node-resolve": "^14.1.0",\n    "@rollup/plugin-replace": "^4.0.0",\n    "arredemo": "^0.0.4",\n    "babel-plugin-module-extension": "^0.1.3",\n    "babel-plugin-module-resolver": "^4.1.0",\n    "chai": "^4.3.6",\n    "chai-as-promised": "^7.1.1",\n    "cross-spawn": "^7.0.3",\n    "diff": "^5.1.0",\n    "enzyme": "^3.11.0",\n    "enzyme-adapter-react-16": "^1.15.6",\n    "eslint": "^8.18.0",\n    "eslint-plugin-react": "^7.30.1",\n    "eslint-plugin-react-hooks": "^4.6.0",\n    "farrapa-colors": "^1.0.7",\n    "farrapa-strings": "^1.0.7",\n    "ignore-styles": "^5.0.1",\n    "jsdom": "^20.0.0",\n    "lodash": "^4.17.21",\n    "merge-deep": "^3.0.3",\n    "mocha": "^10.0.0",\n    "node-sass": "^7.0.3",\n    "nollup": "^0.21.0",\n    "postcss": "^8.4.16",\n    "prompts": "^2.4.2",\n    "rollup": "^2.75.7",\n    "rollup-plugin-livereload": "^2.0.5",\n    "rollup-plugin-node-externals": "^4.1.0",\n    "rollup-plugin-node-polyfills": "^0.2.1",\n    "rollup-plugin-postcss": "^4.0.2",\n    "rollup-plugin-serve": "^2.0.1",\n    "rollup-plugin-terser": "^7.0.2",\n    "testdouble": "^3.16.6",\n    "uglify-js": "^3.16.1"\n  },\n  "overrides": {\n    "enzyme": {\n      "cheerio": "1.0.0-rc.3"\n    },\n    "css-select": {\n      "nth-check": "2.0.1"\n    }\n  },\n  "eslintConfig": {\n    "extends": [\n      "./configs/eslint.react.cjs"\n    ]\n  },\n  "babel": {\n    "extends": "./configs/babel.react.cjs"\n  }\n}\n'),Z=JSON.parse('\n{\n  "theme": "default",\n  "favicon": "logo/favicon/xeira.ico",\n  "logo": "logo/xeira.png",\n  "company": "Afialapis",\n  "url": "xeira.afialapis.com",\n  "doc_versions": null,\n  "md": {\n    "strip_details_tag": true,\n    "keep_summary_content": true\n  },\n  "demo_entry": null\n}\n'),k={"0.0.29":decodeURIComponent(escape(window.atob("PHNlY3Rpb24+CiMgeGVpcmEKCj4gT25lIHdlYi1kZXYtc3RhY2sgY29tbWFuZCB0byBydWxlIHRoZW0gYWxsCgpgeGVpcmFgIGFpbXMgdG8gZ3JvdXAgYWxsIHRoZSBXZWIgRGV2IHN0YWNrIHByb2Nlc3NlcyB5b3UgbmVlZCBmcm9tIGEgc2luZ2xlLCB6ZXJvIGNvbmZpZywgY29tbWFuZC4KVW5kZXIgdGhlIGhvb2RzLCBpdCBjYWxscyB3ZWxsIGtub3duLCBjb21tdW5pdHkgdHJ1c3RlZCB0b29sczoKCi0gbGludGluZyB0cm91Z2ggW0VTTGludF0oaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQpCi0gdHJhbnNwaWxpbmcgd2l0aCBbQmFiZWxdKGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbCkKLSBidW5kbGluZyB3aXRoIFtSb2xsdXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwKQotIHNlcnZpbmcgZGV2IHNlcnZlcnMgYm90aCB3aXRoIFtSb2xsdXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwKSBvciBbTm9sbHVwXShodHRwczovL2dpdGh1Yi5jb20vUGVwc1J5dXUvbm9sbHVwKQotIHRlc3Rpbmcgd2l0aCBbTW9jaGFdKGh0dHBzOi8vZ2l0aHViLmNvbS9tb2NoYWpzL21vY2hhKSBhbmQgW0NoYWldKGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFpanMvY2hhaSkKLSBidWlsZGluZyBzdGF0aWMgc2l0ZSBmb3IgeW91ciBwYWNrYWdlIHRyb3VnaCBbYXJyZWRlbW9dKGh0dHBzOi8vZ2l0aHViLmNvbS9hZmlhbGFwaXMvYXJyZWRlbW8pCgpGdXR1cmUgdmVyc2lvbnMgd2lsbCB0cnkgdG8gYWRkIG1vcmUgdG9vbHMgKHNvLCBmb3IgZXhhbXBsZSwgbGV0dGluZyB5b3UgdG8gcGljayB5b3VyCnByZWZlcnJlZCBidW5kbGVyKS4gSXQncyBhbHNvIHZlcnkgb3BpbmlvbmF0ZWQsIHVzaW5nIHByZXR0eSBzdGFuZGFyZCBjb25maWd1cmF0aW9ucy4gCgo8L3NlY3Rpb24+CjxzZWN0aW9uPgojIEluc3RhbGwKCmBgYAogIG5wbSBpIC1EIHhlaXJhCmBgYAoKPC9zZWN0aW9uPgo8c2VjdGlvbj4KIyBBUEkgCgo8YXJ0aWNsZT4KIyMgaW5pdAoKVGhpcyBvbmUtc2hvdCBjb21tYW5kIHdpbGwgZ3VpZGUgeW91IGluIHRoZSBjcmVhdGlvbiBvZiBgeGVpcmFgJ3MgCmNvbmZpZyBmaWxlOiBgeGVpcmEuanNvbmAuCgpgYGAKICBucHggeGVpcmEgaW5pdApgYGAgCgo8L2FydGljbGU+CjxhcnRpY2xlPgojIyBsaW50CgpgYGAKICBucHggeGVpcmEgbGludCBbZm9sZGVyIChkZWZhdWx0PSAuLykgXQpgYGAgCgo8L2FydGljbGU+CjxhcnRpY2xlPgojIyB0cmFuc3BpbGUKCmBgYAogIG5weCB4ZWlyYSB0cmFuc3BpbGUgW3NvdXJjZV9mb2xkZXIgKGRlZmF1bHQ9IC4vc3JjKSBkZXN0X2ZvbGRlciAoZGVmYXVsdD0gLi9saWIpXQpgYGAgCgo8L2FydGljbGU+CjxhcnRpY2xlPgojIyBidW5kbGUKCmBgYAogIG5weCB4ZWlyYSBidW5kbGUKYGBgIAoKPC9hcnRpY2xlPgo8YXJ0aWNsZT4KIyMgdGVzdAoKYGBgCiAgbnB4IHhlaXJhIHRlc3QgW2ZvbGRlciAoZGVmYXVsdD0gLi90ZXN0KSBdCmBgYCAKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIGRlbW8KCmBgYAogIG5weCB4ZWlyYSBkZW1vIFtpbml0IFtmb3JjZV1dCmBgYCAKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIHZlcnNpb24KCmBgYAogIG5weCB4ZWlyYSB2ZXJzaW9uIHBhdGNofG1pbm9yfG1ham9yfDAuMS4yIFstZmlsdGVyIDxwYXR0ZXJuPl0KYGBgIAoKPC9hcnRpY2xlPgo8YXJ0aWNsZT4KIyMgc3RhdGljIHNpdGUKCmBgYAogIG5weCB4ZWlyYSBzaXRlCmBgYCAKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIGhlbHAKCmBgYAogIG5weCB4ZWlyYSBoZWxwCmBgYCAKCjwvYXJ0aWNsZT4KPC9zZWN0aW9uPgo8c2VjdGlvbj4KIyBPdGhlcnMKCjxhcnRpY2xlPgojIyBBbGlhc2VzIHN1cHBvcnRlZAoKRGVmaW5lIHlvdXIgYWxpYXNlcyBqdXN0IGZvciB5b3VyIGVkaXRvci4gSW4geW91ciByb290IGZvbGRlciwgZmlsZSBganNjb25maWcuanNvbmA6CgpgYGBqc29uCiAgewogICAgImNvbXBpbGVyT3B0aW9ucyI6IHsKICAgICAgImJhc2VVcmwiOiAiLiIsCiAgICAgICJwYXRocyI6IHsKICAgICAgICAiKiI6IFsic3JjLyoiXSwKICAgICAgICAidGVzdC8qIjogWyJ0ZXN0LyoiXSwKICAgICAgICAidW5kZXJzY29yZSI6IFsibG9kYXNoIl0KICAgICAgfQogICAgfQogIH0KYGBgCkFuZCBgeGVpcmFgIHdpbGwgdXNlIHRoZW0gYm90aCBmb3IgdHJhbnNwaWxpbmcgYW5kIGJ1bmRsaW5nLgoK")))};r.default.createRoot(document.getElementById("arredemo-app")).render(a.default.createElement(a.default.StrictMode,null,a.default.createElement(G,{pkgPath:"/home/lapis/repos/gh/xeira",pkgJson:C,arreConfig:Z,readmes:k})))}(React,ReactDOM,MarkdownToJSX);
//# sourceMappingURL=arredemo_docs.js.map