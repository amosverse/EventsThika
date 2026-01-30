import { MessageCircle } from 'lucide-react'

export function WhatsAppFloat() {
  const whatsappNumber = '254776325607' 
  const message = encodeURIComponent('Hello! I would like to inquire about your event services.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all hover:scale-110 hover:shadow-3xl animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
    </a>
  )
}
