const navItems = [
  "Overview",
  "VM Information",
  "Services",
  "Security",
  "Resources",
  "Logs",
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-800 bg-slate-950 xl:block">
      <div className="border-b border-slate-800 px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          DevSecOps Sandbox
        </p>
        <h1 className="mt-2 text-xl font-semibold text-slate-100">
          Cloud VM Dashboard
        </h1>
      </div>

      <nav className="px-4 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-slate-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}