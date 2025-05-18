
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Sparkles, ArrowUp } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animation completion after component mount
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);
  
  // Calculate opacity based on scroll position
  const calculateOpacity = () => {
    // Max scroll for full effect (adjust as needed)
    const maxScroll = 300;
    const opacity = Math.min(scrollY / maxScroll, 1);
    return opacity;
  };
  
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-[rgba(33,32,32,255)] rounded-sm">
      {/* Static background */}
      <div className="absolute inset-0 bg-[rgba(33,32,32,255)] pointer-events-none"></div>
      
      {/* Fading gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[rgba(33,32,32,255)] to-[rgba(48,48,48,255)] pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0.8 + calculateOpacity() * 0.2 }}
      ></div>
      
      {/* Grid background - creates a subtle tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(90deg,#333_1px,transparent_1px),linear-gradient(180deg,#333_1px,transparent_1px)]" style={{ backgroundSize: '30px 30px' }}></div>
      </div>
      
      {/* Animated pulse glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] w-[120%] h-[120%] bg-gradient-to-br from-primary/10 via-transparent to-primary/10 animate-pulse opacity-40 pointer-events-none"></div>
      </div>
      
      {/* Floating elements in background for added visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Dotted pattern background */}
      <div className="absolute inset-0 dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIxMC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIyMC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIzMC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI0MC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIwLjUiIGN5PSIxMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIxMC41IiBjeT0iMTAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMjAuNSIgY3k9IjEwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjMwLjUiIGN5PSIxMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI0MC41IiBjeT0iMTAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iNTAuNSIgY3k9IjEwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjAuNSIgY3k9IjIwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjEwLjUiIGN5PSIyMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIyMC41IiBjeT0iMjAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMzAuNSIgY3k9IjIwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjQwLjUiIGN5PSIyMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iMjAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMC41IiBjeT0iMzAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMTAuNSIgY3k9IjMwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjIwLjUiIGN5PSIzMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIzMC41IiBjeT0iMzAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iNDAuNSIgY3k9IjMwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjUwLjUiIGN5PSIzMC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIwLjUiIGN5PSI0MC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIxMC41IiBjeT0iNDAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMjAuNSIgY3k9IjQwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjMwLjUiIGN5PSI0MC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI0MC41IiBjeT0iNDAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iNTAuNSIgY3k9IjQwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjAuNSIgY3k9IjUwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjEwLjUiIGN5PSI1MC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSIyMC41IiBjeT0iNTAuNSIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iMzAuNSIgY3k9IjUwLjUiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjQwLjUiIGN5PSI1MC41IiByPSIwLjUiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iNTAuNSIgcj0iMC41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo with enhanced glow effect */}
          <div className="mx-auto w-36 h-36 mb-12 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className={`relative z-10 p-4 rounded-full bg-[rgba(33,32,32,255)]/80 border border-primary/20 transform transition-all duration-700 ${animationComplete ? "scale-100" : "scale-90"}`}>
              <img 
                src="/lovable-uploads/95934007-7a9b-4ece-998f-68e37daf4ec5.png" 
                alt="DNA Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-md animate-pulse"></div>
          </div>
          
          {/* Main heading with improved gradient effect */}
          <h1 className={`text-4xl md:text-6xl font-bold mb-8 text-chatgpt-text-dark relative transform transition-all duration-700 ${animationComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-blue-400 animate-gradient">
              AI Precision. Human Insight. Safer Code.
            </span>
          </h1>
          
          {/* Subheading with animated reveal */}
          <h2 className={`text-xl md:text-3xl font-medium mb-8 text-chatgpt-text-dark relative transform transition-all duration-700 delay-100 ${animationComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            Meet <span className="relative inline-block">
              <span className="text-primary font-bold">Dr.Vulner 0/1</span>
              <span className="absolute -right-3 -top-3 text-primary/80">
                <Sparkles size={16} className="animate-pulse" />
              </span>
            </span> — Your AI-Powered Vulnerability Assistant
          </h2>
          
          {/* Description with staggered reveal */}
          <p className={`text-lg md:text-xl mb-10 text-chatgpt-text-dark/80 max-w-3xl mx-auto transform transition-all duration-700 delay-200 ${animationComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            Dr.Vulner0/1 helps developers, bug bounty hunters, and security teams remediate vulnerabilities faster, smarter, and more securely. It combines cutting-edge AI with real-world security data to explain, enrich, and patch code issues — right in your workflow.
          </p>
          
          {/* CTA buttons with enhanced styling */}
          <div className={`flex flex-wrap justify-center gap-6 transform transition-all duration-700 delay-300 ${animationComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Button 
              asChild 
              size="lg" 
              className="text-base px-8 py-6 h-auto font-medium relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
            >
              <Link to="/mrvulnr0" className="flex items-center gap-2">
                <Shield size={18} />
                Try Dr.Vulner0/1 Now
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-6 h-auto font-medium bg-transparent dark:bg-transparent dark:text-chatgpt-text-dark dark:border-primary/30 dark:hover:bg-primary/10 transition-all duration-300 group"
            >
              <Link to="/vulndb" className="flex items-center gap-2">
                Explore Vulnerability Database
                <ArrowUp size={16} className="transform rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </div>
          
          {/* Optional stat indicators */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto transform transition-all duration-700 delay-400 ${animationComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            {[
              { label: "Vulnerabilities", value: "100,000+" },
              { label: "Security Teams", value: "500+" },
              { label: "Faster Remediation", value: "85%" }
            ].map((stat, index) => (
              <div key={index} className="relative backdrop-blur-sm bg-primary/5 rounded-xl p-4 border border-primary/10">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-chatgpt-text-dark/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
