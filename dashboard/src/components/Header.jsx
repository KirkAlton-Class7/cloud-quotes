import { motion } from "framer-motion";
import { Clock, Activity, Bell, User, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header({ appName, tagline, uptime }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-lg"
    >
      <div className="relative">
        {/* Animated gradient bar */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "linear"
          }}
        />
        
        <div className="flex items-center justify-between px-6 py-4">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <motion.p 
              className="text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              {appName}
            </motion.p>
            <motion.p 
              className="text-sm text-slate-400 mt-0.5"
              whileHover={{ x: 5 }}
            >
              {tagline}
            </motion.p>
          </motion.div>
          
          <div className="flex items-center gap-4">
            {/* Date Display */}
            <motion.div 
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xs text-slate-400">{formattedDate}</span>
            </motion.div>
            
            {/* Time Display */}
            <motion.div 
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-300 font-mono">{formattedTime}</span>
            </motion.div>
            
            {/* Uptime */}
            <motion.div 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-sm text-slate-300">
                Uptime: <span className="font-medium text-emerald-400">{uptime}</span>
              </span>
            </motion.div>
            
            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Bell className="w-5 h-5 text-slate-400" />
              <motion.span 
                className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.button>
            
            {/* User Avatar with Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg hover:shadow-cyan-500/25 transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className={`w-3 h-3 text-white transition-transform duration-200 mr-2 ${showUserMenu ? 'rotate-180' : ''}`} />
              </motion.button>
              
              {/* User Dropdown Menu */}
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-800/95 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
                >
                  <div className="py-2">
                    <button className="w-full px-4 py-2 text-sm text-slate-300 hover:bg-white/10 transition-colors text-left">
                      Profile Settings
                    </button>
                    <button className="w-full px-4 py-2 text-sm text-slate-300 hover:bg-white/10 transition-colors text-left">
                      Dashboard Preferences
                    </button>
                    <div className="border-t border-white/10 my-1"></div>
                    <button className="w-full px-4 py-2 text-sm text-red-400 hover:bg-white/10 transition-colors text-left">
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}