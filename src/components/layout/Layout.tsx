
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showSidebar = false,
  className
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {!showSidebar && <Navbar />}
      
      <div className="flex flex-1">
        {showSidebar && <Sidebar />}
        
        <main className={cn("flex-1", className)}>
          {children}
        </main>
      </div>
      
      {!showSidebar && <Footer />}
    </div>
  );
};

export default Layout;
