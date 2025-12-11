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
export declare const SPORT_ICONS: Record<string, string>;
export declare const SPORT_NAMES: Record<string, string>;
export declare const CHANNEL_LOGOS: Record<string, string>;
