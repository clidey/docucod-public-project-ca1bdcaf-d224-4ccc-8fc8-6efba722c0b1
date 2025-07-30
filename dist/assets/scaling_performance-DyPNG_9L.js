import{u as c,a as n,k as s}from"./index-CxwdZWLc.js";function a(i){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...i.components},{Accordion:l,AccordionGroup:t,Tip:r}=e;return l||o("Accordion"),t||o("AccordionGroup"),r||o("Tip"),n(s,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "Scaling Strategies and Performance Optimization"
description: "Explore practical approaches for scaling WhoDB horizontally or vertically, including container-based scaling, resource tuning, and handling high concurrency. Tap into best practices for lightweight operation (in-memory modes, lazy-loading) and performance enhancements at scale."`}),`
`,n(e.h1,{children:"Scaling Strategies and Performance Optimization"}),`
`,n(e.p,{children:"Welcome to the guide dedicated to scaling WhoDB effectively and optimizing its performance to meet your production demands. This page is your trusted resource for practical, actionable strategies that ensure WhoDB operates smoothly as your data volume, concurrent users, and complexity grow."}),`
`,n(e.p,{children:"Whether you're deploying WhoDB for a small team or scaling it for enterprise-grade workloads, this guide walks you through proven approaches—from resource tuning and containerized scaling to handling high concurrency and enhancing performance with lightweight operation techniques."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"1. Understanding WhoDB's Scaling Context"}),`
`,n(e.p,{children:"WhoDB is designed as a lightweight, performant database management tool primarily focused on providing users with a responsive, intuitive interface. Its architecture supports integration across diverse databases and leverages a modular, plugin-based backend alongside a React-powered frontend."}),`
`,n(e.p,{children:"Scaling WhoDB effectively means ensuring that user interactions—such as data exploration, schema visualization, natural language querying, and inline editing—remain fast and fluid even under heavy loads or large datasets."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"2. Horizontal and Vertical Scaling Approaches"}),`
`,n(e.h3,{children:"Horizontal Scaling"}),`
`,n(e.p,{children:"Scaling horizontally involves running multiple instances of WhoDB behind a load balancer, distributing user load and increasing availability."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Containerized Deployments"}),": Use Docker Compose or orchestration platforms like Kubernetes to deploy multiple WhoDB containers."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Load Balancers"}),": Configure NGINX, HAProxy, or cloud-based load balancers to route traffic among instances."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Session Handling"}),": Since WhoDB handles authentication with session tokens (HTTP-only cookies), ensure sticky sessions or centralized session storage if necessary to maintain seamless user experience."]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Benefits:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Improved fault tolerance by avoiding single points of failure."}),`
`,n(e.li,{children:"Capacity to serve increased concurrent users."}),`
`]}),`
`,n(e.h3,{children:"Vertical Scaling"}),`
`,n(e.p,{children:"Vertical scaling involves allocating more resources (CPU, memory) to a single WhoDB instance."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Increase CPU cores to enhance query processing, especially for complex schema visualizations or scratchpad executions."}),`
`,n(e.li,{children:"Allocate more RAM to improve caching and responsiveness."}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Benefits:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Simpler deployment without distributed system complexity."}),`
`,n(e.li,{children:"Effective for moderate increases in load."}),`
`]}),`
`,n(e.h3,{children:"Best Practice: Combine both strategies when appropriate for predictable high load environments."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"3. Container-Based Scaling"}),`
`,n(e.p,{children:"Docker and container orchestration are the recommended ways to deploy and scale WhoDB:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Use Docker Compose for Basic Horizontal Scaling:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Define multiple WhoDB service instances."}),`
`,n(e.li,{children:"Map ports via load balancer or reverse proxy."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Leverage Kubernetes for Enterprise-Grade Scaling:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Deploy WhoDB as a Deployment with multiple replicas."}),`
`,n(e.li,{children:"Use Kubernetes Service for load balancing."}),`
`,n(e.li,{children:"Configure readiness and liveness probes for health checks."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Persist Data Appropriately:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"WhoDB itself manages connections to external databases."}),`
`,n(e.li,{children:"Ensure persistent storage for mounted SQLite files if applicable."}),`
`,n(e.li,{children:"Backup WhoDB configurations and environment variables securely."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Resource Allocation:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Set resource limits and requests explicitly in your container specs to avoid resource contention."}),`
`]}),`
`]}),`
`]}),`
`,n(r,{children:n(e.p,{children:"Use container orchestration features like auto-scaling based on CPU or memory to dynamically adjust WhoDB instances according to actual load."})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"4. Resource Tuning for Optimal Performance"}),`
`,n(e.p,{children:"Ensuring WhoDB runs efficiently involves tuning CPU, memory, network, and storage:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"CPU:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Allocate dedicated CPU cores on production machines."}),`
`,n(e.li,{children:"For containerized deployments, reserve appropriate CPU shares."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Memory:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Minimum recommended memory size depends on usage but allocate at least 2GB RAM for standard deployments."}),`
`,n(e.li,{children:"Monitor memory usage to detect leaks or spikes."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Network:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Ensure low latency between WhoDB servers and underlying databases."}),`
`,n(e.li,{children:"Use secure, fast connections (e.g., VPC peering, VPN) especially in cloud setups."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Storage:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"For SQLite deployments, mount databases from persistent volumes."}),`
`,n(e.li,{children:"For other databases, ensure WhoDB has reliable and fast access to the data source."}),`
`]}),`
`]}),`
`]}),`
`,n(r,{children:n(e.p,{children:"Monitor real-time resource utilization and adjust container or host settings accordingly to prevent CPU throttling or out-of-memory failures."})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"5. Handling High Concurrency"}),`
`,n(e.p,{children:"Users expect near-instantaneous responses even during spikes. Achieve this by:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Connection Pooling:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Manage database connections efficiently in the backend plugin engine."}),`
`,n(e.li,{children:"Prevent saturating database connection limits."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Query Optimization:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Use WhoDB smart filters and pagination to limit returned data volumes."}),`
`,n(e.li,{children:"Avoid loading excessively large datasets in UI views."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Backend Scaling:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Horizontal scaling with multiple backend instances spreads load."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Frontend Efficiency:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"WhoDB's React frontend employs virtual scrolling and lazy loading."}),`
`,n(e.li,{children:"Avoid fetching all data at once."}),`
`]}),`
`]}),`
`]}),`
`,n(r,{children:n(e.p,{children:"If you notice latency under load, inspect and optimize slow queries or consider increasing instance count dynamically."})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"6. Lightweight Operation and Lazy Loading"}),`
`,n(e.p,{children:"WhoDB excels as a lightweight tool — this has vital performance implications:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"In-Memory Modes:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Frontend uses in-memory caching to speed repeated interactions."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Lazy Loading:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"UI only fetches data and schema information on demand."}),`
`,n(e.li,{children:"Pagination limits data fetched per request (default 10 rows per page with configurable options)."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Table Virtualization:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Large tables render efficiently without overwhelming the browser."}),`
`]}),`
`]}),`
`]}),`
`,n(r,{children:n(e.p,{children:"Make use of smart filters and pagination controls to maintain UI responsiveness when working with big datasets."})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"7. Performance Enhancements at Scale"}),`
`,n(e.p,{children:"To further optimize WhoDB:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Enable Telemetry and Metrics:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"By default, WhoDB collects performance metrics to improve UX."}),`
`,n(e.li,{children:"Toggle schema in Settings > Telemetry and Performance Metrics."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Cache Schema & Metadata:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Cache database schema snapshots to reduce repeated calls."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Optimize Plugin Configuration:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Disable unnecessary database plugins to reduce overhead."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Monitor Logs and Metrics:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Regularly check logs for slow queries, errors, or connection issues."}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Use Latest Builds:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Keep WhoDB updated to benefit from ongoing performance improvements."}),`
`]}),`
`]}),`
`]}),`
`,n(r,{children:n(e.p,{children:["Follow best practices from ",n(e.a,{href:"https://whodb.com/docs/deployment/operationalization/monitoring_logging",children:"Monitoring and Logging"})," to proactively detect bottlenecks."]})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"8. Troubleshooting Common Performance Issues"}),`
`,n(t,{title:"Common Challenges and Solutions",children:[n(l,{title:"Slow Response Times in Large Datasets",children:n(e.ul,{children:[`
`,n(e.li,{children:"Ensure filters and pagination are properly applied."}),`
`,n(e.li,{children:"Avoid requesting all rows in one go."}),`
`,n(e.li,{children:"Analyze database query performance outside WhoDB."}),`
`,n(e.li,{children:"Check network latency."}),`
`]})}),n(l,{title:"High CPU/Memory Usage",children:n(e.ul,{children:[`
`,n(e.li,{children:"Inspect container resource limits."}),`
`,n(e.li,{children:"Identify memory leaks by monitoring over time."}),`
`,n(e.li,{children:"Reduce simultaneous users or scale horizontally."}),`
`]})}),n(l,{title:"Connection Failures Under Load",children:n(e.ul,{children:[`
`,n(e.li,{children:"Verify database connection pool sizes."}),`
`,n(e.li,{children:"Confirm network reliability."}),`
`,n(e.li,{children:"Implement retry policies for transient failures."}),`
`]})}),n(l,{title:"UI Freezing or Slow Rendering",children:n(e.ul,{children:[`
`,n(e.li,{children:"Update frontend with latest builds."}),`
`,n(e.li,{children:"Ensure table virtualization is enabled."}),`
`,n(e.li,{children:"Limit data fetched per view."}),`
`]})})]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"9. Summary and Best Practices"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Use container orchestration for scalable, reliable deployments."}),`
`,n(e.li,{children:"Combine horizontal and vertical scaling per your environment."}),`
`,n(e.li,{children:"Utilize WhoDB's lazy-loading and pagination to manage large datasets."}),`
`,n(e.li,{children:"Monitor application health, resource usage, and logs continuously."}),`
`,n(e.li,{children:"Tune database connection pooling to fit your workload."}),`
`,n(e.li,{children:"Keep telemetry enabled (or disabled in Enterprise with privacy considerations) to gain insights."}),`
`,n(e.li,{children:"Keep WhoDB updated to benefit from performance fixes and enhancements."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"10. Additional Resources"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/deployment/prod_deployment/docker_quickstart",children:"Deploying with Docker & Docker Compose"})," - fast start and containerization instructions."]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/deployment/operationalization/monitoring_logging",children:"Monitoring and Logging"})," - setup for observability."]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/guides/best-practices-and-optimization/working-efficiently-with-large-datasets",children:"Working Efficiently with Large Datasets"})," - UX focus for performance."]}),`
`,n(e.li,{children:[n(e.a,{href:"https://whodb.com/docs/overview/architecture-concepts-group/system-architecture-overview",children:"System Architecture Overview"})," - deeper insight into internal flows."]}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"Scaling WhoDB intelligently empowers your teams with reliable, swift database interaction at any scale. By applying these strategies and tuning principles, you unlock the true potential of WhoDB’s lightweight yet powerful design."}),`
`,n(e.hr,{})]})}function h(i={}){const{wrapper:e}={...c(),...i.components};return e?n(e,{...i,children:n(a,{...i})}):a(i)}function o(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
