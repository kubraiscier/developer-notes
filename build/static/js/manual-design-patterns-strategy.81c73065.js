(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{"./manual/Design-Patterns/Strategy.md":function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return i});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),s={},r="wrapper";function i(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(a.b)(r,Object.assign({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"strategy"},"Strategy"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"interface WorkoutStrategy {\n  fire(): void;\n  stop?(): void;\n}\n\nclass Running implements WorkoutStrategy {\n  public fire(): void {\n    console.log('Running');\n  }\n}\n\nclass Basketball implements WorkoutStrategy {\n  public fire(): void {\n    console.log('Basketball');\n  }\n}\n\nclass Swimming implements WorkoutStrategy {\n  public fire(): void {\n    console.log('Swimming');\n  }\n}\n\nclass Person {\n  public strategy: WorkoutStrategy;\n  public name: String;\n  constructor(name: string, strategy: WorkoutStrategy) {\n    this.name = name;\n    this.strategy = strategy;\n  }\n\n  workout(): void {\n    console.log(`${this.name} starts:`);\n    this.strategy.fire();\n  }\n}\n\n(function main() {\n  const amanda = new Person('Amanda', new Running());\n  amanda.workout();\n\n  const bill = new Person('Bill', new Swimming());\n  bill.workout();\n})();\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Strategy.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-design-patterns-strategy.101a1afd2417ec7a4a77.js.map