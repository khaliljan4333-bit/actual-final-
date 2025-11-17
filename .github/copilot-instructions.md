<!--
Guidance for AI coding agents working on this repository.
Keep this short, concrete, and repository-specific.
-->
# Copilot / AI agent instructions

This is a small static site (HTML/CSS/JS) with the following structure of interest:

- Top-level pages: `index.html`, `case.html`, `stats.html`, `faq.html`, `sources.html` — each is a standalone HTML file.
- Static assets: `assets/` holds `app.js`, `styles.css`, images (e.g. `assets/banner-new.jpg`) and any other static files.

Big picture
- No build system, no package.json, no server-side code. Edits are made directly to HTML/CSS/JS and deployed as static files.
- The site is client-rendered with minimal vanilla JS. `assets/app.js` only updates the footer year via DOMContentLoaded.

Key files and what to change where (examples)
- Change global colors or theme tokens: edit `assets/styles.css` :root variables (e.g. `--green`, `--red`, `--gold`).
- Change header/nav structure or page content: edit the corresponding top-level HTML file (`index.html`, `case.html`, etc.).
- Change small client behavior (footer year): edit `assets/app.js` (see DOMContentLoaded handler).
- Hero banner image referenced from CSS: `assets/styles.css` uses `background-image: url("assets/banner-new.jpg")` — ensure that file exists or update the path.

Developer workflows (concrete commands)
- Local preview (recommended): from the repo root run a simple static server and open the URL in the browser:

  python3 -m http.server 8000

  Then visit http://localhost:8000

- Alternative: use the VS Code Live Server extension to preview pages live while editing.
- Deploy: there is no CI/hosting configuration. This is a standard static site — common deploy targets are GitHub Pages, Netlify, or any static host. Push `main` to the remote and configure your static host as needed.

Project-specific conventions and gotchas
- Single-responsibility pages: each HTML file is self-contained (top-level nav links between pages). Avoid introducing frameworks or module bundlers unless explicitly requested.
- Asset paths are relative and assume files live at the repo root. Keep `assets/` as the canonical location.
- Important discovered bug: `assets/styles.css` contains an unterminated comment around the `.stats-chart` rule (`/* Responsive*`), which comments out subsequent CSS and can break styles. Be careful when editing CSS; validate after changes.
- Buttons and CTAs use utility classes like `.btn` and `.btn.primary` — prefer reusing those for consistent styles.

Data flow & integrations
- There are no external APIs or build-time integrations documented in the repository. If you need to fetch data for `stats.html`, add a small client-side fetch or add pre-generated JSON files to `assets/` and reference them from the page.

Editing & PR guidance for AI agents
- Make minimal, focused changes. Create a short PR with a single intent (fix, content change, new asset).
- When changing styles, verify in a local server and test the main pages (`index.html`, `case.html`, `stats.html`) visually.
- Preserve accessibility attributes present in markup (e.g., `aria-current="page"` on nav links).

Edge cases to check after edits
- Missing image files referenced in CSS (`banner-new.jpg`) — verify 404s in browser dev tools.
- CSS parsing problems (unterminated comments) — these silently disable the remainder of the stylesheet.
- Broken relative links between pages — test nav links after edits.

If you need more context
- Open `index.html`, `assets/styles.css`, and `assets/app.js` to see concrete examples referenced above.
- If you plan to introduce a build system or server-side component, ask for approval — this repo is intentionally simple and static.

If anything in this doc is unclear or you need additional examples (small edit PRs, test checklist, or deploy steps for a specific host), ask and I will iterate.
