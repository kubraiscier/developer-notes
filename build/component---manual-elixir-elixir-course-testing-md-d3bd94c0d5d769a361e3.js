(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{"59TJ":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var i=n("/FXl"),a=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Elixir/Elixir-Course-Testing.md"}});var r={_frontmatter:l},c=a.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(c,o({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"elixir-course-testing-and-documentation"},"Elixir Course Testing And Documentation"),Object(i.b)("h2",{id:"documentation"},"Documentation"),Object(i.b)("p",null,"Two types:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Module documentation: purpose of module"),Object(i.b)("li",{parentName:"ol"},"Function documentation: purpose of individual functions")),Object(i.b)("p",null,"Using ",Object(i.b)("inlineCode",{parentName:"p"},"ex_doc")," as the required module, add ",Object(i.b)("inlineCode",{parentName:"p"},'{:ex_doc, "~> 0.21.1"},')," to you deps (or the latest version) and after fetching deps, run ",Object(i.b)("inlineCode",{parentName:"p"},"mix docs")," to generate the documentation."),Object(i.b)("p",null,"Documentation can then be found at ",Object(i.b)("inlineCode",{parentName:"p"},"doc/index.html"),"."),Object(i.b)("p",null,"Examples:"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-elixir"}),'defmodule ModuleName.Queries do\n  @moduledoc """\n  Provides Ecto queries for querying important Action Framework requirement.\n  """\n\n  import Ecto.Query\n\n  @doc """\n  Does a thing\n\n  ## Examples\n\n      iex> query = "Hello, World!"\n      iex> query\n      "Hello, World!"\n  """\n  def hello_world() do\n    "Hello, World!"\n  end\nend\n')),Object(i.b)("h2",{id:"elixir-testing"},"Elixir Testing"),Object(i.b)("p",null,"There are two distinct types of tests we can write:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Assertion tests"),Object(i.b)("li",{parentName:"ol"},"Doc testing")),Object(i.b)("h2",{id:"example-test"},"Example Test"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-elixir"}),'defmodule Cards do\n  def create_deck do\n    values = ["Ace", "Two"]\n    suits = ["Spades", "Clubs"]\n  end\n\n  # ... more\nend\n')),Object(i.b)("p",null,"Testing can be considered a first-class citizen. It comes built into Elixir."),Object(i.b)("p",null,"When you generate the project with ",Object(i.b)("inlineCode",{parentName:"p"},"mix"),", you get a test folder put in automatically."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"cards_test.exs")," file is specifically built for testing the functions used in ",Object(i.b)("inlineCode",{parentName:"p"},"cards_test.exs"),"."),Object(i.b)("p",null,"Note that running ",Object(i.b)("inlineCode",{parentName:"p"},"elixir test")," will end up with two tests run with 0 failures."),Object(i.b)("p",null,'The "mystery" test cmes frm the ',Object(i.b)("inlineCode",{parentName:"p"},"@doc")," tag ",Object(i.b)("inlineCode",{parentName:"p"},"## Examples")," - it will run that chunk of code as if it is a test!"),Object(i.b)("p",null,"Example, the following code will run as a test:"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-elixir"}),'@doc """\n  Divides a deck ito a hand and the remainder of the deck.\n\n## Examples\n\n    iex> deck = Card.create_deck\n    iex> {hand, deck} = Cards.deal(deck, 1)\n    iex> hand\n    ["Ace of Spaces"]\n"""\ndef deal(deck, hand_size) do\n  Enum.split(deck, hand_size)\nend\n')),Object(i.b)("h2",{id:"important-tidbits"},"Important Tidbits"),Object(i.b)("p",null,"Worth noting for a basic Elixir test example:"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-elixir"}),"defmodule CardsTest do\n  use ExUnit.Case\n  doctest Cards\nend\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"doctest")," is used for testing the documentation examples."),Object(i.b)("h2",{id:"case-tests"},"Case Tests"),Object(i.b)("p",null,"For the terms ",Object(i.b)("inlineCode",{parentName:"p"},"use ExUnit.Case"),":"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-elixir"}),'defmodule CardsTest do\n  use ExUnit.Case\n  doctest Cards\n\n  test "create_deck makes 20 cards" do\n    deck_length = length(Cards.create_deck)\n    assert deck_length == 20\n  end\nend\n')),Object(i.b)("h2",{id:"assert-vs-refute"},"Assert vs Refute"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"refute")," keyword is just the opposite of ",Object(i.b)("inlineCode",{parentName:"p"},"assert"),"."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Elixir/Elixir-Course-Testing.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-elixir-elixir-course-testing-md-d3bd94c0d5d769a361e3.js.map