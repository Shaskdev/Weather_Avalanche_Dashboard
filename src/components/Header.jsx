import React from 'react';

export function Header({ darkMode, setDarkMode, lastUpdate }) {
  return (
    <div className="header">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Avalanche & Weather Dashboard</h1>
          <div className="subtitle">Southern Alberta & BC Interior Backcountry Monitoring</div>
        </div>
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="last-update">
        Last updated: {lastUpdate.toLocaleString()}
      </div>
    </div>
  );
}
