import { useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useFloating, useClick, useInteractions, useDismiss, FloatingFocusManager } from '@floating-ui/react';
import { cn } from '../utils';
import { modalVariants } from './variants';
import type { ModalProps } from './types';

const positionVariants = {
  bottom: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 },
  },
  center: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
  },
};

export function IOSModal({
  isOpen,
  onClose,
  children,
  title,
  description,
  actions = [],
  size = 'md',
  position = 'bottom',
  variant = 'default',
  showCloseButton = true,
  closeOnOutsideClick = true,
  className,
}: ModalProps) {
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => !open && onClose(),
  });

  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePressEvent: 'mousedown',
    enabled: closeOnOutsideClick,
  });

  const { getFloatingProps } = useInteractions([click, dismiss]);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, handleEscape]);

  const showHeader = title || description || (showCloseButton && variant !== 'actionSheet');
  const isActionSheet = variant === 'actionSheet';

  return (
    <AnimatePresence>
      {isOpen && (
        <FloatingFocusManager context={context} modal={true}>
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
            aria-describedby={description ? 'modal-description' : undefined}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={closeOnOutsideClick ? onClose : undefined}
            />
            
            <motion.div
              ref={refs.setFloating}
              {...getFloatingProps()}
              variants={positionVariants[position]}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={cn(
                modalVariants({ size, variant, position }),
                className
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {showHeader && (
                <div className={cn(
                  'flex items-center',
                  isActionSheet ? 'pb-2 mb-2 border-b dark:border-gray-800' : ''
                )}>
                  {title && (
                    <h2 id="modal-title" className="text-lg font-semibold flex-1">
                      {title}
                    </h2>
                  )}
                  {showCloseButton && !isActionSheet && (
                    <button
                      onClick={onClose}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              )}

              {description && (
                <p id="modal-description" className="text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              )}

              <div className={cn(
                'flex-1',
                isActionSheet ? 'space-y-2' : ''
              )}>
                {children}
              </div>

              {actions.length > 0 && !isActionSheet && (
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  {actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.onClick}
                      className={cn(
                        'px-4 py-2 rounded-lg font-medium transition-colors',
                        'focus:outline-none focus:ring-2 focus:ring-blue-500',
                        action.variant === 'destructive' && 'bg-red-600 text-white hover:bg-red-700',
                        action.variant === 'outline' && 'border border-gray-300 hover:bg-gray-50',
                        action.variant === 'ghost' && 'hover:bg-gray-100',
                        !action.variant && 'bg-blue-600 text-white hover:bg-blue-700',
                        action.className
                      )}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}

              {isActionSheet && (
                <div className="space-y-2">
                  {actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.onClick}
                      className={cn(
                        'w-full px-4 py-3 text-left rounded-lg font-medium transition-colors',
                        'focus:outline-none focus:ring-2 focus:ring-blue-500',
                        action.variant === 'destructive' && 'text-red-600 hover:bg-red-50',
                        action.variant === 'ghost' && 'text-gray-600 hover:bg-gray-50',
                        !action.variant && 'text-blue-600 hover:bg-blue-50',
                        action.className
                      )}
                    >
                      {action.label}
                    </button>
                  ))}
                  {showCloseButton && (
                    <button
                      onClick={onClose}
                      className="w-full px-4 py-3 text-left rounded-lg font-medium transition-colors text-gray-600 hover:bg-gray-50 mt-2"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </FloatingFocusManager>
      )}
    </AnimatePresence>
  );
}