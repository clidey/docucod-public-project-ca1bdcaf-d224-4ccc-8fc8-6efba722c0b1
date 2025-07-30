import{u as s,a as e,k as l}from"./index-CxwdZWLc.js";function a(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components},{Accordion:t,AccordionGroup:r}=n;return t||o("Accordion"),r||o("AccordionGroup"),e(l,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Integrations and Extensibility"
description: "Overview of how WhoDB connects with databases, LLM providers (ChatGPT, Ollama, Anthropic), and external systems. Provides a summary of supported databases, authentication mechanisms, and plugin extensibility in both CE and EE editions. Includes pointers for future integrations."`}),`
`,e(n.h1,{children:"Integrations and Extensibility"}),`
`,e(n.p,{children:"Welcome to the Integrations and Extensibility overview for WhoDB — your gateway to connecting your databases, AI providers, and external systems seamlessly. This page demystifies how WhoDB interfaces with various components behind the scenes, empowering you to extend its functionality or integrate new data sources confidently."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Unlocking Unified Connections"}),`
`,e(n.p,{children:"WhoDB isn’t just another database tool. It acts as a centralized hub, linking your SQL, NoSQL, and cloud data stores with powerful AI models and extensible plugins. This page guides you through the integration landscape designed for both Community Edition (CE) and Enterprise Edition (EE) users, outlining key mechanisms, supported platforms, and future extensibility paths."}),`
`,e(n.h3,{children:"What You Will Discover Here"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"How WhoDB connects with industry-standard databases like PostgreSQL, MySQL, and MongoDB."}),`
`,e(n.li,{children:"The identity and authentication methods WhoDB supports for secure database access."}),`
`,e(n.li,{children:"Integration with leading large language model (LLM) providers such as ChatGPT, Ollama, and Anthropic."}),`
`,e(n.li,{children:"The plugin architecture that enables extension of the core platform, especially in EE."}),`
`,e(n.li,{children:"How dynamic GraphQL imports manage CE and EE codebases for integration consistency."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Database Connectivity: Broad, Secure, Seamless"}),`
`,e(n.h3,{children:"Supported Databases"}),`
`,e(n.p,{children:"WhoDB offers first-class support for a wide array of database types, including but not limited to:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Relational Databases: PostgreSQL, MySQL, MariaDB, SQLite3, ClickHouse"}),`
`,e(n.li,{children:"NoSQL Databases: MongoDB, Redis, ElasticSearch"}),`
`]}),`
`,e(n.p,{children:"This ensures that no matter your technology stack, WhoDB can be your unified interface to explore, query, and manage data."}),`
`,e(n.h3,{children:"Authentication Mechanisms"}),`
`,e(n.p,{children:"WhoDB supports flexible authentication to meet enterprise security requirements:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Login profiles with saved credentials allow quick switching between environments."}),`
`,e(n.li,{children:"Environment-defined credentials enable CI/CD and cloud deployments without exposing secrets."}),`
`,e(n.li,{children:"Advanced settings allow custom authentication parameters."}),`
`]}),`
`,e(n.h3,{children:"Plugin Engine Extensibility"}),`
`,e(n.p,{children:"Both CE and EE editions use a plugin system that wraps database drivers to provide consistent functionality across databases. In EE, the plugin engine extends to enable:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Enterprise-grade database support"}),`
`,e(n.li,{children:"Advanced connection options"}),`
`,e(n.li,{children:"Custom schema handling"}),`
`]}),`
`,e(n.p,{children:"This modular architecture future-proofs your WhoDB deployment for integrating new database systems."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Conversational AI and LLM Integration"}),`
`,e(n.p,{children:"WhoDB integrates deeply with conversational AI models to enable natural language querying and data exploration."}),`
`,e(n.h3,{children:"Supported AI Providers and Models"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"ChatGPT"}),": OpenAI’s widely used large language model."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Ollama"}),": Locally hosted model support, allowing on-prem AI."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Anthropic"}),": Cutting-edge assistant focused on safety and reliability."]}),`
`]}),`
`,e(n.p,{children:"With the ability to add external AI models dynamically through tokens and provider selection, you can tailor the AI assistance to your organizational needs."}),`
`,e(n.h3,{children:"Token and Model Management"}),`
`,e(n.p,{children:"Users authenticate and select models via WhoDB’s interface where:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Providers are discovered dynamically via a GraphQL query."}),`
`,e(n.li,{children:"Model types and tokens are configured securely."}),`
`,e(n.li,{children:"Model lists are refreshed on-demand to reflect availability."}),`
`]}),`
`,e(n.h3,{children:"AI Chat in Practice"}),`
`,e(n.p,{children:"The AI chat interface lets you:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Ask questions in natural language."}),`
`,e(n.li,{children:"Receive SQL queries and results inline."}),`
`,e(n.li,{children:"Visualize data with charts when supported (EE specific)."}),`
`]}),`
`,e(n.p,{children:"This integration generates real-time insights, making data access intuitive and conversational."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Plugin Extensibility and Enterprise Features"}),`
`,e(n.h3,{children:"Dynamic Component Loading"}),`
`,e(n.p,{children:"To support advanced features and EE-only components, WhoDB employs dynamic imports:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"EE components like advanced charts and analytics load only when enabled."}),`
`,e(n.li,{children:"This keeps the CE lightweight while giving EE customers enhanced visualizations and analytics."}),`
`]}),`
`,e(n.h3,{children:"Extensible Themes and UI Components"}),`
`,e(n.p,{children:"The system’s design supports new themes and UI components that can be plugged in:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"EE themes can be loaded at runtime, offering brand customization."}),`
`,e(n.li,{children:"Components like enhanced data tables are extensible through well-defined extension points."}),`
`]}),`
`,e(n.h3,{children:"Future Integration Paths"}),`
`,e(n.p,{children:"WhoDB is architected to integrate future databases and AI providers seamlessly through:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"The GraphQL schema which abstracts backend features."}),`
`,e(n.li,{children:"The plugin engine which encapsulates database-specific behavior."}),`
`,e(n.li,{children:"Feature flags controlling availability without code changes."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"How WhoDB Manages Integration Consistency: GraphQL Setup"}),`
`,e(n.h3,{children:"Unified GraphQL Types"}),`
`,e(n.p,{children:"WhoDB’s frontend uses GraphQL code generation to tightly couple with backend APIs:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"CE and EE editions have separate GraphQL schemas, each generating their own TypeScript types."}),`
`,e(n.li,{children:["The ",e(n.code,{children:"@graphql"})," import alias dynamically resolves to CE or EE types based on build environment."]}),`
`]}),`
`,e(n.h3,{children:"Build and Development Workflow"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Developers generate GraphQL types from the running backend."}),`
`,e(n.li,{children:"The Vite config dynamically aliases imports to the correct generated code."}),`
`,e(n.li,{children:"This ensures that both editions stay consistent with their respective backend capabilities."}),`
`]}),`
`,e(n.h3,{children:"Benefits to You"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Avoids conflicts between CE and EE types."}),`
`,e(n.li,{children:"Maintains API stability and type safety."}),`
`,e(n.li,{children:"Enables advanced features in EE without impacting CE builds."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Integration Workflow Example: Adding an External AI Model"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:"Navigate to the AI provider dropdown in the Chat interface."}),`
`,e(n.li,{children:"Select 'Add External Model' to open the token input modal."}),`
`,e(n.li,{children:"Choose your AI model type (e.g., Ollama, Anthropic)."}),`
`,e(n.li,{children:"Enter the API token securely."}),`
`,e(n.li,{children:"Submit to load and register the external AI model dynamically."}),`
`,e(n.li,{children:"Begin querying with the new AI provider seamlessly."}),`
`]}),`
`,e(n.p,{children:"This flow empowers users to flexibly extend WhoDB’s AI capabilities without redeployment."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Best Practices and Tips"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Secure Tokens:"})," Always manage your AI or database tokens through environment variables or secure vaults."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Refresh Models:"})," If AI models don't appear, try refreshing the provider list."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Use Plugins:"})," Leverage plugins to add support for custom databases or enterprise features."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Monitor Feature Flags:"})," EE feature availability is controlled via flags; consult your admin if something seems missing."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Troubleshooting Common Integration Issues"}),`
`,e(r,{title:"Common Issues with Integrations",children:[e(t,{title:"Unable to Connect to AI Provider",children:e(n.p,{children:"Ensure your token is valid and properly set. Verify network connectivity and check for API limits or permissions from the provider."})}),e(t,{title:"Database Login Fails",children:e(n.p,{children:"Check that your credentials are correct. Confirm that environment-defined profiles are properly configured if used. Review network firewall or access control settings."})}),e(t,{title:"GraphQL Types Seem Outdated",children:e(n.p,{children:["Run ",e(n.code,{children:"npm run generate"})," or ",e(n.code,{children:"pnpm generate"})," after backend schema changes. Confirm your local backend is running and accessible on port 8080."]})})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Next Steps"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Explore detailed guides on ",e(n.a,{href:"/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"}),"."]}),`
`,e(n.li,{children:["Learn about ",e(n.a,{href:"/concepts/integration-patterns/ai-integration",children:"Conversational AI Integration"})," to deepen your AI usage."]}),`
`,e(n.li,{children:["For Enterprise customers, investigate ",e(n.a,{href:"/concepts/architecture-overview/plugin-engine",children:"Plugin Engine & Database Integration"})," for custom extensibility."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"By understanding WhoDB’s integrations and extensibility mechanism, you can fully harness its power as a unified platform for your diverse data ecosystems and the latest conversational AI capabilities."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Diagram: Integration Overview Flow"}),`
`,e(n.pre,{children:e(n.code,{className:"language-mermaid",children:`flowchart TD
  %% User interaction
  User["User Interface"] -->|Select Database| Connection["Database Connection Layer"]
  Connection --> Database[("Supported Databases")]
  Database -->|Query results| Connection
  Connection -->|Return Data| User

  %% AI Provider Interaction
  User -->|Enter Query| AIChat["AI Chat Module"]
  AIChat -->|Fetch Models, Tokens| AIProvider["AI Providers (ChatGPT, Ollama, Anthropic)"]
  AIProvider -->|Return Models| AIChat
  AIChat -->|Send Query & Context| AIModel["AI Models"]
  AIModel -->|Respond| AIChat
  AIChat -->|Result| User

  %% Plugin Engine
  Connection --> PluginEngine["Plugin Engine"]
  PluginEngine --> Database

  %% Dynamic Component Loading
  User -->|Load EE Components| EEComponents["Enterprise Edition Components"]
  EEComponents --> User

  %% GraphQL Layer
  User -->|GraphQL Queries| GraphQLFrontend["Frontend GraphQL Layer"]
  GraphQLFrontend --> GraphQLBackend["Backend GraphQL API"]
  GraphQLBackend --> Database
  GraphQLBackend --> AIProvider

  %% Legend
  classDef external fill:#f9f,stroke:#333,stroke-width:1px;
  class Database,AIProvider external;
`})}),`
`,e(n.hr,{})]})}function h(i={}){const{wrapper:n}={...s(),...i.components};return n?e(n,{...i,children:e(a,{...i})}):a(i)}function o(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
