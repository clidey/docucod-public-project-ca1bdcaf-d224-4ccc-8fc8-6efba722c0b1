import{u as d,a as e,k as l}from"./index-CxwdZWLc.js";function r(i){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components},{Accordion:t,AccordionGroup:a}=n;return t||s("Accordion"),a||s("AccordionGroup"),e(l,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Which Databases Does WhoDB Support?"
description: "Get a detailed overview of all supported databases in both Community and Enterprise editions. Understand how WhoDB ensures a consistent experience across SQL, NoSQL, and graph database systems and how database support is architected."`}),`
`,e(n.h1,{children:"Which Databases Does WhoDB Support?"}),`
`,e(n.p,{children:"Explore the comprehensive list of databases supported by WhoDB across both the Community and Enterprise editions. This page helps you understand how WhoDB provides a unified and consistent experience for managing SQL, NoSQL, and other database types through its plugin architecture."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Overview"}),`
`,e(n.p,{children:"WhoDB is designed as a versatile and unified database management tool that integrates multiple databases into a seamless user experience. Whether you are working with relational databases like PostgreSQL and MySQL, NoSQL databases such as MongoDB, or even newer analytical engines like ClickHouse, WhoDB allows you to access and manage your data with consistent workflows."}),`
`,e(n.p,{children:"The database support in WhoDB is architected through its modular plugin engine, which abstracts database-specific behaviors and facilitates consistent UI patterns and operational capabilities."}),`
`,e(n.h2,{children:"Supported Database Types"}),`
`,e(n.h3,{children:"Community Edition Supported Databases"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.strong,{children:"PostgreSQL"})}),`
`,e(n.li,{children:e(n.strong,{children:"MySQL"})}),`
`,e(n.li,{children:e(n.strong,{children:"MariaDB"})}),`
`,e(n.li,{children:e(n.strong,{children:"SQLite3"})}),`
`,e(n.li,{children:e(n.strong,{children:"MongoDB"})}),`
`,e(n.li,{children:e(n.strong,{children:"Redis"})}),`
`,e(n.li,{children:e(n.strong,{children:"ElasticSearch"})}),`
`]}),`
`,e(n.h3,{children:"Enterprise Edition Exclusive Databases"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.strong,{children:"ClickHouse"})}),`
`]}),`
`,e(n.p,{children:"The Enterprise Edition extends support to additional databases, such as ClickHouse, leveraging advanced plugins and integration mechanisms."}),`
`,e(n.h2,{children:"Database Categories and Characteristics"}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Database Type"}),e(n.th,{children:"Type"}),e(n.th,{children:"Support Highlights"}),e(n.th,{children:"Schema Support"}),e(n.th,{children:"Scratchpad Support"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:"PostgreSQL"}),e(n.td,{children:"SQL"}),e(n.td,{children:"Full SQL, schemas, triggers, and advanced types"}),e(n.td,{children:"Yes"}),e(n.td,{children:"Yes"})]}),e(n.tr,{children:[e(n.td,{children:"MySQL"}),e(n.td,{children:"SQL"}),e(n.td,{children:"Widely supported features, schemas"}),e(n.td,{children:"Yes"}),e(n.td,{children:"Yes"})]}),e(n.tr,{children:[e(n.td,{children:"MariaDB"}),e(n.td,{children:"SQL"}),e(n.td,{children:"Compatible with MySQL, full schema support"}),e(n.td,{children:"Yes"}),e(n.td,{children:"Yes"})]}),e(n.tr,{children:[e(n.td,{children:"SQLite3"}),e(n.td,{children:"SQL (embedded)"}),e(n.td,{children:"File-based database, no schema support"}),e(n.td,{children:"No"}),e(n.td,{children:"Yes"})]}),e(n.tr,{children:[e(n.td,{children:"MongoDB"}),e(n.td,{children:"NoSQL (document)"}),e(n.td,{children:"Collection-based, no schemas, no raw SQL support"}),e(n.td,{children:"No"}),e(n.td,{children:"No"})]}),e(n.tr,{children:[e(n.td,{children:"Redis"}),e(n.td,{children:"NoSQL (key-value)"}),e(n.td,{children:"In-memory data store, limited editing features"}),e(n.td,{children:"No"}),e(n.td,{children:"No"})]}),e(n.tr,{children:[e(n.td,{children:"ElasticSearch"}),e(n.td,{children:"NoSQL (search)"}),e(n.td,{children:"Document search optimized, no tables or schemas"}),e(n.td,{children:"No"}),e(n.td,{children:"No"})]}),e(n.tr,{children:[e(n.td,{children:"ClickHouse"}),e(n.td,{children:"Analytical SQL"}),e(n.td,{children:"Columnar, supports SQL-like queries"}),e(n.td,{children:"Yes"}),e(n.td,{children:"Yes"})]})]})]}),`
`,e(n.h3,{children:"Clarifications"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Schemas"}),": SQL databases like PostgreSQL and MySQL support database schemas to organize storage units (tables). NoSQL databases like MongoDB and Redis do not support schemas."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Scratchpad/Raw Query Execution"}),": Allows running arbitrary queries in the database’s native language. Not all databases support this feature (e.g., MongoDB and Redis do not)."]}),`
`]}),`
`,e(n.h2,{children:"How WhoDB Ensures Consistency"}),`
`,e(n.h3,{children:"Plugin Architecture"}),`
`,e(n.p,{children:"WhoDB implements a plugin engine where each supported database has a dedicated plugin to translate native database concepts into WhoDB’s unified data model."}),`
`,e(n.p,{children:"For example:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"PostgreSQL plugin fully supports schema discovery, table info, and advanced data types."}),`
`,e(n.li,{children:"MongoDB plugin maps collections to storage units and indexes."}),`
`]}),`
`,e(n.p,{children:"This modular approach provides:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Consistent UI"}),": The interface behaves similarly regardless of database type."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Unified Features"}),": Features like schema visualization, data browsing, and scratchpad query execution adapt gracefully to database capabilities."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Extensibility"}),": New databases can be added via plugins without breaking existing functionality."]}),`
`]}),`
`,e(n.h3,{children:"Examples of Data Model Alignment"}),`
`,e(n.p,{children:"In WhoDB’s data model:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Storage Units"})," represent tables, collections, or keyspaces depending on the database."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Rows/Entries"})," and ",e(n.strong,{children:"Columns/Properties"})," are abstracted to provide common ground between SQL rows and NoSQL documents."]}),`
`]}),`
`,e(n.p,{children:"This allows users to navigate various databases as if using a single interface, simplifying data management."}),`
`,e(n.h2,{children:"Practical User Workflows by Database"}),`
`,e(n.h3,{children:"Relational Databases (PostgreSQL, MySQL, MariaDB, SQLite3)"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Log in with credentials specifying the database and schema."}),`
`,e(n.li,{children:"Browse tables via the Table Schema page, filtering and searching data inline."}),`
`,e(n.li,{children:"Use the Scratchpad to run raw SQL queries, including complex joins and transactions."}),`
`,e(n.li,{children:"Visualize table relationships in Graph View."}),`
`]}),`
`,e(n.h3,{children:"NoSQL Databases (MongoDB, Redis, ElasticSearch)"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Connect using appropriate credentials and select collections or keys."}),`
`,e(n.li,{children:"Browse collection documents or cache entries with simplified filtering."}),`
`,e(n.li,{children:"Limited or no raw query editing available (no scratchpad support)."}),`
`,e(n.li,{children:"View indexes and basic schema outlines."}),`
`]}),`
`,e(n.h3,{children:"ClickHouse (Enterprise Edition)"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Access via Enterprise license and credentials."}),`
`,e(n.li,{children:"Utilize full SQL capabilities with high-performance analytical queries."}),`
`,e(n.li,{children:"Scratchpad available for complex query execution."}),`
`,e(n.li,{children:"Enhanced schema visualization for columnar stores."}),`
`]}),`
`,e(n.h2,{children:"Common Questions About Database Support"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Can I use WhoDB to manage multiple types of databases simultaneously?"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Yes. You can configure multiple login profiles for different databases and switch between them seamlessly."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Does WhoDB support database-specific features like triggers or views?"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Where exposed by the database and plugin, yes. For example, PostgreSQL triggers and views are visible and manageable."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"What if my database is not listed here?"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"WhoDB’s architecture allows new database support through plugin development. Contact support or contribute plugins as needed."}),`
`]}),`
`]}),`
`]}),`
`,e(n.h2,{children:"Troubleshooting Database Compatibility"}),`
`,e(a,{title:"Troubleshooting Database Connectivity and Support",children:[e(t,{title:"Why can't I execute raw queries in MongoDB or Redis?",children:e(n.p,{children:"Because MongoDB and Redis do not support SQL syntax, WhoDB disables the Scratchpad for them. Use their native query interfaces through the UI filters and document browsing."})}),e(t,{title:"I can't see schemas for SQLite or Redis. Why?",children:e(n.p,{children:"These databases don't support schemas. WhoDB adapts the interface to show flat lists of storage units (tables or collections) without schema organization."})}),e(t,{title:"Some data types look different across databases. Is that normal?",children:e(n.p,{children:"Yes. Each database has its own native data types. WhoDB translates these into a unified view but respects the original types for operations like filtering and editing."})})]}),`
`,e(n.h2,{children:"Best Practices for Working with Supported Databases"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use Community Edition for widely-used relational and NoSQL databases if Enterprise features are not needed."}),`
`,e(n.li,{children:"Choose Enterprise Edition when working with advanced analytical databases like ClickHouse."}),`
`,e(n.li,{children:"Maintain up-to-date plugins and WhoDB versions to benefit from improved compatibility and features."}),`
`,e(n.li,{children:"Use login profiles to manage multiple database connections safely."}),`
`,e(n.li,{children:"Consult the respective database connection and security guides for optimizing performance and security."}),`
`]}),`
`,e(n.h2,{children:"Related Documentation"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"}),": Step-by-step connection instructions for each supported database."]}),`
`,e(n.li,{children:[e(n.a,{href:"/concepts/architecture-overview/plugin-engine",children:"Plugin Engine & Database Integration"}),": Technical details on how WhoDB integrates databases."]}),`
`,e(n.li,{children:[e(n.a,{href:"/guides/essential-workflows/exploring-and-managing-data",children:"Exploring and Managing Data"}),": User workflows with supported databases."]}),`
`,e(n.li,{children:[e(n.a,{href:"/guides/best-practices-and-optimization/working-efficiently-with-large-datasets",children:"Working Efficiently with Large Datasets"}),": Optimization tips for managing large tables."]}),`
`,e(n.li,{children:[e(n.a,{href:"/deployment/prod_deployment/edition_selection",children:"Choosing Community vs. Enterprise Edition"}),": Help deciding on the product edition based on your database needs."]}),`
`]}),`
`,e(n.h2,{children:"Summary"}),`
`,e(n.p,{children:"WhoDB supports a robust set of SQL, NoSQL, and analytical databases through its modular plugin architecture. Users get a consistent UI and features regardless of the underlying database system, with specific capabilities tailored to each database's strengths. Whether you're working with PostgreSQL schemas, viewing MongoDB collections, or running complex ClickHouse queries, WhoDB provides a unified platform designed for productivity and flexibility."}),`
`,e(n.hr,{})]})}function c(i={}){const{wrapper:n}={...d(),...i.components};return n?e(n,{...i,children:e(r,{...i})}):r(i)}function s(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{c as default};
