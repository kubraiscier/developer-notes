(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{pWJD:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),o=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Longest-Word.md"}});var s={_frontmatter:l},i=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(i,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"longest-word"},"Longest Word"),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",a({parentName:"li"},{href:"https://www.coderbyte.com/editor/Longest%20Word:JavaScript"}),"CoderByte"))),Object(r.b)("h2",{id:"question"},"Question"),Object(r.b)("p",null,"Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-shell"}),'Input: "fun&!! time"\nOutput: time\n')),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-shell"}),'Input: "I love dogs"\nOutput: love\n')),Object(r.b)("h2",{id:"answer"},"Answer"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"function LongestWord(sen) {\n  const words = sen.split(' ');\n  let maxWord = '';\n  let max = 0;\n\n  for (let word of words) {\n    const filteredWord = word.replace(/[^a-zA-Z0-9]/gi, '');\n    if (filteredWord.length > max) {\n      maxWord = filteredWord;\n      max = filteredWord.length;\n    }\n  }\n\n  // code goes here\n  return maxWord;\n}\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Longest-Word.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-longest-word-md-218b6c4e0ee6052dba97.js.map