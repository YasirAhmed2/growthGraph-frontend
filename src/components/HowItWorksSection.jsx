import React from 'react';

const Step = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center space-y-6 relative z-10 group cursor-default">
        <div className="w-20 h-20 rounded-[1.5rem] bg-black/60 border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-emerald-500/50 group-hover:bg-emerald-900/10 group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] backdrop-blur-md">
            <span className="text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">{number}</span>
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors">{title}</h3>
        <p className="text-slate-400 text-lg font-light max-w-xs leading-relaxed group-hover:text-white transition-colors duration-500">
            {description}
        </p>
    </div>
);

const HowItWorksSection = () => {
    return (
        <section className="py-40 relative">
            <div className="container px-4 md:px-6 relative z-10">

                {/* Connecting Line */}
                <div className="hidden md:block absolute top-[68px] left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -z-10" />

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16">
                    <Step
                        number="1"
                        title="Input Your Journey"
                        description="Share your skills, projects, and goals in our high-signal structural form."
                    />
                    <Step
                        number="2"
                        title="AI Detects Patterns"
                        description="Our engine analyzes your data against thousands of successful engineering trajectories."
                    />
                    <Step
                        number="3"
                        title="Receive Evolution Map"
                        description="Get your archetype, gaps, and specific strategic moves instantly."
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
