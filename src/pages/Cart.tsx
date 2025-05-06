
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Trash2, Calendar } from "lucide-react";

const Cart: React.FC = () => {
  // Mock cart data for the demo
  const cartItems = [
    {
      id: 1,
      service: "Event Planner",
      provider: "Jessica Williams",
      price: 120,
      hours: 4,
      image: "https://i.pravatar.cc/150?img=32"
    },
    {
      id: 2,
      service: "Catering",
      provider: "Michael Johnson",
      price: 95,
      hours: 5,
      image: "https://i.pravatar.cc/150?img=68"
    },
    {
      id: 3,
      service: "DJ/Music",
      provider: "Sarah Davis",
      price: 85,
      hours: 3,
      image: "https://i.pravatar.cc/150?img=36"
    }
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.hours), 0);
  };

  return (
    <Layout showSidebar>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Your Cart</h1>
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border">
                        <AvatarImage src={item.image} />
                        <AvatarFallback>{item.provider.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.service}</h3>
                        <p className="text-sm text-muted-foreground">{item.provider}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${item.price * item.hours}</p>
                        <p className="text-sm text-muted-foreground">${item.price} × {item.hours} hrs</p>
                      </div>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>$25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${Math.round(calculateTotal() * 0.08)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${calculateTotal() + 25 + Math.round(calculateTotal() * 0.08)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-2">
                  <Button className="w-full">Proceed to Checkout</Button>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Scheduled for May 15, 2025</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </>
        ) : (
          <Card className="p-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
              <h2 className="text-xl font-medium">Your cart is empty</h2>
              <p className="text-muted-foreground">Add services to your cart to get started.</p>
              <Button asChild>
                <a href="/dashboard">Browse Services</a>
              </Button>
            </div>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
