(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1047:function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a(0),i=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),m=function(e){var n=i.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(a),d=t,f=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return a?i.a.createElement(f,s(s({ref:n},l),{},{components:a})):i.a.createElement(f,s({ref:n},l))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},96:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return s})),a.d(n,"rightToc",(function(){return c})),a.d(n,"default",(function(){return m}));var t=a(3),i=a(7),r=(a(0),a(1047)),o={},s={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase",id:"TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase",isDocsHomePage:!1,title:"CamelCase",description:"CamelCase",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase.md",version:"current"},c=[{value:"CamelCase",id:"camelcase",children:[{value:"Customizing the Wiki behavior",id:"customizing-the-wiki-behavior",children:[]},{value:"More information on CamelCase",id:"more-information-on-camelcase",children:[]}]}],l={rightToc:c};function m(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(t.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"camelcase"},"CamelCase"),Object(r.a)("p",null,"New words created by smashing together capitalized words.\nCamelCase is the original wiki convention for creating hyperlinks, with the\nadditional requirement that the capitals are followed by a lower-case letter;\nhence \u201cAlabamA\u201d and \u201cABc\u201d will not be links."),Object(r.a)("h3",{id:"customizing-the-wiki-behavior"},"Customizing the Wiki behavior"),Object(r.a)("p",null,"Some people dislike linking by CamelCase. While Trac remains faithful to the\noriginal Wiki style, it provides a number of ways to accomodate users with\ndifferent preferences:"),Object(r.a)("pre",null,Object(r.a)("code",Object(t.a)({parentName:"pre"},{}),"* There's an option (ignore_missing_pages in the [wiki] section of TracIni)\n  to simply ignore links to missing pages when the link is written using\n  the CamelCase style, instead of that word being replaced by a gray link\n  followed by a question mark.\n  That can be useful when CamelCase style is used to name code artifacts\n  like class names and there's no corresponding page for them.\n* There's an option (split_page_names in the [wiki] section of TracIni) to\n  automatically insert space characters between the words of a CamelCase\n  link when rendering the link.\n* Creation of explicit Wiki links is also easy, see WikiPageNames for\n  details.\n* In addition, Wiki formatting can be disabled completely in some places\n  (e.g. when rendering commit log messages). See wiki_format_messages in\n  the [changeset] section of TracIni.\n")),Object(r.a)("p",null,"See TracIni for more information on the available options."),Object(r.a)("h3",{id:"more-information-on-camelcase"},"More information on CamelCase"),Object(r.a)("pre",null,Object(r.a)("code",Object(t.a)({parentName:"pre"},{}),"* \u200bhttp://c2.com/cgi/wiki?WikiCase\n* \u200bhttp://en.wikipedia.org/wiki/CamelCase\n")),Object(r.a)("p",null,"See also: WikiPageNames, WikiNewPage, WikiFormatting, TracWiki"),Object(r.a)("p",null,"Last modified on 10/16/2014 01:10:30 PM"),Object(r.a)("hr",null))}m.isMDXComponent=!0}}]);