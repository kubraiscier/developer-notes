(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{"./manual/React-Notes/React-Hooks.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o={},s="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"react-hooks"},"React Hooks"),Object(c.b)("p",null,"Hooks introduces ",Object(c.b)("inlineCode",{parentName:"p"},"State")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Lifecycle Methods")," to function-based components."),Object(c.b)("p",null,"Hooks make it really easy to share logic between components."),Object(c.b)("h2",{id:"some-basic-hooks"},"Some Basic Hooks"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Function"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"useState"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Component-level state")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"useEffect"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Use 'lifecycle methods'")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"useContext"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Allow use of context system")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"useRef"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Allow func component to use ref system")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"useReducer"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Allow func component to store data through a 'reducer'")))),Object(c.b)("h2",{id:"before-hooks"},"Before Hooks"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// components/App.js\nimport React from 'react';\n\nexport default App extends React.Component {\n    state = {\n        counter: 0\n    }\n\n    handleClick = () => this.setState({counter: this.state.counter++})\n\n    render() {\n        return <div>\n            <button onClick={this.handleClick}>{this.state.counter}</button>\n        </div>\n    }\n}\n")),Object(c.b)("h2",{id:"after-hooks"},"After Hooks"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// components/App.js\nimport React, {useState, useEffect} from 'react';\n\nconst App = () => {\n    const [counter, setCounter] = useState(0);\n\n    const updateCounter = () => setCounter(counter++)\n\n    useEffect(() => {\n        console.log('Counter updated!');\n    }, [counter]);\n\n    return <div>\n        <button onClick={updateCounter}>{counter}</button>\n    </div>\n}\n")),Object(c.b)("h2",{id:"lifecycles-with-useeffect"},"Lifecycles with useEffect"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"useEffect")," allows us to effectively use a combined version of ",Object(c.b)("inlineCode",{parentName:"p"},"componentDidMount")," and ",Object(c.b)("inlineCode",{parentName:"p"},"componentDidUpdate"),"."),Object(c.b)("p",null,"Notes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"useEffect argument function cannot be an async func.")),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import React, {useEffect} from 'react';\n\n// second argument controls whether or not the arrow function is called\nuseEffect(() => {\n    console.log('Counter updated!');\n}, [counter]);\n")),Object(c.b)("h2",{id:"code-reuse-example"},"Code Reuse Example"),Object(c.b)("p",null,"Believe it or not, what we can actually do is abstract the useEffect outside of the function component. "),Object(c.b)("p",null,"This is incredibly useful to create reuseable effects."))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/React-Notes/React-Hooks.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-react-notes-react-hooks.101a1afd2417ec7a4a77.js.map