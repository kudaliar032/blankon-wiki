(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{1047:function(a,n,e){"use strict";e.d(n,"a",(function(){return d}));var i=e(0),t=e.n(i);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function s(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,i)}return e}function u(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function k(a,n){if(null==a)return{};var e,i,t=function(a,n){if(null==a)return{};var e,i,t={},r=Object.keys(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(t[e]=a[e]);return t}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(t[e]=a[e])}return t}var g=t.a.createContext({}),l=function(a){var n=t.a.useContext(g),e=n;return a&&(e="function"==typeof a?a(n):u(u({},n),a)),e},m={inlineCode:"code",wrapper:function(a){var n=a.children;return t.a.createElement(t.a.Fragment,{},n)}},p=t.a.forwardRef((function(a,n){var e=a.components,i=a.mdxType,r=a.originalType,s=a.parentName,g=k(a,["components","mdxType","originalType","parentName"]),p=l(e),d=i,o=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return e?t.a.createElement(o,u(u({ref:n},g),{},{components:e})):t.a.createElement(o,u({ref:n},g))}));function d(a,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof a||i){var r=e.length,s=new Array(r);s[0]=p;var u={};for(var k in n)hasOwnProperty.call(n,k)&&(u[k]=n[k]);u.originalType=a,u.mdxType="string"==typeof a?a:i,s[1]=u;for(var g=2;g<r;g++)s[g]=e[g];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},422:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return s})),e.d(n,"metadata",(function(){return u})),e.d(n,"rightToc",(function(){return k})),e.d(n,"default",(function(){return l}));var i=e(3),t=e(7),r=(e(0),e(1047)),s={},u={unversionedId:"TimPengembang/Dokumentasi/Kelas/PenerjemahanAplikasi",id:"TimPengembang/Dokumentasi/Kelas/PenerjemahanAplikasi",isDocsHomePage:!1,title:"PenerjemahanAplikasi",description:"Tata Cara Penerjemahan Aplikasi (Berkas PO)",source:"@site/Wiki/TimPengembang/Dokumentasi/Kelas/PenerjemahanAplikasi.md",slug:"/TimPengembang/Dokumentasi/Kelas/PenerjemahanAplikasi",permalink:"/TimPengembang/Dokumentasi/Kelas/PenerjemahanAplikasi",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Kelas/PenerjemahanAplikasi.md",version:"current"},k=[],g={rightToc:k};function l(a){var n=a.components,e=Object(t.a)(a,["components"]);return Object(r.a)("wrapper",Object(i.a)({},g,e,{components:n,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"tata-cara-penerjemahan-aplikasi-berkas-po"},"Tata Cara Penerjemahan Aplikasi (Berkas PO)"),Object(r.a)("p",null,"(",Object(r.a)("strong",{parentName:"p"},"Pembicara:")," Romi Hardiyanto)"),Object(r.a)("p",null,'Pertama-tama, perkenalan dulu, saya Romi, dulu dan sampai sekarang penerjemah aplikasi Firefox (dan segala tetek bengeknya), masih mrogram sampai sekarang :). Malam ini bagian kedua dari lokakarya yang kemarin \u200bLokakarya 1. Kalau yang pertama mengurusi bagaimana cara menerjemahkan lewat Transifex, yang sekarang menerjemahkan string-nya yang jadi topik. Pertama-tama apa sih tujuan penerjemahan aplikasi itu? Ada yang mau jawab? Baik, ya setuju banget sama mijortsa, untuk memudahkan pengguna. Perlu diingat bahwa nggak semua orang pinter bahasa Inggris. Sebenarnya, mungkin semuanya sudah pada pintar-pintar pakai sistem operasi berbahasa Inggris, baik Linux, Windows, MacOSX, dll, tapi apa iya, kalau misalnya ada pesan kesalahan ("error message"), terus orang pada ngerti programnya sedang ngapain? Dan juga apa iya orang mau baca help/man/dokumentasi kalau ada kesalahan pada program? Nah, untuk itu program-program yang ada perlu diterjemahkan ke "bahasa yang dimengerti pengguna". Sebenarnya sih, kalau sekarang anak SD di kota besar dikasih komputer, entah pakai Windows, Linux, atau Mac, kayaknya udah langsung ngerti, tapi kan tidak semua tingkat pendidikan bahasa Inggris itu sama rata di seluruh Indonesia. Nah, jadi ya itu, penerjemahan aplikasi (dan segala tetek bengeknya) diperlukan agar pemakai mudah menjalankan aplikasi.'),Object(r.a)("p",null,"Sekarang kembali ke leptop... BlankOn, sebagai salah satu distribusi Linux, menggunakan aplikasi-aplikasi yang pada umumnya menggunakan berkas PO untuk infrastruktur penerjemahan. Berkas PO sendiri sebenarnya merupakan berkas Gettext, yang formatnya bisa dibaca di \u200b",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"http://www.gnu.org/s/hello/manual/gettext/PO-Files.html"}),"http://www.gnu.org/s/hello/manual/gettext/PO-Files.html"),". Intinya, pada berkas PO dicantumkan string-string yang akan digunakan pada aplikasi (misalnya pada Menu, Kotak Dialog, berkas Bantuan, dsb). Saya ambil contoh potongan berkas PO yang ada di URL di atas:"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{}),'#: lib/error.c:116\nmsgid "Unknown system error"\nmsgstr "Error desconegut del sistema"\n')),Object(r.a)("p",null,"Pada string tersebut dicantumkan:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"alamat baris pada kode sumber program,"),Object(r.a)("li",{parentName:"ul"},"msgid: identifier string yang akan diterjemahkan, biasanya dalam bahasa Inggris,"),Object(r.a)("li",{parentName:"ul"},"msgstr: terjemahan msgid dalam bahasa target.")),Object(r.a)("p",null,"Nah, jika teman-teman melihat Transifex di (misalnya): \u200b",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"http://i15n.blankonlinux.or.id/projects/p/transifex/resource/djangopo/l/id/view/"}),"http://i15n.blankonlinux.or.id/projects/p/transifex/resource/djangopo/l/id/view/"),', yang msgid itu yang di kolom "String Sumber", sedangkan msgstr itu dicantumkan di kolom "Terjemahan". Yah begitu pendahulan tentang format PO.'),Object(r.a)("p",null,"Nah, sekarang, berkas PO yang disertakan untuk ",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/BlankOn"}),"BlankOn")," apa aja? Bisa dilihat di: \u200b",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/browser/pattimura/pattimura-language-pack-id/data/id/LC_MESSAGES"}),"http://dev.blankonlinux.or.id/browser/pattimura/pattimura-language-pack-id/data/id/LC_MESSAGES"),". Ok, setelah tahu tujuan menerjemahkan apa, dan format berkas yang biasa digunakan di Linux apa, sekarang apa aja sih syarat menerjemahkan dengan baik? Kalau menurut pengalaman saya sih sebenarnya nggak ada yang istimewa:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},'Biasakan menggunakan Bahasa (sisipkan bahasa yang digunakan di sini) dengan baik dan "benar"'),Object(r.a)("li",{parentName:"ul"},"Punya referensi untuk rujukan"),Object(r.a)("li",{parentName:"ul"},"Mengerti string sumber")),Object(r.a)("p",null,'Kita bahas yang pertama ya. Kalau yang ini, mestinya kita semua bisa, tinggal baik dan "benar" itu yang kadang-kadang agak susah, guru kita misalnya, pernah mengajari X, ternyata sekarang yang dipakai Y. Asal kita nggak menerjemahkan ke bahasa 4l4y, kayaknya pasti hasilnya bisa dikatakan bisa dimengerti deh. Saya sendiri pernah menerjemahkan secara profesional (artinya dapat duit gitu :D), ternyata kesalahan umum pemula biasanya sepele: misalnya begini:"dikota ada banyak hal yang harus di kerjakan". Ada yang tahu salahnya apa? Ya benar, di+tempat itu harus dipisah, "di" yang menunjukkan kata kerja pasif disambung. Sederhana, tetapi tetap aja banyak yang salah.'),Object(r.a)("p",null,"Jadi untuk itulah kita perlu rujukan. Rujukannya apa aja sih? Ternyata di Internet sudah banyak: \u200b",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan"}),"http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan"),'. Ini penting, sesekali dibaca lengkap dan dimengerti. Banyak juga lho yang nggak tahu kalau penulisan "dan" dan "atau" itu harus didahului koma untuk penyebutan unsur ketiga, misalnya: bukan "padat, gas dan cair", tetapi: harusnya "padat, gas, dan cair". Penulisan garis miring, titik dua, tidak perlu didahului spasi, dsb, dsb. Aturan-aturan sepele yang kadang lupa. Nah selain pedoman penulisan, kita juga butuh kamus untuk menerjemahkan, bukan hanya kamus bahasa Inggris -> bahasa Indonesia, tetapi juga bahasa Indonesia -> bahasa Indonesia. Kalau kamus bahasa Inggris -> bahasa Indonesia banyak tersedia di internet: mulai dari translate.google.com, kamus.net, dll. Kadang-kadang butuh juga kamus Inggris-> Indonesia: \u200b',Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"http://books.google.com/books?id=hVo2ZDYbL6gC&lpg=PP1&dq=alan%20stevens&hl=id&pg=PR15#v=onepage&q&f=false"}),"http://books.google.com/books?id=hVo2ZDYbL6gC&lpg=PP1&dq=alan%20stevens&hl=id&pg=PR15#v=onepage&q&f=false"),". Eh kebalik, Indonesia -> Inggris maksudnya. Untuk kamus Indonesia-> Indonesia: bisa dipakai \u200b",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"http://kateglo.bahtera.org/?mod=dictionary"}),"http://kateglo.bahtera.org/?mod=dictionary"),"."),Object(r.a)("p",null,'Di dunia persilatan wilayah penerjemahan, biasanya referensi yang dipakai adalah KBBI. Dengan menggunakan kateglo.bahtera.org, kita bisa memastikan apakah ejaan kata yang kita pakai dalam penerjemahan sudah sesuai dengan KBBI apa belum, misalnya saja: ada yang tahu ejaan yang benar untuk terjemahan "authentication"? Menurut KBBI yang benar adalah "autentikasi", padahal kayaknya mirip-mirip antara "automatic" -> "otomatis" ya? Jadi harusnya "authentication" -> "otentikasi". Bisa dilihat di sini: \u200b',Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"http://kateglo.bahtera.org/?mod=dictionary&action=view&phrase=autentikasi"}),"http://kateglo.bahtera.org/?mod=dictionary&action=view&phrase=autentikasi"),". Oh iya, sebenarnya laman resmi KBBI bisa juga diakses di sini: \u200b",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"http://pusatbahasa.kemdiknas.go.id/kbbi/"}),"http://pusatbahasa.kemdiknas.go.id/kbbi/"),". Cuma ya itu, kadang-kadang down :D. Nah sekarang, berbekal kamus (daring) dan pedoman bahasa yang baik, kita bisa menerjemahkan dengan tenang, lebih teliti, dan berkualitas tinggi :)"),Object(r.a)("p",null,"Ngomong-ngomong kalau penerjemahan bahasa Jawa, pakainya referensi apa ya? Dulu perasaan ada di google docs. Sebentar, oh ini: \u200b",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"https://docs.google.com/spreadsheet/ccc?key=0Al2WiJoQjLAvcEw5QjFZY3dVMmtZQ2llZVFyMzVuWVE&hl=in"}),"https://docs.google.com/spreadsheet/ccc?key=0Al2WiJoQjLAvcEw5QjFZY3dVMmtZQ2llZVFyMzVuWVE&hl=in"),". Itu saya kumpulin jadi satu, nggak terlalu resmi, dan nggak juga terlalu ketat berpegang pada padanan kata yang ada di situ. Cara gampangan saya: bikin daftar seperti google docs tadi, terus buat padanan bahasa Inggris/Indonesia (sebagai sumber) dan bahasa X-nya. Kan banyak tuh string sumber yang sama, misal: About, File, Help, Save As, Edit, OK, Cancel, dst, dst. Ya saran saya, kalau mau bikin Glosarium, bisa diawali dengan string yang sering muncul pada aplikasi (menu, dialog box, error message). oke, rasanya tinggal satu topik lagi yang belum disampaikan: memahami konteks string sumber."),Object(r.a)("p",null,'Oke, sekarang kita ke topik memahami konteks. Kalau kita menjumpai string seperti ini: "Are you sure you want to delete these files?" Ada yang bisa mengajukan saran terjemahan? ',Object(r.a)("inlineCode",{parentName:"p"},"<kokabiel>")," Apakah anda yakin ingin menghapus berkas ini? Oke, menurut saya terjemahan kokabiel sudah bagus, tapi ada faktor-faktor lain dalam penerjemahan aplikasi:"),Object(r.a)("p",null,"1.apakah ada batasan jumlah karakter?"),Object(r.a)("p",null,"2.kalau bisa pendek, mengapa harus panjang?"),Object(r.a)("p",null,'Jika "komputer" bertanya "Are you sure you want to delete these files", tentunya si komputer sedang bertanya kepada "si pemegang keyboard/mouse", bukan orang lain. Jadi mestinya "anda" pada kalimat "Apakah anda yakin ingin menghapus berkas ini?" bisa dihilangkan, jadi tinggal: "Apakah yakin ingin menghapus berkas ini?" Nah sekarang, apakah kata "Apakah" masih dibutuhkan? Apa bedanya "Apakah yakin ingin menghapus berkas ini?" dengan "Yakin ingin menghapus berkas ini?" Kalau menurut teman-teman nggak ada, pakailah yang lebih pendek :) Satu lagi yang benar dari terjemahan kokabiel: Bentuk plural bahasa Indonesia tidak perlu disebutkan secara eksplisit. Jadi nggak perlu diterjemahkan sebagai: "Yakin ingin menghapus berkas-berkas ini?" cukup "...berkas ini?" Jadi sebenarnya yang ada di \u200b',Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"http://i15n.blankonlinux.or.id/"}),"http://i15n.blankonlinux.or.id/"),' itu, nggak perlu "Bahasa-bahasa" cukup "Bahasa" aja :) Satu lagi contohnya: misalnya ada string dalam berkas PO bunyinya "to" kira-kira terjemahannya apa coba? Di atas baris string dengan msgid "to", ada msgid "from". Betul sekali, dilihat gandengannya. Kalau ada from, "dari" "to" bisa jadi "ke", tapi coba bayangkan di sekitar baris-baris itu ada tulisan gini: #: lib/ui_date_selection_dialog.cpp:116. Jadi kira-kira itu ada di dialog box, harusnya jadi apa coba? Yoza: betul, selain itu juga bisa "sejak"+"hingga", "dari"+"hingga", tapi yang jelas bukan "sejak"+"ke", "dari"+ke". Jadi sebenarnya, mengetahui konteks terjemahan itu sangat penting. Kalau nggak, tujuan penerjemahan yang tadi di awal nggak sampai. Para heker dan progremer :D juga penting menuliskan komentar pada kode sumber yang sekiranya dianggap diperlukan bagi para penerjemah untuk memahami. Saya lupa, bagaimana cara memberikan komentar untuk string yang akan di-gettext-kan. Tapi saya kasih contoh aja pada kasus penerjemahan firefox: \u200b',Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"http://hg.mozilla.org/l10n-central/id/file/f75fff5654da/browser/chrome/browser/syncGenericChange.properties"}),"http://hg.mozilla.org/l10n-central/id/file/f75fff5654da/browser/chrome/browser/syncGenericChange.properties"),". Di situ ada: # LOCALIZATION NOTE (change.password.title): This (and associated change.password/passphrase) are used when the user elects to change their password. Tulisan LOCALIZATION NOTE itu yang nulis si programer, agar penerjemah mudah mencari padanannya dengan tepat. Bagaimana, ada pertanyaan?"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"\\<Yoza",">"),' ketika sebuah string punya 2 terjemahan, "harafiah" yang baku sekali dan "kontekstual" yang lebih dekat dengan isinya, dipilih yang mana, pak?'),Object(r.a)("p",null,"Cara gampang: jalankan aplikasinya, sampai kira-kira nemu string yang dimaksud. Cara gampang-gampang susah sih :). Cara susah-susah gampang, trace ke kode sumber programnya, kali-kali ada informasi lain."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"\\<Yoza",">")," romih: berarti yang diutamakan: konteksnya ya, pak?"),Object(r.a)("p",null,'Sebenarnya menurut pendapat pribadi saya, kalau bisa penerjemahan itu konsisten, misalnya: apakah Error itu mau diterjemakan jadi "kesalahan", "galat", atau yang lain, OK itu jadi "Oke", atau tetap "OK", atau "Baik".'),Object(r.a)("p",null,'Yoza: betul, kalau menurut saya konteksnya yang utama. Misalnya nanti di Glosarium Bahasa Jawa, mungkin perlu dicantumkan kata sumber: "Error", padanan kata bahasa Jawanya "Salah" (ini cuma contoh). O iya, untuk menjaga kekonsistenan ini, biasanya di dunia penerjemahan ada yang namanya reviewer. Kerjaannya ya cuma me-review kerjaan penerjemah dan memastikan apakah sesuai dengan standar yang diinginkan (gaya bahasa, padanan kata, dst).'),Object(r.a)("p",null,"Inti ocehan saya malam ini adalah: ya saya ulangi lagi ya, intinya ocehan tukang obat saya malam ini adalah:"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{}),'Tujuan menerjemahkan: supaya pengguna mudah mengerti dalam menjalankan aplikasi\nSyarat menerjemahkan yang baik:\n\nmengerti konteks string sumber\nreferensi untuk rujukan: \u200bhttp://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan, kateglo.bahtera.org (KBBI), \u200bhttp://pusatbahasa.kemdiknas.go.id/kbbi/\ncoba baca sekali lagi hasil terjemahan, mungkin ada salah ketik, salah eja, tanda baca yang menghilang secara misterius :D\ncoba pakai aplikasi-aplikasi lain yang sudah (hampir) selesai diterjemahkan ke bahasa Indonesia, biar "familier" gitu\nkonsisten dalam menerjemahkan, taati glosarium, tapi jangan lupa konteks string sumber (eh, kalau glosarium belum ada, ya bisa dibuat perlahan-lahan)\n')),Object(r.a)("p",null,"Yah kira-kira gitu lah :) Buat yang ingin berhalo-halo, cuap-cuap ngobrol-ngobrol lebih lanjut bisa kontak saya lewat GoogleMail: romihardiyanto@\u2026, atau YM!: romihardiyanto, FB juga sama: romihardiyanto. Kalau tidak ada pertanyaan, bisa saya tutup? Ngomong-ngomong, jadi penerjemah juga bisa hidup loo. Sekian ya."))}l.isMDXComponent=!0}}]);