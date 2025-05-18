
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Code, AlertCircle, FileText, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const MrVulnr0 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Meet Mr.Vulnr0</h1>
        <p className="text-xl mb-12">Your AI-Powered Vulnerability Assistant in Action</p>

        {/* Main Demo Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-card rounded-lg border p-4">
              <div className="font-semibold mb-3 text-lg">CONTEXT</div>
              <div className="bg-muted/50 rounded-md p-3 mb-3">
                <div className="font-medium">auth-service</div>
                <div className="text-sm text-muted-foreground">login.js - Currently viewing</div>
              </div>
              
              <div className="bg-muted/50 rounded-md p-3 mb-6">
                <div className="font-medium text-destructive">Vulnerabilities</div>
                <div className="text-sm">3 issues found</div>
              </div>
              
              <div className="font-semibold mb-3 text-lg">CONNECT</div>
              <div className="mb-2 flex items-center gap-2 text-sm">
                <FileText size={16} />
                GitHub
              </div>
              <div className="mb-6 flex items-center gap-2 text-sm">
                <FileText size={16} />
                Pentest Report
              </div>
              
              <div className="font-semibold mb-3 text-lg">ACTIONS</div>
              <div className="mb-2 flex items-center gap-2 text-sm">
                <FileText size={16} />
                Switch File
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText size={16} />
                New Chat
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="space-y-4">
                {/* AI Chat Interface */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="text-primary" size={20} />
                      <div className="font-medium">Mr.Vulnr0</div>
                    </div>
                    <p className="text-sm">Hello! I'm Mr.Vulnr0, your AI vulnerability assistant. How can I help you today?</p>
                  </CardContent>
                </Card>
                
                <div className="flex justify-end">
                  <Card className="bg-primary text-primary-foreground max-w-md">
                    <CardContent className="p-4">
                      <p className="text-sm">I think I have an XSS vulnerability in my login form.</p>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="text-primary" size={20} />
                      <div className="font-medium">Mr.Vulnr0</div>
                      <CheckCircle size={16} className="text-green-500" />
                    </div>
                    <p className="text-sm mb-2">I found the issue in your login.js file. You're not sanitizing user input on line 42. Here's how to fix it securely:</p>
                    <div className="bg-muted rounded-md p-3 mb-3 text-sm font-mono">
                      <div>```javascript</div>
                      <div>const safeInput = DOMPurify.sanitize(userInput);</div>
                      <div>```</div>
                    </div>
                    <p className="text-sm">Would you like me to apply this patch to your code?</p>
                    <div className="flex justify-end mt-2">
                      <Button variant="outline" size="sm">Copy Code</Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Code Display */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-mono text-sm">login.js</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Diff</Button>
                      <Button size="sm">Apply Fix</Button>
                    </div>
                  </div>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0 font-mono text-xs">
                      <pre className="p-4 bg-card border-b">
{`function validateLogin(username, password) {
  // Get user input
  const userInput = document.getElementById('username').value;
  document.getElementById('welcome').innerHTML = 'Welcome, ' + userInput;
  
  // const safeInput = DOMPurify.sanitize(userInput);
  
  // document.getElementById('welcome').textContent = 'Welcome, ' + safeInput;
  
}`}
                      </pre>
                    </CardContent>
                  </Card>
                  
                  <div className="flex justify-between mt-4">
                    <Button variant="outline">Hide Code</Button>
                    <div className="flex gap-2">
                      <Button variant="outline">Previous Issue</Button>
                      <Button variant="outline">Next Issue</Button>
                    </div>
                  </div>
                </div>
                
                {/* Chat Input */}
                <div className="relative mt-6">
                  <input 
                    type="text" 
                    placeholder="Ask me about security vulnerabilities..." 
                    className="w-full rounded-full border px-4 py-3 pr-10"
                  />
                  <Button size="icon" className="absolute right-1 top-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">What Mr.Vulnr0 Can Do — In Action</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Conversational AI Assistant</h3>
                <p className="text-muted-foreground">
                  Users can chat naturally (e.g., "I think I have an XSS vulnerability…"), 
                  and Mr.Vulnr0 responds with technical analysis and remediation guidance.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Auto-Detects Issues in Code</h3>
                <p className="text-muted-foreground">
                  It inspects specific files (e.g., login.js) and pinpoints vulnerabilities
                  like unsanitized user input.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Suggests Secure Fixes</h3>
                <p className="text-muted-foreground">
                  Mr.Vulnr0 recommends security fixes (e.g., using DOMPurify.sanitize) 
                  and explains why the fix is needed.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Inline Code Editing</h3>
                <p className="text-muted-foreground">
                  Shows a code diff highlighting the vulnerable lines and the secure replacement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Controls Section */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">Interactive Fix Controls</h3>
          <p className="mb-4">Users can:</p>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <Code className="text-primary" />
              <span>View differences (View Diff)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-primary" />
              <span>Apply the fix immediately (Apply Fix)</span>
            </li>
            <li className="flex items-center gap-2">
              <AlertCircle className="text-primary" />
              <span>Navigate between issues (Previous Issue / Next Issue)</span>
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-4">Context-Aware Interface</h3>
          <p className="mb-2">Sidebar shows:</p>
          
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Shield className="text-primary" />
              <span>Active file and service context</span>
            </li>
            <li className="flex items-center gap-2">
              <Shield className="text-primary" />
              <span>Connected integrations (GitHub, pentest reports)</span>
            </li>
            <li className="flex items-center gap-2">
              <Shield className="text-primary" />
              <span>Options to start a new chat or switch files</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MrVulnr0;
