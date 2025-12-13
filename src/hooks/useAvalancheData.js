import { useState, useCallback } from 'react';
import { REGIONS, AVALANCHE_CANADA_REGIONS } from '../data/regions';
import { getRatingValue, safeString } from '../utils/helpers';

export function useAvalancheData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [liveAvalanche, setLiveAvalanche] = useState(null);

  const fetchAvalancheData = useCallback(async (regionId) => {
    setLoading(true);
    setError(null);

    try {
      const avCanRegion = AVALANCHE_CANADA_REGIONS[regionId];
      if (!avCanRegion) {
        throw new Error('Region not mapped to Avalanche Canada');
      }

      const region = REGIONS.find(r => r.id === regionId);

      // Avalanche Canada public API
      const response = await fetch(
        `https://api.avalanche.ca/forecasts/en/products/point?lat=${region.lat}&long=${region.lng}`
      );

      if (!response.ok) throw new Error('Avalanche API request failed');

      const data = await response.json();

      if (data && data.report) {
        const report = data.report;

        // Parse danger ratings
        const dangerRatings = report.dangerRatings || [];
        const todayRatings = dangerRatings.find(d => d.date?.display === 'Today') || dangerRatings[0] || {};

        // Extract ratings safely
        const alpRating = todayRatings.ratings?.alp?.rating;
        const tlnRating = todayRatings.ratings?.tln?.rating;
        const btlRating = todayRatings.ratings?.btl?.rating;

        // Parse avalanche problems
        const problems = (report.problems || []).map(p => {
          return {
            type: safeString(p.type),
            likelihood: safeString(p.likelihood),
            size: p.expectedSize ? `${p.expectedSize.min || '?'}-${p.expectedSize.max || '?'}` : 'Unknown',
            aspects: p.aspects || [],
            elevations: p.elevations || []
          };
        });

        // Handle summary which might be HTML or an object
        let summary = report.highlights || report.summary || 'No summary available.';
        if (typeof summary === 'object') {
          summary = summary.display || summary.value || JSON.stringify(summary);
        }

        setLiveAvalanche({
          date: report.dateIssued ? new Date(report.dateIssued).toLocaleDateString() : new Date().toLocaleDateString(),
          validUntil: report.validUntil ? new Date(report.validUntil).toLocaleDateString() : null,
          ratings: {
            alpine: getRatingValue(alpRating),
            treeline: getRatingValue(tlnRating),
            belowTreeline: getRatingValue(btlRating)
          },
          problems: problems.slice(0, 4),
          summary: summary,
          confidence: report.confidence || null,
          forecaster: report.forecaster || null
        });
      }
    } catch (err) {
      console.error('Avalanche API error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    liveAvalanche,
    fetchAvalancheData
  };
}
