const e=`---
title: "Which Databases Does WhoDB Support?"
description: "Get a detailed overview of all supported databases in both Community and Enterprise editions. Understand how WhoDB ensures a consistent experience across SQL, NoSQL, and graph database systems and how database support is architected."
---

# Which Databases Does WhoDB Support?

Explore the comprehensive list of databases supported by WhoDB across both the Community and Enterprise editions. This page helps you understand how WhoDB provides a unified and consistent experience for managing SQL, NoSQL, and other database types through its plugin architecture.

---

## Overview

WhoDB is designed as a versatile and unified database management tool that integrates multiple databases into a seamless user experience. Whether you are working with relational databases like PostgreSQL and MySQL, NoSQL databases such as MongoDB, or even newer analytical engines like ClickHouse, WhoDB allows you to access and manage your data with consistent workflows.

The database support in WhoDB is architected through its modular plugin engine, which abstracts database-specific behaviors and facilitates consistent UI patterns and operational capabilities.


## Supported Database Types

### Community Edition Supported Databases
- **PostgreSQL**
- **MySQL**
- **MariaDB**
- **SQLite3**
- **MongoDB**
- **Redis**
- **ElasticSearch**

### Enterprise Edition Exclusive Databases
- **ClickHouse**

The Enterprise Edition extends support to additional databases, such as ClickHouse, leveraging advanced plugins and integration mechanisms.


## Database Categories and Characteristics

| Database Type    | Type       | Support Highlights                            | Schema Support | Scratchpad Support |
|------------------|------------|----------------------------------------------|----------------|--------------------|
| PostgreSQL       | SQL        | Full SQL, schemas, triggers, and advanced types | Yes            | Yes                |
| MySQL            | SQL        | Widely supported features, schemas             | Yes            | Yes                |
| MariaDB          | SQL        | Compatible with MySQL, full schema support      | Yes            | Yes                |
| SQLite3          | SQL (embedded) | File-based database, no schema support          | No             | Yes                |
| MongoDB          | NoSQL (document) | Collection-based, no schemas, no raw SQL support | No             | No                 |
| Redis            | NoSQL (key-value) | In-memory data store, limited editing features  | No             | No                 |
| ElasticSearch    | NoSQL (search)  | Document search optimized, no tables or schemas | No             | No                 |
| ClickHouse       | Analytical SQL | Columnar, supports SQL-like queries             | Yes            | Yes                |


### Clarifications

- **Schemas**: SQL databases like PostgreSQL and MySQL support database schemas to organize storage units (tables). NoSQL databases like MongoDB and Redis do not support schemas.
- **Scratchpad/Raw Query Execution**: Allows running arbitrary queries in the database’s native language. Not all databases support this feature (e.g., MongoDB and Redis do not).


## How WhoDB Ensures Consistency

### Plugin Architecture
WhoDB implements a plugin engine where each supported database has a dedicated plugin to translate native database concepts into WhoDB’s unified data model.

For example:

- PostgreSQL plugin fully supports schema discovery, table info, and advanced data types.
- MongoDB plugin maps collections to storage units and indexes.

This modular approach provides:

- **Consistent UI**: The interface behaves similarly regardless of database type.
- **Unified Features**: Features like schema visualization, data browsing, and scratchpad query execution adapt gracefully to database capabilities.
- **Extensibility**: New databases can be added via plugins without breaking existing functionality.


### Examples of Data Model Alignment

In WhoDB’s data model:

- **Storage Units** represent tables, collections, or keyspaces depending on the database.
- **Rows/Entries** and **Columns/Properties** are abstracted to provide common ground between SQL rows and NoSQL documents.

This allows users to navigate various databases as if using a single interface, simplifying data management.


## Practical User Workflows by Database

### Relational Databases (PostgreSQL, MySQL, MariaDB, SQLite3)

- Log in with credentials specifying the database and schema.
- Browse tables via the Table Schema page, filtering and searching data inline.
- Use the Scratchpad to run raw SQL queries, including complex joins and transactions.
- Visualize table relationships in Graph View.

### NoSQL Databases (MongoDB, Redis, ElasticSearch)

- Connect using appropriate credentials and select collections or keys.
- Browse collection documents or cache entries with simplified filtering.
- Limited or no raw query editing available (no scratchpad support).
- View indexes and basic schema outlines.

### ClickHouse (Enterprise Edition)

- Access via Enterprise license and credentials.
- Utilize full SQL capabilities with high-performance analytical queries.
- Scratchpad available for complex query execution.
- Enhanced schema visualization for columnar stores.


## Common Questions About Database Support

- **Can I use WhoDB to manage multiple types of databases simultaneously?**
  - Yes. You can configure multiple login profiles for different databases and switch between them seamlessly.

- **Does WhoDB support database-specific features like triggers or views?**
  - Where exposed by the database and plugin, yes. For example, PostgreSQL triggers and views are visible and manageable.

- **What if my database is not listed here?**
  - WhoDB’s architecture allows new database support through plugin development. Contact support or contribute plugins as needed.


## Troubleshooting Database Compatibility

<AccordionGroup title="Troubleshooting Database Connectivity and Support">
<Accordion title="Why can't I execute raw queries in MongoDB or Redis?">
Because MongoDB and Redis do not support SQL syntax, WhoDB disables the Scratchpad for them. Use their native query interfaces through the UI filters and document browsing.
</Accordion>
<Accordion title="I can't see schemas for SQLite or Redis. Why?">
These databases don't support schemas. WhoDB adapts the interface to show flat lists of storage units (tables or collections) without schema organization.
</Accordion>
<Accordion title="Some data types look different across databases. Is that normal?">
Yes. Each database has its own native data types. WhoDB translates these into a unified view but respects the original types for operations like filtering and editing.
</Accordion>
</AccordionGroup>


## Best Practices for Working with Supported Databases

- Use Community Edition for widely-used relational and NoSQL databases if Enterprise features are not needed.
- Choose Enterprise Edition when working with advanced analytical databases like ClickHouse.
- Maintain up-to-date plugins and WhoDB versions to benefit from improved compatibility and features.
- Use login profiles to manage multiple database connections safely.
- Consult the respective database connection and security guides for optimizing performance and security.


## Related Documentation

- [Connecting to Your Database](/guides/essential-workflows/connecting-to-your-database): Step-by-step connection instructions for each supported database.
- [Plugin Engine & Database Integration](/concepts/architecture-overview/plugin-engine): Technical details on how WhoDB integrates databases.
- [Exploring and Managing Data](/guides/essential-workflows/exploring-and-managing-data): User workflows with supported databases.
- [Working Efficiently with Large Datasets](/guides/best-practices-and-optimization/working-efficiently-with-large-datasets): Optimization tips for managing large tables.
- [Choosing Community vs. Enterprise Edition](/deployment/prod_deployment/edition_selection): Help deciding on the product edition based on your database needs.


## Summary

WhoDB supports a robust set of SQL, NoSQL, and analytical databases through its modular plugin architecture. Users get a consistent UI and features regardless of the underlying database system, with specific capabilities tailored to each database's strengths. Whether you're working with PostgreSQL schemas, viewing MongoDB collections, or running complex ClickHouse queries, WhoDB provides a unified platform designed for productivity and flexibility.

---`;export{e as default};
