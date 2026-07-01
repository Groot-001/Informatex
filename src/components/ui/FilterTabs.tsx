import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FilterTabsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
  className?: string;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ categories, selected, onSelect, className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const checkScrollPosition = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftFade(el.scrollLeft > 4);
    setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, [checkScrollPosition, categories]);

  // Scroll the active tab into view whenever selection changes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const activeBtn = el.querySelector<HTMLButtonElement>('[data-active="true"]');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selected]);

  const scrollByAmount = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className={cn('relative w-full', className)}>
      {/* Left fade + arrow (mobile/tablet only) */}
      {showLeftFade && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none sm:hidden" />
          <button
            onClick={() => scrollByAmount(-140)}
            aria-label="Scroll filters left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 sm:hidden"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Scrollable tab row */}
      <div
        ref={scrollRef}
        onScroll={checkScrollPosition}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-1 py-0.5"
      >
        {categories.map((cat) => {
          const isActive = selected === cat;
          return (
            <button
              key={cat}
              data-active={isActive}
              onClick={() => onSelect(cat)}
              className={cn(
                'shrink-0 snap-start px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer',
                isActive
                  ? 'bg-[#003152] text-white shadow-md shadow-[#003152]/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Right fade + arrow (mobile/tablet only) */}
      {showRightFade && (
        <>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none sm:hidden" />
          <button
            onClick={() => scrollByAmount(140)}
            aria-label="Scroll filters right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 sm:hidden"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
};