import{u as d,a as n,k as s}from"./index-CxwdZWLc.js";function l(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components},{Accordion:t,AccordionGroup:a,Tip:r}=e;return t||o("Accordion"),a||o("AccordionGroup"),r||o("Tip"),n(s,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "Initial Configuration"
description: "Explains how to set up essential environment variables and database credentials, choose between Community and Enterprise editions, and prepare the system for first use. Includes configuration examples for AI chat integrations and database connectors."`}),`
`,n(e.h1,{children:"Initial Configuration Guide"}),`
`,n(e.p,{children:"Setting up WhoDB for the first time involves configuring essential environment variables, providing database credentials, selecting the appropriate edition, and preparing AI chat integrations and database connectors. This guide walks you through these critical steps to get your system ready for immediate use."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"1. Essential Environment Variables"}),`
`,n(e.p,{children:"WhoDB uses environment variables to control key behaviors such as edition selection, backend ports, and feature toggles. Properly setting these variables ensures your instance behaves as expected."}),`
`,n(e.h3,{children:"1.1 Edition Selection"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:n(e.code,{children:"VITE_BUILD_EDITION"})})," determines the running edition of WhoDB:",`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Set as ",n(e.strong,{children:n(e.code,{children:"community"})})," for the Community Edition (CE)."]}),`
`,n(e.li,{children:["Set as ",n(e.strong,{children:n(e.code,{children:"enterprise"})})," for the Enterprise Edition (EE)."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:"This choice impacts UI components, features available, and included integrations."}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`# Example for Community Edition
export VITE_BUILD_EDITION=community

# Example for Enterprise Edition
export VITE_BUILD_EDITION=enterprise
`})}),`
`,n(e.h3,{children:"1.2 Back-End Port Configuration"}),`
`,n(e.p,{children:"By default, the backend service listens on port 8080. If you need to change this:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`export BACKEND_PORT=8080
`})}),`
`,n(e.p,{children:"Adjust any frontend or proxy configurations accordingly."}),`
`,n(e.h3,{children:"1.3 AI Chat Integration Variables"}),`
`,n(e.p,{children:"WhoDB supports AI chat-powered queries through providers such as Ollama, Anthropic, and OpenAI. To enable these integrations, set:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"AI_PROVIDER"})," — name of your chosen AI provider."]}),`
`,n(e.li,{children:[n(e.code,{children:"AI_API_KEY"})," — your API token or key."]}),`
`,n(e.li,{children:"Additional tokens or URLs may be needed depending on the provider."}),`
`]}),`
`,n(e.p,{children:"Example:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`export AI_PROVIDER=openai
export AI_API_KEY="your-openai-api-key"
`})}),`
`,n(r,{children:n(e.p,{children:"Refer to your AI provider's documentation for valid environment variables."})}),`
`,n(e.h2,{children:"2. Database Credentials Setup"}),`
`,n(e.p,{children:"To connect WhoDB to your databases, supply connection credentials securely."}),`
`,n(e.h3,{children:"2.1 Supported Database Connections"}),`
`,n(e.p,{children:"WhoDB supports a variety of SQL, NoSQL, and cloud databases. Connection details typically include:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Hostname or IP address"}),`
`,n(e.li,{children:"Port"}),`
`,n(e.li,{children:"Database name"}),`
`,n(e.li,{children:"Username and password"}),`
`,n(e.li,{children:"SSL configuration (if required)"}),`
`]}),`
`,n(e.h3,{children:"2.2 Providing Credentials"}),`
`,n(e.p,{children:"When initializing WhoDB for the first time, the setup UI or configuration files will prompt you to enter these credentials. Alternatively, you can configure them via environment variables or configuration files depending on your deployment."}),`
`,n(e.p,{children:["Example ",n(e.code,{children:".env"})," snippet:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-ini",children:`DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=whodb
DB_USER=admin
DB_PASS=secure_password
DB_SSLMODE=disable
`})}),`
`,n(r,{children:n(e.p,{children:"Ensure credentials are stored securely and avoid committing them to source control repositories."})}),`
`,n(e.h2,{children:"3. Choosing Between Community and Enterprise Editions"}),`
`,n(e.p,{children:"Choose the edition that fits your needs:"}),`
`,n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Edition"}),n(e.th,{children:"Description"}),n(e.th,{children:"When to Choose"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"Community"}),n(e.td,{children:"Open-source, fully featured for most use cases"}),n(e.td,{children:"Ideal for individual developers and small teams"})]}),n(e.tr,{children:[n(e.td,{children:"Enterprise"}),n(e.td,{children:"Adds advanced features and extensibility"}),n(e.td,{children:"Required for large organizations needing plugins, AI extensions, and enhanced integrations"})]})]})]}),`
`,n(e.p,{children:["Set the edition through the ",n(e.code,{children:"VITE_BUILD_EDITION"})," environment variable as shown earlier."]}),`
`,n(e.h3,{children:"3.1 Edition-Specific Configurations"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"The frontend code resolves GraphQL imports differently based on the edition."}),`
`,n(e.li,{children:["Enterprise Edition sets additional ",n(e.code,{children:"paths"})," for extending UI and AI modules."]}),`
`]}),`
`,n(r,{children:n(e.p,{children:"Use the Enterprise Edition only if your license permits and if you require advanced plugin or AI integration support."})}),`
`,n(e.h2,{children:"4. Preparing AI Chat Integrations"}),`
`,n(e.p,{children:"To harness conversational AI features, complete the following:"}),`
`,n(e.h3,{children:"4.1 AI Provider Configuration"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Obtain API credentials from your AI service."}),`
`,n(e.li,{children:"Set the related environment variables securely."}),`
`]}),`
`,n(e.h3,{children:"4.2 Configuration File Snippets"}),`
`,n(e.p,{children:"Below is an example of environment variables for different AI providers:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ini",children:`# OpenAI
AI_PROVIDER=openai
AI_API_KEY=sk-xxxxxx

# Anthropic
AI_PROVIDER=anthropic
AI_API_KEY=anthropic-key

# Ollama
AI_PROVIDER=ollama
OLLAMA_HOST=http://localhost:11434
`})}),`
`,n(e.h3,{children:"4.3 Verifying AI Integration"}),`
`,n(e.p,{children:"After setup, test the AI chat functionality from within WhoDB's conversational UI to confirm connectivity and response quality."}),`
`,n(e.h2,{children:"5. Configuring Database Connectors"}),`
`,n(e.p,{children:"WhoDB uses connectors/plugins to interact with specific database engines."}),`
`,n(e.h3,{children:"5.1 Connector Configuration Files"}),`
`,n(e.p,{children:"Adjust configurations such as connection strings, timeouts, and SSL settings according to your database requirements."}),`
`,n(e.p,{children:["Example JSON snippet (",n(e.code,{children:"database-config.json"}),"):"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-json",children:`{
  "type": "postgresql",
  "host": "127.0.0.1",
  "port": 5432,
  "database": "whodb",
  "user": "admin",
  "password": "secure_password",
  "ssl": false
}
`})}),`
`,n(e.h3,{children:"5.2 Best Practices"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Use environment variables to avoid embedding credentials in config files."}),`
`,n(e.li,{children:"Test connections before starting WhoDB."}),`
`]}),`
`,n(e.h2,{children:"6. Practical Configuration Examples"}),`
`,n(e.h3,{children:["6.1 Minimal ",n(e.code,{children:".env"})," for Community Edition with PostgreSQL and OpenAI"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-ini",children:`VITE_BUILD_EDITION=community
BACKEND_PORT=8080
DB_HOST=localhost
DB_PORT=5432
DB_NAME=whodb
DB_USER=admin
DB_PASS=admin123
AI_PROVIDER=openai
AI_API_KEY=sk-xxxxxx
`})}),`
`,n(e.h3,{children:"6.2 Enterprise Edition with Ollama AI and MySQL"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ini",children:`VITE_BUILD_EDITION=enterprise
BACKEND_PORT=8080
DB_HOST=mysql-host
DB_PORT=3306
DB_NAME=appdb
DB_USER=mysqluser
DB_PASS=mysqlpass
AI_PROVIDER=ollama
OLLAMA_HOST=http://localhost:11434
`})}),`
`,n(e.h2,{children:"7. Verification and First Use Preparation"}),`
`,n(e.p,{children:"Once configured:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Confirm environment variables are set and accessible."}),`
`,n(e.li,{children:"Ensure database credentials allow successful connections."}),`
`,n(e.li,{children:"Launch WhoDB and verify edition-specific visuals."}),`
`,n(e.li,{children:"Test AI chat integration by initiating queries."}),`
`]}),`
`,n(r,{children:n(e.p,{children:["See the ",n(e.a,{href:"./first-run-and-validation",children:"First Run & Quick Validation"})," guide for step-by-step launch and test procedures."]})}),`
`,n(e.h2,{children:"8. Troubleshooting Common Configuration Issues"}),`
`,n(a,{title:"Troubleshooting Configuration Issues",children:[n(t,{title:"Environment Variables Not Loaded",children:[n(e.p,{children:"Ensure environment variables are correctly exported or defined. Restart your shell or session if necessary. Verify with:"}),n(e.pre,{children:n(e.code,{className:"language-bash",children:`printenv | grep VITE_BUILD_EDITION
`})})]}),n(t,{title:"Database Connection Failures",children:n(e.ul,{children:[`
`,n(e.li,{children:"Confirm credentials are accurate."}),`
`,n(e.li,{children:"Check network accessibility and firewall rules."}),`
`,n(e.li,{children:"Verify database is running."}),`
`,n(e.li,{children:"Look for SSL mismatches."}),`
`]})}),n(t,{title:"AI Chat Not Responding",children:n(e.ul,{children:[`
`,n(e.li,{children:"Verify API keys are valid and not expired."}),`
`,n(e.li,{children:"Check internet connectivity for cloud providers."}),`
`,n(e.li,{children:"Confirm local AI services (like Ollama) are running and reachable."}),`
`]})})]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:["For additional setup assistance, consult our ",n(e.a,{href:"../setup-requirements/installation-methods",children:"Installation Methods"})," and ",n(e.a,{href:"../setup-requirements/prerequisites-system-requirements",children:"Prerequisites & System Requirements"}),"."]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"References"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"../../deployment/prod_deployment/edition_selection",children:"Choosing Community vs. Enterprise Edition"})}),`
`,n(e.li,{children:n(e.a,{href:"../../deployment/prod_deployment/env_config",children:"Environment Variables & Third-Party Integrations"})}),`
`,n(e.li,{children:n(e.a,{href:"../../guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})}),`
`,n(e.li,{children:n(e.a,{href:"../../concepts/integration-patterns/ai-integration",children:"Conversational AI Integration Patterns"})}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Summary Diagram: Initial Setup Flow"}),`
`,n(e.pre,{children:n(e.code,{className:"language-mermaid",children:`flowchart TD
  EnvVar["Set Environment Variables"] --> EditionChoice["Select Edition: Community or Enterprise"]
  EditionChoice -->|Community| FrontendCE["Load Community Frontend Config"]
  EditionChoice -->|Enterprise| FrontendEE["Load Enterprise Frontend Config"]
  EnvVar --> DBConfig["Configure Database Credentials"]
  DBConfig --> TestDB["Test Database Connection"]
  EnvVar --> AIConfig["Set AI Provider Variables"]
  AIConfig --> TestAI["Test AI Chat Integration"]
  FrontendCE --> LaunchApp["Start WhoDB Service"]
  FrontendEE --> LaunchApp
  TestDB --> LaunchApp
  TestAI --> LaunchApp
  LaunchApp --> Ready["Ready for First Use"]
`})})]})}function h(i={}){const{wrapper:e}={...d(),...i.components};return e?n(e,{...i,children:n(l,{...i})}):l(i)}function o(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
