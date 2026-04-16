# wix-play-cricket-live-scores

Production-ready Play-Cricket **Live Scores** embeds for Wix using a simple, reliable architecture:

- one dedicated Wix page (`Live Scores`)
- native Wix selector UI at the top
- one large Embed HTML panel below
- self-contained widget HTML files (no Velo bootstrapping required)

## Files to use

- `/home/runner/work/wix-play-cricket-live-scores/wix-play-cricket-live-scores/club-widget.html`
- `/home/runner/work/wix-play-cricket-live-scores/wix-play-cricket-live-scores/team-widget.html`
- `/home/runner/work/wix-play-cricket-live-scores/wix-play-cricket-live-scores/division-widget.html`
- `/home/runner/work/wix-play-cricket-live-scores/wix-play-cricket-live-scores/score-widget-template.html` (optional scalable template)
- `/home/runner/work/wix-play-cricket-live-scores/wix-play-cricket-live-scores/IMPLEMENTATION-NOTES.md`

Each widget file is self-contained with:

- editable config block at the top of the script
- responsive shell/card layout
- loading, empty, and error states
- HTTPS-only Play-Cricket script/CSS loading
- no dependency on Wix Page Code / Velo for widget bootstrap

## Recommended Wix setup

1. Create a page named **Live Scores**.
2. Add a hero section:
   - Title: `Live Scores`
   - Text: `Follow club, team, and division scores in one place.`
3. Add a native Wix selector area (buttons/cards/repeater).
4. Add one large **Embed HTML** element as the main widget panel.
5. Add fallback helper text below the panel.
6. Paste one full widget file into each Embed HTML instance you use.

## Switching patterns

### Reliable launch pattern

Use separate pages or separate states/containers:

- club page/state → `club-widget.html`
- team page/state → `team-widget.html`
- division page/state → `division-widget.html`

### Scalable pattern

Use `score-widget-template.html` to generate more copies (e.g. 1st XI, 2nd XI, Women’s XI, Division 1, Division 2).

## Important constraints

- Keep widget target markup and script loader in the same HTML document.
- Do not split widget rendering across Velo page code and Embed HTML.
- Paste the complete widget HTML into Wix Embed HTML (not script-only snippets).

## Local preview

Open `index.html` to view a simple one-page selector + panel demo that switches between the three standalone widget files.
