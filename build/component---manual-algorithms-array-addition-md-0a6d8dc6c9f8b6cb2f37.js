(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{S4KK:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return u}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Array-Addition.md"}});var l={_frontmatter:o},s=a.a;function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(s,i({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"array-addition"},"Array Addition"),Object(r.b)("h2",{id:"question"},"Question"),Object(r.b)("p",null,"Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains ",Object(r.b)("inlineCode",{parentName:"p"},"[4, 6, 23, 10, 1, 3]")," the output should return true because ",Object(r.b)("inlineCode",{parentName:"p"},"4 + 6 + 10 + 3 = 23"),". The array will not be empty, will not contain all the same elements, and may contain negative numbers."),Object(r.b)("p",null,"Use the Parameter Testing feature in the box below to test your code with different arguments."),Object(r.b)("h2",{id:"answer"},"Answer"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"function ArrayAddition(arr) {\n  let maxValue = 0;\n  for (let el of arr) {\n    if (el > maxValue) {\n      maxValue = el;\n    }\n  }\n\n  const [maxElement] = arr.splice(arr.indexOf(maxValue), 1);\n  const combos = [];\n  // use a binary string representation to set the permutations\n  for (let i = 0, max = Math.pow(2, arr.length); i < max; i++) {\n    let binaryRepresentation = i.toString(2);\n    // pad the number\n    while (binaryRepresentation.length < arr.length) {\n      binaryRepresentation = '0' + binaryRepresentation;\n    }\n    combos.push(binaryRepresentation);\n  }\n\n  for (let permutation of combos) {\n    let sum = 0;\n    for (let i = 0; i < permutation.length; i++) {\n      if (permutation[i] === '1') {\n        sum += arr[i];\n      }\n    }\n\n    if (sum === maxElement) {\n      return true;\n    }\n  }\n\n  // code goes here\n  return false;\n}\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Array-Addition.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-array-addition-md-0a6d8dc6c9f8b6cb2f37.js.map