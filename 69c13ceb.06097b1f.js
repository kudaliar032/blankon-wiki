(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{1047:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),p=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),d=p(t),s=a,g=d["".concat(o,".").concat(s)]||d[s]||l[s]||i;return t?r.a.createElement(g,c(c({ref:n},u),{},{components:t})):r.a.createElement(g,c({ref:n},u))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},471:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(1047)),o={},c={unversionedId:"TimPengembang/Dokumentasi/Draf/SettingModemHaier",id:"TimPengembang/Dokumentasi/Draf/SettingModemHaier",isDocsHomePage:!1,title:"SettingModemHaier",description:"Setting Modem Haier",source:"@site/Wiki/TimPengembang/Dokumentasi/Draf/SettingModemHaier.md",slug:"/TimPengembang/Dokumentasi/Draf/SettingModemHaier",permalink:"/TimPengembang/Dokumentasi/Draf/SettingModemHaier",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Draf/SettingModemHaier.md",version:"current"},m=[],u={rightToc:m};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"setting-modem-haier"},"Setting Modem Haier"),Object(i.a)("p",null,"HP Modem Haier secara default belum bisa digunakan langsungpakai di Ombilin, namun dengan langkah-langkah tambahan ini maka HP modem ini bisa\ndigunakan lewat nm-applet seperti modem yang telah didukung,"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{}),"* buka terminal : Aplikasi > Aksesoris > Terminal\n* ketik pada jendela terminal : lsusb\n* muncul daftar alamat perangkat yang terpasang pada usb, diantaranya : Bus 002 Device 002: ID 05c6:9004 Qualcomm, Inc.\n* nah itu artinya jika kita akan melakukan modprobe maka : vendor=0x05c6 dan product=0x9004\n* ketik di terminal : modprobe usbserial vendor=0x05c6 product=0x9004\n")),Object(i.a)("p",null,"maka modem anda sudah bisa digunakan di nm-applet (kanan atas ada ikon 2 komputer)\nLast modified on 05/30/2010 02:08:37 PM"),Object(i.a)("hr",null))}p.isMDXComponent=!0}}]);