const e=`---
title: "Security and Authentication Essentials"
description: "Guidelines for managing user credentials, session security, safe authentication flows, and best practices for running WhoDB in production environments."
---

# Security and Authentication Essentials

## Overview
This guide provides practical instructions and best practices for managing user credentials, ensuring session security, implementing safe authentication flows, and maintaining secure operation of WhoDB in production environments. It focuses exclusively on the authentication and security aspects within WhoDB’s web application layer.

## Prerequisites
- You must have WhoDB installed and running.
- Familiarity with basic web application operations.
- Access to WhoDB’s login interface or API gateway configuration.
- Administrator or user roles that can manage login profiles.

## Expected Outcome
By following this guide, you will understand how to securely log in and log out of WhoDB, manage authentication tokens, configure session security, and apply best practices for running WhoDB safely in production.

## Time Estimate
Approximately 15-25 minutes depending on familiarity with authentication concepts.

## Difficulty Level
Intermediate: Requires understanding of authentication flows, session management, and production security concerns.

---

## 1. Understanding Authentication Flow in WhoDB
WhoDB uses a token-based authentication system combined with session cookies or API gateway tokens to securely manage user credentials and sessions.

- **Login:** Users provide database credentials or select saved profiles via the login page.
- **Token Generation:** Credentials are encoded into a base64 string and stored either in a cookie or passed via Authorization headers.
- **Token Validation:** On each API request, the token is decoded and validated to ensure the session is authorized.
- **Logout:** Invalidates the session by clearing the token and profile data.

### How It Works Behind the Scenes
When a request arrives, the \`AuthMiddleware\` examines the route:

- Public routes allow unauthenticated access.
- Protected routes require a valid authentication token.
- Tokens are validated either from a cookie (\`Token\`) or an Authorization header (for API Gateway setups).
- Profile credentials tied to tokens are resolved and attached to request context for authorization checks.

<Tip>
Understanding this flow ensures that security mechanisms work seamlessly with WhoDB's UI and API requests.
</Tip>

---

## 2. Logging In to WhoDB

### Step 1: Navigate to the Login Page
- Open your browser and go to \`https://your-whodb-instance/login\`.

### Step 2: Choose Your Database Type
- Select from supported databases (e.g., MySQL, PostgreSQL, SQLite, MongoDB).
- The form dynamically adjusts required fields based on this selection.

### Step 3: Enter Connection Credentials
- Provide hostname, database name, username, and password as applicable.
- For PostgreSQL or MongoDB, you can paste a connection URL, and WhoDB will parse the details automatically.

### Step 4: Configure Advanced Settings (Optional)
- Click the 'Advanced' button to reveal extra connection options (e.g., port, SSL mode).
- Modify only if you understand the connection details.

### Step 5: Submit Credentials
- Click the 'Submit' button to authenticate.
- On success, you will be redirected to the storage unit dashboard.

### Step 6: Using Saved Profiles
- If you have saved login profiles, select one from the 'Available profiles' dropdown.
- Click 'Login' to authenticate with stored credentials.

<Check>
Successful login shows a notification and takes you to the data exploration page.
</Check>

### Common Pitfalls
- Leaving required fields empty triggers validation errors.
- Incorrect credentials result in login failure notifications.
- Connection URL parsing might fail if the URL is malformed.

<Warning>
Never share your passwords or connection URLs publicly. Use secure channels for credential sharing.
</Warning>

---

## 3. Session Security and Token Management

### Token Storage
- WhoDB stores authentication tokens in HTTP cookies for browser sessions.
- In API Gateway mode, tokens are passed in HTTP \`Authorization\` headers prefixed by \`Bearer \`.

### Token Validation
- Tokens are base64 encoded JSON containing user and connection info.
- Each API request verifies token integrity and expiration.
- Invalid, missing, or malformed tokens cause an immediate \`401 Unauthorized\` response.

### Token Expiry and Revocation
- Tokens validated against a whitelist in \`env.Tokens\` for API gateway scenarios.
- Logout explicitly clears stored tokens to prevent reuse.

<Note>
Token validation is a critical security step ensuring only authorized users access WhoDB.
</Note>

---

## 4. Logging Out of WhoDB

### Step 1: Initiate Logout
- Click the logout button or navigate to \`https://your-whodb-instance/logout\`.

### Step 2: Logout Process
- The system executes a GraphQL mutation to clear session tokens.
- Session data is cleared from local storage and cookies.

### Step 3: Confirmation
- A notification confirms successful logout.
- The user is redirected to the login page.

<Check>
After logout, any attempt to access protected routes redirects to login.
</Check>

---

## 5. Best Practices for Running WhoDB in Production

### Secure Credential Storage and Access
- Ensure environment variables or external vaults securely store sensitive tokens and credentials.
- Do not hard-code credentials or expose them in logs.

### Limit Access Through Network Controls
- Restrict WhoDB access using firewalls, VPNs, or API gateways.
- Use HTTPS to encrypt all traffic and protect credential transmissions.

### Token and Session Management
- Regularly rotate tokens and credentials.
- Enforce session timeouts and inactivity logout.

### Configuration Management
- Enable strict CORS policies to control allowed origins.
- Monitor logs for unauthorized access attempts.

### Monitoring & Alerts
- Implement alerting on failed login attempts or unusual authentication patterns.

<Warning>
Running WhoDB with default settings in a production environment can expose sensitive data if best practices are not followed.
</Warning>

---

## 6. Troubleshooting Common Issues

<AccordionGroup title="Troubleshooting Authentication and Security">
<Accordion title="Login Fails with 'All fields are required'">Ensure all required fields for your database type are complete before submitting. For database URLs, verify the format and completeness.</Accordion>
<Accordion title="Unauthorized Error After Login">Check that your token is being set in cookies or Authorization header properly. If behind an API Gateway, ensure token validation is enabled and tokens are registered.</Accordion>
<Accordion title="Request Body Too Large Error">Requests exceeding 1MB are blocked by middleware. Optimize payload size or check for malformed requests.</Accordion>
<Accordion title="Logout Does Not Clear Session">Verify cookies are properly cleared. Browser settings or extensions could block cookie removal.</Accordion>
</AccordionGroup>

<Tip>
Use browser developer tools to inspect HTTP headers, cookies, and network requests during login and logout flows to diagnose issues.
</Tip>

---

## 7. Summary Diagram of Authentication Flow

\`\`\`mermaid
flowchart TD
  Start([User accesses WhoDB]) --> CheckPublicRoute{Is route public?}
  CheckPublicRoute -- Yes --> PublicAccess[Allow access without authentication]
  CheckPublicRoute -- No --> CheckToken[Check Authorization Token]
  CheckToken -->|Token missing| Unauthorized[Return 401 Unauthorized]
  CheckToken -->|Token present| DecodeToken[Decode and validate token]
  DecodeToken -->|Invalid token| Unauthorized
  DecodeToken -->|Valid token| FetchProfile[Retrieve user credentials]
  FetchProfile --> AuthorizedAccess[Allow request to proceed]
  AuthorizedAccess --> ProcessRequest[Execute user requested API or UI action]
  ProcessRequest --> End[Response returned]

  StartLogout([User clicks logout]) --> SendLogoutMutation[Send Logout GraphQL mutation]
  SendLogoutMutation --> ClearSession[Clear cookies and session data]
  ClearSession --> RedirectLogin[Redirect to Login page]

  Unauthorized -.->|Attempt access| RedirectLogin
\`\`\`

---

## Related Documentation
- [Connecting to Your Database](/guides/essential-workflows/connecting-to-your-database) — for securing database credentials.
- [Troubleshooting Common Issues](/getting-started/troubleshooting/troubleshooting-common-issues) — for resolving authentication errors.
- [Initial Configuration](/getting-started/initial-config-launch/initial-configurations) — for setting environment variables and enabling API gateway mode.
- [Logout Implementation Details](/frontend/src/pages/auth/logout.tsx) — for understanding client-side logout.

## Next Steps
- Review production deployment security guidelines.
- Enable HTTPS and configure CORS for your deployment.
- Implement regular security audits and log monitoring.

<Info>
This guide centralizes security and authentication user needs, empowering you to safely manage access and credentials in WhoDB.
</Info>
`;export{e as default};
