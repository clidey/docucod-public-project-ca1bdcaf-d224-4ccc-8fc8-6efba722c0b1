import{u as s,a as e,k as d}from"./index-CxwdZWLc.js";function l(i){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components},{Accordion:r,AccordionGroup:t,Check:o}=n;return r||a("Accordion"),t||a("AccordionGroup"),o||a("Check"),e(d,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "How Does WhoDB Handle Large Queries and Datasets?"
description: "Understand strategies like lazy loading and table virtualization that ensure smooth performance with big databases. Get advice on what to do if performance lags or memory usage spikes."`}),`
`,e(n.h1,{children:"How Does WhoDB Handle Large Queries and Datasets?"}),`
`,e(n.p,{children:"Discover how WhoDB stays fast and responsive when working with large queries and massive datasets. This page explains key strategies like lazy loading and table virtualization embedded in the Explore Storage Unit and data viewing pages, guiding you to optimize your experience and troubleshoot common performance hurdles."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Table of Contents"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"#managing-large-datasets-with-lazy-loading",children:"Managing Large Datasets with Lazy Loading"})}),`
`,e(n.li,{children:e(n.a,{href:"#smooth-scrolling-with-table-virtualization",children:"Smooth Scrolling with Table Virtualization"})}),`
`,e(n.li,{children:e(n.a,{href:"#practical-tips-for-working-with-big-tables",children:"Practical Tips for Working with Big Tables"})}),`
`,e(n.li,{children:e(n.a,{href:"#handling-performance-lags-and-memory-spikes",children:"Handling Performance Lags and Memory Spikes"})}),`
`,e(n.li,{children:e(n.a,{href:"#troubleshooting-common-issues",children:"Troubleshooting Common Issues"})}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Managing Large Datasets with Lazy Loading"}),`
`,e(n.p,{children:["When you open a storage unit (table or collection) in WhoDB's Explore Storage Unit page, the system does not load all the data at once. Instead, it uses ",e(n.strong,{children:"lazy loading"}),"—data is fetched in manageable chunks only as needed."]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["The page fetches rows by request, controlled by ",e(n.code,{children:"Page Size"})," and ",e(n.code,{children:"Page Offset"}),"."]}),`
`,e(n.li,{children:"Queries default to loading a preset number of rows (commonly 100) to avoid overwhelming your browser and network."}),`
`,e(n.li,{children:"You can adjust the page size to balance data quantity and loading speed."}),`
`]}),`
`,e(n.p,{children:"This strategy ensures your interface remains responsive by only rendering the visible and currently relevant subset of data."}),`
`,e(n.h3,{children:"Example:"}),`
`,e(n.p,{children:"If you are exploring a table with 50,000 rows, WhoDB will fetch the first 100 rows initially. As you navigate through pages, subsequent chunks of data are retrieved dynamically."}),`
`,e(n.h2,{children:"Smooth Scrolling with Table Virtualization"}),`
`,e(n.p,{children:["WhoDB's data tables leverage ",e(n.strong,{children:"table virtualization"})," via the ",e(n.code,{children:"react-window"})," library to display only the rows visible on your screen:"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"This minimizes the number of HTML elements rendered at any time."}),`
`,e(n.li,{children:"The viewport at any moment holds a fraction of the entire dataset, even if the dataset size is huge."}),`
`,e(n.li,{children:"Off-screen rows are removed from the DOM, saving memory and improving rendering performance."}),`
`]}),`
`,e(n.p,{children:"Together with lazy loading, virtualization enables smooth table scrolling and interaction without delays or stuttering."}),`
`,e(n.h3,{children:"What it means for you:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"No performance degradation when browsing millions of rows."}),`
`,e(n.li,{children:"Instantaneous response to paging and sorting commands."}),`
`,e(n.li,{children:"Seamless integration with inline editing, filtering, and row selection."}),`
`]}),`
`,e(n.h2,{children:"Practical Tips for Working with Big Tables"}),`
`,e(n.p,{children:"To make your experience smoother and minimize load:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use filters to reduce the dataset before fetching, via the query builder in the Explore Storage Unit page."}),`
`,e(n.li,{children:"Start with moderate page sizes (e.g., 50-200 rows) and increase only if your system can handle it."}),`
`,e(n.li,{children:"Avoid retrieving entire datasets unless exporting or performing bulk operations."}),`
`,e(n.li,{children:"Take advantage of inline editing and row deletion at manageable data slices."}),`
`,e(n.li,{children:"Use pagination controls at the bottom of data tables to navigate efficiently."}),`
`]}),`
`,e(n.h2,{children:"Handling Performance Lags and Memory Spikes"}),`
`,e(n.p,{children:"Although WhoDB employs best practices, working with very large datasets can still stress your system. Here is how to handle common performance issues:"}),`
`,e(n.h3,{children:"When experiencing UI lag or delays:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Reduce page size:"})," Smaller data chunks load faster and reduce memory usage."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Apply filters:"})," Narrow down your query to the relevant rows or columns."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Clear browser cache:"})," Sometimes UI rendering can slow down due to accumulated browser state."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Close unnecessary tabs or applications:"})," Free system resources."]}),`
`]}),`
`,e(n.h3,{children:"If memory usage spikes unexpectedly:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Confirm that data fetching is paged and not loading full datasets unintentionally."}),`
`,e(n.li,{children:"Check for unusually large cell values (e.g., huge JSON documents) that may slow rendering."}),`
`,e(n.li,{children:"Restart the WhoDB web client to clear in-memory caches."}),`
`]}),`
`,e(n.h3,{children:"Server-side hints:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Ensure your backend database responds efficiently to paged queries."}),`
`,e(n.li,{children:"Use indexes and optimized queries where possible to reduce backend load."}),`
`]}),`
`,e(n.h2,{children:"Troubleshooting Common Issues"}),`
`,e(t,{title:"Common Questions",children:[e(r,{title:"Why am I seeing a 'Loading...' spinner for a long time when opening a large table?",children:e(n.p,{children:"Sometimes, fetching initial data chunks from very large tables takes time due to network latency or backend response speed. Consider reducing the page size or applying filters to limit returned rows. Also, check your database server's performance."})}),e(r,{title:"After scrolling through many pages, the UI becomes slow or unresponsive. What can I do?",children:e(n.p,{children:"This may result from accumulated client-side state or browser memory pressure. Refresh the page to reset the state, clear your browser cache, and reduce page size settings to moderate values to prevent overload."})}),e(r,{title:"I receive an error or timeout on large queries. How to fix it?",children:e(n.p,{children:"Break down your queries with filters or smaller page sizes. Verify backend database query timeout settings. Use the Scratchpad or Raw Execute page to test complex queries and optimize them before running in Explorer."})})]}),`
`,e(o,{children:e(n.p,{children:"Regularly monitor query sizes and use filters to keep data loads manageable. Embrace pagination and lazy loading to avoid overwhelming both client and server."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Additional Resources"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"/guides/best-practices-and-optimization/working-efficiently-with-large-datasets",children:"Working Efficiently with Large Datasets Guide"})," — Detailed best practices for handling big data in WhoDB."]}),`
`,e(n.li,{children:[e(n.a,{href:"/guides/essential-workflows/exploring-and-managing-data",children:"Storage Unit Page Overview"})," — Learn how to explore, edit, and manage your data using the Storage Unit page."]}),`
`,e(n.li,{children:[e(n.a,{href:"/overview/architecture-concepts-group/system-architecture-overview",children:"System Architecture Overview"})," — Understand how WhoDB’s frontend and backend collaborate to deliver performant data interactions."]}),`
`,e(n.li,{children:[e(n.a,{href:"/deployment/operationalization/scaling_performance",children:"Scaling Strategies and Performance Optimization"})," — Advanced operational guidance for running WhoDB at scale."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"By applying these strategies and tips, you will ensure a fluid, effective experience with WhoDB, no matter your dataset size. Whether browsing millions of records or performing complex queries, WhoDB is engineered to help you stay productive without compromise."}),`
`,e(n.hr,{}),`
`,e(n.p,{children:e(n.em,{children:"Last updated: June 2024"})}),`
`,e(n.hr,{})]})}function c(i={}){const{wrapper:n}={...s(),...i.components};return n?e(n,{...i,children:e(l,{...i})}):l(i)}function a(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{c as default};
