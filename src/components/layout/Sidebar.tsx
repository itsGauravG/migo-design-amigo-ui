
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Calendar, 
  MessageSquare, 
  User, 
  Settings, 
  HelpCircle, 
  Gift,
  CreditCard,
  Bot,
  ShoppingCart
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  badge?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  href, 
  active = false,
  badge
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300",
        active 
          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
          : "hover:bg-primary/10 text-muted-foreground hover:text-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
      {badge !== undefined && badge > 0 && (
        <span className="ml-auto bg-primary text-primary-foreground text-xs font-medium rounded-full px-2 py-0.5">
          {badge}
        </span>
      )}
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // For demo purposes, we'll show 3 items in the cart
  const cartItemCount = 3;
  
  return (
    <aside className="w-64 border-r border-white/10 h-screen sticky top-0 hidden md:block backdrop-blur-sm bg-background/50">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2 mb-10">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center animate-pulse-light">
            <Bot className="text-white h-6 w-6" />
          </div>
          <span className="text-xl font-bold font-space gradient-text">Migo</span>
        </Link>
        
        <nav className="space-y-1">
          <SidebarItem 
            icon={<Home className="h-5 w-5" />} 
            label="Home" 
            href="/" 
            active={pathname === "/"}
          />
          <SidebarItem 
            icon={<Calendar className="h-5 w-5" />} 
            label="My Bookings" 
            href="/bookings" 
            active={pathname === "/bookings"}
          />
          <SidebarItem 
            icon={<MessageSquare className="h-5 w-5" />} 
            label="Ask Migo" 
            href="/dashboard" 
            active={pathname === "/dashboard"}
          />
          <SidebarItem 
            icon={<ShoppingCart className="h-5 w-5" />} 
            label="Cart" 
            href="/cart" 
            active={pathname === "/cart"}
            badge={cartItemCount}
          />
          <SidebarItem 
            icon={<Gift className="h-5 w-5" />} 
            label="Migo+" 
            href="/subscription" 
            active={pathname === "/subscription"}
          />
          <SidebarItem 
            icon={<CreditCard className="h-5 w-5" />} 
            label="Referrals" 
            href="/referrals" 
            active={pathname === "/referrals"}
          />
        </nav>
        
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="space-y-1">
            <SidebarItem 
              icon={<User className="h-5 w-5" />} 
              label="Account" 
              href="/account" 
              active={pathname === "/account"}
            />
            <SidebarItem 
              icon={<HelpCircle className="h-5 w-5" />} 
              label="Help" 
              href="/help" 
              active={pathname === "/help"}
            />
            <SidebarItem 
              icon={<Settings className="h-5 w-5" />} 
              label="Settings" 
              href="/settings" 
              active={pathname === "/settings"}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
