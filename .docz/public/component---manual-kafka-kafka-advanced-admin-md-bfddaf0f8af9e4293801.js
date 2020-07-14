(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{ovIo:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kafka/Kafka-Advanced-Admin.md"}});var c={_frontmatter:i},s=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"kafka-advanced-config"},"Kafka Advanced Config"),Object(a.b)("h2",{id:"advanced-producers"},"Advanced Producers"),Object(a.b)("p",null,"Topics on advanced use for producers."),Object(a.b)("h2",{id:"idempotent-producers"},"Idempotent Producers"),Object(a.b)("p",null,"To eliminate the possibility of duplicate messages, you cam set ",Object(a.b)("inlineCode",{parentName:"p"},"enable.idempotence")," to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," and the consumer will delete duplicate messages."),Object(a.b)("h3",{id:"impotent-producer-config"},"Impotent Producer Config"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ENABLE_IDEMPOTENCE=TRUE"),Object(a.b)("li",{parentName:"ul"},"ACKS=ALL"),Object(a.b)("li",{parentName:"ul"},"RETRIES=MAX_VALUE"),Object(a.b)("li",{parentName:"ul"},"MAX_IN_FLIGHT_REQUESTS=5")),Object(a.b)("p",null,"There are over 50 producer configs. Kafka docs indicates whether certain configurations are high importance or low."),Object(a.b)("p",null,"Idempotence is listed as low importance due to its effect on efficiency. However, you can use this to ensure your messages arrive in their entirety if safety is a concern."),Object(a.b)("h2",{id:"batch-compression"},"Batch Compression"),Object(a.b)("p",null,"Sending a batch as opposed to individual messages is very important in Kafka. Sending larger batches with compression will significantly improve throughput."),Object(a.b)("h3",{id:"batch-size-and-timing"},"Batch Size and Timing"),Object(a.b)("p",null,"When multiple records are sent to the same partition, the producer can batch them together. The ",Object(a.b)("inlineCode",{parentName:"p"},"batch.size")," config controls the amount of memory used for each batch. The ",Object(a.b)("inlineCode",{parentName:"p"},"linger.ms")," config will help increase the batch size to get the best compression and throughput."),Object(a.b)("h2",{id:"serializer"},"Serializer"),Object(a.b)("p",null,"Custom serialization can be used to translate your data in a format that can be stored, transmitted and retrieved."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Avro serializer: io.confluent.kafka.serializers.KafkaAvroSerializer"),Object(a.b)("li",{parentName:"ul"},"org.apachage.kafka.common.serialization.StringSerializer")),Object(a.b)("p",null,"The producer serializers, while the consumer deserializers."),Object(a.b)("h2",{id:"producer-buffer-memory"},"Producer Buffer Memory"),Object(a.b)("p",null,"If producer is producing messages faster than the broker can receive those messages, the messages will be sent to a bugger memory on the producer."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"max.block.ms: IF producer is sending messages to the broke and the broker is not responding for 60 seconds, you will receive an exception error. This can occur if the broker's buffer is filled or the broker is down.")),Object(a.b)("h2",{id:"advanced-consumers"},"Advanced Consumers"),Object(a.b)("p",null,"Topics on advanced use for consumers."),Object(a.b)("h2",{id:"reading-duplicate-messages"},"Reading Duplicate Messages"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"fetch.min.bytes/fetch.max.bytes: Min and max batch size of the request from the consumer. The default are 1 byte and 50 MB."),Object(a.b)("li",{parentName:"ul"},"max.poll.records: The maximum number of messages the consumer receives when polling. The default is 500."),Object(a.b)("li",{parentName:"ul"},"max.partition.fetch.bytes: The max amount of data the broker returns to the consumer. The default is 1MB.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-java"}),"// enable.auto.commit=true\nwhile (true) {\n  List<Records> batch = consumer.poll(Duration.ofMillis(100));\n  doSomethingSynchronous(batch);\n}\n\n// enable.auto.commit=false\nwhile (true) {\n  batch += consumer.poll(Duration.ofMillis(100));\n  if (isReady(batch)) {\n    doSomethingSynchronous(batch);\n    consumer.commitSync();\n  }\n}\n")),Object(a.b)("h2",{id:"tracking-offsets"},"Tracking Offsets"),Object(a.b)("p",null,"When a consumer updates its current position in the partition, it's called a ",Object(a.b)("inlineCode",{parentName:"p"},"commit"),". A consumer produces a message to the ",Object(a.b)("inlineCode",{parentName:"p"},"__consumer_offsets")," topic. If the consumer crashes, it triggers a rebalance and the consumer may be assigned a new set of partitions."),Object(a.b)("h2",{id:"partition-rebalancing"},"Partition Rebalancing"),Object(a.b)("p",null,"Types for a topic with 8 partitions could be ",Object(a.b)("inlineCode",{parentName:"p"},"Round Robin")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Range"),"."),Object(a.b)("p",null,"Moving partition ownership from one consumer to another is called a rebalance. This allows us to easily and safely add and remove consumers. Outside of adding or removing consumers, we don't want to to rebalance."),Object(a.b)("h2",{id:"consumer-group-coordinator"},"Consumer Group Coordinator"),Object(a.b)("p",null,"One of the brokers in the Kafka cluster is established as a consumer group coordinator. That broker continuously reaches out to all consumers and checks if they have a heartbeat."),Object(a.b)("p",null,"This broker is also responsible for making the appropriate adjustments when a consumer fails or a new consumer joins the group."),Object(a.b)("p",null,"Example could be that the first consumer reads messages on brokers 1 & 3 while another consumer reads from broker 2. Broker 3 coordinates all of this."),Object(a.b)("h2",{id:"advanced-topics"},"Advanced Topics"),Object(a.b)("p",null,"Topics for Kakfa Advanced Topics:"),Object(a.b)("h2",{id:"topic-design"},"Topic Design"),Object(a.b)("p",null,"For an example topic of ",Object(a.b)("inlineCode",{parentName:"p"},"helloworld")," that has 3 partitions and 3 brokers listening to each partition respectively in the Kafka Cluster, there are some design considerations:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Data accuracy"),Object(a.b)("li",{parentName:"ol"},"Popularity of events"),Object(a.b)("li",{parentName:"ol"},"Amount of data to process")),Object(a.b)("p",null,"There are also topic options that come in the form of command line argument flags."),Object(a.b)("h2",{id:"topic-alterations"},"Topic Alterations"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Log Segment")," vs ",Object(a.b)("inlineCode",{parentName:"p"},"Compacted Topic"),"."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kafka/Kafka-Advanced-Admin.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kafka-kafka-advanced-admin-md-bfddaf0f8af9e4293801.js.map