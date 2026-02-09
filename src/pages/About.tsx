import { TimelineConnector } from '../components/sections/TimelineConnector'

const milestones = [
  {
    year: '2016',
    title: 'First canvas tent, first backyard wedding',
    copy: 'A single canvas tent and a borrowed PA system grew into a word-of-mouth studio for friends and local venues.',
  },
  {
    year: '2019',
    title: 'Corporate and brand work',
    copy: 'We expanded into launches, offsites, and cultural events—where timing, AV, and experience design have to be exact.',
  },
  {
    year: '2023',
    title: 'Dedicated production team',
    copy: 'Producers, technicians, and coordinators who own their lane, from load-in to final sweep.',
  },
]

export function About() {
  return (
    <section className="container-x py-16 md:py-24">
      <header className="max-w-3xl" style={{ opacity: 1, visibility: 'visible' }}>
        <p className="eyebrow" style={{ color: 'var(--color-accent-orange)', fontWeight: '600' }}>About</p>
        <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl" style={{ color: 'var(--color-text-primary)' }}>
          Quiet confidence,
          <br />
          strong production.
        </h1>
        <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
          Event Solutions Thika is a small team of producers, designers, and technicians who care less about being seen and more
          about how your event feels. We sit at the intersection of hospitality and live production: gracious with
          guests, uncompromising with details.
        </p>
      </header>

      <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-8" style={{ opacity: 1, visibility: 'visible' }}>
          <article className="card p-6">
            <h2 className="text-sm font-semibold tracking-tightish" style={{ color: 'var(--color-text-primary)' }}>How we work</h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
              We believe a well-produced event feels inevitable—as if it couldn&apos;t have unfolded any other way.
              That means clear communication before the day, realistic timelines, and room layouts that respect both the
              catering team and your photographer.
            </p>
          </article>

          <article className="card p-6">
            <h2 className="text-sm font-semibold tracking-tightish" style={{ color: 'var(--color-text-primary)' }}>What we care about</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
              <li>Guests who feel guided without being rushed.</li>
              <li>Vendors who understand the running order and share information freely.</li>
              <li>Clients who can move from host to participant without worrying about the next cue.</li>
            </ul>
          </article>
        </div>

        <aside className="space-y-6" aria-label="Studio milestones" style={{ opacity: 1, visibility: 'visible' }}>
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <div className="text-xs uppercase tracking-[0.14em]" style={{ color: 'var(--color-text-primary)' }}>Milestones</div>
          </div>

          <ol className="space-y-6 border-l border-border pl-5 text-sm" style={{ color: 'var(--color-text-primary)' }}>
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <div className="absolute -left-5 top-1 h-2 w-2 rounded-full bg-teal" />
                <div className="text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--color-text-primary)' }}>{m.year}</div>
                <div className="mt-1 font-medium" style={{ color: 'var(--color-text-primary)' }}>{m.title}</div>
                <p className="mt-1 leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>{m.copy}</p>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  )
}


