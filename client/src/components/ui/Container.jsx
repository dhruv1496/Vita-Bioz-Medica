import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export const Container = forwardRef(
  ({ className = '', size = 'xl', children, as: Component = 'div', ...props }, ref) => {
    const sizes = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };

    return (
      <Component
        ref={ref}
        className={cn('mx-auto px-6 sm:px-8 lg:px-12 w-full', sizes[size], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export default Container;