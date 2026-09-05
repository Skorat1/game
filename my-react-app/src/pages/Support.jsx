import React from 'react'
import { Link } from 'react-router-dom'

function Support() {
  const faqs = [
    {
      q: 'How do I start playing games on Thopgames?',
      a: 'Simply browse our game library on the Home page, choose any game, and start playing right away in your browser or client!'
    },
    {
      q: 'How do affiliate commissions get paid out?',
      a: 'Affiliate earnings are calculated daily and paid out on a weekly/monthly basis depending on your selected payout method.'
    },
    {
      q: 'What should I do if I experience technical issues?',
      a: 'You can check our status page, reach out via the Contact page form, or send an email directly to support@thopgames.com.'
    }
  ]

  return (
    <div className="page-container">
      <section className="page-header">
        <span className="hero-badge">🛠️ Help Center</span>
        <h1>Support & Assistance</h1>
        <p className="hero-subtitle">
          Find quick answers, troubleshooting steps, and direct assistance for any questions you have.
        </p>
      </section>

      <section className="features-grid">
        <div className="feature-card">
          <span className="feature-icon">💬</span>
          <h3>Live Chat Support</h3>
          <p>Get fast answers from our 24/7 dedicated support staff.</p>
          <Link to="/contact" className="btn btn-secondary" style={{ marginTop: '12px' }}>Open Ticket</Link>
        </div>

        <div className="feature-card">
          <span className="feature-icon">📚</span>
          <h3>Documentation & Guides</h3>
          <p>Read step-by-step guides on gameplay, billing, and account setup.</p>
          <Link to="/about" className="btn btn-secondary" style={{ marginTop: '12px' }}>Explore Docs</Link>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🛡️</span>
          <h3>Account Security</h3>
          <p>Learn how to secure your account credentials and affiliate links.</p>
          <Link to="/privacy" className="btn btn-secondary" style={{ marginTop: '12px' }}>Security Info</Link>
        </div>
      </section>

      <section className="content-card" style={{ marginTop: '30px' }}>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px', textAlign: 'left' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ padding: '16px', background: 'var(--code-bg)', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', color: 'var(--text-h)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: '15px' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Support
