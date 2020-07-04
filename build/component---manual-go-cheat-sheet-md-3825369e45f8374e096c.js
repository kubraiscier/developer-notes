(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{"6jcu":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return u}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Go/Cheat-Sheet.md"}});var l={_frontmatter:o},c=r.a;function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,i({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"go-cheat-sheet"},"Go Cheat Sheet"),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",i({parentName:"li"},{href:"https://github.com/a8m/go-lang-cheat-sheet"}),"Golang Cheat Sheet")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",i({parentName:"li"},{href:"https://hackernoon.com/time-to-go-learning-golang-through-examples-480a90c5e7f9"}),"Go by example"))),Object(a.b)("h2",{id:"in-a-nutshell"},"In a nutshell"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Imperative language"),Object(a.b)("li",{parentName:"ul"},"Statically typed"),Object(a.b)("li",{parentName:"ul"},"Syntax tokens similar to C (but less parentheses and no semicolons) and the structure to Oberon-2"),Object(a.b)("li",{parentName:"ul"},"Compiles to native code (no JVM)"),Object(a.b)("li",{parentName:"ul"},"No classes, but structs with methods"),Object(a.b)("li",{parentName:"ul"},"Interfaces"),Object(a.b)("li",{parentName:"ul"},"No implementation inheritance. There's type embedding, though."),Object(a.b)("li",{parentName:"ul"},"Functions are first class citizens"),Object(a.b)("li",{parentName:"ul"},"Functions can return multiple values"),Object(a.b)("li",{parentName:"ul"},"Has closures"),Object(a.b)("li",{parentName:"ul"},"Pointers, but not pointer arithmetic"),Object(a.b)("li",{parentName:"ul"},"Built-in concurrency primitives: Goroutines and Channels")),Object(a.b)("h2",{id:"basics"},"Basics"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// hello.go\npackage main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello Go")\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-shell"}),"go run hello.go\n")),Object(a.b)("h2",{id:"declarations"},"Declarations"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'var foo int // declaration without initialization\nvar foo int = 42 // declaration with initialization\nvar foo, bar int = 42, 1302 // declare and init multiple vars at once\nvar foo = 42 // type omitted, will be inferred\nfoo := 42 // shorthand, only in func bodies, omit var keyword, type is always implicit\nconst constant = "This is a constant"\n')),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'\n// a simple function\nfunc functionName() {}\n\n// function with parameters (again, types go after identifiers)\nfunc functionName(param1 string, param2 int) {}\n\n// multiple parameters of the same type\nfunc functionName(param1, param2 int) {}\n\n// return type declaration\nfunc functionName() int {\n    return 42\n}\n\n// Can return multiple values at once\nfunc returnMulti() (int, string) {\n    return 42, "foobar"\n}\nvar x, str = returnMulti()\n\n// Return multiple named results simply by return\nfunc returnMulti2() (n int, s string) {\n    n = 42\n    s = "foobar"\n    // n and s will be returned\n    return\n}\nvar x, str = returnMulti2()\n')),Object(a.b)("h2",{id:"funcs-as-values-and-closures"},"Funcs as values and closures"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),"func main() {\n    // assign a function to a name\n    add := func(a, b int) int {\n        return a + b\n    }\n    // use the name to call the function\n    fmt.Println(add(3, 4))\n}\n\n// Closures, lexically scoped: Functions can access values that were\n// in scope when defining the function\nfunc scope() func() int {\n    outer_var := 2\n    foo := func() int { return outer_var}\n    return foo\n}\n\n\n// Closures\nfunc outer() (func() int, int) {\n    outer_var := 2\n    inner := func() int {\n        outer_var += 99 // outer_var from outer scope is mutated.\n        return outer_var\n    }\n    inner()\n    return inner, outer_var // return inner func and mutated outer_var 101\n}\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Cheat-Sheet.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-go-cheat-sheet-md-3825369e45f8374e096c.js.map