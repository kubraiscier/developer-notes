(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{"EM/Y":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return i}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Vagrant/Vagrant-Overview.md"}});var l={_frontmatter:o},c=r.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,b({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"vagrant-overview"},"Vagrant Overview"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Action"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Command"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"vagrant reload"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Vagrant ",Object(a.b)("inlineCode",{parentName:"td"},"halt")," followed by ",Object(a.b)("inlineCode",{parentName:"td"},"up"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"vagrant up"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Start a Vagrant box")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"vagrant ssh"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Secret shell into a Vagrant box")))),Object(a.b)("h2",{id:"vagrant-port-forwarding"},"Vagrant Port Forwarding"),Object(a.b)("p",null,"To forward 80 => 8080 from Vagrant Box to host."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-ruby"}),'Vagrant.configure("2") do |config|\n  # Other config\n  config.vm.network "forwarded_port", guest: 80, guest_ip: "0.0.0.0", host: 8080, host_ip: "127.0.0.1"\nend\n')),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-ruby"}),"config.vm.provider 'virtualbox' do |vb|\n  vb.customize ['modifyvm', :id, '--cableconnected1', 'on']\nend\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Vagrant/Vagrant-Overview.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-vagrant-vagrant-overview-md-1c90195cc9f29d79b23b.js.map