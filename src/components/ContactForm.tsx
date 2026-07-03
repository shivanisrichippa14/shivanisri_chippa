import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare, CheckCircle } from 'lucide-react'

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="glass-card rounded-3xl p-8 md:p-10 max-w-xl mx-auto border border-slate-200/60 bg-white/90 backdrop-blur-md relative overflow-hidden shadow-sm">
      {/* Decorative radial blurs inside card */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-secondary/80 rounded-full blur-3xl opacity-20" />

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10 space-y-4"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 mb-2">
            <CheckCircle size={36} />
          </div>
          <h3 className="text-2xl font-bold font-display text-slate-900">Message Dispatched</h3>
          <p className="text-slate-600 text-base max-w-xs mx-auto">
            Thanks for reaching out! I've received your query and will reply within 24 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="text-center md:text-left mb-6">
            <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">Let's Connect</h3>
            <p className="text-slate-600 text-base">
              Have a role, project, or question? Send a message and let's start pair-programming.
            </p>
          </div>

          {/* Name Input */}
          <div className="space-y-2 text-left">
            <label className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <User size={12} className="text-primary" />
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. John Doe"
                className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base font-medium"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2 text-left">
            <label className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Mail size={12} className="text-primary" />
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. john@example.com"
                className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base font-medium"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="space-y-2 text-left">
            <label className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <MessageSquare size={12} className="text-primary" />
              Message Details
            </label>
            <div className="relative">
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Shivanisri, let's collaborate on..."
                className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base font-medium resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 px-6 rounded-xl font-semibold text-base transition-colors shadow-md shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      )}
    </div>
  )
}
