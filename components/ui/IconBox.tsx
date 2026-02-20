import React from 'react';

interface IconBoxProps {
    icon: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'soft' | 'white';
    size?: 'sm' | 'md' | 'lg';
}

const IconBox: React.FC<IconBoxProps> = ({
    icon,
    className = '',
    variant = 'soft',
    size = 'md'
}) => {
    const variants = {
        primary: "bg-primary text-white shadow-lg shadow-primary/30",
        soft: "bg-primary/10 text-primary",
        white: "bg-white text-primary shadow-sm"
    };

    const sizes = {
        sm: "w-10 h-10",
        md: "w-12 h-12",
        lg: "w-16 h-16"
    };

    return (
        <div className={`${sizes[size]} rounded-full flex items-center justify-center shrink-0 ${variants[variant]} ${className}`}>
            {icon}
        </div>
    );
};

export default IconBox;
