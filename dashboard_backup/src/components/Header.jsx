export default function Header({ appName, tagline, uptime }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm font-medium text-slate-100">{appName}</p>
          <p className="text-sm text-slate-400">{tagline}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
          Uptime: <span className="font-medium text-slate-100">{uptime}</span>
        </div>
      </div>
    </header>
  );
}