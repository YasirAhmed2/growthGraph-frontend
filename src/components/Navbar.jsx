import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050510]/80 backdrop-blur-2xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
            <div className="container flex items-center justify-between px-4 md:px-6">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:scale-105 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 to-indigo-600/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white relative z-10 transition-transform group-hover:rotate-12">
                            <path d="M3 3v18h18" />
                            <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white group-hover:text-violet-200 transition-colors">GrowthGraph AI</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Features', 'About'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Features' ? '/#features' : item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group px-2 py-1"
                        >
                            {item}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-white/50 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => document.getElementById('analyze-section')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-white text-black px-6 text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                    >
                        <span className="relative flex items-center gap-2">
                            Get Started
                        </span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-400/0 via-violet-400/40 to-violet-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
