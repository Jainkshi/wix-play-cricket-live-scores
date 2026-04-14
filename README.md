# wix-play-cricket-live-scores

BCC Play Cricket – dynamic live scores page built with **Wix CMS + Velo + HTML Component**.

---

## Overview

This project delivers a Wix page that:

- Reads widget configurations from a Wix CMS collection (`LiveScoreWidgets`)
- Presents them in a dropdown so visitors can switch between club, team, and division live scores
- Renders the official [Play-Cricket live scorer widget](https://www.play-cricket.com) inside a Wix HTML Component
- Handles errors and loading states gracefully

---

## Repository Structure

```
src/
  pages/
    live-scores.js       # Wix Velo page code
  html/
    widget-loader.html   # Wix HTML Component
docs/
  cms-schema.md          # CMS collection schema & sample data
README.md
```

---

## Setup Instructions

### Step 1 – Create the CMS Collection

1. Open your Wix site in the **Wix Editor**.
2. Go to **CMS → + New Collection**.
3. Name the collection **`LiveScoreWidgets`** (the ID must match exactly).
4. Add the fields described in [`docs/cms-schema.md`](docs/cms-schema.md).
5. Set **Read** permissions to **Anyone** and **Write** to **Admin**.
6. Enter your sample records (see the schema doc for examples).

### Step 2 – Create the Live Scores Page

1. In the Wix Editor, add a **new page** named `Live Scores`.
2. Add the following elements and set their IDs:

   | Element          | Wix Type        | ID                 |
   | ---------------- | --------------- | ------------------ |
   | Widget selector  | Dropdown        | `#widgetDropdown`  |
   | Page heading     | Text            | `#titleText`       |
   | Short blurb      | Text            | `#descText`        |
   | Widget frame     | HTML Component  | `#html1`           |

### Step 3 – Add the HTML Component Code

1. Click the **HTML Component** (`#html1`) on the canvas.
2. In its settings panel choose **Code**.
3. Paste the entire contents of [`src/html/widget-loader.html`](src/html/widget-loader.html).
4. Save.

### Step 4 – Add the Velo Page Code

1. Open the **Velo Dev Mode** panel (toggle **Dev Mode** in the Editor toolbar).
2. In the left-hand file tree expand **Page Code** and open the file for your `Live Scores` page.
3. Replace any existing code with the contents of [`src/pages/live-scores.js`](src/pages/live-scores.js).
4. Save.

### Step 5 – Publish & Verify

1. Click **Publish** in the Wix Editor.
2. Open the published page.
3. Confirm that:
   - The dropdown is populated with your CMS widget titles.
   - The first widget loads automatically.
   - Switching the dropdown replaces the widget correctly.
   - All three widget types (club / team / division) work.

---

## How It Works

```
Visitor opens Live Scores page
        │
        ▼
Velo page code queries LiveScoreWidgets CMS
  (filter: isActive = true, sort: sortOrder ASC)
        │
        ▼
Dropdown populated with widget titles
First widget loaded automatically
        │
        ▼
loadWidget(item)
  ├── Updates #titleText and #descText
  └── Calls #html1.postMessage(config)
                │
                ▼
        widget-loader.html receives message
          ├── validateConfig(config)
          ├── buildWidgetUrl(config)
          └── renderWidget(config)
                  ├── Clears previous widget
                  ├── Injects Play-Cricket CSS (once)
                  └── Injects Play-Cricket JS (per render)
```

---

## CMS Collection Schema

See [`docs/cms-schema.md`](docs/cms-schema.md) for the full field list and sample records.

---

## Widget Types

| `widgetType` | Required field | Play-Cricket URL param |
| ------------ | -------------- | ---------------------- |
| `club`       | `clubId`       | `club_id`              |
| `team`       | `teamId`       | `team_id`              |
| `division`   | `divisionId`   | `division_id`          |

---

## Constraints

- Uses **only** the official Play-Cricket embed widget (no direct API polling).
- Only **one** widget is rendered at a time; the previous widget is removed before rendering the next.
- No external JavaScript frameworks – plain vanilla JS in the HTML Component.
- Fully **CMS-driven**: adding or editing widget configurations requires no code changes.
