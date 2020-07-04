(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{l4KN:function(n,e,r){"use strict";r.r(e),r.d(e,"_frontmatter",(function(){return u})),r.d(e,"default",(function(){return s}));r("1c7q"),r("abGl"),r("gZHo"),r("Fdmb"),r("Ir+3"),r("2mQt"),r("mXGw");var t=r("/FXl"),a=r("TjRS");r("aD51");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(this,arguments)}var u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Data-Structures/Go.md"}});var c={_frontmatter:u},o=a.a;function s(n){var e=n.components,r=function(n,e){if(null==n)return{};var r,t,a={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,["components"]);return Object(t.b)(o,i({},c,r,{components:e,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"go-data-structures"},"Go Data Structures"),Object(t.b)("h2",{id:"fizzbuzz"},"Fizzbuzz"),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-go"}),'func fizzBuzz(i int) string {\n  switch true {\n    case i%3 == 0 && i%5 == 0:\n        return "fizzbuzz"\n    case i%3 == 0:\n        return "fizz"\n    case i%5 == 0:\n        return "buzz"\n    default:\n        return strconv.Itoa(i)\n  }\n}\n')),Object(t.b)("h2",{id:"chunked-arrays"},"Chunked Arrays"),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-go"}),'func arrayChunk(arr []int, size int) [][]int {\n    if len(arr) <= 0 {\n        return nil\n    }\n\n    var tmp []int\n    var chunkedArr [][]int\n    for i, item := range arr {\n        tmp = append(tmp, item)\n\n        isFinal := len(arr)-1 == i\n        if i%size == size-1 || isFinal {\n            fmt.Printf("%v", tmp)\n            chunkedArr = append(chunkedArr, tmp)\n            tmp = nil\n        }\n    }\n\n    return chunkedArr\n}\n')),Object(t.b)("h2",{id:"palindromes"},"Palindromes"),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-go"}),"package main\n\n// return whether it is a palindrome or not\nfunc main() {\n    return\n}\n\n// String converts string struct expecting palindromes\ntype String struct {\n    str string\n}\n\nfunc newPalindrome(s string) String {\n    return String{s}\n}\n\nfunc (s String) isPalindrome() bool {\n    r := []rune(s.str)\n    for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {\n        if r[i] != r[j] {\n            return false\n        }\n    }\n\n    return true\n}\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Data-Structures/Go.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-data-structures-go-md-49012e170821d4ce5dfb.js.map