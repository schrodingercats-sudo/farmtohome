import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wide font-sans";
  
  const variants = {
    primary: "bg-beige-100 text-forest-900 hover:bg-white hover:shadow-lg hover:shadow-beige-100/20",
    secondary: "bg-fresh-500 text-forest-900 hover:bg-fresh-600",
    outline: "border border-beige-300/30 text-beige-100 hover:bg-beige-300 hover:text-forest-900 backdrop-blur-sm",
    ghost: "text-beige-100 hover:text-fresh-500 hover:bg-white/5"
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-12 px-8 text-sm",
    lg: "h-16 px-10 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;