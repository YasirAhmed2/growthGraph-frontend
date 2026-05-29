import React, { useState } from 'react';
import axios from 'axios';
import { Sparkles, Plus, X, ChevronRight, Lightbulb } from 'lucide-react';

const COMMON_SKILLS = [
    "JavaScript", "Python", "React", "Node.js", "TypeScript", "Java",
    "C++", "Go", "AWS", "Docker", "Kubernetes", "SQL", "MongoDB", "GraphQL"
];

const GrowthForm = ({ onAnalysisComplete }) => {
    const [formData, setFormData] = useState({
        skills: [],
        projects: '',
        learningFocus: '',
        goal: ''
    });
    const [skillInput, setSkillInput] = useState('');
    const [suggestedProjects, setSuggestedProjects] = useState([]);
    const [loadingSuggestions, setLoadingSuggestions] = useState(false);
    const [loading, setLoading] = useState(false);

    // --- Skill Handling ---
    const handleSkillAdd = (skill) => {
        if (skill && !formData.skills.includes(skill)) {
            setFormData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
        }
        setSkillInput('');
    };

    const handleSkillRemove = (skillToRemove) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.filter(s => s !== skillToRemove)
        }));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSkillAdd(skillInput.trim());
        }
    };

    // --- Project Suggestions ---
    const fetchProjectSuggestions = async () => {
        if (formData.skills.length === 0) return;

        setLoadingSuggestions(true);
        try {
            const response = await axios.post('http://localhost:5000/api/suggest-projects', {
                skills: formData.skills.join(', ')
            });
            setSuggestedProjects(response.data);
        } catch (error) {
            console.error("Failed to fetch suggestions", error);
        } finally {
            setLoadingSuggestions(false);
        }
    };

    const handleProjectSelect = (project) => {
        const projectString = `${project.title}: ${project.description}`;
        setFormData(prev => ({
            ...prev,
            projects: prev.projects ? `${prev.projects}\n- ${projectString}` : `- ${projectString}`
        }));
    };

    // --- General Handling ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Convert skills array back to string for the API format if needed, 
            // or modify backend to accept array. Keeping string for compatibility with existing backend logic.
            const payload = {
                ...formData,
                skills: formData.skills.join(', ')
            };

            const response = await axios.post('http://localhost:5000/api/analyze', payload);

            setTimeout(() => {
                if (onAnalysisComplete) {
                    onAnalysisComplete(response.data);
                }
                setLoading(false);
            }, 1000);

        } catch (error) {
            console.error("Error analyzing growth:", error);
            setLoading(false);
        }
    };

    return (
        <div className="w-full relative max-w-3xl mx-auto">
            <div className="relative bg-[#0A0A0A]/90 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">

                <h3 className="text-xl font-medium text-white mb-8 border-b border-white/5 pb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                    Growth Parameters
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Skills Section */}
                    <div className="space-y-3">
                        <label className="text-xs uppercase font-bold tracking-widest text-slate-500 flex justify-between">
                            Core Skills & Stack
                            <span className="text-violet-400">{formData.skills.length} selected</span>
                        </label>

                        <div className="flex flex-wrap gap-2 mb-3">
                            {COMMON_SKILLS.slice(0, 8).map(skill => (
                                <button
                                    key={skill}
                                    type="button"
                                    onClick={() => handleSkillAdd(skill)}
                                    className={`px-3 py-1.5 text-xs rounded-full border transition-all ${formData.skills.includes(skill) ? 'bg-violet-500/20 border-violet-500 text-violet-200' : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30'}`}
                                >
                                    + {skill}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2 p-3 bg-white/5 border border-white/10 rounded-xl min-h-[60px] focus-within:border-violet-500/50 transition-colors">
                            {formData.skills.map((skill, idx) => (
                                <span key={idx} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-violet-600/20 border border-violet-500/30 text-violet-200 text-sm">
                                    {skill}
                                    <button type="button" onClick={() => handleSkillRemove(skill)} className="hover:text-white"><X size={14} /></button>
                                </span>
                            ))}
                            <div className="flex-1 flex min-w-[200px]">
                                <input
                                    type="text"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Type custom skill & press Enter..."
                                    className="bg-transparent outline-none flex-1 text-white placeholder:text-slate-500 h-8"
                                />
                                {skillInput && (
                                    <button
                                        type="button"
                                        onClick={() => handleSkillAdd(skillInput.trim())}
                                        className="text-xs text-violet-400 hover:text-white px-2 uppercase font-bold tracking-wider"
                                    >
                                        Add
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>


                    {/* Projects Section */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <label className="text-xs uppercase font-bold tracking-widest text-slate-500">Portfolio & Projects</label>
                            {formData.skills.length > 0 && (
                                <button
                                    type="button"
                                    onClick={fetchProjectSuggestions}
                                    className="text-xs flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                                    disabled={loadingSuggestions}
                                >
                                    {loadingSuggestions ? (
                                        <span className="animate-pulse">Fetching ideas...</span>
                                    ) : (
                                        <>
                                            <Sparkles size={14} />
                                            AI Suggestions
                                        </>
                                    )}
                                </button>
                            )}
                        </div>

                        {suggestedProjects.length > 0 && (
                            <div className="grid grid-cols-1 gap-2 animate-in fade-in slide-in-from-top-2 duration-500 mb-4">
                                {suggestedProjects.map((p, i) => (
                                    <div key={i} onClick={() => handleProjectSelect(p)} className="cursor-pointer group relative p-3 rounded-lg bg-gradient-to-r from-emerald-900/10 to-teal-900/10 border border-emerald-500/20 hover:border-emerald-500/50 transition-all">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-emerald-200 text-sm font-medium flex items-center gap-2">
                                                    <Lightbulb size={12} /> {p.title}
                                                </h4>
                                                <p className="text-slate-400 text-xs mt-1">{p.description}</p>
                                            </div>
                                            <Plus size={16} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <textarea
                            name="projects"
                            placeholder="Describe what you've built (or select suggestions above)..."
                            value={formData.projects}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all min-h-[100px] text-base font-light leading-relaxed"
                        />
                    </div>

                    {/* Inputs Grid */}
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
                            <label className="text-xs uppercase font-bold tracking-widest text-slate-500">Career Goal</label>
                            <input
                                type="text"
                                name="goal"
                                placeholder="Target role (e.g. Senior Architect)"
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
                            className="w-full h-16 rounded-xl bg-white text-black font-bold text-lg tracking-wide hover:bg-slate-200 focus:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                    <span>Processing Signals...</span>
                                </>
                            ) : (
                                <>
                                    <span>Generate Blueprint</span>
                                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default GrowthForm;
