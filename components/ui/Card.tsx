import { clsx } from 'clsx'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      'bg-background-mid border border-white/10 rounded-xl transition-all duration-300 hover:border-brand-red/30 hover:shadow-xl',
      className
    )}
    {...props}
  >
    {children}
  </div>
))
Card.displayName = 'Card'

const CardImage = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={clsx('overflow-hidden rounded-t-xl', className)} {...props}>
      {children}
    </div>
  )
)
CardImage.displayName = 'CardImage'

const CardContent = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={clsx('p-5', className)} {...props}>
      {children}
    </div>
  )
)
CardContent.displayName = 'CardContent'

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={clsx('font-serif text-lg font-bold text-white', className)}
      {...props}
    >
      {children}
    </h3>
  )
)
CardTitle.displayName = 'CardTitle'

export { Card, CardImage, CardContent, CardTitle }
