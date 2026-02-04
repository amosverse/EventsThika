import { type FormEvent, useState } from 'react'
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'

const eventTypes = ['Wedding', 'Corporate', 'Launch / Brand', 'Ceremony', 'Other']

type FormState = {
  name: string
  email: string
  phone: string
  type: string
  message: string
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nextErrors: Partial<FormState> = {}

    if (!form.name.trim()) nextErrors.name = 'Please add your name.'
    if (!form.email.trim() || !form.email.includes('@')) nextErrors.email = 'Add a valid email address.'
    if (!form.type) nextErrors.type = 'Select an event type.'
    if (!form.message.trim()) nextErrors.message = 'Tell us a bit about the event.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <section className="container-x py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
        <header data-aos="fade-right">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl">
            Share the date,
            <br />
            we&apos;ll map the rest.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-primary-dark opacity-80">
            Use the form to outline your event. We&apos;ll follow up with availability, a budget range, and a suggested
            next step. No automated sequences—just a straightforward reply.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-primary-dark">
            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-primary-dark opacity-70">Email</div>
              <a className="underline-anim" href="mailto:hello@eventstudio.com">
                hello@eventstudio.com
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-primary-dark opacity-70">Phone / WhatsApp</div>
              <a className="underline-anim" href="https://wa.me/254728288688?text=Hi!%20I'd%20like%20to%20get%20in%20touch%20about%20event%20planning%20services." target="_blank" rel="noreferrer">
                +254 728 288 688
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-6">
            <div className="text-xs uppercase tracking-[0.14em] text-primary-dark opacity-70 mb-3">Follow Us</div>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=100064033101197" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-[#E55625] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/gloria_events_solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-[#E55625] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@gloria_events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-[#E55625] hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/254728288688" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-[#25D366] hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@gloriaevents" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-[#FF0000] hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </header>

        <div
          className="card border-teal-pale p-6 md:p-7"
          data-aos="fade-left"
          data-aos-delay="120"
          aria-label="Contact and booking form"
        >
          {submitted ? (
            <div role="status" aria-live="polite" className="space-y-3 text-sm leading-relaxed text-primary-dark opacity-80">
              <h2 className="text-base font-semibold tracking-tightish">Thank you for reaching out.</h2>
              <p>
                Your message has been noted. In a real deployment, this form would be wired to email or a CRM. For this
                portfolio build, imagine a producer responding within one business day.
              </p>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-[0.14em] text-primary-dark opacity-70"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl2 border border-teal-pale bg-surface px-3 py-2 text-sm text-text-primary shadow-sm"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  aria-invalid={Boolean(errors.name) || undefined}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name ? (
                  <p id="name-error" className="mt-1 text-xs text-purple">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-[0.14em] text-primary-dark opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1 w-full rounded-xl2 border border-teal-pale bg-surface px-3 py-2 text-sm text-text-primary shadow-sm"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    aria-invalid={Boolean(errors.email) || undefined}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-1 text-xs text-purple">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium uppercase tracking-[0.14em] text-primary-dark opacity-70"
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  className="mt-1 w-full rounded-xl2 border border-teal-pale bg-surface px-3 py-2 text-sm text-text-primary shadow-sm"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-xs font-medium uppercase tracking-[0.14em] text-primary-dark opacity-70"
                >
                  Event type
                </label>
                <select
                  id="type"
                  name="type"
                  className="mt-1 w-full rounded-xl2 border border-teal-pale bg-surface px-3 py-2 text-sm text-text-primary shadow-sm"
                  value={form.type}
                  onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                  aria-invalid={Boolean(errors.type) || undefined}
                  aria-describedby={errors.type ? 'type-error' : undefined}
                >
                  <option value="">Select an option</option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.type ? (
                  <p id="type-error" className="mt-1 text-xs text-purple">
                    {errors.type}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-[0.14em] text-primary-dark opacity-70"
                >
                  Event details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl2 border border-teal-pale bg-surface px-3 py-2 text-sm text-text-primary shadow-sm"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  aria-invalid={Boolean(errors.message) || undefined}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1 text-xs text-purple">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button type="submit" className="btn mt-3 w-full md:w-auto">
                Send inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}


