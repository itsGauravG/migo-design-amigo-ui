
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Bot, Star, ChevronDown } from "lucide-react";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={cn(
      "w-full sticky top-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent",
      className
    )}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center animate-pulse-light">
              <Bot className="text-white h-6 w-6" />
            </div>
            <span className="text-xl font-bold hidden sm:inline-block font-space gradient-text">Migo</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-1">
          <Link to="/" className="px-4 py-2 rounded-full transition-all hover:bg-primary/10 hover:text-primary text-sm font-medium">Home</Link>
          <Link to="/services" className="px-4 py-2 rounded-full transition-all hover:bg-primary/10 hover:text-primary text-sm font-medium">Services</Link>
          <Link to="/about" className="px-4 py-2 rounded-full transition-all hover:bg-primary/10 hover:text-primary text-sm font-medium">About</Link>
          <div className="group relative px-4 py-2 rounded-full transition-all hover:bg-primary/10 text-sm font-medium cursor-pointer">
            <div className="flex items-center">
              Pricing
              <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <div className="absolute hidden group-hover:block mt-2 p-2 bg-background/90 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 w-48">
              <div className="py-1">
                <Link to="/pricing/basic" className="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg">Basic</Link>
                <Link to="/pricing/premium" className="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg">Premium</Link>
                <Link to="/pricing/business" className="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg">Business</Link>
              </div>
            </div>
          </div>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="sm" asChild className="rounded-full bg-transparent border-white/10 hover:bg-primary/10 hover:border-primary/50">
              <Link to="/login">Login</Link>
            </Button>
            <Button size="sm" asChild className="rounded-full bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all">
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden hover:bg-primary/10 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 glass-card absolute w-full animate-in slide-in-from-top duration-300">
          <div className="p-4 space-y-3">
            <Link to="/" className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-lg">Home</Link>
            <Link to="/services" className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-lg">Services</Link>
            <Link to="/about" className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-lg">About</Link>
            <Link to="/pricing" className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-lg">Pricing</Link>
            <div className="flex gap-2 pt-3">
              <Button variant="outline" size="sm" asChild className="flex-1 rounded-full bg-transparent border-white/10 hover:bg-primary/10">
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm" asChild className="flex-1 rounded-full">
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
