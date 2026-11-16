import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export const Input = forwardRef(
  ({ className = '', type = 'text', error, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          'w-full px-4 py-3 text-base bg-white border rounded-xl transition-all duration-150',
          'placeholder:text-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 focus:border-primary',
          'disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed',
          error && 'border-red-400 focus:ring-red-200 focus:border-red-400',
          !error && 'border-gray-300 hover:border-gray-400',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export const Textarea = forwardRef(
  ({ className = '', error, disabled, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        rows={rows}
        className={cn(
          'w-full px-4 py-3 text-base bg-white border rounded-xl transition-all duration-150 resize-y min-h-[100px]',
          'placeholder:text-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 focus:border-primary',
          'disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed',
          error && 'border-red-400 focus:ring-red-200 focus:border-red-400',
          !error && 'border-gray-300 hover:border-gray-400',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export const Select = forwardRef(
  ({ className = '', error, disabled, options = [], placeholder, ...props }, ref) => {
    return (
      <select
        ref={ref}
        disabled={disabled}
        className={cn(
          'w-full px-4 py-3 text-base bg-white border rounded-xl transition-all duration-150 appearance-none',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 focus:border-primary',
          'disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed',
          error && 'border-red-400 focus:ring-red-200 focus:border-red-400',
          !error && 'border-gray-300 hover:border-gray-400',
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = 'Select';

export const Label = forwardRef(
  ({ className = '', htmlFor, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        className={cn('block text-sm font-medium text-gray-900 mb-2', className)}
        {...props}
      >
        {children}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
    );
  }
);

Label.displayName = 'Label';

export const FormField = forwardRef(
  ({ className = '', label, error, hint, children, required, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-1.5', className)} {...props}>
        {label && <Label htmlFor={props.id} required={required}>{label}</Label>}
        {children}
        {error && <p className="text-sm text-red-500" role="alert">{error}</p>}
        {hint && !error && <p className="text-sm text-gray-500">{hint}</p>}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export default Input;