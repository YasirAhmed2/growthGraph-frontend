import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const RoadmapView = ({ roadmap }) => {
    if (!roadmap || roadmap.length === 0) return null;

    return (
        <div className="relative p-8 max-w-4xl mx-auto">
            {/* Central Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 via-indigo-500 to-transparent opacity-30 md:-translate-x-1/2 rounded-full" />

            <div className="space-y-12">
                {roadmap.map((step, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''} items-center`}>

                            {/* Timeline Node */}
                            <div className="absolute left-[14px] md:left-1/2 top-0 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#0A0A0A] border-4 border-violet-500 z-10 shadow-[0_0_20px_rgba(139,92,246,0.5)] flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-white" />
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-[calc(50%-40px)] ml-12 md:ml-0 group">
                                <div className="relative bg-[#1a1a1e] border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1">

                                    {/* Connector Line (Desktop) */}
                                    <div className={`hidden md:block absolute top-4 ${isEven ? 'left-full' : 'right-full'} w-10 h-[2px] bg-indigo-500/30`} />

                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold border border-violet-500/30">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                                                {step.step}
                                            </h3>
                                        </div>
                                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 flex items-center gap-1">
                                            <Clock size={12} />
                                            {step.estimatedTime}
                                        </span>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-violet-500/30 transition-colors">
                                        {step.description}
                                    </p>

                                    {/* Action Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold bg-black/40 px-2 py-1 rounded">
                                            Status: Pending
                                        </span>
                                        <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20 cursor-pointer hover:bg-indigo-500/20 transition-colors">
                                            Mark as Done
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Empty spacer for alignment */}
                            <div className="hidden md:block md:w-[calc(50%-40px)]" />
                        </div>
                    );
                })}

                {/* Final Goal Node */}
                <div className="relative flex flex-col items-center pt-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 p-[2px] shadow-[0_0_50px_rgba(16,185,129,0.4)] animate-pulse-slow z-10 flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                            <CheckCircle2 size={32} className="text-white" />
                        </div>
                    </div>
                    <div className="mt-4 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-bold tracking-widest uppercase text-sm">
                        Goal Achieved
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapView;
