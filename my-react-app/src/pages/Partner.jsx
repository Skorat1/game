import React from 'react'
import { Link } from 'react-router-dom'

function Partner() {
  const perks = [
    { title: 'High Commission', desc: 'Earn up to 40% recurring revenue share from every active player referred.' },
    { title: 'Real-time Tracking', desc: 'Monitor your clicks, signups, conversion rates, and payouts with live analytics.' },
    { title: 'Fast Payouts', desc: 'Receive prompt weekly or monthly payments via Crypto, Wire Transfer, or PayPal.' },
    { title: 'Dedicated Manager', desc: 'Get personal guidance and custom marketing assets to maximize your campaigns.' },
  ]

  return (
    <div className="page-container">
      <section className="page-header">
        <span className="hero-badge">💼 Partnership Program</span>
        <h1>Affiliate & Business Partners</h1>
        <p className="hero-subtitle">
          Join the Thopgames Affiliate Program today and turn your audience into steady recurring revenue.
        </p>
        <div style={{ marginTop: '20px' }}>
          <Link to="/contact" className="btn btn-primary">Apply as Partner</Link>
        </div>
      </section>

      <div className="features-grid">
        {perks.map((perk, idx) => (
          <div key={idx} className="feature-card">
            <h3>✨ {perk.title}</h3>
            <p>{perk.desc}</p>
          </div>
        ))}
      </div>

      <section className="content-card" style={{ marginTop: '30px' }}>
        <h2>How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div>
            <h3>1. Sign Up</h3>
            <p>Fill out the application form to get your dedicated tracking link.</p>
          </div>
          <div>
            <h3>2. Promote</h3>
            <p>Share games, links, and banners with your followers and community.</p>
          </div>
          <div>
            <h3>3. Earn</h3>
            <p>Earn commissions on every referral that joins and plays.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partner
