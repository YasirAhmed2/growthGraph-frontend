import React from 'react';

const VisualExplanationSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT: Text */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight">
                            Static resumes hide your evolution. <br />
                            <span className="text-slate-500">Skill lists lack direction.</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-light leading-relaxed max-w-lg">
                            Most people don’t know their learning identity. Without data, career growth is just guessing.
                        </p>
                    </div>

                    {/* RIGHT: Visual Illustration */}
                    <div className="relative group">
                        {/* Abstract "Growth Graph" Graphic */}
                        <div className="relative w-full aspect-square max-w-md mx-auto bg-black/40 backdrop-blur-3xl rounded-full border border-white/5 p-8 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-1000">
                            {/* Orbital Rings */}
                            <div className="absolute inset-0 border border-emerald-500/10 rounded-full animate-[spin_30s_linear_infinite]" />
                            <div className="absolute inset-8 border border-teal-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                            <div className="absolute inset-20 border border-emerald-500/20 rounded-full animate-pulse-slow active:scale-95 transition-transform" />

                            {/* Central Nodes */}
                            <div className="relative z-10 grid grid-cols-2 gap-6 scale-110">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center backdrop-blur-md hover:bg-emerald-500/30 transition-colors">
                                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-teal-600/20 border border-teal-500/40 flex items-center justify-center backdrop-blur-md translate-y-4 hover:bg-teal-500/30 transition-colors">
                                    <div className="w-2.5 h-2.5 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.8)]" />
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center backdrop-blur-md -translate-y-2 hover:bg-cyan-500/30 transition-colors">
                                    <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-lime-600/20 border border-lime-500/40 flex items-center justify-center backdrop-blur-md translate-y-2 hover:bg-lime-500/30 transition-colors">
                                    <div className="w-2.5 h-2.5 bg-lime-400 rounded-full shadow-[0_0_15px_rgba(132,204,22,0.8)]" />
                                </div>
                            </div>

                            {/* Connecting Lines */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[1px] h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-45 transform" />
                                <div className="w-[1px] h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent -rotate-45 transform absolute" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisualExplanationSection;
