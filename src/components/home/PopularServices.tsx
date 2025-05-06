
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Wrench, Box, Flower2, Computer, 
  Hammer, Car, MapPin, Palette, Camera, Music 
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, href, className }) => (
  <Link 
    to={href}
    className={cn(
      "flex flex-col items-center justify-center p-6 glass-card rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group",
      className
    )}
  >
    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <div className="text-primary">{icon}</div>
    </div>
    <h3 className="font-medium text-center text-gray-800 group-hover:text-primary transition-colors">{title}</h3>
  </Link>
);

const PopularServices: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-25"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Popular Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our most requested services or let our AI assistant help you find exactly what you need.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
          <ServiceCard 
            title="Plumbing" 
            href="/services/plumbing"
            icon={<Wrench className="h-6 w-6" />}
          />
          
          <ServiceCard 
            title="House Cleaning" 
            href="/services/cleaning"
            icon={<MapPin className="h-6 w-6" />}
          />
          
          <ServiceCard 
            title="Moving" 
            href="/services/moving"
            icon={<Box className="h-6 w-6" />}
          />
          
          <ServiceCard 
            title="Handyman" 
            href="/services/handyman"
            icon={<Hammer className="h-6 w-6" />}
          />
          
          <ServiceCard 
            title="Lawn Care" 
            href="/services/lawn"
            icon={<Flower2 className="h-6 w-6" />}
          />
          
          <ServiceCard 
            title="Tech Setup" 
            href="/services/tech"
            icon={<Computer className="h-6 w-6" />}
          />
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <Button 
            variant="outline" 
            className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary/50 hover:bg-primary/5"
          >
            <Link to="/services" className="flex items-center gap-2">
              View All Services
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-4 glass-card rounded-lg">
            <div className="text-2xl font-bold text-primary">25+</div>
            <p className="text-sm text-muted-foreground">Service Categories</p>
          </div>
          <div className="text-center p-4 glass-card rounded-lg">
            <div className="text-2xl font-bold text-primary">5,000+</div>
            <p className="text-sm text-muted-foreground">Service Providers</p>
          </div>
          <div className="text-center p-4 glass-card rounded-lg">
            <div className="text-2xl font-bold text-primary">98%</div>
            <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
          </div>
          <div className="text-center p-4 glass-card rounded-lg">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <p className="text-sm text-muted-foreground">AI-Powered Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
