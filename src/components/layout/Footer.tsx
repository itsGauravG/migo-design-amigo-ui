
import React from "react";
import { Link } from "react-router-dom";
import { Bot, Github, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/10 backdrop-blur-sm bg-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center">
                <Bot className="text-white h-6 w-6" />
              </div>
              <span className="text-xl font-bold font-space gradient-text">Migo</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Migo connects you with local workers while creating real job opportunities in your community.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-6 font-space text-primary">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/cleaning" className="text-muted-foreground hover:text-primary transition-colors">House Cleaning</Link></li>
              <li><Link to="/services/plumbing" className="text-muted-foreground hover:text-primary transition-colors">Plumbing</Link></li>
              <li><Link to="/services/moving" className="text-muted-foreground hover:text-primary transition-colors">Moving Services</Link></li>
              <li><Link to="/services/events" className="text-muted-foreground hover:text-primary transition-colors">Event Planning</Link></li>
              <li><Link to="/services/tech" className="text-muted-foreground hover:text-primary transition-colors">Tech Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-6 font-space text-primary">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/partners" className="text-muted-foreground hover:text-primary transition-colors">Partners</Link></li>
              <li><Link to="/press" className="text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-6 font-space text-primary">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/policy/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/policy/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/policy/refund" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Migo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
