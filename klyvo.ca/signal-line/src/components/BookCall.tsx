import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const CAL_LINK = 'https://cal.com/johnizokun-klyvo/production-review?overlayCalendar=true'

interface BookCallProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export default function BookCall({ isOpen, onOpen, onClose }: BookCallProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <section className="section book-section" ref={ref} id="book-call">
        <div className="container">
          <motion.div
            className="book-inner"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex', marginBottom: '1rem' }}>
              <span className="label label-purple">Get Started</span>
            </div>
            <h2 className="book-title">
              Ready to close the gap?
            </h2>
            <p className="book-sub">
              Book a 20-minute call. We'll map your exact situation —
              manufacturer or brand — and tell you exactly how the engine works for your use case.
            </p>
            <div className="book-ctas">
              <button className="btn btn-primary" onClick={onOpen}>
                Book a Call
              </button>
              <button className="btn btn-outline" onClick={onOpen}>
                I'm a Brand
              </button>
            </div>
            <div className="book-trust">
              <span className="book-trust-item">No commission model</span>
              <span className="book-trust-item">Both sides served</span>
              <span className="book-trust-item">Data-verified leads only</span>
              <span className="book-trust-item">Montreal-based operation</span>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={e => { if (e.target === e.currentTarget) onClose() }}
          >
            <motion.div
              className="modal-box"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="modal-header">
                <span className="modal-header-title">Book a Call — Signal & Line</span>
                <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
              </div>
              <div className="modal-body">
                <iframe
                  src={CAL_LINK}
                  title="Book a call with Signal & Line"
                  allow="camera; microphone"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
