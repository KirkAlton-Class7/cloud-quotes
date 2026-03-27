import Card from "./Card";
import StatusDot from "./StatusDot";

export default function StatCard({ label, value, status }) {
  return (
    <Card className="transition hover:border-blue-500/40">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-100">{value}</p>
        </div>
        <StatusDot status={status} />
      </div>
    </Card>
  );
}