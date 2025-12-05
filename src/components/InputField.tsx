import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  textarea?: boolean;
  rows?: number;
}

const InputField = forwardRef<HTMLInputElement & HTMLTextAreaElement, InputFieldProps>(
  ({ label, error, textarea = false, className, rows = 4, ...props }, ref) => {
    const inputClasses = cn(
      'w-full px-4 py-3 bg-card border border-border rounded-lg font-body text-foreground',
      'placeholder:text-muted-foreground/60',
      'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary',
      'transition-all duration-200',
      error && 'border-destructive focus:ring-destructive/30 focus:border-destructive',
      className
    );

    return (
      <div className="space-y-2">
        <label className="block font-heading font-medium text-foreground">
          {label}
        </label>
        {textarea ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={cn(inputClasses, 'resize-none')}
            rows={rows}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={inputClasses}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && (
          <p className="text-sm text-destructive font-medium">{error}</p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
