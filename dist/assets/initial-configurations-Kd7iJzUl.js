const n=`---
title: "Initial Configuration"
description: "Explains how to set up essential environment variables and database credentials, choose between Community and Enterprise editions, and prepare the system for first use. Includes configuration examples for AI chat integrations and database connectors."
---

# Initial Configuration Guide

Setting up WhoDB for the first time involves configuring essential environment variables, providing database credentials, selecting the appropriate edition, and preparing AI chat integrations and database connectors. This guide walks you through these critical steps to get your system ready for immediate use.

---

## 1. Essential Environment Variables

WhoDB uses environment variables to control key behaviors such as edition selection, backend ports, and feature toggles. Properly setting these variables ensures your instance behaves as expected.

### 1.1 Edition Selection

- **\`VITE_BUILD_EDITION\`** determines the running edition of WhoDB:
  - Set as **\`community\`** for the Community Edition (CE).
  - Set as **\`enterprise\`** for the Enterprise Edition (EE).

This choice impacts UI components, features available, and included integrations.

\`\`\`bash
# Example for Community Edition
export VITE_BUILD_EDITION=community

# Example for Enterprise Edition
export VITE_BUILD_EDITION=enterprise
\`\`\`

### 1.2 Back-End Port Configuration

By default, the backend service listens on port 8080. If you need to change this:

\`\`\`bash
export BACKEND_PORT=8080
\`\`\`

Adjust any frontend or proxy configurations accordingly.

### 1.3 AI Chat Integration Variables

WhoDB supports AI chat-powered queries through providers such as Ollama, Anthropic, and OpenAI. To enable these integrations, set: 

- \`AI_PROVIDER\` — name of your chosen AI provider.
- \`AI_API_KEY\` — your API token or key.
- Additional tokens or URLs may be needed depending on the provider.

Example:

\`\`\`bash
export AI_PROVIDER=openai
export AI_API_KEY="your-openai-api-key"
\`\`\`

<Tip>
Refer to your AI provider's documentation for valid environment variables.
</Tip>

## 2. Database Credentials Setup

To connect WhoDB to your databases, supply connection credentials securely.

### 2.1 Supported Database Connections

WhoDB supports a variety of SQL, NoSQL, and cloud databases. Connection details typically include:

- Hostname or IP address
- Port
- Database name
- Username and password
- SSL configuration (if required)

### 2.2 Providing Credentials

When initializing WhoDB for the first time, the setup UI or configuration files will prompt you to enter these credentials. Alternatively, you can configure them via environment variables or configuration files depending on your deployment.

Example \`.env\` snippet:

\`\`\`ini
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=whodb
DB_USER=admin
DB_PASS=secure_password
DB_SSLMODE=disable
\`\`\`

<Tip>
Ensure credentials are stored securely and avoid committing them to source control repositories.
</Tip>

## 3. Choosing Between Community and Enterprise Editions

Choose the edition that fits your needs:

| Edition     | Description                                     | When to Choose                            |
|-------------|------------------------------------------------|------------------------------------------|
| Community   | Open-source, fully featured for most use cases | Ideal for individual developers and small teams |
| Enterprise  | Adds advanced features and extensibility        | Required for large organizations needing plugins, AI extensions, and enhanced integrations |

Set the edition through the \`VITE_BUILD_EDITION\` environment variable as shown earlier.

### 3.1 Edition-Specific Configurations

- The frontend code resolves GraphQL imports differently based on the edition.
- Enterprise Edition sets additional \`paths\` for extending UI and AI modules.

<Tip>
Use the Enterprise Edition only if your license permits and if you require advanced plugin or AI integration support.
</Tip>

## 4. Preparing AI Chat Integrations

To harness conversational AI features, complete the following:

### 4.1 AI Provider Configuration

- Obtain API credentials from your AI service.
- Set the related environment variables securely.

### 4.2 Configuration File Snippets

Below is an example of environment variables for different AI providers:

\`\`\`ini
# OpenAI
AI_PROVIDER=openai
AI_API_KEY=sk-xxxxxx

# Anthropic
AI_PROVIDER=anthropic
AI_API_KEY=anthropic-key

# Ollama
AI_PROVIDER=ollama
OLLAMA_HOST=http://localhost:11434
\`\`\`

### 4.3 Verifying AI Integration

After setup, test the AI chat functionality from within WhoDB's conversational UI to confirm connectivity and response quality.

## 5. Configuring Database Connectors

WhoDB uses connectors/plugins to interact with specific database engines.

### 5.1 Connector Configuration Files

Adjust configurations such as connection strings, timeouts, and SSL settings according to your database requirements.

Example JSON snippet (\`database-config.json\`):

\`\`\`json
{
  "type": "postgresql",
  "host": "127.0.0.1",
  "port": 5432,
  "database": "whodb",
  "user": "admin",
  "password": "secure_password",
  "ssl": false
}
\`\`\`

### 5.2 Best Practices

- Use environment variables to avoid embedding credentials in config files.
- Test connections before starting WhoDB.

## 6. Practical Configuration Examples

### 6.1 Minimal \`.env\` for Community Edition with PostgreSQL and OpenAI

\`\`\`ini
VITE_BUILD_EDITION=community
BACKEND_PORT=8080
DB_HOST=localhost
DB_PORT=5432
DB_NAME=whodb
DB_USER=admin
DB_PASS=admin123
AI_PROVIDER=openai
AI_API_KEY=sk-xxxxxx
\`\`\`

### 6.2 Enterprise Edition with Ollama AI and MySQL

\`\`\`ini
VITE_BUILD_EDITION=enterprise
BACKEND_PORT=8080
DB_HOST=mysql-host
DB_PORT=3306
DB_NAME=appdb
DB_USER=mysqluser
DB_PASS=mysqlpass
AI_PROVIDER=ollama
OLLAMA_HOST=http://localhost:11434
\`\`\`

## 7. Verification and First Use Preparation

Once configured:

- Confirm environment variables are set and accessible.
- Ensure database credentials allow successful connections.
- Launch WhoDB and verify edition-specific visuals.
- Test AI chat integration by initiating queries.

<Tip>
See the [First Run & Quick Validation](./first-run-and-validation) guide for step-by-step launch and test procedures.
</Tip>

## 8. Troubleshooting Common Configuration Issues

<AccordionGroup title="Troubleshooting Configuration Issues">
<Accordion title="Environment Variables Not Loaded">
Ensure environment variables are correctly exported or defined. Restart your shell or session if necessary. Verify with:

\`\`\`bash
printenv | grep VITE_BUILD_EDITION
\`\`\`

</Accordion>
<Accordion title="Database Connection Failures">
- Confirm credentials are accurate.
- Check network accessibility and firewall rules.
- Verify database is running.
- Look for SSL mismatches.
</Accordion>
<Accordion title="AI Chat Not Responding">
- Verify API keys are valid and not expired.
- Check internet connectivity for cloud providers.
- Confirm local AI services (like Ollama) are running and reachable.
</Accordion>
</AccordionGroup>

---

For additional setup assistance, consult our [Installation Methods](../setup-requirements/installation-methods) and [Prerequisites & System Requirements](../setup-requirements/prerequisites-system-requirements).


---

## References
- [Choosing Community vs. Enterprise Edition](../../deployment/prod_deployment/edition_selection)
- [Environment Variables & Third-Party Integrations](../../deployment/prod_deployment/env_config)
- [Connecting to Your Database](../../guides/essential-workflows/connecting-to-your-database)
- [Conversational AI Integration Patterns](../../concepts/integration-patterns/ai-integration)


---

## Summary Diagram: Initial Setup Flow

\`\`\`mermaid
flowchart TD
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
\`\`\``;export{n as default};
