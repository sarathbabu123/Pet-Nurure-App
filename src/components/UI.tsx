import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'surface' | 'ghost';
  className?: string;
  pill?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  pill = true 
}: ButtonProps) {
  const variants = {
    primary: 'bg-primary text-on-primary shadow-[0_16px_32px_rgba(132,84,0,0.15)]',
    secondary: 'bg-secondary text-on-secondary shadow-[0_16px_32px_rgba(1,110,33,0.15)]',
    tertiary: 'bg-tertiary text-on-tertiary shadow-[0_16px_32px_rgba(45,100,130,0.15)]',
    surface: 'bg-surface-container-lowest text-on-surface border border-outline-variant/15',
    ghost: 'bg-surface-container-high text-on-surface-variant'
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2 py-4 px-6 font-headline font-bold transition-all duration-200
        ${pill ? 'rounded-full' : 'rounded-xl'}
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'low' | 'default' | 'high' | 'highest' | 'lowest';
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    lowest: 'bg-surface-container-lowest',
    low: 'bg-surface-container-low',
    default: 'bg-surface-container',
    high: 'bg-surface-container-high',
    highest: 'bg-surface-container-highest'
  };

  return (
    <div className={`rounded-xl p-6 transition-all duration-300 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

interface InputProps {
  placeholder?: string;
  type?: string;
  className?: string;
  label?: string;
}

export function Input({ placeholder, type = 'text', className = '', label }: InputProps) {
  return (
    <div className="space-y-2 w-full">
      {label && <label className="font-headline text-sm font-bold text-on-surface-variant ml-2">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={`
          w-full bg-surface-container-highest border-none rounded-lg py-4 px-5 font-body 
          focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/50 outline-none
          ${className}
        `}
      />
    </div>
  );
}
