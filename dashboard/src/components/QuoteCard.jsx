import Card from "./Card";

export default function QuoteCard({ quote }) {
  return (
    <Card title="Featured Quote" subtitle="Loaded from GitHub with local fallback">
      <blockquote className="space-y-4">
        <p className="text-lg leading-8 text-slate-200">“{quote.text}”</p>
        <footer className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-300">{quote.author}</p>
            <p className="text-xs uppercase tracking-wide text-blue-400">{quote.tag}</p>
          </div>
        </footer>
      </blockquote>
    </Card>
  );
}