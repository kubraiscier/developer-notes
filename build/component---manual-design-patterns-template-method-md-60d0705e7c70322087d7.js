(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{"GL+j":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return i}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),o=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Template-Method.md"}});var l={_frontmatter:r},c=o.a;function i(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(c,s({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"template-method"},"Template Method"),Object(a.b)("p",null,"The template method is a class behavioural pattern."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-typescript"}),"abstract class BaseClass {\n  public templateMethod(): void {\n    this.actionA();\n    this.actionB();\n  }\n\n  public actionA(): void {\n    throw new Error('should not be invoker by BaseClass');\n  }\n\n  public actionB(): void {\n    throw new Error('should not be invoker by BaseClass');\n  }\n}\n\nclass ConcreteAClass extends BaseClass {\n  actionA(): void {\n    console.log('A take actionA');\n  }\n\n  actionB(): void {\n    console.log('A take actionB');\n  }\n}\n\nclass ConcreteBClass extends BaseClass {\n  actionA(): void {\n    console.log('B take actionA');\n  }\n\n  actionB(): void {\n    console.log('B take actionB');\n  }\n}\n\n(function main() {\n  const a = new ConcreteAClass();\n  const b = new ConcreteBClass();\n\n  a.templateMethod();\n  b.templateMethod();\n})();\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Template-Method.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-template-method-md-60d0705e7c70322087d7.js.map