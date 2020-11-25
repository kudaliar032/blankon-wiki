(window.webpackJsonp=window.webpackJsonp||[]).push([[805],{1047:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),u=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,O=s["".concat(i,".").concat(m)]||s[m]||b[m]||l;return t?r.a.createElement(O,p(p({ref:n},o),{},{components:t})):r.a.createElement(O,p({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=t[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},872:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),l=(t(0),t(1047)),i={},p={unversionedId:"TimPengembang/Infrastruktur/tempel-boi",id:"TimPengembang/Infrastruktur/tempel-boi",isDocsHomePage:!1,title:"tempel-boi",description:"Tempel.BOI",source:"@site/Wiki/TimPengembang/Infrastruktur/tempel-boi.md",slug:"/TimPengembang/Infrastruktur/tempel-boi",permalink:"/TimPengembang/Infrastruktur/tempel-boi",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/tempel-boi.md",version:"current"},c=[{value:"Dependensi:",id:"dependensi",children:[]},{value:"Instalasi",id:"instalasi",children:[]}],o={rightToc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.a)("h1",{id:"tempelboi"},"Tempel.BOI"),Object(l.a)("p",null,"Catatan re-deployment ",Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"http://tempel.blankonlinux.or.id"}),"http://tempel.blankonlinux.or.id")," atau\n",Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"http://tempel.blankon.in"}),"http://tempel.blankon.in")),Object(l.a)("hr",null),Object(l.a)("h2",{id:"dependensi"},"Dependensi:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"pyenv"),Object(l.a)("li",{parentName:"ul"},"virtualenv"),Object(l.a)("li",{parentName:"ul"},"Python 2.6.6"),Object(l.a)("li",{parentName:"ul"},"Django 1.2.5"),Object(l.a)("li",{parentName:"ul"},"Pygments"),Object(l.a)("li",{parentName:"ul"},"SQLite3")),Object(l.a)("hr",null),Object(l.a)("h2",{id:"instalasi"},"Instalasi"),Object(l.a)("p",null,"Jalankan perintah:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ cd $HOME\n$ git clone https://github.com/yyuu/pyenv.git ~/.pyenv\n$ echo 'export PYENV_ROOT=\"$HOME/.pyenv\"' >> ~/.bash_profile\n$ echo 'export PATH=\"$PYENV_ROOT/bin:$PATH\"' >> ~/.bash_profile\n$ echo 'eval \"$(pyenv init -)\"' >> ~/.bash_profile\n")),Object(l.a)("p",null,"Reload shell, lalu jalankan perintah instalasi Python 2.6.6."),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ pyenv install 2.6.6\n")),Object(l.a)("p",null,"Set versi python menjadi 2.6.6 dengan menggunakan Pyenv"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ pyenv versions\n* system (set by /home/username/.pyenv/version)\n  2.6.6\n$ pyenv shell 2.6.6\n$ python --version\nPython 2.6.6\n")),Object(l.a)("p",null,"Pasang virtualenv melalui pip dan buat lingkungan virtual lalu aktifkan."),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ pip install virtualenv\n$ virtualenv venv01\n$ source venv01/bin/activate\n")),Object(l.a)("p",null,"Pasang django dan pygments."),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ pip install -r requirements.txt\n")),Object(l.a)("p",null,"Unduh revisi terakhir dari dev.blankonlinux.or.id:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ bzr branch http://dev.blankonlinux.or.id/browser/infrastruktur/tempel\n")),Object(l.a)("p",null,"Atau gunakan repo github:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ git clone https://github.com/BlankOn/tempel-boi.git tempel\n")),Object(l.a)("p",null,"Coba jalankan."),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ cd tempel\n$ python manage.py runserver\n")),Object(l.a)("hr",null),Object(l.a)("p",null,"Happy hacking!"))}u.isMDXComponent=!0}}]);