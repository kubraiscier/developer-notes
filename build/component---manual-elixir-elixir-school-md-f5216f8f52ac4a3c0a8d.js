(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{VV1b:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Elixir/Elixir-School.md"}});var i={_frontmatter:o},c=r.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,l({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"elixir-school"},"Elixir School"),Object(a.b)("p",null,"References and notes come from the ",Object(a.b)("a",l({parentName:"p"},{href:"https://elixirschool.com/en/"}),"Elixir School page"),"."),Object(a.b)("h2",{id:"basic-types"},"Basic Types"),Object(a.b)("p",null,"These just include unusual ones that are important to know:"),Object(a.b)("h3",{id:"atoms"},"Atoms"),Object(a.b)("p",null,"A constant whose name is value - synonymous with Ruby Symbols:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-elixir"}),":foo == :bar # returns false\n")),Object(a.b)("p",null,"Booleans ",Object(a.b)("inlineCode",{parentName:"p"},"true")," and ",Object(a.b)("inlineCode",{parentName:"p"},"false")," are also the atoms ",Object(a.b)("inlineCode",{parentName:"p"},":true")," and ",Object(a.b)("inlineCode",{parentName:"p"},":false"),"."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-elixir"}),"true |> is_atom # true\n:true |> is_boolean # true\n:true === true # true\n")),Object(a.b)("p",null,"The names of modules are also atoms:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-elixir"}),"is_atom(MyApp.MyModule) # true\n")),Object(a.b)("p",null,"Atoms are also used to reference modules from Erlang libraries, including built in ones."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-elixir"}),":crypto.strong_rand_bytes 3 # <<23, 104, 108>>\n")),Object(a.b)("h2",{id:"conditionals"},"Conditionals"),Object(a.b)("p",null,"Elixir provides the ||, &&, and ! boolean operators. There are three additional operators whose first argument must be a boolean (true or false):"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"iex> true and 42\n42\niex> false or true\ntrue\niex> not false\ntrue\niex> 42 and true\n** (ArgumentError) argument error: 42\niex> not 42\n** (ArgumentError) argument error\n")),Object(a.b)("p",null,"Note: Elixir’s and and or actually map to ",Object(a.b)("inlineCode",{parentName:"p"},"andalso")," and ",Object(a.b)("inlineCode",{parentName:"p"},"orelse")," in Erlang."),Object(a.b)("h2",{id:"comparisons"},"Comparisons"),Object(a.b)("p",null,"Elixir comes with all the comparison operators we’re used to: ==, !=, ===, !==, <=, >=, <, and >."),Object(a.b)("p",null,"For strict comparison of integers and floats, use ===:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"iex> 2 == 2.0\ntrue\niex> 2 === 2.0\nfalse\n")),Object(a.b)("h2",{id:"interpolation"},"Interpolation"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),'iex> name = "Sean"\niex> "Hello #{name}"\n"Hello Sean"\n')),Object(a.b)("h2",{id:"concatenation"},"Concatenation"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),'iex> name = "Sean"\niex> "Hello " <> name\n"Hello Sean"\n')),Object(a.b)("h2",{id:"pattern-matching"},"Pattern Matching"),Object(a.b)("h3",{id:"match-operator"},"Match Operator"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),'# Assignment\niex> x = 1\n1\n# Pattern matching\niex> 1 = x\n1\niex> 2 = x\n** (MatchError) no match of right hand side value: 1\n\n# Lists\niex> list = [1, 2, 3]\niex> [1, 2, 3] = list\n[1, 2, 3]\niex> [] = list\n** (MatchError) no match of right hand side value: [1, 2, 3]\n\niex> [1 | tail] = list\n[1, 2, 3]\niex> tail\n[2, 3]\niex> [2 | _] = list\n** (MatchError) no match of right hand side value: [1, 2, 3]\n\n# Tuples\niex> {:ok, value} = {:ok, "Successful!"}\n{:ok, "Successful!"}\niex> value\n"Successful!"\niex> {:ok, value} = {:error}\n** (MatchError) no match of right hand side value: {:error}\n')),Object(a.b)("h3",{id:"pin-operator"},"Pin Operator"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"iex> x = 1\n1\niex> ^x = 2\n** (MatchError) no match of right hand side value: 2\niex> {x, ^x} = {2, 1}\n{2, 1}\niex> x\n2\n")),Object(a.b)("p",null,"An example of pinning in a function clause:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),'iex> greeting = "Hello"\n"Hello"\niex> greet = fn\n...>   (^greeting, name) -> "Hi #{name}"\n...>   (greeting, name) -> "#{greeting}, #{name}"\n...> end\n#Function<12.54118792/2 in :erl_eval.expr/5>\niex> greet.("Hello", "Sean")\n"Hi Sean"\niex> greet.("Mornin\'", "Sean")\n"Mornin\', Sean"\niex> greeting\n"Hello"\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Elixir/Elixir-School.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-elixir-elixir-school-md-f5216f8f52ac4a3c0a8d.js.map