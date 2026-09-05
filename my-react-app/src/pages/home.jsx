import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)

  const features = [
    {
      icon: '🚀',
      title: 'Exciting Games',
      desc: 'Discover trending games with smooth gameplay and instant access.'
    },
    {
      icon: '🤝',
      title: 'Affiliate Program',
      desc: 'Partner with us and earn industry-leading commissions on every referral.'
    },
    {
      icon: '⚡',
      title: '24/7 Support',
      desc: 'Get fast and dedicated support anytime from our experienced team.'
    }
  ]

  return (
    <div className="page-container">
      <section className="hero-section">
        <span className="hero-badge">🌟 Welcome to Thopgames</span>
        <h1 className="hero-title">Experience the Ultimate Gaming Platform</h1>
        <p className="hero-subtitle">
          Join thousands of players and partners today. Explore games, connect with the community, and grow with our partner network.
        </p>
        <div className="hero-actions">
          <Link to="/partner" className="btn btn-primary">Become a Partner</Link>
          <Link to="/about" className="btn btn-secondary">Learn More</Link>
        </div>
        
        <div className="interactive-card">
          <p>Interactive Counter Demo:</p>
          <button className="counter-btn" onClick={() => setCount((c) => c + 1)}>
            Clicked {count} times
          </button>
        </div>
      </section>

      <section className="features-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
