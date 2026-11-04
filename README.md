# PM Hub

Free project management tools that run in the browser: no sign-up, no server.

**Open it:** https://navaratveera.github.io/pm-hub/

| Tool | Link | Status |
|---|---|---|
| Timeline Planner | [/timeline/](https://navaratveera.github.io/pm-hub/timeline/) | Live |
| Work Breakdown Structure | /wbs/ | Coming soon |

Everything people create is saved in their own browser (localStorage) and never leaves their device.
Use **Export CSV** in each tool to back up or share.

## Layout

```
index.html          hub page (cards are built from tools.json)
tools.json          list of tools: name, icon, path, status, description
shared/theme.css    shared colors and fonts
shared/nav.js       shared header menu and footer
timeline/           Timeline Planner
wbs/                Work Breakdown Structure (coming soon)
```

## Adding a tool

1. Create a folder, e.g. `raid/index.html`, and link `../shared/theme.css` and `../shared/nav.js` (with `data-root="../"`).
2. Add an entry to `tools.json` with `"status": "soon"` while it is being built, then `"live"`.

## Working on changes

- `main` is the live site: whatever is on `main` is published by GitHub Pages.
- Build new tools on their own branch (e.g. `wbs`) and merge into `main` when ready.

---

© 2026 Navarat Veerawongchai. All rights reserved.
