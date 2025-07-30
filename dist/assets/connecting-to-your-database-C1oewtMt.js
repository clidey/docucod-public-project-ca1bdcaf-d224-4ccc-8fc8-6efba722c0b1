import{u as s,a as n,k as a}from"./index-CxwdZWLc.js";function c(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components},{Accordion:r,AccordionGroup:o,Tip:l}=e;return r||t("Accordion"),o||t("AccordionGroup"),l||t("Tip"),n(a,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "Connecting to Your Database"
description: "Learn how to connect to popular databases including PostgreSQL, MySQL, SQLite3, MongoDB, Redis, and ElasticSearch (as well as EE-only sources). This guide walks through connection options, credentials, profiles, and troubleshooting tips for fast onboarding."`}),`
`,n(e.h1,{children:"Connecting to Your Database"}),`
`,n(e.p,{children:"Welcome to the guide that gets you connected and up running with your databases in WhoDB. Whether your data lives in PostgreSQL, MySQL, SQLite3, MongoDB, Redis, or ElasticSearch, this page walks you through each connection type's requirements, credential setup, profiles, and how to troubleshoot connection obstacles to streamline your onboarding."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"1. Workflow Overview"}),`
`,n(e.h3,{children:"What this guide helps you accomplish"}),`
`,n(e.p,{children:"This guide leads you through establishing successful connections from WhoDB to popular databases, ensuring your credentials and connection options are set properly for smooth integration. You will learn how to specify connection parameters, use profiles, and troubleshoot issues to quickly interact with your data."}),`
`,n(e.h3,{children:"Prerequisites"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Have your database running and accessible via network."}),`
`,n(e.li,{children:"Obtain correct credentials: hostname, port, username, password, and database name."}),`
`,n(e.li,{children:"Confirm network connectivity and access rights."}),`
`,n(e.li,{children:"For SQLite3, have your database file prepared."}),`
`]}),`
`,n(e.h3,{children:"Expected outcome"}),`
`,n(e.p,{children:"You will have WhoDB configured to connect securely and efficiently to your chosen database system, verified through successful connection tests and ready for exploration."}),`
`,n(e.h3,{children:"Estimated time"}),`
`,n(e.p,{children:"10-20 minutes per database connection"}),`
`,n(e.h3,{children:"Difficulty level"}),`
`,n(e.p,{children:"Beginner to Intermediate depending on familiarity with database connection concepts"}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"2. Step-by-Step: Connecting to Common Databases"}),`
`,n(e.h3,{children:"2.1 General Connection Settings"}),`
`,n(e.p,{children:"Every database connection requires key values:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Hostname"}),": The address of your database server."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Port"}),": Network port (default varies per database)."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Username and Password"}),": Credentials with access privileges."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Database name"}),": The specific database or schema to connect to."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Advanced options"}),": Settings like SSL mode, connection timeouts, or protocol tweaks."]}),`
`]}),`
`,n(e.p,{children:"Use these consistently in the database credential forms or configuration profiles."}),`
`,n(e.hr,{}),`
`,n(e.h3,{children:"2.2 PostgreSQL Connection"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Default port:"})," ",n(e.code,{children:"5432"})]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Credential parameters:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Hostname"}),`
`,n(e.li,{children:"Port"}),`
`,n(e.li,{children:"Username"}),`
`,n(e.li,{children:"Password"}),`
`,n(e.li,{children:"Database"}),`
`,n(e.li,{children:"Extra options as needed (e.g., runtime parameters)"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"How WhoDB connects:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Uses pgx with GORM for ORM support"}),`
`,n(e.li,{children:"Supports runtime parameter overrides"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Tips:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Use URL encoding for special characters in credentials"}),`
`,n(e.li,{children:'Add custom runtime parameters via the "Advanced" section'}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Verify:"})," Successful connection leads to schema discovery and access to tables."]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h3,{children:"2.3 MySQL Connection"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Default port:"})," ",n(e.code,{children:"3306"})]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Credential parameters:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Hostname"}),`
`,n(e.li,{children:"Port"}),`
`,n(e.li,{children:"Username"}),`
`,n(e.li,{children:"Password"}),`
`,n(e.li,{children:"Database"}),`
`,n(e.li,{children:"Parse Time (bool)"}),`
`,n(e.li,{children:"Allow Cleartext Passwords (bool)"}),`
`,n(e.li,{children:"Additional query parameters"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"How WhoDB connects:"})," Uses GORM with the Go MySQL Driver"]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Best practices:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Enable ",n(e.code,{children:"ParseTime"})," to correctly handle date/time types."]}),`
`,n(e.li,{children:["Set ",n(e.code,{children:"AllowClearTextPasswords"})," if your server requires."]}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Verify:"})," Check connection by enumerating databases and tables."]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h3,{children:"2.4 SQLite3 Connection"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Database file"}),": Use the full path to your SQLite database file. For development, default folder is ",n(e.code,{children:"tmp/"}),"; for production, ",n(e.code,{children:"/db/"}),"."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Permissions:"})," Ensure WhoDB has read and write access."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"How WhoDB connects:"})," Uses GORM SQLite driver opening the file."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Pitfalls:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Symlinks are resolved; database file must be inside allowed directory."}),`
`,n(e.li,{children:"Missing file or no permission leads to an error."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Verify:"})," Connection means you can browse tables within your SQLite file."]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h3,{children:"2.5 MongoDB Connection"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Default port:"})," ",n(e.code,{children:"27017"})]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Credential parameters:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Hostname"}),`
`,n(e.li,{children:"Port"}),`
`,n(e.li,{children:"Username"}),`
`,n(e.li,{children:"Password"}),`
`,n(e.li,{children:"Database"}),`
`,n(e.li,{children:"DNS Enabled (bool) - whether to use MongoDB's DNS seed list connection string (mongodb+srv)"}),`
`,n(e.li,{children:"URL Params (optional query parameters)"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"How WhoDB connects:"})," Uses official MongoDB Go driver"]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Tips:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Set ",n(e.code,{children:"DNS Enabled"})," to true if connecting to MongoDB Atlas or SRV-based clusters."]}),`
`,n(e.li,{children:["Include any additional connection parameters via ",n(e.code,{children:"URL Params"})," string."]}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Verify:"})," Connection success allows listing collections and querying documents."]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h3,{children:"2.6 ClickHouse Connection (Enterprise Edition)"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Default port:"})," ",n(e.code,{children:"9000"})]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Credential parameters:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Hostname"}),`
`,n(e.li,{children:"Port"}),`
`,n(e.li,{children:"Username"}),`
`,n(e.li,{children:"Password"}),`
`,n(e.li,{children:"Database"}),`
`,n(e.li,{children:"SSL Mode (disable|none|relaxed)"}),`
`,n(e.li,{children:"HTTP Protocol (enable|disable)"}),`
`,n(e.li,{children:"Debug (enable|disable)"}),`
`,n(e.li,{children:"Readonly (enable|disable)"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Tips:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Enable TLS if your ClickHouse instance supports it."}),`
`,n(e.li,{children:"Adjust debug mode for troubleshooting."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Verify:"})," Connection test and ability to query ClickHouse tables."]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"3. Using Profiles for Connection Management"}),`
`,n(e.p,{children:"WhoDB supports configuration profiles that allow you to save and reuse credential sets. Profiles can include additional advanced parameters beyond typical connection fields, improving security and convenience."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"To use a profile, mark the credential set as a profile when adding."}),`
`,n(e.li,{children:"Profiles allow parameterized overrides like SSL options and custom connection timeout."}),`
`,n(e.li,{children:"Profiles help manage multiple database connections efficiently."}),`
`]}),`
`,n(l,{children:n(e.p,{children:"Use profiles to separate development, staging, and production databases to avoid confusion or accidental cross-connection."})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"4. Practical Examples"}),`
`,n(o,{title:"Database Connection Examples",children:[n(r,{title:"Example PostgreSQL Connection Configuration",children:n(e.pre,{children:n(e.code,{className:"language-yaml",children:`Hostname: "db.example.com"
Port: "5432"
Username: "admin"
Password: "s3cret"
Database: "myapp"
Advanced:
  sslmode: "require"
  timezone: "UTC"
`})})}),n(r,{title:"Example MongoDB Connection Parameters",children:n(e.pre,{children:n(e.code,{className:"language-yaml",children:`Hostname: "cluster0.mongodb.net"
Port: "27017"
Username: "mongouser"
Password: "pass123"
Database: "test_db"
Advanced:
  DNS Enabled: "true"
  URL Params: "?retryWrites=true&w=majority"
`})})})]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"5. Troubleshooting Common Connection Issues"}),`
`,n(o,{title:"Troubleshooting Tips",children:[n(r,{title:"Cannot Connect to Database",children:n(e.ul,{children:[`
`,n(e.li,{children:"Verify hostname and port are correct and accessible from the WhoDB host."}),`
`,n(e.li,{children:"Check firewall or network restrictions."}),`
`,n(e.li,{children:"Confirm credentials are valid and have the required permissions."}),`
`,n(e.li,{children:"For cloud or managed DBs, confirm IP whitelist includes your server."}),`
`,n(e.li,{children:"Review SSL requirements—enable or disable SSL as needed."}),`
`]})}),n(r,{title:"Authentication Errors",children:n(e.ul,{children:[`
`,n(e.li,{children:"Double-check username and password spelling."}),`
`,n(e.li,{children:"Use proper URL encoding for special characters."}),`
`,n(e.li,{children:"Use cleartext password options if needed (MySQL)."}),`
`,n(e.li,{children:"Confirm that the user has permission to access the specified database."}),`
`]})}),n(r,{title:"SQLite Specific Errors",children:n(e.ul,{children:[`
`,n(e.li,{children:"Ensure the SQLite database file exists and is in the expected path."}),`
`,n(e.li,{children:"Make sure WhoDB process has read/write permissions."}),`
`,n(e.li,{children:"Symlinked files outside the allowed folder will cause connection failure."}),`
`]})}),n(r,{title:"MongoDB SRV Record or DNS Errors",children:n(e.ul,{children:[`
`,n(e.li,{children:"If using MongoDB Atlas or SRV, ensure DNS Enabled option is true."}),`
`,n(e.li,{children:["Verify ",n(e.code,{children:"URL Params"})," are properly formatted."]}),`
`,n(e.li,{children:"Ensure the MongoDB driver version used by WhoDB matches cluster requirements."}),`
`]})})]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"6. Next Steps & Related Documentation"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["After successful connection, proceed to ",n(e.a,{href:"/guides/essential-workflows/exploring-and-managing-data",children:"Exploring and Managing Data"})," to learn schema navigation and data browsing."]}),`
`,n(e.li,{children:["For security best practices, see ",n(e.a,{href:"/guides/best-practices-and-optimization/security-and-authentication",children:"Security and Authentication Essentials"}),"."]}),`
`,n(e.li,{children:["Need help resolving connection issues? Visit ",n(e.a,{href:"/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"}),"."]}),`
`]}),`
`,n(l,{children:n(e.p,{children:"Keep your credentials secure. Avoid sharing passwords and consider integrating encrypted secrets managers if available."})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"7. Visual Summary Diagram of Typical Connection Flow"}),`
`,n(e.pre,{children:n(e.code,{className:"language-mermaid",children:`flowchart TD
  Start["Start: User Inputs Credentials"] --> Configure["Configure Connection Details"]
  Configure --> ValidateParams{Are Parameters Valid?}
  ValidateParams -- No --> Error1["Show parameter error message"]
  ValidateParams -- Yes --> EstablishConnection["Establish Connection to Database"]
  EstablishConnection --> VerifyConnection{Connection Successful?}
  VerifyConnection -- No --> Error2["Show connection failure message"]
  VerifyConnection -- Yes --> Success["Connection Established - Access Schema"]
`})}),`
`,n(e.hr,{})]})}function h(i={}){const{wrapper:e}={...s(),...i.components};return e?n(e,{...i,children:n(c,{...i})}):c(i)}function t(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
