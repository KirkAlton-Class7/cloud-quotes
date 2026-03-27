const statusMap = {
  healthy: "bg-emerald-400",
  warning: "bg-amber-400",
  critical: "bg-rose-400",
};

export default function StatusDot({ status = "healthy" }) {
  return (
    <span
      className={`inline-block h-2.5 w-2.5 rounded-full ${statusMap[status] ?? statusMap.healthy}`}
      aria-label={status}
      title={status}
    />
  );
}