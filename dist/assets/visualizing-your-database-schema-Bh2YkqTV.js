import{u as s,a as e,k as c}from"./index-CxwdZWLc.js";function h(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components},{Accordion:t,AccordionGroup:o,Step:r,Steps:l}=n;return t||a("Accordion"),o||a("AccordionGroup"),r||a("Step"),l||a("Steps"),e(c,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Visualizing Your Database Schema"
description: "Discover how to use WhoDB’s interactive schema graph to understand relationships between tables, collections, and keys. This tutorial covers graph navigation, filtering, and interpreting entity relationships to gain insight into your data structure."`}),`
`,e(n.h1,{children:"Visualizing Your Database Schema"}),`
`,e(n.p,{children:"Welcome to the schema visualization guide for WhoDB! This tutorial empowers you to leverage WhoDB’s interactive database schema graph. By following it, you will gain clear insights into how your tables or collections are connected, understand entity relationships, and navigate your schema graph effortlessly."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. What You Will Achieve"}),`
`,e(n.p,{children:"This guide will help you:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Understand the structure and relationships of your database schema through an intuitive visual graph."}),`
`,e(n.li,{children:"Navigate and explore storage units (tables, collections) and their interconnections."}),`
`,e(n.li,{children:"Use graph layout and filtering tools for a clearer schema perspective."}),`
`,e(n.li,{children:"Interpret relationship types such as one-to-many or many-to-many within your schema graph."}),`
`]}),`
`,e(n.p,{children:"By the end, you’ll confidently use the Graph Page feature to gain meaningful perspectives on your data’s architecture."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"2. Prerequisites"}),`
`,e(n.p,{children:"Before you start:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Ensure a database connection is properly configured and active in WhoDB (",e(n.a,{href:"https://whodb.com/guides/essential-workflows/connecting-to-your-database",children:"See Connecting to Your Database Guide"}),")."]}),`
`,e(n.li,{children:"Your database schema metadata must be available and populated."}),`
`,e(n.li,{children:"Have access to WhoDB’s web interface and permissions to visualize schema data."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"3. Accessing the Schema Graph"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Open the Graph Page:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["In WhoDB’s navigation menu, select the ",e(n.code,{children:"Graph"})," option to open the interactive schema graph view."]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Loading Data:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Upon loading, the system fetches storage units and their relationships from your database schema."}),`
`,e(n.li,{children:'If no schema or nodes are found, the interface will indicate "No tables or collections found".'}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Initial Layout:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"The graph auto-applies a Directed Acyclic Graph (DAG) layout, arranging nodes left-to-right for natural relationship flow."}),`
`]}),`
`]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"4. Navigating and Interpreting the Graph"}),`
`,e(n.h3,{children:"Graph Nodes"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Each node represents a ",e(n.strong,{children:"storage unit"})," — e.g., a table or collection."]}),`
`,e(n.li,{children:"Node labels display the storage unit name."}),`
`,e(n.li,{children:"Nodes provide interactive UI elements allowing you to explore detailed attributes and navigate to related data views."}),`
`]}),`
`,e(n.h3,{children:"Graph Edges"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:"Edges illustrate relationships between storage units:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"One-to-many"}),": Shows direction from parent to child."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Many-to-many"}),": Displayed as bidirectional edges connecting related units."]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:"Hovering over an edge or node reveals relationship details and connection metadata."}),`
`]}),`
`]}),`
`,e(n.h3,{children:"Interactivity"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Panning and Zooming:"})," Use mouse drag and scroll wheel or touch gestures to explore different parts of the graph."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Selecting a Node:"})," Click nodes to highlight and reveal more info or to navigate to its data page."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Layout Refresh:"})," Click the layout button (graph icon) to reapply automatic positioning for clarity."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"5. Practical Workflow: Visualizing and Exploring Your Schema"}),`
`,e(l,{children:[e(r,{title:"Open the Graph Page",children:e(n.p,{children:["Navigate to the ",e(n.code,{children:"Graph"})," page via the main menu to load the schema graph."]})}),e(r,{title:"Review the Nodes and Edges",children:e(n.p,{children:"Observe the nodes representing your tables or collections, and examine edges that depict their relationships."})}),e(r,{title:"Adjust the View",children:e(n.p,{children:"Pan or zoom the view to focus on areas of interest in your schema."})}),e(r,{title:"Trigger Layout Refresh",children:e(n.p,{children:'If nodes seem cluttered, click the "Graph Layout" button (bottom right) to reorganize the graph automatically.'})}),e(r,{title:"Explore a Storage Unit",children:e(n.p,{children:"Click a node to view summary details. Use the navigation button to jump to its detailed data page for further exploration."})})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"6. Tips and Best Practices"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Refreshing the Graph:"})," If your database schema changes, reload the Graph Page to see updated schema structure."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Handling Large Schemas:"})," For very large datasets, zoom in on logical subgraphs or filter storage units using search or pre-filtered views (when available)."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Understanding Relationship Types:"})," Pay attention to edge directions and multiplicities as they convey foreign key and association constraints."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Exporting the Graph:"})," Use the download icon to export your schema graph as a PNG image for documentation or presentations."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"7. Common Issues and Troubleshooting"}),`
`,e(o,{title:"Troubleshooting Graph Visualization",children:[e(t,{title:"No Nodes Displayed After Loading",children:e(n.ul,{children:[`
`,e(n.li,{children:"Ensure your database connection is active."}),`
`,e(n.li,{children:"Confirm the selected schema contains tables or collections."}),`
`,e(n.li,{children:"Check backend logs for GraphQL query errors."}),`
`,e(n.li,{children:"Refresh the page or try reconnecting your database."}),`
`]})}),e(t,{title:"Graph Layout Does Not Improve on Re-layout",children:e(n.ul,{children:[`
`,e(n.li,{children:"Some graph arrangements may have challenging layouts depending on complexity."}),`
`,e(n.li,{children:"Try zooming and manual panning to enhance visibility."}),`
`,e(n.li,{children:"Consider simplifying your schema views or filtering units."}),`
`]})}),e(t,{title:"Graph Performance Is Slow",children:e(n.ul,{children:[`
`,e(n.li,{children:"Large schemas with hundreds of nodes may slow rendering."}),`
`,e(n.li,{children:"Try segmenting schema into smaller sections."}),`
`,e(n.li,{children:"Use efficient hardware/browser if possible."}),`
`]})}),e(t,{title:"Edges Seem Incorrect or Missing",children:e(n.ul,{children:[`
`,e(n.li,{children:"Confirm your database schema relationships are properly defined."}),`
`,e(n.li,{children:"Validate foreign key constraints exist where applicable."}),`
`,e(n.li,{children:"Check for any caching issues in WhoDB UI."}),`
`]})})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"8. Related Workflows and Next Steps"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Connecting to Your Database:"})," If schema data is missing, verify your database connection setup."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Exploring and Managing Data:"})," Navigate from schema nodes to detailed data views for records and inline editing."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Using the Scratchpad and Raw Query Executor:"})," Run raw queries to inspect data behind schema components."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Querying Your Data with AI Chat:"})," Engage conversational AI to understand schema relationships and data queries more intuitively."]}),`
`]}),`
`,e(n.p,{children:["For detailed guides, visit the ",e(n.a,{href:"https://whodb.com/guides/essential-workflows/",children:"Essential Workflows Guides"}),"."]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"9. Technical Notes (Optional)"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"The graph uses React Flow with a DAG layout algorithm powered by Dagre for node positioning."}),`
`,e(n.li,{children:"Nodes correspond to storage units fetched via GraphQL queries against the current schema."}),`
`,e(n.li,{children:"Edges reflect relationship data captured from the database metadata."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:["For additional help, visit the ",e(n.a,{href:"https://whodb.com/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," guide or contact support."]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"Happy exploring your data architecture!"}),`
`,e(n.hr,{}),`
`,e(n.h1,{children:"Diagram: Schema Graph Overview"}),`
`,e(n.pre,{children:e(n.code,{className:"language-mermaid",children:`flowchart LR
    subgraph StorageUnits ["Storage Units"]
        A["Table A"]
        B["Table B"]
        C["Table C"]
    end

    A -->|"One-to-Many"| B
    B --|"Many-to-Many"| C
    C --> A
`})}),`
`,e(n.p,{children:"The example diagram shows directional relationships where Table A has a one-to-many relationship with Table B, and B and C share a many-to-many relationship."})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e(n,{...i,children:e(h,{...i})}):h(i)}function a(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{g as default};
