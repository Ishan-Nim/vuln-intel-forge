
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import GitHubIntegrationSection from '@/components/home/GitHubIntegrationSection';
import ChatDemoSection from '@/components/home/ChatDemoSection';
import VulnerabilityPreviewSection from '@/components/home/VulnerabilityPreviewSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import CtaSection from '@/components/home/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Apply a class to the body tag for the home page
  useEffect(() => {
    document.body.classList.add('home');
    return () => {
      document.body.classList.remove('home');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[rgba(33,32,32,255)]">
      <main className="flex-1">
        <HeroSection />
        <div className="bg-[rgba(33,32,32,255)]">
          <ChatDemoSection />
          <GitHubIntegrationSection />
          <VulnerabilityPreviewSection />
          <FeaturesSection />
          <HowItWorksSection />
        </div>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
