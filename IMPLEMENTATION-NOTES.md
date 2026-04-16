## Play-Cricket Live Scores Hub - Implementation Notes

### 1) What to edit in each widget file

At the top of each file, edit the `CONFIG` object:

- `title`
- `subtitle`
- `widgetType` (`club`, `team`, `division`)
- `clubId` (for club widgets)
- `teamId` (for team widgets)
- `divisionId` (for division widgets)
- `days`
- `theme.accent` (optional)

### 2) ID mapping guidance

- `club-widget.html`: set `widgetType: 'club'` and a valid `clubId`
- `team-widget.html`: set `widgetType: 'team'` and a valid `teamId`
- `division-widget.html`: set `widgetType: 'division'` and a valid `divisionId`

### 3) How to paste into Wix

1. Add an **Embed HTML** element.
2. Open Embed settings and paste the **entire** HTML file content.
3. Resize the embed (desktop usually `900px`–`1200px` tall).
4. Repeat for each team/division version you want to show.

### 4) Known limitations

- Play-Cricket may return no rendered widget when no live match is active.
- In that case, the embed shows a friendly empty/fallback status.
- Cross-origin iframe boundaries in Wix mean native Wix styles will not automatically apply inside the embed.

### 5) Scalable option

Use `score-widget-template.html` as a base file and create copies per team/division.
Only `CONFIG` values need changing for most new variants.
