"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Code2, GitBranch, Cpu, Layers, Activity, Globe, Database, Rss } from "lucide-react";

// 1. 更新后的数据源
const timelineData = [
  { 
    date: "2026.04.24", 
    title: "Cloud RSS Automation", 
    desc: "CC 接入 RSS，实现云端 WebDAV 仓库自动 RSS 服务初始化，构建个人情报中心。", 
    tag: "Auto",
    icon: <Rss size={24} className="text-orange-500" />
  },
  { 
    date: "2026.04.22", 
    title: "Obsidian CLI Integration", 
    desc: "CC 接入 Obsidian CLI，打通 WebDAV 协议，实现知识库的云端双向同步。", 
    tag: "PKM",
    icon: <Layers size={24} className="text-purple-500" />
  },
  { 
    date: "2026.04.20", 
    title: "Claude Code & API Hub", 
    desc: "初始化 Claude Code，搭建社群 API 中转站，成功跑通 Skill 自定义能力。", 
    tag: "Core",
    icon: <Cpu size={24} className="text-blue-500" />
  },
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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* 1. Hero Section (保持之前的精简版) */}
        <header className="pt-48 pb-32 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <motion.h1 
              className="text-[12vw] sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9] mix-blend-difference"
            >
              GEEK <br /> COMMUNITY.
            </motion.h1>
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              <motion.a href="#timeline" whileHover={{ scale: 1.05 }} className="px-12 py-5 bg-white text-black font-bold rounded-full no-underline">
                Explore Growth
              </motion.a>
            </div>
          </motion.div>
        </header>

        {/* 2. Timeline Section (升级：左右交替布局) */}
        <section id="timeline" className="py-32 relative">
          <div className="text-center mb-32">
            <h2 className="text-5xl font-black italic tracking-tighter inline-block relative">
              GROWTH AXIS
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            </h2>
          </div>

          {/* 中轴线 */}
          <div className="absolute left-1/2 top-[20%] bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-gray-800 to-transparent hidden md:block"></div>

          <div className="space-y-40 relative">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex flex-col md:flex-row items-center justify-between w-full">
                  
                  {/* 左侧容器 */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className={`w-full md:w-[42%] ${isEven ? 'text-right' : 'md:order-last text-left'}`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                      {isEven && <span className="text-[10px] px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 uppercase font-black">{item.tag}</span>}
                      <span className="text-sm font-mono text-blue-500 font-bold">{item.date}</span>
                      {!isEven && <span className="text-[10px] px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 uppercase font-black">{item.tag}</span>}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-lg font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>

                  {/* 中轴圆点 */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#030712] border-2 border-blue-500 rounded-full z-20 hidden md:block">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* 右侧插图占位 */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    className={`w-full md:w-[42%] mt-8 md:mt-0 aspect-video rounded-[2rem] bg-gray-900/40 border border-gray-800 flex items-center justify-center relative overflow-hidden group ${!isEven ? 'md:order-first' : ''}`}
                  >
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
                    </div>
                    {item.icon}
                    <span className="absolute bottom-6 text-[10px] font-mono text-gray-700 uppercase tracking-widest">Visual Asset // 0x{index}F</span>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </section>

        {/* ... 后面的 Repository 和 Footer 保持不变 ... */}
      </div>
    </main>
  );
}