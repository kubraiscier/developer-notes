(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{nPMZ:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return d}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React/Lead-Debouncing-With-Hooks.md"}});var r={_frontmatter:o},l=i.a;function d(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(l,s({},r,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lead-debouncing-with-hooks"},"Lead Debouncing with Hooks"),Object(a.b)("p",null,"Example using ",Object(a.b)("inlineCode",{parentName:"p"},"Lodash"),":"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-typescript"}),'import * as React from "react"\nimport { useState, useEffect, useRef } from "react"\nimport { debounce } from "lodash"\n\nconst ExampleComponent = ({initTeam}) => {\n  const [selectedTeam, setSelectedTeam] = useState<Option | undefined>(initTeam)\n  \n  // this is to be used to set a default value\n  const updateSelect = (value: Option) => {\n    setSelectedTeam(value)\n    setFields(fields => ({\n      ...fields,\n      // @ts-ignore\n      teamId: value.value,\n      owners: initOwners\n    }))\n  }\n\n  // Fire immediate use of useEffect for initTeam\n  // but then push off any other effects for the next 5s.\n  // This prevents the deletion of an owner being overriden\n  // when initTeam fires again during inital component mounting.\n  const throttleSelectedTeam = useRef(\n    debounce(\n      (initTeam: Option) => {\n        updateSelect(initTeam)\n      },\n      5000,\n      { leading: true, trailing: false }\n    )\n  )\n\n  // the throttle will debounce changes through useEffect\n  useEffect(() => {\n    if (!disabled && initTeam) {\n      throttleSelectedTeam.current(initTeam)\n    }\n  }, [initTeam])\n\n  // the example component is really here to display what the end usecase was\n  return (<>\n    <UserSearchField\n      owners={owners}\n      disabled={selectedTeam === null ? true : false}\n      teamId={selectedTeam ? selectedTeam.value : ""}\n      setFields={(user: User) => {\n        setFields(fields => ({\n          ...fields,\n          owners: [...fields.owners, user]\n        }))\n      }}\n    />\n    <div>\n      {owners.map(user => (\n        <UserCard\n          key={user.id}\n          disabled={disabled}\n          user={user}\n          onRemove={evt => {\n            setFields(fields => ({\n              ...fields,\n              owners: fields.owners.filter(o => o.id !== user.id)\n            }))\n          }}\n        />\n      ))}\n    </div>\n  </>)\n}\n')))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React/Lead-Debouncing-With-Hooks.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-lead-debouncing-with-hooks-md-41ed8f149dc81cee9cfc.js.map