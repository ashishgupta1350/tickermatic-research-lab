
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ResearchReportProps {
  report: {
    ticker: string;
    companyName: string;
    summary: string;
    financialAnalysis: string;
    marketPosition: string;
    risks: string;
    outlook: string;
    recommendation: string;
  } | null;
  isLoading: boolean;
}

const ResearchReport: React.FC<ResearchReportProps> = ({ report, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-muted-foreground animate-pulse-subtle">
          Generating comprehensive research report...
        </p>
      </div>
    );
  }
  
  if (!report) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">Select a ticker to view research report</p>
      </div>
    );
  }
  
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-primary/10 rounded-sm text-sm font-medium text-primary mb-2">
          {report.ticker}
        </div>
        <h1 className="text-3xl font-bold mb-2">{report.companyName}</h1>
        <p className="text-muted-foreground">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Executive Summary</h2>
        <p className="text-foreground/90 leading-relaxed">{report.summary}</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Financial Analysis</h2>
        <p className="text-foreground/90 leading-relaxed">{report.financialAnalysis}</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Market Position & Competitive Landscape</h2>
        <p className="text-foreground/90 leading-relaxed">{report.marketPosition}</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Risk Assessment</h2>
        <p className="text-foreground/90 leading-relaxed">{report.risks}</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Future Outlook</h2>
        <p className="text-foreground/90 leading-relaxed">{report.outlook}</p>
      </section>
      
      <section className="mb-4 p-6 rounded-lg glass border border-border/50">
        <h2 className="text-xl font-semibold mb-3">Investment Recommendation</h2>
        <p className="text-foreground/90 leading-relaxed">{report.recommendation}</p>
      </section>
      
      <div className="text-xs text-muted-foreground text-center mt-8 pt-4 border-t border-border/50">
        <p>This report was automatically generated using AI and should not be considered as financial advice.</p>
        <p>Always conduct your own research before making investment decisions.</p>
      </div>
    </div>
  );
};

export default ResearchReport;
