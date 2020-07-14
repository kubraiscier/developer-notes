(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{"5r5t":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return o}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/TypeScript/TS-Fundamentals-v2.md"}});var c={_frontmatter:s},l=r.a;function o(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(l,i({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"typescript-3-fundamentals-v2"},"TypeScript 3 Fundamentals v2"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",i({parentName:"li"},{href:"vhttps://frontendmasters.com/courses/typescript-v2"}),"TS Resources")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",i({parentName:"li"},{href:"https://github.com/mike-works/typescript-fundamentals/"}),"GitHub Resource"))),Object(a.b)("h2",{id:"variables"},"Variables"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// basic typing\nlet x: string = 'string';\nx = 42; // ERROR\n")),Object(a.b)("h2",{id:"tuples"},"Tuples"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"let bb: [numer, string, string, number] = [\n  123,\n  'Fake Street',\n  'Nowhere, USA',\n  10110,\n];\n\nbb = [1, 2, 3]; // ERROR\nbb.push(1, 2); // no type safety error :(\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Tuples will need the type specified at declaration, otherwise it could infer an array of the wrong type.")),Object(a.b)("h2",{id:"exhaustive-switches"},"Exhaustive Switches"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"enum constants = {\n  mrf = \"mrf\"\n}\n\n// doesn't need a default\nconst getValue = (value: constants) => {\n  switch (value) {\n    case constants.mrf:\n      return 'value'\n  }\n}\n")),Object(a.b)("h2",{id:"intersectional-and-union-types"},"Intersectional and Union Types"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"type A = {\n  a: number;\n};\n\ntype B = {\n  b: number;\n};\n\ntype IntersectionAB = A | B;\n// valid\nconst aObj: IntersectionAB = {\n  a: 32,\n};\n\nconst bObj: IntersectionAB = {\n  b: 32,\n};\n\n// invalid\nconst cObj: IntersectionAB = {\n  a: 32,\n  b: 32,\n};\n\ntype UnionAB = A | B;\n// invalid\nconst aObj: UnionAB = {\n  a: 32,\n};\n\nconst bObj: UnionAB = {\n  b: 32,\n};\n\n// valid\nconst cObj: UnionAB = {\n  a: 32,\n  b: 32,\n};\n")),Object(a.b)("h2",{id:"type-systems"},"Type Systems"),Object(a.b)("p",null,"There are two types:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Nominal Type Systems (Java): is x an instance of a class/type named ",Object(a.b)("inlineCode",{parentName:"li"},"HTMLInputElement"),"?"),Object(a.b)("li",{parentName:"ol"},"Structural Type Systems (TS): cares only about shape.")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"function validateInputField(input: HTMLInputElement) {\n  /* ... */\n}\n\nvalidateInputField(x);\n")),Object(a.b)("h2",{id:"specificity"},"Specificity"),Object(a.b)("p",null,'TypeScript uses "wider vs narrower" to describle specificity. That means that we go from wide ',Object(a.b)("inlineCode",{parentName:"p"},"any")," down to nothing ",Object(a.b)("inlineCode",{parentName:"p"},"never")," with everything else in between."),Object(a.b)("h2",{id:"type-aliases--extends"},"Type Aliases & extends"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Allow us to give a type a name.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Interfaces extend from interfaces, classes extend from classes."),Object(a.b)("li",{parentName:"ul"},"Interfaces cannot handle primitive types. JavaScript object and subobjects only (things with prototypes)."),Object(a.b)("li",{parentName:"ul"},"Main difference is you cannot implement/extend a union type.")),Object(a.b)("h2",{id:"generics"},"Generics"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Generics parameterize types in the same way functions parameterize valus.")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// example of the parameterized function\nfunction wrappedValue(x) {\n  return {\n    value: x,\n  };\n}\n\n// example now as generic\n// the common convention is T\ninterface wrappedValue<X> {\n  value: X;\n}\n\nlet val: WrappedValue<string> = { value: '' };\nval.value; // expects string and shows that on the tooltip\n")),Object(a.b)("h3",{id:"type-parameters"},"Type parameters"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// this sets the fallback to any\ninterface wrappedValue<X = any> {\n  value: X;\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"TypeScript can also infer type ahead in the tooltip. Very handy use.")),Object(a.b)("h3",{id:"constraints-and-scope"},"Constraints and scope"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Extending a generc means setting a minimum constraint that a generic must meet.")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// an example of ensure that T has an id\nfunction arrayToDict<T extends { id: string }>(array: T[]): { [k: string]: T } {\n  const out: {\n    [k: string]: T;\n  } = {};\n  array.forEach(val => {\n    out[val.id] = val;\n  });\n  return out;\n}\n")),Object(a.b)("p",null,"Type parameters are also associated with scope:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"function startTuple<T>(a: T) {\n  return function finishTuple<U>(b: U) {\n    return [a, b] as [T, U];\n  };\n}\n")),Object(a.b)("h3",{id:"generics-in-use-with-interfaces"},"Generics in use with interfaces"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"interface Shape {\n  sides: number;\n}\n\ninterface Square extends Shape {\n  width: number;\n}\n\ninterface Circle extends Shape {\n  radius: number;\n}\n\n// what makes it worth while is it means any interface\n// that extends Shape\nfunction drawShape<S extends Shape>(shapes: S[]): S[] {\n  return; // fill in here\n}\n\nconst test1: Shape = //...\nconst test2: Circle = //...\ndrawShape(test1) // valid\ndrawShape(test2) // valid\n")),Object(a.b)("h3",{id:"use-cases-for-generics"},"Use cases for Generics"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Generics are necessary when we want to describe a relationship between two or more types (i.e., a function argument and return type)."),Object(a.b)("li",{parentName:"ol"},"Aside from interfaces and type aliases, if a type parameter is used only once, it can probably be eliminated.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Relating this ie ",Object(a.b)("inlineCode",{parentName:"p"},"I take T and will give you back a Dictionary of type T"),".")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"interface Shape {\n  draw();\n}\ninterface Circle extends Shape {\n  radius: number;\n}\n\nfunction drawShapes1<S extends Shape>(shapes: S[]) {\n  shapes.forEach(s => s.draw());\n}\n\n// this is simpler. Above type param is not necessary\nfunction drawShapes2(shapes: Shape[]) {\n  shapes.forEach(s => s.draw());\n}\n")),Object(a.b)("h3",{id:"interesting-tidbit"},"Interesting tidbit"),Object(a.b)("p",null,"The following is both acceptable as far as TS is concerned:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// using interface\ninterface Shape {\n  sides: number;\n}\n\ninterface Circle extends Shape {\n  radius: number;\n}\n\ninterface Cube extends Shape {\n  threeD: boolean;\n}\n\nfunction createCircle<T extends Shape>(shape: T): T {\n  shape.sides = 1;\n  return shape;\n}\n\n// using types\ntype Shape2 = {\n  sides: number;\n};\n\ntype Circle2 = Shape2 & {\n  radius: number;\n};\n\ntype Cube2 = Shape2 & {\n  threeD: boolean;\n};\n\nfunction createCircle2<T extends Shape2>(shape: T): T {\n  shape.sides = 1;\n  return shape;\n}\n")),Object(a.b)("h3",{id:"dictionary-exercise"},"Dictionary exercise"),Object(a.b)("p",null,"An example of creating a dictionary with the same type as the value."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"export type Dict<T> = {\n  [K: string]: T | undefined;\n};\n\n// transforming from and then to\nexport function mapDict<T, S>(dict: Dict<T>, fn(arg: T, idx: number) => S): Dict<S> {\n  const out: Dict<S> = {}\n  Object.keys(dict).forEach((dKey, idx) => {\n    const thisItem = dict[dKey]\n    if (typeof thisItem !== undefined) {\n      out[dKey] = fn(thisIdem, idx);\n    }\n  })\n}\n")),Object(a.b)("h2",{id:"top-and-bottom-types"},"Top and Bottom Types"),Object(a.b)("p",null,"Two top types:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"any")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"unknown")," - can receive any value")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"let myAny: any = 32;\nlet myUnknown: unknown = 'hello, unknown';\n\nmyAny.foo.bar.baz; // works okay\nmyUnknown.foo; // error thrown\n")),Object(a.b)("p",null,"When to use any?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When you want to maintan flexibility.")),Object(a.b)("p",null,"When to use unknown?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Good for "private" values.')),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"if (typeof myUnknown === 'string') {\n  myUnknown.split(',');\n}\nif (myUnknown instanceof Promise) {\n  myUnknown.then(x => console.log(x));\n}\n\n// note on return type\ntype HasEmail = {\n  name: string;\n  email: string;\n};\nfunction isHasEmail(x: any): x is HasEmail {\n  return typeof x.name === 'string' && x.email === 'string';\n}\n\nif (isHasEmail(myKnown)) {\n  // do things\n}\n\n// most common guard\nfunction isDefined<T>(arg: T | undefined): arg is T {\n  return typeof arg !== 'undefined';\n}\n\nconst list = ['a', 'b', 'c', undefined];\nconst filtered = list.filter(isDefined);\n")),Object(a.b)("h2",{id:"unknowns-and-branded-types"},"Unknowns and Branded Types"),Object(a.b)("p",null,"Branding and unbranding helps with unsafe issues. We cast to unknown and brand that enables us to cast without type errors."),Object(a.b)("p",null,"Withthe differing types, we can still ensure that things do not accidentally get mismatched when branding or unbranding."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This vs ",Object(a.b)("inlineCode",{parentName:"p"},"private"),"? Private can only be used in classes.")),Object(a.b)("p",null,"This is useful for library authors who want to keep things away from other users to change up."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"interface BrandedA {\n  __this_is_branded_with_a: 'a';\n}\n\nfunction brandA(value: string): BrandedA {\n  return (value as unknown) as BrandedA;\n}\n\nfunction unbrandA(value: BrandedA): string {\n  return (value as unknown) as string;\n}\n\ninterface BrandedB {\n  __this_is_branded_with_b: 'b';\n}\n\nfunction brandB(value: { abc: string }): BrandedB {\n  return (value as unknown) as BrandedB;\n}\n\nfunction unbrandB(value: BrandedB): { abc: string } {\n  return (value as unknown) as { abc: string };\n}\n\nlet secretA = brandA('Secret value');\nlet secretB = brandA({ abc: 'Another secret value' });\n\nsecretA = secretB; // error: can't mix up\nunbrandB(secretA); // cannot happen\nunbrandA(secretB); // cannot happen\n")),Object(a.b)("h2",{id:"bottom-types"},"Bottom Types"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"never: If you create ",Object(a.b)("inlineCode",{parentName:"li"},"never")," type, you shouldn't be here.")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"let x = 'abc' as string | number;\n\nif (typeof x === 'string') {\n  x.split(', ');\n} else if (typeof x === 'number') {\n  x.toFixed(2);\n} else {\n  // x is a never here\n}\n")),Object(a.b)("p",null,"Here is an example creating an unreachable error:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"class UnreachableError extends Error {\n  constructor(val: never, message: string) {\n    super(`TypeScript thought we could never end up here ${message}`);\n  }\n}\n\nlet x = 4 as string | number;\n\nif (typeof x === 'string') {\n  x.split(', ');\n} else if (typeof x === 'number') {\n  x.toFixed(2);\n} else {\n  // if this isn't here, hates JavaScript debugging\n  // x is a never here\n  throw new UnreachableError(x, 'x should be string or number');\n}\n\n// What happens if x changes to string | number | boolean?\n// It will throw a runtime error saying you need to handle the case.\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This error is used for a runtime error!")),Object(a.b)("h2",{id:"advanced-types"},"Advanced Types"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"keyof")," - gets the key"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"typeof")," - gets the typeof an element"),Object(a.b)("li",{parentName:"ul"},"Conditional type that uses a ternary.")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// Conditional ternany\ntype EventualType<T> = T extends Promise<infer S>\n  ? S //extract the type the promise resolves to\n  : T; // otherwise just let T pass through;\n")),Object(a.b)("h2",{id:"utility-types"},"Utility Types"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Partial: makes all optional"),Object(a.b)("li",{parentName:"ul"},"Pick: choose specific properties")),Object(a.b)("h2",{id:"declaration-merging"},"Declaration Merging"),Object(a.b)("p",null,"You can stack class, namespace and interface on top each other and all will be exported under the same value and be interpretable based on use."))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/TypeScript/TS-Fundamentals-v2.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-type-script-ts-fundamentals-v-2-md-abad69f0d612fa8ff536.js.map