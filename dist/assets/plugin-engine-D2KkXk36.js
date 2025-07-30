import{u as r,a as n,k as a}from"./index-CxwdZWLc.js";function t(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...i.components};return n(a,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "Plugin Engine & Database Integration"
description: "Explore how WhoDB enables deep database interoperability through its unified plugin engine. Understand the structure and responsibilities of different plugins (e.g., Postgres, MySQL, MongoDB, Redis, Elasticsearch), how they are registered into the core engine, and how they expose database capabilities to the higher layers. See how CE versus EE plugin loading works."`}),`
`,n(e.h1,{children:"Plugin Engine & Database Integration"}),`
`,n(e.p,{children:"Welcome to the core of WhoDB's flexibility and power: the Plugin Engine. This page explains how WhoDB unifies diverse database technologies through a sophisticated plugin architecture, enabling you to seamlessly explore, query, and manage a wide variety of data sources under one intuitive interface."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Why the Plugin Engine Matters"}),`
`,n(e.p,{children:"Imagine managing multiple databases—PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch—all with distinct query languages, schemas, and operational nuances. Without a standard approach, juggling these systems requires toggling different tools and syntaxes, risking errors and inefficiency."}),`
`,n(e.p,{children:"WhoDB's plugin engine resolves this by acting as a centralized adapter hub. Each plugin encapsulates the logic needed to communicate with a specific database type, abstracting connection details, querying, and schema introspection into a consistent experience. Whether you're working with relational tables, document stores, or key-value data, the Plugin Engine exposes a unified set of capabilities to the application layers."}),`
`,n(e.p,{children:"This seamless interoperability is the backbone that enables WhoDB’s AI integration, schema visualization, conversational querying, and inline data editing."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Core Architecture and Design"}),`
`,n(e.p,{children:["At its heart, the plugin engine is structured around WhoDB's ",n(e.code,{children:"engine.Engine"})," object. This engine maintains a registry of plugins, each representing a database technology and implementing a common interface to perform core operations."]}),`
`,n(e.h3,{children:"Plugin Registration"}),`
`,n(e.p,{children:"Upon startup, WhoDB initializes the main engine and registers the Community Edition (CE) plugins for supported databases. These plugins include:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"PostgreSQL"}),`
`,n(e.li,{children:"MySQL and MariaDB"}),`
`,n(e.li,{children:"SQLite3"}),`
`,n(e.li,{children:"MongoDB"}),`
`,n(e.li,{children:"Redis"}),`
`,n(e.li,{children:"Elasticsearch"}),`
`,n(e.li,{children:"ClickHouse"}),`
`]}),`
`,n(e.p,{children:"For Enterprise Edition (EE) builds, the engine loads additional or enhanced plugins dynamically, extending capabilities to cover enterprise-grade features and proprietary integrations."}),`
`,n(e.h3,{children:"Plugin Interface Responsibilities"}),`
`,n(e.p,{children:"Each plugin implements a standardized set of functions enabling WhoDB to:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Retrieve available databases and schemas."}),`
`,n(e.li,{children:"List and describe storage units (tables, collections, indices)."}),`
`,n(e.li,{children:"Query data with support for pagination and filtering."}),`
`,n(e.li,{children:"Add, update, and delete rows or documents."}),`
`,n(e.li,{children:"Execute raw queries and expose data results."}),`
`]}),`
`,n(e.p,{children:"This consistent interface allows the WhoDB UI and backend to interact with heterogeneous databases without bespoke logic per type."}),`
`,n(e.h3,{children:"Plugin Functions Overview"}),`
`,n(e.p,{children:"The key plugin functions are:"}),`
`,n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Function"}),n(e.th,{children:"Purpose"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"GetDatabases"})}),n(e.td,{children:"Lists databases available on the server"})]}),n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"GetAllSchemas"})}),n(e.td,{children:"Returns all schemas in the database"})]}),n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"GetStorageUnits"})}),n(e.td,{children:"Retrieves tables, collections, or indices"})]}),n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"GetRows"})}),n(e.td,{children:"Fetches data rows/documents based on filters"})]}),n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"AddStorageUnit"})}),n(e.td,{children:"Creates new tables or collections"})]}),n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"AddRow"})}),n(e.td,{children:"Inserts a new row or document"})]}),n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"UpdateStorageUnit"})}),n(e.td,{children:"Updates metadata or structure"})]}),n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"DeleteRow"})}),n(e.td,{children:"Deletes rows or documents"})]}),n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"RawExecute"})}),n(e.td,{children:"Runs a raw query and returns results"})]}),n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"Chat"})}),n(e.td,{children:"Supports conversational AI query handling"})]})]})]}),`
`,n(e.p,{children:"Not every plugin supports all operations; some may explicitly mark operations as unsupported if the underlying system lacks the feature."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Plugin Examples"}),`
`,n(e.p,{children:"Let's explore how WhoDB implements and registers a few key plugins to illustrate their responsibilities."}),`
`,n(e.h3,{children:"PostgreSQL Plugin"}),`
`,n(e.p,{children:"The PostgreSQL plugin leverages GORM (an ORM library Go) to interact with the database. It defines supported data types and SQL operators, and implements specialized queries to retrieve schema metadata and table info."}),`
`,n(e.p,{children:"For example:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["The ",n(e.code,{children:"GetAllSchemasQuery()"})," returns the information schema query to list schemas."]}),`
`,n(e.li,{children:[n(e.code,{children:"GetTableInfoQuery()"})," retrieves table names, types, sizes, and row counts."]}),`
`,n(e.li,{children:[n(e.code,{children:"GetRows()"})," retrieves paginated data with filtering support."]}),`
`]}),`
`,n(e.p,{children:["The plugin exposes raw SQL execution and conversion helpers to map SQL rows into the internal ",n(e.code,{children:"GetRowsResult"})," format."]}),`
`,n(e.h3,{children:"MySQL/MariaDB Plugin"}),`
`,n(e.p,{children:"Similarly, the MySQL plugin builds upon the GORM plugin base with MySQL-specific SQL queries for schema and table info. It defines supported column types and SQL operators unique to MySQL."}),`
`,n(e.p,{children:["Both the MySQL and MariaDB plugins are implemented as separate types but share the core ",n(e.code,{children:"MySQLPlugin"})," codebase, showcasing extensibility."]}),`
`,n(e.h3,{children:"Elasticsearch Plugin"}),`
`,n(e.p,{children:"Unlike relational databases, the Elasticsearch plugin interacts with an HTTP client to communicate with the Elasticsearch REST API."}),`
`,n(e.p,{children:"Key distinctions include:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"No direct support for listing databases or schemas."}),`
`,n(e.li,{children:"Storage units correspond to Elasticsearch indices."}),`
`,n(e.li,{children:"Querying translates internal filter conditions into Elasticsearch DSL JSON queries."}),`
`,n(e.li,{children:"Data results are returned as JSON documents."}),`
`]}),`
`,n(e.p,{children:"Because Elasticsearch is a search engine, functionalities like raw SQL execution or conversational chat queries are marked as unsupported."}),`
`,n(e.h3,{children:"Other Examples"}),`
`,n(e.p,{children:"WhoDB also supports:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"MongoDB via native client integrations."}),`
`,n(e.li,{children:"Redis for key-value data."}),`
`,n(e.li,{children:"ClickHouse for analytical columnar storage."}),`
`,n(e.li,{children:"SQLite3 as an embedded lightweight database."}),`
`]}),`
`,n(e.p,{children:"Each plugin implements consistent but tailored logic to align with their database’s capabilities and interfaces."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Community Edition vs. Enterprise Edition Plugin Loading"}),`
`,n(e.p,{children:"WhoDB defines a clear separation between Community Edition (CE) and Enterprise Edition (EE) features."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:["The ",n(e.strong,{children:"Community Edition"})," includes core plugins for widely used open-source databases, ensuring a robust out-of-the-box experience."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:["The ",n(e.strong,{children:"Enterprise Edition"})," enables advanced and proprietary plugins, loaded dynamically via a registration function enabled only in EE builds."]}),`
`]}),`
`]}),`
`,n(e.p,{children:"This extensibility mechanism allows EE deployments to add custom or enhanced database connectors, advanced security or query capabilities, and enterprise integrations without bloating the CE distribution."}),`
`,n(e.p,{children:"Specifically, during engine initialization:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"The CE plugins register in the main engine unconditionally."}),`
`,n(e.li,{children:"If an EE initializer function is present, it runs to register EE-only plugins."}),`
`]}),`
`,n(e.p,{children:"This design balances open access and commercial scalability gracefully."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Visualizing the Plugin Engine Architecture"}),`
`,n(e.pre,{children:n(e.code,{className:"language-mermaid",children:`flowchart TD
  subgraph WhoDB Core
    Engine["Engine (Plugin Registry)"]
    UI["User Interface Layers"]
    API["Backend API Server"]
  end

  subgraph CE Plugins
    PostgresPlugin["PostgreSQL Plugin"]
    MySQLPlugin["MySQL / MariaDB Plugin"]
    SQLitePlugin["SQLite3 Plugin"]
    MongoPlugin["MongoDB Plugin"]
    RedisPlugin["Redis Plugin"]
    ElasticPlugin["Elasticsearch Plugin"]
    ClickHousePlugin["ClickHouse Plugin"]
  end

  subgraph EE Plugins
    EEPlugins["Enterprise Edition Plugins"]
  end

  UI --> API
  API --> Engine
  Engine --> PostgresPlugin
  Engine --> MySQLPlugin
  Engine --> SQLitePlugin
  Engine --> MongoPlugin
  Engine --> RedisPlugin
  Engine --> ElasticPlugin
  Engine --> ClickHousePlugin
  Engine --> EEPlugins

  classDef core fill:#005f73,stroke:#0a9396,stroke-width:2px,color:#fff
  classDef plugins fill:#94d2bd,stroke:#0a9396,stroke-width:1px

  class Engine,UI,API core
  class PostgresPlugin,MySQLPlugin,SQLitePlugin,MongoPlugin,RedisPlugin,ElasticPlugin,ClickHousePlugin,EEPlugins plugins
`})}),`
`,n(e.p,{children:"This diagram presents how the WhoDB core engine interfaces with diverse plugins, allowing the UI and API layers to remain agnostic of underlying database details."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Best Practices and Usage Tips"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Choose Plugin per Database Type:"})," When connecting a database, WhoDB automatically selects the appropriate plugin supporting that database type."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Leverage Standardized Capabilities:"})," Use core operations like schema browsing, data querying, and row editing through the unified interface, trusting the plugin abstraction."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Expect Some Limitations per Backend:"})," Not all backends support all operations (e.g., Elasticsearch does not support raw SQL). Refer to plugin documentation for supported features."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Configure Credentials Carefully:"})," The plugin engine uses supplied credentials to manage connections securely; ensure proper roles and permissions on the database side."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Enterprise Edition Users:"})," Utilize dynamic EE plugins for advanced integrations; keep the CE and EE plugins updated to maximize WhoDB’s extensibility."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Troubleshooting:"})," If encountering unexpected behavior with a database, verify which plugin is selected and consult logs for the plugin’s internal errors."]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Troubleshooting Common Plugin Issues"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Plugin Not Found or Not Loaded:"})," Confirm your edition (CE vs EE) and that plugins for your database type are registered during initialization."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Unsupported Operations Errors:"})," Some plugins (e.g., Elasticsearch) do not support certain features like raw SQL queries or chat. Check the error messages for clear indications."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Connection Failures:"})," Credentials or network issues can prevent plugin connectivity. Verify host, port, authentication, and networking."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Schema or Data Not Appearing:"})," Plugins rely on database metadata queries; verify the user’s permissions and database health."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Plugin Version Mismatch:"})," Use compatible versions of WhoDB core and plugins to avoid interface changes causing failures."]}),`
`]}),`
`]}),`
`,n(e.p,{children:["For detailed steps, refer to the ",n(e.a,{href:"https://who-db-docs/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})," guide."]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Summary"}),`
`,n(e.p,{children:"This page introduced the WhoDB Plugin Engine as the pivotal abstraction layer enabling seamless integration with multiple database systems. It detailed plugin responsibilities, CE versus EE plugin handling, and demonstrated the engine’s role in producing a unified data management experience."}),`
`,n(e.p,{children:"Continue your exploration with:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.a,{href:"https://who-db-docs/concepts/architecture-overview/system-architecture",children:"System Architecture Overview"})," — understand the entire system."]}),`
`,n(e.li,{children:[n(e.a,{href:"https://who-db-docs/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})," — learn to connect specific databases."]}),`
`,n(e.li,{children:[n(e.a,{href:"https://who-db-docs/overview/architecture-concepts-group/integration-overview",children:"Integrations and Extensibility"})," — dive into AI and plugin extensibility."]}),`
`]}),`
`,n(e.p,{children:"If you are an Enterprise user, explore your plugin options and deployment strategies documented separately."}),`
`,n(e.hr,{}),`
`,n(e.p,{children:["For developers and integrators, source code for plugins and engine initialization can be found in the core repository under ",n(e.code,{children:"/core/src/plugins"})," and ",n(e.code,{children:"/core/src/src.go"}),"."]}),`
`,n(e.hr,{})]})}function l(i={}){const{wrapper:e}={...r(),...i.components};return e?n(e,{...i,children:n(t,{...i})}):t(i)}export{l as default};
