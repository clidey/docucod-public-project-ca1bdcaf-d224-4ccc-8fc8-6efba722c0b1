const e=`---
title: "Environment Variables & Third-Party Integrations"
description: "Understand how to configure core environment variables, set up API keys for LLM integrations (Ollama, OpenAI, Anthropic), enable or disable telemetry, and manage secrets securely. This page provides practical advice and variable reference for maximizing WhoDB’s features while adhering to security best practices."
---

# Environment Variables & Third-Party Integrations

Configuring WhoDB for production and advanced usage requires setting key environment variables that govern core system behavior, third-party AI integrations, telemetry, and secrets management. This page guides you through configuring these essential environment variables to unlock the full potential of WhoDB while adhering to security best practices.

---

## 1. Core Environment Variables

These variables form the foundation of your WhoDB deployment environment and control critical settings across backend and frontend components.

### 1.1 Application Mode & Build Edition

- \`ENVIRONMENT\`
  - Purpose: Defines the runtime mode
  - Recommended Values:
    - \`dev\` — Enables developer features like GraphQL introspection
    - \`prod\` (default) — Production-ready optimizations

- \`VITE_BUILD_EDITION\`
  - Purpose: Selects the frontend build edition
  - Options:
    - \`ce\` — Community Edition
    - \`ee\` — Enterprise Edition (requires EE build and license)

### 1.2 Backend Server Settings

- \`PORT\`
  - Purpose: Configures the port on which the backend server listens
  - Default: \`8080\`

- \`WHODB_TOKENS\`
  - Purpose: Enables API gateway token-based authentication
  - Format: Comma-separated tokens (e.g. \`token1,token2\`)
  - When set, API Gateway mode activates enforcing token validation for protected routes

<Tip>
Always ensure \`PORT\` does not conflict with other services and API tokens are kept secret. Using \`WHODB_TOKENS\` secures API access for automation or multi-user deployments.
</Tip>

### 1.3 Database Credential Profiles

WhoDB supports multiple database profiles via environment variables for automatic credential discovery.

- Format for Single Profile:
  - \`WHODB_<DATABASE_TYPE>\` e.g. \`WHODB_POSTGRES\`
  - Value: JSON string representing one or more credentials

- Format for Multiple Profiles:
  - \`WHODB_<DATABASE_TYPE>_1\`, \`WHODB_<DATABASE_TYPE>_2\`, etc.
  - Each holds a JSON string for a single credential profile

- Supported Database Types:
  - POSTGRES, MYSQL, MONGODB, SQLITE3, CLICKHOUSE, etc.

<Note>
Credential JSON structure must include fields such as \`alias\`, \`host\`, \`user\`, \`password\`, \`database\`, \`port\`, and optional \`config\` key-value pairs.
</Note>

Example single profile JSON:
\`\`\`json
[
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
\`\`\`


## 2. AI and LLM Provider Integration Variables

WhoDB’s conversational AI features integrate with multiple LLM providers. To enable these, you configure API keys, endpoints, and allowlist origins.

### 2.1 Ollama Integration

- \`WHODB_OLLAMA_HOST\`
  - Default: \`localhost\`
  - Description: Custom hostname for Ollama API

- \`WHODB_OLLAMA_PORT\`
  - Default: \`11434\`
  - Description: Custom port for Ollama API

> Ollama integration requires the Ollama server accessible on the configured host and port.

### 2.2 OpenAI Integration

- \`WHODB_OPENAI_API_KEY\` (Required to enable)
- \`WHODB_OPENAI_ENDPOINT\` (Optional)
  - Default: \`https://api.openai.com/v1\`

### 2.3 Anthropic Integration

- \`WHODB_ANTHROPIC_API_KEY\` (Required to enable)
- \`WHODB_ANTHROPIC_ENDPOINT\` (Optional)
  - Default: \`https://api.anthropic.com/v1\`

### 2.4 OpenAI-Compatible Providers

Designed to support self-hosted or third-party APIs that mimic OpenAI.

- \`WHODB_OPENAI_COMPATIBLE_API_KEY\`
- \`WHODB_OPENAI_COMPATIBLE_ENDPOINT\`
- \`WHODB_CUSTOM_MODELS\`
  - Comma-separated list of custom model names

### 2.5 Allowed Origins

- \`WHODB_ALLOWED_ORIGINS\`
  - Comma-separated list of allowed CORS origins for the API

<Warning>
Do not expose API keys in public or insecure environments. Secure keys with environment-specific secrets managers.
</Warning>

## 3. Telemetry and Feature Flags

While WhoDB collects optional telemetry to improve the product, this can be disabled for privacy.

- \`WHODB_TELEMETRY_DISABLED\`
  - Set to any non-empty value to opt out of telemetry collection.

- Feature flags are managed internally and vary between Community and Enterprise Editions.

<Info>
Enterprise Edition feature flags enable extended capabilities including AI Chat, multi-profile support, custom themes, and advanced database support. These flags are automatically managed by the EE build system.
</Info>

## 4. Managing Secrets Securely

Because WhoDB relies on environment variables for sensitive data such as API keys and database passwords, follow these best practices:

- Use environment variable injection mechanisms specific to your deployment platform (e.g., Docker secrets, Kubernetes secrets, .env files excluded from version control).
- Avoid committing secrets to source repositories or logs.
- Rotate credentials and keys regularly.
- Leverage encrypted secrets management tools when possible.

<Tip>
For Docker Compose deployments, map external secret files or use \`.env\` files carefully, and restrict file permissions for stored secret files.
</Tip>

## 5. Example Docker Environment Configuration

Below is a minimal example of environment variables to enable WhoDB with PostgreSQL and basic AI chat features using OpenAI:

\`\`\`yaml
version: "3.8"
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
\`\`\`


## 6. Troubleshooting Environment Variable Issues

<AccordionGroup title="Common Environment Variable Challenges">
<Accordion title="Incorrect JSON in Database Credentials">
Check for proper JSON formatting without trailing commas and valid field naming. Parse errors will be logged in the backend.
</Accordion>
<Accordion title="Undefined API Keys Preventing AI Features">
Ensure API keys are set correctly and not empty. Missing keys disable AI model integration silently.
</Accordion>
<Accordion title="Port Conflicts and Accessibility Issues">
Confirm no other service occupies the configured backend port. Use \`lsof\` or equivalent to find conflicts.
</Accordion>
<Accordion title="Environment Variables Not Loaded in Containers">
Verify variable declarations in Docker Compose or Kubernetes manifests and confirm containers restart after environment changes.
</Accordion>
</AccordionGroup>

---

## References & Next Steps

- For database connection details, see the [Connecting to Your Database guide](https://whodb.com/docs/guides/essential-workflows/connecting-to-your-database).
- To understand AI capabilities setup, consult the [Conversational AI Integration page](https://whodb.com/docs/concepts/integration-patterns/ai-integration).
- For initial launch steps and validation, visit [Initial Configuration and First Run documentation](https://whodb.com/docs/getting-started/initial-config-launch/initial-configurations).
- Explore security best practices in the [Security and Authentication Essentials guide](https://whodb.com/docs/guides/best-practices-and-optimization/security-and-authentication).

---

## Additional Resources

- [Build and Run Guide (BUILD_AND_RUN.md)](https://github.com/clidey/whodb/blob/main/BUILD_AND_RUN.md) — for detailed build, run, and environment setup instructions
- [Docker Quick Start](https://whodb.com/docs/deployment/prod_deployment/docker_quickstart) — for containerized deployment options

---

By carefully configuring these environment variables and managing secrets securely, you ensure WhoDB runs reliably, securely, and fully leverages its AI-powered features in your production or development environments.


---

### Quick Reference Table

| Environment Variable            | Purpose                                             | Notes                                         |
|-------------------------------|-----------------------------------------------------|-----------------------------------------------|
| \`ENVIRONMENT\`                  | Set runtime mode (\`dev\` or \`prod\`)                  | Enables GraphQL introspection if \`dev\`       |
| \`VITE_BUILD_EDITION\`           | Frontend edition (\`ce\` or \`ee\`)                      | Must match backend EE build                    |
| \`PORT\`                        | Backend server port                                  | Defaults to 8080                              |
| \`WHODB_TOKENS\`                | API gateway tokens (comma-separated)                 | Enables API gateway enforcement                 |
| \`WHODB_<DBTYPE>\`              | JSON-encoded database credentials                    | Supports multiple profiles via \`_1\`, \`_2\`, etc |
| \`WHODB_OLLAMA_HOST\`            | Hostname for Ollama AI service                      | Defaults to \`localhost\` or \`host.docker.internal\` inside Docker |
| \`WHODB_OLLAMA_PORT\`            | Port for Ollama API                                 | Defaults to \`11434\`                            |
| \`WHODB_OPENAI_API_KEY\`        | API key for OpenAI                                  | Required to enable ChatGPT integration          |
| \`WHODB_OPENAI_ENDPOINT\`        | Custom OpenAI endpoint                              | Defaults to public OpenAI endpoint            |
| \`WHODB_ANTHROPIC_API_KEY\`     | API key for Anthropic                               | Required for Anthropic integration             |
| \`WHODB_ANTHROPIC_ENDPOINT\`     | Custom Anthropic endpoint                           | Defaults to Anthropic public endpoint         |
| \`WHODB_OPENAI_COMPATIBLE_API_KEY\` | API key for OpenAI-compatible APIs                | Requires custom models configuration          |
| \`WHODB_OPENAI_COMPATIBLE_ENDPOINT\` | Endpoint for OpenAI-compatible APIs                | Required for custom integrations               |
| \`WHODB_CUSTOM_MODELS\`          | Comma-separated list of custom model names          | Used with compatible API keys                   |
| \`WHODB_ALLOWED_ORIGINS\`       | Allowed CORS origins (comma-separated URLs)          | Secures API access from trusted domains       |
| \`WHODB_TELEMETRY_DISABLED\`    | Disable telemetry collection                         | Set to any non-empty string to opt-out          |


---

For precise syntax and examples, always refer to the [Build and Run Guide](https://github.com/clidey/whodb/blob/main/BUILD_AND_RUN.md) and ensure environment variable files or container configs do not expose secrets inadvertently.


---

# End of Environment Variables & Third-Party Integrations Documentation
`;export{e as default};
