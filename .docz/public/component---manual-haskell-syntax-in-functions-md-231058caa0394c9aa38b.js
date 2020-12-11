(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{CaMH:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return i})),a.d(n,"default",(function(){return b}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var t=a("/FXl"),l=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Haskell/Syntax-In-Functions.md"}});var o={_frontmatter:i},c=l.a;function b(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(t.b)(c,r({},o,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"syntax-in-functions"},"Syntax in Functions"),Object(t.b)("h2",{id:"pattern-matching"},"Pattern matching"),Object(t.b)("p",null,"When defining functions, you can define separate function bodies for different patterns. This leads to really neat code that's simple and readable."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-haskell"}),'lucky :: (Integral a) => a -> String\nlucky 7 = "LUCKY NUMBER SEVEN!"\nlucky x = "Sorry, you\'re out of luck, pal!"\n')),Object(t.b)("p",null,"Here is a more useful example with factorials:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-haskell"}),"factorial :: (Integral a) => a -> a\nfactorial 0 = 1\nfactorial n = n * factorial (n - 1)\n")),Object(t.b)("p",null,"Note: Pattern matching can also fail if the fallback case is not defined."),Object(t.b)("p",null,"Pattern matching can also happen with list comprehensions:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),"ghci> let xs = [(1,3), (4,3), (2,4), (5,3), (5,6), (3,1)]\nghci> [a+b | (a,b) <- xs]\n[4,7,6,8,11,4]\n")),Object(t.b)("h2",{id:"guards"},"Guards"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-haskell"}),'bmiTell :: (RealFloat a) => a -> String\nbmiTell bmi\n    | bmi <= 18.5 = "You\'re underweight, you emo, you!"\n    | bmi <= 25.0 = "You\'re supposedly normal. Pffft, I bet you\'re ugly!"\n    | bmi <= 30.0 = "You\'re fat! Lose some weight, fatty!"\n    | otherwise   = "You\'re a whale, congratulations!"\n')),Object(t.b)("p",null,"An example of a small ",Object(t.b)("inlineCode",{parentName:"p"},"myCompare")," function:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-haskell"}),"myCompare :: (Ord a) => a -> a -> Ordering\na `myCompare` b\n    | a > b     = GT\n    | a == b    = EQ\n    | otherwise = LT\n-- 3 `myCompare` 2 -> GT\n")),Object(t.b)("h2",{id:"where-bindings"},"Where bindings"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-haskell"}),'bmiTell :: (RealFloat a) => a -> a -> String\nbmiTell weight height\n    | bmi <= 18.5 = "You\'re underweight, you emo, you!"\n    | bmi <= 25.0 = "You\'re supposedly normal. Pffft, I bet you\'re ugly!"\n    | bmi <= 30.0 = "You\'re fat! Lose some weight, fatty!"\n    | otherwise   = "You\'re a whale, congratulations!"\n    where bmi = weight / height ^ 2\n')),Object(t.b)("h2",{id:"let-bindings"},"Let bindings"))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Haskell/Syntax-In-Functions.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-haskell-syntax-in-functions-md-231058caa0394c9aa38b.js.map