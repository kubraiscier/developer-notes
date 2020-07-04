(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{"fos+":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Emitter/README.md"}});var i={_frontmatter:o},b=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,l({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"emitter"},"Emitter"),Object(n.b)("p",null,"Use the Emitter to create funnels throughout apps and servers. This will help keep infomation decoupled."),Object(n.b)("h2",{id:"levels"},"Levels"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Level"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Desc"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"TRACE"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"This is a code smell if used in production. This should be used during development to track bugs, but never committed to your VCS.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"DEBUG"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Log at this level about anything that happens in the program. This is mostly used during debugging, and I’d advocate trimming down the number of debug statement before entering the production stage, so that only the most meaningful entries are left, and can be activated during troubleshooting.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"INFO"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Log at this level all actions that are user-driven, or system specific (ie regularly scheduled operations…)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"NOTICE"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"This will certainly be the level at which the program will run when in production. Log at this level all the notable event that are not considered an error.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"WARN"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Log at this level all event that could potentially become an error. For instance if one database call took more than a predefined time, or if a in memory cache is near capacity. This will allow proper automated alerting, and during troubleshooting will allow to better understand how the system was behaving before the failure.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"ERROR"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Log every error conditions at this level. That can be API calls that return errors or internal error conditions.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"FATAL"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Too bad it’s doomsday. Use this very scarcely, this shouldn’t happen a lot in a real program. Usually logging at this level signifies the end of the program. For instance, if a network daemon can’t bind a network socket, log at this level and exit is the only sensible thing to do.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"EVENT"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Log an event that gets sent out to various event resources. Examples include events that need to be sent out to Google analytics etc.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"SUCCESS"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Anything that requires a success message to be sent out should go here. Examples include events that require a message to Slack etc.")))),Object(n.b)("p",null,"There are just examples. You can create funnels by re-emitting particular events down certain pathways. These can be either higher order or lower order."),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"http://www.masterzen.fr/2013/01/13/the-10-commandments-of-logging/"}),"10 Commandments of Logging"))))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Emitter/README.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-emitter-readme-md-0f2e8a75520108b9456b.js.map