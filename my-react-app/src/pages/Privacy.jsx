import React from 'react'

function Privacy() {
  return (
    <div className="page-container">
      <section className="page-header">
        <span className="hero-badge">🔒 Legal & Security</span>
        <h1>Privacy Policy</h1>
        <p className="hero-subtitle">
          Learn how Thopgames collects, uses, and protects your personal information.
        </p>
      </section>

      <section className="content-card" style={{ textAlign: 'left' }}>
        <h2>1. Information We Collect</h2>
        <p>
          We collect basic user details such as name, email address, and interaction data when you register or reach out through our contact forms.
        </p>

        <h2 style={{ marginTop: '20px' }}>2. How We Use Information</h2>
        <p>
          Your information is used strictly to provide and improve our gaming platform, process affiliate payouts, and communicate updates.
        </p>

        <h2 style={{ marginTop: '20px' }}>3. Data Protection</h2>
        <p>
          We employ standard encryption protocols and secure server architectures to protect your personal data against unauthorized access.
        </p>

        <h2 style={{ marginTop: '20px' }}>4. Contact Us</h2>
        <p>
          If you have questions about this policy, please reach out to us at privacy@thopgames.com.
        </p>
      </section>
    </div>
  )
}

export default Privacy
