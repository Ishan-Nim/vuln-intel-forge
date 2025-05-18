
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-accent py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mx-auto w-32 h-32 mb-6">
            <img 
              src="/lovable-uploads/95934007-7a9b-4ece-998f-68e37daf4ec5.png" 
              alt="DNA Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            AI Precision. Human Insight. Safer Code.
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            Meet <span className="text-primary font-bold">Dr.Vulner0/1</span> — Your AI-Powered Vulnerability Assistant
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Dr.Vulner0/1 helps developers, bug bounty hunters, and security teams remediate vulnerabilities faster, smarter, and more securely. It combines cutting-edge AI with real-world security data to explain, enrich, and patch code issues — right in your workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/mrvulnr0">Try Dr.Vulner0/1 Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/vulndb">Explore Vulnerability Database</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
