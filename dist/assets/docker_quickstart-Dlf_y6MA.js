import{u as s,a as e,k as a}from"./index-CxwdZWLc.js";function d(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components},{Accordion:o,AccordionGroup:c,Step:i,Steps:l}=n;return o||t("Accordion"),c||t("AccordionGroup"),i||t("Step"),l||t("Steps"),e(a,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Deploying with Docker & Docker Compose"
description: "Get started with WhoDB’s preferred deployment methods. Learn how to launch WhoDB using a simple Docker command or a Docker Compose configuration for more complex environments, enabling rapid local evaluation as well as scalable production deployments."`}),`
`,e(n.h1,{children:"Deploying with Docker & Docker Compose"}),`
`,e(n.p,{children:"Welcome to the WhoDB deployment guide focused on launching the application using Docker and Docker Compose. This approach enables you to quickly spin up WhoDB with all its dependencies in isolated containers, ensuring a consistent and scalable environment for local evaluation and production setups."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Why Deploy with Docker?"}),`
`,e(n.p,{children:"Docker streamlines deployment by encapsulating WhoDB and its core dependencies into portable containers. This eliminates environment configuration discrepancies, simplifies installation, and accelerates onboarding. Whether testing locally or running in production, Docker Compose orchestrates multiple containers — databases, caches, and WhoDB — for an integrated setup."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Prerequisites"}),`
`,e(n.p,{children:"Before proceeding, ensure the following:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Docker Engine installed and running (version 24.x or later recommended)"}),`
`,e(n.li,{children:"Docker Compose (v2 or integrated with Docker CLI)"}),`
`,e(n.li,{children:"Sufficient permissions to manage Docker containers and networks"}),`
`,e(n.li,{children:"For production, resource availability as per your usage scale (CPU, memory, disk)"}),`
`]}),`
`,e(n.p,{children:["If you prefer manual builds or need custom configurations, see the ",e(n.a,{href:"./BUILD_AND_RUN.md",children:"WhoDB Build and Run Guide"}),"."]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Quick Start: Launching WhoDB with Docker"}),`
`,e(n.p,{children:"To get WhoDB running swiftly using Docker, you have two easy options:"}),`
`,e(n.h3,{children:"1. Single-Container Docker Run"}),`
`,e(n.p,{children:"Pull and run the official WhoDB image directly:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`# Run WhoDB Community Edition
docker run -it -p 8080:8080 clidey/whodb
`})}),`
`,e(n.p,{children:["This launches the WhoDB server accessible at ",e(n.code,{children:"http://localhost:8080"}),". This method focuses on simplicity but does not include backend database containers."]}),`
`,e(n.h3,{children:"2. Docker Compose Setup for Integrated Environment"}),`
`,e(n.p,{children:"For a richer environment with connected databases, caches, and WhoDB running together, use Docker Compose."}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker-compose -f dev/docker-compose.yml up
`})}),`
`,e(n.p,{children:"This command:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Starts containers for PostgreSQL, MySQL, MariaDB, MongoDB, Redis, Elasticsearch, and ClickHouse"}),`
`,e(n.li,{children:"Orchestrates network setup for inter-container communication"}),`
`,e(n.li,{children:"Maps default ports to your local machine for direct access"}),`
`]}),`
`,e(n.p,{children:["Access WhoDB at ",e(n.code,{children:"http://localhost:8080"})," once all containers are running."]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Understanding the Docker Compose Configuration"}),`
`,e(n.p,{children:["The ",e(n.a,{href:"dev/docker-compose.yml",children:"docker-compose.yml"})," file defines individual service containers with environment variables, volume mappings, port bindings, and network connectivity."]}),`
`,e(n.h3,{children:"Key Services Included:"}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Service"}),e(n.th,{children:"Purpose"}),e(n.th,{children:"Default Port"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:"postgres"}),e(n.td,{children:"PostgreSQL database"}),e(n.td,{children:"5432"})]}),e(n.tr,{children:[e(n.td,{children:"mysql"}),e(n.td,{children:"MySQL database"}),e(n.td,{children:"3306"})]}),e(n.tr,{children:[e(n.td,{children:"mariadb"}),e(n.td,{children:"MariaDB database"}),e(n.td,{children:"3307 (mapped)"})]}),e(n.tr,{children:[e(n.td,{children:"mongo"}),e(n.td,{children:"MongoDB NoSQL database"}),e(n.td,{children:"27017"})]}),e(n.tr,{children:[e(n.td,{children:"redis"}),e(n.td,{children:"Redis cache/auth store"}),e(n.td,{children:"6379"})]}),e(n.tr,{children:[e(n.td,{children:"elasticsearch"}),e(n.td,{children:"Search engine cluster"}),e(n.td,{children:"9200"})]}),e(n.tr,{children:[e(n.td,{children:"clickhouse"}),e(n.td,{children:"Analytics database"}),e(n.td,{children:"8123, 9000"})]})]})]}),`
`,e(n.h3,{children:"Volumes and Persistence"}),`
`,e(n.p,{children:"Each service uses a Docker volume to persist data outside the container lifecycle, ensuring your data survives container restarts and removals."}),`
`,e(n.h3,{children:"Network Setup"}),`
`,e(n.p,{children:["All services connect via a shared Docker bridge network named ",e(n.code,{children:"db"}),", allowing WhoDB to discover and communicate with them seamlessly."]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Step-by-Step Deployment Workflow"}),`
`,e(n.p,{children:"Follow this sequence to deploy and verify your WhoDB instance with Docker Compose:"}),`
`,e(l,{children:[e(i,{title:"Clone or Obtain the WhoDB Repository",children:e(n.p,{children:["If you haven't already, clone the repository or ensure access to the deployment files including the ",e(n.code,{children:"docker-compose.yml"}),"."]})}),e(i,{title:"Adjust Environment Variables (Optional)",children:e(n.p,{children:["Review and customize environment variables (e.g., database usernames, passwords) in the ",e(n.code,{children:"docker-compose.yml"})," if default credentials do not meet your security standards."]})}),e(i,{title:"Start Services via Docker Compose",children:[e(n.p,{children:"Run:"}),e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker-compose -f dev/docker-compose.yml up -d
`})}),e(n.p,{children:"Options:"}),e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"-d"})," runs containers in detached mode."]}),`
`,e(n.li,{children:["Monitor logs with ",e(n.code,{children:"docker-compose logs -f"}),"."]}),`
`]})]}),e(i,{title:"Verify Container Health and Status",children:[e(n.p,{children:"Ensure all containers are running:"}),e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker ps --filter network=db
`})}),e(n.p,{children:"Check logs for errors or failed startups."})]}),e(i,{title:"Access WhoDB UI",children:e(n.p,{children:["Open your browser to ",e(n.code,{children:"http://localhost:8080"}),". You should see the WhoDB interface."]})}),e(i,{title:"Connect Your Databases",children:e(n.p,{children:"Using WhoDB’s UI, configure connections to your databases running in containers or externally. Credentials from Docker Compose serve as defaults."})})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"E2E Testing Environment Using Docker Compose"}),`
`,e(n.p,{children:["Developers and testers can leverage a specialized setup using the ",e(n.code,{children:"docker-compose.e2e.yaml"})," file for end-to-end testing."]}),`
`,e(n.h3,{children:"Setup Script"}),`
`,e(n.p,{children:["The script ",e(n.code,{children:"dev/setup-e2e.sh"})," automates this environment creation:"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Cleans existing test state with ",e(n.code,{children:"cleanup-e2e.sh"})]}),`
`,e(n.li,{children:"Builds test binaries with coverage"}),`
`,e(n.li,{children:"Sets up an SQLite test database"}),`
`,e(n.li,{children:"Launches containerized databases with seed data"}),`
`,e(n.li,{children:"Validates containers’ health"}),`
`,e(n.li,{children:"Starts the test server with coverage enabled"}),`
`]}),`
`,e(n.p,{children:"Run it as:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`bash dev/setup-e2e.sh
`})}),`
`,e(n.p,{children:"This setup ensures consistent, repeatable test conditions for integration and system tests."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Best Practices for Docker Deployment"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Use Secure Credentials"}),": Override default usernames and passwords to harden your environment."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Data Backup"}),": Regularly back up Docker volumes storing databases to prevent data loss."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Resource Allocation"}),": Monitor and allocate sufficient CPU and memory to containers for optimal performance."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Use Environment Variables"}),": Leverage Docker Compose environment overrides and ",e(n.code,{children:".env"})," files for configuration flexibility."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Update Images Periodically"}),": Pull updated images for WhoDB and database containers to incorporate fixes and improvements."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Troubleshooting Common Docker Deployment Issues"}),`
`,e(c,{title:"Troubleshooting – Docker and Docker Compose",children:[e(o,{title:"Service Fails to Start or Crashes",children:[e(n.p,{children:"Verify logs with:"}),e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker-compose logs <service_name>
`})}),e(n.p,{children:"Common causes include port conflicts, corrupted volumes, or misconfigured environment variables."})]}),e(o,{title:"Port Conflicts Prevent Containers from Running",children:[e(n.p,{children:"Ensure local machine ports (e.g., 8080, 5432) are not already in use:"}),e(n.pre,{children:e(n.code,{className:"language-bash",children:`lsof -i :8080
`})}),e(n.p,{children:"Kill conflicting processes or change ports in the Docker Compose file."})]}),e(o,{title:"Data Does Not Persist After Container Restart",children:[e(n.p,{children:"Confirm that Docker volumes are defined and mounted correctly. Inspect volumes with:"}),e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker volume ls
`})}),e(n.p,{children:"Avoid using ephemeral containers for production data."})]}),e(o,{title:"Unable to Access WhoDB Web UI",children:e(n.ul,{children:[`
`,e(n.li,{children:"Confirm the WhoDB container is running."}),`
`,e(n.li,{children:"Check firewall and Docker network settings."}),`
`,e(n.li,{children:"Confirm port forwarding is configured correctly."}),`
`,e(n.li,{children:["Use ",e(n.code,{children:"docker logs"})," to check for startup errors."]}),`
`]})})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Advanced Configuration"}),`
`,e(n.h3,{children:"Customizing Docker Compose for Production"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Scale services using Docker Compose profiles or Kubernetes for larger deployments."}),`
`,e(n.li,{children:"Consider isolating WhoDB backend and frontend behind reverse proxies or load balancers."}),`
`,e(n.li,{children:"Secure communication with SSL/TLS for both WhoDB and database services."}),`
`]}),`
`,e(n.h3,{children:"Running Enterprise Edition"}),`
`,e(n.p,{children:["To deploy the Enterprise Edition with Docker, build the Enterprise Docker image using the ",e(n.code,{children:"core/Dockerfile.ee"})," and run similarly with Docker Compose, ensuring you have the proper EE license and modules."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker build -f core/Dockerfile.ee -t whodb:ee .
`})}),`
`,e(n.p,{children:"Update your Docker Compose service image accordingly."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Summary"}),`
`,e(n.p,{children:"Deploying WhoDB with Docker and Docker Compose brings speed, reliability, and modularity to your deployment process. Whether launching quickly for evaluation or building a scalable, multi-service production environment, these instructions guide you step-by-step from setup to troubleshooting."}),`
`,e(n.p,{children:["For full command references, build options, and manual deployment, see the ",e(n.a,{href:"./BUILD_AND_RUN.md",children:"Build and Run Guide"}),"."]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"For further assistance, consult related documentation or reach out to the WhoDB community and support channels."})]})}function u(r={}){const{wrapper:n}={...s(),...r.components};return n?e(n,{...r,children:e(d,{...r})}):d(r)}function t(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{u as default};
