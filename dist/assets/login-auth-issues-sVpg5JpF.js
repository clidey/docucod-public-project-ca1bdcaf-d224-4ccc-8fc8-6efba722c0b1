import{u as t,a as n,k as l}from"./index-CxwdZWLc.js";function o(i){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components},{Tip:r}=e;return r||s("Tip"),n(l,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "Troubleshooting Login and Connection Issues"
description: "Learn practical steps for resolving common authentication problems, network errors, or connection failures, including tips for both database credential and saved profile login modes."`}),`
`,n(e.h1,{children:"Troubleshooting Login and Connection Issues"}),`
`,n(e.p,{children:"Welcome to the comprehensive guide for resolving login and connection issues in WhoDB. This page focuses on helping users troubleshoot common problems encountered during authentication and database connection attempts, whether using direct database credentials or saved profiles."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"#understanding-login-modes",children:"Understanding Login Modes"})}),`
`,n(e.li,{children:n(e.a,{href:"#common-login-issues-and-fixes",children:"Common Login Issues and Fixes"})}),`
`,n(e.li,{children:n(e.a,{href:"#connection-problems-and-solutions",children:"Connection Problems and Solutions"})}),`
`,n(e.li,{children:n(e.a,{href:"#network-and-environment-considerations",children:"Network and Environment Considerations"})}),`
`,n(e.li,{children:n(e.a,{href:"#advanced-troubleshooting-tips",children:"Advanced Troubleshooting Tips"})}),`
`,n(e.li,{children:n(e.a,{href:"#verification-and-best-practices",children:"Verification and Best Practices"})}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Understanding Login Modes"}),`
`,n(e.p,{children:"WhoDB supports two primary login modes to access your databases:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Database Credential Login:"})," Users manually input hostname, database name, username, password, and optional advanced parameters for a direct connection."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Saved Profile Login:"}),` Users select from pre-configured connection profiles saved within WhoDB,
enabling quick and consistent authentication.`]}),`
`]}),`
`,n(e.p,{children:"Both methods trigger an authentication flow that validates your credentials with the backend and establishes a session."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Common Login Issues and Fixes"}),`
`,n(e.h3,{children:["1. ",n(e.em,{children:"Required Fields Missing"})]}),`
`,n(e.p,{children:[n(e.strong,{children:"Problem:"})," Attempting to submit login form with missing critical fields such as hostname, username, or database name."]}),`
`,n(e.p,{children:[n(e.strong,{children:"Cause:"})," The frontend validates required fields depending on the database type. Omission blocks login."]}),`
`,n(e.p,{children:n(e.strong,{children:"Solution:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Ensure all required fields are filled ",n(e.em,{children:"before"})," submitting."]}),`
`,n(e.li,{children:"For PostgreSQL and MySQL, fill Hostname, Database, and Username."}),`
`,n(e.li,{children:"For SQLite, provide the database file path."}),`
`,n(e.li,{children:"For MongoDB and Redis, specify Hostname."}),`
`]}),`
`,n(r,{children:n(e.p,{children:["Use the ",n(e.code,{children:"Host Name (or paste Connection URL)"})," input for some databases to streamline input."]})}),`
`,n(e.h3,{children:["2. ",n(e.em,{children:"Invalid Connection URL Parsing"})]}),`
`,n(e.p,{children:[n(e.strong,{children:"Problem:"})," Pasting a connection URL fails to extract necessary parts like hostname, username, or database."]}),`
`,n(e.p,{children:[n(e.strong,{children:"Cause:"})," URL format may be incorrect or incomplete for WhoDB's parsing logic."]}),`
`,n(e.p,{children:n(e.strong,{children:"Solution:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Verify URL format matches standard conventions for your database."}),`
`,n(e.li,{children:["For PostgreSQL URLs, ensure it starts with ",n(e.code,{children:"postgres://"})," or ",n(e.code,{children:"postgresql://"}),"."]}),`
`,n(e.li,{children:"If URL parsing fails, manually enter advanced details such as port and SSL mode."}),`
`]}),`
`,n(e.h3,{children:["3. ",n(e.em,{children:"Login Failure Notifications"})]}),`
`,n(e.p,{children:[n(e.strong,{children:"Problem:"}),' Receiving "Login failed" messages or errors like "Unauthorized".']}),`
`,n(e.p,{children:[n(e.strong,{children:"Cause:"})," Incorrect credentials, expired session, or backend rejection."]}),`
`,n(e.p,{children:n(e.strong,{children:"Solution:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Double-check username and password."}),`
`,n(e.li,{children:"Verify database name and hostname/IP."}),`
`,n(e.li,{children:"If using saved profiles, ensure the profile still matches valid credentials."}),`
`,n(e.li,{children:"Check network access and firewall settings to the database host."}),`
`]}),`
`,n(e.h3,{children:["4. ",n(e.em,{children:"Advanced Parameters Mistakes"})]}),`
`,n(e.p,{children:[n(e.strong,{children:"Problem:"})," Misconfiguration in advanced form fields (e.g., incorrect port, SSL mode)."]}),`
`,n(e.p,{children:[n(e.strong,{children:"Cause:"})," Incorrect or incompatible advanced settings can prevent connection."]}),`
`,n(e.p,{children:n(e.strong,{children:"Solution:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Use documented defaults for your database type."}),`
`,n(e.li,{children:"For PostgreSQL, usually port 5432 and SSL mode 'disable' or 'require'."}),`
`,n(e.li,{children:"For MongoDB SRV URLs, ensure DNS Enabled flag matches your setup."}),`
`,n(e.li,{children:"Toggle the Advanced form visibility to review and correct."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Connection Problems and Solutions"}),`
`,n(e.h3,{children:["1. ",n(e.em,{children:"Network Connectivity Errors"})]}),`
`,n(e.p,{children:[n(e.strong,{children:"Symptoms:"})," Timeouts, unreachable host, connection refused."]}),`
`,n(e.p,{children:[n(e.strong,{children:"Causes:"})," Firewall blocks, wrong hostname, network interruptions."]}),`
`,n(e.p,{children:n(e.strong,{children:"Check and Fix:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Confirm the hostname resolves correctly (DNS)."}),`
`,n(e.li,{children:"Ping or telnet to the database host and port."}),`
`,n(e.li,{children:"Verify no VPN or proxy is interfering."}),`
`,n(e.li,{children:"Firewall or security groups on the server allow traffic."}),`
`]}),`
`,n(e.h3,{children:["2. ",n(e.em,{children:"Profile-Based Login Fails"})]}),`
`,n(e.p,{children:[n(e.strong,{children:"Symptoms:"})," Login with a saved profile returns failure."]}),`
`,n(e.p,{children:[n(e.strong,{children:"Causes:"})," Profile credentials outdated or the profile service is temporarily unavailable."]}),`
`,n(e.p,{children:n(e.strong,{children:"Fix:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Edit and update the profile credentials manually."}),`
`,n(e.li,{children:"Remove and recreate the profile if corrupted."}),`
`,n(e.li,{children:"Ensure profiles are synced properly if environment variables define credentials."}),`
`]}),`
`,n(e.h3,{children:["3. ",n(e.em,{children:"Cookie or Token Issues"})]}),`
`,n(e.p,{children:[n(e.strong,{children:"Symptoms:"})," Login not persisting, repeated login prompts."]}),`
`,n(e.p,{children:[n(e.strong,{children:"Causes:"})," Browser cookies disabled or HTTP-only tokens not set."]}),`
`,n(e.p,{children:n(e.strong,{children:"Fix:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Enable cookies and allow HTTP-only cookie support."}),`
`,n(e.li,{children:"Clear browser cookies and try again."}),`
`,n(e.li,{children:"Ensure backend is reachable and sets cookies properly."}),`
`]}),`
`,n(e.h3,{children:["4. ",n(e.em,{children:"Backend or API Gateway Token Problems"})]}),`
`,n(e.p,{children:[n(e.strong,{children:"Symptoms:"})," Unauthorized errors during usage despite valid credentials."]}),`
`,n(e.p,{children:[n(e.strong,{children:"Causes:"})," Expired or invalid API tokens when API Gateway is enabled."]}),`
`,n(e.p,{children:n(e.strong,{children:"Solution:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Confirm API tokens are valid and match configured tokens."}),`
`,n(e.li,{children:"Renew or update token configuration if expired."}),`
`,n(e.li,{children:["Check environment variable ",n(e.code,{children:"IsAPIGatewayEnabled"})," settings."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Network and Environment Considerations"}),`
`,n(e.h3,{children:"Environment Variables"}),`
`,n(e.p,{children:"WhoDB’s operation depends on correctly set environment variables for credentials and runtime modes."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Confirm variables for database credentials are accurate."}),`
`,n(e.li,{children:"Check for presence and correctness of API tokens if applicable."}),`
`,n(e.li,{children:"For Enterprise Edition, verify additional plugin and authentication settings."}),`
`]}),`
`,n(e.h3,{children:"Using Connection URLs vs. Manual Fields"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Connection URLs can accelerate setup but require accurate formatting."}),`
`,n(e.li,{children:"When pasting URLs, WhoDB attempts to parse into discrete fields; errors here may need manual correction."}),`
`]}),`
`,n(e.h3,{children:"Proxy and VPN"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Be aware VPNs or proxies may interfere with connectivity."}),`
`,n(e.li,{children:"Local network firewalls or corporate restrictions may block ports."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Advanced Troubleshooting Tips"}),`
`,n(e.h3,{children:"Enable Debug Logs"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Monitor frontend console errors and network requests."}),`
`,n(e.li,{children:"Check backend logs for authentication errors or connection attempts."}),`
`]}),`
`,n(e.h3,{children:"Profile Last Accessed Updates"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Successful login automatically updates ‘last accessed’ metadata conserving session history."}),`
`,n(e.li,{children:"Stale profiles can cause unexpected login behaviors."}),`
`]}),`
`,n(e.h3,{children:"Handling Large Request Bodies"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"The backend restricts login request payloads to 1MB."}),`
`,n(e.li,{children:"If advanced parameters become too large, simplify or validate inputs."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Verification and Best Practices"}),`
`,n(e.h3,{children:"Step-by-Step Verification Checklist"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"Fill all required login fields accurately according to database type."}),`
`,n(e.li,{children:"Use connection URLs carefully; verify auto-parsed fields."}),`
`,n(e.li,{children:"If login fails, review notifications and error messages."}),`
`,n(e.li,{children:"Confirm network availability and firewall settings."}),`
`,n(e.li,{children:"For saved profiles, verify credentials have not expired or changed."}),`
`,n(e.li,{children:"Enable advanced form parameters only when needed, keep defaults otherwise."}),`
`,n(e.li,{children:"Clear browser cookies if session problems persist."}),`
`,n(e.li,{children:"Confirm backend tokens and API gateway configurations."}),`
`,n(e.li,{children:"Test login success by verifying transition to dashboard/storage view."}),`
`]}),`
`,n(e.h3,{children:"Best Practices"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Save connection profiles for frequently used databases to speed up login."}),`
`,n(e.li,{children:"Regularly update saved profiles to keep credentials current."}),`
`,n(e.li,{children:"Use advanced options sparingly and document custom parameters."}),`
`,n(e.li,{children:"Monitor login errors promptly to address credential or network changes."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Related Documentation"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})," — Setup credentials and connection examples"]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/guides/best-practices-and-optimization/security-and-authentication",children:"Security and Authentication Essentials"})," — Managing secure login and session handling"]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," — Wider scope of installation and runtime errors"]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/getting-started/initial-config-launch/first-run-and-validation",children:"First Run and Quick Validation"})," — Initial login and validation tips"]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Summary"}),`
`,n(e.p,{children:"This troubleshooting guide equips you with practical advice and actionable steps to quickly identify and resolve login and database connection issues in WhoDB. From validating credentials, parsing connection URLs, adjusting advanced settings, to ensuring network and backend readiness, your path is clear to stable, secure access."}),`
`,n(e.p,{children:"Remember: effective login flows rely on accuracy, network accessibility, and proper session management. For persistent issues, consult backend logs and the linked guides to deepen your diagnostic reach."}),`
`,n(e.hr,{})]})}function d(i={}){const{wrapper:e}={...t(),...i.components};return e?n(e,{...i,children:n(o,{...i})}):o(i)}function s(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{d as default};
