import { clsx } from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonVariant = 'red' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  as?: 'button' | 'a'
  href?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  red: 'bg-brand-red hover:bg-brand-red-dark text-white uppercase tracking-wider font-bold hover:shadow-lg hover:shadow-brand-red/20',
  outline:
    'border-2 border-white/30 text-white hover:border-white hover:bg-white/10 uppercase tracking-wider font-semibold',
  ghost: 'text-white/60 hover:text-brand-red font-medium',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'py-2 px-4 text-xs',
  md: 'py-3 px-8 text-sm',
  lg: 'py-4 px-10 text-base',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'red', size = 'md', className, children, as, href, ...props }, ref) => {
    const classes = clsx(
      'inline-flex items-center justify-center rounded-md transition-all duration-300',
      variantStyles[variant],
      sizeStyles[size],
      className
    )

    if (as === 'a' && href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
export type { ButtonProps }
