import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    const stats = [
        { label: 'Active Gamers', value: '100K+' },
        { label: 'Partner Payouts', value: '$2.5M+' },
        { label: 'Supported Games', value: '500+' },
        { label: 'Uptime Reliability', value: '99.9%' },
    ]

    return (
        <div className="page-container">
            <section className="page-header">
                <link rel="img" type="image/jpg+xml" href="images.jfif" />
                <h1>About Thopgames</h1>
                <p className="hero-subtitle">
                    We are dedicated to revolutionizing the gaming experience by connecting players, developers, and affiliate partners in a vibrant ecosystem.
                </p>
            </section>

            <div className="stats-row">
                {stats.map((stat, idx) => (
                    <div key={idx} className="stat-card">
                        <h2>{stat.value}</h2>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>

            <section className="content-card">
                <h2>Our Mission</h2>
                <p>
                    At my-games, our mission is to make gaming more engaging, rewarding, and accessible for everyone around the world. Whether you are looking for high-performance games, community tournaments, or lucrative affiliate revenue sharing, we have you covered.
                </p>
                <div style={{ marginTop: '24px' }}>
                    <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
                </div>
            </section>
        </div>
    )
}

export default About