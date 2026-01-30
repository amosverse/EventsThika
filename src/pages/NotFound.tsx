import { ButtonLink } from '../components/common/buttons'

export function NotFound() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-xl">
        <div className="eyebrow">404</div>
        <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl">This page doesn’t exist.</h1>
        <p className="mt-4 text-base leading-relaxed text-primary-dark opacity-80">
          The link may be outdated, or the page has moved. Head back to the homepage and continue exploring.
        </p>
        <div className="mt-8">
          <ButtonLink to="/" variant="primary">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}


