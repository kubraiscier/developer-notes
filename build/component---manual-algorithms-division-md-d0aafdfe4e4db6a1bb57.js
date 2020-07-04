(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{ps1r:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return u}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),i=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Division.md"}});var s={_frontmatter:o},m=i.a;function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(r.b)(m,a({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"division"},"Division"),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",a({parentName:"li"},{href:"https://www.coderbyte.com/editor/Division:JavaScript"}),"CoderByte"))),Object(r.b)("h2",{id:"question"},"Question"),Object(r.b)("p",null,"Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3."),Object(r.b)("p",null,"Use the Parameter Testing feature in the box below to test your code with different arguments."),Object(r.b)("h2",{id:"answer"},"Answer"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"function Division(num1, num2) {\n  const max = Math.max(num1, num2);\n  const min = Math.min(num1, num2);\n  if (max % min === 0) {\n    return min;\n  }\n\n  let res = 1;\n  for (let i = 0; i <= min / 2; i++) {\n    if (max % i === 0 && min % i === 0) {\n      res = i;\n    }\n  }\n\n  return res;\n}\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Division.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-division-md-d0aafdfe4e4db6a1bb57.js.map