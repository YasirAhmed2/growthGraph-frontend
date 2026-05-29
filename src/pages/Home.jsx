import React, { useState } from 'react';
import Hero from '../components/Hero';
import VisualExplanationSection from '../components/VisualExplanationSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import HowItWorksSection from '../components/HowItWorksSection';
import { DifferentiationSection, FinalCTASection } from '../components/ValueSections';
import GrowthForm from '../components/GrowthForm';
import GrowthDashboard from '../components/GrowthDashboard';
import RevealOnScroll from '../components/RevealOnScroll';

const Home = () => {
    const [analysisResult, setAnalysisResult] = useState(null)

    const handleAnalysisComplete = (result) => {
        setAnalysisResult(result)
        setTimeout(() => {
            const element = document.getElementById('results-section');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleReset = () => {
        setAnalysisResult(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (analysisResult) {
        return (
            <div className="min-h-screen pt-24 pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-background to-background">
                <div id="results-section" className="container px-4 md:px-6 animate-in fade-in zoom-in-95 duration-700 ease-out fill-mode-forwards max-w-7xl mx-auto">
                    <div className="flex flex-col items-center mb-16 text-center space-y-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-widest uppercase mb-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                            Analysis Complete
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-lg">
                            Your Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Blueprint</span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                            AI-Powered Analysis based on your unique signals and career goals.
                        </p>
                    </div>
                    <GrowthDashboard data={analysisResult} onReset={handleReset} />
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden relative">

            {/* Living Gradient Background Layer */}
            <div className="fixed inset-0 -z-50 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#10b98120,transparent_70%)] animate-pulse-slow" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000000,rgba(16,185,129,0.03),#00000000)] animate-gradient-mesh bg-[length:200%_200%]" />
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />
            </div>

            <Hero />

            <RevealOnScroll delay={100}>
                <VisualExplanationSection />
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
                <ProblemSection />
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
                <SolutionSection />
            </RevealOnScroll>

            <div id="how-it-works">
                <RevealOnScroll delay={100}>
                    <HowItWorksSection />
                </RevealOnScroll>
            </div>

            <RevealOnScroll delay={100}>
                <DifferentiationSection />
            </RevealOnScroll>

            <div id="analyze-section" className="relative py-40 w-full flex flex-col items-center justify-center p-4 overflow-hidden">
                <div className="container max-w-5xl space-y-20 z-10">
                    <RevealOnScroll>
                        <div className="text-center space-y-6">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                                Decode Your DNA
                            </h2>
                            <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                                Input your raw signals. We'll map the rest.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <GrowthForm onAnalysisComplete={handleAnalysisComplete} />
                    </RevealOnScroll>
                </div>
            </div>

            <RevealOnScroll delay={100}>
                <FinalCTASection />
            </RevealOnScroll>
        </div>
    );
}

export default Home;
