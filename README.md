# PM Hub

Free project management tools that run in the browser: no sign-up, no server.

**Open it:** https://navaratveera.github.io/pm-hub/

| Tool | Group | Link | Status | By |
|---|---|---|---|---|
| Develop Team - Individual KPIs | Resource Management | [/individual-kpi/](https://navaratveera.github.io/pm-hub/individual-kpi/) | Live | [Navarat V.](https://github.com/navaratveera) |
| Timeline Planner | Project Management | [/timeline/](https://navaratveera.github.io/pm-hub/timeline/) | Live | [Navarat V.](https://github.com/navaratveera) |
| Activity Tracker | Schedule Management | [/activity-tracker/](https://navaratveera.github.io/pm-hub/activity-tracker/) | Live | [Navarat V.](https://github.com/navaratveera) |
| Risk Register & Heat Map | Risk Management | [/risk-matrix/](https://navaratveera.github.io/pm-hub/risk-matrix/) | Live | [Navarat V.](https://github.com/navaratveera) |
| Requirement Roadmap | Scope Management | /requirement-roadmap/ | Coming soon | [Piyawan T.](https://github.com/beerpiyawan-del) |
| Work Breakdown Structure | Scope Management | /wbs/ | Coming soon | [Navarat V.](https://github.com/navaratveera) |

Everything people create is saved in their own browser and never leaves their device.
Use the export or backup option in each tool to keep a copy.

## Recent updates

- **2026-11-26 · Timeline Planner:** the chart is always exactly 16:9, so the PNG fills a PowerPoint slide. New **Copy image** button to paste straight into PowerPoint.
- **2026-11-20 · Hub:** Requirement Roadmap moved under Scope Management, shown as coming soon.
- **2026-11-19 · Hub:** cards sit three per row and show who built each tool.
- **2026-11-19 · Requirement Roadmap:** first version added by Piyawan T.
- **2026-11-16 · Timeline Planner:** a milestone can sit under a chosen activity, close to its bar.
- **2026-11-10 · Individual KPIs:** year picker, with KPIs and targets kept per year.
- **2026-11-10 · Risk Register & Heat Map:** new tool: 5×5 heat map, your own risk categories, PDF report.

## Layout

```
index.html          hub page: header, footer and theme, cards built from tools.json
tools.json          list of tools: name, group, icon, path, status, description, builders
individual-kpi/     Develop Team - Individual KPIs
timeline/           Timeline Planner
activity-tracker/   Activity Tracker
risk-matrix/        Risk Register & Heat Map
requirement-roadmap/ Requirement Roadmap (coming soon)
```

## Adding a tool

1. Create a folder with a single self-contained page, e.g. `raid/index.html`, with the footer credit.
2. Add an entry to `tools.json` with `"status": "soon"` while it is being built, then `"live"`. Put your name in `builders` so the card shows "by" you.
3. Add a row to the table above, and a line under **Recent updates** for every new tool or feature.

## Working on changes

- `main` is the live site: whatever is on `main` is published by GitHub Pages.
- Build new tools on their own branch (e.g. `wbs`) and merge into `main` when ready.

---

© 2026 Navarat Veerawongchai. All rights reserved.
