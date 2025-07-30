import{u as l,a as e,k as o}from"./index-CxwdZWLc.js";function t(i){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...i.components},{Tip:r}=n;return r||a("Tip"),e(o,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Exploring and Managing Data"
description: "Step through browsing storage units (tables, collections, keys), filtering and searching records, performing inline edits, creating new entries, and safely deleting data. Includes how to use table virtualization for seamless navigation over large datasets."`}),`
`,e(n.h1,{children:"Exploring and Managing Data"}),`
`,e(n.p,{children:"Explore the powerful capabilities of the WhoDB data management interface that lets you browse storage units, search and filter records, edit data inline, add new entries, and delete with confidence. This guide will walk you through the essential workflows and features available on the storage unit exploration and data management page."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. Overview and Workflow"}),`
`,e(n.h3,{children:"What You Can Accomplish Here"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Browse storage units such as tables, collections, or keys from your connected database schema."}),`
`,e(n.li,{children:"Search and filter through records using flexible where conditions."}),`
`,e(n.li,{children:"Navigate seamlessly through large datasets with automatic table virtualization."}),`
`,e(n.li,{children:"Inline edit existing records and save updates safely."}),`
`,e(n.li,{children:"Add new data entries with guided input forms."}),`
`,e(n.li,{children:"Select and delete records securely with batch support."}),`
`]}),`
`,e(n.h3,{children:"Prerequisites"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"You must be connected to a database and have a schema selected in WhoDB."}),`
`,e(n.li,{children:"Appropriate permissions to read and modify data in the chosen storage unit."}),`
`,e(n.li,{children:"Familiarity with your database's schema structure for effective filtering and understanding data."}),`
`]}),`
`,e(n.h3,{children:"Expected Outcome"}),`
`,e(n.p,{children:"By following this guide, you will confidently navigate through your database storage units, efficiently search and filter records, modify data inline, add new entries, and delete records without disruption, making data management smooth and productive."}),`
`,e(n.h3,{children:"Time Estimate"}),`
`,e(n.p,{children:"Approximately 10-20 minutes to complete initial familiarization and basic data management tasks."}),`
`,e(n.h3,{children:"Difficulty Level"}),`
`,e(n.p,{children:"Intermediate — requires basic understanding of your database schema and data editing concepts."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"2. Navigating and Exploring Storage Units"}),`
`,e(n.h3,{children:"Accessing Storage Units"}),`
`,e(n.p,{children:"When you enter the storage unit exploration page, you will see a list of storage units (tables, collections, or key sets) corresponding to the currently selected database schema."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Use the ",e(n.em,{children:"search box"})," to filter storage units by name."]}),`
`,e(n.li,{children:"Each storage unit card provides summary attributes (e.g., row count, indexes) for quick insight."}),`
`,e(n.li,{children:["Click ",e(n.strong,{children:"Explore"})," on a storage unit card to inspect its data records in detail."]}),`
`]}),`
`,e(n.h3,{children:"Data Table Overview"}),`
`,e(n.p,{children:"Upon exploring a storage unit, the main view presents a pageable table showing rows of data:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Column headers show the field names and their types."}),`
`,e(n.li,{children:"Rows display data records."}),`
`,e(n.li,{children:"Pagination controls allow navigating through pages."}),`
`,e(n.li,{children:["You can customize the page size by entering a value in the ",e(n.strong,{children:"Page Size"})," input for more or fewer rows per page."]}),`
`]}),`
`,e(n.h3,{children:"Table Virtualization"}),`
`,e(n.p,{children:"For large datasets, virtual scrolling ensures smooth performance by rendering only visible rows:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Scroll smoothly even in datasets with tens of thousands of rows."}),`
`,e(n.li,{children:"Paging still works to align with standard data management expectations."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"3. Searching and Filtering Records"}),`
`,e(n.h3,{children:"Applying Where Conditions"}),`
`,e(n.p,{children:"You can filter data using flexible logical where conditions:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Click the ",e(n.strong,{children:"Where condition"})," builder to add, edit, or remove filter criteria."]}),`
`,e(n.li,{children:"Filters use field names (columns), operators (like =, <>, LIKE), and values."}),`
`,e(n.li,{children:"Supports multiple conditions combined with AND logic."}),`
`]}),`
`,e(n.h3,{children:"How To Apply Filters"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:["Click the filter ",e(n.strong,{children:"+"})," button to add a new condition."]}),`
`,e(n.li,{children:"Select a column (field) from the dropdown."}),`
`,e(n.li,{children:"Choose an operator suitable for your data type."}),`
`,e(n.li,{children:"Enter the filter value."}),`
`,e(n.li,{children:["Click ",e(n.strong,{children:"Add"})," to append the filter."]}),`
`,e(n.li,{children:["Click ",e(n.strong,{children:"Query"})," to execute and refresh results."]}),`
`]}),`
`,e(n.h3,{children:"Editing Existing Filters"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Click a filter's text to open the edit popup."}),`
`,e(n.li,{children:"Modify the column, operator, or value."}),`
`,e(n.li,{children:"Save or cancel changes."}),`
`,e(n.li,{children:"Remove unwanted filters with the delete icon."}),`
`]}),`
`,e(n.h3,{children:"Best Practices"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use string operators like LIKE for partial matches."}),`
`,e(n.li,{children:"Use numeric operators (>, <, =) for number fields."}),`
`,e(n.li,{children:"Reset filters regularly to avoid stale queries."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"4. Inline Editing Existing Records"}),`
`,e(n.h3,{children:"Entering Edit Mode"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Hover over a cell and click the pencil icon to start editing."}),`
`,e(n.li,{children:"Alternatively, long press (or right-click) on the cell to preview data safely."}),`
`]}),`
`,e(n.h3,{children:"Editing and Updating Values"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Modify the cell content."}),`
`,e(n.li,{children:"Supported content types include text, JSON (validated), and markdown previews."}),`
`,e(n.li,{children:["Use the ",e(n.strong,{children:"Save"})," button to commit changes."]}),`
`,e(n.li,{children:["Cancel edits with the ",e(n.strong,{children:"Cancel"})," button to revert."]}),`
`]}),`
`,e(n.h3,{children:"Editing Tips"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use the preview mode for safely viewing large JSON or markdown content before editing."}),`
`,e(n.li,{children:"Beware of unsaved changes — attempting to exit with edits prompts a warning."}),`
`]}),`
`,e(n.h3,{children:"After Update"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Successful updates trigger a confirmation notification."}),`
`,e(n.li,{children:"In case of failures (validation errors, network issues), you receive immediate feedback."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"5. Adding New Entries"}),`
`,e(n.h3,{children:"Opening the Add Row Form"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Click the ",e(n.strong,{children:"Add Row"})," button to reveal a dynamic form."]}),`
`,e(n.li,{children:"Form fields correspond to the columns of the current storage unit."}),`
`]}),`
`,e(n.h3,{children:"Filling Out the Form"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Default values are provided for common types (UUID, timestamps, numerics)."}),`
`,e(n.li,{children:"For NoSQL types, document fields are flattened or dynamic."}),`
`,e(n.li,{children:"Use the dropdown to select field types (text or SQL snippet)."}),`
`]}),`
`,e(n.h3,{children:"Submitting New Data"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Fill out desired values."}),`
`,e(n.li,{children:["Click ",e(n.strong,{children:"Submit"})," to add the row."]}),`
`,e(n.li,{children:"Newly added rows will appear after a query refresh."}),`
`,e(n.li,{children:"Cancel the addition by toggling off the form if you entered no data."}),`
`]}),`
`,e(n.h3,{children:"Best Practices"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Provide valid data matching your database schema types."}),`
`,e(n.li,{children:"Use SQL expressions for computed columns where applicable."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"6. Selecting and Deleting Records"}),`
`,e(n.h3,{children:"Selecting Records"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use checkboxes in the leftmost column to select individual rows."}),`
`,e(n.li,{children:"Use the header checkbox to select or deselect all visible rows."}),`
`]}),`
`,e(n.h3,{children:"Deleting Selected Records"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["After selection, click the ",e(n.strong,{children:"Delete Row(s)"})," button."]}),`
`,e(n.li,{children:"Confirm deletion actions if prompted."}),`
`,e(n.li,{children:"Batch deletions stop on first failure to prevent inconsistent states."}),`
`]}),`
`,e(n.h3,{children:"After Deletion"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Deleted rows are removed from the current view immediately."}),`
`,e(n.li,{children:"You receive feedback on success or errors."}),`
`]}),`
`,e(n.h3,{children:"Caution"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Deleted data cannot be recovered through the UI."}),`
`,e(n.li,{children:"Always double-check your selections before confirmation."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"7. Practical Tips and Troubleshooting"}),`
`,e(n.h3,{children:"Tips for Success"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use filters to narrow down data for editing to increase safety."}),`
`,e(n.li,{children:"Regularly refresh queries after modifications to sync your view."}),`
`,e(n.li,{children:"Utilize table virtualization for smooth scrolling on large data."}),`
`]}),`
`,e(n.h3,{children:"Common Issues and Solutions"}),`
`,e(r,{children:[e(n.p,{children:"If the table fails to load or updates do not reflect:"}),e(n.ul,{children:[`
`,e(n.li,{children:"Confirm your connection and current database schema."}),`
`,e(n.li,{children:"Verify permissions allow reading and modifying data."}),`
`,e(n.li,{children:"Try reducing page size or clearing filters."}),`
`]})]}),`
`,e(r,{children:[e(n.p,{children:"Editing cells does not save changes:"}),e(n.ul,{children:[`
`,e(n.li,{children:"Check for validation errors or unsupported data types."}),`
`,e(n.li,{children:"Ensure your session is active (not logged out)."}),`
`,e(n.li,{children:"Review any error messages provided."}),`
`]})]}),`
`,e(r,{children:[e(n.p,{children:"Add row form does not appear or fields are missing:"}),e(n.ul,{children:[`
`,e(n.li,{children:"Confirm you’re in a data-compatible storage unit."}),`
`,e(n.li,{children:"For Redis or unsupported types, adding rows may be disabled."}),`
`]})]}),`
`,e(r,{children:[e(n.p,{children:"Selecting rows for deletion does not work:"}),e(n.ul,{children:[`
`,e(n.li,{children:"Use the column checkbox for selection."}),`
`,e(n.li,{children:"Certain NoSQL databases may restrict deletions through the UI."}),`
`]})]}),`
`,e(n.h3,{children:"Support"}),`
`,e(n.p,{children:["If you encounter unresolved issues, consult the ",e(n.a,{href:"https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," guide or contact support."]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"8. Next Steps and Related Documentation"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["After mastering data exploration, proceed to ",e(n.a,{href:"https://whodb.com/docs/guides/essential-workflows/visualizing-your-database-schema",children:"Visualizing Your Database Schema"})," to better understand relationships."]}),`
`,e(n.li,{children:["Learn to use the ",e(n.a,{href:"https://whodb.com/docs/guides/ai-and-natural-language/scratchpad-and-raw-sql",children:"Scratchpad Interface"})," for advanced querying and combining data operations."]}),`
`,e(n.li,{children:["Enhance productivity by exploring ",e(n.a,{href:"https://whodb.com/docs/guides/best-practices-and-optimization/working-efficiently-with-large-datasets",children:"Working Efficiently with Large Datasets"}),"."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"9. Additional Resources"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://whodb.com/docs/overview/intro-value-group/key-features-overview",children:"WhoDB Overview and Key Features"})}),`
`,e(n.li,{children:e(n.a,{href:"https://whodb.com/docs/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})}),`
`,e(n.li,{children:e(n.a,{href:"https://whodb.com/docs/overview/architecture-concepts-group/system-architecture-overview",children:"System Architecture Overview"})}),`
`]}),`
`,e(n.hr,{})]})}function c(i={}){const{wrapper:n}={...l(),...i.components};return n?e(n,{...i,children:e(t,{...i})}):t(i)}function a(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{c as default};
