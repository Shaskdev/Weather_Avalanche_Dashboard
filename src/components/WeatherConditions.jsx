import React from 'react';
import { FALLBACK_WEATHER } from '../data/stations';
import { WeatherTrendChart, WindChart } from './WeatherCharts';

export function WeatherConditions({
  loading,
  error,
  liveWeather,
  weatherTrendData,
  windChartData,
  darkMode
}) {
  const weather = liveWeather || FALLBACK_WEATHER.current;

  return (
    <div className="card">
      <h2>Current Weather Conditions</h2>
      {loading && <div className="loading">Loading weather data...</div>}
      {error && (
        <div className="api-error" style={{
          background: darkMode ? '#3a2025' : '#f8d7da',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '15px',
          fontSize: '0.9em'
        }}>
          Using cached data - Live weather temporarily unavailable
        </div>
      )}
      <div className="weather-grid">
        <div className="weather-item">
          <div className="label">Temperature</div>
          <div className="value">
            {liveWeather?.temp ?? weather.temp}<span className="unit">°C</span>
          </div>
          {liveWeather && <div style={{ fontSize: '0.75em', color: '#4CAF50' }}>LIVE</div>}
        </div>
        <div className="weather-item">
          <div className="label">Wind</div>
          <div className="value">
            {liveWeather?.windSpeed ?? weather.windSpeed}<span className="unit">km/h</span>
          </div>
          <div style={{ fontSize: '0.85em', color: darkMode ? '#aaa' : '#666' }}>
            {liveWeather?.windDirection ?? weather.windDirection}
            {liveWeather && ` (gusts ${liveWeather.windGusts})`}
          </div>
        </div>
        <div className="weather-item">
          <div className="label">Snow (24h)</div>
          <div className="value">
            {liveWeather?.snow24h ?? weather.snowLast24h}<span className="unit">cm</span>
          </div>
        </div>
        <div className="weather-item">
          <div className="label">Snow (48h)</div>
          <div className="value">
            {liveWeather?.snow48h ?? weather.snowLast48h}<span className="unit">cm</span>
          </div>
        </div>
      </div>

      {/* Weather Trend Chart */}
      {weatherTrendData && (
        <div style={{ marginTop: '20px' }}>
          <WeatherTrendChart data={weatherTrendData} darkMode={darkMode} />
        </div>
      )}

      {/* Wind Chart */}
      {windChartData && (
        <div style={{ marginTop: '20px' }}>
          <WindChart data={windChartData} darkMode={darkMode} />
        </div>
      )}

      <div className="data-source">
        Sources: Open-Meteo API (live data), Mountain-Forecast.com, Environment Canada
      </div>
    </div>
  );
}
