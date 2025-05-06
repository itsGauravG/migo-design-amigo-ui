
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, Users, Zap, BadgeCheck } from "lucide-react";

const Mission: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full inline-block mb-6">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space text-gray-800">Building AI-powered connections in your community</h2>
            <p className="text-muted-foreground mb-6">
              Migo connects you with local workers while creating real job opportunities in your community. 
              We believe in supporting skilled professionals by providing them with a platform to showcase 
              their talents and earn a fair income.
            </p>
            <p className="text-muted-foreground mb-8">
              For customers, we simplify the process of finding reliable help for any task. Our AI assistant 
              ensures you get exactly the services you need, without the hassle of searching through multiple 
              platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 hover:shadow-lg transition-all">
                <Link to="/about" className="flex items-center">
                  Learn More
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-full bg-white border-gray-200 hover:bg-primary/10 hover:border-primary/50">
                <Link to="/become-provider" className="flex items-center">
                  Become a Provider
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="glass-card rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <Bot className="h-6 w-6 text-primary mr-2" />
                <h3 className="font-bold text-xl font-space gradient-text">Migo Impact</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card bg-white/80 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/10">
                  <div className="text-3xl font-bold gradient-text mb-2">12k+</div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    <p className="text-sm text-muted-foreground">Local providers</p>
                  </div>
                </div>
                <div className="glass-card bg-white/80 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/10">
                  <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-accent" />
                    <p className="text-sm text-muted-foreground">Customer satisfaction</p>
                  </div>
                </div>
                <div className="glass-card bg-white/80 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/10">
                  <div className="text-3xl font-bold gradient-text mb-2">$22M+</div>
                  <div className="flex items-center">
                    <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                    <p className="text-sm text-muted-foreground">Income for providers</p>
                  </div>
                </div>
                <div className="glass-card bg-white/80 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/10">
                  <div className="text-3xl font-bold gradient-text mb-2">250k+</div>
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-accent" />
                    <p className="text-sm text-muted-foreground">Tasks completed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20 flex items-center">
                <BadgeCheck className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Satisfaction Guarantee:</span> We stand behind the quality of our service providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
