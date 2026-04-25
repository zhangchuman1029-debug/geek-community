"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Code2, GitBranch, Cpu, Layers, Activity, Rss, Target, Zap } from "lucide-react";

// 1. 数据源（已按时间倒序排列：最新在最前）
const timelineData = [
  { 
    date: "2026.04.24", 
    title: "Cloud RSS Automation", 
    desc: "CC 接入 RSS，实现云端 WebDAV 仓库自动 RSS 服务初始化，构建个人情报中心。", 
    tag: "Auto",
    type: "Skill",
    img: "/screenshot-424.png" 
  },
  { 
    date: "2026.04.22", 
    title: "Obsidian CLI Integration", 
    desc: "CC 接入 Obsidian CLI，实现知识库的云端双向同步。", 
    tag: "PKM",
    type: "Architecture",
    img: "/screenshot-422.png"
  },
  { 
    date: "2026.04.20", 
    title: "Claude Code & API Hub", 
    desc: "初始化 Claude Code，搭建社群 API 中转站，成功跑通 Skill 自定义能力。", 
    tag: "Core",
    type: "Codebase",
    img: "/screenshot-420.png" 
  },
];

const milestoneTypes: Record<string, { color: string; icon: React.ReactNode }> = {
  "Codebase": { color: "bg-blue-500", icon: <Code2 size={14} /> },
  "Architecture": { color: "bg-purple-500", icon: <Layers size={14} /> },
  "Skill": { color: "bg-orange-500", icon: <Zap size={14} /> },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden font-sans">
      {/* 极客网格背景 */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <header className="pt-40 pb-20">
          <motion.h1 className="text-[10vw] font-black tracking-tighter mb-4 mix-blend-difference">
            GROWTH <span className="text-gray-500">AXIS</span>
          </motion.h1>
        </header>

        {/* --- 发展轴核心区域 --- */}
        <section className="relative py-20">
          
          {/* 中轴线 (仅移动端显示纵向) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-blue-500/20 md:hidden" />

          {/* 桌面端横向容器，移动端纵向容器 */}
          <div className="flex flex-col md:flex-row md:overflow-x-auto md:items-center md:gap-0 md:pb-20 scrollbar-hide">
            
            {/* 桌面端横向轴线 */}
            <div className="hidden md:block absolute top-1/2 left-0 w-[200%] h-[1px] bg-blue-500/20 -translate-y-1/2 z-0" />

            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const meta = milestoneTypes[item.type];

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-none md:w-[500px] mb-32 md:mb-0 
                             ${isEven ? 'md:flex-col' : 'md:flex-col-reverse'}`}
                >
                  {/* 内容区：包含图片或文字 */}
                  <div className={`flex flex-col items-center md:items-start px-4 gap-8 
                                  ${isEven ? 'md:mb-12' : 'md:mt-12'}`}>
                    
                    {/* 文字部分 */}
                    <div className={`w-full ${!isEven && 'md:text-right md:items-end'} flex flex-col`}>
                      <div className={`flex items-center gap-3 mb-3 ${!isEven && 'md:justify-end'}`}>
                        <span className="font-mono text-blue-500 text-sm font-bold">{item.date}</span>
                        <div className={`w-2 h-2 rounded-full ${meta.color} shadow-[0_0_8px_rgba(59,130,246,0.5)]`} />
                      </div>
                      <h3 className="text-3xl font-bold mb-4 tracking-tight">{item.title}</h3>
                      <p className="text-gray-500 font-light leading-relaxed max-w-sm">{item.desc}</p>
                    </div>

                    {/* 图片部分：自适应原比例 */}
                    {item.img && (
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="w-full relative group"
                      >
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-auto max-h-[350px] object-contain rounded-xl border border-white/10 shadow-2xl transition-all"
                        />
                        <div className="absolute inset-0 rounded-xl ring-1 ring-white/20 group-hover:ring-blue-500/50 transition-all pointer-events-none" />
                      </motion.div>
                    )}
                  </div>

                  {/* 轴线节点 (中点) */}
                  <div className="absolute left-1/2 md:left-1/2 -translate-x-1/2 top-[-20px] md:top-1/2 md:-translate-y-1/2 z-20">
                    <div className={`w-10 h-10 rounded-full bg-[#030712] border-2 border-blue-500 flex items-center justify-center shadow-2xl`}>
                      <div className={`w-6 h-6 rounded-full ${meta.color} flex items-center justify-center text-black shadow-inner`}>
                        {meta.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Footer (简略版) */}
        <footer className="py-20 text-center text-gray-700 font-mono text-xs tracking-widest uppercase border-t border-white/5">
          System Core // 2026 // Distributed Node
        </footer>
      </div>
    </main>
  );
}