// Convert wind degrees to direction
export function getWindDirection(degrees) {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                      'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
}

// Get danger rating color
export function getDangerColor(level) {
  const colors = ['#4CAF50', '#FFEB3B', '#FF9800', '#F44336', '#000'];
  return colors[level - 1] || '#ccc';
}

// Get danger rating label
export function getDangerLabel(level) {
  const labels = ['Low', 'Moderate', 'Considerable', 'High', 'Extreme'];
  return labels[level - 1] || 'Unknown';
}

// Helper to extract rating value (handles both number and {value, display} objects)
export function getRatingValue(rating) {
  if (rating === null || rating === undefined) return 0;
  if (typeof rating === 'number') return rating;
  if (typeof rating === 'object' && rating.value !== undefined) return rating.value;
  return 0;
}

// Safely extract string from potential object
export function safeString(value, fallback = 'Unknown') {
  if (value === null || value === undefined) return fallback;
  if (typeof value === 'string') return value;
  if (typeof value === 'object') {
    return value.display || value.value || fallback;
  }
  return String(value);
}
