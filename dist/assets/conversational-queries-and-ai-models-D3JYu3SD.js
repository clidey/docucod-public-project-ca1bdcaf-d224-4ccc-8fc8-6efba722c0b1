const e=`---
title: "Querying Your Data with AI Chat"
description: "Learn how to use AI-driven chat (powered by Ollama, ChatGPT, Anthropic) to ask natural questions about your data and receive actionable results. Covers model selection, configuring providers, and understanding generated results."
---

# Querying Your Data with AI Chat

Unlock the power of natural language to interact with your database effortlessly. This guide walks you through using the AI-driven chat interface in WhoDB, letting you ask questions about your data and receive actionable, context-aware results. You'll learn to select AI models, configure providers, submit queries, and interpret responses—turning complex SQL operations into simple conversations.

---

## 1. Understanding the AI Chat Interface

### What This Page Does
The AI Chat page equips you to interact with your data using natural language prompts processed by advanced AI models such as Ollama, ChatGPT, and Anthropic. You can:  
- Select an AI provider and model  
- Input conversational queries  
- View dynamically generated answers, SQL results, and visual charts  

### Prerequisites
- You must have a connected database with an active schema.  
- At least one supported AI provider (Ollama, ChatGPT, Anthropic) configured and available.  
- Valid model tokens if required for external providers.  

### Expected Outcome
- Submit natural language questions about your data.  
- Receive textual responses describing results or generated SQL queries.  
- View the executed query results as tables or charts inline.  
- Manage conversations with history and context-aware responses.

### Time Estimate
- Initial setup and familiarization: 5-10 minutes  
- Submitting and reviewing queries: seconds per interaction

### Difficulty Level
Intermediate — basic knowledge of your data and conversational AI concepts is helpful.

---

## 2. Step-by-Step Guide to Using AI Chat

### Step 1: Select Your AI Provider and Model

1. **Locate the Provider Dropdown:** At the top left of the AI Chat page, choose your AI provider (e.g., Ollama, ChatGPT, Anthropic).  
2. **Choose an AI Model:** Select the desired AI model available for the chosen provider. Models vary in capability and token requirements.
3. **Add External Models (if needed):** Use the "Add External Model" option to configure new providers by specifying model type and authentication token.

**Tip:** Models with tokens should be configured accurately to avoid connection issues.

### Step 2: Understand the Chat UI

- **Chat History Panel:** Displays previous interactions, including user queries and AI responses.
- **Input Box:** Type your natural language query here.
- **Submit Button (Arrow):** Click or press Enter to send your query.
- **New Chat:** Starts a fresh conversation, clearing context.
- **Example Prompts:** Click on sample questions if you're unsure where to start.

### Step 3: Compose Your Natural Language Query

- Formulate your question about the data, such as "Show me all orders from last month" or "What are the top 5 customers by sales?"
- The AI engine interprets your input and generates SQL or textual answers.

### Step 4: Submit Your Query and Review Results

1. Type your query in the input box.
2. Submit it using the arrow button or pressing Enter.
3. Wait briefly as the AI processes your request (a loading indicator with playful phrases will appear).
4. Review the AI’s textual answer.
5. View the query results presented as:
   - **Tables:** Displayed with sortable columns and rows.
   - **SQL Code:** Toggle between result and the generated SQL query.
   - **Charts (EE Only):** Some responses include visualizations like pie or line charts.

### Step 5: Manage Conversations and Context

- The chat keeps track of conversation history to provide contextually relevant answers.
- Use the "New Chat" button to reset context when switching topics.
- Scroll through chat history to revisit previous queries and responses.

### Step 6: Troubleshoot Common Issues

- **No models listed:** Verify your provider setup and tokens. Check the models availability status.
- **Slow or no response:** Confirm network connectivity and AI service health.
- **Unexpected errors:** Notifications will display error messages; try submitting your query again or restart the chat.
- **Query returns empty results:** Refine or clarify your question.

<Tip>
Always ensure your schema is correctly loaded and accessible. The AI models generate queries based on the schema and table details available.
</Tip>

---

## 3. Practical Examples to Get You Started

### Example 1: Basic Data Retrieval

> "List all active users created in the past 30 days"

- Expected: AI generates a SQL SELECT query filtered by creation date and status.
- Output: Table listing matching user records.

### Example 2: Aggregate Analysis

> "What is the total sales per region this quarter?"

- Expected: AI returns SQL with GROUP BY on region and SUM aggregation.
- Output: Table or chart displaying sales totals partitioned by region.

### Example 3: Data Modification Prompt (Advanced)

> "Add a new product named 'Eco Bottle' priced at $15"

- Expected: AI draft an INSERT SQL.
- Note: The system requires confirmation for data modifications before executing.

### Example 4: Conversational Clarifications

> User: "Show me the top 3 products"
> AI: Responds with results.
> User: "Only those in the 'Kitchen' category"

- The AI incorporates previous context to refine query.

---

## 4. Tips & Best Practices

- **Be Clear and Specific:** Provide sufficient context to get precise answers.
- **Use Natural Language:** No need to write SQL; the AI will translate.
- **Confirm Modifications:** For inserts, updates, or deletes, provide explicit confirmation when prompted.
- **Manage Token Usage:** External models may consume API tokens; monitor usage.
- **Leverage Examples:** Start with sample prompts to understand AI capabilities.

---

## 5. Troubleshooting Common Problems

<AccordionGroup title="Common AI Chat Issues">
<Accordion title="No AI Models Found or Unavailable">
Confirm your AI providers are configured correctly in the model dropdown. If tokens are required, make sure they are valid and environment variables are set. Refresh models by reselecting the provider.
</Accordion>
<Accordion title="Queries Fail or Return Errors">
Check the exact error message displayed. Common causes include malformed queries, schema mismatches, or provider connectivity issues. Retrying or switching models can help.
</Accordion>
<Accordion title="Empty or Incomplete Results">
Ensure your query specifies enough filtering criteria. Check that your database schema is up to date and accessible.
</Accordion>
<Accordion title="Slow Response or Timeouts">
AI chat depends on external API responsiveness. Network issues or API rate limits impact performance. Try again after some time or switch to a local model if available.
</Accordion>
<Accordion title="Chat Not Remembering Context Properly">
Use the "New Chat" button to clear old context if conversations become inconsistent.
</Accordion>
</AccordionGroup>

---

## 6. Next Steps and Additional Resources

- Explore the [Using the Scratchpad and Raw Query Executor](/guides/ai-and-natural-language/scratchpad-and-raw-sql) guide for advanced query editing.
- Learn more about [Connecting to Your Database](/guides/essential-workflows/connecting-to-your-database) to ensure your schema is properly configured.
- Review [Troubleshooting Common Issues](/getting-started/troubleshooting/troubleshooting-common-issues) if you encounter persistent problems.
- For Enterprise Edition users, explore how [Visual Data Charts](https://whodb.com/docs/usage-houdini/what-is-houdini) leverage AI conversation for deeper insights.

---

### Illustrative Workflow Diagram

\`\`\`mermaid
flowchart TD
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
\`\`\`

This flow illustrates how your natural language query progresses through model selection, AI interpretation, database execution, and response presentation.

---

For detailed technical background, see the [Conversational AI Integration Concept](https://whodb.com/concepts/integration-patterns/ai-integration) and the [System Architecture Overview](/overview/architecture-concepts-group/system-architecture-overview) sections.


---

*End of Guide*`;export{e as default};
