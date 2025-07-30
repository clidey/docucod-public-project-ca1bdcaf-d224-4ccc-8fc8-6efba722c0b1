import{u as i,a as n,k as a}from"./index-CxwdZWLc.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n(a,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "System Architecture Overview"
description: "Explore a visual breakdown of WhoDB's architecture, highlighting the separation of frontend and backend, plugin-based database support, AI integration points, and data flow. Understand how user requests travel from the UI to the database and how AI conversations are processed. Includes a Mermaid diagram for clarity."`}),`
`,n(e.h1,{children:"System Architecture Overview"}),`
`,n(e.h2,{children:"Unlocking the Power of WhoDB’s Architecture"}),`
`,n(e.p,{children:"Welcome to the foundational layer of WhoDB. This page offers you a clear, visual understanding of how the system is designed to seamlessly connect your data, empower interactive exploration, and integrate intelligent AI capabilities. Whether you're a database administrator, data analyst, or developer, grasping the architecture helps you leverage WhoDB’s full potential."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"What You Will Learn Here"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"How WhoDB's frontend and backend components collaborate."}),`
`,n(e.li,{children:"The plugin-based approach to supporting multiple database types."}),`
`,n(e.li,{children:"Where AI integrations fit within the system."}),`
`,n(e.li,{children:"The flow of data and requests from user interface to database and back."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"System Architecture at a Glance"}),`
`,n(e.p,{children:["At its core, WhoDB separates concerns clearly between ",n(e.strong,{children:"Frontend"}),", ",n(e.strong,{children:"Backend"}),", and ",n(e.strong,{children:"Database plugins"}),", enhanced by AI processing components. This modular design fuels flexibility, extensibility, and high performance."]}),`
`,n(e.h3,{children:"Key Components"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Frontend:"})," User interface powered by a modern web framework supporting hot-reloading and vibrant UX."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Backend:"})," Written in Go, handling business logic, API serving, and plugin orchestration."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Database Plugins:"})," Dynamic modules that allow WhoDB to support a broad spectrum of SQL, NoSQL, and cloud databases in a unified way."]}),`
`,n(e.li,{children:[n(e.strong,{children:"AI Modules:"})," Interfaces that enable conversational AI queries and chat, integrating external AI models seamlessly."]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-mermaid",children:`flowchart TD
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
`})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"How It Works: User Request Flow"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"User Interaction:"})," You start by interacting with the frontend — whether querying data, editing schema, or chatting with the AI assistant."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"API Handling:"})," The frontend sends structured GraphQL or REST requests to the backend server running on Go (via HTTP). The backend routes requests through a powerful router setup with robust middleware for security, throttling, and logging."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Plugin Invocation:"})," The backend delegates database operations to the appropriate plugin based on the connected database type. This plugin abstracts the communication details so you experience a consistent interface, regardless of whether your data is in PostgreSQL, MongoDB, or cloud storage."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Data Access:"})," Plugins translate queries and commands into native database calls. Responses are collected and normalized."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"AI Processing:"})," For conversational AI queries, the backend coordinates with AI modules, which send requests to external models, process responses, and integrate insights back into the interface."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Response Delivery:"})," Processed results or chat messages flow back through the backend to the frontend, where you see live updates, data visualizations, or chat replies instantly."]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Benefits of This Architecture"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Separation of Concerns:"})," Frontend and backend evolve independently but communicate seamlessly."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Extensibility:"})," Easily add support for new databases via plugins — no core changes needed."]}),`
`,n(e.li,{children:[n(e.strong,{children:"AI Integration:"})," AI features are modular and encapsulated, enabling flexible upgrades."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Robustness:"})," Middleware and structured routing secure and throttle requests effectively."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Developer-Friendly:"})," Hot-reload frontend and clear backend logs support productive development workflows."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Real-World Scenario"}),`
`,n(e.p,{children:"Imagine you want to analyze user behavior from a PostgreSQL database while chatting with an AI assistant to get insights."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"You launch WhoDB's UI and connect your PostgreSQL database."}),`
`,n(e.li,{children:"Through the UI, you run an SQL query that triggers a backend request."}),`
`,n(e.li,{children:"The backend passes this request to the SQL plugin, which executes the query and returns results."}),`
`,n(e.li,{children:"Simultaneously, you ask the AI assistant questions about trends."}),`
`,n(e.li,{children:"The backend routes the chat input to AI modules that communicate with OpenAI’s API."}),`
`,n(e.li,{children:"Responses from both the database and AI are displayed promptly in your UI."}),`
`]}),`
`,n(e.p,{children:"This seamless interaction across diverse systems empowers faster, smarter data-driven decisions."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Getting Deeper: Related Documentation"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.a,{href:"/overview/architecture-concepts-group/core-concepts-and-terminology",children:"Core Concepts and Terminology"})," — Understand the fundamental building blocks."]}),`
`,n(e.li,{children:[n(e.a,{href:"/concepts/architecture-overview/plugin-engine",children:"Plugin Engine & Database Integration"})," — Learn how plugins work in detail."]}),`
`,n(e.li,{children:[n(e.a,{href:"/concepts/integration-patterns/ai-integration",children:"Conversational AI Integration"})," — Explore AI workflows and integrations."]}),`
`,n(e.li,{children:[n(e.a,{href:"/concepts/architecture-overview/data-flow",children:"Request Lifecycle & Data Flow"})," — Dive into the end-to-end data processing."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Practical Tips"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"When developing or debugging, leverage the backend logs and frontend hot-reload features for rapid feedback."}),`
`,n(e.li,{children:"Customize plugin behavior by extending or configuring database drivers if you operate complex environments."}),`
`,n(e.li,{children:"Monitor AI API usage and tokens carefully to manage costs and performance."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Troubleshooting Common Issues"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Frontend not loading:"})," Verify that the backend embeds the built frontend under ",n(e.code,{children:"/build"})," and that static file serving is enabled."]}),`
`,n(e.li,{children:[n(e.strong,{children:"API requests failing:"})," Confirm the backend server is running and accessible at the expected port."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Plugin errors connecting to databases:"})," Check plugin configurations and credentials."]}),`
`,n(e.li,{children:[n(e.strong,{children:"AI chat responses delayed or failing:"})," Ensure API keys are set correctly and external AI services are reachable."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Next Steps: Explore How to Connect Your Database"}),`
`,n(e.p,{children:["Move forward by exploring how to ",n(e.a,{href:"/guides/essential-workflows/connecting-to-your-database",children:"connect your database"})," to get up and running, or dive into how to ",n(e.a,{href:"/guides/ai-and-natural-language/conversational-queries-and-ai-models",children:"query your data with AI chat"})," to unlock conversational insights."]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Summary"}),`
`,n(e.p,{children:"This page lays out the modular, plugin-driven architecture of WhoDB, emphasizing the clear division between frontend, backend, plugins, and AI components. It helps you visualize how data flows from UI to databases and back, enabling rich interaction and extensibility."}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"© 2025 Clidey, Inc. All rights reserved."}),`
`,n(e.hr,{}),`
`,n(e.p,{children:["For detailed build, run, and deployment instructions, refer to the ",n(e.a,{href:"../../BUILD_AND_RUN.md",children:"Build and Run Guide"}),"."]})]})}function s(r={}){const{wrapper:e}={...i(),...r.components};return e?n(e,{...r,children:n(t,{...r})}):t(r)}export{s as default};
