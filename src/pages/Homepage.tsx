import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import { ButtonLink } from '../components/common/buttons'
import { Testimonials } from '../components/sections/Testimonials'

// Parallax configuration values for tuning motion intensity
const PARALLAX_CONFIG = {
  background: {
    speed: 0.4, // Background moves slower (0.3-0.5 range)
    translateRange: [0, -150], // Vertical translation in pixels
  },
  foreground: {
    speed: 0.7, // Foreground moves faster (0.6-0.8 range)
    translateRange: [0, -100],
    opacityRange: [1, 0.7], // Fade-out effect
    scaleRange: [1, 0.98], // Subtle scale-down
  },
  decorative: {
    speed: 0.55, // Independent speed for depth layering
    translateRange: [0, -80],
  },
}

const services = [
  {
    slug: '/services/tent-rentals',
    title: 'Tent structures',
    copy: 'Framed and stretch tents sized precisely to your guest list and site.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c861?w=800&q=80',
  },
  {
    slug: '/services/decorations',
    title: 'Event décor',
    copy: 'Tablescapes, florals, and lighting that feel tailored, not templated.',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80',
  },
  {
    slug: '/services/catering',
    title: 'Catering',
    copy: 'Trusted culinary partners for plated dinners, buffets, and cocktail service.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
  },
  {
    slug: '/services/sound-dj',
    title: 'Sound & DJ',
    copy: 'PA systems, music direction, and technical operators who keep sound invisible.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
  },
  {
    slug: '/services/mc',
    title: 'MC services',
    copy: 'Hosts who guide the room with warmth and clarity—never overbearing.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
  },
  {
    slug: '/services/full-production',
    title: 'Full production',
    copy: 'From first walkthrough to last light off, we own the run of show.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },
]

const stats = [
  { label: 'Events delivered', value: '500+', numericValue: 500 },
  { label: 'On-time setups', value: '99%', numericValue: 99 },
  { label: 'Cities served', value: '12', numericValue: 12 },
]

const pillars = [
  {
    title: 'Detail over drama',
    body: 'We fix small problems before they become big ones—cable runs, load-in paths, weather plans.',
  },
  {
    title: 'One calm point of contact',
    body: 'Producers who answer emails, know your floor plan, and stand with you on site.',
  },
  {
    title: 'Vendor network, not guesswork',
    body: 'Caterers, florists, and DJs we know by name and trust in the room with our clients.',
  },
]

function AnimatedStat({ label, value, numericValue }: { label: string; value: string; numericValue: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return
    
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = numericValue / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep >= steps) {
        setCount(numericValue)
        setHasAnimated(true)
        clearInterval(timer)
      } else {
        setCount(Math.floor(increment * currentStep))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [numericValue, hasAnimated])

  const displayValue = value.includes('%') 
    ? `${count}%` 
    : value.includes('+') 
      ? `${count}+` 
      : count.toString()

  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.14em] text-gray-900 font-semibold">{label}</dt>
      <dd className="mt-1 text-lg font-bold text-gray-900">{displayValue}</dd>
    </div>
  )
}

export function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  // Track scroll progress of hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  // Create parallax transform values (disabled if reduced motion preferred)
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : PARALLAX_CONFIG.background.translateRange
  )
  
  const foregroundY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : PARALLAX_CONFIG.foreground.translateRange
  )
  
  const foregroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    prefersReducedMotion ? [1, 1] : PARALLAX_CONFIG.foreground.opacityRange
  )
  
  const foregroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : PARALLAX_CONFIG.foreground.scaleRange
  )
  
  const decorativeY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : PARALLAX_CONFIG.decorative.translateRange
  )

  return (
    <>
      {/* HERO SECTION - Fixed: Added min-height to prevent collapse and proper z-index stacking */}
      <section ref={heroRef} className="relative overflow-hidden min-h-[600px] md:min-h-[700px]">
        {/* Background Image with zoom animation - Full width */}
        {/* Fixed: Added z-0 to establish stacking context */}
        <motion.div 
          className="absolute inset-0 w-full h-full will-change-transform z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            animation: 'zoomIn 20s ease-in-out infinite alternate',
            y: backgroundY,
          }}
        />
        
        {/* Subtle overlay for text readability without blur */}
        {/* Fixed: Added z-[1] to layer above background but below content */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/75 via-white/60 to-white/70 z-[1]" />
        
        {/* Content with foreground parallax */}
        {/* Fixed: Changed z-10 to z-[2] to ensure content is above overlay */}
        <motion.div 
          className="relative z-[2] container-x grid gap-12 py-16 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center md:py-24 will-change-transform"
          style={{
            y: foregroundY,
            opacity: foregroundOpacity,
            scale: foregroundScale,
          }}
        >
          <div data-aos="fade-right">
            <p className="eyebrow text-gray-900">Thika's premier event production partner</p>
            <h1 className="h-display mt-6 text-gray-900">
              <span className="headline-blue">Y</span>our ev<span className="headline-orange">ent</span>.
              <br />
              <span className="headline-blue">Flaw</span>lessly <span className="headline-orange">exe</span>cuted.
            </h1>
            <p className="p-lede mt-5 max-w-xl text-gray-900">
              We handle the pressure so you don't have to. Full-service event production for weddings, corporate functions, and celebrations—delivered with precision, backed by experience.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <ButtonLink
                to="/services/full-production"
                variant="primary"
                className="bg-accent hover:bg-accent-hover text-white border-transparent text-base transition-opacity active:opacity-70"
              >
                See what's included
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghost" className="text-base">
                Start planning today
              </ButtonLink>
            </div>

            <dl className="mt-8 flex flex-wrap gap-6 text-sm">
              {stats.map((s) => (
                <AnimatedStat key={s.label} label={s.label} value={s.value} numericValue={s.numericValue} />
              ))}
            </dl>
          </div>

          <motion.div 
            data-aos="fade-left" 
            data-aos-delay="120"
            className="will-change-transform"
            style={{ y: decorativeY }}
          >
            <div className="absolute inset-6 -z-10 rounded-[32px] border-0 bg-transparent" />

            <div className="relative rounded-[32px] border-0 bg-transparent backdrop-blur-0 p-6 shadow-none">
              <div className="w-full aspect-video md:aspect-[4/3]">
                <DotLottieReact
                  src="https://lottie.host/a4c2c072-ffeb-46a0-83a9-11ef75d6b7c0/DvhccctaMQ.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.14em] text-gray-600">We specialize in</span>
                  <span className="text-gray-900">Weddings, corporate events, celebrations</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.14em] text-gray-600">Full-scope delivery</span>
                  <span className="text-gray-900">Venue setup, tents, décor, sound, catering, coordination</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES SECTION - Fixed: Added relative positioning and z-[10] to ensure it's above hero parallax */}
      <section 
        className="relative z-[10] overflow-hidden bg-gradient-to-b from-white via-background-alt to-white pt-16 pb-8 md:pt-24 md:pb-12" 
        aria-labelledby="home-services-heading"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/5 rounded-full blur-3xl -z-10" />
        
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
            <div data-aos="fade-up" className="max-w-2xl">
              <p className="eyebrow text-accent">
                Our{' '}
                <span className="relative inline-block">
                  Services
                  <svg
                    className="absolute left-0 -bottom-1 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C50 4 100 6 150 5C170 4.5 190 6 198 7"
                      stroke="#E55625"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </p>
              <h2 id="home-services-heading" className="mt-3 font-display text-4xl tracking-tightish md:text-5xl">
                Everything under one roof,
                <br />
                <span className="text-accent">built for the day of.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-800" data-aos="fade-up" data-aos-delay="120">
              We treat your event like a live production. Clear timelines, precise layouts, and technical teams who know
              exactly where they need to be—and when.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.slug}
                className="group relative overflow-hidden rounded-2xl bg-white border border-border shadow-sm hover:shadow-lift transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 80}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Image container with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
                  
                  {/* Colored accent bar on top */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-success"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Service number badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm border border-white/30">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Decorative dot */}
                  <div className="absolute -top-3 left-6 w-6 h-6 rounded-full bg-accent shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  
                  <h3 className="font-display text-xl tracking-tightish text-gray-900 leading-tight mt-2 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    {service.copy}
                  </p>
                  
                  <div className="mt-5 flex items-center text-accent group-hover:gap-2 gap-1 transition-all duration-300">
                    <span className="text-sm font-semibold">Learn more</span>
                    <motion.span 
                      className="text-lg"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Hover border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.article>
            ))}
          </div>
          
          {/* CTA section below services */}
          <motion.div 
            className="mt-8 text-center bg-primary-dark rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-white/70 text-sm mb-4 flex justify-center gap-2 flex-wrap">
              {['Need', 'something', 'custom?'].map((word, index) => (
                <motion.span
                  key={word}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: 'easeInOut',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </p>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <ButtonLink
                to="/contact"
                variant="primary"
                className="relative bg-gradient-to-r from-accent to-accent-light text-white border-transparent shadow-lg hover:shadow-xl group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's discuss your event
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </svg>
                </span>
                {/* Animated background pulse */}
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                />
              </ButtonLink>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* WHY TEAMS BOOK US SECTION - Fixed: Added z-[10] to maintain stacking order above hero */}
      <section 
        className="relative z-[10] mt-6 border-y border-border bg-background-alt py-14 md:mt-10" 
        aria-labelledby="home-why-heading"
      >
        <div className="container-x grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start">
          <div data-aos="fade-right">
            <p className="eyebrow">
              <span className="relative inline-block">
                Why teams book us
                <svg
                  className="absolute left-0 -bottom-1 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 4 100 6 150 5C170 4.5 190 6 198 7"
                    stroke="#E55625"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </p>
            <h2 id="home-why-heading" className="mt-3 font-display text-3xl tracking-tightish md:text-4xl text-gray-900">
              Calm behind the scenes.
              <br />
              Energy in the room.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-800 max-w-md">
              We&apos;ve supported brand launches, weddings, fundraisers, and ceremonies with the same focus: guests
              should feel cared for, and you should feel present.
            </p>
          </div>

          <div className="grid gap-5" data-aos="fade-left" data-aos-delay="120">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card p-5">
                <h3 className="text-sm font-semibold tracking-tightish text-gray-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT STEPS CTA SECTION - Fixed: Added z-[10] to maintain stacking order */}
      <section 
        className="relative z-[10] bg-background-alt py-14 md:py-20" 
        aria-labelledby="home-cta-heading"
      >
        <div className="container-x">
        <div
          className="grid gap-8 rounded-[30px] border border-border bg-white px-6 py-10 shadow-liftSm md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:px-10"
          data-aos="fade-up"
        >
          <div>
            <p className="eyebrow">
              <span className="relative inline-block">
                Next steps
                <svg
                  className="absolute left-0 -bottom-1 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 4 100 6 150 5C170 4.5 190 6 198 7"
                    stroke="#E55625"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </p>
            <h2 id="home-cta-heading" className="mt-3 font-display text-3xl tracking-tightish md:text-4xl text-gray-900">
              Share the date, the room, and the feeling you&apos;re after.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-800 max-w-lg">
              We&apos;ll respond with availability, a rough budget range, and a proposed path to move forward—no
              pressure, no automated sequences.
            </p>
          </div>

          <div className="space-y-4 text-sm text-gray-900">
            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-gray-600">Typical response time</div>
              <div className="mt-1 text-gray-900">Within one business day</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-gray-600">Ideal notice</div>
              <div className="mt-1">8–12 weeks before your event</div>
            </div>

            <ButtonLink
              to="/contact"
              variant="primary"
              className="mt-2 bg-gradient-to-r from-teal to-purple text-surface border-transparent"
            >
              Book a consultation
            </ButtonLink>
          </div>
        </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - wrapper with z-[10] to maintain stacking */}
      <div className="relative z-[10]">
        <Testimonials />
      </div>
    </>
  )
}