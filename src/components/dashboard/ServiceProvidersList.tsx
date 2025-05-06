
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
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
  
  // Service-specific names and avatar images
  const serviceSpecificData = {
    1: { // Event Planner
      names: [
        "Emma Richardson", "Michael Bennett", "Sophia Roberts", 
        "James Anderson", "Olivia Parker", "Daniel Wilson", 
        "Charlotte Miller", "William Thompson", "Isabella Wright", "Noah Davis"
      ],
      avatars: [
        "https://i.pravatar.cc/150?img=1",
        "https://i.pravatar.cc/150?img=2",
        "https://i.pravatar.cc/150?img=3",
        "https://i.pravatar.cc/150?img=4",
        "https://i.pravatar.cc/150?img=5",
        "https://i.pravatar.cc/150?img=6",
        "https://i.pravatar.cc/150?img=7",
        "https://i.pravatar.cc/150?img=8",
        "https://i.pravatar.cc/150?img=9",
        "https://i.pravatar.cc/150?img=10"
      ]
    },
    2: { // Catering
      names: [
        "Lucas Martinez", "Ava Thompson", "Ethan Rodriguez", 
        "Mia Clark", "Alexander White", "Emily Johnson", 
        "Benjamin Lee", "Abigail Brown", "Samuel Harris", "Elizabeth Taylor"
      ],
      avatars: [
        "https://i.pravatar.cc/150?img=11",
        "https://i.pravatar.cc/150?img=12",
        "https://i.pravatar.cc/150?img=13",
        "https://i.pravatar.cc/150?img=14",
        "https://i.pravatar.cc/150?img=15",
        "https://i.pravatar.cc/150?img=16",
        "https://i.pravatar.cc/150?img=17",
        "https://i.pravatar.cc/150?img=18",
        "https://i.pravatar.cc/150?img=19",
        "https://i.pravatar.cc/150?img=20"
      ]
    },
    3: { // DJ/Music
      names: [
        "DJ Maxwell", "Samantha Beats", "Tyler Rhythm", 
        "Zoe Harmony", "Blake Groove", "Nadia Sound", 
        "Leo Tempo", "Aria Melody", "Damon Bass", "Jada Vibes"
      ],
      avatars: [
        "https://i.pravatar.cc/150?img=21",
        "https://i.pravatar.cc/150?img=22",
        "https://i.pravatar.cc/150?img=23",
        "https://i.pravatar.cc/150?img=24",
        "https://i.pravatar.cc/150?img=25",
        "https://i.pravatar.cc/150?img=26",
        "https://i.pravatar.cc/150?img=27",
        "https://i.pravatar.cc/150?img=28",
        "https://i.pravatar.cc/150?img=29",
        "https://i.pravatar.cc/150?img=30"
      ]
    },
    4: { // Cake Artist
      names: [
        "Penelope Sugar", "Gabriel Frost", "Lily Bakes", 
        "Mason Sweet", "Chloe Confection", "Owen Pastry", 
        "Hazel Delight", "Felix Dessert", "Victoria Cake", "Julian Fondant"
      ],
      avatars: [
        "https://i.pravatar.cc/150?img=31",
        "https://i.pravatar.cc/150?img=32",
        "https://i.pravatar.cc/150?img=33",
        "https://i.pravatar.cc/150?img=34",
        "https://i.pravatar.cc/150?img=35",
        "https://i.pravatar.cc/150?img=36",
        "https://i.pravatar.cc/150?img=37",
        "https://i.pravatar.cc/150?img=38",
        "https://i.pravatar.cc/150?img=39",
        "https://i.pravatar.cc/150?img=40"
      ]
    },
    5: { // Kids Entertainer
      names: [
        "Charlie Fun", "Ruby Sparkle", "Max Adventure", 
        "Rosie Giggles", "Parker Magic", "Luna Bubbles", 
        "Finn Balloon", "Sadie Rainbow", "Oscar Tricks", "Daisy Wonder"
      ],
      avatars: [
        "https://i.pravatar.cc/150?img=41",
        "https://i.pravatar.cc/150?img=42",
        "https://i.pravatar.cc/150?img=43",
        "https://i.pravatar.cc/150?img=44",
        "https://i.pravatar.cc/150?img=45",
        "https://i.pravatar.cc/150?img=46",
        "https://i.pravatar.cc/150?img=47",
        "https://i.pravatar.cc/150?img=48",
        "https://i.pravatar.cc/150?img=49",
        "https://i.pravatar.cc/150?img=50"
      ]
    }
  };
  
  // Get the appropriate names and avatars for this service
  const { names, avatars } = serviceSpecificData[serviceId as keyof typeof serviceSpecificData] || 
    serviceSpecificData[1]; // Default to event planner if service not found
  
  // Generate random reviews with unique reviewer names
  const generateReviews = () => {
    // Unique reviewer names that don't overlap with service provider names
    const reviewerNames = [
      "Jordan Smith", "Riley Adams", "Drew Johnson", "Casey Williams", 
      "Taylor Brown", "Quinn Thomas", "Alex Rivera", "Morgan Lewis",
      "Avery Moore", "Cameron Turner", "Jamie Garcia", "Dakota White"
    ];
    
    const reviewCount = Math.floor(Math.random() * 20) + 10;
    return Array(5).fill(0).map((_, i) => ({
      id: i + 1,
      author: reviewerNames[Math.floor(Math.random() * reviewerNames.length)],
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

  // Project images based on service type
  const getProjectImages = () => {
    switch(serviceId) {
      case 1: // Event Planner
        return [
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&h=300&fit=crop"
        ];
      case 2: // Catering
        return [
          "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=400&h=300&fit=crop"
        ];
      case 3: // DJ/Music
        return [
          "https://images.unsplash.com/photo-1571266028243-60c713e47418?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=400&h=300&fit=crop"
        ];
      case 4: // Cake Artist
        return [
          "https://images.unsplash.com/photo-1546379859-7cd361954644?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=400&h=300&fit=crop"
        ];
      case 5: // Kids Entertainer
        return [
          "https://images.unsplash.com/photo-1597413545419-4013431dbfec?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1642456074321-699978ea3919?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop"
        ];
      default:
        return [
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=400&h=300&fit=crop"
        ];
    }
  };

  // Get project images for current service type
  const projectImages = getProjectImages();

  // Generate service-specific title name
  const getTitleAndDescription = (index: number) => {
    const titles = {
      1: [
        "Birthday Extravaganza", 
        "Wedding Ceremony", 
        "Corporate Event"
      ],
      2: [
        "Gourmet Buffet", 
        "Cocktail Reception", 
        "Family Gathering"
      ],
      3: [
        "Dance Party Mix", 
        "Wedding Reception", 
        "Corporate Function"
      ],
      4: [
        "Birthday Spectacular", 
        "Wedding Elegance", 
        "Themed Celebration"
      ],
      5: [
        "Magic Show Party", 
        "Balloon Animals Fun", 
        "Face Painting Festival"
      ]
    };

    const descriptions = {
      1: `Experienced ${serviceType} specializing in creating memorable experiences for special occasions and celebrations of all sizes.`,
      2: `Professional ${serviceType} offering delicious menu options customized to your tastes and dietary needs.`,
      3: `Talented ${serviceType} with an extensive music library to keep your guests entertained and the dance floor packed.`,
      4: `Creative ${serviceType} who designs beautiful and delicious custom cakes for any special occasion.`,
      5: `Engaging ${serviceType} who specializes in keeping children entertained with fun activities and performances.`
    };

    return {
      serviceTitles: titles[serviceId as keyof typeof titles] || ["Event", "Party", "Celebration"],
      description: descriptions[serviceId as keyof typeof descriptions] || 
        `Professional ${serviceType} with years of experience in the industry.`
    };
  };

  const { serviceTitles, description } = getTitleAndDescription(serviceId);

  // Generate service provider data with unique names and avatars
  return Array(10).fill(0).map((_, i) => ({
    id: i + 1,
    name: names[i],
    price: getPrice(),
    image: avatars[i],
    rating: (4 + Math.random()).toFixed(1),
    experience: Math.floor(Math.random() * 15) + 2,
    description: description,
    reviews: generateReviews(),
    projects: [
      { id: 1, title: serviceTitles[0], date: "15/04/2023", image: projectImages[0] },
      { id: 2, title: serviceTitles[1], date: "27/07/2023", image: projectImages[1] },
      { id: 3, title: serviceTitles[2], date: "10/12/2023", image: projectImages[2] }
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
