
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

interface AiRequestSectionProps {
  initialGoal?: string;
}

const AiRequestSection: React.FC<AiRequestSectionProps> = ({ initialGoal = "" }) => {
  const [goal, setGoal] = useState(initialGoal);
  const [budget, setBudget] = useState([100]);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;
    
    setLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      setServices([
        {
          id: 1,
          title: "Professional House Cleaning",
          price: 85,
          image: "/placeholder.svg",
          rating: 4.8,
          provider: "CleanHome Services",
        },
        {
          id: 2,
          title: "Furniture Assembly",
          price: 60,
          image: "/placeholder.svg",
          rating: 4.6,
          provider: "QuickBuild Pros",
        },
        {
          id: 3,
          title: "TV Mounting Service",
          price: 75,
          image: "/placeholder.svg",
          rating: 4.9,
          provider: "TechMount Experts",
        },
      ]);
      
      setLoading(false);
    }, 1500);
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
              Budget: ${budget[0]}
            </label>
            <Slider
              defaultValue={budget}
              min={20}
              max={500}
              step={5}
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
              Upload images (optional)
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
            {loading ? "Finding solutions..." : "Ask Migo"}
            {!loading && <Send className="h-4 w-4" />}
          </Button>
        </div>
      </form>
      
      {loading && (
        <div className="mt-8 space-y-4">
          <div className="h-4 bg-muted rounded animate-pulse-light"/>
          <div className="h-4 bg-muted rounded w-3/4 animate-pulse-light"/>
          <div className="h-4 bg-muted rounded w-1/2 animate-pulse-light"/>
        </div>
      )}
      
      {services.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Recommended Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AiRequestSection;
