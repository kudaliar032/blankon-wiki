(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{1047:function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function u(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?u(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),c=function(e){var n=r.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=t,g=m["".concat(u,".").concat(d)]||m[d]||l[d]||i;return a?r.a.createElement(g,p(p({ref:n},s),{},{components:a})):r.a.createElement(g,p({ref:n},s))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,u=new Array(i);u[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:t,u[1]=p;for(var s=2;s<i;s++)u[s]=a[s];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},587:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return u})),a.d(n,"metadata",(function(){return p})),a.d(n,"rightToc",(function(){return o})),a.d(n,"default",(function(){return c}));var t=a(3),r=a(7),i=(a(0),a(1047)),u={},p={unversionedId:"TimPengembang/Infrastruktur/PenerbitanKunciLumbung",id:"TimPengembang/Infrastruktur/PenerbitanKunciLumbung",isDocsHomePage:!1,title:"PenerbitanKunciLumbung",description:"Persiapan kunci penanda tangan lumbung",source:"@site/Wiki/TimPengembang/Infrastruktur/PenerbitanKunciLumbung.md",slug:"/TimPengembang/Infrastruktur/PenerbitanKunciLumbung",permalink:"/TimPengembang/Infrastruktur/PenerbitanKunciLumbung",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/PenerbitanKunciLumbung.md",version:"current"},o=[{value:"Persiapan kunci penanda tangan lumbung",id:"persiapan-kunci-penanda-tangan-lumbung",children:[{value:"Mempersiapkan <code>rng</code> untuk mempercepat generate entropy",id:"mempersiapkan-rng-untuk-mempercepat-generate-entropy",children:[]},{value:"Membuat kunci GPG utama.",id:"membuat-kunci-gpg-utama",children:[]},{value:"Membuat sub kunci untuk keperluan penandatanganan paket",id:"membuat-sub-kunci-untuk-keperluan-penandatanganan-paket",children:[]},{value:"Memisahkan kunci master",id:"memisahkan-kunci-master",children:[]}]},{value:"Memperpanjang masa hidup kunci",id:"memperpanjang-masa-hidup-kunci",children:[]},{value:"Referensi",id:"referensi",children:[]}],s={rightToc:o};function c(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"persiapan-kunci-penanda-tangan-lumbung"},"Persiapan kunci penanda tangan lumbung"),Object(i.a)("p",null,"Keaslian paket di lumbung turunan Debian dibantu oleh verifikasi tanda tangan digital dengan kunci GPG (itu sebabnya alamat lumbung tersebut tidak perlu lagi dilindungi oleh HTTPS/TLS, lihat ",Object(i.a)("a",Object(t.a)({parentName:"p"},{href:"https://whydoesaptnotusehttps.com/"}),"https://whydoesaptnotusehttps.com/"),"). Kita memerlukan kunci GPG untuk menandatangani paket-paket nantinya. Setelah dibuat sesuai panduan di bawah ini, kunci-kunci ini akan tersimpan di ",Object(i.a)("inlineCode",{parentName:"p"},"/.gnugpg"),"."),Object(i.a)("h3",{id:"mempersiapkan-rng-untuk-mempercepat-generate-entropy"},"Mempersiapkan ",Object(i.a)("inlineCode",{parentName:"h3"},"rng")," untuk mempercepat generate entropy"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"$ sudo apt-get install rng-tools\n$ sudo rngd -r /dev/urandom\n")),Object(i.a)("h3",{id:"membuat-kunci-gpg-utama"},"Membuat kunci GPG utama."),Object(i.a)("p",null,"Abaikan permintaan ",Object(i.a)("inlineCode",{parentName:"p"},"passphrase")," untuk menunjang otomasi penandatanganan paket."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"gpg --full-generate-key"))),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"gpg (GnuPG) 2.1.18; Copyright (C) 2017 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 5y\nKey expires at Wed Jan 24 04:58:41 2024 EST\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: BlankOn Developer\nEmail address: blankon-dev@googlegroups.com\nComment:\nYou selected this USER-ID:\n    \"BlankOn Developer <blankon-dev@googlegroups.com>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\ngpg: key 17963DC67219B965 marked as ultimately trusted\ngpg: revocation certificate stored as '/home/arsipdev-reboot/.gnupg/openpgp-revocs.d/9584C1230204D624A15D215117963DC67219B965.rev'\npublic and secret key created and signed.\npub   rsa4096 2019-01-25 [SC] [expires: 2024-01-24]\n      9584C1230204D624A15D215117963DC67219B965\n      9584C1230204D624A15D215117963DC67219B965\nuid                      BlankOn Developer <blankon-dev@googlegroups.com>\nsub   rsa4096 2019-01-25 [E] [expires: 2024-01-24]\n")),Object(i.a)("h3",{id:"membuat-sub-kunci-untuk-keperluan-penandatanganan-paket"},"Membuat sub kunci untuk keperluan penandatanganan paket"),Object(i.a)("p",null,"Parameternya adalah identitas kunci master."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"gpg --edit-key 05657D94F29BDACB99F6CE7D0B352C08D746A9A6"))),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"gpg (GnuPG) 2.1.18; Copyright (C) 2017 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nSecret key is available.\n\ngpg: checking the trustdb\ngpg: marginals needed: 3  completes needed: 1  trust model: pgp\ngpg: depth: 0  valid:   2  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 2u\ngpg: next trustdb check due at 2021-01-24\nsec  rsa2048/0B352C08D746A9A6\n     created: 2019-01-25  expires: 2021-01-24  usage: SC\n     trust: ultimate      validity: ultimate\nssb  rsa2048/BE8FF591E6569748\n     created: 2019-01-25  expires: 2021-01-24  usage: E\n[ultimate] (1). BlankOn Developer <blankon-dev@googlegroups.com>\n\ngpg> addkey\nPlease select what kind of key you want:\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n   (5) Elgamal (encrypt only)\n   (6) RSA (encrypt only)\nYour selection? 4\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 5y\nKey expires at Wed Jan 24 05:06:05 2024 EST\nIs this correct? (y/N) y\nReally create? (y/N) y\n\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\nsec  rsa2048/0B352C08D746A9A6\n     created: 2019-01-25  expires: 2021-01-24  usage: SC\n     trust: ultimate      validity: ultimate\nssb  rsa2048/BE8FF591E6569748\n     created: 2019-01-25  expires: 2021-01-24  usage: E\nssb  rsa4096/1C608FE2ECC8842B\n     created: 2019-01-25  expires: 2024-01-24  usage: S\n[ultimate] (1). BlankOn Developer <blankon-dev@googlegroups.com>\n\ngpg> save\n")),Object(i.a)("p",null,"Identitas kunci anak ini (string ",Object(i.a)("inlineCode",{parentName:"p"},"0B352C08D746A9A6"),") yang akan dipakai di konfigurasi lumbung nantinya."),Object(i.a)("h3",{id:"memisahkan-kunci-master"},"Memisahkan kunci master"),Object(i.a)("p",null,"Tujuan penggunaan subkey dan pemisahan kunci master adalah supaya bila kunci tanda tangan terkena kompromi, kunci penanda tangan baru masih bisa diterbitkan dan paket lama masih bisa diverifikasi."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"$ gpg --armor --export-secret-key 05657D94F29BDACB99F6CE7D0B352C08D746A9A6 > private.key\n$ gpg --armor --export 05657D94F29BDACB99F6CE7D0B352C08D746A9A6 >> private.key\n")),Object(i.a)("p",null,"Simpan berkas ",Object(i.a)("inlineCode",{parentName:"p"},"private.key")," ini ke tempat yang aman."),Object(i.a)("p",null,"Pisahkan kunci publik master dan kunci privat anak."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"$ gpg --armor --export 05657D94F29BDACB99F6CE7D0B352C08D746A9A6 > public.key\n$ gpg --armor --export-secret-subkeys 0B352C08D746A9A6 > signing.key\n")),Object(i.a)("p",null,"Hapus kunci privat master dari ",Object(i.a)("inlineCode",{parentName:"p"},"gnupg"),"."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"$ gpg --delete-secret-key 05657D94F29BDACB99F6CE7D0B352C08D746A9A6\n")),Object(i.a)("p",null,"Impor kembali kunci publik master dan kunci privat anak."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"$ gpg --import public.key signing.key\n")),Object(i.a)("p",null,"Pastikan kunci privat master sudah tidak terdaftar di ",Object(i.a)("inlineCode",{parentName:"p"},"gnupg"),"."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"$ gpg --list-secret-keys\n/home/arsipdev/.gnupg/pubring.kbx\n----------------------------------------\nsec#  rsa4096 2019-01-25 [SC] [expires: 2024-01-24]\n      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nuid           [ultimate] BlankOn Developer <blankon-dev@googlegroups.com>\nssb   rsa4096 2019-01-25 [E] [expires: 2024-01-24]\nssb   rsa4096 2019-01-25 [S] [expires: 2024-01-24]\n")),Object(i.a)("p",null,"Simbol # setelah ",Object(i.a)("inlineCode",{parentName:"p"},"sec")," menandakan tidak ada kunci privat master di ",Object(i.a)("inlineCode",{parentName:"p"},"gnupg"),"."),Object(i.a)("h2",{id:"memperpanjang-masa-hidup-kunci"},"Memperpanjang masa hidup kunci"),Object(i.a)("p",null,"TO BE WRITTEN"),Object(i.a)("h2",{id:"referensi"},"Referensi"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"https://wiki.debian.org/Subkeys"}),"https://wiki.debian.org/Subkeys"))))}c.isMDXComponent=!0}}]);