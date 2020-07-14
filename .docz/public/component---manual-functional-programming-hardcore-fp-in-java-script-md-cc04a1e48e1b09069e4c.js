(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{Pb6X:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Functional-Programming/Hardcore-FP-In-JavaScript.md"}});var l={_frontmatter:i},c=r.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"hardcore-functional-programming-in-javascrpt"},"Hardcore Functional Programming in JavaScrpt"),Object(a.b)("p",null,'There are notes taken from Frontend Masters course "Hardcore Functional Programming in JavaScrpt"'),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://frontendmasters.com/courses/functional-javascript/introduction/"}),"Frontend Masters course")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://docs.google.com/presentation/d/1WmIH538r0ubjW5zfKh43I1_Up4OnqQnNhICETyDnhSI/"}),"Course Slides")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://ramdajs.com/"}),"RamdaJS")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://baconjs.github.io/"}),"BaconJS")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://baconjs.github.io/"}),"Fantasy IO")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/DrBoolean/pointfree-fantasy"}),"Pointfree Fantasy - for mjoin, chain etc")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/origamitower/folktale"}),"Folktale - Either monad"))),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"Separation and recognition" - the soul of functional programming.')),Object(a.b)("p",null,"The symptoms:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Custom names"),Object(a.b)("li",{parentName:"ol"},"Looping patterns"),Object(a.b)("li",{parentName:"ol"},"Glue code"),Object(a.b)("li",{parentName:"ol"},"Side effects")),Object(a.b)("h3",{id:"omit-needless-names"},"Omit Needless Names"),Object(a.b)("p",null,"Variable declarations from within a function - is it needed? If not, omit and add as an argument."),Object(a.b)("h3",{id:"separating-mutation-from-calculation"},"Separating Mutation From Calculation"),Object(a.b)("p",null,'Ask "where is the mutation happening?" For example, the ',Object(a.b)("inlineCode",{parentName:"p"},"teaser")," function in the example to chop down text in the call ",Object(a.b)("inlineCode",{parentName:"p"},"map(teaser(50), all('p'))")," is where the mutation is happening. It is important to understand where and how this mutation works for simplification."),Object(a.b)("p",null,"In the above example, the ",Object(a.b)("inlineCode",{parentName:"p"},"teaser")," also ran ",Object(a.b)("inlineCode",{parentName:"p"},"setText")," from within the function with the mutated text, which is unnecessary for that function and can be abstracted out."),Object(a.b)("h3",{id:"recognize-pure-functions"},"Recognize Pure Functions"),Object(a.b)("p",null,'Functions that don\'t change anything are called "pure".'),Object(a.b)("p",null,"Their purity makes them:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Testable"),Object(a.b)("li",{parentName:"ol"},"Portable"),Object(a.b)("li",{parentName:"ol"},"Memoizable"),Object(a.b)("li",{parentName:"ol"},"Parallelizable")),Object(a.b)("h3",{id:"separate-functions-from-rules"},"Separate Functions From Rules"),Object(a.b)("p",null,"Functions are nouns. Each input (in the domain) should map to a specific output (in the range)."),Object(a.b)("p",null,"Separate arity from functions:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"function get(property, object) {\n  return object[property];\n}\nvar people = [{ name: 'example' }];\n\n// args up front\nfunction getPersonName(person) {\n  return get('name', person);\n}\n\nvar names = people.map(getPersonName);\n\n// more args later\n// - magic happens here -\nvar names = people.map(get('name'));\n\n// the magic in detail\nfunction curry(fn) {\n  return function() {\n    if (fn.length > argument.length) {\n      var slice = Array.prototype.slice;\n      var args = slice.apply(arguments);\n      return function() {\n        return fn.apply(null, args.concat(slice.apply(arguments)));\n      };\n    }\n    return fn.apply(null, arguments);\n  };\n}\n\nvar get = curry(function(property, object) {\n  return object[property];\n});\n")),Object(a.b)("p",null,"Arity is the idea of separating functions and making them only give one thing at a time (currying)."),Object(a.b)("p",null,"The examples then used in this application where using Ramda."),Object(a.b)("h3",{id:"compose"},"Compose"),Object(a.b)("p",null,'Function can "meld" aka compose. Compose is right-to-left, the opposite of Unix pipe which is left-to-right.'),Object(a.b)("p",null,"When you can understand the relationship between ",Object(a.b)("inlineCode",{parentName:"p"},"map")," and ",Object(a.b)("inlineCode",{parentName:"p"},"compose")," you can start to see the relationship between the two."),Object(a.b)("h3",{id:"point-free"},"Point Free"),Object(a.b)("p",null,"Points in this case mean arguments."),Object(a.b)("h2",{id:"the-voyage"},"The Voyage"),Object(a.b)("h3",{id:"category-theory"},"Category Theory"),Object(a.b)("p",null,"Here is a simply example: ",Object(a.b)("inlineCode",{parentName:"p"},"add(1, 1) // => 2")),Object(a.b)("p",null,"Mathematically, we know this:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// associative\nadd(add(1, 1), 4) === add(1, add(1, 4));\n// communitive\nadd(1, 4) === add(4, 1);\n// identity\nadd(n, 0) === n;\n// distributive\nmultiply(2, add(3, 4)) === add(multiply(2, 3), multiply(2, 4));\n")),Object(a.b)("p",null,"These theorems and formulas make the basis of our work."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"compose :: (b -> c) -> (a -> b) -> (a -> c)\nid :: a -> a\n")),Object(a.b)("p",null,"You need both a composition AND an identity to form a ",Object(a.b)("inlineCode",{parentName:"p"},"category"),"."),Object(a.b)("p",null,"Note: The identity function is if you give it a value it will give it right back."),Object(a.b)("p",null,"So we can get some category laws:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// left identity\ncompose(\n  id,\n  f,\n) === f;\n// right identity\ncompose(\n  f,\n  id,\n) === f;\n// associativity\ncompose(\n  compose(\n    f,\n    g,\n  ),\n  h,\n) ===\n  compose(\n    f,\n    compose(\n      g,\n      h,\n    ),\n  );\n")),Object(a.b)("h3",{id:"objects"},"Objects"),Object(a.b)("p",null,"How do we deal with errors, side effects etc? We use objects. Think of them like:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Container/Wrappers for values (also known as Identity)"),Object(a.b)("li",{parentName:"ol"},"No methods"),Object(a.b)("li",{parentName:"ol"},"Not nouns"),Object(a.b)("li",{parentName:"ol"},"Probably won't be making your own often")),Object(a.b)("p",null,"The container:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"var _Container = function(val) {\n  this.val = val;\n};\n\n// helper for during compose use\nvar Container = function(x) {\n  return new _Container(x);\n};\n\nContainer(3);\n// => _Container { val: 3}\n")),Object(a.b)("p",null,"In order to map over our container, we can add the following:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'var _Container.prototype.map = function(f) {\n  // this is the important part - it is running\n  // the function on the value in the container\n  return Container(f(this.val))\n}\n\nContainer("flamethrower").map(function(s) { return capitalize(s)})\nContainer("flamethrower").map(capitalize)\n// => Container("Flamethrower")\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The general idea is that we go within the object and run a function on the object.")),Object(a.b)("p",null,"These themselves are what we know as a ",Object(a.b)("inlineCode",{parentName:"p"},"functor"),"."),Object(a.b)("p",null,"More example of this in action with the ",Object(a.b)("inlineCode",{parentName:"p"},"ramda.map")," function:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"map(match(/cat/g), Container('catsup'));\n//=> Container([\"cat\"])\nmap(\n  compose(\n    first,\n    reverse,\n  ),\n  Container('dog'),\n);\n//=> Container(\"g\")\n")),Object(a.b)("h3",{id:"maybe-functor"},"Maybe Functor"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"An object or data structure you can map over" - a functor')),Object(a.b)("p",null,"Let's take an example that runs in null issues:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"var getElement = document.querySelector;\nvar getNameParts = compose(\n  split(''),\n  get('value'),\n  getElement,\n);\n\ngetNameParts('#full_name');\n//=> ['Jonathan', 'Gregory', 'Brandis']\n")),Object(a.b)("p",null,"So, meeting our first Functor: ",Object(a.b)("inlineCode",{parentName:"p"},"Maybe"),"."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Captures a null check"),Object(a.b)("li",{parentName:"ol"},"The value inside may not be there"),Object(a.b)("li",{parentName:"ol"},"Sometimes has two subclasses ",Object(a.b)("inlineCode",{parentName:"li"},"Just / Nothing")),Object(a.b)("li",{parentName:"ol"},"Sometimes called ",Object(a.b)("inlineCode",{parentName:"li"},"Option")," with subclassess ",Object(a.b)("inlineCode",{parentName:"li"},"Some / None"))),Object(a.b)("p",null,"The idea is that you may or may not have a value in your container."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'var _Maybe.prototype.map = function(f) {\n  return this.val ? Maybe(f(this.val)) : Maybe(null)\n}\n\nmap(capitalize, Maybe("flame"))\n//=> Maybe("Flame")\nmap(capitalize, Maybe(null))\n//=> Maybe(null)\n')),Object(a.b)("p",null,"This in application:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"var firstMatch = compose(\n  map(first),\n  Maybe,\n  match(/cat/g),\n);\nfirstMatch('dogsup');\n//=> Maybe(null)\n")),Object(a.b)("p",null,"Worthy inclusions from the course questions:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const _ = require('ramda');\nconst inc = _.add(1);\n\nmap(inc, [4]); // [5]\nmap(inc, Identity(4)); // Identity(5)\nmap(map(inc), Identity([4])); // Identity([5])\n")),Object(a.b)("p",null,"This can also trip people up:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"var xs = Identity(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);\nvar ex2 = map(_.head);\nassertEqual(Identity('do'), ex2(xs)); // Note the identity gets passed in here!\n")),Object(a.b)("h3",{id:"either-w-subclasses-left-or-right"},"Either w/ subclasses Left or Right"),Object(a.b)("p",null,"Typically used for pure error handling. Like Maybe, but with an error message embedded. Has two subclasses: Left/Right. Mays the function over a Right, ignores the Left."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"map(function(x) {\n  return x + 1;\n}, Right(2));\n//=> Right(3)\nmap(function(x) {\n  return x + 1;\n}, Left('some message'));\n//=> Left('some message') for error handling\n")),Object(a.b)("p",null,"A more practical application:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"var determineAge = function(user) {\n  return user.age ? Right(user.age) : Left('could not get age');\n};\nvar yearOlder = compose(\n  map(add(1)),\n  determineAge,\n);\n\nyearOlder({ age: 22 });\n//=> Right(23)\n\nyearOlder({ age: null });\n//=> Left(\"couldn't get age\")\n")),Object(a.b)("h3",{id:"io"},"IO"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"IO")," is a functor that puts a function inside it (not a string, number etc)."),Object(a.b)("p",null,"Facets of IO:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'A lazy computation "builder"'),Object(a.b)("li",{parentName:"ol"},"Typically used to contain side effects"),Object(a.b)("li",{parentName:"ol"},"You must ",Object(a.b)("inlineCode",{parentName:"li"},"runIO")," to perform the operation"),Object(a.b)("li",{parentName:"ol"},"Map appends the function to a list of things to run with the effectful value")),Object(a.b)("p",null,"Examples:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"var email_io = IO(function() {\n  return $('#email').val();\n});\nvar msg_io = map(concat('welcome'), email_io);\n\nrunIO(msg_io);\n//=> \"welcome steve@foodie.net\"\n")),Object(a.b)("p",null,"An example of building up an IO:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"var getBgColor = compose(\n  get('background-color'),\n  JSON.parse,\n);\nvar bgPref = compose(\n  map(getBgColor),\n  Store.get('preferences'),\n);\n\nvar app = bgPref();\n//=> IO()\n\nrunIO(app);\n//=> #efefef\n")),Object(a.b)("h3",{id:"other-functors"},"Other Functors"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"EventStream: Infinite list of results, dual of array, map is sometimes lazy, calls the mapped function each time an event happens. Similar-ish to RxJS. They used Bacon in this example."),Object(a.b)("li",{parentName:"ol"},'Future: Has an eventual value, similar to a promise but "lazy", you must "fork" it to kick it off, it takes a function as its value, calls the function with it\'s result once it\'s there.')),Object(a.b)("h3",{id:"functor-law-properties"},"Functor Law Properties"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// identity\nmap(id) === id;\n\n// composition\ncompose(\n  map(f),\n  map(g),\n) ===\n  map(\n    compose(\n      f,\n      g,\n    ),\n  );\n")),Object(a.b)("p",null,"An example functor:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// reverse :: String -> String\n// toArray :: a -> Array a\nvar toArray = function(x) {\n  return [x];\n};\n\ncompose(\n  toArray,\n  reverse,\n)('bingo');\n//=> [ognib]\n\ncompose(\n  map(reverse),\n  toArray,\n)('bingo');\n//=> [ognib]\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Natural Transformations")," is when you take one functor to another without knowing anything about the values."),Object(a.b)("p",null,"An example is ",Object(a.b)("inlineCode",{parentName:"p"},"Maybe"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"maybeToArray(Maybe(2));\nmaybeToArray(Maybe(null));\n")),Object(a.b)("h3",{id:"monads"},"Monads"),Object(a.b)("p",null,"Monads = Pointed Functors ",Object(a.b)("inlineCode",{parentName:"p"},"of :: a -> F a")," aka: pure, return, unit, point."),Object(a.b)("p",null,"Anything with an ",Object(a.b)("inlineCode",{parentName:"p"},"of")," is a Pointed Functor:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"Container.of(split);\n// Container(split)\n\nFuture.of(split);\n// Future(split)\n\nMaybe.of(split);\n// Maybe(split)\n\nEventStream.of(split);\n// EventStream(split)\n")),Object(a.b)("p",null,'"Nest computations" - just a pointed functor with one the following functions: ',Object(a.b)("inlineCode",{parentName:"p"},"mjoin"),", ",Object(a.b)("inlineCode",{parentName:"p"},"chain"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-haskell"}),"mjoin :: M M a -> M a\nchain :: (a -> M b) -> M a -> M b\n")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"mjoin(Container(Container(2))); //=> Container(2)\n\n// in the given example\nvar getTrackingId = compose(\n  Maybe,\n  get('tracking_id'),\n);\nvar findOrder = compose(\n  Maybe,\n  Api.findOrder,\n);\nvar getOrderTracking = compose(\n  mjoin,\n  map(getTrackingId),\n  findOrder,\n);\n\nvar renderPage = compose(\n  map(renderTemplate),\n  getOrderTracking,\n);\nrenderPage(379);\n//=> Maybe(Html)\n")),Object(a.b)("p",null,"Converting deep nested maps:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// safeGet returns a Maybe functor\nvar ex1 = compose(\n  map(map(safeGet('name'))),\n  map(safeGet('street')),\n  safeGet('address'),\n);\n\n// with a mjoin, you could do...\nvar ex1 = compose(\n  mjoin\n  map(safeGet('name')),\n  mjoin,\n  map(safeGet('street')),\n  safeGet('address'),\n);\n\n// but given we know chain is just \"monad\",\n// then mjoin, we could...\nvar ex1 = compose(\n  chain(safeGet('name')),\n  chain(safeGet('street')),\n  safeGet('address'),\n);\n")),Object(a.b)("p",null,"There is also such thing as ",Object(a.b)("inlineCode",{parentName:"p"},"mcompose")," which will remove the need for the child ",Object(a.b)("inlineCode",{parentName:"p"},"chain")," function."))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Functional-Programming/Hardcore-FP-In-JavaScript.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-functional-programming-hardcore-fp-in-java-script-md-cc04a1e48e1b09069e4c.js.map