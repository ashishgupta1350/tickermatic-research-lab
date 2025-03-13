
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
  buttonText = "Get Started"
}) => {
  return (
    <div className={`relative p-6 rounded-lg glass border transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] ${
      isPopular ? 'border-primary/50 bg-primary/5' : 'border-border/50'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
          Popular
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-muted-foreground ml-1">/month</span>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className={`mt-0.5 ${feature.included ? 'text-primary' : 'text-muted-foreground'}`}>
              <Check className="w-4 h-4" />
            </div>
            <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={isPopular ? "default" : "outline"} 
        className="w-full"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
