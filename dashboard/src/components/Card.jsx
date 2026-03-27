import { motion } from "framer-motion";

export default function Card({ title, subtitle, children, className = "" }) {
  return (
    <motion.section
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated border gradient on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Card header */}
      {(title || subtitle) && (
        <div className="relative border-b border-white/10 px-6 py-4 group-hover:border-white/20 transition-colors duration-300">
          {title && (
            <motion.h2 
              className="text-sm font-semibold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent"
              whileHover={{ x: 5 }}
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <p className="mt-1 text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      {/* Card content */}
      <div className="relative p-6">{children}</div>
      
      {/* Decorative corner with animation */}
      <motion.div 
        className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute bottom-0 right-0 w-12 h-12 rounded-tl-full bg-gradient-to-tl from-white/5 to-transparent"></div>
      </motion.div>
      
      {/* Bottom accent line on hover */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-purple-600/0"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.section>
  );
}