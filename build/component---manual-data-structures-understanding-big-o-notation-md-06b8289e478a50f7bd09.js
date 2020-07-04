(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{xI32:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return i})),n.d(e,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),l=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Data-Structures/Understanding-Big-O-Notation.md"}});var b={_frontmatter:i},o=l.a;function c(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,["components"]);return Object(a.b)(o,r({},b,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"understanding-big-o-notation"},"Understanding Big-O Notation"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Big-O Notation",src:"https://cdn-media-1.freecodecamp.org/images/0*B42QL_XBJgDGfIFd.jpg"})),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Big_O_notation"}),"Wikipedia")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"http://carlcheo.com/compsci"}),"CompSci")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.freecodecamp.org/news/big-o-notation-simply-explained-with-illustrations-and-video-87d5a71c0174/"}),"Big-O Notation")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.geeksforgeeks.org/time-complexities-of-all-sorting-algorithms/"}),"Big-O For Sorting Algorithms")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"http://sorting.at/"}),"sorting.at")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://visualgo.net/bn/sorting"}),"Visual Go"))),Object(a.b)("h2",{id:"big-o-notation"},"Big-O Notation"),Object(a.b)("p",null,"Algorithm running times grow at different rates."),Object(a.b)("p",null,"Big O doesn’t tell you the speed in seconds. Big O notation lets you compare the number of operations. It tells you how fast the algorithm grows and establishes a worst-case run time."),Object(a.b)("p",null,"A simple search on an array takes O(n) times, whereas a binary search would take O(log n) given the nature of (log","[2]","n)."),Object(a.b)("h2",{id:"common-big-o-times"},"Common Big-O Times"),Object(a.b)("p",null,"Here are five Big O run times that you’ll encounter a lot, sorted from fastest to slowest:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"O(log n)"),", also known as log time. Example: Binary search."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"O(n)"),", also known as linear time. Example: Simple search."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"O(n * log n)"),". Example: A fast sorting algorithm, like quicksort."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"O(n2)"),". Example: A slow sorting algorithm, like selection sort."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"O(n!)"),". Example: A really slow algorithm, like the traveling salesperson.")),Object(a.b)("h2",{id:"big-o-time-complexity-from-algorithms"},"Big-O Time Complexity from Algorithms"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Algorithm"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Best"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Average"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Worst"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Selection Sort"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Ω(n^2)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"θ(n^2)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"O(n^2)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Bubble Sort"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Ω(n)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"θ(n^2)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"O(n^2)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Insertion Sort"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Ω(n)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"θ(n^2)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"O(n^2)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Heap Sort"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Ω(n log(n))"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"θ(n log(n))"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"O(n log(n))")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Quick Sort"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Ω(n log(n))"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"θ(n log(n))"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"O(n^2)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Merge Sort"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Ω(n log(n))"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"θ(n log(n))"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"O(n log(n))")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Bucket Sort"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Ω(n+k)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"θ(n+k)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"O(n^2)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Radix Sort"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Ω(nk)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"θ(nk)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"O(nk)")))))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Data-Structures/Understanding-Big-O-Notation.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-data-structures-understanding-big-o-notation-md-06b8289e478a50f7bd09.js.map