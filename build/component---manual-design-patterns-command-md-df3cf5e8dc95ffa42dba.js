(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{SpKw:function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return m})),o.d(n,"default",(function(){return d}));o("1c7q"),o("abGl"),o("gZHo"),o("Fdmb"),o("Ir+3"),o("2mQt"),o("mXGw");var a=o("/FXl"),t=o("TjRS");o("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}var m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Command.md"}});var r={_frontmatter:m},c=t.a;function d(e){var n=e.components,o=function(e,n){if(null==e)return{};var o,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,["components"]);return Object(a.b)(c,i({},r,o,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"command"},"Command"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A behavioural design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. -- Wikipedia")),Object(a.b)("h2",{id:"terminology"},"Terminology"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Command: Knows about ",Object(a.b)("inlineCode",{parentName:"li"},"receiver")," and invokes a method of the ",Object(a.b)("inlineCode",{parentName:"li"},"receiver"),". Values for params of the receiver method are stored in the command. Values for receiver method params are stored in command."),Object(a.b)("li",{parentName:"ul"},"Receiver: Does the work when ",Object(a.b)("inlineCode",{parentName:"li"},"execute()")," is called in ",Object(a.b)("inlineCode",{parentName:"li"},"command")," object."),Object(a.b)("li",{parentName:"ul"},"Invoker: Knows how to execute a command and optionally does bookkeeping about command execution. Does not know anything about a concrete command, only the command interface."),Object(a.b)("li",{parentName:"ul"},"Client: Holds the ",Object(a.b)("inlineCode",{parentName:"li"},"command")," objects and ",Object(a.b)("inlineCode",{parentName:"li"},"receiver")," objects and assigns commands to the ",Object(a.b)("inlineCode",{parentName:"li"},"invoker"),". The client is also responsible for executing which commands at which points. It passes the ",Object(a.b)("inlineCode",{parentName:"li"},"command")," object to the ",Object(a.b)("inlineCode",{parentName:"li"},"invoker")," object.")),Object(a.b)("h2",{id:"github-repo-example"},"GitHub Repo Example"),Object(a.b)("p",null,"This example is an extension to some code taken directly from ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/gztchan/design-patterns-in-typescript/blob/master/command/command.ts"}),"gztchan's GitHub repo")," as it gives a nice and simple example."),Object(a.b)("p",null,"An extension made it to create a ",Object(a.b)("inlineCode",{parentName:"p"},"FireCommand")," to emulate how something like the Command Design could be used for a game."),Object(a.b)("p",null,"This simpler example focuses on the main participants: Handler (command interface), ConcreteHandler (commands), CommandReceiver (receiver), Invoker (invoker class), Client (invoker instance)."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// Receiver\ninterface Receive {\n  action(): void;\n}\n\nclass CommandReceiver implements Receive {\n  action(): void {\n    console.log('Receiver takes action');\n  }\n}\n\n// Command\ninterface Command {\n  execute(): void;\n}\n\n// ConcreteCommands\nclass LaunchCommand implements Command {\n  private receiver: Receive;\n\n  // NOTE: commands know about receiver\n  constructor(receiver: Receive) {\n    this.receiver = receiver;\n  }\n\n  execute(): void {\n    console.log('Launch!!!');\n    this.receiver.action();\n  }\n}\n\nclass FireCommand implements Command {\n  private receiver: Receive;\n\n  // NOTE: commands know about receiver\n  constructor(receiver: Receive) {\n    this.receiver = receiver;\n  }\n\n  execute(): void {\n    console.log('Fire!');\n    this.receiver.action();\n  }\n}\n\nclass StopCommand implements Command {\n  private receiver: Receive;\n\n  // NOTE: commands know about receiver\n  constructor(receiver: Receive) {\n    this.receiver = receiver;\n  }\n\n  execute(): void {\n    console.log('Stop!!!');\n    this.receiver.action();\n  }\n}\n\n// Invoker\ninterface Invoke {\n  runCommand(command?: Command): void;\n}\n\nclass Invoker implements Invoke {\n  private commands: Command[];\n\n  constructor() {\n    this.commands = [];\n  }\n\n  addCommand(command: Command) {\n    this.commands.push(command);\n  }\n\n  runCommand(command?: Command) {\n    if (command) {\n      this.commands.push(command);\n    }\n    const command = this.commands.shift();\n    command.execute();\n  }\n}\n\n(function main() {\n  // 1. We create a receiver\n  const receiver = new CommandReceiver();\n\n  // 2. We create commands that implement the base command interface and pass the receiver object to the command\n  const launch = new LaunchCommand(receiver);\n  const fire = new FireCommand(receiver);\n  const stop = new StopCommand(receiver);\n\n  // 3. We create the invoker client to add commands to\n  const invoker = new Invoker();\n\n  // Example of adding and then running a command\n  invoker.addCommand(launch);\n  invoker.runCommand();\n\n  invoker.addCommand(fire);\n  invoker.runCommand();\n\n  invoker.addCommand(stop);\n  invoker.runCommand();\n\n  // Example of adding multiple commands and then running multiple executions\n  invoker.addCommand(launch);\n  invoker.addCommand(fire);\n  invoker.addCommand(fire);\n  invoker.addCommand(fire);\n  invoker.addCommand(stop);\n\n  invoker.runCommand();\n  invoker.runCommand();\n  invoker.runCommand();\n  invoker.runCommand();\n  invoker.runCommand();\n})();\n")),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://github.com/gztchan/design-patterns-in-typescript/blob/master/command/command.ts"}),"Command Design Pattern on Github")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Command_pattern"}),"Wikipedia Resource"))))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Command.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-command-md-df3cf5e8dc95ffa42dba.js.map