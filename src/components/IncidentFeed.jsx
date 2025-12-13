import React, { useState } from 'react';

export function IncidentFeed({ incidents, darkMode, onRefresh }) {
  const [expandedIncident, setExpandedIncident] = useState(null);

  return (
    <div className="card">
      <h2>Recent Incidents & Reports</h2>
      <div className="incident-feed">
        {incidents.map(incident => (
          <div
            key={incident.id}
            className={`incident ${incident.type !== 'avalanche' ? 'weather-incident' : ''} ${expandedIncident === incident.id ? 'expanded' : ''}`}
            onClick={() => setExpandedIncident(expandedIncident === incident.id ? null : incident.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="incident-header">
              <div className="incident-title">
                {incident.type === 'avalanche' ? '❄️' : '🌪️'} {incident.title}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="incident-date">{incident.date}</div>
                <span style={{ fontSize: '0.8em', color: darkMode ? '#6eb5ff' : '#2a5298' }}>
                  {expandedIncident === incident.id ? '▼' : '▶'}
                </span>
              </div>
            </div>
            <div className="incident-location">📍 {incident.location}</div>

            {expandedIncident === incident.id ? (
              <div className="incident-expanded">
                <div className="incident-details" style={{ marginBottom: '12px' }}>{incident.details}</div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '10px',
                  padding: '12px',
                  background: darkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)',
                  borderRadius: '8px',
                  marginTop: '10px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>Type</div>
                    <div style={{ fontWeight: '600', textTransform: 'capitalize' }}>{incident.type}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>Severity</div>
                    <div style={{
                      fontWeight: '600',
                      textTransform: 'capitalize',
                      color: incident.severity === 'high' ? '#F44336' : incident.severity === 'moderate' ? '#FF9800' : '#4CAF50'
                    }}>{incident.severity}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>Reported</div>
                    <div style={{ fontWeight: '600' }}>{incident.date}</div>
                  </div>
                </div>
                {incident.type === 'avalanche' && (
                  <a
                    href="https://www.avalanche.ca/mountain-information-network"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-block',
                      marginTop: '12px',
                      padding: '8px 16px',
                      background: darkMode ? '#4a7cc7' : '#2a5298',
                      color: 'white',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.85em',
                      fontWeight: '600'
                    }}
                  >
                    View on MIN →
                  </a>
                )}
              </div>
            ) : (
              <div className="incident-details" style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '100%'
              }}>
                {incident.details}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="refresh-btn" onClick={onRefresh}>
        🔄 Refresh All Data
      </button>
      <div className="data-source">
        Sources: Avalanche Canada MIN (Mountain Information Network), Parks Canada Public Avalanche Reports,
        Environment Canada Weather Alerts
      </div>
    </div>
  );
}
