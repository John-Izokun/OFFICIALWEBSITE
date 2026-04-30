import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Tab = 'brands' | 'manufacturers'

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) { setValue(0); return }
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return value
}

export default function Problem() {
  const [tab, setTab] = useState<Tab>('brands')
  const [inView, setInView] = useState(false)
  const [gaugeWidth, setGaugeWidth] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true)
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (tab === 'manufacturers' && inView) {
      setTimeout(() => setGaugeWidth(73), 300)
    } else {
      setGaugeWidth(0)
    }
  }, [tab, inView])

  const revenueDay = useCountUp(4200, tab === 'brands' && inView)
  const revenueWeek = useCountUp(29400, tab === 'brands' && inView)

  return (
    <section className="section problem-section" ref={ref} id="problem">
      <div className="container">
        <div className="section-label">
          <span className="label label-purple">The Problem</span>
        </div>
        <h2 className="section-title">
          {tab === 'brands'
            ? 'Your products are out of stock. Right now.'
            : 'Your lines are running empty. Right now.'
          }
        </h2>
        <p className="section-sub">
          {tab === 'brands'
            ? 'While you\'re waiting months for your co-packer to have availability, you\'re hemorrhaging revenue and customers every single day.'
            : 'You have open production capacity and zero qualified inbound demand. Every idle hour is money you\'ll never recover.'
          }
        </p>

        <div className="problem-tabs">
          <button className={`problem-tab ${tab === 'brands' ? 'active' : ''}`} onClick={() => setTab('brands')}>
            For Brands
          </button>
          <button className={`problem-tab ${tab === 'manufacturers' ? 'active' : ''}`} onClick={() => setTab('manufacturers')}>
            For Manufacturers
          </button>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'brands' ? (
            <motion.div
              key="brands"
              className="problem-content"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div>
                <div className="problem-stat-card">
                  <div className="problem-stat-label">
                    <span className="label">Daily revenue loss — OOS product</span>
                  </div>
                  <div className="problem-stat-num">
                    ${revenueDay.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--dim)', marginBottom: '1rem' }}>
                    per day · ${revenueWeek.toLocaleString()} this week
                  </div>
                  <div className="capacity-gauge">
                    <div className="gauge-labels">
                      <span>Revenue lost</span>
                      <span>Growing</span>
                    </div>
                    <div className="gauge-bar-bg">
                      <div className="gauge-bar-fill" style={{ width: inView ? '73%' : '0%', transition: 'width 1.8s cubic-bezier(0.4,0,0.2,1)' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="problem-points">
                <div className="problem-point">
                  <div className="problem-point-icon red" />
                  <p className="problem-point-text">
                    <strong>12-week lead times</strong> from your current co-packer mean the problem compounds before it's solved.
                  </p>
                </div>
                <div className="problem-point">
                  <div className="problem-point-icon amber" />
                  <p className="problem-point-text">
                    <strong>Back-order waitlists fill</strong> while you cold-call manufacturers who may not even run your format.
                  </p>
                </div>
                <div className="problem-point">
                  <div className="problem-point-icon purple" />
                  <p className="problem-point-text">
                    <strong>Signal & Line detects</strong> your stock-out within 24 hours and surfaces a verified manufacturer match — ready to quote.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="manufacturers"
              className="problem-content"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div>
                <div className="problem-stat-card">
                  <div className="problem-stat-label">
                    <span className="label">Open capacity — current utilization</span>
                  </div>
                  <div className="problem-stat-num" style={{ color: 'var(--amber)' }}>
                    {gaugeWidth}%
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--dim)', marginBottom: '1rem' }}>
                    idle floor hours costing you monthly
                  </div>
                  <div className="capacity-gauge">
                    <div className="gauge-labels">
                      <span>Capacity idle</span>
                      <span>Revenue potential</span>
                    </div>
                    <div className="gauge-bar-bg">
                      <div className="gauge-bar-fill" style={{ width: `${gaugeWidth}%`, background: 'linear-gradient(90deg, var(--amber), var(--green))' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="problem-points">
                <div className="problem-point">
                  <div className="problem-point-icon red" />
                  <p className="problem-point-text">
                    <strong>Cold lead lists</strong> from directories send unqualified brands that waste your estimator's time on bad-fit quotes.
                  </p>
                </div>
                <div className="problem-point">
                  <div className="problem-point-icon amber" />
                  <p className="problem-point-text">
                    <strong>Commission brokers</strong> take 5-8% of every contract you close — even when you did all the closing work yourself.
                  </p>
                </div>
                <div className="problem-point">
                  <div className="problem-point-icon purple" />
                  <p className="problem-point-text">
                    <strong>Signal & Line routes</strong> format-matched, MOQ-verified RFQs from distressed brands directly to your quoting team.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
