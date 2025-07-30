import{u as s,a as e,k as p}from"./index-CxwdZWLc.js";function h(r){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components},{Accordion:o,AccordionGroup:d,Check:l,Source:c,Tip:t,Warning:a}=n;return o||i("Accordion"),d||i("AccordionGroup"),l||i("Check"),c||i("Source"),t||i("Tip"),a||i("Warning"),e(p,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "Installation Methods"
description: "Step-by-step installation instructions tailored for different environments. Walks users through fast Docker/Docker Compose setup as well as manual installation and build from source for both frontend and backend components. Highlights key environment variables and edition selection."`}),`
`,e(n.h1,{children:"Installation Methods"}),`
`,e(n.p,{children:"This guide provides detailed, step-by-step instructions to install and run WhoDB using different setups tailored to your environment. Whether you prefer a fast Docker-based deployment or a manual installation and build from source for the frontend and backend components, this page will guide you through each method. You will also learn about critical environment variables and how to select the appropriate edition."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"1. Preparation and Requirements"}),`
`,e(n.p,{children:"Before starting installation, ensure your system meets the following:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Supported Operating Systems:"})," Linux, macOS, and Windows (with WSL 2 recommended for Windows)."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Essential Software:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," (if using Docker setup)"]}),`
`,e(n.li,{children:[e(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})," (for multi-container setups)"]}),`
`,e(n.li,{children:[e(n.a,{href:"https://golang.org/dl/",children:"Go"})," (version 1.19 or later) for backend manual builds"]}),`
`,e(n.li,{children:[e(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js"})," (version 18+), ",e(n.a,{href:"https://pnpm.io/installation",children:"pnpm"})," for frontend builds"]}),`
`]}),`
`]}),`
`,e(n.li,{children:[e(n.strong,{children:"System Resources:"})," Minimum 2 CPU cores, 4GB RAM, 2GB free disk space"]}),`
`]}),`
`,e(t,{children:e(n.p,{children:'If you plan to run WhoDB in production, consider reviewing "Choosing Community vs. Enterprise Edition" to pick the edition that matches your needs.'})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"2. Quick Setup Using Docker and Docker Compose"}),`
`,e(n.p,{children:"Docker setup provides the fastest path to get WhoDB running locally or in a containerized environment. This method launches both frontend and backend components with recommended defaults."}),`
`,e(n.h3,{children:"Step 1: Clone the Repository"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`git clone https://github.com/clidey/whodb.git
cd whodb
`})}),`
`,e(n.h3,{children:"Step 2: Choose Your Edition"}),`
`,e(n.p,{children:[`By default, the Docker Compose will run the Community Edition.
To use Enterprise Edition, set the environment variable `,e(n.code,{children:"WHODB_EDITION=enterprise"})," in the compose override or ",e(n.code,{children:".env"})," file."]}),`
`,e(n.h3,{children:"Step 3: Start WhoDB with Docker Compose"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker-compose up -d
`})}),`
`,e(n.p,{children:"You should see both backend and frontend containers starting."}),`
`,e(n.h3,{children:"Step 4: Verify Running Containers"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker ps
`})}),`
`,e(n.p,{children:["Look for containers named ",e(n.code,{children:"whodb-backend"})," and ",e(n.code,{children:"whodb-frontend"})," in the list."]}),`
`,e(n.h3,{children:"Step 5: Access the Application"}),`
`,e(n.p,{children:["Open your browser at ",e(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," to access the WhoDB web UI."]}),`
`,e(l,{children:[e(n.p,{children:"If the UI does not load, check container logs:"}),e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker-compose logs whodb-backend
`})}),e(n.p,{children:"Look for errors related to port conflicts or missing environment variables."})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"3. Manual Installation and Build From Source"}),`
`,e(n.p,{children:"For developers or those wanting full control, building from source allows customization and debugging."}),`
`,e(n.h3,{children:"Backend Installation"}),`
`,e(n.h4,{children:"Step 1: Install Go"}),`
`,e(n.p,{children:["Ensure Go 1.19+ is installed and your ",e(n.code,{children:"GOPATH"})," and ",e(n.code,{children:"PATH"})," are correctly set."]}),`
`,e(n.p,{children:"Verify by:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`go version
`})}),`
`,e(n.h4,{children:"Step 2: Build Backend"}),`
`,e(n.p,{children:"From the root directory:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`cd backend
go build -o whodb-server ./cmd/server
`})}),`
`,e(n.p,{children:["This generates a binary ",e(n.code,{children:"whodb-server"})," in the current folder."]}),`
`,e(n.h4,{children:"Step 3: Set Environment Variables"}),`
`,e(n.p,{children:["Create a ",e(n.code,{children:".env"})," file or export variables directly."]}),`
`,e(n.p,{children:"Key environment variables:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"WHODB_EDITION"}),": ",e(n.code,{children:"community"})," or ",e(n.code,{children:"enterprise"})," (default: ",e(n.code,{children:"community"}),")"]}),`
`,e(n.li,{children:[e(n.code,{children:"WHODB_BACKEND_PORT"}),": Port for backend server (default: ",e(n.code,{children:"8080"}),")"]}),`
`,e(n.li,{children:[e(n.code,{children:"WHODB_DATABASE_URL"}),": Your database connection string"]}),`
`]}),`
`,e(n.p,{children:["Example ",e(n.code,{children:".env"})," file:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-env",children:`WHODB_EDITION=community
WHODB_BACKEND_PORT=8080
WHODB_DATABASE_URL=postgres://user:pass@localhost:5432/whodb
`})}),`
`,e(n.h4,{children:"Step 4: Run Backend Server"}),`
`,e(n.p,{children:"Start the backend:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`./whodb-server
`})}),`
`,e(n.p,{children:"The service listens on the configured port."}),`
`,e(n.hr,{}),`
`,e(n.h3,{children:"Frontend Installation"}),`
`,e(n.h4,{children:"Step 1: Install Node.js and pnpm"}),`
`,e(n.p,{children:"Verify Node.js 18+ and install pnpm globally:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`npm install -g pnpm
`})}),`
`,e(n.h4,{children:"Step 2: Install Frontend Dependencies"}),`
`,e(n.p,{children:"Navigate to the frontend source directory:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`cd frontend
pnpm install
`})}),`
`,e(n.h4,{children:"Step 3: Configure Frontend"}),`
`,e(n.p,{children:["Edit or create a ",e(n.code,{children:".env"})," file to set API endpoint for backend, e.g.:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-env",children:`VITE_API_BASE_URL=http://localhost:8080/api
`})}),`
`,e(n.h4,{children:"Step 4: Start Frontend Development Server"}),`
`,e(n.p,{children:"Run:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`pnpm dev
`})}),`
`,e(n.p,{children:["This will launch the frontend on ",e(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),"."]}),`
`,e(t,{children:e(n.p,{children:"Use this mode for active development with hot reload."})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"4. Setting Up Your Database"}),`
`,e(n.p,{children:"WhoDB supports various databases including Postgres, MySQL, MariaDB, SQLite3, MongoDB, and ClickHouse."}),`
`,e(n.h3,{children:"Step 1: Prepare Your Database"}),`
`,e(n.p,{children:["Create and configure your database instance. Use the provided sample data scripts (e.g., under ",e(n.code,{children:"dev/sample-data"}),") to initialize schemas and sample records."]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"For SQL databases, run the corresponding SQL script."}),`
`,e(n.li,{children:["For MongoDB, run the provided ",e(n.code,{children:".js"})," initialization script."]}),`
`]}),`
`,e(n.h3,{children:"Step 2: Configure Connection"}),`
`,e(n.p,{children:["Set ",e(n.code,{children:"WHODB_DATABASE_URL"})," with the correct connection string format matching your DB:"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Postgres: ",e(n.code,{children:"postgres://user:pass@host:port/dbname"})]}),`
`,e(n.li,{children:["MySQL/MariaDB: ",e(n.code,{children:"mysql://user:pass@host:port/dbname"})]}),`
`,e(n.li,{children:["SQLite3: ",e(n.code,{children:"file:path/to/database.sqlite"})," (local file path)"]}),`
`,e(n.li,{children:["MongoDB: ",e(n.code,{children:"mongodb://user:pass@host:port/dbname"})]}),`
`,e(n.li,{children:["ClickHouse: ",e(n.code,{children:"clickhouse://user:pass@host:port/dbname"})]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"5. Key Configuration Environment Variables"}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Variable"}),e(n.th,{children:"Description"}),e(n.th,{children:"Default"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_EDITION"})}),e(n.td,{children:["Edition selection: ",e(n.code,{children:"community"})," or ",e(n.code,{children:"enterprise"})]}),e(n.td,{children:e(n.code,{children:"community"})})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_BACKEND_PORT"})}),e(n.td,{children:"Port for backend listening"}),e(n.td,{children:e(n.code,{children:"8080"})})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_DATABASE_URL"})}),e(n.td,{children:"Database connection string"}),e(n.td,{children:e(n.em,{children:"Required"})})]}),e(n.tr,{children:[e(n.td,{children:e(n.code,{children:"WHODB_LOG_LEVEL"})}),e(n.td,{children:["Log verbosity: ",e(n.code,{children:"info"}),", ",e(n.code,{children:"debug"}),", ",e(n.code,{children:"error"})]}),e(n.td,{children:e(n.code,{children:"info"})})]})]})]}),`
`,e(a,{children:e(n.p,{children:["Always secure your database credentials and avoid committing ",e(n.code,{children:".env"})," files containing secrets."]})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"6. Verification and First Run"}),`
`,e(n.p,{children:"After installation and configuration:"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:"Start backend server or Docker containers."}),`
`,e(n.li,{children:"Launch frontend UI."}),`
`,e(n.li,{children:"Navigate to the UI in your browser."}),`
`,e(n.li,{children:'Connect to your database using the UI following the next guide, "Connecting to Your Database."'}),`
`]}),`
`,e(n.p,{children:"If the UI loads and allows database connection setup, your installation succeeded."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"7. Troubleshooting Common Installation Issues"}),`
`,e(d,{title:"Common Problems and Solutions",children:[e(o,{title:"Docker Containers Fail to Start or Crash",children:e(n.ul,{children:[`
`,e(n.li,{children:"Check conflicting ports (3000, 8080) are free."}),`
`,e(n.li,{children:["Inspect logs with ",e(n.code,{children:"docker-compose logs"}),"."]}),`
`,e(n.li,{children:"Ensure Docker daemon is running."}),`
`,e(n.li,{children:["Verify environment variables in ",e(n.code,{children:".env"}),"."]}),`
`]})}),e(o,{title:"Backend Build Fails with Go Errors",children:e(n.ul,{children:[`
`,e(n.li,{children:"Confirm the correct Go version."}),`
`,e(n.li,{children:"Verify dependencies installed and Go modules initialized."}),`
`,e(n.li,{children:["Clean cache: ",e(n.code,{children:"go clean -modcache"}),"."]}),`
`]})}),e(o,{title:"Frontend Does Not Load Correctly",children:e(n.ul,{children:[`
`,e(n.li,{children:"Confirm Node.js and pnpm versions."}),`
`,e(n.li,{children:["Run ",e(n.code,{children:"pnpm install"})," again."]}),`
`,e(n.li,{children:["Check ",e(n.code,{children:"VITE_API_BASE_URL"})," in ",e(n.code,{children:".env"}),"."]}),`
`]})}),e(o,{title:"Database Connection Errors",children:e(n.ul,{children:[`
`,e(n.li,{children:"Confirm DB server accessibility, credentials, and network."}),`
`,e(n.li,{children:"Use database client tools to test connection."}),`
`,e(n.li,{children:"Ensure sample data scripts are correctly applied."}),`
`]})})]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"8. Next Steps"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Proceed to ",e(n.a,{href:"../initial-config-launch/initial-configurations",children:"Initial Configuration"})," to set up your first connection profiles and preferences."]}),`
`,e(n.li,{children:["Explore ",e(n.a,{href:"../../guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})," for detailed workflows after installation."]}),`
`,e(n.li,{children:'For Docker users, see "Environment Variables & Third-Party Integrations" to customize deployments.'}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Summary"}),`
`,e(n.p,{children:"This page equipped you with practical, stepwise methods to install WhoDB using Docker Compose or manual builds for frontend and backend. You learned essential environment variables, database setup hints, and basic troubleshooting tips to ensure a robust start. With WhoDB installed, you are ready to configure connections and explore your data seamlessly."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"References"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"../setup-requirements/prerequisites-system-requirements",children:"Prerequisites & System Requirements"})}),`
`,e(n.li,{children:e(n.a,{href:"../../../deployment/prod_deployment/edition_selection",children:"Choosing Community vs. Enterprise Edition"})}),`
`,e(n.li,{children:e(n.a,{href:"../initial-config-launch/first-run-and-validation",children:"First Run & Quick Validation"})}),`
`,e(n.li,{children:e(n.a,{href:"../../guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})}),`
`,e(n.li,{children:e(n.a,{href:"https://docs.docker.com/",children:"Docker Documentation"})}),`
`,e(n.li,{children:e(n.a,{href:"https://golang.org/",children:"Go Programming Language"})}),`
`,e(n.li,{children:e(n.a,{href:"https://nodejs.org/",children:"Node.js"})}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Support"}),`
`,e(n.p,{children:"For further assistance, visit our support page or community forums linked from the main documentation portal."}),`
`,e(n.hr,{}),`
`,e(c,{url:"https://github.com/clidey/whodb",paths:[{path:"docker-compose.yml",range:"1-50"},{path:"frontend/README.md",range:"1-30"},{path:"backend/README.md",range:"1-40"}]})]})}function m(r={}){const{wrapper:n}={...s(),...r.components};return n?e(n,{...r,children:e(h,{...r})}):h(r)}function i(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{m as default};
