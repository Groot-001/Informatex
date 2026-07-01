import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useLenis } from '../../lib/SmoothScrollProvider';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogPortal = DialogPrimitive.Portal;

interface DialogContentProps {
  open: boolean;
  className?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
}

/**
 * shadcn/ui-style Dialog content, animated with Framer Motion via Radix's
 * forceMount pattern so both enter and exit transitions play smoothly.
 */
const DialogContent: React.FC<DialogContentProps> = ({
  open,
  className,
  children,
  showCloseButton = true,
}) => {
  const lenis = useLenis();

  // Radix already locks focus/scroll on the modal, but this project also uses
  // Lenis for smooth scrolling, which intercepts wheel/touch events directly
  // in JS and can keep animating the page scroll underneath the dialog.
  // Explicitly pause/resume Lenis (and enforce a native overflow lock as a
  // fallback) so the background is fully unscrollable while open.
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
        <DialogPortal forceMount>
          <DialogPrimitive.Overlay asChild forceMount>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm"
            />
          </DialogPrimitive.Overlay>

          <DialogPrimitive.Content asChild forceMount onOpenAutoFocus={(e) => e.preventDefault()}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className={cn(
                'fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2',
                'bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col',
                'focus:outline-none',
                className
              )}
            >
              {showCloseButton && (
                <DialogPrimitive.Close asChild>
                  <button
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#62aff0]"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </DialogPrimitive.Close>
              )}
              <div className="overflow-y-auto max-h-[90vh]">{children}</div>
            </motion.div>
          </DialogPrimitive.Content>
        </DialogPortal>
      )}
    </AnimatePresence>
  );
};

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-slate-600', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
};