
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Brain, 
  Code, 
  Users, 
  MessageSquare, 
  FileText, 
  Wrench, 
  Check,
  Github,
  Info,
  Zap,
  Star,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <div className="min-h-screen">
      <main className="container py-12 px-4 md:px-6 max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Dr.Vulner0/1</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI Precision. Human Insight. Safer Code.
          </p>
          <Separator className="my-6" />
          <p className="text-lg max-w-3xl mx-auto">
            At Dr.Vulner0/1, we believe that fixing vulnerabilities should be as intuitive as writing code — fast, clear, and intelligent. 
            That's why we built an AI-powered cybersecurity assistant that merges developer experience with security best practices.
          </p>
        </section>

        {/* Why We Exist */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Why We Exist</h2>
          </div>
          <p className="text-lg">
            Modern development moves fast — but security often lags behind. Vulnerabilities are hard to understand, 
            harder to fix, and time-consuming to track. Dr.Vulner0/1 changes that by putting a smart, context-aware 
            security assistant right where developers work.
          </p>
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">We help developers, security teams, and ethical hackers:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Understand vulnerabilities in human terms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Generate safe, framework-specific code patches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Apply fixes live in the browser</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Learn as they secure their apps</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <div className="bg-primary/10 rounded-lg p-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/95934007-7a9b-4ece-998f-68e37daf4ec5.png" 
                alt="Dr.Vulner0/1 Logo" 
                className="max-h-48 w-auto"
              />
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Wrench className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">What We Do</h2>
          </div>
          <p className="text-lg">
            Dr.Vulner0/1 is not just a chatbot. It's a full-featured platform designed to reduce friction between coding and securing:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                <MessageSquare className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">AI Chat Assistant</h3>
                <p className="text-muted-foreground">Ask questions about your code or CVEs and get expert-level answers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                <Brain className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Vulnerability Intelligence</h3>
                <p className="text-muted-foreground">Enriched CVE database with business and exploit context</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                <Code className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">AI Code Editor</h3>
                <p className="text-muted-foreground">Live-edit and apply patches directly from your browser</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Smart Scanning</h3>
                <p className="text-muted-foreground">Pulls data from pentest reports, GitHub repos, and CVE feeds</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-lg pt-4">
            Everything is built to accelerate secure development, reduce human error, and upskill teams.
          </p>
        </section>

        {/* Who It's For */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Who It's For</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card border rounded-lg p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Developers</h3>
              </div>
              <p>Fixing real-world security issues</p>
            </div>
            <div className="bg-card border rounded-lg p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Bug Bounty Hunters</h3>
              </div>
              <p>Looking to patch, not just report</p>
            </div>
            <div className="bg-card border rounded-lg p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Security Engineers</h3>
              </div>
              <p>Accelerating remediation</p>
            </div>
            <div className="bg-card border rounded-lg p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">AppSec Learners</h3>
              </div>
              <p>Cybersecurity students</p>
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Privacy & Security First</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>No code or report storage — all data processed in memory</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Auto-deletion after each session</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>End-to-end encrypted and OAuth-secured flows</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>AI trained on open-source and vetted vulnerability data only</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Mission */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Join the Mission: Contribute to Dr.Vulner0/1</h2>
          </div>
          <p className="text-lg">
            We're open to contributions from the community. Whether you're a developer, security researcher, 
            bug bounty hunter, or someone passionate about cybersecurity — you can help shape Dr.Vulner0/1.
          </p>

          <div className="pt-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  Why Contribute?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  This isn't just a product — it's a movement. We're building the future of AI-driven 
                  security tools, and that future should be open, inclusive, and driven by community 
                  knowledge. Contributing helps you grow while helping others ship safer code.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">
                  How You Can Help
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-2">
                    <div>
                      <h4 className="text-lg font-medium mb-2">For Developers:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Improve frontend components (React, Vue, Tailwind)</li>
                        <li>Enhance AI prompt workflows</li>
                        <li>Build GitHub, VSCode, or IDE plugins</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">For Security Researchers:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Add exploit examples, CVE insights, or patch patterns</li>
                        <li>Help fine-tune vulnerability detection logic</li>
                        <li>Contribute to the Vuln Intel Forge dataset</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">For Writers & Educators:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Create accessible remediation tutorials</li>
                        <li>Document AI workflows and CVE explanations</li>
                        <li>Help train the next generation of AppSec thinkers</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Love AI? Help Us:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Optimize AI outputs for specific frameworks</li>
                        <li>Design prompt chains for code review and fix validation</li>
                        <li>Contribute to our fine-tuning and safety layer design</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold">
                  Getting Started Is Easy
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2">
                    <li className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Check the GitHub repo for issues and tasks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Join our community (Discord/Slack launching soon)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Code className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Submit pull requests — or just feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Stay in the loop via changelogs and our roadmap</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-6 py-8">
          <h2 className="text-3xl font-bold">Let's Build Safer Software — Together</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We're building something ambitious — and we want you to be part of it. 
            Dr.Vulner0/1 is powered by curiosity, collaboration, and the belief that AI should help
            humans work smarter and safer.
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            Start contributing, keep learning, and let's redefine cybersecurity — one fix at a time.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button className="gap-2">
              <Github className="h-5 w-5" />
              Visit GitHub
            </Button>
            <Button variant="outline" className="gap-2">
              <MessageSquare className="h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
