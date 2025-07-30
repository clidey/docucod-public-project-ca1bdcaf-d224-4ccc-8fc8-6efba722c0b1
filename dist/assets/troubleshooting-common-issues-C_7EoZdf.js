const e=`---
title: "Troubleshooting Common Issues"
description: "Lists and explains common problems encountered during installation and initial configuration—such as missing dependencies, port conflicts, database connection failures, or issues with embedding the frontend build. Offers clear remedies and directs users to log files or community support channels for further help."
---

# Troubleshooting Common Issues

This guide addresses frequent problems encountered during WhoDB installation and initial configuration. It helps you quickly identify and resolve issues related to missing dependencies, port conflicts, database connection failures, and frontend embedding errors, ensuring a smooth start with WhoDB.

---

## 1. Missing Dependencies or Environment Setup

### Issue
WhoDB fails to start or throws errors due to absent or misconfigured dependencies such as Go, Node.js, pnpm, or Docker.

### How to Detect
- Errors during installation or build mentioning missing commands or tools.
- Failure messages related to environment variable access.

### Resolution Steps
1. Verify the installation of required software:
   - **Go**: Run \`go version\` to confirm.
   - **Node.js**: Run \`node -v\`.
   - **pnpm**: Run \`pnpm -v\`.
   - **Docker**: Run \`docker --version\`.

2. Set up environment variables properly:
   - Check your shell or system configuration to ensure variables like \`WHODB_POSTGRES_1\` or \`ENVIRONMENT\` (for development mode) are defined correctly.

3. Follow the [Prerequisites & System Requirements](https://yourdocs.example.com/getting-started/setup-requirements/prerequisites-system-requirements) page for detailed versions and installation instructions.

<Tip>
Always restart your terminal session or IDE after installing new dependencies to load environment variables.
</Tip>

---

## 2. Port Conflicts or Service Not Starting

### Issue
WhoDB backend fails to start because the configured port (default 8080) is already in use.

### How to Detect
- Errors like "address already in use" in startup logs.
- The service looks healthy but is unreachable at expected address.

### Resolution Steps
1. Identify the port conflict:

   - On Linux/macOS:
   \`\`\`sh
   lsof -i :8080
   \`\`\`
   - On Windows:
   \`\`\`powershell
   netstat -aon | findstr :8080
   \`\`\`

2. Free the port:
   - Kill the process using the port (confirm carefully before termination).

3. Change WhoDB's port:

   - Set environment variable \`WHODB_BACKEND_PORT\` to a free port number before start.
   - Example with Docker:
     \`\`\`sh
     docker run -it -p 9090:9090 -e WHODB_BACKEND_PORT=9090 clidey/whodb
     \`\`\`

4. Confirm service accessibility at the new port via browser.

<Warning>
Ensure no firewall or network policy blocks the chosen port.
</Warning>

---

## 3. Database Connection Failures

### Common Causes
- Incorrect credentials (host, username, password, database name, port).
- Database server unreachable or not running.
- Unsupported database version or plugin misconfiguration.
- Missing advanced parameters if required (e.g., SSL modes).

### How to Detect
- Errors during login or connection attempts like "authentication failed", "connection timeout", or "plugin unavailable".

### Resolution Steps
1. **Double-check your database credentials:**
   - Review the login profile or environment variable format, e.g.,
     \`\`\`bash
     WHODB_POSTGRES_1='{"host":"localhost","user":"user","password":"password","database":"dbname"}'
     \`\`\`
   - Confirm your DB server is accessible on that host and port.

2. **Test connectivity independent of WhoDB:**
   - Use native database clients or command-line tools (e.g., \`psql\`, \`mysql\`, \`mongo\`) to confirm credentials and reachability.

3. **Verify advanced options:**
   - Some database connections require parameters like SSL, connection timeouts, or special flags.
   - Add these as JSON key-value pairs in the \`config\` map of your environment variable JSON.

4. **Refer to the [Connecting to Your Database](https://yourdocs.example.com/guides/essential-workflows/connecting-to-your-database) guide for specific database connection examples and nuances.**

<Note>
For SQLite, ensure the database file is correctly mounted into the Docker container at \`/db/\` when using Docker.
</Note>

---

## 4. Frontend Build Embedding Issues

### Issue
Failures or display problems stemming from an improperly embedded or missing frontend build.

### How to Detect
- Blank or error pages when accessing the UI.
- Log errors mentioning missing static assets or HTTP 404s on frontend resources.

### Resolution Steps
1. If running from source, ensure you have built the frontend:

   \`\`\`sh
   pnpm install
   pnpm build
   \`\`\`

2. When using Docker, confirm you are using a tagged image with the frontend correctly included (such as \`clidey/whodb:latest\`).

3. Check any volume mounts or file paths if overriding static assets.

4. Review the [Installation Methods](https://yourdocs.example.com/getting-started/setup-requirements/installation-methods) and [Initial Configurations](https://yourdocs.example.com/getting-started/initial-config-launch/initial-configurations) pages for recommended practices.

---

## 5. AI Integration and Chat Issues

### Issue
Problems with conversational AI features enabled but not responding or authenticating.

### How to Detect
- Errors about missing API keys.
- AI chat failing to load or returning errors.

### Resolution Steps
1. Validate your AI environment variables for providers such as OpenAI, Anthropic, or Ollama (e.g., \`WHODB_OPENAI_API_KEY\`).

2. Confirm network access to endpoints configured.

3. Check the [Integrations Overview](https://yourdocs.example.com/overview/architecture-concepts-group/integration-overview) for precise environment variable setup and key usage.

4. Test disabling AI chat integrations if not needed by setting relevant env vars empty or omitting them.

---

## 6. Reviewing Logs for Diagnosis

Access WhoDB server logs for detailed error information:
- When running with Docker, use:

  \`\`\`sh
  docker logs <container_id>
  \`\`\`

- For local runs, check console output or log files if configured.

Review logs carefully for stack traces or warnings indicating root causes.

---

## 7. Getting Further Help

- **Community Support:** Engage with the WhoDB user community and forums.
- **Documentation:** Visit [Getting Started](https://yourdocs.example.com/getting-started/setup-requirements/prerequisites-system-requirements) and linked guides.
- **GitHub Issues:** Report reproducible bugs or feature requests at the [WhoDB GitHub Repository](https://github.com/clidey/whodb).

<Tip>
Always include relevant logs, system info, and steps to reproduce when seeking help.
</Tip>

---

# Summary
This page helps you swiftly overcome common issues during WhoDB setup and initial use: ensuring dependencies and environment variables are correct, resolving port conflicts, fixing database connection errors, and handling frontend loading or AI integration challenges. Detailed steps and diagnostic tips empower you to regain a working system efficiently.

---

# Quick Reference Links

- [Prerequisites & System Requirements](https://yourdocs.example.com/getting-started/setup-requirements/prerequisites-system-requirements)
- [Installation Methods](https://yourdocs.example.com/getting-started/setup-requirements/installation-methods)
- [Initial Configurations](https://yourdocs.example.com/getting-started/initial-config-launch/initial-configurations)
- [Connecting to Your Database](https://yourdocs.example.com/guides/essential-workflows/connecting-to-your-database)
- [Integrations Overview](https://yourdocs.example.com/overview/architecture-concepts-group/integration-overview)
- [Getting Help & Support](https://yourdocs.example.com/faq/help-community-support/getting-help-contacting-support)`;export{e as default};
