import { motion } from 'framer-motion'

/**
 * Minimal line-based illustration hinting at a tent / event structure.
 * Intentionally abstract and calm, used in hero.
 */
export function HeroIllustration() {
  const lines = [
    { x1: 10, y1: 80, x2: 90, y2: 80, delay: 0 },
    { x1: 20, y1: 60, x2: 80, y2: 60, delay: 0.1 },
    { x1: 35, y1: 40, x2: 65, y2: 40, delay: 0.2 },
    { x1: 50, y1: 18, x2: 50, y2: 40, delay: 0.25 },
  ]

  const arcs = [
    { cx: 50, cy: 80, r: 32, delay: 0.18 },
    { cx: 50, cy: 80, r: 22, delay: 0.22 },
  ]

  return (
    <motion.svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="h-56 w-full max-w-sm text-teal md:h-72"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <defs>
        <linearGradient id="hero-stroke" x1="0" x2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {arcs.map((a, idx) => (
        <motion.circle
          key={idx}
          cx={a.cx}
          cy={a.cy}
          r={a.r}
          fill="none"
          stroke="url(#hero-stroke)"
          strokeWidth={0.6}
          strokeLinecap="round"
          strokeDasharray="140"
          strokeDashoffset="140"
          initial={{ strokeDashoffset: 140, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: a.delay }}
        />
      ))}

      {lines.map((l, idx) => (
        <motion.line
          key={idx}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="url(#hero-stroke)"
          strokeWidth={0.7}
          strokeLinecap="round"
          strokeDasharray="80"
          strokeDashoffset="80"
          initial={{ strokeDashoffset: 80, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: l.delay }}
        />
      ))}

      <motion.circle
        cx={50}
        cy={18}
        r={2}
        fill="currentColor"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' }}
      />
    </motion.svg>
  )
}


