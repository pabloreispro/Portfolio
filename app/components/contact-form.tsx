"use client"

import { useState } from "react"
import { sendContactEmail } from "../actions/email-actions"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    setIsSubmitting(true)
    setFeedback(null)

    try {
      const response = await sendContactEmail(formData)
      setFeedback(response)
    } catch (error) {
      setFeedback({
        success: false,
        message: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Seu Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
          placeholder="João da Silva"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Seu Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
          placeholder="joaodasilva@exemplo.com"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Sua Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
          placeholder="Olá, eu gostaria de falar sobre..."
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors disabled:opacity-70"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>

      {feedback && <div className={`form-feedback ${feedback.success ? "success" : "error"}`}>{feedback.message}</div>}
    </form>
  )
}

