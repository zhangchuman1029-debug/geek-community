"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Code2, GitBranch, Cpu, Layers, Target, Zap } from "lucide-react";

// 1. 数据对齐：时间正序 + 原比例图片
const timelineData = [
  { 
    date: "2026.04.20", 
    title: "Claude Code & API Hub", 
    desc: "初始化 Claude Code，搭建社群 API 中转站，成功跑通 Skill。", 
    tag: "Core",
    type: "Codebase",
    img: "/screenshot-420.png" 
  },
  { 
    date: "2026.04.22", 
    title: "Obsidian CLI Integration", 
    desc: "CC 接入 Obsidian CLI，打通 WebDAV 协议，实现双向同步。", 
    tag: "PKM",
    type: "Architecture",
    img: "/screenshot-422.png" 
  },
  { 
    date: "2026.04.24", 
    title: "Cloud RSS Automation", 
    desc: "CC 接入 RSS，实现云端 WebDAV 仓库自动 RSS 服务初始化。", 
    tag: "Auto",
    type: "Skill",
    img: "/screenshot-424.png"
  },
];

const milestoneTypes: Record<string, { color: string; icon: React.ReactNode }> = {
  "Codebase": { color: "bg-blue-500", icon: <Code2 size={12} className="text-blue-200" /> },
  "Architecture": { color: "bg-purple-500", icon: <Layers size={12} className="text-purple-200" /> },
  "Skill": { color: "bg-orange-500", icon: <Zap size={12} className="text-orange-200" /> },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden font-sans">
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- 找回原版标题与布局 --- */}
        <header className="pt-48 pb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-[1px] w-12 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase">System Online // Node: HK</span>
            </div>
            {/* 恢复原标题 */}
            <h1 className="text-[12vw] sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 md:mb-10 leading-[0.9] text-white">
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

        {/* --- 发展轴：横向秩序 + 原比例图片 --- */}
        <section id="timeline" className="py-32 border-t border-gray-900">
          <h2 className="text-5xl font-black italic mb-24 tracking-tighter">GROWTH AXIS</h2>
          
          <div className="relative md:overflow-x-auto md:pb-24 scrollbar-hide">
            <div className="relative md:flex md:w-max md:gap-16 pt-20">
              
              {/* 中轴线 */}
              <div className="hidden md:block absolute top-[20px] left-0 right-0 h-[1px] bg-blue-500/20 z-0" />

              {timelineData.map((item, index) => {
                const meta = milestoneTypes[item.type] || milestoneTypes["Codebase"];
                return (
                  <motion.div key={index} className="relative flex flex-col md:w-[300px] md:flex-none mb-32 md:mb-0 group">
                    {/* 节点：修正遮挡问题 */}
                    <div className="absolute top-[-30px] md:top-[12px] left-[1.5rem] md:left-1/2 md:-translate-x-1/2 z-30">
                      <div className={`w-8 h-8 rounded-full ${meta.color} border-4 border-[#030712] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]`}>
                        {meta.icon}
                      </div>
                    </div>

                    <div className="pl-20 md:pl-0">
                      {/* 图片：原比例完整显示，带交互效果 */}
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
                          <span className={`text-[10px] px-2 py-0.5 ${meta.color} text-black rounded font-black uppercase`}>{item.tag}</span>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight uppercase">{item.title}</h3>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ...页脚保持简洁... */}
      </div>
    </main>
  );
}