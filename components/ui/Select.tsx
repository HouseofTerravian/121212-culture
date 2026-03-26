import { clsx } from 'clsx'
import { SelectHTMLAttributes, forwardRef } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className, id, ...props }, ref) => (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={id}
        className={clsx(
          'w-full bg-background border border-white/15 rounded-md px-4 py-3 text-white transition-colors duration-300 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red/50 appearance-none',
          'bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.4)%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E")] bg-[length:20px] bg-[right_12px_center] bg-no-repeat',
          error && 'border-brand-red/60',
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" className="bg-background text-white/30">
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-background text-white">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-brand-red text-xs mt-1">{error}</p>}
    </div>
  )
)

Select.displayName = 'Select'
export { Select }
export type { SelectProps }
