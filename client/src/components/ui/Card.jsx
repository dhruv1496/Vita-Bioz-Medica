import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export const Card = forwardRef(
  ({ className = '', children, hover = false, interactive = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300',
          hover && 'hover:shadow-xl hover:-translate-y-1',
          interactive && 'cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef(({ className = '', children, ...props }, ref) => (
  <div ref={ref} className={cn('px-6 py-6 border-b border-gray-100', className)} {...props}>
    {children}
  </div>
));

CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef(({ className = '', children, ...props }, ref) => (
  <h3 ref={ref} className={cn('font-serif text-xl font-semibold text-gray-900', className)} {...props}>
    {children}
  </h3>
));

CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef(({ className = '', children, ...props }, ref) => (
  <p ref={ref} className={cn('mt-2 text-gray-600 leading-relaxed', className)} {...props}>
    {children}
  </p>
));

CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef(({ className = '', children, ...props }, ref) => (
  <div ref={ref} className={cn('px-6 py-6', className)} {...props}>
    {children}
  </div>
));

CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef(({ className = '', children, ...props }, ref) => (
  <div ref={ref} className={cn('px-6 py-4 border-t border-gray-100 bg-gray-50', className)} {...props}>
    {children}
  </div>
));

CardFooter.displayName = 'CardFooter';

export const CardImage = forwardRef(({ className = '', src, alt, ...props }, ref) => (
  <img
    ref={ref}
    src={src}
    alt={alt}
    className={cn('w-full h-auto object-cover', className)}
    loading="lazy"
    {...props}
  />
));

CardImage.displayName = 'CardImage';

export default Card;