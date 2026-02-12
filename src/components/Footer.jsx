import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-6 mt-auto border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="container flex flex-col items-center justify-center gap-1 text-center md:flex-row md:gap-8">
                <p className="text-xs text-muted-foreground/80 font-medium tracking-wide">
                    &copy; 2026 GrowthGraph AI
                </p>
                <div className="hidden md:block w-1 h-1 rounded-full bg-border"></div>
                <p className="text-xs text-muted-foreground/80 font-medium tracking-wide">
                    Built for <span className="text-foreground tracking-tight">BrainBloom</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
