const e=`---
title: "Schema & Relationship Visualization"
description: "Learn how WhoDB constructs and displays interactive schema graphs. Understand the 'graph' abstraction for visualizing storage units (tables, collections, indexes) and their relationships across different database types, including join discovery and foreign key mapping."
---

# Schema & Relationship Visualization

Understanding your database schema visually is crucial for effective data exploration and management. WhoDB leverages an interactive graph abstraction to display storage units—such as tables, collections, and indexes—and their relationships, providing users with a clear, unified view across different database systems including SQL, NoSQL, and others.

---

## What is the Graph Abstraction?

The "graph" in WhoDB represents an interactive visualization of your database’s structural elements (Storage Units) and their relationships. Each node in the graph corresponds to a storage unit like a table or collection, while edges illustrate relationships based on foreign keys, joins, or inferred connections depending on the database type.

This visualization helps you:

- Quickly grasp complex schemas with multiple storage units.
- Understand how data entities relate in your database.
- Navigate directly to storage unit details or data browsing workflows.


## Storage Units: Nodes in the Graph

Storage units in WhoDB are abstractions over database objects:

- **SQL databases:** Typically tables or views.
- **NoSQL databases:** Collections, indexes, or equivalent groupings.

Each storage unit node displays key attributes such as name and metadata (key properties, index hints) to assist users in identifying relevant units.

### Example Attributes of a Storage Unit

| Attribute Key | Value Example             |
|---------------|--------------------------|
| Engine        | InnoDB (for MySQL)        |
| Rows          | 25,000                   |
| Primary Key   | id                       |
| Description   | User accounts information |

These attributes are surfaced within the node cards in the graph layout.

## Relationship Types: Edges in the Graph

Edges connecting storage units represent explicit or inferred relationships. WhoDB distinguishes between several relationship types:

| Relationship Type | Description                        |
|-------------------|----------------------------------|
| OneToOne          | A unique 1:1 relationship (e.g., PK-FK pairs)  |
| OneToMany         | A single record relates to multiple records  |
| ManyToOne         | Multiple records relate back to one record  |
| ManyToMany        | Complex cross-links via join tables  |
| Unknown           | Unknown or undetermined relationships |

The application automatically detects and classifies these based on:

- Foreign key constraints (SQL databases like PostgreSQL, MySQL)
- Join discovery mechanisms
- Schema metadata from database inspection

Edges are bidirectionally rendered for many-to-many relationships, aiding comprehension of mutual links.

## How WhoDB Constructs the Graph

WhoDB dynamically queries your connected database and imports schema metadata to build the graph. The process includes:

1. **Schema Inspection:** Retrieving all storage unit names and attributes.
2. **Relationship Discovery:** Querying metadata tables to detect foreign keys, unique constraints, and join-based relations.
3. **Graph Model Assembly:** Combining data into nodes and edges annotated with relationship types.
4. **Layout Computation:** Applying algorithmic layout (using Dagre) to position nodes for clarity.

### Database-Specific Graph Queries

The underlying method varies by database type:

- **PostgreSQL:** Uses information_schema to find foreign keys, primary keys, uniques, and many-to-many associations.
- **ClickHouse:** Analyses system tables to infer dependencies and constraints.
- **Others:** Adapted heuristics or metadata queries depending on database capabilities.

This abstraction ensures a consistent user experience despite differing database architectures.

## Exploring the Graph in the UI

- **Interactive Nodes:** Click any storage unit to expand and view more attributes, or navigate to detailed data views.
- **Zoom & Pan:** Navigate large schemas smoothly.
- **Layout Controls:** Reorganize graph automatically for better readability.
- **Download Diagram:** Export the visual schema as a PNG image for sharing or documentation.

### User Workflow Example

Imagine you are connected to a PostgreSQL database with customer, orders, and products tables. On the graph page:

1. Nodes appear for each table.
2. Edges display, showing OneToMany from customers to orders.
3. Clicking the \`orders\` node displays its columns and keys.
4. Navigating to \`orders\` data lets you filter or edit rows.

This workflow rapidly transforms abstract metadata into actionable insights.

## Best Practices

- Regularly refresh the graph after schema changes to avoid stale metadata.
- Use graph layouts to declutter visual complexity.
- Leverage relationship types to understand join directions before writing queries.
- Export snapshots for team collaboration or documentation.

## Common Pitfalls & Troubleshooting

<AccordionGroup title="Troubleshooting Graph Visualization">
<Accordion title="Graph Shows No Nodes or Edges">
- Verify your database connection is active and the selected schema contains storage units.
- Refresh the graph page or reload the app.
- Check for permission restrictions on schema metadata.
</Accordion>
<Accordion title="Relationships Appear Incomplete or Incorrect">
- Some databases do not enforce foreign keys; relationships may be missing.
- Consider adding explicit constraints or use query tools for manual join inspection.
- Confirm the correct schema is selected in WhoDB.
</Accordion>
<Accordion title="Graph Layout Looks Overlapped or Crowded">
- Use the layout button to reorganize nodes.
- Zoom in/out for better viewing.
- Filter storage units or reduce visible nodes if the graph is too large.
</Accordion>
<Accordion title="Exported Image is Blank or Cut Off">
- Ensure you use the download button after the auto layout finishes.
- Retry exporting with sufficient zoom and full graph visible.
</Accordion>
</AccordionGroup>

## Technical Overview of the Graph Data Model

WhoDB's GraphQL API exposes the graph as a list of \`GraphUnit\`s, each containing a \`StorageUnit\` and its relational edges:

\`\`\`graphql
enum GraphUnitRelationshipType {
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
\`\`\`

This structured model powers the frontend's reactive graph rendering with detailed relationship semantics.

## Diagram: Simplified Graph Data Flow

\`\`\`mermaid
flowchart TD
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
\`\`\`


## Related Documentation

- [Core Data Models & Object Abstraction](/concepts/data-models/core-data-models): Understand underlying abstractions for storage units.
- [Visualizing Your Database Schema Guide](/guides/essential-workflows/visualizing-your-database-schema): Step-by-step for interactively using the graph page.
- [Connecting to Your Database Guide](/guides/essential-workflows/connecting-to-your-database): Setup database connections to enable schema retrieval.
- [Exploring and Managing Data Guide](/guides/essential-workflows/exploring-and-managing-data): Dive into data browsing and inline editing linked from graph nodes.

---

For comprehensive mastery of your database’s structure and relationships, use the Schema & Relationship Visualization as your starting point to unlock WhoDB’s powerful exploration and management capabilities.


---

# Practical Tips

- Refresh your database connection if schema changes are not reflected immediately.
- Use schema filtering to focus on relevant storage units.
- Combine visualization with raw queries for fast troubleshooting.
- Take advantage of the downloadable PNG export to share schema diagrams with your team.

# Summary
WhoDB’s Schema & Relationship Visualization page empowers users to see the full topology of their database schema through an interactive graph. It abstracts tables and collections as storage units and visually illustrates how they interconnect via foreign keys and other relationships, facilitating faster understanding, navigation, and data operations.

This visualization is foundational for database administrators, developers, and data analysts seeking to efficiently explore and manage complex schemas across SQL and NoSQL systems.

---

If you encounter issues, consult the troubleshooting tips here or reach out to support through the community channels.

Explore the graph today to deepen your understanding and accelerate your database workflows.


---
`;export{e as default};
