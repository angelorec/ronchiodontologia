import React from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    background?: 'light' | 'white' | 'gradient-top' | 'gradient-bottom';
    noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({
    id,
    className = '',
    children,
    background = 'white',
    noPadding = false
}) => {
    const bgStyles = {
        white: "bg-white",
        light: "bg-background-light",
        'gradient-top': "bg-gradient-to-b from-primary-light/30 to-white",
        'gradient-bottom': "bg-gradient-to-t from-primary-light/30 to-white"
    };

    return (
        <section
            id={id}
            className={`relative overflow-hidden ${noPadding ? '' : 'py-20 md:py-32 px-6'} ${bgStyles[background]} ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;
