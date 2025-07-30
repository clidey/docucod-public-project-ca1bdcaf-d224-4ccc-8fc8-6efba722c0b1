const e=`---
title: "System Architecture Overview"
description: "Explore a visual breakdown of WhoDB's architecture, highlighting the separation of frontend and backend, plugin-based database support, AI integration points, and data flow. Understand how user requests travel from the UI to the database and how AI conversations are processed. Includes a Mermaid diagram for clarity."
---

# System Architecture Overview

## Unlocking the Power of WhoDB’s Architecture

Welcome to the foundational layer of WhoDB. This page offers you a clear, visual understanding of how the system is designed to seamlessly connect your data, empower interactive exploration, and integrate intelligent AI capabilities. Whether you're a database administrator, data analyst, or developer, grasping the architecture helps you leverage WhoDB’s full potential.


---

## What You Will Learn Here

- How WhoDB's frontend and backend components collaborate.
- The plugin-based approach to supporting multiple database types.
- Where AI integrations fit within the system.
- The flow of data and requests from user interface to database and back.


---

## System Architecture at a Glance

At its core, WhoDB separates concerns clearly between **Frontend**, **Backend**, and **Database plugins**, enhanced by AI processing components. This modular design fuels flexibility, extensibility, and high performance.


### Key Components
- **Frontend:** User interface powered by a modern web framework supporting hot-reloading and vibrant UX.
- **Backend:** Written in Go, handling business logic, API serving, and plugin orchestration.
- **Database Plugins:** Dynamic modules that allow WhoDB to support a broad spectrum of SQL, NoSQL, and cloud databases in a unified way.
- **AI Modules:** Interfaces that enable conversational AI queries and chat, integrating external AI models seamlessly.


\`\`\`mermaid
flowchart TD
  %% User Interaction
  UI["Frontend UI\\n(React, Vite)"] -->|HTTP/GraphQL Requests| Backend["Backend Server\\n(Go + Chi Router)"]

  %% Backend Plugin Architecture
  Backend -->|Plugin Calls| DBPlugins["Database Plugin Engine"]
  subgraph "Database Plugins"
    SQLPlugin["SQL Database Plugins"]
    NoSQLPlugin["NoSQL Database Plugins"]
    CloudPlugin["Cloud Database Plugins"]
  end
  DBPlugins --> SQLPlugin
  DBPlugins --> NoSQLPlugin
  DBPlugins --> CloudPlugin

  %% Backend to Actual Databases
  SQLPlugin -->|SQL Queries| SQLDBs["SQL Databases\\n(Postgres, MySQL, etc.)"]
  NoSQLPlugin -->|NoSQL Queries| NoSQLDBs["NoSQL Databases\\n(MongoDB, Redis, etc.)"]
  CloudPlugin -->|Cloud APIs| CloudDBs["Cloud Databases/Aggregators"]

  %% AI Integration
  UI -->|AI Chat Requests| AIModule["Conversational AI Module"]
  Backend --> AIModule
  AIModule -->|AI Model API Calls| ExternalAI["External AI Models\\n(OpenAI, Anthropic, Ollama)"]

  %% Data and Response
  SQLDBs -->|Query Results| SQLPlugin
  NoSQLDBs -->|Query Results| NoSQLPlugin
  CloudDBs -->|Query Results| CloudPlugin
  DBPlugins -->|Processed Results| Backend
  AIModule -->|Chat Responses| UI
  Backend -->|API Responses| UI

  %% Legend
  classDef component fill:#f9f9f9,stroke:#333,stroke-width:1px;
  class UI,Backend,DBPlugins,AIModule,ExternalAI,SQLPlugin,NoSQLPlugin,CloudPlugin,SQLDBs,NoSQLDBs,CloudDBs component;
\`\`\`


---

## How It Works: User Request Flow

1. **User Interaction:** You start by interacting with the frontend — whether querying data, editing schema, or chatting with the AI assistant.

2. **API Handling:** The frontend sends structured GraphQL or REST requests to the backend server running on Go (via HTTP). The backend routes requests through a powerful router setup with robust middleware for security, throttling, and logging.

3. **Plugin Invocation:** The backend delegates database operations to the appropriate plugin based on the connected database type. This plugin abstracts the communication details so you experience a consistent interface, regardless of whether your data is in PostgreSQL, MongoDB, or cloud storage.

4. **Data Access:** Plugins translate queries and commands into native database calls. Responses are collected and normalized.

5. **AI Processing:** For conversational AI queries, the backend coordinates with AI modules, which send requests to external models, process responses, and integrate insights back into the interface.

6. **Response Delivery:** Processed results or chat messages flow back through the backend to the frontend, where you see live updates, data visualizations, or chat replies instantly.


---

## Benefits of This Architecture

- **Separation of Concerns:** Frontend and backend evolve independently but communicate seamlessly.
- **Extensibility:** Easily add support for new databases via plugins — no core changes needed.
- **AI Integration:** AI features are modular and encapsulated, enabling flexible upgrades.
- **Robustness:** Middleware and structured routing secure and throttle requests effectively.
- **Developer-Friendly:** Hot-reload frontend and clear backend logs support productive development workflows.


---

## Real-World Scenario

Imagine you want to analyze user behavior from a PostgreSQL database while chatting with an AI assistant to get insights.

- You launch WhoDB's UI and connect your PostgreSQL database.
- Through the UI, you run an SQL query that triggers a backend request.
- The backend passes this request to the SQL plugin, which executes the query and returns results.
- Simultaneously, you ask the AI assistant questions about trends.
- The backend routes the chat input to AI modules that communicate with OpenAI’s API.
- Responses from both the database and AI are displayed promptly in your UI.

This seamless interaction across diverse systems empowers faster, smarter data-driven decisions.


---

## Getting Deeper: Related Documentation

- [Core Concepts and Terminology](/overview/architecture-concepts-group/core-concepts-and-terminology) — Understand the fundamental building blocks.
- [Plugin Engine & Database Integration](/concepts/architecture-overview/plugin-engine) — Learn how plugins work in detail.
- [Conversational AI Integration](/concepts/integration-patterns/ai-integration) — Explore AI workflows and integrations.
- [Request Lifecycle & Data Flow](/concepts/architecture-overview/data-flow) — Dive into the end-to-end data processing.


---

## Practical Tips

- When developing or debugging, leverage the backend logs and frontend hot-reload features for rapid feedback.
- Customize plugin behavior by extending or configuring database drivers if you operate complex environments.
- Monitor AI API usage and tokens carefully to manage costs and performance.


---

## Troubleshooting Common Issues

- **Frontend not loading:** Verify that the backend embeds the built frontend under \`/build\` and that static file serving is enabled.
- **API requests failing:** Confirm the backend server is running and accessible at the expected port.
- **Plugin errors connecting to databases:** Check plugin configurations and credentials.
- **AI chat responses delayed or failing:** Ensure API keys are set correctly and external AI services are reachable.


---

## Next Steps: Explore How to Connect Your Database

Move forward by exploring how to [connect your database](/guides/essential-workflows/connecting-to-your-database) to get up and running, or dive into how to [query your data with AI chat](/guides/ai-and-natural-language/conversational-queries-and-ai-models) to unlock conversational insights.


---

## Summary

This page lays out the modular, plugin-driven architecture of WhoDB, emphasizing the clear division between frontend, backend, plugins, and AI components. It helps you visualize how data flows from UI to databases and back, enabling rich interaction and extensibility.



---

© 2025 Clidey, Inc. All rights reserved.

---

For detailed build, run, and deployment instructions, refer to the [Build and Run Guide](../../BUILD_AND_RUN.md).`;export{e as default};
