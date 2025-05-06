
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className={cn("w-full border-b border-border sticky top-0 z-50 bg-white", className)}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold hidden sm:inline-block">Migo</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-primary">Home</Link>
          <Link to="/services" className="transition-colors hover:text-primary">Services</Link>
          <Link to="/about" className="transition-colors hover:text-primary">About</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border p-4 space-y-3 bg-white absolute w-full">
          <Link to="/" className="block py-2 px-3 hover:bg-muted rounded-md">Home</Link>
          <Link to="/services" className="block py-2 px-3 hover:bg-muted rounded-md">Services</Link>
          <Link to="/about" className="block py-2 px-3 hover:bg-muted rounded-md">About</Link>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link to="/login">Login</Link>
            </Button>
            <Button size="sm" asChild className="flex-1">
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
