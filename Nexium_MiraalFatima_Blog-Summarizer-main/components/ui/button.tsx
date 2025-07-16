/// FILE: components/ui/button.tsx
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500',
        outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
        ghost: 'text-blue-700 hover:bg-blue-50'
      },
      size: {
        sm: 'px-3 py-1 text-sm',
        md: 'px-5 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
});

Button.displayName = 'Button';
