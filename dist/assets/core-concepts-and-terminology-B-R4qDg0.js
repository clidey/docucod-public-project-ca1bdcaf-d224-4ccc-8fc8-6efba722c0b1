const e=`---
title: "Core Concepts and Terminology"
description: "Defines and explains foundational terms used in WhoDB, including Storage Units, Plugins, AI Models, Scratchpad, Community/Enterprise Editions, and Database Profiles. This conceptual map is critical for understanding documentation and product workflows."
---

# Core Concepts and Terminology

Understanding WhoDB’s architecture and workflows starts with a clear grasp of its foundational terms and components. This page defines and explains critical concepts such as Storage Units, Plugins, AI Models, Scratchpad, Editions, and Database Profiles — essential building blocks for effective use and interpretation of WhoDB’s capabilities.

---

## Storage Units

Storage Units are the fundamental logical containers within WhoDB that represent your databases. They abstract the underlying database connections, allowing WhoDB to manage multiple and diverse database types uniformly.

- **What They Are:** A Storage Unit is essentially a connected database instance or schema that you can explore and query.
- **Why They Matter:** They enable users to view, manage, and query heterogeneous databases without needing to switch tools or configurations.

**Example:** A PostgreSQL cluster and a SQLite file can each be a separate Storage Unit, accessible via WhoDB’s interface simultaneously.


## Plugins

Plugins are modular components that provide WhoDB the ability to interact with different database technologies.

- **Definition:** Each Plugin encapsulates the logic needed to connect, query, and manage a particular database type.
- **Key Role:** They power WhoDB’s extensive database support by translating generic commands into database-specific operations.
- **Core Plugins Include:**
  - PostgreSQL
  - MySQL / MariaDB
  - SQLite3
  - MongoDB
  - Redis
  - Elasticsearch
  - ClickHouse

- **Enterprise Edition:** May include additional or enhanced plugins for advanced features.


## AI Models

WhoDB integrates conversational AI to augment database exploration and querying.

- **AI Models Represent:** The language and reasoning engines that parse natural language inputs into executable queries or provide intelligent insights.
- **Examples of Supported Models:**
  - Ollama (local/private LLM)
  - ChatGPT (OpenAI-powered conversational AI)
  - Anthropic
  - OpenAI-Compatible models

- **Purpose:** Allow users to interact naturally with their data using plain English instead of complex SQL or commands.


## Scratchpad

The Scratchpad is an interactive workspace within WhoDB for composing, experimenting with, and executing queries or notes.

- **What It Is:** A flexible interface component where users write raw SQL, test AI-generated queries, or keep query snippets.
- **How It Helps:** It speeds up analytical workflows by enabling quick iteration and combination of manual and AI-assisted querying.


## Community Edition (CE) vs Enterprise Edition (EE)

WhoDB is available in two primary editions, each targeting different user needs.

| Feature                | Community Edition (CE)                      | Enterprise Edition (EE)                        |
|------------------------|--------------------------------------------|-----------------------------------------------|
| Plugins                | Full open-source plugin set                 | Includes additional enterprise-grade plugins  |
| AI Integrations        | Supported but without advanced enterprise features | Enhanced AI, security, and scalability features |
| License                | Apache 2.0 Open Source                      | Commercial license with premium support       |
| Intended Users         | Individuals, small teams, open-source advocates | Enterprises needing advanced control and support |

**Note:** EE plugins are automatically initialized during engine setup if building with the \`ee\` tag.


## Database Profiles

Database Profiles are saved authentication and connection configurations that WhoDB uses to simplify access.

- **What They Include:** Hostname, username, database name, port, passwords, and advanced custom settings.
- **Profiles vs Ad-hoc Connections:** Profiles enable users to quickly switch between frequently used databases without re-entering credentials.
- **IsProfile Flag:** Indicates if a set of credentials is a predefined profile or a one-time connection.

**Profiles Management:**
Profiles can be loaded from environment variables or configuration files and appear in login flows for easy selection.


---

## How These Concepts Interrelate

1. **Plugins provide the mechanism to connect to Storage Units** representing actual databases.
2. **Database Profiles configure those connections** with the necessary credentials.
3. **Users interact with data stored in Storage Units** via WhoDB’s UI, enhanced by AI Models for conversational query capabilities.
4. **The Scratchpad serves as the personal workspace** combining manual queries and AI-guided explorations.
5. **Edition determines the available features and plugins,** influencing what databases and AI capabilities users can access.


---

## Practical Tips

- When connecting to new databases, consider creating and saving a Database Profile for efficient management.
- Use the Scratchpad to test AI-generated queries before running them on live datasets.
- Familiarize yourself with which Plugins correspond to your database types to understand possible feature limitations or advantages.
- Evaluate whether the Community or Enterprise Edition best suits your needs, especially if you require enhanced plugins or support.


---

## Troubleshooting Common Conceptual Issues

<AccordionGroup title="Common User Questions About Core Concepts">
<Accordion title="Why can’t I see my database in WhoDB after adding it?">
Check that the correct Plugin supports your database type and that the corresponding Storage Unit is properly configured with valid Credentials or Profiles.
</Accordion>
<Accordion title="How do AI models integrate with my database queries?">
AI Models interpret your natural language inputs and translate them into SQL or database commands, enhancing your query efficiency and reducing the need for deep SQL knowledge.
</Accordion>
<Accordion title="What’s the difference between a Scratchpad query and a saved Profile?">
A Scratchpad query is a temporary or working query you can execute or modify anytime, whereas a Profile saves connection details for repeated database access.
</Accordion>
</AccordionGroup>


---

For a deeper understanding of the system architecture, data flow, and plugin integrations, please explore the [System Architecture Overview](/overview/architecture-concepts-group/system-architecture-overview) and [Plugin Engine & Database Integration](/concepts/architecture-overview/plugin-engine) documentation. To get hands-on quickly, use the [Connecting to Your Database](/guides/essential-workflows/connecting-to-your-database) guide.


---

*Ready to explore more?* Check out the next conceptual deep dive on [Security Model & Authentication](/concepts/security-scalability/security-auth) to understand how credentials and authorization protect your data in WhoDB.

---`;export{e as default};
