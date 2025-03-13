
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import TickerCard from '@/components/TickerCard';
import { getAllTickersData } from '@/utils/yahooFinance';

const Index = () => {
  const stocks = getAllTickersData();
  
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
        
        <section className="mb-12 animate-slide-up">
          <h2 className="text-xl font-semibold mb-4">Featured Tickers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stocks.map((stock) => (
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
        
        <section className="animate-slide-up">
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
      </main>
    </div>
  );
};

export default Index;
