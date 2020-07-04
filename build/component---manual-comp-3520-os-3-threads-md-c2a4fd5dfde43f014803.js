(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{TWWr:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return o}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/COMP3520-OS/3-Threads.md"}});var i={_frontmatter:l},c=r.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,s({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"week-3---threads"},"Week 3 - Threads"),Object(n.b)("h2",{id:"processes-and-threads"},"Processes and Threads"),Object(n.b)("p",null,"Processes have two characteristics:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Resource Ownership ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"process includes a virtual address space to hold the process image "),Object(n.b)("li",{parentName:"ul"},"the OS performs a protection function to prevent unwanted interference between processes with respect to resources"))),Object(n.b)("li",{parentName:"ol"},"Scheduling/Execution",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"follows an execution path that may be interleaved with other processes "),Object(n.b)("li",{parentName:"ul"},"a process has an execution state (Running, Ready, etc.) and a dispatching priority and is scheduled and dispatched by the OS")))),Object(n.b)("p",null,"These two characteristics are treated independently by modern operating systems:\n- the unit of dispatching is referred to as a ",Object(n.b)("inlineCode",{parentName:"p"},"thread")," or lightweight process\n- the unit of resource ownership is referred to as a ",Object(n.b)("inlineCode",{parentName:"p"},"process")," or ",Object(n.b)("inlineCode",{parentName:"p"},"task")),Object(n.b)("h2",{id:"multithreading"},"Multithreading"),Object(n.b)("p",null,"The ability of an OS to support multiple, concurrect paths of execution within a single process"),Object(n.b)("h2",{id:"process"},"Process"),Object(n.b)("p",null,"The unit of resource allocation and a unit of protection."),Object(n.b)("p",null,"A process is associated with: "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A virtual address space which holds the process image "),Object(n.b)("li",{parentName:"ul"},"Protected access to\n- Processors\n- Other processes\n- Files\n- I/O resources ")),Object(n.b)("h2",{id:"multiple-threads-in-process"},"Multiple threads in Process"),Object(n.b)("p",null,"Each thread has:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Access to the memory and resources of its process (all threads of a process share this)"),Object(n.b)("li",{parentName:"ul"},"An execution state (running, ready, etc.)"),Object(n.b)("li",{parentName:"ul"},"Saved thread context when not running "),Object(n.b)("li",{parentName:"ul"},"An execution stack "),Object(n.b)("li",{parentName:"ul"},"Some per-thread static storage for local variables")),Object(n.b)("h2",{id:"single-threaded-vs-multi-threaded"},"Single-Threaded vs multi threaded"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Both have ",Object(n.b)("inlineCode",{parentName:"li"},"Process Control Block")),Object(n.b)("li",{parentName:"ul"},"Both have ",Object(n.b)("inlineCode",{parentName:"li"},"User Address Space")),Object(n.b)("li",{parentName:"ul"},"Single thread has a ",Object(n.b)("inlineCode",{parentName:"li"},"User Stack")," and ",Object(n.b)("inlineCode",{parentName:"li"},"Kernel Stack")),Object(n.b)("li",{parentName:"ul"},"Multithread process has a ",Object(n.b)("inlineCode",{parentName:"li"},"User Stack"),", ",Object(n.b)("inlineCode",{parentName:"li"},"Kernel Stack"),", ",Object(n.b)("inlineCode",{parentName:"li"},"Thread Control Block")," within each thread")),Object(n.b)("h2",{id:"threads"},"Threads"),Object(n.b)("p",null,"In OS that supports threads: scheduling and dispatching done on thread basis "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Most of the state info dealing with execution is maintained in thread-level data structures "),Object(n.b)("li",{parentName:"ul"},"Several actions that affect all of the threads in a process and that the OS must manage at the process level\n- Suspending process means all threads of a process\n- Terminates a process terminates all threads within the process "),Object(n.b)("li",{parentName:"ul"},"Similar to processes, threads have execution states and may synchronize with one another.")),Object(n.b)("h2",{id:"thread-execution-states"},"Thread Execution States"),Object(n.b)("p",null,"Three basic states"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Running "),Object(n.b)("li",{parentName:"ol"},"Ready "),Object(n.b)("li",{parentName:"ol"},"Blocked ")),Object(n.b)("p",null,"Operations associated with a change in thread state "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Spawn (another thread)\n- allocate register context and stacks "),Object(n.b)("li",{parentName:"ul"},"Block\n- move to an event queue waiting for the event\n- issue: will blocking a thread block other, or all, threads within the same process?"),Object(n.b)("li",{parentName:"ul"},"Unblock\n- moved the the ",Object(n.b)("inlineCode",{parentName:"li"},"Ready")," queue for execution"),Object(n.b)("li",{parentName:"ul"},"Finish (thread)\n- de-allocate register context and stacks ")),Object(n.b)("h2",{id:"thread-synchronization"},"Thread Synchronization"),Object(n.b)("p",null,"Necessity to sync activities of all threads and prevent interference between each other."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"all threads of a process share the same address space and other resources "),Object(n.b)("li",{parentName:"ul"},"any alteration of a resource by one thread affects the other threads in the same process ")),Object(n.b)("p",null,"In general, the techniques used for thread sync are the same as those for process sync."),Object(n.b)("h2",{id:"types-of-threads"},"Types of Threads"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"User Level Thread (ULT)"),Object(n.b)("li",{parentName:"ol"},"Kernel Level Thread (KLT) ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"also called kernel-supported threads or lightweight threads")))),Object(n.b)("h2",{id:"user-level-threads"},"User-Level Threads"),Object(n.b)("p",null,"Thread management all done by application."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Multithreading is managed by a runtime threads lib ")),Object(n.b)("p",null,"The kernel is not aware of the existence of threads "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Only schedule the process as a unit and assigns a single execution state to that process ")),Object(n.b)("h2",{id:"disadvantages-of-ult"},"Disadvantages of ULT"),Object(n.b)("p",null,"In a typical OS many system calls are blocking "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"as a result, when a ULT executes a system call, not only is the thread blocked, but all within the process are blocked ")),Object(n.b)("p",null,"In a pure ULT strategy, multithreaded applications cannot take advantage of multiprocessing."),Object(n.b)("h2",{id:"kernel-level-threads"},"Kernel-Level Threads"),Object(n.b)("p",null,"Kernel maintains context information for the process and the threads. "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"No thread management done by application ")),Object(n.b)("p",null,"Scheduling is done on a thread basis."),Object(n.b)("p",null,"Windows is an example of this approach."),Object(n.b)("h2",{id:"advantages-of-klt"},"Advantages of KLT"),Object(n.b)("p",null,"The kernel can simultaneously schedule multiple threads from the same process on multiple processors."),Object(n.b)("p",null,"If one thread is blocked, the kernel schedules another thread of the same process."),Object(n.b)("p",null,"Kernel routines themselves can be multithreaded."),Object(n.b)("h2",{id:"multicore--multithreading"},"Multicore & Multithreading"),Object(n.b)("p",null,"Achieves concurrency without the overhead of using multiple processes."),Object(n.b)("p",null,"Threads within the same process can exchange information through their common address space and have access to the shared resources of the process."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Threads of any process can run on any processor"),Object(n.b)("li",{parentName:"ul"},"Soft affinity:\n- dispatcher tries to assign a ready thread to the same processor it last ran on\n- helps reuse data still in that processor's memory caches from the previous execution of the thread "),Object(n.b)("li",{parentName:"ul"},"Hard affinity:\n- an application restricts thread execution to certain processors")),Object(n.b)("h2",{id:"multicore-challenges"},"Multicore Challenges"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Dividing activities "),Object(n.b)("li",{parentName:"ul"},"Balance "),Object(n.b)("li",{parentName:"ul"},"Data splitting "),Object(n.b)("li",{parentName:"ul"},"Data dependency "),Object(n.b)("li",{parentName:"ul"},"Testing and debugging ")),Object(n.b)("h2",{id:"linux-threads"},"Linux Threads"),Object(n.b)("p",null,"Linux uses the same internal representation for processes and threads; a thread is simply a new process (or task) that happens to share the same address space as its parent."),Object(n.b)("p",null,"A distinction is only made when a new thread is created by the ",Object(n.b)("inlineCode",{parentName:"p"},"clone")," system call\n- ",Object(n.b)("inlineCode",{parentName:"p"},"fork")," creates a new process with its own entirely new process context\n- ",Object(n.b)("inlineCode",{parentName:"p"},"clone")," creates a new process with its own identity, but that is allowed to share the data structures of its parent"),Object(n.b)("p",null,"Using ",Object(n.b)("inlineCode",{parentName:"p"},"clone")," gives the application fine-grained control over exactly what is shared between two threads."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"flag"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"meaning"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"CLONE_FS")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"File-system info is shared")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"CLONE_VM")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"The same mem space is shared")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"CLONE_SIGHAND")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Signal handlers are shared")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"CLONE_FILES")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"The set of open files are shared")))),Object(n.b)("h2",{id:"windows-threads"},"Windows Threads"),Object(n.b)("p",null,"Processes and servies provided by the Windows Kernel are relatively simple and general purpose."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"implemented as objects "),Object(n.b)("li",{parentName:"ul"},"created as new process or a copy of an existing process "),Object(n.b)("li",{parentName:"ul"},"exec proc may contain one or more threads "),Object(n.b)("li",{parentName:"ul"},"both procs and thread objects have built-in sync capabilities")),Object(n.b)("p",null,"Windows makes use of two types of process-related objects:"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Processes"),"\n– an entity corresponding to a user job or application that owns resources"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Threads"),"\n– a dispatchable unit of work that executes sequentially and is interruptible"))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/COMP3520-OS/3-Threads.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-comp-3520-os-3-threads-md-c2a4fd5dfde43f014803.js.map