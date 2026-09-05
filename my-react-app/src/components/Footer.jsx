import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>🎮 Thopgames</h3>
          <p>Your premier destination for gaming news, affiliate opportunities, and gaming entertainment.</p>
        </div>
        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/partner">Affiliates Partner</Link></li>
            <li><Link to="/support">Support Us</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Thopgames © {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
