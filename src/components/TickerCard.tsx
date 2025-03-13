
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TickerCardProps {
  ticker: string;
  companyName: string;
  price: number;
  change: number;
  changePercent: number;
}

const TickerCard: React.FC<TickerCardProps> = ({
  ticker,
  companyName,
  price,
  change,
  changePercent
}) => {
  const isPositive = change >= 0;
  
  return (
    <Link 
      to={`/report/${ticker}`}
      className="block group"
    >
      <div className="p-6 rounded-lg glass border border-border/50 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="inline-block px-2 py-0.5 bg-primary/10 rounded-sm text-xs font-medium text-primary mb-2">
              {ticker}
            </div>
            <h3 className="text-lg font-medium text-foreground line-clamp-1">{companyName}</h3>
          </div>
          
          <div className={`flex items-center space-x-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
            {isPositive ? 
              <TrendingUp className="w-4 h-4" /> : 
              <TrendingDown className="w-4 h-4" />
            }
            <span>{isPositive ? '+' : ''}{changePercent.toFixed(2)}%</span>
          </div>
        </div>
        
        <div className="flex justify-between items-end">
          <div className="text-2xl font-medium">${price.toFixed(2)}</div>
          <div className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{change.toFixed(2)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TickerCard;
