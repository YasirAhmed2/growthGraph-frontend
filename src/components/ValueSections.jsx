import React from 'react';

export const DifferentiationSection = () => {
    return (
        <section className="py-32 border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="container px-4 md:px-6">
                <div className="max-w-5xl mx-auto text-center space-y-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
                        This Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Not</span> Another <br /> Resume Builder.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                        {/* Negatives */}
                        <div className="space-y-6 p-10 rounded-[2rem] bg-black/40 border border-white/5 hover:border-red-500/10 transition-colors">
                            <div className="flex items-center gap-4 text-slate-500">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                <span className="text-lg font-medium line-through">Not a template generator</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-500">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                <span className="text-lg font-medium line-through">Not a generic career quiz</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-500">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                <span className="text-lg font-medium line-through">Not static advice</span>
                            </div>
                        </div>

                        {/* Positives */}
                        <div className="space-y-6 p-10 rounded-[2rem] bg-emerald-900/10 border border-emerald-500/20 hover:bg-emerald-900/20 transition-colors">
                            <div className="flex items-center gap-4 text-white">
                                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span className="text-lg font-bold">AI-Powered Identity Intelligence</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span className="text-lg font-bold">Structured Skill Gap Analysis</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span className="text-lg font-bold">Strategic Growth Recommendations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const FinalCTASection = () => {
    return (
        <section className="py-40 relative overflow-hidden text-center bg-black/20">
            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center space-y-10">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                    Ready to Discover <br /> Your Growth Pattern?
                </h2>

                <button
                    onClick={() => document.getElementById('analyze-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative inline-flex h-20 items-center justify-center overflow-hidden rounded-full bg-white text-black px-12 text-xl font-bold tracking-tight shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_80px_rgba(16,185,129,0.5)] cursor-pointer hover:bg-emerald-50"
                >
                    Start Your Analysis
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-3 transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
                <p className="text-base font-bold text-emerald-500/80 uppercase tracking-widest">
                    Takes less than 60 seconds
                </p>
            </div>

        </section>
    );
}
