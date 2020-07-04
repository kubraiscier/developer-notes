(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{cYNp:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var n=t("/FXl"),i=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Databases/Intro-And-Overview.md"}});var r={_frontmatter:o},l=i.a;function c(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(l,s({},r,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"intro-and-overview"},"Intro and Overview"),Object(n.b)("p",null,"This sections covers some of the concepts behind databases and the ins + outs."),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("h3",{id:"websites"},"Websites"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",s({parentName:"li"},{href:"https://github.com/numetriclabz/awesome-db"}),"Awesome Databases")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.keycdn.com/blog/popular-databases"}),"Popular Databases")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.dataversity.net/review-pros-cons-different-databases-relational-versus-non-relational/"}),"Relational vs Non-Relational")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/CAP_theorem"}),"CAP theorem")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/ACID"}),"ACID properties")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Eventual_consistency"}),"BASE: Eventual consistency")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/NewSQL"}),"NewSQL Databases")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/NewSQL"}),"Top NewSQL DBs")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Column-oriented_DBMS"}),"Column-Oriented DBMS")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",s({parentName:"li"},{href:"https://db-engines.com/en/ranking"}),"DB Rankings")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",s({parentName:"li"},{href:"https://github.com/node-influx/node-influx/tree/master/examples/express_response_times"}),"Express Response Times Example"))),Object(n.b)("h3",{id:"books"},"Books"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications"}),"Designing Data-Intensive Applications")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.goodreads.com/book/show/44647144-database-internals"}),"Database Internals"))),Object(n.b)("h2",{id:"key-value-databases"},"Key-Value databases"),Object(n.b)("p",null,"Key-value stores are probably the simplest form of database management systems. They can only store pairs of keys and values, as well as retrieve values when a key is known."),Object(n.b)("p",null,"These simple systems are normally not adequate for complex applications. On the other hand, it is exactly this simplicity, that makes such systems attractive in certain circumstances. For example resource-efficient key-value stores are often applied in embedded systems or as high performance in-process databases."),Object(n.b)("p",null,"An extended form of key-value stores is able to sort the keys, and thus enables range queries as well as an ordered processing of keys."),Object(n.b)("p",null,"Many systems provide further extensions so that we see a fairly seamless transition to document stores and wide column stores."),Object(n.b)("p",null,"Note: MemSQL and VoltDB also falls under this category but is denoted under ",Object(n.b)("inlineCode",{parentName:"p"},"NewSQL"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://redis.io/"}),"Redis"),": Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster. The name Redis means REmote DIctionary Server."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://github.com/etcd-io/etcd"}),"etcd"),": etcd is a distributed reliable key-value store for the most critical data of a distributed system, with a focus on being simple, secure, fast and reliable.")),Object(n.b)("h2",{id:"graph-databases"},"Graph databases"),Object(n.b)("p",null,"Graph DBMS also called graph-oriented DBMS or graph database represent data in graph structures as nodes and edges, which are relationships between nodes. They allow easy processing of data in that form and simple calculation of specific properties of the graph - such as the number of steps needed to get from one node to another node."),Object(n.b)("p",null,"Graph DBMSs usually don't provide indexes on all nodes, direct access to nodes based on attribute values is not possible in these cases."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://github.com/neo4j/neo4j"}),"Neo4j"),": Neo4j is the world’s leading Graph Database. It is a high performance graph store with all the features expected of a mature and robust database, like a friendly query language and ACID transactions. The programmer works with a flexible network structure of nodes and relationships rather than static tables — yet enjoys all the benefits of enterprise-quality database. For many applications, Neo4j offers orders of magnitude performance benefits compared to relational DBs."),Object(n.b)("li",{parentName:"ul"},"OrientDB")),Object(n.b)("h2",{id:"time-series-databases"},"Time-Series databases"),Object(n.b)("p",null,"A Time Series DBMS is a database management system that is optimized for handling time series data: each entry is associated with a timestamp."),Object(n.b)("p",null,"For example, time series data may be produced by sensors, smart meters or RFIDs in the so-called Internet of Things, or may depict the stock tickers of a high frequency stock trading system."),Object(n.b)("p",null,"Time Series DBMS are designed to efficiently collect, store and query various time series with high transaction volumes. Although time series data can be managed with other categories of DBMS (from key-value stores to relational systems), the specific challenges often require specialized systems."),Object(n.b)("p",null,"E.g. a query like 'SELECT SENSOR1_CPU_FREQUENCY / SENSOR2_HEAT' joins two time series based on the overlapping areas of time for each and outputs a single composite time series."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/InfluxDB"}),"InfluxDB"),": InfluxDB is an open-source time series database (TSDB) developed by InfluxData. It is written in Go and optimized for fast, high-availability storage and retrieval of time series data in fields such as operations monitoring, application metrics, Internet of Things sensor data, and real-time analytics. It also has support for processing data from Graphite."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://github.com/prometheus/prometheus"}),"Prometheus"),": Prometheus, a Cloud Native Computing Foundation project, is a systems and service monitoring system. It collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts if some condition is observed to be true.")),Object(n.b)("h2",{id:"search-engine-databases"},"Search Engine databases"),Object(n.b)("p",null,"Search engines are NoSQL database management systems dedicated to the search for data content."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Splunk"}),"Splunk"),": Splunk (the product) captures, indexes, and correlates real-time data in a searchable repository from which it can generate graphs, reports, alerts, dashboards, and visualizations."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Elasticsearch"}),"ElasticSearch"),': Elasticsearch can be used to search all kinds of documents. It provides scalable search, has near real-time search, and supports multitenancy. "Elasticsearch is distributed, which means that indices can be divided into shards and each shard can have zero or more replicas. Each node hosts one or more shards, and acts as a coordinator to delegate operations to the correct shard(s). Rebalancing and routing are done automatically". Related data is often stored in the same index, which consists of one or more primary shards, and zero or more replica shards. Once an index has been created, the number of primary shards cannot be changed. Elasticsearch is developed alongside a data collection and log-parsing engine called Logstash, an analytics and visualisation platform called Kibana, and Beats, a collection of lightweight data shippers. The four products are designed for use as an integrated solution, referred to as the "Elastic Stack" (formerly the "ELK stack").'),Object(n.b)("li",{parentName:"ul"},"Solr")),Object(n.b)("h2",{id:"document-databases"},"Document databases"),Object(n.b)("p",null,"Document stores, also called document-oriented database systems, are characterized by their schema-free organization of data."),Object(n.b)("p",null,"That means:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Records do not need to have a uniform structure, i.e. different records may have different columns."),Object(n.b)("li",{parentName:"ol"},"The types of the values of individual columns can be different for each record."),Object(n.b)("li",{parentName:"ol"},"Columns can have more than one value (arrays)."),Object(n.b)("li",{parentName:"ol"},"Records can have a nested structure."),Object(n.b)("li",{parentName:"ol"},"Document stores often use internal notations, which can be processed directly in applications, mostly JSON.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Amazon_DynamoDB"}),"DynamoDB"),": Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key-value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio. DynamoDB exposes a similar data model to and derives its name from Dynamo, but has a different underlying implementation. Dynamo had a multi-master design requiring the client to resolve version conflicts and DynamoDB uses synchronous replication across multiple data centers for high durability and availability."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Couchbase_Server"}),"Couchbase"),": Couchbase Server, originally known as Membase, is an open-source, distributed (shared-nothing architecture) multi-model NoSQL document-oriented database software package that is optimized for interactive applications. These applications may serve many concurrent users by creating, storing, retrieving, aggregating, manipulating and presenting data. In support of these kinds of application needs, Couchbase Server is designed to provide easy-to-scale key-value or JSON document access with low latency and high sustained throughput. It is designed to be clustered from a single machine to very large-scale deployments spanning many machines.")),Object(n.b)("h2",{id:"wide-column-store-databases"},"Wide column store databases"),Object(n.b)("p",null,"Wide column stores, also called extensible record stores, store data in records with an ability to hold very large numbers of dynamic columns. Since the column names as well as the record keys are not fixed, and since a record can have billions of columns, wide column stores can be seen as two-dimensional key-value stores."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://cassandra.apache.org/"}),"Cassandra"),": Apache Cassandra is a highly scalable, high-performance distributed database designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure. A top level Apache project born at Facebook and built on Amazon’s Dynamo and Google’s BigTable, is a distributed database for managing large amounts of structured data across many commodity servers, while providing highly available service and no single point of failure. Apache Cassandra offers capabilities that relational databases and other NoSQL databases simply cannot match such as: continuous availability, linear scale performance, operational simplicity and easy data distribution across multiple data centers and cloud availability zones."),Object(n.b)("li",{parentName:"ul"},"HBase")),Object(n.b)("h2",{id:"relational-databases"},"Relational databases"),Object(n.b)("p",null,"Relational database management systems (RDBMS) support the relational (=table-oriented) data model. The schema of a table (=relation schema) is defined by the table name and a fixed number of attributes with fixed data types. A record (=entity) corresponds to a row in the table and consists of the values of each attribute. A relation thus consists of a set of uniform records."),Object(n.b)("p",null,"The table schemas are generated by normalization in the process of data modeling."),Object(n.b)("p",null,"Certain basic operations are defined on the relations:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Classical set operations (union, intersection and difference)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Selection (selection of a subset of records according to certain filter criteria for the attribute values)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Projection (selecting a subset of attributes / columns of the table)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Join: special conjunction of multiple tables as a combination of the Cartesian product with selection and projection.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",s({parentName:"p"},{href:"https://github.com/postgres/postgres"}),"Postgres"),": PostgreSQL is an advanced object-relational database management system that supports an extended subset of the SQL standard, including transactions, foreign keys, subqueries, triggers, user-defined types and functions. This distribution also contains C language bindings.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/MySQL"}),"MySQL"),":")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/MariaDB"}),"MariaDB"),": MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system (RDBMS), intended to remain free and open-source software under the GNU General Public License. Development is led by some of the original developers of MySQL, who forked it due to concerns over its acquisition by Oracle Corporation in 2009. MariaDB intended to maintain high compatibility with MySQL, ensuring a drop-in replacement capability with library binary parity and exact matching with MySQL APIs and commands. However, new features diverge more. It includes new storage engines like Aria, ColumnStore, and MyRocks.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Amazon_Redshift"}),"Amazon Redshift"),": Amazon Redshift is a data warehouse product which forms part of the larger cloud-computing platform Amazon Web Services. Redshift differs from Amazon's other hosted database offering, Amazon RDS, in its ability to handle analytic workloads on big data data sets stored by a column-oriented DBMS principle.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Amazon_Relational_Database_Service"}),"Amazon RDS"),': Amazon Relational Database Service (or Amazon RDS) is a distributed relational database service by Amazon Web Services (AWS). It is a web service running "in the cloud" designed to simplify the setup, operation, and scaling of a relational database for use in applications. Administration processes like patching the database software, backing up databases and enabling point-in-time recovery are managed automatically. Scaling storage and compute resources can be performed by a single API call as AWS does not offer an ssh connection to RDS instances.'))),Object(n.b)("h2",{id:"newsql-databases"},"NewSQL databases"),Object(n.b)("p",null,"NewSQL is a class of relational database management systems that seek to provide the scalability of NoSQL systems for online transaction processing (OLTP) workloads while maintaining the ACID guarantees of a traditional database system."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.memsql.com/"}),"MemSQL"),": A modern relational database for cloud and on-premises that delivers immediate insights for modern applications and analytical systems. MemSQL also comes with tiered storage. Most NoSQL databases are disk-first, with some support for in-memory operations. MemSQL includes both and allows you to flexibly manage memory vs. disk usage."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://github.com/cockroachdb/cockroach"}),"CockroachDB"),": CockroachDB is a distributed SQL database built on a transactional and strongly-consistent key-value store. It scales horizontally; survives disk, machine, rack, and even datacenter failures with minimal latency disruption and no manual intervention; supports strongly-consistent ACID transactions; and provides a familiar SQL API for structuring, manipulating, and querying data."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.voltdb.com/"}),"VoltDB"),": VoltDB is an in-memory database designed by Michael Stonebraker (who earlier designed Ingres and PostgreSQL), Sam Madden, and Daniel Abadi. It is an ACID-compliant RDBMS that uses a shared nothing architecture. VoltDB is a NewSQL relational database that supports SQL access from within pre-compiled Java stored procedures. The unit of transaction is the stored procedure, written in Java interspersed with SQL. VoltDB relies on horizontal partitioning down to the individual hardware thread to scale, k-safety (synchronous replication) to provide high availability, and a combination of continuous snapshots and command logging for durability (crash recovery).")),Object(n.b)("h2",{id:"cap-theorem"},"CAP Theorem"),Object(n.b)("p",null,"(From Wikipedia)"),Object(n.b)("p",null,"In theoretical computer science, the CAP theorem, also named Brewer's theorem after computer scientist Eric Brewer, states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Consistency: Every read receives the most recent write or an error"),Object(n.b)("li",{parentName:"ol"},"Availability: Every request receives a (non-error) response, without the guarantee that it contains the most recent write"),Object(n.b)("li",{parentName:"ol"},"Partition tolerance: The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes")),Object(n.b)("p",null,"When a network partition failure happens should we decide to:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Cancel the operation and thus decrease the availability but ensure consistency"),Object(n.b)("li",{parentName:"ol"},"Proceed with the operation and thus provide availability but risk inconsistency")),Object(n.b)("p",null,"The CAP theorem implies that in the presence of a network partition, one has to choose between consistency and availability. Note that consistency as defined in the CAP theorem is quite different from the consistency guaranteed in ACID database transactions."),Object(n.b)("h2",{id:"acid-properties"},"ACID Properties"),Object(n.b)("p",null,"(From Wikipedia)"),Object(n.b)("p",null,Object(n.b)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ACID"}),"ACID")," (atomicity, consistency, isolation, durability) is a set of properties of database transactions intended to guarantee validity even in the event of errors, power failures, etc. In the context of databases, a sequence of database operations that satisfies the ACID properties (and these can be perceived as a single logical operation on the data) is called a transaction. For example, a transfer of funds from one bank account to another, even involving multiple changes such as debiting one account and crediting another, is a single transaction."),Object(n.b)("h3",{id:"atomicity"},"Atomicity"),Object(n.b)("p",null,'Transactions are often composed of multiple statements. Atomicity guarantees that each transaction is treated as a single "unit", which either succeeds completely, or fails completely: if any of the statements constituting a transaction fails to complete, the entire transaction fails and the database is left unchanged. An atomic system must guarantee atomicity in each and every situation, including power failures, errors and crashes. A guarantee of atomicity prevents updates to the database occurring only partially, which can cause greater problems than rejecting the whole series outright. As a consequence, the transaction cannot be observed to be in progress by another database client. At one moment in time, it has not yet happened, and at the next it has already occurred in whole (or nothing happened if the transaction was cancelled in progress).'),Object(n.b)("p",null,"An example of an atomic transaction is a monetary transfer from bank account A to account B. It consists of two operations, withdrawing the money from account A and saving it to account B. Performing these operations in an atomic transaction ensures that the database remains in a consistent state, that is, money is neither lost nor created if either of those two operations fail."),Object(n.b)("h3",{id:"consistency"},"Consistency"),Object(n.b)("p",null,"Consistency ensures that a transaction can only bring the database from one valid state to another, maintaining database invariants: any data written to the database must be valid according to all defined rules, including constraints, cascades, triggers, and any combination thereof. This prevents database corruption by an illegal transaction, but does not guarantee that a transaction is correct. Referential integrity guarantees the primary key – foreign key relationship."),Object(n.b)("h3",{id:"isolation"},"Isolation"),Object(n.b)("p",null,"Transactions are often executed concurrently (e.g., multiple transactions reading and writing to a table at the same time). Isolation ensures that concurrent execution of transactions leaves the database in the same state that would have been obtained if the transactions were executed sequentially. Isolation is the main goal of concurrency control; depending on the method used, the effects of an incomplete transaction might not even be visible to other transactions."),Object(n.b)("h3",{id:"durability"},"Durability"),Object(n.b)("p",null,"Durability guarantees that once a transaction has been committed, it will remain committed even in the case of a system failure (e.g., power outage or crash). This usually means that completed transactions (or their effects) are recorded in non-volatile memory."),Object(n.b)("h2",{id:"base-eventual-consistency"},"BASE: Eventual Consistency"),Object(n.b)("p",null,"(From Wikipedia)"),Object(n.b)("p",null,"Eventual consistency is a consistency model used in distributed computing to achieve high availability that informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value. Eventual consistency, also called optimistic replication, is widely deployed in distributed systems, and has origins in early mobile computing projects. A system that has achieved eventual consistency is often said to have converged, or achieved replica convergence. Eventual consistency is a weak guarantee – most stronger models, like linearizability are trivially eventually consistent, but a system that is merely eventually consistent does not usually fulfill these stronger constraints."),Object(n.b)("p",null,"Eventually-consistent services are often classified as providing BASE (Basically Available, Soft state, Eventual consistency) semantics, in contrast to traditional ACID (Atomicity, Consistency, Isolation, Durability) guarantees. In chemistry BASE is opposite to ACID, which helps remembering the acronym. According to the same resource, these are the rough definitions of each term in BASE:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"(B)asically (A)vailable: basic reading and writing operations are available as much as possible (using all nodes of a database cluster), but without any kind of consistency guarantees (the write may not persist after conflicts are reconciled, the read may not get the latest write)."),Object(n.b)("li",{parentName:"ul"},"(S)oft state: without consistency guarantees, after some amount of time, we only have some probability of knowing the state, since it may not yet have converged."),Object(n.b)("li",{parentName:"ul"},"(E)ventually consistent: If the system is functioning and we wait long enough after any given set of inputs, we will eventually be able to know what the state of the database is, and so any further reads will be consistent with our expectations.")),Object(n.b)("p",null,"Eventual consistency is sometimes criticized as increasing the complexity of distributed software applications. This is partly because eventual consistency is purely a liveness guarantee (reads eventually return the same value) and does not make safety guarantees: ",Object(n.b)("strong",{parentName:"p"},"an eventually consistent system can return any value before it converges.")),Object(n.b)("h2",{id:"column-oriented-dbms"},"Column-oriented DBMS"),Object(n.b)("p",null,"A column-oriented DBMS (or columnar database management system) is a database management system (DBMS) that stores data tables by column rather than by row. Practical use of a column store versus a row store differs little in the relational DBMS world. Both columnar and row databases can use traditional database query languages like SQL to load data and perform queries."),Object(n.b)("p",null,"Both row and columnar databases can become the backbone in a system to serve data for common extract, transform, load (ETL) and data visualization tools. However, by storing data in columns rather than rows, the database can more precisely access the data it needs to answer a query rather than scanning and discarding unwanted data in rows. Query performance is increased for certain workloads."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Databases/Intro-And-Overview.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-databases-intro-and-overview-md-740703b20db2a32e343b.js.map