export default function Card({ title, subtitle, children, className = "" }) {
  return (
    <section
      className={`rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-black/20 ${className}`}
    >
      {(title || subtitle) && (
        <div className="border-b border-slate-800 px-5 py-4">
          {title && <h2 className="text-sm font-semibold text-slate-100">{title}</h2>}
          {subtitle && <p className="mt-1 text-xs text-slate-400">{subtitle}</p>}
        </div>
      )}
      <div className="p-5">{children}</div>
    </section>
  );
}