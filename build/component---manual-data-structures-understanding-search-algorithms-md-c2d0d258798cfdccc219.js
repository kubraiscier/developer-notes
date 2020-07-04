(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{"4pVg":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Data-Structures/Understanding-Search-Algorithms.md"}});var s={_frontmatter:o},h=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(h,i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"understanding-search-algorithms"},"Understanding Search Algorithms"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",i({parentName:"li"},{href:"https://hackernoon.com/programming-with-js-binary-search-aaf86cef9cb3"}),"Binary Search Hacker Noons")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",i({parentName:"li"},{href:"https://programmingpraxis.com/2010/10/12/rotate-an-array/"}),"Rotated Array"))),Object(a.b)("h2",{id:"linear-search-analogy"},"Linear Search Analogy"),Object(a.b)("p",null,"We have an unsorted queue of people of various heights and sizes. How can we find if a person of a particular height exists in this queue? We can simply iterate through the queue and return the position of the person in the queue if found (ie index in the array) or ",Object(a.b)("inlineCode",{parentName:"p"},"-1")," to signify they do not exist! This runs in O(n) time."),Object(a.b)("h2",{id:"linear-search-implementation"},"Linear Search Implementation"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const linearSearch = (arr, needle) => {\n  for (let [index, value] of Object.entries(arr)) {\n    if (value === needle) {\n      return index;\n    }\n  }\n\n  return -1;\n};\n")),Object(a.b)("h2",{id:"binary-search-analogy"},"Binary Search Analogy"),Object(a.b)("p",null,"Imagine you have a queue of people in a numerically sorted arrangement from shortest to tallest. What is the most efficient way for us to search through them given a particular height that we wish to find?"),Object(a.b)("p",null,"The answer is the ",Object(a.b)("inlineCode",{parentName:"p"},"binary search"),". We set a start marker to be index 0, and we set the end marker to be the count for the number of people in our queue (in computer speak, the length of the array). While the start marker is less than the end marker, we iterate through with a method of finding the mid point between the start and end marker ((start + end) / 2)."),Object(a.b)("p",null,"If that value found at the midpoint is equal to the needle, we return that mid point value as it equates to the index in the array."),Object(a.b)("p",null,"If we do not, we first check if that array value at that index is smaller than the needle. If yes, we increase the start marker by one. This enables us to search the next midpoint which will be a bigger value than before. If it is not, we decrease the end marker by one. This enables us to search the next midpoint which will be a smaller value than before. Remember: this happens because our use case is that the list has been sorted."),Object(a.b)("p",null,"This search enables us to perform with O(log n)."),Object(a.b)("h2",{id:"binary-search-implementation"},"Binary Search Implementation"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const binarySearch = (arr, needle) => {\n  let start = 0;\n  let end = arr.length;\n\n  while (start < end) {\n    let mid = Math.floor((start + end) / 2);\n    if (arr[mid] === needle) {\n      return mid;\n    } else if (arr[mid] < needle) {\n      start++;\n    } else {\n      end--;\n    }\n  }\n\n  return -1;\n};\n\nmodule.exports = {\n  search,\n};\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Data-Structures/Understanding-Search-Algorithms.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-data-structures-understanding-search-algorithms-md-c2d0d258798cfdccc219.js.map