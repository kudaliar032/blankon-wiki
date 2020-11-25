(window.webpackJsonp=window.webpackJsonp||[]).push([[798],{1047:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function u(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?u(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=c(n),d=t,k=b["".concat(u,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(k,l(l({ref:a},s),{},{components:n})):r.a.createElement(k,l({ref:a},s))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,u=new Array(i);u[0]=b;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:t,u[1]=l;for(var s=2;s<i;s++)u[s]=n[s];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},865:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return u})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return o})),n.d(a,"default",(function(){return c}));var t=n(3),r=n(7),i=(n(0),n(1047)),u={},l={unversionedId:"TimPengembang/Infrastruktur/PabrikPaket/PekerjaV2",id:"TimPengembang/Infrastruktur/PabrikPaket/PekerjaV2",isDocsHomePage:!1,title:"PekerjaV2",description:"Pekerja V2",source:"@site/Wiki/TimPengembang/Infrastruktur/PabrikPaket/PekerjaV2.md",slug:"/TimPengembang/Infrastruktur/PabrikPaket/PekerjaV2",permalink:"/TimPengembang/Infrastruktur/PabrikPaket/PekerjaV2",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/PabrikPaket/PekerjaV2.md",version:"current"},o=[{value:"irgsh-node",id:"irgsh-node",children:[{value:"Kebutuhan Administrasi",id:"kebutuhan-administrasi",children:[]},{value:"Kebutuhan Aplikasi",id:"kebutuhan-aplikasi",children:[]},{value:"Instalasi",id:"instalasi",children:[]},{value:"Konfigurasi",id:"konfigurasi",children:[]},{value:"Eksekusi",id:"eksekusi",children:[]}]}],s={rightToc:o};function c(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"pekerja-v2"},"Pekerja V2"),Object(i.a)("p",null,"Kategori: Infrastruktur/PabrikPaket/PekerjaV2"),Object(i.a)("h2",{id:"irgsh-node"},"irgsh-node"),Object(i.a)("p",null,"irgsh-node adalah pabrik pekerja dalam infrastruktur \u200bpabrik_paket BlankOn."),Object(i.a)("h3",{id:"kebutuhan-administrasi"},"Kebutuhan Administrasi"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Sertifikat SSL untuk pabrik paket, ditandatangani oleh CA Irgsh BlankOn."),Object(i.a)("li",{parentName:"ol"},"Kunci SSH."),Object(i.a)("li",{parentName:"ol"},"Akun di \u200bIrgsh yg dapat diperoleh dengan melampirkan:",Object(i.a)("ol",{parentName:"li"},Object(i.a)("li",{parentName:"ol"},"Judul sertifikat SSL"),Object(i.a)("li",{parentName:"ol"},"Kunci publik SSH"),Object(i.a)("li",{parentName:"ol"},"Nama pabrik"),Object(i.a)("li",{parentName:"ol"},"Arsitektur pabrik")))),Object(i.a)("h3",{id:"kebutuhan-aplikasi"},"Kebutuhan Aplikasi"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"$ sudo apt-get install python dput pbuilder git-core")),Object(i.a)("h3",{id:"instalasi"},"Instalasi"),Object(i.a)("h4",{id:"mendapatkan-kode-sumber"},"Mendapatkan kode sumber"),Object(i.a)("p",null,"Kode sumber akan diambil langsung dari repositori di GitHub?."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"$ git clone git://github.com/BlankOn/python-irgsh.git\n$ git clone git://github.com/BlankOn/irgsh-node.git\n$ cd irgsh-node\n$ ln -s ../python-irgsh/irgsh\n")),Object(i.a)("h4",{id:"menyiapkan-irgsh-node"},"Menyiapkan irgsh-node"),Object(i.a)("p",null,"Instalasi irgsh-node akan disiapkan oleh skrip \u200bBuildout yang disertakan.\nPustaka Python lain yang dibutuhkan akan otomatis diunduh oleh Buildout."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"$ cd irgsh-node\n$ python bootstrap.py\n$ ./bin/buildout\n")),Object(i.a)("h3",{id:"konfigurasi"},"Konfigurasi"),Object(i.a)("h4",{id:"irgsh-node-1"},"irgsh-node"),Object(i.a)("p",null,"Sunting berkas irgsh-node.conf dan atur nilai-nilai berikut."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"irgsh",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"node-name berisi nama pabrik, sesuai yang didaftarkan ke \u200bIrgsh."),Object(i.a)("li",{parentName:"ul"},"arch berisi arsitektur pabrik, misalnya i386 atau amd64."),Object(i.a)("li",{parentName:"ul"},"ssl-cert berisi path menuju berkas sertifikat SSL."),Object(i.a)("li",{parentName:"ul"},"ssl-key berisi path menuju berkas kunci privat SSL.")))),Object(i.a)("h4",{id:"ssh"},"SSH"),Object(i.a)("p",null,"Sunting berkas ~/.ssh/config dan tambahkan isian berikut."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"Host rani.blankonlinux.or.id\n    HostName rani.blankonlinux.or.id\n    Port 2222\n    IdentityFile /path/menuju/kunci/privat/ssh.key\n")),Object(i.a)("h4",{id:"sudo"},"sudo"),Object(i.a)("p",null,"Pastikan pengguna yang menjalankan irgsh-node dapat memanggil ",Object(i.a)("inlineCode",{parentName:"p"},"/usr/sbin/pbuilder")," dengan sudo tanpa dimintai kata kunci. Contoh isi ",Object(i.a)("inlineCode",{parentName:"p"},"/etc/sudoers")," (sunting dengan visudo)."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"pabrik ALL=NOPASSWD: /usr/sbin/pbuilder\n")),Object(i.a)("h3",{id:"eksekusi"},"Eksekusi"),Object(i.a)("p",null,"Ada dua buah aplikasi yang perlu dijalankan: pabrik irgsh-node dan pengunggah irgsh-uploader."),Object(i.a)("h4",{id:"pabrik"},"Pabrik"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"$ cd irgsh-node\n$ ./bin/irgsh-node\n")),Object(i.a)("h4",{id:"pengunggah"},"Pengunggah"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-$",metastring:"cd irgsh-node",cd:!0,"irgsh-node":!0}),"$ ./bin/irgsh-uploader\n")))}c.isMDXComponent=!0}}]);