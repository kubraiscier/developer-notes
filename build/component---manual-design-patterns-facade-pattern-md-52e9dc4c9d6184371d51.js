(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{p7R8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return l}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),s=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Facade-Pattern.md"}});var c={_frontmatter:o},i=s.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(i,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"facade-pattern"},"Facade Pattern"),Object(n.b)("p",null,"The Facade Pattern is a ",Object(n.b)("inlineCode",{parentName:"p"},"structural"),' design pattern that is used to, according the the Gang Of Four book, "Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use."'),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("p",null,'In the example below, we will look at basic facade that takes the different operations required to start a running race of the basic phrase "Get ready! Get set! Go!" by breaking down each sentence into a phase.'),Object(n.b)("h2",{id:"participants"},"Participants"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Facade: (RunningRaceFacade)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"knows which subsystem classes are responsible for what operation."),Object(n.b)("li",{parentName:"ul"},"delegates parts of a client request to the appropriate subsystem objects."))),Object(n.b)("li",{parentName:"ul"},"Subsystem classes: (PhaseOneSystem, PhaseTwoSystem, PhaseThreeSystem)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"contains functionality for subsystem."),Object(n.b)("li",{parentName:"ul"},"executes work delegated by Facade object."),Object(n.b)("li",{parentName:"ul"},"has no knowledge of facade or reference to it.")))),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"class PhaseOneSystem {\n  getReady() {\n    console.log('Get ready!');\n  }\n}\n\nclass PhaseTwoSystem {\n  getSet() {\n    console.log('Get set!');\n  }\n}\n\nclass PhaseThreeSystem {\n  go() {\n    console.log('Go!');\n  }\n}\n\nclass RunningRaceFacade {\n\n  private _phaseOne: PhaseOneSystem;\n  private _phaseTwo: PhaseTwoSystem;\n  private _phaseThree: PhaseThreeSystem;\n\n  constructor() {\n    this._phaseOne = new PhaseOneSystem();\n    this._phaseTwo = new PhaseTwoSystem();\n    this._phaseThree = new PhaseThreeSystem();\n  }\n\n  beginRace() {\n    this._phaseOne.getReady();\n    this._phaseTwo.getSet();\n    this._phaseThree.go();\n  }\n}\n\n(function main() {\n  const race = new RunningRaceFacade();\n  race.beginRace(); // logs out \"Get ready! Get Set! Go! on separate lines\n})();\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Facade-Pattern.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-facade-pattern-md-52e9dc4c9d6184371d51.js.map