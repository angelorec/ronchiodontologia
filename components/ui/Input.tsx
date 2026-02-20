import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
    label: string;
    type?: 'text' | 'tel' | 'email' | 'textarea' | 'select';
    options?: string[];
    containerClassName?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    type = 'text',
    options,
    containerClassName = '',
    className = '',
    ...props
}) => {
    const baseClasses = "w-full bg-background-light border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none";

    return (
        <div className={containerClassName}>
            <label className="block text-sm font-bold mb-2 text-slate-700">{label}</label>

            {type === 'textarea' ? (
                <textarea
                    className={`${baseClasses} ${className}`}
                    {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
                />
            ) : type === 'select' ? (
                <select
                    className={`${baseClasses} text-slate-600 ${className}`}
                    {...props as React.SelectHTMLAttributes<HTMLSelectElement>}
                >
                    {options?.map(opt => (
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    className={`${baseClasses} ${className}`}
                    {...props as React.InputHTMLAttributes<HTMLInputElement>}
                />
            )}
        </div>
    );
};

export default Input;
