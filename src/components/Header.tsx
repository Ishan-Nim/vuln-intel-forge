
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Home, LayoutDashboard, Users, HelpCircle, DollarSign } from "lucide-react";

const Header: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/d4bb7aa6-ed2f-4e5f-bb96-4815679828fc.png" 
              alt="Dr. VulnerBitz Logo" 
              className="h-10 w-auto" 
            />
            <span className="hidden font-bold text-xl md:inline-block">Dr.VulnerBitz</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" icon={<Home size={18} />}>Home</NavLink>
          <NavLink to="/vulndb" icon={<LayoutDashboard size={18} />}>Vulnerability Database</NavLink>
          <NavLink to="/community" icon={<Users size={18} />}>Community</NavLink>
          <NavLink to="/about" icon={<HelpCircle size={18} />}>About</NavLink>
          <NavLink to="/pricing" icon={<DollarSign size={18} />}>Pricing</NavLink>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNavToggle />
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
  icon?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ children, to, icon }) => {
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className={cn(
        "group relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2",
        isActive 
          ? "bg-primary text-primary-foreground shadow-lg" 
          : "hover:bg-accent hover:text-accent-foreground"
      )}
    >
      {icon}
      <span className="font-medium text-sm">{children}</span>
      {isActive && (
        <span className="absolute inset-0 rounded-full bg-primary/10 animate-pulse pointer-events-none"></span>
      )}
    </Link>
  );
};

const MobileNavToggle: React.FC = () => {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
      <span className="sr-only">Toggle Menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </Button>
  );
};

export default Header;
