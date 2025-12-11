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

// Swedish TV channel logos (using publicly available logos)
export const CHANNEL_LOGOS: Record<string, string> = {
  // SVT
  'SVT1': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/SVT1_logo_2016.svg/200px-SVT1_logo_2016.svg.png',
  'SVT2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/SVT2_logo_2016.svg/200px-SVT2_logo_2016.svg.png',
  'SVT': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/SVT_Logo_2006.svg/200px-SVT_Logo_2006.svg.png',

  // TV4
  'TV4': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/TV4_logo_2023.svg/200px-TV4_logo_2023.svg.png',
  'TV4 Sport': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/TV4_Sport_logo.svg/200px-TV4_Sport_logo.svg.png',
  'TV4+': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/TV4_Plus_logo.svg/200px-TV4_Plus_logo.svg.png',

  // Viaplay / V Sport
  'V Sport': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png',
  'V Sport 1': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png',
  'V Sport 2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png',
  'V Sport Premium': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png',
  'V Sport Hockey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png',
  'V Sport Fotboll': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png',
  'Viasat Sport': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png',
  'Viaplay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Viaplay_logo.svg/200px-Viaplay_logo.svg.png',

  // C More
  'C More': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/C_More_logo.svg/200px-C_More_logo.svg.png',
  'C More Live': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/C_More_logo.svg/200px-C_More_logo.svg.png',
  'C More Fotboll': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/C_More_logo.svg/200px-C_More_logo.svg.png',
  'C More Hockey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/C_More_logo.svg/200px-C_More_logo.svg.png',
  'C More Sport': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/C_More_logo.svg/200px-C_More_logo.svg.png',

  // Eurosport
  'Eurosport': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Eurosport_Logo_2015.svg/200px-Eurosport_Logo_2015.svg.png',
  'Eurosport 1': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Eurosport_Logo_2015.svg/200px-Eurosport_Logo_2015.svg.png',
  'Eurosport 2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Eurosport_Logo_2015.svg/200px-Eurosport_Logo_2015.svg.png',

  // Discovery / Max
  'Discovery+': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Discovery%2B_logo.svg/200px-Discovery%2B_logo.svg.png',
  'Max': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Max_logo.svg/200px-Max_logo.svg.png',

  // Other channels
  'TV3': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/TV3_Sweden_logo.svg/200px-TV3_Sweden_logo.svg.png',
  'TV6': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/TV6_Sweden_logo.svg/200px-TV6_Sweden_logo.svg.png',
  'Kanal 5': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Kanal_5_Sweden_logo.svg/200px-Kanal_5_Sweden_logo.svg.png',
  'Kanal 9': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kanal_9_Sweden_logo.svg/200px-Kanal_9_Sweden_logo.svg.png',

  // Sportkanalen
  'Sportkanalen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/SVT_Logo_2006.svg/200px-SVT_Logo_2006.svg.png',
};
