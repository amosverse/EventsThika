import { ButtonLink } from '../components/common/buttons'

export function NotFound() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-xl">
        <div className="eyebrow">404</div>
        <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl">This page doesn’t exist.</h1>
        <p className="mt-4 text-base leading-relaxed text-primary-dark opacity-80">
          The link may be outdated, or the page has moved. Need help finding something specific?
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/" className="btn bg-accent hover:bg-accent-hover text-white">
            Back to home
          </a>
          <a href="https://wa.me/254728288688?text=Hi!%20I%20couldn't%20find%20the%20page%20I%20was%20looking%20for.%20Can%20you%20help%20me%3F" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            Contact us
          </a>
        </div>
      </div>
    </section>
  )
}


