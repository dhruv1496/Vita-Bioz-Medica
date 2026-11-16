import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export const Badge = forwardRef(
  ({ className = '', variant = 'primary', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary-muted text-primary',
      secondary: 'bg-secondary-light text-secondary-dark',
      success: 'bg-green-50 text-green-700',
      warning: 'bg-amber-50 text-amber-700',
      danger: 'bg-red-50 text-red-700',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
      ghost: 'bg-gray-100 text-gray-700',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;