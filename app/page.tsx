"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Code2, GitBranch, Cpu, Layers, Activity } from "lucide-react";

const timelineData = [
  { date: "2026.04", title: "Next.js Web Architecture", desc: "全面转向 Next.js + PostgreSQL 纯 Web 架构，追求极致的数字响应。", tag: "Core" },
  { date: "2026.03", title: "AI Knowledge Extraction", desc: "基于 AIGC 的结构化数据提取工具，实现从海量信息到结构化知识的跨越。", tag: "AIGC" },
  { date: "2026.01", title: "Digital Bonfire Project", desc: "使用 CSS/SVG Filter 打造的视觉数字篝火，向开源社区的连接感致敬。", tag: "Design" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden font-sans selection:bg-blue-500/30">
      {/* 极客网格背景 */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* 1. Hero Section */}
        <header className="pt-48 pb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-[1px] w-12 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase animate-pulse">System Online // Node: HK</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-[12vw] sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 md:mb-10 leading-[0.9] mix-blend-difference break-words"
            >
              GEEK <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">
                COMMUNITY.
              </span>
            </motion.h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl leading-relaxed font-light">
              Full-stack Development & AI Exploration. <br />
              <span className="text-gray-600 block mt-4 italic font-serif border-l-2 border-gray-800 pl-4">在数字荒原中，构建属于自己的理想国。</span>
            </p>
            
            <div className="flex flex-wrap gap-8">
              <motion.a 
                href="#repos" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-5 bg-white text-black font-bold rounded-full flex items-center gap-3 no-underline shadow-2xl shadow-blue-500/20"
              >
                <Terminal size={20} className="group-hover:rotate-12 transition-transform" /> 查看仓库
              </motion.a>

              <motion.a 
                href="#timeline" 
                whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-5 bg-transparent text-white font-bold rounded-full border border-gray-800 flex items-center gap-3 no-underline backdrop-blur-md"
              >
                <Sparkles size={20} className="text-blue-400 group-hover:animate-spin" /> 发展轴
              </motion.a>
            </div>
          </motion.div>
        </header>

        {/* 2. Timeline Section (已升级：滚动弹出效果) */}
        <section id="timeline" className="py-32">
          <div className="flex items-center gap-6 mb-24">
            <h2 className="text-4xl font-black italic tracking-tighter">GROWTH AXIS</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            <Activity className="text-blue-500/30" size={20} />
          </div>
          
          <div className="relative ml-4 border-l border-gray-900 pl-16 space-y-32">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                // 初始状态：透明且向右偏
                initial={{ opacity: 0, x: 50 }}
                // 滚动进入视野时：滑回原位
                whileInView={{ opacity: 1, x: 0 }}
                // 滚动配置
                viewport={{ once: false, amount: 0.3 }}
                // 弹簧物理动画
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: index * 0.15 
                }}
                className="relative group"
              >
                <div className="absolute -left-[69px] top-2 w-4 h-4 bg-[#030712] border border-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 transition-all group-hover:scale-150 group-hover:bg-blue-500" />
                <div className="absolute -left-[69px] top-2 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-20" />
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-mono text-blue-500 font-bold tracking-widest">{item.date}</span>
                  <span className="text-[10px] px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 uppercase font-black tracking-tighter">
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-blue-400 transition-all leading-none tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 max-w-xl text-lg font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Repository Section */}
        <section id="repos" className="py-32 border-t border-gray-900">
          <div className="flex items-end justify-between mb-20">
            <div>
              <h2 className="text-5xl font-black italic tracking-tighter mb-2">REPOSITORY</h2>
              <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.3em]">Codebase & Architecture</p>
            </div>
            <GitBranch className="text-gray-800" size={60} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { name: "AIGC Project Hub", tags: ["React", "AI", "Python"], status: "Active" },
              { name: "Simulation Engine", tags: ["Flutter", "Game", "Logic"], status: "Beta" }
            ].map((repo, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10, borderColor: "rgba(59, 130, 246, 0.5)" }}
                className="p-12 bg-gray-900/20 border border-gray-800/50 rounded-[2rem] backdrop-blur-xl hover:bg-gray-900/40 transition-all group relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Code2 size={200} />
                </div>
                <div className="mb-8 p-4 bg-gray-800/50 w-fit rounded-2xl">
                  <Layers className="text-blue-500" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{repo.name}</h3>
                <p className="text-gray-500 mb-10 font-light leading-relaxed text-lg">
                  正在同步最新的项目架构信息，探索全栈开发的更多可能性...
                </p>
                <div className="flex flex-wrap gap-3">
                   {repo.tags.map(t => (
                     <span key={t} className="text-[10px] px-4 py-1.5 bg-black/50 rounded-full text-gray-500 border border-gray-800 uppercase font-mono tracking-tighter">
                       {t}
                     </span>
                   ))}
                   <span className="ml-auto text-xs font-black text-blue-600/50 uppercase tracking-[0.2em] self-center">{repo.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="py-24 text-center border-t border-gray-900">
          <p className="text-gray-800 font-mono text-xs tracking-[0.8em] uppercase mb-4">Geek Community // 2026</p>
          <div className="flex justify-center gap-4 text-gray-900">
             <Cpu size={16} />
             <Code2 size={16} />
          </div>
        </footer>
      </div>
    </main>
  );
}