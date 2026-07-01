import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useLenis } from '../../lib/SmoothScrollProvider';

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;

type SheetSide = 'top' | 'bottom' | 'left' | 'right';

const sideVariants: Record<SheetSide, Variants> = {
  right: { closed: { x: '100%' }, open: { x: 0 } },
  left: { closed: { x: '-100%' }, open: { x: 0 } },
  top: { closed: { y: '-100%' }, open: { y: 0 } },
  bottom: { closed: { y: '100%' }, open: { y: 0 } },
};

const sidePosition: Record<SheetSide, string> = {
  right: 'inset-y-0 right-0 h-full w-[80vw] md:w-[50vw] lg:max-w-sm border-l border-slate-200',
  left: 'inset-y-0 left-0 h-full w-[80vw] md:w-[50vw] lg:max-w-sm border-r border-slate-200',
  top: 'inset-x-0 top-0 h-auto border-b border-slate-200',
  bottom: 'inset-x-0 bottom-0 h-auto border-t border-slate-200',
};

interface SheetContentProps {
  open: boolean;
  side?: SheetSide;
  className?: string;
  children: React.ReactNode;
}

const SheetContent: React.FC<SheetContentProps> = ({ open, side = 'right', className, children }) => {
  const lenis = useLenis();

  // Radix locks focus/scroll on the modal, but this project also uses Lenis
  // for smooth scrolling, which intercepts wheel/touch events directly in JS
  // and can keep animating the page scroll underneath the sheet. Explicitly
  // pause/resume Lenis (with a native overflow lock as a fallback) so the
  // background is fully unscrollable while the sheet is open.
  React.useEffect(() => {
    if (!open) return;

    lenis?.stop();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      lenis?.start();
      document.body.style.overflow = originalOverflow;
    };
  }, [open, lenis]);

  return (
    <AnimatePresence>
      {open && (
        <SheetPrimitive.Portal forceMount>
          <SheetPrimitive.Overlay asChild forceMount>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm"
            />
          </SheetPrimitive.Overlay>
          <SheetPrimitive.Content asChild forceMount onOpenAutoFocus={(e) => e.preventDefault()}>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants[side]}
              transition={{ type: 'spring', damping: 32, stiffness: 320 }}
              className={cn(
                'fixed z-50 bg-white shadow-2xl flex flex-col focus:outline-none',
                sidePosition[side],
                className
              )}
            >
              {children}
            </motion.div>
          </SheetPrimitive.Content>
        </SheetPrimitive.Portal>
      )}
    </AnimatePresence>
  );
};

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center justify-between px-6 py-5 border-b border-slate-100', className)} {...props} />
);
SheetHeader.displayName = 'SheetHeader';

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-lg font-extrabold text-slate-900 tracking-tight', className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn('text-xs text-slate-500', className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

const SheetCloseButton = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Close
    ref={ref}
    className={cn(
      'p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#003152] cursor-pointer',
      className
    )}
    {...props}
  >
    <X className="w-5 h-5" />
    <span className="sr-only">Close</span>
  </SheetPrimitive.Close>
));
SheetCloseButton.displayName = 'SheetCloseButton';

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetCloseButton };