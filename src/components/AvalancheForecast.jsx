import React from 'react';
import { getDangerColor, getDangerLabel } from '../utils/helpers';
import { FALLBACK_FORECAST } from '../data/stations';

export function AvalancheForecast({ currentRegion, loading, error, liveAvalanche, darkMode }) {
  const forecast = liveAvalanche || FALLBACK_FORECAST;
  const ratings = forecast.ratings;

  return (
    <div className="card">
      <h2>Avalanche Forecast - {currentRegion?.name}</h2>
      {loading && <div className="loading">Loading avalanche forecast...</div>}
      {error && (
        <div className="api-error" style={{
          background: darkMode ? '#3a2025' : '#f8d7da',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '15px',
          fontSize: '0.9em'
        }}>
          Using sample data - Live forecast temporarily unavailable
        </div>
      )}
      {liveAvalanche && (
        <div style={{
          background: darkMode ? '#1a3320' : '#d4edda',
          padding: '8px 12px',
          borderRadius: '6px',
          marginBottom: '10px',
          fontSize: '0.85em',
          color: darkMode ? '#90EE90' : '#155724'
        }}>
          LIVE from Avalanche Canada API
        </div>
      )}
      <div style={{ fontSize: '0.9em', color: darkMode ? '#aaa' : '#666', marginBottom: '10px' }}>
        Valid: {forecast.date}
        {liveAvalanche?.validUntil && ` to ${liveAvalanche.validUntil}`}
        {!liveAvalanche && ` | Trend: `}<strong>{!liveAvalanche && FALLBACK_FORECAST.trend}</strong>
      </div>

      <h3>Danger Ratings by Elevation</h3>
      <div className="elevation-bands">
        <div className="elevation-band" style={{ background: getDangerColor(ratings.alpine) }}>
          <div className="label" style={{ color: ratings.alpine >= 3 ? 'white' : '#333' }}>
            Alpine (&gt;2200m)
          </div>
          <div style={{ color: ratings.alpine >= 3 ? 'white' : '#333', fontSize: '1.2em', fontWeight: 'bold' }}>
            {ratings.alpine} - {getDangerLabel(ratings.alpine)}
          </div>
        </div>
        <div className="elevation-band" style={{ background: getDangerColor(ratings.treeline) }}>
          <div className="label" style={{ color: ratings.treeline >= 3 ? 'white' : '#333' }}>
            Treeline
          </div>
          <div style={{ color: ratings.treeline >= 3 ? 'white' : '#333', fontSize: '1.2em', fontWeight: 'bold' }}>
            {ratings.treeline} - {getDangerLabel(ratings.treeline)}
          </div>
        </div>
        <div className="elevation-band" style={{ background: getDangerColor(ratings.belowTreeline) }}>
          <div className="label" style={{ color: '#333' }}>Below Treeline</div>
          <div style={{ color: '#333', fontSize: '1.2em', fontWeight: 'bold' }}>
            {ratings.belowTreeline} - {getDangerLabel(ratings.belowTreeline)}
          </div>
        </div>
      </div>

      <h3>Avalanche Problems</h3>
      <div>
        {forecast.problems.map((problem, idx) => (
          <div key={idx} style={{ marginBottom: '10px' }}>
            <span className="problem-type">{problem.type}</span>
            <div style={{ fontSize: '0.9em', marginTop: '5px', color: darkMode ? '#aaa' : '#666' }}>
              Likelihood: <strong>{problem.likelihood}</strong> | Size: <strong>{problem.size}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="forecast-summary">
        <h4>Forecast Summary</h4>
        <div
          style={{ lineHeight: '1.6' }}
          dangerouslySetInnerHTML={{ __html: forecast.summary }}
        />
      </div>

      <div className="data-source">
        Sources: Avalanche Canada API (avalanche.ca), Parks Canada Avalanche Forecasts
      </div>
    </div>
  );
}
