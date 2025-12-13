import React from 'react';

export function ResourceLinks({ darkMode }) {
  const linkStyle = { color: darkMode ? '#6eb5ff' : '#2a5298' };

  return (
    <div className="card">
      <h2>Additional Resources & Data Sources</h2>
      <div style={{ lineHeight: '2', fontSize: '0.95em' }}>
        <strong>Avalanche Forecasts:</strong><br />
        • <a href="https://www.avalanche.ca" target="_blank" rel="noopener noreferrer" style={linkStyle}>Avalanche Canada</a> - Regional forecasts for Kananaskis, South Rockies, South Columbia<br />
        • <a href="https://www.pc.gc.ca/en/pn-np/ab/banff/securite-safety/avalanche" target="_blank" rel="noopener noreferrer" style={linkStyle}>Parks Canada</a> - Banff, Lake Louise, Glacier NP<br />
        • <a href="https://www.avalanche.ca/min" target="_blank" rel="noopener noreferrer" style={linkStyle}>MIN Reports</a> - User-submitted observations<br />
        <br />
        <strong>Weather Data:</strong><br />
        • <a href="https://weather.gc.ca/forecast/canada/index_e.html?id=AB" target="_blank" rel="noopener noreferrer" style={linkStyle}>Environment Canada</a> - Official forecasts & warnings<br />
        • <a href="https://www.mountain-forecast.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Mountain-Forecast.com</a> - Peak-specific forecasts<br />
        • <a href="https://spotwx.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>SpotWX</a> - High-resolution weather models & station data<br />
        • <a href="https://www.wcc.nrcs.usda.gov/snow/" target="_blank" rel="noopener noreferrer" style={linkStyle}>SNOTEL</a> - Automated snow monitoring<br />
        • <a href="https://weather.gc.ca/warnings/index_e.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Weather Warnings</a> - Active alerts<br />
        <br />
        <strong>Snow & Hydrology:</strong><br />
        • <a href="https://rivers.alberta.ca" target="_blank" rel="noopener noreferrer" style={linkStyle}>Alberta River Basins</a> - Snow survey data<br />
        • <a href="https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/water-science-data/water-data-tools/snow-survey-data" target="_blank" rel="noopener noreferrer" style={linkStyle}>BC Snow Survey</a> - Manual snow courses<br />
        <br />
        <strong>Community & Education:</strong><br />
        • <a href="https://www.avalanche.ca/tutorial" target="_blank" rel="noopener noreferrer" style={linkStyle}>Avalanche Canada Tutorial</a> - Online training<br />
        • Local social media groups and forums for real-time updates
      </div>
    </div>
  );
}
