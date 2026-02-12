import React from 'react';

const FinalCTASection = () => {
    const scrollToTop = () => {
        const element = document.getElementById('analyze-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 md:py-32 relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/20 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 space-y-10">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
                    Ready to Discover <br /> Your Growth Pattern?
                </h2>

                <button
                    onClick={scrollToTop}
                    className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white text-black px-12 text-lg font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] focus:outline-none cursor-pointer"
                >
                    <span className="mr-2">Start Your Analysis</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>

                <p className="text-slate-500 text-sm font-medium tracking-wide uppercase">
                    Takes less than 60 seconds
                </p>
            </div>
        </section>
    );
};

export default FinalCTASection;
