(window.webpackJsonp=window.webpackJsonp||[]).push([[757],{1047:function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):u(u({},n),e)),a},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=t,s=m["".concat(o,".").concat(d)]||m[d]||b[d]||i;return a?r.a.createElement(s,u(u({ref:n},c),{},{components:a})):r.a.createElement(s,u({ref:n},c))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:t,o[1]=u;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},824:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return u})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(7),i=(a(0),a(1047)),o={},u={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/NanggarKeOmbilin",id:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/NanggarKeOmbilin",isDocsHomePage:!1,title:"NanggarKeOmbilin",description:"Panduan Pindah dari Nanggar ke Ombilin",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/NanggarKeOmbilin.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/NanggarKeOmbilin",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/NanggarKeOmbilin",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/NanggarKeOmbilin.md",version:"current"},l=[],c={rightToc:l};function p(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"panduan-pindah-dari-nanggar-ke-ombilin"},"Panduan Pindah dari Nanggar ke Ombilin"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Perbaharui repositori BlankOn di /etc/apt/sources.list. Isi berkas\ntersebut dengan baris-baris berikut\ndeb ",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"http://arsip.blankonlinux.or.id/blankon"}),"http://arsip.blankonlinux.or.id/blankon")," ombilin main restricted\ndeb ",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"http://arsip.blankonlinux.or.id/blankon"}),"http://arsip.blankonlinux.or.id/blankon")," ombilin-updates main\nrestricted\ndeb ",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"http://arsip.blankonlinux.or.id/blankon"}),"http://arsip.blankonlinux.or.id/blankon")," ombilin-security main\nrestricted"),Object(i.a)("li",{parentName:"ul"},"Perbaharui basis data paket\nsudo apt-get update"),Object(i.a)("li",{parentName:"ul"},"Naikkan versi\n",Object(i.a)("inlineCode",{parentName:"li"},"sudo apt-get upgrade"),Object(i.a)("inlineCode",{parentName:"li"},"sudo apt-get dist-upgrade")),Object(i.a)("li",{parentName:"ul"},"Naikan versi tanpa perlu konfirmasi dari user\n",Object(i.a)("inlineCode",{parentName:"li"},"sudo apt-get--force-yes--yes dist-upgrade"))),Object(i.a)("p",null,"Last modified on 10/07/2011 10:16:46 AM"),Object(i.a)("hr",null))}p.isMDXComponent=!0}}]);