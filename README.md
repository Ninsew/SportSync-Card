# SportSync Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/release/your-username/sportsync-card.svg)](https://github.com/your-username/sportsync-card/releases)

Custom Lovelace cards for displaying sport TV schedules from the [SportSync](https://github.com/your-username/sportsync) Home Assistant integration.

## Features

- **SportSync Card** - Full event list with filtering and grouping
- **SportSync Next Card** - Compact card showing next upcoming match with countdown

### SportSync Card Features
- Live event indicator with pulsing animation
- "Starting soon" warning (configurable)
- Click events for detailed popup with countdown
- Channel logos for Swedish TV channels
- Group by sport
- Compact mode
- Show/hide past events

### SportSync Next Card Features
- Shows next upcoming or live match
- Real-time countdown (updates every second)
- Team vs team display
- "Starting soon" warnings
- Perfect for sidebar placement

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to "Frontend" section
3. Click the three dots menu and select "Custom repositories"
4. Add this repository URL with category "Lovelace"
5. Search for "SportSync Card" and install
6. Reload your browser

### Manual Installation

1. Download `sportsync-card.js` from the [latest release](https://github.com/your-username/sportsync-card/releases)
2. Copy to `config/www/sportsync-card.js`
3. Add resource in Lovelace:
   ```yaml
   resources:
     - url: /local/sportsync-card.js
       type: module
   ```

## Usage

### SportSync Card

```yaml
type: custom:sportsync-card
entity: sensor.sportsync_alla_sandningar
title: Sport på TV
max_events: 15
show_live_indicator: true
show_starting_soon: true
starting_soon_minutes: 15
show_sport_icon: true
show_channel_logo: true
group_by_sport: false
hide_past_events: true
compact_mode: false
show_last_updated: false
```

### SportSync Next Card

```yaml
type: custom:sportsync-next-card
entity: sensor.sportsync_favoriter
title: Nästa match
show_countdown: true
show_channel: true
show_league: true
```

## Configuration Options

### SportSync Card

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | **required** | SportSync sensor entity |
| `title` | string | sensor name | Card title |
| `max_events` | number | 20 | Maximum events to show |
| `show_live_indicator` | boolean | true | Show live badge |
| `show_starting_soon` | boolean | true | Show "starting soon" warning |
| `starting_soon_minutes` | number | 15 | Minutes threshold for warning |
| `show_sport_icon` | boolean | true | Show sport icon |
| `show_channel_logo` | boolean | true | Show channel logos |
| `group_by_sport` | boolean | false | Group events by sport |
| `hide_past_events` | boolean | true | Hide finished events |
| `compact_mode` | boolean | false | Compact display mode |
| `show_last_updated` | boolean | false | Show last update time |

### SportSync Next Card

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | **required** | SportSync sensor entity |
| `title` | string | "Nästa match" | Card title |
| `show_countdown` | boolean | true | Show countdown timer |
| `show_channel` | boolean | true | Show TV channel |
| `show_league` | boolean | true | Show league/competition |

## Screenshots

*Coming soon*

## Supported Channels

Channel logos are included for:
- SVT1, SVT2
- TV4, TV4 Sport, TV4+
- V Sport (all variants)
- C More (all variants)
- Eurosport 1 & 2
- TV3, TV6
- Kanal 5, Kanal 9
- Discovery+, Max
- Viaplay

## Requirements

- Home Assistant 2023.1 or newer
- [SportSync](https://github.com/your-username/sportsync) integration installed

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run watch
```

## License

MIT
