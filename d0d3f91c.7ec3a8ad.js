(window.webpackJsonp=window.webpackJsonp||[]).push([[807],{1047:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var i=n(0),t=n.n(i);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=t.a.createContext({}),b=function(e){var a=t.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},s=t.a.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=b(n),m=i,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return n?t.a.createElement(d,p(p({ref:a},c),{},{components:n})):t.a.createElement(d,p({ref:a},c))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<r;c++)l[c]=n[c];return t.a.createElement.apply(null,l)}return t.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},874:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return p})),n.d(a,"rightToc",(function(){return o})),n.d(a,"default",(function(){return b}));var i=n(3),t=n(7),r=(n(0),n(1047)),l={},p={unversionedId:"TimPengembang/Pemaket/SpesifikasiPaketDebian",id:"TimPengembang/Pemaket/SpesifikasiPaketDebian",isDocsHomePage:!1,title:"SpesifikasiPaketDebian",description:"Spesifikasi Paket Debian",source:"@site/Wiki/TimPengembang/Pemaket/SpesifikasiPaketDebian.md",slug:"/TimPengembang/Pemaket/SpesifikasiPaketDebian",permalink:"/TimPengembang/Pemaket/SpesifikasiPaketDebian",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/SpesifikasiPaketDebian.md",version:"current"},o=[{value:"changelog",id:"changelog",children:[]},{value:"compat",id:"compat",children:[]},{value:"control",id:"control",children:[]},{value:"copyright",id:"copyright",children:[]},{value:"install",id:"install",children:[]},{value:"rules",id:"rules",children:[]}],c={rightToc:o};function b(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(r.a)("wrapper",Object(i.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"spesifikasi-paket-debian"},"Spesifikasi Paket Debian"),Object(r.a)("p",null,"Halaman ini menjelaskan tentang spesifikasi paket Debian yang didefinisikan dalam source tree bernama ",Object(r.a)("inlineCode",{parentName:"p"},"debian")," (lihat ",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/blankon-packages"}),"https://github.com/blankon-packages"),"). Setiap perangkat lunak yang akan dipaketkan perlu setidaknya memiliki direktori ",Object(r.a)("inlineCode",{parentName:"p"},"debian")," ini. Jika belum ada di ",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/blankon-packages"}),"https://github.com/blankon-packages"),", silakan dibuatkan lumbung kodenya."),Object(r.a)("h3",{id:"changelog"},"changelog"),Object(r.a)("p",null,"Berkas ",Object(r.a)("inlineCode",{parentName:"p"},"changelog")," mengandung riwayat pemeliharaan paket. Setiap paket diperbarui atau ditambal, berkas ini perlu diperbarui. Setiap item pembaruannya mengandung minimal baris-baris berikut."),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{}),"hai (0.0.1-1) unstable; urgency=medium\n  * Initial release!\n -- Herpiko Dwi Aguno <herpiko@aguno.xyz>  Fri, 06 Nov 2020 12:08:30 +0000\n")),Object(r.a)("p",null,"Penjelasan:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"hai")," - nama paket"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"(0.0.1-1)")," - versi paket. Bila item riwayat ditambah, versi ini perlu dinaikkan. Mengenai versi paket, silakan mengacu ke ",Object(r.a)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/PenomoranVersi.md"}),"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/PenomoranVersi.md"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"urgency=medium")," - urgensi paket, apakah sifatnya segera untuk dimasukkan ke dalam lumbung paket. Jenis pembaruan yang urgensinya tinggi contohnya tambalan lubang keamanan."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Initial release!")," - Deskripsi yang menjelaskan tentang pembaruan yang dilakukan"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Herpiko Dwi Aguno <herpiko@aguno.xyz>")," - Identitas pemelihara paket"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Fri, 06 Nov 2020 12:08:30 +0000")," - Waktu pembaruan paket")),Object(r.a)("h3",{id:"compat"},"compat"),Object(r.a)("p",null,"Kompatibilitas dengan debhelper (saat halaman ini disunting, versi terbarunya adalah 12). Di protokol yang lebih baru, berkas ini dipindah ke ",Object(r.a)("inlineCode",{parentName:"p"},"control"),", ",Object(r.a)("inlineCode",{parentName:"p"},"bagian Build-Depends"),"."),Object(r.a)("h3",{id:"control"},"control"),Object(r.a)("p",null,"Informasi metadata dari paket yang nantinya akan dikonsumsi oleh dpkg, apt-get, aptitude, apt dan sebagainya."),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{}),"Source: hai\nSection: unknown\nPriority: optional\nMaintainer: Herpiko Dwi Aguno <herpiko@aguno.xyz>\nBuild-Depends: debhelper-compat (= 12)\nStandards-Version: 0.0.1\nHomepage: https://dev.blankonlinux.or.id\n\nPackage: hai\nArchitecture: any\nDepends: ${shlibs:Depends}, ${misc:Depends}\nDescription: Example program for debian packaging fundamental class.\n")),Object(r.a)("p",null,"Penjelasan:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Source")," - nama paket"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Section")," - Seksi/bagian paket. Misal jika paket ini adalah satu dari kumpulan besar paket-paket yang saling bergantung, misalnya Gnome, dapat diberi nilai ",Object(r.a)("inlineCode",{parentName:"li"},"gnome"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Priority")," - ?",Object(r.a)("a",Object(i.a)({parentName:"li"},{href:"https://www.debian.org/doc/debian-policy/"}),"https://www.debian.org/doc/debian-policy/")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Maintainer")," - Identitas pemelihara paket."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Build-Depends")," - Dependensi pembangunan paket (bukan dependensi paket saat sudah jadi dan digunakan oleh pengguna akhir)"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Standars-Version")," - Protokol pemaketan Debian yang diikuti oleh berkas spesifikasi ini (liha",Object(r.a)("a",Object(i.a)({parentName:"li"},{href:"https://www.debian.org/doc/debian-policy/t"}),"https://www.debian.org/doc/debian-policy/t")," ",Object(r.a)("a",Object(i.a)({parentName:"li"},{href:"https://www.debian.org/doc/debian-policy/"}),"https://www.debian.org/doc/debian-policy/"),")"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Homepage")," - alamat proyek hulu"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Package")," - nama paket"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Architecture")," - arsitektur mesin yang didukung"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Depends")," - Dependensi paket saat sudah jadi dan digunakan oleh pengguna akhir."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Description")," - Deskripsi yang menjelaskan tentang paket")),Object(r.a)("p",null,"Dalam perawatan berkas ini, nama pemelihara asli (original maintainer) tetap dilampirkan, tapi nama kolomnya diganti. Contoh,"),Object(r.a)("p",null,"Asli:"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{}),"Maintainer: Santiago Vila <sanvila@debian.org>\n")),Object(r.a)("p",null,"Pembaruan:"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{}),"Maintainer: Nama Pendekar <namapendekar@blankon.in>\nXSBC-Original-Maintainer: Si Fulan <fulan@proyekhulu.org>\n")),Object(r.a)("p",null,"Contoh nyata: ",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/blankon-packages/base-files/blob/master/debian/control#L5"}),"https://github.com/blankon-packages/base-files/blob/master/debian/control#L5")),Object(r.a)("p",null,"Referensi:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(i.a)({parentName:"li"},{href:"https://wiki.ubuntu.com/UbuntuDevelopment/FAQ"}),"https://wiki.ubuntu.com/UbuntuDevelopment/FAQ"))),Object(r.a)("h3",{id:"copyright"},"copyright"),Object(r.a)("p",null,"Lisensi dari perangkat lunak yang dipaketkan. Jika perangkat lunak berlisensi A, maka lisensi A perlu dimasukkan ke sini. Tidak boleh hulu lisensinya A, namun di sini ditulis B."),Object(r.a)("h3",{id:"install"},"install"),Object(r.a)("p",null,"Untuk berkas/direktori yang tidak dipasang oleh \u2018make install\u2019 dapat didaftarkan ke sini supaya dapat terpasang ke sistem\nPola berikut akan membawa berkas binari ",Object(r.a)("inlineCode",{parentName:"p"},"src/bar")," ke direktori ",Object(r.a)("inlineCode",{parentName:"p"},"/usr/bin/"),"."),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{}),"src/bar /usr/bin\n")),Object(r.a)("h3",{id:"rules"},"rules"),Object(r.a)("p",null,"?"),Object(r.a)("p",null,"TODO: perlu penjelasan lebih lanjut"),Object(r.a)("h3",{id:""}))}b.isMDXComponent=!0}}]);