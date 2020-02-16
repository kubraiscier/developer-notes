(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{"./manual/Go/Go-Fizz-Buzz.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return a});var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),z=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),s={},o="wrapper";function a(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(z.b)(o,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(z.b)("h1",{id:"fizz-buzz-in-golang"},"Fizz Buzz in Golang"),Object(z.b)("p",null,"A basic implementation of the infamous Fizz Buzz with unit testing."),Object(z.b)("h2",{id:"setting-up-the-test"},"Setting up the test"),Object(z.b)("p",null,"Set up ",Object(z.b)("inlineCode",{parentName:"p"},"fizz_buzz_test.go")," with the following file:"),Object(z.b)("pre",null,Object(z.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package fizzbuzz\n\nimport "testing"\n\nfunc TestReturnString(t *testing.T) {\n    expected := "2"\n    if observed := FizzBuzz(2); observed != expected {\n        t.Fatalf("FizzBuzz(2)) = %v, want %v", observed, expected)\n    }\n}\nfunc TestFizz(t *testing.T) {\n    expected := "Fizz"\n    if observed := FizzBuzz(3); observed != expected {\n        t.Fatalf("FizzBuzz(3)) = %v, want %v", observed, expected)\n    }\n}\n\nfunc TestBuzz(t *testing.T) {\n    expected := "Buzz"\n    if observed := FizzBuzz(5); observed != expected {\n        t.Fatalf("FizzBuzz(5)) = %v, want %v", observed, expected)\n    }\n}\n\nfunc TestFizzBuzz(t *testing.T) {\n    expected := "FizzBuzz"\n    if observed := FizzBuzz(15); observed != expected {\n        t.Fatalf("FizzBuzz(15)) = %v, want %v", observed, expected)\n    }\n}\n\n// BenchmarkFizzBuzz() is a benchmarking function. These functions follow the\n// form `func BenchmarkXxx(*testing.B)` and can be used to test the performance\n// of your implementation. They may not be present in every exercise, but when\n// they are you can run them by including the `-bench` flag with the `go test`\n// command, like so: `go test -v --bench . --benchmem`\n//\n// You will see output similar to the following:\n//\n// BenchmarkFizzBuzz    2000000000           0.46 ns/op\n//\n// This means that the loop ran 2000000000 times at a speed of 0.46 ns per loop.\n//\n// While benchmarking can be useful to compare different iterations of the same\n// exercise, keep in mind that others will run the same benchmarks on different\n// machines, with different specs, so the results from these benchmark tests may\n// vary.\nfunc BenchmarkFizzBuzz(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        FizzBuzz(15)\n    }\n}\n')),Object(z.b)("h2",{id:"fizz-buzz-implementation"},"Fizz Buzz implementation"),Object(z.b)("p",null,"We will use the interger-to-ASCII function ",Object(z.b)("inlineCode",{parentName:"p"},"itoa")," from the ",Object(z.b)("inlineCode",{parentName:"p"},"strings")," library."),Object(z.b)("pre",null,Object(z.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package fizzbuzz\n\nimport "strconv"\n\n// FizzBuzz should have a comment documenting it.\nfunc FizzBuzz(i int) string {\n    switch true {\n    case i%15 == 0:\n        return "FizzBuzz"\n    case i%3 == 0:\n        return "Fizz"\n    case i%5 == 0:\n        return "Buzz"\n    default:\n        return strconv.Itoa(i)\n    }\n}\n')),Object(z.b)("h2",{id:"running-tests"},"Running Tests"),Object(z.b)("p",null,"In the directory, run ",Object(z.b)("inlineCode",{parentName:"p"},"go test"),"."))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Go-Fizz-Buzz.md"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-go-go-fizz-buzz.101a1afd2417ec7a4a77.js.map