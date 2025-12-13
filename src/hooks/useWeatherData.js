import { useState, useCallback } from 'react';
import { REGIONS } from '../data/regions';
import { getWindDirection } from '../utils/helpers';

export function useWeatherData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [liveWeather, setLiveWeather] = useState(null);
  const [weatherTrendData, setWeatherTrendData] = useState(null);
  const [windChartData, setWindChartData] = useState(null);

  const fetchWeatherData = useCallback(async (regionId) => {
    setLoading(true);
    setError(null);

    try {
      const regionData = REGIONS.find(r => r.id === regionId);
      if (!regionData) return;

      // Open-Meteo API - free, no key required
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?` +
        `latitude=${regionData.lat}&longitude=${regionData.lng}` +
        `&hourly=temperature_2m,snowfall,wind_speed_10m,wind_gusts_10m,precipitation` +
        `&daily=temperature_2m_max,temperature_2m_min,snowfall_sum,precipitation_sum,wind_speed_10m_max,wind_gusts_10m_max` +
        `&current=temperature_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m` +
        `&timezone=America/Edmonton&forecast_days=7`
      );

      if (!response.ok) throw new Error('Weather API request failed');

      const data = await response.json();

      // Process current weather
      setLiveWeather({
        temp: Math.round(data.current.temperature_2m),
        windSpeed: Math.round(data.current.wind_speed_10m),
        windGusts: Math.round(data.current.wind_gusts_10m),
        windDirection: getWindDirection(data.current.wind_direction_10m),
        snow24h: Math.round(data.hourly.snowfall.slice(0, 24).reduce((a, b) => a + b, 0) * 10) / 10,
        snow48h: Math.round(data.hourly.snowfall.slice(0, 48).reduce((a, b) => a + b, 0) * 10) / 10
      });

      // Process 7-day trend data for chart
      const dailyLabels = data.daily.time.map(date => {
        const d = new Date(date);
        return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      });

      setWeatherTrendData({
        labels: dailyLabels,
        temperature: data.daily.temperature_2m_max.map((max, i) =>
          Math.round((max + data.daily.temperature_2m_min[i]) / 2)
        ),
        snowfall: data.daily.snowfall_sum.map(s => Math.round(s * 10) / 10)
      });

      // Process 48-hour wind data for chart
      const hourlyLabels = data.hourly.time.slice(0, 48).map((time, i) => {
        if (i % 6 === 0) {
          const d = new Date(time);
          return d.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
        }
        return '';
      });

      setWindChartData({
        labels: hourlyLabels,
        windSpeed: data.hourly.wind_speed_10m.slice(0, 48),
        windGusts: data.hourly.wind_gusts_10m.slice(0, 48)
      });

    } catch (err) {
      console.error('Weather API error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    liveWeather,
    weatherTrendData,
    windChartData,
    fetchWeatherData
  };
}
