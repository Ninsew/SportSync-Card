export interface SportEvent {
  id: string;
  title: string;
  sport: string;
  league: string | null;
  channel: string;
  channel_logo: string | null;
  start_time: string;
  end_time: string | null;
  home_team: string | null;
  away_team: string | null;
  is_live: boolean;
  source: string;
}

export interface SportSyncCardConfig {
  type: string;
  entity: string;
  title?: string;
  show_live_indicator?: boolean;
  show_channel_logo?: boolean;
  show_sport_icon?: boolean;
  max_events?: number;
  group_by_sport?: boolean;
  hide_past_events?: boolean;
  compact_mode?: boolean;
  show_starting_soon?: boolean;
  starting_soon_minutes?: number;
  show_last_updated?: boolean;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService: (domain: string, service: string, data?: Record<string, unknown>) => Promise<void>;
  formatEntityState: (entity: HassEntity) => string;
  formatEntityAttributeValue: (entity: HassEntity, attribute: string) => string;
  localize: (key: string, ...args: unknown[]) => string;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
  context: {
    id: string;
    parent_id: string | null;
    user_id: string | null;
  };
}

export const SPORT_ICONS: Record<string, string> = {
  football: 'mdi:soccer',
  hockey: 'mdi:hockey-puck',
  basketball: 'mdi:basketball',
  tennis: 'mdi:tennis',
  golf: 'mdi:golf',
  handball: 'mdi:handball',
  motorsport: 'mdi:racing-helmet',
  cycling: 'mdi:bike',
  skiing: 'mdi:ski',
  biathlon: 'mdi:target',
  alpine: 'mdi:ski',
  athletics: 'mdi:run',
  swimming: 'mdi:swim',
  boxing: 'mdi:boxing-glove',
  mma: 'mdi:karate',
  american_football: 'mdi:football',
  baseball: 'mdi:baseball',
  volleyball: 'mdi:volleyball',
  table_tennis: 'mdi:table-tennis',
  badminton: 'mdi:badminton',
  rugby: 'mdi:rugby',
  horse_racing: 'mdi:horse',
  snooker: 'mdi:billiards',
  darts: 'mdi:bullseye-arrow',
  padel: 'mdi:tennis',
  floorball: 'mdi:hockey-sticks',
  bandy: 'mdi:hockey-sticks',
  curling: 'mdi:curling',
  esports: 'mdi:controller',
  sailing: 'mdi:sail-boat',
  winter_sports: 'mdi:snowflake',
  other: 'mdi:trophy',
};

export const SPORT_NAMES: Record<string, string> = {
  football: 'Fotboll',
  hockey: 'Ishockey',
  basketball: 'Basket',
  tennis: 'Tennis',
  golf: 'Golf',
  handball: 'Handboll',
  motorsport: 'Motorsport',
  cycling: 'Cykling',
  skiing: 'Skidor',
  biathlon: 'Skidskytte',
  alpine: 'Alpint',
  athletics: 'Friidrott',
  swimming: 'Simning',
  boxing: 'Boxning',
  mma: 'MMA',
  american_football: 'Amerikansk fotboll',
  baseball: 'Baseball',
  volleyball: 'Volleyboll',
  table_tennis: 'Bordtennis',
  badminton: 'Badminton',
  rugby: 'Rugby',
  horse_racing: 'Trav/Galopp',
  snooker: 'Snooker/Biljard',
  darts: 'Dart',
  padel: 'Padel',
  floorball: 'Innebandy',
  bandy: 'Bandy',
  curling: 'Curling',
  esports: 'E-sport',
  sailing: 'Segling',
  winter_sports: 'Vintersport',
  other: 'Övrigt',
};

// Channel logos fallback map - primarily uses channel_logo from event data
// This is empty since Wikimedia blocks hotlinking - logos come from SportSync integration
export const CHANNEL_LOGOS: Record<string, string> = {};
