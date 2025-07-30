import{u as o,a as n,k as a}from"./index-CxwdZWLc.js";function i(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n(a,{children:[n(e.hr,{}),`
`,n(e.h2,{children:`title: "Backup and Disaster Recovery"
description: "Protect your data and minimize downtime by following backup and recovery best practices. Learn how to back up both configuration and database data for all supported databases, implement restoration workflows, and automate regular safety checks for peace of mind."`}),`
`,n(e.h1,{children:"Backup and Disaster Recovery"}),`
`,n(e.p,{children:"Protecting your data and ensuring rapid recovery in case of failures or data loss are paramount in maintaining a reliable WhoDB deployment. This guide provides practical instructions on how to back up both configuration and database data for all supported database engines, restore from backups efficiently, and set up automated backup routines and integrity checks to minimize downtime and prevent data loss."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"1. Understanding Backup Types in WhoDB"}),`
`,n(e.p,{children:"WhoDB requires backing up two key components to ensure full recovery capability:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Configuration Data"}),": This includes WhoDB’s environment variables, login profiles, and system settings that control how the service connects to your databases."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Database Data"}),": The actual content of your databases managed and visualized through WhoDB, which may be SQL or NoSQL depending on your chosen backend."]}),`
`]}),`
`,n(e.p,{children:"Backing up your database data is distinct from WhoDB but crucial since WhoDB acts as a visualization and management layer on top of these data stores."}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"2. Backing Up Your Database Data"}),`
`,n(e.p,{children:"WhoDB supports multiple databases including PostgreSQL, MySQL, SQLite3, MongoDB, Redis, Elasticsearch, MariaDB, and ClickHouse. Backup procedures vary by database type:"}),`
`,n(e.h3,{children:"PostgreSQL"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:["Use ",n(e.code,{children:"pg_dump"})," or ",n(e.code,{children:"pg_basebackup"})," for full database dumps."]}),`
`,n(e.li,{children:"Example full dump command:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`pg_dump -U user -h localhost -Fc -d postgres -f whodb_postgres_backup.dump
`})}),`
`,n(e.ol,{start:"3",children:[`
`,n(e.li,{children:"Store backups securely off the primary database host."}),`
`]}),`
`,n(e.h3,{children:"MySQL and MariaDB"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:["Use ",n(e.code,{children:"mysqldump"})," to export the entire database."]}),`
`,n(e.li,{children:"Example command:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`mysqldump -u user -p password mysql > whodb_mysql_backup.sql
`})}),`
`,n(e.ol,{start:"3",children:[`
`,n(e.li,{children:"Regularly verify backups by importing to a test environment."}),`
`]}),`
`,n(e.h3,{children:"SQLite3"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:["Simply copy the SQLite ",n(e.code,{children:".db"})," files that you have mounted into the container."]}),`
`,n(e.li,{children:"Example:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`cp sample.db sample_backup.db
`})}),`
`,n(e.h3,{children:"MongoDB"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:["Use ",n(e.code,{children:"mongodump"})," for full BSON data backups."]}),`
`,n(e.li,{children:"Example:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`mongodump --username user --password password --out ./whodb_mongo_backup
`})}),`
`,n(e.h3,{children:"Redis"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:["Copy the Redis dump file, usually ",n(e.code,{children:"dump.rdb"}),", from Redis data directory."]}),`
`,n(e.li,{children:["Optionally save snapshot on demand with ",n(e.code,{children:"SAVE"})," or ",n(e.code,{children:"BGSAVE"})," commands."]}),`
`]}),`
`,n(e.h3,{children:"Elasticsearch"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"Use snapshot and restore API to back up indices to a shared FS or cloud repository."}),`
`,n(e.li,{children:"Snapshot commands require repository registration."}),`
`]}),`
`,n(e.h3,{children:"ClickHouse"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"Use ClickHouse’s built-in backup tools or export tables as needed."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"3. Backing Up WhoDB Configuration"}),`
`,n(e.p,{children:"WhoDB configurations are defined primarily through environment variables and Docker volumes:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Store your Docker Compose files and ",n(e.code,{children:".env"})," files securely."]}),`
`,n(e.li,{children:"Backup any mounted volumes linked to WhoDB’s configuration or runtime data."}),`
`,n(e.li,{children:"Ensure that your login profiles, including credentials set via environment variables, are saved in secure key management systems or vaults."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"4. Restoration Workflows"}),`
`,n(e.p,{children:"When disaster strikes and you must restore your WhoDB deployment, follow these steps:"}),`
`,n(e.h3,{children:"Step 1: Restore Your Database"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Restore from the backup files using database-specific tools (",n(e.code,{children:"pg_restore"}),", ",n(e.code,{children:"mysql"}),", ",n(e.code,{children:"mongorestore"}),", etc.)"]}),`
`,n(e.li,{children:"Confirm the database is operational and accessible."}),`
`]}),`
`,n(e.h3,{children:"Step 2: Restore WhoDB Configuration"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Redeploy WhoDB using your saved Docker Compose and environment files."}),`
`,n(e.li,{children:"Ensure database connection profiles and credentials are accurate and secure."}),`
`]}),`
`,n(e.h3,{children:"Step 3: Validate the Deployment"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Access WhoDB web UI."}),`
`,n(e.li,{children:"Verify connection to restored databases."}),`
`,n(e.li,{children:"Perform key workflows such as Table Schema visualization and data browsing."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"5. Automating Backups and Safety Checks"}),`
`,n(e.p,{children:"To reduce risk, implement automated routines:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Schedule database backups"})," using cron jobs, Kubernetes CronJobs, or managed services depending on your environment."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Monitor backup success"})," and configure alerts for failures."]}),`
`,n(e.li,{children:"Use checksum or integrity verification tools where supported."}),`
`,n(e.li,{children:"Maintain multiple backup copies with retention policies aligned with your business needs."}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Example Cronjob for PostgreSQL backup:"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-cron",children:`0 2 * * * pg_dump -U user -h localhost -d postgres -F c -f /backup/whodb_postgres_$(date +"%Y%m%d").dump
`})}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"6. Best Practices and Tips"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Regularly test restoration processes in a non-production environment."}),`
`,n(e.li,{children:"Encrypt backup files when storing them offsite."}),`
`,n(e.li,{children:"Ensure WhoDB login profiles are decoupled from user interface and access credentials are never exposed."}),`
`,n(e.li,{children:"Keep your database and WhoDB Docker images up to date to benefit from security patches."}),`
`,n(e.li,{children:"Document your backup and restore procedures as part of your operational playbook."}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"7. Troubleshooting Backup and Recovery"}),`
`,n(e.h3,{children:"Problem: Backup files are corrupt or incomplete"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Inspect logs from backup tools."}),`
`,n(e.li,{children:"Check disk space on backup destinations."}),`
`,n(e.li,{children:"Verify database connectivity and permissions."}),`
`]}),`
`,n(e.h3,{children:"Problem: WhoDB fails to connect after restoration"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Confirm that database service endpoints and credentials have not changed."}),`
`,n(e.li,{children:"Validate environment variables and Docker volume mounts."}),`
`,n(e.li,{children:"Review WhoDB logs for connection errors."}),`
`]}),`
`,n(e.h3,{children:"Problem: Automated backups not running"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Check cron syntax and permissions."}),`
`,n(e.li,{children:"Review container or host schedules."}),`
`,n(e.li,{children:"Confirm backup script executables and paths."}),`
`]}),`
`,n(e.p,{children:["For further help, consult the ",n(e.a,{href:"/getting-started/troubleshooting/troubleshooting-common-issues",children:"Troubleshooting Common Issues"})," page."]}),`
`,n(e.hr,{}),`
`,n(e.h2,{children:"8. Additional Resources"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"/guides/essential-workflows/connecting-to-your-database",children:"Connecting to Your Database"})}),`
`,n(e.li,{children:n(e.a,{href:"/overview/architecture-concepts-group/system-architecture-overview",children:"System Architecture Overview"})}),`
`,n(e.li,{children:n(e.a,{href:"/guides/best-practices-and-optimization/security-and-authentication",children:"Security and Authentication Essentials"})}),`
`,n(e.li,{children:n(e.a,{href:"/deployment/prod_deployment/docker_quickstart",children:"Deploying with Docker & Docker Compose"})}),`
`]}),`
`,n(e.p,{children:"Secure backup and disaster recovery are the final safety nets that guarantee your WhoDB deployment remains resilient and trustworthy. Follow these guidelines closely to secure your data and maintain your operational confidence."})]})}function l(r={}){const{wrapper:e}={...o(),...r.components};return e?n(e,{...r,children:n(i,{...r})}):i(r)}export{l as default};
