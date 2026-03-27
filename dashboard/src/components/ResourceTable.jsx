import { motion } from "framer-motion";
import { ChevronRight, Server, Database, Shield, Code } from "lucide-react";
import Card from "./Card";
import StatusDot from "./StatusDot";

const getScopeIcon = (scope) => {
  switch(scope?.toLowerCase()) {
    case "system": return <Server className="w-3 h-3" />;
    case "database": return <Database className="w-3 h-3" />;
    case "security": return <Shield className="w-3 h-3" />;
    default: return <Code className="w-3 h-3" />;
  }
};

// Convert row status to StatusDot compatible status
const getStatusDotStatus = (rowStatus) => {
  const status = rowStatus?.toLowerCase() || "";
  if (status === "running" || status === "installed" || status === "reachable" || 
      status === "ready" || status === "successful" || status === "active" ||
      status === "serving" || status === "completed") {
    return "success";
  }
  if (status === "warning" || status === "pending" || status === "degraded") {
    return "warning";
  }
  if (status === "critical" || status === "error" || status === "failed" || 
      status === "unreachable" || status === "unavailable" || status === "stopped") {
    return "critical";
  }
  return "healthy";
};

export default function ResourceTable({ rows, title = "Resources", subtitle = "Core services and generated assets" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card title={title} subtitle={subtitle}>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-slate-400">
              <tr className="border-b border-slate-800">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Scope</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium w-8"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => {
                const statusDotStatus = getStatusDotStatus(row.status);
                
                return (
                  <motion.tr
                    key={`${row.name}-${row.type}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ 
                      scale: 1.01,
                      backgroundColor: "rgba(15, 23, 42, 0.4)",
                      transition: { duration: 0.2 }
                    }}
                    className="border-b border-slate-800/50 transition-all duration-200 cursor-pointer group"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                          {getScopeIcon(row.scope)}
                        </div>
                        <span className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">
                          {row.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300 font-mono">
                        {row.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-400">{row.scope}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {/* Use enhanced StatusDot component */}
                        <StatusDot 
                          status={statusDotStatus} 
                          size="sm"
                          showTooltip={true}
                          animated={true}
                        />
                        <span className="text-sm text-slate-300">{row.status}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Optional: Show row count */}
        <div className="mt-4 pt-3 border-t border-slate-800">
          <p className="text-xs text-slate-500">
            Showing {rows.length} resource{rows.length !== 1 ? 's' : ''}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}