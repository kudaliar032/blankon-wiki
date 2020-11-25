(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1047:function(a,n,e){"use strict";e.d(n,"a",(function(){return s}));var t=e(0),i=e.n(t);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function u(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function k(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function p(a,n){if(null==a)return{};var e,t,i=function(a,n){if(null==a)return{};var e,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||(i[e]=a[e]);return i}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var l=i.a.createContext({}),m=function(a){var n=i.a.useContext(l),e=n;return a&&(e="function"==typeof a?a(n):k(k({},n),a)),e},o={inlineCode:"code",wrapper:function(a){var n=a.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(a,n){var e=a.components,t=a.mdxType,r=a.originalType,u=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),g=m(e),s=t,d=g["".concat(u,".").concat(s)]||g[s]||o[s]||r;return e?i.a.createElement(d,k(k({ref:n},l),{},{components:e})):i.a.createElement(d,k({ref:n},l))}));function s(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var r=e.length,u=new Array(r);u[0]=g;var k={};for(var p in n)hasOwnProperty.call(n,p)&&(k[p]=n[p]);k.originalType=a,k.mdxType="string"==typeof a?a:t,u[1]=k;for(var l=2;l<r;l++)u[l]=e[l];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,e)}g.displayName="MDXCreateElement"},225:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return u})),e.d(n,"metadata",(function(){return k})),e.d(n,"rightToc",(function(){return p})),e.d(n,"default",(function(){return m}));var t=e(3),i=e(7),r=(e(0),e(1047)),u={},k={unversionedId:"TimPengembang/Dokumentasi/Kelas/BlankOnUjiPenetrasi",id:"TimPengembang/Dokumentasi/Kelas/BlankOnUjiPenetrasi",isDocsHomePage:!1,title:"BlankOnUjiPenetrasi",description:"Pengantar BlankOn Uji Penetrasi",source:"@site/Wiki/TimPengembang/Dokumentasi/Kelas/BlankOnUjiPenetrasi.md",slug:"/TimPengembang/Dokumentasi/Kelas/BlankOnUjiPenetrasi",permalink:"/TimPengembang/Dokumentasi/Kelas/BlankOnUjiPenetrasi",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Kelas/BlankOnUjiPenetrasi.md",version:"current"},p=[],l={rightToc:p};function m(a){var n=a.components,e=Object(i.a)(a,["components"]);return Object(r.a)("wrapper",Object(t.a)({},l,e,{components:n,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"pengantar-blankon-uji-penetrasi"},"Pengantar BlankOn Uji Penetrasi"),Object(r.a)("p",null,"(",Object(r.a)("strong",{parentName:"p"},"Pembicara:")," ",Object(r.a)("em",{parentName:"p"},"Aji Kisworo Mukti"),")"),Object(r.a)("p",null,'Sebelumnya, apakah yang hadir di sini fokus terhadap pengujian penetrasi? Bekerjakah? Belajarkah? Apa latar belakang ingin belajar? Tahu maksud "Security Testing"? Untuk apa? Oke, cukup tanyanya. Bapak-bapak, perlu diketahui saya bukan peretas. Saya hanya sedikit tahu tentang pengujian keamanan. Jadi nanti apabila ada yang kurang, silakan ditambahkan. Apa pentingnya menguji dan mengapa harus menguji? Pentingnya menguji karena kita tidak harus menunggu seseorang untuk melaporkan masalah dan menunggu orang lain membuat pengujian yang bukan haknya. Ketika kita meninggalkan rumah untuk berlibur, apakah kita menunggu sampai kita kembali untuk memastikan pintu benar-benar telah terkunci? Tentu saja tidak. Kita mengunci pintu dan mengguncangkan daun pintu untuk memastikan itu terkunci. Kalau kita menunggu sampai kita kembali, kita harus melihat apakah ada yang hilang. Kalau ada, itu akan memakan waktu "audit" lebih lama daripada menguji dan memastikan bahwa pintu terkunci. Atau apakah kita harus menunggu satpam kompleks melaporkan ada kehilangan di rumah kita? Itu jawaban dari: Apa pentingnya menguji dan mengapa harus menguji? Bertele-tele ya, Bapak-bapak? Biar saja, yang penting "maksud" dari kita belajar akan lebih terarah.'),Object(r.a)("p",null,'Kedua, jangan meremehkan pentingnya kebijakan keamanan dalam bentuk apa pun. Ada yang mengerti dengan kebijakan keamanan? Kalau bahasa Sanskerta-nya, itu "Security Policy". Bagaimana membangun kebijakan keamanan? Contoh, Bapak-bapak bisa baca pada RFC1244 dan RFC1281. Jadi intinya kebijakan keamanan adalah "Yang tidak diizinkan dilarang". Untuk apa itu? Apa yang mereka dapat adalah apa yang Anda berikan. Mereka itu adalah yang menggunakan layanan kita, jika berupa layanan. Maka, sistem yang sangat powerful berarti akan ada banyak potensi untuk beradaptasi, mengonfigurasi tugas-tugas, dan menguji yang kita butuhkan. (Powerful = Full Power). Oke, sepertinya pendahuluannya cukup.'),Object(r.a)("p",null,"Apa yang harus dilakukan untuk memulai menguji? Pertama mengumpulkan informasi tentang target. Target bisa berupa apa saja: sistem, situs, aplikasi, kode, berkas digital. ",Object(r.a)("inlineCode",{parentName:"p"},"<za>")," Setiap target umumnya mempunyai metodologi yang sama. Nah, ngomong-ngomong metodologi, ada yang namanya Open Source Security Testing Methodology. Silakan Bapak-bapak jadikan bahan bacaan."),Object(r.a)("p",null,"Nah, sekarang ",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"(/wiki/BlankOn.md)"}),"Blankon")," Uji Penetrasi (Upen) untuk apa? Untuk melakukan pengujian yang punya alur tadi, kita butuh tool: \u200b",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"http://tools.securitytube.net/index.php?title=Main_Page"}),"http://tools.securitytube.net/index.php?title=Main_Page"),". Bisa dilihat. Nah tugas kita nanti adalah menguji tool penguji dan memaketkannya. Itu jadi tugas kita nanti: menguji, memaketkan, dan mendokumentasikan perangkat penguji. Maka jadilah ",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/BlankOn"}),"BlankOn")," Upen. Harus disertai dokumentasi yang bagus. Tanpa dokumentasi yang baik tentang bagaimana cara menguji menggunakan ",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/BlankOn"}),"BlankOn")," Upen, saya anggap belum sampai tujuan, karena diragukan, itu tool dicoba tidak... Jangan-jangan cuma asal dipaketkan dan dimasukkan, lalu dibuat ISO CD dan jadi Upen. Karena yang terpenting dari kita di awal tadi adalah....apa Bapak-bapak? BELAJAR. Nah, mengenai apa bentuk tool-nya nanti bisa diperhatikan. Mungkin akan kebanyakan tool berbasis CLI. Jadi sudah paham Bapak-bapak maksud dan tujuan ",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/BlankOn"}),"BlankOn")," Upen? Adapun nanti disalahgunakan, itu di luar tanggung jawab kita. :D"),Object(r.a)("p",null,"Nah, nanti ",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"(/wiki/BlankOn.md)"}),"BlankOn"),' Upen harus punya "Panduan" sendiri mengenai detail pentest. Setuju? Sekarang, kita mulai dari mana? Siapa yang akan mengerjakan? Bapak-bapak siap? Kalau tidak, kita batal. Kalau Bapak-bapak siap, akan kita buat Tim Racikan Upen, dengan seizin Manajer Rilis, untuk mengurusi Panduan dan Paket Upen seperti Sajadah. Oke, silakan Bapak-bapak yang siap mendaftar di milis blankon-dev sebagai pemaket, dan bilang akan ikut memaketkan ',Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/BlankOn"}),"BlankOn")," Upen."),Object(r.a)("p",null,"Catatan:"),Object(r.a)("p",null," 1.Hadir pada saat kuliah Zaki Akhmad, Ketua OWASP Indonesia ",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"https://www.owasp.org/index.php/Indonesia"}),"OWASP")),Object(r.a)("p",null," 2.Terjemahan Prosedur Testing OWASP ",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"https://www.owasp.org/index.php/File:OWASP_Top_10_-_2010_FINAL_Indonesia_v1.0.1.pdf"}),"OWASP-Top-10")),Object(r.a)("hr",null))}m.isMDXComponent=!0}}]);