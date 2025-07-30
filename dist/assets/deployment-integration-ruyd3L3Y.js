import{u as c,a as e,k as h}from"./index-CxwdZWLc.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...i.components},{Check:t,Info:o,Note:l,Tip:d,Warning:a}=n;return t||r("Check"),o||r("Info"),l||r("Note"),d||r("Tip"),a||r("Warning"),e(h,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Deployment & Enterprise Integration Patterns"
description: "Get insights into how WhoDB is built for rapid deployment (via Docker, Compose), and how its plugin and modular approach supports integration with enterprise data sources, advanced authentication, and observability platforms."`}),`
`,e(n.h1,{children:"Deployment & Enterprise Integration Patterns"}),`
`,e(n.p,{children:"Welcome to the Deployment & Enterprise Integration Patterns guide for WhoDB. This documentation will help you understand how WhoDB is designed for rapid deployment and extensibility, particularly focusing on its Docker-based deployment, modular plugin architecture, and Enterprise Edition (EE) capabilities. Whether you're preparing for production deployment, integrating advanced authentication systems, or setting up observability tooling, this guide walks you through the concepts and workflows to make your experience smooth and scalable."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. Deployment Architecture Overview"}),`
`,e(n.p,{children:"WhoDB is architected to support both Community Edition (CE) and Enterprise Edition (EE) deployments with ease. The backend is written in Go, embedding the frontend assets for a streamlined self-contained server. This design simplifies deployment in containerized or cloud environments."}),`
`,e(n.p,{children:"The system supports:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Rapid startup and graceful shutdown:"})," With sensible defaults like a 30-second shutdown timeout, WhoDB ensures minimal downtime."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Environmental flexibility:"})," Environment variables control ports, edition selection, API gateway behaviors, and allowed origins for CORS."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Integrated GraphQL API with Playground:"})," In development mode, introspection and playground help rapid iteration and testing."]}),`
`]}),`
`,e(o,{children:e(n.p,{children:"The server supports HTTP/HTTPS with WebSocket transports for GraphQL, enabling real-time features like AI chat and schema updates."})}),`
`,e(n.h3,{children:"How Deployment Components Fit Together"}),`
`,e(n.pre,{children:e(n.code,{className:"language-mermaid",children:`flowchart TD
  subgraph Backend
    A[WhoDB Server] --> B[GraphQL API]
    A --> C[Static Frontend (Embedded Assets)]
    B --> D[Database Plugins]
    B --> E[Authentication Middleware]
  end

  subgraph Deployment
    F[Docker / Docker Compose] --> A
    G[Environment Variables] --> A
    H[Enterprise Plugins] -.-> A
  end

  subgraph Client
    I[User Browser] -->|HTTP/WS Requests| A
  end

  style Backend fill:#f3f7fa,stroke:#0366d6,stroke-width:1.5px
  style Deployment fill:#e8f0fe,stroke:#555,stroke-width:1.5px,stroke-dasharray: 5 5
  style Client fill:#daf0e4,stroke:#2a9d8f,stroke-width:1.5px
`})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"2. Rapid Deployment with Docker and Docker Compose"}),`
`,e(n.p,{children:"WhoDB supports containerized deployment for quick, reproducible, and scalable setups. The project provides Dockerfiles for both Community and Enterprise Editions."}),`
`,e(n.h3,{children:"Docker Images and Commands"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Community Edition (CE):"})," Use the default ",e(n.code,{children:"clidey/whodb"})," image."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Enterprise Edition (EE):"})," Use the enterprise-specific image, requiring access to EE modules."]}),`
`]}),`
`,e(n.h4,{children:"Starting with Docker"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`# Pull and run the Community Edition container
docker run -it -p 8080:8080 clidey/whodb
`})}),`
`,e(n.h4,{children:"Using Docker Compose"}),`
`,e(n.pre,{children:e(n.code,{className:"language-yaml",children:`version: "3.8"
services:
  whodb:
    image: clidey/whodb
    environment:
      - WHODB_OLLAMA_HOST=localhost
      - WHODB_OLLAMA_PORT=11434
      - WHODB_ANTHROPIC_API_KEY=your_key_here
      - WHODB_OPENAI_API_KEY=your_key_here
    ports:
      - "8080:8080"
    volumes:
      - ./data:/db  # optional for persisting local SQLite databases
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker-compose up
`})}),`
`,e(n.h3,{children:"Best Practices"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Persist local databases or configuration via volumes."}),`
`,e(n.li,{children:"Inject API keys and external service endpoints through environment variables for flexibility and security."}),`
`,e(n.li,{children:"Use multi-architecture Docker builds for compatibility across platforms."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"3. Modular Plugin Architecture and Enterprise Edition Integration"}),`
`,e(n.p,{children:"WhoDB’s backend is powered by a modular plugin engine that abstracts connections to heterogeneous databases into a unified interface. This engine supports a rich portfolio of database types including PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, and ClickHouse."}),`
`,e(n.h3,{children:"Plugin Management"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["The engine registers ",e(n.strong,{children:"Community Edition plugins"})," by default to support a wide range of common data sources."]}),`
`,e(n.li,{children:["When built with the ",e(n.strong,{children:["Enterprise Edition (",e(n.code,{children:"-tags ee"}),") flag"]}),", additional EE plugins and enterprise features are loaded dynamically."]}),`
`]}),`
`,e(d,{children:e(n.p,{children:"Enterprise Edition plugins enable advanced enterprise data sources, ports, and extended capabilities without modifying the core."})}),`
`,e(n.h3,{children:"EE Initialization Workflow"}),`
`,e(n.pre,{children:e(n.code,{className:"language-go",children:`// Simplified EE Initialization Example
func InitializeEngine() *engine.Engine {
    e := &engine.Engine{}

    // Register CE plugins
    e.RegistryPlugin(postgres.NewPostgresPlugin())
    e.RegistryPlugin(mysql.NewMySQLPlugin())
    // ... other CE plugins

    // Initialize EE plugins if EE build enabled
    if initEE != nil {
        initEE(e)
    }

    return e
}
`})}),`
`,e(n.p,{children:"This pattern allows the EE features to plug into the main engine only when the EE build flag is set, ensuring clear separation and modular extensibility."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"4. Advanced Authentication and Middleware Integration"}),`
`,e(n.p,{children:"WhoDB’s server middleware stack incorporates essential features for security, performance, and observability."}),`
`,e(n.h3,{children:"Middleware Highlights"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Throttle Backlog:"})," Controls request concurrency to protect backend stability."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Request ID & Real IP:"})," Enables tracing and correct client IP detection."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Logging and Recovery:"})," Captures request information and handles panics gracefully."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Timeouts:"})," Prevents requests from hanging indefinitely (default 30 seconds)."]}),`
`,e(n.li,{children:[e(n.strong,{children:"CORS Handling:"})," Configurable origins and headers support frontend integration and API access control."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Authentication Middleware:"})," Implements session validation and enforces user authentication for protected routes."]}),`
`]}),`
`,e(t,{children:e(n.p,{children:"Middleware ordering is critical; WhoDB ensures logging, recovery, and throttle happen before authentication to optimize performance and robustness."})}),`
`,e(n.h3,{children:"OAuth and Enterprise Authentication"}),`
`,e(n.p,{children:"Enterprise users benefit from plugin-based hooks that can extend authentication schemes, enabling integration with SSO, OAuth providers, or external identity services."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"5. Observability and Production Readiness"}),`
`,e(n.p,{children:"While WhoDB focuses on lightweight deployment, it supports common operational needs:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Logging:"})," Structured logs emit server startup, request processing, and error events, assisting in monitoring and alerting."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Graceful Shutdown:"})," Ensures resource cleanup and active request completion within configured timeouts."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Metrics (Pluggable):"})," The system can be extended to export Prometheus or other observability metrics by enabling configuration."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"6. Building and Running WhoDB in Enterprise and Production Contexts"}),`
`,e(n.p,{children:"This section complements the conceptual overview with practical build-and-run strategies."}),`
`,e(n.h3,{children:"Building Enterprise Edition"}),`
`,e(n.p,{children:"To build the EE backend with embedded frontend assets:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`# Build the frontend EE bundle first
cd frontend
pnpm run build:ee

# Copy frontend build into backend
cp -r ./dist ../core/build/

# Build backend with EE tag
cd ../core
go build -tags ee -o whodb-ee
`})}),`
`,e(n.h3,{children:"Running"}),`
`,e(n.p,{children:"Start the EE backend:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`./whodb-ee
`})}),`
`,e(n.p,{children:["Access the UI at ",e(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"})," by default."]}),`
`,e(n.h3,{children:"Environment Variables of Note"}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Variable"}),e(n.th,{children:"Purpose"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"PORT"})}),e(n.td,{children:"Override default backend port (default 8080)"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"ENVIRONMENT=dev"})}),e(n.td,{children:"Enables development features like GraphQL introspection"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_OLLAMA_HOST/PORT"})}),e(n.td,{children:"Configure Ollama AI integration endpoint"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_ANTHROPIC_API_KEY"})}),e(n.td,{children:"API key for Anthropic AI model use"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_OPENAI_API_KEY"})}),e(n.td,{children:"API key for OpenAI models"})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_EDITION=ee"})}),e(n.td,{children:"Explicitly request Enterprise Edition features"})]})]})]}),`
`,e(l,{children:e(n.p,{children:["When running in ",e(n.code,{children:"dev"})," mode, introspection and playground UI activate automatically for easier development."]})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"7. Troubleshooting Common Deployment Issues"}),`
`,e(n.h3,{children:"Problem: Server Fails to Start"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Check port availability (default 8080)."}),`
`,e(n.li,{children:["Confirm your environment variables, especially ",e(n.code,{children:"PORT"})," and edition flags."]}),`
`,e(n.li,{children:"Look into logs for fatal errors such as plugin registration failures."}),`
`]}),`
`,e(n.h3,{children:"Problem: GraphQL Playground Not Loading"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Ensure ",e(n.code,{children:"ENVIRONMENT=dev"})," is set."]}),`
`,e(n.li,{children:"Confirm CORS origins include your frontend URL."}),`
`]}),`
`,e(n.h3,{children:"Problem: Enterprise Plugins Not Loaded"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Verify the build command includes the ",e(n.code,{children:"-tags ee"})," flag."]}),`
`,e(n.li,{children:["Confirm the ",e(n.code,{children:"ee"})," directory and modules are present."]}),`
`,e(n.li,{children:"Run validation scripts if available to confirm EE environment."}),`
`]}),`
`,e(a,{children:e(n.p,{children:"Attempting to build or run EE features without proper configuration or licensing may result in non-functional plugins or runtime errors."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"8. Summary"}),`
`,e(n.p,{children:"WhoDB's deployment and integration design balances ease of use with powerful extensibility:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Container-first approach enables fast, reliable deployments."}),`
`,e(n.li,{children:"Modular plugin engine supports broad database and service connectivity."}),`
`,e(n.li,{children:"Enterprise Edition unlocks advanced data sources and authentication."}),`
`,e(n.li,{children:"Configurable middleware with built-in security and performance features."}),`
`]}),`
`,e(n.p,{children:"By understanding these patterns, you can confidently deploy, extend, and operate WhoDB at scale."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Additional Resources"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"./BUILD_AND_RUN.md",children:"WhoDB Build and Run Guide"})," — Practical build and deployment instructions including EE workflows."]}),`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/concepts/architecture-overview/system-architecture",children:"System Architecture Overview"})," — Understand core system components."]}),`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/concepts/architecture-overview/plugin-engine",children:"Plugin Engine & Database Integration"})," — Deep dive into plugin architecture."]}),`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/concepts/security-scalability/security-auth",children:"Security Model & Authentication"})," — How WhoDB handles user authentication and sessions."]}),`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," — Diagnosing common deployment problems."]}),`
`]}),`
`,e(n.p,{children:["For assistance, reach out to ",e(n.a,{href:"mailto:support@clidey.com",children:"support@clidey.com"})," or consult the community forums."]})]})}function p(i={}){const{wrapper:n}={...c(),...i.components};return n?e(n,{...i,children:e(s,{...i})}):s(i)}function r(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{p as default};
