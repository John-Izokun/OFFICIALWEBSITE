import { useState } from 'react'
import { motion } from 'framer-motion'
import ScannerFeed from './ScannerFeed'

const LOOM_ID = '49353c4f9eb04d0695db5fc6a23c4c55'

interface HeroProps {
  onBookCall: () => void
}

export default function Hero({ onBookCall }: HeroProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="hero-bg" />
      <div className="hero-grid-bg" />

      <div className="hero">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span className="label label-purple">Manufacturing-Fit Demand Intelligence</span>
          </div>

          <h1 className="hero-title">
            Your estimator only sees<br />
            <span className="hero-title-accent">brands your floor can run.</span>
          </h1>

          <p className="hero-sub">
            Signal & Line scans a live index of 10,000+ DTC storefronts for stock-out
            signals, filters every opportunity against your MOQ, format, certifications,
            and capacity window — then routes only estimator-cleared RFQs to your team.
          </p>

          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={onBookCall}>
              Run the OOS Radar for My Facility
            </button>
            <button
              className="btn btn-outline"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </button>
          </div>

          <div className="hero-brand-nudge">
            Brand with a stock-out?{' '}
            <a href="mailto:john.izokun@klyvo.ca" className="hero-brand-link">
              Submit your product need →
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          <ScannerFeed />

          <div className="hero-video-card" onClick={() => setVideoLoaded(true)}>
            <div className="hero-video-inner">
              {videoLoaded ? (
                <iframe
                  src={`https://www.loom.com/embed/${LOOM_ID}?autoplay=1`}
                  frameBorder="0"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                />
              ) : (
                <div className="hero-video-play">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <path d="M1 1L13 8L1 15V1Z" fill="#07080e" />
                  </svg>
                </div>
              )}
            </div>
            {!videoLoaded && (
              <div className="hero-video-label">
                Watch: How the OOS Radar works (2 min)
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
