(window.webpackJsonp=window.webpackJsonp||[]).push([[979],{1048:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1056);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var i=n(1068);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return i.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return i.DEFAULT_SEARCH_TAG}});var o=n(1057);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return o.isDocsPluginEnabled}});var a=n(1072);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return a.isSamePath}});var u=n(1073);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return u.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return u.useDocsPreferredVersionByPluginId}});var s=n(1058);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return s.DocsPreferredVersionContextProvider}})},1049:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},1050:function(e,t,n){try{e.exports=n(1069)}catch(r){e.exports={}}},1051:function(e,t,n){"use strict";n.r(t);var r=n(9);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},1052:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(22),i=n(1054);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,u=void 0!==a&&a,s=o.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},1053:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(9),a=n(1054),u=n(10),s=Object(r.createContext)({collectLink:function(){}}),c=n(1052),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,v=e.to,g=e.href,m=e.activeClassName,p=e.isActive,b=e["data-noBrokenLinkCheck"],h=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),D=Object(c.b)().withBaseUrl,P=Object(r.useContext)(s),_=v||g,E=Object(a.a)(_),V=null==_?void 0:_.replace("pathname://",""),O=void 0!==V?function(e){return e.startsWith("/")}(n=V)?D(n):n:void 0,j=Object(r.useRef)(!1),y=d?o.e:o.c,A=u.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&E&&window.docusaurus.prefetch(O),function(){A&&f&&f.disconnect()}}),[O,A,E]);var C=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,w=!O||!E||C;return O&&E&&!C&&!b&&P.collectLink(O),w?i.a.createElement("a",Object.assign({href:O},_&&!E&&{target:"_blank",rel:"noopener noreferrer"},h)):i.a.createElement(y,Object.assign({},h,{onMouseEnter:function(){j.current||(window.docusaurus.preload(O),j.current=!0)},innerRef:function(e){var t,n;A&&e&&E&&(t=e,n=function(){window.docusaurus.prefetch(O)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:O||""},d&&{isActive:p,activeClassName:m}))}},1054:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},1056:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var i=r(n(22));t.useThemeConfig=function(){return i.default().siteConfig.themeConfig}},1057:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var r=n(1050);t.isDocsPluginEnabled=!!r.useAllDocsData},1058:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var u=o(n(0)),s=n(1056),c=n(1057),l=n(1050),f=a(n(1074));function d(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var i={};return t.forEach((function(e){i[e]=function(e){var t=f.default.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(f.default.clear(e,n),{preferredVersionName:null})}(e)})),i}function v(){var e=l.useAllDocsData(),t=s.useThemeConfig().docs.versionPersistence,n=u.useMemo((function(){return Object.keys(e)}),[e]),r=u.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),i=r[0],o=r[1];return u.useEffect((function(){o(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[i,u.useMemo((function(){return{savePreferredVersion:function(e,n){f.default.save(e,t,n),o((function(t){var r;return Object.assign(Object.assign({},t),((r={})[e]={preferredVersionName:n},r))}))}}}),[o])]}var g=u.createContext(null);function m(e){var t=e.children,n=v();return u.default.createElement(g.Provider,{value:n},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return c.isDocsPluginEnabled?u.default.createElement(m,null,t):u.default.createElement(u.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=u.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},1068:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},1069:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(1051),i=n(1070),o=n(1071);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=r.useLocation().pathname;return o.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getDocVersionSuggestions(n,i)}},1070:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return a}));var r=n(22);function i(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=i()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function a(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},1071:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(1051);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,o,a=t.getActiveVersion(e,n),u=null==a?void 0:a.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:u,alternateDocVersions:u?(i=u.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),o=i.activeVersion!==r;return{latestDocSuggestion:o?null==i?void 0:i.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},1072:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)}},1073:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var r=n(0),i=n(1058),o=n(1050),a=n(1075);t.useDocsPreferredVersion=function(e){void 0===e&&(e=a.DEFAULT_PLUGIN_ID);var t=o.useDocsData(e),n=i.useDocsPreferredVersionContext(),u=n[0],s=n[1],c=u[e].preferredVersionName;return{preferredVersion:c?t.versions.find((function(e){return e.name===c})):null,savePreferredVersionName:r.useCallback((function(t){s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){var e=o.useAllDocsData(),t=i.useDocsPreferredVersionContext()[0],n=Object.keys(e),r={};return n.forEach((function(n){r[n]=function(n){var r=e[n],i=t[n].preferredVersionName;return i?r.versions.find((function(e){return e.name===i})):null}(n)})),r}},1074:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return"docs-preferred-version-"+e},i={save:function(e,t,n){"none"===t||window.localStorage.setItem(r(e),n)},read:function(e,t){return"none"===t?null:window.localStorage.getItem(r(e))},clear:function(e,t){"none"===t||window.localStorage.removeItem(r(e))}};t.default=i},1075:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));var r="default"},1154:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(1053);t.a=function(e){var t=e.metadata;return i.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},i.a.createElement("div",{className:"pagination-nav__item"},t.previous&&i.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},i.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),i.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&i.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},i.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),i.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))}},1155:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(22),a=n(1053),u=n(1050),s=n(1048);t.a=function(){var e=Object(o.default)().siteConfig.title,t=Object(u.useActivePlugin)({failfast:!0}).pluginId,n=Object(s.useDocsPreferredVersion)(t).savePreferredVersionName,r=Object(u.useActiveVersion)(t),c=Object(u.useDocVersionSuggestions)(t),l=c.latestDocSuggestion,f=c.latestVersionSuggestion;if(!f)return i.a.createElement(i.a.Fragment,null);var d,v=null!=l?l:(d=f).docs.find((function(e){return e.id===d.mainDocId}));return i.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===r.name?i.a.createElement("div",null,"This is unreleased documentation for ",e," ",i.a.createElement("strong",null,r.label)," version."):i.a.createElement("div",null,"This is documentation for ",e," ",i.a.createElement("strong",null,r.label),", which is no longer actively maintained."),i.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",i.a.createElement("strong",null,i.a.createElement(a.a,{to:v.path,onClick:function(){return n(f.name)}},"latest version"))," ","(",f.label,")."))}},1188:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(1049);var a=function(e,t,n){var i=Object(r.useState)(void 0),o=i[0],a=i[1];Object(r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var i=0,u=!1,s=document.getElementsByClassName(e);i<s.length&&!u;){var c=s[i],l=c.href,f=decodeURIComponent(l.substring(l.indexOf("#")+1));r.id===f&&(o&&o.classList.remove(t),c.classList.add(t),a(c),u=!0),i+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},u=n(157),s=n.n(u),c="table-of-contents__link";function l(e){var t=e.headings,n=e.isChild;return t.length?i.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),i.a.createElement(l,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return a(c,"table-of-contents__link--active",100),i.a.createElement("div",{className:Object(o.a)(s.a.tableOfContents,"thin-scrollbar")},i.a.createElement(l,{headings:t}))}}}]);