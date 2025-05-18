
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Code, FileText, Github, Database, Layers, CloudUpload } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-accent py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                AI Precision. Human Insight. Safer Code.
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-6">
                Meet <span className="text-primary font-bold">Mr.Vulnr0</span> — Your AI-Powered Vulnerability Assistant
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Mr.Vulnr0 helps developers, bug bounty hunters, and security teams remediate vulnerabilities faster, smarter, and more securely. It combines cutting-edge AI with real-world security data to explain, enrich, and patch code issues — right in your workflow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/vulndb">Explore Vulnerability Database</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Can Mr.Vulnr0 Do?</h2>
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

        {/* How It Works Section */}
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
                description="Mr.Vulnr0 will find the vulnerable code, explain what's wrong, and suggest the fix in your language/framework."
              />
              <StepCard 
                number="4"
                title="Use the AI Code Editor"
                description="Live-edit your code securely in the browser using our built-in AI editor — no setup needed."
              />
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Security First</h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              We do not store your code or reports. Everything is processed securely and deleted automatically after completion.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <SecurityCard 
                title="We Train on Security Knowledge"
                description="We train and support our AI using an open, security-focused vulnerability knowledge base."
              />
              <SecurityCard 
                title="No Data Retention"
                description="Your code and reports are processed in memory and immediately deleted when your session ends."
              />
              <SecurityCard 
                title="About Our Vulnerability Dataset"
                description="We use the Vuln Intel Forge dataset – a continuously updated database of real-world security flaws across multiple stacks."
              />
            </div>

            <div className="bg-card border rounded-lg p-6 mt-12 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-3">Supported Technologies:</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2"><Code size={16} /> JavaScript / Node.js</li>
                <li className="flex items-center gap-2"><Code size={16} /> Python / Django / Flask</li>
                <li className="flex items-center gap-2"><Code size={16} /> PHP / Laravel</li>
                <li className="flex items-center gap-2"><Code size={16} /> Java / Spring</li>
                <li className="flex items-center gap-2"><Code size={16} /> and more...</li>
              </ul>
              <p className="mt-4">
                Each entry is tagged with CVSS scores, examples, affected versions, and secure remediation patterns.
              </p>
              <div className="mt-6 text-center">
                <Button>Visit Vuln Intel Forge</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to secure your code?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Start using Mr.Vulnr0 today and take the first step towards more secure applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/vulndb">Explore Vulnerability Database</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/community">Join Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card p-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Dr.VulnerBitz</p>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
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

// Step Card Component
const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => {
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

// Security Card Component
const SecurityCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="mb-4">
          <Shield className="text-primary w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;
