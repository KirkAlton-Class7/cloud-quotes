import Card from "./Card";
import StatusDot from "./StatusDot";

export default function ResourceTable({ rows }) {
  return (
    <Card title="Resources" subtitle="Core services and generated assets">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr className="border-b border-slate-800">
              <th className="px-3 py-3 font-medium">Name</th>
              <th className="px-3 py-3 font-medium">Type</th>
              <th className="px-3 py-3 font-medium">Scope</th>
              <th className="px-3 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const status =
                row.status === "Running" || row.status === "Installed" || row.status === "Reachable" || row.status === "Ready"
                  ? "healthy"
                  : "warning";

              return (
                <tr
                  key={`${row.name}-${row.type}`}
                  className="border-b border-slate-900 transition hover:bg-slate-800/40"
                >
                  <td className="px-3 py-3 text-slate-200">{row.name}</td>
                  <td className="px-3 py-3 text-slate-400">{row.type}</td>
                  <td className="px-3 py-3 text-slate-400">{row.scope}</td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <StatusDot status={status} />
                      <span className="text-slate-300">{row.status}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}