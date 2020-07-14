(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{dbuL:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Bash/Autocompletion.md"}});var i={_frontmatter:l},c=a.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(c,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"autocompletion"},"Autocompletion"),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",r({parentName:"li"},{href:"https://iridakos.com/programming/2018/03/01/bash-programmable-completion-tutorial"}),"Bash Autocompletion"))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Write a bash file. This Example autocompletes words for ",Object(o.b)("inlineCode",{parentName:"p"},"example"),' with one of "init install store search deploy bump push pull help sync info remove version autocomplete", and then repeats a similar ordeal for the second word if it is ',Object(o.b)("inlineCode",{parentName:"p"},"store")," or ",Object(o.b)("inlineCode",{parentName:"p"},"show"),' to autocomplete to the list "test".'),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-sh"}),'#!/bin/bash\n_example_options()\n{\n   local cur prev\n\n   cur=${COMP_WORDS[COMP_CWORD]}\n   prev=${COMP_WORDS[COMP_CWORD-1]}\n\n   case ${COMP_CWORD} in\n       1)\n           COMPREPLY=($(compgen -W "init install store search deploy bump push pull help sync info remove version autocomplete" -- ${cur}))\n       ;;\n       2)\n           case ${prev} in\n               store)\n                   COMPREPLY=($(compgen -W "test" -- ${cur}))\n               ;;\n               show)\n                   COMPREPLY=($(compgen -W "test" -- ${cur}))\n               ;;\n           esac\n       ;;\n       *)\n           COMPREPLY=()\n       ;;\n   esac\n}\n\ncomplete -F _example_options example\n')),Object(o.b)("p",null,"Once completed, you can run ",Object(o.b)("inlineCode",{parentName:"p"},"source path/to/file")," and have the commands available for the session."))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Bash/Autocompletion.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-bash-autocompletion-md-efaed1bc3e47a81e2175.js.map