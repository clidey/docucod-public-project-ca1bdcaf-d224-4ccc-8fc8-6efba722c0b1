import{u as l,a as e,k as c}from"./index-CxwdZWLc.js";function d(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...n.components},{Check:r,Info:s,Note:a,Warning:o}=i;return r||t("Check"),s||t("Info"),a||t("Note"),o||t("Warning"),e(c,{children:[e(i.hr,{}),`
`,e(i.h2,{children:`title: "Permissions & Data Access Patterns"
description: "Understand the approach WhoDB takes to data access control: from credential-based database connection down to field and row-level visibility. See how WhoDB's user sessions map to underlying database permissions, and the boundaries for who can view or modify data."`}),`
`,e(i.h1,{children:"Permissions & Data Access Patterns in WhoDB"}),`
`,e(i.p,{children:"WhoDB offers a robust and flexible approach to data access control, ensuring that users interact with your connected databases securely and appropriately. This guide unpacks the permission architecture from the moment credentials are used to establish database connections, down to fine-grained control at the row and field level. Understanding these concepts enables you to configure WhoDB to match your organizational security policies and maximize secure data accessibility."}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"Understanding WhoDB’s Permission Model"}),`
`,e(i.p,{children:"At its core, WhoDB's data access follows a credential-based model. When a user attempts a login, WhoDB authenticates based on the database connection credentials provided — either directly or via saved profiles. These credentials dictate the permissions available for viewing or modifying data within the linked database."}),`
`,e(i.h3,{children:"Credential-Based Authentication"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:[e(i.strong,{children:"Login Credentials:"})," Users can provide database credentials manually (host, username, password, etc.) or select from pre-defined profiles stored in WhoDB."]}),`
`,e(i.li,{children:[e(i.strong,{children:"Profile Usage:"})," Profiles encapsulate saved credentials and metadata, enabling streamlined login without repeated manual input."]}),`
`,e(i.li,{children:[e(i.strong,{children:"Session Mapping:"})," Upon login, WhoDB maps the active user session to the exact permission set associated with the provided credentials."]}),`
`]}),`
`,e(i.p,{children:"This mechanism means that permission enforcement originates at the database layer, aligned with database roles, users, and policies out-of-the-box."}),`
`,e(r,{children:e(i.p,{children:"This approach ensures that WhoDB does not override your database’s native security model but acts as a gateway reflecting your database's permission constraints."})}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"Permission Boundaries and Session Scope"}),`
`,e(i.p,{children:"Each logged-in session’s scope tightly corresponds to the underlying database user’s privileges:"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:[e(i.strong,{children:"Schema and Storage Units:"})," Access to specific schemas and their storage units reflects granted read or write permissions of the database user."]}),`
`,e(i.li,{children:[e(i.strong,{children:"Operations Allowed:"})," Read (SELECT), write (INSERT, UPDATE, DELETE), and schema-related operations are permitted in WhoDB only if the credentials support them."]}),`
`,e(i.li,{children:[e(i.strong,{children:"Profile Saved Permissions:"})," Saved profiles store connection details but do not store permissions themselves; permissions are dynamic per database user rights."]}),`
`]}),`
`,e(s,{children:e(i.p,{children:"WhoDB inherits, not redefines, authorization logic — any permission changes in the database immediately apply to active and future sessions connected via those credentials."})}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"Data Access Levels Supported"}),`
`,e(i.p,{children:"WhoDB operates within these permission dimensions:"}),`
`,e(i.table,{children:[e(i.thead,{children:e(i.tr,{children:[e(i.th,{children:"Access Level"}),e(i.th,{children:"Description"}),e(i.th,{children:"WhoDB Implementation"})]})}),e(i.tbody,{children:[e(i.tr,{children:[e(i.td,{children:"Global Database"}),e(i.td,{children:"Permission to log in and connect to the database instance"}),e(i.td,{children:"Valid credentials required for login"})]}),e(i.tr,{children:[e(i.td,{children:"Schema Level"}),e(i.td,{children:"Permission to view or alter specific database schemas"}),e(i.td,{children:"Schema discovery and visibility controlled"})]}),e(i.tr,{children:[e(i.td,{children:"Storage Unit Level"}),e(i.td,{children:"Permission to browse, query, edit tables/collections/documents"}),e(i.td,{children:"UI access reflects accessible storage units"})]}),e(i.tr,{children:[e(i.td,{children:"Row Level"}),e(i.td,{children:"Permission to read, add, update, or delete individual records"}),e(i.td,{children:"Inline edits and row operations respect DB rights"})]}),e(i.tr,{children:[e(i.td,{children:"Field Level"}),e(i.td,{children:"Permission to view or modify specific columns or document fields"}),e(i.td,{children:"Field selection and editing constrained accordingly"})]})]})]}),`
`,e(a,{children:e(i.p,{children:"Row-level or field-level filtering relies entirely on the database's native permission system or implemented security policies (e.g., views or row-level security) — WhoDB does not impose an additional layer but surfaces what the database permits."})}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"Workflow: How Permissions Affect User Interactions"}),`
`,e(i.h3,{children:"1. Connecting and Logging In"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:"User inputs credentials or selects a saved profile."}),`
`,e(i.li,{children:"WhoDB validates required fields based on database type."}),`
`,e(i.li,{children:"On successful authentication, a user session is created that reflects that user’s database permissions."}),`
`]}),`
`,e(i.h3,{children:"2. Exploring Storage Units"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:"Storage units (tables, collections) visible in WhoDB correspond exactly to that user's database permissions."}),`
`,e(i.li,{children:"Attempts to view or manipulate unauthorized storage units result in errors or absence from listing."}),`
`]}),`
`,e(i.h3,{children:"3. Browsing & Filtering Data"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:"Queries issued through WhoDB encapsulate user rights; filters and pagination respect read permissions."}),`
`,e(i.li,{children:"Lack of select rights means data is inaccessible."}),`
`]}),`
`,e(i.h3,{children:"4. Editing Data"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:"Updates, inserts, or deletes execute only if the database user has the required write permissions."}),`
`,e(i.li,{children:"Attempts to modify restricted rows or fields are rejected by the database, surfaced to the user via WhoDB notifications."}),`
`]}),`
`,e(i.h3,{children:"5. Session Lifecycle"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:"Login state and permissions remain active until logout or session expiration."}),`
`,e(i.li,{children:"Permissions refresh dynamically if credentials or database roles change and user logs in again."}),`
`]}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"Practical Tips & Best Practices for Managing Permissions"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:[e(i.strong,{children:"Use Database Roles:"})," Manage permissions through database roles rather than individual user accounts for simpler and scalable permission management."]}),`
`,e(i.li,{children:[e(i.strong,{children:"Leverage Profiles:"})," Create named profiles in WhoDB for each role or permission scope to ease user login and ensure consistent access."]}),`
`,e(i.li,{children:[e(i.strong,{children:"Test with Minimal Privileges:"})," Always test WhoDB connections with the least privileges needed to accomplish tasks."]}),`
`,e(i.li,{children:[e(i.strong,{children:"Secure Stored Profiles:"})," Ensure stored login profiles are secured via environment protections and that users don’t share credentials inadvertently."]}),`
`,e(i.li,{children:[e(i.strong,{children:"Audit Database Security Policies:"})," Combine WhoDB’s visualization and data exploration features with database native security policies like row-level security or views for fine-grained control."]}),`
`]}),`
`,e(o,{children:e(i.p,{children:"Avoid using elevated administrative credentials for general WhoDB use. Restrict admin users to management tasks to reduce risk exposure."})}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"Common Pitfalls & Troubleshooting"}),`
`,e(i.table,{children:[e(i.thead,{children:e(i.tr,{children:[e(i.th,{children:"Issue"}),e(i.th,{children:"Cause"}),e(i.th,{children:"Resolution"})]})}),e(i.tbody,{children:[e(i.tr,{children:[e(i.td,{children:"Cannot See Expected Tables"}),e(i.td,{children:"Insufficient DB permissions"}),e(i.td,{children:"Confirm database user has SELECT permissions on tables"})]}),e(i.tr,{children:[e(i.td,{children:"Edit Operations Fail"}),e(i.td,{children:"Write permissions missing or denied"}),e(i.td,{children:"Verify user can INSERT/UPDATE/DELETE on target tables"})]}),e(i.tr,{children:[e(i.td,{children:"Profile Login Fails"}),e(i.td,{children:"Invalid or outdated credentials"}),e(i.td,{children:"Update profile credentials with correct info"})]}),e(i.tr,{children:[e(i.td,{children:"Partial Data Visibility"}),e(i.td,{children:"Row-level security or view restrictions"}),e(i.td,{children:"Review DB policies; test access from native DB clients"})]}),e(i.tr,{children:[e(i.td,{children:"Unexpected Errors"}),e(i.td,{children:"Mismatch in schema or database type"}),e(i.td,{children:"Verify settings in WhoDB Login page match DB setup"})]})]})]}),`
`,e(i.p,{children:["For detailed login troubleshooting, please consult the ",e(i.a,{href:"https://whodb.com/docs/faq/troubleshooting-optimizations/login-auth-issues",children:"Login and Connection Issues"})," documentation."]}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"How Permissions Map to WhoDB Components"}),`
`,e(i.h3,{children:"Login and Authentication"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:["Managed via ",e(i.code,{children:"LoginPage"})," component."]}),`
`,e(i.li,{children:"Users input connection creds or select a stored profile."}),`
`,e(i.li,{children:"Validation ensures required fields per database type."}),`
`,e(i.li,{children:["Session state held in Redux ",e(i.code,{children:"auth"})," store with profiles and current session."]}),`
`]}),`
`,e(i.h3,{children:"Storage Unit Visibility"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:"Controlled through queries that fetch storage units accessible to logged-in user."}),`
`,e(i.li,{children:["UI components like ",e(i.code,{children:"StorageUnitPage"})," and ",e(i.code,{children:"ExploreStorageUnit"})," render only authorized data units."]}),`
`]}),`
`,e(i.h3,{children:"Inline Editing and Data Operations"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:["Editing operations are performed via GraphQL mutations like ",e(i.code,{children:"UpdateStorageUnit"}),", ",e(i.code,{children:"AddRow"}),", and ",e(i.code,{children:"DeleteRow"}),"."]}),`
`,e(i.li,{children:"These invoke database queries that require underlying permissions."}),`
`,e(i.li,{children:"Errors surface to UI as notifications managed by centralized feedback mechanisms."}),`
`]}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"Visualizing Permissions Flow"}),`
`,e(i.pre,{children:e(i.code,{className:"language-mermaid",children:`flowchart TD
    A[User Initiates Login] --> B[Provide Credentials or Select Profile]
    B --> C[WhoDB Validates Inputs]
    C -->|Valid| D[Authenticate Against Database]
    C -->|Invalid| E[Show Error: Missing Required Fields]
    D -->|Success| F[Create User Session with DB User Permissions]
    D -->|Failure| G[Show Authentication Failure Notification]
    F --> H[Fetch Accessible Storage Units & Schemas]
    H --> I[Display Allowed Storage Units in UI]
    I --> J[User Browses or Queries Data]
    J --> K{Is User Authorized for Operation?}
    K -->|Yes| L[Execute Query or Mutation]
    K -->|No| M[Show Permission Denied Notification]
    L --> N[Return Data or Confirmation]
    M --> N

    classDef error fill:#f9d6d5,stroke:#f12d29,stroke-width:2px;
    class E,G,M error;
`})}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"Key Takeaways"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:"WhoDB’s data access strictly reflects the permissions of the logged-in database user."}),`
`,e(i.li,{children:"Profiles streamline repeated logins while respecting credential scope."}),`
`,e(i.li,{children:"Row- and field-level permissions depend on your database's native security."}),`
`,e(i.li,{children:"Properly managing database roles and users maximizes secure, productive use of WhoDB."}),`
`,e(i.li,{children:"UI feedback and errors help diagnose permission-related issues interactively."}),`
`]}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"Next Steps"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:["Review the ",e(i.a,{href:"https://whodb.com/docs/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database Guide"})," to configure profiles and credentials correctly."]}),`
`,e(i.li,{children:["Explore the ",e(i.a,{href:"https://whodb.com/docs/concepts/security-scalability/security-auth",children:"Security Model & Authentication Documentation"})," to deepen understanding of WhoDB’s authentication flows."]}),`
`,e(i.li,{children:"For advanced access control, implement database-side row-level security or views as appropriate."}),`
`,e(i.li,{children:["Visit the ",e(i.a,{href:"https://whodb.com/docs/guides/essential-workflows/exploring-and-managing-data",children:"Exploring and Managing Data Guide"})," to see how permissions impact everyday workflows."]}),`
`]}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"Glossary"}),`
`,e(i.table,{children:[e(i.thead,{children:e(i.tr,{children:[e(i.th,{children:"Term"}),e(i.th,{children:"Definition"})]})}),e(i.tbody,{children:[e(i.tr,{children:[e(i.td,{children:"Storage Unit"}),e(i.td,{children:"A database abstraction representing tables, collections, or similar data containers."})]}),e(i.tr,{children:[e(i.td,{children:"Profile"}),e(i.td,{children:"Saved database credentials facilitating login without manual re-entry."})]}),e(i.tr,{children:[e(i.td,{children:"Role"}),e(i.td,{children:"Database-level grouping of permissions assigned to users for access control."})]}),e(i.tr,{children:[e(i.td,{children:"Row-Level Security"}),e(i.td,{children:"Database policies restricting access on individual rows within tables or collections."})]}),e(i.tr,{children:[e(i.td,{children:"Schema"}),e(i.td,{children:"Logical grouping of database objects such as tables and views."})]})]})]}),`
`,e(i.hr,{}),`
`,e(i.h2,{children:"References"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:e(i.a,{href:"https://github.com/clidey/whodb/blob/main/frontend/src/pages/auth/login.tsx",children:"Login Page Source"})}),`
`,e(i.li,{children:e(i.a,{href:"https://github.com/clidey/whodb/blob/main/frontend/src/store/auth.ts",children:"Authentication Store"})}),`
`,e(i.li,{children:e(i.a,{href:"https://whodb.com/docs/guides/essential-workflows/connecting-to-your-database",children:"Database Connection Guide"})}),`
`,e(i.li,{children:e(i.a,{href:"https://whodb.com/docs/concepts/security-scalability/security-auth",children:"Security Model Documentation"})}),`
`,e(i.li,{children:e(i.a,{href:"https://whodb.com/docs/guides/essential-workflows/exploring-and-managing-data",children:"Exploring and Managing Data"})}),`
`]}),`
`,e(i.hr,{}),`
`,e(i.p,{children:"By understanding and working within these permission frameworks, you ensure that WhoDB remains a secure and effective interface to your database environments, respecting and leveraging your database's inherent security life cycle."})]})}function u(n={}){const{wrapper:i}={...l(),...n.components};return i?e(i,{...n,children:e(d,{...n})}):d(n)}function t(n,i){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{u as default};
