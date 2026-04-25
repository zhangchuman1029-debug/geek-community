"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Code2, GitBranch, Cpu, Layers, Target, Zap } from "lucide-react";
import { useId } from "react";

// 1. 数据按时间正序排列（从左到右：4.20 -> 4.22 -> 4.24），保证原比例图片完整
const timelineData = [
  { 
    date: "2026.04.20", 
    title: "Claude Code & API Hub", 
    desc: "初始化 Claude Code，搭建社群 API 中转站，成功跑通 Skill。", 
    tag: "Core",
    type: "Codebase",
    img: "/screenshot-420.png" // 确保 public 文件夹下有此图片
  },
  { 
    date: "2026.04.22", 
    title: "Obsidian CLI Integration", 
    desc: "CC 接入 Obsidian CLI，打通 WebDAV 协议，实现知识库双向同步。", 
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

const milestoneTypes: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  "Codebase": { label: "代码仓库", color: "bg-blue-500", icon: <Code2 size={12} className="text-blue-200" /> },
  "Architecture": { label: "系统架构", color: "bg-purple-500", icon: <Layers size={12} className="text-purple-200" /> },
  "Skill": { label: "自定义Skill", color: "bg-orange-500", icon: <Zap size={12} className="text-orange-200" /> },
  "Milestone": { label: "关键里程碑", color: "bg-white", icon: <Target size={12} className="text-black" /> },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden font-sans selection:bg-blue-500/30">
      {/* 极客网格背景 */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* 1. Hero Section (保持原有精简版) */}
        <header className="pt-48 pb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-[1px] w-12 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase animate-pulse">System Online // Node: HK</span>
            </div>
            <motion.h1 className="text-[10vw] sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 md:mb-10 leading-[0.9] mix-blend-difference break-words uppercase">
              Geek <span className="text-gray-500">Axis</span>
            </motion.h1>
            <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.3em] mt-4 pl-1">TIMELINE // 2026 // NODE_SYNC</p>
          </motion.div>
        </header>

        {/* 2. Timeline Section (升级版视觉) */}
        <section id="timeline" className="py-32 border-t border-gray-white/5 relative z-10">
          
          {/* 中轴线 (仅手机端纵向) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-blue-500/20 md:hidden z-0" />
          
          {/* 这里是响应式的关键容器：手机纵向，电脑横向且允许滚动 */}
          <div className="relative md:overflow-x-auto md:pb-12 scrollbar-hide scrollbar-track-transparent">
            
            {/* 电脑端横向轴的容器 */}
            <div className="relative md:flex md:w-max md:gap-16 pt-20">
              
              {/* 电脑端中轴虚线 */}
              <div className="hidden md:block absolute top-[20px] left-0 right-0 h-[1px] bg-blue-500/10 z-0" />

              {/* 发展轴项目迭代 */}
              {timelineData.map((item, index) => {
                const milestoneInfo = milestoneTypes[item.type] || milestoneTypes["Codebase"];
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 80, damping: 12 }}
                    className="relative flex flex-col md:w-[320px] md:flex-none mb-32 md:mb-0 group"
                  >
                    {/* ✅ 节点修正：十字星样式，确保浮在线上 */}
                    <div className="absolute top-[-30px] md:top-[12px] left-[1.5rem] md:left-1/2 md:-translate-x-1/2 z-30">
                      <div className="relative flex items-center justify-center">
                        <div className={`w-10 h-10 rounded-full bg-[#030712] border-2 border-blue-500/50 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110`}>
                          <div className={`w-6 h-6 rounded-full ${milestoneInfo.color} flex items-center justify-center text-black`}>
                            {milestoneInfo.icon}
                          </div>
                        </div>
                        <div className={`absolute inset-0 rounded-full animate-ping ${milestoneInfo.color} opacity-10`} />
                      </div>
                    </div>

                    {/* ✅ 内容卡片：原比例完整图片，黑白滤镜交互 */}
                    <div className="pl-24 md:pl-0">
                      
                      {item.img && (
                        <motion.div 
                          className="relative rounded-2xl mb-8 bg-zinc-900 border border-white/5 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] group"
                          whileHover={{ scale: 1.02 }}
                        >
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            // ✅ 修正的核心：object-contain + grayscale-0/grayscale + h-[200px]
                            className="w-full h-[200px] object-contain transition-all duration-700 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" 
                          />
                          {/* 增加一个底部的微弱发光渐变，减少“贴纸感” */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity pointer-events-none" />
                        </motion.div>
                      )}

                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-blue-500 font-bold tracking-tighter">{item.date}</span>
                          <span className={`text-[10px] px-3 py-1 ${milestoneInfo.color} text-black rounded-full font-black uppercase tracking-tighter`}>
                            {item.tag}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-black mb-1 text-white group-hover:text-blue-400 transition-colors tracking-tight uppercase leading-none">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm font-light leading-relaxed max-w-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Repository Section (保持原有精简版) */}
        <section id="repos" className="py-32 border-t border-white/5">
          {/* ...Repo 部分代码保持不变... */}
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
              <motion.div key={i} whileHover={{ y: -10 }} className="p-12 bg-gray-900/20 border border-gray-800/50 rounded-[2rem] backdrop-blur-xl group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 opacity-5 transition-opacity">
                  <Code2 size={200} />
                </div>
                <h3 className="text-3xl font-bold mb-4">{repo.name}</h3>
                <p className="text-gray-500 mb-10 leading-relaxed text-lg">探索全栈开发的更多可能性...</p>
                <div className="flex flex-wrap gap-3">
                   {repo.tags.map(t => <span key={t} className="text-[10px] px-4 py-1.5 bg-black/50 rounded-full border uppercase">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="py-24 text-center border-t border-white/5">
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