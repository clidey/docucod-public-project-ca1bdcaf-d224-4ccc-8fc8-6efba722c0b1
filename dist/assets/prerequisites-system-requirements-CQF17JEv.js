const n=`---
title: "Prerequisites & System Requirements"
description: "Details the supported platforms, minimum hardware/software requirements, and necessary external dependencies (such as Go, PNPM, and Docker). Sets expectations for both local developers and production deployments, including special notes for enabling natural language integrations with Ollama, Anthropic, and OpenAI."
---

# Prerequisites & System Requirements

This page outlines the essential platforms, hardware, software dependencies, and environment settings required to prepare your system for installing and running WhoDB. Whether you're a local developer building from source or deploying WhoDB in production, these guidelines ensure a smooth setup and optimal performance.

---

## 1. Supported Platforms

WhoDB is designed to be platform-agnostic with official support for the following operating systems:

- **Linux** (x86_64 and ARM64 architectures)
- **macOS** (Intel and Apple Silicon processors)
- **Windows 10/11** (via WSL 2 recommended for full compatibility)

> For the best experience, especially in production, Linux servers are recommended.

## 2. Minimum Hardware Requirements

| Component     | Minimum Specification           | Recommended Specification     |
|---------------|--------------------------------|-------------------------------|
| CPU           | 2 cores                        | 4+ cores                      |
| Memory (RAM)  | 4 GB                          | 8 GB or more                  |
| Disk Space    | 2 GB free                    | 10 GB+ (to accommodate logs, data caching, and frontend assets) |
| Network       | Stable internet connection (for AI integrations and dependency fetching) | Gigabit connectivity for multi-user setups |

> Note: Hardware requirements will increase depending on the size of your databases and usage patterns.

## 3. Software Dependencies

Before installing or building WhoDB, ensure the following software is installed and accessible from your command line:

- **Go (golang)**
  - Version: 1.24 or higher
  - Purpose: Compiling the Go backend and Enterprise Edition modules
  - Official download: [https://golang.org/dl/](https://golang.org/dl/)

- **Node.js**
  - Version: 18.x LTS or newer
  - Purpose: Building the React frontend
  - Official download: [https://nodejs.org/](https://nodejs.org/)

- **pnpm (Performant package manager)**
  - Version: Latest stable
  - Purpose: Efficiently managing frontend dependencies
  - Install via npm: \`npm install -g pnpm\`

- **Docker (optional but recommended for production)**
  - Version: 20.10 or higher
  - Purpose: Containerized deployment and environment consistency
  - Official download: [https://www.docker.com/get-started/](https://www.docker.com/get-started/)

> <Note>
> Without these dependencies installed, building or running WhoDB will fail.
> Use the installation instructions in the [Installation Methods](../setup-requirements/installation-methods) guide for detailed steps.
> </Note>

## 4. Runtime Environment Requirements

- **Ports**
  - Ensure the following ports are open and not blocked by firewalls:
    - Default Web UI port: \`8080\`
    - API and backend communication as configured

- **Permissions**
  - User running WhoDB should have read/write access to the installation directories and config files.
  - For Enterprise Edition deployments, verify additional permissions for plugin execution.

- **Environment Variables**
  - Basic environment variables such as \`PATH\` must include Go, Node.js, and pnpm binaries.
  - See [Environment Variables & Third-Party Integrations](../../deployment/prod_deployment/env_config) for production tuning.

## 5. Special Notes for Enterprise Edition (EE)

The Enterprise Edition includes extended features and requires additional setup:

- Access to Enterprise Edition modules (\`ee/\` directory) is mandatory before building or running EE.
- EE validation script (\`scripts/validate-ee.sh\`) must succeed to confirm module presence and correct tooling.
- Build tooling (Go, pnpm, Node.js) versions must align with those needed for CE.

<Callout>
Ensure you have appropriate access permissions to obtain the EE modules. See the Enterprise Edition README for more details: https://github.com/clidey/whodb/blob/main/ee/README.md
</Callout>

## 6. Natural Language Integration Dependencies

WhoDB supports conversational AI capabilities that rely on external LLM providers.

- **Supported AI providers:**
  - Ollama
  - Anthropic
  - OpenAI

- **Connectivity**
  - Outbound HTTPS access on ports 443 for API calls to AI providers

- **API credentials**
  - Required for Anthropic and OpenAI; configure these securely in your environment.

- **Container and Deployment notes**
  - When deploying in containers, ensure environment variables for API keys are set and network outbound rules permit AI API calls.

- **Version notes**
  - Keep your WhoDB version and AI integration libraries up-to-date for compatibility.

## 7. Summary Checklist Before Installation

<Check>
 - Confirm your OS matches supported platforms
 - Verify hardware meets minimum specs
 - Install Go 1.24+, Node.js 18+, and pnpm
 - (Optional) Install Docker for containerized setup
 - Open port 8080 and other relevant ports
 - Ensure EE modules are available for Enterprise Edition
 - Prepare API keys and network access for AI integrations
</Check>

---

For detailed installation and build instructions, refer to the [Installation Methods](../setup-requirements/installation-methods) page. Once prerequisites are fulfilled, you can proceed to configure and launch your first WhoDB instance.

---

## Troubleshooting Common Prerequisite Issues

<AccordionGroup title="Troubleshooting Known Setup Issues">
<Accordion title="Go Not Found or Incorrect Version">
If the \`go\` command is not found or the version is below 1.24:

- Verify Go is installed with \`go version\`
- Download and install the latest version from https://golang.org/dl/
- Ensure Go’s bin directory is added to your PATH environment variable
</Accordion>
<Accordion title="pnpm Missing or Not Installed">
To check if pnpm is available, run \`pnpm --version\`.

If not installed:

\`\`\`bash
npm install -g pnpm
\`\`\`

Confirm installation by running \`pnpm --version\`.
</Accordion>
<Accordion title="Node.js Version Issues">
WhoDB requires Node.js 18 or later.

- Check your version: \`node --version\`
- Update Node.js from https://nodejs.org/
- Use version managers like nvm for easier upgrades if needed
</Accordion>
<Accordion title="Enterprise Edition Modules Missing">
During EE build or validation, you may see errors about missing \`ee/\` directory.

- Confirm you have access to the Enterprise Edition source
- Place the \`ee\` directory under the project root
- Run \`$ ./scripts/validate-ee.sh\` to verify
- For missing or empty directories, re-check your EE source
</Accordion>
<Accordion title="Network Access Blocked for AI Integrations">
If AI features are not working:

- Verify firewall allows outbound HTTPS (port 443)
- Check API keys are correctly set
- Confirm your container or cloud environment allows external API calls
</Accordion>
</AccordionGroup>

---

## Additional Resources

- [Installation Methods](../setup-requirements/installation-methods): Step-by-step instructions to install WhoDB
- [Deployment with Docker](../../deployment/prod_deployment/docker_quickstart): Guides for production environments
- [Security and Authentication Essentials](../../guides/best-practices-and-optimization/security-and-authentication): Best practices for securing your instance
- [Enterprise Edition README](https://github.com/clidey/whodb/blob/main/ee/README.md): Detailed EE setup and licensing
- [System Architecture Overview](../../overview/architecture-concepts-group/system-architecture-overview): Understand the software components and their interaction

---`;export{n as default};
