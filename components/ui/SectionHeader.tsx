import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    category?: string;
    title: React.ReactNode;
    subtitle?: string;
    center?: boolean;
    className?: string;
    showDivider?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    category,
    title,
    subtitle,
    center = false,
    className = '',
    showDivider = false
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`mb-12 md:mb-20 ${center ? 'text-center' : 'text-center md:text-left'} ${className}`}
        >
            {category && (
                <span className="text-rose-gold font-bold tracking-widest text-xs md:text-sm uppercase block mb-2">
                    {category}
                </span>
            )}
            <h2 className="text-2xl md:text-5xl font-bold text-slate-900 leading-tight mt-2">
                {title}
            </h2>
            {showDivider && (
                <div className={`w-20 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-primary to-rose-gold rounded-full mt-4 ${center ? 'mx-auto' : 'mx-auto md:ml-0'}`}></div>
            )}
            {subtitle && (
                <p className={`text-slate-600 max-w-2xl text-base md:text-lg mt-6 ${center ? 'mx-auto' : 'mx-auto md:ml-0'}`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeader;
