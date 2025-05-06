
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Zap, Star, MessageSquare, Bot, Calendar, Check, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Hero: React.FC = () => {
  const [goal, setGoal] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goal.trim()) {
      navigate("/dashboard", { state: { goal } });
    }
  };
  
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 animated-gradient"></div>
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      {/* Animated circles */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto text-center relative z-10 px-4">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space text-foreground">
            Enter your end goal —<br /> 
            <span className="gradient-text">we'll handle the rest </span> 
            <span className="text-4xl">🍻</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let Migo's AI assistant break down your goals into actionable services, 
            connecting you with the best local providers.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12 relative">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 group">
                <Input
                  placeholder="What do you need done?"
                  className="h-14 text-base pl-12 pr-4 bg-white shadow-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                />
                <Bot className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                Ask Migo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            <div className="absolute -bottom-6 left-0 right-0 text-center">
              <span className="text-xs text-muted-foreground">Powered by advanced AI</span>
            </div>
          </form>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <div className={`glass-card rounded-xl p-6 transition-all duration-1000 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-lg hover:border-primary/20 transition-all duration-300`}>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 font-space text-gray-800">Describe your need</h3>
              <p className="text-sm text-muted-foreground">
                Tell us what you're trying to accomplish in plain language.
              </p>
            </div>
            
            <div className={`glass-card rounded-xl p-6 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-lg hover:border-primary/20 transition-all duration-300`}>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 font-space text-gray-800">Our AI agent breaks it down</h3>
              <p className="text-sm text-muted-foreground">
                Amigo analyzes your goal and identifies all required services.
              </p>
            </div>
            
            <div className={`glass-card rounded-xl p-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-lg hover:border-primary/20 transition-all duration-300`}>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 font-space text-gray-800">You see matching services</h3>
              <p className="text-sm text-muted-foreground">
                Browse and book vetted local service providers instantly.
              </p>
            </div>
          </div>
          
          {/* Dashboard Preview Cards Section */}
          <div className={`max-w-6xl mx-auto mb-16 transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="font-semibold mb-8 text-2xl font-space gradient-text inline-block">See how our dashboard works</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              {/* Featured Dashboard Preview Card */}
              <Card className="w-full md:w-2/3 bg-white shadow-lg overflow-hidden border-0">
                <CardContent className="p-0 relative">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6">
                    <h4 className="font-medium text-lg mb-3">Available Service Providers</h4>
                    <p className="text-sm text-muted-foreground mb-4">Find and book the perfect match for your needs</p>
                    
                    <div className="space-y-4">
                      {/* Service Provider 1 */}
                      <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="Sarah Johnson" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h5 className="font-medium">Sarah Johnson</h5>
                          <p className="text-xs text-muted-foreground">Interior Designer • 4.9 ⭐</p>
                        </div>
                        <Button size="sm" variant="outline" className="flex gap-2 items-center">
                          <Calendar className="h-4 w-4" />
                          <span>Book</span>
                        </Button>
                      </div>
                      
                      {/* Service Provider 2 */}
                      <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                        <Avatar className="h-12 w-12 border-2 border-accent/20">
                          <AvatarImage src="https://i.pravatar.cc/150?img=68" alt="Marcus Chen" />
                          <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h5 className="font-medium">Marcus Chen</h5>
                          <p className="text-xs text-muted-foreground">Plumbing Expert • 4.8 ⭐</p>
                        </div>
                        <Button size="sm" variant="outline" className="flex gap-2 items-center">
                          <Calendar className="h-4 w-4" />
                          <span>Book</span>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <div className="flex -space-x-2">
                        <Avatar className="border-2 border-white h-8 w-8">
                          <AvatarImage src="https://i.pravatar.cc/150?img=36" />
                          <AvatarFallback>U1</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-2 border-white h-8 w-8">
                          <AvatarImage src="https://i.pravatar.cc/150?img=17" />
                          <AvatarFallback>U2</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-2 border-white h-8 w-8">
                          <AvatarImage src="https://i.pravatar.cc/150?img=23" />
                          <AvatarFallback>U3</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Sidebar Cards */}
              <div className="w-full md:w-1/3 grid grid-cols-1 gap-4">
                {/* User Reviews Card */}
                <Card className="bg-white shadow-md border-0 overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="https://i.pravatar.cc/150?img=45" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h5 className="text-sm font-medium">John D.</h5>
                        <p className="text-xs text-muted-foreground mb-2">Home Renovation</p>
                        <div className="flex items-center text-amber-400 mb-2">
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                        </div>
                        <p className="text-xs">
                          "Found amazing contractors for my kitchen remodel within minutes!"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Service Features Card */}
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 shadow-md border-0">
                  <CardContent className="p-4">
                    <h5 className="text-sm font-medium mb-3">Popular Service Features</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-xs">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Instant booking confirmation</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Verified service providers</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs">
                        <Check className="h-4 w-4 text-primary" />
                        <span>AI-powered service matching</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Seamless payment processing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Service Provider Highlights */}
                <Card className="bg-white shadow-md border-0">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <User className="h-5 w-5 text-primary" />
                      <h5 className="text-sm font-medium">Top Rated Providers</h5>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Avatar className="h-10 w-10 border-2 border-primary/20">
                        <AvatarImage src="https://i.pravatar.cc/150?img=51" />
                        <AvatarFallback>P1</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-10 w-10 border-2 border-primary/20">
                        <AvatarImage src="https://i.pravatar.cc/150?img=52" />
                        <AvatarFallback>P2</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-10 w-10 border-2 border-primary/20">
                        <AvatarImage src="https://i.pravatar.cc/150?img=53" />
                        <AvatarFallback>P3</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-10 w-10 border-2 border-primary/20">
                        <AvatarImage src="https://i.pravatar.cc/150?img=54" />
                        <AvatarFallback>P4</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-10 w-10 border-2 border-primary/20">
                        <AvatarImage src="https://i.pravatar.cc/150?img=55" />
                        <AvatarFallback>P5</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className={`glass-card rounded-xl p-8 shadow-md max-w-4xl mx-auto transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="font-semibold mb-6 text-xl font-space gradient-text inline-block">See how it works</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="glass-card bg-white/90 rounded-lg p-6 md:w-1/2">
                <p className="font-medium text-sm mb-2 text-muted-foreground">You tell Migo:</p>
                <p className="text-lg font-semibold gradient-text">"I need to host a 50th birthday party"</p>
              </div>
              <ArrowRight className="hidden md:block h-6 w-6 text-primary animate-pulse-light" />
              <div className="glass-card bg-white/90 rounded-lg p-6 md:w-1/2">
                <p className="font-medium text-sm mb-2 text-muted-foreground">Migo finds:</p>
                <ul className="text-sm text-left grid grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center"><Zap className="h-4 w-4 mr-2 text-accent" />Caterers</li>
                  <li className="flex items-center"><Zap className="h-4 w-4 mr-2 text-accent" />Decorators</li>
                  <li className="flex items-center"><Zap className="h-4 w-4 mr-2 text-accent" />Event Space</li>
                  <li className="flex items-center"><Zap className="h-4 w-4 mr-2 text-accent" />Photographers</li>
                  <li className="flex items-center"><Zap className="h-4 w-4 mr-2 text-accent" />Cake Bakers</li>
                  <li className="flex items-center"><Zap className="h-4 w-4 mr-2 text-accent" />DJs & Music</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
