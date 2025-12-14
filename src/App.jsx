import React, { useState, useEffect } from 'react';
import {
  Header,
  RegionSelector,
  AlertBanner,
  RegionMap,
  AvalancheForecast,
  WeatherConditions,
  WeatherStations,
  ResortSnowReports,
  IncidentFeed,
  ResourceLinks
} from './components';
import { REGIONS } from './data/regions';
import { INITIAL_INCIDENTS, FALLBACK_FORECAST } from './data/stations';
import { useWeatherData } from './hooks/useWeatherData';
import { useAvalancheData } from './hooks/useAvalancheData';
import './App.css';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('kananaskis');
  const [darkMode, setDarkMode] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [incidents] = useState(INITIAL_INCIDENTS);

  const {
    loading: weatherLoading,
    error: weatherError,
    liveWeather,
    weatherTrendData,
    windChartData,
    fetchWeatherData
  } = useWeatherData();

  const {
    loading: avalancheLoading,
    error: avalancheError,
    liveAvalanche,
    fetchAvalancheData
  } = useAvalancheData();

  // Apply dark mode class to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  // Fetch data when region changes
  useEffect(() => {
    fetchWeatherData(selectedRegion);
    fetchAvalancheData(selectedRegion);
  }, [selectedRegion, fetchWeatherData, fetchAvalancheData]);

  // Refresh data function
  const refreshData = () => {
    fetchWeatherData(selectedRegion);
    fetchAvalancheData(selectedRegion);
    setLastUpdate(new Date());
  };

  const currentRegion = REGIONS.find(r => r.id === selectedRegion);
  const currentRating = liveAvalanche?.ratings?.alpine || FALLBACK_FORECAST.ratings.alpine;

  return (
    <div className="dashboard">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lastUpdate={lastUpdate}
      />

      <AlertBanner rating={currentRating} />

      <RegionSelector
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        currentRegion={currentRegion}
      />

      <RegionMap selectedRegion={selectedRegion} />

      <div className="grid">
        <AvalancheForecast
          currentRegion={currentRegion}
          loading={avalancheLoading}
          error={avalancheError}
          liveAvalanche={liveAvalanche}
          darkMode={darkMode}
        />

        <WeatherConditions
          loading={weatherLoading}
          error={weatherError}
          liveWeather={liveWeather}
          weatherTrendData={weatherTrendData}
          windChartData={windChartData}
          darkMode={darkMode}
        />
      </div>

      <ResortSnowReports
        selectedRegion={selectedRegion}
        currentRegion={currentRegion}
        darkMode={darkMode}
      />

      <div className="grid">
        <WeatherStations
          selectedRegion={selectedRegion}
          currentRegion={currentRegion}
        />

        <IncidentFeed
          incidents={incidents}
          darkMode={darkMode}
          onRefresh={refreshData}
        />
      </div>

      <ResourceLinks darkMode={darkMode} />
    </div>
  );
}

export default App;
