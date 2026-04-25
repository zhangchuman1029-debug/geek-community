"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Code2, GitBranch, Cpu, Zap } from "lucide-react";

const timelineData = [
  { 
    date: "2026.04.20", 
    title: "Claude Code & API Hub", 
    desc: "初始化 Claude Code，搭建社群 API 中转站，成功跑通 Skill。", 
    tag: "Core",
    img: "/screenshot-420.png" 
  },
  { 
    date: "2026.04.22", 
    title: "Obsidian CLI Integration", 
    desc: "CC 接入 Obsidian CLI，打通 WebDAV 协议，实现双向同步。", 
    tag: "PKM",
    img: "/screenshot-422.png" 
  },
  { 
    date: "2026.04.24", 
    title: "Cloud RSS Automation", 
    desc: "CC 接入 RSS，实现云端 WebDAV 仓库自动 RSS 服务初始化。", 
    tag: "Auto",
    img: "/screenshot-424.png"
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden font-sans selection:bg-blue-500/30">
      {/* 动态网格背景 */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <header className="pt-48 pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <motion.div 
                animate={{ width: [0, 48] }}
                className="h-[1px] bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" 
              />
              <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase">Node: Hong Kong // Secure</span>
            </div>
            <h1 className="text-[12vw] sm:text-7xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] uppercase italic">
              GEEK <br /> <span className="text-blue-600">COMMUNITY.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl leading-relaxed font-light">
              Full-stack Development & AI Exploration. <br />
              <span className="text-gray-600 block mt-4 italic font-serif border-l-2 border-blue-900/50 pl-6">
                在数字荒原中，构建属于自己的理想国。
              </span>
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#repos" className="px-10 py-4 bg-white text-black font-bold rounded-xl no-underline hover:scale-105 transition-transform flex items-center gap-2">
                <Terminal size={18} /> 查看仓库
              </a>
              <a href="#timeline" className="px-10 py-4 bg-blue-900/10 text-white font-bold rounded-xl border border-blue-900/30 backdrop-blur-md no-underline hover:bg-blue-900/20 transition-all flex items-center gap-2">
                <Sparkles size={18} className="text-blue-400" /> 发展轴
              </a>
            </div>
          </motion.div>
        </header>

        <section id="timeline" className="py-32 border-t border-white/5">
          <div className="flex justify-between items-end mb-24">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase">Growth Axis</h2>
            <div className="hidden md:block h-[1px] flex-1 mx-12 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>
          
          <div className="relative md:overflow-x-auto md:pb-24 scrollbar-hide">
            <div className="relative md:flex md:w-max md:gap-12">
              {timelineData.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex flex-col md:w-[320px] md:flex-none mb-24 md:mb-0 group"
                >
                  <div className="relative rounded-2xl p-px bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/40 transition-all duration-500">
                    <div className="bg-[#030712] rounded-2xl overflow-hidden p-4">
                      {item.img && (
                        <div className="relative mb-6 rounded-lg overflow-hidden bg-zinc-900">
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-auto max-h-[220px] object-contain transition-all duration-700 
                                     md:grayscale md:opacity-50 group-hover:grayscale-0 group-hover:opacity-100 
                                     grayscale-0 opacity-100" /* 手机端默认彩色 */
                          />
                        </div>
                      )}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-blue-500 font-bold tracking-widest">{item.date}</span>
                          <span className="text-[9px] px-2 py-0.5 bg-blue-900/30 text-blue-400 rounded-md border border-blue-500/20 font-bold uppercase">{item.tag}</span>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-blue-400 transition-colors">{item.title}</h3>
                        <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="repos" className="py-32 border-t border-white/5 relative">
          {/* 背景流光装饰 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10 pointer-events-none" />
          
          <div className="flex items-end justify-between mb-20">
            <h2 className="text-5xl font-black italic tracking-tighter mb-2 uppercase">Repository</h2>
            <GitBranch className="text-blue-900/30" size={80} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "AIGC Project Hub", tags: ["React", "AI", "Python"], icon: <Zap size={24} /> },
              { name: "Simulation Engine", tags: ["Flutter", "Game", "Logic"], icon: <Cpu size={24} /> }
            ].map((repo, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8, borderColor: "rgba(59,130,246,0.3)" }} 
                className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] group relative overflow-hidden backdrop-blur-3xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">{repo.icon}</div>
                  <div className="text-[10px] text-gray-600 font-mono tracking-widest">0{i+1}</div>
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{repo.name}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed font-light">探索全栈开发的更多可能性，构建高效稳定的数字基石。</p>
                <div className="flex flex-wrap gap-2">
                   {repo.tags.map(t => <span key={t} className="text-[9px] px-3 py-1 bg-white/5 rounded-lg border border-white/5 uppercase font-medium">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="py-24 text-center border-t border-white/5">
          <p className="text-gray-700 font-mono text-[10px] tracking-[0.6em] uppercase">Crafted by Geek Community // 2026</p>
        </footer>
      </div>
    </main>
  );
}