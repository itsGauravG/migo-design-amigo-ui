
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, Calendar, Clock } from "lucide-react";

interface Booking {
  id: string;
  service: string;
  provider: string;
  status: "upcoming" | "completed" | "cancelled";
  date: string;
  time: string;
  location: string;
  price: number;
  image: string;
}

const mockBookings: Booking[] = [
  {
    id: "book-123",
    service: "House Cleaning",
    provider: "CleanHome Services",
    status: "upcoming",
    date: "May 15, 2025",
    time: "10:00 AM",
    location: "123 Home Street",
    price: 85,
    image: "/placeholder.svg"
  },
  {
    id: "book-124",
    service: "Lawn Mowing",
    provider: "Green Gardens",
    status: "upcoming",
    date: "May 20, 2025",
    time: "2:00 PM",
    location: "123 Home Street",
    price: 45,
    image: "/placeholder.svg"
  },
  {
    id: "book-125",
    service: "TV Mounting",
    provider: "Tech Install Pros",
    status: "completed",
    date: "May 1, 2025",
    time: "11:30 AM",
    location: "123 Home Street",
    price: 75,
    image: "/placeholder.svg"
  },
  {
    id: "book-126",
    service: "Plumbing Repair",
    provider: "Fast Plumbers Inc",
    status: "cancelled",
    date: "April 28, 2025",
    time: "9:00 AM",
    location: "123 Home Street",
    price: 120,
    image: "/placeholder.svg"
  }
];

const BookingCard: React.FC<{ booking: Booking }> = ({ booking }) => {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-md bg-muted overflow-hidden flex-shrink-0">
            <img 
              src={booking.image} 
              alt={booking.service} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{booking.service}</h4>
                <p className="text-sm text-muted-foreground">{booking.provider}</p>
              </div>
              <span className="font-semibold">${booking.price}</span>
            </div>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                <span>{booking.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                <span>{booking.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                <span>{booking.location}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div>
                {booking.status === "upcoming" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Upcoming
                  </span>
                )}
                {booking.status === "completed" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                  </span>
                )}
                {booking.status === "cancelled" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Cancelled
                  </span>
                )}
              </div>
              
              {booking.status === "upcoming" && (
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  Chat
                </Button>
              )}
              
              {booking.status === "completed" && (
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  Review
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const BookingsTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  const filteredBookings = mockBookings.filter(booking => booking.status === activeTab);
  
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm">
      <h2 className="text-xl font-semibold mb-6">My Bookings</h2>
      
      <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4">
          {filteredBookings.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No upcoming bookings</p>
          ) : (
            filteredBookings.map(booking => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {filteredBookings.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No completed bookings</p>
          ) : (
            filteredBookings.map(booking => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          )}
        </TabsContent>
        
        <TabsContent value="cancelled" className="space-y-4">
          {filteredBookings.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No cancelled bookings</p>
          ) : (
            filteredBookings.map(booking => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingsTab;
