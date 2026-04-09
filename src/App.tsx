import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home as HomeIcon, 
  Briefcase, 
  Heart, 
  User, 
  Github, 
  Twitter, 
  Linkedin, 
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Compass,
  QrCode,
  Mail,
  Link,
  MapPin,
  ShieldCheck,
  Sun,
  Moon
} from 'lucide-react';

type Tab = '首页' | '我的经历' | '生活碎片' | '关于我';

const FloatingDecorations = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="floating-decoration top-20 left-[10%] w-12 h-12 bg-neon-yellow chunky-border" style={{ animationDelay: '0s' }} />
    <div className="floating-decoration top-[40%] right-[15%] w-16 h-16 bg-neon-pink chunky-border rotate-45" style={{ animationDelay: '1s' }} />
    <div className="floating-decoration bottom-20 left-[20%] w-8 h-8 bg-neon-cyan chunky-border" style={{ animationDelay: '2s' }} />
    <div className="floating-decoration top-[60%] left-[5%] w-10 h-10 bg-neon-pink chunky-border opacity-20" style={{ animationDelay: '1.5s' }} />
    <div className="floating-decoration bottom-[30%] right-[5%] w-14 h-14 bg-neon-yellow chunky-border opacity-20 rotate-12" style={{ animationDelay: '0.5s' }} />
  </div>
);

const Navbar = ({ activeTab, setActiveTab, isDarkMode, setIsDarkMode }: { activeTab: Tab, setActiveTab: (t: Tab) => void, isDarkMode: boolean, setIsDarkMode: (d: boolean) => void }) => {
  const tabs: { id: Tab, label: string }[] = [
    { id: '首页', label: '首页 HOME' },
    { id: '我的经历', label: '个人经历 JOURNEY' },
    { id: '生活碎片', label: '生活碎片 LIFE SPLINTERS' },
    { id: '关于我', label: '关于我 ABOUT ME' }
  ];

  return (
    <nav className={`sticky top-0 z-50 ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md border-b-[4px] border-black py-4 px-6 mb-8 shadow-[0_4px_0_0_rgba(0,0,0,1)] transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-neon-pink chunky-border p-2 px-4 -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
            <span className="text-white font-black text-2xl tracking-tighter">MASON</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`nav-tab ${activeTab === tab.id ? 'nav-tab-active' : ''} ${isDarkMode && activeTab !== tab.id ? 'bg-gray-800 text-white border-white hover:bg-white hover:text-black' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="hidden lg:flex items-center gap-3">
          <div className={`chunky-border px-3 py-1 hover:bg-neon-yellow transition-colors cursor-pointer font-black text-sm flex items-center justify-center min-w-[40px] min-h-[40px] ${isDarkMode ? 'bg-black text-white border-white' : 'bg-white text-black'}`}>
            CH
          </div>
          <div 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`chunky-border p-2 cursor-pointer transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center ${isDarkMode ? 'bg-black text-white hover:bg-neon-cyan border-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Home = ({ setActiveTab, isDarkMode }: { setActiveTab: (t: Tab) => void, isDarkMode?: boolean, key?: any }) => {
  const [frontImage, setFrontImage] = useState("/ocean2.jpg");
  const darkMode = isDarkMode ?? (typeof document !== 'undefined' && document.body.classList.contains('dark-mode'));

  const handleMouseLeave = () => {
    // We change the front image after the card has started flipping back
    // using a small timeout to let the transition begin before swapping source
    setTimeout(() => {
      setFrontImage(prev => prev === "/ocean2.jpg" ? "/mine craft.jpg" : "/ocean2.jpg");
    }, 150);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 max-w-7xl mx-auto px-4 flex flex-col gap-16"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-stretch min-h-[60vh]">
        {/* Left: Identity Block (45%) */}
        <div className="lg:w-[45%] flex flex-col justify-center items-start gap-8">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none animate-neon-flicker-once hover:text-neon-cyan hover:neon-glow-cyan transition-all cursor-default select-none"
            >
              I'M MASON
            </motion.h1>

            <div className="inline-block bg-neon-pink chunky-border px-4 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              <span className="text-white font-black uppercase tracking-widest text-sm md:text-lg">
                An ambitious VIBE CODER
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-black leading-tight max-w-lg">
              我是
              <span className="inline-block bg-neon-yellow text-black px-2 py-0.5 mx-1 border-2 border-black transform rotate-1">
                蔡文卓
              </span>
              <br className="mt-2" />
              一个练习时长
              <span className="inline-block bg-neon-cyan text-white px-2 py-0.5 mx-1 border-2 border-black transform -rotate-2 mt-2">
                三年半
              </span>
              的应届大学生
            </p>
            <p className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-[0.2em]">
              DISCOVERING STORIES IN DATA <br /> BUILDING VISIONS WITH CODE
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Github, label: 'GITHUB', color: 'hover:bg-black hover:text-white' },
              { icon: Linkedin, label: 'LINKEDIN', color: 'hover:bg-neon-cyan' },
              { icon: Globe, label: 'BILIBILI', color: 'hover:bg-neon-pink hover:text-white' }
            ].map((social, i) => (
              <div 
                key={i} 
                title={social.label}
                className={`w-14 h-14 chunky-border flex items-center justify-center cursor-pointer transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 ${
                  darkMode ? 'bg-slate-900 border-white text-white' : 'bg-white text-black'
                } ${social.color}`}
              >
                <social.icon size={28} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero Visual (55%) */}
        <div className="lg:w-[55%] flex items-center justify-center">
          <motion.div 
            className="w-full max-w-[400px] aspect-[3/4] bg-white chunky-border shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group relative [perspective:1000px] animate-float"
            onHoverEnd={handleMouseLeave}
          >
            <div className="w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:animate-shake">
              {/* Front Side */}
              <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col items-center justify-center p-4 bg-white">
                <img src={frontImage} alt="Hero Visual 01" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" loading="eager" decoding="async" fetchPriority="high" />
                <div className="absolute top-6 right-6 bg-black text-white px-4 py-1 text-xs font-black uppercase z-10 tracking-widest">
                  HERO_VISUAL // 01
                </div>
                
                {/* Corner Accents */}
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-white z-10 drop-shadow-md" />
                <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-white z-10 drop-shadow-md" />
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center bg-white">
                <img src="/ocean.jpg" alt="Hero Visual 02" className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-in-out" loading="lazy" decoding="async" />
                <div className="absolute bottom-6 left-6 bg-neon-pink text-white px-4 py-1 text-xs font-black uppercase z-10 tracking-widest">
                  REVEALED // 02
                </div>
                
                {/* Corner Accents */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-white z-10 drop-shadow-md" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-white z-10 drop-shadow-md" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Motto Banner */}
      <div className="w-full bg-neon-yellow chunky-border p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden mt-8">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }} />
        
        <div className="flex flex-col items-center justify-center gap-6 relative z-10">
          <div className="flex gap-4">
            <div className="bg-neon-pink chunky-border px-4 py-1 text-xs font-black text-white uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
              NEO
            </div>
            <div className="bg-black chunky-border px-4 py-1 text-xs font-black text-white uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2">
              RETRO
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-[0.05em] text-center text-black drop-shadow-[4px_4px_0_rgba(255,0,255,0.6)] transform -skew-x-6 hover:skew-x-0 transition-transform duration-300 cursor-default whitespace-nowrap">
            我不是无所不能 但一定竭尽所能
          </h2>
          
          <div className="w-24 h-2 bg-black" />
        </div>
      </div>
    </motion.div>
  );
};

const ImagePlaceholder = ({ label, glowClass = "neon-box-glow-pink", isDarkMode }: { label: string, glowClass?: string, isDarkMode?: boolean }) => (
  <div className={`w-full aspect-video chunky-border flex flex-col items-center justify-center p-4 group/img cursor-pointer transition-all ${glowClass} mt-4 mb-2 ${
    isDarkMode ? 'dark-surface-soft border-white hover:bg-slate-700' : 'bg-gray-100 hover:bg-white'
  }`}>
    <div className={`text-[10px] font-black mb-2 uppercase tracking-tighter ${isDarkMode ? 'text-slate-400' : 'text-gray-400'}`}>{label}</div>
    <div className={`font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'group-hover/img:text-white text-slate-300' : 'group-hover/img:text-black'}`}>UPLOAD PROJECT IMAGE</div>
  </div>
);

const JourneyImageFrame = ({
  label,
  imageSrc,
  glowClass = "neon-box-glow-pink",
  aspectClass = "aspect-[4/3]",
  onClick,
}: {
  label: string,
  imageSrc: string,
  glowClass?: string,
  aspectClass?: string,
  onClick?: () => void
}) => (
  <div
    className={`w-full ${aspectClass} chunky-border overflow-hidden ${glowClass} mt-4 mb-2 bg-white cursor-zoom-in`}
    onClick={onClick}
  >
    <img src={imageSrc} alt={label} className="w-full h-full object-cover" loading="lazy" decoding="async" />
  </div>
);

const Journey = ({ isDarkMode }: { isDarkMode?: boolean, key?: any }) => {
  const darkMode = isDarkMode ?? (typeof document !== 'undefined' && document.body.classList.contains('dark-mode'));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const journeyImages = [
    "/practice.jpg",
    "/mls.jpg",
    "/shixi.jpg",
    "/hiking.jpg",
    "/Photo collection.jpg",
    "/xcb.jpg",
    "/university.jpg",
  ];
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 max-w-7xl mx-auto px-4 relative"
    >
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">THE EPIC QUEST</h2>
        <div className="inline-block bg-neon-pink chunky-border px-6 py-2 rotate-1">
          <span className="font-black uppercase tracking-widest">地球online Personal progress</span>
        </div>
      </div>

      {/* The Spine */}
      <div className="absolute left-1/2 top-[300px] bottom-0 w-2 bg-black -translate-x-1/2 hidden lg:block" />

      <div className="space-y-24 relative">
        {/* BOSS LEVEL - LEFT */}
        <div className="flex flex-col lg:flex-row items-center justify-start w-full">
          <div className="w-full lg:w-[45%]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`card hover:neon-shadow-cyan border-neon-cyan/50 pt-10 ${darkMode ? 'dark-surface border-white' : ''}`}
            >
              <div className="absolute top-0 left-0 bg-neon-cyan chunky-border px-4 py-1 -translate-y-1/2 translate-x-6 text-xs font-black text-black uppercase">
                基层实践
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-black uppercase leading-tight">红旅文化探索</h3>
                  <div className="text-neon-cyan font-black uppercase text-sm tracking-widest">Cultural exploration</div>
                </div>
                <div className={`chunky-border px-3 py-1 text-xs font-black uppercase ${darkMode ? 'dark-surface-soft border-white' : 'bg-white'}`}>2024.7 - 2024.8</div>
              </div>
              <div className={`space-y-4 font-bold ${darkMode ? 'text-slate-200' : 'text-gray-700'}`}>
                <p>作为第一负责人，牵头“三下乡”基层实践活动全流程。</p>
                <div className="bg-black text-neon-cyan chunky-border p-4 text-center">
                  <div className="text-4xl font-black">校级三等奖</div>
                  <div className="text-[10px] uppercase tracking-widest mt-1">“三下乡”社会实践活动</div>
                </div>
              </div>
              <JourneyImageFrame label="[[XYZ_项目_截图/团队合影_IMAGE_PLACEHOLDER]]" glowClass="neon-box-glow-cyan" imageSrc={journeyImages[0]} onClick={() => setSelectedImage(journeyImages[0])} />
            </motion.div>
          </div>
        </div>

        {/* SKILL TREE - RIGHT */}
        <div className="flex flex-col lg:flex-row items-center justify-end w-full">
          <div className="w-full lg:w-[45%]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`card hover:neon-shadow-pink border-neon-pink/50 pt-10 ${darkMode ? 'dark-surface border-white' : ''}`}
            >
              <div className="absolute top-0 left-0 bg-neon-pink chunky-border px-4 py-1 -translate-y-1/2 translate-x-6 text-xs font-black text-white uppercase">
                跑马日记
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">别让脚步停下来</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Persistence',  'Freedom', 'Vitality'].map(skill => (
                  <span key={skill} className={`chunky-border px-4 py-1 text-sm font-black uppercase tracking-wider transition-all hover:neon-glow-pink cursor-default ${darkMode ? 'dark-surface-soft border-white hover:bg-neon-pink hover:text-white' : 'bg-white hover:bg-neon-pink hover:text-white'}`}>
                    {skill}
                  </span>
                ))}
              </div>
              <p className={`font-bold text-sm mb-4 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                跑步是灵魂的释放，是自由的呼吸。
              </p>
              <JourneyImageFrame label="[[Figma_设计草稿/数据分析_图表_IMAGE_PLACEHOLDER]]" glowClass="neon-box-glow-pink" imageSrc={journeyImages[1]} onClick={() => setSelectedImage(journeyImages[1])} />
            </motion.div>
          </div>
        </div>

        {/* LEVEL 2 - LEFT */}
        <div className="flex flex-col lg:flex-row items-center justify-start w-full">
          <div className="w-full lg:w-[45%]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`card hover:neon-shadow-cyan border-neon-cyan/50 pt-10 ${darkMode ? 'dark-surface border-white' : ''}`}
            >
              <div className="absolute top-0 left-0 bg-neon-cyan chunky-border px-4 py-1 -translate-y-1/2 translate-x-6 text-xs font-black text-black uppercase">
                实习实训
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-black uppercase leading-tight">复合型人才loading...</h3>
                  <div className="text-neon-cyan font-black uppercase text-sm tracking-widest">密山市市监局 办公室助理的日子</div>
                </div>
                <div className={`chunky-border px-3 py-1 text-xs font-black uppercase ${darkMode ? 'dark-surface-soft border-white' : 'bg-white'}`}>2024.07 - 2024.8</div>
              </div>
              <p className={`font-bold mb-4 ${darkMode ? 'text-slate-200' : 'text-gray-700'}`}>
              负责档案数据分析管理，市场合规政策学习，以及物品采买等跨部门协同工作。
              </p>
              <JourneyImageFrame label="[[ABC_平台_原型/功能演示图_IMAGE_PLACEHOLDER]]" glowClass="neon-box-glow-cyan" imageSrc={journeyImages[2]} onClick={() => setSelectedImage(journeyImages[2])} />
            </motion.div>
          </div>
        </div>

        {/* PASSION POINTS - RIGHT */}
        <div className="flex flex-col lg:flex-row items-center justify-end w-full">
          <div className="w-full lg:w-[45%]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`card hover:neon-shadow-pink border-neon-pink/50 pt-10 ${darkMode ? 'dark-surface border-white' : ''}`}
            >
              <div className="absolute top-0 left-0 bg-neon-pink chunky-border px-4 py-1 -translate-y-1/2 translate-x-6 text-xs font-black text-white uppercase">
                个人探索：PASSION POINTS
              </div>
              <h3 className="text-2xl font-black uppercase mb-6">兴趣支线</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`chunky-border p-4 transition-colors group/p ${darkMode ? 'dark-surface-soft border-white hover:bg-neon-yellow hover:text-black' : 'bg-white hover:bg-neon-yellow'}`}>
                  <div className="font-black text-sm uppercase mb-2">AI / LLM探索</div>
                  <div className="w-full h-1 bg-black mb-2" />
                  <div className={`text-[10px] font-bold uppercase ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>RAG\MCP\AGENT SKILLS</div>
                </div>
                <div className={`chunky-border p-4 transition-colors group/p ${darkMode ? 'dark-surface-soft border-white hover:bg-neon-cyan hover:text-black' : 'bg-white hover:bg-neon-cyan'}`}>
                  <div className="font-black text-sm uppercase mb-2">vibe coding 前端开发</div>
                  <div className="w-full h-1 bg-black mb-2" />
                  <div className={`text-[10px] font-bold uppercase ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>奇思妙想现实化</div>
                </div>
                <div className={`chunky-border p-4 transition-colors group/p ${darkMode ? 'dark-surface-soft border-white hover:bg-neon-pink hover:text-white' : 'bg-white hover:bg-neon-pink hover:text-white'}`}>
                  <div className="font-black text-sm uppercase mb-2">登山（已爬华、嵩、黄、庐版）</div>
                  <JourneyImageFrame label="[[徒步_风光照]]" glowClass="neon-box-glow-pink" imageSrc={journeyImages[3]} onClick={() => setSelectedImage(journeyImages[3])} />
                </div>
                <div className={`chunky-border p-4 transition-colors group/p ${darkMode ? 'dark-surface-soft border-white hover:bg-neon-yellow hover:text-black' : 'bg-white hover:bg-neon-yellow'}`}>
                  <div className="font-black text-sm uppercase mb-2">摄影</div>
                  <JourneyImageFrame label="[[摄影_作品集]]" glowClass="neon-box-glow-yellow" imageSrc={journeyImages[4]} onClick={() => setSelectedImage(journeyImages[4])} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* LEVEL 1 - LEFT */}
        <div className="flex flex-col lg:flex-row items-center justify-start w-full">
          <div className="w-full lg:w-[45%]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`card hover:neon-shadow-cyan border-neon-cyan/50 pt-10 ${darkMode ? 'dark-surface border-white' : ''}`}
            >
              <div className="absolute top-0 left-0 bg-neon-cyan chunky-border px-4 py-1 -translate-y-1/2 translate-x-6 text-xs font-black text-black uppercase">
                团委大喇叭
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-black uppercase leading-tight">宣你所想 传你所爱</h3>
                  <div className="text-neon-cyan font-black uppercase text-sm tracking-widest">Propaganda Department</div>
                </div>
                <div className={`chunky-border px-3 py-1 text-xs font-black uppercase ${darkMode ? 'dark-surface-soft border-white' : 'bg-white'}`}>2023.10 - 2024.10</div>
              </div>
              <p className={`font-bold mb-4 ${darkMode ? 'text-slate-200' : 'text-gray-700'}`}>
              宣传部是我在学校的家。
              </p>
              <JourneyImageFrame label="[[LMN_早起项目_Logo/发布会照片_IMAGE_PLACEHOLDER]]" glowClass="neon-box-glow-cyan" aspectClass="aspect-video" imageSrc={journeyImages[5]} onClick={() => setSelectedImage(journeyImages[5])} />
            </motion.div>
          </div>
        </div>

        {/* ACHIEVEMENT UNLOCKED - LEFT (Centered or Left) */}
        <div className="flex flex-col lg:flex-row items-center justify-start w-full">
          <div className="w-full lg:w-[45%]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`card hover:neon-shadow-yellow border-neon-yellow/50 pt-10 ${darkMode ? 'dark-surface border-white' : ''}`}
            >
              <div className="absolute top-0 left-0 bg-neon-yellow chunky-border px-4 py-1 -translate-y-1/2 translate-x-6 text-xs font-black text-black uppercase">
                成就解锁：大学生活启航 0 %
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black uppercase leading-tight">梦开始的地方...</h3>
                  <div className="text-neon-pink font-black uppercase text-xs tracking-widest mt-1">A new beginning</div>
                </div>
                <div className={`chunky-border px-3 py-1 text-xs font-black uppercase ${darkMode ? 'dark-surface-soft border-white' : 'bg-white'}`}>2022.09</div>
              </div>
              <p className={`font-bold mb-4 ${darkMode ? 'text-slate-200' : 'text-gray-700'}`}>
              你好同学，欢迎来到东北财经大学。
              </p>
              <JourneyImageFrame label="[[PQR_大学_毕业照/校园地标_IMAGE_PLACEHOLDER]]" glowClass="neon-box-glow-yellow" imageSrc={journeyImages[6]} onClick={() => setSelectedImage(journeyImages[6])} />
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className={`absolute -top-12 right-0 w-10 h-10 bg-neon-pink text-white font-black border-[3px] flex items-center justify-center transition-colors z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                  darkMode ? 'border-white hover:bg-[#0f172a] hover:text-white' : 'border-black hover:bg-white hover:text-black'
                }`}
              >
                X
              </button>

              <div className={`chunky-border shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden ${
                darkMode ? 'dark-surface border-white' : 'bg-white border-black'
              }`}>
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const LifeSplinters = ({ isDarkMode }: { isDarkMode?: boolean, key?: any }) => {
  const darkMode = isDarkMode ?? (typeof document !== 'undefined' && document.body.classList.contains('dark-mode'));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const splinters = [
    { tag: "LEVEL UP", title: "大学毕业 waiting", desc: "Level 4 学士成就达成，回忆满载。", time: "2026.06.20 // 10:30 AM" },
    { 
      tag: "EXPLORE", 
      title: "萌妹驼", 
      desc: "知道自己很可爱吗？", 
      time: "2026.01.07 // 15:38 PM",
      image: "/tuo.jpg"
    },
    { 
      tag: "MOMENT", 
      title: "F5 Forever", 
      desc: "海南这地方 后劲太大了", 
      time: "2026.01.04 // 17:55 PM",
      image: "/F5 forever.jpg"
    },
    { 
      tag: "LEVEL UP", 
      title: "二马留念", 
      desc: "让大马再一次伟大!", 
      time: "2025.05.11 // 07:21 PM",
      image: "/run2.jpg"
    },
    { 
      tag: "EXPLORE", 
      title: "还童这一块", 
      desc: "迎新舞台留念", 
      time: "2023.11.14 // 20:32 PM",
      image: "/dance.jpg"
    },
    { 
      tag: "MOMENT", 
      title: "宣传部团建留念", 
      desc: "时间像一头野驴", 
      time: "2023.09.10 // 19:19 PM",
      image: "/xcb photo.jpg"
    },
    { 
      tag: "LEVEL UP", 
      title: "首马达成", 
      desc: "成长是一条与自己较劲的路", 
      time: "2024.10.20 // 08:40 AM",
      image: "/run.jpg"
    },
    { 
      tag: "BREAKFAST", 
      title: "兰州人诱捕器", 
      desc: "兰州人懂这一桌的含金量", 
      time: "2023.07.28 // 07:57 PM",
      image: "/BREAKFAST.jpg"
    },
    { 
      tag: "MOMENT", 
      title: "爱来自KTV", 
      desc: "朋友是彼此青春的收藏家", 
      time: "2025.2.3//20.35PM",
      image: "/ktv-party.jpg"
    },
    { tag: "EXPLORE", title: "未来碎片 // 待解锁", desc: "持续探索中...", time: "2026.04.14 // --:-- --" },
    { tag: "MOMENT", title: "未来碎片 // 待解锁", desc: "持续记录中...", time: "2026.04.15 // --:-- --" },
    { tag: "LEVEL UP", title: "未来碎片 // 待解锁", desc: "持续进化中...", time: "2026.04.16 // --:-- --" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 max-w-7xl mx-auto px-4"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">LIFE SPLINTERS</h2>
        <div className="inline-block bg-black chunky-border px-6 py-2 -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-black uppercase tracking-widest text-white">生活碎片 // 记录进化瞬间</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {splinters.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.01 }}
            className={`card border-[4px] p-5 flex flex-col relative group transition-all ${
              darkMode
                ? 'dark-surface border-white'
                : 'bg-white border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            {/* Pin Decoration */}
            <div className="absolute -top-2 -right-2 z-20">
              <div className="w-6 h-6 bg-neon-yellow rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                <div className="w-1 h-1 bg-black rounded-full" />
              </div>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="bg-neon-pink chunky-border px-2 py-0.5 text-[10px] font-black text-white uppercase">
                {item.tag}
              </div>
              <div className="text-[10px] font-black text-neon-cyan uppercase tracking-tighter">
                {item.time}
              </div>
            </div>

            {/* 4:3 Hero Image Area */}
            <div 
              className={`aspect-[4/3] w-full border-[4px] mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-neon-pink transition-colors ${item.image ? 'cursor-pointer' : ''} ${
                darkMode ? 'dark-surface-soft border-white' : 'bg-gray-100 border-black'
              }`}
              onClick={() => item.image && setSelectedImage(item.image)}
            >
              {item.image ? (
                <img src={item.image} alt={item.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" decoding="async" />
              ) : (
                <div className={`text-[10px] font-black text-center uppercase p-4 z-10 leading-tight ${darkMode ? 'text-slate-400' : 'text-gray-400'}`}>
                  [[MOMENT_CAPTURE // 4:3 PHOTO // IMAGE_PLACEHOLDER]]
                  <br />
                  <span className="text-[8px] mt-2 block opacity-50">{item.title}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              {/* Corner Fold Effect */}
              <div className={`absolute top-0 right-0 w-6 h-6 border-l-2 border-b-2 -translate-y-1 translate-x-1 rotate-45 pointer-events-none ${
                darkMode ? 'bg-[#0f172a] border-white' : 'bg-white border-black'
              }`} />
            </div>

            {/* Description */}
            <div className="space-y-1">
              <h3 className="text-xl font-black uppercase tracking-tight leading-none">{item.title}</h3>
              <p className={`text-xs font-bold leading-tight ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>{item.desc}</p>
            </div>

            {/* ZS Mark */}
            <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 bg-black flex items-center justify-center text-white font-black text-[8px] border border-black">
                ZS
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Slogan */}
      <div className="w-full">
        <div className={`card border-[4px] p-8 relative overflow-hidden group hover:neon-shadow-pink transition-all cursor-default text-center ${
          darkMode
            ? 'dark-surface border-white'
            : 'bg-white border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <span className="text-3xl md:text-4xl font-black uppercase tracking-widest">
              积蓄星火  以待磅礴
            </span>
            <span className="hidden md:block text-neon-pink font-black text-3xl">//</span>
            <span className="text-2xl md:text-3xl font-black text-neon-pink uppercase tracking-tighter neon-glow-pink">
              Young at heart.
            </span>
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className={`absolute -top-12 right-0 w-10 h-10 bg-neon-pink text-white font-black border-[3px] flex items-center justify-center transition-colors z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                  darkMode ? 'border-white hover:bg-[#0f172a] hover:text-white' : 'border-black hover:bg-white hover:text-black'
                }`}
              >
                X
              </button>
              
              {/* Image Container */}
              <div className={`p-2 border-[4px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full flex items-center justify-center ${
                darkMode ? 'dark-surface border-white' : 'bg-white border-black'
              }`}>
                <img
                  src={selectedImage} 
                  alt="Enlarged view" 
                  className="max-w-full max-h-[80vh] object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TypingFooter = () => {
  const [text, setText] = useState("");
  const fullText = "去想全是问题  去做全是答案";
  const [isTyping, setIsTyping] = useState(false);

  const startTyping = () => {
    if (isTyping) return;
    setIsTyping(true);
    setText("");
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 100);
  };

  return (
    <div 
      className="mt-16 w-full card bg-neon-yellow border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-10 text-center cursor-pointer relative overflow-hidden group"
      onMouseEnter={startTyping}
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest text-black relative z-10 flex items-center justify-center gap-2 drop-shadow-[2px_2px_0_rgba(255,255,255,1)] transform hover:scale-105 transition-transform duration-300">
        <span className={`relative ${isTyping ? 'typing-cursor' : ''}`}>
          {text || "我不是无所不能  但一定竭尽所能"}
        </span>
      </div>
      <div className="absolute top-2 right-2 bg-black text-white chunky-border px-4 py-1 text-[10px] font-black uppercase">
        Youth Knows No Limits
      </div>
    </div>
  );
};

const PhotoCard = ({ card, i, isDarkMode }: { card: any, i: number, isDarkMode?: boolean, key?: any }) => {
  const darkMode = isDarkMode ?? (typeof document !== 'undefined' && document.body.classList.contains('dark-mode'));
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = card.image;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.15, 
        zIndex: 100, 
        y: -30,
        rotate: 0
      }}
      className={`absolute card border-[4px] p-4 w-52 md:w-64 transition-all cursor-pointer group ${isHovered ? 'neon-shadow-pink' : ''} ${
        darkMode
          ? 'dark-surface border-white'
          : 'bg-white border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'
      }`}
      style={{ 
        zIndex: isHovered ? 100 : card.zIndex, 
        top: card.top, 
        left: card.left, 
        transform: isHovered ? 'none' : `rotate(${card.rotation}deg)` 
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <div className={`${card.tagColor || 'bg-neon-pink'} chunky-border px-3 py-1 text-[10px] font-black text-white uppercase inline-block`}>
          {card.tag}
        </div>
        <div className="w-4 h-4 bg-neon-yellow rounded-full border-2 border-black" />
      </div>
      <div className={`border-[4px] relative overflow-hidden ${imageSrc ? '' : 'aspect-[4/3] flex items-center justify-center'} ${darkMode ? 'dark-surface-soft border-white' : 'bg-gray-100 border-black'}`}>
        <div className={`text-[10px] font-black text-center uppercase p-4 z-10 leading-tight ${imageSrc ? 'hidden' : ''} ${darkMode ? 'text-slate-400' : 'text-gray-400'}`}>
          [[生活照占位符: {card.label}]]
          {card.desc && <div className={`mt-2 text-[8px] normal-case ${darkMode ? 'text-slate-500' : 'text-gray-500'}`}>{card.desc}</div>}
        </div>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={card.label}
            className="block w-full h-auto relative z-10"
          />
        )}
        <div className="absolute inset-0 bg-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-neon-cyan/40 border border-black/20 -rotate-2" />
      </div>
      <div className="mt-3 flex justify-between items-center">
        <span className={`text-[10px] font-black uppercase tracking-widest ${darkMode ? 'text-slate-400' : 'text-gray-400'}`}>MOMENT_CAPTURE</span>
        <div className="w-6 h-6 bg-black flex items-center justify-center text-white font-black text-[8px]">ZS</div>
      </div>
    </motion.div>
  );
};

const AboutMe = ({ isDarkMode }: { isDarkMode?: boolean, key?: any }) => {
  const darkMode = isDarkMode ?? (typeof document !== 'undefined' && document.body.classList.contains('dark-mode'));
  const photoCardImages: Record<string, string> = {
    "Youthful spirit": "/huge smile.jpg",
    "Office day": "/office.jpg",
    "Honor moment": "/price.jpg",
    "MOMENT OF CALM": "/color.jpg",
    "Natural beauty": "/house.jpg",
    "be water": "/water wall.jpg",
  };
  const photoCards = [
    { tag: "Youthful spirit", label: "山顶俯瞰", rotation: -8, zIndex: 10, top: "5%", left: "5%" },
    { tag: "Office day", label: "深夜代码", rotation: 6, zIndex: 20, top: "12%", left: "30%" },
    { tag: "Honor moment", label: "灵感草图", rotation: -4, zIndex: 15, top: "45%", left: "8%" },
    { tag: "MOMENT OF CALM", label: "午后咖啡", rotation: 10, zIndex: 25, top: "38%", left: "35%" },
    { 
      tag: "Natural beauty", 
      label: "数据分析/原型", 
      desc: "利用 SQL 挖掘数据背后的故事",
      tagColor: "bg-neon-pink",
      rotation: -5, 
      zIndex: 30, 
      top: "8%", 
      left: "60%" 
    },
    { 
      tag: "be water", 
      label: "个人Logo/发布会照片", 
      desc: "探索创造，无限可能",
      tagColor: "bg-neon-pink",
      rotation: 12, 
      zIndex: 35, 
      top: "42%", 
      left: "65%" 
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 max-w-7xl mx-auto px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className={`card border-[4px] p-8 md:p-10 relative overflow-hidden ${
            darkMode
              ? 'dark-surface border-white'
              : 'bg-white border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
          }`}>
            <div className="absolute top-0 right-0 bg-neon-yellow chunky-border px-4 py-1 text-[10px] font-black uppercase">
              ABOUT  MASON
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
              关于我 //<br />
              <span className="text-neon-pink neon-glow-pink">ABOUT ME</span>
            </h2>
            
            <div className={`space-y-6 text-lg font-bold leading-relaxed ${darkMode ? 'text-slate-200' : 'text-gray-800'}`}>
              <p className={`text-2xl font-black uppercase tracking-widest mb-4 border-b-4 border-neon-cyan inline-block ${darkMode ? 'text-white' : 'text-black'}`}>READ. CREATE. INSPIRE.</p>
              <p>
              欢迎来到我vibe coding的个人网站，我是一名AI重度发烧友。
              </p>
              <p>
              我出生于 2004 年 3 月，在牛肉面的故乡长大。我的家庭氛围十分开明，这让我对一切有趣的新事物都充满了好奇心与求知欲，同时也极大的培养了我独立的能力和坚毅的品格。
              </p>
              <p>
              同时，我也是个忠实的户外党，我热爱登山、游泳，也常有去不同城市参加马拉松的计划。“浑身使不完的牛劲”这一块，可以说是非常权威（当然 我并不会锤同事的 哈哈哈）。
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="btn-pink px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                获取完整简历
              </button>
              <div className="flex gap-2">
                <a href="#" className={`chunky-border p-3 transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 inline-block ${
                  darkMode ? 'dark-surface text-white hover:bg-neon-yellow hover:text-black' : 'bg-white text-black hover:bg-neon-yellow'
                }`}>
                  <Github size={24} />
                </a>
                <a href="#" className={`chunky-border p-3 transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 inline-block ${
                  darkMode ? 'dark-surface text-white hover:bg-neon-pink hover:text-white' : 'bg-white text-black hover:bg-neon-pink hover:text-white'
                }`}>
                  <Linkedin size={24} />
                </a>
                <a href="#" className={`chunky-border p-3 transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 inline-block ${
                  darkMode ? 'dark-surface text-white hover:bg-neon-cyan hover:text-black' : 'bg-white text-black hover:bg-neon-cyan hover:text-white'
                }`}>
                  <Globe size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Scrapbook Photo Memos */}
        <div className="lg:col-span-7 relative h-[800px] lg:h-full min-h-[800px]">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }} />
          
          <div className="relative w-full h-full">
            {photoCards.map((card, i) => (
              <PhotoCard key={i} card={{ ...card, image: photoCardImages[card.tag] }} i={i} isDarkMode={darkMode} />
            ))}

            {/* Floating Compass Accent */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 right-10 opacity-20 pointer-events-none"
            >
              <Compass size={120} className="text-black" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Typing Animation Footer */}
      <TypingFooter />
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('首页');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    return () => document.body.classList.remove('dark-mode');
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white dark-mode' : 'bg-[#f4f4f0] text-black'} font-sans relative overflow-x-hidden transition-colors duration-300`}>
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 grid-pattern opacity-50 ${isDarkMode ? 'invert' : ''}`} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-pink/20 blur-[100px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/20 blur-[100px] rounded-full mix-blend-multiply" />
      </div>
      <FloatingDecorations />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <main className="flex-grow max-w-7xl mx-auto w-full px-4">
            <AnimatePresence mode="wait">
              {activeTab === '首页' && <Home key="home" setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
              {activeTab === '我的经历' && <Journey key="journey" isDarkMode={isDarkMode} />}
              {activeTab === '生活碎片' && <LifeSplinters key="splinters" isDarkMode={isDarkMode} />}
              {activeTab === '关于我' && <AboutMe key="about" isDarkMode={isDarkMode} />}
            </AnimatePresence>
        </main>
        
        <footer className={`border-t-4 py-10 px-4 mt-12 relative overflow-hidden ${isDarkMode ? 'dark-surface border-white' : 'border-black bg-white'}`}>
          <div className="max-w-7xl mx-auto text-center">
            <div className={`text-xl md:text-3xl font-black uppercase tracking-widest neon-glow-pink ${isDarkMode ? 'text-white' : 'text-black'}`}>
              探索・创造・无限可能 // <span className="text-neon-pink">DISCOVER. CREATE. INSPIRE.</span>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="bg-neon-cyan chunky-border px-3 py-1 text-[10px] font-black uppercase">Y2K_CORE</div>
              <div className="bg-neon-yellow chunky-border px-3 py-1 text-[10px] font-black uppercase">NEO_RETRO</div>
              <div className="bg-neon-pink text-white chunky-border px-3 py-1 text-[10px] font-black uppercase">VIBE_CHECK</div>
            </div>
            <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
          © 2026 MASON // BUILT WITH PASSION FOR DIGITAL CULTURE
        </div>
          </div>
        </footer>
      </div>
      
      {/* Bottom decorative bar from image 0 */}
      <div className="fixed bottom-0 left-0 w-full h-4 flex z-50">
        <div className="flex-1 bg-neon-pink border-t-4 border-black" />
        <div className="flex-1 bg-neon-cyan border-t-4 border-black" />
        <div className="flex-1 bg-neon-yellow border-t-4 border-black" />
        <div className="flex-1 bg-neon-pink border-t-4 border-black" />
        <div className="flex-1 bg-neon-cyan border-t-4 border-black" />
      </div>
    </div>
  );
}
