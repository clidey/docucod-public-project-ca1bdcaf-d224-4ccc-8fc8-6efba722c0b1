import{u as c,a as e,k as d}from"./index-CxwdZWLc.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components},{Note:t,Tip:r,Warning:l}=n;return t||o("Note"),r||o("Tip"),l||o("Warning"),e(d,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Troubleshooting Common Issues"
description: "Lists and explains common problems encountered during installation and initial configuration—such as missing dependencies, port conflicts, database connection failures, or issues with embedding the frontend build. Offers clear remedies and directs users to log files or community support channels for further help."`}),`
`,e(n.h1,{children:"Troubleshooting Common Issues"}),`
`,e(n.p,{children:"This guide addresses frequent problems encountered during WhoDB installation and initial configuration. It helps you quickly identify and resolve issues related to missing dependencies, port conflicts, database connection failures, and frontend embedding errors, ensuring a smooth start with WhoDB."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. Missing Dependencies or Environment Setup"}),`
`,e(n.h3,{children:"Issue"}),`
`,e(n.p,{children:"WhoDB fails to start or throws errors due to absent or misconfigured dependencies such as Go, Node.js, pnpm, or Docker."}),`
`,e(n.h3,{children:"How to Detect"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Errors during installation or build mentioning missing commands or tools."}),`
`,e(n.li,{children:"Failure messages related to environment variable access."}),`
`]}),`
`,e(n.h3,{children:"Resolution Steps"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:"Verify the installation of required software:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Go"}),": Run ",e(n.code,{children:"go version"})," to confirm."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Node.js"}),": Run ",e(n.code,{children:"node -v"}),"."]}),`
`,e(n.li,{children:[e(n.strong,{children:"pnpm"}),": Run ",e(n.code,{children:"pnpm -v"}),"."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Docker"}),": Run ",e(n.code,{children:"docker --version"}),"."]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:"Set up environment variables properly:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Check your shell or system configuration to ensure variables like ",e(n.code,{children:"WHODB_POSTGRES_1"})," or ",e(n.code,{children:"ENVIRONMENT"})," (for development mode) are defined correctly."]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:["Follow the ",e(n.a,{href:"https://yourdocs.example.com/getting-started/setup-requirements/prerequisites-system-requirements",children:"Prerequisites & System Requirements"})," page for detailed versions and installation instructions."]}),`
`]}),`
`]}),`
`,e(r,{children:e(n.p,{children:"Always restart your terminal session or IDE after installing new dependencies to load environment variables."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"2. Port Conflicts or Service Not Starting"}),`
`,e(n.h3,{children:"Issue"}),`
`,e(n.p,{children:"WhoDB backend fails to start because the configured port (default 8080) is already in use."}),`
`,e(n.h3,{children:"How to Detect"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:'Errors like "address already in use" in startup logs.'}),`
`,e(n.li,{children:"The service looks healthy but is unreachable at expected address."}),`
`]}),`
`,e(n.h3,{children:"Resolution Steps"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:"Identify the port conflict:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"On Linux/macOS:"}),`
`]}),`
`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-sh",children:`   lsof -i :8080
`})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"On Windows:"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-powershell",children:`   netstat -aon | findstr :8080
`})}),`
`,e(n.ol,{start:"2",children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:"Free the port:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Kill the process using the port (confirm carefully before termination)."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:"Change WhoDB's port:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Set environment variable ",e(n.code,{children:"WHODB_BACKEND_PORT"})," to a free port number before start."]}),`
`,e(n.li,{children:"Example with Docker:"}),`
`]}),`
`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-sh",children:`     docker run -it -p 9090:9090 -e WHODB_BACKEND_PORT=9090 clidey/whodb
`})}),`
`,e(n.ol,{start:"4",children:[`
`,e(n.li,{children:"Confirm service accessibility at the new port via browser."}),`
`]}),`
`,e(l,{children:e(n.p,{children:"Ensure no firewall or network policy blocks the chosen port."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"3. Database Connection Failures"}),`
`,e(n.h3,{children:"Common Causes"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Incorrect credentials (host, username, password, database name, port)."}),`
`,e(n.li,{children:"Database server unreachable or not running."}),`
`,e(n.li,{children:"Unsupported database version or plugin misconfiguration."}),`
`,e(n.li,{children:"Missing advanced parameters if required (e.g., SSL modes)."}),`
`]}),`
`,e(n.h3,{children:"How to Detect"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:'Errors during login or connection attempts like "authentication failed", "connection timeout", or "plugin unavailable".'}),`
`]}),`
`,e(n.h3,{children:"Resolution Steps"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Double-check your database credentials:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Review the login profile or environment variable format, e.g.,"}),`
`]}),`
`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`     WHODB_POSTGRES_1='{"host":"localhost","user":"user","password":"password","database":"dbname"}'
`})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Confirm your DB server is accessible on that host and port."}),`
`]}),`
`,e(n.ol,{start:"2",children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Test connectivity independent of WhoDB:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Use native database clients or command-line tools (e.g., ",e(n.code,{children:"psql"}),", ",e(n.code,{children:"mysql"}),", ",e(n.code,{children:"mongo"}),") to confirm credentials and reachability."]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Verify advanced options:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Some database connections require parameters like SSL, connection timeouts, or special flags."}),`
`,e(n.li,{children:["Add these as JSON key-value pairs in the ",e(n.code,{children:"config"})," map of your environment variable JSON."]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:["Refer to the ",e(n.a,{href:"https://yourdocs.example.com/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})," guide for specific database connection examples and nuances."]})}),`
`]}),`
`]}),`
`,e(t,{children:e(n.p,{children:["For SQLite, ensure the database file is correctly mounted into the Docker container at ",e(n.code,{children:"/db/"})," when using Docker."]})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"4. Frontend Build Embedding Issues"}),`
`,e(n.h3,{children:"Issue"}),`
`,e(n.p,{children:"Failures or display problems stemming from an improperly embedded or missing frontend build."}),`
`,e(n.h3,{children:"How to Detect"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Blank or error pages when accessing the UI."}),`
`,e(n.li,{children:"Log errors mentioning missing static assets or HTTP 404s on frontend resources."}),`
`]}),`
`,e(n.h3,{children:"Resolution Steps"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:"If running from source, ensure you have built the frontend:"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-sh",children:`   pnpm install
   pnpm build
`})}),`
`,e(n.ol,{start:"2",children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:["When using Docker, confirm you are using a tagged image with the frontend correctly included (such as ",e(n.code,{children:"clidey/whodb:latest"}),")."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:"Check any volume mounts or file paths if overriding static assets."}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:["Review the ",e(n.a,{href:"https://yourdocs.example.com/getting-started/setup-requirements/installation-methods",children:"Installation Methods"})," and ",e(n.a,{href:"https://yourdocs.example.com/getting-started/initial-config-launch/initial-configurations",children:"Initial Configurations"})," pages for recommended practices."]}),`
`]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"5. AI Integration and Chat Issues"}),`
`,e(n.h3,{children:"Issue"}),`
`,e(n.p,{children:"Problems with conversational AI features enabled but not responding or authenticating."}),`
`,e(n.h3,{children:"How to Detect"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Errors about missing API keys."}),`
`,e(n.li,{children:"AI chat failing to load or returning errors."}),`
`]}),`
`,e(n.h3,{children:"Resolution Steps"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:["Validate your AI environment variables for providers such as OpenAI, Anthropic, or Ollama (e.g., ",e(n.code,{children:"WHODB_OPENAI_API_KEY"}),")."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:"Confirm network access to endpoints configured."}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:["Check the ",e(n.a,{href:"https://yourdocs.example.com/overview/architecture-concepts-group/integration-overview",children:"Integrations Overview"})," for precise environment variable setup and key usage."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:"Test disabling AI chat integrations if not needed by setting relevant env vars empty or omitting them."}),`
`]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"6. Reviewing Logs for Diagnosis"}),`
`,e(n.p,{children:"Access WhoDB server logs for detailed error information:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"When running with Docker, use:"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-sh",children:`  docker logs <container_id>
`})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"For local runs, check console output or log files if configured."}),`
`]}),`
`,e(n.p,{children:"Review logs carefully for stack traces or warnings indicating root causes."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"7. Getting Further Help"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Community Support:"})," Engage with the WhoDB user community and forums."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Documentation:"})," Visit ",e(n.a,{href:"https://yourdocs.example.com/getting-started/setup-requirements/prerequisites-system-requirements",children:"Getting Started"})," and linked guides."]}),`
`,e(n.li,{children:[e(n.strong,{children:"GitHub Issues:"})," Report reproducible bugs or feature requests at the ",e(n.a,{href:"https://github.com/clidey/whodb",children:"WhoDB GitHub Repository"}),"."]}),`
`]}),`
`,e(r,{children:e(n.p,{children:"Always include relevant logs, system info, and steps to reproduce when seeking help."})}),`
`,e(n.hr,{}),`
`,e(n.h1,{children:"Summary"}),`
`,e(n.p,{children:"This page helps you swiftly overcome common issues during WhoDB setup and initial use: ensuring dependencies and environment variables are correct, resolving port conflicts, fixing database connection errors, and handling frontend loading or AI integration challenges. Detailed steps and diagnostic tips empower you to regain a working system efficiently."}),`
`,e(n.hr,{}),`
`,e(n.h1,{children:"Quick Reference Links"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://yourdocs.example.com/getting-started/setup-requirements/prerequisites-system-requirements",children:"Prerequisites & System Requirements"})}),`
`,e(n.li,{children:e(n.a,{href:"https://yourdocs.example.com/getting-started/setup-requirements/installation-methods",children:"Installation Methods"})}),`
`,e(n.li,{children:e(n.a,{href:"https://yourdocs.example.com/getting-started/initial-config-launch/initial-configurations",children:"Initial Configurations"})}),`
`,e(n.li,{children:e(n.a,{href:"https://yourdocs.example.com/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})}),`
`,e(n.li,{children:e(n.a,{href:"https://yourdocs.example.com/overview/architecture-concepts-group/integration-overview",children:"Integrations Overview"})}),`
`,e(n.li,{children:e(n.a,{href:"https://yourdocs.example.com/faq/help-community-support/getting-help-contacting-support",children:"Getting Help & Support"})}),`
`]})]})}function h(i={}){const{wrapper:n}={...c(),...i.components};return n?e(n,{...i,children:e(s,{...i})}):s(i)}function o(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
