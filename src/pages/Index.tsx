
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import PopularServices from "@/components/home/PopularServices";
import Mission from "@/components/home/Mission";
import Testimonials from "@/components/home/Testimonials";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <PopularServices />
      <Mission />
      <Testimonials />
    </Layout>
  );
};

export default Index;
