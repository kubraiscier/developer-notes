(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{EZcS:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),o=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Prototype-Pattern.md"}});var c={_frontmatter:s},i=o.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(i,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"prototype-pattern"},"Prototype Pattern"),Object(r.b)("p",null,'GoF defines prototype pattern as "Specify the kind of objects to create using a prototypical instance, and create new objects by copying this prototype."'),Object(r.b)("p",null,"The components used in this pattern:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Prototype: An interface or abstract classes that defined the method to clone itself."),Object(r.b)("li",{parentName:"ul"},"ConcretePrototype: This is the concrete class that will clone itself."),Object(r.b)("li",{parentName:"ul"},"Client: The application object that needs the cloned copies of the object.")),Object(r.b)("h2",{id:"in-code"},"In code"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"interface PersonPrototype {\n    name: string;\n    clone(): PersonPrototype;\n}\n\nclass Tom implements PersonPrototype {\n    private _name:string = 'Tom';\n\n    get name() {\n        return this._name;\n    }\n\n    clone(): PersonPrototype {\n        return new Tom();\n    }\n}\n\nclass Dick implements PersonPrototype {\n    private _name:string = 'Dick';\n\n    get name() {\n        return this._name;\n    }\n\n    clone(): PersonPrototype {\n        return new Dick();\n    }\n}\n\nclass Harry implements PersonPrototype {\n    private _name:string = 'Harry';\n\n    get name() {\n        return this._name;\n    }\n\n    clone(): PersonPrototype {\n        return new Harry();\n    }\n}\n\n// create factory\nabstract class PersonFactory {\n    abstract createPerson(person: string): PersonPrototype;\n}\n\n// concrete factories\nclass PlayerPersonFactory extends PersonFactory {\n    private players: { [player: string]: PersonPrototype; } = {};\n\n    constructor() {\n        super();\n        this.players['Tom'] = new Tom();\n        this.players['Dick'] = new Dick();\n        this.players['Harry'] = new Harry();\n    }\n\n    createPerson(player: string): PersonPrototype {\n        return this.players[player].clone();\n    }\n}\n\n(function main() {\n    const factory = new PlayerPersonFactory();\n    const prototypes = ['Tom', 'Dick', 'Harry'].map((player) => {\n        return factory.createPerson(player)\n    });\n    console.log(prototypes);\n})();\n")),Object(r.b)("h2",{id:"references-and-resources"},"References And Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://www.codeproject.com/Articles/476807/Understanding-and-Implementing-Prototype-Pattern-i"}),"Understanding The Prototype Design Pattern"))))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Prototype-Pattern.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-prototype-pattern-md-16bc9405a8e88d071af1.js.map