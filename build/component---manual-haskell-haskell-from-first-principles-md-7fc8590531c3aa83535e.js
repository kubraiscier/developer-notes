(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{"6byR":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),l=t("TjRS"),i=(t("HZsF"),t("QxB1"));t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Haskell/Haskell-From-First-Principles.md"}});var b={_frontmatter:r},c=l.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(a.b)(c,o({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"haskell-from-first-principles"},"Haskell From First Principles"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://www.inf.fu-berlin.de/lehre/WS03/alpi/lambda.pdf"}),"A Tutorial Intro to Lambda Calculus"))),Object(a.b)("h2",{id:"what-is-a-function"},"What is a function"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A set of possible inputs and a set of possible outputs")),Object(a.b)(i.BlockMath,{math:"f(1) = A",mdxType:"BlockMath"}),Object(a.b)(i.BlockMath,{math:"f(2) = B",mdxType:"BlockMath"}),Object(a.b)(i.BlockMath,{math:"f(3) = C",mdxType:"BlockMath"}),Object(a.b)("p",null,"The input set (domain) is ",Object(a.b)("inlineCode",{parentName:"p"},"{1,2,3}")," and the output set (codomain) is ",Object(a.b)("inlineCode",{parentName:"p"},"{A,B,C}"),"."),Object(a.b)("p",null,"In our function, an input of ",Object(a.b)("inlineCode",{parentName:"p"},"1")," will ALWAYS return ",Object(a.b)("inlineCode",{parentName:"p"},"A"),", no exceptions."),Object(a.b)("h2",{id:"lambda-termd"},"Lambda termd"),Object(a.b)("p",null,"Lambda calculus has three basic components:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Expressions"),Object(a.b)("li",{parentName:"ol"},"Variables"),Object(a.b)("li",{parentName:"ol"},"Abstractions")),Object(a.b)("p",null,"The word ",Object(a.b)("inlineCode",{parentName:"p"},"expression")," refers to a superset of those things. It can be a variable name, an abstraction or a combination of those things."),Object(a.b)("p",null,"An ",Object(a.b)("inlineCode",{parentName:"p"},"abstraction")," is a function. It is a lambda term that has a head (a lambda) and a body and is applied to an argument. An ",Object(a.b)("inlineCode",{parentName:"p"},"argument")," is an input value."),Object(a.b)("p",null,"Abstractions consist of the ",Object(a.b)("inlineCode",{parentName:"p"},"head")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"body"),". The head of the function is a lambda followed by a variable name. The body of the function is another expression."),Object(a.b)("p",null,"A simple function might look like this:"),Object(a.b)(i.BlockMath,{math:"\\lambda x.x",mdxType:"BlockMath"}),Object(a.b)("p",null,"The variable named in the head is the ",Object(a.b)("inlineCode",{parentName:"p"},"parameter")," and ",Object(a.b)("inlineCode",{parentName:"p"},"binds")," all instances of that same variable in the body of the function. In laymen terms, when we apply this function to an argument, each ",Object(a.b)("inlineCode",{parentName:"p"},"x")," in the body of the function will have the value of that argument."),Object(a.b)("p",null,"In the above, we were reference functions called ",Object(a.b)("inlineCode",{parentName:"p"},"f"),", but in the previous section the lambda astraction has no name and is an ",Object(a.b)("inlineCode",{parentName:"p"},"anonymous function"),"."),Object(a.b)("p",null,"A named function can be called by name by another function, a lambda cannot."),Object(a.b)("h3",{id:"breakdown-of-the-lambda"},"Breakdown of the lambda"),Object(a.b)("p",null,"The extent of the lambda:"),Object(a.b)(i.BlockMath,{math:"\\lambda x.",mdxType:"BlockMath"}),Object(a.b)("p",null,"The first ",Object(a.b)("inlineCode",{parentName:"p"},"x")," is the single parameter of the function. This binds an variables:"),Object(a.b)("p",null,"The second ",Object(a.b)("inlineCode",{parentName:"p"},"x")," is part of the body, the expression the lambda returns when applied. This is a bound variable."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},".")," separates the parameters of the lambda from the function body."),Object(a.b)("h2",{id:"alpha-equivalence"},"Alpha Equivalence"),Object(a.b)(i.BlockMath,{math:"\\lambda x.x",mdxType:"BlockMath"}),Object(a.b)("p",null,"In the above expression, the variable ",Object(a.b)("inlineCode",{parentName:"p"},"x")," is not semantically meaningful except in its role in that single expression. Because of this, there's a form of equivalence between lambda terms called ",Object(a.b)("inlineCode",{parentName:"p"},"alpha equivalence"),". This is a way of saying:"),Object(a.b)(i.BlockMath,{math:"\\lambda x.x = \\lambda d.d = \\lambda z.z",mdxType:"BlockMath"}),Object(a.b)("h2",{id:"beta-reduction"},"Beta reduction"),Object(a.b)("p",null,"When we apply a function to an argument, we substitute the input expression for all instances of the bound variables within the body of the abstraction. You also eliminate the head of the abstraction, since its only purpose was to bind the variable. This is called ",Object(a.b)("inlineCode",{parentName:"p"},"beta reduction"),"."),Object(a.b)("p",null,"We can do one using a number. We apply the function above to ",Object(a.b)("inlineCode",{parentName:"p"},"2"),", substitude ",Object(a.b)("inlineCode",{parentName:"p"},"2")," for each bound variable in the body of the function and eliminate the head:"),Object(a.b)(i.BlockMath,{math:"( \\lambda x.x ) 2 = 2",mdxType:"BlockMath"}),Object(a.b)("p",null,"The only bound variable is a single ",Object(a.b)("inlineCode",{parentName:"p"},"x"),", so applying this function to 2 returns 2. This function is the ",Object(a.b)("inlineCode",{parentName:"p"},"identity")," function."),Object(a.b)("h2",{id:"free-variables"},"Free variables"),Object(a.b)(i.BlockMath,{math:"\\lambda x.xy",mdxType:"BlockMath"}),Object(a.b)("p",null,"In this example, ",Object(a.b)("inlineCode",{parentName:"p"},"x")," is a bound variable, ",Object(a.b)("inlineCode",{parentName:"p"},"y")," is a free variable."),Object(a.b)("h2",{id:"multiple-arguments"},"Multiple arguments"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Each lambda can only bind one parameter and can only accept one argument. Functions that require multiple arguments have multiple, nested heads. When you apply it once and eliminate the first (leftmost) head, the next is applied and so on. It is know as ",Object(a.b)("inlineCode",{parentName:"p"},"currying"),".")),Object(a.b)("h2",{id:"evaluation-is-simplication"},"Evaluation is simplication"),Object(a.b)("p",null,"There are multiple normal forms in lambda calculus, but here when we refer to normal form we mean ",Object(a.b)("inlineCode",{parentName:"p"},"beta normal form"),". This corresponds to a fully evaluated expression (or a fully executed program). For example, do you say ",Object(a.b)("inlineCode",{parentName:"p"},"2000/1000")," or do you say 2? You say 2. The normal form of the evaluated expression is therefore 2."),Object(a.b)("p",null,"Note: if we had function ",Object(a.b)("inlineCode",{parentName:"p"},"(x,y) => x/y")," and apply ",Object(a.b)("inlineCode",{parentName:"p"},"x = 2000")," and ",Object(a.b)("inlineCode",{parentName:"p"},"y = 1000"),", we call the the body with all arguments applied ",Object(a.b)("inlineCode",{parentName:"p"},"saturated"),"."),Object(a.b)("h2",{id:"combinators"},"Combinators"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"combinator")," is a lambda term with no free variables. Combinators, as the name suggests, serve only to ",Object(a.b)("inlineCode",{parentName:"p"},"combine")," the arguments that they are given."),Object(a.b)("h2",{id:"divergence"},"Divergence"),Object(a.b)("p",null,"Not all reducible lambda terms reduce neatly to a beta normal form. Reducing the following repeats itself:"),Object(a.b)(i.BlockMath,{math:"(\\lambda x.xx)(\\lambda x.xx)",mdxType:"BlockMath"}),Object(a.b)(i.BlockMath,{math:"(x := \\lambda x.xx|xx)",mdxType:"BlockMath"}),Object(a.b)(i.BlockMath,{math:"(\\lambda x.xx)(\\lambda x.xx)",mdxType:"BlockMath"}),Object(a.b)("h2",{id:"hello-haskell"},"Hello, Haskell!"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),'-- Say Hello\nsayHello :: String -> IO ()\nsayHello x =\n  putStrLn ("Hello, " ++ x ++ "!")\n')),Object(a.b)("p",null,"If in the ",Object(a.b)("inlineCode",{parentName:"p"},"stack ghci")," REPL, you can unload the file using ",Object(a.b)("inlineCode",{parentName:"p"},":m")," and reload updated files using ",Object(a.b)("inlineCode",{parentName:"p"},":r"),"."),Object(a.b)("h3",{id:"normal-form-reminder"},"Normal Form Reminder"),Object(a.b)("p",null,"Haskell reduces until we reach the normal form. Remember, ",Object(a.b)("inlineCode",{parentName:"p"},"1 + 1")," can be evaluated to ",Object(a.b)("inlineCode",{parentName:"p"},"2"),", thus Haskell returns the normal form."),Object(a.b)("h2",{id:"redexes"},"Redexes"),Object(a.b)("p",null,"Reducibles expressions such as ",Object(a.b)("inlineCode",{parentName:"p"},"1 + 1")," are also known as ",Object(a.b)("inlineCode",{parentName:"p"},"redexes"),". While we generally refer to this process as evaluation or reduction, you may also hear of it as ",Object(a.b)("inlineCode",{parentName:"p"},"normalizing")," or ",Object(a.b)("inlineCode",{parentName:"p"},"executing")," an expression (though somewhat imprecise)."),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("p",null,"Functions are a specific type of expression. Functions in Haskell relate to functions in mathematics - they map an input or set of inputs to an output."),Object(a.b)("p",null,"Because they are built purely of expressions, they will always evaluate to the same result when given the same values."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"As with Lambda Calculus, all functions in Haskell take one argument and return one result. Even when it seems we are passing multiple arguments, we are actually applying a series of nested functions (each to one argument). This is called ",Object(a.b)("inlineCode",{parentName:"p"},"currying"),".")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"-- in GHCi REPL\nlet triple x = x * 3\n-- in source file\ntriple :: Number -> Number\ntriple x = x * 3\n")),Object(a.b)("h2",{id:"evaluation"},"Evaluation"),Object(a.b)("p",null,"When we talk about evaluating an expression, we're talking about reducing the terms until it is in the simplest form. We say it is ",Object(a.b)("inlineCode",{parentName:"p"},"irreducible")," or finished evaluating."),Object(a.b)("p",null,"Haskell uses ",Object(a.b)("inlineCode",{parentName:"p"},"nonstrict evaluation")," (sometimes called ",Object(a.b)("inlineCode",{parentName:"p"},"lazy evaluation"),") stategy which defers evaluations of terms until they're forced by other terms referring so them."),Object(a.b)("p",null,"Here is the reduction of our ",Object(a.b)("inlineCode",{parentName:"p"},"triple")," function:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"triple 2\n-- [triple x = x * 3; x:= 2]\n2 * 3\n6\n")),Object(a.b)("p",null,"The above is reduced to its normal form, however Haskell only evalutes is weak head normal form (WHNF) but default. This means things are not always reduced to its irreducible form straight away."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"(\\f -> (1, 2 + f)) 2")," reduces to the following in WHNF ",Object(a.b)("inlineCode",{parentName:"p"},"(1, 2 + 2)")," before it is evaluated further."),Object(a.b)("h2",{id:"infix-operators"},"Infix Operators"),Object(a.b)("p",null,"Functions in Haskell default to prefix syntax (like the ",Object(a.b)("inlineCode",{parentName:"p"},"triple")," func above)."),Object(a.b)("p",null,"Operators for example are functions that can be used in the infix style."),Object(a.b)("p",null,"You can sometimes use functions infix style with a small change in syntax:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"10 `div` 4\ndiv 10 4\n(/) 10 4\n2.5\n")),Object(a.b)("p",null,"If the function is alphanumeric, it is prefix by default. If it is a symbol, it is infix by default."),Object(a.b)("h2",{id:"associativity-and-precedence"},"Associativity and precedence"),Object(a.b)("p",null,"This BODMAS (from Mathematics) for precedence."),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},":info")," to get more info about an operator."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"Prelude> :i (/) (+) (-)\nclass Num a => Fractional a where\n  (/) :: a -> a -> a\n  ...\n        -- Defined in ‘GHC.Real’\ninfixl 7 /\nclass Num a where\n  (+) :: a -> a -> a\n  ...\n        -- Defined in ‘GHC.Num’\ninfixl 6 +\nclass Num a where\n  ...\n  (-) :: a -> a -> a\n  ...\n        -- Defined in ‘GHC.Num’\ninfixl 6 -\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"infixl")," means infix operator and left associative"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"7|6")," is the precendence - higher is applied first"),Object(a.b)("li",{parentName:"ul"},"The last part is the function name (in this case the ",Object(a.b)("inlineCode",{parentName:"li"},"/"),", ",Object(a.b)("inlineCode",{parentName:"li"},"+")," and ",Object(a.b)("inlineCode",{parentName:"li"},"-"),")")),Object(a.b)("p",null,"An example of a right-associative infix operator is the power operator ",Object(a.b)("inlineCode",{parentName:"p"},"^"),"."),Object(a.b)("h2",{id:"declaring-values"},"Declaring values"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"-- in the REPL\nPrelude> let y = 10\nPrelude> let x = 10 * 5 + y\nPrelude> let myResult = x * 5\n-- in a file\n-- learn.hs\nmodule Learn where\nx = 10 * 5 + y\nmyResult = x * 5\ny = 10\n")),Object(a.b)("h2",{id:"-operator"},"$ Operator"),Object(a.b)("p",null,"The ($) operator is a convenience for when you want to express something with fewer pairs of parentheses:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"})," -- Remember ($)'s definition\nf $ a = f a\n-- in use\nPrelude> (2^) (2 + 2)\n16\n-- can replace those parentheses\n Prelude> (2^) $ 2 + 2\n16\n-- without either parentheses or $\n Prelude> (2^) 2 + 2\n 6\n")),Object(a.b)("p",null,"The ($) will allow everything to the right of it to be evaluated first and can be used to delay function application."),Object(a.b)("h2",{id:"let-and-where"},"Let and where"),Object(a.b)("p",null,"The contrast here is that let introduces an expression, so it can be used wherever you can have an expression, but where is a declaration and is bound to a surrounding syntactic construct."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"-- FunctionWithWhere.hs\nmodule FunctionWithWhere where\n\nprintInc n = print plusTwo\n  where plusTwo = n + 2\n\n\nprintInc2 n = let plusTwo = n + 2\n  in print plusTwo\n")),Object(a.b)("h2",{id:"strings"},"Strings"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"Prelude> :type 'a'\n'a' :: Char\nPrelude> :type \"Hello!\"\n\"Hello!\" :: [Char]\n")),Object(a.b)("p",null,"To print strings we can use ",Object(a.b)("inlineCode",{parentName:"p"},"print")," in the REPL or ",Object(a.b)("inlineCode",{parentName:"p"},"putStrLn")," and ",Object(a.b)("inlineCode",{parentName:"p"},"putStr")," for our Haskell modules."),Object(a.b)("p",null,'Mutliline "do" can be done like so:'),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),'-- print2.hs\nmodule Print2 where\nmain :: IO () main = do\n  putStrLn "Count to four for me:"\n  putStr   "one, two"\n  putStr   ", three, and"\n  putStrLn " four!"\n')),Object(a.b)("p",null,"String concatenation:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),'-- print3.hs\nmodule Print3 where\n\nmyGreeting :: String\nmyGreeting = "hello" ++ " world!" hello :: String\n\nhello = "hello" world :: String\nworld = "world!"\n\nmain :: IO () main = do\n  putStrLn myGreeting\n  putStrLn secondGreeting\n  where secondGreeting =\n    concat [hello, " ", world]\n')),Object(a.b)("h2",{id:"top-level-versus-local-definitions"},"Top-level versus local definitions"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"module TopOrLocal where\n\ntopLevelFunction :: Integer -> Integer topLevelFunction x =\n  x + woot + topLevelValue\n  where woot :: Integer\n        woot = 10\n\ntopLevelValue :: Integer\ntopLevelValue = 5\n")),Object(a.b)("h2",{id:"basic-datatypes"},"Basic Datatypes"),Object(a.b)("p",null,"The type constructor is the name of the type and is capitalized. When you are reading or writing type signatures (the type level of your code), the type names or type constructors are what you use."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Haskell/Haskell-From-First-Principles.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-haskell-haskell-from-first-principles-md-7fc8590531c3aa83535e.js.map