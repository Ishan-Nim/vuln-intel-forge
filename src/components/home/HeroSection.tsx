import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, ArrowUpRight } from 'lucide-react';
const HeroSection = () => {
  return <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-[rgba(33,32,32,255)] rounded-sm">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(33,32,32,255)] to-[rgba(48,48,48,255)] pointer-events-none"></div>
      
      {/* Subtle glow behind logo */}
      <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/5 blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with subtle glow */}
          <div className="mx-auto w-32 h-32 mb-10 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg opacity-60"></div>
            <img src="/lovable-uploads/95934007-7a9b-4ece-998f-68e37daf4ec5.png" alt="DNA Logo" className="w-full h-full object-contain relative z-10" />
          </div>
          
          {/* Text content */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-chatgpt-text-dark">
            <span className="text-primary">AI Precision. Human Insight. Safer Code.</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-chatgpt-text-dark">
            Meet <span className="text-primary font-bold">Dr.Vulner 0/1</span> — Your AI-Powered Vulnerability Assistant
          </h2>
          
          <p className="text-lg mb-10 text-chatgpt-text-dark/80 max-w-3xl mx-auto">
            Dr.Vulner0/1 helps developers, bug bounty hunters, and security teams remediate vulnerabilities faster, smarter, and more securely. It combines cutting-edge AI with real-world security data to explain, enrich, and patch code issues — right in your workflow.
          </p>
          
          {/* Beautiful matching buttons with consistent sizing */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="sm" className="h-10 px-6 py-2 bg-gradient-to-r from-primary to-primary/90 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 rounded-md">
              <Link to="/mrvulnr0" className="flex items-center gap-2">
                <Shield size={16} />
                Try Dr.Vulner0/1 Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="h-10 px-6 py-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 rounded-md">
              
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;