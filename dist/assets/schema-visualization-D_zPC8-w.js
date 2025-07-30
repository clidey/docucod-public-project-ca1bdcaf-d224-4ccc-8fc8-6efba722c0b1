import{u as s,a as e,k as l}from"./index-CxwdZWLc.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...i.components},{Accordion:a,AccordionGroup:t}=n;return a||o("Accordion"),t||o("AccordionGroup"),e(l,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Schema & Relationship Visualization"
description: "Learn how WhoDB constructs and displays interactive schema graphs. Understand the 'graph' abstraction for visualizing storage units (tables, collections, indexes) and their relationships across different database types, including join discovery and foreign key mapping."`}),`
`,e(n.h1,{children:"Schema & Relationship Visualization"}),`
`,e(n.p,{children:"Understanding your database schema visually is crucial for effective data exploration and management. WhoDB leverages an interactive graph abstraction to display storage units—such as tables, collections, and indexes—and their relationships, providing users with a clear, unified view across different database systems including SQL, NoSQL, and others."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"What is the Graph Abstraction?"}),`
`,e(n.p,{children:'The "graph" in WhoDB represents an interactive visualization of your database’s structural elements (Storage Units) and their relationships. Each node in the graph corresponds to a storage unit like a table or collection, while edges illustrate relationships based on foreign keys, joins, or inferred connections depending on the database type.'}),`
`,e(n.p,{children:"This visualization helps you:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Quickly grasp complex schemas with multiple storage units."}),`
`,e(n.li,{children:"Understand how data entities relate in your database."}),`
`,e(n.li,{children:"Navigate directly to storage unit details or data browsing workflows."}),`
`]}),`
`,e(n.h2,{children:"Storage Units: Nodes in the Graph"}),`
`,e(n.p,{children:"Storage units in WhoDB are abstractions over database objects:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"SQL databases:"})," Typically tables or views."]}),`
`,e(n.li,{children:[e(n.strong,{children:"NoSQL databases:"})," Collections, indexes, or equivalent groupings."]}),`
`]}),`
`,e(n.p,{children:"Each storage unit node displays key attributes such as name and metadata (key properties, index hints) to assist users in identifying relevant units."}),`
`,e(n.h3,{children:"Example Attributes of a Storage Unit"}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Attribute Key"}),e(n.th,{children:"Value Example"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:"Engine"}),e(n.td,{children:"InnoDB (for MySQL)"})]}),e(n.tr,{children:[e(n.td,{children:"Rows"}),e(n.td,{children:"25,000"})]}),e(n.tr,{children:[e(n.td,{children:"Primary Key"}),e(n.td,{children:"id"})]}),e(n.tr,{children:[e(n.td,{children:"Description"}),e(n.td,{children:"User accounts information"})]})]})]}),`
`,e(n.p,{children:"These attributes are surfaced within the node cards in the graph layout."}),`
`,e(n.h2,{children:"Relationship Types: Edges in the Graph"}),`
`,e(n.p,{children:"Edges connecting storage units represent explicit or inferred relationships. WhoDB distinguishes between several relationship types:"}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Relationship Type"}),e(n.th,{children:"Description"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:"OneToOne"}),e(n.td,{children:"A unique 1:1 relationship (e.g., PK-FK pairs)"})]}),e(n.tr,{children:[e(n.td,{children:"OneToMany"}),e(n.td,{children:"A single record relates to multiple records"})]}),e(n.tr,{children:[e(n.td,{children:"ManyToOne"}),e(n.td,{children:"Multiple records relate back to one record"})]}),e(n.tr,{children:[e(n.td,{children:"ManyToMany"}),e(n.td,{children:"Complex cross-links via join tables"})]}),e(n.tr,{children:[e(n.td,{children:"Unknown"}),e(n.td,{children:"Unknown or undetermined relationships"})]})]})]}),`
`,e(n.p,{children:"The application automatically detects and classifies these based on:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Foreign key constraints (SQL databases like PostgreSQL, MySQL)"}),`
`,e(n.li,{children:"Join discovery mechanisms"}),`
`,e(n.li,{children:"Schema metadata from database inspection"}),`
`]}),`
`,e(n.p,{children:"Edges are bidirectionally rendered for many-to-many relationships, aiding comprehension of mutual links."}),`
`,e(n.h2,{children:"How WhoDB Constructs the Graph"}),`
`,e(n.p,{children:"WhoDB dynamically queries your connected database and imports schema metadata to build the graph. The process includes:"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Schema Inspection:"})," Retrieving all storage unit names and attributes."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Relationship Discovery:"})," Querying metadata tables to detect foreign keys, unique constraints, and join-based relations."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Graph Model Assembly:"})," Combining data into nodes and edges annotated with relationship types."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Layout Computation:"})," Applying algorithmic layout (using Dagre) to position nodes for clarity."]}),`
`]}),`
`,e(n.h3,{children:"Database-Specific Graph Queries"}),`
`,e(n.p,{children:"The underlying method varies by database type:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"PostgreSQL:"})," Uses information_schema to find foreign keys, primary keys, uniques, and many-to-many associations."]}),`
`,e(n.li,{children:[e(n.strong,{children:"ClickHouse:"})," Analyses system tables to infer dependencies and constraints."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Others:"})," Adapted heuristics or metadata queries depending on database capabilities."]}),`
`]}),`
`,e(n.p,{children:"This abstraction ensures a consistent user experience despite differing database architectures."}),`
`,e(n.h2,{children:"Exploring the Graph in the UI"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Interactive Nodes:"})," Click any storage unit to expand and view more attributes, or navigate to detailed data views."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Zoom & Pan:"})," Navigate large schemas smoothly."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Layout Controls:"})," Reorganize graph automatically for better readability."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Download Diagram:"})," Export the visual schema as a PNG image for sharing or documentation."]}),`
`]}),`
`,e(n.h3,{children:"User Workflow Example"}),`
`,e(n.p,{children:"Imagine you are connected to a PostgreSQL database with customer, orders, and products tables. On the graph page:"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:"Nodes appear for each table."}),`
`,e(n.li,{children:"Edges display, showing OneToMany from customers to orders."}),`
`,e(n.li,{children:["Clicking the ",e(n.code,{children:"orders"})," node displays its columns and keys."]}),`
`,e(n.li,{children:["Navigating to ",e(n.code,{children:"orders"})," data lets you filter or edit rows."]}),`
`]}),`
`,e(n.p,{children:"This workflow rapidly transforms abstract metadata into actionable insights."}),`
`,e(n.h2,{children:"Best Practices"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Regularly refresh the graph after schema changes to avoid stale metadata."}),`
`,e(n.li,{children:"Use graph layouts to declutter visual complexity."}),`
`,e(n.li,{children:"Leverage relationship types to understand join directions before writing queries."}),`
`,e(n.li,{children:"Export snapshots for team collaboration or documentation."}),`
`]}),`
`,e(n.h2,{children:"Common Pitfalls & Troubleshooting"}),`
`,e(t,{title:"Troubleshooting Graph Visualization",children:[e(a,{title:"Graph Shows No Nodes or Edges",children:e(n.ul,{children:[`
`,e(n.li,{children:"Verify your database connection is active and the selected schema contains storage units."}),`
`,e(n.li,{children:"Refresh the graph page or reload the app."}),`
`,e(n.li,{children:"Check for permission restrictions on schema metadata."}),`
`]})}),e(a,{title:"Relationships Appear Incomplete or Incorrect",children:e(n.ul,{children:[`
`,e(n.li,{children:"Some databases do not enforce foreign keys; relationships may be missing."}),`
`,e(n.li,{children:"Consider adding explicit constraints or use query tools for manual join inspection."}),`
`,e(n.li,{children:"Confirm the correct schema is selected in WhoDB."}),`
`]})}),e(a,{title:"Graph Layout Looks Overlapped or Crowded",children:e(n.ul,{children:[`
`,e(n.li,{children:"Use the layout button to reorganize nodes."}),`
`,e(n.li,{children:"Zoom in/out for better viewing."}),`
`,e(n.li,{children:"Filter storage units or reduce visible nodes if the graph is too large."}),`
`]})}),e(a,{title:"Exported Image is Blank or Cut Off",children:e(n.ul,{children:[`
`,e(n.li,{children:"Ensure you use the download button after the auto layout finishes."}),`
`,e(n.li,{children:"Retry exporting with sufficient zoom and full graph visible."}),`
`]})})]}),`
`,e(n.h2,{children:"Technical Overview of the Graph Data Model"}),`
`,e(n.p,{children:["WhoDB's GraphQL API exposes the graph as a list of ",e(n.code,{children:"GraphUnit"}),"s, each containing a ",e(n.code,{children:"StorageUnit"})," and its relational edges:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-graphql",children:`enum GraphUnitRelationshipType {
  OneToOne
  OneToMany
  ManyToOne
  ManyToMany
  Unknown
}

type GraphUnitRelationship {
  Name: String!
  Relationship: GraphUnitRelationshipType!
}

type GraphUnit {
  Unit: StorageUnit!
  Relations: [GraphUnitRelationship!]!
}
`})}),`
`,e(n.p,{children:"This structured model powers the frontend's reactive graph rendering with detailed relationship semantics."}),`
`,e(n.h2,{children:"Diagram: Simplified Graph Data Flow"}),`
`,e(n.pre,{children:e(n.code,{className:"language-mermaid",children:`flowchart TD
    subgraph "Database Metadata"
        DBMeta["Schema Info & Constraints"]
    end

    subgraph "WhoDB Backend"
        GraphQLAPI["GraphQL Query for Graph"]
        GraphModel["Graph Model Layer"]
    end

    subgraph "WhoDB Frontend"
        GraphPage["Schema Graph Page"]
        GraphRenderer["React Flow Graph Renderer"]
    end

    DBMeta -->|Metadata Queries| GraphQLAPI
    GraphQLAPI --> GraphModel
    GraphModel --> GraphPage
    GraphPage --> GraphRenderer
    GraphRenderer -->|Interactive UI| GraphPage
`})}),`
`,e(n.h2,{children:"Related Documentation"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"/concepts/data-models/core-data-models",children:"Core Data Models & Object Abstraction"}),": Understand underlying abstractions for storage units."]}),`
`,e(n.li,{children:[e(n.a,{href:"/guides/essential-workflows/visualizing-your-database-schema",children:"Visualizing Your Database Schema Guide"}),": Step-by-step for interactively using the graph page."]}),`
`,e(n.li,{children:[e(n.a,{href:"/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database Guide"}),": Setup database connections to enable schema retrieval."]}),`
`,e(n.li,{children:[e(n.a,{href:"/guides/essential-workflows/exploring-and-managing-data",children:"Exploring and Managing Data Guide"}),": Dive into data browsing and inline editing linked from graph nodes."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"For comprehensive mastery of your database’s structure and relationships, use the Schema & Relationship Visualization as your starting point to unlock WhoDB’s powerful exploration and management capabilities."}),`
`,e(n.hr,{}),`
`,e(n.h1,{children:"Practical Tips"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Refresh your database connection if schema changes are not reflected immediately."}),`
`,e(n.li,{children:"Use schema filtering to focus on relevant storage units."}),`
`,e(n.li,{children:"Combine visualization with raw queries for fast troubleshooting."}),`
`,e(n.li,{children:"Take advantage of the downloadable PNG export to share schema diagrams with your team."}),`
`]}),`
`,e(n.h1,{children:"Summary"}),`
`,e(n.p,{children:"WhoDB’s Schema & Relationship Visualization page empowers users to see the full topology of their database schema through an interactive graph. It abstracts tables and collections as storage units and visually illustrates how they interconnect via foreign keys and other relationships, facilitating faster understanding, navigation, and data operations."}),`
`,e(n.p,{children:"This visualization is foundational for database administrators, developers, and data analysts seeking to efficiently explore and manage complex schemas across SQL and NoSQL systems."}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"If you encounter issues, consult the troubleshooting tips here or reach out to support through the community channels."}),`
`,e(n.p,{children:"Explore the graph today to deepen your understanding and accelerate your database workflows."}),`
`,e(n.hr,{})]})}function h(i={}){const{wrapper:n}={...s(),...i.components};return n?e(n,{...i,children:e(r,{...i})}):r(i)}function o(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
