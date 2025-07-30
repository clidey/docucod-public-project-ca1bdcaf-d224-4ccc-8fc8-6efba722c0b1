import{u as a,a as n,k as t}from"./index-CxwdZWLc.js";function r(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...i.components};return n(t,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "Request Lifecycle & Data Flow"
description: "Trace the journey of a user action—from the user interface (React frontend), through GraphQL API calls, backend routing, plugin invocation, to eventual data transformation and visualization. This page maps typical data flows such as executing a chat query, fetching table rows, or visualizing schema graphs."`}),`
`,n(e.h1,{children:"Request Lifecycle & Data Flow"}),`
`,n(e.p,{children:"Understanding the journey of your actions within WhoDB—from input through UI to final data visualization—is crucial to mastering the product. This page traces how user requests propagate through the system, highlighting key components, communication points, and data transformations. By following typical scenarios like executing a chat query, fetching table rows, or visualizing the database schema graph, you will gain clarity on what happens behind the scenes to achieve your goal."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Overview of the Request Lifecycle"}),`
`,n(e.p,{children:"Every user interaction with WhoDB initiates a request journey that passes through several layers:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"User Interface (React Frontend)"}),": You type SQL queries, interact with tables, or navigate schema graphs."]}),`
`,n(e.li,{children:[n(e.strong,{children:"GraphQL API Calls"}),": The frontend sends GraphQL queries or mutations via Apollo Client."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Backend Server Routing"}),": The Go backend receives requests, authenticates, and routes them."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Plugin Invocation & Database Interaction"}),": Dedicated database plugins handle connecting, querying, and transforming data."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Response Processing & Visualization"}),": The backend returns results to the frontend, where data is rendered or visualized."]}),`
`]}),`
`,n(e.p,{children:"This flow ensures a transparent, efficient, and flexible user experience."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"User Interface Initiation"}),`
`,n(e.h3,{children:"1. Raw Query Execution Flow"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Users write raw SQL or analysis commands inside the ",n(e.strong,{children:"Scratchpad"})," (Raw Execute page)."]}),`
`,n(e.li,{children:["The UI component ",n(e.code,{children:"RawExecuteCell"})," manages queries, toggles between ",n(e.code,{children:"Query"})," or ",n(e.code,{children:"Analyze"})," modes, and maintains query history for replay."]}),`
`,n(e.li,{children:["Queries are wrapped appropriately for analysis (e.g., prefixing with ",n(e.code,{children:"EXPLAIN (ANALYZE, FORMAT JSON)"})," for PostgreSQL)."]}),`
`,n(e.li,{children:["When submitted, the UI uses a lazy GraphQL query hook ",n(e.code,{children:"useRawExecuteLazyQuery"})," to send the request."]}),`
`]}),`
`,n(e.h3,{children:"2. Exploring Storage Units"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["On the ",n(e.strong,{children:"Explore Storage Unit"})," page, users set filters and pagination parameters for rows."]}),`
`,n(e.li,{children:"Query construction includes where conditions, page size, and page offset."}),`
`,n(e.li,{children:["GraphQL lazy queries like ",n(e.code,{children:"useGetStorageUnitRowsLazyQuery"})," fetch filtered results."]}),`
`,n(e.li,{children:"Inline editing actions invoke mutations to update or delete rows."}),`
`]}),`
`,n(e.h3,{children:"3. Visualizing the Schema Graph"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["The ",n(e.strong,{children:"Graph Page"})," fetches graph structure data using ",n(e.code,{children:"useQuery"})," with the ",n(e.code,{children:"GetGraphDocument"})," query."]}),`
`,n(e.li,{children:"Nodes and edges representing storage units and their relationships are created and managed via ReactFlow."}),`
`,n(e.li,{children:["Layout is handled with the Dagre algorithm integrating through ",n(e.code,{children:"getDagreLayoutedElements"}),"."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Communication via GraphQL API"}),`
`,n(e.p,{children:"WhoDB's frontend uniformly interacts with the backend through GraphQL:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Queries"})," fetch data like raw results, schema graphs, storage units, or AI chat responses."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Mutations"})," modify storage units, add or delete rows, or update settings."]}),`
`]}),`
`,n(e.p,{children:"Example query flow in raw execute:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:`rawExecute({ variables: { query: fullQuery }, onCompleted() { /* update UI */ } });
`})}),`
`,n(e.p,{children:"Key GraphQL schema types you will encounter:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"RawExecute(query: String!): RowsResult!"})," — Execute arbitrary SQL."]}),`
`,n(e.li,{children:[n(e.code,{children:"Row(schema: String!, storageUnit: String!, where: WhereCondition, pageSize: Int!, pageOffset: Int!): RowsResult!"})," — Query paginated rows."]}),`
`,n(e.li,{children:[n(e.code,{children:"Graph(schema: String!): [GraphUnit!]!"})," — Retrieve graph data for schema visualization."]}),`
`]}),`
`,n(e.p,{children:"This uniform interface simplifies adding new integrations and features."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Backend & Plugin Layer Handling"}),`
`,n(e.p,{children:"Upon receiving GraphQL requests, the backend:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Verifies authentication using stored login profiles."}),`
`,n(e.li,{children:"Parses incoming queries and delegates tasks to corresponding database plugins."}),`
`,n(e.li,{children:"Plugins encapsulate database-specific logic, converting WhoDB requests to native queries and executing them."}),`
`,n(e.li,{children:["Results are transformed into a unified format (",n(e.code,{children:"RowsResult"}),") with columns, rows, and metadata."]}),`
`]}),`
`,n(e.p,{children:"For example, running an execution with analysis mode results in:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Backend plugins running ",n(e.code,{children:"EXPLAIN ANALYZE"})," queries."]}),`
`,n(e.li,{children:"Parsed JSON explain output sent back."}),`
`]}),`
`,n(e.p,{children:"Enterprise Edition (EE) features and plugins (e.g., analyze view) conditionally activate based on licensing and database type."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Data Transformation & Visualization"}),`
`,n(e.h3,{children:"Raw Execute Page"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Result sets from raw queries are displayed in tabular form."}),`
`,n(e.li,{children:"For analysis, a dedicated graph component visualizes execution plans."}),`
`,n(e.li,{children:"Query history allows replaying or editing past queries."}),`
`]}),`
`,n(e.h3,{children:"Explore Storage Unit Page"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Rows are displayed in a paginated, editable table."}),`
`,n(e.li,{children:"Filters generate complex where conditions that backend parses."}),`
`,n(e.li,{children:"Users can add, update, or delete rows with immediate UI feedback."}),`
`]}),`
`,n(e.h3,{children:"Graph Page"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Visualizes storage units as nodes and relationships as edges."}),`
`,n(e.li,{children:"Graph layout algorithms position nodes for clarity."}),`
`,n(e.li,{children:"Users can pan, zoom, and download diagram images."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Typical User Flows & Scenarios"}),`
`,n(e.h3,{children:"Executing a Raw SQL Query"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"Type SQL or analyze command in Scratchpad cell."}),`
`,n(e.li,{children:"Submit query, which triggers a GraphQL request."}),`
`,n(e.li,{children:["Backend plugin executes query, returns ",n(e.code,{children:"RowsResult"}),"."]}),`
`,n(e.li,{children:"UI renders result as a table or an execution plan graph."}),`
`,n(e.li,{children:"Your query is saved in local history for reuse."}),`
`]}),`
`,n(e.h3,{children:"Browsing and Managing Data Rows"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"Select a storage unit in the dashboard."}),`
`,n(e.li,{children:"Set filters, page size, and request rows."}),`
`,n(e.li,{children:"Edit cells inline; changes trigger GraphQL mutations."}),`
`,n(e.li,{children:"Add new rows via a dynamic form, invoking mutations on submission."}),`
`,n(e.li,{children:"Delete selected rows securely with confirmation."}),`
`]}),`
`,n(e.h3,{children:"Visualizing Database Schema"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"Open Graph visualization page."}),`
`,n(e.li,{children:"GraphQL query fetches storage units and relationships."}),`
`,n(e.li,{children:["Backend returns ",n(e.code,{children:"GraphUnit"})," data including unit details and relation types."]}),`
`,n(e.li,{children:"ReactFlow renders an interactive graph."}),`
`,n(e.li,{children:"Use layout controls to organize graph as needed."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Practical Tips & Best Practices"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Query Preparation"}),": Use the provided command prefixes in analyze mode to get detailed execution insights."]}),`
`,n(e.li,{children:[n(e.strong,{children:"History Usage"}),": Leverage query history in Scratchpad to improve productivity and reduce repetitive typing."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Pagination Awareness"}),": For large tables, adjust page size to maintain UI responsiveness."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Filter Construction"}),": Utilize flexible where condition builders to narrow down dataset efficiently."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Graph Exploration"}),": Refresh and relayout graph views to keep your schema overview clean and updated."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Troubleshooting Common Issues"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Empty or No Query Results"}),": Ensure your query syntax is correct, and the database plugin supports the requested operation."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Analysis Visualization Fails"}),": Confirm that EE features are enabled and you're connected to a supported database (e.g., PostgreSQL)."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Slow Data Loading"}),": Reduce page size or increase filters for large datasets."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Mutation Failures"}),": Check user authentication and permissions; ensure required fields are not empty."]}),`
`]}),`
`,n(e.p,{children:["Refer to the ",n(e.a,{href:"https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," page for further guidance."]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Request Lifecycle Summary Diagram"}),`
`,n(e.pre,{children:n(e.code,{className:"language-mermaid",children:`flowchart TD

  UI["React Frontend UI"] -->|User Action| GraphQLAPI["GraphQL API Client"]
  GraphQLAPI -->|Send Query/Mutation| Backend["Go Backend Server"]
  Backend -->|Authenticate and Route| Plugin["Database Plugin"]
  Plugin -->|Execute on DB| Database[("Database")]
  Database -->|Query Result| Plugin
  Plugin -->|Transform & Return| Backend
  Backend -->|Response| GraphQLAPI
  GraphQLAPI -->|Render Data| UI

  subgraph AnalyzeFlow ["Analyze Query Handling"]
    UI -->|Analyze Mode query| GraphQLAPI
    Plugin -->|Run EXPLAIN ANALYZE| Database
    Plugin -->|Return JSON Plan| Backend
    Backend --> UI
  end

  subgraph GraphVisualization ["Schema Graph Flow"]
    UI -->|Fetch Graph Data| GraphQLAPI
    Plugin -->|Retrieve Units & Relations| Database
    Backend --> UI
  end

  classDef component fill:#f2f4f8,stroke:#333,stroke-width:1px;
  class UI,GraphQLAPI,Backend,Plugin,Database component;
`})})]})}function s(i={}){const{wrapper:e}={...a(),...i.components};return e?n(e,{...i,children:n(r,{...i})}):r(i)}export{s as default};
