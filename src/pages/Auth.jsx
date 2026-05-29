import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login, signup, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Redirect if already logged in
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (isAuthenticated) {
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, navigate, from]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const { name, email, password, confirmPassword } = formData;

        if (isLogin) {
            if (!email || !password) {
                setError('Please fill in all fields');
                setLoading(false);
                return;
            }
            const res = await login(email, password);
            if (!res.success) {
                setError(res.error);
                setLoading(false);
            }
        } else {
            if (!name || !email || !password) {
                setError('Please fill in all fields');
                setLoading(false);
                return;
            }
            if (password.length < 6) {
                setError('Password must be at least 6 characters');
                setLoading(false);
                return;
            }
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                setLoading(false);
                return;
            }
            const res = await signup(name, email, password);
            if (!res.success) {
                setError(res.error);
                setLoading(false);
            }
        }
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4 py-16 relative overflow-hidden">
            {/* Ambient Background Circles */}
            <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-violet-900/10 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-emerald-900/10 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '3s' }} />

            <div className="w-full max-w-md relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                
                {/* Unified Card Container */}
                <div className="relative bg-[#0A0A0A]/90 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
                    
                    {/* Sliding Mode Tab Controller */}
                    <div className="flex bg-white/5 rounded-full p-1 border border-white/5 max-w-[220px] mx-auto mb-8 relative">
                        <button
                            type="button"
                            onClick={() => { setIsLogin(true); setError(''); }}
                            className={`flex-1 text-center py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 relative z-10 ${isLogin ? 'text-black' : 'text-slate-400 hover:text-white'}`}
                        >
                            Log In
                        </button>
                        <button
                            type="button"
                            onClick={() => { setIsLogin(false); setError(''); }}
                            className={`flex-1 text-center py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 relative z-10 ${!isLogin ? 'text-black' : 'text-slate-400 hover:text-white'}`}
                        >
                            Sign Up
                        </button>
                        
                        {/* Slide Indicator Blob */}
                        <div 
                            className="absolute top-1 bottom-1 bg-white rounded-full transition-all duration-300 shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
                            style={{
                                width: 'calc(50% - 4px)',
                                left: isLogin ? '4px' : 'calc(50% + 0px)'
                            }}
                        />
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8 space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="text-slate-400 text-sm font-light">
                            {isLogin 
                                ? 'Sign in to access your growth roadmaps and blueprints' 
                                : 'Register to decode your career DNA and track your progress'
                            }
                        </p>
                    </div>

                    {/* Error Alerts */}
                    {error && (
                        <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm animate-in fade-in zoom-in-95 duration-300">
                            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Auth Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        
                        {/* Name Input (Signup Only) */}
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold tracking-widest text-slate-500">Name</label>
                                <div className="relative flex items-center">
                                    <User className="absolute left-4 w-5 h-5 text-slate-500" />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all h-14 text-base font-light"
                                        required={!isLogin}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold tracking-widest text-slate-500">Email Address</label>
                            <div className="relative flex items-center">
                                <Mail className="absolute left-4 w-5 h-5 text-slate-500" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all h-14 text-base font-light"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold tracking-widest text-slate-500">Password</label>
                            <div className="relative flex items-center">
                                <Lock className="absolute left-4 w-5 h-5 text-slate-500" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all h-14 text-base font-light"
                                    required
                                />
                            </div>
                        </div>

                        {/* Confirm Password (Signup Only) */}
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold tracking-widest text-slate-500">Confirm Password</label>
                                <div className="relative flex items-center">
                                    <Lock className="absolute left-4 w-5 h-5 text-slate-500" />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="••••••••"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all h-14 text-base font-light"
                                        required={!isLogin}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full h-14 rounded-xl bg-white text-black font-bold text-base tracking-wide hover:bg-slate-200 focus:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] group cursor-pointer disabled:opacity-50"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                        <span>Verifying...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{isLogin ? 'Log In' : 'Sign Up'}</span>
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Auth;
