import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export const Separator = forwardRef(
  ({ className = '', orientation = 'horizontal', decorative = true, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        aria-orientation={orientation}
        role={decorative ? 'none' : 'separator'}
        className={cn(
          'bg-gradient-to-r from-transparent via-gray-200 to-transparent',
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'w-[1px] h-full',
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';

export default Separator;