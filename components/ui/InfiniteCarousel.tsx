import React from 'react';
import { motion } from 'framer-motion';

interface InfiniteCarouselProps {
    images: string[];
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ images }) => {
    // Triple the images to ensure seamless loop
    const duplicatedImages = [...images, ...images, ...images];

    return (
        <div className="w-full overflow-hidden py-10 relative group">
            {/* Gradient Overlays for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background-soft to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background-soft to-transparent z-10 pointer-events-none"></div>

            <motion.div
                className="flex gap-8"
                animate={{
                    x: [0, "-33.3333%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: images.length * 8,
                        ease: 'linear',
                    },
                }}
                style={{ width: 'fit-content' }}
            >
                {duplicatedImages.map((src, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[280px] h-[220px] md:w-[500px] md:h-[350px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 md:border-4 border-white transform transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
                    >
                        <img
                            src={src}
                            alt={`Transformação ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteCarousel;
