import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/utils';

export const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className = '',
      disabled = false,
      loading = false,
      fullWidth = false,
      type = 'button',
      onClick,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-light active:bg-primary-dark shadow-md hover:shadow-lg active:shadow-sm hover:-translate-y-0.5',
      secondary: 'bg-secondary text-white hover:bg-secondary-dark active:bg-secondary shadow-md hover:shadow-lg active:shadow-sm hover:-translate-y-0.5',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
      ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200',
      link: 'text-primary underline-offset-2 hover:underline',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs gap-1.5',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
      xl: 'px-10 py-5 text-lg',
    };

    const width = fullWidth ? 'w-full' : '';

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        disabled={disabled || loading}
        onClick={onClick}
        className={cn(baseStyles, variants[variant], sizes[size], width, className)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading && (
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
            {children}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;