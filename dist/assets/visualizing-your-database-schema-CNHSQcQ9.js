const e=`---
title: "Visualizing Your Database Schema"
description: "Discover how to use WhoDB’s interactive schema graph to understand relationships between tables, collections, and keys. This tutorial covers graph navigation, filtering, and interpreting entity relationships to gain insight into your data structure."
---

# Visualizing Your Database Schema

Welcome to the schema visualization guide for WhoDB! This tutorial empowers you to leverage WhoDB’s interactive database schema graph. By following it, you will gain clear insights into how your tables or collections are connected, understand entity relationships, and navigate your schema graph effortlessly.

---

## 1. What You Will Achieve

This guide will help you:

- Understand the structure and relationships of your database schema through an intuitive visual graph.
- Navigate and explore storage units (tables, collections) and their interconnections.
- Use graph layout and filtering tools for a clearer schema perspective.
- Interpret relationship types such as one-to-many or many-to-many within your schema graph.

By the end, you’ll confidently use the Graph Page feature to gain meaningful perspectives on your data’s architecture.

---

## 2. Prerequisites

Before you start:

- Ensure a database connection is properly configured and active in WhoDB ([See Connecting to Your Database Guide](https://whodb.com/guides/essential-workflows/connecting-to-your-database)).
- Your database schema metadata must be available and populated.
- Have access to WhoDB’s web interface and permissions to visualize schema data.

---

## 3. Accessing the Schema Graph

1. **Open the Graph Page:**
   - In WhoDB’s navigation menu, select the \`Graph\` option to open the interactive schema graph view.

2. **Loading Data:**
   - Upon loading, the system fetches storage units and their relationships from your database schema.
   - If no schema or nodes are found, the interface will indicate "No tables or collections found".

3. **Initial Layout:**
   - The graph auto-applies a Directed Acyclic Graph (DAG) layout, arranging nodes left-to-right for natural relationship flow.

---

## 4. Navigating and Interpreting the Graph

### Graph Nodes

- Each node represents a **storage unit** — e.g., a table or collection.
- Node labels display the storage unit name.
- Nodes provide interactive UI elements allowing you to explore detailed attributes and navigate to related data views.

### Graph Edges

- Edges illustrate relationships between storage units:
  - **One-to-many**: Shows direction from parent to child.
  - **Many-to-many**: Displayed as bidirectional edges connecting related units.

- Hovering over an edge or node reveals relationship details and connection metadata.

### Interactivity

- **Panning and Zooming:** Use mouse drag and scroll wheel or touch gestures to explore different parts of the graph.
- **Selecting a Node:** Click nodes to highlight and reveal more info or to navigate to its data page.
- **Layout Refresh:** Click the layout button (graph icon) to reapply automatic positioning for clarity.

---

## 5. Practical Workflow: Visualizing and Exploring Your Schema

<Steps>
<Step title="Open the Graph Page">
Navigate to the \`Graph\` page via the main menu to load the schema graph.
</Step>
<Step title="Review the Nodes and Edges">
Observe the nodes representing your tables or collections, and examine edges that depict their relationships.
</Step>
<Step title="Adjust the View">
Pan or zoom the view to focus on areas of interest in your schema.
</Step>
<Step title="Trigger Layout Refresh">
If nodes seem cluttered, click the "Graph Layout" button (bottom right) to reorganize the graph automatically.
</Step>
<Step title="Explore a Storage Unit">
Click a node to view summary details. Use the navigation button to jump to its detailed data page for further exploration.
</Step>
</Steps>

---

## 6. Tips and Best Practices

- **Refreshing the Graph:** If your database schema changes, reload the Graph Page to see updated schema structure.
- **Handling Large Schemas:** For very large datasets, zoom in on logical subgraphs or filter storage units using search or pre-filtered views (when available).
- **Understanding Relationship Types:** Pay attention to edge directions and multiplicities as they convey foreign key and association constraints.
- **Exporting the Graph:** Use the download icon to export your schema graph as a PNG image for documentation or presentations.

---

## 7. Common Issues and Troubleshooting

<AccordionGroup title="Troubleshooting Graph Visualization">
<Accordion title="No Nodes Displayed After Loading">
- Ensure your database connection is active.
- Confirm the selected schema contains tables or collections.
- Check backend logs for GraphQL query errors.
- Refresh the page or try reconnecting your database.
</Accordion>
<Accordion title="Graph Layout Does Not Improve on Re-layout">
- Some graph arrangements may have challenging layouts depending on complexity.
- Try zooming and manual panning to enhance visibility.
- Consider simplifying your schema views or filtering units.
</Accordion>
<Accordion title="Graph Performance Is Slow">
- Large schemas with hundreds of nodes may slow rendering.
- Try segmenting schema into smaller sections.
- Use efficient hardware/browser if possible.
</Accordion>
<Accordion title="Edges Seem Incorrect or Missing">
- Confirm your database schema relationships are properly defined.
- Validate foreign key constraints exist where applicable.
- Check for any caching issues in WhoDB UI.
</Accordion>
</AccordionGroup>

---

## 8. Related Workflows and Next Steps

- **Connecting to Your Database:** If schema data is missing, verify your database connection setup.
- **Exploring and Managing Data:** Navigate from schema nodes to detailed data views for records and inline editing.
- **Using the Scratchpad and Raw Query Executor:** Run raw queries to inspect data behind schema components.
- **Querying Your Data with AI Chat:** Engage conversational AI to understand schema relationships and data queries more intuitively.

For detailed guides, visit the [Essential Workflows Guides](https://whodb.com/guides/essential-workflows/).

---

## 9. Technical Notes (Optional)

- The graph uses React Flow with a DAG layout algorithm powered by Dagre for node positioning.
- Nodes correspond to storage units fetched via GraphQL queries against the current schema.
- Edges reflect relationship data captured from the database metadata.

---

For additional help, visit the [Troubleshooting Common Issues](https://whodb.com/getting-started/troubleshooting/troubleshooting-common-issues) guide or contact support.

---

Happy exploring your data architecture!

---

# Diagram: Schema Graph Overview

\`\`\`mermaid
flowchart LR
    subgraph StorageUnits ["Storage Units"]
        A["Table A"]
        B["Table B"]
        C["Table C"]
    end

    A -->|"One-to-Many"| B
    B --|"Many-to-Many"| C
    C --> A
\`\`\`

The example diagram shows directional relationships where Table A has a one-to-many relationship with Table B, and B and C share a many-to-many relationship.
`;export{e as default};
