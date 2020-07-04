(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{nxw8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),s=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/AWS/AWS-Certified-SysOps-Administrator.md"}});var l={_frontmatter:r},i=s.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(i,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"aws-certified-sysops-administrator"},"AWS Certified SysOps Administrator"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#aws-certified-sysops-administrator"}),"AWS Certified SysOps Administrator"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#awssys-1-monitoring-metrics-and-analysis"}),"AWSSYS-1: Monitoring, Metrics and Analysis"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#-----awssys-11-cloudwatch-intro"}),"---- AWSSYS-1.1: CloudWatch Intro")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#-----awssys-12-ec2-status-troubleshooting"}),"---- AWSSYS-1.2: EC2 Status Troubleshooting")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#awssys-5-opsworks"}),"AWSSYS-5: Opsworks"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#-----awssys-51-opsworks-overview"}),"---- AWSSYS-5.1: Opsworks Overview")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#-----awssys-52-setting-up-opsworks"}),"---- AWSSYS-5.2: Setting up Opsworks"))))))),Object(n.b)("h2",{id:"awssys-1-monitoring-metrics-and-analysis"},"AWSSYS-1: Monitoring, Metrics and Analysis"),Object(n.b)("h2",{id:"awssys-11-cloudwatch-intro"},"AWSSYS-1.1: CloudWatch Intro"),Object(n.b)("p",null,"It's a monitoring service to monitor the resources and what you run on AWS."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"EC2"),Object(n.b)("li",{parentName:"ul"},"DynamoDB"),Object(n.b)("li",{parentName:"ul"},"RDS DB instances etc"),Object(n.b)("li",{parentName:"ul"},"Log files")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Host Level metrics")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"CPU"),Object(n.b)("li",{parentName:"ol"},"Network"),Object(n.b)("li",{parentName:"ol"},"Disk"),Object(n.b)("li",{parentName:"ol"},"Status Check")),Object(n.b)("p",null,"RAM utilisation is a custom metric. You need to write Perl script for this."),Object(n.b)("p",null,"By default, monitoring is 5 minutes. Detailed monitoring is 1 minute."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"How long are metrics stored?")),Object(n.b)("p",null,"By default, for 2 weeks. You can use the ",Object(n.b)("inlineCode",{parentName:"p"},"GetMetricsStatistics API")," or third party tools to have access to data for longer."),Object(n.b)("p",null,"You can retrieve data on terminated ELBs or instances for up to 2 weeks after it's termination."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Metric Granularity")),Object(n.b)("p",null,"Many default metrics are 1 minute, but it can be 3 or 5 too. The minimum that you can have it 1 minute."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Alarms")),Object(n.b)("p",null,"You can use this to monitor any metric. You can even use it for something like bills etc too."),Object(n.b)("p",null,"You can also set the appropriate action and thresholds."),Object(n.b)("h2",{id:"awssys-12-ec2-status-troubleshooting"},"AWSSYS-1.2: EC2 Status Troubleshooting"),Object(n.b)("p",null,"On the console, you can see the status check from the EC2 panel."),Object(n.b)("p",null,"There is a ",Object(n.b)("inlineCode",{parentName:"p"},"System Status Check")," or ",Object(n.b)("inlineCode",{parentName:"p"},"Instance Status Check"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"What is the difference?")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"System = physical host (the actual physical machine)"),Object(n.b)("li",{parentName:"ul"},"Instance = VM itself")),Object(n.b)("p",null,"Difference troubleshooting for the different status checks."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"System status checks")),Object(n.b)("p",null,"It will come up as an error if you have:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Loss of network connectivity"),Object(n.b)("li",{parentName:"ol"},"Loss of system power"),Object(n.b)("li",{parentName:"ol"},"Software issues on the physical host"),Object(n.b)("li",{parentName:"ol"},"Hardware issues on the physical host"),Object(n.b)("li",{parentName:"ol"},"Best way to resolve issues is to stop and then start the VM again")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Instance status checks")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Failed system status checks"),Object(n.b)("li",{parentName:"ol"},"Exhausted memory"),Object(n.b)("li",{parentName:"ol"},"Misconfigured networking or startup configuration"),Object(n.b)("li",{parentName:"ol"},"Exhausted memory"),Object(n.b)("li",{parentName:"ol"},"Corrupted file system"),Object(n.b)("li",{parentName:"ol"},"Incompatible kernel"),Object(n.b)("li",{parentName:"ol"},"Best way to trouble shoot is by ",Object(n.b)("inlineCode",{parentName:"li"},"rebooting the instance")," or by making modifications in your operating system")),Object(n.b)("hr",null),Object(n.b)("h2",{id:"awssys-5-opsworks"},"AWSSYS-5: Opsworks"),Object(n.b)("h2",{id:"awssys-51-opsworks-overview"},"AWSSYS-5.1: Opsworks Overview"),Object(n.b)("p",null,"All these groups of related resources are known as a stack."),Object(n.b)("p",null,"A stack could be like a Route53 pointing to a load balancer that points to EC2 instances which all point to a DB server."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Amazon Definition")),Object(n.b)("p",null,"An app management service that helps you automate operational tasks using Chef. It gives you the flexibility to define the application architecture."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Layman Definition")),Object(n.b)("p",null,"Chef turns infrastructure into code. You can automate how you build, deploy and manage your infrastructure. Chef server stores all the recipes and the nodes will periodically polls Chef server to bring everything up to date."),Object(n.b)("p",null,"OpsWorks is a GUI to deploy and configure your infrastructure quickly. It consists of Stacks and Layers."),Object(n.b)("p",null,"A stack is a container (or group) of resources. A layer exists within a stack. When you create a layer, you use OpsWorks to configure that layer for you."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Layers")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"1 or more layers in a stack"),Object(n.b)("li",{parentName:"ul"},"An instance must be assigned to at least 1 layer"),Object(n.b)("li",{parentName:"ul"},"Which chef layers run are determined by the layer the instance belongs to"),Object(n.b)("li",{parentName:"ul"},"Preconfigured Layers include: - Applications - Databases - Load Balancers - Caching")),Object(n.b)("h2",{id:"awssys-52-setting-up-opsworks"},"AWSSYS-5.2: Setting up Opsworks"),Object(n.b)("p",null,"From the AWS dashboard, we're going to create a stack and bring up a webpage without having to SSH."),Object(n.b)("p",null,"Jump onto OpsWorks and add a stack. We can choose things like whether or not we want SSH access etc."),Object(n.b)("p",null,"After creating a stack, we will be brought back to the main screen. Now, let's create some layers!"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Layers")),Object(n.b)("p",null,"We can choose our types! We'll select PHP App Server for now. From here, you can add an instance."),Object(n.b)("p",null,"When adding, you can use existing OpsWorks to see how everything looks and use existing EC2 instances etc."),Object(n.b)("p",null,"Then you can select to start the instance and go from there."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Apps")),Object(n.b)("p",null,"In the apps section, set up a new app! You need to select the application source (eg git etc) and go from there."),Object(n.b)("p",null,"Once the app is live, we will push the app out to the instance."),Object(n.b)("p",null,"We can then click deploy and let the app deploy."),Object(n.b)("p",null,"Once it has been deployed, you can then see the app running in the browser."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Deleting")),Object(n.b)("p",null,"To teardown the stack, you need to stop the instance and apps first and then remove things like the layers from there."),Object(n.b)("p",null,"Also note, you also need to delete all of the security groups after and do it all manually (in the update, you can now do it by selecting the entire security group.)"),Object(n.b)("hr",null))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/AWS/AWS-Certified-SysOps-Administrator.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-aws-aws-certified-sys-ops-administrator-md-480d3499796b7b191bed.js.map