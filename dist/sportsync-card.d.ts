import { LitElement, TemplateResult, PropertyValues } from 'lit';
import { SportSyncCardConfig, HomeAssistant } from './types';
export declare class SportSyncCard extends LitElement {
    static styles: import("lit").CSSResult;
    hass: HomeAssistant;
    private _config;
    private _selectedEvent;
    private _popupCountdown;
    private _currentTime;
    private _popupInterval?;
    private _timeInterval?;
    setConfig(config: SportSyncCardConfig): void;
    getCardSize(): number;
    static getConfigElement(): HTMLElement;
    static getStubConfig(): Partial<SportSyncCardConfig>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): TemplateResult;
    private _renderHeader;
    private _renderNoEvents;
    private _renderLastUpdated;
    private _renderGroupedEvents;
    private _renderEventsList;
    private _renderEventItem;
    private _renderPopup;
    private _renderPopupTeams;
    private _renderPopupCountdown;
    private _openPopup;
    private _closePopup;
    private _startPopupCountdown;
    private _stopPopupCountdown;
    private _updatePopupCountdown;
    private _getEvents;
    private _groupEventsBySport;
    private _getDefaultTitle;
    private _getChannelLogo;
    private _formatTime;
    private _formatDate;
    private _formatFullDateTime;
    private _isToday;
    private _isSameDay;
    private _isCurrentlyLive;
}
export declare class SportSyncCardEditor extends LitElement {
    hass: HomeAssistant;
    private _config;
    setConfig(config: SportSyncCardConfig): void;
    protected render(): TemplateResult;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
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
