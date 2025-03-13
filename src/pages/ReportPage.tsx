
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ResearchReport from '@/components/ResearchReport';
import { fetchTickerData } from '@/utils/yahooFinance';
import { generateResearchReport } from '@/utils/openai';
import { toast } from "@/components/ui/use-toast";

const ReportPage = () => {
  const { ticker = '' } = useParams<{ ticker: string }>();
  const [report, setReport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('openai_api_key') || '');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey);
  
  useEffect(() => {
    const generateReport = async () => {
      setIsLoading(true);
      
      try {
        // 1. Fetch stock data from Yahoo Finance
        const stockData = await fetchTickerData(ticker);
        
        if (!stockData) {
          toast({
            title: "Error",
            description: `Could not find data for ticker: ${ticker}`,
            variant: "destructive"
          });
          setIsLoading(false);
          return;
        }
        
        // 2. Generate research report using OpenAI (or mock data)
        const researchReport = await generateResearchReport(stockData, apiKey);
        setReport(researchReport);
      } catch (error) {
        console.error("Error generating report:", error);
        toast({
          title: "Error",
          description: "Failed to generate research report. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    if (ticker && (apiKey || !showApiKeyInput)) {
      generateReport();
    }
  }, [ticker, apiKey, showApiKeyInput]);
  
  const handleSaveApiKey = () => {
    if (apiKey) {
      localStorage.setItem('openai_api_key', apiKey);
      setShowApiKeyInput(false);
      toast({
        title: "Success",
        description: "API key saved successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-primary hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </Link>
        
        {showApiKeyInput ? (
          <div className="animate-fade-in p-6 rounded-lg glass border border-border/50 mb-8">
            <h2 className="text-xl font-semibold mb-3">Enter OpenAI API Key</h2>
            <p className="text-foreground/90 mb-4">
              To generate research reports, please enter your OpenAI API key. 
              This will be stored locally in your browser.
            </p>
            <div className="flex flex-col space-y-4">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="p-2 border border-border rounded-md bg-background"
              />
              <button
                onClick={handleSaveApiKey}
                className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
              >
                Save API Key
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6">Research Report</h1>
            <div className="p-8 rounded-lg glass border border-border/50">
              <ResearchReport report={report} isLoading={isLoading} />
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ReportPage;
