
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { BookText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card p-4 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Dr. 0/1</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm hover:underline">Home</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link to="/vulndb" className="text-sm hover:underline">Vulnerability Database</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link to="/community" className="text-sm hover:underline">Community</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link to="/about" className="text-sm hover:underline">About</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link to="/pricing" className="text-sm hover:underline">Pricing</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link to="/guidelines" className="text-sm hover:underline flex items-center gap-1">
              <BookText size={14} />
              Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
