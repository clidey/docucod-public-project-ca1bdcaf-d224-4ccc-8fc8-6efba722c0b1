import{u as a,a as n,k as d}from"./index-CxwdZWLc.js";function t(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...i.components},{Check:r}=e;return r||o("Check"),n(d,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "System Architecture Overview"
description: "Discover how WhoDB is architected for agility, speed, and extensibility. Learn about the separation of frontend and backend services, communication patterns, and the embedding of static frontend assets for seamless deployment. This overview highlights the modular nature of the system and its ability to support both Community and Enterprise Editions with minimal friction."`}),`
`,n(e.h1,{children:"System Architecture Overview"}),`
`,n(e.p,{children:"Discover how WhoDB is architected to deliver a fast, extensible, and agile database management experience through modular separation of frontend and backend components, seamless integration of static assets, and flexible support for Community and Enterprise Editions."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Introduction"}),`
`,n(e.p,{children:"WhoDB is designed with a clear focus on user productivity, extensibility, and ease of deployment. This system architecture overview presents how WhoDB separates concerns between the interface and server logic, enabling rapid iteration and scalability. Key architectural decisions emphasize embedding frontend assets for smooth deployment and maintaining a modular backend that supports multiple database types alongside integrated AI-driven features."}),`
`,n(e.p,{children:"Whether you’re installing WhoDB for evaluation or deploying it in production, understanding this architecture will help you configure, troubleshoot, and extend the platform effectively."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Core Architectural Components"}),`
`,n(e.h3,{children:"Frontend (UI Client)"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Role & Responsibilities:"}),`
The frontend is a React-based single-page application (SPA) built with TypeScript, responsible for providing an intuitive and responsive user interface. It handles user interactions, renders complex database visualizations, facilitates conversational AI queries, and manages inline data editing.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Technology Stack:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"React with TypeScript"}),`
`,n(e.li,{children:"Vite for building and development"}),`
`,n(e.li,{children:"TailwindCSS for theming and styling"}),`
`,n(e.li,{children:"Apollo GraphQL Client for API communication"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Static Asset Embedding:"}),`
Once built, the frontend static files are embedded into the backend server binary. This means the server serves the UI directly, simplifying deployment with no separate frontend server needed.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Dynamic Edition Support:"}),`
The frontend integrates dynamic import strategies and build-time environment variables to support both Community Edition (CE) and Enterprise Edition (EE) features from a single codebase, enabling seamless transitions between editions without disrupting user experience.`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Backend (API Server)"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Role & Responsibilities:"}),`
The backend manages database connections, handles API requests from the frontend, executes AI integrations, and provides a plugin architecture for database extensibility. It parses and orchestrates queries, manages security, and consolidates data for UI consumption.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Technology Stack:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Go language backend for performance"}),`
`,n(e.li,{children:"GraphQL API to provide a unified interface for frontend queries"}),`
`,n(e.li,{children:"Embedded frontend assets to serve UI"}),`
`,n(e.li,{children:"Plugin mechanisms for community and enterprise database connectors"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Edition Flexibility:"}),`
Supports both CE and EE through build tags and modular code separation, allowing features such as advanced database connectors and enhanced security to be included in EE with minimal friction.`]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"User Request Flow"}),`
`,n(e.p,{children:"Understanding the path of a user request clarifies how the components interact to provide a cohesive experience."}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"User Interaction:"}),`
Users interact with the React frontend served by the backend server.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"GraphQL Queries:"}),`
The frontend sends GraphQL queries or mutations to the backend API for database metadata, data retrieval, updates, or AI-enhanced requests.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Backend Processing:"}),`
The backend validates and processes the requests, delegates to database plugins or AI integrations as needed.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Data Aggregation:"}),`
Results are marshaled into GraphQL responses and sent back to the frontend.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"UI Rendering:"}),`
The frontend updates the interface, showing updated data visualizations, query results, or AI conversational outputs.`]}),`
`]}),`
`]}),`
`,n(e.p,{children:"This cycle happens rapidly, enabling smooth user workflows from schema visualization to conversational querying."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Modularity & Extensibility"}),`
`,n(e.p,{children:"WhoDB's architecture is designed for growth:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Plugin Engine:"}),`
The backend supports plugin-based database connectors, allowing future databases to be added with minimal core changes. Plugins handle the nuances of each database’s query dialects and schema structures.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"AI Integration Points:"}),`
AI providers like Ollama, OpenAI, and Anthropic are integrated through modular interfaces, allowing users to select models and providers dynamically.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Frontend Component Loading:"}),`
EE-exclusive components and features are dynamically loaded through controlled imports, maintaining a lean CE footprint.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Theme and UI Extensions:"}),`
The frontend supports theme customization and component extension points, enabling organizations to tailor visuals and UX flow.`]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Deployment and Build Strategy"}),`
`,n(e.h3,{children:"Frontend Build Embedding"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Build Process:"}),`
The frontend React app is built using Vite into static assets.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Embedding:"}),`
These static files are copied into the backend source and embedded using Go’s embed functionality during the backend build process.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Result:"}),`
The final backend binary acts as a standalone executable, not requiring additional web server configuration.`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Separate Builds for CE and EE"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Environment variables (",n(e.code,{children:"VITE_BUILD_EDITION"}),") govern feature sets."]}),`
`,n(e.li,{children:"GraphQL type generation adapts dynamically to the edition."}),`
`,n(e.li,{children:["Backend uses Go build tags (",n(e.code,{children:"ee"}),") for EE."]}),`
`]}),`
`,n(e.h3,{children:"Docker Support"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Dockerfiles support both CE and EE with entrypoint scripts that serve the embedded UI and backend API."}),`
`,n(e.li,{children:"Multi-architecture builds and Docker Compose setups allow easy deployment."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Visual Diagram"}),`
`,n(e.pre,{children:n(e.code,{className:"language-mermaid",children:`flowchart TD
  subgraph Frontend
    UI["React UI (SPA)"]
    UI -->|GraphQL Requests| API["Backend GraphQL API"]
  end

  subgraph Backend
    API --> DBPlugins["Database Plugins (e.g., MySQL, PostgreSQL, MongoDB)"]
    API --> AIIntegration["AI Integration Module (Ollama, OpenAI, Anthropic)"]
    API --> EmbedFrontend["Embedded Frontend Static Assets"]
  end

  DBPlugins --> DB["Databases"]
  AIIntegration --> LLM["Language Models"]

  subgraph Deployment
    Backend["Go Backend Server Binary"]
    Backend -->|Serves| UI
  end

  %% Relationships
  API -.-> Backend
`})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Practical Tips for Users"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Single Binary Convenience:"}),`
Run the backend executable after building or installing, which serves both your API and UI.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Seamless Edition Switching:"}),`
Choose CE or EE at build time without needing separate UI deployments.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Plugin Extensibility:"}),`
When connecting new databases, understand the plugin approach that isolates connector logic.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"AI Features:"}),`
AI-powered features are integrated as services behind the GraphQL API, allowing expanded capabilities without frontend complexity.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Monitoring:"}),`
Use backend logs to trace request handling, especially when diagnosing connection or query issues.`]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Troubleshooting Common Scenarios"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Frontend Not Loading:"}),`
Verify the backend binary includes the embedded frontend assets. If missing, rebuild frontend, copy assets, then rebuild backend.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Edition Feature Mismatch:"}),`
Confirm your build environment variable `,n(e.code,{children:"VITE_BUILD_EDITION"})," matches the backend build tag (",n(e.code,{children:"ee"})," for Enterprise), aligning frontend and backend."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Database Plugins Failing:"}),`
Check plugin configurations and database credentials. Refer to plugin documentation per specific database.`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"GraphQL Schema Mismatches:"}),`
Always regenerate GraphQL types after backend schema changes to avoid frontend type errors.`]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Further Reading"}),`
`,n(e.p,{children:"Explore related documentation for deeper understanding and workflows:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"../guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})}),`
`,n(e.li,{children:n(e.a,{href:"../overview/architecture-concepts-group/core-concepts-and-terminology",children:"Core Concepts and Terminology"})}),`
`,n(e.li,{children:n(e.a,{href:"./plugin-engine",children:"Plugin Engine & Database Integration"})}),`
`,n(e.li,{children:n(e.a,{href:"./data-flow",children:"Request Lifecycle & Data Flow"})}),`
`,n(e.li,{children:n(e.a,{href:"../concepts/integration-patterns/ai-integration",children:"Conversational AI Integration"})}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Summary"}),`
`,n(e.p,{children:"WhoDB’s system architecture balances modularity and simplicity by separating frontend UI and backend server while embedding static assets for straightforward deployment. The architecture’s extensibility supports diverse databases, flexible AI integration, and edition-specific features with minimal overhead, enabling users to manage data efficiently and scale with evolving needs."}),`
`,n(e.hr,{}),`
`,n(r,{children:n(e.p,{children:"For a successful start, ensure you follow the prescribed build and deployment workflow: build frontend → embed → build backend. Synchronize edition settings between backend and frontend for a seamless experience."})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Source Code Reference"}),`
`,n(e.p,{children:"You can explore the main backend build and frontend configuration files at:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://github.com/clidey/whodb/blob/main/core/Dockerfile",children:"core/Dockerfile (build process)"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/clidey/whodb/blob/main/frontend/vite.config.ts",children:"frontend/vite.config.ts (frontend build config)"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/clidey/whodb/blob/main/BUILD_AND_RUN.md",children:"Build and Run Guide"})}),`
`]}),`
`,n(e.p,{children:"These files anchor the architectural design in practical implementation."})]})}function s(i={}){const{wrapper:e}={...a(),...i.components};return e?n(e,{...i,children:n(t,{...i})}):t(i)}function o(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{s as default};
