import React from 'react';
import { SPOTWX_STATIONS } from '../data/stations';

export function WeatherStations({ selectedRegion, currentRegion }) {
  const regionStations = SPOTWX_STATIONS.filter(s => s.region === selectedRegion);

  return (
    <div className="card">
      <h2>SpotWX Weather Stations - {currentRegion?.name}</h2>
      <div className="station-list-detailed">
        {regionStations.map(station => (
          <div key={station.id} className="station-card-detailed">
            <div className="station-header">
              <div>
                <div className="station-name">{station.name}</div>
                <div className="station-elevation">{station.elevation}</div>
              </div>
            </div>
            <div className="station-data-grid">
              <div className="data-item">
                <span className="data-label">Temperature</span>
                <span className="data-value">{station.data.temp}°C</span>
              </div>
              <div className="data-item">
                <span className="data-label">Dewpoint</span>
                <span className="data-value">{station.data.dewpoint}°C</span>
              </div>
              <div className="data-item">
                <span className="data-label">Humidity</span>
                <span className="data-value">{station.data.humidity}%</span>
              </div>
              <div className="data-item">
                <span className="data-label">Wind</span>
                <span className="data-value">{station.data.windSpeed} km/h {station.data.windDir}</span>
              </div>
              <div className="data-item">
                <span className="data-label">Gusts</span>
                <span className="data-value">{station.data.windGust} km/h</span>
              </div>
              <div className="data-item">
                <span className="data-label">Pressure</span>
                <span className="data-value">{station.data.pressure} mb</span>
              </div>
              <div className="data-item highlight">
                <span className="data-label">Snow Depth</span>
                <span className="data-value">{station.data.snowDepth} cm</span>
              </div>
              <div className="data-item highlight">
                <span className="data-label">24h Snow</span>
                <span className="data-value">{station.data.snow24h} cm</span>
              </div>
              <div className="data-item highlight">
                <span className="data-label">48h Snow</span>
                <span className="data-value">{station.data.snow48h} cm</span>
              </div>
              <div className="data-item highlight">
                <span className="data-label">SWE</span>
                <span className="data-value">{station.data.swe} mm</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="data-source">
        Sources: SpotWX (spotwx.com), SNOTEL Network, Alberta Snow Survey, BC River Forecast Centre
      </div>
    </div>
  );
}
