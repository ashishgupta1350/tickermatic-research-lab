
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-6 glass fixed top-0 z-10 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="text-primary">Ticker</span>
          <span>matic</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Markets
          </Link>
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Portfolios
          </Link>
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Research
          </Link>
        </div>
        
        <div className="relative h-9 flex items-center">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input 
            type="text"
            placeholder="Search ticker..."
            className="h-full pl-10 pr-4 rounded-full text-sm bg-secondary/50 border border-border/50 focus:outline-none focus:ring-1 focus:ring-primary/30 w-[180px] transition-all duration-300 focus:w-[220px]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
