/**
 * Live Scores Page – Wix Velo Code
 *
 * Page elements required:
 *   #widgetDropdown  – Wix Dropdown
 *   #titleText       – Wix Text element
 *   #descText        – Wix Text element
 *   #html1           – Wix HTML Component
 *
 * CMS collection: LiveScoreWidgets
 *   Fields: title, slug, widgetType, clubId, teamId, divisionId,
 *           days, description, isActive, sortOrder
 */

import wixData from 'wix-data';

const COLLECTION = 'LiveScoreWidgets';

// ─── Page initialisation ────────────────────────────────────────────────────

$w.onReady(async () => {
  try {
    const items = await fetchActiveWidgets();

    if (!items || items.length === 0) {
      $w('#titleText').text = 'No live score widgets available';
      $w('#descText').text = 'Please check the CMS collection for active widgets.';
      return;
    }

    setDropdownOptions(items);
    await loadWidget(items[0]);

    $w('#widgetDropdown').onChange(async (event) => {
      const selectedSlug = event.target.value;
      const item = items.find((i) => i.slug === selectedSlug);
      if (item) {
        await loadWidget(item);
      }
    });
  } catch (err) {
    console.error('Live Scores page error:', err);
    $w('#titleText').text = 'Error loading live scores';
    $w('#descText').text = 'An unexpected error occurred. Please try again later.';
  }
});

// ─── Data helpers ────────────────────────────────────────────────────────────

/**
 * Fetch all active widget configurations from the CMS, sorted by sortOrder.
 * @returns {Promise<Object[]>} Array of CMS items
 */
async function fetchActiveWidgets() {
  const result = await wixData
    .query(COLLECTION)
    .eq('isActive', true)
    .ascending('sortOrder')
    .find();

  return result.items;
}

// ─── UI helpers ──────────────────────────────────────────────────────────────

/**
 * Populate the dropdown with widget options derived from CMS items.
 * @param {Object[]} items – CMS items
 */
function setDropdownOptions(items) {
  const options = items.map((item) => ({
    label: item.title,
    value: item.slug,
  }));

  $w('#widgetDropdown').options = options;

  if (options.length > 0) {
    $w('#widgetDropdown').selectedIndex = 0;
  }
}

/**
 * Update the page title, description, and HTML component for the given item.
 * @param {Object} item – A single CMS item
 */
async function loadWidget(item) {
  $w('#titleText').text = item.title || '';
  $w('#descText').text = item.description || '';

  const config = buildWidgetConfig(item);
  $w('#html1').postMessage(config);
}

// ─── Config builder ───────────────────────────────────────────────────────────

/**
 * Build a plain-object widget configuration from a CMS item.
 * @param {Object} item – A single CMS item
 * @returns {Object} Widget config
 */
function buildWidgetConfig(item) {
  return {
    widgetType: item.widgetType,
    clubId: item.clubId || null,
    teamId: item.teamId || null,
    divisionId: item.divisionId || null,
    days: typeof item.days === 'number' ? item.days : 0,
  };
}
