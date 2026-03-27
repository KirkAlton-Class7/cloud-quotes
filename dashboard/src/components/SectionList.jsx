import Card from "./Card";
import StatusDot from "./StatusDot";

export default function SectionList({ title, subtitle, items }) {
  return (
    <Card title={title} subtitle={subtitle}>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-200">{item.label}</p>
              <p className="truncate text-sm text-slate-400">{item.value}</p>
            </div>
            <div className="ml-4 flex items-center gap-2">
              <StatusDot status={item.status} />
              <span className="text-xs uppercase tracking-wide text-slate-500">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}