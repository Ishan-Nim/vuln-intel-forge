
import React from 'react';

const GitHubIntegrationSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">See Dr.Vulner0/1 In Action</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Experience seamless integration with your code repositories
        </p>
        
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Integrate with your code repositories</h3>
          <p className="text-muted-foreground">
            Dr.Vulner0/1 integrates directly with your GitHub repositories, making it easy to push fixes and pull the latest code directly from our platform. This seamless workflow allows you to identify, fix, and deploy security patches without switching between tools.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary p-1 rounded-full mr-2 mt-0.5">✓</span>
              <span>Connect to public or private repositories</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary p-1 rounded-full mr-2 mt-0.5">✓</span>
              <span>Push security fixes with a single click</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary p-1 rounded-full mr-2 mt-0.5">✓</span>
              <span>Pull the latest code to check for new vulnerabilities</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary p-1 rounded-full mr-2 mt-0.5">✓</span>
              <span>Track your security improvements over time</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GitHubIntegrationSection;
