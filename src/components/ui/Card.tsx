import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, hoverEffect = false, children, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 overflow-hidden',
        hoverEffect && 'hover:shadow-xl hover:-translate-y-1 hover:border-[#003152]/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};