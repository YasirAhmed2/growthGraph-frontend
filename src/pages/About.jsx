import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 flex flex-col items-center">
            <div className="max-w-3xl space-y-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">

                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">BrainBloom</span>
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        We are building the intelligence layer for your career.
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8md:p-12 text-left space-y-6 backdrop-blur-md">
                    <p className="text-lg text-slate-400">
                        <strong className="text-white block mb-2 text-xl">Our Mission</strong>
                        GrowthGraph AI was born from a simple observation: most professionals guess their way through their careers. We believe that with the right data and intelligence, anyone can engineer their path to mastery.
                    </p>

                    <p className="text-lg text-slate-400">
                        <strong className="text-white block mb-2 text-xl">The Technology</strong>
                        Powered by advanced LLMs and proprietary archetyping models, our system doesn't just read your resume—it understands your potential. It maps the invisible connections between your projects, skills, and goals.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
