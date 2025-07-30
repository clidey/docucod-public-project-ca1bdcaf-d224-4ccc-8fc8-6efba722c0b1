import{u as h,a as e,k as u}from"./index-CxwdZWLc.js";function d(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...h(),...i.components},{Accordion:t,AccordionGroup:s,Check:c,Note:a,Tip:o,Warning:l}=n;return t||r("Accordion"),s||r("AccordionGroup"),c||r("Check"),a||r("Note"),o||r("Tip"),l||r("Warning"),e(u,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Security Hardening for Production"
description: "Harden your WhoDB deployment against threats. This page covers exposed surfaces, authentication (cookie/session management), secure configuration of secrets, network security (firewall, TLS), and best practices for using WhoDB in regulated or sensitive environments."`}),`
`,e(n.h1,{children:"Security Hardening for Production"}),`
`,e(n.p,{children:"Strengthening your WhoDB deployment is essential to protect your data and infrastructure from evolving security threats. This guide walks you through the critical areas of security hardening—exposed surfaces, authentication safeguards, secrets management, network protections, and compliance best practices—empowering you to confidently deploy WhoDB in sensitive or regulated environments."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. Harden Exposed Surfaces"}),`
`,e(n.p,{children:"The first step to securing WhoDB is minimizing and protecting the surface area exposed to potential attackers."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Restrict API Endpoints Access:"})," WhoDB exposes certain HTTP routes for its API and UI. Use firewall rules or reverse proxy configurations to restrict access only to trusted clients and networks."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Limit Public Routes:"}),` By design, WhoDB's authentication middleware allows only a limited set of "public" routes (e.g., GraphQL introspection and login/logout operations). Ensure these endpoints are not unnecessarily exposed beyond what is required.`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Disable Unnecessary Features:"})," If you have no need for features like the AI chat interface or advanced enterprise plugins, disable or restrict access to them via configuration or deployment choices."]}),`
`]}),`
`]}),`
`,e(o,{children:e(n.p,{children:["Regularly audit network exposure with tools like ",e(n.code,{children:"nmap"})," or cloud provider security scanners to confirm only intended endpoints are open."]})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"2. Robust Authentication & Session Management"}),`
`,e(n.p,{children:"WhoDB manages authentication primarily using HTTP-only encrypted cookies or API gateway tokens, keeping user credentials secure and access controlled."}),`
`,e(n.h3,{children:"Cookie and Session Management"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"HTTP-Only Cookies:"})," Authentication tokens are set as HTTP-only cookies, preventing client-side script access to these tokens and mitigating cross-site scripting (XSS) risks."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Limited Cookie Lifespan:"})," Configure session duration and implement appropriate timeout policies to reduce token misuse risks."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Secure Cookie Flags:"})," When deploying with TLS, ensure cookies use ",e(n.code,{children:"Secure"})," and ",e(n.code,{children:"SameSite"})," flags. This safeguards tokens during transit and limits cross-site request forgery (CSRF)."]}),`
`]}),`
`]}),`
`,e(n.h3,{children:"API Gateway Token Authentication"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Bearer Tokens:"})," For API Gateway enabled deployments, authentication tokens are passed in ",e(n.code,{children:"Authorization: Bearer"})," headers."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Token Validation:"})," Ensure your tokens are securely generated, signed, and validated on every request."]}),`
`]}),`
`]}),`
`,e(n.h3,{children:"Best Practices"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use strong, unique passwords for your database connections."}),`
`,e(n.li,{children:"Prefer profiles with limited privileges in your database—never use superuser credentials."}),`
`,e(n.li,{children:["Always log out users upon session termination using the ",e(n.code,{children:"/logout"})," endpoint to invalidate tokens and cookies."]}),`
`]}),`
`,e(c,{children:e(n.p,{children:"Verify authentication tokens are never exposed to client-side scripts or logs."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"3. Secure Configuration of Secrets"}),`
`,e(n.p,{children:"WhoDB depends on several sensitive configuration values, such as database credentials and API keys. Protecting these is critical."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Environment Variables:"})," Store secrets in environment variables instead of hard-coded files or source control."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Secret Management Tools:"})," Use vault solutions (HashiCorp Vault, AWS Secrets Manager, etc.) for dynamic retrieval and rotation of secrets."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Least Privilege Principle:"})," Use credential sets scoped narrowly to required database schemas or operations."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Encrypted Storage:"})," Where persistence of secrets is necessary (e.g., config files or state), encrypt them at rest."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Avoid Logs Leakage:"})," Ensure logs, debug dumps, or error messages never output secrets unintentionally."]}),`
`]}),`
`]}),`
`,e(o,{children:e(n.p,{children:"Review your deployment scripts and CI/CD pipelines to confirm secrets are masked and handled securely during deployments."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"4. Network Security & Transport Layer Protection"}),`
`,e(n.p,{children:"Securing WhoDB's network interactions shields your deployment from interception and unauthorized access."}),`
`,e(n.h3,{children:"TLS Configuration"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Enable TLS:"})," Terminate TLS (HTTPS) either on WhoDB directly or through a fronting reverse proxy/load balancer."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Strong TLS Settings:"})," Use current TLS versions (1.2+), disable weak cipher suites, and enable HTTP Strict Transport Security (HSTS)."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Certificate Management:"})," Use trusted certificates from established Certificate Authorities or leverage automated tools like Let's Encrypt."]}),`
`]}),`
`]}),`
`,e(n.h3,{children:"Firewall & Access Controls"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Restrict Inbound Access:"})," Permit only trusted IP ranges to access WhoDB's backend and UI ports."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Segmentation:"})," Deploy WhoDB within a secure network segment or VPC isolated from public internet access, exposing only necessary endpoints."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"API Gateway Security:"})," If enabled, place WhoDB behind an API gateway to enforce advanced access policies, throttling, and centralized logging."]}),`
`]}),`
`]}),`
`,e(l,{children:e(n.p,{children:"Never expose WhoDB directly to the internet without proper TLS and firewall measures."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"5. Best Practices for Regulated and Sensitive Environments"}),`
`,e(n.p,{children:"Deployments handling sensitive data or under compliance obligations require added diligence."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Audit Logging:"})," Enable and secure comprehensive audit logging for user activity, access attempts, and configuration changes."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Regular Updates:"})," Keep WhoDB and all dependencies updated with security patches. Subscribe to release notes and advisories."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Access Controls:"})," Implement role-based access control at both WhoDB and database levels."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Data Encryption at Rest:"})," Use encrypted filesystems or database-native encryption to safeguard stored data."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Backup Security:"})," Secure backups with encryption and restrict access to ensure data confidentiality in recovery situations."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Penetration Testing:"})," Regularly perform security assessments to discover and remediate potential vulnerabilities."]}),`
`]}),`
`]}),`
`,e(a,{children:e(n.p,{children:"Refer to organizational security policies and compliance mandates (e.g., HIPAA, GDPR) to supplement WhoDB security configurations appropriately."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"6. Step-by-Step: Applying Security Hardening to Your Deployment"}),`
`,e(n.h3,{children:"Step 1: Secure Your Network"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Configure firewall rules to allow only trusted clients."}),`
`,e(n.li,{children:"Set up TLS termination with valid certificates."}),`
`]}),`
`,e(n.h3,{children:"Step 2: Configure Authentication Correctly"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use HTTP-only, Secure cookies with proper flags."}),`
`,e(n.li,{children:"If API gateway enabled, deploy tokens securely and enforce expiration."}),`
`]}),`
`,e(n.h3,{children:"Step 3: Manage Secrets Safely"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Store database credentials and API keys in environment variables or secrets manager."}),`
`,e(n.li,{children:"Avoid embedding secrets in code or config files."}),`
`]}),`
`,e(n.h3,{children:"Step 4: Limit Exposure of Endpoints"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Use reverse proxies to restrict access to only necessary routes."}),`
`,e(n.li,{children:"Disable unused features or pages."}),`
`]}),`
`,e(n.h3,{children:"Step 5: Monitor and Audit"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Enable logging of authentication events."}),`
`,e(n.li,{children:"Set up alerting for suspicious activities."}),`
`]}),`
`,e(o,{children:e(n.p,{children:"Test your hardened deployment by attempting unauthorized accesses in a controlled environment to validate protections."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"7. Troubleshooting Common Security Issues"}),`
`,e(s,{title:"Troubleshooting Security Hardening",children:[e(t,{title:"Users Unable to Login After Hardening",children:e(n.p,{children:"Ensure that cookies are correctly set with Secure and SameSite flags compatible with your deployment domain and browser settings. Check reverse proxy headers that may strip cookies."})}),e(t,{title:"Unexpected Unauthorized Responses",children:e(n.p,{children:"Verify token validity and presence in requests. Confirm environment variables and secrets were correctly loaded and match database credentials. Check firewall and proxy rules are not blocking legitimate traffic."})}),e(t,{title:"TLS/SSL Warnings or Failures",children:e(n.p,{children:"Confirm certificate validity dates, trusted CA chain, and proper binding on your web server or proxy. Check TLS version compatibilities."})})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"8. Additional Resources"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/guides/best-practices-and-optimization/security-and-authentication",children:"Security and Authentication Essentials"})," — deeper dive into WhoDB’s authentication flows."]}),`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/deployment/prod_deployment/docker_quickstart",children:"Deploying with Docker & Docker Compose"})," — recommended deployment methods supporting secure configurations."]}),`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/deployment/prod_deployment/env_config",children:"Environment Variables & Third-Party Integrations"})," — manage your secrets and runtime settings safely."]}),`
`,e(n.li,{children:[e(n.a,{href:"https://whodb.com/docs/overview/architecture-concepts-group/system-architecture-overview",children:"System Architecture Overview"})," — understand how WhoDB processes requests securely."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"By methodically applying these security hardening principles, you ensure your WhoDB deployment is resilient and trustworthy, enabling safe data management even in regulated or sensitive environments."})]})}function g(i={}){const{wrapper:n}={...h(),...i.components};return n?e(n,{...i,children:e(d,{...i})}):d(i)}function r(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{g as default};
