"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Code2, GitBranch, Cpu, Layers, Activity, Rss, Target, Zap } from "lucide-react";
import { useId } from "react";

// 1. 数据结构（保持不变，请确保 public/ 文件夹下有对应图片）
const timelineData = [
  { 
    date: "2026.04.24", 
    title: "Cloud RSS Automation", 
    desc: "CC 接入 RSS，实现云端 WebDAV 仓库自动 RSS 服务初始化。", 
    tag: "Auto",
    type: "Skill",
    img: "/screenshot-424.png" // 如果没有图片，会报错，请确保文件存在或删除此行
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

// 2. 图例映射（保持不变）
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
        
        {/* 1. Hero Section (精简版) */}
        <header className="pt-48 pb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-[1px] w-12 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase animate-pulse">System Online // Node: HK</span>
            </div>
            <motion.h1 className="text-[12vw] sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 md:mb-10 leading-[0.9] mix-blend-difference break-words">
              GEEK <br /> COMMUNITY.
            </motion.h1>
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              <motion.a href="#timeline" whileHover={{ scale: 1.05 }} className="group px-12 py-5 bg-transparent text-white font-bold rounded-full border border-gray-800 flex items-center gap-3 backdrop-blur-md no-underline">
                <Sparkles size={20} className="text-blue-400" /> 发展轴
              </motion.a>
            </div>
          </motion.div>
        </header>

        {/* 2. Timeline Section (升级：两侧交叉分布) */}
        <section id="timeline" className="py-32 border-t border-gray-900 relative">
          <div className="flex items-end justify-between mb-24 flex-wrap gap-6 text-center md:text-left">
            <div>
              <h2 className="text-5xl font-black italic tracking-tighter mb-2 inline-block relative">
                GROWTH AXIS
                <div className="absolute -bottom-4 left-0 w-full h-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              </h2>
              <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.3em] mt-4">Multi-dimensional Info Stream // Node: Zig-zag</p>
            </div>
            
            {/* 图例部分 (手机隐藏) */}
            <div className="hidden md:flex gap-4 p-4 border border-gray-800 rounded-2xl bg-zinc-900/30 backdrop-blur-sm self-start">
              {Object.entries(milestoneTypes).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-3 h-3 ${value.color} rounded-full`}></div>
                  <span className="text-xs text-gray-400 font-mono">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* 中轴线 (手机纵向居中) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-gray-800 to-transparent block md:hidden" />

          {/* 这里是响应式的关键容器：手机纵向两侧对齐，电脑横向且允许滚动 */}
          <div className="relative md:overflow-x-auto md:pb-12 md:-mb-12 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
            
            {/* 电脑端横向轴的容器 */}
            <div className="relative md:flex md:w-max md:gap-24">
              
              {/* 电脑端横轴虚线 (SVG) */}
              <svg className="hidden md:block absolute inset-0 z-0 pointer-events-none md:static md:w-full md:h-[2px]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.line 
                  x1="0" y1="50" x2="100" y2="50" 
                  stroke="rgba(59,130,246,0.3)" strokeWidth="0.5" strokeDasharray="2 2"
                />
              </svg>

              {/* 发展轴项目迭代 */}
              {timelineData.map((item, index) => {
                const milestoneInfo = milestoneTypes[item.type];
                const isEven = index % 2 === 0; // 判断奇偶决定左一个、右一个

                return (
                  <motion.div 
                    key={index}
                    // ✅ 【Framer Motion：滑入动画适配交叉布局】 ✅
                    // 初始状态：根据 index 判断，左侧卡片从左边滑入，右侧从右边滑入
                    initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    
                    // ✅ 【Tailwind：手机纵向两侧对齐的核心 Flex】 ✅
                    // flex-row-reverse 动态控制图片和文字的顺序，md: 用于适配横向滚动
                    className={`relative flex flex-col md:w-[400px] md:flex-none items-center 
                                md:flex-row-reverse ${isEven ? 'md:order-last' : ''} 
                                space-y-10 md:space-y-0`}
                  >
                    
                    {/* 1. 内容卡片容器 (电脑单侧，手机交替) */}
                    {/* w-[42%]确保单侧不遮挡轴线，isEven? 控制左右分布 */}
                    <div className={`w-full md:w-full flex-1 flex flex-col items-center gap-8 ${isEven ? 'md:items-start' : 'md:items-end'}`}>
                        
                        {/* 手机端的节点定位 (靠左轴线) */}
                        <div className="block md:hidden absolute left-1/2 -translate-x-1/2 -top-5 z-20">
                            <div className={`w-10 h-10 rounded-full ${milestoneInfo.color} flex items-center justify-center border-4 border-[#030712] shadow-2xl`}>
                            {milestoneInfo.icon}
                            </div>
                            <div className={`absolute inset-0 rounded-full animate-ping ${milestoneInfo.color} opacity-20`} />
                        </div>

                        {/* 电脑端的节点定位 (靠左上角) */}
                        <div className="hidden md:block absolute top-[-1.5rem] left-1/2 -translate-x-1/2 z-20">
                            <div className={`w-8 h-8 rounded-full ${milestoneInfo.color} flex items-center justify-center border-2 border-[#030712] shadow-2xl transition-all hover:scale-125`}>
                            {milestoneInfo.icon}
                            </div>
                            <div className={`absolute inset-0 rounded-full animate-ping ${milestoneInfo.color} opacity-20`} />
                        </div>

                        {/* ✅ 【这里是图片和文字的交叉容器】 ✅ */}
                        <div className={`w-[85%] md:w-full flex flex-col items-center ${isEven ? 'md:items-start' : 'md:items-end'}`}>
                            
                            {/* 插图容器 (修正：缩小、完整、两侧交叉) */}
                            {item.img && (
                                <motion.div 
                                    className={`w-full md:w-full aspect-video rounded-3xl mb-12 bg-zinc-900 border border-gray-800 flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-blue-500/10 
                                              ${!isEven ? 'md:order-first' : ''}`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {/* ✅ 【这里是图片加载的核心 img 标签】 ✅ */}
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        // ✅ 【图片缩小、完整呈现的核心类名： w-full h-full object-cover】 ✅
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                    {/* 增加一个内部发光效果，致敬极客黑蓝风格 */}
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent group-hover:opacity-20 transition-opacity" />
                                </motion.div>
                            )}

                            {/* 文字内容 */}
                            <div className={`w-[90%] md:w-full flex-1 flex flex-col items-center text-center ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-mono text-blue-500 font-bold tracking-widest">{item.date}</span>
                                    <span className={`text-[10px] px-3 py-1 ${milestoneInfo.color} text-black rounded-full font-black uppercase tracking-tighter`}>
                                    {item.tag}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors leading-none tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 max-w-xl text-lg font-light leading-relaxed">
                                    {item.desc}
                                
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* 手机端连接下一个节点的虚线 */}
                    <div className="block md:hidden absolute left-1/2 -translate-x-1/2 top-10 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/30 via-gray-800 to-transparent" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ...Repository Section 和 Footer 保持不变（参考上一版代码）... */}
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