# DevSecOps Cloud Dashboard

This is a real-time infrastructure monitoring dashboard that automatically deploys on **GCP, AWS, Azure**, or any Linux VM. It displays system metrics (CPU, memory, disk, network), cost estimation, inspirational quotes, an international photo gallery, and more.

> [!NOTE]
Numbers shown for cost estimation are merely estimates. This feature is in ongoing development. For the most accurate cost estimation, please use your cloud provider's API.

---

## Quick Start

> [!IMPORTANT]
> Deployment is fully automated using a bootstrap script (user-data / startup script).

1. Copy the bootstrap script below into your cloud VM:
   - AWS / Azure → user-data  
   - GCP → startup script  

2. Launch a VM  
   - Ubuntu 20.04 / 22.04 recommended  
   - Works on Amazon Linux 2 / 2023  

3. Wait 5–10 minutes  
   - Dependencies install  
   - React app builds  

4. Open the VM’s public IP in your browser  

---

## Bootstrap Script (paste as is)

> [!NOTE]
> Logs are written to `/var/log/bootstrap.log` for troubleshooting.

```bash
#!/bin/bash
set -e
exec > /var/log/bootstrap.log 2>&1
set -x

echo "Bootstrap started at $(date)"

if command -v apt-get >/dev/null 2>&1; then
    apt-get update -y
    apt-get install -y git
elif command -v yum >/dev/null 2>&1; then
    yum install -y git
elif command -v dnf >/dev/null 2>&1; then
    dnf install -y git
else
    echo "ERROR: No known package manager found"
    exit 1
fi

git clone https://github.com/KirkAlton-Class7/devsecops-vm-dashboard.git /opt/deploy
bash /opt/deploy/scripts/bootstrap/app_bootstrap.sh

echo "Bootstrap finished at $(date)"
````

---

## Customization (appearance & data)

> [!TIP]
> No redeploy required. Changes are applied automatically.

All customisation happens in:

```bash
scripts/bootstrap/app_bootstrap.sh
```

### Editable Variables

```bash
# App name shown in the header (top left)
DASHBOARD_APP_NAME="My Dashboard"

# Tagline below the app name
DASHBOARD_TAGLINE="Real-time monitoring for production"

# User name displayed in the sidebar
DASHBOARD_USER="Your Name"

# Dashboard title in the sidebar
DASHBOARD_NAME="DevOps Dashboard"
```

### Apply Changes

1. Edit variables
2. Commit and push
3. Auto-deploy updates within 15 minutes

---

## Forking & using your own repo

> [!IMPORTANT]
> Required if you want to use your own fork or custom dashboard.

### Steps

1. Fork this repository
2. Edit `scripts/bootstrap/app_bootstrap.sh` and update:

```bash
REPO_URL="https://github.com/your-username/your-repo.git"
```

3. Update bootstrap script clone:

```bash
git clone https://github.com/your-username/your-repo.git /opt/deploy
```

4. Optional: modify quotes source:

```bash
GITHUB_QUOTES_URL="..."
```

> [!WARNING]
> Keep the repository structure identical.

### Required Structure

```
dashboard/
scripts/bootstrap/app_bootstrap.sh
images/
images.json
```

---

## Cloud Provider Support

| Provider | Metadata detection            | Metrics collection         | Auto-deploy             |
| -------- | ----------------------------- | -------------------------- | ----------------------- |
| GCP      | via metadata server           | `/proc/stat`, `free`, `df` | cron job                |
| AWS      | 169.254.169.254               | same Linux commands        | cron job                |
| Azure    | 169.254.169.254               | same Linux commands        | cron job                |
| Local VM | hostname, `ip route` fallback | works on any Linux         | if git + cron available |

> [!NOTE]
> No cloud-specific code is required.

---

## Local Development (without a VM)

### Clone repository

```bash
git clone https://github.com/KirkAlton-Class7/devsecops-vm-dashboard.git
cd devsecops-vm-dashboard/dashboard
```

### Run development server

```bash
npm install
npm run dev
```

Access:

```
http://localhost:5173
```

> [!TIP]
> For full functionality (metrics, quotes, images), serve the `data/` folder separately.

Example:

```bash
npx serve data -p 3000
```

---

## Repository Structure

```
devsecops-vm-dashboard/
├── dashboard/               # React frontend (Vite + Tailwind)
│   ├── src/
│   ├── public/
│   └── package.json
├── images/                  # Gallery images
├── images.json              # Metadata for gallery
├── quotes.json              # Fallback quotes
├── scripts/
│   └── bootstrap/
│       └── app_bootstrap.sh # Main deployment script
└── README.md
```

---

## Auto-deploy

> [!IMPORTANT]
> Runs every 15 minutes via cron.

### Process

* git pull
* Copy images and `images.json`
* Rebuild React app
* Reload nginx

### Disable auto-deploy

Edit:

```bash
app_bootstrap.sh
```

Search for:

```bash
dashboard-deploy.sh
```

---

## License

MIT – use it freely, modify, and share.