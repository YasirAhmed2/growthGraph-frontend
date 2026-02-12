import React from 'react';

const Hero = () => {
    const scrollToAnalyze = () => {
        const element = document.getElementById('analyze-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToHowItWorks = () => {
        const element = document.getElementById('how-it-works');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section className="relative w-full pt-40 pb-48 lg:pt-52 lg:pb-60 overflow-hidden flex flex-col items-center justify-center">

            {/* Ambient Background Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center px-6 md:px-12">

                {/* Text Content */}
                <div className="flex flex-col items-start text-left space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                    <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-900/20 px-5 py-2 text-xs font-bold text-emerald-300 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.1)] tracking-widest uppercase hover:bg-emerald-900/30 transition-colors cursor-default">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-3 animate-pulse"></span>
                        v2.0 Intelligence Layer
                    </div>

                    <h1 className="text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] font-black tracking-tighter text-white drop-shadow-2xl">
                        Design Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-500/50 pb-4">
                            Trajectory.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-xl leading-relaxed font-light tracking-wide border-l-2 border-emerald-500/20 pl-8">
                        The first <span className="text-white font-medium">living portfolio</span> powered by AI. Transform your static resume into a dynamic evolution map.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto pt-6">
                        <button
                            onClick={scrollToAnalyze}
                            className="group relative h-16 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-black px-10 text-lg font-bold tracking-tight shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-emerald-50 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] focus-visible:outline-none cursor-pointer"
                        >
                            <span className="mr-3">Analyze Profile</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                <path d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                        </button>

                        <button
                            onClick={scrollToHowItWorks}
                            className="group h-16 w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-10 text-lg font-medium text-white transition-all hover:bg-white/10 hover:border-white/30 focus-visible:outline-none backdrop-blur-md cursor-pointer hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                        >
                            How It Works
                        </button>
                    </div>
                </div>

                {/* Visual Graphic Element */}
                <div className="relative hidden lg:flex items-center justify-center animate-in fade-in zoom-in-50 duration-1000 delay-200">
                    <div className="relative w-[600px] h-[600px] group/graphic">
                        {/* Orbital Rings */}
                        <div className="absolute inset-0 border border-emerald-500/10 rounded-full animate-[spin_40s_linear_infinite]" />
                        <div className="absolute inset-16 border border-teal-500/10 rounded-full animate-[spin_50s_linear_infinite_reverse]" />
                        <div className="absolute inset-32 border border-cyan-500/10 rounded-full animate-[spin_60s_linear_infinite]" />

                        {/* Center Glowing Core */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse-slow group-hover/graphic:bg-emerald-500/30 transition-colors duration-1000" />

                        {/* Floating Cards Mockup */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[16rem] bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-5 hover:scale-105 transition-transform duration-700 hover:shadow-[0_0_60px_rgba(16,185,129,0.2)] group hover:border-emerald-500/30">
                            <div className="flex items-center gap-4 mb-2 border-b border-white/5 pb-5">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-3 w-28 bg-white/10 rounded-full group-hover:bg-emerald-500/20 transition-colors" />
                                    <div className="h-2 w-20 bg-white/5 rounded-full" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                                </div>
                                <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-[65%] bg-teal-500/60 rounded-full" />
                                </div>
                            </div>
                            <div className="mt-auto flex justify-between items-center">
                                <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-wider group-hover:bg-emerald-500/20 transition-colors">
                                    Top 1% Growth
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge 1 */}
                        <div className="absolute top-[10%] right-[-5%] bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl animate-bounce delay-700 hover:border-emerald-500/40 hover:bg-black/80 transition-all cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.6)]" />
                                <span className="text-sm font-bold text-slate-200 tracking-tight">Visionary</span>
                            </div>
                        </div>

                        {/* Floating Badge 2 */}
                        <div className="absolute bottom-[10%] left-[-5%] bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl animate-bounce delay-1000 hover:border-cyan-500/40 hover:bg-black/80 transition-all cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
                                <span className="text-sm font-bold text-slate-200 tracking-tight">High Velocity</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Minimal Grid Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#10b98105_1px,transparent_1px),linear-gradient(to_bottom,#10b98105_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </section>
    );
};

export default Hero;
