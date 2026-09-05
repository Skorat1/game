import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          <span className="logo-badge">🎮</span>
          <span className="brand-name">my-games</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Contact
          </NavLink>
          <NavLink to="/partner" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Affiliates Partner
          </NavLink>
          <NavLink to="/support" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Support Us
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
