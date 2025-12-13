import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { REGIONS } from '../data/regions';
import { SPOTWX_STATIONS } from '../data/stations';

// Fix for default marker icons in Leaflet with bundlers
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export function RegionMap({ selectedRegion }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      const region = REGIONS.find(r => r.id === selectedRegion);
      mapInstanceRef.current = L.map(mapRef.current).setView([region.lat, region.lng], region.zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstanceRef.current);

      // Add markers for weather stations in this region
      const regionStations = SPOTWX_STATIONS.filter(s => s.region === selectedRegion);
      regionStations.forEach(station => {
        L.marker([station.lat, station.lng])
          .bindPopup(`<b>${station.name}</b><br>${station.elevation}<br>Temp: ${station.data.temp}°C<br>Wind: ${station.data.windSpeed} km/h ${station.data.windDir}`)
          .addTo(mapInstanceRef.current);
      });
    } else if (mapInstanceRef.current) {
      const region = REGIONS.find(r => r.id === selectedRegion);
      mapInstanceRef.current.setView([region.lat, region.lng], region.zoom);

      // Clear existing markers and add new ones
      mapInstanceRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapInstanceRef.current.removeLayer(layer);
        }
      });

      const regionStations = SPOTWX_STATIONS.filter(s => s.region === selectedRegion);
      regionStations.forEach(station => {
        L.marker([station.lat, station.lng])
          .bindPopup(`<b>${station.name}</b><br>${station.elevation}<br>Temp: ${station.data.temp}°C<br>Wind: ${station.data.windSpeed} km/h ${station.data.windDir}`)
          .addTo(mapInstanceRef.current);
      });
    }
  }, [selectedRegion]);

  return (
    <div className="card">
      <h2>Region Map & Weather Stations</h2>
      <div ref={mapRef} className="map-container"></div>
      <div className="data-source">
        Interactive map showing weather station locations. Click markers for details.
      </div>
    </div>
  );
}
