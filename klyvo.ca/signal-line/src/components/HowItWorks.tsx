import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function TerminalMockup() {
  return (
    <div className="hiw-mockup">
      <div className="hiw-mockup-header">
        <div className="traffic-lights">
          <span /><span /><span />
        </div>
        <span className="hiw-mockup-title">signal-line — demand-radar</span>
      </div>
      <div className="hiw-mockup-body">
        <div className="terminal-line"><span className="t-g">✓</span> Loaded <span className="t-w">412</span> Shopify domains</div>
        <div className="terminal-line"><span className="t-g">✓</span> products.json fast path · concurrency=20</div>
        <div className="terminal-line">&nbsp;</div>
        <div className="terminal-line"><span className="t-g">[PASS]</span> gainful.com — inventory OK</div>
        <div className="terminal-line"><span className="t-g">[PASS]</span> ritual.com — inventory OK</div>
        <div className="terminal-line"><span className="t-y">[ALERT]</span> <span className="t-w">neonnutra.com</span></div>
        <div className="terminal-line">&nbsp; product: <span className="t-c">"Ashwagandha Gummies 60ct"</span></div>
        <div className="terminal-line">&nbsp; status:  <span className="t-r">OUT_OF_STOCK</span></div>
        <div className="terminal-line">&nbsp; signal:  <span className="t-y">verified via Shopify .js API</span></div>
        <div className="terminal-line"><span className="t-y">[ALERT]</span> <span className="t-w">vitalrootslabs.com</span></div>
        <div className="terminal-line">&nbsp; product: <span className="t-c">"Creatine Gummies 90ct"</span></div>
        <div className="terminal-line">&nbsp; status:  <span className="t-r">OUT_OF_STOCK · day 9</span></div>
        <div className="terminal-line">&nbsp;</div>
        <div className="terminal-line"><span className="t-g">Scan complete · 17 signals / 412 domains</span></div>
      </div>
    </div>
  )
}

function MatrixMockup() {
  return (
    <div className="hiw-mockup">
      <div className="hiw-mockup-header">
        <div className="traffic-lights">
          <span /><span /><span />
        </div>
        <span className="hiw-mockup-title">qualification-matrix — neonnutra.com</span>
      </div>
      <div className="hiw-mockup-body">
        <div className="matrix-row">
          <span className="matrix-label">Product format</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="matrix-val">Liquid fill · 30ml</span>
            <span className="matrix-badge ok">Match</span>
          </div>
        </div>
        <div className="matrix-row">
          <span className="matrix-label">Requested MOQ</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="matrix-val">75,000 units</span>
            <span className="matrix-badge ok">Match</span>
          </div>
        </div>
        <div className="matrix-row">
          <span className="matrix-label">Certifications</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="matrix-val">NSF, GMP</span>
            <span className="matrix-badge ok">Match</span>
          </div>
        </div>
        <div className="matrix-row">
          <span className="matrix-label">Timeline</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="matrix-val">Q2 window</span>
            <span className="matrix-badge ok">Available</span>
          </div>
        </div>
        <div className="matrix-row">
          <span className="matrix-label">Contact</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="matrix-val">Sarah Chen · Founder</span>
            <span className="matrix-badge ok">Verified</span>
          </div>
        </div>
        <div style={{ paddingTop: '0.75rem', fontSize: '12px', fontWeight: 600, color: 'var(--green)' }}>
          6/6 filters passed — cleared for routing
        </div>
      </div>
    </div>
  )
}

function EmailMockup() {
  return (
    <div className="hiw-mockup">
      <div className="hiw-mockup-header">
        <div className="traffic-lights">
          <span /><span /><span />
        </div>
        <span className="hiw-mockup-title">outreach — sarah@neonnutra.com</span>
      </div>
      <div className="hiw-mockup-body">
        <div className="email-mock-header">
          From · john@signalandline.co<br />
          To · sarah@neonnutra.com (Founder — verified)<br />
          Subject · fulfillment for Neon Nutra
        </div>
        <div className="email-mock-body">
          Hi Sarah,<br /><br />
          Noticed your Ashwagandha Gummies are currently out of stock.<br /><br />
          I work with a US-based liquid-fill co-packer — NSF and GMP certified,
          50k unit MOQ, open Q2 capacity. Their line matches your 30ml fill spec exactly.<br /><br />
          Worth 10 minutes to see if it's a fit?<br /><br />
          — John, Signal & Line
        </div>
        <div className="email-reply">
          ✓ Reply: "Yes — send me the specs, we need this fast"
        </div>
      </div>
    </div>
  )
}

const PHASES = [
  {
    num: '01 / DETECT',
    title: 'The radar finds brands bleeding revenue',
    desc: 'Our engine hits the Shopify products.json API across 10,000+ DTC storefronts simultaneously. When every variant of a product shows available: false, we log it. No browser, no guesswork — live inventory data, authoritative.',
    tags: ['Shopify API', 'Amazon Signals', 'Real-time scan', 'Verified OOS'],
    Mockup: TerminalMockup,
  },
  {
    num: '02 / QUALIFY',
    title: 'The engine checks the fit against your floor',
    desc: "Every distressed brand runs through a qualification matrix calibrated to your facility — format, MOQ, certifications, capacity window. Your quoting team only sees opportunities that passed all six checks. Nothing else.",
    tags: ['Format match', 'MOQ verified', 'Cert check', 'Contact found'],
    Mockup: MatrixMockup,
  },
  {
    num: '03 / CONNECT',
    title: 'The introduction is made — personally',
    desc: 'A personalised email goes out naming the exact product that\'s out of stock and your facility\'s exact capabilities. When the brand replies yes, that\'s your RFQ. You never chase. It comes to you.',
    tags: ['Named product', 'Personalised', 'RFQ routed', 'Ready to quote'],
    Mockup: EmailMockup,
  },
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', '-200vw'])

  const phaseProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2])

  return (
    <section id="how-it-works">
      <div
        ref={containerRef}
        style={{ height: '300vh', position: 'relative' }}
      >
        <div className="hiw-sticky">
          {/* Phase progress dots */}
          <motion.div
            className="hiw-progress"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="hiw-progress-dot"
                style={{
                  background: phaseProgress.get() >= i ? 'var(--purple)' : undefined,
                }}
              />
            ))}
          </motion.div>

          <motion.div className="hiw-track" style={{ x }}>
            {PHASES.map((phase, idx) => (
              <div
                key={idx}
                className="hiw-phase"
                style={{ maxWidth: '100vw', width: '100vw', padding: '0 max(2rem, calc((100vw - 1160px)/2))' }}
              >
                <div className="hiw-phase-left">
                  <div className="hiw-phase-num">{phase.num}</div>
                  <h2 className="hiw-phase-title">{phase.title}</h2>
                  <p className="hiw-phase-desc">{phase.desc}</p>
                  <div className="hiw-phase-tags">
                    {phase.tags.map(t => (
                      <span key={t} className="hiw-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="hiw-phase-right">
                  <phase.Mockup />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
