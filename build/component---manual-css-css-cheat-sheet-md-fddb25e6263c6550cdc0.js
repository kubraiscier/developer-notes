(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{"/0P3":function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return a})),n.d(e,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var i=n("/FXl"),o=n("TjRS");n("aD51");function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/CSS/css-cheat-sheet.md"}});var r={_frontmatter:a},s=o.a;function c(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,i,o={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["components"]);return Object(i.b)(s,l({},r,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"css-syntax"},"CSS Syntax"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),'selector {property: value;}\n\nExternal Style Sheet\n<link rel="stylesheet" type="text/css" href="style.css" />\nInternal Style\n<style type="text/css">\nselector {property: value;}\n</style>\nInline Style\n<tag style="property: value">\n')),Object(i.b)("h3",{id:"antialiasing"},"Antialiasing"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"-webkit-font-smoothing: antialiased;\n")),Object(i.b)("h3",{id:"css-ordering"},"CSS Ordering"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),".selector {\n  /* Positioning */\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  right: 0;\n\n  /* Display & Box Model */\n  display: inline-block;\n  overflow: hidden;\n  box-sizing: border-box;\n  width: 100px;\n  height: 100px;\n  padding: 10px;\n  border: 10px solid #333;\n  margin: 10px;\n\n  /* Color */\n  background: #000;\n  color: #fff\n  \n  /* Text */\n  font-family: sans-serif;\n  font-size: 16px;\n  line-height: 1.4;\n  text-align: right;\n\n  /* Other */\n  cursor: pointer;\n}\n")),Object(i.b)("h3",{id:"css-outline"},"CSS Outline"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"outline: outline-color outline-style outline-width|initial|inherit;\n")),Object(i.b)("h3",{id:"css-find-active-element"},"CSS find active element"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"document.activeElement\n")),Object(i.b)("h3",{id:"css-general"},"CSS General"),Object(i.b)("p",null,"Class\t\t\t\tString preceded by a period\nID\t\t\t\t\tString preceded by a hash mark\ndiv\t\t\t\t\tFormats structure or block of text\nspan\t\t\t\tInline formatting\ncolor\t\t\t\tForeground color\ncursor\t\t\t\tAppearance of the cursor\ndisplay\t\t\t\tblock; inline; list-item; none\noverflow\t\t\tHow content overflowing its box is handled\nvisible, hidden, scroll, auto\nvisibility\t\t\tvisible, hidden"),Object(i.b)("h3",{id:"css-position"},"CSS Position"),Object(i.b)("p",null,"clear\t\t\tAny floating elements around the element?\nboth, left, right, none\nfloat\t\t\tFloats to a specified side\nleft, right, none\nleft\t\t\tThe left position of an element\nauto, length values (pt, in, cm, px)\ntop\t\t\t\tThe top position of an element\nauto, length values (pt, in, cm, px)\nposition\t\tstatic, relative, absolute\nz-index\t\t\tElement above or below overlapping elements?\nauto, integer (higher numbers on top)"),Object(i.b)("h3",{id:"css-font"},"CSS Font"),Object(i.b)("p",null,"font-style\t\t\tItalic, normal\nfont-variant\t\tnormal, small-caps\nfont-weight\t\t\tbold, normal, lighter, bolder, integer (100-900)\nfont-size\t\t\tSize of the font\nfont-family\t\t\tSpecific font(s) to be used"),Object(i.b)("h3",{id:"css-background"},"CSS Background"),Object(i.b)("p",null,"background-color\t\tBackground color\nbackground-image\t\tBackground image\nbackground-repeat\t\trepeat, no-repeat, repeat-x, repeat-y\nbackground-attachment\tBackground image scroll with the element?\nscroll, fixed\nbackground-position\t\t(x y), top, center, bottom, left, right"),Object(i.b)("h3",{id:"css-list"},"CSS List"),Object(i.b)("p",null,"list-style-type\t\t\tType of bullet or numbering in the list\ndisc; circle; square; decimal; lower-roman; upper-roman; lower-alpha; upper-alpha; none\nlist-style-position\t\tPosition of the bullet or number in a list\ninside; outside\nlist-style-image\t\tImage to be used as the bullet in a list"),Object(i.b)("h3",{id:"css-text"},"CSS Text"),Object(i.b)("p",null,"letter-spacing\t\tSpace between letters\nline-height\t\t\tVertical distance between baselines\ntext-align\t\t\tHorizontal alignment\ntext-decoration\t\tblink, line-through, none, overline, underline\ntext-indent\t\t\tFirst line indentation\ntext-transform\t\tcapitalize, lowercase, uppercase\nvertical-align\t\tVertical alignment\nword-spacing\t\tSpacing between words"),Object(i.b)("h3",{id:"box-model"},"Box Model"),Object(i.b)("p",null,"height;\nwidth;\nmargin-top;\nmargin-right;\nmargin-bottom;\nmargin-left;\npadding-top;\npadding-right;\npadding-bottom;\npadding-left;"),Object(i.b)("h3",{id:"border"},"Border"),Object(i.b)("p",null,"border-width\tWidth of the border\nborder-style\tdashed; dotted; double; groove; inset; outset; ridge; solid; none\nborder-color\tColor of the border"),Object(i.b)("h3",{id:"setting-a-default-browser-outline"},"Setting a default browser outline"),Object(i.b)("p",null,"outline"),Object(i.b)("h3",{id:"css-hiding-an-element"},"CSS Hiding an element"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),".hidden {\n    position:absolute;\n    left:-10000px;\n    top:auto;\n    width:1px;\n    height:1px;\n    overflow:hidden;\n}\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/CSS/css-cheat-sheet.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-css-css-cheat-sheet-md-fddb25e6263c6550cdc0.js.map