# CMS Collection Schema – `LiveScoreWidgets`

This document defines the Wix CMS collection used by the Play-Cricket Live Scores page.

---

## Collection Details

| Property       | Value              |
| -------------- | ------------------ |
| Collection ID  | `LiveScoreWidgets` |
| Display Name   | Live Score Widgets |
| Permission     | Read: Anyone / Write: Admin |

---

## Fields

| Field Name    | Wix Type | Description                                    | Required |
| ------------- | -------- | ---------------------------------------------- | -------- |
| `title`       | Text     | Display name shown in the dropdown and as page heading | Yes |
| `slug`        | Text     | URL-safe unique identifier (e.g. `club-live`)  | Yes      |
| `widgetType`  | Text     | One of: `club`, `team`, `division`             | Yes      |
| `clubId`      | Text     | Play-Cricket club ID (required when `widgetType = club`) | No |
| `teamId`      | Text     | Play-Cricket team ID (required when `widgetType = team`) | No |
| `divisionId`  | Text     | Play-Cricket division ID (required when `widgetType = division`) | No |
| `days`        | Number   | Days range for live scores (default `0` = today) | No |
| `description` | Text     | Short description displayed below the page title | No |
| `isActive`    | Boolean  | Controls whether the widget appears in the dropdown | Yes |
| `sortOrder`   | Number   | Ascending sort order for dropdown options      | No       |

---

## Sample Records

### 1 – Club Live Matches

| Field       | Value              |
| ----------- | ------------------ |
| title       | Club Live Matches  |
| slug        | club-live-matches  |
| widgetType  | club               |
| clubId      | 12345              |
| days        | 0                  |
| description | Live scores for all club matches today |
| isActive    | true               |
| sortOrder   | 1                  |

### 2 – 1st XI Live

| Field       | Value         |
| ----------- | ------------- |
| title       | 1st XI Live   |
| slug        | 1st-xi-live   |
| widgetType  | team          |
| teamId      | 67890         |
| description | Live scores for the 1st XI |
| isActive    | true          |
| sortOrder   | 2             |

### 3 – Premier Division

| Field       | Value              |
| ----------- | ------------------ |
| title       | Premier Division   |
| slug        | premier-division   |
| widgetType  | division           |
| divisionId  | 54321              |
| days        | 1                  |
| description | Live division standings and scores |
| isActive    | true               |
| sortOrder   | 3                  |

---

## Permissions

- **Read**: Anyone (so the page can load data for all visitors)
- **Write / Update / Delete**: Admin only

Set these in: **Wix CMS → Collection Settings → Permissions**
