import React, { useEffect, useState } from 'react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import { Download } from 'lucide-react';
import RoadmapView from './RoadmapView';

const Card = ({ title, children, className = "", delay = 0 }) => (
    <div
        className={`group relative bg-[#0A0A0A]/60 backdrop-blur-2xl text-card-foreground p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl hover:shadow-[0_0_40px_rgba(124,58,237,0.1)] hover:border-violet-500/20 transition-all duration-700 hover:-translate-y-1 overflow-hidden ${className}`}
        style={{ animationDelay: `${delay}ms` }}
    >
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {title && (
            <h3 className="relative text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold mb-6 flex items-center gap-3">
                {title}
                <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent group-hover:from-violet-500/30 transition-all duration-500"></span>
            </h3>
        )}
        <div className="relative z-10 h-full">
            {children}
        </div>
    </div>
);

const CircularProgress = ({ value, label, size = 120, color = "#8b5cf6", delay = 0 }) => {
    const [progress, setProgress] = useState(0);
    const radius = size / 2 - 10;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        const timer = setTimeout(() => setProgress(value), delay + 300);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
                {/* Background Circle */}
                <svg className="transform -rotate-90 w-full h-full">
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-white/5"
                    />
                    {/* Foreground Circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={color}
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-[2000ms] cubic-bezier(0.16, 1, 0.3, 1)"
                        style={{ filter: `drop-shadow(0 0 4px ${color})` }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl font-bold text-white tabular-nums">{progress}%</span>
                </div>
            </div>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{label}</span>
        </div>
    );
};

const GrowthDashboard = ({ data, onReset }) => {
    const [isDownloading, setIsDownloading] = useState(false);

    if (!data) return null;

    const scores = data.growthScore || { explorationExecution: 50, depthBreadth: 50, consistencyIndex: 50 };

    const downloadPDF = async () => {
        setIsDownloading(true);
        const element = document.getElementById('growth-dashboard-content');

        try {
            // Adjust options for better quality and preventing cutoff
            const dataUrl = await toPng(element, {
                backgroundColor: '#000000',
                style: {
                    height: 'auto', // Ensure full height is captured
                    overflow: 'visible' // Prevent clipping
                }
            });

            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            const imgProps = pdf.getImageProperties(dataUrl);
            const imgHeight = (imgProps.height * pageWidth) / imgProps.width;

            let heightLeft = imgHeight;
            let position = 0;

            // Add first page
            pdf.addImage(dataUrl, 'PNG', 0, position, pageWidth, imgHeight);
            heightLeft -= pageHeight;

            // Add subsequent pages if content is longer than one page
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(dataUrl, 'PNG', 0, position, pageWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(`${data.archetype?.replace(/\s+/g, '_')}_Growth_Plan.pdf`);
        } catch (error) {
            console.error("PDF generation failed", error);
            alert("Could not generate PDF. Please try again.");
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">

            {/* Content Wrapper for PDF Capture */}
            <div id="growth-dashboard-content" className="p-4 bg-black/90 text-white rounded-3xl">
                {/* Header Info for PDF (Hidden usually, slightly visible here to ensure it's captured) */}
                <div className="mb-8 text-center space-y-2">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                        GrowthGraph AI
                    </h1>
                    <p className="text-slate-400 uppercase tracking-widest text-xs">Personalized Growth Blueprint</p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* 1. Identity Card (Large, Top Left) */}
                    <Card className="md:col-span-8 bg-gradient-to-br from-[#0f0f12] to-black" delay={0}>
                        <div className="flex flex-col md:flex-row h-full items-start md:items-center gap-8">
                            <div className="relative">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 p-[2px] shadow-[0_0_50px_rgba(124,58,237,0.3)] animate-pulse-slow">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center backdrop-blur-xl">
                                        <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 flex-1">
                                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                    {data.archetype || "The Unmapped Entity"}
                                </h2>
                                <p className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl border-l-[3px] border-violet-500/30 pl-6">
                                    {data.evolutionSummary}
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* 2. Key Metrics (Top Right) */}
                    <Card title="Growth Signals" className="md:col-span-4" delay={100}>
                        <div className="grid grid-cols-2 gap-4 h-full items-center">
                            <CircularProgress value={scores.depthBreadth} label="Depth" color="#8b5cf6" delay={200} size={100} />
                            <CircularProgress value={scores.explorationExecution} label="Execution" color="#10b981" delay={300} size={100} />
                        </div>
                    </Card>

                    {/* 3. Strategic Moves (Bottom Left) */}
                    <Card title="High Leverage Moves" className="md:col-span-5" delay={200}>
                        <ul className="space-y-4">
                            {data.nextMoves?.map((move, i) => (
                                <li key={i} className="group/item flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/30 hover:bg-white/10 transition-all cursor-default">
                                    <div className="mt-1 min-w-[24px] h-6 flex items-center justify-center rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold border border-violet-500/30">
                                        {i + 1}
                                    </div>
                                    <span className="text-slate-200 text-sm font-medium leading-relaxed group-hover/item:text-white transition-colors">
                                        {move}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    {/* 4. Skills & Gaps (Bottom Right) */}
                    <Card title="Skill Matrix" className="md:col-span-7" delay={300}>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    Current Strengths
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {data.strengthCluster?.map((skill, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-100 text-xs font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                                    Critical Gaps
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {data.skillGaps?.map((skill, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-100 text-xs font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* 5. Detailed Execution Roadmap (Full Width Bottom) */}
                    {data.roadmap && (
                        <Card title="Your Roadmap" className="md:col-span-12" delay={400}>
                            <RoadmapView roadmap={data.roadmap} />
                        </Card>
                    )}

                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4 pt-10 pb-20">
                <button
                    onClick={onReset}
                    className="group flex items-center gap-3 px-8 py-4 rounded-full bg-slate-800 border border-slate-700 text-white font-bold tracking-wide hover:bg-slate-700 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                >
                    <svg className="w-5 h-5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    Analyze New Profile
                </button>

                <button
                    onClick={downloadPDF}
                    disabled={isDownloading}
                    className="group flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 text-black font-bold tracking-wide hover:bg-emerald-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isDownloading ? (
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                        <Download className="w-5 h-5" />
                    )}
                    {isDownloading ? 'Downloading...' : 'Download PDF'}
                </button>
            </div>

        </div>
    );
};

export default GrowthDashboard;
