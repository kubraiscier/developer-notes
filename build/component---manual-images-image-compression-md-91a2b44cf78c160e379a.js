(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{abKg:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var n=t("/FXl"),r=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Images/Image-Compression.md"}});var s={_frontmatter:l},b=r.a;function c(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(n.b)(b,i({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"handling-images"},"Handling Images"),Object(n.b)("h2",{id:"useful-links"},"Useful links"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://varvy.com/pagespeed/defer-images.html"}),"https://varvy.com/pagespeed/defer-images.html")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://developers.google.com/web/fundamentals/web-app-manifest/"}),"https://developers.google.com/web/fundamentals/web-app-manifest/")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://caniuse.com/#feat=webp"}),"https://caniuse.com/#feat=webp")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://css-tricks.com/using-webp-images/"}),"https://css-tricks.com/using-webp-images/")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/verlok/lazyload"}),"https://github.com/verlok/lazyload")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://afarkas.github.io/lazysizes/index.html"}),"https://afarkas.github.io/lazysizes/index.html"))),Object(n.b)("h2",{id:"deferring-web-loaded-images"},"Deferring Web loaded images"),Object(n.b)("h3",{id:"basics"},"Basics"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-html"}),'<img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="your-image-here">\n')),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"<script>\nfunction init() {\nvar imgDefer = document.getElementsByTagName('img');\nfor (var i=0; i<imgDefer.length; i++) {\nif(imgDefer[i].getAttribute('data-src')) {\nimgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));\n} } }\nwindow.onload = init;\n<\/script>\n")),Object(n.b)("h3",{id:"using-lazyloadjs"},"Using Lazyload.js"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"HTML")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-html"}),'<img class="lazy" alt="..." \n     data-src="../img/44721746JJ_15_a.jpg"\n     width="220" height="280">\n')),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Javascript")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),'import LazyLoad from "vanilla-lazyload";\nvar myLazyLoad = new LazyLoad({\n    elements_selector: ".lazy"\n});\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Images/Image-Compression.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-images-image-compression-md-91a2b44cf78c160e379a.js.map