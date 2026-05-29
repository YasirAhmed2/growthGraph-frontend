import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import GrowthDashboard from '../components/GrowthDashboard';
import { Calendar, User, Briefcase, Plus, ArrowLeft, Trash2, Cpu, BarChart2 } from 'lucide-react';
import { API_BASE_URL } from '../config';

const Dashboard = () => {
    const { user, token, logout } = useAuth();
    const navigate = useNavigate();

    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRoadmap, setSelectedRoadmap] = useState(null);
    const [actionLoading, setActionLoading] = useState(false);

    // Fetch user history on mount
    useEffect(() => {
        if (!token) {
            navigate('/auth');
            return;
        }
        fetchHistory();
    }, [token, navigate]);

    const fetchHistory = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/api/history`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setHistory(response.data);
        } catch (error) {
            console.error('Failed to fetch blueprint history:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id, e) => {
        e.stopPropagation(); // Stop click from trigger card view
        if (!window.confirm('Are you sure you want to delete this career blueprint? This action cannot be undone.')) {
            return;
        }

        setActionLoading(true);
        try {
            await axios.delete(`${API_BASE_URL}/api/history/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setHistory(history.filter(item => item._id !== id));
            if (selectedRoadmap && selectedRoadmap._id === id) {
                setSelectedRoadmap(null);
            }
        } catch (error) {
            console.error('Failed to delete blueprint:', error);
            alert('Failed to delete. Please try again.');
        } finally {
            setActionLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const calculateProgress = (roadmap) => {
        if (!roadmap || roadmap.length === 0) return 0;
        const completed = roadmap.filter(step => step.isCompleted).length;
        return Math.round((completed / roadmap.length) * 100);
    };

    // --- Loading Skeleton ---
    if (loading) {
        return (
            <div className="min-h-screen container px-4 md:px-6 py-24 max-w-7xl mx-auto space-y-12 animate-pulse">
                <div className="space-y-4">
                    <div className="h-12 bg-white/5 rounded-2xl w-1/3" />
                    <div className="h-6 bg-white/5 rounded-2xl w-1/4" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-48 bg-white/5 border border-white/5 rounded-3xl" />
                    ))}
                </div>
            </div>
        );
    }

    // --- Detail Roadmap View Mode ---
    if (selectedRoadmap) {
        return (
            <div className="min-h-screen pt-24 pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-background to-background">
                <div className="container px-4 md:px-6 max-w-7xl mx-auto space-y-8">
                    
                    {/* Return Navigation */}
                    <button
                        onClick={() => { setSelectedRoadmap(null); fetchHistory(); }}
                        className="group flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white font-medium text-sm transition-all hover:scale-105 shadow-xl"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Saved Blueprints
                    </button>

                    <div className="flex flex-col items-center mb-8 text-center space-y-3">
                        <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold tracking-wider">
                            Saved Blueprint
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            {selectedRoadmap.archetype}
                        </h2>
                        <p className="text-slate-400 text-sm font-light">
                            Generated on {formatDate(selectedRoadmap.createdAt)}
                        </p>
                    </div>

                    {/* Renders the exact same high-fidelity GrowthDashboard */}
                    <GrowthDashboard 
                        data={selectedRoadmap} 
                        onReset={() => { setSelectedRoadmap(null); fetchHistory(); }} 
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-16">
            
            {/* Header Block & Profile Intro */}
            <div className="relative bg-gradient-to-r from-emerald-950/20 to-violet-950/20 backdrop-blur-3xl border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 pointer-events-none" />
                <div className="space-y-3 relative z-10">
                    <div className="flex items-center gap-3 text-emerald-400 text-sm font-bold uppercase tracking-wider">
                        <Cpu className="w-5 h-5 animate-pulse" />
                        AI Personal Terminal
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">{user?.name}</span>
                    </h1>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400 font-light">
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-500" />
                            {user?.email}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-slate-500" />
                            Joined {formatDate(user?.createdAt)}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                    <button
                        onClick={() => navigate('/#analyze-section')}
                        className="group flex items-center gap-2 px-6 py-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-slate-200 transition-all hover:scale-105 shadow-xl cursor-pointer"
                    >
                        <Plus className="w-4 h-4" />
                        New Analysis
                    </button>
                    <button
                        onClick={() => { logout(); navigate('/'); }}
                        className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white font-bold text-sm transition-all hover:bg-white/10"
                    >
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Main Area */}
            <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <BarChart2 className="w-6 h-6 text-emerald-400" />
                        Your Compiled DNA Blueprints
                        <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                            {history.length} Saved
                        </span>
                    </h2>
                </div>

                {/* Empty State */}
                {history.length === 0 ? (
                    <div className="bg-[#0A0A0A]/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-12 md:p-20 text-center space-y-6 max-w-3xl mx-auto shadow-2xl">
                        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                            <Cpu className="w-10 h-10 animate-bounce" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-white">No Career Blueprints Compiled</h3>
                            <p className="text-slate-400 font-light max-w-md mx-auto leading-relaxed">
                                Enter your engineering signals, skills, and strategic targets, and let our LLM architect compile your master developer roadmaps.
                            </p>
                        </div>
                        <button
                            onClick={() => navigate('/')}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-black font-extrabold text-sm tracking-wider hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] cursor-pointer"
                        >
                            Compile New Roadmap
                        </button>
                    </div>
                ) : (
                    /* History Blueprints Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {history.map((blueprint) => (
                            <div
                                key={blueprint._id}
                                onClick={() => setSelectedRoadmap(blueprint)}
                                className="group relative bg-[#0A0A0A]/50 backdrop-blur-2xl border border-white/5 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.05)] hover:border-emerald-500/20 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-widest border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 rounded-md">
                                            {formatDate(blueprint.createdAt)}
                                        </span>
                                        
                                        <button
                                            onClick={(e) => handleDelete(blueprint._id, e)}
                                            disabled={actionLoading}
                                            className="p-2 rounded-lg bg-white/0 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 text-slate-500 hover:text-red-400 transition-all cursor-pointer"
                                            title="Delete Blueprint"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                                            {blueprint.archetype}
                                        </h3>
                                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                                            <Briefcase className="w-3.5 h-3.5 text-slate-600" />
                                            Target: {blueprint.goal}
                                        </p>

                                        {/* Linear Progress Bar */}
                                        <div className="space-y-1.5 pt-2">
                                            <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                                                <span>Roadmap Status</span>
                                                <span className="text-emerald-400 font-bold">{calculateProgress(blueprint.roadmap)}%</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                                <div 
                                                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                                                    style={{ width: `${calculateProgress(blueprint.roadmap)}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-3 pl-3 border-l-2 border-slate-800 group-hover:border-emerald-500/30 transition-colors">
                                        {blueprint.evolutionSummary}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-white/5 mt-6 flex flex-wrap gap-1.5">
                                    {blueprint.strengthCluster?.slice(0, 3).map((strength, idx) => (
                                        <span key={idx} className="text-[10px] bg-white/5 border border-white/5 text-slate-300 px-2 py-1 rounded">
                                            {strength}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
