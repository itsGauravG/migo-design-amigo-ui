
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, UploadIcon, Send } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import ServiceCard from "./ServiceCard";
import ServiceProvidersList from "./ServiceProvidersList";
import { toast } from "@/components/ui/use-toast";

interface AiRequestSectionProps {
  initialGoal?: string;
}

// Services data for birthday party scenario
const birthdayPartyServices = [
  {
    id: 1,
    title: "Event Planner / Coordinator",
    price: 120,
    image: "/placeholder.svg",
    rating: 4.8,
    provider: "Professional Event Planning",
    description: "Expert event coordinators who will handle all aspects of your birthday party planning."
  },
  {
    id: 2,
    title: "Catering Services",
    price: 95,
    image: "/placeholder.svg",
    rating: 4.7,
    provider: "Gourmet Celebrations",
    description: "Food and beverages for any party size, including bartender services."
  },
  {
    id: 3,
    title: "DJ / Live Music",
    price: 85,
    image: "/placeholder.svg",
    rating: 4.9,
    provider: "Rhythm Masters",
    description: "Professional DJs and musicians to set the perfect atmosphere for your celebration."
  },
  {
    id: 4,
    title: "Cake Artist",
    price: 65,
    image: "/placeholder.svg",
    rating: 4.6,
    provider: "Sweet Creations",
    description: "Custom cake designs for birthdays and special occasions."
  },
  {
    id: 5,
    title: "Kids Entertainer",
    price: 75,
    image: "/placeholder.svg",
    rating: 4.8,
    provider: "FunTime Entertainment",
    description: "Magicians, clowns, face painters and more to keep kids entertained."
  },
];

const AiRequestSection: React.FC<AiRequestSectionProps> = ({ initialGoal = "" }) => {
  const [goal, setGoal] = useState(initialGoal || "I need to host a birthday party in my backyard");
  const [budget, setBudget] = useState([250]);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState<any[]>([]);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;
    
    // Validate required fields
    if (!date) {
      toast({
        title: "Please select a date",
        description: "We need to know when you're planning your event.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      // Filter services based on budget constraint
      const filteredServices = birthdayPartyServices.filter(service => service.price <= budget[0]);
      
      setServices(filteredServices.length > 0 ? filteredServices : birthdayPartyServices);
      setLoading(false);
      
      toast({
        title: "Great! Here's what we found",
        description: `We've found ${filteredServices.length} services for your birthday party.`,
      });
    }, 1500);
  };

  const handleCardClick = (serviceId: number) => {
    setSelectedServiceId(serviceId === selectedServiceId ? null : serviceId);
  };

  const handleCloseProviders = () => {
    setSelectedServiceId(null);
  };

  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm mb-8">
      <h2 className="text-xl font-semibold mb-6">Ask Migo</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label htmlFor="goal" className="block text-sm font-medium mb-2">
              What do you need?
            </label>
            <Input
              id="goal"
              placeholder="Describe your goal or task..."
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="text-base"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Budget: ${budget[0]} per service
            </label>
            <Slider
              defaultValue={budget}
              min={50}
              max={500}
              step={10}
              onValueChange={setBudget}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Date Needed
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Upload images of your backyard (optional)
            </label>
            <div className="border border-dashed rounded-md p-6 text-center">
              <UploadIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop files, or <span className="text-primary">browse</span>
              </p>
              <p className="text-xs text-muted-foreground">
                JPG, PNG or GIF, up to 5MB
              </p>
            </div>
          </div>
          
          <Button type="submit" className="w-full gap-2" disabled={loading}>
            {loading ? "Finding services..." : "Ask Migo"}
            {!loading && <Send className="h-4 w-4" />}
          </Button>
        </div>
      </form>
      
      {loading && (
        <div className="mt-8 space-y-4">
          <div className="h-4 bg-muted rounded animate-pulse"/>
          <div className="h-4 bg-muted rounded w-3/4 animate-pulse"/>
          <div className="h-4 bg-muted rounded w-1/2 animate-pulse"/>
        </div>
      )}
      
      {services.length > 0 && !selectedServiceId && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Recommended Services for Your Birthday Party</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={() => handleCardClick(service.id)}
              />
            ))}
          </div>
        </div>
      )}
      
      {selectedServiceId !== null && (
        <ServiceProvidersList 
          serviceId={selectedServiceId} 
          onClose={handleCloseProviders}
          serviceName={services.find(s => s.id === selectedServiceId)?.title || ""}
        />
      )}
    </div>
  );
};

export default AiRequestSection;
