import{u as h,a as e,k as a}from"./index-CxwdZWLc.js";function s(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...h(),...i.components},{Accordion:r,AccordionGroup:o,Callout:t,Check:d,Note:c}=n;return r||l("Accordion"),o||l("AccordionGroup"),t||l("Callout"),d||l("Check"),c||l("Note"),e(a,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Prerequisites & System Requirements"
description: "Details the supported platforms, minimum hardware/software requirements, and necessary external dependencies (such as Go, PNPM, and Docker). Sets expectations for both local developers and production deployments, including special notes for enabling natural language integrations with Ollama, Anthropic, and OpenAI."`}),`
`,e(n.h1,{children:"Prerequisites & System Requirements"}),`
`,e(n.p,{children:"This page outlines the essential platforms, hardware, software dependencies, and environment settings required to prepare your system for installing and running WhoDB. Whether you're a local developer building from source or deploying WhoDB in production, these guidelines ensure a smooth setup and optimal performance."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. Supported Platforms"}),`
`,e(n.p,{children:"WhoDB is designed to be platform-agnostic with official support for the following operating systems:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Linux"})," (x86_64 and ARM64 architectures)"]}),`
`,e(n.li,{children:[e(n.strong,{children:"macOS"})," (Intel and Apple Silicon processors)"]}),`
`,e(n.li,{children:[e(n.strong,{children:"Windows 10/11"})," (via WSL 2 recommended for full compatibility)"]}),`
`]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:"For the best experience, especially in production, Linux servers are recommended."}),`
`]}),`
`,e(n.h2,{children:"2. Minimum Hardware Requirements"}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Component"}),e(n.th,{children:"Minimum Specification"}),e(n.th,{children:"Recommended Specification"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:"CPU"}),e(n.td,{children:"2 cores"}),e(n.td,{children:"4+ cores"})]}),e(n.tr,{children:[e(n.td,{children:"Memory (RAM)"}),e(n.td,{children:"4 GB"}),e(n.td,{children:"8 GB or more"})]}),e(n.tr,{children:[e(n.td,{children:"Disk Space"}),e(n.td,{children:"2 GB free"}),e(n.td,{children:"10 GB+ (to accommodate logs, data caching, and frontend assets)"})]}),e(n.tr,{children:[e(n.td,{children:"Network"}),e(n.td,{children:"Stable internet connection (for AI integrations and dependency fetching)"}),e(n.td,{children:"Gigabit connectivity for multi-user setups"})]})]})]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:"Note: Hardware requirements will increase depending on the size of your databases and usage patterns."}),`
`]}),`
`,e(n.h2,{children:"3. Software Dependencies"}),`
`,e(n.p,{children:"Before installing or building WhoDB, ensure the following software is installed and accessible from your command line:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Go (golang)"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Version: 1.24 or higher"}),`
`,e(n.li,{children:"Purpose: Compiling the Go backend and Enterprise Edition modules"}),`
`,e(n.li,{children:["Official download: ",e(n.a,{href:"https://golang.org/dl/",children:"https://golang.org/dl/"})]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Node.js"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Version: 18.x LTS or newer"}),`
`,e(n.li,{children:"Purpose: Building the React frontend"}),`
`,e(n.li,{children:["Official download: ",e(n.a,{href:"https://nodejs.org/",children:"https://nodejs.org/"})]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"pnpm (Performant package manager)"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Version: Latest stable"}),`
`,e(n.li,{children:"Purpose: Efficiently managing frontend dependencies"}),`
`,e(n.li,{children:["Install via npm: ",e(n.code,{children:"npm install -g pnpm"})]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Docker (optional but recommended for production)"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Version: 20.10 or higher"}),`
`,e(n.li,{children:"Purpose: Containerized deployment and environment consistency"}),`
`,e(n.li,{children:["Official download: ",e(n.a,{href:"https://www.docker.com/get-started/",children:"https://www.docker.com/get-started/"})]}),`
`]}),`
`]}),`
`]}),`
`,e(n.blockquote,{children:[`
`,e(c,{children:e(n.p,{children:[`Without these dependencies installed, building or running WhoDB will fail.
Use the installation instructions in the `,e(n.a,{href:"../setup-requirements/installation-methods",children:"Installation Methods"})," guide for detailed steps."]})}),`
`]}),`
`,e(n.h2,{children:"4. Runtime Environment Requirements"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Ports"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Ensure the following ports are open and not blocked by firewalls:",`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Default Web UI port: ",e(n.code,{children:"8080"})]}),`
`,e(n.li,{children:"API and backend communication as configured"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Permissions"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"User running WhoDB should have read/write access to the installation directories and config files."}),`
`,e(n.li,{children:"For Enterprise Edition deployments, verify additional permissions for plugin execution."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Environment Variables"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Basic environment variables such as ",e(n.code,{children:"PATH"})," must include Go, Node.js, and pnpm binaries."]}),`
`,e(n.li,{children:["See ",e(n.a,{href:"../../deployment/prod_deployment/env_config",children:"Environment Variables & Third-Party Integrations"})," for production tuning."]}),`
`]}),`
`]}),`
`]}),`
`,e(n.h2,{children:"5. Special Notes for Enterprise Edition (EE)"}),`
`,e(n.p,{children:"The Enterprise Edition includes extended features and requires additional setup:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Access to Enterprise Edition modules (",e(n.code,{children:"ee/"})," directory) is mandatory before building or running EE."]}),`
`,e(n.li,{children:["EE validation script (",e(n.code,{children:"scripts/validate-ee.sh"}),") must succeed to confirm module presence and correct tooling."]}),`
`,e(n.li,{children:"Build tooling (Go, pnpm, Node.js) versions must align with those needed for CE."}),`
`]}),`
`,e(t,{children:e(n.p,{children:["Ensure you have appropriate access permissions to obtain the EE modules. See the Enterprise Edition README for more details: ",e(n.a,{href:"https://github.com/clidey/whodb/blob/main/ee/README.md",children:"https://github.com/clidey/whodb/blob/main/ee/README.md"})]})}),`
`,e(n.h2,{children:"6. Natural Language Integration Dependencies"}),`
`,e(n.p,{children:"WhoDB supports conversational AI capabilities that rely on external LLM providers."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Supported AI providers:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Ollama"}),`
`,e(n.li,{children:"Anthropic"}),`
`,e(n.li,{children:"OpenAI"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Connectivity"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Outbound HTTPS access on ports 443 for API calls to AI providers"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"API credentials"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Required for Anthropic and OpenAI; configure these securely in your environment."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Container and Deployment notes"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"When deploying in containers, ensure environment variables for API keys are set and network outbound rules permit AI API calls."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Version notes"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Keep your WhoDB version and AI integration libraries up-to-date for compatibility."}),`
`]}),`
`]}),`
`]}),`
`,e(n.h2,{children:"7. Summary Checklist Before Installation"}),`
`,e(d,{children:e(n.ul,{children:[`
`,e(n.li,{children:"Confirm your OS matches supported platforms"}),`
`,e(n.li,{children:"Verify hardware meets minimum specs"}),`
`,e(n.li,{children:"Install Go 1.24+, Node.js 18+, and pnpm"}),`
`,e(n.li,{children:"(Optional) Install Docker for containerized setup"}),`
`,e(n.li,{children:"Open port 8080 and other relevant ports"}),`
`,e(n.li,{children:"Ensure EE modules are available for Enterprise Edition"}),`
`,e(n.li,{children:"Prepare API keys and network access for AI integrations"}),`
`]})}),`
`,e(n.hr,{}),`
`,e(n.p,{children:["For detailed installation and build instructions, refer to the ",e(n.a,{href:"../setup-requirements/installation-methods",children:"Installation Methods"})," page. Once prerequisites are fulfilled, you can proceed to configure and launch your first WhoDB instance."]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Troubleshooting Common Prerequisite Issues"}),`
`,e(o,{title:"Troubleshooting Known Setup Issues",children:[e(r,{title:"Go Not Found or Incorrect Version",children:[e(n.p,{children:["If the ",e(n.code,{children:"go"})," command is not found or the version is below 1.24:"]}),e(n.ul,{children:[`
`,e(n.li,{children:["Verify Go is installed with ",e(n.code,{children:"go version"})]}),`
`,e(n.li,{children:["Download and install the latest version from ",e(n.a,{href:"https://golang.org/dl/",children:"https://golang.org/dl/"})]}),`
`,e(n.li,{children:"Ensure Go’s bin directory is added to your PATH environment variable"}),`
`]})]}),e(r,{title:"pnpm Missing or Not Installed",children:[e(n.p,{children:["To check if pnpm is available, run ",e(n.code,{children:"pnpm --version"}),"."]}),e(n.p,{children:"If not installed:"}),e(n.pre,{children:e(n.code,{className:"language-bash",children:`npm install -g pnpm
`})}),e(n.p,{children:["Confirm installation by running ",e(n.code,{children:"pnpm --version"}),"."]})]}),e(r,{title:"Node.js Version Issues",children:[e(n.p,{children:"WhoDB requires Node.js 18 or later."}),e(n.ul,{children:[`
`,e(n.li,{children:["Check your version: ",e(n.code,{children:"node --version"})]}),`
`,e(n.li,{children:["Update Node.js from ",e(n.a,{href:"https://nodejs.org/",children:"https://nodejs.org/"})]}),`
`,e(n.li,{children:"Use version managers like nvm for easier upgrades if needed"}),`
`]})]}),e(r,{title:"Enterprise Edition Modules Missing",children:[e(n.p,{children:["During EE build or validation, you may see errors about missing ",e(n.code,{children:"ee/"})," directory."]}),e(n.ul,{children:[`
`,e(n.li,{children:"Confirm you have access to the Enterprise Edition source"}),`
`,e(n.li,{children:["Place the ",e(n.code,{children:"ee"})," directory under the project root"]}),`
`,e(n.li,{children:["Run ",e(n.code,{children:"$ ./scripts/validate-ee.sh"})," to verify"]}),`
`,e(n.li,{children:"For missing or empty directories, re-check your EE source"}),`
`]})]}),e(r,{title:"Network Access Blocked for AI Integrations",children:[e(n.p,{children:"If AI features are not working:"}),e(n.ul,{children:[`
`,e(n.li,{children:"Verify firewall allows outbound HTTPS (port 443)"}),`
`,e(n.li,{children:"Check API keys are correctly set"}),`
`,e(n.li,{children:"Confirm your container or cloud environment allows external API calls"}),`
`]})]})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Additional Resources"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"../setup-requirements/installation-methods",children:"Installation Methods"}),": Step-by-step instructions to install WhoDB"]}),`
`,e(n.li,{children:[e(n.a,{href:"../../deployment/prod_deployment/docker_quickstart",children:"Deployment with Docker"}),": Guides for production environments"]}),`
`,e(n.li,{children:[e(n.a,{href:"../../guides/best-practices-and-optimization/security-and-authentication",children:"Security and Authentication Essentials"}),": Best practices for securing your instance"]}),`
`,e(n.li,{children:[e(n.a,{href:"https://github.com/clidey/whodb/blob/main/ee/README.md",children:"Enterprise Edition README"}),": Detailed EE setup and licensing"]}),`
`,e(n.li,{children:[e(n.a,{href:"../../overview/architecture-concepts-group/system-architecture-overview",children:"System Architecture Overview"}),": Understand the software components and their interaction"]}),`
`]}),`
`,e(n.hr,{})]})}function u(i={}){const{wrapper:n}={...h(),...i.components};return n?e(n,{...i,children:e(s,{...i})}):s(i)}function l(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{u as default};
