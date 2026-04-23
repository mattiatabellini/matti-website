# Mattia — Personal Site

Static site. No build step, no dependencies. Just HTML & CSS.

## Structure

```
├── index.html              ← Homepage
├── about.html              ← About page
├── thoughts.html           ← Thoughts listing
├── research.html           ← Research listing
├── data.html               ← Data Library listing
├── style.css               ← All styles
├── thoughts/
│   ├── _template.html      ← Duplicate for new thoughts
│   ├── dealer-balance-sheets.html
│   └── swap-spreads-signal.html
├── research/
│   ├── _template.html      ← Duplicate for new research
│   ├── treasury-intermediation.html
│   └── reading-list.html
├── data/
│   ├── _template.html      ← Duplicate for new data entries
│   ├── gcf-sofr-spread.html
│   ├── acm-term-premia.html
│   └── dealer-net-positions.html
└── README.md
```

## How to add content

1. Pick the section (thoughts / research / data)
2. Duplicate `_template.html` in that folder, rename it
3. Edit the content
4. Add a `<li>` entry to the section's listing page
5. Push to GitHub — Vercel auto-deploys

## Deploy

1. Push to GitHub
2. vercel.com → New Project → import repo → deploy
3. Add your domain in Vercel settings
4. Cost: ~€10/year for domain, hosting free
