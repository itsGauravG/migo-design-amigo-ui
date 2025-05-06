
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, avatarUrl, rating }) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-muted-foreground mb-6">{quote}</p>
        
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            {avatarUrl ? <AvatarImage src={avatarUrl} alt={name} /> : null}
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Migo is helping thousands of people get things done while creating opportunities for skilled providers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial 
            quote="Migo completely changed how I plan events. For my son's graduation party, I just described what I wanted, and their AI suggested everything I needed. Saved me hours of research!"
            name="Sarah Johnson"
            role="Homeowner"
            rating={5}
          />
          
          <Testimonial 
            quote="As a handyman, Migo has helped me find consistent work in my area. The platform is easy to use, and I love that customers come to me with clear expectations."
            name="Michael Rodriguez"
            role="Service Provider"
            rating={4}
          />
          
          <Testimonial 
            quote="The AI assistant is surprisingly accurate! I needed help setting up my home office, and Migo suggested services I hadn't even thought of. Everything was completed in one day."
            name="Emily Chen"
            role="Remote Worker"
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
