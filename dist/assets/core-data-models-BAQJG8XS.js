import{u as a,a as n,k as r}from"./index-CxwdZWLc.js";function t(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...i.components};return n(r,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "Core Data Models & Object Abstraction"
description: "See how WhoDB unifies SQL, NoSQL, and key-value data into an approachable set of concepts: storage units, rows, columns/properties, relationships, and schemas. Grasp how the abstraction layer provides a universal vocabulary and navigational logic across all supported databases."`}),`
`,n(e.h1,{children:"Core Data Models & Object Abstraction"}),`
`,n(e.p,{children:"Unlock the power of universal data interaction with WhoDB’s foundational data models. This guide demystifies how WhoDB abstracts diverse database systems — SQL, NoSQL, and key-value stores — into a cohesive vocabulary and navigation framework that feels intuitive yet powerful."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Introduction"}),`
`,n(e.p,{children:"Whether you work with PostgreSQL relational tables, MongoDB collections of documents, or Redis key-value pairs, WhoDB presents your data through a consistent set of core concepts. This abstraction empowers you to explore, query, and manipulate data across systems without adapting to wildly different interfaces or terminologies."}),`
`,n(e.p,{children:"Here we explore the main elements:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Storage Units"})," — Unified representation of database entities like tables, collections, or key spaces"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Rows (or Documents/Entries)"})," — Individual data records inside storage units"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Columns / Properties"})," — Attributes or fields that describe each row"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Relationships"})," — Connections between storage units capturing how data items link together"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Schemas"})," — Logical groupings organizing storage units and relationships within a context"]}),`
`]}),`
`,n(e.p,{children:"Each concept is designed to map cleanly onto multiple database paradigms while allowing WhoDB’s UI and AI capabilities to provide consistent, natural experiences."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Storage Units: The Core Abstraction of Data Containers"}),`
`,n(e.p,{children:"A Storage Unit is the fundamental organizational unit within WhoDB. It represents any logical grouping of data entities, encapsulating a set of related rows or entries. The abstraction covers:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Relational Databases:"})," Tables in schemas"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Document Stores:"})," Collections or views"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Key-Value Stores:"})," Namespaces or key groups"]}),`
`]}),`
`,n(e.h3,{children:"What You See in WhoDB"}),`
`,n(e.p,{children:"Each storage unit appears as a navigable entity in WhoDB’s UI, showing metadata such as:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Name (e.g., ",n(e.code,{children:"users"}),", ",n(e.code,{children:"orders"}),")"]}),`
`,n(e.li,{children:"Type (table, view, collection, keyspace)"}),`
`,n(e.li,{children:"Size and row count"}),`
`,n(e.li,{children:"Structural attributes (like column types)"}),`
`]}),`
`,n(e.h3,{children:"Why It Matters"}),`
`,n(e.p,{children:"This unified model lets you jump between relational and NoSQL data without switching mental models. When you select a storage unit, you’re preparing to browse or query the contained rows using familiar tools."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Rows (Entries): Your Data Records"}),`
`,n(e.p,{children:"Within a storage unit, data is organized as a set of rows or documents — the individual records."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"In SQL databases, these are table rows"}),`
`,n(e.li,{children:"In MongoDB, they correspond to JSON-like documents"}),`
`,n(e.li,{children:"In Redis or other key-value stores, these are key-value entries"}),`
`]}),`
`,n(e.h3,{children:"Interacting with Rows"}),`
`,n(e.p,{children:"WhoDB allows you to:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"View rows with pagination for large datasets"}),`
`,n(e.li,{children:"Edit data inline where permitted"}),`
`,n(e.li,{children:"Add new rows with guided input"}),`
`,n(e.li,{children:"Delete rows safely"}),`
`]}),`
`,n(e.p,{children:"Regardless of backend database, these operations feel consistent."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Columns and Properties: Defining Attributes"}),`
`,n(e.p,{children:"Columns (or properties) represent the named attributes of rows within storage units. Behind the scenes, WhoDB derives columns depending on the data source:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"For SQL:"})," Actual table columns with data types"]}),`
`,n(e.li,{children:[n(e.strong,{children:"For NoSQL:"})," Field keys present in documents; types inferred where possible"]}),`
`]}),`
`,n(e.p,{children:"Columns are key to filtering, searching, sorting, and editing data."}),`
`,n(e.h3,{children:"Schema Metadata"}),`
`,n(e.p,{children:"WhoDB enriches columns with metadata like:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Data type (e.g., integer, text, boolean, JSON)"}),`
`,n(e.li,{children:"Nullable or required status"}),`
`,n(e.li,{children:"Index or primary key designations (for applicable databases)"}),`
`]}),`
`,n(e.p,{children:"This metadata powers intelligent UI behavior and query generation."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Relationships: Mapping Connections Between Storage Units"}),`
`,n(e.p,{children:"Understanding data often means understanding how pieces relate. WhoDB captures relationships to reveal data structure and support complex queries."}),`
`,n(e.h3,{children:"Types of Relationships:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.strong,{children:"One-to-One"})}),`
`,n(e.li,{children:n(e.strong,{children:"One-to-Many"})}),`
`,n(e.li,{children:n(e.strong,{children:"Many-to-One"})}),`
`,n(e.li,{children:n(e.strong,{children:"Many-to-Many"})}),`
`,n(e.li,{children:[n(e.strong,{children:"Unknown / Unmapped"})," (when relationships can’t be inferred)"]}),`
`]}),`
`,n(e.h3,{children:"How Relationships Are Identified"}),`
`,n(e.p,{children:"Relationships are inferred by plugins based on database metadata such as foreign key constraints in relational databases or index patterns in NoSQL systems."}),`
`,n(e.p,{children:"They are represented visually in schema graphs and can be traversed directly."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Schemas: Logical Groupings of Storage Units"}),`
`,n(e.p,{children:"Schemas organize storage units under a logical namespace or context."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"In SQL, schemas are explicit namespace containers"}),`
`,n(e.li,{children:"In NoSQL, databases or namespaces often serve this role"}),`
`]}),`
`,n(e.p,{children:"WhoDB exposes schemas as the higher-level grouping that helps users orient themselves, discover related storage units, and scope queries."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Unified Data Model in Action: User Journey Example"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Connect Your Database:"})," Choose a database and schema (or database namespace) to explore."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Browse Storage Units:"})," View a list of tables or collections, each with rich metadata."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Explore Relationships:"})," Use the schema visualization to understand how data entities link."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Manage Rows:"})," Filter, search, edit, or add new rows with a uniform interface."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Invoke AI Chat:"})," Ask natural language questions that operate across these abstractions seamlessly."]}),`
`]}),`
`,n(e.p,{children:"This consistent experience removes barriers between database types, enabling fluency and productivity."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Tips and Best Practices"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Familiarize Yourself with Storage Unit Types:"})," Knowing whether you’re working with a table, view, or collection helps predict capabilities."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Leverage Relationships:"})," Use the schema graph to formulate queries that span related storage units."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Use Filters Intuitively:"})," Columns are your leverages for precise data slices—experiment with filtering and sorting."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Mind Permissions:"})," Some editing actions may be disabled based on your security profile or database restrictions."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Common Pitfalls and How to Avoid Them"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Expecting Uniform Capabilities:"})," Not all database types support all operations (e.g., raw query execution vs. AI chat). Consult plugin-specific documentation if needed."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Overwhelmed by Large Datasets:"})," Use filters and pagination to maintain responsiveness."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Misunderstanding Relationships:"})," Auto-inferred relationships might miss complex or implicit links; use schema visualization for clarity."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Diagram: Core Data Model Relationships"}),`
`,n(e.pre,{children:n(e.code,{className:"language-mermaid",children:`graph TD
  SU["Storage Unit"] -->|contains| R["Row / Entry"]
  R -->|has attributes| C["Columns / Properties"]
  SU -->|belong to| Sch["Schema"]
  SU -->|related via| Rel["Relationship"]
  Rel --> SU

  subgraph Description
    SU_desc["Represents tables, collections, etc."]
    R_desc["Individual data records"]
    C_desc["Fields or attributes"]
    Sch_desc["Namespace or logical grouping"]
    Rel_desc["Data entity connections"]
  end

  SU --- SU_desc
  R --- R_desc
  C --- C_desc
  Sch --- Sch_desc
  Rel --- Rel_desc

  classDef concept fill:#e5f6ff,stroke:#1c7ed6,color:#074f7d;
  class SU,R,C,Sch,Rel concept;
`})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Next Steps"}),`
`,n(e.p,{children:"To extend your mastery of WhoDB’s data abstractions:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Explore the ",n(e.a,{href:"/concepts/data-models/schema-visualization",children:"Schema & Relationship Visualization Guide"})," for visual insights"]}),`
`,n(e.li,{children:["Dive into ",n(e.a,{href:"/guides/essential-workflows/exploring-and-managing-data",children:"Exploring and Managing Data"})," to learn data navigation and editing"]}),`
`,n(e.li,{children:["Try out the ",n(e.a,{href:"/guides/ai-and-natural-language/conversational-queries-and-ai-models",children:"AI Chat Guide"})," to query data naturally"]}),`
`,n(e.li,{children:["Review the ",n(e.a,{href:"/concepts/architecture-overview/system-architecture",children:"System Architecture Overview"})," for context on how these models fit into the platform"]}),`
`]}),`
`,n(e.p,{children:"By developing a solid understanding of these core data models, you’ll unlock the full potential of WhoDB as a seamless, cross-database data management and AI query platform."}),`
`,n(e.hr,{})]})}function o(i={}){const{wrapper:e}={...a(),...i.components};return e?n(e,{...i,children:n(t,{...i})}):t(i)}export{o as default};
