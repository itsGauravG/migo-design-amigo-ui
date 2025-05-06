
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goal.trim()) {
      navigate("/dashboard", { state: { goal } });
    }
  };
  
  return (
    <section className="hero-gradient px-4 py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Enter your end goal — we'll handle the rest 🍻
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let Migo's AI assistant break down your goals into actionable services, connecting you with the best local providers.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="What do you need done?"
              className="h-12 text-base flex-1"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
            <Button type="submit" size="lg" className="gap-2">
              Ask Migo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </form>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary font-bold text-lg">1</span>
            </div>
            <h3 className="font-semibold mb-2">Describe your need</h3>
            <p className="text-sm text-muted-foreground">
              Tell us what you're trying to accomplish in plain language.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary font-bold text-lg">2</span>
            </div>
            <h3 className="font-semibold mb-2">Our AI agent breaks it down</h3>
            <p className="text-sm text-muted-foreground">
              Amigo analyzes your goal and identifies all required services.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary font-bold text-lg">3</span>
            </div>
            <h3 className="font-semibold mb-2">You see matching services</h3>
            <p className="text-sm text-muted-foreground">
              Browse and book vetted local service providers instantly.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border shadow-sm max-w-4xl mx-auto">
          <h3 className="font-semibold mb-4 text-lg">Example</h3>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="bg-muted rounded-lg p-4 md:w-1/2">
              <p className="font-medium text-sm">You tell Migo:</p>
              <p className="text-primary font-semibold">"I need to host a 50th birthday party"</p>
            </div>
            <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground" />
            <div className="bg-accent rounded-lg p-4 md:w-1/2">
              <p className="font-medium text-sm">Migo finds:</p>
              <ul className="text-sm text-left list-disc pl-5 mt-2 grid grid-cols-2 gap-x-4">
                <li>Caterers</li>
                <li>Decorators</li>
                <li>Event Space</li>
                <li>Photographers</li>
                <li>Cake Bakers</li>
                <li>DJs & Music</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
