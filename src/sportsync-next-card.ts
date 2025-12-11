import { LitElement, html, css, nothing, TemplateResult, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  SportEvent,
  HomeAssistant,
  HassEntity,
  SPORT_ICONS,
  SPORT_NAMES,
} from './types';

interface NextCardConfig {
  type: string;
  entity: string;
  title?: string;
  show_countdown?: boolean;
  show_channel?: boolean;
  show_league?: boolean;
}

@customElement('sportsync-next-card')
export class SportSyncNextCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: NextCardConfig;
  @state() private _countdown: string = '';
  private _countdownInterval?: number;

  static styles = css`
    :host {
      display: block;
    }

    ha-card {
      overflow: hidden;
      background: var(--ha-card-background, var(--card-background-color, white));
    }

    .card-content {
      padding: 16px;
    }

    .no-event {
      text-align: center;
      padding: 24px 16px;
      color: var(--secondary-text-color);
    }

    .no-event ha-icon {
      --mdc-icon-size: 48px;
      opacity: 0.5;
      margin-bottom: 8px;
    }

    /* Header with sport icon */
    .event-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .sport-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--primary-color);
      color: var(--text-primary-color);
      flex-shrink: 0;
    }

    .sport-icon ha-icon {
      --mdc-icon-size: 28px;
    }

    .sport-icon.live {
      background: var(--error-color, #db4437);
      animation: pulse-bg 2s infinite;
    }

    @keyframes pulse-bg {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }

    .header-text {
      flex: 1;
      min-width: 0;
    }

    .header-title {
      font-size: 0.85em;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .header-sport {
      font-size: 1.1em;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    /* Main event info */
    .event-title {
      font-size: 1.3em;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-bottom: 8px;
      line-height: 1.3;
    }

    .event-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 16px;
      font-size: 0.9em;
      color: var(--secondary-text-color);
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .meta-item ha-icon {
      --mdc-icon-size: 16px;
      opacity: 0.7;
    }

    .league-badge {
      padding: 2px 8px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-radius: 4px;
      font-size: 0.85em;
      font-weight: 500;
    }

    /* Countdown section */
    .countdown-section {
      background: var(--secondary-background-color);
      border-radius: 12px;
      padding: 16px;
      text-align: center;
    }

    .countdown-label {
      font-size: 0.8em;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .countdown-value {
      font-size: 2em;
      font-weight: 700;
      color: var(--primary-text-color);
      font-variant-numeric: tabular-nums;
    }

    .countdown-value.soon {
      color: var(--warning-color, #ff9800);
    }

    .countdown-value.very-soon {
      color: var(--error-color, #db4437);
      animation: pulse-text 1s infinite;
    }

    @keyframes pulse-text {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }

    .countdown-value.live {
      color: var(--error-color, #db4437);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .countdown-value.live ha-icon {
      --mdc-icon-size: 24px;
      animation: pulse-text 1s infinite;
    }

    .time-info {
      margin-top: 8px;
      font-size: 0.85em;
      color: var(--secondary-text-color);
    }

    /* Teams display */
    .teams-display {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin: 16px 0;
    }

    .team {
      flex: 1;
      text-align: center;
      min-width: 0;
    }

    .team-name {
      font-size: 1.1em;
      font-weight: 600;
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .team-logo {
      width: 48px;
      height: 48px;
      margin-bottom: 8px;
      object-fit: contain;
    }

    .vs-divider {
      font-size: 1.2em;
      font-weight: 700;
      color: var(--secondary-text-color);
      padding: 0 8px;
    }

    /* Starting soon warning */
    .starting-soon {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 8px 12px;
      background: var(--warning-color, #ff9800);
      color: white;
      border-radius: 8px;
      font-weight: 500;
      font-size: 0.9em;
      margin-top: 12px;
    }

    .starting-soon ha-icon {
      --mdc-icon-size: 18px;
    }

    .starting-soon.imminent {
      background: var(--error-color, #db4437);
      animation: pulse-bg 1s infinite;
    }
  `;

  public setConfig(config: NextCardConfig): void {
    if (!config.entity) {
      throw new Error('Du måste ange en entity');
    }

    this._config = {
      show_countdown: true,
      show_channel: true,
      show_league: true,
      ...config,
    };
  }

  public getCardSize(): number {
    return 3;
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement('sportsync-next-card-editor');
  }

  public static getStubConfig(): Partial<NextCardConfig> {
    return {
      entity: 'sensor.sportsync_favoriter',
      title: 'Nästa match',
      show_countdown: true,
    };
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._startCountdown();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._stopCountdown();
  }

  private _startCountdown(): void {
    this._updateCountdown();
    this._countdownInterval = window.setInterval(() => {
      this._updateCountdown();
    }, 1000);
  }

  private _stopCountdown(): void {
    if (this._countdownInterval) {
      clearInterval(this._countdownInterval);
      this._countdownInterval = undefined;
    }
  }

  private _updateCountdown(): void {
    const event = this._getNextEvent();
    if (!event) {
      this._countdown = '';
      return;
    }

    const now = new Date();
    const startTime = new Date(event.start_time);
    const diff = startTime.getTime() - now.getTime();

    if (diff <= 0) {
      // Check if still live
      if (this._isCurrentlyLive(event)) {
        this._countdown = 'LIVE';
      } else {
        this._countdown = '';
      }
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days > 0) {
      this._countdown = `${days}d ${hours}h ${minutes}m`;
    } else if (hours > 0) {
      this._countdown = `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      this._countdown = `${minutes}m ${seconds}s`;
    } else {
      this._countdown = `${seconds}s`;
    }
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config') || changedProps.has('_countdown')) {
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
          <div class="card-content">
            <div class="no-event">
              <ha-icon icon="mdi:alert-circle"></ha-icon>
              <div>Entity hittades inte</div>
            </div>
          </div>
        </ha-card>
      `;
    }

    const event = this._getNextEvent();

    if (!event) {
      return html`
        <ha-card>
          <div class="card-content">
            <div class="no-event">
              <ha-icon icon="mdi:calendar-blank"></ha-icon>
              <div>Inga kommande matcher</div>
            </div>
          </div>
        </ha-card>
      `;
    }

    const isLive = event.is_live || this._isCurrentlyLive(event);
    const startTime = new Date(event.start_time);
    const minutesUntil = (startTime.getTime() - Date.now()) / (1000 * 60);

    return html`
      <ha-card>
        <div class="card-content">
          ${this._renderHeader(event, isLive)}
          ${event.home_team && event.away_team
            ? this._renderTeamsDisplay(event)
            : this._renderTitle(event)}
          ${this._renderMeta(event)}
          ${this._config.show_countdown ? this._renderCountdown(isLive, startTime) : nothing}
          ${this._renderStartingSoon(minutesUntil, isLive)}
        </div>
      </ha-card>
    `;
  }

  private _renderHeader(event: SportEvent, isLive: boolean): TemplateResult {
    const title = this._config.title || 'Nästa match';
    const sportName = SPORT_NAMES[event.sport] || event.sport;
    const sportIcon = SPORT_ICONS[event.sport] || SPORT_ICONS.other;

    return html`
      <div class="event-header">
        <div class="sport-icon ${isLive ? 'live' : ''}">
          <ha-icon icon="${sportIcon}"></ha-icon>
        </div>
        <div class="header-text">
          <div class="header-title">${title}</div>
          <div class="header-sport">${sportName}</div>
        </div>
      </div>
    `;
  }

  private _renderTitle(event: SportEvent): TemplateResult {
    return html`<div class="event-title">${event.title}</div>`;
  }

  private _renderTeamsDisplay(event: SportEvent): TemplateResult {
    return html`
      <div class="teams-display">
        <div class="team">
          <div class="team-name">${event.home_team}</div>
        </div>
        <div class="vs-divider">vs</div>
        <div class="team">
          <div class="team-name">${event.away_team}</div>
        </div>
      </div>
    `;
  }

  private _renderMeta(event: SportEvent): TemplateResult {
    return html`
      <div class="event-meta">
        ${event.league && this._config.show_league
          ? html`<span class="league-badge">${event.league}</span>`
          : nothing}
        ${this._config.show_channel
          ? html`
              <span class="meta-item">
                <ha-icon icon="mdi:television"></ha-icon>
                ${event.channel}
              </span>
            `
          : nothing}
      </div>
    `;
  }

  private _renderCountdown(isLive: boolean, startTime: Date): TemplateResult {
    const now = new Date();
    const diff = startTime.getTime() - now.getTime();
    const minutesUntil = diff / (1000 * 60);

    let countdownClass = '';
    if (isLive || this._countdown === 'LIVE') {
      countdownClass = 'live';
    } else if (minutesUntil <= 5) {
      countdownClass = 'very-soon';
    } else if (minutesUntil <= 30) {
      countdownClass = 'soon';
    }

    return html`
      <div class="countdown-section">
        <div class="countdown-label">
          ${isLive || this._countdown === 'LIVE' ? 'Status' : 'Börjar om'}
        </div>
        <div class="countdown-value ${countdownClass}">
          ${isLive || this._countdown === 'LIVE'
            ? html`<ha-icon icon="mdi:broadcast"></ha-icon> LIVE NU`
            : this._countdown}
        </div>
        ${!isLive && this._countdown !== 'LIVE'
          ? html`
              <div class="time-info">
                ${this._formatDateTime(startTime)}
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private _renderStartingSoon(minutesUntil: number, isLive: boolean): TemplateResult | typeof nothing {
    if (isLive || minutesUntil > 15 || minutesUntil < 0) {
      return nothing;
    }

    const isImminent = minutesUntil <= 5;

    return html`
      <div class="starting-soon ${isImminent ? 'imminent' : ''}">
        <ha-icon icon="mdi:alert"></ha-icon>
        ${isImminent ? 'Börjar strax!' : 'Börjar snart!'}
      </div>
    `;
  }

  private _getNextEvent(): SportEvent | null {
    if (!this.hass || !this._config?.entity) return null;

    const entity = this.hass.states[this._config.entity] as HassEntity | undefined;
    if (!entity) return null;

    const events = (entity.attributes.events as SportEvent[]) || [];
    const now = new Date();

    // Find next upcoming or currently live event
    const upcoming = events
      .filter((event) => {
        const startTime = new Date(event.start_time);
        const endTime = event.end_time ? new Date(event.end_time) : null;

        // Include if live
        if (event.is_live) return true;

        // Include if hasn't ended yet
        if (endTime && endTime > now) return true;

        // Include if starts in the future
        if (startTime > now) return true;

        // Include if no end time and started less than 2 hours ago
        if (!endTime) {
          const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
          return startTime > twoHoursAgo;
        }

        return false;
      })
      .sort((a, b) => {
        // Prioritize live events
        const aLive = a.is_live || this._isCurrentlyLive(a);
        const bLive = b.is_live || this._isCurrentlyLive(b);
        if (aLive && !bLive) return -1;
        if (!aLive && bLive) return 1;

        return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
      });

    return upcoming[0] || null;
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

  private _formatDateTime(date: Date): string {
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

  private _isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}

// Editor
@customElement('sportsync-next-card-editor')
export class SportSyncNextCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: NextCardConfig;

  public setConfig(config: NextCardConfig): void {
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

        <ha-formfield label="Visa nedräkning">
          <ha-switch
            .checked=${this._config.show_countdown !== false}
            @change=${this._valueChanged}
            .configValue=${'show_countdown'}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa kanal">
          <ha-switch
            .checked=${this._config.show_channel !== false}
            @change=${this._valueChanged}
            .configValue=${'show_channel'}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa liga">
          <ha-switch
            .checked=${this._config.show_league !== false}
            @change=${this._valueChanged}
            .configValue=${'show_league'}
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

    let value: string | boolean = target.value;

    if (target.tagName === 'HA-SWITCH') {
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

// Register
declare global {
  interface HTMLElementTagNameMap {
    'sportsync-next-card': SportSyncNextCard;
    'sportsync-next-card-editor': SportSyncNextCardEditor;
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'sportsync-next-card',
  name: 'SportSync Next Card',
  description: 'Visar nästa kommande match med nedräkning',
  preview: true,
  documentationURL: 'https://github.com/your-repo/sportsync-card',
});
