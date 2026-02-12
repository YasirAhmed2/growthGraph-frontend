import React, { useState } from 'react';
import axios from 'axios';

const GrowthForm = ({ onAnalysisComplete }) => {
    const [formData, setFormData] = useState({
        skills: '',
        projects: '',
        learningFocus: '',
        goal: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/analyze', formData);
            // Simulate minimum loading time for better UX
            setTimeout(() => {
                if (onAnalysisComplete) {
                    onAnalysisComplete(response.data);
                }
                setLoading(false);
            }, 1500);

        } catch (error) {
            console.error("Error analyzing growth:", error);
            setLoading(false);
        }
    };

    return (
        <div className="w-full relative max-w-2xl mx-auto">
            <div className="relative bg-[#0A0A0A]/90 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">

                <h3 className="text-xl font-medium text-white mb-8 border-b border-white/5 pb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                    Input Parameters
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-slate-500">Core Skills</label>
                        <textarea
                            name="skills"
                            placeholder="Languages, frameworks, tools..."
                            value={formData.skills}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all min-h-[80px] resize-none text-base font-light"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-slate-500">Key Projects</label>
                        <textarea
                            name="projects"
                            placeholder="What have you built? What was the impact?"
                            value={formData.projects}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all min-h-[80px] resize-none text-base font-light"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold tracking-widest text-slate-500">Current Focus</label>
                            <input
                                type="text"
                                name="learningFocus"
                                placeholder="What are you learning?"
                                value={formData.learningFocus}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all h-14 text-base font-light"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold tracking-widest text-slate-500">Target Role</label>
                            <input
                                type="text"
                                name="goal"
                                placeholder="e.g. Senior Backend Engineer"
                                value={formData.goal}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all h-14 text-base font-light"
                                required
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-16 rounded-xl bg-white text-black font-bold text-lg tracking-wide hover:bg-slate-200 focus:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                    <span>Processing...</span>
                                </>
                            ) : (
                                <>
                                    <span>Generate Blueprint</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GrowthForm;
