import React from 'react';

export function AlertBanner({ rating }) {
  if (rating < 3) return null;

  return (
    <div className="alert-banner critical">
      <strong>CONSIDERABLE AVALANCHE DANGER</strong> - Alpine and treeline zones rated CONSIDERABLE ({rating}).
      Avalanches likely on wind-loaded slopes. Careful snowpack evaluation and conservative terrain selection essential.
    </div>
  );
}
