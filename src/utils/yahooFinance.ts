
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
  category?: string; // Adding category field
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
    grossProfits: 170782000000,
    category: 'large-cap'
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
    grossProfits: 146577000000,
    category: 'large-cap'
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
    grossProfits: 173738000000,
    category: 'large-cap'
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
    grossProfits: 234400000000,
    category: 'large-cap'
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
    grossProfits: 19630000000,
    category: 'large-cap'
  },
  // Adding 5 smaller companies as a different category
  'CROX': {
    ticker: 'CROX',
    companyName: 'Crocs, Inc.',
    price: 142.78,
    change: 1.32,
    changePercent: 0.93,
    marketCap: 8670000000,
    volume: 1253421,
    peRatio: 9.15,
    dividend: 0,
    eps: 15.61,
    high52: 165.32,
    low52: 108.25,
    averageVolume: 1320000,
    supply: 60700000,
    revenue: 3628000000,
    grossProfits: 2179000000,
    category: 'small-cap'
  },
  'PLCE': {
    ticker: 'PLCE',
    companyName: 'The Children\'s Place, Inc.',
    price: 10.32,
    change: -0.28,
    changePercent: -2.64,
    marketCap: 128600000,
    volume: 782345,
    peRatio: 0,
    dividend: 0,
    eps: -14.77,
    high52: 47.23,
    low52: 8.12,
    averageVolume: 920000,
    supply: 12460000,
    revenue: 1572000000,
    grossProfits: 411000000,
    category: 'small-cap'
  },
  'CAKE': {
    ticker: 'CAKE',
    companyName: 'The Cheesecake Factory Inc.',
    price: 35.24,
    change: 0.43,
    changePercent: 1.24,
    marketCap: 1790000000,
    volume: 526789,
    peRatio: 17.01,
    dividend: 1.40,
    eps: 2.07,
    high52: 41.12,
    low52: 28.58,
    averageVolume: 830000,
    supply: 50800000,
    revenue: 3370000000,
    grossProfits: 607000000,
    category: 'small-cap'
  },
  'PRTS': {
    ticker: 'PRTS',
    companyName: 'CarParts.com, Inc.',
    price: 1.78,
    change: 0.13,
    changePercent: 7.88,
    marketCap: 99500000,
    volume: 432678,
    peRatio: 0,
    dividend: 0,
    eps: -0.42,
    high52: 4.53,
    low52: 1.26,
    averageVolume: 642000,
    supply: 55900000,
    revenue: 675400000,
    grossProfits: 227600000,
    category: 'small-cap'
  },
  'FRPT': {
    ticker: 'FRPT',
    companyName: 'Freshpet, Inc.',
    price: 112.38,
    change: 1.87,
    changePercent: 1.69,
    marketCap: 5430000000,
    volume: 365421,
    peRatio: 186.85,
    dividend: 0,
    eps: 0.60,
    high52: 119.74,
    low52: 87.03,
    averageVolume: 730000,
    supply: 48300000,
    revenue: 741500000,
    grossProfits: 303600000,
    category: 'small-cap'
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

