export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const portfolioData = {
    account: {
      totalCash: -18639.50,
      totalMarketValue: 65708.55,
      netLiquidationValue: 76835.64,
      buyingPower: 409526.66,
      accountCurrency: 'EUR',
      leverage: 0.86
    },
    positions: [
      { symbol: 'ACAD', quantity: 150, marketPrice: 27.29, marketValue: 4093.50, unrealizedPL: -333.50, currency: 'USD' },
      { symbol: 'AIR', quantity: 40, marketPrice: 194.58, marketValue: 7783.20, unrealizedPL: -69.70, currency: 'EUR' },
      { symbol: 'ASML', quantity: 3, marketPrice: 1494.40, marketValue: 4483.20, unrealizedPL: 295.51, currency: 'EUR' },
      { symbol: 'CBUK', quantity: 2250, marketPrice: 4.20, marketValue: 9457.87, unrealizedPL: 226.87, currency: 'EUR' },
      { symbol: 'GOOGL', quantity: 57, marketPrice: 353.00, marketValue: 20121.00, unrealizedPL: 250.95, currency: 'USD' },
      { symbol: 'IONQ', quantity: 50, marketPrice: 39.95, marketValue: 1997.50, unrealizedPL: 56.50, currency: 'USD' },
      { symbol: 'OKLO', quantity: 225, marketPrice: 38.87, marketValue: 8745.75, unrealizedPL: -33.75, currency: 'USD' },
      { symbol: 'RQ0', quantity: 200, marketPrice: 15.19, marketValue: 3037.00, unrealizedPL: 178.00, currency: 'EUR' },
      { symbol: 'RRU', quantity: 150, marketPrice: 17.29, marketValue: 2593.20, unrealizedPL: 82.90, currency: 'EUR' },
      { symbol: 'SPCX', quantity: 45, marketPrice: 154.50, marketValue: 6952.50, unrealizedPL: 1182.00, currency: 'USD' },
      { symbol: 'US-T 4 Jul31\'30', quantity: 35, marketPrice: 97.13, marketValue: 33996.48, unrealizedPL: -263.75, currency: 'USD' },
      { symbol: 'VST', quantity: 15, marketPrice: 142.50, marketValue: 2137.50, unrealizedPL: 51.35, currency: 'USD' }
    ],
    timestamp: new Date().toISOString()
  };

  res.json(portfolioData);
}
