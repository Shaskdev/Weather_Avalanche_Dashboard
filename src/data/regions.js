// Regional data with coordinates
export const REGIONS = [
  {
    id: 'banff',
    name: 'Banff National Park',
    center: 'Parks Canada',
    lat: 51.4968,
    lng: -115.9281,
    zoom: 10,
    description: 'Classic Canadian Rockies terrain with iconic peaks and glacier-fed valleys'
  },
  {
    id: 'kananaskis',
    name: 'Kananaskis Country',
    center: 'Avalanche Canada',
    lat: 50.7167,
    lng: -115.0833,
    zoom: 10,
    description: 'Diverse alpine and subalpine terrain south of Banff'
  },
  {
    id: 'lake-louise',
    name: 'Lake Louise',
    center: 'Parks Canada',
    lat: 51.4254,
    lng: -116.1773,
    zoom: 11,
    description: 'High alpine terrain with extensive backcountry skiing options'
  },
  {
    id: 'south-rockies',
    name: 'South Rockies',
    center: 'Avalanche Canada',
    lat: 49.5833,
    lng: -114.7500,
    zoom: 9,
    description: 'Southern Alberta Rockies including Crowsnest Pass area'
  },
  {
    id: 'south-columbia',
    name: 'South Columbia',
    center: 'Avalanche Canada',
    lat: 51.2500,
    lng: -117.5000,
    zoom: 9,
    description: 'Interior BC ranges with deep continental snowpack'
  },
  {
    id: 'glacier',
    name: 'Glacier National Park',
    center: 'Parks Canada',
    lat: 51.2667,
    lng: -117.5167,
    zoom: 10,
    description: 'Rogers Pass area with heavy snowfall and complex avalanche terrain'
  },
];

// Avalanche Canada region IDs mapping
export const AVALANCHE_CANADA_REGIONS = {
  'banff': 'banff-yoho-kootenay',
  'kananaskis': 'kananaskis',
  'lake-louise': 'banff-yoho-kootenay',
  'south-rockies': 'south-rockies',
  'south-columbia': 'south-columbia',
  'glacier': 'glacier'
};
