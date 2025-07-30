import{u as r,a as e,k as t}from"./index-CxwdZWLc.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e(t,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Monitoring and Logging"
description: "Monitor the health and activity of your WhoDB deployment. Discover how to capture logs, hook WhoDB into external monitoring systems, interpret common metrics, and troubleshoot effectively. This page provides troubleshooting best practices and links out to relevant log configuration files."`}),`
`,e(n.h1,{children:"Monitoring and Logging"}),`
`,e(n.p,{children:"Monitoring the health and activity of your WhoDB deployment is essential for maintaining reliability, diagnosing issues, and ensuring smooth production operations. This guide walks you through capturing logs, integrating with external monitoring systems, interpreting key metrics, and troubleshooting effectively."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Table of Contents"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:e(n.a,{href:"#introduction-to-monitoring-and-logging",children:"Introduction to Monitoring and Logging"})}),`
`,e(n.li,{children:e(n.a,{href:"#logging-overview",children:"Logging Overview"})}),`
`,e(n.li,{children:e(n.a,{href:"#configuring-whodb-logging",children:"Configuring WhoDB Logging"})}),`
`,e(n.li,{children:e(n.a,{href:"#integrating-with-external-monitoring-systems",children:"Integrating with External Monitoring Systems"})}),`
`,e(n.li,{children:e(n.a,{href:"#key-metrics-to-monitor",children:"Key Metrics to Monitor"})}),`
`,e(n.li,{children:e(n.a,{href:"#troubleshooting-common-log-issues",children:"Troubleshooting Common Log Issues"})}),`
`,e(n.li,{children:e(n.a,{href:"#best-practices-for-monitoring-whodb",children:"Best Practices for Monitoring WhoDB"})}),`
`,e(n.li,{children:e(n.a,{href:"#additional-resources",children:"Additional Resources"})}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Introduction to Monitoring and Logging"}),`
`,e(n.p,{children:"Running WhoDB in production demands visibility into application behavior and system health. Logs provide a real-time and historical record of application events and errors, enabling you to audit activity, detect failures, and optimize performance."}),`
`,e(n.p,{children:"Monitoring extends beyond logs by capturing system and application metrics, alerting on anomalies and helping maintain uptime."}),`
`,e(n.p,{children:"This page focuses on practical guidance to set up, utilize, and troubleshoot WhoDB logs, and to integrate them with monitoring infrastructure."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Logging Overview"}),`
`,e(n.p,{children:["WhoDB employs structured logging using the ",e(n.code,{children:"logrus"})," package, allowing logs to be outputted with levels such as Info, Warning, and Fatal."]}),`
`,e(n.p,{children:"Logs include:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Startup and shutdown sequences"}),`
`,e(n.li,{children:"API and backend errors"}),`
`,e(n.li,{children:"Database plugin activity"}),`
`,e(n.li,{children:"AI integration warnings"}),`
`]}),`
`,e(n.p,{children:"Logs are written to stdout/stderr by default, making them Docker and cloud-friendly."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Configuring WhoDB Logging"}),`
`,e(n.h3,{children:"Default Logging Behavior"}),`
`,e(n.p,{children:"By default, WhoDB logs essential server lifecycle events:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-plaintext",children:`INFO Starting WhoDB...
INFO Welcome to WhoDB!
INFO Get started by visiting: http://0.0.0.0:8080
`})}),`
`,e(n.p,{children:"Warnings and errors are also logged with descriptive messages."}),`
`,e(n.h3,{children:"Customizing Log Levels or Outputs"}),`
`,e(n.p,{children:["Currently, WhoDB’s configuration defaults to info-level logs, but the ",e(n.code,{children:"log"})," package uses ",e(n.code,{children:"logrus"}),", which supports advanced configuration."]}),`
`,e(n.p,{children:["To enable advanced log configuration (e.g., JSON output or file logging), you can extend the ",e(n.code,{children:"core/src/log/log.go"})," initialization with custom hooks or redirect output."]}),`
`,e(n.h3,{children:"Viewing Logs in Docker"}),`
`,e(n.p,{children:"If running WhoDB via Docker, use:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker logs <container_name_or_id>
`})}),`
`,e(n.p,{children:"for real-time access to stdout logs."}),`
`,e(n.h3,{children:"Log Format"}),`
`,e(n.p,{children:"Logs follow this format:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-plaintext",children:`<LEVEL> <timestamp> <message>
`})}),`
`,e(n.p,{children:"Warnings and errors provide call-site context aiding root cause analysis."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Integrating with External Monitoring Systems"}),`
`,e(n.h3,{children:"Containerized Deployment"}),`
`,e(n.p,{children:"When deploying via Docker or Docker Compose, you can leverage Docker's native log drivers to forward WhoDB logs to:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"syslog"}),`
`,e(n.li,{children:"Fluentd"}),`
`,e(n.li,{children:"ELK Stack (Elasticsearch, Logstash, Kibana)"}),`
`,e(n.li,{children:"Cloud logging services (AWS CloudWatch, GCP Stackdriver, Azure Monitor)"}),`
`]}),`
`,e(n.p,{children:"Configure logging drivers in your Docker daemon or compose file."}),`
`,e(n.h3,{children:"Exporting Logs"}),`
`,e(n.p,{children:"For persistent log storage, mount your container's log directory or redirect logs to a file volume, then ingest with your observability stack."}),`
`,e(n.h3,{children:"Application Metrics"}),`
`,e(n.p,{children:["Though primarily focused on logs, WhoDB exposes operational metrics (see the environment variable ",e(n.code,{children:"MetricsEnabled"})," in the backend), which can integrate with Prometheus or other alerting platforms if extended."]}),`
`,e(n.p,{children:"Check the production deployment docs or source to enable and configure metrics collection."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Key Metrics to Monitor"}),`
`,e(n.p,{children:"While detailed metrics collection requires additional configuration, here are key logical monitoring areas:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Server Health"}),": Uptime, CPU and memory usage"]}),`
`,e(n.li,{children:[e(n.strong,{children:"Request Rates"}),": Incoming API requests per second"]}),`
`,e(n.li,{children:[e(n.strong,{children:"Error Rates and Types"}),": HTTP 5xx errors or database connection failures"]}),`
`,e(n.li,{children:[e(n.strong,{children:"Plugin Activity"}),": Status and latency of database connectors"]}),`
`,e(n.li,{children:[e(n.strong,{children:"AI Integration Warnings"}),": Failures connecting to ChatGPT, Ollama, or Anthropic"]}),`
`]}),`
`,e(n.p,{children:"Active monitoring of these metrics ensures responsiveness and stability."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Troubleshooting Common Log Issues"}),`
`,e(n.h3,{children:"Missing Logs or Silent Failures"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Confirm WhoDB started and is running (check Docker logs or console output)."}),`
`,e(n.li,{children:["Verify environment variables that control logging or metrics (",e(n.code,{children:"ENVIRONMENT"}),", ",e(n.code,{children:"MetricsEnabled"}),")."]}),`
`,e(n.li,{children:"For containerized deployments, ensure proper volume mounts and stdout forwarding."}),`
`]}),`
`,e(n.h3,{children:"Port Conflicts"}),`
`,e(n.p,{children:"If logs report failure to bind port 8080:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`lsof -i :8080
kill -9 <PID>
`})}),`
`,e(n.p,{children:"Kill conflicting service before restarting WhoDB."}),`
`,e(n.h3,{children:"AI Integration Logs"}),`
`,e(n.p,{children:"Warnings such as:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-plaintext",children:`WARN Failed to open browser: ...
WARN Unsupported platform. Please open the URL manually
`})}),`
`,e(n.p,{children:"are non-critical and indicate environment limitations."}),`
`,e(n.p,{children:"Ensure required API keys are properly configured as per environment variable documentation."}),`
`,e(n.h3,{children:"Frontend Build Missing Errors"}),`
`,e(n.p,{children:["Errors about missing ",e(n.code,{children:"build/"})," indicate frontend assets are not embedded correctly:"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Run frontend build"}),`
`,e(n.li,{children:"Copy the build folder to backend"}),`
`]}),`
`,e(n.p,{children:["See ",e(n.a,{href:"./BUILD_AND_RUN.md",children:"BUILD_AND_RUN.md"})," for detailed instructions."]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Best Practices for Monitoring WhoDB"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Leverage Docker logging drivers or a centralized logging solution"})," to collect, search, and alert on WhoDB logs."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Enable environment-based log level adjustments"})," where possible, especially for debugging production issues."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Regularly review logs post-deployment"})," to detect anomalies early."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Setup metric collection and alerting"})," for critical system and integration failures."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Maintain a clean shutdown and restart procedure"})," to avoid resource leaks, visible in logs."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Additional Resources"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"./BUILD_AND_RUN.md",children:"Build and Run Guide"}),": For deployment and build instructions"]}),`
`,e(n.li,{children:[e(n.a,{href:"./deployment/prod_deployment/env_config",children:"Environment Variables & Third-Party Integrations"}),": Configuring logging, metrics, and AI providers"]}),`
`,e(n.li,{children:[e(n.a,{href:"./getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"}),": Common operational problems and resolutions"]}),`
`,e(n.li,{children:[e(n.a,{href:"./concepts/architecture-overview/system-architecture",children:"System Architecture Overview"}),": Understanding modular components generating logs"]}),`
`,e(n.li,{children:[e(n.a,{href:"./deployment/operationalization/monitoring_logging",children:"Monitoring and Logging"}),": For related monitoring concepts"]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"Keeping your WhoDB deployment well-monitored and logged is pivotal to operational excellence. Use this guide to establish a robust observability foundation that empowers efficient troubleshooting, system insight, and seamless production performance."})]})}function c(i={}){const{wrapper:n}={...r(),...i.components};return n?e(n,{...i,children:e(o,{...i})}):o(i)}export{c as default};
