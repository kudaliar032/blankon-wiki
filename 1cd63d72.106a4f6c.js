(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1047:function(a,e,n){"use strict";n.d(e,"a",(function(){return c}));var t=n(0),i=n.n(t);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function u(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var d=i.a.createContext({}),s=function(a){var e=i.a.useContext(d),n=e;return a&&(n="function"==typeof a?a(e):u(u({},e),a)),n},p={inlineCode:"code",wrapper:function(a){var e=a.children;return i.a.createElement(i.a.Fragment,{},e)}},m=i.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,r=a.originalType,o=a.parentName,d=l(a,["components","mdxType","originalType","parentName"]),m=s(n),c=t,k=m["".concat(o,".").concat(c)]||m[c]||p[c]||r;return n?i.a.createElement(k,u(u({ref:e},d),{},{components:n})):i.a.createElement(k,u({ref:e},d))}));function c(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var r=n.length,o=new Array(r);o[0]=m;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=a,u.mdxType="string"==typeof a?a:t,o[1]=u;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},189:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return u})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return s}));var t=n(3),i=n(7),r=(n(0),n(1047)),o={},u={unversionedId:"TimPengembang/Infrastruktur/2009/HttpUpload",id:"TimPengembang/Infrastruktur/2009/HttpUpload",isDocsHomePage:!1,title:"HttpUpload",description:"Upload Melalui HTTP Secara Efisien",source:"@site/Wiki/TimPengembang/Infrastruktur/2009/HttpUpload.md",slug:"/TimPengembang/Infrastruktur/2009/HttpUpload",permalink:"/TimPengembang/Infrastruktur/2009/HttpUpload",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/2009/HttpUpload.md",version:"current"},l=[{value:"HTTP Upload",id:"http-upload",children:[{value:"Pendahuluan",id:"pendahuluan",children:[]},{value:"Gambaran Umum",id:"gambaran-umum",children:[]},{value:"Protokol Pengirman",id:"protokol-pengirman",children:[]},{value:"Catatan",id:"catatan",children:[]},{value:"Pengembangan Selanjutnya",id:"pengembangan-selanjutnya",children:[]},{value:"Contoh Implementasi",id:"contoh-implementasi",children:[]},{value:"Referensi",id:"referensi",children:[]}]}],d={rightToc:l};function s(a){var e=a.components,n=Object(i.a)(a,["components"]);return Object(r.a)("wrapper",Object(t.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"upload-melalui-http-secara-efisien"},"Upload Melalui HTTP Secara Efisien"),Object(r.a)("h2",{id:"http-upload"},"HTTP Upload"),Object(r.a)("h4",{id:"rancangan-diskusi-infrastruktur-2009"},"Rancangan Diskusi Infrastruktur 2009"),Object(r.a)("h3",{id:"pendahuluan"},"Pendahuluan"),Object(r.a)("p",null,"Dokumen ini berisi usulan protokol upload melalui HTTP secara efisien. Yang\ndimaksud dengan efisien di sini adalah jika proses upload terputus, maka proses\ntersebut dapat dilanjutkan kapan saja. Proses pengecekan validitas data dengan\nchecksum tidak perlu dilakukan setelah seluruh data terkirim, karena setiap\ndata yang dikirim dilampiri dengan checksum sehingga dapat dipantau\nvaliditasnya."),Object(r.a)("h3",{id:"gambaran-umum"},"Gambaran Umum"),Object(r.a)("p",null,"Pengiriman data dilakukan dengan cara memecah data menjadi sejumlah potongan\nkecil lalu setiap potongan dikirimkan terpisah secara berurutan. Setiap\npengiriman potongan, checksum dari potongan tersebut juga dilampirkan sehingga\nserver dapat mengecek validitas potongan tersebut."),Object(r.a)("p",null,"Proses upload dilakukan dalam dua tahap:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Client memberitahu server bahwa client ingin melakukan upload. Client\nmemberi informasi nama, ukuran, dan checksum data. Server akan membuatkan\nsebuah ID upload untuk sesi upload tersebut."),Object(r.a)("li",{parentName:"ol"},"Dengan menggunakan ID yang diberikan sebelumnya, client akan mengupload\ndata dalam bentuk potongan-potongan kecil. Informasi panjang, lokasi\n(offset) pada data utuh, dan checksum dari potongan akan dilampirkan pada\nsaat sebuah potongan di-upload.")),Object(r.a)("h3",{id:"protokol-pengirman"},"Protokol Pengirman"),Object(r.a)("h4",{id:"permintaan-upload"},"Permintaan Upload"),Object(r.a)("p",null,"Client mengirim sebuah HTTP POST Request ke sebuah URL pada path tertentu,\nmisalnya /upload/. Informasi berikut dikirimkan ke server pada request\ntersebut."),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"filename, nama berkas"),Object(r.a)("li",{parentName:"ol"},"size, ukuran berkas"),Object(r.a)("li",{parentName:"ol"},"checksum, checksum berkas\nServer mencatat permintaan upload pada database, lalu membuat sebuah ID khusus\nuntuk sesi upload ini.\nServer memberi respon 201 Created ke client dan memberi tahu lokasi (URL)\ntujuan yang dapat digunakan untuk mengupload potongan. Lokasi upload ini berisi\ninformasi ID yang telah dibuat sebelumnya. Server memberitahu client akan\nlokasi ini dengan cara menuliskannya pada HTTP Response Header Content-\nLocation.\nHTTP/1.1 201 Created\nContent-Location: /upload/ID/\n...")),Object(r.a)("h4",{id:"pengiriman-potongan"},"Pengiriman Potongan"),Object(r.a)("p",null,"Setelah lokasi pengiriman potongan didapat, client memulai proses pengiriman\npotongan data. Ukuran potongan dapat disesuaikan sesuai kebutuhan, misalnya\n100KB."),Object(r.a)("p",null,"Potongan dikirimkan dengan melakukan Multipart HTTP POST Request ke URL yang\ndiberikan oleh server pada tahap permintaan upload. Pada setiap request,\ninformasi berikut dikirimkan oleh client ke server."),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"offset, lokasi potongan pada data utuh"),Object(r.a)("li",{parentName:"ol"},"size, ukuran potongan"),Object(r.a)("li",{parentName:"ol"},"checksum, checksum potongan"),Object(r.a)("li",{parentName:"ol"},"data, data potongan")),Object(r.a)("p",null,"Server akan mengidentifikasi sesi upload melalui URL yang digunakan oleh\nclient. Untuk setiap sesi upload, selain informasi data yang dikirim pada tahap\npermintaan upload, server juga mengetahui sudah seberapa besar data yang\nditerima. Jika sesi upload gagal diidentifikasi oleh server, server mengirim\nrespon dengan kode 404 Not Found."),Object(r.a)("p",null,"Informasi lokasi potongan (offset) yang dikirimkan harus sesuai dengan ukuran\ndata yang sudah diterima. Hal ini dilakukan agar urutan potongan tetap terjaga\ndengan baik."),Object(r.a)("p",null,"Data yang diterima oleh server akan dicek validitasnya dengan cara\nmembandingkan ukuran dan checksum data tersebut dengan informasi ukuran (size)\ndan checksum yang dikirimkan."),Object(r.a)("p",null,"Jika potongan dinyatakan valid, maka potongan tersebut akan ditambahkan pada\ndata yang akan menjadi data akhir yang utuh. Server akan memberikan respon 202\nAccepted kepada client pada kondisi ini."),Object(r.a)("p",null,"Jika seluruh data sudah diterima, server akan mengecek validitas data berdasar\nchecksumnya. Jika semua sesuai, server akan memproses data tersebut (seperti\nmemindahkannya ke tempat yang tepat) lalu memberikan respon 200 OK ke client.\nKondisi lain yang tidak sesuai harapan akan direspon oleh server dengan kode 409 Conflict."),Object(r.a)("h3",{id:"catatan"},"Catatan"),Object(r.a)("p",null,"Metode request atau kode respon belum tentu sesuai dengan tata cara penggunaan\nyang benar yang didefinisikan oleh RFC 2616 (HTTP)."),Object(r.a)("h3",{id:"pengembangan-selanjutnya"},"Pengembangan Selanjutnya"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Otentikasi client."),Object(r.a)("li",{parentName:"ol"},"Informasi status upload (sudah seberapa besar data yang terkirim)."),Object(r.a)("li",{parentName:"ol"},"Informasi ukuran, lokasi, dan checksum potongan dituliskan pada HTTP\nRequest Header (Content-Length, Content-Range, Content-MD5)")),Object(r.a)("h3",{id:"contoh-implementasi"},"Contoh Implementasi"),Object(r.a)("p",null,"Dapat dilihat di \u200b",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"http://github.com/fajran/test-django-chuck-upload/tree/"}),"http://github.com/fajran/test-django-chuck-upload/tree/"),"\nmaster.\nImplementasi tersebut dibuat dengan Django."),Object(r.a)("h3",{id:"referensi"},"Referensi"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"RFC 2616 (HTTP) \u200b",Object(r.a)("a",Object(t.a)({parentName:"li"},{href:"http://www.w3.org/Protocols/rfc2616/rfc2616.html"}),"http://www.w3.org/Protocols/rfc2616/rfc2616.html"),"\nLast modified on 12/03/2008 02:26:15 PM")),Object(r.a)("hr",null))}s.isMDXComponent=!0}}]);