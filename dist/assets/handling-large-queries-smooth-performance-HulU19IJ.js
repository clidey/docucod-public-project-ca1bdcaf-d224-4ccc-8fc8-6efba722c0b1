const e=`---
title: "How Does WhoDB Handle Large Queries and Datasets?"
description: "Understand strategies like lazy loading and table virtualization that ensure smooth performance with big databases. Get advice on what to do if performance lags or memory usage spikes."
---

# How Does WhoDB Handle Large Queries and Datasets?

Discover how WhoDB stays fast and responsive when working with large queries and massive datasets. This page explains key strategies like lazy loading and table virtualization embedded in the Explore Storage Unit and data viewing pages, guiding you to optimize your experience and troubleshoot common performance hurdles.

---

## Table of Contents
- [Managing Large Datasets with Lazy Loading](#managing-large-datasets-with-lazy-loading)
- [Smooth Scrolling with Table Virtualization](#smooth-scrolling-with-table-virtualization)
- [Practical Tips for Working with Big Tables](#practical-tips-for-working-with-big-tables)
- [Handling Performance Lags and Memory Spikes](#handling-performance-lags-and-memory-spikes)
- [Troubleshooting Common Issues](#troubleshooting-common-issues)

---

## Managing Large Datasets with Lazy Loading

When you open a storage unit (table or collection) in WhoDB's Explore Storage Unit page, the system does not load all the data at once. Instead, it uses **lazy loading**—data is fetched in manageable chunks only as needed.

- The page fetches rows by request, controlled by \`Page Size\` and \`Page Offset\`.
- Queries default to loading a preset number of rows (commonly 100) to avoid overwhelming your browser and network.
- You can adjust the page size to balance data quantity and loading speed.

This strategy ensures your interface remains responsive by only rendering the visible and currently relevant subset of data.

### Example:
If you are exploring a table with 50,000 rows, WhoDB will fetch the first 100 rows initially. As you navigate through pages, subsequent chunks of data are retrieved dynamically.

## Smooth Scrolling with Table Virtualization

WhoDB's data tables leverage **table virtualization** via the \`react-window\` library to display only the rows visible on your screen:

- This minimizes the number of HTML elements rendered at any time.
- The viewport at any moment holds a fraction of the entire dataset, even if the dataset size is huge.
- Off-screen rows are removed from the DOM, saving memory and improving rendering performance.

Together with lazy loading, virtualization enables smooth table scrolling and interaction without delays or stuttering.

### What it means for you:
- No performance degradation when browsing millions of rows.
- Instantaneous response to paging and sorting commands.
- Seamless integration with inline editing, filtering, and row selection.

## Practical Tips for Working with Big Tables

To make your experience smoother and minimize load:

- Use filters to reduce the dataset before fetching, via the query builder in the Explore Storage Unit page.
- Start with moderate page sizes (e.g., 50-200 rows) and increase only if your system can handle it.
- Avoid retrieving entire datasets unless exporting or performing bulk operations.
- Take advantage of inline editing and row deletion at manageable data slices.
- Use pagination controls at the bottom of data tables to navigate efficiently.

## Handling Performance Lags and Memory Spikes

Although WhoDB employs best practices, working with very large datasets can still stress your system. Here is how to handle common performance issues:

### When experiencing UI lag or delays:

- **Reduce page size:** Smaller data chunks load faster and reduce memory usage.
- **Apply filters:** Narrow down your query to the relevant rows or columns.
- **Clear browser cache:** Sometimes UI rendering can slow down due to accumulated browser state.
- **Close unnecessary tabs or applications:** Free system resources.

### If memory usage spikes unexpectedly:

- Confirm that data fetching is paged and not loading full datasets unintentionally.
- Check for unusually large cell values (e.g., huge JSON documents) that may slow rendering.
- Restart the WhoDB web client to clear in-memory caches.

### Server-side hints:
- Ensure your backend database responds efficiently to paged queries.
- Use indexes and optimized queries where possible to reduce backend load.

## Troubleshooting Common Issues

<AccordionGroup title="Common Questions">
<Accordion title="Why am I seeing a 'Loading...' spinner for a long time when opening a large table?">
Sometimes, fetching initial data chunks from very large tables takes time due to network latency or backend response speed. Consider reducing the page size or applying filters to limit returned rows. Also, check your database server's performance.
</Accordion>
<Accordion title="After scrolling through many pages, the UI becomes slow or unresponsive. What can I do?">
This may result from accumulated client-side state or browser memory pressure. Refresh the page to reset the state, clear your browser cache, and reduce page size settings to moderate values to prevent overload.
</Accordion>
<Accordion title="I receive an error or timeout on large queries. How to fix it?">
Break down your queries with filters or smaller page sizes. Verify backend database query timeout settings. Use the Scratchpad or Raw Execute page to test complex queries and optimize them before running in Explorer.
</Accordion>
</AccordionGroup>

<Check>
Regularly monitor query sizes and use filters to keep data loads manageable. Embrace pagination and lazy loading to avoid overwhelming both client and server.
</Check>

---

## Additional Resources

- [Working Efficiently with Large Datasets Guide](/guides/best-practices-and-optimization/working-efficiently-with-large-datasets) — Detailed best practices for handling big data in WhoDB.
- [Storage Unit Page Overview](/guides/essential-workflows/exploring-and-managing-data) — Learn how to explore, edit, and manage your data using the Storage Unit page.
- [System Architecture Overview](/overview/architecture-concepts-group/system-architecture-overview) — Understand how WhoDB’s frontend and backend collaborate to deliver performant data interactions.
- [Scaling Strategies and Performance Optimization](/deployment/operationalization/scaling_performance) — Advanced operational guidance for running WhoDB at scale.

---

By applying these strategies and tips, you will ensure a fluid, effective experience with WhoDB, no matter your dataset size. Whether browsing millions of records or performing complex queries, WhoDB is engineered to help you stay productive without compromise.

---

_Last updated: June 2024_

---`;export{e as default};
