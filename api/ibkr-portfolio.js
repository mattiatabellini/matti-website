export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const portfolioData = {
    account: {
      totalCash: -18640.70,
      totalMarketValue: 65834.02,
      netLiquidationValue: 76962.33,
      buyingPower: 410020.12,
      accountCurrency: 'EUR',
      leverage: 0.86
    },
    positions: [
         { symbol: 'ACAD', quantity: 150, averagePrice: 29.51, marketPrice: 27.80, marketValue: 4170.00, unrealizedPL: -257.00, currency: 'USD' },
      { symbol: 'AIR', quantity: 40, averagePrice: 196.32, marketPrice: 194.86, marketValue: 7794.40, unrealizedPL: -58.50, currency: 'EUR' },
      { symbol: 'ASML', quantity: 3, averagePrice: 1395.90, marketPrice: 1492.80, marketValue: 4478.40, unrealizedPL: 290.71, currency: 'EUR' },
      { symbol: 'CBUK', quantity: 2250, averagePrice: 4.10, marketPrice: 4.21, marketValue: 9472.50, unrealizedPL: 241.50, currency: 'EUR' },
      { symbol: 'GOOGL', quantity: 57, averagePrice: 348.60, marketPrice: 352.60, marketValue: 20098.20, unrealizedPL: 228.15, currency: 'USD' },
      { symbol: 'IONQ', quantity: 50, averagePrice: 38.82, marketPrice: 40.12, marketValue: 2006.00, unrealizedPL: 65.00, currency: 'USD' },
      { symbol: 'OKLO', quantity: 225, averagePrice: 39.02, marketPrice: 38.98, marketValue: 8770.50, unrealizedPL: -9.00, currency: 'USD' },
      { symbol: 'RQ0', quantity: 200, averagePrice: 14.29, marketPrice: 15.19, marketValue: 3039.00, unrealizedPL: 180.00, currency: 'EUR' },
      { symbol: 'RRU', quantity: 150, averagePrice: 16.74, marketPrice: 17.35, marketValue: 2602.80, unrealizedPL: 92.50, currency: 'EUR' },
      { symbol: 'SPCX', quantity: 45, averagePrice: 128.23, marketPrice: 154.39, marketValue: 6947.55, unrealizedPL: 1177.05, currency: 'USD' },
      { symbol: 'US-T 4 Jul31\'30', quantity: 35, averagePrice: 97.89, marketPrice: 97.12, marketValue: 33993.07, unrealizedPL: -267.17, currency: 'USD' },
      { symbol: 'VST', quantity: 15, averagePrice: 139.08, marketPrice: 142.70, marketValue: 2140.50, unrealizedPL: 54.35, currency: 'USD' }
    ],
    snapshotAt: '2026-09-21',
    timestamp: new Date().toISOString()
  };

  res.json(portfolioData);
}
