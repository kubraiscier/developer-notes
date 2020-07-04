(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{c2Fj:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var i=t("/FXl"),r=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Go/Go-Fizz-Buzz.md"}});var z={_frontmatter:o},c=r.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(i.b)(c,a({},z,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"fizz-buzz-in-golang"},"Fizz Buzz in Golang"),Object(i.b)("p",null,"A basic implementation of the infamous Fizz Buzz with unit testing."),Object(i.b)("h2",{id:"setting-up-the-test"},"Setting up the test"),Object(i.b)("p",null,"Set up ",Object(i.b)("inlineCode",{parentName:"p"},"fizz_buzz_test.go")," with the following file:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-go"}),'package fizzbuzz\n\nimport "testing"\n\nfunc TestReturnString(t *testing.T) {\n    expected := "2"\n    if observed := FizzBuzz(2); observed != expected {\n        t.Fatalf("FizzBuzz(2)) = %v, want %v", observed, expected)\n    }\n}\nfunc TestFizz(t *testing.T) {\n    expected := "Fizz"\n    if observed := FizzBuzz(3); observed != expected {\n        t.Fatalf("FizzBuzz(3)) = %v, want %v", observed, expected)\n    }\n}\n\nfunc TestBuzz(t *testing.T) {\n    expected := "Buzz"\n    if observed := FizzBuzz(5); observed != expected {\n        t.Fatalf("FizzBuzz(5)) = %v, want %v", observed, expected)\n    }\n}\n\nfunc TestFizzBuzz(t *testing.T) {\n    expected := "FizzBuzz"\n    if observed := FizzBuzz(15); observed != expected {\n        t.Fatalf("FizzBuzz(15)) = %v, want %v", observed, expected)\n    }\n}\n\n// BenchmarkFizzBuzz() is a benchmarking function. These functions follow the\n// form `func BenchmarkXxx(*testing.B)` and can be used to test the performance\n// of your implementation. They may not be present in every exercise, but when\n// they are you can run them by including the `-bench` flag with the `go test`\n// command, like so: `go test -v --bench . --benchmem`\n//\n// You will see output similar to the following:\n//\n// BenchmarkFizzBuzz    2000000000           0.46 ns/op\n//\n// This means that the loop ran 2000000000 times at a speed of 0.46 ns per loop.\n//\n// While benchmarking can be useful to compare different iterations of the same\n// exercise, keep in mind that others will run the same benchmarks on different\n// machines, with different specs, so the results from these benchmark tests may\n// vary.\nfunc BenchmarkFizzBuzz(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        FizzBuzz(15)\n    }\n}\n')),Object(i.b)("h2",{id:"fizz-buzz-implementation"},"Fizz Buzz implementation"),Object(i.b)("p",null,"We will use the interger-to-ASCII function ",Object(i.b)("inlineCode",{parentName:"p"},"itoa")," from the ",Object(i.b)("inlineCode",{parentName:"p"},"strings")," library."),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-go"}),'package fizzbuzz\n\nimport "strconv"\n\n// FizzBuzz should have a comment documenting it.\nfunc FizzBuzz(i int) string {\n    switch true {\n    case i%15 == 0:\n        return "FizzBuzz"\n    case i%3 == 0:\n        return "Fizz"\n    case i%5 == 0:\n        return "Buzz"\n    default:\n        return strconv.Itoa(i)\n    }\n}\n')),Object(i.b)("h2",{id:"running-tests"},"Running Tests"),Object(i.b)("p",null,"In the directory, run ",Object(i.b)("inlineCode",{parentName:"p"},"go test"),"."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Go-Fizz-Buzz.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-go-go-fizz-buzz-md-6a34625bc75128114591.js.map