"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Code2, GitBranch, Cpu, Layers, Target, Zap } from "lucide-react";

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
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden font-sans">
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* 1. Hero Section - 经典的 GEEK COMMUNITY 布局 */}
        <header className="pt-48 pb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-[1px] w-12 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase">System Online // Node: HK</span>
            </div>
            <h1 className="text-[12vw] sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 md:mb-10 leading-[0.9] text-white uppercase">
              GEEK <br /> COMMUNITY.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl leading-relaxed font-light">
              Full-stack Development & AI Exploration. <br />
              <span className="text-gray-600 block mt-4 italic font-serif border-l-2 border-gray-800 pl-4">
                在数字荒原中，构建属于自己的理想国。
              </span>
            </p>
            <div className="flex flex-wrap gap-8">
              <a href="#repos" className="px-12 py-5 bg-white text-black font-bold rounded-full no-underline hover:bg-gray-200 transition-all flex items-center gap-2">
                <Terminal size={20} /> 查看仓库
              </a>
              <a href="#timeline" className="px-12 py-5 bg-transparent text-white font-bold rounded-full border border-gray-800 backdrop-blur-md no-underline hover:border-blue-500 transition-all flex items-center gap-2">
                <Sparkles size={20} className="text-blue-400" /> 发展轴
              </a>
            </div>
          </motion.div>
        </header>

        {/* 2. Timeline Section - 去除圆点，极致简洁 */}
        <section id="timeline" className="py-32 border-t border-gray-900">
          <h2 className="text-5xl font-black italic mb-24 tracking-tighter">GROWTH AXIS</h2>
          
          <div className="relative md:overflow-x-auto md:pb-24 scrollbar-hide">
            <div className="relative md:flex md:w-max md:gap-16 pt-10">
              {/* 轴线 */}
              <div className="hidden md:block absolute top-[10px] left-0 right-0 h-[1px] bg-blue-500/20 z-0" />

              {timelineData.map((item, index) => (
                <motion.div key={index} className="relative flex flex-col md:w-[300px] md:flex-none mb-32 md:mb-0 group">
                  {/* 注意：此处圆点已彻底移除 */}
                  <div className="pl-0 md:pl-0">
                    {item.img && (
                      <div className="relative mb-6 rounded-xl border border-white/5 bg-zinc-900/50 overflow-hidden">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-auto max-h-[200px] object-contain transition-all duration-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" 
                        />
                      </div>
                    )}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-blue-500 font-bold">{item.date}</span>
                        <span className="text-[10px] px-2 py-0.5 bg-blue-500 text-black rounded font-black uppercase">{item.tag}</span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-blue-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Repository Section - 重新加回仓库部分 */}
        <section id="repos" className="py-32 border-t border-gray-900">
          <div className="flex items-end justify-between mb-20">
            <div>
              <h2 className="text-5xl font-black italic tracking-tighter mb-2 uppercase">Repository</h2>
              <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.3em]">Codebase & Architecture</p>
            </div>
            <GitBranch className="text-gray-800" size={60} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { name: "AIGC Project Hub", tags: ["React", "AI", "Python"] },
              { name: "Simulation Engine", tags: ["Flutter", "Game", "Logic"] }
            ].map((repo, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-12 bg-gray-900/20 border border-gray-800/50 rounded-[2rem] backdrop-blur-xl group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 opacity-5 transition-opacity">
                  <Code2 size={200} />
                </div>
                <h3 className="text-3xl font-bold mb-4">{repo.name}</h3>
                <p className="text-gray-500 mb-10 leading-relaxed text-lg">探索全栈开发的更多可能性...</p>
                <div className="flex flex-wrap gap-3">
                   {repo.tags.map(t => <span key={t} className="text-[10px] px-4 py-1.5 bg-black/50 rounded-full border uppercase border-white/10">{t}</span>)}
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