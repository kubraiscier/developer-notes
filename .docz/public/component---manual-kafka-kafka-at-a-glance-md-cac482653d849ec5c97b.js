(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{moRd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kafka/Kafka-At-A-Glance.md"}});var i={_frontmatter:o},l=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,s({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"kafka-at-a-glance"},"Kafka At A Glance"),Object(n.b)("p",null,"Kafka cluster is a hub that you can plug into that can process millions of messages at a time."),Object(n.b)("p",null,"It is a publish/subscribe mechanisms. The nodes of the Kafka cluster are known as brokers. Kafka can also be used for tracking, stream processing, decoupling of components of the databases etc."),Object(n.b)("h2",{id:"key-terms"},"Key terms"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"Term"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Definition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"Producer"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Sends messages to Kafka")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"Consumer"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Retrieves messages from Kafka")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"Stream Processor"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Producing messages into output streams")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"Connector"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Connecting topics to existing applications")))),Object(n.b)("h2",{id:"messages-and-schemas"},"Messages and Schemas"),Object(n.b)("p",null,"Message delivery can take at least one of the following methods:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"At least once: Producer can send the same message more than once. If the message fails or is not acknowledged, the producer can send the message again. The consumer may have to eliminate duplicate messages."),Object(n.b)("li",{parentName:"ol"},"At most once: Producer may send a message once and never retry. If the message fails or is not acknowledged, the producer will never send the message again."),Object(n.b)("li",{parentName:"ol"},"Exactly once: Even if a producer sends a message more than once, the consumer will only receive the message once.")),Object(n.b)("p",null,"Kafka can process millions of messages per second. Different consumers may access the same message. This allows you to move away from batch processing and scale infinitely. Another benefit is being able to utilize the data in real time versus keeping it sitting on spinning disk."),Object(n.b)("h2",{id:"topics-and-partitions"},"Topics and Partitions"),Object(n.b)("p",null,"Messages in Kafka are called ",Object(n.b)("inlineCode",{parentName:"p"},"Topics"),". Topics are divided into partitions, with each message receiving an incremental ID called the offset."),Object(n.b)("p",null,"When a message is written:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Kept for one week (by default)"),Object(n.b)("li",{parentName:"ul"},"Cannot be altered or changed in any way"),Object(n.b)("li",{parentName:"ul"},"ID will increment infinitely (never start over at zero)"),Object(n.b)("li",{parentName:"ul"},"Randomly assigned to a partition, unless key is provided")),Object(n.b)("h2",{id:"producers-and-consumers"},"Producers and Consumers"),Object(n.b)("p",null,"A producer is a client that writes data to the cluster in order to eventually get consumed."),Object(n.b)("p",null,"Consumer is the application that consumes or reads the messages. The consumer subscribes to one or more topics and reads the messages in the order in which they were produced."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'Acks: Producers can choose whether to receive a confirmation of delivery by setting "acks" (acknowledgements)'),Object(n.b)("li",{parentName:"ul"},"Key: Producers specify a key, indicating that a message will go to the same partition every time"),Object(n.b)("li",{parentName:"ul"},"Consumer Group: To ensure multiple consumers aren't reading the same message, consumer groups map reads to consumers")),Object(n.b)("h2",{id:"brokers-and-clusters"},"Brokers and Clusters"),Object(n.b)("p",null,"A ",Object(n.b)("inlineCode",{parentName:"p"},"broker")," receives messages from the producer, assigns offsets, and stores the messages on disk."),Object(n.b)("p",null,"Brokers are designed to operate in a cluster, in which one broker is assigned the ",Object(n.b)("inlineCode",{parentName:"p"},"controller"),"."),Object(n.b)("p",null,"Brokers will also replicate data across brokers in order to create ",Object(n.b)("inlineCode",{parentName:"p"},"fault tolerance"),"."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kafka/Kafka-At-A-Glance.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kafka-kafka-at-a-glance-md-cac482653d849ec5c97b.js.map