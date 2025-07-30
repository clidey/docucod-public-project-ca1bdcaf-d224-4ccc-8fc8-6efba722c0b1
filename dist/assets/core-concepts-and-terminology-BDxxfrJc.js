import{u as l,a as e,k as s}from"./index-CxwdZWLc.js";function a(i){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...i.components},{Accordion:t,AccordionGroup:r}=n;return t||o("Accordion"),r||o("AccordionGroup"),e(s,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Core Concepts and Terminology"
description: "Defines and explains foundational terms used in WhoDB, including Storage Units, Plugins, AI Models, Scratchpad, Community/Enterprise Editions, and Database Profiles. This conceptual map is critical for understanding documentation and product workflows."`}),`
`,e(n.h1,{children:"Core Concepts and Terminology"}),`
`,e(n.p,{children:"Understanding WhoDB’s architecture and workflows starts with a clear grasp of its foundational terms and components. This page defines and explains critical concepts such as Storage Units, Plugins, AI Models, Scratchpad, Editions, and Database Profiles — essential building blocks for effective use and interpretation of WhoDB’s capabilities."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Storage Units"}),`
`,e(n.p,{children:"Storage Units are the fundamental logical containers within WhoDB that represent your databases. They abstract the underlying database connections, allowing WhoDB to manage multiple and diverse database types uniformly."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"What They Are:"})," A Storage Unit is essentially a connected database instance or schema that you can explore and query."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Why They Matter:"})," They enable users to view, manage, and query heterogeneous databases without needing to switch tools or configurations."]}),`
`]}),`
`,e(n.p,{children:[e(n.strong,{children:"Example:"})," A PostgreSQL cluster and a SQLite file can each be a separate Storage Unit, accessible via WhoDB’s interface simultaneously."]}),`
`,e(n.h2,{children:"Plugins"}),`
`,e(n.p,{children:"Plugins are modular components that provide WhoDB the ability to interact with different database technologies."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Definition:"})," Each Plugin encapsulates the logic needed to connect, query, and manage a particular database type."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Key Role:"})," They power WhoDB’s extensive database support by translating generic commands into database-specific operations."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Core Plugins Include:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"PostgreSQL"}),`
`,e(n.li,{children:"MySQL / MariaDB"}),`
`,e(n.li,{children:"SQLite3"}),`
`,e(n.li,{children:"MongoDB"}),`
`,e(n.li,{children:"Redis"}),`
`,e(n.li,{children:"Elasticsearch"}),`
`,e(n.li,{children:"ClickHouse"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Enterprise Edition:"})," May include additional or enhanced plugins for advanced features."]}),`
`]}),`
`]}),`
`,e(n.h2,{children:"AI Models"}),`
`,e(n.p,{children:"WhoDB integrates conversational AI to augment database exploration and querying."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"AI Models Represent:"})," The language and reasoning engines that parse natural language inputs into executable queries or provide intelligent insights."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:e(n.strong,{children:"Examples of Supported Models:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Ollama (local/private LLM)"}),`
`,e(n.li,{children:"ChatGPT (OpenAI-powered conversational AI)"}),`
`,e(n.li,{children:"Anthropic"}),`
`,e(n.li,{children:"OpenAI-Compatible models"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Purpose:"})," Allow users to interact naturally with their data using plain English instead of complex SQL or commands."]}),`
`]}),`
`]}),`
`,e(n.h2,{children:"Scratchpad"}),`
`,e(n.p,{children:"The Scratchpad is an interactive workspace within WhoDB for composing, experimenting with, and executing queries or notes."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"What It Is:"})," A flexible interface component where users write raw SQL, test AI-generated queries, or keep query snippets."]}),`
`,e(n.li,{children:[e(n.strong,{children:"How It Helps:"})," It speeds up analytical workflows by enabling quick iteration and combination of manual and AI-assisted querying."]}),`
`]}),`
`,e(n.h2,{children:"Community Edition (CE) vs Enterprise Edition (EE)"}),`
`,e(n.p,{children:"WhoDB is available in two primary editions, each targeting different user needs."}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Feature"}),e(n.th,{children:"Community Edition (CE)"}),e(n.th,{children:"Enterprise Edition (EE)"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:"Plugins"}),e(n.td,{children:"Full open-source plugin set"}),e(n.td,{children:"Includes additional enterprise-grade plugins"})]}),e(n.tr,{children:[e(n.td,{children:"AI Integrations"}),e(n.td,{children:"Supported but without advanced enterprise features"}),e(n.td,{children:"Enhanced AI, security, and scalability features"})]}),e(n.tr,{children:[e(n.td,{children:"License"}),e(n.td,{children:"Apache 2.0 Open Source"}),e(n.td,{children:"Commercial license with premium support"})]}),e(n.tr,{children:[e(n.td,{children:"Intended Users"}),e(n.td,{children:"Individuals, small teams, open-source advocates"}),e(n.td,{children:"Enterprises needing advanced control and support"})]})]})]}),`
`,e(n.p,{children:[e(n.strong,{children:"Note:"})," EE plugins are automatically initialized during engine setup if building with the ",e(n.code,{children:"ee"})," tag."]}),`
`,e(n.h2,{children:"Database Profiles"}),`
`,e(n.p,{children:"Database Profiles are saved authentication and connection configurations that WhoDB uses to simplify access."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"What They Include:"})," Hostname, username, database name, port, passwords, and advanced custom settings."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Profiles vs Ad-hoc Connections:"})," Profiles enable users to quickly switch between frequently used databases without re-entering credentials."]}),`
`,e(n.li,{children:[e(n.strong,{children:"IsProfile Flag:"})," Indicates if a set of credentials is a predefined profile or a one-time connection."]}),`
`]}),`
`,e(n.p,{children:[e(n.strong,{children:"Profiles Management:"}),`
Profiles can be loaded from environment variables or configuration files and appear in login flows for easy selection.`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"How These Concepts Interrelate"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Plugins provide the mechanism to connect to Storage Units"})," representing actual databases."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Database Profiles configure those connections"})," with the necessary credentials."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Users interact with data stored in Storage Units"})," via WhoDB’s UI, enhanced by AI Models for conversational query capabilities."]}),`
`,e(n.li,{children:[e(n.strong,{children:"The Scratchpad serves as the personal workspace"})," combining manual queries and AI-guided explorations."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Edition determines the available features and plugins,"})," influencing what databases and AI capabilities users can access."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Practical Tips"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"When connecting to new databases, consider creating and saving a Database Profile for efficient management."}),`
`,e(n.li,{children:"Use the Scratchpad to test AI-generated queries before running them on live datasets."}),`
`,e(n.li,{children:"Familiarize yourself with which Plugins correspond to your database types to understand possible feature limitations or advantages."}),`
`,e(n.li,{children:"Evaluate whether the Community or Enterprise Edition best suits your needs, especially if you require enhanced plugins or support."}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Troubleshooting Common Conceptual Issues"}),`
`,e(r,{title:"Common User Questions About Core Concepts",children:[e(t,{title:"Why can’t I see my database in WhoDB after adding it?",children:e(n.p,{children:"Check that the correct Plugin supports your database type and that the corresponding Storage Unit is properly configured with valid Credentials or Profiles."})}),e(t,{title:"How do AI models integrate with my database queries?",children:e(n.p,{children:"AI Models interpret your natural language inputs and translate them into SQL or database commands, enhancing your query efficiency and reducing the need for deep SQL knowledge."})}),e(t,{title:"What’s the difference between a Scratchpad query and a saved Profile?",children:e(n.p,{children:"A Scratchpad query is a temporary or working query you can execute or modify anytime, whereas a Profile saves connection details for repeated database access."})})]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:["For a deeper understanding of the system architecture, data flow, and plugin integrations, please explore the ",e(n.a,{href:"/overview/architecture-concepts-group/system-architecture-overview",children:"System Architecture Overview"})," and ",e(n.a,{href:"/concepts/architecture-overview/plugin-engine",children:"Plugin Engine & Database Integration"})," documentation. To get hands-on quickly, use the ",e(n.a,{href:"/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})," guide."]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:[e(n.em,{children:"Ready to explore more?"})," Check out the next conceptual deep dive on ",e(n.a,{href:"/concepts/security-scalability/security-auth",children:"Security Model & Authentication"})," to understand how credentials and authorization protect your data in WhoDB."]}),`
`,e(n.hr,{})]})}function c(i={}){const{wrapper:n}={...l(),...i.components};return n?e(n,{...i,children:e(a,{...i})}):a(i)}function o(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{c as default};
