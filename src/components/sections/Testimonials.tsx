import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  text: string
  bgColor: string
  textColor: string
  rotation: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mwangi',
    role: 'Wedding Client',
    image: 'https://i.pravatar.cc/150?img=5',
    text: 'Event Solutions Thika transformed our wedding into a magical experience. Every detail was perfect, from the elegant tent setup to the stunning décor. Highly recommended!',
    bgColor: 'bg-[#FFE4E1]',
    textColor: 'text-gray-900',
    rotation: 'rotate-[-2deg]',
  },
  {
    id: 2,
    name: 'James Kamau',
    role: 'Corporate Event Manager',
    image: 'https://i.pravatar.cc/150?img=12',
    text: 'Professional, reliable, and creative. They handled our annual company gala flawlessly. The team understood our vision and delivered beyond expectations.',
    bgColor: 'bg-[#B8C5D6]',
    textColor: 'text-white',
    rotation: 'rotate-[3deg]',
  },
  {
    id: 3,
    name: 'Grace Njeri',
    role: 'Birthday Celebration',
    image: 'https://i.pravatar.cc/150?img=9',
    text: 'From planning to execution, everything was seamless. The sound system was crystal clear, the MC was engaging, and our guests are still talking about it!',
    bgColor: 'bg-[#E55625]',
    textColor: 'text-white',
    rotation: 'rotate-[-1deg]',
  },
  {
    id: 4,
    name: 'David Omondi',
    role: 'Fundraiser Organizer',
    image: 'https://i.pravatar.cc/150?img=14',
    text: 'Their attention to detail and calm professionalism made our charity fundraiser a huge success. They coordinated everything perfectly and kept us stress-free throughout.',
    bgColor: 'bg-[#1F2645]',
    textColor: 'text-white',
    rotation: 'rotate-[2deg]',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const getVisibleCards = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section className="relative overflow-hidden bg-[#fcfbf7] py-20">
      <div className="container-x">
        {/* Header with underline and arrow */}
        <div className="relative mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-[#1F2645] md:text-5xl">
            What our{' '}
            <span className="relative inline-block">
              clients
              {/* Hand-drawn orange underline */}
              <svg
                className="absolute left-0 -bottom-2 w-full"
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
            </span>{' '}
            have to say
          </h2>

          {/* Hand-drawn arrow */}
          <svg
            className="absolute -top-8 right-[10%] hidden h-24 w-24 md:block"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10 Q 40 25, 50 45 T 70 80"
              stroke="#E55625"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M70 80 L65 72 M70 80 L78 78" stroke="#E55625" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Testimonial Cards Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Navigation - Hide on mobile and tablet */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1F2645] bg-white shadow-lg transition hover:bg-[#1F2645] hover:text-white lg:left-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Cards Layout - Stack on mobile, 2 cols on tablet, scattered on desktop */}
          <div className="w-full">
            {/* Mobile & Tablet: Single/Double column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 px-4">
              {testimonials.slice(currentIndex, currentIndex + 2).concat(
                testimonials.slice(0, Math.max(0, (currentIndex + 2) - testimonials.length))
              ).slice(0, 2).map((testimonial, idx) => (
                <div
                  key={`mobile-${testimonial.id}-${idx}`}
                  className={`${testimonial.rotation}`}
                >
                  <div
                    className={`relative rounded-2xl p-6 shadow-xl ${testimonial.bgColor} ${testimonial.textColor}`}
                  >
                    {/* Profile Image - Top Left */}
                    <div className="absolute -top-6 -left-6 h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow-lg">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Star Rating */}
                    <div className="mb-4 flex gap-1 pt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#FFA500] text-[#FFA500]" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="mb-4 text-sm leading-relaxed md:text-base">{testimonial.text}</p>

                    {/* Name and Role */}
                    <div className="border-t border-current/20 pt-3">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs opacity-80">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Scattered layout */}
            <div className="hidden lg:block relative mx-auto h-[380px] w-full max-w-4xl">
              {getVisibleCards().map((testimonial, idx) => (
                <div
                  key={`${testimonial.id}-${currentIndex}-${idx}`}
                  className={`absolute left-1/2 top-1/2 w-[320px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    idx === 0
                      ? 'z-10 -translate-x-[180%]'
                      : idx === 1
                      ? 'z-20 scale-105'
                      : 'z-10 translate-x-[80%]'
                  } ${testimonial.rotation}`}
                >
                  <div
                    className={`relative rounded-2xl p-6 shadow-xl ${testimonial.bgColor} ${testimonial.textColor}`}
                  >
                    {/* Profile Image - Top Left */}
                    <div className="absolute -top-6 -left-6 h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow-lg">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Star Rating */}
                    <div className="mb-4 flex gap-1 pt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#FFA500] text-[#FFA500]" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="mb-4 text-sm leading-relaxed md:text-base">{testimonial.text}</p>

                    {/* Name and Role */}
                    <div className="border-t border-current/20 pt-3">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs opacity-80">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation - Hide on mobile and tablet */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-20 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1F2645] bg-white shadow-lg transition hover:bg-[#1F2645] hover:text-white lg:right-4"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 w-2 rounded-full transition ${
                idx === currentIndex ? 'bg-[#E55625] w-8' : 'bg-[#1F2645]/30'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
