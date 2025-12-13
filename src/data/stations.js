// SpotWX-style weather stations (sample data)
export const SPOTWX_STATIONS = [
  {
    id: 'banff-upper',
    name: 'Banff Upper Station',
    elevation: '2240m',
    region: 'banff',
    lat: 51.4968,
    lng: -115.9281,
    data: {
      temp: -8.2,
      dewpoint: -12.5,
      humidity: 72,
      windSpeed: 45,
      windGust: 62,
      windDir: 'SW',
      pressure: 775,
      snowDepth: 142,
      snow24h: 12,
      snow48h: 28,
      swe: 45
    }
  },
  {
    id: 'sunshine-village',
    name: 'Sunshine Village',
    elevation: '2100m',
    region: 'banff',
    lat: 51.1167,
    lng: -115.7667,
    data: {
      temp: -6.5,
      dewpoint: -10.2,
      humidity: 78,
      windSpeed: 38,
      windGust: 55,
      windDir: 'WSW',
      pressure: 780,
      snowDepth: 156,
      snow24h: 15,
      snow48h: 32,
      swe: 52
    }
  },
  {
    id: 'lake-louise-upper',
    name: 'Lake Louise Alpine',
    elevation: '2637m',
    region: 'lake-louise',
    lat: 51.4254,
    lng: -116.1773,
    data: {
      temp: -10.1,
      dewpoint: -14.8,
      humidity: 68,
      windSpeed: 52,
      windGust: 78,
      windDir: 'SW',
      pressure: 742,
      snowDepth: 168,
      snow24h: 18,
      snow48h: 35,
      swe: 58
    }
  },
  {
    id: 'castle-mtn',
    name: 'Castle Mountain',
    elevation: '1850m',
    region: 'kananaskis',
    lat: 51.2667,
    lng: -115.4500,
    data: {
      temp: -5.3,
      dewpoint: -8.9,
      humidity: 80,
      windSpeed: 28,
      windGust: 42,
      windDir: 'W',
      pressure: 815,
      snowDepth: 121,
      snow24h: 10,
      snow48h: 25,
      swe: 38
    }
  },
  {
    id: 'crowsnest-pass',
    name: 'Crowsnest Pass',
    elevation: '1780m',
    region: 'south-rockies',
    lat: 49.6347,
    lng: -114.4142,
    data: {
      temp: -4.8,
      dewpoint: -9.1,
      humidity: 71,
      windSpeed: 35,
      windGust: 58,
      windDir: 'W',
      pressure: 825,
      snowDepth: 98,
      snow24h: 8,
      snow48h: 18,
      swe: 32
    }
  },
  {
    id: 'castle-resort',
    name: 'Castle Mountain Resort',
    elevation: '2100m',
    region: 'south-rockies',
    lat: 49.3167,
    lng: -114.4000,
    data: {
      temp: -7.2,
      dewpoint: -11.5,
      humidity: 74,
      windSpeed: 42,
      windGust: 65,
      windDir: 'SW',
      pressure: 785,
      snowDepth: 135,
      snow24h: 14,
      snow48h: 28,
      swe: 45
    }
  },
  {
    id: 'rogers-pass',
    name: 'Rogers Pass Summit',
    elevation: '1330m',
    region: 'glacier',
    lat: 51.3000,
    lng: -117.5200,
    data: {
      temp: -3.5,
      dewpoint: -6.2,
      humidity: 82,
      windSpeed: 25,
      windGust: 45,
      windDir: 'SW',
      pressure: 865,
      snowDepth: 210,
      snow24h: 22,
      snow48h: 45,
      swe: 72
    }
  },
  {
    id: 'fidelity-mtn',
    name: 'Mt. Fidelity',
    elevation: '1875m',
    region: 'glacier',
    lat: 51.2333,
    lng: -117.4667,
    data: {
      temp: -6.8,
      dewpoint: -10.1,
      humidity: 78,
      windSpeed: 38,
      windGust: 62,
      windDir: 'W',
      pressure: 810,
      snowDepth: 245,
      snow24h: 28,
      snow48h: 52,
      swe: 85
    }
  },
  {
    id: 'kootenay-pass',
    name: 'Kootenay Pass',
    elevation: '1775m',
    region: 'south-columbia',
    lat: 49.0833,
    lng: -117.0333,
    data: {
      temp: -5.1,
      dewpoint: -8.8,
      humidity: 76,
      windSpeed: 32,
      windGust: 48,
      windDir: 'SW',
      pressure: 820,
      snowDepth: 178,
      snow24h: 16,
      snow48h: 35,
      swe: 58
    }
  }
];

// Sample incidents data
export const INITIAL_INCIDENTS = [
  {
    id: 1,
    type: 'avalanche',
    title: 'Natural Size 2.5 Avalanche',
    location: 'Commonwealth Creek, Kananaskis',
    date: '2024-12-12',
    details: 'Natural avalanche observed on NE aspect at 2400m. Crown depth 80cm, ran 400m vertical. Wind slab on persistent weak layer.',
    severity: 'moderate'
  },
  {
    id: 2,
    type: 'avalanche',
    title: 'Skier-Triggered Size 1.5',
    location: 'Goat Range, Lake Louise',
    date: '2024-12-11',
    details: 'Remotely triggered from ridgeline. Storm snow on sun crust. No one caught.',
    severity: 'low'
  },
  {
    id: 3,
    type: 'weather',
    title: 'High Wind Warning',
    location: 'Southern Rockies - All Areas',
    date: '2024-12-13',
    details: 'SW winds 60-80 km/h with gusts to 100 km/h expected above treeline. Significant snow transport and loading on lee slopes.',
    severity: 'high'
  },
  {
    id: 4,
    type: 'avalanche',
    title: 'Cornice Fall with Sympathetic Trigger',
    location: 'Mount Assiniboine Area',
    date: '2024-12-10',
    details: 'Large cornice fall triggered size 2 avalanche below. E aspect, 2600m elevation.',
    severity: 'moderate'
  },
];

// Fallback forecast data
export const FALLBACK_FORECAST = {
  date: '2024-12-13',
  ratings: {
    alpine: 3,
    treeline: 3,
    belowTreeline: 2
  },
  trend: 'Increasing',
  problems: [
    { type: 'Wind Slab', likelihood: 'Likely', size: '1-2.5' },
    { type: 'Persistent Slab', likelihood: 'Possible', size: '2-3' },
    { type: 'Storm Slab', likelihood: 'Possible', size: '1-2' }
  ],
  summary: 'Strong southwest winds continue to build fresh wind slabs on lee slopes. A persistent weak layer exists in mid-pack on shady aspects above 2200m. New snow loading increases stress on this layer. Conservative terrain selection recommended.'
};

// Fallback weather data
export const FALLBACK_WEATHER = {
  current: {
    temp: -6,
    windSpeed: 45,
    windDirection: 'SW',
    snowLast24h: 12,
    snowLast48h: 28,
    visibility: 'Poor'
  }
};
