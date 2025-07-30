const e=`---
title: "Backup and Disaster Recovery"
description: "Protect your data and minimize downtime by following backup and recovery best practices. Learn how to back up both configuration and database data for all supported databases, implement restoration workflows, and automate regular safety checks for peace of mind."
---

# Backup and Disaster Recovery

Protecting your data and ensuring rapid recovery in case of failures or data loss are paramount in maintaining a reliable WhoDB deployment. This guide provides practical instructions on how to back up both configuration and database data for all supported database engines, restore from backups efficiently, and set up automated backup routines and integrity checks to minimize downtime and prevent data loss.

---

## 1. Understanding Backup Types in WhoDB

WhoDB requires backing up two key components to ensure full recovery capability:

- **Configuration Data**: This includes WhoDB’s environment variables, login profiles, and system settings that control how the service connects to your databases.
- **Database Data**: The actual content of your databases managed and visualized through WhoDB, which may be SQL or NoSQL depending on your chosen backend.

Backing up your database data is distinct from WhoDB but crucial since WhoDB acts as a visualization and management layer on top of these data stores.

---

## 2. Backing Up Your Database Data

WhoDB supports multiple databases including PostgreSQL, MySQL, SQLite3, MongoDB, Redis, Elasticsearch, MariaDB, and ClickHouse. Backup procedures vary by database type:

### PostgreSQL

1. Use \`pg_dump\` or \`pg_basebackup\` for full database dumps.
2. Example full dump command:

\`\`\`sh
pg_dump -U user -h localhost -Fc -d postgres -f whodb_postgres_backup.dump
\`\`\`
3. Store backups securely off the primary database host.

### MySQL and MariaDB

1. Use \`mysqldump\` to export the entire database.
2. Example command:

\`\`\`sh
mysqldump -u user -p password mysql > whodb_mysql_backup.sql
\`\`\`
3. Regularly verify backups by importing to a test environment.

### SQLite3

1. Simply copy the SQLite \`.db\` files that you have mounted into the container.
2. Example:

\`\`\`sh
cp sample.db sample_backup.db
\`\`\`

### MongoDB

1. Use \`mongodump\` for full BSON data backups.
2. Example:

\`\`\`sh
mongodump --username user --password password --out ./whodb_mongo_backup
\`\`\`

### Redis

1. Copy the Redis dump file, usually \`dump.rdb\`, from Redis data directory.
2. Optionally save snapshot on demand with \`SAVE\` or \`BGSAVE\` commands.

### Elasticsearch

1. Use snapshot and restore API to back up indices to a shared FS or cloud repository.
2. Snapshot commands require repository registration.

### ClickHouse

1. Use ClickHouse’s built-in backup tools or export tables as needed.

---

## 3. Backing Up WhoDB Configuration

WhoDB configurations are defined primarily through environment variables and Docker volumes:

- Store your Docker Compose files and \`.env\` files securely.
- Backup any mounted volumes linked to WhoDB’s configuration or runtime data.
- Ensure that your login profiles, including credentials set via environment variables, are saved in secure key management systems or vaults.

---

## 4. Restoration Workflows

When disaster strikes and you must restore your WhoDB deployment, follow these steps:

### Step 1: Restore Your Database

- Restore from the backup files using database-specific tools (\`pg_restore\`, \`mysql\`, \`mongorestore\`, etc.)
- Confirm the database is operational and accessible.

### Step 2: Restore WhoDB Configuration

- Redeploy WhoDB using your saved Docker Compose and environment files.
- Ensure database connection profiles and credentials are accurate and secure.

### Step 3: Validate the Deployment

- Access WhoDB web UI.
- Verify connection to restored databases.
- Perform key workflows such as Table Schema visualization and data browsing.

---

## 5. Automating Backups and Safety Checks

To reduce risk, implement automated routines:

- **Schedule database backups** using cron jobs, Kubernetes CronJobs, or managed services depending on your environment.
- **Monitor backup success** and configure alerts for failures.
- Use checksum or integrity verification tools where supported.
- Maintain multiple backup copies with retention policies aligned with your business needs.

**Example Cronjob for PostgreSQL backup:**

\`\`\`cron
0 2 * * * pg_dump -U user -h localhost -d postgres -F c -f /backup/whodb_postgres_$(date +"%Y%m%d").dump
\`\`\`

---

## 6. Best Practices and Tips

- Regularly test restoration processes in a non-production environment.
- Encrypt backup files when storing them offsite.
- Ensure WhoDB login profiles are decoupled from user interface and access credentials are never exposed.
- Keep your database and WhoDB Docker images up to date to benefit from security patches.
- Document your backup and restore procedures as part of your operational playbook.

---

## 7. Troubleshooting Backup and Recovery

### Problem: Backup files are corrupt or incomplete
- Inspect logs from backup tools.
- Check disk space on backup destinations.
- Verify database connectivity and permissions.

### Problem: WhoDB fails to connect after restoration
- Confirm that database service endpoints and credentials have not changed.
- Validate environment variables and Docker volume mounts.
- Review WhoDB logs for connection errors.

### Problem: Automated backups not running
- Check cron syntax and permissions.
- Review container or host schedules.
- Confirm backup script executables and paths.

For further help, consult the [Troubleshooting Common Issues](/getting-started/troubleshooting/troubleshooting-common-issues) page.

---

## 8. Additional Resources

- [Connecting to Your Database](/guides/essential-workflows/connecting-to-your-database)
- [System Architecture Overview](/overview/architecture-concepts-group/system-architecture-overview)
- [Security and Authentication Essentials](/guides/best-practices-and-optimization/security-and-authentication)
- [Deploying with Docker & Docker Compose](/deployment/prod_deployment/docker_quickstart)

Secure backup and disaster recovery are the final safety nets that guarantee your WhoDB deployment remains resilient and trustworthy. Follow these guidelines closely to secure your data and maintain your operational confidence.
`;export{e as default};
