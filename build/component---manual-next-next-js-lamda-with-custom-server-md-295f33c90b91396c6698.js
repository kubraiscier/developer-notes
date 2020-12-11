(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{"6Rwr":function(e,r,n){"use strict";n.r(r),n.d(r,"_frontmatter",(function(){return o})),n.d(r,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var t=n("/FXl"),s=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Next/NextJS-Lamda-With-Custom-Server.md"}});var c={_frontmatter:o},p=s.a;function l(e){var r=e.components,n=function(e,r){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(t.b)(p,a({},c,n,{components:r,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"nextjs-lambda-w-express-server"},"NextJS Lambda w/ Express Server"),Object(t.b)("p",null,"Not huge amounts of info here."),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-js"}),"// server.js\n\nconst express = require('express');\nconst next = require('next');\n\nconst port = parseInt(process.env.PORT, 10) || 3000;\nconst dev = process.env.NODE_ENV !== 'production';\nconst app = next({ dev });\nconst handle = app.getRequestHandler();\n\napp\n  .prepare()\n  .then(() => {\n    const server = express();\n\n    server.get('/', (req, res) => {\n      return app.render(req, res, '/', req.params);\n    });\n\n    server.get('/about', (req, res) => {\n      return app.render(req, res, '/about', req.params);\n    });\n\n    server.get('*', (req, res) => {\n      return handle(req, res);\n    });\n\n    server.listen(port, err => {\n      if (err) throw err;\n      console.log(`> Ready on http://localhost:${port}`);\n    });\n  })\n  .catch(ex => {\n    console.log(ex);\n    process.exit(1);\n  });\n")),Object(t.b)("h2",{id:"resources"},"Resources"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},Object(t.b)("a",a({parentName:"li"},{href:"https://awesomeopensource.com/project/mattdamon108/nextjs-with-lambda"}),"Online forum")),Object(t.b)("li",{parentName:"ol"},Object(t.b)("a",a({parentName:"li"},{href:"https://github.com/awslabs/aws-serverless-express"}),"AWS Serverless Express"))))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Next/NextJS-Lamda-With-Custom-Server.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-next-next-js-lamda-with-custom-server-md-295f33c90b91396c6698.js.map