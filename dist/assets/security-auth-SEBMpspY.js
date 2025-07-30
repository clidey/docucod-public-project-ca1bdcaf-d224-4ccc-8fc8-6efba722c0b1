const e=`---
title: "Security Model & Authentication"
description: "Examine WhoDB's security perimeter, including credential storage, authentication flow, session cookie management, and role of the backend in enforcing data access. Learn about public and protected routes, token management, and areas of extensibility for SSO or custom auth."
---

# Security Model & Authentication in WhoDB

## Introduction

Understanding the security model and authentication flow in WhoDB is fundamental to ensuring the integrity and confidentiality of your data. This page explains how WhoDB manages user credentials, authenticates requests, and controls access to its API. You’ll learn about the role of session cookies, token management, protected vs. public routes, and how the backend enforces these security policies to protect your database environment.

## Security Perimeter Overview

WhoDB uses a layered security approach centered on authentication and credential management. Key elements include:

- **Credential Storage:** User credentials are securely encoded and stored in HTTP-only cookies or transmitted via bearer tokens.
- **Authentication Middleware:** Intercepts and validates each incoming request to enforce access control.
- **Public vs. Protected Routes:** Differentiates unprotected endpoints used during development or introspection from secure API calls.
- **Token Validation:** Supports API tokens for gateway-enabled setups to validate user sessions.
- **Extensibility:** The architecture can be extended to support additional authentication schemes like SSO or custom OAuth providers.

This model ensures that WhoDB only processes requests from authenticated users and stops unauthorized access early in the request lifecycle.

---

## Key Concepts

### 1. Credential Storage and Session Cookies

When a user logs in with their credentials, WhoDB encodes this information as JSON, then base64-encodes it into a string stored in an HTTP-only cookie named \`Token\`. This cookie is sent with each HTTP request, providing the backend access to the user’s credentials without exposing them to client-side scripts.

\`\`\`go
// Encoding login info and setting cookie
cookieValue := base64.StdEncoding.EncodeToString(loginInfoJSON)
cookie := &http.Cookie{
    Name:     string(AuthKey_Token),
    Value:    cookieValue,
    Path:     "/",
    HttpOnly: true,
    Expires:  time.Now().Add(24 * time.Hour),
    SameSite: http.SameSiteStrictMode,
}
http.SetCookie(ctx.Value(common.RouterKey_ResponseWriter).(http.ResponseWriter), cookie)
\`\`\`

The cookie's HTTP-only and SameSite flags safeguard against client-side tampering and cross-site request forgery (CSRF).

### 2. Authentication Middleware Flow

WhoDB uses an HTTP middleware component that wraps all incoming requests to enforce security policies.

#### What the middleware does:

- **Check for Public Routes:** Allows unauthenticated access to certain endpoints, including GraphQL Introspection queries in development mode and any requests outside the \`/api\` path.
- **Limit Request Body Size:** Protects the server from denial-of-service via large payloads by setting a 1MB maximum for request bodies.
- **Token Extraction:** 
  - If the API Gateway is enabled (via configured tokens), it extracts a bearer token from the \`Authorization\` header.
  - Otherwise, it looks for the \`Token\` cookie.
- **Token Decoding and Validation:** Decodes the token, unmarshals user credentials, and validates them.
- **Profile Resolution:** Matches credential IDs against saved login profiles and injects the resolved credentials into the request context for downstream handlers.

If any check fails, the middleware immediately responds with appropriate HTTP error codes such as 401 Unauthorized or 413 Payload Too Large.

### 3. Public vs. Protected Routes

To provide flexibility, WhoDB defines:

- **Public routes:** 
  - All non-\`/api\` routes (primarily frontend or static content).
  - GraphQL Introspection queries (only in development mode for schema exploration).
  - Specific GraphQL operations such as \`Login\`, \`Logout\`, \`GetProfiles\`, which are allowed without authentication for onboarding.

- **Protected routes:** 
  - All other \`/api\` routes require valid credentials.
  - These are the core API endpoints that interact with database metadata, query execution, AI models, and other sensitive operations.

### 4. Token Management & Validation

When the API Gateway feature is enabled by setting valid tokens in the environment (\`WHODB_TOKENS\`), requests must include a bearer token in the \`Authorization\` header which is validated against this list.

If the gateway is not enabled, WhoDB relies on the cookie-based token mechanism.

This dual mechanism allows for seamless usage in different deployment scenarios, including enterprise environments with stricter API gateway controls.

### 5. Credential Profiles and Database Selection

WhoDB maintains user credential profiles loaded via environment variables per database type. Upon authentication, if the credential includes a profile ID, the backend matches it against these profiles, enriching the credentials with any specific database or connection details.

This allows users to switch easily between database profiles without re-entering full credentials, supporting efficient workflow management.

## User Authentication Flow

The following steps outline what happens when a user interacts with WhoDB's login system:

1. **User Submits Login:** The frontend sends login credentials which are encoded and set in an HTTP-only cookie.
2. **Authenticated Requests:** Subsequent requests include the cookie or bearer token.
3. **Middleware Validation:** The backend middleware decodes and validates the provided token from headers or cookies.
4. **Context Injection:** Valid credentials are attached to the request context for later GraphQL resolvers.
5. **Profile Resolution:** The system checks if the credentials correspond to a saved profile.
6. **Request Processing:** Authorized requests proceed to query the database or perform allowed operations.

### Logout Handling

Logging out invokes backend code that clears the authentication cookie, effectively revoking session access.

\`\`\`go
func Logout(ctx context.Context) (*model.StatusResponse, error) {
    http.SetCookie(ctx.Value(common.RouterKey_ResponseWriter).(http.ResponseWriter), nil)
    return &model.StatusResponse{
        Status: true,
    }, nil
}
\`\`\`

## Extensibility & Future-Proofing

While WhoDB's current security model focuses on cookie and token-based authentication, it is architected to allow enhancements such as:

- Adding Single Sign-On (SSO) integrations.
- Supporting OAuth and federated authentication.
- Integrating custom authentication plugins at the middleware level.

This aligns with WhoDB’s modular, plugin-based design ethos, offering a flexible foundation for evolving enterprise security needs.

---

## Practical Tips and Best Practices

- **Keep Tokens Secure:** Avoid exposing tokens or credentials to client-side scripts by relying on HTTP-only cookies.
- **Use API Gateway Mode in Enterprise:** Enable \`WHODB_TOKENS\` to centralize and strengthen API token management.
- **Monitor Request Sizes:** Ensure clients do not exceed request limits to prevent service disruptions.
- **Leverage Login Profiles:** Configure multiple database credential profiles for convenient switching without re-login.
- **Protect Development Introspection:** Disable or restrict introspection queries and public routes in production environments.

## Troubleshooting Common Authentication Issues

- **Unauthorized Errors:** Check if the token is properly sent in the \`Authorization\` header or if cookies are set and sent with requests.
- **Token Decode Failures:** Verify tokens are correctly base64 encoded and JSON marshalled.
- **Request Body Too Large:** Remember the maximum request size is 1MB; split large requests accordingly.
- **Missing Profiles:** Confirm environment variables define valid database credential profiles matching expected IDs.

## Diagram: Authentication Request Flow

\`\`\`mermaid
flowchart TD
    U["User / Client"] -->|Login Submit| FE["Frontend UI"]
    FE -->|Sends Credentials| BE["WhoDB Backend Middleware"]

    subgraph "Authentication Middleware"
        BE --> CheckPublic["Check if Public Route"]
        CheckPublic -->|Yes| PassThrough["Allow Request"]
        CheckPublic -->|No| ExtractToken["Extract Token from Cookie or Header"]
        ExtractToken --> DecodeToken["Base64 Decode & JSON Unmarshal"]
        DecodeToken --> ValidateToken["Validate Token/Session"]
        ValidateToken -->|Valid| InjectCtx["Add Credentials to Context"]
        ValidateToken -->|Invalid| Reject["Return 401 Unauthorized"]
    end

    InjectCtx --> ProcessReq["Process GraphQL or REST Request"]
    PassThrough --> ProcessReq
    ProcessReq --> DBAccess["Access Database via Plugins"]
    DBAccess --> Response["Return Data to Client"]
    Reject --> FE
    Response --> FE

    click BE "core/src/auth/auth.go" "Authentication Middleware Implementation"
\`\`\`

---

## Summary

The WhoDB security model robustly manages user authentication via session cookies or bearer tokens validated by the backend authentication middleware. It distinguishes public and protected routes to secure sensitive operations, supports configurable API gateway tokens, and maintains credential profiles for efficient multi-database access. Extensible by design, this security perimeter lays a solid foundation for secure database management and user session control.

---

## Further Reading & Related Documentation

- [Security and Authentication Essentials Guide](https://whodb.com/docs/guides/best-practices-and-optimization/security-and-authentication) — Practical workflows and security best practices.
- [Connecting to Your Database](https://whodb.com/docs/guides/essential-workflows/connecting-to-your-database) — Credential usage and connection profiles.
- [System Architecture Overview](https://whodb.com/docs/concepts/architecture-overview/system-architecture) — Broader context of the backend server and middleware.
- [Troubleshooting Common Issues](https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues) — Identifying and solving authentication and connection problems.

---

Should you require secure single sign-on or customized authentication, consult with WhoDB enterprise support or refer to upcoming extensions in the plugin architecture.`;export{e as default};
