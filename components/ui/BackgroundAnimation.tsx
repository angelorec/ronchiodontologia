import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Floating Blobs */}
            <motion.div
                animate={{
                    x: [0, 150, 0],
                    y: [0, 80, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -150, 0],
                    y: [0, 120, 0],
                    scale: [1, 1.4, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-rose-gold/20 rounded-full blur-[150px]"
            />
            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, -200, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -bottom-60 left-1/3 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[130px]"
            />

            {/* Mesh/Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>
    );
};

export default BackgroundAnimation;
