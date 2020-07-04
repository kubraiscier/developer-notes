(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{"6byR":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var n=t("/FXl"),i=t("TjRS"),l=(t("HZsF"),t("QxB1"));t("aD51");function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Haskell/Haskell-From-First-Principles.md"}});var r={_frontmatter:b},c=i.a;function s(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(c,o({},r,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"haskell-from-first-principles"},"Haskell From First Principles"),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.inf.fu-berlin.de/lehre/WS03/alpi/lambda.pdf"}),"A Tutorial Intro to Lambda Calculus"))),Object(n.b)("h2",{id:"what-is-a-function"},"What is a function"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"A set of possible inputs and a set of possible outputs")),Object(n.b)(l.BlockMath,{math:"f(1) = A",mdxType:"BlockMath"}),Object(n.b)(l.BlockMath,{math:"f(2) = B",mdxType:"BlockMath"}),Object(n.b)(l.BlockMath,{math:"f(3) = C",mdxType:"BlockMath"}),Object(n.b)("p",null,"The input set (domain) is ",Object(n.b)("inlineCode",{parentName:"p"},"{1,2,3}")," and the output set (codomain) is ",Object(n.b)("inlineCode",{parentName:"p"},"{A,B,C}"),"."),Object(n.b)("p",null,"In our function, an input of ",Object(n.b)("inlineCode",{parentName:"p"},"1")," will ALWAYS return ",Object(n.b)("inlineCode",{parentName:"p"},"A"),", no exceptions."),Object(n.b)("h2",{id:"lambda-termd"},"Lambda termd"),Object(n.b)("p",null,"Lambda calculus has three basic components:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Expressions"),Object(n.b)("li",{parentName:"ol"},"Variables"),Object(n.b)("li",{parentName:"ol"},"Abstractions")),Object(n.b)("p",null,"The word ",Object(n.b)("inlineCode",{parentName:"p"},"expression")," refers to a superset of those things. It can be a variable name, an abstraction or a combination of those things."),Object(n.b)("p",null,"An ",Object(n.b)("inlineCode",{parentName:"p"},"abstraction")," is a function. It is a lambda term that has a head (a lambda) and a body and is applied to an argument. An ",Object(n.b)("inlineCode",{parentName:"p"},"argument")," is an input value."),Object(n.b)("p",null,"Abstractions consist of the ",Object(n.b)("inlineCode",{parentName:"p"},"head")," and the ",Object(n.b)("inlineCode",{parentName:"p"},"body"),". The head of the function is a lambda followed by a variable name. The body of the function is another expression."),Object(n.b)("p",null,"A simple function might look like this:"),Object(n.b)(l.BlockMath,{math:"\\lambda x.x",mdxType:"BlockMath"}),Object(n.b)("p",null,"The variable named in the head is the ",Object(n.b)("inlineCode",{parentName:"p"},"parameter")," and ",Object(n.b)("inlineCode",{parentName:"p"},"binds")," all instances of that same variable in the body of the function. In laymen terms, when we apply this function to an argument, each ",Object(n.b)("inlineCode",{parentName:"p"},"x")," in the body of the function will have the value of that argument."),Object(n.b)("p",null,"In the above, we were reference functions called ",Object(n.b)("inlineCode",{parentName:"p"},"f"),", but in the previous section the lambda astraction has no name and is an ",Object(n.b)("inlineCode",{parentName:"p"},"anonymous function"),"."),Object(n.b)("p",null,"A named function can be called by name by another function, a lambda cannot."),Object(n.b)("h3",{id:"breakdown-of-the-lambda"},"Breakdown of the lambda"),Object(n.b)("p",null,"The extent of the lambda:"),Object(n.b)(l.BlockMath,{math:"\\lambda x.",mdxType:"BlockMath"}),Object(n.b)("p",null,"The first ",Object(n.b)("inlineCode",{parentName:"p"},"x")," is the single parameter of the function. This binds an variables:"),Object(n.b)("p",null,"The second ",Object(n.b)("inlineCode",{parentName:"p"},"x")," is part of the body, the expression the lambda returns when applied. This is a bound variable."),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},".")," separates the parameters of the lambda from the function body."),Object(n.b)("h2",{id:"alpha-equivalence"},"Alpha Equivalence"),Object(n.b)(l.BlockMath,{math:"\\lambda x.x",mdxType:"BlockMath"}),Object(n.b)("p",null,"In the above expression, the variable ",Object(n.b)("inlineCode",{parentName:"p"},"x")," is not semantically meaningful except in its role in that single expression. Because of this, there's a form of equivalence between lambda terms called ",Object(n.b)("inlineCode",{parentName:"p"},"alpha equivalence"),". This is a way of saying:"),Object(n.b)(l.BlockMath,{math:"\\lambda x.x = \\lambda d.d = \\lambda z.z",mdxType:"BlockMath"}),Object(n.b)("h2",{id:"beta-reduction"},"Beta reduction"),Object(n.b)("p",null,"When we apply a function to an argument, we substitute the input expression for all instances of the bound variables within the body of the abstraction. You also eliminate the head of the abstraction, since its only purpose was to bind the variable. This is called ",Object(n.b)("inlineCode",{parentName:"p"},"beta reduction"),"."),Object(n.b)("p",null,"We can do one using a number. We apply the function above to ",Object(n.b)("inlineCode",{parentName:"p"},"2"),", substitude ",Object(n.b)("inlineCode",{parentName:"p"},"2")," for each bound variable in the body of the function and eliminate the head:"),Object(n.b)(l.BlockMath,{math:"( \\lambda x.x ) 2 = 2",mdxType:"BlockMath"}),Object(n.b)("p",null,"The only bound variable is a single ",Object(n.b)("inlineCode",{parentName:"p"},"x"),", so applying this function to 2 returns 2. This function is the ",Object(n.b)("inlineCode",{parentName:"p"},"identity")," function."),Object(n.b)("h2",{id:"free-variables"},"Free variables"),Object(n.b)(l.BlockMath,{math:"\\lambda x.xy",mdxType:"BlockMath"}),Object(n.b)("p",null,"In this example, ",Object(n.b)("inlineCode",{parentName:"p"},"x")," is a bound variable, ",Object(n.b)("inlineCode",{parentName:"p"},"y")," is a free variable."),Object(n.b)("h2",{id:"multiple-arguments"},"Multiple arguments"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Each lambda can only bind one parameter and can only accept one argument. Functions that require multiple arguments have multiple, nested heads. When you apply it once and eliminate the first (leftmost) head, the next is applied and so on. It is know as ",Object(n.b)("inlineCode",{parentName:"p"},"currying"),".")),Object(n.b)("h2",{id:"evaluation-is-simplication"},"Evaluation is simplication"),Object(n.b)("p",null,"There are multiple normal forms in lambda calculus, but here when we refer to normal form we mean ",Object(n.b)("inlineCode",{parentName:"p"},"beta normal form"),". This corresponds to a fully evaluated expression (or a fully executed program). For example, do you say ",Object(n.b)("inlineCode",{parentName:"p"},"2000/1000")," or do you say 2? You say 2. The normal form of the evaluated expression is therefore 2."),Object(n.b)("p",null,"Note: if we had function ",Object(n.b)("inlineCode",{parentName:"p"},"(x,y) => x/y")," and apply ",Object(n.b)("inlineCode",{parentName:"p"},"x = 2000")," and ",Object(n.b)("inlineCode",{parentName:"p"},"y = 1000"),", we call the the body with all arguments applied ",Object(n.b)("inlineCode",{parentName:"p"},"saturated"),"."),Object(n.b)("h2",{id:"combinators"},"Combinators"),Object(n.b)("p",null,"A ",Object(n.b)("inlineCode",{parentName:"p"},"combinator")," is a lambda term with no free variables. Combinators, as the name suggests, serve only to ",Object(n.b)("inlineCode",{parentName:"p"},"combine")," the arguments that they are given."),Object(n.b)("h2",{id:"divergence"},"Divergence"),Object(n.b)("p",null,"Not all reducible lambda terms reduce neatly to a beta normal form. Reducing the following repeats itself:"),Object(n.b)(l.BlockMath,{math:"(\\lambda x.xx)(\\lambda x.xx)",mdxType:"BlockMath"}),Object(n.b)(l.BlockMath,{math:"(x := \\lambda x.xx|xx)",mdxType:"BlockMath"}),Object(n.b)(l.BlockMath,{math:"(\\lambda x.xx)(\\lambda x.xx)",mdxType:"BlockMath"}))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Haskell/Haskell-From-First-Principles.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-haskell-haskell-from-first-principles-md-cb994c6d60ba2a2fc23f.js.map