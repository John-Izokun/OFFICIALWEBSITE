import { useState, useEffect } from 'react'

interface NavProps {
  onBookCall: () => void
}

export default function Nav({ onBookCall }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          <div className="nav-logo-dot" />
          Signal & Line
        </a>

        <ul className="nav-links">
          <li><a href="#how-it-works" onClick={e => { e.preventDefault(); scrollTo('how-it-works') }}>How It Works</a></li>
          <li><a href="#for-manufacturers" onClick={e => { e.preventDefault(); scrollTo('for-manufacturers') }}>Manufacturers</a></li>
          <li><a href="#for-brands" onClick={e => { e.preventDefault(); scrollTo('for-brands') }}>Brands</a></li>
          <li><a href="#intelligence" onClick={e => { e.preventDefault(); scrollTo('intelligence') }}>Intelligence</a></li>
        </ul>

        <div className="nav-cta">
          <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem' }} onClick={onBookCall}>
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  )
}
