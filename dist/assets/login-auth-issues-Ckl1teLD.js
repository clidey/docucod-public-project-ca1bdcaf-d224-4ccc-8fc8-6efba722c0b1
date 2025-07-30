const n=`---
title: "Troubleshooting Login and Connection Issues"
description: "Learn practical steps for resolving common authentication problems, network errors, or connection failures, including tips for both database credential and saved profile login modes."
---

# Troubleshooting Login and Connection Issues

Welcome to the comprehensive guide for resolving login and connection issues in WhoDB. This page focuses on helping users troubleshoot common problems encountered during authentication and database connection attempts, whether using direct database credentials or saved profiles.

---

## Table of Contents

- [Understanding Login Modes](#understanding-login-modes)
- [Common Login Issues and Fixes](#common-login-issues-and-fixes)
- [Connection Problems and Solutions](#connection-problems-and-solutions)
- [Network and Environment Considerations](#network-and-environment-considerations)
- [Advanced Troubleshooting Tips](#advanced-troubleshooting-tips)
- [Verification and Best Practices](#verification-and-best-practices)

---

## Understanding Login Modes

WhoDB supports two primary login modes to access your databases:

- **Database Credential Login:** Users manually input hostname, database name, username, password, and optional advanced parameters for a direct connection.
- **Saved Profile Login:** Users select from pre-configured connection profiles saved within WhoDB,
   enabling quick and consistent authentication.

Both methods trigger an authentication flow that validates your credentials with the backend and establishes a session.

---

## Common Login Issues and Fixes

### 1. _Required Fields Missing_

**Problem:** Attempting to submit login form with missing critical fields such as hostname, username, or database name.

**Cause:** The frontend validates required fields depending on the database type. Omission blocks login.

**Solution:**
- Ensure all required fields are filled *before* submitting.
- For PostgreSQL and MySQL, fill Hostname, Database, and Username.
- For SQLite, provide the database file path.
- For MongoDB and Redis, specify Hostname.

<Tip>
Use the \`Host Name (or paste Connection URL)\` input for some databases to streamline input.
</Tip>

### 2. _Invalid Connection URL Parsing_

**Problem:** Pasting a connection URL fails to extract necessary parts like hostname, username, or database.

**Cause:** URL format may be incorrect or incomplete for WhoDB's parsing logic.

**Solution:**
- Verify URL format matches standard conventions for your database.
- For PostgreSQL URLs, ensure it starts with \`postgres://\` or \`postgresql://\`.
- If URL parsing fails, manually enter advanced details such as port and SSL mode.

### 3. _Login Failure Notifications_

**Problem:** Receiving "Login failed" messages or errors like "Unauthorized".

**Cause:** Incorrect credentials, expired session, or backend rejection.

**Solution:**
- Double-check username and password.
- Verify database name and hostname/IP.
- If using saved profiles, ensure the profile still matches valid credentials.
- Check network access and firewall settings to the database host.

### 4. _Advanced Parameters Mistakes_

**Problem:** Misconfiguration in advanced form fields (e.g., incorrect port, SSL mode).

**Cause:** Incorrect or incompatible advanced settings can prevent connection.

**Solution:**
- Use documented defaults for your database type.
- For PostgreSQL, usually port 5432 and SSL mode 'disable' or 'require'.
- For MongoDB SRV URLs, ensure DNS Enabled flag matches your setup.
- Toggle the Advanced form visibility to review and correct.

---

## Connection Problems and Solutions

### 1. _Network Connectivity Errors_

**Symptoms:** Timeouts, unreachable host, connection refused.

**Causes:** Firewall blocks, wrong hostname, network interruptions.

**Check and Fix:**
- Confirm the hostname resolves correctly (DNS).
- Ping or telnet to the database host and port.
- Verify no VPN or proxy is interfering.
- Firewall or security groups on the server allow traffic.

### 2. _Profile-Based Login Fails_

**Symptoms:** Login with a saved profile returns failure.

**Causes:** Profile credentials outdated or the profile service is temporarily unavailable.

**Fix:**
- Edit and update the profile credentials manually.
- Remove and recreate the profile if corrupted.
- Ensure profiles are synced properly if environment variables define credentials.

### 3. _Cookie or Token Issues_

**Symptoms:** Login not persisting, repeated login prompts.

**Causes:** Browser cookies disabled or HTTP-only tokens not set.

**Fix:**
- Enable cookies and allow HTTP-only cookie support.
- Clear browser cookies and try again.
- Ensure backend is reachable and sets cookies properly.

### 4. _Backend or API Gateway Token Problems_

**Symptoms:** Unauthorized errors during usage despite valid credentials.

**Causes:** Expired or invalid API tokens when API Gateway is enabled.

**Solution:**
- Confirm API tokens are valid and match configured tokens.
- Renew or update token configuration if expired.
- Check environment variable \`IsAPIGatewayEnabled\` settings.

---

## Network and Environment Considerations

### Environment Variables

WhoDB’s operation depends on correctly set environment variables for credentials and runtime modes.

- Confirm variables for database credentials are accurate.
- Check for presence and correctness of API tokens if applicable.
- For Enterprise Edition, verify additional plugin and authentication settings.

### Using Connection URLs vs. Manual Fields

- Connection URLs can accelerate setup but require accurate formatting.
- When pasting URLs, WhoDB attempts to parse into discrete fields; errors here may need manual correction.

### Proxy and VPN

- Be aware VPNs or proxies may interfere with connectivity.
- Local network firewalls or corporate restrictions may block ports.

---

## Advanced Troubleshooting Tips

### Enable Debug Logs

- Monitor frontend console errors and network requests.
- Check backend logs for authentication errors or connection attempts.

### Profile Last Accessed Updates

- Successful login automatically updates ‘last accessed’ metadata conserving session history.
- Stale profiles can cause unexpected login behaviors.

### Handling Large Request Bodies

- The backend restricts login request payloads to 1MB.
- If advanced parameters become too large, simplify or validate inputs.

---

## Verification and Best Practices

### Step-by-Step Verification Checklist

1. Fill all required login fields accurately according to database type.
2. Use connection URLs carefully; verify auto-parsed fields.
3. If login fails, review notifications and error messages.
4. Confirm network availability and firewall settings.
5. For saved profiles, verify credentials have not expired or changed.
6. Enable advanced form parameters only when needed, keep defaults otherwise.
7. Clear browser cookies if session problems persist.
8. Confirm backend tokens and API gateway configurations.
9. Test login success by verifying transition to dashboard/storage view.

### Best Practices

- Save connection profiles for frequently used databases to speed up login.
- Regularly update saved profiles to keep credentials current.
- Use advanced options sparingly and document custom parameters.
- Monitor login errors promptly to address credential or network changes.

---

## Related Documentation

- [Connecting to Your Database](https://whodb.com/docs/guides/essential-workflows/connecting-to-your-database) — Setup credentials and connection examples
- [Security and Authentication Essentials](https://whodb.com/docs/guides/best-practices-and-optimization/security-and-authentication) — Managing secure login and session handling
- [Troubleshooting Common Issues](https://whodb.com/docs/getting-started/troubleshooting/troubleshooting-common-issues) — Wider scope of installation and runtime errors
- [First Run and Quick Validation](https://whodb.com/docs/getting-started/initial-config-launch/first-run-and-validation) — Initial login and validation tips

---

## Summary
This troubleshooting guide equips you with practical advice and actionable steps to quickly identify and resolve login and database connection issues in WhoDB. From validating credentials, parsing connection URLs, adjusting advanced settings, to ensuring network and backend readiness, your path is clear to stable, secure access.

Remember: effective login flows rely on accuracy, network accessibility, and proper session management. For persistent issues, consult backend logs and the linked guides to deepen your diagnostic reach.

---`;export{n as default};
