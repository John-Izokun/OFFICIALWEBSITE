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
            <span className="label label-purple">Demand Intelligence Platform</span>
          </div>

          <h1 className="hero-title">
            We find the gap.<br />
            <span className="hero-title-accent">We close it.</span>
          </h1>

          <p className="hero-sub">
            Signal & Line scans 10,000+ DTC storefronts in real time, detects brands
            actively losing revenue from stock-outs, and connects them with the
            co-packing facility that can run their exact format — this week.
          </p>

          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={onBookCall}>
              I'm a Manufacturer
            </button>
            <span className="hero-cta-divider">·</span>
            <button className="btn btn-outline" onClick={onBookCall}>
              I'm a Brand
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          <ScannerFeed />

          <div
            className="hero-video-card"
            onClick={() => setVideoLoaded(true)}
          >
            <div className="hero-video-inner">
              {videoLoaded ? (
                <iframe
                  src={`https://www.loom.com/embed/${LOOM_ID}?autoplay=1`}
                  frameBorder="0"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                />
              ) : (
                <>
                  <div className="hero-video-play">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                      <path d="M1 1L13 8L1 15V1Z" fill="#07080e" />
                    </svg>
                  </div>
                </>
              )}
            </div>
            {!videoLoaded && (
              <div className="hero-video-label">
                Watch: How Signal & Line works (2 min)
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
