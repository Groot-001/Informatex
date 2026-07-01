import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface BrandedCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  showGlow?: boolean;
  showStatusDot?: boolean;
}

export const BrandedCTA = React.forwardRef<HTMLButtonElement, BrandedCTAProps>(
  ({ className, children, fullWidth = false, showGlow = true, showStatusDot = true, ...props }, ref) => {
    return (
      <div className={cn('relative', fullWidth && 'w-full')}>
        {/* Ambient pulsing glow halo behind the button */}
        {showGlow && (
          <div
            aria-hidden="true"
            className="cta-glow absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#003152] via-[#62aff0] to-[#003152] blur-lg pointer-events-none"
          />
        )}

        <button
          ref={ref}
          className={cn(
            'cta-shimmer group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-[#003152] via-[#0e649e] to-[#003152] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#003152]/40 transition-all duration-300 cursor-pointer',
            'hover:shadow-xl hover:shadow-[#62aff0]/40 hover:scale-[1.03] active:scale-[0.98]',
            'focus:outline-none focus:ring-2 focus:ring-[#62aff0] focus:ring-offset-2',
            fullWidth && 'w-full',
            className
          )}
          {...props}
        >
          <span className="relative z-10 flex items-center gap-2">
            {showStatusDot && (
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
            )}
            <span>{children}</span>
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    );
  }
);

BrandedCTA.displayName = 'BrandedCTA';