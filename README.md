# Klyvo Partners - Official Website

## 🏭 Overview
High-converting B2B landing page built with React + TypeScript + Vite. Features an "Industrial Fintech" aesthetic designed to convert mid-sized Manufacturing Facility Owners into booking a "Capacity Audit."

## 🎨 Design System

### Color Palette
- **Primary (Navy):** `#020c1b` - The Void/Space
- **Secondary (Slate Grey):** `#8892b0` - Steel/Machinery
- **Accent (Signal Red):** `#ff3b3b` - Alert/Stop elements
- **Success (Terminal Green):** `#64ffda` - Profit/Growth indicators

### Typography
- **Headlines:** Inter (Bold, Tight tracking)
- **Technical/Data:** JetBrains Mono (Monospace feel)

## 📁 File Structure
```
.
├── public/             # Static assets
│   └── index.html      # HTML template
├── src/                # Source files
│   ├── App.tsx         # Main React component
│   ├── main.tsx        # Entry point
│   └── styles.css      # Complete CSS styling
├── static/             # Additional static files
├── node_modules/       # Dependencies
├── package.json        # Project config
├── tsconfig.json       # TypeScript config
├── tsconfig.node.json  # Node TypeScript config
├── vite.config.ts      # Vite config
└── README.md           # This file
```

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Your site will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🚀 Configuration

### 1. Video Integration

#### Loom Video (Hero Section)
Replace in `script.js` line 37:
```javascript
const loomEmbedUrl = 'https://www.loom.com/embed/YOUR_LOOM_VIDEO_ID';
```
Get your Loom embed URL from: Share → Embed → Copy iframe src

#### YouTube Video (Briefing Room)
Replace in `script.js` line 58:
```javascript
const youtubeVideoId = 'YOUR_YOUTUBE_VIDEO_ID';
```

### 2. Cal.com Booking Integration
Replace in `index.html` line 411:
```html
<iframe src="https://cal.com/your-calendar-link" ...>
```
Get your Cal.com link from: Event Types → Share → Copy Link

### 3. White Paper PDF
Upload your "Anti-Broker White Paper" PDF and update the download function in `script.js` line 70:
```javascript
function downloadWhitepaper() {
    window.open('/path-to-your-whitepaper.pdf', '_blank');
}
```

### 4. Update Placeholder Content
- **Social Proof (Line 291 in index.html):** Replace `[Food & Beverage]` and `[Personal Care]` with actual niches
- **Cal.com Note:** Remove the instruction note once you've added your actual Cal.com link

## 🔧 Technical Features

### Performance Optimizations
- ✅ Lazy-loaded video embeds (loads on click)
- ✅ CSS-only transitions (no heavy animations)
- ✅ Responsive images and SVG icons
- ✅ Mobile-first responsive design

### Mobile Features
- ✅ Sticky CTA button at bottom of screen
- ✅ Fully responsive layout
- ✅ Touch-optimized interactions

### Booking Integration
- ✅ Modal overlay for Cal.com embed
- ✅ Email capture capability (configure in Cal.com)
- ✅ ESC key and click-outside to close

## 📱 Responsive Breakpoints
- **Desktop:** 969px and above
- **Tablet:** 768px - 968px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## 🎯 Conversion Elements

### Primary CTAs
1. **Header:** "INITIATE AUDIT"
2. **Hero:** "SECURE Q1 CAPACITY"
3. **Commercials:** "REVIEW COMMERCIAL TERMS"
4. **Mobile Sticky:** "SECURE Q1 CAPACITY"

### Key Sections
1. **Hero:** Pattern interrupt with VSL
2. **Diagnosis:** Mathematical proof of broker trap
3. **Protocol:** 3-step procurement routing system
4. **Commercials:** Godfather offer (0% commission)
5. **Briefing Room:** Education & trust-building
6. **Footer:** Industrial branding

## 🎨 Customization Guide

### Color Adjustments
All colors are defined as CSS variables in `styles.css`:
```css
:root {
    --navy: #020c1b;
    --slate: #8892b0;
    --red: #ff3b3b;
    --green: #64ffda;
}
```

### Typography Changes
Update font imports in `index.html` head section and CSS variables.

### Spacing System
Uses consistent spacing scale:
```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 4rem;
--spacing-xl: 6rem;
```

## 📊 Analytics Setup

### Google Analytics 4
Add to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Event Tracking
The site tracks:
- CTA button clicks
- Video plays
- Section visibility
- Modal opens

## 🚢 Deployment

### Option 1: Netlify (Recommended)
1. Drag and drop all files to Netlify
2. Auto-deploys with custom domain support
3. Free SSL certificate included

### Option 2: Vercel
```bash
npm i -g vercel
vercel
```

### Option 3: Traditional Hosting
Upload all files to your web server root directory.

## ⚡ Performance Checklist
- [ ] Add actual Loom video URL
- [ ] Add actual YouTube video ID
- [ ] Add actual Cal.com booking link
- [ ] Upload white paper PDF
- [ ] Update social proof niches
- [ ] Add Google Analytics tracking ID
- [ ] Test on mobile devices
- [ ] Add favicon (replace emoji with actual file)
- [ ] Test video loading on 3G connection
- [ ] Verify all CTAs open booking modal

## 🔒 Security Notes
- No server-side processing required
- All booking handled through Cal.com (secure)
- No sensitive data stored client-side
- HTTPS required for production (handled by modern hosts)

## 📞 Support
For questions about implementation:
- Review inline comments in code
- Check browser console for debugging
- Test responsiveness with DevTools

## 📄 License
Proprietary - Klyvo Partners © 2025

---

**System Status:** ONLINE ✅
