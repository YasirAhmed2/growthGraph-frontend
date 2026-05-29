import React from 'react';

const FeaturesSection = () => {
    const features = [
        {
            title: "Decode Your DNA",
            description: "Go beyond the resume. Our AI analyzes your unique combination of skills, projects, and goals to identify your true engineering archetype.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-violet-400 group-hover:text-violet-300 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
            ),
            color: "from-violet-600/20 to-indigo-600/20",
            border: "group-hover:border-violet-500/50"
        },
        {
            title: "Visualize Growth",
            description: "Stop guessing. See your professional evolution as a dynamic data visualization. Understand where you are strong and where you need to grow.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
            ),
            color: "from-fuchsia-600/20 to-pink-600/20",
            border: "group-hover:border-fuchsia-500/50"

        },
        {
            title: "Strategic Roadmap",
            description: "Concrete next steps. Receive high-leverage actions tailored to close your skill gaps and accelerate your journey to your dream role.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                </svg>
            ),
            color: "from-emerald-600/20 to-teal-600/20",
            border: "group-hover:border-emerald-500/50"
        }
    ];

    return (
        <section id="features" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Gradient Spotlights */}
            <div className="absolute top-1/2 left-0 w-1/3 h-full bg-violet-900/10 blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-1/3 h-full bg-indigo-900/10 blur-[120px] -translate-y-1/2 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-20 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Signal in the Noise.
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Understand your career trajectory in seconds, not years.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 ${feature.border} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/20 backdrop-blur-sm`}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

                            <div className="relative z-10 flex flex-col items-start h-full">
                                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-inner">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors text-base font-light">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
