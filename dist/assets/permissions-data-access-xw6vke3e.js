const e=`---
title: "Permissions & Data Access Patterns"
description: "Understand the approach WhoDB takes to data access control: from credential-based database connection down to field and row-level visibility. See how WhoDB's user sessions map to underlying database permissions, and the boundaries for who can view or modify data."
---

# Permissions & Data Access Patterns in WhoDB

WhoDB offers a robust and flexible approach to data access control, ensuring that users interact with your connected databases securely and appropriately. This guide unpacks the permission architecture from the moment credentials are used to establish database connections, down to fine-grained control at the row and field level. Understanding these concepts enables you to configure WhoDB to match your organizational security policies and maximize secure data accessibility.

---

## Understanding WhoDB’s Permission Model

At its core, WhoDB's data access follows a credential-based model. When a user attempts a login, WhoDB authenticates based on the database connection credentials provided — either directly or via saved profiles. These credentials dictate the permissions available for viewing or modifying data within the linked database.

### Credential-Based Authentication

- **Login Credentials:** Users can provide database credentials manually (host, username, password, etc.) or select from pre-defined profiles stored in WhoDB.
- **Profile Usage:** Profiles encapsulate saved credentials and metadata, enabling streamlined login without repeated manual input.
- **Session Mapping:** Upon login, WhoDB maps the active user session to the exact permission set associated with the provided credentials.

This mechanism means that permission enforcement originates at the database layer, aligned with database roles, users, and policies out-of-the-box.

<Check>
This approach ensures that WhoDB does not override your database’s native security model but acts as a gateway reflecting your database's permission constraints.
</Check>

---

## Permission Boundaries and Session Scope

Each logged-in session’s scope tightly corresponds to the underlying database user’s privileges:

- **Schema and Storage Units:** Access to specific schemas and their storage units reflects granted read or write permissions of the database user.
- **Operations Allowed:** Read (SELECT), write (INSERT, UPDATE, DELETE), and schema-related operations are permitted in WhoDB only if the credentials support them.
- **Profile Saved Permissions:** Saved profiles store connection details but do not store permissions themselves; permissions are dynamic per database user rights.

<Info>
WhoDB inherits, not redefines, authorization logic — any permission changes in the database immediately apply to active and future sessions connected via those credentials.
</Info>

---

## Data Access Levels Supported

WhoDB operates within these permission dimensions:

| Access Level      | Description                                                             | WhoDB Implementation                                |
|-------------------|-------------------------------------------------------------------------|-----------------------------------------------------|
| Global Database   | Permission to log in and connect to the database instance              | Valid credentials required for login                |
| Schema Level      | Permission to view or alter specific database schemas                   | Schema discovery and visibility controlled          |
| Storage Unit Level| Permission to browse, query, edit tables/collections/documents          | UI access reflects accessible storage units         |
| Row Level        | Permission to read, add, update, or delete individual records           | Inline edits and row operations respect DB rights    |
| Field Level      | Permission to view or modify specific columns or document fields        | Field selection and editing constrained accordingly |

<Note>
Row-level or field-level filtering relies entirely on the database's native permission system or implemented security policies (e.g., views or row-level security) — WhoDB does not impose an additional layer but surfaces what the database permits.
</Note>

---

## Workflow: How Permissions Affect User Interactions

### 1. Connecting and Logging In

- User inputs credentials or selects a saved profile.
- WhoDB validates required fields based on database type.
- On successful authentication, a user session is created that reflects that user’s database permissions.

### 2. Exploring Storage Units

- Storage units (tables, collections) visible in WhoDB correspond exactly to that user's database permissions.
- Attempts to view or manipulate unauthorized storage units result in errors or absence from listing.

### 3. Browsing & Filtering Data

- Queries issued through WhoDB encapsulate user rights; filters and pagination respect read permissions.
- Lack of select rights means data is inaccessible.

### 4. Editing Data

- Updates, inserts, or deletes execute only if the database user has the required write permissions.
- Attempts to modify restricted rows or fields are rejected by the database, surfaced to the user via WhoDB notifications.

### 5. Session Lifecycle

- Login state and permissions remain active until logout or session expiration.
- Permissions refresh dynamically if credentials or database roles change and user logs in again.

---

## Practical Tips & Best Practices for Managing Permissions

- **Use Database Roles:** Manage permissions through database roles rather than individual user accounts for simpler and scalable permission management.
- **Leverage Profiles:** Create named profiles in WhoDB for each role or permission scope to ease user login and ensure consistent access.
- **Test with Minimal Privileges:** Always test WhoDB connections with the least privileges needed to accomplish tasks.
- **Secure Stored Profiles:** Ensure stored login profiles are secured via environment protections and that users don’t share credentials inadvertently.
- **Audit Database Security Policies:** Combine WhoDB’s visualization and data exploration features with database native security policies like row-level security or views for fine-grained control.

<Warning>
Avoid using elevated administrative credentials for general WhoDB use. Restrict admin users to management tasks to reduce risk exposure.
</Warning>

---

## Common Pitfalls & Troubleshooting

| Issue                      | Cause                                 | Resolution                                            |
|----------------------------|---------------------------------------|-------------------------------------------------------|
| Cannot See Expected Tables | Insufficient DB permissions            | Confirm database user has SELECT permissions on tables|
| Edit Operations Fail       | Write permissions missing or denied   | Verify user can INSERT/UPDATE/DELETE on target tables |
| Profile Login Fails        | Invalid or outdated credentials       | Update profile credentials with correct info          |
| Partial Data Visibility    | Row-level security or view restrictions| Review DB policies; test access from native DB clients|
| Unexpected Errors          | Mismatch in schema or database type   | Verify settings in WhoDB Login page match DB setup    |

For detailed login troubleshooting, please consult the [Login and Connection Issues](https://whodb.com/docs/faq/troubleshooting-optimizations/login-auth-issues) documentation.

---

## How Permissions Map to WhoDB Components

### Login and Authentication

- Managed via \`LoginPage\` component.
- Users input connection creds or select a stored profile.
- Validation ensures required fields per database type.
- Session state held in Redux \`auth\` store with profiles and current session.

### Storage Unit Visibility

- Controlled through queries that fetch storage units accessible to logged-in user.
- UI components like \`StorageUnitPage\` and \`ExploreStorageUnit\` render only authorized data units.

### Inline Editing and Data Operations

- Editing operations are performed via GraphQL mutations like \`UpdateStorageUnit\`, \`AddRow\`, and \`DeleteRow\`.
- These invoke database queries that require underlying permissions.
- Errors surface to UI as notifications managed by centralized feedback mechanisms.

---

## Visualizing Permissions Flow

\`\`\`mermaid
flowchart TD
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
\`\`\`

---

## Key Takeaways

- WhoDB’s data access strictly reflects the permissions of the logged-in database user.
- Profiles streamline repeated logins while respecting credential scope.
- Row- and field-level permissions depend on your database's native security.
- Properly managing database roles and users maximizes secure, productive use of WhoDB.
- UI feedback and errors help diagnose permission-related issues interactively.

---

## Next Steps

- Review the [Connecting to Your Database Guide](https://whodb.com/docs/guides/essential-workflows/connecting-to-your-database) to configure profiles and credentials correctly.
- Explore the [Security Model & Authentication Documentation](https://whodb.com/docs/concepts/security-scalability/security-auth) to deepen understanding of WhoDB’s authentication flows.
- For advanced access control, implement database-side row-level security or views as appropriate.
- Visit the [Exploring and Managing Data Guide](https://whodb.com/docs/guides/essential-workflows/exploring-and-managing-data) to see how permissions impact everyday workflows.

---

## Glossary

| Term              | Definition                                                                             |
|-------------------|----------------------------------------------------------------------------------------|
| Storage Unit      | A database abstraction representing tables, collections, or similar data containers.   |
| Profile           | Saved database credentials facilitating login without manual re-entry.                 |
| Role              | Database-level grouping of permissions assigned to users for access control.          |
| Row-Level Security| Database policies restricting access on individual rows within tables or collections.  |
| Schema            | Logical grouping of database objects such as tables and views.                         |

---

## References

- [Login Page Source](https://github.com/clidey/whodb/blob/main/frontend/src/pages/auth/login.tsx)
- [Authentication Store](https://github.com/clidey/whodb/blob/main/frontend/src/store/auth.ts)
- [Database Connection Guide](https://whodb.com/docs/guides/essential-workflows/connecting-to-your-database)
- [Security Model Documentation](https://whodb.com/docs/concepts/security-scalability/security-auth)
- [Exploring and Managing Data](https://whodb.com/docs/guides/essential-workflows/exploring-and-managing-data)

---

By understanding and working within these permission frameworks, you ensure that WhoDB remains a secure and effective interface to your database environments, respecting and leveraging your database's inherent security life cycle.`;export{e as default};
