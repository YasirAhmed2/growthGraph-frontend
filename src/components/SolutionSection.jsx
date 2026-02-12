import React from 'react';

const SolutionSection = () => {
    return (
        <section className="py-40 relative overflow-hidden bg-black/20">
            <div className="container px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-24 space-y-8">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                        Meet GrowthGraph AI
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
                        We built an AI-powered growth intelligence engine that analyzes your learning journey and generates a structured evolution map.
                    </p>
                </div>

                {/* Mock Card Grid Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-95 group/grid">

                    {/* Card 1: Archetype */}
                    <div className="md:col-span-1 bg-white/5 border border-white/5 rounded-[2rem] p-10 flex flex-col items-center justify-center gap-6 hover:bg-white/10 hover:border-emerald-500/30 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                        <div className="w-20 h-20 rounded-full bg-emerald-600/20 flex items-center justify-center animate-pulse-slow ring-1 ring-emerald-500/30">
                            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                        </div>
                        <div className="text-center space-y-2">
                            <h4 className="text-sm uppercase tracking-[0.2em] text-slate-500 font-bold">Archetype</h4>
                            <p className="text-2xl font-bold text-white tracking-tight">The Systems Architect</p>
                        </div>
                    </div>

                    {/* Card 2: Strategic Moves */}
                    <div className="md:col-span-2 bg-white/5 border border-white/5 rounded-[2rem] p-10 hover:bg-white/10 hover:border-teal-500/30 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.1)]">
                        <h4 className="text-sm uppercase tracking-[0.2em] text-slate-500 font-bold mb-8">Strategic Next Moves</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-5 p-5 bg-black/20 rounded-2xl border border-white/5 hover:border-teal-500/30 transition-colors">
                                <span className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold flex items-center justify-center border border-teal-500/20">1</span>
                                <span className="text-slate-200 text-lg font-medium">Prioritize Distributed Systems Design</span>
                            </div>
                            <div className="flex items-center gap-5 p-5 bg-black/20 rounded-2xl border border-white/5 hover:border-teal-500/30 transition-colors">
                                <span className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold flex items-center justify-center border border-teal-500/20">2</span>
                                <span className="text-slate-200 text-lg font-medium">Contribute to Open Source Infrastructure</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Growth Score */}
                    <div className="md:col-span-3 bg-gradient-to-r from-emerald-950/30 to-teal-950/30 border border-white/5 rounded-[2rem] p-12 flex flex-wrap justify-around items-center gap-10 hover:border-emerald-500/40 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] transition-all duration-500 hover:-translate-y-2">
                        <div className="text-center">
                            <h4 className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold mb-4">Growth Score</h4>
                            <span className="text-8xl font-black text-white tracking-tighter">85<span className="text-4xl text-emerald-500/50">/100</span></span>
                        </div>
                        <div className="h-20 w-px bg-white/10 hidden md:block" />
                        <div className="flex gap-12">
                            <div className="text-center group/stat">
                                <span className="block text-3xl font-bold text-white group-hover/stat:text-emerald-400 transition-colors">High</span>
                                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1 block">Velocity</span>
                            </div>
                            <div className="text-center group/stat">
                                <span className="block text-3xl font-bold text-white group-hover/stat:text-emerald-400 transition-colors">Deep</span>
                                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1 block">Focus</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
