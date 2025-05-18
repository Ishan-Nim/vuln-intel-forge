
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookText, Users, ListTodo, Palette, Code, Database, Terminal, TestTube2, Rocket, GitBranch, Shield, FileCheck } from 'lucide-react';

const ProjectGuidelines = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BookText className="text-primary" />
          Project Guidelines & Documentation
        </h1>
        <p className="text-muted-foreground mb-8">
          Comprehensive documentation and guidelines for the Dr. 0/1 Vulnerability Analysis Platform.
          This living document serves as the central knowledge base for all project stakeholders.
        </p>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="processes">Processes</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[calc(100vh-300px)]">
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookText className="text-primary" size={20} />
                    Project Overview
                  </CardTitle>
                  <CardDescription>
                    About the Dr. 0/1 Vulnerability Analysis Platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Mission Statement</h3>
                      <p className="text-muted-foreground">
                        The Dr. 0/1 Vulnerability Analysis Platform aims to democratize cybersecurity knowledge by providing 
                        an AI-powered assistant that helps developers identify, understand, and remediate security vulnerabilities 
                        in their code. We strive to make security best practices accessible to developers of all experience levels.
                      </p>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Objectives</h3>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Provide real-time vulnerability analysis through our AI assistant Dr. 0/1</li>
                        <li>Maintain a comprehensive and up-to-date database of known vulnerabilities</li>
                        <li>Foster a community of security-conscious developers</li>
                        <li>Offer educational resources on security best practices</li>
                        <li>Integrate seamlessly with popular development workflows and tools</li>
                      </ul>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Project Scope</h3>
                      <p className="text-muted-foreground mb-4">
                        The platform consists of the following core components:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li><span className="font-medium">AI Assistant (Dr. 0/1)</span>: Interactive chatbot for vulnerability analysis</li>
                        <li><span className="font-medium">Vulnerability Database</span>: Searchable repository of security vulnerabilities</li>
                        <li><span className="font-medium">Community Forum</span>: Knowledge sharing and discussion space</li>
                        <li><span className="font-medium">Educational Resources</span>: Guides, tutorials, and best practices</li>
                        <li><span className="font-medium">API Integration</span>: For connecting with development tools</li>
                      </ul>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium">Frontend</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>React with TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Shadcn UI Components</li>
                            <li>React Router</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Backend</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>Supabase (Auth, Database)</li>
                            <li>Edge Functions</li>
                            <li>OpenAI API Integration</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="text-primary" size={20} />
                    User Personas
                  </CardTitle>
                  <CardDescription>
                    Target users and their specific needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Developer Dana</h3>
                      <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                        <p><span className="font-medium">Role:</span> Full-stack developer at a mid-sized startup</p>
                        <p><span className="font-medium">Experience:</span> 3-5 years in web development</p>
                        <p><span className="font-medium">Goals:</span> Write secure code, quickly identify vulnerabilities before deployment</p>
                        <p><span className="font-medium">Challenges:</span> Limited security expertise, working under tight deadlines</p>
                        <p><span className="font-medium">Needs:</span> Clear, actionable advice for fixing security issues without deep security knowledge</p>
                      </div>
                    </section>
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Security Lead Sam</h3>
                      <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                        <p><span className="font-medium">Role:</span> Security team lead at an enterprise company</p>
                        <p><span className="font-medium">Experience:</span> 7+ years in cybersecurity</p>
                        <p><span className="font-medium">Goals:</span> Enforce security standards across the organization, educate developers</p>
                        <p><span className="font-medium">Challenges:</span> Too many projects to review manually, knowledge gap with developers</p>
                        <p><span className="font-medium">Needs:</span> Tools to scale security reviews, educational resources to share with teams</p>
                      </div>
                    </section>
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Bug Hunter Blake</h3>
                      <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                        <p><span className="font-medium">Role:</span> Freelance security researcher/bug bounty hunter</p>
                        <p><span className="font-medium">Experience:</span> Variable, specializes in finding vulnerabilities</p>
                        <p><span className="font-medium">Goals:</span> Efficiently identify vulnerabilities in applications, stay current on latest threats</p>
                        <p><span className="font-medium">Challenges:</span> Keeping up with emerging vulnerability types, documenting findings clearly</p>
                        <p><span className="font-medium">Needs:</span> Comprehensive vulnerability database, community for knowledge sharing</p>
                      </div>
                    </section>
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Student Steph</h3>
                      <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                        <p><span className="font-medium">Role:</span> Computer science student/junior developer</p>
                        <p><span className="font-medium">Experience:</span> Limited professional experience</p>
                        <p><span className="font-medium">Goals:</span> Learn security best practices, develop secure coding habits early</p>
                        <p><span className="font-medium">Challenges:</span> Limited exposure to real-world security scenarios</p>
                        <p><span className="font-medium">Needs:</span> Educational resources, explanations of vulnerability concepts</p>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ListTodo className="text-primary" size={20} />
                    Feature Specifications
                  </CardTitle>
                  <CardDescription>
                    Detailed features and requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold mb-3">AI Assistant (Dr. 0/1)</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">User Stories</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>As a developer, I want to chat with Dr. 0/1 to get immediate feedback about potential vulnerabilities in my code snippets</li>
                            <li>As a security lead, I want Dr. 0/1 to explain vulnerabilities in detail so I can educate my team</li>
                            <li>As a student, I want to learn from Dr. 0/1 about security best practices and common pitfalls</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Acceptance Criteria</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>Dr. 0/1 should provide responses within 5 seconds for most queries</li>
                            <li>Dr. 0/1 should analyze and identify common vulnerabilities in code snippets</li>
                            <li>Dr. 0/1 should provide remediation steps for identified issues</li>
                            <li>Chat history should be preserved for future reference</li>
                            <li>Interface should be mobile-responsive</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Vulnerability Database</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">User Stories</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>As a security researcher, I want to search for specific vulnerabilities to understand their impact and remediation</li>
                            <li>As a developer, I want to browse vulnerabilities related to my tech stack</li>
                            <li>As a team lead, I want to bookmark critical vulnerabilities for my team to review</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Acceptance Criteria</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>Database should include at least 1000 common vulnerabilities at launch</li>
                            <li>Advanced search with filtering by type, severity, affected technologies</li>
                            <li>Each vulnerability should have detailed explanation, impact, and remediation steps</li>
                            <li>Regular updates with new vulnerabilities (at least weekly)</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Community Forum</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">User Stories</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>As a security enthusiast, I want to discuss emerging threats with peers</li>
                            <li>As a developer, I want to ask questions about specific security challenges I'm facing</li>
                            <li>As an expert, I want to share my knowledge with the community</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Acceptance Criteria</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>Threaded discussions with rich text formatting</li>
                            <li>User reputation system</li>
                            <li>Categories for different security topics</li>
                            <li>Code snippet sharing with syntax highlighting</li>
                            <li>Moderation tools to maintain quality content</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3">API Integration</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">User Stories</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>As a development team, I want to integrate vulnerability checking into our CI/CD pipeline</li>
                            <li>As a developer, I want to access Dr. 0/1 from my IDE</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Acceptance Criteria</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>RESTful API with comprehensive documentation</li>
                            <li>Authentication via API keys</li>
                            <li>Rate limiting and usage tracking</li>
                            <li>Sample integrations for popular CI/CD tools</li>
                            <li>SDK for at least three major programming languages</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technical">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="text-primary" size={20} />
                    Technical Documentation
                  </CardTitle>
                  <CardDescription>
                    API documentation, database schema, and design assets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Palette size={18} />
                        Design Assets
                      </h3>
                      <div className="space-y-4">
                        <h4 className="font-medium">Color Palette</h4>
                        <div className="grid grid-cols-5 gap-2">
                          <div className="flex flex-col items-center">
                            <div className="w-full h-12 bg-primary rounded-md"></div>
                            <span className="text-xs mt-1">Primary</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-full h-12 bg-secondary rounded-md"></div>
                            <span className="text-xs mt-1">Secondary</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-full h-12 bg-accent rounded-md"></div>
                            <span className="text-xs mt-1">Accent</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-full h-12 bg-muted rounded-md"></div>
                            <span className="text-xs mt-1">Muted</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-full h-12 bg-destructive rounded-md"></div>
                            <span className="text-xs mt-1">Destructive</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mt-4">Typography</h4>
                          <div className="space-y-2 mt-2">
                            <p className="text-3xl">Heading 1</p>
                            <p className="text-2xl">Heading 2</p>
                            <p className="text-xl">Heading 3</p>
                            <p className="text-lg">Heading 4</p>
                            <p className="text-base">Body Text</p>
                            <p className="text-sm">Small Text</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mt-4">Design Files</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>UI Kit: Figma (link to design system)</li>
                            <li>Prototype: Figma Interactive Prototype</li>
                            <li>Logo Assets: SVG, PNG formats (various sizes)</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Database size={18} />
                        Database Schema
                      </h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          The application uses a Supabase Postgres database with the following structure:
                        </p>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">users</h4>
                          <ul className="text-sm text-muted-foreground">
                            <li>id: uuid (PK)</li>
                            <li>email: string (unique)</li>
                            <li>created_at: timestamp</li>
                            <li>updated_at: timestamp</li>
                            <li>name: string</li>
                            <li>avatar_url: string (nullable)</li>
                            <li>role: string (default: 'user')</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">chat_sessions</h4>
                          <ul className="text-sm text-muted-foreground">
                            <li>id: uuid (PK)</li>
                            <li>user_id: uuid (FK to users)</li>
                            <li>title: string</li>
                            <li>created_at: timestamp</li>
                            <li>updated_at: timestamp</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">chat_messages</h4>
                          <ul className="text-sm text-muted-foreground">
                            <li>id: uuid (PK)</li>
                            <li>session_id: uuid (FK to chat_sessions)</li>
                            <li>content: text</li>
                            <li>type: string ('user' or 'ai')</li>
                            <li>created_at: timestamp</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">vulnerabilities</h4>
                          <ul className="text-sm text-muted-foreground">
                            <li>id: uuid (PK)</li>
                            <li>title: string</li>
                            <li>description: text</li>
                            <li>severity: string ('low', 'medium', 'high', 'critical')</li>
                            <li>category: string</li>
                            <li>cve_id: string (nullable)</li>
                            <li>remediation: text</li>
                            <li>created_at: timestamp</li>
                            <li>updated_at: timestamp</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Code size={18} />
                        API Documentation
                      </h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          The application exposes the following API endpoints:
                        </p>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Authentication</h4>
                          <div className="space-y-2">
                            <p><span className="font-medium">POST /auth/login</span> - User login</p>
                            <p><span className="font-medium">POST /auth/register</span> - User registration</p>
                            <p><span className="font-medium">POST /auth/logout</span> - User logout</p>
                            <p><span className="font-medium">GET /auth/user</span> - Get current user</p>
                          </div>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Chat</h4>
                          <div className="space-y-2">
                            <p><span className="font-medium">POST /chat</span> - Send message to Dr. 0/1</p>
                            <p><span className="font-medium">GET /chat/sessions</span> - List user's chat sessions</p>
                            <p><span className="font-medium">GET /chat/sessions/:id</span> - Get chat session by ID</p>
                            <p><span className="font-medium">DELETE /chat/sessions/:id</span> - Delete chat session</p>
                          </div>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Vulnerabilities</h4>
                          <div className="space-y-2">
                            <p><span className="font-medium">GET /vulnerabilities</span> - List vulnerabilities</p>
                            <p><span className="font-medium">GET /vulnerabilities/:id</span> - Get vulnerability by ID</p>
                            <p><span className="font-medium">GET /vulnerabilities/search</span> - Search vulnerabilities</p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mt-4">
                          Note: All API endpoints require authentication except for auth/login and auth/register.
                          Full API documentation is available in the OpenAPI format.
                        </p>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="processes">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="text-primary" size={20} />
                    Development Processes
                  </CardTitle>
                  <CardDescription>
                    Environment setup, testing, deployment, and version control
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Terminal size={18} />
                        Environment Setup
                      </h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Follow these steps to set up your local development environment:
                        </p>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Prerequisites</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>Node.js v18+ and npm</li>
                            <li>Git</li>
                            <li>Supabase CLI</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Installation Steps</h4>
                          <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                            <li>Clone the repository: <code>git clone https://github.com/your-org/dr-vulnerbits.git</code></li>
                            <li>Install dependencies: <code>npm install</code></li>
                            <li>Copy .env.example to .env and fill in required values</li>
                            <li>Start development server: <code>npm run dev</code></li>
                            <li>Start Supabase locally: <code>supabase start</code></li>
                          </ol>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Environment Variables</h4>
                          <ul className="text-sm text-muted-foreground">
                            <li><code>SUPABASE_URL</code>: Supabase project URL</li>
                            <li><code>SUPABASE_ANON_KEY</code>: Supabase anonymous key</li>
                            <li><code>OPENAI_API_KEY</code>: OpenAI API key for Dr. 0/1</li>
                            <li><code>NODE_ENV</code>: Environment (development, test, production)</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <TestTube2 size={18} />
                        Testing Guidelines
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Testing Requirements</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>All code must have unit tests with 80%+ coverage</li>
                            <li>Integration tests for all API endpoints</li>
                            <li>End-to-end tests for critical user flows</li>
                            <li>Security-focused tests for authentication and authorization</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Testing Tools</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>Unit Tests: Jest</li>
                            <li>Component Tests: React Testing Library</li>
                            <li>API Tests: Supertest</li>
                            <li>E2E Tests: Cypress</li>
                            <li>Coverage Reporting: Istanbul</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Running Tests</h4>
                          <ul className="text-sm text-muted-foreground">
                            <li><code>npm run test</code>: Run all unit and integration tests</li>
                            <li><code>npm run test:coverage</code>: Run tests with coverage report</li>
                            <li><code>npm run test:e2e</code>: Run end-to-end tests</li>
                            <li><code>npm run test:watch</code>: Run tests in watch mode</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Rocket size={18} />
                        Deployment Instructions
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Environments</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li><span className="font-medium">Development:</span> For active development and testing</li>
                            <li><span className="font-medium">Staging:</span> For pre-release testing and QA</li>
                            <li><span className="font-medium">Production:</span> Live environment for end users</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Deployment Process</h4>
                          <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                            <li>Automated tests must pass in CI pipeline</li>
                            <li>Code review approval required</li>
                            <li>Branch is merged to main</li>
                            <li>CI/CD pipeline builds and deploys to staging</li>
                            <li>QA performs verification tests on staging</li>
                            <li>Production deployment is triggered manually</li>
                          </ol>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Infrastructure</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>Frontend: Vercel</li>
                            <li>Backend: Supabase</li>
                            <li>Edge Functions: Supabase Edge Functions</li>
                            <li>Database: Supabase Postgres</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <GitBranch size={18} />
                        Version Control Practices
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Branching Strategy</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li><span className="font-medium">main:</span> Production-ready code</li>
                            <li><span className="font-medium">develop:</span> Integration branch for features</li>
                            <li><span className="font-medium">feature/[name]:</span> For new features</li>
                            <li><span className="font-medium">bugfix/[name]:</span> For bug fixes</li>
                            <li><span className="font-medium">hotfix/[name]:</span> For urgent production fixes</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Commit Message Convention</h4>
                          <p className="text-muted-foreground mb-2">
                            Follow the Conventional Commits specification:
                          </p>
                          <ul className="text-sm text-muted-foreground">
                            <li><code>feat: add new vulnerability detection feature</code></li>
                            <li><code>fix: resolve issue with chat scrolling</code></li>
                            <li><code>docs: update API documentation</code></li>
                            <li><code>test: add tests for auth middleware</code></li>
                            <li><code>chore: update dependencies</code></li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Code Review Process</h4>
                          <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                            <li>Create pull request from feature branch to develop</li>
                            <li>Automated tests must pass</li>
                            <li>At least one team member must approve changes</li>
                            <li>Address feedback and resolve discussions</li>
                            <li>Squash and merge after approval</li>
                          </ol>
                        </div>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="text-primary" size={20} />
                    Security & Compliance
                  </CardTitle>
                  <CardDescription>
                    Security practices and compliance requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Shield size={18} />
                        Security Practices
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Authentication & Authorization</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>JWT-based authentication with short expiration times</li>
                            <li>Role-based access control (RBAC)</li>
                            <li>Two-factor authentication for admin accounts</li>
                            <li>Password requirements: minimum 12 characters, mix of character types</li>
                            <li>Rate limiting on authentication endpoints</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Data Protection</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>All data encrypted at rest and in transit</li>
                            <li>PII minimization: only collect what's necessary</li>
                            <li>Regular database backups with encryption</li>
                            <li>Data retention policies enforced</li>
                            <li>Secure API keys and secrets management</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Security Testing</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>Regular penetration testing (quarterly)</li>
                            <li>Automated security scanning in CI/CD pipeline</li>
                            <li>Dependency vulnerability scanning</li>
                            <li>Regular security code reviews</li>
                            <li>Bug bounty program for external security researchers</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <FileCheck size={18} />
                        Compliance Requirements
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">GDPR Compliance</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>Right to access personal data</li>
                            <li>Right to be forgotten (data deletion)</li>
                            <li>Data portability</li>
                            <li>Privacy by design and default</li>
                            <li>Data processing records</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">SOC 2 Compliance</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>Access controls</li>
                            <li>Change management</li>
                            <li>Risk management</li>
                            <li>Vendor management</li>
                            <li>Incident response</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Accessibility Requirements</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>WCAG 2.1 AA compliance</li>
                            <li>Keyboard navigation support</li>
                            <li>Screen reader compatibility</li>
                            <li>Adequate color contrast</li>
                            <li>Alternative text for images</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Industry-Specific Requirements</h4>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>Health data: HIPAA compliance</li>
                            <li>Financial data: PCI DSS compliance</li>
                            <li>Government: FedRAMP considerations</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Documentation Maintenance</h3>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-muted-foreground mb-4">
                          Guidelines for maintaining this knowledge base:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground">
                          <li><span className="font-medium">Ownership:</span> Each section has a designated owner responsible for keeping it updated</li>
                          <li><span className="font-medium">Review Cycle:</span> Full documentation review quarterly</li>
                          <li><span className="font-medium">Change Process:</span> Major changes require team review and approval</li>
                          <li><span className="font-medium">Version Control:</span> Documentation is version controlled in the same repository as code</li>
                          <li><span className="font-medium">Automation:</span> API documentation is auto-generated from code where possible</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectGuidelines;
