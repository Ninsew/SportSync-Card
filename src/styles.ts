import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 16px 0 16px;
  }

  .card-header .title {
    font-size: 1.2em;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .card-header .count {
    font-size: 0.9em;
    color: var(--secondary-text-color);
    background: var(--primary-color);
    color: var(--text-primary-color);
    padding: 2px 8px;
    border-radius: 12px;
  }

  .events-container {
    padding: 8px 0;
  }

  .no-events {
    padding: 32px 16px;
    text-align: center;
    color: var(--secondary-text-color);
  }

  .no-events ha-icon {
    --mdc-icon-size: 48px;
    opacity: 0.5;
    margin-bottom: 8px;
  }

  /* Sport group header */
  .sport-group {
    margin-bottom: 8px;
  }

  .sport-group-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--primary-background-color);
    border-bottom: 1px solid var(--divider-color);
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .sport-group-header ha-icon {
    --mdc-icon-size: 20px;
    color: var(--primary-color);
  }

  /* Event item */
  .event-item {
    display: flex;
    align-items: flex-start;
    padding: 12px 16px;
    gap: 12px;
    border-bottom: 1px solid var(--divider-color);
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
  }

  .event-item:hover {
    background: var(--secondary-background-color);
  }

  .event-item:active {
    transform: scale(0.99);
  }

  .event-item:last-child {
    border-bottom: none;
  }

  .event-item.live {
    background: rgba(var(--rgb-red), 0.05);
    border-left: 3px solid var(--error-color, #db4437);
  }

  .event-item.starting-soon {
    background: rgba(var(--rgb-orange), 0.05);
    border-left: 3px solid var(--warning-color, #ff9800);
  }

  .event-item.compact {
    padding: 8px 16px;
  }

  /* Fade in animation for new events */
  .event-item.new {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Time column */
  .event-time {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 50px;
    flex-shrink: 0;
  }

  .event-time .time {
    font-size: 1.1em;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .event-time .date {
    font-size: 0.75em;
    color: var(--secondary-text-color);
  }

  .event-time .live-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
    padding: 2px 6px;
    background: var(--error-color, #db4437);
    color: white;
    border-radius: 4px;
    font-size: 0.7em;
    font-weight: 600;
    text-transform: uppercase;
    animation: pulse 2s infinite;
  }

  .event-time .soon-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
    padding: 2px 6px;
    background: var(--warning-color, #ff9800);
    color: white;
    border-radius: 4px;
    font-size: 0.7em;
    font-weight: 600;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  .live-badge ha-icon,
  .soon-badge ha-icon {
    --mdc-icon-size: 12px;
  }

  /* Sport icon column */
  .event-sport-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--primary-color);
    color: var(--text-primary-color);
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  .event-item:hover .event-sport-icon {
    transform: scale(1.1);
  }

  .event-sport-icon ha-icon {
    --mdc-icon-size: 20px;
  }

  .event-sport-icon.live {
    background: var(--error-color, #db4437);
    animation: pulse-bg 2s infinite;
  }

  @keyframes pulse-bg {
    0%, 100% { box-shadow: 0 0 0 0 rgba(219, 68, 55, 0.4); }
    50% { box-shadow: 0 0 0 8px rgba(219, 68, 55, 0); }
  }

  /* Event details */
  .event-details {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .event-title {
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .event-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }

  .event-meta-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .event-meta-item ha-icon {
    --mdc-icon-size: 14px;
    opacity: 0.7;
  }

  .event-league {
    padding: 1px 6px;
    background: var(--divider-color);
    border-radius: 4px;
    font-size: 0.8em;
  }

  /* Channel column */
  .event-channel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 0;
    max-width: 100px;
  }

  .event-channel .channel-name {
    font-size: 0.85em;
    color: var(--secondary-text-color);
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .event-channel .channel-logo {
    max-height: 24px;
    max-width: 60px;
    object-fit: contain;
    border-radius: 4px;
  }

  /* Compact mode adjustments */
  .compact .event-sport-icon {
    width: 28px;
    height: 28px;
  }

  .compact .event-sport-icon ha-icon {
    --mdc-icon-size: 16px;
  }

  .compact .event-title {
    font-size: 0.9em;
  }

  .compact .event-meta {
    font-size: 0.8em;
  }

  /* Loading state */
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
  }

  /* Error state */
  .error {
    padding: 16px;
    color: var(--error-color);
    text-align: center;
  }

  .error ha-icon {
    --mdc-icon-size: 24px;
    margin-bottom: 8px;
  }

  /* ==================== */
  /* POPUP / DIALOG STYLES */
  /* ==================== */

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
  }

  .popup-overlay.open {
    opacity: 1;
    visibility: visible;
  }

  .popup-content {
    background: var(--ha-card-background, var(--card-background-color, white));
    border-radius: 16px;
    max-width: 400px;
    width: 90%;
    max-height: 80vh;
    overflow: auto;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transform: scale(0.9);
    transition: transform 0.2s ease;
  }

  .popup-overlay.open .popup-content {
    transform: scale(1);
  }

  .popup-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid var(--divider-color);
  }

  .popup-header .sport-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: var(--primary-color);
    color: var(--text-primary-color);
    border-radius: 20px;
    font-weight: 500;
  }

  .popup-header .sport-badge.live {
    background: var(--error-color, #db4437);
  }

  .popup-header .sport-badge ha-icon {
    --mdc-icon-size: 18px;
  }

  .popup-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--secondary-background-color);
    border: none;
    cursor: pointer;
    color: var(--primary-text-color);
    transition: background-color 0.2s ease;
  }

  .popup-close:hover {
    background: var(--divider-color);
  }

  .popup-close ha-icon {
    --mdc-icon-size: 20px;
  }

  .popup-body {
    padding: 16px;
  }

  .popup-title {
    font-size: 1.4em;
    font-weight: 600;
    color: var(--primary-text-color);
    margin-bottom: 16px;
    line-height: 1.3;
  }

  /* Teams in popup */
  .popup-teams {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    padding: 16px;
    background: var(--secondary-background-color);
    border-radius: 12px;
  }

  .popup-team {
    flex: 1;
    text-align: center;
  }

  .popup-team-logo {
    width: 64px;
    height: 64px;
    margin-bottom: 8px;
    object-fit: contain;
  }

  .popup-team-name {
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .popup-vs {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--secondary-text-color);
  }

  /* Info rows */
  .popup-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .popup-info-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: var(--secondary-background-color);
    border-radius: 8px;
  }

  .popup-info-row ha-icon {
    --mdc-icon-size: 20px;
    color: var(--primary-color);
    flex-shrink: 0;
  }

  .popup-info-row .label {
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }

  .popup-info-row .value {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  /* Countdown in popup */
  .popup-countdown {
    text-align: center;
    padding: 20px;
    background: var(--primary-color);
    color: var(--text-primary-color);
    border-radius: 12px;
    margin-top: 16px;
  }

  .popup-countdown.live {
    background: var(--error-color, #db4437);
  }

  .popup-countdown-label {
    font-size: 0.85em;
    opacity: 0.9;
    margin-bottom: 4px;
  }

  .popup-countdown-value {
    font-size: 1.8em;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }

  /* Update indicator */
  .update-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--secondary-background-color);
    border-top: 1px solid var(--divider-color);
    font-size: 0.8em;
    color: var(--secondary-text-color);
  }

  .update-indicator ha-icon {
    --mdc-icon-size: 14px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .update-indicator.idle ha-icon {
    animation: none;
  }

  /* Last updated footer */
  .last-updated {
    padding: 8px 16px;
    text-align: center;
    font-size: 0.75em;
    color: var(--secondary-text-color);
    border-top: 1px solid var(--divider-color);
  }
`;
