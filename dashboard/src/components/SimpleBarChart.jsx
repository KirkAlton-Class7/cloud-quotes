import Card from "./Card";

export default function SimpleBarChart({ data }) {
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <Card title="Usage Trend" subtitle="Mock weekly service activity">
      <div className="flex h-64 items-end gap-4">
        {data.map((item) => {
          const height = `${(item.value / maxValue) * 100}%`;

          return (
            <div key={item.name} className="flex flex-1 flex-col items-center gap-3">
              <div className="flex h-full w-full items-end">
                <div
                  className="w-full rounded-t-xl bg-blue-500/80 transition hover:bg-blue-400"
                  style={{ height }}
                  title={`${item.name}: ${item.value}`}
                />
              </div>
              <div className="text-xs text-slate-400">{item.name}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}