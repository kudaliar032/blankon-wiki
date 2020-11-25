(window.webpackJsonp=window.webpackJsonp||[]).push([[969],{1038:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return k}));var t=n(3),r=n(7),i=(n(0),n(1047)),o={},l={unversionedId:"TimPengembang/Pemaket/PanduanPaketKhasManokwari",id:"TimPengembang/Pemaket/PanduanPaketKhasManokwari",isDocsHomePage:!1,title:"PanduanPaketKhasManokwari",description:"PANDUAN PEMAKETAN MANOKWARI MENGGUNAKAN KOMPUTER LOKAL",source:"@site/Wiki/TimPengembang/Pemaket/PanduanPaketKhasManokwari.md",slug:"/TimPengembang/Pemaket/PanduanPaketKhasManokwari",permalink:"/TimPengembang/Pemaket/PanduanPaketKhasManokwari",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/PanduanPaketKhasManokwari.md",version:"current"},u=[],m={rightToc:u};function k(a){var e=a.components,n=Object(r.a)(a,["components"]);return Object(i.a)("wrapper",Object(t.a)({},m,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"panduan-pemaketan-manokwari-menggunakan-komputer-lokal"},"PANDUAN PEMAKETAN MANOKWARI MENGGUNAKAN KOMPUTER LOKAL"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Sebelum melakukan pemaketan Manokwari silahkan persiapkan alatnya. Bisa\ndibaca di Wiki atau \u200bBuku_Panduan_Pemaketan. Pada proses persiapan alat,\nbaca panduan sampai pada pembuatan kunci."),Object(i.a)("li",{parentName:"ol"},"Unduh source code upstream manokwari di github yang sudah dirilis oleh\nteam riset. Masuk ke \u200b",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/BlankOn/manokwari"}),"https://github.com/BlankOn/manokwari")," => Klik\nRelease\n","[No",Object(i.a)("em",{parentName:"li"},"image"),'"#"_attached_to_Pemaket/PanduanPaketKhasManokwari]',"\nPada halaman release, pilih versi yang ingin dipaketkan dan unduh berkas\nsourcenya dengan ektensi .tar.gz\n","[No",Object(i.a)("em",{parentName:"li"},"image"),'"#"_attached_to_Pemaket/PanduanPaketKhasManokwari]'),Object(i.a)("li",{parentName:"ol"},"Buka terminal, buat folder Paket di home dan masuk ke folder Paket/\ndengan ketik perintah\n$mkdir Paket/\n$cd Paket/\ndan kemudian ketik\n$bzr branch ",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/manokwari"}),"http://dev.blankonlinux.or.id/browser/tambora/manokwari"),"\nuntuk mengunduh folder debian dari Manokwari dari bzr BlankOn.\n","[No",Object(i.a)("em",{parentName:"li"},"image"),'"#"_attached_to_Pemaket/PanduanPaketKhasManokwari]'),Object(i.a)("li",{parentName:"ol"},"Taruh berkas .tar.gz di folder /Paket dan ektraks berkas .tar.gz dari\nblankon-installer."),Object(i.a)("li",{parentName:"ol"},"Di folder Paket, masuk ke folder manokwari, ketik\n$dch -i\nlalu sesuaikan dengan kebutuhan mulai dari pemversian, komen, nama dan email\nanda.\nUntuk versi")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Pada berkas format difolder debian/source isikan 3.0 (quilt)"),Object(i.a)("li",{parentName:"ol"},"Lakukan\n$debuild -S"),Object(i.a)("li",{parentName:"ol"},"Ketik\n$cd ..\n$sudo pbuilder build namapaket.dsc"),Object(i.a)("li",{parentName:"ol"},"Untuk melihat hasil pemaketan berupa file dapat dilihat di cd /var/cache/\npbuilder/result/"),Object(i.a)("li",{parentName:"ol"},"Selanjutnya bisa dilanjutkan ke IRSGH.")),Object(i.a)("p",null,"PEMAKETAN DI IRGSH"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Ketik\n$bzr branch ",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/manokwari"}),"http://dev.blankonlinux.or.id/browser/tambora/manokwari"),"\nuntuk mengunduh folder debian dari BlankOn-installer dari bzr BlankOn."),Object(i.a)("li",{parentName:"ol"},"Masuk ke folder blankon-installer dan lakukan pemversian. Ketik\n$dch -i\nlalu sesuaikan dengan kebutuhan mulai dari pemversian, komen, nama dan email\nanda. Untuk versi")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Kirim berkas blankon-installer ke bzr\n$bzr init (apabila belum ada folder .bzr atau belom dilakukan initiasi\nbzr)\n$bzr add *\n$bzr commit -m \u201cisikan pesan perubahan\u201d\n$bzr push bzr+ssh://",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"mailto:bzr@dev.blankonlinux.or.id"}),"bzr@dev.blankonlinux.or.id"),":2222/bzr/tambora/nama-\npaket\n","[No",Object(i.a)("em",{parentName:"li"},"image"),'"irgsh.png"_attached_to_Pemaket/PanduanPaketKhasManokwari]'),Object(i.a)("li",{parentName:"ol"},"Buka IRGSH \u200b",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"http://irgsh.blankonlinux.or.id"}),"http://irgsh.blankonlinux.or.id"),", login menggunakan akun\naku.blankonlinux.or.id anda (hubungi system adminitrator untuk\nmendaftarkan akun anda sebagai team pemaket).\n","[No",Object(i.a)("em",{parentName:"li"},"image"),'"login.png"_attached_to_Pemaket/PanduanPaketKhasManokwari]',"\nKlik Login"),Object(i.a)("li",{parentName:"ol"},"Klik New Build, maka akan muncul halaman Submit Build job\n","[No",Object(i.a)("em",{parentName:"li"},"image"),'"build.png"_attached_to_Pemaket/PanduanPaketKhasManokwari]',"\n6, Isikan")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"* Distribution = Tambora (sesuai dengan nama kode rilis).\n* Source URL = Alamat source yang ada di bzr blankon.\n* Source Type = Bazar repository\n* Source Option = Last version\n* Original Source = Alamat source code upstream bisa dari github ataupun\n  akun pendekar (file berbentuk .tar.gz)\n* Additional Original Source = menambahkan source code upstream jika\n  diperlukan.\n")),Object(i.a)("p",null,"[No",Object(i.a)("em",{parentName:"p"},"image"),'"submit.png"_attached_to_Pemaket/PanduanPaketKhasManokwari]',"\n7.Klik Submit"),Object(i.a)("p",null,"Last_modified 7 months ago Last modified on 10/11/2016 02:18:53 PM"),Object(i.a)("hr",null))}k.isMDXComponent=!0},1047:function(a,e,n){"use strict";n.d(e,"a",(function(){return c}));var t=n(0),r=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function u(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var m=r.a.createContext({}),k=function(a){var e=r.a.useContext(m),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},b={inlineCode:"code",wrapper:function(a){var e=a.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,o=a.parentName,m=u(a,["components","mdxType","originalType","parentName"]),d=k(n),c=t,p=d["".concat(o,".").concat(c)]||d[c]||b[c]||i;return n?r.a.createElement(p,l(l({ref:e},m),{},{components:n})):r.a.createElement(p,l({ref:e},m))}));function c(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=a,l.mdxType="string"==typeof a?a:t,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);