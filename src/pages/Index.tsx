
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Code, FileText, Github, Database, Layers, CloudUpload, ArrowRight, CheckCircle } from 'lucide-react';

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
                  <Link to="/mrvulnr0">Try Mr.Vulnr0 Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/vulndb">Explore Vulnerability Database</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Chat Demo Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">See Mr.Vulnr0 In Action</h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Experience how easily our AI assistant identifies, explains, and fixes vulnerabilities in your code
            </p>
            
            <div className="max-w-5xl mx-auto relative">
              <div className="bg-card border rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
                <div className="w-full h-full flex">
                  {/* Left side - Context panel */}
                  <div className="w-1/3 bg-muted/40 border-r p-4 flex flex-col">
                    <h3 className="text-sm font-medium mb-4">CONTEXT</h3>
                    
                    <div className="mb-6">
                      <div className="bg-primary/10 rounded p-3 mb-2">
                        <p className="font-medium text-sm">auth-service</p>
                        <p className="text-xs text-muted-foreground">login.js - Currently viewing</p>
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex items-center text-destructive mb-1">
                          <Shield className="h-4 w-4 mr-1" />
                          <p className="font-medium text-sm">Vulnerabilities</p>
                        </div>
                        <div className="flex items-center gap-1 bg-destructive/10 text-destructive rounded px-2 py-1">
                          <p className="text-xs">3 issues found</p>
                        </div>
                        
                        <div className="mt-4 space-y-2 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="bg-red-500 text-white text-xs px-2 rounded">HIGH</span>
                            <span>Cross-Site Scripting (XSS)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-red-500 text-white text-xs px-2 rounded">HIGH</span>
                            <span>SQL Injection</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-yellow-500 text-white text-xs px-2 rounded">MEDIUM</span>
                            <span>Insecure Direct Object Reference</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - Chat interface */}
                  <div className="w-2/3 flex flex-col">
                    {/* Mr.Vulnr0 message */}
                    <div className="p-4 border-b">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium mb-1">Mr.Vulnr0</p>
                          <p className="text-sm">Hello! I'm Mr.Vulnr0, your AI vulnerability assistant. How can I help you today?</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* User message */}
                    <div className="p-4 border-b bg-primary/5">
                      <div className="ml-auto max-w-md">
                        <p className="text-sm bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none">I think I have an XSS vulnerability in my login form.</p>
                      </div>
                    </div>
                    
                    {/* Mr.Vulnr0 response */}
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-1" />
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">Mr.Vulnr0</p>
                            <span className="bg-green-500/20 text-green-600 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              <span>Found issue</span>
                            </span>
                          </div>
                          
                          <p className="text-sm">I found the issue in your login.js file. You're not sanitizing user input on line 42. Here's how to fix it securely:</p>
                          
                          <div className="bg-card border rounded-md p-3 font-mono text-xs">
                            <pre>{`const safeInput = DOMPurify.sanitize(userInput);`}</pre>
                          </div>
                          
                          <p className="text-sm">Would you like me to apply this patch to your code?</p>
                          
                          <div className="flex gap-2">
                            <Button variant="secondary" size="sm" className="text-xs">Copy Code</Button>
                            <Button size="sm" className="text-xs">Apply Fix</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Code preview */}
                    <div className="p-4 border-t bg-muted/30">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-xs font-mono">login.js</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="text-xs h-7">View Diff</Button>
                          <Button size="sm" className="text-xs h-7">Apply Fix</Button>
                        </div>
                      </div>
                      
                      <div className="bg-card border rounded-md p-4 font-mono text-xs">
                        <pre>{`function validateLogin(username, password) {
  // Get user input
  const userInput = document.getElementById('username').value;
  document.getElementById('welcome').innerHTML = 'Welcome, ' + userInput;

  // const safeInput = DOMPurify.sanitize(userInput);
  // document.getElementById('welcome').textContent = 'Welcome, ' + safeInput;
}`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* Vulnerability Database Preview */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Real-Time Vulnerability Intelligence</h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Access our continuously updated database of real-world security vulnerabilities
            </p>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* CVE Card 1 */}
              <div className="bg-card border rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-2 w-full bg-yellow-500"></div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono bg-muted px-2 py-1 rounded">CVE-2025-4860</span>
                    <div className="flex items-center gap-1">
                      <span className="bg-yellow-500 text-xs text-white px-2 py-0.5 rounded">MEDIUM</span>
                      <span className="text-xs font-mono">CVSS 6.0</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold mb-1">D-Link DAP-2695 DHCPS Cross-Site Scripting Vulnerability</h3>
                  <p className="text-xs text-muted-foreground mb-3">May 18, 2025</p>
                  
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-muted-foreground">AFFECTED PRODUCTS</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">Apache Server 2.4.x</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">Windows 10</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">Ubuntu 20.04 LTS</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-muted-foreground">TECHNICAL ANALYSIS</h4>
                    <p className="text-xs mt-1">This vulnerability allows remote attackers to execute arbitrary code via a crafted HTTP request, related to improper input validation.</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                    View full details
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </div>
              </div>
              
              {/* CVE Card 2 */}
              <div className="bg-card border rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-2 w-full bg-red-500"></div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono bg-muted px-2 py-1 rounded">CVE-2025-4859</span>
                    <div className="flex items-center gap-1">
                      <span className="bg-red-500 text-xs text-white px-2 py-0.5 rounded">CRITICAL</span>
                      <span className="text-xs font-mono">CVSS 9.0</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold mb-1">D-Link DAP-2695 Cross-Site Scripting in MAC Bypass Settings Page</h3>
                  <p className="text-xs text-muted-foreground mb-3">May 18, 2025</p>
                  
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-muted-foreground">AFFECTED PRODUCTS</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">Apache Server 2.4.x</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">Windows 10</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">Ubuntu 20.04 LTS</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-muted-foreground">TECHNICAL ANALYSIS</h4>
                    <p className="text-xs mt-1">This vulnerability allows remote attackers to execute arbitrary code via a crafted HTTP request, related to improper input validation.</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                    View full details
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </div>
              </div>
              
              {/* CVE Card 3 */}
              <div className="bg-card border rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-2 w-full bg-orange-500"></div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono bg-muted px-2 py-1 rounded">CVE-2025-4858</span>
                    <div className="flex items-center gap-1">
                      <span className="bg-orange-500 text-xs text-white px-2 py-0.5 rounded">HIGH</span>
                      <span className="text-xs font-mono">CVSS 7.0</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold mb-1">D-Link ARP Spoofing Prevention Page Cross-Site Scripting Vulnerability</h3>
                  <p className="text-xs text-muted-foreground mb-3">May 18, 2025</p>
                  
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-muted-foreground">AFFECTED PRODUCTS</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">Apache Server 2.4.x</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">Windows 10</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">Ubuntu 20.04 LTS</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-muted-foreground">TECHNICAL ANALYSIS</h4>
                    <p className="text-xs mt-1">This vulnerability allows remote attackers to execute arbitrary code via a crafted HTTP request, related to improper input validation.</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                    View full details
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <Button asChild size="lg">
                <Link to="/vulndb">Explore Full Vulnerability Database</Link>
              </Button>
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

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to secure your code?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Start using Mr.Vulnr0 today and take the first step towards more secure applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/mrvulnr0">Try Mr.Vulnr0 Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/vulndb">Explore Vulnerability Database</Link>
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
