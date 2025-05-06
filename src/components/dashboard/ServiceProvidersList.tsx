
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { calendar, party, user, music } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Service provider data generators
const generateProviders = (serviceId: number) => {
  const categories = {
    1: "Event Planner",
    2: "Catering",
    3: "DJ/Music",
    4: "Cake Artist",
    5: "Kids Entertainer"
  };
  
  const serviceType = categories[serviceId as keyof typeof categories] || "Service";
  const names = [
    "Jessica Williams", "Michael Johnson", "Sarah Davis", 
    "David Smith", "Emma Garcia", "James Wilson", 
    "Olivia Martinez", "William Anderson", "Sophia Thomas", "Daniel Taylor"
  ];
  
  // Generate random reviews
  const generateReviews = () => {
    const reviewCount = Math.floor(Math.random() * 30) + 10;
    return Array(5).fill(0).map((_, i) => ({
      id: i + 1,
      author: names[Math.floor(Math.random() * names.length)],
      rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
      comment: [
        "Absolutely amazing service! Highly recommend!",
        "Very professional and attentive to our needs.",
        "Great value for the quality provided.",
        "Exceeded our expectations in every way!",
        "Would definitely book again for our next event."
      ][Math.floor(Math.random() * 5)],
      date: `${Math.floor(Math.random() * 28) + 1}/${Math.floor(Math.random() * 12) + 1}/2023`
    }));
  };
  
  // Generate price based on service type
  const getPrice = () => {
    const basePrices = {
      1: 120, // Event Planner
      2: 95,  // Catering
      3: 85,  // DJ/Music
      4: 65,  // Cake Artist
      5: 75   // Kids Entertainer
    };
    
    const basePrice = basePrices[serviceId as keyof typeof basePrices] || 80;
    return basePrice + Math.floor(Math.random() * 40) - 20; // +/- 20 from base price
  };

  // Generate service provider data
  return Array(10).fill(0).map((_, i) => ({
    id: i + 1,
    name: names[i],
    price: getPrice(),
    image: `/placeholder.svg`,
    rating: (4 + Math.random()).toFixed(1),
    experience: Math.floor(Math.random() * 15) + 2,
    description: `Experienced ${serviceType} with a passion for creating memorable experiences. Specializing in birthday parties and celebrations of all sizes.`,
    reviews: generateReviews(),
    projects: [
      { id: 1, title: "Birthday Party", date: "15/04/2023", image: "/placeholder.svg" },
      { id: 2, title: "Garden Celebration", date: "27/07/2023", image: "/placeholder.svg" },
      { id: 3, title: "Family Gathering", date: "10/12/2023", image: "/placeholder.svg" }
    ]
  }));
};

interface ServiceProvidersListProps {
  serviceId: number;
  serviceName: string;
  onClose: () => void;
}

const ServiceProvidersList: React.FC<ServiceProvidersListProps> = ({ 
  serviceId, 
  serviceName,
  onClose 
}) => {
  const [providers] = useState(() => generateProviders(serviceId));
  const [selectedProvider, setSelectedProvider] = useState<any | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookNow = (provider: any) => {
    setSelectedProvider(provider);
    setIsDialogOpen(true);
  };

  const confirmBooking = () => {
    toast({
      title: "Service added to cart!",
      description: `You've added ${selectedProvider.name} for ${serviceName} to your cart.`,
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium">
          Service Providers for {serviceName}
        </h3>
        <Button variant="ghost" onClick={onClose}>
          Back to Services
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {providers.map((provider) => (
          <Card key={provider.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-primary">
                  <AvatarImage src={provider.image} alt={provider.name} />
                  <AvatarFallback>{provider.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{provider.name}</CardTitle>
                  <div className="flex items-center mt-1">
                    <div className="flex mr-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(Number(provider.rating))
                              ? 'text-yellow-400'
                              : i < Number(provider.rating)
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
                    <span className="text-sm font-medium">{provider.rating}</span>
                    <Badge variant="secondary" className="ml-2">${provider.price}/hr</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{provider.description}</p>
              
              <Tabs defaultValue="about">
                <TabsList className="mb-2">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="text-sm">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableHead className="w-32">Experience</TableHead>
                        <TableCell>{provider.experience} years</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Price</TableHead>
                        <TableCell>${provider.price} per hour</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Rating</TableHead>
                        <TableCell>{provider.rating} (Based on {provider.reviews.length} reviews)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                
                <TabsContent value="reviews" className="max-h-40 overflow-y-auto">
                  {provider.reviews.slice(0, 3).map((review: any) => (
                    <div key={review.id} className="mb-3 pb-3 border-b last:border-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{review.author}</p>
                        <div className="flex">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{review.comment}</p>
                      <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="projects" className="grid grid-cols-3 gap-2">
                  {provider.projects.map((project: any) => (
                    <div key={project.id} className="aspect-square bg-muted rounded overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      <div className="p-1 text-xs bg-black/50 text-white absolute bottom-0 w-full truncate">
                        {project.title}
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleBookNow(provider)} className="w-full">Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {selectedProvider && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Booking</DialogTitle>
              <DialogDescription>
                You are about to book {selectedProvider.name} as your {serviceName} provider.
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex items-center gap-3 mb-4">
              <Avatar>
                <AvatarImage src={selectedProvider.image} />
                <AvatarFallback>{selectedProvider.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">{selectedProvider.name}</h4>
                <p className="text-sm text-muted-foreground">${selectedProvider.price}/hr</p>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button onClick={confirmBooking}>Add to Cart</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ServiceProvidersList;
