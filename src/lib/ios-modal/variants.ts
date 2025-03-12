import { cva } from 'class-variance-authority';

export const modalVariants = cva(
  'relative z-50 w-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col gap-4',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        full: 'max-w-[95vw]',
      },
      variant: {
        default: 'rounded-t-2xl sm:rounded-2xl p-6',
        sheet: 'rounded-t-2xl p-6',
        alert: 'rounded-2xl p-4',
        actionSheet: 'rounded-t-2xl p-2',
      },
      position: {
        bottom: 'sm:mb-4',
        center: '',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      position: 'bottom',
    },
  }
);