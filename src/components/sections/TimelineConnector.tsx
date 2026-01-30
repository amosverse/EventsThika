import { motion } from 'framer-motion'

/**
 * Vertical connector with subtle motion for process sections.
 */
export function TimelineConnector() {
  return (
    <motion.svg
      viewBox="0 0 6 120"
      aria-hidden="true"
      className="h-24 w-3 text-border md:h-32"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <defs>
        <linearGradient id="timeline-stroke" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <motion.circle
        cx={3}
        cy={10}
        r={2}
        fill="currentColor"
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      <motion.line
        x1={3}
        y1={18}
        x2={3}
        y2={110}
        stroke="url(#timeline-stroke)"
        strokeWidth={0.7}
        strokeLinecap="round"
        strokeDasharray="140"
        strokeDashoffset="140"
        initial={{ strokeDashoffset: 140 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
      />
    </motion.svg>
  )
}


