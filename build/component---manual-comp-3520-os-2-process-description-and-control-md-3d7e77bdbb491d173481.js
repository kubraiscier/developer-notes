(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{We88:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/COMP3520-OS/2-Process-Description-And-Control.md"}});var i={_frontmatter:l},c=r.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"process-description-and-control"},"Process Description and Control"),Object(a.b)("h2",{id:"objectives"},"Objectives"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"How are processes represented and controlled by the OS"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Process states")," which characterize the behaviour of processes"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Data structures")," used to manage processes"),Object(a.b)("li",{parentName:"ul"},"Ways in which the OS uses these data structures to control process execution")),Object(a.b)("h2",{id:"operating-system"},"Operating System"),Object(a.b)("p",null,"Program that controls the execution of application programs."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Interface between applications and hardware."),Object(a.b)("li",{parentName:"ul"},"Frequently relinquishes control and must depend on the processor to allow it to regain control – events driven")),Object(a.b)("h2",{id:"system-calls"},"System Calls"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Typically high-level language (C or C++)"),Object(a.b)("li",{parentName:"ul"},"Access of programs through API rather than direct system call use"),Object(a.b)("li",{parentName:"ul"},"3 common APIs are Win32, POSIX and Java API for JVM")),Object(a.b)("h3",{id:"types-of-system-calls"},"Types of system calls"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Process control"),Object(a.b)("li",{parentName:"ol"},"File management"),Object(a.b)("li",{parentName:"ol"},"Device management"),Object(a.b)("li",{parentName:"ol"},"Information maintenance"),Object(a.b)("li",{parentName:"ol"},"Communications")),Object(a.b)("h3",{id:"key-elements-of-an-os"},"Key elements of an OS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Service call Handler (<- service call to process)"),Object(a.b)("li",{parentName:"ul"},"Interrupt Handler (<- interrupt from Process/IO)"),Object(a.b)("li",{parentName:"ul"},"Short-Term Scheduler (-> Pass Control to Process)"),Object(a.b)("li",{parentName:"ul"},"Long-Term, Short-Term and I/O Queues")),Object(a.b)("h3",{id:"system-call-implementation"},"System Call Implementation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Typically a number associated with each sys call - sys-call interface maintains table indexed accordingly"),Object(a.b)("li",{parentName:"ul"},"Call invoked by interface in OS kernel and returns status of the system call and any return values"),Object(a.b)("li",{parentName:"ul"},"Caller need no nothing about implementation of call")),Object(a.b)("h3",{id:"shell-strategy"},"Shell Strategy"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Read keyboard"),Object(a.b)("li",{parentName:"ol"},"Shell Process"),Object(a.b)("li",{parentName:"ol"},"Fork a process"),Object(a.b)("li",{parentName:"ol"},"Process to execute command"),Object(a.b)("li",{parentName:"ol"},"f3 read file")),Object(a.b)("h3",{id:"process"},"Process"),Object(a.b)("p",null,"Fundamental to the structure of operating systems"),Object(a.b)("p",null,"A process can be defined as:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A program in execution"),Object(a.b)("li",{parentName:"ol"},"An instance of a running program"),Object(a.b)("li",{parentName:"ol"},"The entity that can be assigned to, and executed on, a processor"),Object(a.b)("li",{parentName:"ol"},"Unit of activity characterized by a single sequential thread of execution, a current state and an associated set of system resources")),Object(a.b)("h3",{id:"uniprogramming"},"Uniprogramming"),Object(a.b)("p",null,"Processor must wait for I/O instruction to complete before proceeding."),Object(a.b)("h3",{id:"multiprogramming"},"Multiprogramming"),Object(a.b)("p",null,"When one job needs to wait for I/O, the processor can switch to the other job."),Object(a.b)("h3",{id:"time-sharing-systems"},"Time Sharing Systems"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Using multiprogramming to handle multiple interactive jobs"),Object(a.b)("li",{parentName:"ul"},"Multiple users simultaneously access system through terminal"),Object(a.b)("li",{parentName:"ul"},"Processor's time shared among multiple users"),Object(a.b)("li",{parentName:"ul"},"Timesharing (multitasking): CPU switches jobs so frequently that users can interact with each job while it is running, creating interactive computing - Response time < 1s - Each user has at least one program executing in memory -> ",Object(a.b)("inlineCode",{parentName:"li"},"process")," - If several jobs ready to run at the same time -> ",Object(a.b)("inlineCode",{parentName:"li"},"CPU Scheduling")," - To ensure orderly execution -> ",Object(a.b)("inlineCode",{parentName:"li"},"Synchronization")," and ",Object(a.b)("inlineCode",{parentName:"li"},"Communication")," - ",Object(a.b)("inlineCode",{parentName:"li"},"Virtual memory")," allows execution of processes not completely in memory - Also need mechanisms for ",Object(a.b)("inlineCode",{parentName:"li"},"Security and Protection"))),Object(a.b)("h3",{id:"process-management"},"Process Management"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"The fundamental task")),Object(a.b)("li",{parentName:"ul"},"OS must... - Allocate resources to processes and protect the resources of each process from others - Interleave the execution of multiple processes - Enable proc. to share and exchange info - Enable sync. among processes")),Object(a.b)("h3",{id:"process-elements"},"Process elements"),Object(a.b)("p",null,"Process can be uniquely charactized by a number of attributes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Identifier"),Object(a.b)("li",{parentName:"ol"},"State"),Object(a.b)("li",{parentName:"ol"},"Priority"),Object(a.b)("li",{parentName:"ol"},"Program counter"),Object(a.b)("li",{parentName:"ol"},"Memory pointers"),Object(a.b)("li",{parentName:"ol"},"Context data"),Object(a.b)("li",{parentName:"ol"},"I/O status info"),Object(a.b)("li",{parentName:"ol"},"Accounting info")),Object(a.b)("h3",{id:"process-control-block"},"Process control block"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Most important Data Structure in the OS")),Object(a.b)("h2",{id:"process-tables"},"Process Tables"),Object(a.b)("p",null,"OS tables must be linked or cross-referenced."),Object(a.b)("h3",{id:"process-execution"},"Process Execution"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Dispatcher")," is a small program which switches the processor from one process to another")),Object(a.b)("h3",{id:"modes-of-execution"},"Modes of Execution"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"User mode",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Less priviledge"),Object(a.b)("li",{parentName:"ul"},"User programs typically execute in this mode"))),Object(a.b)("li",{parentName:"ol"},"System (or kernel mode)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"More priviledges"),Object(a.b)("li",{parentName:"ul"},"Kernel of the OS")))),Object(a.b)("h3",{id:"two-state-process-model"},"Two-State Process Model"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"State of a process may be defined by the current activity of that process - Used to describe the behaviour that we would like each process to exhibit"),Object(a.b)("li",{parentName:"ul"},"Process may be ",Object(a.b)("inlineCode",{parentName:"li"},"running")," or ",Object(a.b)("inlineCode",{parentName:"li"},"not-running")),Object(a.b)("li",{parentName:"ul"},"Think of the ",Object(a.b)("inlineCode",{parentName:"li"},"queuing diagram"))),Object(a.b)("h3",{id:"five-state-process-model"},"Five-State Process Model"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Uses two queues 1. Admit 2. Ready Queue -> Dispatch 3. Process ","[-> release, -> timeout, -> event wait]"," 4. (if event wait ->) Blocked queue -> Event Occurs 5. (if release ->) exit")),Object(a.b)("h3",{id:"multiple-blocked-queues"},"Multiple Blocked Queues"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Multiple events queues - Event # wait -> Event # queue -> event # occurs")),Object(a.b)("h2",{id:"switching-processes"},"Switching Processes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"What events trigger a process switch?"),Object(a.b)("li",{parentName:"ul"},"What must the OS do to the various data structures under its control to achieve a process switch?")),Object(a.b)("h3",{id:"when-to-switch"},"When to switch"),Object(a.b)("p",null,"A process switch may occur any time that the OS has gained control from the currently running process. Possible events giving OS control are:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Mechanism"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Cause"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Use"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Interrupt"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"External to exec of current instruction"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Reaction to an asynchronous external event")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Trap"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Associated with exec of current instruction"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Handling of an error or an exception condition")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Supervisor call"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Explicit request"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Call to an operating system function")))),Object(a.b)("h2",{id:"system-interrupts"},"System Interrupts"),Object(a.b)("h3",{id:"interrupt"},"Interrupt"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Due to some sort of event external and independent of current running process - clock interrupt - I/O interrupt"),Object(a.b)("li",{parentName:"ul"},"Time slice - the max amount of time that a process can execute before being interrupted")),Object(a.b)("h3",{id:"trap"},"Trap"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An error or exception condition generated within the currently running process"),Object(a.b)("li",{parentName:"ul"},"OS determines if the condition is fatal - moved to the Exit state and a process switch occurs - action will depend on the nature of the error")),Object(a.b)("h2",{id:"change-of-process-state"},"Change of process state"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Save context of processor"),Object(a.b)("li",{parentName:"ol"},"Update process control block (PCB) of the process currently in ",Object(a.b)("inlineCode",{parentName:"li"},"running")," state"),Object(a.b)("li",{parentName:"ol"},"Move PCB of process to appropraite queue"),Object(a.b)("li",{parentName:"ol"},"Select another process to exec"),Object(a.b)("li",{parentName:"ol"},"Update PCB of process selected"),Object(a.b)("li",{parentName:"ol"},"Update mem management data structures"),Object(a.b)("li",{parentName:"ol"},"Restore context of processor to that which existed at the time the selected process was last switched out")),Object(a.b)("h2",{id:"process-creation"},"Process Creation"),Object(a.b)("p",null,"Once the OS decides to create a new process:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Assigned a unique process identifier to the new process"),Object(a.b)("li",{parentName:"ol"},"Allocates space for the process"),Object(a.b)("li",{parentName:"ol"},"Initializes the process control block"),Object(a.b)("li",{parentName:"ol"},"Sets the appropriate linkages"),Object(a.b)("li",{parentName:"ol"},"Creates or expands other data structures")),Object(a.b)("p",null,"Traditionally, OS created all processes - but it can be useful to let a running process create another"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Known as ",Object(a.b)("inlineCode",{parentName:"li"},"process spawning")," - ",Object(a.b)("inlineCode",{parentName:"li"},"parent process")," is the original, creating process - ",Object(a.b)("inlineCode",{parentName:"li"},"child process")," is the new process"),Object(a.b)("li",{parentName:"ul"},"Parent process create children processes, which, in turn create other processes, forming a tree of processes"),Object(a.b)("li",{parentName:"ul"},"Generally process identified and managed via a process identifier ",Object(a.b)("inlineCode",{parentName:"li"},"pid")),Object(a.b)("li",{parentName:"ul"},"Resource sharing - Parent and child share resources - Child shares subset of parent's resource - Parent and child share no resources"),Object(a.b)("li",{parentName:"ul"},"Execution - Parent and children execute concurrently - Parent waits until children terminate")),Object(a.b)("h3",{id:"unix-process-creation"},"UNIX Process Creation"),Object(a.b)("p",null,"Process creation is by means of the kernel system call ",Object(a.b)("inlineCode",{parentName:"p"},"fork()")),Object(a.b)("p",null,"This causes the OS in Kernel Mode to do the following:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Allocate a slot in the process table for the new process."),Object(a.b)("li",{parentName:"ol"},"Assign a unique process ID to the child process."),Object(a.b)("li",{parentName:"ol"},"Copy of process image of the parent, with the exception of any shared memory."),Object(a.b)("li",{parentName:"ol"},"Increment the counters for any files owned by the parent, to reflect that an additional process now also owns those files."),Object(a.b)("li",{parentName:"ol"},"Assign the child process to the ",Object(a.b)("inlineCode",{parentName:"li"},"Ready")," state."),Object(a.b)("li",{parentName:"ol"},"Returns the ID number of the child to the parent process, and a 0 value to the child process.")),Object(a.b)("p",null,"Post creation, the Kernel can do one of the following as part of the dispatcher routine:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Stay in the parent process"),Object(a.b)("li",{parentName:"ul"},"Transfer control to child"),Object(a.b)("li",{parentName:"ul"},"Transfer control to another process")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-c"}),'int main() {\n    pid_t pid;\n    /* fork another process */\n    pid = fork();\n\n    if (pid < 0) { /* error occurred */\n        fprintf(stderr, "Fork Failed");\n        exit(-1);\n    } else if (pid == 0) {\n        /* child process */\n        execlp("/bin/ls", "ls", NULL);\n    } else {\n        /* parent process */\n        /* parent will wait for the child to complete */\n        wait (NULL);\n        printf ("Child Complete");\n        exit(0);\n    }\n}\n')),Object(a.b)("h3",{id:"process-termination"},"Process Termination"),Object(a.b)("p",null,"There must be some way that a process can indicate completion."),Object(a.b)("p",null,"This indication may be:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A HALT instruction generating an interrupt alert to the OS."),Object(a.b)("li",{parentName:"ol"},"A user action (e.g. log off, quitting an application)"),Object(a.b)("li",{parentName:"ol"},"A fault or error"),Object(a.b)("li",{parentName:"ol"},"Parent process terminating")),Object(a.b)("h3",{id:"security-issues"},"Security Issues"),Object(a.b)("p",null,"An OS associates a set of priviledges with each process."),Object(a.b)("p",null,"A key security issue in the design of any OS is to prevent anything (user or process) from gaining unauthorized priviledges on the system."),Object(a.b)("h2",{id:"summary"},"Summary"),Object(a.b)("p",null,"-The principal function of the OS is to create, manage, and terminate processes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The most fundamental concept in a modern OS is the process"),Object(a.b)("li",{parentName:"ul"},"Process control block contains all of the information that is required for the OS to manage the process, including its current state, resources allocated to it, priority, and other relevant data"),Object(a.b)("li",{parentName:"ul"},"The most important states are Ready, Running and Blocked\n– The running process is the one that is currently being executed by the processor\n– A blocked process is waiting for the completion of some event\n– A running process is interrupted either by an interrupt or by executing a supervisor call to the OS")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/COMP3520-OS/2-Process-Description-And-Control.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-comp-3520-os-2-process-description-and-control-md-3d7e77bdbb491d173481.js.map