import{u as s,a as e,k as c}from"./index-CxwdZWLc.js";function a(r){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components},{Accordion:i,AccordionGroup:o,Tip:l}=n;return i||t("Accordion"),o||t("AccordionGroup"),l||t("Tip"),e(c,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Querying Your Data with AI Chat"
description: "Learn how to use AI-driven chat (powered by Ollama, ChatGPT, Anthropic) to ask natural questions about your data and receive actionable results. Covers model selection, configuring providers, and understanding generated results."`}),`
`,e(n.h1,{children:"Querying Your Data with AI Chat"}),`
`,e(n.p,{children:"Unlock the power of natural language to interact with your database effortlessly. This guide walks you through using the AI-driven chat interface in WhoDB, letting you ask questions about your data and receive actionable, context-aware results. You'll learn to select AI models, configure providers, submit queries, and interpret responses—turning complex SQL operations into simple conversations."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. Understanding the AI Chat Interface"}),`
`,e(n.h3,{children:"What This Page Does"}),`
`,e(n.p,{children:"The AI Chat page equips you to interact with your data using natural language prompts processed by advanced AI models such as Ollama, ChatGPT, and Anthropic. You can:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Select an AI provider and model"}),`
`,e(n.li,{children:"Input conversational queries"}),`
`,e(n.li,{children:"View dynamically generated answers, SQL results, and visual charts"}),`
`]}),`
`,e(n.h3,{children:"Prerequisites"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"You must have a connected database with an active schema."}),`
`,e(n.li,{children:"At least one supported AI provider (Ollama, ChatGPT, Anthropic) configured and available."}),`
`,e(n.li,{children:"Valid model tokens if required for external providers."}),`
`]}),`
`,e(n.h3,{children:"Expected Outcome"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Submit natural language questions about your data."}),`
`,e(n.li,{children:"Receive textual responses describing results or generated SQL queries."}),`
`,e(n.li,{children:"View the executed query results as tables or charts inline."}),`
`,e(n.li,{children:"Manage conversations with history and context-aware responses."}),`
`]}),`
`,e(n.h3,{children:"Time Estimate"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Initial setup and familiarization: 5-10 minutes"}),`
`,e(n.li,{children:"Submitting and reviewing queries: seconds per interaction"}),`
`]}),`
`,e(n.h3,{children:"Difficulty Level"}),`
`,e(n.p,{children:"Intermediate — basic knowledge of your data and conversational AI concepts is helpful."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"2. Step-by-Step Guide to Using AI Chat"}),`
`,e(n.h3,{children:"Step 1: Select Your AI Provider and Model"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Locate the Provider Dropdown:"})," At the top left of the AI Chat page, choose your AI provider (e.g., Ollama, ChatGPT, Anthropic)."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Choose an AI Model:"})," Select the desired AI model available for the chosen provider. Models vary in capability and token requirements."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Add External Models (if needed):"}),' Use the "Add External Model" option to configure new providers by specifying model type and authentication token.']}),`
`]}),`
`,e(n.p,{children:[e(n.strong,{children:"Tip:"})," Models with tokens should be configured accurately to avoid connection issues."]}),`
`,e(n.h3,{children:"Step 2: Understand the Chat UI"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Chat History Panel:"})," Displays previous interactions, including user queries and AI responses."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Input Box:"})," Type your natural language query here."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Submit Button (Arrow):"})," Click or press Enter to send your query."]}),`
`,e(n.li,{children:[e(n.strong,{children:"New Chat:"})," Starts a fresh conversation, clearing context."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example Prompts:"})," Click on sample questions if you're unsure where to start."]}),`
`]}),`
`,e(n.h3,{children:"Step 3: Compose Your Natural Language Query"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:'Formulate your question about the data, such as "Show me all orders from last month" or "What are the top 5 customers by sales?"'}),`
`,e(n.li,{children:"The AI engine interprets your input and generates SQL or textual answers."}),`
`]}),`
`,e(n.h3,{children:"Step 4: Submit Your Query and Review Results"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:"Type your query in the input box."}),`
`,e(n.li,{children:"Submit it using the arrow button or pressing Enter."}),`
`,e(n.li,{children:"Wait briefly as the AI processes your request (a loading indicator with playful phrases will appear)."}),`
`,e(n.li,{children:"Review the AI’s textual answer."}),`
`,e(n.li,{children:["View the query results presented as:",`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Tables:"})," Displayed with sortable columns and rows."]}),`
`,e(n.li,{children:[e(n.strong,{children:"SQL Code:"})," Toggle between result and the generated SQL query."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Charts (EE Only):"})," Some responses include visualizations like pie or line charts."]}),`
`]}),`
`]}),`
`]}),`
`,e(n.h3,{children:"Step 5: Manage Conversations and Context"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"The chat keeps track of conversation history to provide contextually relevant answers."}),`
`,e(n.li,{children:'Use the "New Chat" button to reset context when switching topics.'}),`
`,e(n.li,{children:"Scroll through chat history to revisit previous queries and responses."}),`
`]}),`
`,e(n.h3,{children:"Step 6: Troubleshoot Common Issues"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"No models listed:"})," Verify your provider setup and tokens. Check the models availability status."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Slow or no response:"})," Confirm network connectivity and AI service health."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Unexpected errors:"})," Notifications will display error messages; try submitting your query again or restart the chat."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Query returns empty results:"})," Refine or clarify your question."]}),`
`]}),`
`,e(l,{children:e(n.p,{children:"Always ensure your schema is correctly loaded and accessible. The AI models generate queries based on the schema and table details available."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"3. Practical Examples to Get You Started"}),`
`,e(n.h3,{children:"Example 1: Basic Data Retrieval"}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:'"List all active users created in the past 30 days"'}),`
`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Expected: AI generates a SQL SELECT query filtered by creation date and status."}),`
`,e(n.li,{children:"Output: Table listing matching user records."}),`
`]}),`
`,e(n.h3,{children:"Example 2: Aggregate Analysis"}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:'"What is the total sales per region this quarter?"'}),`
`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Expected: AI returns SQL with GROUP BY on region and SUM aggregation."}),`
`,e(n.li,{children:"Output: Table or chart displaying sales totals partitioned by region."}),`
`]}),`
`,e(n.h3,{children:"Example 3: Data Modification Prompt (Advanced)"}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:`"Add a new product named 'Eco Bottle' priced at $15"`}),`
`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Expected: AI draft an INSERT SQL."}),`
`,e(n.li,{children:"Note: The system requires confirmation for data modifications before executing."}),`
`]}),`
`,e(n.h3,{children:"Example 4: Conversational Clarifications"}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:`User: "Show me the top 3 products"
AI: Responds with results.
User: "Only those in the 'Kitchen' category"`}),`
`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"The AI incorporates previous context to refine query."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"4. Tips & Best Practices"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Be Clear and Specific:"})," Provide sufficient context to get precise answers."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Use Natural Language:"})," No need to write SQL; the AI will translate."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Confirm Modifications:"})," For inserts, updates, or deletes, provide explicit confirmation when prompted."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Manage Token Usage:"})," External models may consume API tokens; monitor usage."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Leverage Examples:"})," Start with sample prompts to understand AI capabilities."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"5. Troubleshooting Common Problems"}),`
`,e(o,{title:"Common AI Chat Issues",children:[e(i,{title:"No AI Models Found or Unavailable",children:e(n.p,{children:"Confirm your AI providers are configured correctly in the model dropdown. If tokens are required, make sure they are valid and environment variables are set. Refresh models by reselecting the provider."})}),e(i,{title:"Queries Fail or Return Errors",children:e(n.p,{children:"Check the exact error message displayed. Common causes include malformed queries, schema mismatches, or provider connectivity issues. Retrying or switching models can help."})}),e(i,{title:"Empty or Incomplete Results",children:e(n.p,{children:"Ensure your query specifies enough filtering criteria. Check that your database schema is up to date and accessible."})}),e(i,{title:"Slow Response or Timeouts",children:e(n.p,{children:"AI chat depends on external API responsiveness. Network issues or API rate limits impact performance. Try again after some time or switch to a local model if available."})}),e(i,{title:"Chat Not Remembering Context Properly",children:e(n.p,{children:'Use the "New Chat" button to clear old context if conversations become inconsistent.'})})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"6. Next Steps and Additional Resources"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Explore the ",e(n.a,{href:"/guides/ai-and-natural-language/scratchpad-and-raw-sql",children:"Using the Scratchpad and Raw Query Executor"})," guide for advanced query editing."]}),`
`,e(n.li,{children:["Learn more about ",e(n.a,{href:"/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})," to ensure your schema is properly configured."]}),`
`,e(n.li,{children:["Review ",e(n.a,{href:"/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," if you encounter persistent problems."]}),`
`,e(n.li,{children:["For Enterprise Edition users, explore how ",e(n.a,{href:"https://whodb.com/docs/usage-houdini/what-is-houdini",children:"Visual Data Charts"})," leverage AI conversation for deeper insights."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"Illustrative Workflow Diagram"}),`
`,e(n.pre,{children:e(n.code,{className:"language-mermaid",children:`flowchart TD
  U["User"] --> |"Select AI Provider & Model"| UI["AI Chat Interface"]
  UI --> |"Submit Query"| AI["AI Model (Ollama, ChatGPT, Anthropic)"]
  AI --> |"Generate SQL/Text Response"| Plugin["Chat Plugin & Query Engine"]
  Plugin --> DB["Connected Database"]
  DB --> Plugin
  Plugin --> UI
  UI --> U

  subgraph Conversation Flow
    UI --> UI
    AI --> AI
  end

  classDef external fill:#f9f,stroke:#333,stroke-width:2px;
  class AI external;
`})}),`
`,e(n.p,{children:"This flow illustrates how your natural language query progresses through model selection, AI interpretation, database execution, and response presentation."}),`
`,e(n.hr,{}),`
`,e(n.p,{children:["For detailed technical background, see the ",e(n.a,{href:"https://whodb.com/concepts/integration-patterns/ai-integration",children:"Conversational AI Integration Concept"})," and the ",e(n.a,{href:"/overview/architecture-concepts-group/system-architecture-overview",children:"System Architecture Overview"})," sections."]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:e(n.em,{children:"End of Guide"})})]})}function h(r={}){const{wrapper:n}={...s(),...r.components};return n?e(n,{...r,children:e(a,{...r})}):a(r)}function t(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
