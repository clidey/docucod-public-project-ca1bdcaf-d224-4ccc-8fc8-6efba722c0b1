import{u as c,a as e,k as h}from"./index-CxwdZWLc.js";function d(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...r.components},{Step:i,Steps:l,Tip:t}=n;return i||o("Step"),l||o("Steps"),t||o("Tip"),e(h,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Fixing Problems with Chat and AI Integrations"
description: "Find solutions for issues integrating with Ollama, ChatGPT, or Anthropic, such as API key configuration, missing chat options, or troubleshooting natural language query errors."`}),`
`,e(n.h2,{children:"Fixing Problems with Chat and AI Integrations"}),`
`,e(n.p,{children:"This page helps you resolve common issues encountered when integrating WhoDB's conversational AI features with providers like Ollama, ChatGPT, and Anthropic. Whether you're facing API key configuration errors, missing chat options, or unexpected natural language query failures, the following guidance will help restore your AI chat functionality swiftly."}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"1. Common Chat and AI Integration Issues"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.strong,{children:"No Chat Options Displayed in UI"})}),`
`,e(n.li,{children:e(n.strong,{children:"API Key or Token Configuration Problems"})}),`
`,e(n.li,{children:e(n.strong,{children:"Failed or Incomplete AI Query Responses"})}),`
`,e(n.li,{children:e(n.strong,{children:"Errors when Adding or Using External AI Models"})}),`
`,e(n.li,{children:e(n.strong,{children:"Slow or Stuck Response in AI Chat"})}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"2. Diagnosing Missing Chat Providers or Models"}),`
`,e(n.p,{children:"If you don't see available chat providers like Ollama, ChatGPT, or Anthropic in the chat UI:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Check Environment Variable Configuration:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Confirm your API keys are correctly set as environment variables:",`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"WHODB_OPENAI_API_KEY"})," for ChatGPT"]}),`
`,e(n.li,{children:[e(n.code,{children:"WHODB_ANTHROPIC_API_KEY"})," for Anthropic"]}),`
`,e(n.li,{children:["Optional overrides like ",e(n.code,{children:"WHODB_OLLAMA_HOST"})," and ",e(n.code,{children:"WHODB_OLLAMA_PORT"})," for Ollama"]}),`
`]}),`
`]}),`
`,e(n.li,{children:"Without these keys, respective providers won't load. Ollama is included by default assuming a local service."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Validate Provider Presence in Backend:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"WhoDB queries available AI providers on startup through a GraphQL API."}),`
`,e(n.li,{children:"Misconfiguration or missing keys will exclude providers from the dropdown."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Using Multiple or Custom Models:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["When using OpenAI compatible endpoints or custom models, ensure ",e(n.code,{children:"WHODB_OPENAI_COMPATIBLE_API_KEY"})," and ",e(n.code,{children:"WHODB_CUSTOM_MODELS"})," are defined properly."]}),`
`]}),`
`]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"3. Troubleshooting API Key and Token Issues"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Invalid or Missing Tokens:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"AI providers require valid API keys or tokens to authenticate."}),`
`,e(n.li,{children:"Verify that keys haven't expired or been revoked."}),`
`,e(n.li,{children:"Ensure no extraneous spaces or malformed characters in the environment variables."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Adding External Models:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["When adding custom tokens for third-party models (e.g., ChatGPT or Anthropic) via the 'Add External Model' dialog:",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Select the correct model type."}),`
`,e(n.li,{children:"Enter the corresponding API key/token."}),`
`,e(n.li,{children:"Submit and wait for confirmation of successful connection."}),`
`]}),`
`]}),`
`,e(n.li,{children:"If the token is invalid, an error notification will appear."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Token Scope and Permissions:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Confirm that the API key has sufficient permissions to access the model endpoints."}),`
`,e(n.li,{children:"For example, OpenAI tokens require access to chat completion APIs."}),`
`]}),`
`]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"4. Handling AI Chat Query Failures or Errors"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Failed Query Execution:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:['If a query does not execute and you see an error message such as "Unable to query. Try again," verify:',`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Network connectivity to API endpoints."}),`
`,e(n.li,{children:"Correct model and token selection in the chat UI."}),`
`,e(n.li,{children:"Backend logs for detailed error causes."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Partial or No Responses:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Streaming responses may be interrupted by network timeouts or API errors."}),`
`,e(n.li,{children:"Retry the query after checking your internet connectivity."}),`
`,e(n.li,{children:"Confirm API rate limits for your key have not been exceeded."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Delayed or Stuck Responses:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Occasionally, AI responses might take longer due to model processing times."}),`
`,e(n.li,{children:"Use the loading indicators (e.g., “Thinking” messages) to monitor progress."}),`
`,e(n.li,{children:"Cancel and retry if stuck beyond a reasonable time."}),`
`]}),`
`]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"5. Best Practices and Tips for Reliable AI Integrations"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Keep API Keys Secure:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use environment variables to store API keys securely, avoiding hardcoding."}),`
`,e(n.li,{children:"Rotate keys periodically to maintain security."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Verify Model Availability:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Regularly check available chat models after initial setup through the UI’s dropdowns."}),`
`,e(n.li,{children:"Add or remove models as needed via the external model manager."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Use the Latest Endpoints:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Keep your environment variables pointing to the latest OpenAI/Anthropic endpoints."}),`
`,e(n.li,{children:"Custom endpoints must be correctly formatted URLs."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Test with Example Queries:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use preset chat examples on the chat page to verify end-to-end functionality."}),`
`,e(n.li,{children:"This confirms that your AI models respond correctly."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Monitor Backend Logs:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Inspect server logs for API request failures, authentication errors, or network timeouts."}),`
`,e(n.li,{children:"Logs provide insights to root causes beyond frontend symptoms."}),`
`]}),`
`]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"6. Step-by-Step: Refreshing AI Model List and Tokens"}),`
`,e(l,{children:[e(i,{title:"Open the Chat Page",children:e(n.p,{children:"Navigate to the AI Chat page in WhoDB from the main menu."})}),e(i,{title:"Check Available Providers",children:e(n.p,{children:"Observe the provider dropdown to confirm if your expected models (Ollama, ChatGPT, Anthropic) appear."})}),e(i,{title:"Add External Model (If Needed)",children:e(n.p,{children:`Click 'Add External Model' to input tokens for additional models.
Enter the token securely and submit.`})}),e(i,{title:"Select Model and Test Query",children:e(n.p,{children:`Choose your AI model from the model dropdown.
Input a test query and submit to verify response.`})}),e(i,{title:"Troubleshoot Errors",children:e(n.p,{children:`If errors occur, note error messages and verify environment variables or network.
Restart your WhoDB backend if necessary after config changes.`})})]}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"7. Troubleshooting Quick Reference"}),`
`,e("table",{children:e(n.p,{children:[e(n.code,{children:"<thead>"}),`
`,e(n.code,{children:"<tr>"}),e("th",{children:"Issue"}),e("th",{children:"Cause"}),e("th",{children:"Solution"}),e(n.code,{children:"</tr>"}),`
`,e(n.code,{children:"</thead>"}),`
`,e(n.code,{children:"<tbody>"}),`
`,e(n.code,{children:"<tr>"}),e("td",{children:"No providers in dropdown"}),e("td",{children:"Missing or invalid API keys in environment variables"}),e("td",{children:"Set correct keys; restart app to reload providers"}),e(n.code,{children:"</tr>"}),`
`,e(n.code,{children:"<tr>"}),e("td",{children:"Adding external model fails"}),e("td",{children:"Incorrect token or network failure"}),e("td",{children:"Recheck token validity; confirm network connectivity"}),e(n.code,{children:"</tr>"}),`
`,e(n.code,{children:"<tr>"}),e("td",{children:"Query returns error"}),e("td",{children:"API rate limits, invalid model, or token expired"}),e("td",{children:"Check key status/rate limits; select correct model"}),e(n.code,{children:"</tr>"}),`
`,e(n.code,{children:"<tr>"}),e("td",{children:"Chat response incomplete or slow"}),e("td",{children:"Network issues or provider service delays"}),e("td",{children:"Retry; monitor logs; use stable network"}),e(n.code,{children:"</tr>"}),`
`,e(n.code,{children:"<tr>"}),e("td",{children:"Ollama connection problems"}),e("td",{children:"Wrong host/port or service not running locally"}),e("td",{children:["Verify ",e(n.code,{children:"WHODB_OLLAMA_HOST"}),"/",e(n.code,{children:"WHODB_OLLAMA_PORT"}),"; ensure Ollama server is active"]}),e(n.code,{children:"</tr>"}),`
`,e(n.code,{children:"</tbody>"})]})}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"8. Related Documentation"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/guides/ai-and-natural-language/conversational-queries-and-ai-models",children:"Querying Your Data with AI Chat"})," — Detailed usage of the AI Chat page and providers."]}),`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/deployment/prod_deployment/env_config",children:"Environment Variables & Third-Party Integrations"})," — Configure API keys and endpoints."]}),`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," — Broader troubleshooting for WhoDB."]}),`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/concepts/integration-patterns/ai-integration",children:"Conversational AI Integration"})," — Underlying AI integration architecture."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"9. Getting Further Help"}),`
`,e(n.p,{children:"If you continue to experience problems:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Review server-side logs for detailed error messages."}),`
`,e(n.li,{children:"Validate API key permissions with your AI provider dashboards."}),`
`,e(n.li,{children:"Consult WhoDB community forums or contact support through the official website."}),`
`]}),`
`,e(t,{children:e(n.p,{children:"Ensuring your API keys remain valid and available in the environment is critical to maintaining a smooth AI chat experience. Regularly verify and update tokens to avoid unexpected disruptions."})}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"This guide equips you with the knowledge to identify and solve common integration problems, keeping your WhoDB AI chat feature responsive and reliable."})]})}function a(r={}){const{wrapper:n}={...c(),...r.components};return n?e(n,{...r,children:e(d,{...r})}):d(r)}function o(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};
