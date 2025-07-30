const e=`---
title: "Using the Scratchpad and Raw Query Executor"
description: "A hands-on guide to the scratchpad (Jupyter notebook-like) feature and the raw execution page. Execute SQL, analyze plans, organize queries, and capture history for advanced exploratory data tasks."
---

# Using the Scratchpad and Raw Query Executor

## Overview

The Scratchpad and Raw Query Executor page in WhoDB offers a powerful, interactive workspace where you can write and execute raw SQL queries or analyze query plans directly. Inspired by Jupyter notebooks, this feature is designed for advanced exploratory data analysis, letting you organize multiple queries in individual cells or pages, inspect execution results, and track query history—all within a seamless user interface.

This guide will walk you through using the scratchpad environment to execute SQL queries, run query analysis (if supported), manage multiple pages of queries, and explore query results efficiently.

---

## Prerequisites

- **Connected Database:** You must be logged in to WhoDB with an active connection to a database that supports raw SQL execution.
- **Database Support for Scratchpad:** The feature is available for databases that support the scratchpad (e.g., PostgreSQL, SQLite3; Redis disables this feature).
- **Familiarity with SQL:** This is intended for users comfortable writing raw SQL queries.
- **Enterprise Edition Features (Optional):** Query analysis capabilities require the Enterprise Edition and support for the 'analyzeView' feature on your database type.

---

## What You Will Achieve

By following this guide, you will be able to:

- Use multiple interactive query cells to write and run SQL statements.
- Switch between different modes: normal query execution or query plan analysis.
- Add, delete, and organize query cells and pages for better workflow management.
- View tabular results with pagination or visual query plans.
- Copy, edit, rerun past queries from the history for efficient experimentation.

---

## Interface Overview

- **Pages Tabs:** Multiple scratchpad pages allow separation of query sets, each named for easy reference.
- **Query Cells:** Each page consists of one or more query cells where SQL code is written.
- **Mode Toggle:** Switch between "Query" execution and "Analyze" mode (when supported).
- **Execution Controls:** Run queries, clear input, add new cells, or delete cells.
- **Result Display:** Outputs show query results in tables or query plans visualized with graphs.
- **History Panel:** Toggle visibility to access recent queries with status indicators.

---

## Step-by-Step Instructions

### 1. Accessing the Scratchpad

- Open WhoDB and navigate to the **Scratchpad and Raw Query Executor** page via the main menu or from the Dashboard Scratchpad button.
- You will land on "Page 1" with a single editable query cell ready for your input.

### 2. Writing and Running Queries

- Click inside the query cell editor to type your SQL statement. Example:

\`\`\`sql
SELECT * FROM public.users WHERE active = TRUE LIMIT 10;
\`\`\`

- Press the **Submit** button or use the run command in the editor to execute the query.

- The executed query appends to the page history; results display below the cell:
  - For SELECT queries, a paginated results table appears.
  - For other statements (INSERT, UPDATE, DELETE), a confirmation message shows execution success.

### 3. Switching Modes (Query vs Analyze)

- Use the mode toggle on the left of each cell to switch:
  - **Query** mode runs the SQL normally.
  - **Analyze** mode runs query explanation plans (only for supported DBs like PostgreSQL).

- When in Analyze mode and if enabled, the results show an interactive JSON-based graphical representation of execution plans.

### 4. Managing Query Cells

- **Add a Cell:** Click the 'Add' button to insert a new query cell immediately after the current one.
- **Delete a Cell:** Use the delete option to remove a cell (disabled if there is only one cell).
- **Clear Cell:** Reset the current cell content with the Clear button.

### 5. Navigating and Organizing Pages

- Scratchpad supports multiple "pages" to separate different query workflows.
- **Add a Page:** Use the add page button near the tab bar to create a new page.
- **Select a Page:** Click a page tab to switch the active page and work on its queries.
- **Rename a Page:** Double-click the page name in the tab to edit.
- **Delete a Page:** Use the cancel icon on the tab (disabled if only one page exists).

All changes are maintained in local state for fluid switching.

### 6. Using Query History

- Toggle the **history view** within each cell to list prior submitted queries on that page.
- Each history item shows success (green) or failure (red).
- Click a history item to:
  - Load that query back into the editor for editing.
  - Execute it again immediately.
  - Copy it to clipboard.

### 7. Copying Query Text

- Use the clipboard icon to copy the current query or any history item for external use or sharing.

---

## Practical Examples

### Example 1: Simple Select Query

\`\`\`sql
SELECT id, name FROM employees WHERE department = 'Sales' LIMIT 20;
\`\`\`
- Write in the editor.
- Run in Query mode.
- View paginated results below.

### Example 2: Analyzing a Query Plan (Postgres)

\`\`\`sql
SELECT * FROM orders WHERE order_date >= '2024-01-01';
\`\`\`
- Switch to Analyze mode.
- Execute query.
- Inspect the visualized execution graph depicting index scans and joins.

### Example 3: Using Multiple Pages

- Create Page 1 with analysis queries.
- Create Page 2 for data-modification queries (INSERT, UPDATE).
- Switch between pages to separate concerns and avoid mixing query contexts.

---

## Tips and Best Practices

- **Write simple, focused queries per cell** to keep execution and results manageable.
- **Clear unused cells** to declutter the workspace.
- **Use the history panel often** to recycle and iterate on previous queries.
- **Name pages meaningfully** to mirror your project or analysis stages.
- For databases that don’t support analysis mode, all queries run in Query mode.

---

## Troubleshooting

### Common Issues and Solutions

| Problem                            | Cause                                                 | Solution                                                |
|----------------------------------|-------------------------------------------------------|---------------------------------------------------------|
| Query returns error message       | SQL syntax error or invalid query                      | Verify SQL syntax; consult database docs for query format |
| Analyze mode is unavailable       | Feature not enabled or unsupported database            | Confirm Enterprise Edition and DB type (Postgres supported) |
| Results table shows no data       | Query executed but no rows matched                      | Adjust your WHERE clause or data filters                    |
| History not updating              | Temporary UI glitch                                    | Reload the page; history is session-bound                  |
| Cells or pages not adding/deleting | Minimum one cell/page enforced                         | Must have at least one active cell and one page            |

---

## Next Steps & Related Documentation

- Explore the [Exploring and Managing Data](https://whodb.com/guides/essential-workflows/exploring-and-managing-data) guide to learn more about inline data editing.
- Use the [Conversational AI & Querying with AI Chat](https://whodb.com/guides/ai-and-natural-language/conversational-queries-and-ai-models) guide to query databases with natural language.
- For database schema visualization, consult the [Visualizing Your Database Schema](https://whodb.com/guides/essential-workflows/visualizing-your-database-schema) page.
- Review [Connecting to Your Database](https://whodb.com/guides/essential-workflows/connecting-to-your-database) if you need to establish or modify database connections.

---`;export{e as default};
