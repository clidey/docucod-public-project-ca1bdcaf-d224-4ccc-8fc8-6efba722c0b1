const e=`---
title: "Working Efficiently with Large Datasets"
description: "Tips and techniques for leveraging WhoDB’s performance optimizations, such as table virtualization, lazy loading, and pagination. Best suited for administrators and power users handling enterprise-sized databases."
---

# Working Efficiently with Large Datasets in WhoDB

Optimize your experience managing enterprise-sized databases in WhoDB by leveraging its powerful performance features, including table virtualization, lazy loading, and pagination. This guide empowers database administrators and power users to navigate and manipulate large datasets seamlessly without compromising speed or responsiveness.

---

## 1. Understanding the Challenges

Handling vast amounts of data within any UI-oriented database management tool can quickly become slow and resource-intensive. Rendering thousands or millions of rows at once not only overwhelms your browser but also degrades the user experience.

WhoDB addresses these challenges by implementing advanced optimizations designed specifically for large datasets, ensuring that even enterprise-level databases remain snappy and responsive.

---

## 2. Key Performance Features in WhoDB

### Table Virtualization

- **What it is:** Instead of rendering all table rows, WhoDB dynamically renders only the rows visible in the viewport.
- **Benefit:** Massive performance boost by drastically reducing DOM elements.
- **User impact:** Scrolling remains smooth regardless of table size.

### Lazy Loading with Pagination

- **What it is:** Data is fetched and loaded incrementally in pages rather than all at once.
- **Benefit:** Limits memory consumption and reduces network load.
- **User impact:** You can control page size, request more data on demand, and keep the interface responsive.

### Incremental Data Fetching

- **Integrated with:** Filters and search operations to load only necessary data chunks.
- **Outcome:** Avoids loading huge datasets unnecessarily when refining queries.

---

## 3. How to Work with Large Datasets in WhoDB

### Step 1: Access Your Data Table
- Navigate to the **Tables** page in the sidebar.
- Select your desired storage unit (table or collection) to explore the data.

### Step 2: Configure Page Size
- At the top of the data view, set the **Page Size** to control how many rows load per page.
- Default is 10 rows, but you can increase this (e.g., 50, 100, or up to 1000) depending on your system capabilities.

### Step 3: Use Pagination Controls
- Use the pagination bar below the table to navigate between pages.
- Change pages to fetch the next batch of rows lazily, avoiding loading all data simultaneously.

### Step 4: Apply Filters and Searches
- Use the filter panel to build where conditions that narrow results incrementally.
- Filters request only relevant data subsets by the backend, reducing client workload.

### Step 5: Benefit from Virtualized Scrolling
- Scrolling through tables with thousands of rows stays fluid as WhoDB renders only visible rows.
- This allows you to browse large datasets without any UI freezes or sluggishness.

### Step 6: Export Efficiently
- When ready to export large filtered results, use the **Export** button.
- Export works on the currently loaded data or filtered subset, making it manageable and fast.

---

## 4. Practical Tips & Best Practices

- **Choose optimal page size:** Larger page sizes load more data but can increase memory usage and initial load times. Test to find a balanced size.
- **Leverage filtering early:** Apply precise filters before loading to keep the working dataset small.
- **Avoid unneeded columns:** Narrow down visible columns through schema exploration for lighter data rendering.
- **Use lazy loading with purpose:** When scrolling, pause occasionally to allow data fetching to complete before pushing further.
- **Monitor network and browser:** Large pages or inefficient queries can impact backend and frontend - optimize queries for speed.

---

## 5. Common Pitfalls and Troubleshooting

### Pitfall 1: UI freezing when loading very large pages
- **Cause:** Page size too large or heavy complex query filters
- **Solution:** Reduce the page size or simplify queries. Use filtering before pagination.

### Pitfall 2: Incorrect or slow filtering results
- **Cause:** Filters may be applied client-side if backend lacks support
- **Solution:** Confirm backend supports filtering capabilities. Check database plugin limits.

### Pitfall 3: Export timing out or incomplete
- **Cause:** Attempting to export too large unfiltered datasets
- **Solution:** Filter data before export and use smaller page chunks.

### Pitfall 4: Virtualized rows not rendering correctly
- **Cause:** Browser or UI state inconsistencies.
- **Solution:** Refresh page, or adjust page size and sorting filters.

---

## 6. Advanced Use Case: Combining Scratchpad with Large Dataset Exploration

- Use the **Scratchpad** page to write and run raw SQL queries that include pagination clauses.
- You can manually control \`LIMIT\`, \`OFFSET\`, or equivalent clauses to fetch slice segments exactly.
- Submit queries to backends and receive manageable chunks.
- Combine this with WhoDB’s filters and schema insights for powerful targeted data analysis.

---

## 7. Summary of Your Workflow

1. Navigate to the Tables page and select your storage unit.
2. Adjust page size to an optimal number.
3. Apply filters early to limit data scope.
4. Use pagination to fetch data lazily.
5. Scroll smoothly via built-in table virtualization.
6. Export carefully filtered, paged data.
7. Use Scratchpad for customized raw queries if needed.

---

## 8. Related Documentation & Next Steps

- [Connecting to Your Database](../essential-workflows/connecting-to-your-database) — Learn how to connect databases to WhoDB.
- [Exploring and Managing Data](../essential-workflows/exploring-and-managing-data) — Master browsing, filtering, editing, and adding data.
- [Using the Scratchpad and Raw Query Executor](../ai-and-natural-language/scratchpad-and-raw-sql) — For crafting custom SQL queries beyond UI controls.
- [Visualizing Your Database Schema](../essential-workflows/visualizing-your-database-schema) — Explore relationships and data models visually.

<Tip>
Working with large datasets is smoothest when combining filtering with pagination and virtualization — always narrow your dataset before loading.
</Tip>

<Warning>
Avoid trying to load or export extremely large datasets in one go; break tasks into manageable chunks for best performance.
</Warning>`;export{e as default};
