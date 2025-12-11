import { LitElement, html, css, nothing, TemplateResult, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './styles';
import {
  SportEvent,
  SportSyncCardConfig,
  HomeAssistant,
  HassEntity,
  SPORT_ICONS,
  SPORT_NAMES,
  CHANNEL_LOGOS,
} from './types';

const CARD_VERSION = '1.1.0';

console.info(
  `%c SPORTSYNC-CARD %c ${CARD_VERSION} `,
  'color: white; background: #3498db; font-weight: bold;',
  'color: #3498db; background: white; font-weight: bold;'
);

@customElement('sportsync-card')
export class SportSyncCard extends LitElement {
  static styles = styles;

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SportSyncCardConfig;
  @state() private _selectedEvent: SportEvent | null = null;
  @state() private _popupCountdown: string = '';
  @state() private _currentTime: Date = new Date();

  private _popupInterval?: number;
  private _timeInterval?: number;

  public setConfig(config: SportSyncCardConfig): void {
    if (!config.entity) {
      throw new Error('Du måste ange en entity');
    }

    this._config = {
      show_live_indicator: true,
      show_channel_logo: true,
      show_sport_icon: true,
      max_events: 20,
      group_by_sport: false,
      hide_past_events: true,
      compact_mode: false,
      show_starting_soon: true,
      starting_soon_minutes: 15,
      show_last_updated: false,
      ...config,
    };
  }

  public getCardSize(): number {
    return 3;
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement('sportsync-card-editor');
  }

  public static getStubConfig(): Partial<SportSyncCardConfig> {
    return {
      entity: 'sensor.sportsync_alla_sandningar',
      title: 'Sport på TV',
      show_live_indicator: true,
      show_sport_icon: true,
      max_events: 10,
    };
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Update current time every minute for "starting soon" calculations
    this._timeInterval = window.setInterval(() => {
      this._currentTime = new Date();
    }, 60000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._stopPopupCountdown();
    if (this._timeInterval) {
      clearInterval(this._timeInterval);
    }
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config') || changedProps.has('_selectedEvent') ||
        changedProps.has('_popupCountdown') || changedProps.has('_currentTime')) {
      return true;
    }

    if (this.hass && this._config?.entity) {
      const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
      if (oldHass) {
        return (
          oldHass.states[this._config.entity] !==
          this.hass.states[this._config.entity]
        );
      }
    }

    return true;
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const entity = this.hass.states[this._config.entity] as HassEntity | undefined;

    if (!entity) {
      return html`
        <ha-card>
          <div class="error">
            <ha-icon icon="mdi:alert-circle"></ha-icon>
            <div>Entity hittades inte: ${this._config.entity}</div>
          </div>
        </ha-card>
      `;
    }

    const events = this._getEvents(entity);
    const title = this._config.title ?? this._getDefaultTitle(entity);
    const lastUpdate = entity.attributes.last_update as string | undefined;

    return html`
      <ha-card>
        ${this._renderHeader(title, events.length)}
        <div class="events-container ${this._config.compact_mode ? 'compact' : ''}">
          ${events.length === 0
            ? this._renderNoEvents()
            : this._config.group_by_sport
            ? this._renderGroupedEvents(events)
            : this._renderEventsList(events)}
        </div>
        ${this._config.show_last_updated && lastUpdate
          ? this._renderLastUpdated(lastUpdate)
          : nothing}
        ${this._renderPopup()}
      </ha-card>
    `;
  }

  private _renderHeader(title: string, count: number): TemplateResult {
    return html`
      <div class="card-header">
        <span class="title">${title}</span>
        <span class="count">${count}</span>
      </div>
    `;
  }

  private _renderNoEvents(): TemplateResult {
    return html`
      <div class="no-events">
        <ha-icon icon="mdi:television-off"></ha-icon>
        <div>Inga sändningar</div>
      </div>
    `;
  }

  private _renderLastUpdated(lastUpdate: string): TemplateResult {
    const date = new Date(lastUpdate);
    const timeStr = date.toLocaleTimeString('sv-SE', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return html`
      <div class="last-updated">
        Uppdaterad ${timeStr}
      </div>
    `;
  }

  private _renderGroupedEvents(events: SportEvent[]): TemplateResult {
    const grouped = this._groupEventsBySport(events);

    return html`
      ${Object.entries(grouped).map(
        ([sport, sportEvents]) => html`
          <div class="sport-group">
            <div class="sport-group-header">
              <ha-icon icon="${SPORT_ICONS[sport] || SPORT_ICONS.other}"></ha-icon>
              <span>${SPORT_NAMES[sport] || sport}</span>
              <span>(${sportEvents.length})</span>
            </div>
            ${sportEvents.map((event) => this._renderEventItem(event))}
          </div>
        `
      )}
    `;
  }

  private _renderEventsList(events: SportEvent[]): TemplateResult {
    return html`${events.map((event) => this._renderEventItem(event))}`;
  }

  private _renderEventItem(event: SportEvent): TemplateResult {
    const startTime = new Date(event.start_time);
    const isLive = event.is_live || this._isCurrentlyLive(event);
    const minutesUntil = (startTime.getTime() - this._currentTime.getTime()) / (1000 * 60);
    const isStartingSoon = !isLive && minutesUntil > 0 && minutesUntil <= (this._config.starting_soon_minutes || 15);
    const showIcon = this._config.show_sport_icon;
    const channelLogo = this._getChannelLogo(event.channel);

    let itemClass = 'event-item';
    if (isLive) itemClass += ' live';
    else if (isStartingSoon && this._config.show_starting_soon) itemClass += ' starting-soon';
    if (this._config.compact_mode) itemClass += ' compact';

    return html`
      <div
        class="${itemClass}"
        @click=${() => this._openPopup(event)}
      >
        <div class="event-time">
          <span class="time">${this._formatTime(startTime)}</span>
          ${!this._isToday(startTime)
            ? html`<span class="date">${this._formatDate(startTime)}</span>`
            : nothing}
          ${isLive && this._config.show_live_indicator
            ? html`
                <span class="live-badge">
                  <ha-icon icon="mdi:broadcast"></ha-icon>
                  Live
                </span>
              `
            : isStartingSoon && this._config.show_starting_soon
            ? html`
                <span class="soon-badge">
                  <ha-icon icon="mdi:clock-alert"></ha-icon>
                  ${Math.round(minutesUntil)}m
                </span>
              `
            : nothing}
        </div>

        ${showIcon
          ? html`
              <div class="event-sport-icon ${isLive ? 'live' : ''}">
                <ha-icon
                  icon="${SPORT_ICONS[event.sport] || SPORT_ICONS.other}"
                ></ha-icon>
              </div>
            `
          : nothing}

        <div class="event-details">
          <div class="event-title">${event.title}</div>
          <div class="event-meta">
            ${event.league
              ? html`<span class="event-league">${event.league}</span>`
              : nothing}
            ${!showIcon && event.sport
              ? html`
                  <span class="event-meta-item">
                    <ha-icon
                      icon="${SPORT_ICONS[event.sport] || SPORT_ICONS.other}"
                    ></ha-icon>
                    ${SPORT_NAMES[event.sport] || event.sport}
                  </span>
                `
              : nothing}
          </div>
        </div>

        <div class="event-channel">
          ${this._config.show_channel_logo && channelLogo
            ? html`<img class="channel-logo" src="${channelLogo}" alt="${event.channel}" />`
            : html`<span class="channel-name">${event.channel}</span>`}
        </div>
      </div>
    `;
  }

  // ==================== POPUP ====================

  private _renderPopup(): TemplateResult {
    const event = this._selectedEvent;
    if (!event) {
      return html`<div class="popup-overlay" @click=${this._closePopup}></div>`;
    }

    const isLive = event.is_live || this._isCurrentlyLive(event);
    const startTime = new Date(event.start_time);
    const endTime = event.end_time ? new Date(event.end_time) : null;
    const channelLogo = this._getChannelLogo(event.channel);

    return html`
      <div class="popup-overlay open" @click=${this._closePopup}>
        <div class="popup-content" @click=${(e: Event) => e.stopPropagation()}>
          <div class="popup-header">
            <div class="sport-badge ${isLive ? 'live' : ''}">
              <ha-icon icon="${SPORT_ICONS[event.sport] || SPORT_ICONS.other}"></ha-icon>
              ${isLive ? 'LIVE' : SPORT_NAMES[event.sport] || event.sport}
            </div>
            <button class="popup-close" @click=${this._closePopup}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>

          <div class="popup-body">
            ${event.home_team && event.away_team
              ? this._renderPopupTeams(event)
              : html`<div class="popup-title">${event.title}</div>`}

            <div class="popup-info">
              <div class="popup-info-row">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
                <div>
                  <div class="label">Starttid</div>
                  <div class="value">${this._formatFullDateTime(startTime)}</div>
                </div>
              </div>

              ${endTime
                ? html`
                    <div class="popup-info-row">
                      <ha-icon icon="mdi:clock-check-outline"></ha-icon>
                      <div>
                        <div class="label">Sluttid</div>
                        <div class="value">${this._formatFullDateTime(endTime)}</div>
                      </div>
                    </div>
                  `
                : nothing}

              <div class="popup-info-row">
                <ha-icon icon="mdi:television"></ha-icon>
                <div>
                  <div class="label">Kanal</div>
                  <div class="value">
                    ${channelLogo
                      ? html`<img src="${channelLogo}" alt="${event.channel}" style="height: 20px; vertical-align: middle; margin-right: 8px;" />`
                      : nothing}
                    ${event.channel}
                  </div>
                </div>
              </div>

              ${event.league
                ? html`
                    <div class="popup-info-row">
                      <ha-icon icon="mdi:trophy"></ha-icon>
                      <div>
                        <div class="label">Tävling</div>
                        <div class="value">${event.league}</div>
                      </div>
                    </div>
                  `
                : nothing}

              <div class="popup-info-row">
                <ha-icon icon="mdi:source-branch"></ha-icon>
                <div>
                  <div class="label">Källa</div>
                  <div class="value">${event.source}</div>
                </div>
              </div>
            </div>

            ${this._renderPopupCountdown(isLive, startTime)}
          </div>
        </div>
      </div>
    `;
  }

  private _renderPopupTeams(event: SportEvent): TemplateResult {
    return html`
      <div class="popup-teams">
        <div class="popup-team">
          <div class="popup-team-name">${event.home_team}</div>
        </div>
        <div class="popup-vs">vs</div>
        <div class="popup-team">
          <div class="popup-team-name">${event.away_team}</div>
        </div>
      </div>
    `;
  }

  private _renderPopupCountdown(isLive: boolean, startTime: Date): TemplateResult {
    if (isLive) {
      return html`
        <div class="popup-countdown live">
          <div class="popup-countdown-label">Status</div>
          <div class="popup-countdown-value">PÅGÅR NU</div>
        </div>
      `;
    }

    const now = new Date();
    if (startTime <= now) {
      return html``;
    }

    return html`
      <div class="popup-countdown">
        <div class="popup-countdown-label">Börjar om</div>
        <div class="popup-countdown-value">${this._popupCountdown || '...'}</div>
      </div>
    `;
  }

  private _openPopup(event: SportEvent): void {
    this._selectedEvent = event;
    this._startPopupCountdown();
  }

  private _closePopup(): void {
    this._selectedEvent = null;
    this._stopPopupCountdown();
  }

  private _startPopupCountdown(): void {
    this._updatePopupCountdown();
    this._popupInterval = window.setInterval(() => {
      this._updatePopupCountdown();
    }, 1000);
  }

  private _stopPopupCountdown(): void {
    if (this._popupInterval) {
      clearInterval(this._popupInterval);
      this._popupInterval = undefined;
    }
  }

  private _updatePopupCountdown(): void {
    if (!this._selectedEvent) return;

    const now = new Date();
    const startTime = new Date(this._selectedEvent.start_time);
    const diff = startTime.getTime() - now.getTime();

    if (diff <= 0) {
      this._popupCountdown = 'Nu';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days > 0) {
      this._popupCountdown = `${days}d ${hours}h ${minutes}m`;
    } else if (hours > 0) {
      this._popupCountdown = `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      this._popupCountdown = `${minutes}m ${seconds}s`;
    } else {
      this._popupCountdown = `${seconds}s`;
    }
  }

  // ==================== HELPERS ====================

  private _getEvents(entity: HassEntity): SportEvent[] {
    const events = (entity.attributes.events as SportEvent[]) || [];
    let filtered = [...events];

    // Filter past events if configured
    if (this._config.hide_past_events) {
      const now = new Date();
      filtered = filtered.filter((event) => {
        const endTime = event.end_time ? new Date(event.end_time) : null;
        const startTime = new Date(event.start_time);

        // Keep if live
        if (event.is_live) return true;

        // Keep if has end_time and it's in the future
        if (endTime && endTime > now) return true;

        // Keep if no end_time but started less than 2 hours ago
        if (!endTime) {
          const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
          return startTime > twoHoursAgo;
        }

        return false;
      });
    }

    // Sort by start time
    filtered.sort(
      (a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
    );

    // Limit events
    if (this._config.max_events && this._config.max_events > 0) {
      filtered = filtered.slice(0, this._config.max_events);
    }

    return filtered;
  }

  private _groupEventsBySport(events: SportEvent[]): Record<string, SportEvent[]> {
    return events.reduce(
      (groups, event) => {
        const sport = event.sport || 'other';
        if (!groups[sport]) {
          groups[sport] = [];
        }
        groups[sport].push(event);
        return groups;
      },
      {} as Record<string, SportEvent[]>
    );
  }

  private _getDefaultTitle(entity: HassEntity): string {
    const friendlyName = entity.attributes.friendly_name as string | undefined;
    return friendlyName || 'Sport på TV';
  }

  private _getChannelLogo(channel: string): string | null {
    const channelLower = channel.toLowerCase().replace(/\s+/g, '');

    // Check exact match first
    for (const [key, url] of Object.entries(CHANNEL_LOGOS)) {
      if (key.toLowerCase().replace(/\s+/g, '') === channelLower) {
        return url;
      }
    }

    // Check partial match
    for (const [key, url] of Object.entries(CHANNEL_LOGOS)) {
      if (channelLower.includes(key.toLowerCase().replace(/\s+/g, '')) ||
          key.toLowerCase().replace(/\s+/g, '').includes(channelLower)) {
        return url;
      }
    }

    return null;
  }

  private _formatTime(date: Date): string {
    return date.toLocaleTimeString('sv-SE', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  private _formatDate(date: Date): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (this._isSameDay(date, today)) {
      return 'Idag';
    } else if (this._isSameDay(date, tomorrow)) {
      return 'Imorgon';
    }

    return date.toLocaleDateString('sv-SE', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  }

  private _formatFullDateTime(date: Date): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let dayStr: string;
    if (this._isSameDay(date, today)) {
      dayStr = 'Idag';
    } else if (this._isSameDay(date, tomorrow)) {
      dayStr = 'Imorgon';
    } else {
      dayStr = date.toLocaleDateString('sv-SE', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      });
    }

    const timeStr = date.toLocaleTimeString('sv-SE', {
      hour: '2-digit',
      minute: '2-digit',
    });

    return `${dayStr} kl. ${timeStr}`;
  }

  private _isToday(date: Date): boolean {
    return this._isSameDay(date, new Date());
  }

  private _isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  private _isCurrentlyLive(event: SportEvent): boolean {
    const now = new Date();
    const startTime = new Date(event.start_time);
    const endTime = event.end_time ? new Date(event.end_time) : null;

    if (startTime > now) return false;

    if (endTime) {
      return now <= endTime;
    }

    // No end time - assume 2 hour duration
    const assumedEnd = new Date(startTime.getTime() + 2 * 60 * 60 * 1000);
    return now <= assumedEnd;
  }
}

// ==================== EDITOR ====================

@customElement('sportsync-card-editor')
export class SportSyncCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SportSyncCardConfig;

  public setConfig(config: SportSyncCardConfig): void {
    this._config = config;
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    const entities = Object.keys(this.hass.states)
      .filter((eid) => eid.startsWith('sensor.sportsync'))
      .sort();

    return html`
      <div class="card-config">
        <ha-select
          label="Entity"
          .value=${this._config.entity}
          @selected=${this._valueChanged}
          .configValue=${'entity'}
        >
          ${entities.map(
            (entity) => html`
              <mwc-list-item .value=${entity}>
                ${this.hass.states[entity]?.attributes.friendly_name || entity}
              </mwc-list-item>
            `
          )}
        </ha-select>

        <ha-textfield
          label="Titel (valfritt)"
          .value=${this._config.title || ''}
          @input=${this._valueChanged}
          .configValue=${'title'}
        ></ha-textfield>

        <ha-textfield
          label="Max antal events"
          type="number"
          .value=${String(this._config.max_events || 20)}
          @input=${this._valueChanged}
          .configValue=${'max_events'}
        ></ha-textfield>

        <ha-textfield
          label="Minuter för 'börjar snart'"
          type="number"
          .value=${String(this._config.starting_soon_minutes || 15)}
          @input=${this._valueChanged}
          .configValue=${'starting_soon_minutes'}
        ></ha-textfield>

        <ha-formfield label="Visa live-indikator">
          <ha-switch
            .checked=${this._config.show_live_indicator !== false}
            @change=${this._valueChanged}
            .configValue=${'show_live_indicator'}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa 'börjar snart'-varning">
          <ha-switch
            .checked=${this._config.show_starting_soon !== false}
            @change=${this._valueChanged}
            .configValue=${'show_starting_soon'}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa sportikon">
          <ha-switch
            .checked=${this._config.show_sport_icon !== false}
            @change=${this._valueChanged}
            .configValue=${'show_sport_icon'}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa kanallogga">
          <ha-switch
            .checked=${this._config.show_channel_logo !== false}
            @change=${this._valueChanged}
            .configValue=${'show_channel_logo'}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Gruppera efter sport">
          <ha-switch
            .checked=${this._config.group_by_sport === true}
            @change=${this._valueChanged}
            .configValue=${'group_by_sport'}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Dölj passerade events">
          <ha-switch
            .checked=${this._config.hide_past_events !== false}
            @change=${this._valueChanged}
            .configValue=${'hide_past_events'}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Kompakt läge">
          <ha-switch
            .checked=${this._config.compact_mode === true}
            @change=${this._valueChanged}
            .configValue=${'compact_mode'}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa senast uppdaterad">
          <ha-switch
            .checked=${this._config.show_last_updated === true}
            @change=${this._valueChanged}
            .configValue=${'show_last_updated'}
          ></ha-switch>
        </ha-formfield>
      </div>
    `;
  }

  private _valueChanged(ev: Event): void {
    const target = ev.target as HTMLInputElement & { configValue: string };
    if (!this._config || !target.configValue) {
      return;
    }

    let value: string | number | boolean = target.value;

    if (target.type === 'number') {
      value = Number(value);
    } else if (target.tagName === 'HA-SWITCH') {
      value = (target as unknown as { checked: boolean }).checked;
    }

    const newConfig = {
      ...this._config,
      [target.configValue]: value,
    };

    const event = new CustomEvent('config-changed', {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  static styles = css`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }

    ha-select,
    ha-textfield {
      width: 100%;
    }

    ha-formfield {
      display: flex;
      height: 48px;
      align-items: center;
    }
  `;
}

// ==================== REGISTRATION ====================

declare global {
  interface HTMLElementTagNameMap {
    'sportsync-card': SportSyncCard;
    'sportsync-card-editor': SportSyncCardEditor;
  }

  interface Window {
    customCards: Array<{
      type: string;
      name: string;
      description: string;
      preview: boolean;
      documentationURL: string;
    }>;
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'sportsync-card',
  name: 'SportSync Card',
  description: 'Visar sport-TV-tablå från SportSync',
  preview: true,
  documentationURL: 'https://github.com/your-repo/sportsync-card',
});
