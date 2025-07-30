import{u as s,a as e,k as u}from"./index-CxwdZWLc.js";function h(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...i.components},{Accordion:l,AccordionGroup:t,Info:c,Note:o,Tip:d,Warning:a}=n;return l||r("Accordion"),t||r("AccordionGroup"),c||r("Info"),o||r("Note"),d||r("Tip"),a||r("Warning"),e(u,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Environment Variables & Third-Party Integrations"
description: "Understand how to configure core environment variables, set up API keys for LLM integrations (Ollama, OpenAI, Anthropic), enable or disable telemetry, and manage secrets securely. This page provides practical advice and variable reference for maximizing WhoDB’s features while adhering to security best practices."`}),`
`,e(n.h1,{children:"Environment Variables & Third-Party Integrations"}),`
`,e(n.p,{children:"Configuring WhoDB for production and advanced usage requires setting key environment variables that govern core system behavior, third-party AI integrations, telemetry, and secrets management. This page guides you through configuring these essential environment variables to unlock the full potential of WhoDB while adhering to security best practices."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. Core Environment Variables"}),`
`,e(n.p,{children:"These variables form the foundation of your WhoDB deployment environment and control critical settings across backend and frontend components."}),`
`,e(n.h3,{children:"1.1 Application Mode & Build Edition"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.code,{children:"ENVIRONMENT"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Purpose: Defines the runtime mode"}),`
`,e(n.li,{children:["Recommended Values:",`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"dev"})," — Enables developer features like GraphQL introspection"]}),`
`,e(n.li,{children:[e(n.code,{children:"prod"})," (default) — Production-ready optimizations"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.code,{children:"VITE_BUILD_EDITION"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Purpose: Selects the frontend build edition"}),`
`,e(n.li,{children:["Options:",`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"ce"})," — Community Edition"]}),`
`,e(n.li,{children:[e(n.code,{children:"ee"})," — Enterprise Edition (requires EE build and license)"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.h3,{children:"1.2 Backend Server Settings"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.code,{children:"PORT"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Purpose: Configures the port on which the backend server listens"}),`
`,e(n.li,{children:["Default: ",e(n.code,{children:"8080"})]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.code,{children:"WHODB_TOKENS"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Purpose: Enables API gateway token-based authentication"}),`
`,e(n.li,{children:["Format: Comma-separated tokens (e.g. ",e(n.code,{children:"token1,token2"}),")"]}),`
`,e(n.li,{children:"When set, API Gateway mode activates enforcing token validation for protected routes"}),`
`]}),`
`]}),`
`]}),`
`,e(d,{children:e(n.p,{children:["Always ensure ",e(n.code,{children:"PORT"})," does not conflict with other services and API tokens are kept secret. Using ",e(n.code,{children:"WHODB_TOKENS"})," secures API access for automation or multi-user deployments."]})}),`
`,e(n.h3,{children:"1.3 Database Credential Profiles"}),`
`,e(n.p,{children:"WhoDB supports multiple database profiles via environment variables for automatic credential discovery."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:"Format for Single Profile:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"WHODB_<DATABASE_TYPE>"})," e.g. ",e(n.code,{children:"WHODB_POSTGRES"})]}),`
`,e(n.li,{children:"Value: JSON string representing one or more credentials"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:"Format for Multiple Profiles:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"WHODB_<DATABASE_TYPE>_1"}),", ",e(n.code,{children:"WHODB_<DATABASE_TYPE>_2"}),", etc."]}),`
`,e(n.li,{children:"Each holds a JSON string for a single credential profile"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:"Supported Database Types:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"POSTGRES, MYSQL, MONGODB, SQLITE3, CLICKHOUSE, etc."}),`
`]}),`
`]}),`
`]}),`
`,e(o,{children:e(n.p,{children:["Credential JSON structure must include fields such as ",e(n.code,{children:"alias"}),", ",e(n.code,{children:"host"}),", ",e(n.code,{children:"user"}),", ",e(n.code,{children:"password"}),", ",e(n.code,{children:"database"}),", ",e(n.code,{children:"port"}),", and optional ",e(n.code,{children:"config"})," key-value pairs."]})}),`
`,e(n.p,{children:"Example single profile JSON:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-json",children:`[
  {
    "alias": "MainPostgres",
    "host": "localhost",
    "user": "admin",
    "password": "secret",
    "database": "postgres_db",
    "port": "5432",
    "config": {}
  }
]
`})}),`
`,e(n.h2,{children:"2. AI and LLM Provider Integration Variables"}),`
`,e(n.p,{children:"WhoDB’s conversational AI features integrate with multiple LLM providers. To enable these, you configure API keys, endpoints, and allowlist origins."}),`
`,e(n.h3,{children:"2.1 Ollama Integration"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.code,{children:"WHODB_OLLAMA_HOST"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Default: ",e(n.code,{children:"localhost"})]}),`
`,e(n.li,{children:"Description: Custom hostname for Ollama API"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.code,{children:"WHODB_OLLAMA_PORT"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Default: ",e(n.code,{children:"11434"})]}),`
`,e(n.li,{children:"Description: Custom port for Ollama API"}),`
`]}),`
`]}),`
`]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:"Ollama integration requires the Ollama server accessible on the configured host and port."}),`
`]}),`
`,e(n.h3,{children:"2.2 OpenAI Integration"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"WHODB_OPENAI_API_KEY"})," (Required to enable)"]}),`
`,e(n.li,{children:[e(n.code,{children:"WHODB_OPENAI_ENDPOINT"})," (Optional)",`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Default: ",e(n.code,{children:"https://api.openai.com/v1"})]}),`
`]}),`
`]}),`
`]}),`
`,e(n.h3,{children:"2.3 Anthropic Integration"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"WHODB_ANTHROPIC_API_KEY"})," (Required to enable)"]}),`
`,e(n.li,{children:[e(n.code,{children:"WHODB_ANTHROPIC_ENDPOINT"})," (Optional)",`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Default: ",e(n.code,{children:"https://api.anthropic.com/v1"})]}),`
`]}),`
`]}),`
`]}),`
`,e(n.h3,{children:"2.4 OpenAI-Compatible Providers"}),`
`,e(n.p,{children:"Designed to support self-hosted or third-party APIs that mimic OpenAI."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.code,{children:"WHODB_OPENAI_COMPATIBLE_API_KEY"})}),`
`,e(n.li,{children:e(n.code,{children:"WHODB_OPENAI_COMPATIBLE_ENDPOINT"})}),`
`,e(n.li,{children:[e(n.code,{children:"WHODB_CUSTOM_MODELS"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Comma-separated list of custom model names"}),`
`]}),`
`]}),`
`]}),`
`,e(n.h3,{children:"2.5 Allowed Origins"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"WHODB_ALLOWED_ORIGINS"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Comma-separated list of allowed CORS origins for the API"}),`
`]}),`
`]}),`
`]}),`
`,e(a,{children:e(n.p,{children:"Do not expose API keys in public or insecure environments. Secure keys with environment-specific secrets managers."})}),`
`,e(n.h2,{children:"3. Telemetry and Feature Flags"}),`
`,e(n.p,{children:"While WhoDB collects optional telemetry to improve the product, this can be disabled for privacy."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.code,{children:"WHODB_TELEMETRY_DISABLED"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Set to any non-empty value to opt out of telemetry collection."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:"Feature flags are managed internally and vary between Community and Enterprise Editions."}),`
`]}),`
`]}),`
`,e(c,{children:e(n.p,{children:"Enterprise Edition feature flags enable extended capabilities including AI Chat, multi-profile support, custom themes, and advanced database support. These flags are automatically managed by the EE build system."})}),`
`,e(n.h2,{children:"4. Managing Secrets Securely"}),`
`,e(n.p,{children:"Because WhoDB relies on environment variables for sensitive data such as API keys and database passwords, follow these best practices:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use environment variable injection mechanisms specific to your deployment platform (e.g., Docker secrets, Kubernetes secrets, .env files excluded from version control)."}),`
`,e(n.li,{children:"Avoid committing secrets to source repositories or logs."}),`
`,e(n.li,{children:"Rotate credentials and keys regularly."}),`
`,e(n.li,{children:"Leverage encrypted secrets management tools when possible."}),`
`]}),`
`,e(d,{children:e(n.p,{children:["For Docker Compose deployments, map external secret files or use ",e(n.code,{children:".env"})," files carefully, and restrict file permissions for stored secret files."]})}),`
`,e(n.h2,{children:"5. Example Docker Environment Configuration"}),`
`,e(n.p,{children:"Below is a minimal example of environment variables to enable WhoDB with PostgreSQL and basic AI chat features using OpenAI:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-yaml",children:`version: "3.8"
services:
  whodb:
    image: clidey/whodb:latest
    ports:
      - "8080:8080"
    environment:
      - ENVIRONMENT=prod
      - PORT=8080
      - WHODB_TOKENS=your-secure-token
      - WHODB_POSTGRES='[{"alias":"primary","host":"db","user":"admin","password":"secret","database":"mydb","port":"5432","config":{}}]'
      - WHODB_OPENAI_API_KEY=sk-xxxxxxx
      - WHODB_ALLOWED_ORIGINS=http://localhost:3000,http://mydomain.com
    volumes:
      - ./data:/db
`})}),`
`,e(n.h2,{children:"6. Troubleshooting Environment Variable Issues"}),`
`,e(t,{title:"Common Environment Variable Challenges",children:[e(l,{title:"Incorrect JSON in Database Credentials",children:e(n.p,{children:"Check for proper JSON formatting without trailing commas and valid field naming. Parse errors will be logged in the backend."})}),e(l,{title:"Undefined API Keys Preventing AI Features",children:e(n.p,{children:"Ensure API keys are set correctly and not empty. Missing keys disable AI model integration silently."})}),e(l,{title:"Port Conflicts and Accessibility Issues",children:e(n.p,{children:["Confirm no other service occupies the configured backend port. Use ",e(n.code,{children:"lsof"})," or equivalent to find conflicts."]})}),e(l,{title:"Environment Variables Not Loaded in Containers",children:e(n.p,{children:"Verify variable declarations in Docker Compose or Kubernetes manifests and confirm containers restart after environment changes."})})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"References & Next Steps"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["For database connection details, see the ",e(n.a,{href:"https://whodb.com/docs/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database guide"}),"."]}),`
`,e(n.li,{children:["To understand AI capabilities setup, consult the ",e(n.a,{href:"https://whodb.com/docs/concepts/integration-patterns/ai-integration",children:"Conversational AI Integration page"}),"."]}),`
`,e(n.li,{children:["For initial launch steps and validation, visit ",e(n.a,{href:"https://whodb.com/docs/getting-started/initial-config-launch/initial-configurations",children:"Initial Configuration and First Run documentation"}),"."]}),`
`,e(n.li,{children:["Explore security best practices in the ",e(n.a,{href:"https://whodb.com/docs/guides/best-practices-and-optimization/security-and-authentication",children:"Security and Authentication Essentials guide"}),"."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Additional Resources"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"https://github.com/clidey/whodb/blob/main/BUILD_AND_RUN.md",children:"Build and Run Guide (BUILD_AND_RUN.md)"})," — for detailed build, run, and environment setup instructions"]}),`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/deployment/prod_deployment/docker_quickstart",children:"Docker Quick Start"})," — for containerized deployment options"]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"By carefully configuring these environment variables and managing secrets securely, you ensure WhoDB runs reliably, securely, and fully leverages its AI-powered features in your production or development environments."}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"Quick Reference Table"}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Environment Variable"}),e(n.th,{children:"Purpose"}),e(n.th,{children:"Notes"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"ENVIRONMENT"})}),e(n.td,{children:["Set runtime mode (",e(n.code,{children:"dev"})," or ",e(n.code,{children:"prod"}),")"]}),e(n.td,{children:["Enables GraphQL introspection if ",e(n.code,{children:"dev"})]})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"VITE_BUILD_EDITION"})}),e(n.td,{children:["Frontend edition (",e(n.code,{children:"ce"})," or ",e(n.code,{children:"ee"}),")"]}),e(n.td,{children:"Must match backend EE build"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"PORT"})}),e(n.td,{children:"Backend server port"}),e(n.td,{children:"Defaults to 8080"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_TOKENS"})}),e(n.td,{children:"API gateway tokens (comma-separated)"}),e(n.td,{children:"Enables API gateway enforcement"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_<DBTYPE>"})}),e(n.td,{children:"JSON-encoded database credentials"}),e(n.td,{children:["Supports multiple profiles via ",e(n.code,{children:"_1"}),", ",e(n.code,{children:"_2"}),", etc"]})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_OLLAMA_HOST"})}),e(n.td,{children:"Hostname for Ollama AI service"}),e(n.td,{children:["Defaults to ",e(n.code,{children:"localhost"})," or ",e(n.code,{children:"host.docker.internal"})," inside Docker"]})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_OLLAMA_PORT"})}),e(n.td,{children:"Port for Ollama API"}),e(n.td,{children:["Defaults to ",e(n.code,{children:"11434"})]})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_OPENAI_API_KEY"})}),e(n.td,{children:"API key for OpenAI"}),e(n.td,{children:"Required to enable ChatGPT integration"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_OPENAI_ENDPOINT"})}),e(n.td,{children:"Custom OpenAI endpoint"}),e(n.td,{children:"Defaults to public OpenAI endpoint"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_ANTHROPIC_API_KEY"})}),e(n.td,{children:"API key for Anthropic"}),e(n.td,{children:"Required for Anthropic integration"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_ANTHROPIC_ENDPOINT"})}),e(n.td,{children:"Custom Anthropic endpoint"}),e(n.td,{children:"Defaults to Anthropic public endpoint"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_OPENAI_COMPATIBLE_API_KEY"})}),e(n.td,{children:"API key for OpenAI-compatible APIs"}),e(n.td,{children:"Requires custom models configuration"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_OPENAI_COMPATIBLE_ENDPOINT"})}),e(n.td,{children:"Endpoint for OpenAI-compatible APIs"}),e(n.td,{children:"Required for custom integrations"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_CUSTOM_MODELS"})}),e(n.td,{children:"Comma-separated list of custom model names"}),e(n.td,{children:"Used with compatible API keys"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_ALLOWED_ORIGINS"})}),e(n.td,{children:"Allowed CORS origins (comma-separated URLs)"}),e(n.td,{children:"Secures API access from trusted domains"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_TELEMETRY_DISABLED"})}),e(n.td,{children:"Disable telemetry collection"}),e(n.td,{children:"Set to any non-empty string to opt-out"})]})]})]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:["For precise syntax and examples, always refer to the ",e(n.a,{href:"https://github.com/clidey/whodb/blob/main/BUILD_AND_RUN.md",children:"Build and Run Guide"})," and ensure environment variable files or container configs do not expose secrets inadvertently."]}),`
`,e(n.hr,{}),`
`,e(n.h1,{children:"End of Environment Variables & Third-Party Integrations Documentation"})]})}function m(i={}){const{wrapper:n}={...s(),...i.components};return n?e(n,{...i,children:e(h,{...i})}):h(i)}function r(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{m as default};
