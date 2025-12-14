// Ski resort data by region
export const SKI_RESORTS = [
  // Banff Region
  {
    id: 'sunshine-village',
    name: 'Banff Sunshine',
    region: 'banff',
    website: 'https://www.skibanff.com',
    elevation: { base: 1660, summit: 2730 },
    snowReport: {
      base: 145,
      last24h: 12,
      last48h: 25,
      last7days: 58,
      seasonTotal: 423,
      conditions: 'Powder',
      lastUpdated: '2024-12-14'
    },
    liftsOpen: 12,
    liftsTotal: 12,
    runsOpen: 137,
    runsTotal: 145
  },
  {
    id: 'lake-louise-resort',
    name: 'Lake Louise Ski Resort',
    region: 'banff',
    website: 'https://www.skilouise.com',
    elevation: { base: 1646, summit: 2637 },
    snowReport: {
      base: 152,
      last24h: 15,
      last48h: 28,
      last7days: 62,
      seasonTotal: 445,
      conditions: 'Powder',
      lastUpdated: '2024-12-14'
    },
    liftsOpen: 10,
    liftsTotal: 10,
    runsOpen: 145,
    runsTotal: 164
  },
  {
    id: 'norquay',
    name: 'Mt Norquay',
    region: 'banff',
    website: 'https://www.banffnorquay.com',
    elevation: { base: 1630, summit: 2133 },
    snowReport: {
      base: 95,
      last24h: 8,
      last48h: 18,
      last7days: 42,
      seasonTotal: 312,
      conditions: 'Packed Powder',
      lastUpdated: '2024-12-14'
    },
    liftsOpen: 5,
    liftsTotal: 5,
    runsOpen: 60,
    runsTotal: 60
  },

  // Kananaskis Region
  {
    id: 'nakiska',
    name: 'Nakiska Ski Area',
    region: 'kananaskis',
    website: 'https://www.skinakiska.com',
    elevation: { base: 1525, summit: 2258 },
    snowReport: {
      base: 85,
      last24h: 5,
      last48h: 12,
      last7days: 35,
      seasonTotal: 265,
      conditions: 'Packed Powder',
      lastUpdated: '2024-12-14'
    },
    liftsOpen: 6,
    liftsTotal: 6,
    runsOpen: 71,
    runsTotal: 71
  },

  // Lake Louise Region (same resorts, but for separate view)
  {
    id: 'lake-louise-resort-ll',
    name: 'Lake Louise Ski Resort',
    region: 'lake-louise',
    website: 'https://www.skilouise.com',
    elevation: { base: 1646, summit: 2637 },
    snowReport: {
      base: 152,
      last24h: 15,
      last48h: 28,
      last7days: 62,
      seasonTotal: 445,
      conditions: 'Powder',
      lastUpdated: '2024-12-14'
    },
    liftsOpen: 10,
    liftsTotal: 10,
    runsOpen: 145,
    runsTotal: 164
  },

  // South Rockies Region
  {
    id: 'castle-mountain',
    name: 'Castle Mountain Resort',
    region: 'south-rockies',
    website: 'https://www.skicastle.ca',
    elevation: { base: 1410, summit: 2270 },
    snowReport: {
      base: 125,
      last24h: 18,
      last48h: 35,
      last7days: 72,
      seasonTotal: 485,
      conditions: 'Powder',
      lastUpdated: '2024-12-14'
    },
    liftsOpen: 6,
    liftsTotal: 6,
    runsOpen: 94,
    runsTotal: 94
  },
  {
    id: 'pass-powderkeg',
    name: 'Pass Powderkeg',
    region: 'south-rockies',
    website: 'https://www.passpowderkeg.com',
    elevation: { base: 1700, summit: 2100 },
    snowReport: {
      base: 110,
      last24h: 14,
      last48h: 28,
      last7days: 55,
      seasonTotal: 380,
      conditions: 'Powder',
      lastUpdated: '2024-12-14'
    },
    liftsOpen: 3,
    liftsTotal: 3,
    runsOpen: 25,
    runsTotal: 30
  },

  // South Columbia Region
  {
    id: 'whitewater',
    name: 'Whitewater Ski Resort',
    region: 'south-columbia',
    website: 'https://www.skiwhitewater.com',
    elevation: { base: 1580, summit: 2044 },
    snowReport: {
      base: 185,
      last24h: 22,
      last48h: 45,
      last7days: 95,
      seasonTotal: 620,
      conditions: 'Powder',
      lastUpdated: '2024-12-14'
    },
    liftsOpen: 4,
    liftsTotal: 4,
    runsOpen: 82,
    runsTotal: 82
  },
  {
    id: 'red-mountain',
    name: 'RED Mountain Resort',
    region: 'south-columbia',
    website: 'https://www.redresort.com',
    elevation: { base: 1185, summit: 2075 },
    snowReport: {
      base: 165,
      last24h: 20,
      last48h: 40,
      last7days: 88,
      seasonTotal: 580,
      conditions: 'Powder',
      lastUpdated: '2024-12-14'
    },
    liftsOpen: 7,
    liftsTotal: 8,
    runsOpen: 110,
    runsTotal: 119
  },

  // Glacier Region
  {
    id: 'revelstoke',
    name: 'Revelstoke Mountain Resort',
    region: 'glacier',
    website: 'https://www.revelstokemountainresort.com',
    elevation: { base: 512, summit: 2225 },
    snowReport: {
      base: 175,
      last24h: 28,
      last48h: 52,
      last7days: 105,
      seasonTotal: 685,
      conditions: 'Powder',
      lastUpdated: '2024-12-14'
    },
    liftsOpen: 6,
    liftsTotal: 6,
    runsOpen: 69,
    runsTotal: 69
  },
  {
    id: 'kicking-horse',
    name: 'Kicking Horse Mountain',
    region: 'glacier',
    website: 'https://www.kickinghorseresort.com',
    elevation: { base: 1190, summit: 2450 },
    snowReport: {
      base: 155,
      last24h: 24,
      last48h: 48,
      last7days: 92,
      seasonTotal: 595,
      conditions: 'Powder',
      lastUpdated: '2024-12-14'
    },
    liftsOpen: 4,
    liftsTotal: 5,
    runsOpen: 128,
    runsTotal: 136
  }
];
