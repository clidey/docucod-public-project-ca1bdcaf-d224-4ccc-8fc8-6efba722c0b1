import{u as t,a as n,k as o}from"./index-CxwdZWLc.js";function i(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return n(o,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "Conversational AI Integration"
description: "Unpack WhoDB's AI integration: how natural language queries are interpreted and translated to SQL or database-specific operations using ChatGPT, Ollama, and Anthropic. Review context handling, fallback strategies, and ways to customize or extend provider support as new models emerge."`}),`
`,n(e.h1,{children:"Conversational AI Integration"}),`
`,n(e.p,{children:"Explore how WhoDB harnesses Conversational AI to transform natural language queries into actionable SQL or database-specific commands. This integration leverages powerful AI models such as ChatGPT, Ollama, and Anthropic to enable dynamic, intuitive data interactions through natural language input."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Overview"}),`
`,n(e.p,{children:"WhoDB offers a seamless conversational experience by interpreting user queries in natural language and translating them into valid database operations. Leveraging multiple AI providers, the system processes context, maintains dialogue state, and applies fallback strategies to ensure robust and effective responses."}),`
`,n(e.p,{children:"This page unpacks the core concepts behind WhoDB's AI integration, explains how user queries are interpreted, and guides you on customizing and extending AI support as new models become available."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"How Conversational AI Works in WhoDB"}),`
`,n(e.h3,{children:"Natural Language to SQL Translation"}),`
`,n(e.p,{children:"At the heart of WhoDB’s conversational AI is the capability to interpret user queries expressed in plain English (or other supported languages) and convert them into SQL or equivalent database commands specific to the connected storage units."}),`
`,n(e.p,{children:'When you enter a question or command (e.g., "Show me the top 10 customers by revenue last year"), WhoDB sends this input to an AI model which understands:'}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"The schema and structure of your database,"}),`
`,n(e.li,{children:"Context from previous interactions,"}),`
`,n(e.li,{children:"The specific SQL dialect or query conventions,"}),`
`]}),`
`,n(e.p,{children:"and returns a generated SQL query tailored to fulfill your request."}),`
`,n(e.h3,{children:"Supported AI Providers and Models"}),`
`,n(e.p,{children:"WhoDB currently integrates with the following AI providers:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"ChatGPT"})," (OpenAI's GPT models)"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Ollama"})," (Local or hosted model runner)"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Anthropic"})," (Claude models and variants)"]}),`
`]}),`
`,n(e.p,{children:"These providers are accessible through a unified interface, where WhoDB sends the natural language prompt and receives a structured response."}),`
`,n(e.p,{children:"You can select from available models per provider, allowing for flexibility in balancing cost, speed, and accuracy."}),`
`,n(e.h3,{children:"Contextual Conversation Management"}),`
`,n(e.p,{children:"To create fluid, human-like exchanges, WhoDB retains the chat history — the sequence of previous user inputs and system outputs — and sends this as context with each new query to the AI model."}),`
`,n(e.p,{children:"This multi-turn conversation enables follow-up questions without needing to repeat details. For example:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:'User: "How many customers did we have in 2023?"'}),`
`,n(e.li,{children:"AI-generated query runs and returns results."}),`
`,n(e.li,{children:'User: "Show me their countries."'}),`
`]}),`
`,n(e.p,{children:"The system interprets the second query in context to the first, generating relevant SQL accordingly."}),`
`,n(e.h3,{children:"AI Response Handling"}),`
`,n(e.p,{children:"Upon receiving AI-generated text, WhoDB parses the SQL query or operational instructions contained within the response. The server then:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Validates the SQL for syntax and safety,"}),`
`,n(e.li,{children:"Executes the query through the connected database plugin,"}),`
`,n(e.li,{children:"Returns query results or error messages back to the user,"}),`
`,n(e.li,{children:"Displays the conversational AI text alongside any executed commands."}),`
`]}),`
`,n(e.p,{children:'If the AI response includes advanced visual output commands (available in Enterprise Edition), such as "sql:pie-chart" or "sql:line-chart," WhoDB can render interactive charts directly in the conversation.'}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"User Workflow: Querying Data Using Conversational AI"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Select AI Provider and Model:"})," Choose your preferred AI provider (e.g., ChatGPT) and select a model optimized for conversational SQL generation."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Enter a Natural Language Query:"})," Type in your question or command in the chat input field."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Send the Query:"})," Press enter or click send to submit."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Review AI Interpretation:"})," The AI generates SQL code based on your input and context."]}),`
`,n(e.li,{children:[n(e.strong,{children:"View Results and Dialogue:"})," Results are displayed in tabular form or via visual charts, alongside conversational text."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Follow Up or Refine:"})," Continue the conversation with clarifications or additional questions leveraging context."]}),`
`]}),`
`,n(e.h3,{children:"Example:"}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"User:"}),' "List all products sold in Europe last quarter."']}),`
`]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"AI Response:"})," Generates SQL query filtering sales data by region and date."]}),`
`]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"WhoDB:"})," Executes query, displays the product list."]}),`
`]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"User:"}),' "Now show total revenue for each product category."']}),`
`]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"AI Response:"})," Generates aggregated SQL query grouped by category."]}),`
`]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"WhoDB:"})," Displays the summary revenue table."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Context Handling and Fallback Strategies"}),`
`,n(e.h3,{children:"Conversation State Management"}),`
`,n(e.p,{children:"WhoDB’s conversational engine encapsulates:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"PreviousConversation:"})," A serialized transcript of earlier user and system messages sent with each AI request."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Schema Information:"})," The current database schema is sent as context so AI can generate valid SQL referencing actual tables and fields."]}),`
`]}),`
`,n(e.p,{children:"This encapsulation ensures the AI is well-informed to maintain conversational relevance."}),`
`,n(e.h3,{children:"Fallback and Error Handling"}),`
`,n(e.p,{children:"Sometimes, AI-generated SQL might fail due to syntax errors, unsupported features, or ambiguous queries. WhoDB employs a fallback strategy:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax Checking:"})," Queries are validated before execution."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Error Feedback:"})," If execution fails, error messages are returned to the conversation."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Re-Query Suggestions:"})," Users can rephrase or clarify their input."]}),`
`]}),`
`,n(e.p,{children:"This approach empowers users to refine queries interactively, minimizing frustration."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Customizing and Extending AI Support"}),`
`,n(e.h3,{children:"Adding New Providers and Models"}),`
`,n(e.p,{children:"WhoDB’s backend includes an abstraction to support multiple LLM (Large Language Model) clients:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Each client (e.g., ",n(e.code,{children:"LLMClient"}),") implements methods to send prompts and parse responses according to provider-specific protocols."]}),`
`,n(e.li,{children:"Providers currently implemented include ChatGPT, Ollama, and Anthropic, with the ability to add OpenAI-compatible clients."}),`
`]}),`
`,n(e.p,{children:"To integrate a new AI provider:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:["Develop an adapter implementing the ",n(e.code,{children:"LLMClient"})," interface,"]}),`
`,n(e.li,{children:"Handle authentication (e.g., API keys or tokens),"}),`
`,n(e.li,{children:"Define prompt construction and response parsing logic,"}),`
`,n(e.li,{children:"Register the provider so it becomes selectable in the WhoDB UI."}),`
`]}),`
`,n(e.h3,{children:"Managing Models per Provider"}),`
`,n(e.p,{children:"Users can choose from available models each provider supports. WhoDB fetches these lists dynamically using the provider's API."}),`
`,n(e.p,{children:"In the UI, you can:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Select an AI provider,"}),`
`,n(e.li,{children:"View and choose models available for that provider,"}),`
`,n(e.li,{children:"Add external models manually by specifying tokens and model IDs,"}),`
`,n(e.li,{children:"Remove unsupported or unused models."}),`
`]}),`
`,n(e.h3,{children:"Environment Configuration"}),`
`,n(e.p,{children:"API keys and tokens for providers can be set via environment variables or directly through the UI for personal tokens, supporting both local and cloud deployments."}),`
`,n(e.h3,{children:"Extensibility Considerations"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"The extensible architecture enables WhoDB to stay current as new AI models emerge."}),`
`,n(e.li,{children:"Enterprise Edition adds further integration capabilities including enhanced visualization and advanced analytics powered by conversational AI."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Best Practices & Tips"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Understand Your Schema:"})," Provide thorough schema descriptions in WhoDB to help AI generate valid queries."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Be Specific:"})," The more detailed your natural language query, the more accurate the AI-generated SQL."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Use Follow-ups:"})," Leverage conversational context for iterative refinement."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Manage Tokens Securely:"})," Keep your AI provider tokens secure and configure them according to your deployment."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Monitor AI Usage:"})," Track usage limits and costs associated with AI models."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Troubleshooting Common Issues"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"No Models Available:"})," Ensure your API keys are correctly configured and environment variables are set."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Unrecognized Queries:"})," Simplify or rephrase your natural language input."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Query Execution Failures:"})," Inspect error messages shown alongside AI responses."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Slow Responses or Timeouts:"})," Check network connectivity and API rate limits."]}),`
`]}),`
`,n(e.p,{children:["If problems persist, consult the ",n(e.a,{href:"https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," guide."]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Diagram: Conversational AI Request Flow"}),`
`,n(e.pre,{children:n(e.code,{className:"language-mermaid",children:`flowchart TD
  UIInput["User Types Natural Language Query"] --> SendRequest["Send Query & Context to AI Provider"]
  SendRequest --> AIModel["AI Provider (ChatGPT, Ollama, Anthropic)"]
  AIModel --> ReturnResponse["AI Generates SQL & Text Response"]
  ReturnResponse --> ParseResponse["Parse Response & Validate SQL"]
  ParseResponse --> ValidateSQL["Syntax & Safety Check"]
  ValidateSQL -->|Valid| ExecuteSQL["Execute SQL via Database Plugin"]
  ValidateSQL -->|Invalid| ShowError["Return Error to User"]
  ExecuteSQL --> ReturnResults["Return Query Results"]
  ReturnResults --> UIOutput["Display Data & AI Text to User"]

  ShowError --> UIOutput

  subgraph ContextHandling
    UIInput -->|Add Conversation History & Schema Info| SendRequest
  end

  classDef process fill:#cde9f9,stroke:#2a9fd6,stroke-width:2px;
  AIModel,ParseResponse,ValidateSQL,ExecuteSQL,ReturnResponse process

  class UIInput,UIOutput,ShowError fill:#f3f4f6,stroke:#888,stroke-width:1px;
`})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Related Documentation"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/guides/ai-and-natural-language/conversational-queries-and-ai-models",children:"Querying Your Data with AI Chat"})," – Practical guide on using the AI Chat page."]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/concepts/architecture-overview/system-architecture",children:"System Architecture Overview"})," – How AI fits within the overall system."]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/overview/architecture-concepts-group/integration-overview",children:"Integrations and Extensibility"})," – Concepts on AI and plugin integration."]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," – Fix common AI integration problems."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"Harness WhoDB’s Conversational AI integration to unlock a natural, efficient way to extract insights from your data — no complex query knowledge required, just simple conversations."})]})}function s(r={}){const{wrapper:e}={...t(),...r.components};return e?n(e,{...r,children:n(i,{...r})}):i(r)}export{s as default};
