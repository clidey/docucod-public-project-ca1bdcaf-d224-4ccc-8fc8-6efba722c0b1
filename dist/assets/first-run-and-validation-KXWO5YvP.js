import{u,a as e,k as p}from"./index-CxwdZWLc.js";function h(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...u(),...i.components},{Accordion:a,AccordionGroup:l,Check:c,Step:t,Steps:d,Tip:o,Warning:s}=n;return a||r("Accordion"),l||r("AccordionGroup"),c||r("Check"),t||r("Step"),d||r("Steps"),o||r("Tip"),s||r("Warning"),e(p,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "First Run & Quick Validation"
description: "Provides a sequential guide from launching WhoDB for the first time to verifying access via a web browser. Demonstrates quick checks to confirm basic functionality—logging in, accessing sample databases, and engaging the conversational AI (if available)."`}),`
`,e(n.h1,{children:"First Run & Quick Validation"}),`
`,e(n.p,{children:"Welcome to the first run experience of WhoDB. This guide leads you step-by-step from launching the application to verifying your ability to log in, browse sample data, and interact with the conversational AI features where applicable. By following these steps, you'll confirm that WhoDB is properly installed, running, and ready for deeper exploration."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. Launching WhoDB for the First Time"}),`
`,e(n.p,{children:["Before you begin, ensure you have completed installation and initial configuration as described in the previous guides ",e(n.a,{href:"../setup-requirements/installation-methods",children:"Installation Methods"})," and ",e(n.a,{href:"./initial-configurations",children:"Initial Configuration"}),"."]}),`
`,e(n.h3,{children:"Steps to Start the Application"}),`
`,e(d,{children:[e(t,{title:"Navigate to the WhoDB Core Directory",children:e(n.p,{children:["Open your terminal and enter the ",e(n.code,{children:"core"})," directory where WhoDB's backend resides."]})}),e(t,{title:"Start the Application",children:[e(n.p,{children:"Run the appropriate command based on your edition:"}),e(n.pre,{children:e(n.code,{className:"language-bash",children:`# For Community Edition
./whodb

# For Enterprise Edition
./whodb-ee
`})}),e(n.p,{children:"Or if you prefer running from source:"}),e(n.pre,{children:e(n.code,{className:"language-bash",children:`# Community Edition
cd core && go run .

# Enterprise Edition
cd core && go run -tags ee .
`})})]}),e(t,{title:"Confirm Backend Initialization",children:e(n.p,{children:["Watch your terminal output. You should see confirmation messages indicating the server has started and the port it is listening on (default is typically ",e(n.code,{children:"http://localhost:7070"}),")."]})})]}),`
`,e(o,{children:e(n.p,{children:["If the server fails to start, verify your environment variables and configurations per ",e(n.a,{href:"./initial-configurations",children:"Initial Configuration"}),". Common issues include missing database credentials or port conflicts."]})}),`
`,e(n.h2,{children:"2. Accessing the WhoDB Web Interface"}),`
`,e(n.p,{children:"Once the backend is running, open your preferred web browser and go to:"}),`
`,e(n.pre,{children:e(n.code,{children:`http://localhost:7070
`})}),`
`,e(n.p,{children:"This URL loads the WhoDB UI where you can log in and interact with your connected data sources."}),`
`,e(n.h3,{children:"Verify Successful Connection"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"The login page should appear without errors."}),`
`,e(n.li,{children:"Use credentials configured in your database or as per your authentication setup."}),`
`]}),`
`,e(s,{children:e(n.p,{children:"If the login page does not load or you see connection errors, check that your backend service is running and the port is correctly open."})}),`
`,e(n.h2,{children:"3. Logging In and Navigating the Interface"}),`
`,e(n.h3,{children:"User Login"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Enter your username and password."}),`
`,e(n.li,{children:"Upon successful authentication, you will see the main dashboard."}),`
`]}),`
`,e(n.h3,{children:"Dashboard Overview"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"The sidebar lets you select connected databases."}),`
`,e(n.li,{children:"The main pane displays schema visualizations, tables, and query interfaces."}),`
`]}),`
`,e(o,{children:e(n.p,{children:["If you have not connected a database yet, sample databases may be preloaded (e.g., ",e(n.code,{children:"test_db"}),") for quick exploration."]})}),`
`,e(n.h2,{children:"4. Exploring Sample Databases"}),`
`,e(n.p,{children:["To validate WhoDB's basic functionality, explore one of the included sample databases populated with example data (e.g., MySQL ",e(n.code,{children:"test_db"})," with typical e-commerce schema)."]}),`
`,e(n.h3,{children:"How to Explore"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:"From the sidebar, select the sample database."}),`
`,e(n.li,{children:["Browse tables like ",e(n.code,{children:"users"}),", ",e(n.code,{children:"products"}),", ",e(n.code,{children:"orders"}),", and ",e(n.code,{children:"payments"}),"."]}),`
`,e(n.li,{children:"Click a table to view its columns and sample rows."}),`
`]}),`
`,e(n.h3,{children:"Important Tables Included in Sample Data"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"users:"})," User accounts with usernames and emails."]}),`
`,e(n.li,{children:[e(n.strong,{children:"products:"})," Sample product listings with pricing."]}),`
`,e(n.li,{children:[e(n.strong,{children:"orders:"})," Customer orders linked to users."]}),`
`,e(n.li,{children:[e(n.strong,{children:"order_items:"})," Items within each order."]}),`
`,e(n.li,{children:[e(n.strong,{children:"payments:"})," Payment records associated with orders."]}),`
`]}),`
`,e(n.h3,{children:"Running Simple Queries"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use the query editor or the scratchpad to run basic SQL queries:"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-sql",children:`SELECT * FROM users LIMIT 5;
`})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Verify results display as expected."}),`
`]}),`
`,e(n.h2,{children:"5. Engaging the Conversational AI (If Available)"}),`
`,e(n.p,{children:"If your edition and setup include AI conversational integration, test it as follows:"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:"Open the AI Chat panel or conversational interface."}),`
`,e(n.li,{children:"Enter natural language queries, for example:"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{children:`Show me all orders placed by john_doe last month.
`})}),`
`,e(n.ol,{start:"3",children:[`
`,e(n.li,{children:"Review the AI-generated SQL and results."}),`
`]}),`
`,e(o,{children:e(n.p,{children:["If AI chat is not responding or unavailable, verify your AI provider configuration as outlined in ",e(n.a,{href:"../guides/ai-and-natural-language/conversational-queries-and-ai-models",children:"AI Integration Guide"}),"."]})}),`
`,e(n.h2,{children:"6. Verifying Successful Operation"}),`
`,e(n.p,{children:"After completing the above steps, confirm:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Backend server runs without error."}),`
`,e(n.li,{children:"UI loads in your browser and allows login."}),`
`,e(n.li,{children:"Sample databases are accessible and tables can be viewed."}),`
`,e(n.li,{children:"SQL queries execute and return results."}),`
`,e(n.li,{children:"Conversational AI responds correctly (if enabled)."}),`
`]}),`
`,e(c,{children:e(n.p,{children:"You have successfully launched WhoDB, confirmed connectivity, and verified data browsing and query functions."})}),`
`,e(n.h2,{children:"7. Troubleshooting Common First-Run Issues"}),`
`,e(l,{title:"Common First-Run Issues",children:[e(a,{title:"Unable to Access UI at http://localhost:7070",children:e(n.ul,{children:[`
`,e(n.li,{children:"Ensure the backend is running and listening on port 7070."}),`
`,e(n.li,{children:"Confirm no firewall or antivirus is blocking the port."}),`
`,e(n.li,{children:"Check your machine’s localhost mapping."}),`
`]})}),e(a,{title:"Login Fails or Page Returns Unauthorized",children:e(n.ul,{children:[`
`,e(n.li,{children:"Verify database credentials and user accounts are properly configured."}),`
`,e(n.li,{children:"Confirm environment variables match your setup."}),`
`,e(n.li,{children:"Review authorization mechanisms (local or external)."}),`
`]})}),e(a,{title:"Sample Data Missing or Tables Empty",children:e(n.ul,{children:[`
`,e(n.li,{children:"Check the database connection details."}),`
`,e(n.li,{children:"Verify sample data was loaded into your database."}),`
`,e(n.li,{children:["Reload or reset the sample data scripts from the ",e(n.code,{children:"/dev/sample-data"})," directory."]}),`
`]})}),e(a,{title:"Conversational AI Not Responding",children:e(n.ul,{children:[`
`,e(n.li,{children:"Confirm AI provider credentials are configured."}),`
`,e(n.li,{children:"Verify network connectivity to external AI services."}),`
`,e(n.li,{children:"Check relevant logs for error messages."}),`
`]})})]}),`
`,e(n.h2,{children:"8. Next Steps"}),`
`,e(n.p,{children:"Now that you've confirmed WhoDB is up and running:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Proceed to ",e(n.a,{href:"../../guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})," to integrate your production databases."]}),`
`,e(n.li,{children:["Explore ",e(n.a,{href:"../../guides/ai-and-natural-language/conversational-queries-and-ai-models",children:"Querying Your Data with AI Chat"})," for advanced conversational querying."]}),`
`,e(n.li,{children:["Review ",e(n.a,{href:"./initial-configurations",children:"Initial Configuration"})," if you need to adjust any system settings."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"By completing this guide, you have established a reliable foundation to leverage WhoDB’s unified data management capabilities and conversational AI interface."}),`
`,e(n.p,{children:"Happy exploring!"})]})}function f(i={}){const{wrapper:n}={...u(),...i.components};return n?e(n,{...i,children:e(h,{...i})}):h(i)}function r(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{f as default};
