import{u,a as e,k as g}from"./index-CxwdZWLc.js";function h(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...u(),...i.components},{Accordion:t,AccordionGroup:a,Check:r,Info:c,Note:d,Tip:s,Warning:l}=n;return t||o("Accordion"),a||o("AccordionGroup"),r||o("Check"),c||o("Info"),d||o("Note"),s||o("Tip"),l||o("Warning"),e(g,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Security and Authentication Essentials"
description: "Guidelines for managing user credentials, session security, safe authentication flows, and best practices for running WhoDB in production environments."`}),`
`,e(n.h1,{children:"Security and Authentication Essentials"}),`
`,e(n.h2,{children:"Overview"}),`
`,e(n.p,{children:"This guide provides practical instructions and best practices for managing user credentials, ensuring session security, implementing safe authentication flows, and maintaining secure operation of WhoDB in production environments. It focuses exclusively on the authentication and security aspects within WhoDB’s web application layer."}),`
`,e(n.h2,{children:"Prerequisites"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"You must have WhoDB installed and running."}),`
`,e(n.li,{children:"Familiarity with basic web application operations."}),`
`,e(n.li,{children:"Access to WhoDB’s login interface or API gateway configuration."}),`
`,e(n.li,{children:"Administrator or user roles that can manage login profiles."}),`
`]}),`
`,e(n.h2,{children:"Expected Outcome"}),`
`,e(n.p,{children:"By following this guide, you will understand how to securely log in and log out of WhoDB, manage authentication tokens, configure session security, and apply best practices for running WhoDB safely in production."}),`
`,e(n.h2,{children:"Time Estimate"}),`
`,e(n.p,{children:"Approximately 15-25 minutes depending on familiarity with authentication concepts."}),`
`,e(n.h2,{children:"Difficulty Level"}),`
`,e(n.p,{children:"Intermediate: Requires understanding of authentication flows, session management, and production security concerns."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. Understanding Authentication Flow in WhoDB"}),`
`,e(n.p,{children:"WhoDB uses a token-based authentication system combined with session cookies or API gateway tokens to securely manage user credentials and sessions."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Login:"})," Users provide database credentials or select saved profiles via the login page."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Token Generation:"})," Credentials are encoded into a base64 string and stored either in a cookie or passed via Authorization headers."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Token Validation:"})," On each API request, the token is decoded and validated to ensure the session is authorized."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Logout:"})," Invalidates the session by clearing the token and profile data."]}),`
`]}),`
`,e(n.h3,{children:"How It Works Behind the Scenes"}),`
`,e(n.p,{children:["When a request arrives, the ",e(n.code,{children:"AuthMiddleware"})," examines the route:"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Public routes allow unauthenticated access."}),`
`,e(n.li,{children:"Protected routes require a valid authentication token."}),`
`,e(n.li,{children:["Tokens are validated either from a cookie (",e(n.code,{children:"Token"}),") or an Authorization header (for API Gateway setups)."]}),`
`,e(n.li,{children:"Profile credentials tied to tokens are resolved and attached to request context for authorization checks."}),`
`]}),`
`,e(s,{children:e(n.p,{children:"Understanding this flow ensures that security mechanisms work seamlessly with WhoDB's UI and API requests."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"2. Logging In to WhoDB"}),`
`,e(n.h3,{children:"Step 1: Navigate to the Login Page"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Open your browser and go to ",e(n.code,{children:"https://your-whodb-instance/login"}),"."]}),`
`]}),`
`,e(n.h3,{children:"Step 2: Choose Your Database Type"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Select from supported databases (e.g., MySQL, PostgreSQL, SQLite, MongoDB)."}),`
`,e(n.li,{children:"The form dynamically adjusts required fields based on this selection."}),`
`]}),`
`,e(n.h3,{children:"Step 3: Enter Connection Credentials"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Provide hostname, database name, username, and password as applicable."}),`
`,e(n.li,{children:"For PostgreSQL or MongoDB, you can paste a connection URL, and WhoDB will parse the details automatically."}),`
`]}),`
`,e(n.h3,{children:"Step 4: Configure Advanced Settings (Optional)"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Click the 'Advanced' button to reveal extra connection options (e.g., port, SSL mode)."}),`
`,e(n.li,{children:"Modify only if you understand the connection details."}),`
`]}),`
`,e(n.h3,{children:"Step 5: Submit Credentials"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Click the 'Submit' button to authenticate."}),`
`,e(n.li,{children:"On success, you will be redirected to the storage unit dashboard."}),`
`]}),`
`,e(n.h3,{children:"Step 6: Using Saved Profiles"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"If you have saved login profiles, select one from the 'Available profiles' dropdown."}),`
`,e(n.li,{children:"Click 'Login' to authenticate with stored credentials."}),`
`]}),`
`,e(r,{children:e(n.p,{children:"Successful login shows a notification and takes you to the data exploration page."})}),`
`,e(n.h3,{children:"Common Pitfalls"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Leaving required fields empty triggers validation errors."}),`
`,e(n.li,{children:"Incorrect credentials result in login failure notifications."}),`
`,e(n.li,{children:"Connection URL parsing might fail if the URL is malformed."}),`
`]}),`
`,e(l,{children:e(n.p,{children:"Never share your passwords or connection URLs publicly. Use secure channels for credential sharing."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"3. Session Security and Token Management"}),`
`,e(n.h3,{children:"Token Storage"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"WhoDB stores authentication tokens in HTTP cookies for browser sessions."}),`
`,e(n.li,{children:["In API Gateway mode, tokens are passed in HTTP ",e(n.code,{children:"Authorization"})," headers prefixed by ",e(n.code,{children:"Bearer "}),"."]}),`
`]}),`
`,e(n.h3,{children:"Token Validation"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Tokens are base64 encoded JSON containing user and connection info."}),`
`,e(n.li,{children:"Each API request verifies token integrity and expiration."}),`
`,e(n.li,{children:["Invalid, missing, or malformed tokens cause an immediate ",e(n.code,{children:"401 Unauthorized"})," response."]}),`
`]}),`
`,e(n.h3,{children:"Token Expiry and Revocation"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Tokens validated against a whitelist in ",e(n.code,{children:"env.Tokens"})," for API gateway scenarios."]}),`
`,e(n.li,{children:"Logout explicitly clears stored tokens to prevent reuse."}),`
`]}),`
`,e(d,{children:e(n.p,{children:"Token validation is a critical security step ensuring only authorized users access WhoDB."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"4. Logging Out of WhoDB"}),`
`,e(n.h3,{children:"Step 1: Initiate Logout"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Click the logout button or navigate to ",e(n.code,{children:"https://your-whodb-instance/logout"}),"."]}),`
`]}),`
`,e(n.h3,{children:"Step 2: Logout Process"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"The system executes a GraphQL mutation to clear session tokens."}),`
`,e(n.li,{children:"Session data is cleared from local storage and cookies."}),`
`]}),`
`,e(n.h3,{children:"Step 3: Confirmation"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"A notification confirms successful logout."}),`
`,e(n.li,{children:"The user is redirected to the login page."}),`
`]}),`
`,e(r,{children:e(n.p,{children:"After logout, any attempt to access protected routes redirects to login."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"5. Best Practices for Running WhoDB in Production"}),`
`,e(n.h3,{children:"Secure Credential Storage and Access"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Ensure environment variables or external vaults securely store sensitive tokens and credentials."}),`
`,e(n.li,{children:"Do not hard-code credentials or expose them in logs."}),`
`]}),`
`,e(n.h3,{children:"Limit Access Through Network Controls"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Restrict WhoDB access using firewalls, VPNs, or API gateways."}),`
`,e(n.li,{children:"Use HTTPS to encrypt all traffic and protect credential transmissions."}),`
`]}),`
`,e(n.h3,{children:"Token and Session Management"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Regularly rotate tokens and credentials."}),`
`,e(n.li,{children:"Enforce session timeouts and inactivity logout."}),`
`]}),`
`,e(n.h3,{children:"Configuration Management"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Enable strict CORS policies to control allowed origins."}),`
`,e(n.li,{children:"Monitor logs for unauthorized access attempts."}),`
`]}),`
`,e(n.h3,{children:"Monitoring & Alerts"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Implement alerting on failed login attempts or unusual authentication patterns."}),`
`]}),`
`,e(l,{children:e(n.p,{children:"Running WhoDB with default settings in a production environment can expose sensitive data if best practices are not followed."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"6. Troubleshooting Common Issues"}),`
`,e(a,{title:"Troubleshooting Authentication and Security",children:[e(t,{title:"Login Fails with 'All fields are required'",children:"Ensure all required fields for your database type are complete before submitting. For database URLs, verify the format and completeness."}),e(t,{title:"Unauthorized Error After Login",children:"Check that your token is being set in cookies or Authorization header properly. If behind an API Gateway, ensure token validation is enabled and tokens are registered."}),e(t,{title:"Request Body Too Large Error",children:"Requests exceeding 1MB are blocked by middleware. Optimize payload size or check for malformed requests."}),e(t,{title:"Logout Does Not Clear Session",children:"Verify cookies are properly cleared. Browser settings or extensions could block cookie removal."})]}),`
`,e(s,{children:e(n.p,{children:"Use browser developer tools to inspect HTTP headers, cookies, and network requests during login and logout flows to diagnose issues."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"7. Summary Diagram of Authentication Flow"}),`
`,e(n.pre,{children:e(n.code,{className:"language-mermaid",children:`flowchart TD
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
`})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Related Documentation"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})," — for securing database credentials."]}),`
`,e(n.li,{children:[e(n.a,{href:"/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," — for resolving authentication errors."]}),`
`,e(n.li,{children:[e(n.a,{href:"/getting-started/initial-config-launch/initial-configurations",children:"Initial Configuration"})," — for setting environment variables and enabling API gateway mode."]}),`
`,e(n.li,{children:[e(n.a,{href:"/frontend/src/pages/auth/logout.tsx",children:"Logout Implementation Details"})," — for understanding client-side logout."]}),`
`]}),`
`,e(n.h2,{children:"Next Steps"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Review production deployment security guidelines."}),`
`,e(n.li,{children:"Enable HTTPS and configure CORS for your deployment."}),`
`,e(n.li,{children:"Implement regular security audits and log monitoring."}),`
`]}),`
`,e(c,{children:e(n.p,{children:"This guide centralizes security and authentication user needs, empowering you to safely manage access and credentials in WhoDB."})})]})}function f(i={}){const{wrapper:n}={...u(),...i.components};return n?e(n,{...i,children:e(h,{...i})}):h(i)}function o(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{f as default};
