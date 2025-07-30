import{u as h,a as e,k as t}from"./index-CxwdZWLc.js";function c(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...r.components},{Step:d,Steps:l,Tip:i}=n;return d||o("Step"),l||o("Steps"),i||o("Tip"),e(t,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: "How Do I Deploy or Run WhoDB?"
description: "Step-by-step guidance on launching WhoDB—whether via Docker, Docker Compose, or manual installation. Find out tips for common configuration issues and pointers for both editions."`}),`
`,e(n.h1,{children:"How Do I Deploy or Run WhoDB?"}),`
`,e(n.p,{children:"Discover step-by-step guidance to launch WhoDB efficiently, whether using Docker, Docker Compose, or manual installation and builds. This guide covers both Community Edition (CE) and Enterprise Edition (EE) deployment methods, tips for configuration, and troubleshooting common issues during setup and runtime."}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Quick Start: Launching WhoDB Easily"}),`
`,e(n.h3,{children:"Running WhoDB Without Containers"}),`
`,e(n.p,{children:"The simplest way to start WhoDB is via the provided scripts for Community or Enterprise Edition. This method runs WhoDB directly on your host system."}),`
`,e(l,{children:[e(d,{title:"Start Community Edition",children:[e(n.p,{children:"Run the following in your project root:"}),e(n.pre,{children:e(n.code,{className:"language-bash",children:`./run.sh
`})}),e(n.p,{children:["Access the UI at ",e(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"}),"."]})]}),e(d,{title:"Start Enterprise Edition",children:[e(n.p,{children:"Run the Enterprise Edition with:"}),e(n.pre,{children:e(n.code,{className:"language-bash",children:`./run.sh --ee
`})}),e(n.p,{children:"This requires EE source and modules."})]})]}),`
`,e(i,{children:e(n.p,{children:["These scripts compile and start the Go backend with embedded frontend. Use ",e(n.code,{children:"--ee"})," flag to switch editions."]})}),`
`,e(n.h3,{children:"Development Mode with Hot Reload"}),`
`,e(n.p,{children:"For active development where code changes automatically reload the UI and backend:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`./dev.sh           # For Community Edition
./dev.sh --ee      # For Enterprise Edition
`})}),`
`,e(n.p,{children:["Frontend dev server runs on ",e(n.a,{href:"http://localhost:1234",children:"http://localhost:1234"})," with hot reload."]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Deploying WhoDB with Docker"}),`
`,e(n.p,{children:"Docker offers a streamlined environment for deploying WhoDB with minimal local dependencies."}),`
`,e(n.h3,{children:"Run with Docker"}),`
`,e(n.p,{children:"Pull and run the Community Edition image easily:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker run -it -p 8080:8080 clidey/whodb
`})}),`
`,e(n.p,{children:"This runs WhoDB and exposes it on port 8080."}),`
`,e(n.h3,{children:"Docker Compose Setup"}),`
`,e(n.p,{children:["Use the provided ",e(n.code,{children:"docker-compose.yml"})," to manage containers and environment variables:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-yaml",children:`version: "3.8"
services:
  whodb:
    image: clidey/whodb
    ports:
      - "8080:8080"
    environment:
      - WHODB_OLLAMA_HOST=localhost
      - WHODB_OLLAMA_PORT=11434
      - WHODB_ANTHROPIC_API_KEY=your_api_key_here
      - WHODB_OPENAI_API_KEY=your_api_key_here
    volumes:
      - ./data:/db
`})}),`
`,e(n.p,{children:"Start with:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker-compose up
`})}),`
`,e(i,{children:e(n.p,{children:["The volume mount ",e(n.code,{children:"./data:/db"}),` is optional but recommended for persisting SQLite data.
Configure AI API keys or Ollama host here if using conversational AI features.`]})}),`
`,e(n.h3,{children:"Building Docker Images Locally"}),`
`,e(n.p,{children:"You can build your own Docker images for CE or EE:"}),`
`,e(n.h4,{children:"Build CE Image"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker build -f core/Dockerfile -t whodb:ce .
`})}),`
`,e(n.h4,{children:"Build EE Image (requires EE access)"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker build -f core/Dockerfile.ee -t whodb:ee .
`})}),`
`,e(n.h4,{children:"Multi-Architecture Build with Push"}),`
`,e(n.p,{children:"Enable Docker buildx and create a builder:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker buildx create --use
`})}),`
`,e(n.p,{children:"Then build and push:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`docker buildx build --platform linux/amd64,linux/arm64 \\
  -t whodb-ce:latest \\
  -f core/Dockerfile . --push
`})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Manual Build and Run Process"}),`
`,e(n.p,{children:"For full control or customization, build WhoDB manually from source."}),`
`,e(n.h3,{children:"Prerequisites"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.strong,{children:"Go 1.21+"})}),`
`,e(n.li,{children:e(n.strong,{children:"Node.js 18+"})}),`
`,e(n.li,{children:[e(n.strong,{children:"pnpm"})," (",e(n.code,{children:"npm install -g pnpm"}),")"]}),`
`,e(n.li,{children:[e(n.strong,{children:"Git"})," (for version info)"]}),`
`,e(n.li,{children:"Optional: Docker, Make, Ollama (for AI chat)"}),`
`]}),`
`,e(n.h3,{children:"Step 1: Build Frontend"}),`
`,e(n.p,{children:"Navigate to the frontend directory:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`cd frontend
`})}),`
`,e(n.p,{children:"Install dependencies if not done:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`pnpm install
`})}),`
`,e(n.p,{children:"Generate GraphQL types with backend running (see GraphQL generation below)."}),`
`,e(n.p,{children:"Build frontend assets:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`# Community Edition
pnpm run build

# Enterprise Edition
pnpm run build:ee
`})}),`
`,e(n.h3,{children:"Step 2: Copy Frontend Build to Backend"}),`
`,e(n.p,{children:"Remove previous embedded build and copy the new one:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`rm -rf ../core/build
cp -r dist ../core/build
`})}),`
`,e(n.h3,{children:"Step 3: Build Backend"}),`
`,e(n.p,{children:"Change directory to core:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`cd ../core
`})}),`
`,e(n.p,{children:"Build the Go binary:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`# Community Edition
go build -o whodb

# Enterprise Edition
go build -tags ee -o whodb-ee
`})}),`
`,e(i,{children:e(n.p,{children:["Backend compilation embeds the frontend build from ",e(n.code,{children:"core/build"})," to serve assets seamlessly."]})}),`
`,e(n.h3,{children:"Step 4: Run the Built Binary"}),`
`,e(n.p,{children:"Start the program:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`# Community Edition
./whodb

# Enterprise Edition
./whodb-ee
`})}),`
`,e(n.p,{children:["Access WhoDB at ",e(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"}),"."]}),`
`,e(n.h3,{children:"GraphQL Types Generation"}),`
`,e(n.p,{children:"When changing backend schema, regenerate GraphQL types before rebuilding frontend."}),`
`,e(n.p,{children:"Prerequisites:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Backend running on ",e(n.code,{children:"http://localhost:8080"})," with introspection enabled (run backend in dev mode using ",e(n.code,{children:"ENVIRONMENT=dev go run ."}),")"]}),`
`]}),`
`,e(n.p,{children:"Generate types separately for editions:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`# CE edition
cd core
ENVIRONMENT=dev go run .

# In another terminal
cd frontend
pnpm run generate:ce

# EE edition
cd core
ENVIRONMENT=dev go run -tags ee .

# In another terminal
cd frontend
pnpm run generate:ee
`})}),`
`,e(i,{children:e(n.p,{children:["Always use the ",e(n.code,{children:"@graphql"})," import alias in frontend code to ensure edition agnostic GraphQL types usage."]})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Running WhoDB in Development"}),`
`,e(n.p,{children:"Run backend and frontend together with live reload for code changes:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`./dev.sh          # Community Edition
./dev.sh --ee     # Enterprise Edition
`})}),`
`,e(n.p,{children:"Backend listens on 8080, frontend dev server on 1234 (hot reload enabled)."}),`
`,e(n.p,{children:["Press ",e(n.code,{children:"Ctrl+C"})," to stop all running processes."]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Troubleshooting"}),`
`,e(n.h3,{children:"Common Issues"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"pnpm Not Installed"}),`:
Install globally:`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`  npm install -g pnpm
`})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"EE Directory Not Found"}),`:
Ensure you have access to EE modules and the `,e(n.code,{children:"ee"}),` directory resides in the project root.
Run:`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`  ./scripts/validate-ee.sh
`})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"GraphQL Generation Fails"}),`:
Confirm backend runs with introspection enabled.
Download Go module dependencies:`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`  cd core
  go mod download
  cd ../ee
  go mod download
`})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"TypeScript Errors During Build"}),`:
Run type check:`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`  cd frontend
  pnpm exec tsc --noEmit
`})}),`
`,e(n.p,{children:"Refresh GraphQL types if needed."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Frontend Build Missing at Runtime"}),`:
Build frontend and copy to backend:`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`  cd frontend
  pnpm run build
  cp -r dist ../core/build
`})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Port 8080 Already in Use"}),`:
Identify and stop the blocking process:`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`  lsof -i :8080
  kill -9 <PID>
`})}),`
`,e(n.h3,{children:"Clean Build Procedure"}),`
`,e(n.p,{children:"If persistent issues occur, clean all builds and dependencies:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`./build.sh --clean          # CE clean build
./build.sh --clean --ee     # EE clean build
rm -rf core/build frontend/dist frontend/node_modules
rm -f core/whodb core/whodb-ee
`})}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Best Practices and Tips"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Always build frontend before backend to embed assets correctly."}),`
`,e(n.li,{children:["Use the official build scripts (",e(n.code,{children:"build.sh"}),", ",e(n.code,{children:"build-backend.sh"}),", ",e(n.code,{children:"build-frontend.sh"}),") for consistency."]}),`
`,e(n.li,{children:["For EE builds, run ",e(n.code,{children:"./scripts/validate-ee.sh"})," before building to verify requirements."]}),`
`,e(n.li,{children:"Use Docker for quick, consistent deployments, especially in production."}),`
`,e(n.li,{children:["Configure environment variables like ",e(n.code,{children:"PORT"}),", ",e(n.code,{children:"VITE_API_URL"}),", and edition-specific flags for custom deployments."]}),`
`]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Additional Help & Resources"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Full build and run instructions with environment configuration: ",e(n.a,{href:"https://github.com/clidey/whodb/blob/main/BUILD_AND_RUN.md",children:"BUILD_AND_RUN.md"})]}),`
`,e(n.li,{children:["Docker deployment guide: ",e(n.a,{href:"https://whodb.com/docs/deployment/prod_deployment/docker_quickstart",children:"Deploying with Docker & Docker Compose"})]}),`
`,e(n.li,{children:["EE validation and building: ",e(n.a,{href:"https://github.com/clidey/whodb/blob/main/scripts/validate-ee.sh",children:"scripts/validate-ee.sh"})]}),`
`,e(n.li,{children:["GraphQL generation details: ",e(n.a,{href:"https://github.com/clidey/whodb/blob/main/frontend/GRAPHQL_SETUP.md",children:"frontend/GRAPHQL_SETUP.md"})]}),`
`]}),`
`,e(n.p,{children:["For support, contact ",e(n.a,{href:"mailto:support@clidey.com",children:"support@clidey.com"})," or file an issue on GitHub."]}),`
`,e(n.hr,{}),`
`,e(n.h2,{children:"Summary Flow Diagram"}),`
`,e(n.pre,{children:e(n.code,{className:"language-mermaid",children:`flowchart TD

  A[User: Decide deployment method] -->|Docker| B[Use Docker image or Compose]
  A -->|Manual| C[Build and run from source]

  subgraph Docker Deployment
    B --> D[Pull image or build locally]
    D --> E[Run container, map port 8080]
    E --> F[Access WhoDB UI]
  end

  subgraph Manual Build
    C --> G[Setup prerequisites: Go, Node, pnpm]
    G --> H[Generate GraphQL types]
    H --> I[Build frontend]
    I --> J[Copy frontend build to backend]
    J --> K[Build backend executable]
    K --> L[Run backend]
    L --> F
  end

  F --> M[Use WhoDB at http://localhost:8080]

  style A fill:#f9f,stroke:#333,stroke-width:2px
  style F fill:#bbf,stroke:#333,stroke-width:2px
`})}),`
`,e(n.hr,{})]})}function s(r={}){const{wrapper:n}={...h(),...r.components};return n?e(n,{...r,children:e(c,{...r})}):c(r)}function o(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{s as default};
