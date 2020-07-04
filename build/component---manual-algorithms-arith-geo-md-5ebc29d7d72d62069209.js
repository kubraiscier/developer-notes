(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ZqA5:function(r,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return o})),n.d(e,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var t=n("/FXl"),i=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Arith-Geo.md"}});var f={_frontmatter:o},c=i.a;function l(r){var e=r.components,n=function(r,e){if(null==r)return{};var n,t,i={},a=Object.keys(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||(i[n]=r[n]);return i}(r,["components"]);return Object(t.b)(c,a({},f,n,{components:e,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"arith-geo"},"Arith-Geo"),Object(t.b)("h2",{id:"answer"},"Answer"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"function ArithGeo(arr) {\n  const isArithmic = arr => {\n    let diff = arr[1] - arr[0];\n    for (let i = 2; i < arr.length; i++) {\n      if (arr[i] - arr[i - 1] !== diff) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const isGeo = arr => {\n    let diff = arr[1] / arr[0];\n    for (let i = 2; i < arr.length; i++) {\n      if (arr[i] / arr[i - 1] !== diff) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  if (isArithmic(arr)) return 'Arithmetic';\n  if (isGeo(arr)) return 'Geometric';\n\n  return -1;\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Arith-Geo.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-arith-geo-md-5ebc29d7d72d62069209.js.map