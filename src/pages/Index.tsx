
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import TickerCard from '@/components/TickerCard';
import PricingCard from '@/components/PricingCard';
import { getAllTickersData } from '@/utils/yahooFinance';
import { Badge } from '@/components/ui/card';

const Index = () => {
  const stocks = getAllTickersData();
  
  // Separate stocks by category
  const largeCapStocks = stocks.filter(stock => stock.category === 'large-cap');
  const smallCapStocks = stocks.filter(stock => stock.category === 'small-cap');
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: 'Basic',
      price: 10,
      features: [
        { name: 'Basic research reports', included: true },
        { name: 'Access to 10 tickers', included: true },
        { name: 'Daily market updates', included: true },
        { name: 'Portfolio tracking', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Real-time alerts', included: false },
        { name: 'AI investment recommendations', included: false },
      ],
    },
    {
      title: 'Premium',
      price: 20,
      features: [
        { name: 'Basic research reports', included: true },
        { name: 'Access to 50 tickers', included: true },
        { name: 'Daily market updates', included: true },
        { name: 'Portfolio tracking', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Real-time alerts', included: false },
        { name: 'AI investment recommendations', included: false },
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: 100,
      features: [
        { name: 'Basic research reports', included: true },
        { name: 'Unlimited tickers', included: true },
        { name: 'Daily market updates', included: true },
        { name: 'Portfolio tracking', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Real-time alerts', included: true },
        { name: 'AI investment recommendations', included: true },
      ],
    },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="animate-slide-down">
          <h1 className="text-4xl font-bold mb-2">Equity Research</h1>
          <p className="text-lg text-muted-foreground mb-8">
            AI-powered analysis for informed investment decisions
          </p>
        </div>
        
        {/* Large Cap Stocks */}
        <section className="mb-12 animate-slide-up">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-semibold">Large Cap Tickers</h2>
            <div className="ml-3 px-2 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
              Market Leaders
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {largeCapStocks.map((stock) => (
              <TickerCard
                key={stock.ticker}
                ticker={stock.ticker}
                companyName={stock.companyName}
                price={stock.price}
                change={stock.change}
                changePercent={stock.changePercent}
              />
            ))}
          </div>
        </section>
        
        {/* Small Cap Stocks */}
        <section className="mb-12 animate-slide-up">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-semibold">Small Cap Tickers</h2>
            <div className="ml-3 px-2 py-1 rounded-full bg-secondary/20 text-xs font-medium text-foreground">
              Growth Potential
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallCapStocks.map((stock) => (
              <TickerCard
                key={stock.ticker}
                ticker={stock.ticker}
                companyName={stock.companyName}
                price={stock.price}
                change={stock.change}
                changePercent={stock.changePercent}
              />
            ))}
          </div>
        </section>
        
        {/* About Section */}
        <section className="mb-16 animate-slide-up">
          <div className="p-6 rounded-lg glass border border-border/50">
            <h2 className="text-xl font-semibold mb-3">About This Platform</h2>
            <p className="text-foreground/90 mb-4">
              Our AI-powered equity research platform combines real-time market data from Yahoo Finance with advanced 
              natural language processing to generate comprehensive investment analysis reports.
            </p>
            <p className="text-foreground/90">
              Simply select one of the tickers above to receive an in-depth research report including financial analysis, 
              market positioning, risk assessment, future outlook, and investment recommendations.
            </p>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="animate-slide-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Pricing Plans</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the right plan for your investment research needs. Upgrade anytime to access more features and capabilities.
            </p>
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mt-4">
              Coming Soon
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {pricingTiers.map((tier, index) => (
              <PricingCard 
                key={index}
                title={tier.title}
                price={tier.price}
                features={tier.features}
                isPopular={tier.isPopular}
              />
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-muted-foreground mb-4">
              Need a custom plan for your organization?
            </p>
            <button className="text-primary font-medium hover:underline">
              Contact us for enterprise pricing
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
