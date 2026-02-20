import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles = "rounded-full font-bold transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white shadow-xl shadow-primary/30 hover:bg-rose-gold hover:shadow-rose-gold/30",
    secondary: "bg-background-soft text-primary hover:bg-white border border-primary/10",
    outline: "bg-white/50 backdrop-blur-md border border-slate-200 text-slate-800 hover:bg-white shadow-sm hover:shadow-md",
    link: "text-primary hover:text-rose-gold p-0 rounded-none shadow-none hover:translate-y-0",
    dark: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;
