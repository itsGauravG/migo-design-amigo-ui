
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Zap, Star, MessageSquare, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-25"></div>
      
      {/* Animated circles */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto text-center relative z-10 px-4">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space">
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
                  className="h-14 text-base pl-12 pr-4 bg-background/60 backdrop-blur-sm border-white/10 shadow-lg transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-primary/20"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                />
                <Bot className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
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
            <div className={`glass-card rounded-xl p-6 transition-all duration-1000 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300`}>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 font-space">Describe your need</h3>
              <p className="text-sm text-muted-foreground">
                Tell us what you're trying to accomplish in plain language.
              </p>
            </div>
            
            <div className={`glass-card rounded-xl p-6 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300`}>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 font-space">Our AI agent breaks it down</h3>
              <p className="text-sm text-muted-foreground">
                Amigo analyzes your goal and identifies all required services.
              </p>
            </div>
            
            <div className={`glass-card rounded-xl p-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300`}>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 font-space">You see matching services</h3>
              <p className="text-sm text-muted-foreground">
                Browse and book vetted local service providers instantly.
              </p>
            </div>
          </div>
          
          <div className={`glass-card rounded-xl p-8 border border-white/10 shadow-lg max-w-4xl mx-auto transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="font-semibold mb-6 text-xl font-space gradient-text inline-block">See how it works</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="glass-card rounded-lg p-6 md:w-1/2">
                <p className="font-medium text-sm mb-2 text-muted-foreground">You tell Migo:</p>
                <p className="text-lg font-semibold gradient-text">"I need to host a 50th birthday party"</p>
              </div>
              <ArrowRight className="hidden md:block h-6 w-6 text-primary animate-pulse-light" />
              <div className="glass-card rounded-lg p-6 md:w-1/2">
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
