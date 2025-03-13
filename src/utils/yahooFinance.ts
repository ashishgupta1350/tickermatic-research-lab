
// This is a simulated Yahoo Finance API service
// In a real application, you would use a proper API client

export interface StockData {
  ticker: string;
  companyName: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: number;
  volume: number;
  peRatio: number;
  dividend: number;
  eps: number;
  high52: number;
  low52: number;
  averageVolume: number;
  supply: number;
  revenue: number;
  grossProfits: number;
}

const mockStockData: Record<string, StockData> = {
  'AAPL': {
    ticker: 'AAPL',
    companyName: 'Apple Inc.',
    price: 187.43,
    change: 1.24,
    changePercent: 0.67,
    marketCap: 2900000000000,
    volume: 54326719,
    peRatio: 30.12,
    dividend: 0.82,
    eps: 6.14,
    high52: 199.62,
    low52: 143.90,
    averageVolume: 54680000,
    supply: 15460000000,
    revenue: 383280000000,
    grossProfits: 170782000000
  },
  'MSFT': {
    ticker: 'MSFT',
    companyName: 'Microsoft Corporation',
    price: 410.34,
    change: -2.87,
    changePercent: -0.69,
    marketCap: 3050000000000,
    volume: 22567812,
    peRatio: 34.89,
    dividend: 2.72,
    eps: 11.78,
    high52: 430.82,
    low52: 309.32,
    averageVolume: 26420000,
    supply: 7430000000,
    revenue: 211910000000,
    grossProfits: 146577000000
  },
  'GOOGL': {
    ticker: 'GOOGL',
    companyName: 'Alphabet Inc.',
    price: 158.62,
    change: 0.95,
    changePercent: 0.60,
    marketCap: 1960000000000,
    volume: 19873291,
    peRatio: 24.38,
    dividend: 0,
    eps: 6.51,
    high52: 159.02,
    low52: 118.01,
    averageVolume: 20780000,
    supply: 12340000000,
    revenue: 307392000000,
    grossProfits: 173738000000
  },
  'AMZN': {
    ticker: 'AMZN',
    companyName: 'Amazon.com, Inc.',
    price: 177.23,
    change: -0.41,
    changePercent: -0.23,
    marketCap: 1850000000000,
    volume: 36214895,
    peRatio: 60.18,
    dividend: 0,
    eps: 2.92,
    high52: 189.77,
    low52: 118.35,
    averageVolume: 41560000,
    supply: 10350000000,
    revenue: 574780000000,
    grossProfits: 234400000000
  },
  'TSLA': {
    ticker: 'TSLA',
    companyName: 'Tesla, Inc.',
    price: 238.43,
    change: 5.21,
    changePercent: 2.23,
    marketCap: 760000000000,
    volume: 70245387,
    peRatio: 60.93,
    dividend: 0,
    eps: 3.91,
    high52: 278.98,
    low52: 152.37,
    averageVolume: 93840000,
    supply: 3180000000,
    revenue: 94760000000,
    grossProfits: 19630000000
  }
};

// Get basic data for all tickers
export const getAllTickersData = (): StockData[] => {
  return Object.values(mockStockData);
};

// Get detailed data for a specific ticker
export const getTickerData = (ticker: string): StockData | null => {
  const stock = mockStockData[ticker.toUpperCase()];
  if (!stock) {
    console.error(`Stock data not found for ticker: ${ticker}`);
    return null;
  }
  
  return stock;
};

// Simulate an API call with a delay
export const fetchTickerData = async (ticker: string): Promise<StockData | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getTickerData(ticker));
    }, 1000); // Simulate network delay
  });
};
