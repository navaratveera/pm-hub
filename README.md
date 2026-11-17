# PM Hub

Free project management tools that run in the browser: no sign-up, no server.

**Open it:** https://navaratveera.github.io/pm-hub/

| Tool | Link | Status |
|---|---|---|
| Timeline Planner | [/timeline/](https://navaratveera.github.io/pm-hub/timeline/) | Live |
| Activity Tracker | [/activity-tracker/](https://navaratveera.github.io/pm-hub/activity-tracker/) | Live |
| Develop Team - Individual KPIs | [/individual-kpi/](https://navaratveera.github.io/pm-hub/individual-kpi/) | Live |
| Work Breakdown Structure | /wbs/ | Coming soon |

Everything people create is saved in their own browser and never leaves their device.
Use the export or backup option in each tool to keep a copy.

## Layout

```
index.html          hub page: header, footer and theme, cards built from tools.json
tools.json          list of tools: name, icon, path, status, description
timeline/           Timeline Planner
activity-tracker/   Activity Tracker
individual-kpi/     Develop Team - Individual KPIs
wbs/                Work Breakdown Structure (coming soon)
```

## Adding a tool

1. Create a folder with a single self-contained page, e.g. `raid/index.html`, with the footer credit.
2. Add an entry to `tools.json` with `"status": "soon"` while it is being built, then `"live"`.

## Working on changes

- `main` is the live site: whatever is on `main` is published by GitHub Pages.
- Build new tools on their own branch (e.g. `wbs`) and merge into `main` when ready.

---

© 2026 Navarat Veerawongchai. All rights reserved.
