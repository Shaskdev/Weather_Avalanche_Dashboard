import React from 'react';
import { REGIONS } from '../data/regions';

export function RegionSelector({ selectedRegion, setSelectedRegion, currentRegion }) {
  return (
    <div className="card">
      <h2>Select Region</h2>
      <div className="region-selector">
        {REGIONS.map(region => (
          <button
            key={region.id}
            className={`region-btn ${selectedRegion === region.id ? 'active' : ''}`}
            onClick={() => setSelectedRegion(region.id)}
          >
            {region.name}
          </button>
        ))}
      </div>
      <div className="data-source">
        Forecast source: {currentRegion?.center}
      </div>
    </div>
  );
}
