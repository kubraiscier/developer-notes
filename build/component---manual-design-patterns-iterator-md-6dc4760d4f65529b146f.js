(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{sY8y:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),o=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Iterator.md"}});var l={_frontmatter:i},c=o.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(c,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"iterator"},"Iterator"),Object(r.b)("p",null,"A behavioural pattern that is used to access the elements of a collection object in sequential manner without a required understanding of the underlying representation."),Object(r.b)("h2",{id:"components"},"Components"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ConcreteIterator: An interface to define how the ",Object(r.b)("inlineCode",{parentName:"li"},"next")," and ",Object(r.b)("inlineCode",{parentName:"li"},"hasNext")," methods work."),Object(r.b)("li",{parentName:"ul"},"ConcreteCollection: A collection that has knowledge of the iterator and creates the iterator.")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"In this basic example below, we will create a ",Object(r.b)("inlineCode",{parentName:"p"},"ConcreteCollection")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ConcreteIterator")," class to demonstrate how the ",Object(r.b)("inlineCode",{parentName:"p"},"Iterator")," design pattern works."),Object(r.b)("p",null,"Note that after create a collection, we can use the ",Object(r.b)("inlineCode",{parentName:"p"},"createIterator")," method as many times as we want to return seperate instances of an ",Object(r.b)("inlineCode",{parentName:"p"},"iterator")," - for demonstration purposes, we will create a second iterator to do just that."),Object(r.b)("p",null,"The last part of ",Object(r.b)("inlineCode",{parentName:"p"},'"main"')," will demo what happens when you intertwine iterator calls."),Object(r.b)("p",null,"Check the logs for results."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"interface Iterator<T> {\n  next(): T;\n  hasNext(): boolean;\n}\n\ninterface Collection {\n  createIterator(): Iterator<Number>;\n}\n\nclass ConcreteIterator implements Iterator<Number> {\n  private _collection: Number[];\n  private _index: number = 0;\n\n  constructor(newCollection: Number[]) {\n    this._collection = newCollection;\n  }\n\n  next(): any {\n    const result = this._collection[this._index];\n    this.log();\n    this._index += 1;\n    return result;\n  }\n\n  hasNext(): boolean {\n    return this._index < this._collection.length;\n  }\n\n  private log(): void {\n    console.log(`Method called during index: ${this._collection[this._index]}`);\n  }\n}\n\nclass ConcreteCollection implements Collection {\n  private _collection: Number[] = [];\n\n  constructor(collection: Number[]) {\n    this._collection = collection;\n  }\n\n  createIterator(): Iterator<Number> {\n    return new ConcreteIterator(this._collection);\n  }\n}\n\n(function main() {\n  const collection: ConcreteCollection = new ConcreteCollection([0, 1, 2, 3]);\n  const iterator: Iterator<Number> = collection.createIterator();\n  const secondIterator: Iterator<Number> = collection.createIterator();\n\n  while (iterator.hasNext()) {\n    const number: Number = iterator.next();\n    console.log(`Logging: ${number.valueOf()}`);\n  }\n\n  while (secondIterator.hasNext()) {\n    const number: Number = secondIterator.next();\n    console.log(`Second Iterator Logging: ${number.valueOf()}`);\n  }\n\n  // third and fourth iterators intertwined\n  const thirdIterator: Iterator<Number> = collection.createIterator();\n  const fourthIterator: Iterator<Number> = collection.createIterator();\n\n  console.log('thirdIterator', thirdIterator.next());\n  console.log('thirdIterator', thirdIterator.next());\n  console.log('thirdIterator', thirdIterator.next());\n  console.log('fourIterator', fourthIterator.next());\n  console.log('fourIterator', fourthIterator.next());\n  console.log('fourIterator', fourthIterator.next());\n  console.log('fourIterator', fourthIterator.next());\n  console.log('thirdIterator', thirdIterator.next());\n})();\n")),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Iterator_pattern"}),"Wikipedia")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://www.tutorialspoint.com/design_pattern/iterator_pattern.htm"}),"Tutorials Point"))))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Iterator.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-iterator-md-6dc4760d4f65529b146f.js.map