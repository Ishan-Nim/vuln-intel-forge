
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const CtaSection = () => {
  return <section className="py-16 bg-neutral-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-chatgpt-text-dark">Ready to secure your code?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-chatgpt-text-dark/80">
          Start using Dr.0/1 Beta today and take the first step towards more secure applications.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="text-base px-8 py-6 h-auto font-medium bg-[#10A37F] hover:bg-[#10A37F]/90">
            <Link to="/mrvulnr0">Try Dr.0/1 Beta Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 h-auto font-medium bg-transparent dark:bg-transparent dark:text-chatgpt-text-dark dark:border-gray-700 dark:hover:bg-gray-800/30">
            <Link to="/vulndb">Explore Vulnerability Database</Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default CtaSection;
