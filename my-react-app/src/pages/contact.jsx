import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
    }
  }

  return (
    <div className="page-container">
      <section className="page-header">
        <span className="hero-badge">✉️ Get in Touch</span>
        <h1>Contact Us</h1>
        <p className="hero-subtitle">
          Have any questions, inquiries, or feedback? Fill out the form below and our team will get back to you shortly.
        </p>
      </section>

      <div className="contact-wrapper">
        <div className="contact-card">
          {submitted ? (
            <div className="success-message">
              <h3>🎉 Thank You!</h3>
              <p>Your message has been sent successfully. We will reply to <strong>{formData.email}</strong> soon.</p>
              <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }) }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-group">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="contact-info-card">
          <h3>Contact Details</h3>
          <p>📍 <strong>Headquarters:</strong> Tech Park Avenue, Cyber City</p>
          <p>📧 <strong>Email:</strong> support@thopgames.com</p>
          <p>⏱️ <strong>Support Hours:</strong> Monday - Sunday (24/7)</p>
        </div>
      </div>
    </div>
  )
}

export default Contact