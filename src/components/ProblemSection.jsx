import React from 'react';

const ProblemCard = ({ title, description, icon }) => (
    <div className="group relative p-10 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] backdrop-blur-sm">
        <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-500">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{title}</h3>
        <p className="text-slate-400 font-light leading-relaxed text-lg">
            {description}
        </p>
    </div>
);

const ProblemSection = () => {
    return (
        <section className="py-40 relative">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                        The Problem With <br /> Modern Portfolios
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProblemCard
                        title="Static Skill Lists"
                        description="Traditional resumes are flat lists. They show what you did, but miss the trajectory of where you're going."
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
                    />
                    <ProblemCard
                        title="No Strategic Direction"
                        description="Learning random tools without a plan leads to fragmentation. You need a cohesive strategy, not just tutorials."
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>}
                    />
                    <ProblemCard
                        title="Hidden Skill Gaps"
                        description="You don't know what you don't know. Blind spots in your stack can stall your growth for years."
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
