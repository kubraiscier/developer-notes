(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{aR2Y:function(e,n,r){"use strict";r.r(n),r.d(n,"_frontmatter",(function(){return o})),r.d(n,"default",(function(){return s}));r("1c7q"),r("abGl"),r("gZHo"),r("Fdmb"),r("Ir+3"),r("2mQt"),r("mXGw");var t=r("/FXl"),a=r("TjRS");r("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Proxy-Pattern.md"}});var c={_frontmatter:o},l=a.a;function s(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(t.b)(l,i({},c,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"proxy-pattern"},"Proxy Pattern"),Object(t.b)("p",null,"The Proxy object in the design pattern can:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Can be used to substitude for another object (Subject)"),Object(t.b)("li",{parentName:"ul"},"Implements additional functionality to control the access to this subject")),Object(t.b)("p",null,"This enables to work through a Proxy object to perform additional functionality when accessing a subject. For example, to check the access rights of a client accessing a sensitive object."),Object(t.b)("h2",{id:"car-driver-example"},"Car Driver Example"),Object(t.b)("p",null,"In this example, we will create a class ",Object(t.b)("inlineCode",{parentName:"p"},"ProxyCar")," that will act as a proxy for the ",Object(t.b)("inlineCode",{parentName:"p"},"Car")," class by ensure that you of a correct age to drive the car (",Object(t.b)("inlineCode",{parentName:"p"},"driveCar")," function)."),Object(t.b)("p",null,"This simple example can be replicated to help proxy things such as network requests or authentication to certain classes."),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"interface ICar {\n  driveCar(): void;\n}\n\n// Real Object\nclass Car implements ICar {\n  driveCar() {\n    console.log('Car has been driven!');\n  }\n}\n\nclass ProxyCar implements ICar {\n  private _driver: Driver;\n  private _realCar: ICar;\n\n  constructor(driver: Driver) {\n    this._driver = driver;\n    this._realCar = new Car();\n  }\n\n  driveCar() {\n    if (this._driver.age < 16) {\n      console.log('Driver is too young to drive');\n    } else {\n      this._realCar.driveCar();\n    }\n  }\n}\n\nclass Driver {\n  public age: number;\n\n  constructor(age: number) {\n    this.age = age;\n  }\n}\n\n(function main() {\n  const carWithIneligibleDriver: ICar = new ProxyCar(new Driver(15));\n  carWithIneligibleDriver.driveCar(); // prints 'Driver is too young to drive'\n\n  const carWithEligibleDriver: ICar = new ProxyCar(new Driver(25));\n  carWithEligibleDriver.driveCar(); // prints 'Car has been driven'\n})()\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Proxy-Pattern.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-proxy-pattern-md-0dac8f8350dab72c38f8.js.map