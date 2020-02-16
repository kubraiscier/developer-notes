(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"./manual/Conventional-Commits/Automating-Versioning.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),s={},i="wrapper";function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(i,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"automating-versioning"},"Automating Versioning"),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://medium.com/@jsilvax/automate-semantic-versioning-with-conventional-commits-d76a9f45f2fa"}),"Automate Versioning blog post"))),Object(o.b)("h2",{id:"for-local-packages"},"For local packages"),Object(o.b)("p",null,"The following is the tl;dr for getting this done."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"yarn add husky @commitlint/cli @commitlint/config-conventional standard-version --dev\n")),Object(o.b)("h2",{id:"updating-packagejson"},"Updating package.json"),Object(o.b)("p",null,"For the release script:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'"scripts" : {\n  "release" : "standard-version"\n}\n')),Object(o.b)("p",null,"For commit lint:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'"commitlint": {\n "extends": [\n   "@commitlint/config-conventional"\n ],\n "rules": {\n   "subject-case": [\n     2,\n     "never",\n     [\n       "start-case",\n       "pascal-case"\n     ]\n   ]\n }\n}\n')),Object(o.b)("p",null,"For Husky (with some examples from another project). The follow expects a generation of the ",Object(o.b)("inlineCode",{parentName:"p"},"CHANGELOG.md")," pre-push and also to run the test suite prior to deploy:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'"husky": {\n  "hooks": {\n    "pre-push": "yarn release && yarn test",\n    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"\n  }\n}\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Conventional-Commits/Automating-Versioning.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-conventional-commits-automating-versioning.101a1afd2417ec7a4a77.js.map