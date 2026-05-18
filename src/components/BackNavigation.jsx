import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackNavigation = ({ onBackClick, label = "Back" }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {scrolled && (
                <motion.div 
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    className="fixed top-20 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 py-4"
                >
                    <div className="max-w-7xl mx-auto flex items-center">
                        <button 
                            onClick={onBackClick} 
                            className="flex items-center gap-2 text-slate-500 hover:text-corex-accent transition-colors font-black uppercase tracking-widest text-[10px]"
                        >
                            <ArrowLeft className="h-4 w-4" /> {label}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BackNavigation;
