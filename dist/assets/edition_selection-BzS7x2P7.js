import{u as l,a as e,k as s}from"./index-CxwdZWLc.js";function c(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...i.components},{Info:d,Note:o,Tip:t}=n;return d||r("Info"),o||r("Note"),t||r("Tip"),e(s,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Choosing Community vs. Enterprise Edition"
description: "Decide which version of WhoDB to deploy by comparing features, deployment mechanics, and licensing differences. This page outlines edition-specific build steps and how to switch between Community and Enterprise deployments, ensuring users choose the right foundation for their needs."`}),`
`,e(n.h1,{children:"Choosing Community vs. Enterprise Edition"}),`
`,e(n.p,{children:"Selecting the appropriate edition of WhoDB is a critical step that shapes your deployment experience, capabilities, and maintenance approach. This guide helps you understand the fundamental differences between the Community Edition (CE) and Enterprise Edition (EE), clarifies build and deployment flow distinctions, and provides actionable steps to switch between editions, ensuring your deployment foundation matches your organizational needs."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. Overview of Editions"}),`
`,e(n.p,{children:"WhoDB offers two main editions, each tailored to distinct user groups and deployment scenarios:"}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Feature Aspect"}),e(n.th,{children:"Community Edition (CE)"}),e(n.th,{children:"Enterprise Edition (EE)"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:e(n.strong,{children:"Target Users"})}),e(n.td,{children:"Individual developers, small teams, open source enthusiasts"}),e(n.td,{children:"Organizations requiring enhanced functionality, scalability, and enterprise integrations"})]}),e(n.tr,{children:[e(n.td,{children:e(n.strong,{children:"Feature Set"})}),e(n.td,{children:"Core database support including PostgreSQL, MySQL, SQLite3, MongoDB, Redis, Elasticsearch, ClickHouse"}),e(n.td,{children:"All CE features plus advanced plugins, enhanced authentication, compliance features, and enterprise-grade support"})]}),e(n.tr,{children:[e(n.td,{children:e(n.strong,{children:"Licensing"})}),e(n.td,{children:"Open source under Apache 2.0"}),e(n.td,{children:"Commercial license with additional legal terms and support contracts"})]}),e(n.tr,{children:[e(n.td,{children:e(n.strong,{children:"Extensibility"})}),e(n.td,{children:"Plugin architecture with core database adapters"}),e(n.td,{children:"Extended plugin ecosystem including proprietary enterprise plugins and middleware"})]}),e(n.tr,{children:[e(n.td,{children:e(n.strong,{children:"Support & Maintenance"})}),e(n.td,{children:"Community-driven with public issue tracking"}),e(n.td,{children:"Dedicated support, patches, and SLAs"})]})]})]}),`
`,e(t,{children:e(n.p,{children:"Choosing between CE and EE depends on your specific requirements around features, scalability, support, and licensing. CE is ideal for cost-sensitive or community-powered projects, whereas EE empowers enterprise deployments with additional capabilities and assurances."})}),`
`,e(n.h2,{children:"2. Feature Differences in Detail"}),`
`,e(n.h3,{children:"Core Plugin Availability"}),`
`,e(n.p,{children:"Community Edition provides a solid foundation supporting the following databases through official plugins:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"PostgreSQL"}),`
`,e(n.li,{children:"MySQL and MariaDB"}),`
`,e(n.li,{children:"SQLite3"}),`
`,e(n.li,{children:"MongoDB"}),`
`,e(n.li,{children:"Redis"}),`
`,e(n.li,{children:"Elasticsearch"}),`
`,e(n.li,{children:"ClickHouse (Community variant)"}),`
`]}),`
`,e(n.p,{children:"Enterprise Edition builds on this foundation by registering additional proprietary plugins during engine initialization, enhancing compatibility and functionality."}),`
`,e(n.h3,{children:"Authentication and Security Enhancements"}),`
`,e(n.p,{children:"EE offers advanced authentication schemes and tighter security integrations beyond the basic credential mechanisms in CE, aligning with enterprise compliance and governance standards."}),`
`,e(n.h3,{children:"AI and Conversational Query Capabilities"}),`
`,e(n.p,{children:"Both editions embed AI-augmented data conversational capabilities, but EE may include support for specialized AI providers or models that require licensing."}),`
`,e(n.h3,{children:"Deployment and Observability"}),`
`,e(n.p,{children:"Enterprise Edition includes middleware components supporting observability, monitoring, and integration with enterprise operational toolchains."}),`
`,e(o,{children:e(n.p,{children:"The above feature distinctions are enforced both at build time and run time by selecting the appropriate edition flag."})}),`
`,e(n.h2,{children:"3. How to Build and Switch Editions"}),`
`,e(n.p,{children:"WhoDB's source supports dual edition build paths. The backend binary and frontend artifacts can be built specifically for CE or EE."}),`
`,e(n.h3,{children:"3.1 Backend Build Steps"}),`
`,e(n.p,{children:"You can build the backend for either edition using the provided script:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`./scripts/build-backend.sh [ce|ee]
`})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Running ",e(n.code,{children:"./scripts/build-backend.sh ce"})," generates the Community Edition backend binary (",e(n.code,{children:"whodb"}),")."]}),`
`,e(n.li,{children:["Running ",e(n.code,{children:"./scripts/build-backend.sh ee"})," generates the Enterprise Edition backend binary (",e(n.code,{children:"whodb-ee"}),")."]}),`
`]}),`
`,e(n.p,{children:"This script performs the following steps:"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:"Generates GraphQL code tailored for the selected edition."}),`
`,e(n.li,{children:"Downloads necessary Go dependencies."}),`
`,e(n.li,{children:"(For EE) Downloads additional Enterprise dependencies."}),`
`,e(n.li,{children:["Runs ",e(n.code,{children:"go generate"})," if necessary."]}),`
`,e(n.li,{children:"Compiles the binary with edition-specific build flags."}),`
`]}),`
`,e(t,{children:e(n.p,{children:["Building EE requires access to the ",e(n.code,{children:"ee"})," directory containing proprietary code, which must be present in the project root."]})}),`
`,e(n.h3,{children:"3.2 Frontend Edition Configuration"}),`
`,e(n.p,{children:["The frontend selects the edition via an environment variable ",e(n.code,{children:"VITE_BUILD_EDITION"}),". It defaults to ",e(n.code,{children:"ce"}),"."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:`export const BUILD_EDITION = (import.meta.env.VITE_BUILD_EDITION as 'ce' | 'ee') || 'ce';
`})}),`
`,e(n.p,{children:"You can switch the UI edition by setting this variable before building the frontend:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`VITE_BUILD_EDITION=ee pnpm run build
`})}),`
`,e(n.p,{children:"The UI will then load edition-specific GraphQL schema and features appropriately."}),`
`,e(n.h3,{children:"3.3 Runtime Edition Selection"}),`
`,e(n.p,{children:"The backend binary built for a specific edition will register plugins and enable features accordingly during engine initialization."}),`
`,e(n.p,{children:"In the source code, enterprise plugins are registered only when the EE initialization function is set and invoked:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-go",children:`if initEE != nil {
    initEE(MainEngine)
}
`})}),`
`,e(n.p,{children:"If this function is not set (such as in CE builds), EE-only functionality is omitted."}),`
`,e(d,{children:e(n.p,{children:"Be sure to deploy the matching backend and frontend editions to avoid feature mismatch issues."})}),`
`,e(n.h2,{children:"4. Licensing and Compliance Implications"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"CE is offered under the permissive Apache License 2.0, allowing free use, distribution, and modification."}),`
`,e(n.li,{children:"EE typically requires a commercial license agreement; consult your legal counsel before deploying EE in production."}),`
`]}),`
`,e(n.p,{children:"Adherence to licensing is crucial to maintain compliance and gain official support for EE."}),`
`,e(n.h2,{children:"5. Troubleshooting Edition Switching"}),`
`,e(t,{children:[e(n.p,{children:"If you encounter issues where EE features do not appear after building:"}),e(n.ul,{children:[`
`,e(n.li,{children:["Verify the backend binary is built with the ",e(n.code,{children:"ee"})," tag."]}),`
`,e(n.li,{children:["Confirm the frontend environment variable ",e(n.code,{children:"VITE_BUILD_EDITION=ee"})," is set."]}),`
`,e(n.li,{children:["Ensure the ",e(n.code,{children:"ee"})," directory is present and contains the necessary enterprise source."]}),`
`,e(n.li,{children:"Check logs during startup for plugin registration errors."}),`
`]})]}),`
`,e(n.h2,{children:"6. Summary and Recommendations"}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Scenario"}),e(n.th,{children:"Recommendation"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:"Small projects, open source exploration"}),e(n.td,{children:"Use Community Edition for simplicity and cost savings"})]}),e(n.tr,{children:[e(n.td,{children:"Teams needing enterprise plugins, advanced auth"}),e(n.td,{children:"Choose Enterprise Edition and follow EE build instructions"})]}),e(n.tr,{children:[e(n.td,{children:"Migrating or testing EE"}),e(n.td,{children:"Build both editions side-by-side and test integration before deployment"})]})]})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Appendix: Build Script Insights"}),`
`,e(n.p,{children:["The ",e(n.code,{children:"build-backend.sh"})," script orchestrates the build process with these key phases:"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"GraphQL Code Generation:"})," Ensures schema matches edition"]}),`
`,e(n.li,{children:[e(n.strong,{children:"Dependency Management:"})," Downloads Go modules for core and EE"]}),`
`,e(n.li,{children:[e(n.strong,{children:"Code Generation:"})," Runs ",e(n.code,{children:"go generate"})," on Go files"]}),`
`,e(n.li,{children:[e(n.strong,{children:"Binary Compilation:"})," Uses ",e(n.code,{children:"-tags ee"})," for Enterprise builds; binary named ",e(n.code,{children:"whodb-ee"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Version Metadata:"})," Incorporates Git version info into build"]}),`
`]}),`
`,e(n.p,{children:"This careful separation enforces edition integrity and enables seamless switching."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Additional Resources"}),`
`,e(n.p,{children:"For deeper deployment guidance, see:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://whodb.com/docs/deployment/prod_deployment/docker_quickstart",children:"Deploying with Docker & Docker Compose"})}),`
`,e(n.li,{children:e(n.a,{href:"https://whodb.com/docs/deployment/prod_deployment/env_config",children:"Environment Variables & Third-Party Integrations"})}),`
`,e(n.li,{children:e(n.a,{href:"https://github.com/clidey/whodb",children:"Build & Run Guide (GitHub)"})}),`
`,e(n.li,{children:e(n.a,{href:"https://whodb.com/docs/concepts/architecture-overview/plugin-engine",children:"Plugin Engine Architecture"})}),`
`]}),`
`,e(n.h2,{children:"Related Documentation"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://whodb.com/docs/getting-started/setup-requirements/installation-methods",children:"Getting Started: Installation Methods"})}),`
`,e(n.li,{children:e(n.a,{href:"https://whodb.com/docs/overview/architecture-concepts-group/system-architecture-overview",children:"System Architecture Overview"})}),`
`,e(n.li,{children:e(n.a,{href:"https://whodb.com/docs/guides/best-practices-and-optimization/security-and-authentication",children:"Security & Authentication Essentials"})}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"Deploy with confidence by accurately aligning your choice of Community or Enterprise Edition with your project goals and operational demands."})]})}function h(i={}){const{wrapper:n}={...l(),...i.components};return n?e(n,{...i,children:e(c,{...i})}):c(i)}function r(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
