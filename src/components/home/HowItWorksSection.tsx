
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mb-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-accent/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          A simple four-step process to identify and fix vulnerabilities in your code
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StepCard 
            number="1"
            title="Upload Your Pentest Report"
            description="Drag and drop your PDF, DOCX, or TXT pentest report. Our AI will extract and understand the reported issues."
          />
          <StepCard 
            number="2"
            title="Connect Your GitHub Repo"
            description="Allow read-only access to your repository so we can scan your code securely."
          />
          <StepCard 
            number="3"
            title="Fix with AI Guidance"
            description="Dr.Vulner0/1 will find the vulnerable code, explain what's wrong, and suggest the fix in your language/framework."
          />
          <StepCard 
            number="4"
            title="Use the AI Code Editor"
            description="Live-edit your code securely in the browser using our built-in AI editor — no setup needed."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
