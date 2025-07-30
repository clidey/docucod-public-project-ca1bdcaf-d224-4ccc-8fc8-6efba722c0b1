const e=`---
title: "Conversational AI Integration"
description: "Unpack WhoDB's AI integration: how natural language queries are interpreted and translated to SQL or database-specific operations using ChatGPT, Ollama, and Anthropic. Review context handling, fallback strategies, and ways to customize or extend provider support as new models emerge."
---

# Conversational AI Integration

Explore how WhoDB harnesses Conversational AI to transform natural language queries into actionable SQL or database-specific commands. This integration leverages powerful AI models such as ChatGPT, Ollama, and Anthropic to enable dynamic, intuitive data interactions through natural language input.

---

## Overview

WhoDB offers a seamless conversational experience by interpreting user queries in natural language and translating them into valid database operations. Leveraging multiple AI providers, the system processes context, maintains dialogue state, and applies fallback strategies to ensure robust and effective responses.

This page unpacks the core concepts behind WhoDB's AI integration, explains how user queries are interpreted, and guides you on customizing and extending AI support as new models become available.

---

## How Conversational AI Works in WhoDB

### Natural Language to SQL Translation

At the heart of WhoDB’s conversational AI is the capability to interpret user queries expressed in plain English (or other supported languages) and convert them into SQL or equivalent database commands specific to the connected storage units.

When you enter a question or command (e.g., "Show me the top 10 customers by revenue last year"), WhoDB sends this input to an AI model which understands:

- The schema and structure of your database,
- Context from previous interactions,
- The specific SQL dialect or query conventions,

and returns a generated SQL query tailored to fulfill your request.

### Supported AI Providers and Models

WhoDB currently integrates with the following AI providers:

- **ChatGPT** (OpenAI's GPT models)
- **Ollama** (Local or hosted model runner)
- **Anthropic** (Claude models and variants)

These providers are accessible through a unified interface, where WhoDB sends the natural language prompt and receives a structured response.

You can select from available models per provider, allowing for flexibility in balancing cost, speed, and accuracy.

### Contextual Conversation Management

To create fluid, human-like exchanges, WhoDB retains the chat history — the sequence of previous user inputs and system outputs — and sends this as context with each new query to the AI model.

This multi-turn conversation enables follow-up questions without needing to repeat details. For example:

1. User: "How many customers did we have in 2023?"
2. AI-generated query runs and returns results.
3. User: "Show me their countries."

The system interprets the second query in context to the first, generating relevant SQL accordingly.

### AI Response Handling

Upon receiving AI-generated text, WhoDB parses the SQL query or operational instructions contained within the response. The server then:

- Validates the SQL for syntax and safety,
- Executes the query through the connected database plugin,
- Returns query results or error messages back to the user,
- Displays the conversational AI text alongside any executed commands.

If the AI response includes advanced visual output commands (available in Enterprise Edition), such as "sql:pie-chart" or "sql:line-chart," WhoDB can render interactive charts directly in the conversation.

---

## User Workflow: Querying Data Using Conversational AI

1. **Select AI Provider and Model:** Choose your preferred AI provider (e.g., ChatGPT) and select a model optimized for conversational SQL generation.
2. **Enter a Natural Language Query:** Type in your question or command in the chat input field.
3. **Send the Query:** Press enter or click send to submit.
4. **Review AI Interpretation:** The AI generates SQL code based on your input and context.
5. **View Results and Dialogue:** Results are displayed in tabular form or via visual charts, alongside conversational text.
6. **Follow Up or Refine:** Continue the conversation with clarifications or additional questions leveraging context.

### Example:

> **User:** "List all products sold in Europe last quarter."

> **AI Response:** Generates SQL query filtering sales data by region and date.

> **WhoDB:** Executes query, displays the product list.

> **User:** "Now show total revenue for each product category."

> **AI Response:** Generates aggregated SQL query grouped by category.

> **WhoDB:** Displays the summary revenue table.

---

## Context Handling and Fallback Strategies

### Conversation State Management

WhoDB’s conversational engine encapsulates:

- **PreviousConversation:** A serialized transcript of earlier user and system messages sent with each AI request.
- **Schema Information:** The current database schema is sent as context so AI can generate valid SQL referencing actual tables and fields.

This encapsulation ensures the AI is well-informed to maintain conversational relevance.

### Fallback and Error Handling

Sometimes, AI-generated SQL might fail due to syntax errors, unsupported features, or ambiguous queries. WhoDB employs a fallback strategy:

- **Syntax Checking:** Queries are validated before execution.
- **Error Feedback:** If execution fails, error messages are returned to the conversation.
- **Re-Query Suggestions:** Users can rephrase or clarify their input.

This approach empowers users to refine queries interactively, minimizing frustration.

---

## Customizing and Extending AI Support

### Adding New Providers and Models

WhoDB’s backend includes an abstraction to support multiple LLM (Large Language Model) clients:

- Each client (e.g., \`LLMClient\`) implements methods to send prompts and parse responses according to provider-specific protocols.
- Providers currently implemented include ChatGPT, Ollama, and Anthropic, with the ability to add OpenAI-compatible clients.

To integrate a new AI provider:

1. Develop an adapter implementing the \`LLMClient\` interface,
2. Handle authentication (e.g., API keys or tokens),
3. Define prompt construction and response parsing logic,
4. Register the provider so it becomes selectable in the WhoDB UI.

### Managing Models per Provider

Users can choose from available models each provider supports. WhoDB fetches these lists dynamically using the provider's API.

In the UI, you can:

- Select an AI provider,
- View and choose models available for that provider,
- Add external models manually by specifying tokens and model IDs,
- Remove unsupported or unused models.

### Environment Configuration

API keys and tokens for providers can be set via environment variables or directly through the UI for personal tokens, supporting both local and cloud deployments.

### Extensibility Considerations

- The extensible architecture enables WhoDB to stay current as new AI models emerge.
- Enterprise Edition adds further integration capabilities including enhanced visualization and advanced analytics powered by conversational AI.

---

## Best Practices & Tips

- **Understand Your Schema:** Provide thorough schema descriptions in WhoDB to help AI generate valid queries.
- **Be Specific:** The more detailed your natural language query, the more accurate the AI-generated SQL.
- **Use Follow-ups:** Leverage conversational context for iterative refinement.
- **Manage Tokens Securely:** Keep your AI provider tokens secure and configure them according to your deployment.
- **Monitor AI Usage:** Track usage limits and costs associated with AI models.

---

## Troubleshooting Common Issues

- **No Models Available:** Ensure your API keys are correctly configured and environment variables are set.
- **Unrecognized Queries:** Simplify or rephrase your natural language input.
- **Query Execution Failures:** Inspect error messages shown alongside AI responses.
- **Slow Responses or Timeouts:** Check network connectivity and API rate limits.

If problems persist, consult the [Troubleshooting Common Issues](https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues) guide.

---

## Diagram: Conversational AI Request Flow

\`\`\`mermaid
flowchart TD
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
\`\`\`  

---

## Related Documentation

- [Querying Your Data with AI Chat](https://whodb.com/docs/guides/ai-and-natural-language/conversational-queries-and-ai-models) – Practical guide on using the AI Chat page.
- [System Architecture Overview](https://whodb.com/docs/concepts/architecture-overview/system-architecture) – How AI fits within the overall system.
- [Integrations and Extensibility](https://whodb.com/docs/overview/architecture-concepts-group/integration-overview) – Concepts on AI and plugin integration.
- [Troubleshooting Common Issues](https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues) – Fix common AI integration problems.

---

Harness WhoDB’s Conversational AI integration to unlock a natural, efficient way to extract insights from your data — no complex query knowledge required, just simple conversations.`;export{e as default};
