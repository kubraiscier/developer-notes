(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{OANH:function(n,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return s})),a.d(e,"default",(function(){return m}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var t=a("/FXl"),i=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Java/Java-Initialising-Arrays.md"}});var o={_frontmatter:s},l=i.a;function m(n){var e=n.components,a=function(n,e){if(null==n)return{};var a,t,i={},r=Object.keys(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,["components"]);return Object(t.b)(l,r({},o,a,{components:e,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"initialising-arrays-in-java"},"Initialising Arrays in Java"),Object(t.b)("p",null,"Basic example on how to declare, declare with allocated size and initialise with default values:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-java"}),"int[] allocArr = new int[2]; // init with memory for 2 spaces\nint[] declareArr; // declaration\nint[] withValues = { n.data }; // shorthand init with values\n")),Object(t.b)("h2",{id:"push-pop-shift-unshift"},"Push, pop, shift, unshift"),Object(t.b)("p",null,"This requires the use of ",Object(t.b)("inlineCode",{parentName:"p"},"List")," and ",Object(t.b)("inlineCode",{parentName:"p"},"ArrayList")),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-java"}),"Array.push    -> ArrayList.add(Object o); // Append the list\nArray.pop     -> ArrayList.remove(int index); // Remove list[index]\nArray.shift   -> ArrayList.remove(0); // Remove first element\nArray.unshift -> ArrayList.add(int index, Object o); // Prepend the list\n")),Object(t.b)("p",null,"Example:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-java"}),'import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        List<String> animals = new ArrayList<>();\n\n        animals.add("Lion");\n        animals.add("Tiger");\n        animals.add("Cat");\n        animals.add("Dog");\n\n        System.out.println(animals); // [Lion, Tiger, Cat, Dog]\n\n        // add() -> push(): Add items to the end of an array\n        animals.add("Elephant");\n        System.out.println(animals);  // [Lion, Tiger, Cat, Dog, Elephant]\n\n        // remove() -> pop(): Remove an item from the end of an array\n        animals.remove(animals.size() - 1);\n        System.out.println(animals); // [Lion, Tiger, Cat, Dog]\n\n        // add(0,"xyz") -> unshift(): Add items to the beginning of an array\n        animals.add(0, "Penguin");\n        System.out.println(animals); // [Penguin, Lion, Tiger, Cat, Dog]\n\n        // remove(0) -> shift(): Remove an item from the beginning of an array\n        animals.remove(0);\n        System.out.println(animals); // [Lion, Tiger, Cat, Dog]\n\n    }\n}\n')))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Java/Java-Initialising-Arrays.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-java-initialising-arrays-md-dd9816b24b81d0433414.js.map