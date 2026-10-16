# DASSORU Photography — GitHub Pages Production Build

Production-ready static build for **DASSORU — Photography by Basuru Jayasanka**.

## 🌐 Official Site URL
**`https://dassoru.github.io/`**

> **Note on domain format:**
> GitHub Pages user sites use `https://<username>.github.io/`. Do not use `www.` or `http://` (e.g. `http://www.dassoru.github.io` does not resolve unless you have registered a custom domain `dassoru.com` with a CNAME record). GitHub Pages automatically provides and enforces free HTTPS with automated SSL certificates.

---

## 📁 Repository Structure
When publishing to GitHub, upload all files and folders located inside this `DASSORU/` directory directly into the **root** of your `dassoru.github.io` repository:

```text
dassoru.github.io/ (repository root)
├── .nojekyll                 <-- Prevents Jekyll build issues & enables underscore files
├── 404.html                  <-- Custom branded 404 error page
├── index.html                <-- Homepage with selected photographs & journal preview
├── about.html                <-- Full biography, camera history, & philosophy
├── contact.html              <-- Dedicated contact page with enquiry form & social channels
├── journal.html              <-- Story collection for all photographs
├── robots.txt                <-- Search crawler instructions with sitemap reference
├── sitemap.xml               <-- Complete XML sitemap including Google Image tags
├── site.webmanifest          <-- PWA & mobile browser manifest
├── README.md                 <-- Site documentation & deployment instructions
├── assets/                   <-- Brand logos, camera photo, & reference graphics
├── css/
│   └── style.css             <-- Responsive stylesheet with dark theme & accessible navigation
├── js/
│   └── script.js             <-- Mobile menu toggle, keyboard navigation, & portfolio filter
├── photography/
│   ├── index.html            <-- Filterable portfolio gallery (All, Wildlife, Nature, Travel, People)
│   ├── backwaters-boat-ride.html
│   ├── birds-by-the-water.html
│   ├── blood-is-thicker-than-water.html
│   ├── closest-one-to-us.html
│   ├── innocent-smile-at-the-paddy-field.html
│   ├── just-curious.html
│   ├── patience-waterside-bird.html
│   ├── vibe-in-the-trees.html
│   └── wild-flowers-golden-light.html
├── photos/                   <-- Optimized high-res WebP photographs for detail pages
├── thumbs/                   <-- Fast-loading WebP thumbnails for gallery grids
└── originals/                <-- Archival PNG master files (optional backup)
```

---

## 🚀 How to Publish for Free on GitHub Pages

### Step 1: Create the GitHub Repository
1. Log in to your GitHub account (`dassoru`).
2. Click **New Repository** (or visit [github.com/new](https://github.com/new)).
3. In **Repository name**, enter exactly:
   ```text
   dassoru.github.io
   ```
4. Set the repository to **Public**.
5. (Optional) Check "Add a README file" if initializing via web UI, or leave unchecked if pushing via Git CLI.

### Step 2: Upload Website Files to the Repository Root
- **Option A (Via Git Terminal):**
  ```bash
  cd "path/to/DASSORU"
  git init
  git add .
  git commit -m "Initial launch of DASSORU photography portfolio"
  git branch -M main
  git remote add origin https://github.com/dassoru/dassoru.github.io.git
  git push -u origin main
  ```
- **Option B (Via GitHub Web Interface):**
  - Open the repository on GitHub.
  - Drag and drop all the contents of the `DASSORU` directory (not the folder itself, but its contents: `index.html`, `about.html`, `css/`, `js/`, etc.) into the repository file uploader.
  - Commit changes to `main`.

### Step 3: Configure GitHub Pages Settings
1. In your repository on GitHub, go to **Settings** → **Pages** (under the "Code and automation" section).
2. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and `/ (root)`.
   - Click **Save**.
3. Under **Custom domain**, ensure **Enforce HTTPS** is checked (this secures the site with a free Let's Encrypt TLS certificate).
4. Wait 1–2 minutes. A green banner will appear: *"Your site is live at https://dassoru.github.io/"*.

### Step 4: Verify & Submit to Search Engines
1. Open `https://dassoru.github.io/` on desktop and mobile browsers.
2. Test navigation, category filters in the Portfolio, and the WhatsApp/Email enquiry links.
3. Open [Google Search Console](https://search.google.com/search-console) and submit your sitemap:
   ```text
   https://dassoru.github.io/sitemap.xml
   ```

---

## ✨ Improvements & Compatibility Enhancements Included in this Version
1. **Mobile Menu & Navigation:**
   - Fixed mobile menu toggle functionality across all pages with smooth opening/closing.
   - Added `aria-expanded` and `aria-label` accessibility attributes for screen readers.
   - Added automatic closing on link tap, outside click, and keyboard `Escape`.
2. **Jekyll Bypass (`.nojekyll`):**
   - Added `.nojekyll` to prevent GitHub Pages Jekyll compiler from ignoring underscore files (like `originals/_DSC3870-1.png`) and accelerate build times.
3. **Custom 404 Error Page (`404.html`):**
   - Added branded 404 page matching the dark aesthetic with links back to the portfolio and homepage.
4. **Core Web Vitals & Zero Layout Shift (CLS):**
   - Added intrinsic `width` and `height` attributes to all images across homepage, portfolio, journal, and detail pages.
   - Added responsive aspect-ratio preservation (`height: auto;`) in CSS.
5. **SEO & Social Sharing:**
   - Completed Open Graph (`og:*`) and Twitter Card (`twitter:*`) tags across all pages (`about.html`, `journal.html`, `photography/index.html`).
   - Standardized Schema.org structured data (`WebSite`, `Person`, `AboutPage`, `CollectionPage`, `ImageObject`).
6. **Detail Page Previous / Next Navigation:**
   - Added sequential navigation (`← Previous Photo` | `All Photographs` | `Next Photo →`) at the bottom of each photo story.
7. **Contact & Licensing Links:**
   - Corrected URI encoding in mailto subject lines (`%20`).
   - Enhanced WhatsApp links with pre-filled message text identifying the specific photograph.
8. **PWA & Browser Chrome:**
   - Connected `site.webmanifest`, added `apple-touch-icon`, and defined `<meta name="theme-color" content="#0b0b0b">`.
9. **Reader Reflections & Interactive Comments System:**
   - Added dedicated, serverless comments and reader reflection sections on every photograph story page.
   - Pre-seeded with authentic community reflections tailored to each story and photograph.
   - Saves new reader thoughts in the browser's `localStorage` with real-time UI rendering and feedback.
   - Includes one-tap direct WhatsApp sharing so readers can forward their reflection straight to Basuru.
   - 100% private, zero-bloat, zero-tracker design tailored for GitHub Pages static hosting.
10. **Dedicated Contact & Enquiry Page (`contact.html`):**
    - Created full editorial Contact page with interactive enquiry form, subject routing, and client-side validation.
    - Integrated direct WhatsApp button with formatted message payload to `+94 76 301 1292`.
    - Integrated direct email draft action to `basuruphotography3276@gmail.com`.
    - Added comprehensive social links (Facebook, Instagram, YouTube, TikTok) and studio location info.
    - Updated global navigation across all pages to link directly to `contact.html`.

---

© 2026 Basuru Jayasanka. All photographs reserved.
