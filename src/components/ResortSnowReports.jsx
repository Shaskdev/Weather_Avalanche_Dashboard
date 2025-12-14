import React, { useState } from 'react';
import { SKI_RESORTS } from '../data/resorts';

export function ResortSnowReports({ selectedRegion, currentRegion, darkMode }) {
  const [expandedResort, setExpandedResort] = useState(null);
  const regionResorts = SKI_RESORTS.filter(r => r.region === selectedRegion);

  if (regionResorts.length === 0) {
    return null;
  }

  const getConditionColor = (condition) => {
    const conditions = {
      'Powder': '#4CAF50',
      'Packed Powder': '#8BC34A',
      'Groomed': '#2196F3',
      'Hard Pack': '#FF9800',
      'Icy': '#F44336',
      'Spring': '#9C27B0'
    };
    return conditions[condition] || '#666';
  };

  return (
    <div className="card">
      <h2>Ski Resort Snow Reports - {currentRegion?.name}</h2>
      <div className="resort-list">
        {regionResorts.map(resort => (
          <div
            key={resort.id}
            className={`resort-card ${expandedResort === resort.id ? 'expanded' : ''}`}
            onClick={() => setExpandedResort(expandedResort === resort.id ? null : resort.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="resort-header">
              <div className="resort-title">
                <span className="resort-name">{resort.name}</span>
                <span
                  className="resort-condition"
                  style={{
                    background: getConditionColor(resort.snowReport.conditions),
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '0.75em',
                    marginLeft: '10px'
                  }}
                >
                  {resort.snowReport.conditions}
                </span>
              </div>
              <span style={{ fontSize: '0.8em', color: darkMode ? '#6eb5ff' : '#2a5298' }}>
                {expandedResort === resort.id ? '▼' : '▶'}
              </span>
            </div>

            <div className="resort-quick-stats" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
              marginTop: '10px'
            }}>
              <div className="stat">
                <div style={{ fontSize: '0.7em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>Base</div>
                <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: darkMode ? '#6eb5ff' : '#1e3c72' }}>
                  {resort.snowReport.base}cm
                </div>
              </div>
              <div className="stat">
                <div style={{ fontSize: '0.7em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>24hr</div>
                <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#4CAF50' }}>
                  +{resort.snowReport.last24h}cm
                </div>
              </div>
              <div className="stat">
                <div style={{ fontSize: '0.7em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>48hr</div>
                <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: darkMode ? '#8fc7ff' : '#2a5298' }}>
                  +{resort.snowReport.last48h}cm
                </div>
              </div>
              <div className="stat">
                <div style={{ fontSize: '0.7em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>7 Day</div>
                <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: darkMode ? '#aaa' : '#666' }}>
                  +{resort.snowReport.last7days}cm
                </div>
              </div>
            </div>

            {expandedResort === resort.id && (
              <div className="resort-expanded" style={{ marginTop: '15px' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '12px',
                  padding: '15px',
                  background: darkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)',
                  borderRadius: '8px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.7em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>
                      Elevation
                    </div>
                    <div style={{ fontWeight: '600' }}>
                      {resort.elevation.base}m - {resort.elevation.summit}m
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>
                      Vertical
                    </div>
                    <div style={{ fontWeight: '600' }}>
                      {resort.elevation.summit - resort.elevation.base}m
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>
                      Season Total
                    </div>
                    <div style={{ fontWeight: '600' }}>
                      {resort.snowReport.seasonTotal}cm
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>
                      Lifts Open
                    </div>
                    <div style={{ fontWeight: '600', color: resort.liftsOpen === resort.liftsTotal ? '#4CAF50' : '#FF9800' }}>
                      {resort.liftsOpen} / {resort.liftsTotal}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>
                      Runs Open
                    </div>
                    <div style={{ fontWeight: '600', color: resort.runsOpen === resort.runsTotal ? '#4CAF50' : '#FF9800' }}>
                      {resort.runsOpen} / {resort.runsTotal}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7em', color: darkMode ? '#888' : '#666', textTransform: 'uppercase' }}>
                      Last Updated
                    </div>
                    <div style={{ fontWeight: '600' }}>
                      {resort.snowReport.lastUpdated}
                    </div>
                  </div>
                </div>

                <a
                  href={resort.website}
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
                  Visit Resort Website →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="data-source">
        Snow reports are sample data. Visit resort websites for current conditions.
      </div>
    </div>
  );
}
