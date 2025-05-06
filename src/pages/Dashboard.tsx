
import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AiRequestSection from "@/components/dashboard/AiRequestSection";
import BookingsTab from "@/components/dashboard/BookingsTab";

const Dashboard: React.FC = () => {
  const location = useLocation();
  const { goal } = location.state || {}; 
  
  return (
    <Layout showSidebar>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        
        <AiRequestSection initialGoal={goal} />
        <BookingsTab />
      </div>
    </Layout>
  );
};

export default Dashboard;
