import{u as t,a as n,k as l}from"./index-CxwdZWLc.js";function r(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return n(l,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "Using the Scratchpad and Raw Query Executor"
description: "A hands-on guide to the scratchpad (Jupyter notebook-like) feature and the raw execution page. Execute SQL, analyze plans, organize queries, and capture history for advanced exploratory data tasks."`}),`
`,n(e.h1,{children:"Using the Scratchpad and Raw Query Executor"}),`
`,n(e.h2,{children:"Overview"}),`
`,n(e.p,{children:"The Scratchpad and Raw Query Executor page in WhoDB offers a powerful, interactive workspace where you can write and execute raw SQL queries or analyze query plans directly. Inspired by Jupyter notebooks, this feature is designed for advanced exploratory data analysis, letting you organize multiple queries in individual cells or pages, inspect execution results, and track query history—all within a seamless user interface."}),`
`,n(e.p,{children:"This guide will walk you through using the scratchpad environment to execute SQL queries, run query analysis (if supported), manage multiple pages of queries, and explore query results efficiently."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Prerequisites"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Connected Database:"})," You must be logged in to WhoDB with an active connection to a database that supports raw SQL execution."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Database Support for Scratchpad:"})," The feature is available for databases that support the scratchpad (e.g., PostgreSQL, SQLite3; Redis disables this feature)."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Familiarity with SQL:"})," This is intended for users comfortable writing raw SQL queries."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Enterprise Edition Features (Optional):"})," Query analysis capabilities require the Enterprise Edition and support for the 'analyzeView' feature on your database type."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"What You Will Achieve"}),`
`,n(e.p,{children:"By following this guide, you will be able to:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Use multiple interactive query cells to write and run SQL statements."}),`
`,n(e.li,{children:"Switch between different modes: normal query execution or query plan analysis."}),`
`,n(e.li,{children:"Add, delete, and organize query cells and pages for better workflow management."}),`
`,n(e.li,{children:"View tabular results with pagination or visual query plans."}),`
`,n(e.li,{children:"Copy, edit, rerun past queries from the history for efficient experimentation."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Interface Overview"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Pages Tabs:"})," Multiple scratchpad pages allow separation of query sets, each named for easy reference."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Query Cells:"})," Each page consists of one or more query cells where SQL code is written."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Mode Toggle:"}),' Switch between "Query" execution and "Analyze" mode (when supported).']}),`
`,n(e.li,{children:[n(e.strong,{children:"Execution Controls:"})," Run queries, clear input, add new cells, or delete cells."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Result Display:"})," Outputs show query results in tables or query plans visualized with graphs."]}),`
`,n(e.li,{children:[n(e.strong,{children:"History Panel:"})," Toggle visibility to access recent queries with status indicators."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Step-by-Step Instructions"}),`
`,n(e.h3,{children:"1. Accessing the Scratchpad"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Open WhoDB and navigate to the ",n(e.strong,{children:"Scratchpad and Raw Query Executor"})," page via the main menu or from the Dashboard Scratchpad button."]}),`
`,n(e.li,{children:'You will land on "Page 1" with a single editable query cell ready for your input.'}),`
`]}),`
`,n(e.h3,{children:"2. Writing and Running Queries"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Click inside the query cell editor to type your SQL statement. Example:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-sql",children:`SELECT * FROM public.users WHERE active = TRUE LIMIT 10;
`})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:["Press the ",n(e.strong,{children:"Submit"})," button or use the run command in the editor to execute the query."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"The executed query appends to the page history; results display below the cell:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"For SELECT queries, a paginated results table appears."}),`
`,n(e.li,{children:"For other statements (INSERT, UPDATE, DELETE), a confirmation message shows execution success."}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"3. Switching Modes (Query vs Analyze)"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:"Use the mode toggle on the left of each cell to switch:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Query"})," mode runs the SQL normally."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Analyze"})," mode runs query explanation plans (only for supported DBs like PostgreSQL)."]}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"When in Analyze mode and if enabled, the results show an interactive JSON-based graphical representation of execution plans."}),`
`]}),`
`]}),`
`,n(e.h3,{children:"4. Managing Query Cells"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Add a Cell:"})," Click the 'Add' button to insert a new query cell immediately after the current one."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Delete a Cell:"})," Use the delete option to remove a cell (disabled if there is only one cell)."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Clear Cell:"})," Reset the current cell content with the Clear button."]}),`
`]}),`
`,n(e.h3,{children:"5. Navigating and Organizing Pages"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:'Scratchpad supports multiple "pages" to separate different query workflows.'}),`
`,n(e.li,{children:[n(e.strong,{children:"Add a Page:"})," Use the add page button near the tab bar to create a new page."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Select a Page:"})," Click a page tab to switch the active page and work on its queries."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Rename a Page:"})," Double-click the page name in the tab to edit."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Delete a Page:"})," Use the cancel icon on the tab (disabled if only one page exists)."]}),`
`]}),`
`,n(e.p,{children:"All changes are maintained in local state for fluid switching."}),`
`,n(e.h3,{children:"6. Using Query History"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Toggle the ",n(e.strong,{children:"history view"})," within each cell to list prior submitted queries on that page."]}),`
`,n(e.li,{children:"Each history item shows success (green) or failure (red)."}),`
`,n(e.li,{children:["Click a history item to:",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Load that query back into the editor for editing."}),`
`,n(e.li,{children:"Execute it again immediately."}),`
`,n(e.li,{children:"Copy it to clipboard."}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"7. Copying Query Text"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Use the clipboard icon to copy the current query or any history item for external use or sharing."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Practical Examples"}),`
`,n(e.h3,{children:"Example 1: Simple Select Query"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sql",children:`SELECT id, name FROM employees WHERE department = 'Sales' LIMIT 20;
`})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Write in the editor."}),`
`,n(e.li,{children:"Run in Query mode."}),`
`,n(e.li,{children:"View paginated results below."}),`
`]}),`
`,n(e.h3,{children:"Example 2: Analyzing a Query Plan (Postgres)"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sql",children:`SELECT * FROM orders WHERE order_date >= '2024-01-01';
`})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Switch to Analyze mode."}),`
`,n(e.li,{children:"Execute query."}),`
`,n(e.li,{children:"Inspect the visualized execution graph depicting index scans and joins."}),`
`]}),`
`,n(e.h3,{children:"Example 3: Using Multiple Pages"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Create Page 1 with analysis queries."}),`
`,n(e.li,{children:"Create Page 2 for data-modification queries (INSERT, UPDATE)."}),`
`,n(e.li,{children:"Switch between pages to separate concerns and avoid mixing query contexts."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Tips and Best Practices"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Write simple, focused queries per cell"})," to keep execution and results manageable."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Clear unused cells"})," to declutter the workspace."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Use the history panel often"})," to recycle and iterate on previous queries."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Name pages meaningfully"})," to mirror your project or analysis stages."]}),`
`,n(e.li,{children:"For databases that don’t support analysis mode, all queries run in Query mode."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Troubleshooting"}),`
`,n(e.h3,{children:"Common Issues and Solutions"}),`
`,n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Problem"}),n(e.th,{children:"Cause"}),n(e.th,{children:"Solution"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"Query returns error message"}),n(e.td,{children:"SQL syntax error or invalid query"}),n(e.td,{children:"Verify SQL syntax; consult database docs for query format"})]}),n(e.tr,{children:[n(e.td,{children:"Analyze mode is unavailable"}),n(e.td,{children:"Feature not enabled or unsupported database"}),n(e.td,{children:"Confirm Enterprise Edition and DB type (Postgres supported)"})]}),n(e.tr,{children:[n(e.td,{children:"Results table shows no data"}),n(e.td,{children:"Query executed but no rows matched"}),n(e.td,{children:"Adjust your WHERE clause or data filters"})]}),n(e.tr,{children:[n(e.td,{children:"History not updating"}),n(e.td,{children:"Temporary UI glitch"}),n(e.td,{children:"Reload the page; history is session-bound"})]}),n(e.tr,{children:[n(e.td,{children:"Cells or pages not adding/deleting"}),n(e.td,{children:"Minimum one cell/page enforced"}),n(e.td,{children:"Must have at least one active cell and one page"})]})]})]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Next Steps & Related Documentation"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Explore the ",n(e.a,{href:"https://whodb.com/guides/essential-workflows/exploring-and-managing-data",children:"Exploring and Managing Data"})," guide to learn more about inline data editing."]}),`
`,n(e.li,{children:["Use the ",n(e.a,{href:"https://whodb.com/guides/ai-and-natural-language/conversational-queries-and-ai-models",children:"Conversational AI & Querying with AI Chat"})," guide to query databases with natural language."]}),`
`,n(e.li,{children:["For database schema visualization, consult the ",n(e.a,{href:"https://whodb.com/guides/essential-workflows/visualizing-your-database-schema",children:"Visualizing Your Database Schema"})," page."]}),`
`,n(e.li,{children:["Review ",n(e.a,{href:"https://whodb.com/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})," if you need to establish or modify database connections."]}),`
`]}),`
`,n(e.hr,{})]})}function d(i={}){const{wrapper:e}={...t(),...i.components};return e?n(e,{...i,children:n(r,{...i})}):r(i)}export{d as default};
