
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Github, Shield, Code, Layers, Database } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="bg-primary/10 text-primary p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Can Dr.Vulner0/1 Do?</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Your AI-powered tool designed for developers, bug bounty hunters, and security teams who struggle with understanding or fixing vulnerabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FileText />}
            title="Understand Your Pentest Report"
            description="Upload your report and our AI will extract and understand the security issues immediately."
          />
          <FeatureCard 
            icon={<Github />}
            title="Connect Your GitHub Repo"
            description="Securely scan your code with read-only access to find vulnerable patterns."
          />
          <FeatureCard 
            icon={<Shield />}
            title="Find & Explain Vulnerabilities"
            description="Quickly locate vulnerabilities and get clear explanations about security risks."
          />
          <FeatureCard 
            icon={<Code />}
            title="Show How To Fix It"
            description="Get framework-specific secure code examples and patches tailored to your codebase."
          />
          <FeatureCard 
            icon={<Layers />}
            title="AI-Powered Code Editor"
            description="Edit your code securely with real-time AI assistance and guidance."
          />
          <FeatureCard 
            icon={<Database />}
            title="Learn As You Fix"
            description="Understand vulnerabilities better with detailed explanations of causes and solutions."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
