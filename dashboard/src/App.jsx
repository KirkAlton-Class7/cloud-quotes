import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import ResourceTable from "./components/ResourceTable";
import SectionList from "./components/SectionList";
import Sidebar from "./components/Sidebar";
import SimpleBarChart from "./components/SimpleBarChart";
import StatCard from "./components/StatCard";
import { mockDashboard, mockQuotes } from "./data/mockDashboard";

function getRandomQuote(quotes) {
  if (!quotes?.length) return mockQuotes[0];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [dashboard, setDashboard] = useState(mockDashboard);
  const [quotes, setQuotes] = useState(mockQuotes);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const res = await fetch("/data/dashboard-data.json", { cache: "no-store" });
        if (!res.ok) throw new Error("dashboard fetch failed");
        const data = await res.json();
        setDashboard(data);
      } catch {
        setDashboard(mockDashboard);
      }
    }

    async function loadQuotes() {
      try {
        const res = await fetch("/data/quotes.json", { cache: "no-store" });
        if (!res.ok) throw new Error("quotes fetch failed");
        const data = await res.json();
        setQuotes(Array.isArray(data) ? data : mockQuotes);
      } catch {
        setQuotes(mockQuotes);
      }
    }

    loadDashboard();
    loadQuotes();
  }, []);

  const featuredQuote = useMemo(() => getRandomQuote(quotes), [quotes]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />

      <div className="xl:ml-64">
        <Header
          appName={dashboard.meta.appName}
          tagline={dashboard.meta.tagline}
          uptime={dashboard.meta.uptime}
        />

        <main className="space-y-8 px-6 py-6">
          <section id="overview" className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dashboard.summaryCards.map((card) => (
              <StatCard
                key={card.label}
                label={card.label}
                value={card.value}
                status={card.status}
              />
            ))}
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <SimpleBarChart data={dashboard.chartSeries} />
            </div>
            <QuoteCard quote={featuredQuote} />
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div id="vm-information">
              <SectionList
                title="VM Information"
                subtitle="Core instance identity and placement"
                items={dashboard.vmInformation}
              />
            </div>
            <div id="services">
              <SectionList
                title="Services"
                subtitle="Application and bootstrap health"
                items={dashboard.services}
              />
            </div>
            <div id="security">
              <SectionList
                title="Security"
                subtitle="Host posture and network exposure"
                items={dashboard.security}
              />
            </div>
          </section>

          <section id="resources" className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <ResourceTable rows={dashboard.resourceTable} />
            <ResourceTable
              rows={dashboard.logs.map((log) => ({
                name: log.time,
                type: log.level,
                scope: "app",
                status: log.message,
              }))}
            />
          </section>
        </main>
      </div>
    </div>
  );
}