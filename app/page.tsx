"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Code2, GitBranch, Cpu, Layers, Activity, Rss, Target, Zap, Binary } from "lucide-react";
import { useId } from "react";

// 1. 数据结构升级：新增 type (对应参考图的图例) 和 img (你的自定义插图)
const timelineData = [
  { 
    date: "2026.04.24", 
    title: "Cloud RSS Automation", 
    desc: "CC 接入 RSS，实现云端 WebDAV 仓库自动 RSS 服务初始化。", 
    tag: "Auto",
    type: "Skill", // 事件类型：Skill / Core / PKM / UI 等
    img: "/screenshot-424.png" // 你的插图路径
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
    date: "2026.04.20", 
    title: "Claude Code & API Hub", 
    desc: "初始化 Claude Code，搭建社群 API 中转站，成功跑通 Skill。", 
    tag: "Core",
    type: "Codebase",
    img: "/screenshot-420.png" 
  },
];

// 2. 图例映射（对应参考图左上角的图例）
const milestoneTypes: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  "Codebase": { label: "代码仓库", color: "bg-blue-500", icon: <Code2 size={12} className="text-blue-200" /> },
  "Architecture": { label: "系统架构", color: "bg-purple-500", icon: <Layers size={12} className="text-purple-200" /> },
  "Skill": { label: "自定义Skill", color: "bg-orange-500", icon: <Zap size={12} className="text-orange-200" /> },
  "Milestone": { label: "关键里程碑", color: "bg-white", icon: <Target size={12} className="text-black" /> },
};

export default function Home() {
  const lineId = useId();

  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden font-sans selection:bg-blue-500/30">
      {/* 极客网格背景 */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* 1. Hero Section (保持原有精简版) */}
        <header className="pt-48 pb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-[1px] w-12 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase animate-pulse">System Online // Node: HK</span>
            </div>
            <motion.h1 className="text-[12vw] sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 md:mb-10 leading-[0.9] mix-blend-difference break-words">
              GEEK <br /> COMMUNITY.
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl leading-relaxed font-light">
              Full-stack Development & AI Exploration. <br />
              <span className="text-gray-600 block mt-4 italic font-serif border-l-2 border-gray-800 pl-4">在数字荒原中，构建属于自己的理想国。</span>
            </p>
            <div className="flex flex-wrap gap-8">
              <motion.a href="#repos" whileHover={{ scale: 1.05 }} className="px-12 py-5 bg-white text-black font-bold rounded-full no-underline shadow-blue-500/20">
                <Terminal size={20} /> 查看仓库
              </motion.a>
              <motion.a href="#timeline" whileHover={{ scale: 1.05 }} className="group px-12 py-5 bg-transparent text-white font-bold rounded-full border border-gray-800 flex items-center gap-3 backdrop-blur-md no-underline">
                <Sparkles size={20} className="text-blue-400" /> 发展轴
              </motion.a>
            </div>
          </motion.div>
        </header>

        {/* 2. Timeline Section (彻底重构：类似 Image 0 风格的响应式轴) */}
        <section id="timeline" className="py-32 border-t border-gray-900">
          <div className="flex items-end justify-between mb-24 flex-wrap gap-6">
            <div>
              <h2 className="text-5xl font-black italic tracking-tighter mb-2">GROWTH AXIS</h2>
              <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.3em]">Build Milestones & Community skill evolution</p>
            </div>
            
            {/* 图例部分 (手机隐藏，桌面显示在右侧) */}
            <div className="hidden md:flex gap-4 p-4 border border-gray-800 rounded-2xl bg-zinc-900/30 backdrop-blur-sm self-start">
              {Object.entries(milestoneTypes).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-3 h-3 ${value.color} rounded-full`}></div>
                  <span className="text-xs text-gray-400 font-mono">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* 这里是响应式的关键容器：手机纵向，电脑横向且允许滚动 */}
          <div className="relative md:overflow-x-auto md:pb-12 md:-mb-12 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
            
            {/* 电脑端横向轴的容器 */}
            <div className="relative md:flex md:w-max md:gap-24">
              
              {/* 轴线动画 (SVG实现，响应式适配路径) */}
              <svg className="absolute inset-0 z-0 pointer-events-none md:static md:w-full md:h-[2px]" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* 手机端的纵向线 */}
                <motion.line 
                  className="block md:hidden"
                  x1="2.5rem" y1="0" x2="2.5rem" y2="100" 
                  stroke="rgba(59,130,246,0.3)" strokeWidth="1" strokeDasharray="5 5"
                />
                {/* 电脑端的横向线 */}
                <motion.line 
                  className="hidden md:block"
                  x1="0" y1="50" x2="100" y2="50" 
                  stroke="rgba(59,130,246,0.3)" strokeWidth="0.5" strokeDasharray="2 2"
                />
              </svg>

              {/* 发展轴项目迭代 */}
              {timelineData.map((item, index) => {
                const milestoneInfo = milestoneTypes[item.type];
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
                    className="relative flex flex-col md:w-[350px] md:flex-none"
                  >
                    {/* 1. 轴上的节点 (参考图中的核心元素：色点+图标) */}
                    <div className="relative mb-6 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0">
                      {/* 手机端的节点定位 (靠左) */}
                      <div className="block md:hidden absolute left-[1.5rem] top-1/2 -translate-y-1/2">
                        <div className={`w-8 h-8 rounded-full ${milestoneInfo.color} flex items-center justify-center border-2 border-[#030712] shadow-2xl z-20 transition-all hover:scale-125`}>
                          {milestoneInfo.icon}
                        </div>
                        <div className={`absolute inset-0 rounded-full animate-ping ${milestoneInfo.color} opacity-20`} />
                      </div>
                      {/* 电脑端的节点定位 (靠上) */}
                      <div className="hidden md:block absolute top-[-1.5rem] left-1/2 -translate-x-1/2">
                         <div className={`w-8 h-8 rounded-full ${milestoneInfo.color} flex items-center justify-center border-2 border-[#030712] shadow-2xl z-20 transition-all hover:scale-125`}>
                          {milestoneInfo.icon}
                         </div>
                         <div className={`absolute inset-0 rounded-full animate-ping ${milestoneInfo.color} opacity-20`} />
                      </div>
                    </div>

                    {/* 2. 内容卡片 */}
                    <div className="pl-24 md:pl-0 md:mt-24">
                      {/* 插图 (如果有) - 这是你想要的修改 */}
                      {item.img && (
                        <motion.img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full aspect-video rounded-2xl mb-6 bg-zinc-900 border border-gray-800 object-cover"
                          whileHover={{ scale: 1.05 }}
                        />
                      )}

                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-mono text-blue-500 font-bold tracking-widest">{item.date}</span>
                        <span className={`text-[10px] px-3 py-1 ${milestoneInfo.color} text-black rounded-full font-black tracking-tighter uppercase`}>
                          {item.tag}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-400 transition-all leading-none tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 max-w-xl text-base font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* 手机端连接下一个节点的虚线 (Image 0 风格) */}
                    <div className="block md:hidden absolute left-[2.5rem] top-12 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/20 to-transparent" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Repository Section (保持原有精简版) */}
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