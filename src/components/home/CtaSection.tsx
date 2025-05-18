
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-16 bg-card/50 dark:bg-card/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 dark:text-chatgpt-text-dark">Ready to secure your code?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground dark:text-chatgpt-text-dark/80">
          Start using Dr.Vulner0/1 today and take the first step towards more secure applications.
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
    </section>
  );
};

export default CtaSection;
