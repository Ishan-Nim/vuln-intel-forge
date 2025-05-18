
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Users, MessageCircle, Globe, Share2 } from 'lucide-react';

const Community = () => {
  return (
    <div className="container py-8 space-y-10">
      <section className="space-y-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Community</h1>
          <p className="text-muted-foreground text-lg">
            Connect with security experts and share knowledge about vulnerabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <StatCard icon={<Users className="h-8 w-8" />} title="5,200+" description="Security Experts" />
          <StatCard icon={<MessageCircle className="h-8 w-8" />} title="10,000+" description="Forum Posts" />
          <StatCard icon={<Globe className="h-8 w-8" />} title="120+" description="Countries" />
          <StatCard icon={<Share2 className="h-8 w-8" />} title="450+" description="Resources Shared" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">About Dr.Vulner 0/1</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
              <CardDescription>Key capabilities of our platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Dr.Vulner 0/1 is an AI-powered security analysis platform designed to help developers and security teams identify, understand, and fix vulnerabilities in their code. Our system combines advanced machine learning with comprehensive security databases to provide actionable insights.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <FeatureBadge>AI-Powered Analysis</FeatureBadge>
                <FeatureBadge>Real-time Scanning</FeatureBadge>
                <FeatureBadge>Framework-specific Fixes</FeatureBadge>
                <FeatureBadge>Interactive Code Editor</FeatureBadge>
                <FeatureBadge>GitHub Integration</FeatureBadge>
                <FeatureBadge>Learning Resources</FeatureBadge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
              <CardDescription>Under the hood details</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-72">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Component</TableHead>
                      <TableHead>Specification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">AI Model</TableCell>
                      <TableCell>Advanced LLM with security specialization</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Vulnerability Database</TableCell>
                      <TableCell>Real-time synchronized with NVD, CVE, and proprietary sources</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">API Response Time</TableCell>
                      <TableCell>Avg. 250ms</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Vulnerability Detection</TableCell>
                      <TableCell>97.8% accuracy on benchmark tests</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Code Analysis</TableCell>
                      <TableCell>Multi-language support (25+ languages)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Processing</TableCell>
                      <TableCell>Distributed cloud architecture</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Data Security</TableCell>
                      <TableCell>End-to-end encryption with ephemeral storage</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Updates</TableCell>
                      <TableCell>Daily security definition updates</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Join Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CommunityCard 
            title="Forum Discussions"
            description="Participate in technical discussions about the latest security vulnerabilities and fixes."
            action="Join Forum"
          />
          <CommunityCard 
            title="Monthly Webinars"
            description="Learn from security experts in our monthly educational webinars covering emerging threats."
            action="Register"
          />
          <CommunityCard 
            title="Security Resources"
            description="Access our library of guides, checklists, and best practices for secure development."
            action="Browse Resources"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Zero-Day Detection Workshop</CardTitle>
              <CardDescription>June 15, 2025 • Virtual</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Learn techniques for identifying and mitigating zero-day vulnerabilities before they can be exploited. This hands-on workshop will cover the latest threat intelligence and defensive strategies.</p>
              <Badge variant="secondary">Workshop</Badge>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Register Now</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Supply Chain Security Conference</CardTitle>
              <CardDescription>July 8-9, 2025 • New York</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Join industry leaders for an in-depth exploration of supply chain security challenges and solutions. Featuring keynotes, panel discussions, and networking opportunities.</p>
              <Badge variant="secondary">Conference</Badge>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
};

// Helper components
const StatCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="text-center">
    <CardContent className="pt-6">
      <div className="flex justify-center mb-2 text-primary">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const FeatureBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-md text-sm">
    {children}
  </div>
);

const CommunityCard = ({ title, description, action }: { title: string, description: string, action: string }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
    <CardFooter>
      <Button variant="secondary">{action}</Button>
    </CardFooter>
  </Card>
);

export default Community;
