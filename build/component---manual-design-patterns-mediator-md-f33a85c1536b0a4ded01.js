(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{"9O6N":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Mediator.md"}});var c={_frontmatter:o},s=i.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(s,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"mediator"},"Mediator"),Object(a.b)("p",null,"Mediator is a behavioural design pattern which helps when there are many objects communicating with each other."),Object(a.b)("p",null,"The Mediator itself is an object that encapsulates how one or more objects interact with each other. It controls how these object communication and resticts dependencies required to manage."),Object(a.b)("h2",{id:"components"},"Components"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Mediator: Defines interface for communication between ",Object(a.b)("inlineCode",{parentName:"li"},"Colleague")," objects."),Object(a.b)("li",{parentName:"ul"},"ConcreteMediator: Implements ",Object(a.b)("inlineCode",{parentName:"li"},"Mediator"),", has awareness of ",Object(a.b)("inlineCode",{parentName:"li"},"colleagues")," and facilitates communication between."),Object(a.b)("li",{parentName:"ul"},"Colleague: Defines interface for communication with other ",Object(a.b)("inlineCode",{parentName:"li"},"Colleagues")," through the ",Object(a.b)("inlineCode",{parentName:"li"},"Mediator"),"."),Object(a.b)("li",{parentName:"ul"},"ConcreteColleague: Implements the ",Object(a.b)("inlineCode",{parentName:"li"},"Colleague")," interface an communicates to other colleagues through its ",Object(a.b)("inlineCode",{parentName:"li"},"Mediator"),".")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"In this example, we will have a ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteMediator")," that will ensure certain ",Object(a.b)("inlineCode",{parentName:"p"},"Participants")," receive a message based on the ",Object(a.b)("inlineCode",{parentName:"p"},"Participant")," sending the ",Object(a.b)("inlineCode",{parentName:"p"},"Broadcast"),"."),Object(a.b)("p",null,"We will use the mediator to ensure messages sent from the ",Object(a.b)("inlineCode",{parentName:"p"},"FirstParticipant")," is broadcasted to both ",Object(a.b)("inlineCode",{parentName:"p"},"FirstParticipant")," and ",Object(a.b)("inlineCode",{parentName:"p"},"SecondParticipant")," while messages from the ",Object(a.b)("inlineCode",{parentName:"p"},"SecondParticipant")," are only reached by the ",Object(a.b)("inlineCode",{parentName:"p"},"FirstPartiicpant")," and not itself."),Object(a.b)("p",null,"The abstract ",Object(a.b)("inlineCode",{parentName:"p"},"Participant")," class in this example is the ",Object(a.b)("inlineCode",{parentName:"p"},"Colleague")," and the subclasses are the ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteColleague")," classes."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"interface Mediator {\n  broadcast(msg: String, sender: Participant): void;\n}\n\nclass ConcreteMediator implements Mediator {\n  public firstParticipant: Participant;\n  public secondParticipant: Participant;\n\n  broadcast(msg: String, sender: Participant): void {\n    if (sender === this.firstParticipant) {\n      this.firstParticipant.receiveMsg(msg);\n      this.secondParticipant.receiveMsg(msg);\n    }\n\n    if (sender === this.secondParticipant) {\n      this.firstParticipant.receiveMsg(msg);\n    }\n  }\n}\n\nabstract class Participant {\n  public mediator: Mediator;\n\n  constructor(mediator: Mediator) {\n    this.mediator = mediator;\n  }\n\n  broadcast(msg: String): void {\n    this.mediator.broadcast(msg, this);\n  }\n\n  receiveMsg(msg: String): void {\n    console.log('recieveMsg:', msg);\n  }\n}\n\nclass FirstParticipant extends Participant {\n  constructor(mediator: Mediator) {\n    super(mediator);\n  }\n\n  broadcast(msg: String) {\n    console.log('First participant customized logic');\n    super.broadcast(msg);\n  }\n}\n\nclass SecondParticipant extends Participant {\n  constructor(mediator: Mediator) {\n    super(mediator);\n  }\n\n  broadcast(msg: String) {\n    console.log('Second participant customized logic');\n    super.broadcast(msg);\n  }\n}\n\n(function main() {\n  const mediator = new ConcreteMediator();\n  const firstParticipant = new FirstParticipant(mediator);\n  const secondParticipant = new SecondParticipant(mediator);\n\n  mediator.firstParticipant = firstParticipant;\n  mediator.secondParticipant = secondParticipant;\n\n  firstParticipant.broadcast(\n    'FirstParticipant sends message to FirstParticipant, SecondParticipant'\n  );\n  secondParticipant.broadcast(\n    'SecondParticipant sends message to FirstParticipant'\n  );\n})();\n")),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.infoworld.com/article/3204528/how-to-use-the-mediator-design-pattern-in-c.html"}),"Mediator in C#"))))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Mediator.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-mediator-md-f33a85c1536b0a4ded01.js.map