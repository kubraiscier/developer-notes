(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{Ej8c:function(n,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return r})),e.d(t,"default",(function(){return l}));e("1c7q"),e("abGl"),e("gZHo"),e("Fdmb"),e("Ir+3"),e("2mQt"),e("mXGw");var a=e("/FXl"),o=e("TjRS");e("aD51");function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/CSS/css-transitions-transforms-cheat-sheet.md"}});var i={_frontmatter:r},c=o.a;function l(n){var t=n.components,e=function(n,t){if(null==n)return{};var e,a,o={},s=Object.keys(n);for(a=0;a<s.length;a++)e=s[a],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,["components"]);return Object(a.b)(c,s({},i,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"css-transitions-and-transforms-cheat-sheet"},"CSS Transitions and Transforms Cheat Sheet"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-css"}),"/* =================================\n  Photo Overlay Transition\n==================================== */\n\n.photo-overlay {\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: .5s;\n}\n.photo-overlay:hover {\n    opacity: 1;\n}\n\n/* =================================\n  Button Transitions\n==================================== */\n\n.button {\n    opacity: 0;\n    transition-property: opacity, background, box-shadow;\n    transition-duration: .5s;\n    transition-delay: .2s, .3s, 0s;\n}\n\n.button:hover {\n    background: rgba(74, 137, 202, 1);\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .7);\n}\n\n.photo-overlay:hover .button {\n    opacity: 1;\n}\n\n.btn-icon {\n    transition-property: opacity, left;\n    transition-duration: .5s;\n    transition-delay: .3s;\n    transition-timing-function: ease-in-out, ease-out;\n}\n\n.button:hover .btn-icon {\n    opacity: 1;\n    left: 80%;\n}\n\n// The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.\n// Multiple properties can be written in this shorthand with a comma in between.\n\n/* =================================\n          Code Challenges\n==================================== */\n\n/* nav-item transitions ---------- */\n\n.nav-item {\n    flex-grow: 1;\n  transition-property: flex-grow;\n  transition-duration: .5s;\n  transition-timing-function: ease-out;\n}\n\n.nav-item:hover {\n    flex-grow: 2;\n}\n\n/* nav icon transitions ---------- */\n\n.icon {\n  right: -25px;\n  transition: right .4s ease-in-out 300ms;\n}\n\n.nav-item:hover .icon {\n    right: 12%;\n}\n\n/* =================================\n  Image Transforms & Transitions\n==================================== */\n\n/* -- Row 1 --------- */\n\nimg {\n    transition: transform .5s;\n}\n\nimg:hover {\n    transform: rotate(-5deg) scale(1.1);\n}\n\n/* -- Row 2 --------- */\n\n.photo img {\n    transform-origin: 0 0;\n}\n\n.photo:hover img {\n    transform: scale(1.2);\n}\n\n/* -- Row 3 --------- */\n\n.slide .photo-overlay,\n.slide img {\n    transition: transform .6s ease-out;\n}\n\n.slide .photo-overlay {\n    transform: translateX(-100%);\n}\n\n.slide:hover .photo-overlay {\n    transform: translateX(0);\n}\n\n.slide:hover img {\n    transform: translateX(100%);\n}\n\n/* -- Logo ---------- */\n\n.logo:hover {\n    transform: rotate(-20deg);\n}\n")),Object(a.b)("h3",{id:"photo-3d-transforms--transitions"},"Photo 3D Transforms & Transitions"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-html"}),'/* =================================\n  Photo 3D Transforms & Transitions\n==================================== */\n\n<!DOCTYPE html>\n<html>\n<head>\n    <title>3D Transform Gallery</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link href=\'https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800\' rel=\'stylesheet\' type=\'text/css\'>\n    <link rel="stylesheet" href="css/main.css">\n    <link rel="stylesheet" href="css/interactions.css">\n</head>\n<body>\n    <div class="container">\n        <header class="main-header clearfix">\n            <img class="logo" src="img/camera.svg">\n            <h1 class="name">3DTransform <span>Gallery</span></h1>\n        </header>\n\n        <div class="content clearfix">\n\n            <div class="cube-container">\n                <div class="photo-cube">\n\n                    <img class="front"src="img/photos/1.jpg" alt="">\n                    <div class="back photo-desc">\n                      <h3>Earth from Space</h3>\n                      <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n                        <a href="#" class="button">download</a>\n                    </div>\n                    <img class="left" src="img/photos/2.jpg" alt="">\n                    <img class="right" src="img/photos/3.jpg" alt="">\n\n                </div>\n            </div>\n\n            <div class="cube-container">\n                <div class="photo-cube">\n\n                    <img class="front"src="img/photos/4.jpg" alt="">\n                    <div class="back photo-desc">\n                      <h3>Space Images</h3>\n                      <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n                        <a href="#" class="button">download</a>\n                    </div>\n                    <img class="left" src="img/photos/5.jpg" alt="">\n                    <img class="right" src="img/photos/6.jpg" alt="">\n\n                </div>\n            </div>\n\n            <div class="cube-container">\n                <div class="photo-cube">\n\n                    <img class="front"src="img/photos/7.jpg" alt="">\n                    <div class="back photo-desc">\n                      <h3>The Milky Way</h3>\n                      <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n                        <a href="#" class="button">download</a>\n                    </div>\n                    <img class="left" src="img/photos/8.jpg" alt="">\n                    <img class="right" src="img/photos/9.jpg" alt="">\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</body>\n</html>\n')),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-css"}),".cube-container {\n    box-shadow: 0 18px 40px 5px rgba(0,0,0,.4);\n    perspective: 800px;\n}\n\n.photo-cube {\n    transition: transform 2s ease-in-out;\n    width: 220px;\n    height: 200px;\n    transform-style: preserve-3d;\n}\n\n.photo-cube:hover {\n    transform: rotateY(-270deg);\n}\n\n.front,\n.back,\n.left,\n.right {\n    width: 100%;\n    height: 100%;\n    display: block;\n    position: absolute;\n}\n\n.front {\n    transform: translateZ(110px);\n}\n\n.back {\n    transform: translateZ(-110px) rotateY(270deg);\n    transform-origin: center left;\n}\n\n.left {\n    transform: rotateY(-270deg) translateX(110px);\n    transform-origin: top right;\n}\n\n.right {\n    transform: translateZ(-110px) rotateY(180deg);\n}\n\n/* Complete the challenge by writing CSS below */\n\n.wrapper {\n  perspective: 600px;\n}\n\n.photo {\n  transform: rotate3d(0,1,0,30deg);\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"/* =================================\n  Load JavaScript after Transition\n==================================== */\n\nmap.$elem.toggleClass('-active').one(\"transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd\", function () {\n    if (!map.map) {\n        map.initMap();\n    }\n});\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/CSS/css-transitions-transforms-cheat-sheet.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-css-css-transitions-transforms-cheat-sheet-md-8c776762b447c2afd5bc.js.map