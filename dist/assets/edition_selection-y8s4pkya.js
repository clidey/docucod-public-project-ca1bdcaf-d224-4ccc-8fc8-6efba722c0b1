const e=`---
title: "Choosing Community vs. Enterprise Edition"
description: "Decide which version of WhoDB to deploy by comparing features, deployment mechanics, and licensing differences. This page outlines edition-specific build steps and how to switch between Community and Enterprise deployments, ensuring users choose the right foundation for their needs."
---

# Choosing Community vs. Enterprise Edition

Selecting the appropriate edition of WhoDB is a critical step that shapes your deployment experience, capabilities, and maintenance approach. This guide helps you understand the fundamental differences between the Community Edition (CE) and Enterprise Edition (EE), clarifies build and deployment flow distinctions, and provides actionable steps to switch between editions, ensuring your deployment foundation matches your organizational needs.

---

## 1. Overview of Editions

WhoDB offers two main editions, each tailored to distinct user groups and deployment scenarios:

| Feature Aspect             | Community Edition (CE)                            | Enterprise Edition (EE)                           |
|----------------------------|-------------------------------------------------|-------------------------------------------------|
| **Target Users**            | Individual developers, small teams, open source enthusiasts | Organizations requiring enhanced functionality, scalability, and enterprise integrations |
| **Feature Set**             | Core database support including PostgreSQL, MySQL, SQLite3, MongoDB, Redis, Elasticsearch, ClickHouse | All CE features plus advanced plugins, enhanced authentication, compliance features, and enterprise-grade support |
| **Licensing**               | Open source under Apache 2.0                      | Commercial license with additional legal terms and support contracts |
| **Extensibility**           | Plugin architecture with core database adapters  | Extended plugin ecosystem including proprietary enterprise plugins and middleware |
| **Support & Maintenance**  | Community-driven with public issue tracking      | Dedicated support, patches, and SLAs             |

<Tip>
Choosing between CE and EE depends on your specific requirements around features, scalability, support, and licensing. CE is ideal for cost-sensitive or community-powered projects, whereas EE empowers enterprise deployments with additional capabilities and assurances.
</Tip>

## 2. Feature Differences in Detail

### Core Plugin Availability
Community Edition provides a solid foundation supporting the following databases through official plugins:

- PostgreSQL
- MySQL and MariaDB
- SQLite3
- MongoDB
- Redis
- Elasticsearch
- ClickHouse (Community variant)

Enterprise Edition builds on this foundation by registering additional proprietary plugins during engine initialization, enhancing compatibility and functionality.

### Authentication and Security Enhancements
EE offers advanced authentication schemes and tighter security integrations beyond the basic credential mechanisms in CE, aligning with enterprise compliance and governance standards.

### AI and Conversational Query Capabilities
Both editions embed AI-augmented data conversational capabilities, but EE may include support for specialized AI providers or models that require licensing.

### Deployment and Observability
Enterprise Edition includes middleware components supporting observability, monitoring, and integration with enterprise operational toolchains.

<Note>
The above feature distinctions are enforced both at build time and run time by selecting the appropriate edition flag.
</Note>

## 3. How to Build and Switch Editions

WhoDB's source supports dual edition build paths. The backend binary and frontend artifacts can be built specifically for CE or EE.

### 3.1 Backend Build Steps

You can build the backend for either edition using the provided script:

\`\`\`bash
./scripts/build-backend.sh [ce|ee]
\`\`\`

- Running \`./scripts/build-backend.sh ce\` generates the Community Edition backend binary (\`whodb\`).
- Running \`./scripts/build-backend.sh ee\` generates the Enterprise Edition backend binary (\`whodb-ee\`).

This script performs the following steps:

1. Generates GraphQL code tailored for the selected edition.
2. Downloads necessary Go dependencies.
3. (For EE) Downloads additional Enterprise dependencies.
4. Runs \`go generate\` if necessary.
5. Compiles the binary with edition-specific build flags.

<Tip>
Building EE requires access to the \`ee\` directory containing proprietary code, which must be present in the project root.
</Tip>

### 3.2 Frontend Edition Configuration

The frontend selects the edition via an environment variable \`VITE_BUILD_EDITION\`. It defaults to \`ce\`.

\`\`\`typescript
export const BUILD_EDITION = (import.meta.env.VITE_BUILD_EDITION as 'ce' | 'ee') || 'ce';
\`\`\`

You can switch the UI edition by setting this variable before building the frontend:

\`\`\`bash
VITE_BUILD_EDITION=ee pnpm run build
\`\`\`

The UI will then load edition-specific GraphQL schema and features appropriately.

### 3.3 Runtime Edition Selection

The backend binary built for a specific edition will register plugins and enable features accordingly during engine initialization.

In the source code, enterprise plugins are registered only when the EE initialization function is set and invoked:

\`\`\`go
if initEE != nil {
    initEE(MainEngine)
}
\`\`\`

If this function is not set (such as in CE builds), EE-only functionality is omitted.

<Info>
Be sure to deploy the matching backend and frontend editions to avoid feature mismatch issues.
</Info>

## 4. Licensing and Compliance Implications

- CE is offered under the permissive Apache License 2.0, allowing free use, distribution, and modification.
- EE typically requires a commercial license agreement; consult your legal counsel before deploying EE in production.

Adherence to licensing is crucial to maintain compliance and gain official support for EE.

## 5. Troubleshooting Edition Switching

<Tip>
If you encounter issues where EE features do not appear after building:

- Verify the backend binary is built with the \`ee\` tag.
- Confirm the frontend environment variable \`VITE_BUILD_EDITION=ee\` is set.
- Ensure the \`ee\` directory is present and contains the necessary enterprise source.
- Check logs during startup for plugin registration errors.
</Tip>

## 6. Summary and Recommendations

| Scenario                   | Recommendation                             |
|----------------------------|--------------------------------------------|
| Small projects, open source exploration | Use Community Edition for simplicity and cost savings |
| Teams needing enterprise plugins, advanced auth | Choose Enterprise Edition and follow EE build instructions |
| Migrating or testing EE | Build both editions side-by-side and test integration before deployment |

---

## Appendix: Build Script Insights

The \`build-backend.sh\` script orchestrates the build process with these key phases:

- **GraphQL Code Generation:** Ensures schema matches edition
- **Dependency Management:** Downloads Go modules for core and EE
- **Code Generation:** Runs \`go generate\` on Go files
- **Binary Compilation:** Uses \`-tags ee\` for Enterprise builds; binary named \`whodb-ee\`
- **Version Metadata:** Incorporates Git version info into build

This careful separation enforces edition integrity and enables seamless switching.

---

## Additional Resources

For deeper deployment guidance, see:

- [Deploying with Docker & Docker Compose](https://whodb.com/docs/deployment/prod_deployment/docker_quickstart)
- [Environment Variables & Third-Party Integrations](https://whodb.com/docs/deployment/prod_deployment/env_config)
- [Build & Run Guide (GitHub)](https://github.com/clidey/whodb)
- [Plugin Engine Architecture](https://whodb.com/docs/concepts/architecture-overview/plugin-engine)


## Related Documentation

- [Getting Started: Installation Methods](https://whodb.com/docs/getting-started/setup-requirements/installation-methods)
- [System Architecture Overview](https://whodb.com/docs/overview/architecture-concepts-group/system-architecture-overview)
- [Security & Authentication Essentials](https://whodb.com/docs/guides/best-practices-and-optimization/security-and-authentication)

---

Deploy with confidence by accurately aligning your choice of Community or Enterprise Edition with your project goals and operational demands.`;export{e as default};
