(window.webpackJsonp=window.webpackJsonp||[]).push([[602],{1047:function(a,e,n){"use strict";n.d(e,"a",(function(){return d}));var t=n(0),r=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function o(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function u(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var p=r.a.createContext({}),b=function(a){var e=r.a.useContext(p),n=e;return a&&(n="function"==typeof a?a(e):o(o({},e),a)),n},k={inlineCode:"code",wrapper:function(a){var e=a.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,l=a.parentName,p=u(a,["components","mdxType","originalType","parentName"]),m=b(n),d=t,s=m["".concat(l,".").concat(d)]||m[d]||k[d]||i;return n?r.a.createElement(s,o(o({ref:e},p),{},{components:n})):r.a.createElement(s,o({ref:e},p))}));function d(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=a,o.mdxType="string"==typeof a?a:t,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},669:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return o})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return b}));var t=n(3),r=n(7),i=(n(0),n(1047)),l={},o={unversionedId:"TimPengembang/Pemaket/PanduanPaketKhasBlankOnWallpapers",id:"TimPengembang/Pemaket/PanduanPaketKhasBlankOnWallpapers",isDocsHomePage:!1,title:"PanduanPaketKhasBlankOnWallpapers",description:"PANDUAN PEMAKETAN BLANKON WALLPAPERS MENGGUNAKAN KOMPUTER LOKAL",source:"@site/Wiki/TimPengembang/Pemaket/PanduanPaketKhasBlankOnWallpapers.md",slug:"/TimPengembang/Pemaket/PanduanPaketKhasBlankOnWallpapers",permalink:"/TimPengembang/Pemaket/PanduanPaketKhasBlankOnWallpapers",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/PanduanPaketKhasBlankOnWallpapers.md",version:"current"},u=[],p={rightToc:u};function b(a){var e=a.components,n=Object(r.a)(a,["components"]);return Object(i.a)("wrapper",Object(t.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"panduan-pemaketan-blankon-wallpapers-menggunakan-komputer-lokal"},"PANDUAN PEMAKETAN BLANKON WALLPAPERS MENGGUNAKAN KOMPUTER LOKAL"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Sebelum melakukan pemaketan BlankOn Wallapers silahkan persiapkan\nalatnya. Bisa dibaca di Wiki atau \u200bBuku_Panduan_Pemaketan. Pada proses\npersiapan alat, baca panduan sampai pada pembuatan kunci."),Object(i.a)("li",{parentName:"ol"},"Buka terminal, buat folder Paket di home dan masuk ke folder Paket/\ndengan ketik perintah\n$mkdir Paket/\n$cd Paket/\ndan kemudian ketik\n$bzr branch ",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/blankon-wallpapers"}),"http://dev.blankonlinux.or.id/browser/tambora/blankon-wallpapers"),"\nuntuk mengunduh folder kode sumber dari blankon-wallpapers dari bzr BlankOn.\n","[No",Object(i.a)("em",{parentName:"li"},"image"),'"#"_attached_to_Pemaket/PanduanPaketKhasBlankOnWallpapers]'),Object(i.a)("li",{parentName:"ol"},"Di folder Paket, masuk ke folder blankon-wallpapers, apabila melakukan\nperubahan pada kode sumber silahkan lakukan perubahan sesuai dengan\nkebutuhan. Kemudian ketik\n$dch -i\ndi dalam direktori blankon-wallpapers. Sesuaikan dengan kebutuhan mulai dari\npemversian, komen, nama dan email anda."),Object(i.a)("li",{parentName:"ol"},"Untuk versi\no 1.33 adalah versi upstream (akan berubah versi setiap upstream\nmerilis versi terbaru)\no -0 adalah versi dari debian\no blankon1 adalah versi yang digunakan blankon, apabila ada\npenambahan patch maka versi akan naik."),Object(i.a)("li",{parentName:"ol"},"Pada berkas format difolder debian/source isikan 3.0 (native)"),Object(i.a)("li",{parentName:"ol"},"Lakukan\n$debuild -S"),Object(i.a)("li",{parentName:"ol"},"Ketik\n$cd ..\n$sudo pbuilder build namapaket.dsc"),Object(i.a)("li",{parentName:"ol"},"Untuk melihat hasil pemaketan berupa file dapat dilihat di cd /var/cache/\npbuilder/result/"),Object(i.a)("li",{parentName:"ol"},"Selanjutnya bisa dilanjutkan ke IRSGH.\nPEMAKETAN DI IRGSH"),Object(i.a)("li",{parentName:"ol"},"Ketik\n$bzr branch ",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/blankon-"}),"http://dev.blankonlinux.or.id/browser/tambora/blankon-"),"\nwallapers\nuntuk mengunduh kode sumber dari blankon-walllpapers dari bzr BlankOn."),Object(i.a)("li",{parentName:"ol"},"Masuk ke folder blankon-wallpapers dan apabila melakukan perubahan pada\nkode sumber silahkan lakukan perubahan sesuai dengan kebutuhan. Kemudian\nketik\n$dch -i\ndi dalam direktori blankon-avatar. Sesuaikan dengan kebutuhan mulai dari\npemversian, komen, nama dan email anda.\nUntuk versi")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Kirim berkas blankon-wallpapers ke bzr\n$bzr init (apabila belum ada folder .bzr atau belom dilakukan initiasi\nbzr)\n$bzr add *\n$bzr commit -m \u201cisikan pesan perubahan\u201d\n$bzr push bzr+ssh://",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"mailto:bzr@dev.blankonlinux.or.id"}),"bzr@dev.blankonlinux.or.id"),":2222/bzr/tambora/nama-\npaket\n","[No",Object(i.a)("em",{parentName:"li"},"image"),'"irgsh.png"_attached_to_Pemaket/PanduanPaketKhasBlankOnWallpapers]'),Object(i.a)("li",{parentName:"ol"},"Buka IRGSH \u200b",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"http://irgsh.blankonlinux.or.id"}),"http://irgsh.blankonlinux.or.id"),", login menggunakan akun\naku.blankonlinux.or.id anda (hubungi system adminitrator untuk\nmendaftarkan akun anda sebagai team pemaket).\n","[No",Object(i.a)("em",{parentName:"li"},"image"),'"login.png"_attached_to_Pemaket/PanduanPaketKhasBlankOnWallpapers]',"\nKlik Login"),Object(i.a)("li",{parentName:"ol"},"Klik New Build, maka akan muncul halaman Submit Build job\n","[No",Object(i.a)("em",{parentName:"li"},"image"),'"build.png"_attached_to_Pemaket/PanduanPaketKhasBlankOnWallpapers]',"\n6, Isikan")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"* Distribution = Tambora (sesuai dengan nama kode rilis).\n* Source URL = Alamat source yang ada di bzr blankon.\n* Source Type = Bazar repository\n* Source Option = Last version\n* Original Source = Alamat source code upstream bisa dari github ataupun\n  akun pendekar (file berbentuk .tar.gz)\n* Additional Original Source = menambahkan source code upstream jika\n  diperlukan.\n")),Object(i.a)("p",null,"[No",Object(i.a)("em",{parentName:"p"},"image"),'"submit.png"_attached_to_Pemaket/PanduanPaketKhasBlankOnWallpapers]',"\n7.Klik Submit\nLast_modified 7 months ago Last modified on 10/11/2016 01:55:05 PM"),Object(i.a)("h4",{id:""}),Object(i.a)("hr",null))}b.isMDXComponent=!0}}]);