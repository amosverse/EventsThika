import { type ComponentProps } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'ghost'

export function ButtonLink({
  variant = 'primary',
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  const base = variant === 'ghost' ? 'btn btn--ghost' : 'btn'
  return <Link {...props} className={[base, className].filter(Boolean).join(' ')} />
}




