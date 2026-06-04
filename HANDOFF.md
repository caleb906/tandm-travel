# T&M Travel — Project Handoff

_Last updated: 2026-06-02_

A rebuild of **Marilyn Hamper's T&M Travel** site (Central Oregon travel advisor, Bend OR, est. 1992). Marilyn is Caleb's grandmother and a former Hoffmedia branding client. The original WordPress site (`tandmtravel.com`, hosted at SiteGround) kept going down; this is a fast, static replacement.

---

## Live + where it lives

| | |
|---|---|
| **Live (production)** | **tandmtravel.com** — LIVE (DNS repointed 2026-06-03). Production deploys from `main`. |
| **Staging** | https://tandm-travel-git-staging-caleb-hoffmanns-projects.vercel.app — deploys from the `staging` branch (Vercel preview, never touches prod) |
| **Vercel preview** | https://tandm-travel.vercel.app |
| **GitHub** | `caleb906/tandm-travel` |
| **Vercel project** | `tandm-travel` (team scope `caleb-hoffmanns-projects`) |
| **Local folder** | `C:\Users\Caleb\Documents\Hoffmedia Sites\T&M Travel` |
| **Built with** | the `_Starter` scaffold in `Hoffmedia Sites` |

---

## ⚠️ Deploy rule (site is LIVE)

`tandmtravel.com` is live. **Never push `main` / deploy to prod without Caleb's explicit clearance.** Work on the **`staging`** branch:

```bash
git checkout staging
# ...edits...
git add -A && git commit -m "..." && git push origin staging   # preview only, safe
```

Review on the staging URL above. Only on Caleb's go: `git checkout main && git merge staging && git push` (auto-deploys prod), or `vercel deploy --prod --yes --scope caleb-hoffmanns-projects`. Confirmed via Vercel that only `main` serves the production domains; all other branches are preview targets.

> DNS is done (A records repointed off SiteGround 2026-06-03 — `@` + `www` → `76.76.21.21`, NS/MX left intact so email survives).

## Remaining manual step

### Send form leads to Marilyn (Web3Forms)
Forms post to **Web3Forms** (key `6210f437-6876-4671-946c-fda6374efaab`) so every submission is logged in the Web3Forms dashboard. To make leads **bypass Caleb and go straight to Marilyn**:

1. Web3Forms → **Linked Emails** → add `marilyn@tandmtravel.com` → click the verify link sent to that inbox.
2. Open the **T&M Travel** form → **Settings** → **Recipient Emails** → set to `marilyn@tandmtravel.com`, remove Caleb's, no CC.
3. Save. (The one-time email verify is unavoidable — Web3Forms only sends to verified addresses.)

Reply-to is the traveler's email, so Marilyn replies straight to the customer. Spam: both forms have a Web3Forms **hCaptcha** (`data-captcha="true"` + their client script) plus a honeypot.

---

## Site structure

Static HTML, no build step. Mobile-first. Shared `styles.css` + `nav.js`. Clean URLs (`/services` not `/services.html`, via `cleanUrls` in `vercel.json`).

- **7 pages:** `index.html` (home), `services.html`, `about.html`, `contact.html`, `estimate.html`, `thank-you.html`, `privacy.html`
- **`styles.css`** — entire design system (class names preserved for the `_Builder` CMS)
- **`nav.js`** — mobile nav toggle + footer year
- **`analytics.js`** — centralized GA4 wrapper, **GA_ID is intentionally blank** (no tracking fires until T&M has its own GA4 property; was scrubbed of Wright Excavation's IDs)
- **`brand_assets/`** — logos (`logo-navy/white/green.png`), `photos/` (recovered + Marilyn's headshot), `icons/` (25 recolored travel icons)

**Home page = StoryBrand spine:** Hero (outcome + CTA) → Problem (tinted empathy beat) → Why T&M Travel → Guide (Meet Marilyn) → Reviews (dark band) → Plan (3 steps) → Services → Success/Vision → FAQ → Final CTA.

## Brand

- **Palette:** navy `#0C1B33` (ink), lime `#8CC743` (primary/CTA), forest `#235333`, teal `#00B09B`, paper `#FBFAF8`
- **Fonts:** Montserrat (display) + Barlow (body)
- **Headline:** "The vacation you want, planned for you." (her tagline "stop stressing… start enjoying it" lives in body copy)
- **Specialty:** honeymoons & European travel · **Partners:** Europe Express, Classic Vacations
- **Contact:** Marilyn Hamper · (541) 317-0656 · marilyn@tandmtravel.com · Bend, OR
- **Reviews:** 5.0 / 7 on Google (3 real quotes shown on home)

## Content provenance
Copy + photos recovered from the old WordPress site (Wayback archive + the live wp-content, which still served images while the homepage 503'd). Photos are the licensed stock she originally used; her headshot is real (Caleb provided). Brand kit from Dropbox: `Hoffmedia/Freelance/Old Clients/T&M Travel`.

---

## How to make changes

```bash
cd "C:\Users\Caleb\Documents\Hoffmedia Sites\T&M Travel"
PORT=4399 node serve.mjs                       # local preview (3000/3100 are other projects)
node screenshot.mjs http://localhost:4399 label # desktop screenshot
node screenshot.mjs http://localhost:4399 label --mobile
```

Deploy to production:
```bash
git add -A && git commit -m "..." && git push
vercel deploy --prod --yes --scope caleb-hoffmanns-projects
```

## Open / optional follow-ups
- Add a GA4 property + set `GA_ID` in `analytics.js` if Marilyn wants analytics.
- Verify the FAQ "cost/fee" answer matches how Marilyn actually charges before launch.
- Swap the recovered stock photos for any originals she has.
- Logos for Europe Express / Classic Vacations if she wants them shown as images (currently text).
