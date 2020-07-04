(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{Mf8w:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var n=t("/FXl"),o=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Big-Data/Tools-And-Technologies.md"}});var r={_frontmatter:l},s=o.a;function c(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(n.b)(s,i({},r,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"big-data-tools-and-technologies"},"Big Data Tools and Technologies"),Object(n.b)("h2",{id:"apache-hadoop"},"Apache Hadoop"),Object(n.b)("p",null,"Hadoop is a very significant player in the Big Data landscape."),Object(n.b)("p",null,"It's an open-sourced framework for distributed storage and processing of very large data sets."),Object(n.b)("p",null,"Originally built in 2005 by a Yahoo engineer."),Object(n.b)("p",null,"It was inspired by Google's ",Object(n.b)("inlineCode",{parentName:"p"},"MapReduce")," and the ",Object(n.b)("inlineCode",{parentName:"p"},"Google File System")," papers."),Object(n.b)("p",null,"It was written in Java to implement the ",Object(n.b)("inlineCode",{parentName:"p"},"MapReduce")," programming model for scalable, reliable and distributed computing."),Object(n.b)("p",null,"The framework is composed of:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Hadoop Common: Contains libraries and utilities needed by other Hadoop modules."),Object(n.b)("li",{parentName:"ol"},"Hadoop Distributed File System (HDFS): A distributed file system that stores data on the commodity machines, providing very high aggregate bandwidth across the cluster."),Object(n.b)("li",{parentName:"ol"},"Hadoop MapReduce: A programming model for large-scale data processing."),Object(n.b)("li",{parentName:"ol"},"Hadoop YARN: A resource management platform responsible for managing compute resources in clusters and using them for the scheduling of users' applications.")),Object(n.b)("h2",{id:"hdfs"},"HDFS"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Structured like a regular Unix file system with data storage distributed across several machines in the cluster."),Object(n.b)("li",{parentName:"ul"},"Data service that sits atop regular file systems, allowing a fault tolerant, resilient clustered approach to storing and processing data."),Object(n.b)("li",{parentName:"ul"},"Fault-tolerant: Detection of faults and quick automatic recovery is a core architectural goal."),Object(n.b)("li",{parentName:"ul"},"Tuned to support large files. Typically a file is GB or TB and can support tens of millions of files by scaling to hundreds of nodes in a cluster."),Object(n.b)("li",{parentName:"ul"},"Follows ",Object(n.b)("inlineCode",{parentName:"li"},"write once, read multiple")," approach, simplifying data coherency issues and enabling high throughput data access. Example is a web crawler application."),Object(n.b)("li",{parentName:"ul"},"Optimized for throughput rather than latency. This makes it suited for long batch operations on large scale data rather than interactive analysis on streaming data."),Object(n.b)("li",{parentName:"ul"},"Moving computation near the data reduces network congestion and increses throughput. HDFS provides interfaces or applications to move closer to data storage.")),Object(n.b)("h3",{id:"architecture"},"Architecture"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Leader-follower architecture, where ",Object(n.b)("inlineCode",{parentName:"li"},"Namenode")," is the leader and ",Object(n.b)("inlineCode",{parentName:"li"},"Datanodes")," are slaves."),Object(n.b)("li",{parentName:"ol"},"Files split into blocks, and blocks are stored on datanodes (generally one per node within cluster)."),Object(n.b)("li",{parentName:"ol"},"Datanodes manage storage attached to nodes that they run on."),Object(n.b)("li",{parentName:"ol"},"Namenode controls all metadata, including what blocks make up a file and which datanode the blocks are stored on."),Object(n.b)("li",{parentName:"ol"},"Namenode executres file system operations like opening, closing and renaming files and directories."),Object(n.b)("li",{parentName:"ol"},"Datanodes serve read and write requests from the clients."),Object(n.b)("li",{parentName:"ol"},"Datanodes perform block creation, deletion, replication upon instruction from the Namenode."),Object(n.b)("li",{parentName:"ol"},"Namenode and Datanode are Java software designed to run on commodity hardware that supports Java."),Object(n.b)("li",{parentName:"ol"},"Usually a cluster contains a single Namenode and multiple datanodes, one each for each node in the cluster.")),Object(n.b)("p",null,Object(n.b)("img",{alt:"HDFS Architecture",src:"https://hadoop.apache.org/docs/r1.2.1/images/hdfsarchitecture.gif"})),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"Namenode")," makes all decisions around replication of blocks for data durability. Periodically receives heartbeat and ",Object(n.b)("inlineCode",{parentName:"p"},"BlockReport")," from datanodes in the cluster. Receipt of heartbeat is the health check."),Object(n.b)("h2",{id:"hadoop-mapreduce"},"Hadoop MapReduce"),Object(n.b)("p",null,"A framework that makes it easy to write applications which can consume huge amouts of data."),Object(n.b)("p",null,"It allows processing in parallel on large clusters consisting of thousands of nodes in a manner that is reliable and fault tolerant."),Object(n.b)("p",null,"The MapReduce layer consists of:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"MapReduce Java API to write workflows"),Object(n.b)("li",{parentName:"ol"},"Services to manage these workflows and provide the scheduling, distribution and parallelizing.")),Object(n.b)("h3",{id:"mapreduce-jobs"},"MapReduce jobs"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Splits the data sets into independent chunks."),Object(n.b)("li",{parentName:"ol"},"Data sets are processed by map tasks in parallel."),Object(n.b)("li",{parentName:"ol"},"MapReduce sorts the output of map jobs and feeds them to reduce tasks."),Object(n.b)("li",{parentName:"ol"},"Both input and output of map and reduce are stored on the file system."),Object(n.b)("li",{parentName:"ol"},"Framework takes care of scheduling tasks, monitoring them and re-executing failed tasks."),Object(n.b)("li",{parentName:"ol"},"MapReduce framework and HDFS are running on the same set of nodes. Tasks are scheduled on nodes where data is already present, hence yielding high bandwidth across the cluster.")),Object(n.b)("h3",{id:"inputs-and-outputs-of-a-mapreduce-job"},"Inputs and Outputs of a MapReduce Job"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Exclusively operates on key-value pairs."),Object(n.b)("li",{parentName:"ul"},"Input is large scale data set which benefits from parallel processing and does not fit on a single machine."),Object(n.b)("li",{parentName:"ul"},"Input split into independent data sets and map function produces key-value pair for each record in the data set."),Object(n.b)("li",{parentName:"ul"},"Output of mappers is shuffled, sorted, grouped and passed to the reducers."),Object(n.b)("li",{parentName:"ul"},"Reducer function applied to sets of key-value pairs that share the same key. The reducer function often agregates the value for the pairs with the same key.")),Object(n.b)("p",null,"It is important to know that:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Almost all data can be mapped to a key-value pair using a map function."),Object(n.b)("li",{parentName:"ol"},"Keys and values can be of any type. If using a custom type, the type must be implement a writable interface."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"MapReduce")," cannot be used if a computation of a value depends on a previously computed value. Recursive funcs like Fibonnaci cannot be implemented using ",Object(n.b)("inlineCode",{parentName:"li"},"MapReduce"),".")),Object(n.b)("p",null,"This is an example of a word count ",Object(n.b)("inlineCode",{parentName:"p"},"MapReduce")," job."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Example of MapReduce job",src:"https://www.guru99.com/images/Big_Data/061114_0930_Introductio1.png"})),Object(n.b)("p",null,"The order of a job goes as the following:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Input"),Object(n.b)("li",{parentName:"ol"},"Splitting"),Object(n.b)("li",{parentName:"ol"},"Mapping"),Object(n.b)("li",{parentName:"ol"},"Shuffle"),Object(n.b)("li",{parentName:"ol"},"Reduce"),Object(n.b)("li",{parentName:"ol"},"Final Result")),Object(n.b)("h3",{id:"example-applications-of-mapreduce"},"Example Applications of MapReduce"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Counting votes by processing data from each polling booth."),Object(n.b)("li",{parentName:"ol"},"Aggregating electricy consumption from data points collected across a large geographical area."),Object(n.b)("li",{parentName:"ol"},"Used by Google Maps to calculate nearest neighbour."),Object(n.b)("li",{parentName:"ol"},"Performing statistical aggregate type functions on large data sets."),Object(n.b)("li",{parentName:"ol"},"Counting number of href links in web log files for clickstream analysis.")),Object(n.b)("h3",{id:"writing-and-running-hadoop-mapreduce-jobs"},"Writing and Running Hadoop MapReduce Jobs"),Object(n.b)("p",null,"Typicall jobs are written in Java, but can also be written using:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Hadoop Streaming: A utility which allows users to create an run MapReduce jobs with any executables."),Object(n.b)("li",{parentName:"ol"},"Hadoop Pipes: C++ API to implement MapReduce applications")),Object(n.b)("h3",{id:"hadoop-job-configurations"},"Hadoop Job configurations"),Object(n.b)("p",null,"Consists of:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Input and output locations on HDFS."),Object(n.b)("li",{parentName:"ul"},"Map and reduce functions via implementations of interfaces or abstract classes."),Object(n.b)("li",{parentName:"ul"},"Other job parameters.")),Object(n.b)("p",null,"A Hadoop job client submits the job (jar/executable) and configuration to the ",Object(n.b)("inlineCode",{parentName:"p"},"ResourceManager")," in ",Object(n.b)("inlineCode",{parentName:"p"},"YARN")," which distributes them to the workers and performs functions like scheduling, monitoring and providing status and diagnostic information."),Object(n.b)("h2",{id:"yet-another-resource-negotiator-yarn"},"Yet Another Resource Negotiator (YARN)"),Object(n.b)("p",null,"Introduced in Hadoop 2.0, YARN provides a general processing platform not constrained to ",Object(n.b)("inlineCode",{parentName:"p"},"MapReduce"),"."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Global ResourceManager")," is the authority that delegates resources among the applications in the system."),Object(n.b)("p",null,"It has a ",Object(n.b)("inlineCode",{parentName:"p"},"NodeManager")," on each node that is responsible for containers, monitoring their resource usage (CPU, memory, disk, network) and reporting this data to the ",Object(n.b)("inlineCode",{parentName:"p"},"ResourceManager"),"."),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"ResourceManager")," has two components:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Scheduler - responsible for allocating resources the various running applications."),Object(n.b)("li",{parentName:"ol"},"ApplicationsManager - responsible for accepting job-submissions, negotiating the first container for executing the application-specific ",Object(n.b)("inlineCode",{parentName:"li"},"ApplicationMaster")," and provides the service for restarting the ",Object(n.b)("inlineCode",{parentName:"li"},"ApplicationMaster")," on failure.")),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"ApplicationMaster")," has the responsibility of negotiating appropriate resource containers from the ",Object(n.b)("inlineCode",{parentName:"p"},"Scheduler"),", tracking their status and monitoring progress."),Object(n.b)("h3",{id:"container"},"Container"),Object(n.b)("p",null,"Note that for YARN, a ",Object(n.b)("inlineCode",{parentName:"p"},"container")," represents a collection of physical ",Object(n.b)("inlineCode",{parentName:"p"},"resources"),". Also could mean CPU cores, disk along with RAM."),Object(n.b)("h2",{id:"hadoop-ecosystem"},"Hadoop Ecosystem"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Ecosystem",src:"https://i.ytimg.com/vi/1WY63n2XRLM/maxresdefault.jpg"})),Object(n.b)("p",null,"5 functions of Hadoop ecosystem:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Data management using HDFS, HBase and YARN"),Object(n.b)("li",{parentName:"ol"},"Data access with MapReduce, Hive and Pig"),Object(n.b)("li",{parentName:"ol"},"Data ingestion and integration using Flume, Sqoop, Kafka and Storm"),Object(n.b)("li",{parentName:"ol"},"Data monitoring using Ambari, Zookeeper and Oozie"),Object(n.b)("li",{parentName:"ol"},"Data governance and security using Falcon, Ranger and Knox")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Big-Data/Tools-And-Technologies.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-big-data-tools-and-technologies-md-67a3b780033bdb6b9790.js.map