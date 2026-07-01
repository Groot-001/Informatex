import React from 'react';
import { Shield } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badgeText?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, badgeText }) => {
  return (
    <div className="relative bg-[#001c31] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#003152]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#62aff0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003152]/60 border border-[#62aff0]/30 text-xs font-semibold uppercase tracking-wider text-[#62aff0] mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>{badgeText}</span>
          </div>
        )}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};