import { motion } from "framer-motion";
import Card from "./Card";

export default function SimpleBarChart({ data }) {
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card title="Usage Trend" subtitle="Mock weekly service activity">
        <div className="flex h-80 items-end gap-4">
          {data.map((item, idx) => {
            const height = `${(item.value / maxValue) * 100}%`;
            
            return (
              <div key={item.name} className="flex flex-1 flex-col items-center gap-3">
                <div className="flex h-full w-full items-end relative group">
                  <motion.div
                    className="w-full rounded-t-xl bg-gradient-to-t from-blue-500 to-cyan-400 cursor-pointer relative overflow-hidden"
                    style={{ height }}
                    initial={{ height: 0 }}
                    animate={{ height }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    {/* Animated shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Tooltip-like value on hover */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-800 px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                      {item.value}
                    </div>
                  </motion.div>
                </div>
                <div className="text-xs text-slate-400 font-medium">{item.name}</div>
              </div>
            );
          })}
        </div>
        
        {/* Legend */}
        <div className="mt-4 pt-4 border-t border-slate-800 flex justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <span className="text-xs text-slate-400">Current Period</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}