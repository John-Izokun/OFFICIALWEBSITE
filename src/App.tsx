import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Load videos on demand
    window.loadLoomVideo = loadLoomVideo;
    window.loadYouTubeVideo = loadYouTubeVideo;
    window.openBookingModal = openBookingModal;
    window.closeBookingModal = closeBookingModal;
    window.downloadWhitepaper = downloadWhitepaper;
    window.trackEvent = trackEvent;

    // Header scroll effect & progress bar
    const header = document.getElementById('main-header');
    const progressBar = document.getElementById('scroll-progress');
    
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (currentScroll / documentHeight) * 100;
      
      if (header) {
        if (currentScroll <= 0) {
          header.style.boxShadow = 'none';
        } else {
          header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
        }
      }
      
      if (progressBar) {
        progressBar.style.transform = `scaleX(${scrollPercentage / 100})`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#blueprint') return;
        
        e.preventDefault();
        const target = document.querySelector(href!);
        if (target && header) {
          const headerHeight = header.offsetHeight;
          const targetPosition = (target as HTMLElement).getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      });
    });

    // Intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      (section as HTMLElement).style.opacity = '0';
      (section as HTMLElement).style.transform = 'translateY(30px)';
      (section as HTMLElement).style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });

    const hero = document.querySelector('.hero-section');
    if (hero) {
      (hero as HTMLElement).style.opacity = '1';
      (hero as HTMLElement).style.transform = 'translateY(0)';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Functions
  let loomLoaded = false;
  const loadLoomVideo = () => {
    if (loomLoaded) return;
    const wrapper = document.getElementById('loom-video-wrapper');
    const placeholder = wrapper?.querySelector('.video-placeholder');
    const loomEmbedUrl = 'https://www.loom.com/embed/49353c4f9eb04d0695db5fc6a23c4c55';
    
    const iframe = document.createElement('iframe');
    iframe.src = loomEmbedUrl;
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    
    if (placeholder) (placeholder as HTMLElement).style.display = 'none';
    wrapper?.appendChild(iframe);
    loomLoaded = true;
  };

  let youtubeLoaded = false;
  const loadYouTubeVideo = () => {
    if (youtubeLoaded) return;
    const wrapper = document.getElementById('youtube-video-wrapper');
    const placeholder = wrapper?.querySelector('.video-placeholder');
    const youtubeVideoId = 'YOUR_YOUTUBE_VIDEO_ID';
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;
    
    const iframe = document.createElement('iframe');
    iframe.src = youtubeEmbedUrl;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    
    if (placeholder) (placeholder as HTMLElement).style.display = 'none';
    wrapper?.appendChild(iframe);
    youtubeLoaded = true;
  };

  const openBookingModal = () => {
    const modal = document.getElementById('booking-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeBookingModal = () => {
    const modal = document.getElementById('booking-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  const downloadWhitepaper = () => {
    alert('White Paper Download\n\nPlease upload your Anti-Broker White Paper PDF and link it here.\n\nFor now, this opens a booking modal to discuss the whitepaper.');
    openBookingModal();
  };

  const trackEvent = (eventName: string, eventData?: any) => {
    console.log('Event tracked:', eventName, eventData);
  };

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <div id="scroll-progress" className="scroll-progress" style={{transform: 'scaleX(0)'}}></div>

      {/* HEADER */}
      <header id="main-header">
        <div className="container header-content">
          <div className="logo">KLYVO PARTNERS</div>
          <nav className="main-nav">
            <a href="#problem">The Problem</a>
            <a href="#protocol">The Protocol</a>
            <a href="#economics">Economics</a>
            <a href="#deploy">Deploy</a>
          </nav>
          <button className="cta-button primary" onClick={openBookingModal}>BOOK A CALL</button>
        </div>
      </header>

      {/* Mobile Sticky CTA */}
      <div className="mobile-sticky-cta">
        <button className="cta-button primary" onClick={openBookingModal}>BOOK A CALL</button>
      </div>

      {/* SECTION 1: HERO */}
      <section id="hero" className="hero-section">
        <div className="grid-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-headline">YOUR CAPACITY. YOUR INFRASTRUCTURE. YOUR PROFIT.</h1>
          <p className="hero-subheadline">
            Stop relying on passive directories. We will help you manage a dedicated <span className="engineered-text">ENGINEERED</span> acquisition engine that routes demand directly to your calendar without the 5% commission hit. We ensure a steady flow of new clients and production runs monthly.
          </p>
          
          <div className="video-container">
            <div className="video-wrapper" id="loom-video-wrapper">
              <div className="video-placeholder" onClick={loadLoomVideo}>
                <svg className="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#64ffda" strokeWidth="2"/>
                  <path d="M10 8L16 12L10 16V8Z" fill="#64ffda"/>
                </svg>
                <p className="video-label">Briefing: The Infrastructure Model (01:30)</p>
              </div>
            </div>
          </div>

          <div className="hero-cta-group">
            <button className="cta-button success large" onClick={openBookingModal}>BOOK A CALL</button>
            <a href="#blueprint" className="text-link">Read the Anti-Broker Blueprint <span>→</span></a>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">$100K+</span>
              <div className="stat-label">Annual Savings</div>
              <div className="stat-sublabel">vs. Traditional Brokers</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">3-5</span>
              <div className="stat-label">Qualified Leads</div>
              <div className="stat-sublabel">Monthly to Your Calendar</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">0%</span>
              <div className="stat-label">Commission</div>
              <div className="stat-sublabel">Forever. Period.</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">48 Hrs</span>
              <div className="stat-label">Setup Time</div>
              <div className="stat-sublabel">From Call to Live System</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-badges">
            <div className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              No Long-Term Contracts
            </div>
            <div className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Performance Guarantee
            </div>
            <div className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Your Data Stays Yours
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE DIAGNOSIS */}
      <section id="problem" className="diagnosis-section">
        <div className="container">
          <h2 className="section-headline">The Mathematics of Profit Loss.</h2>
          
          <div className="comparison-grid">
            {/* Old Way */}
            <div className="comparison-column old-way">
              <div className="column-header">
                <span className="label-mono">THE BROKER TRAP</span>
              </div>
              <div className="bar-chart">
                <div className="bar-container">
                  <div className="bar danger" style={{height: '100%'}}>
                    <span className="bar-label">$25,000/yr</span>
                  </div>
                </div>
                <div className="icon-container">
                  <svg className="icon-leak" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L12 16M12 16L8 12M12 16L16 12" stroke="#ff3b3b" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 16L4 20L20 20L20 16" stroke="#ff3b3b" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="7" cy="22" r="1" fill="#ff3b3b"/>
                    <circle cx="12" cy="22" r="1" fill="#ff3b3b"/>
                    <circle cx="17" cy="22" r="1" fill="#ff3b3b"/>
                  </svg>
                </div>
              </div>
              <p className="column-description">Recurring commission drain on every deal</p>
            </div>

            {/* New Way */}
            <div className="comparison-column new-way">
              <div className="column-header">
                <span className="label-mono">KLYVO MODEL</span>
              </div>
              <div className="bar-chart">
                <div className="bar-container">
                  <div className="bar success" style={{height: '35%'}}>
                    <span className="bar-label">$3,500</span>
                  </div>
                </div>
                <div className="icon-container">
                  <svg className="icon-lock" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="11" width="14" height="10" rx="2" stroke="#64ffda" strokeWidth="2"/>
                    <path d="M8 11V7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V11" stroke="#64ffda" strokeWidth="2"/>
                    <circle cx="12" cy="16" r="1.5" fill="#64ffda"/>
                  </svg>
                </div>
              </div>
              <p className="column-description">Infrastructure you own forever</p>
            </div>
          </div>

          <div className="insight-blocks">
            <div className="insight-block">
              <div className="insight-icon">
                <span className="mono-data">$21,500</span>
              </div>
              <p className="insight-text">
                On a single $500k contract, the 'Safe' broker option costs you <strong>$21,500 in lost profit per year</strong>. 
                Scale that across 5 contracts, and you are bleeding <strong>$100k+ in Enterprise Value</strong> annually.
              </p>
            </div>

            <div className="insight-block">
              <div className="insight-icon">
                <span className="mono-data">$25K</span>
              </div>
              <p className="insight-text">
                Paying $25k to list on a directory is like <strong>buying a gym membership and hoping to get fit by watching others work out</strong>. 
                It creates potential, not motion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of sections continue... */}
      {/* I'll add the remaining sections in the next message to keep this manageable */}
      
      {/* SECTION 3: THE PROTOCOL */}
      <section id="protocol" className="protocol-section">
        <div className="container">
          <h2 className="section-headline">The Procurement Routing System.</h2>
          
          <div className="process-flow">
            <div className="process-step">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3L3 21L21 21" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 17L7 11" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17L12 7" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17 17L17 13" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-label">THE FILTER</h3>
                <p className="step-description">
                  We map your specific sweet spot (e.g., 10k-50k runs, Turnkey only). No tire kickers.
                </p>
              </div>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-step">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#64ffda" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" stroke="#64ffda" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="1.5" fill="#64ffda"/>
                  <path d="M12 3L12 7" stroke="#64ffda" strokeWidth="2"/>
                  <path d="M12 17L12 21" stroke="#64ffda" strokeWidth="2"/>
                  <path d="M3 12L7 12" stroke="#64ffda" strokeWidth="2"/>
                  <path d="M17 12L21 12" stroke="#64ffda" strokeWidth="2"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-label">THE HUNT</h3>
                <p className="step-description">
                  We identify the 'Rising Middle Class' of brands stuck in 12-week lead times.
                </p>
              </div>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-step">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11C9 11 10 10 12 10C14 10 15 11 15 11" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 15L8 19C8 20.1046 8.89543 21 10 21L14 21C15.1046 21 16 20.1046 16 19L16 15" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="3" y="9" width="8" height="6" rx="1" stroke="#64ffda" strokeWidth="2"/>
                  <rect x="13" y="9" width="8" height="6" rx="1" stroke="#64ffda" strokeWidth="2"/>
                  <path d="M7 9L7 6C7 4.89543 7.89543 4 9 4L10 4" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17 9L17 6C17 4.89543 16.1046 4 15 4L14 4" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-label">THE HAND-OFF</h3>
                <p className="step-description">
                  We route 3-5 Qualified Production Audits to your schedule monthly.
                </p>
              </div>
            </div>
          </div>

          <div className="social-proof">
            <div className="proof-badge">
              <span className="mono-label">SYSTEM STATUS</span>
              <p className="proof-text">
                Currently managing capacity routing for facilities in <strong>Food & Beverage</strong> & <strong>Personal Care</strong>. 
                Primary networks backed up until <strong>March</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE COMMERCIALS */}
      <section id="economics" className="commercials-section">
        <div className="container">
          <h2 className="section-headline">Pay for Labor. Not Luck.</h2>
          
          <div className="pricing-spec">
            <div className="spec-table">
              <div className="spec-row">
                <div className="spec-label">
                  <span className="mono-label">01</span>
                  <span className="spec-title">Deployment Fee</span>
                </div>
                <div className="spec-value">
                  <span className="value-text">$3,500 One-Time</span>
                  <span className="value-description">Builds the Asset</span>
                </div>
              </div>

              <div className="spec-row">
                <div className="spec-label">
                  <span className="mono-label">02</span>
                  <span className="spec-title">Retainer</span>
                </div>
                <div className="spec-value">
                  <span className="value-text">Performance Paused</span>
                  <span className="value-description">Only bills on delivery</span>
                </div>
              </div>

              <div className="spec-row highlight">
                <div className="spec-label">
                  <span className="mono-label">03</span>
                  <span className="spec-title">Commission</span>
                </div>
                <div className="spec-value">
                  <span className="value-text success-text">0.0%</span>
                  <span className="value-description">(Forever)</span>
                </div>
              </div>

              <div className="spec-row">
                <div className="spec-label">
                  <span className="mono-label">04</span>
                  <span className="spec-title">Guarantee</span>
                </div>
                <div className="spec-value">
                  <span className="value-description full-width">
                    If the infrastructure does not deliver a qualified production audit, 
                    the monthly retainer does not bill.
                  </span>
                </div>
              </div>
            </div>

            <div className="spec-cta">
              <button className="cta-button primary large" onClick={openBookingModal}>REVIEW COMMERCIAL TERMS</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BRIEFING ROOM */}
      <section id="deploy" className="briefing-section">
        <div className="container">
          <h2 className="section-headline">Strategic Intelligence.</h2>
          
          <div className="briefing-grid">
            <div className="briefing-item video-briefing">
              <div className="video-wrapper" id="youtube-video-wrapper">
                <div className="video-placeholder" onClick={loadYouTubeVideo}>
                  <svg className="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#ff3b3b" strokeWidth="2"/>
                    <path d="M10 8L16 12L10 16V8Z" fill="#ff3b3b"/>
                  </svg>
                  <p className="video-label">The Hidden Tax on Growth (06:00)</p>
                </div>
              </div>
              <p className="briefing-caption">
                Watch the full 6-minute breakdown on why the Commission Model is structurally flawed.
              </p>
            </div>

            <div className="briefing-item" id="blueprint">
              <div className="download-card">
                <div className="download-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="18" rx="2" stroke="#64ffda" strokeWidth="2"/>
                    <path d="M8 2L8 6" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 2L16 6" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 10L16 10" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 14L14 14" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 18L12 18" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="download-title">Anti-Broker White Paper</h3>
                <p className="download-description">
                  A comprehensive breakdown of the hidden costs in traditional broker and directory models, 
                  with the mathematical case for infrastructure ownership.
                </p>
                <button className="download-button" onClick={downloadWhitepaper}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3V15M12 15L8 11M12 15L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 15L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="diagnosis-section">
        <div className="container">
          <h2 className="section-headline">Why Manufacturers Choose Infrastructure Over Brokers</h2>
          
          <div className="feature-comparison">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th style={{textAlign: 'center'}}>Traditional Brokers</th>
                  <th style={{textAlign: 'center'}}>Klyvo Infrastructure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">Commission per Deal</td>
                  <td style={{textAlign: 'center'}}><span className="cross-icon">5-8%</span></td>
                  <td style={{textAlign: 'center'}}><span className="check-icon">✓ 0%</span></td>
                </tr>
                <tr>
                  <td className="feature-name">Lead Quality Control</td>
                  <td style={{textAlign: 'center'}}><span className="cross-icon">✗</span></td>
                  <td style={{textAlign: 'center'}}><span className="check-icon">✓</span></td>
                </tr>
                <tr>
                  <td className="feature-name">Direct Calendar Integration</td>
                  <td style={{textAlign: 'center'}}><span className="cross-icon">✗</span></td>
                  <td style={{textAlign: 'center'}}><span className="check-icon">✓</span></td>
                </tr>
                <tr>
                  <td className="feature-name">Dedicated Support</td>
                  <td style={{textAlign: 'center'}}><span className="cross-icon">✗</span></td>
                  <td style={{textAlign: 'center'}}><span className="check-icon">✓</span></td>
                </tr>
                <tr>
                  <td className="feature-name">Data Ownership</td>
                  <td style={{textAlign: 'center'}}><span className="cross-icon">✗ Shared</span></td>
                  <td style={{textAlign: 'center'}}><span className="check-icon">✓ 100% Yours</span></td>
                </tr>
                <tr>
                  <td className="feature-name">Monthly Lead Target</td>
                  <td style={{textAlign: 'center'}}><span className="cross-icon">Variable</span></td>
                  <td style={{textAlign: 'center'}}><span className="check-icon">✓ 3-5 Guaranteed</span></td>
                </tr>
                <tr>
                  <td className="feature-name">Setup Time</td>
                  <td style={{textAlign: 'center'}}>2-4 weeks</td>
                  <td style={{textAlign: 'center'}}><span className="check-icon">✓ 48 hours</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial-section">
        <div className="container">
          <h2 className="section-headline">What Facility Owners Say</h2>
          
          <div className="testimonial-card">
            <p className="testimonial-text">
              "We were bleeding $40k annually in broker commissions on just three contracts. Klyvo's infrastructure paid for itself in the first month, and now we're routing qualified leads directly to our production calendar. The system just works."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">M</div>
              <div className="author-info">
                <h4>Michael Chen</h4>
                <p>Director of Operations, Midwest Co-Packing Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-headline">Frequently Asked Questions</h2>
          
          <div className="faq-container">
            <div className="faq-item" onClick={(e) => e.currentTarget.classList.toggle('active')}>
              <div className="faq-question">
                <span>How is this different from listing on a marketplace directory?</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Directories are passive—you pay to be listed and hope brands find you. Our infrastructure actively hunts for brands that match your exact capabilities and routes them directly to your calendar. It's the difference between a billboard and a sales team.
                </div>
              </div>
            </div>

            <div className="faq-item" onClick={(e) => e.currentTarget.classList.toggle('active')}>
              <div className="faq-question">
                <span>What if I don't get 3-5 qualified leads in a month?</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Our retainer is performance-paused. If the infrastructure doesn't deliver a qualified production audit in a given month, the monthly retainer doesn't bill. You only pay for results.
                </div>
              </div>
            </div>

            <div className="faq-item" onClick={(e) => e.currentTarget.classList.toggle('active')}>
              <div className="faq-question">
                <span>How long does it take to set up?</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  48 hours from our initial strategy call. We map your sweet spot (MOQs, capabilities, turnaround times), integrate with your calendar system, and begin routing qualified demand within two business days.
                </div>
              </div>
            </div>

            <div className="faq-item" onClick={(e) => e.currentTarget.classList.toggle('active')}>
              <div className="faq-question">
                <span>Do you take a percentage of the contracts we close?</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  No. Zero commission. Forever. We charge a one-time deployment fee ($3,500) to build your infrastructure and a performance-paused retainer. Every dollar of the contract is yours to keep.
                </div>
              </div>
            </div>

            <div className="faq-item" onClick={(e) => e.currentTarget.classList.toggle('active')}>
              <div className="faq-question">
                <span>What types of facilities do you work with?</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  We specialize in co-packers and contract manufacturers in Food & Beverage, Personal Care, and Supplements. If you have 10k-50k unit runs and turnkey capabilities, we can route demand to you.
                </div>
              </div>
            </div>

            <div className="faq-item" onClick={(e) => e.currentTarget.classList.toggle('active')}>
              <div className="faq-question">
                <span>What if I'm already working with brokers?</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Our infrastructure is complementary—it doesn't replace your existing channels, it adds a commission-free layer. Most clients keep their broker relationships for niche deals while our system handles the bulk of new demand acquisition.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-content">
            <h2>Stop Renting Growth. Start Owning Infrastructure.</h2>
            <p>
              Book a 20-minute capacity audit to see if your facility qualifies for our Q1 deployment window.
            </p>
            <button className="cta-button success large" onClick={openBookingModal}>
              BOOK YOUR CAPACITY AUDIT
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="container footer-content">
          <div className="footer-left">
            <div className="footer-logo">KLYVO PARTNERS</div>
            <p className="footer-location">Montreal, Canada</p>
          </div>
          <div className="footer-right">
            <nav className="footer-nav">
              <a href="#" onClick={(e) => { e.preventDefault(); openBookingModal(); }}>Capacity Audit</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Client login coming soon'); }}>Client Login</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy protocol coming soon'); }}>Privacy Protocol</a>
            </nav>
            <p className="footer-status">
              <span className="status-indicator"></span>
              © 2025. System Status: <strong>ONLINE</strong>
            </p>
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      <div id="booking-modal" className="modal">
        <div className="modal-content">
          <button className="modal-close" onClick={closeBookingModal}>&times;</button>
          <div className="modal-header">
            <h3>Schedule Your Capacity Audit</h3>
            <p className="mono-label">Infrastructure Deployment Session</p>
          </div>
          <div className="modal-body">
            <div id="cal-embed" style={{width:'100%', height:'100%', overflow:'scroll'}}>
              <iframe 
                src="https://cal.com/johnizokun-klyvo/production-review?overlayCalendar=true" 
                width="100%" 
                height="600" 
                frameBorder="0"
                style={{border:0}}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Extend window type
declare global {
  interface Window {
    loadLoomVideo: () => void;
    loadYouTubeVideo: () => void;
    openBookingModal: () => void;
    closeBookingModal: () => void;
    downloadWhitepaper: () => void;
    trackEvent: (eventName: string, eventData?: any) => void;
  }
}

export default App
