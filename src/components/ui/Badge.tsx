import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'outline' | 'neutral' | 'success' | 'dark';
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'brand', className, children, ...props }) => {
  const variants = {
    brand: 'bg-[#003152]/10 text-[#003152] border border-[#003152]/20 font-semibold',
    outline: 'border border-slate-300 text-slate-700 bg-white font-medium',
    neutral: 'bg-slate-100 text-slate-700 font-medium',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold',
    dark: 'bg-[#003152] text-white font-medium'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs tracking-wide transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};