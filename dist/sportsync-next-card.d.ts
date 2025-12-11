import { LitElement, TemplateResult, PropertyValues } from 'lit';
import { HomeAssistant } from './types';
interface NextCardConfig {
    type: string;
    entity: string;
    title?: string;
    show_countdown?: boolean;
    show_channel?: boolean;
    show_league?: boolean;
}
export declare class SportSyncNextCard extends LitElement {
    hass: HomeAssistant;
    private _config;
    private _countdown;
    private _countdownInterval?;
    static styles: import("lit").CSSResult;
    setConfig(config: NextCardConfig): void;
    getCardSize(): number;
    static getConfigElement(): HTMLElement;
    static getStubConfig(): Partial<NextCardConfig>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _startCountdown;
    private _stopCountdown;
    private _updateCountdown;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): TemplateResult;
    private _renderHeader;
    private _renderTitle;
    private _renderTeamsDisplay;
    private _renderMeta;
    private _renderCountdown;
    private _renderStartingSoon;
    private _getNextEvent;
    private _isCurrentlyLive;
    private _formatDateTime;
    private _isSameDay;
}
export declare class SportSyncNextCardEditor extends LitElement {
    hass: HomeAssistant;
    private _config;
    setConfig(config: NextCardConfig): void;
    protected render(): TemplateResult;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sportsync-next-card': SportSyncNextCard;
        'sportsync-next-card-editor': SportSyncNextCardEditor;
    }
}
export {};
