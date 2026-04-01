export const mockDashboard = {
  summaryCards: [
    { label: "CPU", value: "72%", status: "warning" },
    { label: "Memory", value: "68%", status: "warning" },
    { label: "Disk", value: "45%", status: "healthy" },
    { label: "Cost", value: "$12.48/month", status: "info" },
  ],
  
  // New: Identity Section
  identity: {
    project: "devsecops-production",
    instanceId: "1234567890123456789",
    hostname: "prod-worker-03.internal",
    machineType: "e2-standard-2"
  },
  
  // New: Network Section
  network: {
    vpc: "default",
    subnet: "us-central1-prod-subnet",
    internalIp: "10.128.0.5",
    externalIp: "34.122.10.22"
  },
  
  // New: Location Section
  location: {
    region: "us-central1",
    zone: "us-central1-a",
    uptime: "up 6 days, 14 hours",
    loadAvg: "2.45"
  },
  
  systemResources: {
    memory: {
      total: 8192,   // MB
      used: 5570,
      free: 2622
    },
    disk: {
      total: 102400,  // MB
      used: 46080,
      available: 56320
    },
    cpu: {
      cores: 2,
      frequency: "2.2 GHz",
      usage: 72,  // matches summary card CPU%
      loadAvg: 2.45  // matches systemLoad
    },
    endpoints: {
      healthz: "/healthz",
      metadata: "/metadata"
    }
  },
  
  services: [
    { label: "Nginx", value: "Running (12 req/s)", status: "healthy" },
    { label: "Python", value: "Installed", status: "healthy" },
    { label: "Metadata Service", value: "Reachable", status: "healthy" },
    { label: "HTTP Service", value: "Serving (1.2k req/min)", status: "warning" },
    { label: "Startup Script", value: "Completed", status: "healthy" },
    { label: "GitHub Quotes Sync", value: "Successful", status: "healthy" },
    { label: "Bootstrap Packages", value: "nginx, python3, curl, jq", status: "healthy" },
  ],
  
  security: [
    { label: "Host Firewall (UFW)", value: "active", status: "healthy" },
    { label: "SSH Service", value: "Running (22/tcp)", status: "healthy" },
    { label: "System Updates", value: "Pending (2)", status: "warning" },
    { label: "Internal IP", value: "10.128.0.5", status: "healthy" },
    { label: "Public IP", value: "34.122.10.22", status: "warning" },
    { label: "Failed Login Attempts", value: "12 (last hour)", status: "warning" },
  ],
  
  resourceTable: [
    { name: "nginx.service", type: "systemd", status: "Running", scope: "vm" },
    { name: "python3", type: "runtime", status: "Installed", scope: "vm" },
    { name: "postgresql", type: "database", status: "Running", scope: "vm" },
    { name: "redis", type: "cache", status: "Running", scope: "vm" },
    { name: "metadata", type: "cloud", status: "Reachable", scope: "gcp" },
    { name: "quotes.json", type: "content", status: "Ready", scope: "app" },
  ],
  
  logs: [
    { 
      time: "14:32:15", 
      level: "warn", 
      message: "High CPU usage detected (72%)",
      scope: "system"
    },
    { 
      time: "14:30:22", 
      level: "info", 
      message: "Nginx request rate increased to 12 req/s",
      scope: "nginx"
    },
    { 
      time: "14:28:05", 
      level: "info", 
      message: "Database connection pool at 85%",
      scope: "postgres"
    },
    { 
      time: "14:25:30", 
      level: "info", 
      message: "GitHub quotes sync: Successful",
      scope: "app"
    },
    { 
      time: "14:20:00", 
      level: "warn", 
      message: "12 failed login attempts detected",
      scope: "security"
    },
  ],
  
  meta: {
    appName: "DevSecOps",
    tagline: "Production monitoring • High activity detected",
    dashboardUser: "Kirk Alton",
    dashboardName: "DevSecOps Dashboard",
    uptime: "up 6 days, 14 hours",
  },
};

export const mockQuotes = [
  {
    id: 1,
    text: "High load means you're doing something right. Just make sure it scales.",
    author: "DevSecOps Sandbox",
    tag: "performance",
  },
  {
    id: 2,
    text: "Security never sleeps, and neither does your production workload.",
    author: "DevSecOps Sandbox",
    tag: "security",
  },
  {
    id: 3,
    text: "Logs are evidence, not decoration. Your 12 failed logins prove it.",
    author: "DevSecOps Sandbox",
    tag: "observability",
  },
];