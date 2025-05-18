
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate opacity based on scroll position
  const calculateOpacity = () => {
    // Max scroll for full effect (adjust as needed)
    const maxScroll = 300;
    const opacity = Math.min(scrollY / maxScroll, 1);
    return opacity;
  };
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[rgba(33,32,32,255)] rounded-sm">
      {/* Static background */}
      <div className="absolute inset-0 bg-[rgba(33,32,32,255)] pointer-events-none"></div>
      
      {/* Fading gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[rgba(33,32,32,255)] to-[rgba(48,48,48,255)] pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0.8 + calculateOpacity() * 0.2 }}
      ></div>
      
      {/* Animated pulse glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] w-[120%] h-[120%] bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse opacity-30 pointer-events-none"></div>
      </div>
      
      {/* Dotted pattern background */}
      <div className="absolute inset-0 dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIxMC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIyMC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIzMC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI0MC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIwLjUiIGN5PSIxMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIxMC41IiBjeT0iMTAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMjAuNSIgY3k9IjEwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjMwLjUiIGN5PSIxMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI0MC41IiBjeT0iMTAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iNTAuNSIgY3k9IjEwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjAuNSIgY3k9IjIwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjEwLjUiIGN5PSIyMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIyMC41IiBjeT0iMjAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMzAuNSIgY3k9IjIwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjQwLjUiIGN5PSIyMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iMjAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMC41IiBjeT0iMzAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMTAuNSIgY3k9IjMwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjIwLjUiIGN5PSIzMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIzMC41IiBjeT0iMzAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iNDAuNSIgY3k9IjMwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjUwLjUiIGN5PSIzMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIwLjUiIGN5PSI0MC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIxMC41IiBjeT0iNDAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMjAuNSIgY3k9IjQwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjMwLjUiIGN5PSI0MC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI0MC41IiBjeT0iNDAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iNTAuNSIgY3k9IjQwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjAuNSIgY3k9IjUwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjEwLjUiIGN5PSI1MC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIyMC41IiBjeT0iNTAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMzAuNSIgY3k9IjUwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjQwLjUiIGN5PSI1MC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iNTAuNSIgcj0iMC41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mx-auto w-32 h-32 mb-8">
            <img src="/lovable-uploads/95934007-7a9b-4ece-998f-68e37daf4ec5.png" alt="DNA Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-chatgpt-text-dark">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              AI Precision. Human Insight. Safer Code.
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-chatgpt-text-dark">
            Meet <span className="text-primary font-bold">Dr.Vulner 0/1</span> — Your AI-Powered Vulnerability Assistant
          </h2>
          <p className="text-lg mb-8 text-chatgpt-text-dark/80 max-w-3xl mx-auto">
            Dr.Vulner0/1 helps developers, bug bounty hunters, and security teams remediate vulnerabilities faster, smarter, and more securely. It combines cutting-edge AI with real-world security data to explain, enrich, and patch code issues — right in your workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8 py-6 h-auto font-medium">
              <Link to="/mrvulnr0">Try Dr.Vulner0/1 Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 h-auto font-medium bg-transparent dark:bg-transparent dark:text-chatgpt-text-dark dark:border-gray-700 dark:hover:bg-gray-800/30">
              <Link to="/vulndb">Explore Vulnerability Database</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
