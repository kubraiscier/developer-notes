(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{DmAI:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return s})),t.d(e,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Go/Go-Basic-Slices.md"}});var c={_frontmatter:s},o=r.a;function l(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,["components"]);return Object(a.b)(o,i({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"basic-slice-functions"},"Basic Slice Functions"),Object(a.b)("p",null,"Set up the folder with test and main file:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// slices_test.go\npackage slices\n\nimport (\n    "testing"\n)\n\n// slices.go\npackage slices\n')),Object(a.b)("h2",{id:"push"},"Push"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// slices_test.go\nfunc TestPushToIntSlice(t *testing.T) {\n    s := []int{1, 2, 3}\n    i := 4\n\n    exp := []int{1, 2, 3, 4}\n    res := Push(s, i)\n    for idx, val := range res {\n        if exp[idx] != val {\n            t.Fatalf("Expected %+v, got %+v", exp, res)\n        }\n    }\n}\n\n// Push append int to end of int slice\nfunc Push(a []int, b int) []int {\n    return append(a, b)\n}\n')),Object(a.b)("h2",{id:"pop"},"Pop"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// slices_test.go\nfunc TestPopIntFromSliceSlice(t *testing.T) {\n    s := []int{1, 2, 3, 4}\n\n    expArr := []int{1, 2, 3}\n    exp := 4\n\n    res, resArr := Pop(s)\n    for idx, val := range resArr {\n        if expArr[idx] != val {\n            t.Fatalf("Expected %+v, got %+v", exp, res)\n        }\n    }\n\n    if exp != res {\n        t.Fatalf("Popped integer not as expected")\n    }\n}\n\n// Pop return an integer from an array + array without last index\nfunc Pop(a []int) (int, []int) {\n    x, b := a[len(a)-1], a[:len(a)-1]\n    return x, b\n}\n')),Object(a.b)("h2",{id:"unshift"},"Unshift"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),"// slices_test.go\n\n// Unshift append as first element and return new slice\nfunc Unshift(a []int, b int) []int {\n    return append([]int{b}, a...)\n}\n")),Object(a.b)("h2",{id:"shift"},"Shift"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),"// slices_test.go\n\n// Shift remove from front and return int and new slice\nfunc Shift(a []int) (int, []int) {\n    x, b := a[0], a[1:]\n    return x, b\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Go-Basic-Slices.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-go-go-basic-slices-md-ce1f0654113be0b4afaa.js.map