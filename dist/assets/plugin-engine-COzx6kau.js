const e=`---
title: "Plugin Engine & Database Integration"
description: "Explore how WhoDB enables deep database interoperability through its unified plugin engine. Understand the structure and responsibilities of different plugins (e.g., Postgres, MySQL, MongoDB, Redis, Elasticsearch), how they are registered into the core engine, and how they expose database capabilities to the higher layers. See how CE versus EE plugin loading works."
---

# Plugin Engine & Database Integration

Welcome to the core of WhoDB's flexibility and power: the Plugin Engine. This page explains how WhoDB unifies diverse database technologies through a sophisticated plugin architecture, enabling you to seamlessly explore, query, and manage a wide variety of data sources under one intuitive interface.

---

## Why the Plugin Engine Matters

Imagine managing multiple databases—PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch—all with distinct query languages, schemas, and operational nuances. Without a standard approach, juggling these systems requires toggling different tools and syntaxes, risking errors and inefficiency.

WhoDB's plugin engine resolves this by acting as a centralized adapter hub. Each plugin encapsulates the logic needed to communicate with a specific database type, abstracting connection details, querying, and schema introspection into a consistent experience. Whether you're working with relational tables, document stores, or key-value data, the Plugin Engine exposes a unified set of capabilities to the application layers.

This seamless interoperability is the backbone that enables WhoDB’s AI integration, schema visualization, conversational querying, and inline data editing.

---

## Core Architecture and Design

At its heart, the plugin engine is structured around WhoDB's \`engine.Engine\` object. This engine maintains a registry of plugins, each representing a database technology and implementing a common interface to perform core operations.

### Plugin Registration

Upon startup, WhoDB initializes the main engine and registers the Community Edition (CE) plugins for supported databases. These plugins include:

- PostgreSQL
- MySQL and MariaDB
- SQLite3
- MongoDB
- Redis
- Elasticsearch
- ClickHouse

For Enterprise Edition (EE) builds, the engine loads additional or enhanced plugins dynamically, extending capabilities to cover enterprise-grade features and proprietary integrations.

### Plugin Interface Responsibilities

Each plugin implements a standardized set of functions enabling WhoDB to:

- Retrieve available databases and schemas.
- List and describe storage units (tables, collections, indices).
- Query data with support for pagination and filtering.
- Add, update, and delete rows or documents.
- Execute raw queries and expose data results.

This consistent interface allows the WhoDB UI and backend to interact with heterogeneous databases without bespoke logic per type.

### Plugin Functions Overview

The key plugin functions are:

| Function                  | Purpose                                   |
|---------------------------|-------------------------------------------|
| \`GetDatabases\`            | Lists databases available on the server  |
| \`GetAllSchemas\`           | Returns all schemas in the database       |
| \`GetStorageUnits\`         | Retrieves tables, collections, or indices|
| \`GetRows\`                 | Fetches data rows/documents based on filters|
| \`AddStorageUnit\`          | Creates new tables or collections         |
| \`AddRow\`                  | Inserts a new row or document              |
| \`UpdateStorageUnit\`       | Updates metadata or structure              |
| \`DeleteRow\`               | Deletes rows or documents                  |
| \`RawExecute\`              | Runs a raw query and returns results      |
| \`Chat\`                    | Supports conversational AI query handling |

Not every plugin supports all operations; some may explicitly mark operations as unsupported if the underlying system lacks the feature.

---

## Plugin Examples

Let's explore how WhoDB implements and registers a few key plugins to illustrate their responsibilities.

### PostgreSQL Plugin

The PostgreSQL plugin leverages GORM (an ORM library Go) to interact with the database. It defines supported data types and SQL operators, and implements specialized queries to retrieve schema metadata and table info.

For example:

- The \`GetAllSchemasQuery()\` returns the information schema query to list schemas.
- \`GetTableInfoQuery()\` retrieves table names, types, sizes, and row counts.
- \`GetRows()\` retrieves paginated data with filtering support.

The plugin exposes raw SQL execution and conversion helpers to map SQL rows into the internal \`GetRowsResult\` format.

### MySQL/MariaDB Plugin

Similarly, the MySQL plugin builds upon the GORM plugin base with MySQL-specific SQL queries for schema and table info. It defines supported column types and SQL operators unique to MySQL.

Both the MySQL and MariaDB plugins are implemented as separate types but share the core \`MySQLPlugin\` codebase, showcasing extensibility.

### Elasticsearch Plugin

Unlike relational databases, the Elasticsearch plugin interacts with an HTTP client to communicate with the Elasticsearch REST API.

Key distinctions include:

- No direct support for listing databases or schemas.
- Storage units correspond to Elasticsearch indices.
- Querying translates internal filter conditions into Elasticsearch DSL JSON queries.
- Data results are returned as JSON documents.

Because Elasticsearch is a search engine, functionalities like raw SQL execution or conversational chat queries are marked as unsupported.

### Other Examples

WhoDB also supports:

- MongoDB via native client integrations.
- Redis for key-value data.
- ClickHouse for analytical columnar storage.
- SQLite3 as an embedded lightweight database.

Each plugin implements consistent but tailored logic to align with their database’s capabilities and interfaces.

---

## Community Edition vs. Enterprise Edition Plugin Loading

WhoDB defines a clear separation between Community Edition (CE) and Enterprise Edition (EE) features.

- The **Community Edition** includes core plugins for widely used open-source databases, ensuring a robust out-of-the-box experience.

- The **Enterprise Edition** enables advanced and proprietary plugins, loaded dynamically via a registration function enabled only in EE builds.

This extensibility mechanism allows EE deployments to add custom or enhanced database connectors, advanced security or query capabilities, and enterprise integrations without bloating the CE distribution.

Specifically, during engine initialization:

- The CE plugins register in the main engine unconditionally.
- If an EE initializer function is present, it runs to register EE-only plugins.

This design balances open access and commercial scalability gracefully.

---

## Visualizing the Plugin Engine Architecture

\`\`\`mermaid
flowchart TD
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
\`\`\`

This diagram presents how the WhoDB core engine interfaces with diverse plugins, allowing the UI and API layers to remain agnostic of underlying database details.

---

## Best Practices and Usage Tips

- **Choose Plugin per Database Type:** When connecting a database, WhoDB automatically selects the appropriate plugin supporting that database type.

- **Leverage Standardized Capabilities:** Use core operations like schema browsing, data querying, and row editing through the unified interface, trusting the plugin abstraction.

- **Expect Some Limitations per Backend:** Not all backends support all operations (e.g., Elasticsearch does not support raw SQL). Refer to plugin documentation for supported features.

- **Configure Credentials Carefully:** The plugin engine uses supplied credentials to manage connections securely; ensure proper roles and permissions on the database side.

- **Enterprise Edition Users:** Utilize dynamic EE plugins for advanced integrations; keep the CE and EE plugins updated to maximize WhoDB’s extensibility.

- **Troubleshooting:** If encountering unexpected behavior with a database, verify which plugin is selected and consult logs for the plugin’s internal errors.

---

## Troubleshooting Common Plugin Issues

- **Plugin Not Found or Not Loaded:** Confirm your edition (CE vs EE) and that plugins for your database type are registered during initialization.

- **Unsupported Operations Errors:** Some plugins (e.g., Elasticsearch) do not support certain features like raw SQL queries or chat. Check the error messages for clear indications.

- **Connection Failures:** Credentials or network issues can prevent plugin connectivity. Verify host, port, authentication, and networking.

- **Schema or Data Not Appearing:** Plugins rely on database metadata queries; verify the user’s permissions and database health.

- **Plugin Version Mismatch:** Use compatible versions of WhoDB core and plugins to avoid interface changes causing failures.

For detailed steps, refer to the [Connecting to Your Database](https://who-db-docs/guides/essential-workflows/connecting-to-your-database) guide.

---

## Summary

This page introduced the WhoDB Plugin Engine as the pivotal abstraction layer enabling seamless integration with multiple database systems. It detailed plugin responsibilities, CE versus EE plugin handling, and demonstrated the engine’s role in producing a unified data management experience.

Continue your exploration with:

- [System Architecture Overview](https://who-db-docs/concepts/architecture-overview/system-architecture) — understand the entire system.
- [Connecting to Your Database](https://who-db-docs/guides/essential-workflows/connecting-to-your-database) — learn to connect specific databases.
- [Integrations and Extensibility](https://who-db-docs/overview/architecture-concepts-group/integration-overview) — dive into AI and plugin extensibility.

If you are an Enterprise user, explore your plugin options and deployment strategies documented separately.

---

For developers and integrators, source code for plugins and engine initialization can be found in the core repository under \`/core/src/plugins\` and \`/core/src/src.go\`.

---`;export{e as default};
