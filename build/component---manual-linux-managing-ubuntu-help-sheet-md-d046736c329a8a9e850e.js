(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{lOvH:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return u}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Linux/managing-ubuntu-help-sheet.md"}});var i={_frontmatter:s},l=r.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"managing-a-ubuntu-server-help-sheet"},"Managing a Ubuntu Server Help Sheet"),Object(a.b)("p",null,"Credit to Jack Moggach"),Object(a.b)("p",null,"This document gives a brief overview of how an Ubuntu server works. Most of this is applicable to any Linux-like OS but"),Object(a.b)("p",null,"By the end of it you should have a better idea of:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"How to access a Linux server"),Object(a.b)("li",{parentName:"ul"},"What is (and when to) sudo"),Object(a.b)("li",{parentName:"ul"},"How to install software"),Object(a.b)("li",{parentName:"ul"},"Where software config is stored"),Object(a.b)("li",{parentName:"ul"},"How to start/stop/restart services")),Object(a.b)("h2",{id:"mu-1-intro-to-ubuntu"},"MU-1: Intro to Ubuntu"),Object(a.b)("p",null,"Ubuntu is the most popular Linux server distribution at the time of writing. This is unlikely to change anytime soon. This distro is well supported, has loads of great docs and is easy + free to use with Amazon Web Services."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Choosing a version")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Four Main Choices")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"OS Type"),"\n- Desktop for a workstation\n- Server for a server (bare-bones OS without a GUI)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Flavour"),"\n- Vanilla Ubuntu is fine for our purposes\n- They also tailor the OS for education, multimedia etc. (",Object(a.b)("a",o({parentName:"p"},{href:"http://www.ubuntu.com/download/ubuntu-flavours"}),"http://www.ubuntu.com/download/ubuntu-flavours"),")")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Architecture"),"\n- i386 = 32bit\n- amd64 = 64bit")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Version"),"\n- 16.04.1 is the latest\n- Our servers use 14.04\n- Always best to get an LTS version (more information provided later)"))),Object(a.b)("p",null,"Mostly run on 64-bit version with the latest releases"),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Why LTS?")),Object(a.b)("p",null,"LTS: Long Term Support"),Object(a.b)("p",null,"A new Ubuntu version is released every 6 months. Non-LTS versions have support for 9 months after they are superseded. If you were to use a non-LTS version of Ubuntu on a server. Using the latest non-LTS release will give you the latest and greatest packages but you have less time before you need to upgrade your OS."),Object(a.b)("p",null,"As an example PHP 5.5 is the version of PHP installed in Ubuntu 14.04. It was deprecated in July 2016. This means it will no longer receive any more support or security patches from PHP. This is terrible news if you have a server running PHP as it is a frequent target for would-be hackers. As Ubuntu 14.04 is an LTS release with support until 2019 the Ubuntu security team will 'backport' security fixes for PHP 5.5 until Ubuntu 14.04 is deprecated. You can spend way less time mucking around with your hosting environment if you just stick with LTS releases."),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Ubuntu 16.0.4?")),Object(a.b)("p",null,"A new LTS version of Ubuntu came out recently. I haven't rushed to adopt it as it sometimes takes a little while to work the kinks out of it. Ideally all developers and servers would be running the same package versions (Node, PHP etc.). Given the latest Ubuntu version uses PHP 7 we'd need to move everyone to that version locally, test all of our code and then update all of our servers. It's quite a big job and we don't need to rush."),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Getting familiar with Ubuntu")),Object(a.b)("p",null,"The best way to get familiar with Ubuntu is to create a virtual machine. You have two options here:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Download a pre-built Ubuntu Virtual Machine"),Object(a.b)("li",{parentName:"ul"},"Install Ubuntu from the installation media")),Object(a.b)("p",null,"The first option is quicker but the second gives you a lot more control as you can configure everything to your liking."),Object(a.b)("p",null,"You can follow pretty much all of the default prompts but make sure you install openssh-server so you can log in to the machine."),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"SSH-Server Installation")),Object(a.b)("p",null,"Installation\nInstallation of the OpenSSH client and server applications is simple. To install the OpenSSH client applications on your Ubuntu system, use this command at a terminal prompt:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sudo apt install openssh-client")),Object(a.b)("p",null,"To install the OpenSSH server application, and related support files, use this command at a terminal prompt:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sudo apt install openssh-server"),"\nThe openssh-server package can also be selected to install during the Server Edition installation process."),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," You'll probably want to put the Virtual Machine in Bridged Adapter Mode for networking. You can do this by going to Settings → Network → Adapter 1 and changing the 'Attached to' option. You'll need to restart the virtual machine after making that change."),Object(a.b)("h2",{id:"mu-2-connecting-to-a-server-using-ssh"},"MU-2: Connecting to a Server using SSH"),Object(a.b)("p",null,"You'll need to use SSH to connect to a running instance. Here's a pretty standard connection string:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ ssh user@127.0.0.1\n")),Object(a.b)("p",null,"This will attempt a login to the server at 127.0.0.1 with username user. You'll be asked to enter your password."),Object(a.b)("p",null,"For the one set up in VB, the machine was dennis@dennis-ubuntu, therefore ",Object(a.b)("inlineCode",{parentName:"p"},"$ shh dennis@dennis-ubuntu")," was used."),Object(a.b)("p",null,"If you want to save common ssh connections you can edit ~/.ssh/config. The same connection could be saved as..."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"Host my-ubuntu-server\n    hostname 127.0.0.1\n    user ubuntu\n\n# my case\n\nHost my-ubuntu-server\n    hostname 10.0.0.112\n    user dennis\n")),Object(a.b)("p",null,"Now the connection becomes"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"$ ssh my-ubuntu-server\n")),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Finding your Virtual Machine IP Address")),Object(a.b)("p",null,"To get the IP address of your virtual machine you'll need to use the command ",Object(a.b)("inlineCode",{parentName:"p"},"ifconfig"),". Look for the eth0 interface (the primary ethernet adapter)."),Object(a.b)("p",null,"The bit you're interested in is the ",Object(a.b)("inlineCode",{parentName:"p"},"inet addr (10.240.112.151)"),". Once you have this you can now ssh into your machine w/out worrying about that horrible console."),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Running commands as Root")),Object(a.b)("p",null,"To run commands as root simply prepend ",Object(a.b)("inlineCode",{parentName:"p"},"sudo")," to the command."),Object(a.b)("p",null,"Pretty much any package installation, config change or service restart is going to need it."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Managing Packages")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"apt-get")," is used to get packages."),Object(a.b)("p",null,"Key commmands:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"# use sudo if necessary\n\napt-get update # grab latest package lists\napt-get upgrade # upgrade all installed packages\n")),Object(a.b)("h2",{id:"mu-3-startingstoppingrestarting-services-and-daemons"},"MU-3: Starting/Stopping/Restarting Services and Daemons"),Object(a.b)("p",null,"Two ways to restart the services:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"init.d")),Object(a.b)("p",null,"The directory ",Object(a.b)("em",{parentName:"p"},"/etc/init.d/")," contains a bunch of scripts that control daemons. The general format for them is ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/init.d/<service> <start|stop|restart>")),Object(a.b)("p",null,"e.g. To restart Nginx you can run the command ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/init.d/nginx restart")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Upstart")),Object(a.b)("p",null,"You can also use Upstart to control daemons, The format is ",Object(a.b)("inlineCode",{parentName:"p"},"service <service> <start|stop|restart>"),"\ne.g. To restart Nginx you can run the command ",Object(a.b)("inlineCode",{parentName:"p"},"service nginx restart")),Object(a.b)("h2",{id:"mu-4-terminal-tips"},"MU-4: Terminal Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Use ",Object(a.b)("em",{parentName:"li"},"nano")," as the text editor.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Handy Commands")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"su"),"\n- Change user\n- sudo su = become root\n- sudo su ubuntu = become user 'ubuntu'"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"pwd"),"\nWhat directory am I in?"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ls -lah"),"\nList all files in a directory\n- -l = list view\n- -h = human readable file sizes\n- -a = Include hidden files"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"grep"),"\nSearch through files\n- grep -iR node src/ = Search through the src/ directory for all files containing the string node\n- -i = case insensitive search\n- -R = recursively check folders"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"history"),"\nShow all recent terminal entries. This is saved per-user/per-server\n- Really handy if you want to re-run a common command\n- Pipe this command into grep and you can easily search your terminal history\n- ",Object(a.b)("inlineCode",{parentName:"p"},"history | grep mysql")," = show all recent commands which include the string mysql\n- You can accomplish a similar thing by hitting Ctrl+R on your keyboard but sometimes it's nice to see the actual list of commands"))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Linux/managing-ubuntu-help-sheet.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-linux-managing-ubuntu-help-sheet-md-d046736c329a8a9e850e.js.map