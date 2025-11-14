'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/contact'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur'
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message')
      }

      setSubmitStatus('success')
      setSubmitMessage('Thank you! Your message has been sent. I\'ll get back to you soon.')
      reset()

      setTimeout(() => {
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
      
      setTimeout(() => {
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-foreground/70">
            Have a project opportunity or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Message Type */}
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Message Type
            </label>
            <select
              {...register('type')}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-colors"
            >
              <option value="">Select a message type...</option>
              <option value="inquiry">General Inquiry</option>
              <option value="opportunity">Job Opportunity</option>
              <option value="collaboration">Collaboration</option>
              <option value="feedback">Feedback</option>
            </select>
            {errors.type && (
              <p className="text-destructive text-sm mt-1">{errors.type.message}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Your Name
            </label>
            <input
              type="text"
              {...register('name')}
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-colors"
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Email Address
            </label>
            <input
              type="email"
              {...register('email')}
              placeholder="john@example.com"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-colors"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Subject
            </label>
            <input
              type="text"
              {...register('subject')}
              placeholder="Project collaboration opportunity"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-colors"
            />
            {errors.subject && (
              <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Message
            </label>
            <textarea
              {...register('message')}
              placeholder="Tell me about your project or opportunity..."
              rows={6}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-colors resize-none"
            />
            {errors.message && (
              <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600">
              {submitMessage}
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive">
              {submitMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          <p className="text-foreground/60 text-xs text-center">
            I'll get back to you within 24 hours.
          </p>
        </form>

        {/* Direct Contact */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-bold mb-4 text-center">Or reach out directly</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:thaminyezi@gmail.com"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg hover:border-accent text-accent transition-colors text-center font-medium"
            >
              Email
            </a>
            <a
              href="tel:+27731267011"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg hover:border-accent text-accent transition-colors text-center font-medium"
            >
              Phone
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg hover:border-accent text-accent transition-colors text-center font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
