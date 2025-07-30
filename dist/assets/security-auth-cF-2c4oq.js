import{u as o,a as n,k as r}from"./index-CxwdZWLc.js";function t(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n(r,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "Security Model & Authentication"
description: "Examine WhoDB's security perimeter, including credential storage, authentication flow, session cookie management, and role of the backend in enforcing data access. Learn about public and protected routes, token management, and areas of extensibility for SSO or custom auth."`}),`
`,n(e.h1,{children:"Security Model & Authentication in WhoDB"}),`
`,n(e.h2,{children:"Introduction"}),`
`,n(e.p,{children:"Understanding the security model and authentication flow in WhoDB is fundamental to ensuring the integrity and confidentiality of your data. This page explains how WhoDB manages user credentials, authenticates requests, and controls access to its API. You’ll learn about the role of session cookies, token management, protected vs. public routes, and how the backend enforces these security policies to protect your database environment."}),`
`,n(e.h2,{children:"Security Perimeter Overview"}),`
`,n(e.p,{children:"WhoDB uses a layered security approach centered on authentication and credential management. Key elements include:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Credential Storage:"})," User credentials are securely encoded and stored in HTTP-only cookies or transmitted via bearer tokens."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Authentication Middleware:"})," Intercepts and validates each incoming request to enforce access control."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Public vs. Protected Routes:"})," Differentiates unprotected endpoints used during development or introspection from secure API calls."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Token Validation:"})," Supports API tokens for gateway-enabled setups to validate user sessions."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Extensibility:"})," The architecture can be extended to support additional authentication schemes like SSO or custom OAuth providers."]}),`
`]}),`
`,n(e.p,{children:"This model ensures that WhoDB only processes requests from authenticated users and stops unauthorized access early in the request lifecycle."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Key Concepts"}),`
`,n(e.h3,{children:"1. Credential Storage and Session Cookies"}),`
`,n(e.p,{children:["When a user logs in with their credentials, WhoDB encodes this information as JSON, then base64-encodes it into a string stored in an HTTP-only cookie named ",n(e.code,{children:"Token"}),". This cookie is sent with each HTTP request, providing the backend access to the user’s credentials without exposing them to client-side scripts."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-go",children:`// Encoding login info and setting cookie
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
`})}),`
`,n(e.p,{children:"The cookie's HTTP-only and SameSite flags safeguard against client-side tampering and cross-site request forgery (CSRF)."}),`
`,n(e.h3,{children:"2. Authentication Middleware Flow"}),`
`,n(e.p,{children:"WhoDB uses an HTTP middleware component that wraps all incoming requests to enforce security policies."}),`
`,n(e.h4,{children:"What the middleware does:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Check for Public Routes:"})," Allows unauthenticated access to certain endpoints, including GraphQL Introspection queries in development mode and any requests outside the ",n(e.code,{children:"/api"})," path."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Limit Request Body Size:"})," Protects the server from denial-of-service via large payloads by setting a 1MB maximum for request bodies."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Token Extraction:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["If the API Gateway is enabled (via configured tokens), it extracts a bearer token from the ",n(e.code,{children:"Authorization"})," header."]}),`
`,n(e.li,{children:["Otherwise, it looks for the ",n(e.code,{children:"Token"})," cookie."]}),`
`]}),`
`]}),`
`,n(e.li,{children:[n(e.strong,{children:"Token Decoding and Validation:"})," Decodes the token, unmarshals user credentials, and validates them."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Profile Resolution:"})," Matches credential IDs against saved login profiles and injects the resolved credentials into the request context for downstream handlers."]}),`
`]}),`
`,n(e.p,{children:"If any check fails, the middleware immediately responds with appropriate HTTP error codes such as 401 Unauthorized or 413 Payload Too Large."}),`
`,n(e.h3,{children:"3. Public vs. Protected Routes"}),`
`,n(e.p,{children:"To provide flexibility, WhoDB defines:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Public routes:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["All non-",n(e.code,{children:"/api"})," routes (primarily frontend or static content)."]}),`
`,n(e.li,{children:"GraphQL Introspection queries (only in development mode for schema exploration)."}),`
`,n(e.li,{children:["Specific GraphQL operations such as ",n(e.code,{children:"Login"}),", ",n(e.code,{children:"Logout"}),", ",n(e.code,{children:"GetProfiles"}),", which are allowed without authentication for onboarding."]}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Protected routes:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["All other ",n(e.code,{children:"/api"})," routes require valid credentials."]}),`
`,n(e.li,{children:"These are the core API endpoints that interact with database metadata, query execution, AI models, and other sensitive operations."}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"4. Token Management & Validation"}),`
`,n(e.p,{children:["When the API Gateway feature is enabled by setting valid tokens in the environment (",n(e.code,{children:"WHODB_TOKENS"}),"), requests must include a bearer token in the ",n(e.code,{children:"Authorization"})," header which is validated against this list."]}),`
`,n(e.p,{children:"If the gateway is not enabled, WhoDB relies on the cookie-based token mechanism."}),`
`,n(e.p,{children:"This dual mechanism allows for seamless usage in different deployment scenarios, including enterprise environments with stricter API gateway controls."}),`
`,n(e.h3,{children:"5. Credential Profiles and Database Selection"}),`
`,n(e.p,{children:"WhoDB maintains user credential profiles loaded via environment variables per database type. Upon authentication, if the credential includes a profile ID, the backend matches it against these profiles, enriching the credentials with any specific database or connection details."}),`
`,n(e.p,{children:"This allows users to switch easily between database profiles without re-entering full credentials, supporting efficient workflow management."}),`
`,n(e.h2,{children:"User Authentication Flow"}),`
`,n(e.p,{children:"The following steps outline what happens when a user interacts with WhoDB's login system:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"User Submits Login:"})," The frontend sends login credentials which are encoded and set in an HTTP-only cookie."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Authenticated Requests:"})," Subsequent requests include the cookie or bearer token."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Middleware Validation:"})," The backend middleware decodes and validates the provided token from headers or cookies."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Context Injection:"})," Valid credentials are attached to the request context for later GraphQL resolvers."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Profile Resolution:"})," The system checks if the credentials correspond to a saved profile."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Request Processing:"})," Authorized requests proceed to query the database or perform allowed operations."]}),`
`]}),`
`,n(e.h3,{children:"Logout Handling"}),`
`,n(e.p,{children:"Logging out invokes backend code that clears the authentication cookie, effectively revoking session access."}),`
`,n(e.pre,{children:n(e.code,{className:"language-go",children:`func Logout(ctx context.Context) (*model.StatusResponse, error) {
    http.SetCookie(ctx.Value(common.RouterKey_ResponseWriter).(http.ResponseWriter), nil)
    return &model.StatusResponse{
        Status: true,
    }, nil
}
`})}),`
`,n(e.h2,{children:"Extensibility & Future-Proofing"}),`
`,n(e.p,{children:"While WhoDB's current security model focuses on cookie and token-based authentication, it is architected to allow enhancements such as:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Adding Single Sign-On (SSO) integrations."}),`
`,n(e.li,{children:"Supporting OAuth and federated authentication."}),`
`,n(e.li,{children:"Integrating custom authentication plugins at the middleware level."}),`
`]}),`
`,n(e.p,{children:"This aligns with WhoDB’s modular, plugin-based design ethos, offering a flexible foundation for evolving enterprise security needs."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Practical Tips and Best Practices"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Keep Tokens Secure:"})," Avoid exposing tokens or credentials to client-side scripts by relying on HTTP-only cookies."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Use API Gateway Mode in Enterprise:"})," Enable ",n(e.code,{children:"WHODB_TOKENS"})," to centralize and strengthen API token management."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Monitor Request Sizes:"})," Ensure clients do not exceed request limits to prevent service disruptions."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Leverage Login Profiles:"})," Configure multiple database credential profiles for convenient switching without re-login."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Protect Development Introspection:"})," Disable or restrict introspection queries and public routes in production environments."]}),`
`]}),`
`,n(e.h2,{children:"Troubleshooting Common Authentication Issues"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Unauthorized Errors:"})," Check if the token is properly sent in the ",n(e.code,{children:"Authorization"})," header or if cookies are set and sent with requests."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Token Decode Failures:"})," Verify tokens are correctly base64 encoded and JSON marshalled."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Request Body Too Large:"})," Remember the maximum request size is 1MB; split large requests accordingly."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Missing Profiles:"})," Confirm environment variables define valid database credential profiles matching expected IDs."]}),`
`]}),`
`,n(e.h2,{children:"Diagram: Authentication Request Flow"}),`
`,n(e.pre,{children:n(e.code,{className:"language-mermaid",children:`flowchart TD
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
`})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Summary"}),`
`,n(e.p,{children:"The WhoDB security model robustly manages user authentication via session cookies or bearer tokens validated by the backend authentication middleware. It distinguishes public and protected routes to secure sensitive operations, supports configurable API gateway tokens, and maintains credential profiles for efficient multi-database access. Extensible by design, this security perimeter lays a solid foundation for secure database management and user session control."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"Further Reading & Related Documentation"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/guides/best-practices-and-optimization/security-and-authentication",children:"Security and Authentication Essentials Guide"})," — Practical workflows and security best practices."]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})," — Credential usage and connection profiles."]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/concepts/architecture-overview/system-architecture",children:"System Architecture Overview"})," — Broader context of the backend server and middleware."]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," — Identifying and solving authentication and connection problems."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"Should you require secure single sign-on or customized authentication, consult with WhoDB enterprise support or refer to upcoming extensions in the plugin architecture."})]})}function a(i={}){const{wrapper:e}={...o(),...i.components};return e?n(e,{...i,children:n(t,{...i})}):t(i)}export{a as default};
