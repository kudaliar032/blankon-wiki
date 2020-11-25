(window.webpackJsonp=window.webpackJsonp||[]).push([[715],{1047:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(t),m=r,f=b["".concat(l,".").concat(m)]||b[m]||s[m]||i;return t?a.a.createElement(f,o(o({ref:n},u),{},{components:t})):a.a.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},782:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(1047)),l={},o={unversionedId:"TimPengembang/Infrastruktur/RilisCD",id:"TimPengembang/Infrastruktur/RilisCD",isDocsHomePage:!1,title:"RilisCD",description:"Rilis CD",source:"@site/Wiki/TimPengembang/Infrastruktur/RilisCD.md",slug:"/TimPengembang/Infrastruktur/RilisCD",permalink:"/TimPengembang/Infrastruktur/RilisCD",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/RilisCD.md",version:"current"},c=[{value:"Skrip publish-release",id:"skrip-publish-release",children:[]},{value:"Contoh pengunaan",id:"contoh-pengunaan",children:[]}],u={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"rilis-cd"},"Rilis CD"),Object(i.a)("h3",{id:"skrip-publish-release"},"Skrip publish-release"),Object(i.a)("p",null,"Gunakan skrip publish-release untuk merilis CD:"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{}),"$ sudo su - cdimage\n$ export PATH=/srv/cdimage.blankonlinux.or.id/bin:$PATH\n$ for-project <PROJECT\\>\n$ publish-release <SUMBER-JAHITAN\\> <TANGGAL\\> <JENIS-CD\\> fullonly <TARGET-RILIS\\>\n")),Object(i.a)("p",null,"Keterangan:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"<PROJECT",">",": blankon, blankon-minimalist, dst."),Object(i.a)("li",{parentName:"ul"},"<SUMBER-JAHITAN",">",": harian untuk alternate harian - livecd-harian untuk live-cd harian"),Object(i.a)("li",{parentName:"ul"},"<TANGGAL",">",": 20090515, 20090516, dst."),Object(i.a)("li",{parentName:"ul"},"<JENIS-CD",">",": cdlive, alternate"),Object(i.a)("li",{parentName:"ul"},"<TARGET-RILIS",">",": rc, beta, jahitan-3, dst.")),Object(i.a)("h3",{id:"contoh-pengunaan"},"Contoh pengunaan"),Object(i.a)("p",null,"Proyek BlankOn"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{}),"$ for-project blankon\n$ publish-release livecd-harian 20090515 cdlive fullonly beta\n$ publish-release harian 20090516 alternate fullonly beta\n")),Object(i.a)("p",null,"Proyek BlankOn-Minimalist"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{}),"$ for-project blankon-minimalist\n$ publish-release livecd-harian 20090515 cdlive fullonly beta\n$ publish-release harian 20090516 alternate fullonly beta\n")),Object(i.a)("p",null,"Sekian!"))}p.isMDXComponent=!0}}]);