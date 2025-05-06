
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Calendar, 
  MessageCircle, 
  User, 
  Settings, 
  HelpCircle, 
  Gift,
  CreditCard
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  href, 
  active = false 
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        active 
          ? "bg-primary text-primary-foreground"
          : "hover:bg-muted text-muted-foreground hover:text-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
    <aside className="w-64 border-r border-border h-screen sticky top-0 hidden md:block">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-xl font-bold">Migo</span>
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
            icon={<MessageCircle className="h-5 w-5" />} 
            label="Ask Migo" 
            href="/dashboard" 
            active={pathname === "/dashboard"}
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
