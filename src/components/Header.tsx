import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Home, LayoutDashboard, Users, HelpCircle, DollarSign, Shield } from "lucide-react";
const Header: React.FC = () => {
  const {
    theme
  } = useTheme();
  const isDarkMode = theme === 'dark';
  const location = useLocation();

  // Check if we're on the Dr.Vulner0/1 page to apply special styling
  const isDrVulner01Page = location.pathname === '/mrvulnr0';
  return <header className={cn("sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
  // Make header more compact on Dr.Vulner0/1 page
  isDrVulner01Page && "h-14")}>
      <div className={cn("container flex items-center justify-between", isDrVulner01Page ? "h-14" : "h-16")}>
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/95934007-7a9b-4ece-998f-68e37daf4ec5.png" alt="DNA Logo" className={cn("w-auto", isDrVulner01Page ? "h-8" : "h-10")} />
            <span className={cn("hidden font-bold md:inline-block", isDrVulner01Page ? "text-lg" : "text-xl")}>Dr.Vulner 𝟶/𝟷</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" icon={<Home size={isDrVulner01Page ? 16 : 18} />}>Home</NavLink>
          <NavLink to="/vulndb" icon={<LayoutDashboard size={isDrVulner01Page ? 16 : 18} />}>Vulnerability Database</NavLink>
          <NavLink to="/mrvulnr0" icon={<Shield size={isDrVulner01Page ? 16 : 18} />}>Dr.Vulner0/1</NavLink>
          <NavLink to="/community" icon={<Users size={isDrVulner01Page ? 16 : 18} />}>Community</NavLink>
          <NavLink to="/about" icon={<HelpCircle size={isDrVulner01Page ? 16 : 18} />}>About</NavLink>
          <NavLink to="/pricing" icon={<DollarSign size={isDrVulner01Page ? 16 : 18} />}>Pricing</NavLink>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNavToggle />
        </div>
      </div>
    </header>;
};
interface NavLinkProps {
  children: React.ReactNode;
  to: string;
  icon?: React.ReactNode;
}
const NavLink: React.FC<NavLinkProps> = ({
  children,
  to,
  icon
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const isDrVulner01Page = location.pathname === '/mrvulnr0';
  return <Link to={to} className={cn("group relative rounded-full transition-all duration-300 flex items-center gap-2", isDrVulner01Page ? "px-3 py-1.5" : "px-4 py-2", isActive ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-accent hover:text-accent-foreground")}>
      {icon}
      <span className={cn("font-medium", isDrVulner01Page ? "text-xs" : "text-sm")}>{children}</span>
      {isActive && <span className="absolute inset-0 rounded-full bg-primary/10 animate-pulse pointer-events-none"></span>}
    </Link>;
};
const MobileNavToggle: React.FC = () => {
  const location = useLocation();
  const isDrVulner01Page = location.pathname === '/mrvulnr0';
  return <Button variant="ghost" size="icon" className="md:hidden" style={isDrVulner01Page ? {
    width: '32px',
    height: '32px'
  } : {}}>
      <span className="sr-only">Toggle Menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" width={isDrVulner01Page ? "20" : "24"} height={isDrVulner01Page ? "20" : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </Button>;
};
export default Header;