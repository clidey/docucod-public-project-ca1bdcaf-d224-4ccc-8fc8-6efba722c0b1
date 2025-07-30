const n=`---
title: "Monitoring and Logging"
description: "Monitor the health and activity of your WhoDB deployment. Discover how to capture logs, hook WhoDB into external monitoring systems, interpret common metrics, and troubleshoot effectively. This page provides troubleshooting best practices and links out to relevant log configuration files."
---

# Monitoring and Logging

Monitoring the health and activity of your WhoDB deployment is essential for maintaining reliability, diagnosing issues, and ensuring smooth production operations. This guide walks you through capturing logs, integrating with external monitoring systems, interpreting key metrics, and troubleshooting effectively.

---

## Table of Contents
1. [Introduction to Monitoring and Logging](#introduction-to-monitoring-and-logging)
2. [Logging Overview](#logging-overview)
3. [Configuring WhoDB Logging](#configuring-whodb-logging)
4. [Integrating with External Monitoring Systems](#integrating-with-external-monitoring-systems)
5. [Key Metrics to Monitor](#key-metrics-to-monitor)
6. [Troubleshooting Common Log Issues](#troubleshooting-common-log-issues)
7. [Best Practices for Monitoring WhoDB](#best-practices-for-monitoring-whodb)
8. [Additional Resources](#additional-resources)

---

## Introduction to Monitoring and Logging

Running WhoDB in production demands visibility into application behavior and system health. Logs provide a real-time and historical record of application events and errors, enabling you to audit activity, detect failures, and optimize performance.

Monitoring extends beyond logs by capturing system and application metrics, alerting on anomalies and helping maintain uptime.

This page focuses on practical guidance to set up, utilize, and troubleshoot WhoDB logs, and to integrate them with monitoring infrastructure.

---

## Logging Overview

WhoDB employs structured logging using the \`logrus\` package, allowing logs to be outputted with levels such as Info, Warning, and Fatal.

Logs include:
- Startup and shutdown sequences
- API and backend errors
- Database plugin activity
- AI integration warnings

Logs are written to stdout/stderr by default, making them Docker and cloud-friendly.

---

## Configuring WhoDB Logging

### Default Logging Behavior

By default, WhoDB logs essential server lifecycle events:

\`\`\`plaintext
INFO Starting WhoDB...
INFO Welcome to WhoDB!
INFO Get started by visiting: http://0.0.0.0:8080
\`\`\`

Warnings and errors are also logged with descriptive messages.

### Customizing Log Levels or Outputs

Currently, WhoDB’s configuration defaults to info-level logs, but the \`log\` package uses \`logrus\`, which supports advanced configuration.

To enable advanced log configuration (e.g., JSON output or file logging), you can extend the \`core/src/log/log.go\` initialization with custom hooks or redirect output.

### Viewing Logs in Docker

If running WhoDB via Docker, use:

\`\`\`bash
docker logs <container_name_or_id>
\`\`\`

for real-time access to stdout logs.

### Log Format

Logs follow this format:

\`\`\`plaintext
<LEVEL> <timestamp> <message>
\`\`\`

Warnings and errors provide call-site context aiding root cause analysis.

---

## Integrating with External Monitoring Systems

### Containerized Deployment

When deploying via Docker or Docker Compose, you can leverage Docker's native log drivers to forward WhoDB logs to:

- syslog
- Fluentd
- ELK Stack (Elasticsearch, Logstash, Kibana)
- Cloud logging services (AWS CloudWatch, GCP Stackdriver, Azure Monitor)

Configure logging drivers in your Docker daemon or compose file.

### Exporting Logs

For persistent log storage, mount your container's log directory or redirect logs to a file volume, then ingest with your observability stack.

### Application Metrics

Though primarily focused on logs, WhoDB exposes operational metrics (see the environment variable \`MetricsEnabled\` in the backend), which can integrate with Prometheus or other alerting platforms if extended.

Check the production deployment docs or source to enable and configure metrics collection.

---

## Key Metrics to Monitor

While detailed metrics collection requires additional configuration, here are key logical monitoring areas:

- **Server Health**: Uptime, CPU and memory usage
- **Request Rates**: Incoming API requests per second
- **Error Rates and Types**: HTTP 5xx errors or database connection failures
- **Plugin Activity**: Status and latency of database connectors
- **AI Integration Warnings**: Failures connecting to ChatGPT, Ollama, or Anthropic

Active monitoring of these metrics ensures responsiveness and stability.

---

## Troubleshooting Common Log Issues

### Missing Logs or Silent Failures

- Confirm WhoDB started and is running (check Docker logs or console output).
- Verify environment variables that control logging or metrics (\`ENVIRONMENT\`, \`MetricsEnabled\`).
- For containerized deployments, ensure proper volume mounts and stdout forwarding.

### Port Conflicts

If logs report failure to bind port 8080:

\`\`\`bash
lsof -i :8080
kill -9 <PID>
\`\`\`

Kill conflicting service before restarting WhoDB.

### AI Integration Logs

Warnings such as:

\`\`\`plaintext
WARN Failed to open browser: ...
WARN Unsupported platform. Please open the URL manually
\`\`\`

are non-critical and indicate environment limitations.

Ensure required API keys are properly configured as per environment variable documentation.

### Frontend Build Missing Errors

Errors about missing \`build/\` indicate frontend assets are not embedded correctly:

- Run frontend build
- Copy the build folder to backend

See [BUILD_AND_RUN.md](./BUILD_AND_RUN.md) for detailed instructions.

---

## Best Practices for Monitoring WhoDB

- **Leverage Docker logging drivers or a centralized logging solution** to collect, search, and alert on WhoDB logs.
- **Enable environment-based log level adjustments** where possible, especially for debugging production issues.
- **Regularly review logs post-deployment** to detect anomalies early.
- **Setup metric collection and alerting** for critical system and integration failures.
- **Maintain a clean shutdown and restart procedure** to avoid resource leaks, visible in logs.

---

## Additional Resources

- [Build and Run Guide](./BUILD_AND_RUN.md): For deployment and build instructions
- [Environment Variables & Third-Party Integrations](./deployment/prod_deployment/env_config): Configuring logging, metrics, and AI providers
- [Troubleshooting Common Issues](./getting-started/troubleshooting/troubleshooting-common-issues): Common operational problems and resolutions
- [System Architecture Overview](./concepts/architecture-overview/system-architecture): Understanding modular components generating logs
- [Monitoring and Logging](./deployment/operationalization/monitoring_logging): For related monitoring concepts

---

Keeping your WhoDB deployment well-monitored and logged is pivotal to operational excellence. Use this guide to establish a robust observability foundation that empowers efficient troubleshooting, system insight, and seamless production performance.
`;export{n as default};
