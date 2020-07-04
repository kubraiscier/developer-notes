(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{"1jl8":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return l})),t.d(e,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Haskell/HackerRank-Notes.md"}});var i={_frontmatter:l},s=a.a;function p(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["components"]);return Object(r.b)(s,o({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"hackerrank-notes"},"HackerRank Notes"),Object(r.b)("h2",{id:"hello-world"},"Hello, World!"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-haskell"}),'-- Enter your code here. Read input from STDIN. Print output to STDOUT\nhello_world :: IO()\nhello_world = putStrLn "Hello World"\n\n\n-- This part relates to Input/Output and can be used as it is. Do not modify this section\nmain = do\n    hello_world\n')),Object(r.b)("h2",{id:"looped-hello-world"},"Looped Hello, World!"),Object(r.b)("p",null,"Haskell uses recursion, not loops:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-haskell"}),'{-# LANGUAGE FlexibleInstances, UndecidableInstances, DuplicateRecordFields #-}\n\nmodule Main where\n\nimport Control.Monad\nimport Data.Array\nimport Data.Bits\nimport Data.List\nimport Data.List.Split\nimport Data.Set\nimport Debug.Trace\nimport System.Environment\nimport System.IO\nimport System.IO.Unsafe\n\nprintNTimes n\n    | n == 1        = putStrLn "Hello World"\n    | otherwise     =\n        do\n            putStrLn "Hello World"\n            printNTimes (n-1)\n\nmain :: IO()\nmain = do\n    n <- readLn :: IO Int\n    printNTimes n\n')),Object(r.b)("h2",{id:"print-a-number-n-times"},"Print a number n times"),Object(r.b)("p",null,"Based on input:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-shell"}),"3\n1\n2\n3\n")),Object(r.b)("p",null,"Expect to get:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-shell"}),"1\n1\n1\n2\n2\n2\n3\n3\n3\n")),Object(r.b)("p",null,"Answer:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"f :: Int -> [Int] -> [Int]\nf n arr = -- Complete this function\n    do\n        [num | num <- arr, _ <- [1..n]]\n\n-- This part handles the Input and Output and can be used as it is. Do not modify this part.\nmain :: IO ()\nmain = getContents >>=\n       mapM_ print. (\\(n:arr) -> f n arr). map read. words\n")),Object(r.b)("h2",{id:"write-your-own-filter"},"Write your own filter"),Object(r.b)("p",null,"Write a filter function where given delimiter ",Object(r.b)("inlineCode",{parentName:"p"},"n")," you return all numbers smaller."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"f :: Int -> [Int] -> [Int]\nf n arr =\n    do\n        [num | num <- arr, num < n]\n\n-- The Input/Output section. You do not need to change or modify this part\nmain = do\n    n <- readLn :: IO Int\n    inputdata <- getContents\n    let\n        numbers = map read (lines inputdata) :: [Int]\n    putStrLn . unlines $ (map show . f n) numbers\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Haskell/HackerRank-Notes.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-haskell-hacker-rank-notes-md-d82672c91e4fc982310a.js.map