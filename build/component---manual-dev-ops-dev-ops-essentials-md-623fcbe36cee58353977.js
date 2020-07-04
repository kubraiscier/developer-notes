(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{"k/rp":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/DevOps/DevOps-Essentials.md"}});var o={_frontmatter:l},s=i.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(s,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"devops-essentials"},"DevOps-Essentials"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#devops-essentials"}),"DevOps-Essentials"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#10-traditional-responsibility-silos"}),"1.0 Traditional Responsibility Silos")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#terminology"}),"Terminology"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#20-iaas---infrastructure-as-a-service"}),"2.0: IaaS - Infrastructure as a Service")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#21-paas---platform-as-a-service"}),"2.1: PaaS - Platform as a Service")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#22-saas---software-as-a-service"}),"2.2: SaaS - Software as a Service")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#30-build-automation"}),"3.0: Build Automation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#31-ci-and-cd"}),"3.1: CI and CD")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#40-jenkins"}),"4.0: Jenkins"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"What is DevOps?")),Object(n.b)("p",null,"A software development method that stresses communication, collaboration, integration, automation and a measurement of cooperation between software devs and other IT professionals."),Object(n.b)("p",null,"It acknowledges the interdependence of software dev, quality assure and IT operations."),Object(n.b)("p",null,"You'll hear things like CI, build automation and treating the infrastructure like code."),Object(n.b)("p",null,"It addresses short comings and obstacles that we come across in our careers."),Object(n.b)("h2",{id:"10-traditional-responsibility-silos"},"1.0 Traditional Responsibility Silos"),Object(n.b)("p",null,"IT Operations are usually broken into the following:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Infrastructure and Monitoring"),Object(n.b)("li",{parentName:"ol"},"Architecture and Planning"),Object(n.b)("li",{parentName:"ol"},"Maintenence"),Object(n.b)("li",{parentName:"ol"},"Support")),Object(n.b)("p",null,"This is the traditional operations stack."),Object(n.b)("p",null,"IT Dev is broken down into methodologies like the following:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Prototyping"),Object(n.b)("li",{parentName:"ol"},"Waterfall"),Object(n.b)("li",{parentName:"ol"},"Agile"),Object(n.b)("li",{parentName:"ol"},"Rapid")),Object(n.b)("p",null,"Hardware and networking were not necessarily well understood by skilled software developers and vice versa."),Object(n.b)("h1",{id:"terminology"},"Terminology"),Object(n.b)("h2",{id:"20-iaas---infrastructure-as-a-service"},"2.0: IaaS - Infrastructure as a Service"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Setting up a service for using IT Infrastructure"),Object(n.b)("li",{parentName:"ul"},'"Stack" involved includes things from hardware to the operating system and applications that sit on top.'),Object(n.b)("li",{parentName:"ul"},"Virtualisation is almost indistinguishable in speed when compared to standard infrastructure is")),Object(n.b)("h2",{id:"21-paas---platform-as-a-service"},"2.1: PaaS - Platform as a Service"),Object(n.b)("p",null,"Further down the rabbit hole! Next step in the redefinition of IT was looking at how the platform was provided."),Object(n.b)("p",null,'This delivers a "computer platform" for consumption. It generally includes all of IaaS + a few additions.'),Object(n.b)("p",null,"In addition to before, this also addings in ",Object(n.b)("inlineCode",{parentName:"p"},"runtime")," and ",Object(n.b)("inlineCode",{parentName:"p"},"middleware"),". Services like ",Object(n.b)("inlineCode",{parentName:"p"},"Azure")," and ",Object(n.b)("inlineCode",{parentName:"p"},"App Engine")," were some of the first to offer the underlying computer and storage resources that could scale automatically to match application demand so manual allocation of resources was no longer necessary."),Object(n.b)("p",null,"It converged developer and operations skillsets even more."),Object(n.b)("h2",{id:"22-saas---software-as-a-service"},"2.2: SaaS - Software as a Service"),Object(n.b)("p",null,"Skills needed in this area has completely converged."),Object(n.b)("p",null,"It is an important driving force behind DevOps. A ton of autoscaling code was written to deal with this."),Object(n.b)("p",null,"Here, we need traditional software AND hardware personnel that need the same skills to operate within this space."),Object(n.b)("hr",null),Object(n.b)("h2",{id:"30-build-automation"},"3.0: Build Automation"),Object(n.b)("p",null,'Historically, this referred to software development. The process of "building" or compiling software that can then be deployed via script or cron jobs to various environments, including production systems.'),Object(n.b)("p",null,"It is about minimizing the deployment without manual intervention."),Object(n.b)("p",null,"Generally the entire stack will look like the flow from top to bottom:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"Dev Environment\n|\nSource Repo\n|\nBuild Server\n|\nIntegration Server\n|\nTest Server\n|\nProduction Server\n")),Object(n.b)("p",null,"It includes automated testing and rollback capabilities. This build is consistent and can reduce the troubleshooting when there are problems as a result."),Object(n.b)("h2",{id:"31-ci-and-cd"},"3.1: CI and CD"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"CI means the practise of mergine dev working copies with the shared source main branch multiple times per day."),Object(n.b)("li",{parentName:"ul"},"CD is an approach where valuable software is produced in small delivery cycles and ensures that those features can be reliably and consistenly released at any point in time.")),Object(n.b)("p",null,"CI has more to do with how the software code is managed throughout the development lifecycle, whereas CD is how valuable and how quickly that software can be released when it is determined that the aggregate features are valuable enough."),Object(n.b)("p",null,"Although related, they are different in what they accomplish."),Object(n.b)("p",null,"DevOps uses each one and in term feeds the other in the chain."),Object(n.b)("hr",null),Object(n.b)("h2",{id:"40-jenkins"},"4.0: Jenkins"),Object(n.b)("p",null,"Jenkins is build automation on steroids. It can be considered a CI but often considered a CD tool as well."),Object(n.b)("p",null,"Used normally for build deployments, but can do anything from deploying scripts to launching virtual machines through VMWare or Vagrant to Docker."),Object(n.b)("p",null,"It helps create a basic build job to the custom direction of containers with unit testing etc."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/DevOps/DevOps-Essentials.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-dev-ops-dev-ops-essentials-md-623fcbe36cee58353977.js.map