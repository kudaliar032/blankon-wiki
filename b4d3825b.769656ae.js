(window.webpackJsonp=window.webpackJsonp||[]).push([[694],{1047:function(e,n,r){"use strict";r.d(n,"a",(function(){return b}));var a=r(0),t=r.n(a);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=t.a.createContext({}),u=function(e){var n=t.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},d=t.a.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(r),b=a,k=d["".concat(o,".").concat(b)]||d[b]||l[b]||i;return r?t.a.createElement(k,c(c({ref:n},s),{},{components:r})):t.a.createElement(k,c({ref:n},s))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},761:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return u}));var a=r(3),t=r(7),i=(r(0),r(1047)),o={},c={unversionedId:"TimPengembang/Infrastruktur/MenyalakanPabrikPaketV2",id:"TimPengembang/Infrastruktur/MenyalakanPabrikPaketV2",isDocsHomePage:!1,title:"MenyalakanPabrikPaketV2",description:"Menyalakan Pabrik Paket V2",source:"@site/Wiki/TimPengembang/Infrastruktur/MenyalakanPabrikPaketV2.md",slug:"/TimPengembang/Infrastruktur/MenyalakanPabrikPaketV2",permalink:"/TimPengembang/Infrastruktur/MenyalakanPabrikPaketV2",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/MenyalakanPabrikPaketV2.md",version:"current"},p=[{value:"Masuk ke mesin alynne atau mesin yang dipasang di pabrik paket.",id:"masuk-ke-mesin-alynne-atau-mesin-yang-dipasang-di-pabrik-paket",children:[]},{value:"Persiapan Sesi Screen",id:"persiapan-sesi-screen",children:[]},{value:"Persiapan Chroot",id:"persiapan-chroot",children:[]},{value:"irgsh-node",id:"irgsh-node",children:[]},{value:"irgsh-uploader",id:"irgsh-uploader",children:[]}],s={rightToc:p};function u(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"menyalakan-pabrik-paket-v2"},"Menyalakan Pabrik Paket V2"),Object(i.a)("h2",{id:"masuk-ke-mesin-alynne-atau-mesin-yang-dipasang-di-pabrik-paket"},"Masuk ke mesin alynne atau mesin yang dipasang di pabrik paket."),Object(i.a)("h2",{id:"persiapan-sesi-screen"},"Persiapan Sesi Screen"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"$ screen -S pabrik32")),Object(i.a)("h2",{id:"persiapan-chroot"},"Persiapan Chroot"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{}),"$ cd /home/pabrik-paket/i386\n$ sudo mount -t proc proc chroot/proc\n$ sudo mount -t sysfs sysfs chroot/sys\n$ sudo mount -o bind /dev chroot/dev\n")),Object(i.a)("h2",{id:"irgsh-node"},"irgsh-node"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{}),"$ cd /home/pabrik-paket/i386\n$ sudo chroot chroot\n(chroot)root# chmod 777 /dev/shm\n(chroot)root# su - pabrik\n(chroot)pabrik$ cd pabrik/irgsh-node\n(chroot)pabrik$ ./bin/irgsh-node -l DEBUG\n")),Object(i.a)("h2",{id:"irgsh-uploader"},"irgsh-uploader"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{}),"$ cd /home/pabrik-paket/i386\n$ sudo chroot chroot\n(chroot)root# su - pabrik\n(chroot)pabrik$ cd pabrik/irgsh-node\n(chroot)pabrik$ ./bin/irgsh-uploader\n")),Object(i.a)("p",null,"##cScreen : A : ganti windows\nAC : bikin windows screen baru"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{}),"$ sudo screen -x iang/pabrik32\n")))}u.isMDXComponent=!0}}]);