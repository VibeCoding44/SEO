PRODUCT REQUIREMENTS DOCUMENT (PRD)
Project: Faith Christian Academy (FCA) Website Rebuild & Local SEO Optimization
Role & Execution Context
You are a senior full-stack engineer and technical SEO architect.
Your task is to rebuild and optimize the existing website at:
https://www.fcafalcons.org
The rebuild must closely match the current site’s structure and content flow while delivering:
Significantly improved performance
Clean, modern code
Full local SEO entity recognition by Google
A maintainable Next.js + Headless CMS (Sanity) architecture
This is not a pixel-perfect clone, but a structural + informational clone with rewritten code and improved UX/SEO.
1. Objectives
Primary Objectives
Rebuild the site using Next.js (App Router) + Sanity CMS
Preserve existing information architecture, page hierarchy, and content intent
Optimize the site for:
Local search visibility (Plant City, FL)
Admissions-related conversions (Request a Tour, Contact)
Make Google clearly recognize the organization as:
A School
An EducationalOrganization
A LocalBusiness entity
Secondary Objectives
Improve Core Web Vitals
Ensure mobile-first UX
Enable non-technical staff to edit content via CMS
Prepare site for future SEO expansion (location pages, blog, events)
2. Target Users
Primary Users
Parents/guardians searching for:
Christian private schools in Plant City, FL
Tuition, admissions, tours, curriculum
Secondary Users
Students and alumni
Faculty and staff
Local community members
3. Technology Stack (MANDATORY)
Frontend
Next.js (App Router)
TypeScript
Tailwind CSS
Server Components by default
Static Generation (SSG) + Incremental Static Regeneration (ISR)
CMS
Sanity (v3)
Page-builder style content using modular blocks
Live preview support
Hosting & Infra
Vercel (Next.js hosting)
Sanity hosted studio
Optional:
Cloudinary (image optimization)
Resend or SendGrid (form submissions)
4. Site Architecture (Clone-Style)
Required Pages (Phase 1)
Recreate the following pages with similar structure and intent:
Home (/)
About FCA
Admissions (hub)
Tuition & Fees
Request a Tour
FAQ
Summer Enrichment
Academics
Student Life
Athletics
Contact
SEO Support Pages (Must Be CMS-Driven)
“Christian Private School in Plant City, FL”
“Admissions at Faith Christian Academy – Plant City”
“K–12 Christian Education in Plant City”
5. Content Strategy Rules
Do not copy text verbatim
Rewrite content while preserving:
Meaning
Structure
Section order
Improve clarity, depth, and local relevance
Each page must have:
One clear H1
Logical H2/H3 structure
Internal links to related pages
Clear CTA (Tour / Contact / Admissions)
6. CMS Content Models (Sanity)
Required Document Types
siteSettings
School name
Logo
Primary location (NAP)
Navigation
Footer links
Default SEO
page
Title
Slug
Page type (home / standard / landing)
SEO object
Modular page sections
location
Name
Address
Phone
Email
Geo coordinates
Business hours
Required Module Types
Hero
Rich Text
Cards Grid
CTA
FAQ
Testimonials
Stats
Gallery
Logos / Accreditations
7. Local SEO & Entity Recognition (CRITICAL)
NAP Consistency
Use one canonical name, address, and phone number
Source of truth must live in CMS (location document)
Render NAP identically in:
Footer
Contact page
Schema markup
Schema (JSON-LD)
Inject server-rendered structured data:
["@type": ["School", "EducationalOrganization", "LocalBusiness"]]
Include:
Name
Address (PostalAddress)
Phone
Email
GeoCoordinates
SameAs (social profiles)
Additional Schema
BreadcrumbList (sitewide)
FAQPage (FAQ pages only)
Event (if events are added later)
8. Metadata & Indexing
Per-Page SEO
Unique title tag (50–60 chars)
Meta description (140–160 chars)
Canonical URL
Open Graph data
Robots meta support (noindex where needed)
Technical SEO
XML sitemap
Robots.txt
Clean URLs (no .cfm)
301 redirects from legacy URLs
9. Performance Requirements
Lighthouse mobile scores prioritized
Minimal client-side JS
Optimized images (WebP/AVIF)
Lazy loading where appropriate
Font optimization
10. Forms & Conversion
Request a Tour
Server-side form handling OR third-party provider
Spam protection (honeypot / Turnstile)
Clear success/failure states
Conversion Goals
Tour requests
Contact form submissions
Click-to-call on mobile
11. Redirect & Migration Rules
Audit all existing URLs
Map old URLs → new clean slugs
Apply 301 redirects in Next.js config
Preserve SEO equity
12. Analytics & Tracking
Google Analytics (GA4)
Google Search Console
Google Business Profile integration
Event tracking for:
Form submissions
CTA clicks
13. Definition of Done (Launch Checklist)
All required pages live
CMS editable content
Schema validates with Google Rich Results Test
NAP consistent everywhere
Sitemap submitted
Redirects working
Mobile-friendly verified
Core Web Vitals acceptable