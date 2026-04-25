"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Code2, BookOpen,GitBranch, Cpu, Zap } from "lucide-react";

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
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- Hero Section --- */}
        <header className="pt-48 pb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-10">
              <motion.div animate={{ width: [0, 48] }} className="h-[1px] bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
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

        {/* --- Timeline Section: 强化轴线 + 未完待续 --- */}
        <section id="timeline" className="py-20 border-t border-white/5">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-black italic tracking-tighter uppercase">Growth Axis</h2>
            <div className="hidden md:block h-[1px] flex-1 mx-10 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          
          <div className="relative md:overflow-x-auto scrollbar-hide pb-8">
            {/* 增加了右侧内边距 pr-40，给文字留出空间 */}
            <div className="relative flex flex-col md:w-max min-w-full px-4 md:pr-40">
              
              {/* 1. 上排内容 (奇数项) */}
              <div className="hidden md:flex gap-6 mb-2"> 
                {timelineData.map((item, index) => (
                  <div key={index} className="w-[160px] flex-none"> 
                    {index % 2 !== 0 ? (
                      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col gap-2"> 
                        {item.img && <img src={item.img} alt={item.title} className="w-full h-auto max-w-[86px] mx-auto rounded-sm opacity-80 hover:opacity-100 transition-opacity" />}
                        <div className="px-1 text-center">
                          <span className="text-[8px] text-white/50 font-mono tracking-tighter">{item.date}</span>
                          <h3 className="text-[13px] font-bold uppercase text-white leading-tight mt-0.5 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                          <p className="text-gray-500 text-[10px] mt-1 leading-tight line-clamp-2">{item.desc}</p>
                        </div>
                        <div className="h-3 w-[1.5px] bg-white/40 mx-auto" /> 
                      </motion.div>
                    ) : <div className="h-10" />}
                  </div>
                ))}
              </div>

              {/* 2. 中间主轴线 - 增加右侧渐变消失与文字 */}
              <div className="relative hidden md:flex items-center w-full mb-2">
                {/* 主轴线：从 70% 白色渐变到透明 */}
                <div className="h-[2px] flex-1 bg-gradient-to-r from-white/70 via-white/70 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                
                {/* To be continued 文字 */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute left-full ml-4 whitespace-nowrap"
                >
                  <span className="text-blue-500 font-mono text-[10px] tracking-[0.3em] uppercase italic">
                    To be continued...
                  </span>
                </motion.div>
              </div>

              {/* 3. 下排内容 (偶数项) */}
              <div className="flex flex-col md:flex-row gap-6 mt-2">
                {timelineData.map((item, index) => (
                  <div key={index} className="w-full md:w-[160px] flex-none">
                    {index % 2 === 0 ? (
                      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col gap-2 group">
                        <div className="hidden md:block h-3 w-[1.5px] bg-white/40 mx-auto" /> 
                        <div className="px-1 text-center">
                          <span className="text-[8px] text-white/50 font-mono tracking-tighter">{item.date}</span>
                          <h3 className="text-[13px] font-bold uppercase text-white leading-tight mt-0.5 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                          <p className="text-gray-500 text-[10px] mt-1 leading-tight line-clamp-2">{item.desc}</p>
                        </div>
                        {item.img && <img src={item.img} alt={item.title} className="w-full h-auto max-w-[86px] mx-auto rounded-sm opacity-80 hover:opacity-100 transition-opacity mt-1" />}
                      </motion.div>
                    ) : (
                      <div className="md:hidden block mb-10 last:mb-0 border-l border-white/20 pl-4">
                        {/* 移动端保留逻辑 */}
                        <span className="text-[8px] text-white/50 font-mono">{item.date}</span>
                        <h3 className="text-sm font-bold uppercase text-white mt-0.5">{item.title}</h3>
                        <p className="text-gray-500 text-[10px] mt-1">{item.desc}</p>
                        {item.img && <img src={item.img} alt={item.title} className="w-full h-auto max-w-[86px] rounded mt-2" />}
                      </div>
                    )}
                  </div>
                ))}
                {/* 移动端末尾显示文字 */}
                <div className="md:hidden py-4 opacity-50 italic text-[10px] font-mono tracking-widest">
                  &gt; To be continued...
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Repository Section --- */}
        <section id="repos" className="py-32 border-t border-white/5 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10 pointer-events-none" />
          
          <div className="flex items-end justify-between mb-20">
            <h2 className="text-5xl font-black italic tracking-tighter mb-2 uppercase">Repository</h2>
            <GitBranch className="text-white/20" size={80} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* 保持 2 列，增加间距 gap-10 */}
            {[
              { 
                name: "AIGC Project Hub", 
                tags: ["Next.js", "AI", "Full-stack"], 
                icon: <Zap size={24} />, 
                desc: "集成 DeepSeek 与多项 AI 能力的工具集。包含知识提取、RSS 自动化等核心项目。",
                link: "#",
                isExternal: false
              },
              { 
                name: "Community Library", 
                tags: ["Calibre", "Library", "Archive"], 
                icon: <BookOpen size={24} />, 
                desc: "极客社区专属图书馆。收录大量技术典籍与数字档案，支持云端深度检索与阅读。",
                link: "https://geekhub.studypath.top/calibre/",
                isExternal: true
              }
            ].map((repo, i) => (
              <motion.a 
                key={i}
                href={repo.link}
                target={repo.isExternal ? "_blank" : "_self"}
                whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.2)" }} 
                className="p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] group relative overflow-hidden backdrop-blur-3xl no-underline block"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-white/5 rounded-2xl text-white group-hover:text-blue-400 transition-colors">{repo.icon}</div>
                  <div className="text-[11px] text-gray-600 font-mono tracking-[0.3em]">0{i+1}</div>
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:text-white transition-colors uppercase italic">{repo.name}</h3>
                <p className="text-gray-500 mb-10 text-base leading-relaxed font-light">{repo.desc}</p>
                <div className="flex flex-wrap gap-3">
                   {repo.tags.map(t => <span key={t} className="text-[10px] px-4 py-1.5 bg-white/5 rounded-full border border-white/10 uppercase font-bold text-gray-400 tracking-wider">{t}</span>)}
                </div>
              </motion.a>
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