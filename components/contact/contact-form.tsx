'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const subjects = [
  { value: 'data', label: 'Datos incorrectos' },
  { value: 'event', label: 'Sugerir evento' },
  { value: 'partner', label: 'Colaboración' },
  { value: 'other', label: 'Otro' },
] as const

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full border-2 border-[#0a0a0c] bg-[#f2efe8] px-4 py-3.5 text-sm text-[#0a0a0c] outline-none transition placeholder:text-[#8a8a8e] focus:border-[#ff3d00] focus:bg-white'

  if (submitted) {
    return (
      <div className="border-2 border-[#0a0a0c] bg-white p-10 sm:p-14">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center border-2 border-[#0a0a0c] bg-[#c8ff00]">
            <CheckCircle className="h-10 w-10 text-[#0a0a0c]" strokeWidth={2} />
          </div>
          <h2 className="mt-8 font-display text-2xl font-bold uppercase text-[#0a0a0c]">Mensaje recibido</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5c5c62]">
            Gracias. Te responderemos en la dirección que indicaste cuando revisemos tu mensaje.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false)
              setForm({ name: '', email: '', subject: '', message: '' })
            }}
            className="mt-8 border-2 border-[#0a0a0c] bg-[#ff3d00] px-8 py-3 font-display text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#e63500]"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="border-2 border-[#0a0a0c] bg-white shadow-[10px_10px_0_#0a0a0c]">
      <div className="border-b-4 border-[#c8ff00] bg-[#0a0a0c] px-6 py-5 sm:px-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00]">Formulario</p>
        <h2 className="mt-1 font-display text-xl font-bold uppercase text-white md:text-2xl">Envía tu consulta</h2>
        <p className="mt-2 text-sm text-[#8a8a8e]">Campos obligatorios marcados con *</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 sm:p-8" aria-label="Formulario de contacto">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="font-display text-[10px] font-bold uppercase tracking-widest text-[#5c5c62]">
              Nombre *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre o alias"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="font-display text-[10px] font-bold uppercase tracking-widest text-[#5c5c62]">
              Email *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@correo.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#5c5c62]">Motivo *</span>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {subjects.map((s, idx) => (
              <label
                key={s.value}
                className={`relative flex cursor-pointer items-center justify-center border-2 px-3 py-3 text-center font-display text-[10px] font-bold uppercase leading-tight transition ${
                  form.subject === s.value
                    ? 'border-[#0a0a0c] bg-[#c8ff00] text-[#0a0a0c]'
                    : 'border-[#c9c4bc] bg-[#f2efe8] text-[#2a2a2f] hover:border-[#0a0a0c]'
                }`}
              >
                <input
                  type="radio"
                  name="subject"
                  value={s.value}
                  checked={form.subject === s.value}
                  onChange={() => setForm((f) => ({ ...f, subject: s.value }))}
                  className="sr-only"
                  required={idx === 0}
                />
                {s.label}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="font-display text-[10px] font-bold uppercase tracking-widest text-[#5c5c62]">
            Mensaje *
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Describe tu consulta con el máximo detalle posible (evento, fecha, enlace si aplica)…"
            className={`${inputClass} min-h-[140px] resize-y`}
          />
        </div>

        <p className="text-xs leading-relaxed text-[#5c5c62]">
          Al enviar aceptas la{' '}
          <a href="/privacidad" className="font-bold text-[#ff3d00] underline">
            política de privacidad
          </a>
          . El envío es una demostración: conecta tu API o servicio de correo en producción.
        </p>

        <div className="flex flex-col gap-4 border-t-2 border-[#e8e4dc] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#8a8a8e]">Te responderemos al email indicado.</p>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#0a0a0c] bg-[#ff3d00] px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-[4px_4px_0_#c8ff00] transition hover:bg-[#e63500]"
          >
            <Send className="h-5 w-5" />
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  )
}
