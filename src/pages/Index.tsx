
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import GitHubIntegrationSection from '@/components/home/GitHubIntegrationSection';
import GitHubTerminalSection from '@/components/home/GitHubTerminalSection';
import ChatDemoSection from '@/components/home/ChatDemoSection';
import VulnerabilityPreviewSection from '@/components/home/VulnerabilityPreviewSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import CtaSection from '@/components/home/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <GitHubIntegrationSection />
        <GitHubTerminalSection />
        <ChatDemoSection />
        <VulnerabilityPreviewSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
