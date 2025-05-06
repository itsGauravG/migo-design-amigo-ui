
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

interface Service {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
  provider: string;
  description?: string;
}

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

// Service category images with high-quality Unsplash images
const categoryImages = {
  "Event Planner": "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=500&h=300&fit=crop",
  "Catering": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&h=300&fit=crop",
  "DJ/Music": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=300&fit=crop",
  "Cake Artist": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500&h=300&fit=crop",
  "Kids Entertainer": "https://images.unsplash.com/photo-1541727261595-94c9ef699058?w=500&h=300&fit=crop"
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  // Use category image if available, otherwise use the service's image
  const imageUrl = categoryImages[service.title as keyof typeof categoryImages] || service.image;

  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-40 bg-muted">
        <img 
          src={imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-medium">{service.title}</h4>
          <span className="text-lg font-bold">${service.price}/hr</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span className="flex items-center">
            <BadgeCheck className="h-4 w-4 mr-1 text-primary" />
            {service.provider}
          </span>
        </div>

        {service.description && (
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {service.description}
          </p>
        )}
        
        <div className="flex items-center gap-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(service.rating) 
                    ? 'text-yellow-400' 
                    : i < service.rating 
                    ? 'text-yellow-400' 
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{service.rating}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={onClick}>View Providers</Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
