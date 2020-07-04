(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{Inee:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),s=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Containers/Containers-vs-VMs.md"}});var o={_frontmatter:i},l=s.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(l,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"containers-vs-vms"},"Containers vs VMs"),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",r({parentName:"li"},{href:"https://blog.netapp.com/blogs/containers-vs-vms/"}),"NetApp Blog"))),Object(n.b)("h2",{id:"what-are-virtual-machines"},"What are Virtual Machines"),Object(n.b)("p",null,"VMs were born to run software on top of physical servers to emulate a particular hardware system. A hypervisor, or a virtual machine monitor, is software, firmware, or hardware that creates and runs VMs. It’s what sits between the hardware and the virtual machine and is necessary to virtualize the server."),Object(n.b)("p",null,"Within each virtual machine runs a unique guest operating system. VMs with different operating systems can run on the same physical server — a UNIX VM can sit alongside a Linux VM, and so on. Each VM has its own binaries, libraries, and applications that it services, and the VM may be many gigabytes in size."),Object(n.b)("p",null,"Some of the benefits of VMs is the ability to consolidate applications onto a single system."),Object(n.b)("p",null,"Each VM includes a separate operating system image, which adds overhead in memory and storage footprint. As it turns out, this issue adds complexity to all stages of a software development lifecycle—from development and test to production and disaster recovery. This approach also severely limits the portability of applications between public clouds, private clouds, and traditional data centers."),Object(n.b)("h2",{id:"what-are-containers"},"What are Containers"),Object(n.b)("p",null,"Containers provide a way to run isolated systems on a single server or host OS."),Object(n.b)("p",null,"Containers sit on top of a physical server and its host OS."),Object(n.b)("p",null,"Running containers share the host OS kernel and, usually, the binaries and libraries."),Object(n.b)("p",null,'Shared components are read-only, therefore containers are considered "light". They are only megabytes in size and take just seconds to start, versus gigabytes and minutes for a VM. This enables use cases such as serveless applications to become very possible for deploying a container to run a specific function.'),Object(n.b)("h2",{id:"whats-the-difference"},"What's the difference"),Object(n.b)("p",null,"The main difference is that containers provide a way to virtualise an operating system so that multiple workloads can run on a single OS instance."),Object(n.b)("p",null,"With VMs, the hardware is being virtualised to run multiple OS instances."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Containers/Containers-vs-VMs.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-containers-containers-vs-v-ms-md-b6c0948e2408e39595ee.js.map