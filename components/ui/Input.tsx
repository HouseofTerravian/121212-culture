import { clsx } from 'clsx'
import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={clsx(
          'w-full bg-background border border-white/15 rounded-md px-4 py-3 text-white placeholder-white/30 transition-colors duration-300 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red/50',
          error && 'border-brand-red/60',
          className
        )}
        {...props}
      />
      {error && <p className="text-brand-red text-xs mt-1">{error}</p>}
    </div>
  )
)
Input.displayName = 'Input'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={id}
        rows={5}
        className={clsx(
          'w-full bg-background border border-white/15 rounded-md px-4 py-3 text-white placeholder-white/30 transition-colors duration-300 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red/50 resize-y',
          error && 'border-brand-red/60',
          className
        )}
        {...props}
      />
      {error && <p className="text-brand-red text-xs mt-1">{error}</p>}
    </div>
  )
)
Textarea.displayName = 'Textarea'

export { Input, Textarea }
export type { InputProps, TextareaProps }
