
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Mission: React.FC = () => {
  return (
    <section className="bg-accent py-16">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
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
              <Button asChild>
                <Link to="/about">Learn More</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/become-provider">Become a Provider</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-bold text-lg mb-4">Migo Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">12k+</div>
                <p className="text-sm text-muted-foreground">Local providers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Customer satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$22M+</div>
                <p className="text-sm text-muted-foreground">Income for providers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">250k+</div>
                <p className="text-sm text-muted-foreground">Tasks completed</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-accent rounded-lg">
              <p className="text-sm text-center">
                <span className="font-semibold">Satisfaction Guarantee:</span> We stand behind the quality of our service providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
